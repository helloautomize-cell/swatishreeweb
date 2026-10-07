import { chromium } from "playwright";

const base = "http://localhost:3000";
const out = ".devin/img-check";
const browser = await chromium.launch();

// Step 1: sidebar Book button at 1024/1280/1440
for (const w of [1024, 1280, 1440]) {
  const page = await browser.newPage({ viewport: { width: w, height: 900 } });
  await page.goto(`${base}/conditions/fibroids/`, { waitUntil: "networkidle" });
  const book = page.locator(".pg-toc-book .book, .pg-toc-book a").first();
  const box = await book.boundingBox();
  const display = await book.evaluate((el) => getComputedStyle(el).display);
  console.log(`fibroids@${w}: book display=${display} w=${box?.width.toFixed(0)} h=${box?.height.toFixed(0)}`);
  await page.locator(".pg-toc").screenshot({ path: `${out}/toc-${w}.png` });
  await page.close();
}
// also treatments/services spot-check at 1280
for (const url of ["/treatments/ivf/", "/services/fertility-evaluation/"]) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.goto(`${base}${url}`, { waitUntil: "networkidle" });
  const book = page.locator(".pg-toc-book .book").first();
  const box = await book.boundingBox();
  console.log(`${url}@1280: book h=${box?.height.toFixed(0)}`);
  await page.locator(".pg-toc").screenshot({ path: `${out}/toc${url.replaceAll("/", "-")}1280.png` });
  await page.close();
}

// Step 2: MRCOG image at 390/1024/1440
for (const w of [390, 1024, 1440]) {
  const page = await browser.newPage({ viewport: { width: w, height: 900 } });
  await page.goto(`${base}/dr-swati-shree/`, { waitUntil: "networkidle" });
  const img = page.locator(".t-img img").first();
  await img.scrollIntoViewIfNeeded();
  const b = await img.boundingBox();
  const nat = await img.evaluate((el) => `${el.naturalWidth}x${el.naturalHeight} rendered ${el.clientWidth}x${el.clientHeight}`);
  console.log(`mrcog@${w}: ${nat} box=${b?.width.toFixed(0)}x${b?.height.toFixed(0)}`);
  await img.locator("xpath=..").screenshot({ path: `${out}/mrcog-${w}.png` });
  await page.close();
}

// Step 3: mega menu avatar at 1440
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(`${base}/`, { waitUntil: "networkidle" });
await page.hover('nav a:has-text("Services"), .sh-nav a:has-text("Services")').catch(async () => {
  await page.hover('text=Services');
});
await page.waitForTimeout(600);
const av = page.locator(".mcard .mavatar img, .mcard .mavatar-img").first();
const avBox = await av.boundingBox().catch(() => null);
const src = await av.getAttribute("src").catch(() => null);
console.log(`mavatar: box=${avBox ? `${avBox.width.toFixed(0)}x${avBox.height.toFixed(0)}` : "none"} src=${src}`);
const mcard = page.locator(".mcard").first();
if (await mcard.count()) await mcard.screenshot({ path: `${out}/mcard-1440.png` });
await page.close();

await browser.close();
