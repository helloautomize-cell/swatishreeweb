#!/usr/bin/env node
/* Emit audit.json (machine-readable issues) and the page table for the report. */
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const crawl = JSON.parse(readFileSync('seo-audit/crawl.json', 'utf8'));

const dir = 'resources/content/blog';
const get = (y, k) => {
  const m = y.match(new RegExp(`^${k}:\\s*(?:"([^"]*)"|\\[([^\\]]*)\\]|(.*))$`, 'm'));
  return m ? (m[1] ?? m[2] ?? m[3] ?? '').trim() : undefined;
};
const meta = {};
for (const name of readdirSync(dir).filter((n) => n.endsWith('.md'))) {
  const raw = readFileSync(join(dir, name), 'utf8');
  const y = (raw.match(/^---\n([\s\S]*?)\n---\n/) || [])[1] ?? '';
  meta[get(y, 'url')] = { cluster: get(y, 'cluster'), pillar: get(y, 'pillar') === 'true', kw: get(y, 'keywords'), datePublished: get(y, 'datePublished') };
}
// detail/condition/service pages meta
for (const sub of ['conditions', 'services', 'treatments']) {
  for (const name of readdirSync(`resources/content/${sub}`).filter((n) => n.endsWith('.md'))) {
    const raw = readFileSync(`resources/content/${sub}/${name}`, 'utf8');
    const y = (raw.match(/^---\n([\s\S]*?)\n---\n/) || [])[1] ?? '';
    meta[get(y, 'url')] = { kind: sub.slice(0, -1) };
  }
}

const typeOf = (u) =>
  u === '/' ? 'home' : u === '/blog/' ? 'blog index' : u.startsWith('/blog/') ? (meta[u]?.pillar ? 'pillar' : 'support') : /^\/(services|treatments|conditions)\/$/.test(u) ? 'hub' : /^\/(services|treatments|conditions)\//.test(u) ? meta[u]?.kind ?? 'detail' : 'core/legal';

const pageTable = crawl.map((p) => ({
  url: p.url,
  type: typeOf(p.url),
  cluster: meta[p.url]?.cluster ?? '-',
  titleLen: p.titleLen,
  descLen: p.descLen,
  byline: p.hasWrittenBy ? 'Y' : '-',
  dates: p.hasPublished || p.hasUpdated ? 'Y' : '-',
  faqSchema: p.ldTypes.includes('FAQPage') ? 'Y' : '-',
  breadcrumb: p.hasBreadcrumb ? 'Y' : '-',
  intIn: 0,
  intOut: new Set(p.intLinks).size,
  words: p.wordCount,
}));
const incoming = new Map();
for (const p of crawl) for (const l of new Set(p.intLinks)) { const b = l.split('#')[0]; if (!b) continue; const u = b.endsWith('/') ? b : b + '/'; incoming.set(u, (incoming.get(u) ?? 0) + 1); }
for (const r of pageTable) r.intIn = incoming.get(r.url) ?? 0;

writeFileSync('seo-audit/page-table.json', JSON.stringify(pageTable, null, 1));
console.log('page-table.json written:', pageTable.length, 'rows');
