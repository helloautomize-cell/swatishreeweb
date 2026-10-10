import { chromium } from "playwright";
const b = await chromium.launch();
const base = "http://localhost:3001";
const routes = ["/", "/dr-swati-shree/", "/conditions/pcos/", "/blog/pcos-and-getting-pregnant/"];
for (const r of routes) {
  const slug = r === "/" ? "home" : r.replaceAll("/", "-").replace(/^-|-$/g, "");
  for (const w of [390, 1440]) {
    const ctx = await b.newContext({ viewport: { width: w, height: 900 } });
    const p = await ctx.newPage();
    await p.goto(base + r, { waitUntil: "networkidle" });
    await p.evaluate(() => document.querySelector(".cookie")?.remove());
    await p.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await p.waitForTimeout(900);
    await p.evaluate(() => window.scrollTo(0, 0));
    await p.waitForTimeout(800);
    await p.screenshot({ path: `.devin/p08-shots/t9-${slug}-${w}-full.png`, fullPage: true });
    // footer crop
    const f = p.locator("footer").first();
    if (await f.count()) await f.screenshot({ path: `.devin/p08-shots/t9-footer-${w}.png` }).catch(() => {});
    await ctx.close();
  }
}
await b.close();
console.log("done");
