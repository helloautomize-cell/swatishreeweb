#!/usr/bin/env node
/*
 * Split resources/docs/new-website-content.md into resources/content/**.md,
 * one file per page or post (master prompt Part 9.1).
 *
 * Each output file is verbatim source content: the fenced ```yaml block
 * becomes --- frontmatter, the rest of the page is the markdown body.
 * Paths mirror the page url (/services/x/ -> content/services/x.md;
 * / -> content/index.md). A _manifest.json maps file -> page metadata.
 *
 * Usage: node scripts/split-content.mjs [--check]
 *   --check  verify output is up to date without writing
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, statSync, rmSync } from 'node:fs';
import { resolve, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE = join(root, 'resources/docs/new-website-content.md');
const OUT = join(root, 'resources/content');
const checkOnly = process.argv.includes('--check');

const src = readFileSync(SOURCE, 'utf8');
const lines = src.split('\n');

// Find each "## Page N · Name" / "## Post N · Name" boundary.
const pageRe = /^## (Page|Post) (\d+) · (.+?)\s*$/;
const cuts = [];
lines.forEach((line, i) => {
  const m = line.match(pageRe);
  if (m) cuts.push({ line: i, type: m[1].toLowerCase(), num: Number(m[2]), name: m[3] });
});

// Content ends before "# Part 7" (review guide) — not a page.
const endIdx = lines.findIndex((l) => /^# Part 7/.test(l));

const files = [];
for (let c = 0; c < cuts.length; c++) {
  const cut = cuts[c];
  // A page ends at the next page/post heading, the next "# Part" divider, or Part 7.
  let end = c + 1 < cuts.length ? cuts[c + 1].line : endIdx;
  const partIdx = lines.findIndex(
    (l, i) => i > cut.line && i < end && /^# Part /.test(l),
  );
  if (partIdx !== -1) end = partIdx;
  if (end === -1) throw new Error(`No end boundary after ${cut.name}`);
  const block = lines.slice(cut.line + 1, end).join('\n');

  // Extract the fenced yaml block (may be absent: the 404 page).
  const y = block.match(/```yaml\n([\s\S]*?)```/);
  let yaml = y ? y[1].replace(/\s+$/, '\n') : null;
  let body = y ? block.replace(y[0], '') : block;
  // Drop the page separator rule and stray whitespace at the edges.
  body = body.replace(/^\s+/, '').replace(/[\s-]*---\s*$/, '').trimEnd() + '\n';

  const urlM = yaml && yaml.match(/^url:\s*(\S+)\s*$/m);
  const url = urlM ? urlM[1] : cut.num === 14 ? '/404' : null;
  if (!url) throw new Error(`No url in ${cut.name}`);

  const rel = url === '/' ? 'index.md' : url === '/404' ? '404.md' : url.replace(/^\//, '').replace(/\/$/, '') + '.md';
  const file = yaml ? `---\n${yaml}---\n\n${body}` : `${body}`;
  files.push({ rel, file, meta: { type: cut.type, num: cut.num, name: cut.name, url } });
}

const manifest = Object.fromEntries(files.map((f) => [f.rel, f.meta]));

if (checkOnly) {
  const existing = existsSync(OUT)
    ? readdirSync(OUT, { recursive: true }).filter((f) => statSync(join(OUT, f)).isFile())
    : [];
  const expected = new Set(files.map((f) => f.rel.replace(/\//g, '\\')).add('_manifest.json'));
  const ok = files.every((f) => existsSync(join(OUT, f.rel)) && readFileSync(join(OUT, f.rel), 'utf8') === f.file);
  if (!ok || existing.length !== expected.size) {
    console.error('resources/content is stale; run npm run split');
    process.exit(1);
  }
  console.log(`resources/content up to date (${files.length} files)`);
  process.exit(0);
}

if (existsSync(OUT)) rmSync(OUT, { recursive: true, force: true });
for (const f of files) {
  const target = join(OUT, f.rel);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, f.file);
}
writeFileSync(join(OUT, '_manifest.json'), JSON.stringify(manifest, null, 2) + '\n');

const pages = files.filter((f) => f.meta.type === 'page').length;
const posts = files.filter((f) => f.meta.type === 'post').length;
console.log(`Split into ${files.length} files (${pages} pages, ${posts} posts) -> resources/content/`);
if (files.length !== 49) {
  console.error(`Expected 49 files (46 pages + 3 posts), got ${files.length}`);
  process.exit(2);
}
