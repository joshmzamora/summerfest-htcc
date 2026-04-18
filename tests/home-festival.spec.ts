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

test("plan your visit page stays focused on logistics", async ({ page }) => {
  await page.goto("/plan-your-visit");

  await expect(page.getByRole("heading", { level: 1, name: "Everything you need to know before festival day" })).toBeVisible();
  await expect(page.getByText("Parking available in lot and marked field")).toBeVisible();
  await expect(page.getByText("Tents, tables, and chairs provided")).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: "About Summer Fest" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: "Admission Overview" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Frequently Asked Questions" })).toBeVisible();

  await expect(page.getByRole("heading", { level: 2, name: "Wristbands vs Tickets" })).toHaveCount(0);
  await expect(page.getByRole("heading", { level: 2, name: "Pricing" })).toHaveCount(0);
  await expect(page.getByRole("heading", { level: 2, name: "Food & Drink" })).toHaveCount(0);
  await expect(page.getByRole("heading", { level: 2, name: "Activities & Games" })).toHaveCount(0);
});

test("what to expect page shows the festival experience sections in order", async ({ page }) => {
  await page.goto("/what-to-expect");

  await expect(page.getByRole("heading", { level: 1, name: "What to Expect at Summer Fest" })).toBeVisible();

  const sectionHeadings = await page.locator(".section-heading h2").allTextContents();
  expect(sectionHeadings).toEqual([
    "Introduction",
    "Wristbands vs Tickets",
    "Pricing",
    "Food & Drink",
    "Activities & Games",
  ]);

  const wristbandIcon = page.locator(".admission-explainer-icon.icon-wristband .admission-explainer-glyph-wristband");
  const ticketsIcon = page.locator(".admission-explainer-icon.icon-tickets .admission-explainer-glyph-tickets");

  await expect(wristbandIcon).toBeVisible();
  await expect(ticketsIcon).toBeVisible();

  const [wristbandMask, ticketsMask] = await Promise.all([
    wristbandIcon.evaluate((element) => {
      const styles = window.getComputedStyle(element);
      return styles.maskImage || styles.webkitMaskImage;
    }),
    ticketsIcon.evaluate((element) => {
      const styles = window.getComputedStyle(element);
      return styles.maskImage || styles.webkitMaskImage;
    }),
  ]);

  expect(wristbandMask).not.toBe("none");
  expect(ticketsMask).not.toBe("none");

  const pricingCards = page.locator(".pricing-grid .pricing-card");
  const firstPricingSummary = pricingCards.first().locator(".pricing-card-summary");

  await expect(pricingCards).toHaveCount(4);
  await expect(pricingCards.first()).toContainText("$25");
  await expect(pricingCards.first()).toContainText("1 wristband");
  await expect(pricingCards.first()).toHaveAttribute("href", "https://secure.myvanco.com/L-ZFPW/home");
  await expect(pricingCards.nth(1)).toHaveAttribute("href", "https://secure.myvanco.com/L-ZFPW/home");
  await expect(pricingCards.nth(2)).toHaveAttribute("href", "https://secure.myvanco.com/L-ZFPW/home");
  await expect(pricingCards.nth(3)).toHaveAttribute("href", "https://secure.myvanco.com/L-ZFPW/home");
  await expect(page.getByRole("link", { name: "Open Vanco Payment Link" })).toHaveAttribute(
    "href",
    "https://secure.myvanco.com/L-ZFPW/home",
  );

  const summaryColumns = await firstPricingSummary.evaluate((element) => window.getComputedStyle(element).gridTemplateColumns);
  expect(summaryColumns.split(" ").length).toBeGreaterThan(1);

  await expect(page.getByText("Brisket sandwiches")).toBeVisible();
  await expect(page.getByText("Turkey legs")).toBeVisible();
  await expect(page.getByText("Funnel cakes")).toBeVisible();
  await expect(page.getByText("Fruit cups")).toBeVisible();
  await expect(page.getByText("Margaritas")).toBeVisible();
  await expect(page.getByText("Beer")).toBeVisible();
  await expect(page.getByText("Soda")).toBeVisible();
  await expect(page.getByText("Water")).toBeVisible();
  await expect(page.getByText("Family-friendly games")).toBeVisible();
  await expect(page.getByText("Tournament competitions")).toBeVisible();
  await expect(page.getByText("Volleyball")).toBeVisible();
  await expect(page.getByText("Washers")).toBeVisible();
  await expect(page.getByText("Tournament winner awards")).toBeVisible();
  await expect(page.getByText("Gift card draw")).toBeVisible();
  await expect(page.getByText("Silent auction", { exact: true })).toBeVisible();
  await expect(page.getByText("Menu is still being finalized.")).toBeVisible();
  await expect(page.getByText("Full lineup is still being finalized.")).toBeVisible();
  await expect(page.locator("#primary-navigation a[aria-current='page']")).toHaveText("What to Expect");
});

test("navigation, discoverability links, and legacy routes reflect the page split", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("link", { name: "Learn More" })).toHaveAttribute("href", "/plan-your-visit");
  await expect(page.locator(".card-grid .content-card").filter({ hasText: "Plan Your Visit" })).toBeVisible();
  await expect(page.locator(".card-grid .content-card").filter({ hasText: "What to Expect" })).toBeVisible();

  const footerNav = page.getByRole("navigation", { name: "Footer navigation" });
  await expect(footerNav.getByRole("link", { name: "Plan Your Visit" })).toHaveAttribute("href", "/plan-your-visit");
  await expect(footerNav.getByRole("link", { name: "What to Expect" })).toHaveAttribute("href", "/what-to-expect");

  await page.goto("/event-info");
  await expect(page).toHaveURL(/\/plan-your-visit$/);

  await page.goto("/about");
  await expect(page).toHaveURL(/\/plan-your-visit$/);

  await page.goto("/faq");
  await expect(page).toHaveURL(/\/plan-your-visit$/);

  await page.goto("/food-drink");
  await expect(page).toHaveURL(/\/what-to-expect$/);

  await page.goto("/activities");
  await expect(page).toHaveURL(/\/what-to-expect$/);
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
