import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await page.goto("https://swatishreeweb.vercel.app/contact/", { waitUntil: "networkidle" });

const form = page.locator("form").filter({ has: page.locator('[name="phone"]') }).first();
console.log("form found:", await form.count());

// inspect fields
const fields = await form.locator("input, select, textarea").evaluateAll((els) =>
  els.map((e) => `${e.tagName.toLowerCase()}[name=${e.name} type=${e.type}]`)
);
console.log("fields:", fields.join(", "));

// fill required fields with test data
const fill = async (name, value) => {
  const el = form.locator(`[name="${name}"]`).first();
  const tag = await el.evaluate((e) => e.tagName.toLowerCase());
  if (tag === "select") await el.selectOption({ label: value }).catch(async () => el.selectOption(value));
  else if ((await el.getAttribute("type")) === "checkbox") await el.check();
  else await el.fill(value);
};

await fill("name", "Preview Test Patient");
await fill("age", "30");
await fill("phone", "9000000000");
await fill("town", "Test Town");
await fill("reason", "Fertility evaluation");
await fill("date", "2026-02-20");
await form.locator('.pillrow button', { hasText: "Morning" }).click();
await form.locator('[name="consent"]').check().catch(() => {});

// report remaining unfilled requireds
const empty = await form.locator("input[required], select[required], textarea[required]").evaluateAll((els) =>
  els.filter((e) => !e.value && e.type !== "checkbox" ? e.name : e.type === "checkbox" && !e.checked ? e.name : null).filter(Boolean)
);
console.log("still-empty required:", empty.join(", ") || "none");

// anti-spam min-fill-time check — wait like a human would
await page.waitForTimeout(12000);

const [resp] = await Promise.all([
  page.waitForResponse((r) => r.request().method() === "POST", { timeout: 30000 }).catch(() => null),
  form.locator('button[type="submit"], input[type="submit"]').first().click(),
]);
console.log("POST status:", resp ? resp.status() : "no POST captured");
await page.waitForTimeout(3000);
console.log("URL now:", page.url());
const bodyText = await page.locator("body").innerText();
const err = bodyText.match(/(error|failed|missing|try again|something went wrong)[^\n]*/i);
const ok = bodyText.match(/(thank you|received|confirmed|we.?ll (be in touch|call))[^\n]*/i);
console.log("outcome:", ok ? `SUCCESS: ${ok[0]}` : err ? `ERROR: ${err[0]}` : "unclear");
await page.screenshot({ path: ".devin/img-check/live-form-result.png" });
await browser.close();
