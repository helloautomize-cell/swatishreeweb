#!/usr/bin/env node
/* SEO crawl: fetch every sitemap URL and extract on-page signals. */
import { writeFileSync } from 'node:fs';

const BASE = process.env.BASE ?? 'http://localhost:3000';
const UA = process.env.UA ?? 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';

const get = async (url) => {
  const res = await fetch(url, { headers: { 'user-agent': UA }, redirect: 'manual' });
  return { status: res.status, headers: res.headers, text: await res.text(), location: res.headers.get('location') };
};

const meta = (html, name, attr = 'name') => {
  const re = new RegExp(`<meta[^>]+${attr}=["']${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["'][^>]*>`, 'gi');
  const tag = re.exec(html)?.[0];
  return tag?.match(/content=["']([^"']*)["']/)?.[1] ?? null;
};
const tagText = (html, tag) => [...html.matchAll(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'gi'))].map((m) => m[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&#39;|&rsquo;/g, "'").replace(/&quot;/g, '"').trim());

const sm = await get(`${BASE}/sitemap.xml`);
const urls = [...sm.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
console.log(`sitemap: ${sm.status}, ${urls.length} urls`);

const pages = [];
for (const u of urls) {
  const r = await get(`${BASE}${u}`);
  const h = r.text;
  const ld = [...h.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map((m) => {
    try { return JSON.parse(m[1]); } catch { return { _parseError: m[1].slice(0, 200) }; }
  });
  const links = [...h.matchAll(/<a\s[^>]*href=["']([^"']+)["']/gi)].map((m) => m[1]);
  const imgs = [...h.matchAll(/<img\s[^>]*>/gi)].map((m) => m[0]);
  const h1 = tagText(h, 'h1');
  const headings = tagText(h, 'h2');
  const bodyText = h.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ');
  pages.push({
    url: u,
    status: r.status,
    xrobots: r.headers.get('x-robots-tag'),
    title: tagText(h, 'title')[0] ?? null,
    titleLen: (tagText(h, 'title')[0] ?? '').length,
    desc: meta(h, 'description'),
    descLen: (meta(h, 'description') ?? '').length,
    canonical: h.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1] ?? null,
    metaRobots: meta(h, 'robots'),
    lang: h.match(/<html[^>]+lang=["']([^"']+)["']/i)?.[1] ?? null,
    ogTitle: meta(h, 'og:title', 'property'), ogImage: meta(h, 'og:image', 'property'), ogUrl: meta(h, 'og:url', 'property'),
    twCard: meta(h, 'twitter:card'),
    h1, h1count: h1.length,
    h2s: headings,
    ldTypes: ld.flatMap((g) => (g['@graph'] ?? [g]).map((n) => n['@type'])).flat(),
    ldGraphIds: ld.flatMap((g) => (g['@graph'] ?? []).map((n) => n['@id'])),
    ldRaw: ld,
    intLinks: links.filter((l) => l.startsWith('/')),
    extLinks: links.filter((l) => l.startsWith('http')),
    imgs: imgs.map((t) => ({ alt: /alt=["']([^"']*)["']/i.exec(t)?.[1] ?? null, hasWH: /width=/.test(t) && /height=/.test(t), nextImage: /_next\/image/.test(t), src: /src=["']([^"']{0,80})/.exec(t)?.[1] })),
    hasWrittenBy: /Written by/i.test(h),
    hasReviewedBy: /Medically reviewed by/i.test(h),
    hasPublished: /Published/i.test(h),
    hasUpdated: /Updated|Last reviewed/i.test(h),
    hasBreadcrumb: /aria-label=["']Breadcrumb["']/i.test(h),
    hasFaqVisible: /faq/i.test(h),
    wordCount: bodyText.split(/\s+/).filter(Boolean).length,
    sizeKB: Math.round(h.length / 1024),
  });
}
writeFileSync('seo-audit/crawl.json', JSON.stringify(pages, null, 1));
console.log(`crawled ${pages.length} pages -> seo-audit/crawl.json`);
for (const p of pages.filter((p) => p.status !== 200)) console.log(`NON-200: ${p.url} -> ${p.status}`);
