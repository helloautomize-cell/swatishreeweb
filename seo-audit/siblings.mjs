#!/usr/bin/env node
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
const dir = 'resources/content/blog';
const get = (y, k) => {
  const m = y.match(new RegExp(`^${k}:\\s*(?:"([^"]*)"|\\[([^\\]]*)\\]|(.*))$`, 'm'));
  return m ? (m[1] ?? m[2] ?? m[3] ?? '').trim() : undefined;
};
const posts = {};
for (const name of readdirSync(dir).filter((n) => n.endsWith('.md'))) {
  const raw = readFileSync(join(dir, name), 'utf8');
  const fm = raw.match(/^---\n([\s\S]*?)\n---\n/);
  const y = fm ? fm[1] : '';
  const body = fm ? raw.slice(fm[0].length) : raw;
  posts[get(y, 'url')] = {
    cluster: get(y, 'cluster'),
    links: [
      ...[...body.matchAll(/\]\((\/[a-z0-9-/]+)\)/g)].map((m) => m[1]),
      ...[...body.matchAll(/→\s*(\/[a-z0-9-]+(?:\/[a-z0-9-]+)*\/?)/g)].map((m) => m[1]),
    ],
    rel: (get(y, 'related') ?? '').split(',').map((s) => s.trim()).filter(Boolean),
    pf: (get(y, 'posts') ?? '').split(',').map((s) => s.trim()).filter(Boolean),
  };
}
const byC = {};
for (const [u, p] of Object.entries(posts)) if (p.cluster) (byC[p.cluster] ??= []).push(u);
const issues = [];
for (const [c, members] of Object.entries(byC)) {
  const pillar = members.find((u) => posts[u].pillar);
  const supports = members.filter((u) => u !== pillar);
  for (const s of supports) {
    const all = new Set([...posts[s].links, ...posts[s].rel, ...posts[s].pf]);
    const sib = [...all].filter((x) => supports.includes(x) && x !== s).length;
    const svc = [...all].filter((x) => /^\/(services|treatments)\//.test(x)).length;
    const cond = [...all].filter((x) => /^\/conditions\//.test(x)).length;
    if (sib < 2 || svc === 0) issues.push({ s, c, sib, svc, cond });
  }
}
console.log(`supports with <2 siblings or 0 service/treatment links: ${issues.length}`);
issues.forEach((i) => console.log(`  ${i.s}  sib:${i.sib} svc:${i.svc} cond:${i.cond}`));
// unclustered posts
const un = Object.entries(posts).filter(([, p]) => !p.cluster).map(([u]) => u);
console.log('\nunclustered posts:', un.join(', '));
