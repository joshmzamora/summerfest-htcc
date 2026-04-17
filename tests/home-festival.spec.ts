import { expect, test } from "@playwright/test";

test("home page shows strong festival branding", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1, name: "Summer Fest at Holy Trinity" })).toBeVisible();
  await expect(page.locator(".hero-kicker span").filter({ hasText: "Parish Festival" })).toBeVisible();
  await expect(page.locator(".hero-kicker span").filter({ hasText: "Open to the Community" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Festival Grounds" })).toBeVisible();
  await expect(page.locator(".poster-list li span").filter({ hasText: "Food Booths" })).toBeVisible();
  await expect(page.locator(".poster-list li span").filter({ hasText: "Game Tents" })).toBeVisible();
  await expect(page.locator(".poster-list li span").filter({ hasText: "Tournaments" })).toBeVisible();
  await expect(page.locator(".poster-list li span").filter({ hasText: "Silent Auction" })).toBeVisible();
});
