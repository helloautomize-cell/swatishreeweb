import { chromium } from "playwright";

const BASE = "http://localhost:3000";
const browser = await chromium.launch();
const ctx = await browser.newContext();
const sp = await ctx.newPage();
await sp.goto(BASE + "/sitemap.xml", { waitUntil: "domcontentloaded" });
const routes = await sp.evaluate(() =>
  [...document.querySelectorAll("url loc")].map((l) => new URL(l.textContent).pathname),
);
console.log(`${routes.length} routes`);
await ctx.close();

const issues = [];
for (const w of [390, 1440]) {
  const page = await browser.newPage({ viewport: { width: w, height: 900 } });
  for (const url of routes) {
    try {
      await page.goto(BASE + url, { waitUntil: "domcontentloaded", timeout: 20000 });
      await page.waitForTimeout(400);
      const res = await page.evaluate(() => {
        const out = { overflow: 0, coverIllus: [], clipped: [] };
        out.overflow = document.documentElement.scrollWidth - document.documentElement.clientWidth;
        document.querySelectorAll(".evi--illus img").forEach((img) => {
          if (getComputedStyle(img).objectFit === "cover") out.coverIllus.push(img.alt || img.src);
        });
        // contain images whose rendered box is visibly clipped by a fixed parent
        document.querySelectorAll(".evi--illus img, .badge-panel img").forEach((img) => {
          const ir = img.getBoundingClientRect();
          const pw = img.closest(".evi--illus, .badge-panel")?.getBoundingClientRect();
          if (!pw || ir.width < 4 || ir.height < 4) return;
          const visW = Math.min(ir.right, pw.right) - Math.max(ir.left, pw.left);
          const visH = Math.min(ir.bottom, pw.bottom) - Math.max(ir.top, pw.top);
          if (ir.width - visW > ir.width * 0.02 || ir.height - visH > ir.height * 0.02)
            out.clipped.push(`${img.alt || img.src} @${Math.round(ir.width)}x${Math.round(ir.height)}`);
        });
        return out;
      });
      if (res.overflow > 0) issues.push(`${w} ${url} h-overflow +${res.overflow}px`);
      res.coverIllus.forEach((i) => issues.push(`${w} ${url} illus-cover ${i}`));
      res.clipped.forEach((i) => issues.push(`${w} ${url} clipped ${i}`));
    } catch (e) {
      issues.push(`${w} ${url} NAVFAIL ${e.message.split("\n")[0]}`);
    }
  }
  await page.close();
}
await browser.close();
console.log(issues.length ? issues.join("\n") : "CLEAN");
