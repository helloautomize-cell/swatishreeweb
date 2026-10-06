#!/usr/bin/env node
/*
 * Content audit for the master content file (Part 9 format).
 *
 * Usage: node scripts/audit-content.mjs [path-to-content.md]
 * Default path: resources/docs/new-website-content.md
 *
 * Reports:
 *   - page count ("## Page N") and post count ("## Post N")
 *   - YAML block count (one per page and post; the 404 page has none)
 *   - FAQ count: numbered bold questions ending in "?" ("1. **Question?**")
 *   - every [CONFIRM: ...] token with its page or post
 *   - titles over 60 characters and descriptions over 155 (from the yaml block)
 *   - duplicate urls
 * Exits 1 when the file is missing, 2 when checks fail.
 *
 * Expected for the EVE content file: 46 pages, 3 posts, 48 yaml blocks,
 * about 249 FAQs, about 164 [CONFIRM] tokens, 0 over-length fields.
 */

import { readFileSync, existsSync, copyFileSync, mkdirSync, mkdtempSync, readdirSync, rmSync } from 'node:fs';
import { resolve, join, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const prepare = process.argv[2] === '--prepare-resources';

if (prepare) {
  const archive = join(root, 'eve-legacy-phase0-20261006.tar');
  if (!existsSync(archive)) throw new Error('Archive the previous resources before preparation.');
  const copies = [
    ['WINDSURF-MASTER-PROMPT-EVE.md', 'resources/docs/WINDSURF-MASTER-PROMPT-EVE.md'],
    ['README-FOR-WINDSURF.md', 'resources/docs/README-FOR-WINDSURF.md'],
    ['site-plan.md', 'resources/docs/site-plan.md'],
    ['eve-client-data.md', 'resources/docs/eve-client-data.md'],
    ['new-website-content_swati.md', 'resources/docs/new-website-content.md'],
    ['eve-styleguide-final.html', 'resources/reference/eve-styleguide-final.html'],
  ];
  for (const [source, destination] of copies) {
    if (!existsSync(join(root, source))) throw new Error(`Missing source: ${source}`);
    const target = join(root, destination);
    if (existsSync(target) && !readFileSync(target).equals(readFileSync(join(root, source)))) {
      throw new Error(`Canonical copy differs; review before overwriting: ${destination}`);
    }
  }
  const stage = mkdtempSync(join(tmpdir(), 'eve-resources-'));
  try {
    const result = spawnSync('powershell.exe', ['-NoProfile', '-NonInteractive', '-Command', String.raw`
      $ErrorActionPreference = 'Stop'
      Add-Type -AssemblyName System.IO.Compression.FileSystem
      $zip = [System.IO.Compression.ZipFile]::OpenRead($env:EVE_ZIP_SOURCE)
      try {
        $seen = [System.Collections.Generic.HashSet[string]]::new([System.StringComparer]::OrdinalIgnoreCase)
        foreach ($entry in $zip.Entries) {
          if ($entry.FullName -eq 'dist/') { continue }
          if ($entry.FullName -notmatch '^dist/[A-Za-z0-9][A-Za-z0-9_-]*\.(avif|png|jpg|json)$') {
            throw "Unexpected archive path: $($entry.FullName)"
          }
          $name = $entry.FullName.Substring(5)
          if (-not $seen.Add($name)) { throw "Duplicate archive path: $name" }
          [System.IO.Compression.ZipFileExtensions]::ExtractToFile($entry, [System.IO.Path]::Combine($env:EVE_ZIP_STAGE, $name), $false)
        }
      } finally { $zip.Dispose() }
    `], {
      env: { ...process.env, EVE_ZIP_SOURCE: join(root, 'eve-images.zip'), EVE_ZIP_STAGE: stage },
      encoding: 'utf8',
    });
    if (result.error) throw result.error;
    if (result.status !== 0) throw new Error(result.stderr || result.stdout || 'ZIP extraction failed.');
    const names = readdirSync(stage);
    const manifest = JSON.parse(readFileSync(join(stage, 'image-manifest.json'), 'utf8'));
    if (!Array.isArray(manifest.slots) || !Array.isArray(manifest.badgeOnly)) {
      throw new Error('Updated manifest must contain slots and badgeOnly.');
    }
    const files = manifest.slots.filter((slot) => !slot.placeholder).map((slot) => slot.file);
    if (files.length !== 38 || new Set(files).size !== 38 || names.length !== 39) {
      throw new Error('Expected 38 unique images and one manifest in the ZIP.');
    }
    const imageDir = join(root, 'resources/images');
    for (const name of files) {
      if (!names.includes(name)) throw new Error(`Missing ZIP image: ${name}`);
      const target = join(imageDir, name);
      if (existsSync(target) && !readFileSync(target).equals(readFileSync(join(stage, name)))) {
        throw new Error(`Existing image differs; review before overwriting: ${name}`);
      }
    }
    for (const [source, destination] of copies) {
      const target = join(root, destination);
      mkdirSync(dirname(target), { recursive: true });
      copyFileSync(join(root, source), target);
      if (!readFileSync(target).equals(readFileSync(join(root, source)))) {
        throw new Error(`Copy verification failed: ${destination}`);
      }
    }
    for (const name of names) copyFileSync(join(stage, name), join(imageDir, name));
    for (const name of names) {
      if (!readFileSync(join(stage, name)).equals(readFileSync(join(imageDir, name)))) {
        throw new Error(`ZIP copy verification failed: ${name}`);
      }
    }
    console.log(`Verified ${copies.length} canonical document copies and ${files.length} ZIP images plus manifest.`);
  } finally {
    rmSync(stage, { recursive: true, force: true });
  }
}

const file = prepare ? join(root, 'resources/docs/new-website-content.md') : resolve(process.argv[2] ?? join(root, 'resources/docs/new-website-content.md'));

if (!existsSync(file)) {
  console.error(`MISSING: ${file}`);
  console.error('The master content file is required. Audit cannot run.');
  process.exit(1);
}

const lines = readFileSync(file, 'utf8').split(/\r?\n/);

// Split into blocks: preamble + one block per "## Page N" / "## Post N".
const blocks = [];
let current = { kind: 'preamble', label: 'preamble', startLine: 0, lines: [] };
blocks.push(current);
for (const [index, line] of lines.entries()) {
  const m = line.match(/^## (Page|Post) (\d+)/);
  if (m) {
    current = { kind: m[1].toLowerCase(), label: `${m[1]} ${m[2]}`, heading: line, startLine: index + 1, lines: [] };
    blocks.push(current);
  } else if (/^# Part 7\b/.test(line)) {
    current = { kind: 'review', label: 'review guide', startLine: index + 1, lines: [] };
    blocks.push(current);
  } else {
    current.lines.push(line);
  }
}

const pages = blocks.filter((b) => b.kind === 'page');
const posts = blocks.filter((b) => b.kind === 'post');
const yamlCount = blocks.filter((b) => b.kind !== 'preamble' && /```yaml\n[\s\S]*?```/.test(b.lines.join('\n'))).length;

const yamlValue = (block, key) => {
  const text = block.lines.join('\n');
  const yaml = text.match(/```yaml\n([\s\S]*?)```/);
  if (!yaml) return null;
  const row = yaml[1].match(new RegExp(`^${key}:\\s*"?([^"\\n]+)"?\\s*$`, 'm'));
  return row ? row[1].trim() : null;
};

let faqTotal = 0;
const confirms = [];
const longTitles = [];
const longDescriptions = [];
const urls = new Map();

for (const block of blocks) {
  // FAQs: numbered bold questions ending in "?" anywhere in the block.
  for (const line of block.lines) {
    if (/^\d+\.\s+\*\*[^*]*\?\*\*/.test(line)) faqTotal++;
  }

  // [CONFIRM: ...] tokens, with line numbers.
  block.lines.forEach((line, i) => {
    for (const m of line.matchAll(/\[CONFIRM(?::([^\]]*))?\]/g)) {
      confirms.push({ where: block.label, line: block.startLine + i + 1, note: (m[1] ?? '').trim(), kind: block.kind });
    }
  });

  const title = yamlValue(block, 'title');
  const description = yamlValue(block, 'description');
  const url = yamlValue(block, 'url');
  if (title && title.length > 60) longTitles.push({ where: block.label, len: title.length, title });
  if (description && description.length > 155)
    longDescriptions.push({ where: block.label, len: description.length, description });
  if (url) urls.set(url, (urls.get(url) ?? []).concat(block.label));
}

const dupUrls = [...urls.entries()].filter(([, b]) => b.length > 1);

// Group CONFIRM tokens into rough themes for the report.
const themeOf = (note) => {
  const n = note.toLowerCase();
  if (/hour|open|timing|sunday|holiday/.test(n)) return 'hours';
  if (/whatsapp/.test(n)) return 'whatsapp';
  if (/email|privacy contact/.test(n)) return 'email';
  if (/map|coordinate|geo|direction|address|pin/.test(n)) return 'location';
  if (/regist|kmc|art|licen[cs]e/.test(n)) return 'registration';
  if (/year|experience|practice|language|aiims/.test(n)) return 'credentials';
  if (/domain|social|ga4|resend|turnstile/.test(n)) return 'technical';
  return 'other';
};
const byTheme = Map.groupBy(confirms, (c) => themeOf(c.note));

console.log('CONTENT AUDIT');
console.log(`file: ${file}`);
console.log('---');
console.log(`pages: ${pages.length}   posts: ${posts.length}   yaml blocks: ${yamlCount}   faqs: ${faqTotal}`);
console.log(`[CONFIRM] tokens: ${confirms.length} raw; ${confirms.filter((c) => c.kind === 'page' || c.kind === 'post').length} in pages/posts; occurrences are not unique client questions.`);
console.log('---');
console.log('[CONFIRM] by theme:');
for (const [theme, list] of [...byTheme.entries()].sort()) {
  console.log(`  ${theme}: ${list.length}`);
}
console.log('---');
console.log('[CONFIRM] tokens (page: note):');
for (const c of confirms) console.log(`  ${c.where}, line ${c.line}: ${c.note || '(no note)'}`);
console.log('---');
if (longTitles.length) {
  console.log(`titles over 60 chars: ${longTitles.length}`);
  for (const t of longTitles) console.log(`  ${t.where} (${t.len}): ${t.title}`);
} else console.log('titles over 60 chars: none');
if (longDescriptions.length) {
  console.log(`descriptions over 155 chars: ${longDescriptions.length}`);
  for (const d of longDescriptions) console.log(`  ${d.where} (${d.len}): ${d.description}`);
} else console.log('descriptions over 155 chars: none');
if (dupUrls.length) {
  console.log(`duplicate urls: ${dupUrls.length}`);
  for (const [u, b] of dupUrls) console.log(`  ${u} -> ${b.join(', ')}`);
} else console.log('duplicate urls: none');

let fail = longTitles.length + longDescriptions.length + dupUrls.length;

if (file === join(root, 'resources/docs/new-website-content.md')) {
  console.log('---');
  console.log('RESOURCE AUDIT');
  const required = [
    'resources/docs/WINDSURF-MASTER-PROMPT-EVE.md',
    'resources/docs/site-plan.md',
    'resources/docs/new-website-content.md',
    'resources/docs/eve-client-data.md',
    'resources/reference/eve-styleguide-final.html',
    'resources/images/image-manifest.json',
  ];
  for (const name of required) {
    const found = existsSync(join(root, name));
    console.log(`${found ? 'FOUND' : 'MISSING'}: ${name}`);
    if (!found) fail++;
  }
  const planFile = join(root, 'resources/docs/site-plan.md');
  if (existsSync(planFile)) {
    const plan = readFileSync(planFile, 'utf8').split('## 4. Page list')[1]?.split('## 5. Navigation')[0] ?? '';
    const planned = new Set([...plan.matchAll(/`(\/[a-z0-9/-]*)`/g)].map((match) => match[1]));
    const missing = [...planned].filter((url) => !urls.has(url));
    const extra = [...urls.keys()].filter((url) => !planned.has(url));
    console.log(`Route inventory: ${urls.size} explicit content URLs, ${planned.size} site-plan URLs; custom 404 has no URL.`);
    for (const url of missing) console.log(`Missing content URL: ${url}`);
    for (const url of extra) console.log(`Unplanned content URL: ${url}`);
    fail += missing.length + extra.length;
  }
  const manifestFile = join(root, 'resources/images/image-manifest.json');
  if (existsSync(manifestFile)) {
    const manifest = JSON.parse(readFileSync(manifestFile, 'utf8'));
    if (!Array.isArray(manifest.slots) || !Array.isArray(manifest.badgeOnly)) {
      throw new Error('Expected the updated slots/badgeOnly image manifest.');
    }
    const sharp = (await import('sharp')).default;
    console.log(`Image slots: ${manifest.slots.length}; badge-only: ${manifest.badgeOnly.length}.`);
    for (const slot of manifest.slots) {
      if (slot.placeholder) {
        console.log(`PLACEHOLDER ${slot.id}: ${slot.page}`);
        continue;
      }
      if (typeof slot.file !== 'string' || !/^[A-Za-z0-9][A-Za-z0-9_-]*\.(avif|png|jpg)$/.test(slot.file)) {
        throw new Error(`Unsafe or missing manifest file: ${slot.id}`);
      }
      const source = join(root, 'resources/images', slot.file);
      if (!existsSync(source)) {
        console.log(`MISSING ${slot.id}: ${slot.file}`);
        fail++;
        continue;
      }
      const metadata = await sharp(source).metadata();
      console.log(`FOUND ${slot.id}: ${slot.file}; ${metadata.width}x${metadata.height}; alpha=${Boolean(metadata.hasAlpha)}; illustrative=${slot.illustrative}`);
      if (slot.notes) console.log(`  Note: ${slot.notes}`);
      if (!slot.alt) console.log('  Pending: approved alt text.');
      if (slot.illustrative && slot.caption !== 'Illustrative image') {
        console.log('  Invalid: missing illustrative caption.');
        fail++;
      }
      const pageUrl = slot.page.match(/^\/[a-z0-9/-]*/)?.[0];
      if (pageUrl && !urls.has(pageUrl)) {
        console.log(`  Page mapping needs reconciliation: ${pageUrl}`);
      }
      const [ratioWidth, ratioHeight] = slot.ratio.split(':').map(Number);
      if (Math.abs(metadata.width / metadata.height - ratioWidth / ratioHeight) > 0.02) {
        console.log(`  Crop needed: source proportions differ from the ${slot.ratio} slot.`);
      }
    }
  }
  for (const name of ['resources/docs/credentials-facts.md', 'resources/docs/IMAGE-MAP.md']) {
    console.log(`${existsSync(join(root, name)) ? 'FOUND' : 'MISSING'} supporting reference: ${name}`);
  }
  for (const name of ['logo-full-transparent.png', 'logo-white-transparent.png', 'logo-mark-transparent.png']) {
    console.log(`${existsSync(join(root, 'resources/images/brand', name)) ? 'FOUND' : 'MISSING'} retained logo: ${name}`);
  }
  const assets = join(root, 'resources/assets');
  const assetFiles = existsSync(assets) ? readdirSync(assets).filter((name) => name.endsWith('.png')).sort() : [];
  console.log(`Retained PNG assets: ${assetFiles.length}`);
  for (const name of assetFiles) console.log(`  ${name}`);
  console.log(`${existsSync(join(assets, 'asset-manifest.json')) ? 'FOUND' : 'PENDING'}: resources/assets/asset-manifest.json`);
  console.log('Legacy app and public image output are unchanged; image pipeline adaptation is deferred to Phase 1.');
}

process.exit(fail ? 2 : 0);
