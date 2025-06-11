import { test, expect } from "@playwright/test";

test.describe("Pagination Tests", () => {
  test("should navigate through all pagination pages using 'Next' button", async ({ page }) => {
    await page.goto("/pagination/");

    let currentPage = 1;

    let nextButtonLocator = page.getByRole("link", { name: "Next" });

    while (await nextButtonLocator.isVisible()) {
      await expect(nextButtonLocator).toBeEnabled();
      await nextButtonLocator.click();
      currentPage++;

      await page.waitForURL(`/pagination/${currentPage}`);

      await expect(page).toHaveURL(new RegExp(`/pagination/${currentPage}/?`));

      nextButtonLocator = page.getByRole("link", { name: "Next" });
    }

    await expect(nextButtonLocator).not.toBeVisible();
    await expect(page).toHaveURL(new RegExp(`/pagination/${currentPage}/?`));
  });

  test("should not have 'Previous' button on the first pagination page", async ({ page }) => {
    await page.goto("/pagination/");

    const prevButton = page.getByRole("link", { name: "Previous" });
    await expect(prevButton).not.toBeVisible();
  });
});
