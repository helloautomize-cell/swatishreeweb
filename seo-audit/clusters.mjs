#!/usr/bin/env node
/* Cluster internal-link verification + intro similarity + cannibalisation. */
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
    file: name, cluster: get(y, 'cluster'), pillar: get(y, 'pillar') === 'true',
    title: get(y, 'title'), kw: get(y, 'keywords'),
    links: [
      ...[...body.matchAll(/\]\((\/[a-z0-9-/]+)\)/g)].map((m) => m[1]),
      ...[...body.matchAll(/→\s*(\/[a-z0-9-]+(?:\/[a-z0-9-]+)*\/?)/g)].map((m) => m[1]),
    ],
    postsFm: (get(y, 'posts') ?? '').split(',').map((s) => s.trim()).filter(Boolean),
    lead: body.replace(/\*\*|>|#|- /g, ' ').replace(/\s+/g, ' ').slice(0, 220),
  };
}
const byCluster = {};
for (const [u, p] of Object.entries(posts)) if (p.cluster) (byCluster[p.cluster] ??= []).push(u);
for (const [c, members] of Object.entries(byCluster)) {
  const pillar = members.find((u) => posts[u].pillar);
  const supports = members.filter((u) => u !== pillar);
  console.log(`\nCLUSTER "${c}" pillar=${pillar}`);
  const pl = posts[pillar].links.filter((l) => supports.includes(l));
  const plAll = [...posts[pillar].links, ...posts[pillar].postsFm].filter((l) => supports.includes(l));
  console.log(`  pillar->supports body:${pl.length} total:${plAll.length}/5`);
  if (plAll.length < 5) console.log(`    missing: ${supports.filter((s) => !plAll.includes(s)).join(', ')}`);
  for (const s of supports) {
    const l = [...posts[s].links, ...posts[s].postsFm];
    const toP = l.includes(pillar);
    const sibs = l.filter((x) => supports.includes(x) && x !== s);
    const svc = l.some((x) => /^\/(services|treatments)\//.test(x));
    const doc = l.includes('/dr-swati-shree/');
    console.log(`  ${s}\n    pillar:${toP ? 'Y' : 'N'} siblings:${sibs.length} service/treat:${svc ? 'Y' : 'N'} doctor:${doc ? 'Y' : 'N'}`);
  }
}
// intro similarity: first sentence of each post
console.log('\n== POST INTROS (first ~120 chars of lead) ==');
for (const [u, p] of Object.entries(posts)) console.log(`${u.replace('/blog/', '')}: ${p.lead.slice(0, 130)}`);
