// Task 10 final sweep: every route x 3 widths.
// Flags horizontal overflow, cover-cropped illustrations, and saves shots.
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const BASE = process.env.BASE || 'http://localhost:3000';
const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), 'sweep');

(async () => {
  const sm = await (await fetch(`${BASE}/sitemap.xml`)).text();
  const routes = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => new URL(m[1]).pathname)
    .filter(Boolean);
  routes.push('/styleguide/', '/404-xyz-not-a-page/');
  console.log(`${routes.length} routes`);
  fs.mkdirSync(OUT, { recursive: true });

  const b = await chromium.launch();
  const flags = [];
  for (const route of routes) {
    for (const w of [390, 1024, 1440]) {
      const p = await b.newPage({ viewport: { width: w, height: 900 } });
      try {
        await p.goto(BASE + route, { waitUntil: 'networkidle', timeout: 45000 });
        await p.waitForTimeout(900);
        const res = await p.evaluate(() => {
          const out = { overflow: [], coverIllus: [], outsideSec: [] };
          const vw = document.documentElement.clientWidth;
          if (document.documentElement.scrollWidth > vw + 1) {
            out.overflow.push(`doc scrollWidth ${document.documentElement.scrollWidth} > ${vw}`);
            for (const el of document.querySelectorAll('body *')) {
              const r = el.getBoundingClientRect();
              if (r.width > vw + 2 && !['HTML', 'BODY'].includes(el.tagName)) {
                out.overflow.push(`${el.tagName}.${(el.className + '').split(' ')[0]} w=${Math.round(r.width)}`);
                if (out.overflow.length > 4) break;
              }
            }
          }
          // illustration rendered with cover
          for (const img of document.querySelectorAll('.evi--illus img, .badge-panel img')) {
            const fit = getComputedStyle(img).objectFit;
            if (fit === 'cover') out.coverIllus.push(img.src.split('/').pop().split('?')[0]);
          }
          // face check on doctor photos: is a positioned chip/card over the face zone?
          for (const fig of document.querySelectorAll('.hb-fig, .da-fig, .dr-portrait')) {
            const fr = fig.getBoundingClientRect();
            if (!fr.width) continue;
            const face = { x: fr.left + fr.width * 0.25, y: fr.top + fr.height * 0.08, w: fr.width * 0.5, h: fr.height * 0.38 };
            for (const chip of document.querySelectorAll('.glasschip, .chip-doc, .award')) {
              const cr = chip.getBoundingClientRect();
              if (cr.width && cr.x < face.x + face.w && cr.x + cr.width > face.x && cr.y < face.y + face.h && cr.y + cr.height > face.y) {
                out.outsideSec.push(`chip ${chip.textContent.slice(0, 24)} over face zone`);
              }
            }
          }
          // clipped text: elements whose scrollHeight exceeds clientHeight with overflow hidden
          for (const el of document.querySelectorAll('p, h1, h2, h3, span.glasschip, .hm-labels *')) {
            const cs = getComputedStyle(el);
            if (cs.overflowY === 'hidden' && el.scrollHeight > el.clientHeight + 2 && el.clientHeight > 0) {
              const t = (el.textContent || '').trim().slice(0, 30);
              if (t) out.outsideSec.push(`clipped: ${t}`);
            }
          }
          return out;
        });
        const name = route.replace(/\//g, '_').replace(/^_+|_+$/g, '') || 'home';
        await p.screenshot({ path: path.join(OUT, `${name}-${w}.png`), fullPage: false });
        const issues = [...res.overflow, ...res.coverIllus, ...res.outsideSec];
        if (issues.length) flags.push(`${route} @${w}: ${issues.join(' | ')}`);
      } catch (e) {
        flags.push(`${route} @${w}: ERROR ${e.message.slice(0, 80)}`);
      }
      await p.close();
    }
  }
  await b.close();
  console.log(flags.length ? 'FLAGS:\n' + flags.join('\n') : 'CLEAN');
})();
