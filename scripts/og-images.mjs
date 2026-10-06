#!/usr/bin/env node
/*
 * Open Graph images (Phase 5): one branded 1200x630 PNG per content route,
 * written to public/og/. The card carries the white logo, the page H1 in
 * serif, an eyebrow for the section it belongs to, and the clinic footer.
 * Runs in prebuild so cards stay in sync with content.
 */
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT = join(root, 'resources', 'content');
const OUT = join(root, 'public', 'og');
const LOGO = join(root, 'resources', 'images', 'brand', 'logo-white-transparent.png');
const W = 1200;
const H = 630;

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const stripMd = (s) => s.replace(/\*([^*]+)\*/g, '$1').replace(/\[CONFIRM[^\]]*\]|\[date\]/g, '').replace(/\s{2,}/g, ' ').trim();

const eyebrowFor = (url) => {
  if (url === '/') return 'Fertility and women\u2019s health, Gunjur';
  if (url.startsWith('/services/')) return 'Services';
  if (url.startsWith('/treatments/')) return 'Fertility treatments';
  if (url.startsWith('/conditions/')) return 'Conditions';
  if (url.startsWith('/blog/')) return 'From the library';
  return null;
};

const ogSlug = (url) =>
  url === '/' ? 'home' : url.replace(/^\//, '').replace(/\/$/, '').replace(/\//g, '-');

function wrap(text, max) {
  const words = text.split(' ');
  const lines = [''];
  for (const word of words) {
    const i = lines.length - 1;
    if (`${lines[i]} ${word}`.trim().length > max && lines[i]) lines.push(word);
    else lines[i] = `${lines[i]} ${word}`.trim();
    if (lines.length === 3) break;
  }
  if (words.join(' ') !== lines.join(' ')) lines[1] = `${lines[1].replace(/[ ,.:;]+$/, '')}\u2026`;
  return lines.slice(0, 2);
}

function* contentFiles(dir = CONTENT) {
  for (const f of readdirSync(dir, { withFileTypes: true })) {
    if (f.isDirectory()) yield* contentFiles(join(dir, f.name));
    else if (f.name.endsWith('.md') && f.name !== '_manifest.json') yield join(dir, f.name);
  }
}

const pages = [];
for (const file of contentFiles()) {
  const src = readFileSync(file, 'utf8');
  const url = src.match(/^url:\s*(\S+)/m)?.[1];
  const h1 = src.match(/^H1:\s*(.+)$/m)?.[1];
  const title = src.match(/^title:\s*"?([^"\n]+)"?$/m)?.[1];
  if (!url || url === '/404' || url === '/thank-you/') continue;
  const headline =
    stripMd(h1 ?? '') ||
    stripMd((title ?? '').split(/\s*[\|·]\s*(?:EVE|Dr\.)/)[0]) ||
    'EVE Women and Fertility Clinic';
  pages.push({ url, h1: headline });
}

mkdirSync(OUT, { recursive: true });
const logo = await sharp(LOGO).resize({ width: 240 }).png().toBuffer();
const logoMeta = await sharp(logo).metadata();

const card = (title, eyebrow) => {
  const lines = wrap(title, 30);
  const size = lines.length > 1 || title.length > 34 ? 54 : 62;
  const titleY = eyebrow ? 292 : 316;
  const titleSvg = lines
    .map((l, i) => `<text x="80" y="${titleY + i * (size + 14)}" font-family="Georgia, 'Times New Roman', serif" font-size="${size}" fill="#FFFFFF">${esc(l)}</text>`)
    .join('');
  return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="#26382C"/>
  <circle cx="1080" cy="90" r="260" fill="#2E4234"/>
  <circle cx="1130" cy="560" r="300" fill="#22332A"/>
  ${eyebrow ? `<text x="80" y="228" font-family="Arial, sans-serif" font-size="26" font-weight="bold" letter-spacing="3" fill="#C9B799">${esc(eyebrow.toUpperCase())}</text>` : ''}
  ${titleSvg}
  <line x1="80" y1="500" x2="1120" y2="500" stroke="#3E5445" stroke-width="1"/>
  <text x="80" y="548" font-family="Arial, sans-serif" font-size="26" fill="#E5DCC8">EVE Women and Fertility Clinic</text>
  <text x="80" y="586" font-family="Arial, sans-serif" font-size="22" fill="#9FB0A4">Gunjur, Bengaluru \u00b7 Dr. Swati Shree</text>
</svg>`;
};

let count = 0;
for (const { url, h1 } of pages) {
  const svg = Buffer.from(card(h1, eyebrowFor(url)));
  await sharp(svg)
    .composite([{ input: logo, left: 80, top: 60 }])
    .png({ compressionLevel: 9 })
    .toFile(join(OUT, `${ogSlug(url)}.png`));
  count++;
}
await sharp(Buffer.from(card('Fertility care, unrushed. Women\u2019s health, explained.', null)))
  .composite([{ input: logo, left: 80, top: 60 }])
  .png({ compressionLevel: 9 })
  .toFile(join(OUT, 'default.png'));
writeFileSync(join(OUT, '_map.json'), JSON.stringify(Object.fromEntries(pages.map((p) => [p.url, `/og/${ogSlug(p.url)}.png`])), null, 2));
console.log(`og-images: ${count + 1} cards written to public/og/ (logo ${logoMeta.width}x${logoMeta.height}).`);
