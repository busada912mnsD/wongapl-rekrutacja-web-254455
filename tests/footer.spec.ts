import { test, expect } from "@playwright/test";

test.describe("Footer Section Tests", () => {
  test("should display the footer text content", async ({ page }) => {
    await page.goto("/");
    const footerTextElement = page.locator(".footer-text-content");
    await expect(footerTextElement).toBeVisible();
  });

  test("should display footer anchors", async ({ page }) => {
    await page.goto("/");
    const footerAnchors = page.locator(".social-links a");
    const count = await footerAnchors.count();
    expect(count).toBeGreaterThan(0);
  });

  test("should take a screenshot of the homepage footer and compare it", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("footer")).toHaveScreenshot("footer-screenshot.png");
  });
});
