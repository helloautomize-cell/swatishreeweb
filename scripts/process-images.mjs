#!/usr/bin/env node
/*
 * Image pipeline (master prompt Part 8.1).
 *
 * Reads resources/images/image-manifest.json, processes every file listed
 * under `images`, writes to public/images/.
 *
 * - AVIF and WebP at widths 320, 480, 768, 1028, never wider than the source
 * - quality 80, metadata stripped, sRGB kept
 * - dominant-colour blur placeholder per file
 * - public/images/images-map.json: file -> widths, dims, slots, flags, blur
 * - public/images/alt-text.json: file -> alt text (never from file names)
 * - public/images/_todo.md: missing, interim and restricted slots
 *
 * Never processes _hold/, _reference/, _originals-as-received/ or
 * credentials-reference/. Restricted files ("after permission",
 * "after written approval", "WITH CAUTION", "background removal") are
 * processed into the private preview folder and flagged restricted.
 * C2PA sources are converted normally (credential preservation is not
 * required); originals remain untouched in resources/images/.
 * Brand logo PNGs are copied unprocessed (alpha, full size).
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync, copyFileSync, renameSync } from 'node:fs';
import { dirname, join, basename, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(root, 'resources', 'images');
const OUT = join(root, 'public', 'images');
const PRIVATE = join(root, '.devin', 'image-preview');
const WIDTHS = [320, 480, 768, 1028];
const QUALITY = 80;
const NEVER = ['_hold/', '_reference/', '_originals-as-received/', 'credentials-reference/'];

const manifest = JSON.parse(readFileSync(join(SRC, 'image-manifest.json'), 'utf8'));
const { z } = await import('zod');
const slotSchema = z.object({
  id: z.string().regex(/^[A-Z][0-9]+$/),
  file: z.string().regex(/^[a-z0-9][a-z0-9-]*\.(avif|png|jpg)$/).nullable(),
  placeholder: z.boolean(),
  page: z.string(),
  ratio: z.string().regex(/^[0-9]+:[0-9]+$/),
  illustrative: z.boolean(),
  caption: z.string().nullable(),
  notes: z.string().nullable(),
}).refine((slot) => slot.placeholder === (slot.file === null), 'Placeholder slots must have a null file.');
const validated = z.object({ slots: z.array(slotSchema), badgeOnly: z.array(z.object({ id: z.string(), note: z.string() })) }).parse(manifest);
if (new Set(validated.slots.map((slot) => slot.id)).size !== validated.slots.length) throw new Error('Duplicate image slot.');
const metadataFile = join(root, 'src/lib/image-metadata.json');
const reviewed = existsSync(metadataFile) ? JSON.parse(readFileSync(metadataFile, 'utf8')) : {};
const pageAliases = {
  '/services/cervical-screening-hpv-vaccination/': '/services/cervical-cancer-screening-hpv-vaccination/',
  '/conditions/menopause-perimenopause/': '/conditions/menopause-and-perimenopause/',
};
const entries = validated.slots.map((slot) => ({
  ...slot,
  alt: reviewed[slot.id]?.alt ?? '',
  altApproved: reviewed[slot.id]?.approved === true,
  object_position: reviewed[slot.id]?.objectPosition ?? '50% 50%',
  status: slot.notes ?? '',
  slots: [{ id: slot.id, page: pageAliases[slot.page] ?? slot.page, crop: slot.ratio }],
}));

if (process.argv.includes('--inspect-brand')) {
  for (const file of ['logo-full-transparent.png', 'logo-white-transparent.png', 'logo-mark-transparent.png']) {
    const { width, height } = await sharp(join(SRC, 'brand', file)).metadata();
    console.log(`${file}: ${width}x${height}`);
  }
  process.exit(0);
}

if (process.argv.includes('--review')) {
  const inputs = entries.filter((entry) => entry.file);
  const composite = [];
  for (const [index, entry] of inputs.entries()) {
    const left = (index % 4) * 280;
    const top = Math.floor(index / 4) * 230;
    const thumbnail = await sharp(join(SRC, entry.file)).resize(260, 185, { fit: 'contain', background: '#FFFFFF' }).png().toBuffer();
    composite.push({ input: thumbnail, left: left + 10, top: top + 5 });
    const label = `<svg width="280" height="35"><rect width="280" height="35" fill="#26382C"/><text x="8" y="22" font-size="11" font-family="sans-serif" fill="#FFFFFF">${entry.id}: ${entry.file}</text></svg>`;
    composite.push({ input: Buffer.from(label), left, top: top + 190 });
  }
  await sharp({ create: { width: 1120, height: Math.ceil(inputs.length / 4) * 230, channels: 3, background: '#FFFFFF' } }).composite(composite).png().toFile(join(root, 'phase1-image-review.png'));
  console.log(`Review sheet created for ${inputs.length} images. Source files were not changed.`);
  process.exit(0);
}

if (process.argv.includes('--archive-legacy-output') && existsSync(OUT)) {
  const archive = join(root, '.devin/archive/phase1-public-images-v1');
  if (existsSync(archive)) throw new Error('Legacy output archive already exists; do not overwrite it.');
  mkdirSync(dirname(archive), { recursive: true });
  renameSync(OUT, archive);
  console.log('Legacy public images moved to the private archive.');
}

const isRestricted = (status) =>
  /after[\s\S]{0,60}?(?:permission|approval)|WITH CAUTION|background removal/i.test(status);
const isDevOnly = (status, file) =>
  /DEVELOPMENT ONLY|INTERIM/i.test(`${status} ${file}`);

mkdirSync(OUT, { recursive: true });

const map = {};
const altText = {};
const todo = { missing: [], interim: [], restricted: [], stillNeeded: manifest.missing_and_still_needed ?? [] };

for (const entry of entries) {
  const rel = entry.file;
  if (!rel) {
    todo.missing.push(`${entry.id}: ${entry.page}`);
    map[entry.id] = { missing: true, alt: '', slots: entry.slots, ratio: entry.ratio };
    continue;
  }
  if (NEVER.some((p) => rel.startsWith(p))) continue;

  const src = join(SRC, rel);
  const base = basename(rel, extname(rel));
  const dir = dirname(rel);
  const flags = {
    restricted: isRestricted(entry.status),
    devOnly: isDevOnly(entry.status, rel) || /low res/i.test(entry.status),
  };
  const outDir = join(flags.restricted ? PRIVATE : OUT, dir);
  altText[rel] = entry.alt;

  if (!existsSync(src)) {
    todo.missing.push(rel);
    map[rel] = { missing: true, alt: entry.alt, slots: entry.slots, ...flags };
    continue;
  }
  if (flags.devOnly) todo.interim.push(`${rel} :: ${entry.status}`);
  if (flags.restricted) todo.restricted.push(`${rel} :: ${entry.status}`.trimEnd());
  if (!entry.altApproved) todo.interim.push(`${rel}: draft alt text pending review`);

  mkdirSync(outDir, { recursive: true });
  const meta = await sharp(src).metadata();
  const originalW = meta.autoOrient?.width ?? meta.width;
  const originalH = meta.autoOrient?.height ?? meta.height;
  if (!originalW || !originalH) throw new Error(`Image has no dimensions: ${rel}`);
  const [ratioW, ratioH] = entry.ratio.split(':').map(Number);
  const ratio = ratioW / ratioH;
  const sourceW = Math.min(originalW, Math.floor(originalH * ratio));
  const sourceH = Math.min(originalH, Math.floor(originalW / ratio));
  const [x, y] = entry.object_position.split(' ').map((position) => parseFloat(position) / 100);
  const crop = { left: Math.round((originalW - sourceW) * x), top: Math.round((originalH - sourceH) * y), width: sourceW, height: sourceH };
  const image = sharp(src).rotate().extract(crop).toColorspace('srgb');
  const widths = WIDTHS.filter((w) => w <= sourceW);
  if (widths.length === 0) widths.push(sourceW);

  for (const w of widths) {
    const h = Math.round((sourceH * w) / sourceW);
    await image.clone().resize({ width: w, height: h, withoutEnlargement: true })
      .avif({ quality: QUALITY, effort: 2 }).toFile(join(outDir, `${base}-w${w}.avif`));
    await image.clone().resize({ width: w, height: h, withoutEnlargement: true })
      .webp({ quality: QUALITY }).toFile(join(outDir, `${base}-w${w}.webp`));
  }

  // Dominant-colour blur placeholder: hex plus a tiny blurred webp.
  const stats = await sharp(src).stats();
  const { r, g, b } = stats.dominant;
  const hex = `#${[r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('')}`;
  const tiny = await sharp(src).resize(8, 8, { fit: 'inside' }).webp({ quality: 40 }).toBuffer();

  map[rel] = {
    widths,
    source: { w: sourceW, h: sourceH },
    original: { w: originalW, h: originalH },
    crop,
    id: entry.id,
    alt: entry.alt,
    altApproved: entry.altApproved,
    objectPosition: entry.object_position,
    ratio: entry.ratio,
    caption: entry.caption,
    illustrative: entry.illustrative,
    withheld: flags.restricted,
    treatment: entry.treatment,
    slots: entry.slots,
    blur: { color: hex, dataUrl: `data:image/webp;base64,${tiny.toString('base64')}` },
    ...flags,
  };
}

// Generated assets (resources/assets/*.png -> public/images/assets/).
// Provisional size tiers until asset-manifest.json arrives:
//   badge-* 112/224 (md plus 2x) · spot icons 64/128 · scenes and leads 320/640.
// Transparent PNGs keep alpha; no blur placeholder (dominant colour is
// meaningless on alpha). Alt text waits for asset-manifest.json.
const ASSETS = join(root, 'resources', 'assets');
const assetTodo = [];
if (existsSync(ASSETS)) {
  const assetMap = {};
  const { readdirSync } = await import('node:fs');
  const files = readdirSync(ASSETS).filter((f) => f.endsWith('.png'));
  const tiers = (f) =>
    f.startsWith('badge-') ? [56, 80, 112, 200, 224, 400]
    : /^(why|step|glance|stage|faq|cat|visit)-/.test(f) ? [64, 128]
    : [320, 640];
  for (const f of files) {
    const src = join(ASSETS, f);
    const base = basename(f, '.png');
    const image = sharp(src).rotate().toColorspace('srgb');
    const meta = await image.metadata();
    const sourceW = meta.width ?? 1024;
    const widths = tiers(f).filter((w) => w <= sourceW);
    if (!widths.length) widths.push(sourceW);
    const outDir = join(OUT, 'assets');
    mkdirSync(outDir, { recursive: true });
    for (const w of widths) {
      const h = Math.round(((meta.height ?? sourceW) * w) / sourceW);
      await image.clone().resize({ width: w, height: h, withoutEnlargement: true })
        .avif({ quality: QUALITY, effort: 2 }).toFile(join(outDir, `${base}-w${w}.avif`));
      await image.clone().resize({ width: w, height: h, withoutEnlargement: true })
        .webp({ quality: QUALITY }).toFile(join(outDir, `${base}-w${w}.webp`));
    }
    assetMap[f] = { widths, source: { w: sourceW, h: meta.height ?? sourceW } };
  }
  writeFileSync(join(OUT, 'assets-map.json'), JSON.stringify(assetMap, null, 2));
  if (!existsSync(join(ASSETS, 'asset-manifest.json'))) {
    assetTodo.push('asset-manifest.json pending; alt text and final slots not set for resources/assets/');
  }
}

// Brand logos: copied unprocessed to preserve alpha and full resolution.
const brandDir = join(SRC, 'brand');
if (existsSync(brandDir)) {
  for (const f of ['logo-full-transparent.png', 'logo-white-transparent.png', 'logo-mark-transparent.png']) {
    const from = join(brandDir, f);
    if (existsSync(from)) {
      mkdirSync(join(OUT, 'brand'), { recursive: true });
      copyFileSync(from, join(OUT, 'brand', f));
    }
  }
}

writeFileSync(join(OUT, 'images-map.json'), JSON.stringify(map, null, 2));
writeFileSync(join(OUT, 'alt-text.json'), JSON.stringify(altText, null, 2));

const lines = [
  '# Image todo',
  '',
  `Generated ${new Date().toISOString().slice(0, 10)} by scripts/process-images.mjs.`,
  '',
  '## Missing files (slot has no source)',
  ...(todo.missing.length ? todo.missing.map((f) => `- ${f}`) : ['- none']),
  '',
  '## Interim or development-only files',
  ...(todo.interim.length ? todo.interim.map((f) => `- ${f}`) : ['- none']),
  '',
  '## Restricted (render behind confirm, excluded from production)',
  ...(todo.restricted.length ? todo.restricted.map((f) => `- ${f}`) : ['- none']),
  '',
  '## Still needed from client (manifest missing_and_still_needed)',
  ...(todo.stillNeeded.length ? todo.stillNeeded.map((f) => `- ${f}`) : ['- none']),
  '',
  '## Assets',
  ...(assetTodo.length ? assetTodo.map((f) => `- ${f}`) : ['- none']),
  '',
];
writeFileSync(join(OUT, '_todo.md'), lines.join('\n'));

const processed = Object.values(map).filter((v) => !v.missing).length;
console.log(`processed ${processed} of ${entries.length} manifest slots; unapproved derivatives remain in the private preview folder.`);
console.log(`missing: ${todo.missing.length}, interim: ${todo.interim.length}, restricted: ${todo.restricted.length}`);
