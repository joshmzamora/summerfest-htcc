import { expect, test } from "@playwright/test";

test("home page shows strong festival branding", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1, name: "Summer Fest at Holy Trinity" })).toBeVisible();
  await expect(page.locator(".hero-kicker span").filter({ hasText: "Parish Festival" })).toBeVisible();
  await expect(page.locator(".hero-kicker span").filter({ hasText: "Open to the Community" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Festival Grounds" })).toBeVisible();
  await expect(page.locator(".poster-sticker-top")).toContainText("Food, Games, Auction");
  await expect(page.locator(".poster-sticker-family")).toContainText("Family Friendly");
  await expect(page.locator(".poster-benefit")).toContainText("Support Our New Building");
  await expect(page.locator(".poster-list li span").filter({ hasText: "Food Booths" })).toBeVisible();
  await expect(page.locator(".poster-list li span").filter({ hasText: "Game Tents" })).toBeVisible();
  await expect(page.locator(".poster-list li span").filter({ hasText: "Tournaments" })).toBeVisible();
  await expect(page.locator(".poster-list li span").filter({ hasText: "Silent Auction" })).toBeVisible();

  const scene = page.locator(".festival-scene");
  const familyBadge = page.locator(".poster-sticker-family");
  const benefitBadge = page.locator(".poster-benefit");
  const topBadge = page.locator(".poster-sticker-top");

  const [sceneBox, familyBox, benefitBox, topBox] = await Promise.all([
    scene.boundingBox(),
    familyBadge.boundingBox(),
    benefitBadge.boundingBox(),
    topBadge.boundingBox(),
  ]);
  const [topStyles, familyStyles, benefitStyles] = await Promise.all([
    topBadge.evaluate((element) => {
      const styles = window.getComputedStyle(element);

      return {
        clipPath: styles.clipPath,
        transform: styles.transform,
      };
    }),
    familyBadge.evaluate((element) => {
      const styles = window.getComputedStyle(element);

      return {
        clipPath: styles.clipPath,
        transform: styles.transform,
      };
    }),
    benefitBadge.evaluate((element) => {
      const styles = window.getComputedStyle(element);

      return {
        transform: styles.transform,
      };
    }),
  ]);

  expect(sceneBox).not.toBeNull();
  expect(familyBox).not.toBeNull();
  expect(benefitBox).not.toBeNull();
  expect(topBox).not.toBeNull();

  if (!sceneBox || !familyBox || !benefitBox || !topBox) {
    throw new Error("Expected festival scene and badges to be measurable.");
  }

  expect(familyBox.x - sceneBox.x).toBeLessThan(28);
  expect(sceneBox.y + sceneBox.height - (familyBox.y + familyBox.height)).toBeLessThan(28);
  expect(sceneBox.x + sceneBox.width - (benefitBox.x + benefitBox.width)).toBeLessThan(28);
  expect(sceneBox.y + sceneBox.height - (benefitBox.y + benefitBox.height)).toBeLessThan(28);
  expect(familyBox.x + familyBox.width).toBeLessThan(benefitBox.x);
  expect(topBox.height).toBeGreaterThan(32);
  expect(familyBox.height).toBeGreaterThan(32);
  expect(benefitBox.height).toBeGreaterThan(32);
  expect(topStyles.clipPath).toContain("polygon");
  expect(familyStyles.clipPath).not.toBe(topStyles.clipPath);
  expect(familyStyles.transform).not.toBe("none");
  expect(benefitStyles.transform).not.toBe("none");
});
