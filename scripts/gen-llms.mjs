#!/usr/bin/env node
/*
 * llms.txt + llms-full.txt (site-plan §10), generated at build time from
 * resources/content/. llms.txt is the curated index; llms-full.txt carries
 * the full page text. [CONFIRM]/[date] tokens are stripped from both.
 */
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT = join(root, 'resources', 'content');
const OUT = join(root, 'public');
/* Same resolution as src/lib/site-config.ts (SITE_URL -> Vercel env), but the
 * final fallback is the production domain: llms.txt must never ship localhost
 * links, even from a local build. */
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const BASE = (
  process.env.SITE_URL ??
  (vercelUrl ? `https://${vercelUrl}` : 'https://www.evefertilityclinic.com')
).replace(/\/+$/, '');

/* entityStatement lives in src/lib/site-config.ts (single source). This
 * script is plain Node and cannot import the TS module, so it reads the
 * literal out of the source file - never keep a second copy here. */
const cfg = readFileSync(join(root, 'src/lib/site-config.ts'), 'utf8');
const mark = 'export const entityStatement';
const ENTITY = cfg.slice(cfg.indexOf(mark)).split('"')[1]
  ?? (() => { throw new Error('entityStatement not found in site-config.ts'); })();

// Content files wrap these placeholders in backticks so markdown doesn't
// mangle the brackets; consume an optional backtick on each side too.
const CONFIRM = /`?(?:\[CONFIRM(?::[^\]]*)?\]|\[date\])`?/g;
const strip = (s) =>
  s
    .replace(CONFIRM, '')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/\s{2,}/g, ' ')
    .replace(/^\s+|\s+$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

function* contentFiles(dir = CONTENT) {
  for (const f of readdirSync(dir, { withFileTypes: true })) {
    if (f.isDirectory()) yield* contentFiles(join(dir, f.name));
    else if (f.name.endsWith('.md')) yield join(dir, f.name);
  }
}

const pages = [];
for (const file of contentFiles()) {
  const src = readFileSync(file, 'utf8');
  const fm = src.match(/^---\n([\s\S]*?)\n---/);
  const front = fm?.[1] ?? '';
  const get = (k) => front.match(new RegExp(`^${k}:\\s*"?([^"\\n]+)"?$`, 'm'))?.[1]?.trim();
  const url = get('url');
  if (!url || ['/404', '/thank-you/'].includes(url)) continue;
  const body = fm ? src.slice(fm[0].length) : src;
  pages.push({ url, title: get('title') ?? '', description: get('description') ?? '', h1: src.match(/^H1:\s*(.+)$/m)?.[1] ?? '', body });
}
pages.sort((a, b) => a.url.localeCompare(b.url));

const group = (name, re) => pages.filter((p) => re.test(p.url));
const indexGroups = [
  ['Core', /^\/(?:$|about|contact|faqs|plan-your-visit|coming-from-outside|dr-swati-shree|your-fertility-journey|fees|blog\/$)/],
  ['Services', /^\/services\//],
  ['Treatments', /^\/treatments\//],
  ['Conditions', /^\/conditions\//],
  ['Articles', /^\/blog\/[\w-]+\/$/],
  ['Legal', /^\/(privacy-policy|terms-of-use|medical-disclaimer|editorial-policy|patient-rights|appointments-cancellation-refund|accessibility)\//],
];

const idx = [
  '# EVE Women and Fertility Clinic',
  '',
  `> ${ENTITY}`,
  '',
  `Doctor-led fertility and women's health clinic in Gunjur, Bengaluru, founded by Dr. Swati Shree (MBBS, DNB O&G, MRCOG). Appointment-only outpatient clinic; IVF lab procedures are carried out at associated ART centres.`,
  '',
];
const listed = new Set();
for (const [name, re] of indexGroups) {
  const list = group(name, re).filter((p) => !listed.has(p.url));
  list.forEach((p) => listed.add(p.url));
  if (!list.length) continue;
  idx.push(`## ${name}`, '');
  for (const p of list) {
    const desc = strip(p.description).replace(/[.\s]+$/, '');
    idx.push(`- [${strip(p.h1) || p.title.split(/\s*[\|·]\s*/)[0]}](${BASE}${p.url})${desc ? `: ${desc}` : ''}`);
  }
  idx.push('');
}
writeFileSync(join(OUT, 'llms.txt'), idx.join('\n').replace(/\n{3,}/g, '\n\n'));

const full = ['# EVE Women and Fertility Clinic', '', `> ${ENTITY}`, ''];
for (const p of pages) {
  full.push(`\n## ${strip(p.h1) || p.title.split(/\s*[\|·]\s*/)[0]}`, `URL: ${BASE}${p.url}`, '', strip(p.body), '');
}
writeFileSync(join(OUT, 'llms-full.txt'), full.join('\n').replace(/\n{4,}/g, '\n\n\n'));

console.log(`llms: ${pages.length} pages -> public/llms.txt, public/llms-full.txt`);
