/*
 * Phase 3 content-pipeline checks (Part 9.1 + Part 12 test list).
 * Runs once in the `content` project: every route returns 200 with unique
 * titles, JSON-LD is parseable and CONFIRM-free, FAQ text in JSON-LD equals
 * the visible FAQ text, no em/en dashes, no nested interactives, and axe is
 * clean on sample routes.
 */

import { test, expect } from "@playwright/test";
import { AxeBuilder } from "@axe-core/playwright";
import { readFileSync } from "node:fs";

const manifest = JSON.parse(
  readFileSync("resources/content/_manifest.json", "utf8"),
) as Record<string, { url: string }>;
const urls = [
  ...new Set(
    Object.values(manifest)
      .map((m) => m.url)
      .filter((u) => u && u !== "/404" && u !== "/thank-you/"),
  ),
].sort();

// Strip the dev-only [CONFIRM] / [date] chips the way production hides them.
const stripConfirms = (s: string) =>
  s
    .replace(/\s*\[(?:CONFIRM(?::[^\]]*)?|date)\]/g, "")
    .replace(/\s+/g, " ")
    .trim();

test("all content routes return 200", async ({ request }) => {
  for (const url of urls) {
    const res = await request.get(url);
    expect(res.status(), `GET ${url}`).toBe(200);
  }
});

test("titles and descriptions are unique", async ({ request }) => {
  const titles = new Map<string, string>();
  const descs = new Map<string, string>();
  for (const url of urls) {
    const html = await (await request.get(url)).text();
    const title = html.match(/<title>(.*?)<\/title>/)?.[1] ?? "";
    const desc =
      html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
    expect(title.length, `missing title on ${url}`).toBeGreaterThan(0);
    expect(title.length, `title too long on ${url}`).toBeLessThanOrEqual(70);
    if (titles.has(title))
      throw new Error(
        `duplicate title "${title}" on ${url} and ${titles.get(title)}`,
      );
    titles.set(title, url);
    if (desc) {
      if (descs.has(desc))
        throw new Error(
          `duplicate description on ${url} and ${descs.get(desc)}`,
        );
      descs.set(desc, url);
    }
  }
});

test("JSON-LD parses, has no CONFIRM, no dashes", async ({ request }) => {
  for (const url of urls) {
    const html = await (await request.get(url)).text();
    const m = html.match(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
    );
    if (!m) continue; // utility pages carry no graph
    const json = m[1];
    expect(json.includes("CONFIRM"), `CONFIRM in JSON-LD on ${url}`).toBe(false);
    expect(json.includes("[date]"), `[date] in JSON-LD on ${url}`).toBe(false);
    expect(/[—–]/.test(json), `dash in JSON-LD on ${url}`).toBe(false);
    const graph = JSON.parse(json);
    expect(graph["@context"]).toBe("https://schema.org");
    const types = graph["@graph"].flatMap((n: { "@type"?: string | string[] }) =>
      n["@type"] ?? [],
    );
    for (const t of ["MedicalClinic", "Place", "WebSite"]) {
      expect(types, `${t} missing on ${url}`).toContain(t);
    }
  }
});

test("visible FAQs equal FAQPage JSON-LD", async ({ page, request }) => {
  const faqPages = urls.filter((u) =>
    ["/services/", "/treatments/", "/conditions/", "/blog/"].some((p) =>
      u.startsWith(p),
    ) || ["/", "/faqs/", "/about/", "/your-fertility-journey/", "/plan-your-visit/", "/coming-from-outside-bangalore/", "/dr-swati-shree/"].includes(u),
  );
  for (const url of faqPages) {
    const html = await (await request.get(url)).text();
    const m = html.match(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
    );
    if (!m) continue;
    const graph = JSON.parse(m[1]);
    const faqNode = graph["@graph"].find(
      (n: { "@type"?: string }) => n["@type"] === "FAQPage",
    );
    if (!faqNode) continue;

    await page.goto(url, { waitUntil: "domcontentloaded" });
    await page.$$eval(".faq details", (els) =>
      els.forEach((d) => {
        (d as HTMLDetailsElement).open = true;
      }),
    );
    const visible = await page.$$eval(".faq details", (els) =>
      els.map((d) => ({
        q: d.querySelector("summary span")?.textContent?.trim() ?? "",
        a: (d.querySelector(".a") as HTMLElement)?.innerText ?? "",
      })),
    );
    const expected = faqNode.mainEntity.map(
      (q: { name: string; acceptedAnswer: { text: string } }) => ({
        q: q.name,
        a: q.acceptedAnswer.text,
      }),
    );
    expect(visible.length, `FAQ count mismatch on ${url}`).toBe(expected.length);
    visible.forEach((v, i) => {
      expect(v.q, `Q mismatch on ${url} #${i}`).toBe(expected[i].q);
      expect(
        stripConfirms(v.a),
        `A mismatch on ${url} #${i}: "${v.a.slice(0, 60)}"`,
      ).toBe(expected[i].a);
    });
  }
});

test("no em or en dashes and no nested interactives", async ({ request }) => {
  for (const url of urls) {
    const html = await (await request.get(url)).text();
    expect(/[—–]/.test(html), `em/en dash on ${url}`).toBe(false);
    expect(/<a[^>]*>[^<]*<a /.test(html), `a inside a on ${url}`).toBe(false);
  }
});

const AXE_SAMPLE = [
  "/",
  "/services/",
  "/conditions/pcos/",
  "/treatments/ivf/",
  "/privacy-policy/",
  "/blog/fertility-tests-explained/",
];

test("axe clean on sample routes", async ({ page }) => {
  await page.addInitScript(() =>
    window.localStorage.setItem(
      "eve-consent",
      JSON.stringify({ choice: "accepted", at: 0 }),
    ),
  );
  for (const url of AXE_SAMPLE) {
    await page.goto(url, { waitUntil: "networkidle" });
    const res = await new AxeBuilder({ page }).analyze();
    const bad = res.violations.filter(
      (v) => v.impact === "serious" || v.impact === "critical",
    );
    expect(bad, `${url}: ${bad.map((v) => v.id).join(", ")}`).toEqual([]);
  }
});

test("internal links resolve site-wide", async ({ request }) => {
  const known = new Set(urls);
  const broken: string[] = [];
  for (const url of urls) {
    const html = await (await request.get(url)).text();
    const hrefs = [...html.matchAll(/href="(\/[a-z0-9-/?#]*)"/g)].map((m) => m[1].split("#")[0]);
    for (const h of new Set(hrefs)) {
      const base = h.endsWith("/") ? h : `${h}/`;
      if (!(known.has(h) || known.has(base) || h.startsWith("/images") || h.startsWith("/og/") || h === "/llms.txt" || h === "/llms-full.txt" || h === "/sitemap.xml")) {
        broken.push(`${url} -> ${h}`);
      }
    }
  }
  expect(broken, `broken links:\n${broken.join("\n")}`).toEqual([]);
});

test("every rendered image resolves", async ({ request }) => {
  const missing = new Set<string>();
  for (const url of urls) {
    const html = await (await request.get(url)).text();
    const srcs = new Set<string>();
    const decode = (s: string) => s.replace(/&amp;/g, "&");
    for (const m of html.matchAll(/<img[^>]+src="([^"]+)"/g)) srcs.add(decode(m[1]));
    for (const m of html.matchAll(/srcset="([^"]+)"/g)) {
      for (const cand of decode(m[1]).split(",")) srcs.add(cand.trim().split(" ")[0]);
    }
    for (const src of srcs) {
      if (!src.startsWith("/")) continue;
      const res = await request.get(src);
      if (res.status() !== 200) missing.add(`${src} (${res.status()}) from ${url}`);
    }
  }
  expect([...missing], `missing images:\n${[...missing].join("\n")}`).toEqual([]);
});
