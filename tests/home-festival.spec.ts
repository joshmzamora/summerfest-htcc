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

test("get involved page exposes only the two live Summer Fest forms", async ({ page }) => {
  await page.goto("/get-involved");

  await expect(page.getByRole("heading", { level: 2, name: "Choose the form that fits your role" })).toBeVisible();

  const registrationLink = page.getByRole("link", { name: "Open Registration Form" });
  const donationLink = page.getByRole("link", { name: "Open Donation Form" });
  const signUpGrid = page.locator(".sign-up-grid");

  await expect(registrationLink).toBeVisible();
  await expect(donationLink).toBeVisible();
  await expect(registrationLink).toHaveAttribute(
    "href",
    "https://docs.google.com/forms/d/e/1FAIpQLSe9Z-FC43WnBFT__pQ3kTOlM_sxCGZFr0qVCkxr9oPAPj3j2A/viewform",
  );
  await expect(donationLink).toHaveAttribute(
    "href",
    "https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog",
  );

  await expect(signUpGrid.locator("li").filter({ hasText: "Volunteer sign-ups" })).toBeVisible();
  await expect(signUpGrid.locator("li").filter({ hasText: "Vendor registration" })).toBeVisible();
  await expect(signUpGrid.locator("li").filter({ hasText: "Tournament registration" })).toBeVisible();
  await expect(signUpGrid.locator("li").filter({ hasText: "Silent auction items" })).toBeVisible();
  await expect(signUpGrid.locator("li").filter({ hasText: "Monetary donations" })).toBeVisible();
  await expect(page.locator("body")).not.toContainText("1Gr_VpCTN1gbnyRrS_VXAmGgqlcWsQgErWRmKhDVUO3g");
});

test("home and contact pages reflect the new two-form signup flow", async ({ page }) => {
  await page.goto("/");

  const hero = page.locator(".hero-section");
  const countdownCard = hero.locator(".countdown-card");
  const calendarLink = hero.getByRole("link", { name: "Add to Calendar" });

  await expect(hero.getByRole("link", { name: "Register" })).toHaveAttribute(
    "href",
    "https://docs.google.com/forms/d/e/1FAIpQLSe9Z-FC43WnBFT__pQ3kTOlM_sxCGZFr0qVCkxr9oPAPj3j2A/viewform",
  );
  await expect(hero.getByRole("link", { name: "Donate" })).toHaveAttribute(
    "href",
    "https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog",
  );
  await expect(calendarLink).toHaveAttribute("href", "/api/calendar");
  await expect(calendarLink).toHaveAttribute("download", "");
  await expect(calendarLink).toBeVisible();

  const countdownRelation = await countdownCard.evaluate(
    (element, calendarAnchor) =>
      element.compareDocumentPosition(calendarAnchor as Node) & Node.DOCUMENT_POSITION_FOLLOWING,
    await calendarLink.elementHandle(),
  );

  expect(countdownRelation).toBeTruthy();

  await expect(page.getByRole("heading", { level: 2, name: "Ready to register, volunteer, or donate?" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Open Live Forms" })).toBeVisible();

  await page.goto("/contact");

  await expect(page.getByRole("heading", { level: 3, name: "Summer Fest form links" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: "Parish payment portal" })).toBeVisible();
  await expect(page.getByText("Summer Fest sign-ups and donation responses now use the live Google Forms.")).toBeVisible();
});

test("calendar route returns a downloadable ICS event", async ({ request }) => {
  const response = await request.get("/api/calendar");

  expect(response.ok()).toBeTruthy();
  expect(response.headers()["content-type"]).toContain("text/calendar");
  expect(response.headers()["content-disposition"]).toContain('attachment; filename="summer-fest-at-holy-trinity.ics"');

  const body = await response.text();

  expect(body).toContain("SUMMARY:Summer Fest at Holy Trinity");
  expect(body).toContain("LOCATION:3515 Trinity Dr\\, Mont Belvieu\\, TX 77580\\, USA");
  expect(body).toContain("DTSTART:20260531T163000Z");
  expect(body).toContain("DTEND:20260531T220000Z");
});
