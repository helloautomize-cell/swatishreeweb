#!/usr/bin/env node
/*
 * Content audit for the master content file (Part 9 format).
 *
 * Usage: node scripts/audit-content.mjs [path-to-content.md]
 * Default path: resources/docs/new-website-content.md
 *
 * Reports:
 *   - page count ("## Page N") and post count ("## Post N")
 *   - FAQ count (numbered bold questions inside "FAQs" sections)
 *   - every [CONFIRM: ...] token with its page or post
 *   - titles over 60 characters and descriptions over 155 (from the yaml block)
 *   - duplicate urls
 * Exits 1 when the file is missing or required checks fail.
 */

import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const file = resolve(process.argv[2] ?? 'resources/docs/new-website-content.md');

if (!existsSync(file)) {
  console.error(`MISSING: ${file}`);
  console.error('The master content file is required. Audit cannot run.');
  process.exit(1);
}

const lines = readFileSync(file, 'utf8').split(/\r?\n/);

// Split into blocks: preamble + one block per "## Page N" / "## Post N".
const blocks = [];
let current = { kind: 'preamble', label: 'preamble', lines: [] };
blocks.push(current);
for (const line of lines) {
  const m = line.match(/^## (Page|Post) (\d+)/);
  if (m) {
    current = { kind: m[1].toLowerCase(), label: `${m[1]} ${m[2]}`, heading: line, lines: [] };
    blocks.push(current);
  } else {
    current.lines.push(line);
  }
}

const pages = blocks.filter((b) => b.kind === 'page');
const posts = blocks.filter((b) => b.kind === 'post');

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
  // FAQs: numbered bold questions under a "### FAQs" heading or a bare "FAQs:" line.
  let inFaq = false;
  for (const line of block.lines) {
    if (/^#{1,4}\s/.test(line) && !/^#{1,4}\s*FAQs?/i.test(line)) inFaq = false;
    if (/^FAQs?:\s*$/i.test(line.trim()) || /^#{1,4}\s*FAQs?/i.test(line)) inFaq = true;
    else if (inFaq && /^\d+\.\s+\*\*/.test(line)) faqTotal++;
  }

  // [CONFIRM: ...] tokens, with line numbers.
  block.lines.forEach((line, i) => {
    for (const m of line.matchAll(/\[CONFIRM(?::([^\]]*))?\]/g)) {
      confirms.push({ where: block.label, line: i + 1, note: (m[1] ?? '').trim() });
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
console.log(`pages: ${pages.length}   posts: ${posts.length}   faqs: ${faqTotal}`);
console.log(`[CONFIRM] tokens: ${confirms.length}`);
console.log('---');
console.log('[CONFIRM] by theme:');
for (const [theme, list] of [...byTheme.entries()].sort()) {
  console.log(`  ${theme}: ${list.length}`);
}
console.log('---');
console.log('[CONFIRM] tokens (page: note):');
for (const c of confirms) console.log(`  ${c.where}: ${c.note || '(no note)'}`);
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

const fail = longTitles.length + longDescriptions.length + dupUrls.length;
process.exit(fail ? 2 : 0);
