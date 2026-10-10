#!/usr/bin/env node
/*
 * Part 9.1 build checks over resources/content/**.md.
 * Fails the build on: non-unique or over-length titles/descriptions,
 * em/en dashes, internal links that do not resolve, unknown badge slugs.
 * FAQ <-> JSON-LD text equality is guaranteed by construction (both come
 * from the same parse) and verified end-to-end in the Playwright suite.
 *
 * Usage: node scripts/build-check.mjs
 */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { resolve, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIR = join(root, 'resources/content');

const files = [];
(function walk(d) {
  for (const n of readdirSync(d)) {
    const p = join(d, n);
    if (statSync(p).isDirectory()) walk(p);
    else if (n.endsWith('.md')) files.push(p);
  }
})(DIR);

const errors = [];
const pages = [];

for (const f of files) {
  const raw = readFileSync(f, 'utf8');
  const rel = f.slice(DIR.length + 1).replace(/\\/g, '/');
  const fm = raw.match(/^---\n([\s\S]*?)\n---\n/);
  const yaml = fm ? fm[1] : '';
  const get = (k) => {
    const m = yaml.match(new RegExp(`^${k}:\\s*(?:"([^"]*)"|\\[([^\\]]*)\\]|(.*))$`, 'm'));
    if (!m) return undefined;
    const v = m[1] ?? m[2] ?? m[3] ?? '';
    return v.trim();
  };
  const url = get('url');
  const title = get('title');
  const description = get('description');
  const badge = get('badge');

  pages.push({ rel, url, title, description, badge, yaml, raw });

  if (title && title.length > 60) errors.push(`${rel}: title ${title.length} chars (max 60)`);
  if (description && description.length > 155)
    errors.push(`${rel}: description ${description.length} chars (max 155)`);

  // No em or en dashes anywhere in the content file.
  const dashLines = raw.split('\n').filter((l) => /[—–]/.test(l));
  for (const l of dashLines) errors.push(`${rel}: em/en dash in "${l.trim().slice(0, 60)}..."`);
}

// Uniqueness of titles and descriptions.
for (const [key, label] of [['title', 'title'], ['description', 'description']]) {
  const seen = new Map();
  for (const p of pages) {
    const v = p[key];
    if (!v) continue;
    if (seen.has(v)) errors.push(`duplicate ${label}: "${v}" (${seen.get(v)}, ${p.rel})`);
    else seen.set(v, p.rel);
  }
}

// Every internal link resolves to a known url.
const urls = new Set(pages.map((p) => p.url).filter(Boolean));
urls.add('/styleguide/');
urls.delete('/404');
const linkRes = [
  /→\s*(\/[a-z0-9-]+(?:\/[a-z0-9-]+)*\/?)/g, // arrow card links
  /\]\((\/[a-z0-9-/]*)\)/g, // markdown links
];
for (const p of pages) {
  const targets = new Set();
  for (const re of linkRes) for (const m of p.raw.matchAll(re)) targets.add(m[1]);
  const rel = p.yaml.match(/^related:\s*\[([^\]]*)\]/m);
  const posts = p.yaml.match(/^posts:\s*\[([^\]]*)\]/m);
  for (const arr of [rel?.[1], posts?.[1]]) {
    if (arr) for (const u of arr.split(',').map((s) => s.trim())) targets.add(u);
  }
  for (const t of targets) {
    const base = t.split('#')[0];
    if (!base) continue;
    const withSlash = base.endsWith('/') ? base : base + '/';
    if (!urls.has(base) && !urls.has(withSlash))
      errors.push(`${p.rel}: link does not resolve: ${t}`);
  }
}

// Badge slugs must exist in src/lib/service-badges.ts.
const badgesSrc = readFileSync(join(root, 'src/lib/service-badges.ts'), 'utf8');
const badgeKeys = new Set(
  [...badgesSrc.matchAll(/^\s*["']?([a-z0-9-]+)["']?:\s*"badge-/gm)].map((m) => m[1]),
);
for (const p of pages) {
  if (p.badge && !badgeKeys.has(p.badge))
    errors.push(`${p.rel}: unknown badge slug "${p.badge}"`);
}

// Image slots: every badge asset referenced resolves in assets-map or _todo.
const todo = readFileSync(join(root, 'resources/images/_todo.md'), 'utf8');
const assetsMap = JSON.parse(readFileSync(join(root, 'public/images/assets-map.json'), 'utf8'));
for (const p of pages) {
  if (!p.badge) continue;
  const file = badgesSrc.match(new RegExp(`["']?${p.badge}["']?:\\s*"([^"]+)"`))?.[1];
  if (file && !assetsMap[file] && !todo.includes(file))
    errors.push(`${p.rel}: badge asset ${file} missing and not in _todo.md`);
}

if (errors.length) {
  console.error(`build-check: ${errors.length} problem(s)`);
  for (const e of errors.slice(0, 40)) console.error(`  - ${e}`);
  if (errors.length > 40) console.error(`  ... and ${errors.length - 40} more`);
  process.exit(1);
}
console.log(`build-check: OK (${pages.length} content files, ${urls.size} routes)`);
