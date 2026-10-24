#!/usr/bin/env node
/* Remaining doc fixes: SEO-002/005/006/007/008/009/011 in one pass. */
import { readFileSync, writeFileSync } from 'node:fs';
const F = 'resources/docs/new-website-content.md';
let t = readFileSync(F, 'utf8').replace(/\r\n/g, '\n');
const log = [];

const rep = (old, neu, id) => {
  if (!t.includes(old)) { log.push(`MISS ${id}: ${old.slice(0, 60)}`); return; }
  t = t.replace(old, neu);
  log.push(`OK   ${id}`);
};

/* SEO-007: real datePublished on 3 legacy posts (use their lastReviewed date). */
rep('url: /blog/pcos-and-getting-pregnant/\nlastReviewed: "2026-09-04"',
    'url: /blog/pcos-and-getting-pregnant/\nlastReviewed: "2026-09-04"', 'noop');
for (const u of ['pcos-and-getting-pregnant', 'fertility-tests-explained', 'when-to-see-a-fertility-doctor']) {
  const re = new RegExp(`(url: /blog/${u}/[\\s\\S]*?datePublished: )"\\[CONFIRM: launch date\\]"`);
  const m = t.match(re);
  if (m) {
    const lr = t.slice(m.index).match(/lastReviewed:\s*"([^"]+)"/)?.[1] ?? '2026-09-04';
    t = t.replace(re, `$1"${lr}"`);
    log.push(`OK   SEO-007 datePublished ${u} -> ${lr}`);
  } else log.push(`MISS SEO-007 ${u}`);
}

/* SEO-008: inline `Sources:` -> ### Sources section (4 pages). */
t = t.replace(/^Sources: (.+)$/gm, (s, list) =>
  `### Sources\n${list.split(';').map((x) => `- ${x.trim()}`).join('\n')}`);
log.push('OK   SEO-008 inline Sources converted');

/* SEO-005: add one sibling to posts: of the 7 under-linked supports. */
const SIB = {
  'fibroids-and-fertility-can-you-get-pregnant': '/blog/female-infertility-tests-amh-ultrasound-hsg/',
  'genetic-testing-in-ivf-pgt-a-is-it-worth-it': '/blog/tests-after-recurrent-miscarriage/',
  'hysteroscopy-for-infertility-when-is-it-needed': '/blog/recurrent-miscarriage-recurrent-pregnancy-loss/',
  'thyroid-problems-and-fertility': '/blog/tests-after-recurrent-miscarriage/',
  'ovulation-tracking-how-to-know-fertile-window': '/blog/iui-success-factors/',
  'letrozole-pcos-ovulation-induction': '/blog/pcos-ovulation-irregular-periods-pregnancy/',
  'pcos-age-metabolic-health-fertility-planning': '/blog/pcos-ovulation-irregular-periods-pregnancy/',
};
for (const [slug, add] of Object.entries(SIB)) {
  const re = new RegExp(`(url: /blog/${slug}/[\\s\\S]*?posts: \\[[^\\]]*)\\]`);
  const m = t.match(re);
  if (m && !m[1].includes(add)) { t = t.replace(re, `${m[1]}, ${add}]`); log.push(`OK   SEO-005 ${slug}`); }
  else log.push(`${m ? 'SKIP' : 'MISS'} SEO-005 ${slug}`);
}

/* SEO-006: endometriosis cluster -> add treatment/service links in related:. */
const ENDO = ['adenomyosis-and-fertility-symptoms-treatment', 'can-endometriosis-cause-infertility',
  'endometriosis-and-ivf', 'endometriosis-fertility-symptoms-diagnosis-treatment-ivf',
  'endometriosis-symptoms-not-to-ignore', 'pregnant-with-endometriosis-without-ivf'];
for (const slug of ENDO) {
  const re = new RegExp(`(url: /blog/${slug}/[\\s\\S]*?related: \\[)([^\\]]*)\\]`);
  const m = t.match(re);
  if (!m) { log.push(`MISS SEO-006 ${slug}`); continue; }
  let arr = m[2];
  for (const add of ['/treatments/ivf/', '/services/fertility-evaluation/'])
    if (!arr.includes(add)) arr += (arr.trim() ? ', ' : '') + add;
  t = t.replace(re, `${m[1]}${arr}]`);
  log.push(`OK   SEO-006 ${slug}`);
}

/* SEO-009: titles + descriptions. */
const TD = [
  ['title: "Thyroid Problems and Fertility"', 'title: "Thyroid Problems and Fertility: Tests and Treatment"'],
  ['title: "Can Endometriosis Cause Infertility?"', 'title: "Can Endometriosis Cause Infertility? What Helps"'],
  ['title: "Egg Freezing: Who Should Consider It?"', 'title: "Egg Freezing: Who Should Consider It and When to Act"'],
  ['title: "IVF Process Step by Step in Bangalore"', 'title: "IVF Process Step by Step in Bangalore: What to Expect"'],
];
for (const [o, n] of TD) rep(o, n, 'SEO-009 title');

/* SEO-002: sharpen legacy posts' intent vs cluster pairs. */
rep('title: "PCOS and Getting Pregnant: What the Evidence Says"',
    'title: "PCOS and Getting Pregnant: Evidence, Options and Care"', 'SEO-002 pcos title');
rep('description: "Can you get pregnant with PCOS? How ovulation is treated, what lifestyle changes help, when IUI or IVF is needed, and what to avoid. By Dr. Swati Shree."',
    'description: "PCOS and getting pregnant: what the evidence says about ovulation, lifestyle, letrozole, IUI and IVF, and which path suits you. By Dr. Swati Shree."', 'SEO-002 pcos desc');
rep('title: "When to See a Fertility Doctor"',
    'title: "When to See a Fertility Doctor: Signs Not to Wait"', 'SEO-002 wts title');

/* SEO-011: add one cost FAQ (no invented prices) to iui, egg-freezing, tesa-pesa, hsg pages. */
const COST = {
  '/treatments/iui/': ['What does IUI cost in Bangalore?',
    'Costs vary with the medicines used, the number of monitoring scans and the clinic. IUI is usually far less expensive than IVF per cycle. At EVE you receive a written estimate before the cycle starts, so ask for it at your consultation.'],
  '/treatments/egg-freezing/': ['What does egg freezing cost in Bangalore?',
    'Costs depend on the stimulation medicines, the number of eggs and cycles, and storage fees, which recur each year. Prices vary between clinics. EVE shares a written estimate after your first consultation, so you can plan clearly.'],
  '/treatments/tesa-pesa/': ['What does TESA or PESA cost in Bangalore?',
    'The procedure fee depends on whether it is done alone or as part of an IVF-ICSI cycle, plus lab and storage charges. Costs vary, so ask for a written estimate at your consultation before deciding.'],
  '/services/tubal-patency-test-hsg/': ['What does an HSG test cost in Bangalore?',
    'Charges differ between diagnostic centres and clinics, and depend on whether contrast or ultrasound dye is used. Ask the clinic for the exact fee when you book, including any review appointment after the test.'],
};
for (const [url, [q, a]] of Object.entries(COST)) {
  const ub = t.indexOf(`url: ${url}`);
  if (ub === -1) { log.push(`MISS SEO-011 ${url}`); continue; }
  const blockEnd = t.indexOf('\n## ', ub);
  const block = t.slice(ub, blockEnd === -1 ? t.length : blockEnd);
  const faqM = block.match(/### (FAQs?|Quick answers|Common questions)[^\n]*\n([\s\S]*?)(?=\n### |\n## |\n```|$)/i);
  if (!faqM) { log.push(`MISS SEO-011 faq ${url}`); continue; }
  const items = [...faqM[2].matchAll(/^(\d+)\.\s+\*\*/gm)];
  const n = items.length;
  const insert = `${faqM[1].startsWith('F') || faqM[1].startsWith('f') ? '' : ''}\n${n + 1}. **${q}**\n   ${a}`;
  const at = ub + block.indexOf(faqM[0]) + faqM[0].length;
  t = t.slice(0, at) + insert + t.slice(at);
  log.push(`OK   SEO-011 ${url} faq ${n}->${n + 1}`);
}

writeFileSync(F, t);
log.forEach((l) => console.log(l));
