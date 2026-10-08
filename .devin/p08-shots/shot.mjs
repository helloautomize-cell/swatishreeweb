import { chromium } from "playwright";
const b = await chromium.launch();
const base = "http://localhost:3001";
for (const w of [390, 1440]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 } });
  await p.goto(base + "/", { waitUntil: "networkidle" });
  await p.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.3));
  await p.waitForTimeout(900);
  await p.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await p.waitForTimeout(900);
  await p.evaluate(() => window.scrollTo(0, 0));
  await p.waitForTimeout(1200);
  await p.screenshot({ path: `.devin/p08-shots/home-${w}-top.png` });
  await p.screenshot({ path: `.devin/p08-shots/home-${w}-full.png`, fullPage: true });
  await p.close();
}
await b.close();
