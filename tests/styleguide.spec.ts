import { test, expect } from "@playwright/test";
import { AxeBuilder } from "@axe-core/playwright";
import { mkdirSync } from "node:fs";

const SHOT_DIR = "artifacts/screenshots";

test.beforeAll(() => mkdirSync(SHOT_DIR, { recursive: true }));

test("styleguide renders, no console errors, no serious axe violations", async ({
  page,
}, testInfo) => {
  const errors: string[] = [];
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
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
