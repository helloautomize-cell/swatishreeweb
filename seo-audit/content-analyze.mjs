#!/usr/bin/env node
/* Content-side analysis: clusters, FAQs, AI tells, CONFIRMs, link graph. */
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const walk = (d) => readdirSync(d, { withFileTypes: true }).flatMap((e) =>
  e.isDirectory() ? walk(join(d, e.name)) : e.name.endsWith('.md') ? [join(d, e.name)] : []);
const files = walk('resources/content');

const get = (yaml, k) => {
  const m = yaml.match(new RegExp(`^${k}:\\s*(?:"([^"]*)"|\\[([^\\]]*)\\]|(.*))$`, 'm'));
  return m ? (m[1] ?? m[2] ?? m[3] ?? '').trim() : undefined;
};

const pages = [];
for (const f of files) {
  const raw = readFileSync(f, 'utf8');
  const fm = raw.match(/^---\n([\s\S]*?)\n---\n/);
  const yaml = fm ? fm[1] : '';
  const body = fm ? raw.slice(fm[0].length) : raw;
  const rel = f.replace(/\\/g, '/').replace('resources/content/', '');
  pages.push({
    rel, raw, body, yaml,
    url: get(yaml, 'url'),
    title: get(yaml, 'title'),
    cluster: get(yaml, 'cluster'),
    pillar: get(yaml, 'pillar'),
    datePublished: get(yaml, 'datePublished'),
    dateModified: get(yaml, 'dateModified'),
    lastReviewed: get(yaml, 'lastReviewed'),
    related: (get(yaml, 'related') ?? '').split(',').map((s) => s.trim()).filter(Boolean),
    posts: (get(yaml, 'posts') ?? '').split(',').map((s) => s.trim()).filter(Boolean),
  });
}

/* ---- 1. Clusters ---- */
const clusters = {};
for (const p of pages.filter((p) => p.cluster)) (clusters[p.cluster] ??= []).push(p);
console.log('== CLUSTERS ==');
for (const [c, arr] of Object.entries(clusters)) {
  const pillar = arr.find((p) => p.pillar === 'true');
  console.log(`\n"${c}": ${arr.length} posts, pillar: ${pillar?.url ?? 'NONE'}`);
  for (const p of arr) console.log(`   ${p.pillar === 'true' ? '*' : ' '} ${p.url}`);
}

/* ---- 2. FAQ extraction (same algo as loader) ---- */
console.log('\n== FAQ COUNTS ==');
for (const p of pages) {
  const faqSections = p.body.split(/^### (.+)$/m);
  let qs = 0, lens = [];
  for (let i = 1; i + 1 < faqSections.length; i += 2) {
    if (!/^(quick answers|faqs?|common questions)/i.test(faqSections[i].trim())) continue;
    const parts = faqSections[i + 1].split(/^(\d+)\.\s+\*\*/m);
    for (let j = 1; j + 1 < parts.length; j += 2) {
      const chunk = parts[j + 1];
      const close = chunk.indexOf('**');
      if (close === -1) continue;
      const a = chunk.slice(close + 2).replace(/<[^>]+>/g, ' ').replace(/\[[^\]]*\]\([^)]*\)/g, ' ');
      lens.push(a.split(/\s+/).filter(Boolean).length);
      qs++;
    }
  }
  if (qs) console.log(`${String(qs).padStart(2)} faqs ${p.url}  answerLens:[${[...lens].sort((a, b) => a - b).join(',')}]`);
}

/* ---- 3. AI tells ---- */
const TELLS = [
  'delve', 'tapestry', 'realm', 'landscape', 'navigate', 'embark', 'journey', 'unlock', 'elevate',
  'empower', 'seamless', 'robust', 'pivotal', 'crucial', 'vital', 'myriad', 'testament', 'holistic',
  'game-changer', "in today's fast-paced world", "it's important to note", 'when it comes to',
  'comprehensive guide', 'in conclusion', "here's the thing", 'that said', 'the reality is',
  'genuinely', 'nuanced', 'the bottom line', 'whether you', "it's not just", 'not only.*but also',
];
console.log('\n== AI TELLS (content body, case-insensitive) ==');
const tellHits = {};
for (const p of pages) {
  for (const t of TELLS) {
    const re = new RegExp(`\\b${t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i');
    if (re.test(p.body)) (tellHits[t] ??= []).push(p.rel);
  }
}
for (const [t, arr] of Object.entries(tellHits)) console.log(`  "${t}": ${arr.length}x -> ${arr.slice(0, 5).join(', ')}${arr.length > 5 ? '...' : ''}`);

/* Title Case headings & emoji */
console.log('\n== TITLE-CASE H3s / EMOJI ==');
for (const p of pages) {
  const bad = [...p.body.matchAll(/^### (.+)$/gm)].filter((m) => {
    const w = m[1].replace(/[(),:;'"?!]/g, '').split(' ').filter((x) => x.length > 3);
    const caps = w.filter((x) => /^[A-Z]/.test(x)).length;
    return w.length >= 4 && caps / w.length > 0.85;
  });
  if (bad.length) console.log(`  ${p.rel}: ${bad.length} title-case h3: ${bad.slice(0, 2).map((m) => m[1]).join(' | ')}`);
  const emoji = p.body.match(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu);
  if (emoji) console.log(`  ${p.rel}: emoji ${emoji.slice(0, 5).join('')}`);
}

/* ---- 4. CONFIRM/date placeholders ---- */
console.log('\n== PLACEHOLDERS ==');
for (const p of pages) {
  const conf = (p.raw.match(/\[CONFIRM[^\]]*\]/g) ?? []).length;
  const dates = (p.raw.match(/\[date\]/gi) ?? []).length;
  if (conf || dates) console.log(`  ${p.rel}: CONFIRM x${conf}${dates ? ` [date] x${dates}` : ''}`);
}

/* ---- 5. datePublished state ---- */
console.log('\n== datePublished CONFIRM on posts ==');
const confPosts = pages.filter((p) => p.url?.startsWith('/blog/') && p.url !== '/blog/' && (p.datePublished ?? '').includes('CONFIRM'));
console.log(`  ${confPosts.length} posts: ${confPosts.map((p) => p.rel).join(', ')}`);

/* ---- 6. when-to-see-a-doctor on condition pages ---- */
console.log('\n== WHEN TO SEE A DOCTOR ==');
for (const p of pages.filter((p) => /^\/(conditions)\/[^/]/.test(p.url ?? ''))) {
  const has = /when to (see|call|get|seek|visit)|seek (urgent|medical)|see a (doctor|specialist|gynaecologist)/i.test(p.body);
  console.log(`  ${has ? 'YES' : 'NO '} ${p.url}`);
}

/* ---- 7. Link graph: depth + orphans ---- */
const crawl = JSON.parse(readFileSync('seo-audit/crawl.json', 'utf8'));
const incoming = new Map();
for (const p of crawl) for (const l of new Set(p.intLinks)) {
  const base = l.split('#')[0];
  if (!base) continue;
  const u = base.endsWith('/') ? base : base + '/';
  incoming.set(u, (incoming.get(u) ?? 0) + 1);
}
console.log('\n== ORPHANS (0 incoming content links) ==');
for (const p of crawl) if (!incoming.has(p.url) && p.url !== '/') console.log(`  ${p.url}`);
console.log('\n== depth from home (BFS) ==');
const adj = new Map(crawl.map((p) => [p.url, new Set(p.intLinks.map((l) => { const b = l.split('#')[0]; return b ? (b.endsWith('/') ? b : b + '/') : null; }).filter(Boolean))]));
const depth = new Map([['/', 0]]);
const q = ['/'];
while (q.length) {
  const u = q.shift();
  for (const v of adj.get(u) ?? []) if (!depth.has(v)) { depth.set(v, depth.get(u) + 1); q.push(v); }
}
const deep = crawl.filter((p) => (depth.get(p.url) ?? 99) > 3);
console.log(`  pages >3 clicks deep: ${deep.length}`);
deep.forEach((p) => console.log(`    depth ${depth.get(p.url)}: ${p.url}`));
const unreachable = crawl.filter((p) => !depth.has(p.url));
unreachable.forEach((p) => console.log(`    UNREACHABLE: ${p.url}`));

/* ---- 8. external links ---- */
console.log('\n== EXTERNAL LINK DOMAINS ==');
const ext = {};
for (const p of crawl) for (const l of p.extLinks) {
  try { const h = new URL(l).hostname; (ext[h] ??= new Set()).add(p.url); } catch {}
}
for (const [h, s] of Object.entries(ext).sort((a, b) => b[1].size - a[1].size)) console.log(`  ${h}: ${s.size} pages`);
