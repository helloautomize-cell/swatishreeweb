import { chromium } from "playwright";
import { AxeBuilder } from "@axe-core/playwright";
const b = await chromium.launch();
const base = "http://localhost:3001";
const routes = ["/", "/dr-swati-shree/", "/conditions/pcos/", "/blog/fertility-tests-explained/", "/about/"];
for (const r of routes) {
  for (const w of [390, 1440]) {
    const ctx = await b.newContext({ viewport: { width: w, height: 900 } });
    const p = await ctx.newPage();
    await p.goto(base + r, { waitUntil: "networkidle" });
    const res = await new AxeBuilder({ page: p }).withTags(["wcag2a", "wcag2aa"]).analyze();
    const contrast = res.violations.filter((v) => v.id === "color-contrast");
    const other = res.violations.filter((v) => v.id !== "color-contrast");
    console.log(`${r} @${w}: contrast=${contrast.reduce((n,v)=>n+v.nodes.length,0)} other=${other.length}`);
    for (const v of contrast) for (const n of v.nodes.slice(0, 8))
      console.log(`   CONTRAST ${n.target} — ${(n.failureSummary||"").replace(/\s+/g," ").slice(0,140)}`);
    for (const v of other.slice(0, 4)) console.log(`   OTHER ${v.id}: ${v.nodes.length} — ${v.nodes[0]?.target}`);
    await ctx.close();
  }
}
await b.close();
