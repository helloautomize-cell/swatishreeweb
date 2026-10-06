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
 * "after written approval", "WITH CAUTION") are processed for development
 * and flagged restricted so launch-check can exclude them.
 * Brand logo PNGs are copied unprocessed (alpha, full size).
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync, copyFileSync } from 'node:fs';
import { dirname, join, basename, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(root, 'resources', 'images');
const OUT = join(root, 'public', 'images');
const WIDTHS = [320, 480, 768, 1028];
const QUALITY = 80;
const NEVER = ['_hold/', '_reference/', '_originals-as-received/', 'credentials-reference/'];

const manifest = JSON.parse(readFileSync(join(SRC, 'image-manifest.json'), 'utf8'));

const isRestricted = (status) =>
  /after[\s\S]{0,60}?(?:permission|approval)|WITH CAUTION/i.test(status);
const isDevOnly = (status, file) =>
  /DEVELOPMENT ONLY|INTERIM/i.test(`${status} ${file}`);

mkdirSync(OUT, { recursive: true });

const map = {};
const altText = {};
const todo = { missing: [], interim: [], restricted: [], stillNeeded: manifest.missing_and_still_needed ?? [] };

for (const entry of manifest.images) {
  const rel = entry.file;
  if (NEVER.some((p) => rel.startsWith(p))) continue;

  const src = join(SRC, rel);
  const base = basename(rel, extname(rel));
  const dir = dirname(rel);
  const outDir = join(OUT, dir);

  const flags = {
    restricted: isRestricted(entry.status),
    devOnly: isDevOnly(entry.status, rel),
  };
  altText[rel] = entry.alt;

  if (!existsSync(src)) {
    todo.missing.push(rel);
    map[rel] = { missing: true, alt: entry.alt, slots: entry.slots, ...flags };
    continue;
  }
  if (flags.devOnly) todo.interim.push(`${rel} :: ${entry.status}`);
  if (flags.restricted) todo.restricted.push(`${rel} :: ${entry.status}`);

  mkdirSync(outDir, { recursive: true });
  const image = sharp(src).rotate().toColorspace('srgb');
  const meta = await image.metadata();
  const sourceW = meta.width ?? 0;
  const sourceH = meta.height ?? 0;
  const widths = WIDTHS.filter((w) => w <= sourceW);
  if (widths.length === 0) widths.push(sourceW);

  for (const w of widths) {
    const h = Math.round((sourceH * w) / sourceW);
    await image.clone().resize({ width: w, height: h, withoutEnlargement: true })
      .avif({ quality: QUALITY }).toFile(join(outDir, `${base}-w${w}.avif`));
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
    alt: entry.alt,
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
    f.startsWith('badge-') ? [112, 224]
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
        .avif({ quality: QUALITY }).toFile(join(outDir, `${base}-w${w}.avif`));
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
console.log(`processed ${processed} of ${manifest.images.length} manifest images`);
console.log(`missing: ${todo.missing.length}, interim: ${todo.interim.length}, restricted: ${todo.restricted.length}`);
