import { expect, test } from "@playwright/test";

test("silent auction page renders auction cards without exposing contact details", async ({ page }) => {
  await page.goto("/silent-auction");

  await expect(page.getByRole("heading", { level: 1, name: "Silent Auction" })).toBeVisible();
  await expect(page.getByText("Bids are pledges. Winning bidders will be contacted")).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: "St. Cecilia Basket" })).toBeVisible();
  await expect(page.getByText("Current highest bid")).toBeVisible();
  await expect(page.getByText("$40")).toBeVisible();
  await expect(page.getByRole("button", { name: "Place Bid" })).toBeVisible();

  await expect(page.locator("body")).not.toContainText("bidder_email");
  await expect(page.locator("body")).not.toContainText("bidder_phone");

  const footerNav = page.getByRole("navigation", { name: "Footer navigation" });
  await expect(footerNav.getByRole("link", { name: "Silent Auction" })).toHaveAttribute("href", "/silent-auction");

  const viewport = page.viewportSize();
  if ((viewport?.width ?? 0) < 960) {
    await page.getByRole("button", { name: "Open navigation menu" }).click();
    await expect(page.locator("#primary-navigation").getByRole("link", { name: "Silent Auction" })).toHaveAttribute(
      "href",
      "/silent-auction",
    );
  } else {
    await expect(page.locator("#primary-navigation-desktop").getByRole("link", { name: "Silent Auction" })).toHaveAttribute(
      "href",
      "/silent-auction",
    );
  }
});

test("silent auction bid form validates low bids and setup failures clearly", async ({ page }) => {
  await page.goto("/silent-auction");

  await page.getByRole("button", { name: "Place Bid" }).click();
  await page.getByLabel("Name").fill("Test Bidder");
  await page.getByLabel("Email").fill("bidder@example.com");
  await page.getByLabel("Phone").fill("555-123-4567");
  await page.getByLabel("Bid amount").fill("35");
  await page.getByRole("button", { name: "Submit Pledge Bid" }).click();

  await expect(page.getByText("higher than the current highest bid of $40")).toBeVisible();

  await page.getByLabel("Bid amount").fill("45");
  await page.getByRole("button", { name: "Submit Pledge Bid" }).click();

  await expect(page.getByText("Supabase is not configured yet")).toBeVisible();
});
