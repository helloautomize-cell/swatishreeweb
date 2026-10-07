import { chromium } from "playwright";

const base = "https://swatishreeweb.vercel.app";
const browser = await chromium.launch();

for (const w of [390, 1440]) {
  const page = await browser.newPage({ viewport: { width: w, height: 900 } });

  // Step 1: sidebar Book button (sidebar only on >=1024)
  await page.goto(`${base}/conditions/fibroids/`, { waitUntil: "networkidle" });
  const book = page.locator(".pg-toc-book .book").first();
  if (await book.count()) {
    const box = await book.boundingBox();
    const display = await book.evaluate((el) => getComputedStyle(el).display);
    console.log(`LIVE fibroids@${w}: book display=${display} w=${box?.width.toFixed(0)} h=${box?.height.toFixed(0)}`);
  } else console.log(`LIVE fibroids@${w}: no sidebar book (mobile layout)`);

  // Step 2: MRCOG image
  await page.goto(`${base}/dr-swati-shree/`, { waitUntil: "networkidle" });
  const img = page.locator(".t-img img").first();
  await img.scrollIntoViewIfNeeded();
  const b = await img.boundingBox();
  console.log(`LIVE mrcog@${w}: rendered ${b?.width.toFixed(0)}x${b?.height.toFixed(0)}`);

  // Step 3: mega menu avatar
  if (w >= 1024) {
    await page.goto(`${base}/`, { waitUntil: "networkidle" });
    for (const label of ["Services", "Treatments", "Conditions"]) {
      await page.hover(`.sh-nav a:has-text("${label}")`).catch(() => {});
      await page.waitForTimeout(700);
      const av = page.locator(".mcard .mavatar-img").first();
      const src = (await av.getAttribute("src").catch(() => null)) || "";
      const vis = await av.isVisible().catch(() => false);
      console.log(`LIVE menu ${label}@${w}: avatar visible=${vis} src=${src.includes("doctor-avatar") ? "D4 ok" : src}`);
    }
  } else {
    await page.goto(`${base}/`, { waitUntil: "networkidle" });
    await page.getByRole("button", { name: "Open menu" }).click().catch(() => {});
    await page.waitForTimeout(700);
    const av = page.locator(".mavatar-img").first();
    const vis = await av.isVisible().catch(() => false);
    console.log(`LIVE mobile menu@${w}: mavatar present=${await av.count()} visible=${vis}`);
  }
  await page.close();
}
await browser.close();
