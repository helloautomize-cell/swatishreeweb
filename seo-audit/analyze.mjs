#!/usr/bin/env node
/* Analyse seo-audit/crawl.json against the checklist and print findings. */
import { readFileSync } from 'node:fs';
const pages = JSON.parse(readFileSync('seo-audit/crawl.json', 'utf8'));
const F = [];
const note = (id, sev, msg) => F.push({ id, sev, msg });

// Global checks
for (const p of pages) {
  const u = p.url;
  if (p.status !== 200) note('STATUS', 'P0', `${u} -> ${p.status}`);
  if (p.lang !== 'en-IN') note('LANG', 'P1', `${u} lang=${p.lang}`);
  if (!p.canonical) note('CANON-MISSING', 'P0', `${u} no canonical`);
  else if (!p.canonical.startsWith('https://')) note('CANON-REL', 'P0', `${u} canonical not absolute: ${p.canonical}`);
  else if (new URL(p.canonical).pathname !== u) note('CANON-MISMATCH', 'P1', `${u} canonical -> ${p.canonical}`);
  if (p.metaRobots && /noindex/.test(p.metaRobots)) note('NOINDEX', 'P0', `${u} meta robots ${p.metaRobots}`);
  if (p.xrobots && /noindex/.test(p.xrobots)) note('XROBOTS', 'P0', `${u} X-Robots-Tag ${p.xrobots}`);
  if (p.h1count !== 1) note('H1', 'P1', `${u} h1count=${p.h1count}`);
  if (!p.title) note('TITLE-MISSING', 'P0', `${u}`);
  else if (p.titleLen < 40 || p.titleLen > 60) note('TITLE-LEN', 'P2', `${u} title ${p.titleLen} chars: ${p.title}`);
  if (!p.desc) note('DESC-MISSING', 'P0', `${u}`);
  else if (p.descLen < 120 || p.descLen > 160) note('DESC-LEN', 'P2', `${u} desc ${p.descLen} chars`);
  if (!p.ogTitle || !p.ogImage) note('OG', 'P2', `${u} og:title=${!!p.ogTitle} og:image=${!!p.ogImage}`);
  if (!p.twCard) note('TW', 'P3', `${u} no twitter card`);
  if (u !== '/' && !p.hasBreadcrumb) note('BREADCRUMB', 'P2', `${u} no visible breadcrumb`);
  const imgs = p.imgs.filter((i) => i.nextImage || i.src?.startsWith('/'));
  const noAlt = imgs.filter((i) => i.alt === null || i.alt === '');
  const noWH = imgs.filter((i) => !i.hasWH);
  if (noAlt.length) note('IMG-ALT', 'P1', `${u}: ${noAlt.length} img missing/empty alt`);
  if (noWH.length) note('IMG-WH', 'P2', `${u}: ${noWH.length} img missing width/height`);
  if (p.wordCount < 300) note('THIN', 'P2', `${u} only ~${p.wordCount} words`);
}

// Uniqueness of titles and descriptions
const seenT = new Map(), seenD = new Map();
for (const p of pages) {
  if (p.title) { if (seenT.has(p.title)) note('TITLE-DUP', 'P1', `"${p.title}" on ${seenT.get(p.title)} & ${p.url}`); else seenT.set(p.title, p.url); }
  if (p.desc) { if (seenD.has(p.desc)) note('DESC-DUP', 'P1', `dup desc on ${seenD.get(p.desc)} & ${p.url}`); else seenD.set(p.desc, p.url); }
}

// Schema expectations per page type
for (const p of pages) {
  const t = p.ldTypes.join(',');
  const isPost = p.url.startsWith('/blog/') && p.url !== '/blog/';
  const isDetail = /^\/(services|treatments|conditions)\/[^/]/.test(p.url);
  if (isPost) {
    if (!/BlogPosting/.test(t)) note('SCHEMA-POST', 'P1', `${p.url} no BlogPosting`);
    if (!p.hasWrittenBy) note('BYLINE', 'P1', `${p.url} no "Written by"`);
    if (!p.hasReviewedBy) note('REVIEWER', 'P1', `${p.url} no "Medically reviewed by"`);
    if (!p.hasPublished && !p.hasUpdated) note('DATES', 'P1', `${p.url} no visible dates`);
  }
  if (isDetail && !/MedicalWebPage|MedicalCondition|MedicalProcedure|MedicalTherapy|MedicalTest/.test(t))
    note('SCHEMA-DETAIL', 'P2', `${p.url} types: ${t}`);
}

// Aggregate stats
const stats = {
  total: pages.length,
  titleBad: pages.filter((p) => p.titleLen < 40 || p.titleLen > 60).length,
  descBad: pages.filter((p) => p.descLen < 120 || p.descLen > 160).length,
  h1Bad: pages.filter((p) => p.h1count !== 1).length,
  faqSchemaPages: pages.filter((p) => /FAQPage/.test(p.ldTypes.join())).length,
  posts: pages.filter((p) => p.url.startsWith('/blog/') && p.url !== '/blog/').length,
  thin: pages.filter((p) => p.wordCount < 300).length,
};
console.log(JSON.stringify(stats, null, 1));
console.log('---FINDINGS---');
const byId = {};
for (const f of F) (byId[f.id] ??= []).push(f);
for (const [id, arr] of Object.entries(byId)) {
  console.log(`\n## ${id} (${arr.length})`);
  for (const f of arr.slice(0, 60)) console.log(`  [${f.sev}] ${f.msg}`);
  if (arr.length > 60) console.log(`  ... +${arr.length - 60} more`);
}
