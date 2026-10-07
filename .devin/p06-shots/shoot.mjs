import { chromium } from "playwright";

const pages = [
  ["/", "home"],
  ["/dr-swati-shree/", "doctor"],
  ["/about/", "about"],
  ["/treatments/ivf/", "ivf"],
  ["/conditions/pcos/", "pcos"],
];
const widths = [390, 1024, 1440];

const browser = await chromium.launch();
for (const w of widths) {
  const page = await browser.newPage({ viewport: { width: w, height: 900 } });
  for (const [url, name] of pages) {
    await page.goto(`http://localhost:3000${url}`, { waitUntil: "networkidle" });
    await page.evaluate(() => window.scrollTo(0, 0));
    // let IO/reveals settle
    await page.waitForTimeout(1200);
    await page.screenshot({ path: `.devin/p06-shots/${name}-${w}-full.png`, fullPage: true });
    await page.screenshot({ path: `.devin/p06-shots/${name}-${w}-top.png` });
    // horizontal overflow check
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    if (overflow > 0) console.log(`H-OVERFLOW ${name} @${w}: +${overflow}px`);
    console.log(`shot ${name} @${w}`);
  }
  await page.close();
}
await browser.close();
console.log("done");
