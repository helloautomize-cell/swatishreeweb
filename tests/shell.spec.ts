import { test, expect, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const acceptConsent = (page: Page) =>
  page.addInitScript(() => {
    try {
      window.localStorage.setItem("eve-consent", JSON.stringify({ choice: "accepted", at: 0 }));
    } catch {
      /* ignore */
    }
  });

test("shell renders, mega menus open and close with Esc, panels stay in viewport", async ({ page }) => {
  await acceptConsent(page);
  await page.goto("/", { waitUntil: "networkidle" });
  const w = page.viewportSize()!.width;

  await expect(page.locator(".sh-hdr")).toBeVisible();
  await expect(page.locator(".sfooter")).toBeVisible();
  await expect(page.locator(".skip")).toBeAttached();

  if (w >= 1024) {
    await expect(page.locator(".sh-ubar")).toBeVisible();
    const triggers = page.locator(".nav-trigger");
    await expect(triggers).toHaveCount(3);

    for (const name of ["Services", "Treatments", "Conditions"]) {
      const trigger = page.getByRole("button", { name, exact: true });
      await trigger.click();
      await expect(trigger).toHaveAttribute("aria-expanded", "true");
      const panel = page.locator(".nav-item.open .mega-panel");
      await expect(panel).toBeVisible();
      const box = await panel.boundingBox();
      const vw = await page.evaluate(() => document.documentElement.clientWidth);
      expect(box && box.x >= -0.5 && box.x + box.width <= vw + 0.5, JSON.stringify(box)).toBeTruthy();

      // no overlapping links inside the open panel
      const overlap = await panel.evaluate((el) => {
        const rects = [...el.querySelectorAll("a")].map((a) => a.getBoundingClientRect());
        for (let i = 0; i < rects.length; i++)
          for (let j = i + 1; j < rects.length; j++)
            if (
              rects[i].left < rects[j].right - 1 &&
              rects[j].left < rects[i].right - 1 &&
              rects[i].top < rects[j].bottom - 1 &&
              rects[j].top < rects[i].bottom - 1
            )
              return [i, j];
        return null;
      });
      expect(overlap).toBeNull();

      await page.keyboard.press("Escape");
      await expect(trigger).toHaveAttribute("aria-expanded", "false");
      await expect(trigger).toBeFocused();
    }

    // desktop: floating WhatsApp fab attached, mobile bar hidden
    await expect(page.locator(".wa-fab")).toBeAttached();
    await expect(page.locator(".appbar")).not.toBeVisible();

    // no nested interactive elements in the shell
    await expect(page.locator(".sh-hdr a a, .sh-hdr a button, .sh-hdr button a, .mega a a, .sfooter a a, .sfooter button a")).toHaveCount(0);

    // axe: no serious/critical violations on home with the shell
    const axe = await new AxeBuilder({ page }).analyze();
    const serious = axe.violations.filter((v) => v.impact === "serious" || v.impact === "critical");
    expect(serious.map((v) => v.id).join(", ")).toBe("");
  } else {
    await expect(page.locator(".sh-ubar")).not.toBeVisible();
    await expect(page.locator(".sh-hdr nav")).not.toBeVisible();
  }
});

test("mobile menu accordions start closed and Esc closes the drawer", async ({ page }) => {
  await acceptConsent(page);
  await page.goto("/", { waitUntil: "networkidle" });
  if (page.viewportSize()!.width >= 1024) return;

  await page.getByRole("button", { name: "Open menu" }).click();
  const menu = page.locator(".mmenu.show");
  await expect(menu).toBeVisible();

  const accordions = menu.locator(".acc-b");
  await expect(accordions).toHaveCount(3);
  for (let i = 0; i < 3; i++) await expect(accordions.nth(i)).toHaveAttribute("aria-expanded", "false");

  await accordions.first().click();
  await expect(accordions.first()).toHaveAttribute("aria-expanded", "true");
  await expect(menu.locator(".acc-p").first()).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(page.locator(".mmenu.show")).toHaveCount(0);
});

test("mobile action bar: visible under 1024, call sheet lists both numbers, hidden on thank-you", async ({ page }) => {
  await acceptConsent(page);
  await page.goto("/", { waitUntil: "networkidle" });
  const w = page.viewportSize()!.width;
  const bar = page.locator(".appbar");

  if (w < 1024) {
    await expect(bar).toBeVisible();
    await expect(bar.locator("a, button")).toHaveCount(3);
    const pad = await bar.evaluate((el) => getComputedStyle(el).paddingBottom);
    expect(parseFloat(pad)).toBeGreaterThanOrEqual(6);

    await bar.getByRole("button", { name: "Call Now" }).click();
    const sheet = page.locator(".callsheet.show");
    await expect(sheet).toBeVisible();
    await expect(sheet.locator("a.num")).toHaveCount(2);
    await page.keyboard.press("Escape");
    await expect(sheet).not.toBeVisible();

    await page.goto("/thank-you/", { waitUntil: "networkidle" });
    await expect(page.locator(".appbar")).toHaveCount(0);
  } else {
    await expect(bar).not.toBeVisible();
  }
});

test("cookie banner stores the choice and cookie settings reopens it", async ({ page }) => {
  await page.goto("/", { waitUntil: "networkidle" });
  const banner = page.locator(".cookie");
  await expect(banner).toBeVisible();

  await banner.getByRole("button", { name: "Reject non-essential" }).click();
  await expect(banner).not.toBeVisible();
  expect(await page.evaluate(() => window.localStorage.getItem("eve-consent"))).toContain("rejected");

  await page.reload({ waitUntil: "networkidle" });
  await expect(page.locator(".cookie")).toHaveCount(0);

  await page.locator(".sfooter .cset").click();
  await expect(page.locator(".cookie")).toBeVisible();
  await page.locator(".cookie").getByRole("button", { name: "Accept" }).click();
  await expect(page.locator(".cookie")).not.toBeVisible();
});

test("breadcrumbs on thank-you and the custom 404 render", async ({ page, request }) => {
  await acceptConsent(page);
  await page.goto("/thank-you/", { waitUntil: "networkidle" });
  const crumbs = page.locator(".crumbs");
  await expect(crumbs).toBeVisible();
  await expect(crumbs.locator("li")).toHaveCount(2);
  await expect(crumbs.locator('[aria-current="page"]')).toHaveText("Thank you");
  await expect(page.locator("h1")).toContainText("Thank you, we have your");

  const res = await request.get("/no-such-page-here/");
  expect(res.status()).toBe(404);
  await page.goto("/no-such-page-here/", { waitUntil: "networkidle" });
  await expect(page.locator("h1")).toContainText("We could not find that");
});

test("header hides mobile bar typing state only under 1024", async ({ page }) => {
  await acceptConsent(page);
  if (page.viewportSize()!.width >= 1024) return;
  await page.goto("/styleguide/", { waitUntil: "networkidle" });
  const bar = page.locator(".appbar");
  await expect(bar).toBeVisible();
  const input = page.locator("input, textarea").first();
  await input.focus();
  await expect(bar).not.toBeVisible();
  await input.blur();
  await expect(bar).toBeVisible();
});
