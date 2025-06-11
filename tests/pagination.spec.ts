import { test, expect } from "@playwright/test";

test.describe("Pagination Tests", () => {
  test("should navigate through all pagination pages using 'Next' button", async ({ page }) => {
    await page.goto("/pagination/");

    let currentPage = 1;

    let nextButtonLocator = page.getByRole("link", { name: "Next" });

    const maxPages = 100;

    while ((await nextButtonLocator.isVisible()) && currentPage < maxPages) {
      await expect(nextButtonLocator).toBeEnabled();

      await nextButtonLocator.click();

      currentPage++;

      const currentPageLinkLocator = page.getByRole("link", { name: `${currentPage}`, exact: true });
      await currentPageLinkLocator.waitFor({ state: "visible", timeout: 45000 });

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
