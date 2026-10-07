import { test, expect } from "@playwright/test";
import { AxeBuilder } from "@axe-core/playwright";
import { mkdirSync } from "node:fs";

const SHOT_DIR = "phase1-screenshots";

test.beforeAll(() => mkdirSync(SHOT_DIR, { recursive: true }));

test("styleguide renders, no console errors, no serious axe violations", async ({
  page,
}, testInfo) => {
  const errors: string[] = [];
  page.on("console", (m) => {
    if (m.type() === "error" || (m.type() === "warning" && m.text().includes("either width or height modified"))) errors.push(m.text());
  });
  page.on("pageerror", (e) => errors.push(String(e)));

  await page.goto("/styleguide", { waitUntil: "networkidle" });
  await expect(page.locator("main.sg")).toBeVisible();

  // Exercise the interactive specimens so lazy errors surface.
  await page.locator(".tab").nth(1).click();
  await page.locator(".carnav .arr").last().click();
  await page.locator(".faq summary").first().click();
  await page.locator(".pill").nth(1).click();

  await page.screenshot({
    path: `${SHOT_DIR}/styleguide-${testInfo.project.name}.png`,
    fullPage: true,
  });

  expect(errors, `console errors: ${errors.join("\n")}`).toEqual([]);

  const results = await new AxeBuilder({ page }).analyze();
  const serious = results.violations.filter(
    (v) => v.impact === "serious" || v.impact === "critical",
  );
  expect(
    serious,
    serious.map((v) => `${v.id}: ${v.help} (${v.nodes.length} nodes)`).join("\n"),
  ).toEqual([]);
});

test("v2 layout, source copy, card semantics and viewport safety", async ({ page }) => {
  await page.goto("/styleguide/", { waitUntil: "networkidle" });
  await expect(page.locator(".hero2.hb")).toBeVisible();
  await expect(page.locator(".concern-b .crow")).toHaveCount(8);
  await expect(page.locator(".wc .bento .gcard")).toHaveCount(6);
  await expect(page.locator(".tracker2 .step2")).toHaveCount(6);
  await expect(page.locator(".da .seal").first()).toBeVisible();
  await expect(page.locator(".svc").first()).toBeVisible();
  await expect(page.locator(".arch2, .sgc, .gchip")).toHaveCount(0);
  await expect(page.locator("a a, a button, button a")).toHaveCount(0);
  await expect(page.locator(".hero2 .cut")).toHaveCSS("animation-name", "none");
  await expect(page.locator("body")).not.toContainText("Apollo Fertility");
  for (const name of ["AIIMS", "Sakra", "KJK", "Kanke", "Garbhagudi", "Motherhood"]) {
    await expect(page.locator(".wc")).not.toContainText(name);
  }
  const viewport = await page.evaluate(() => ({ width: innerWidth, clientWidth: document.documentElement.clientWidth, scrollWidth: document.documentElement.scrollWidth, meta: document.querySelector('meta[name="viewport"]')?.getAttribute('content'), oversized: [...document.querySelectorAll('main *')].filter((element) => element.getBoundingClientRect().width > document.documentElement.clientWidth).slice(0, 12).map((element) => ({ tag: element.tagName, className: element.getAttribute('class'), width: element.getBoundingClientRect().width })) }));
  expect(viewport.width, JSON.stringify(viewport)).toBe(page.viewportSize()!.width);
  await expect(page.locator('meta[name="viewport"]')).toHaveAttribute("content", /width=device-width/);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  const media = await page.locator(".hero2 .media").boundingBox();
  const head = await page.locator(".hero2 .head").boundingBox();
  expect(media).not.toBeNull();
  expect(head).not.toBeNull();
  if (page.viewportSize()!.width > 860) expect(media!.x).toBeLessThan(head!.x);
  else expect(media!.y).toBeLessThan(head!.y);
});

test("all tab text is in the initial HTML and tabs support keyboard navigation", async ({ page, request }) => {
  const response = await request.get("/styleguide/");
  const html = await response.text();
  for (const text of ["Fertility evaluation", "Reproductive immunology", "Adolescent gynaecology"]) {
    expect(html).toContain(text);
  }
  await page.goto("/styleguide/", { waitUntil: "networkidle" });
  const first = page.getByRole("tab", { name: "Fertility", exact: true });
  await first.focus();
  await page.keyboard.press("ArrowRight");
  await expect(page.getByRole("tab", { name: "Treatments", exact: true })).toBeFocused();
  await expect(page.getByRole("tab", { name: "Treatments", exact: true })).toHaveAttribute("aria-selected", "true");
  await expect(page.getByRole("tabpanel", { name: "Treatments", exact: true })).toBeVisible();
});

test("autoplay stays paused while focus remains and reduced motion disables movement", async ({ page }) => {
  await page.goto("/styleguide/", { waitUntil: "networkidle" });
  const row = page.locator("#svc-0");
  await row.scrollIntoViewIfNeeded();
  await row.locator("a").first().focus();
  const initial = await row.evaluate((element) => element.scrollLeft);
  await page.waitForTimeout(10_000);
  expect(await row.evaluate((element) => element.scrollLeft)).toBe(initial);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload({ waitUntil: "networkidle" });
  await page.locator("#svc-0").scrollIntoViewIfNeeded();
  const before = await page.locator("#svc-0").evaluate((element) => element.scrollLeft);
  await page.waitForTimeout(5_000);
  expect(await page.locator("#svc-0").evaluate((element) => element.scrollLeft)).toBe(before);
});

test("reference Why EVE icons use the matching vector shapes and micro-motion", async ({ page }) => {
  await page.goto("/styleguide/", { waitUntil: "networkidle" });
  await expect(page.locator(".wc .gcard:not(.feat) .i img")).toHaveCount(0);
  await expect(page.locator(".wc .mi-clock .hand")).toHaveCount(1);
  await expect(page.locator(".wc .mi-look .lens")).toHaveCount(1);
  await expect(page.locator(".wc .mi-chat .d")).toHaveCount(3);
  await expect(page.locator(".wc .mi-cap")).toHaveCount(1);
  await expect(page.locator(".wc .mi-home .door")).toHaveCount(1);
  await page.locator(".wc").scrollIntoViewIfNeeded();
  await expect(page.locator(".wc")).toHaveClass(/\bin\b/);
  await expect(page.locator(".mi-clock .hand")).toHaveCSS("animation-duration", "2.4s");
  await expect(page.locator(".mi-chat .d").first()).toHaveCSS("animation-iteration-count", "3");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator(".mi-clock .hand")).toHaveCSS("animation-name", "none");
  await expect(page.locator(".mi-chat .d").first()).toHaveCSS("animation-name", "none");
  await page.locator(".wc").screenshot({ path: `${SHOT_DIR}/why-icons-${page.viewportSize()!.width}.png` });
});

test("visit guide uses reference artwork with staggered one-shot animation", async ({ page }, testInfo) => {
  await page.goto("/styleguide/", { waitUntil: "networkidle" });
  const guide = page.locator("#visit-guide");
  const artwork = guide.locator("svg.ill");
  await guide.scrollIntoViewIfNeeded();
  await expect(artwork).toHaveAttribute("viewBox", "0 0 140 140");
  await expect(artwork.locator(".bgc")).toHaveAttribute("r", "56");
  const expected = ["calendar", "clipboard", "conversation", "tests", "options", "follow-up"];
  for (const [index, name] of expected.entries()) {
    await page.locator(".step2").nth(index).click();
    await expect(artwork).toHaveAttribute("data-artwork", name);
    await expect(artwork.locator(".dr, .blk, .turn").first()).toHaveCount(1);
    await guide.scrollIntoViewIfNeeded();
    await expect(guide.locator(".trk-ill")).toHaveClass(/\bin\b/);
    const animated = artwork.locator(".dr, .blk, .turn").first();
    expect(await animated.evaluate((element) => getComputedStyle(element).animationName)).not.toBe("none");
    if (index === 2 || index === 4) {
      await page.emulateMedia({ reducedMotion: "reduce" });
      await guide.screenshot({ path: `${SHOT_DIR}/visit-${name}-${testInfo.project.name}.png` });
      await page.emulateMedia({ reducedMotion: "no-preference" });
    }
  }
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(artwork.locator(".turn")).toHaveCSS("animation-name", "none");
});
