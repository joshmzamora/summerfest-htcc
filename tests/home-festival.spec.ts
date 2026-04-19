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

  await expect(page.getByRole("heading", { level: 1, name: "Donate, Register, Volunteer" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Choose a Form" })).toBeVisible();

  const registrationLink = page.getByRole("link", { name: "Open Registration Form" });
  const donationLink = page.getByRole("link", { name: "Open Donation Form" });
  const signUpGrid = page.locator(".sign-up-grid");
  const registerCard = signUpGrid.locator(".sign-up-card").filter({
    has: page.getByRole("heading", { level: 3, name: "Register" }),
  });
  const donateCard = signUpGrid.locator(".sign-up-card").filter({
    has: page.getByRole("heading", { level: 3, name: "Donate" }),
  });

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
  await expect(donateCard.getByRole("heading", { level: 4, name: "Silent Auction Basket Theme Ideas" })).toBeVisible();
  await expect(registerCard.getByText("Silent Auction Basket Theme Ideas")).toHaveCount(0);

  const sportsGroup = donateCard.locator(".basket-theme-group").filter({ hasText: "Sports, Outdoors & Local Pride" });
  const sportsTrigger = sportsGroup.locator(".basket-theme-trigger");

  await sportsTrigger.scrollIntoViewIfNeeded();
  await sportsTrigger.click();
  await expect(sportsGroup.locator(".basket-theme-toggle")).toBeChecked();
  await expect(sportsGroup.getByText("Texas", { exact: true })).toBeVisible();
  await expect(sportsGroup.getByText("Pool Day", { exact: true })).toBeVisible();
  await expect(sportsGroup.getByText("Texas-shaped cutting board")).toBeVisible();

  const foodGroup = donateCard.locator(".basket-theme-group").filter({ hasText: "Food & Hosting" });

  await foodGroup.locator(".basket-theme-trigger").click();
  await expect(foodGroup.locator(".basket-theme-toggle")).toBeChecked();
  await expect(foodGroup.getByText("Movie Night", { exact: true })).toBeVisible();
  await expect(foodGroup.getByText("Reusable popcorn bowls")).toBeVisible();

  const faithGroup = donateCard.locator(".basket-theme-group").filter({ hasText: "Faith, School & Seasonal" });

  await faithGroup.locator(".basket-theme-trigger").click();
  await expect(faithGroup.locator(".basket-theme-toggle")).toBeChecked();
  await expect(faithGroup.getByText("Catholic", { exact: true })).toBeVisible();
  await expect(faithGroup.getByText("Holy water bottle")).toBeVisible();

  await expect(page.getByRole("heading", { level: 2, name: "Need the Parish Payment Portal?" })).toBeVisible();
  await expect(page.locator("body")).not.toContainText("1Gr_VpCTN1gbnyRrS_VXAmGgqlcWsQgErWRmKhDVUO3g");
});

test("donate basket ideas stay compact on mobile", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/get-involved");

  const donateCard = page.locator(".sign-up-card").filter({
    has: page.getByRole("heading", { level: 3, name: "Donate" }),
  });
  const basketSection = donateCard.locator(".basket-theme-section");
  const sportsGroup = donateCard.locator(".basket-theme-group").filter({ hasText: "Sports, Outdoors & Local Pride" });
  const sportsTrigger = sportsGroup.locator(".basket-theme-trigger");

  await expect(donateCard.getByRole("link", { name: "Open Donation Form" })).toBeVisible();
  await expect(basketSection).toBeVisible();

  const widths = await basketSection.evaluate((element) => ({
    clientWidth: element.clientWidth,
    scrollWidth: element.scrollWidth,
  }));

  expect(widths.scrollWidth).toBeLessThanOrEqual(widths.clientWidth + 1);

  await sportsTrigger.scrollIntoViewIfNeeded();
  await sportsTrigger.click();
  await expect(sportsGroup.locator(".basket-theme-toggle")).toBeChecked();
  await expect(sportsGroup.getByText("Pool Day", { exact: true })).toBeVisible();

  const triggerBox = await sportsTrigger.boundingBox();

  expect(triggerBox).not.toBeNull();
  expect(triggerBox?.height ?? 0).toBeGreaterThan(44);
});

test("basket themes page expands mobile controls near the top and condenses them on scroll", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/get-involved/basket-themes");

  await expect(page.getByRole("heading", { level: 1, name: "Silent Auction Basket Theme Ideas" })).toBeVisible();

  const controls = page.locator(".basket-controls");
  const filterScroll = controls.locator(".filter-scroll");
  const searchInput = controls.locator(".basket-search-input");
  const categoryTab = page.getByRole("button", { name: "Relaxation & Self-Care" });
  const main = page.locator("main");

  await expect(controls).toHaveAttribute("data-condensed", "false");
  await expect(categoryTab).toBeVisible();

  const searchBox = await searchInput.boundingBox();

  expect(searchBox).not.toBeNull();

  if (!searchBox) {
    throw new Error("Expected the basket search input to be measurable.");
  }

  expect(searchBox.x).toBeLessThan(18);
  expect(390 - (searchBox.x + searchBox.width)).toBeLessThan(18);

  const expandedFilterState = await filterScroll.evaluate((element) => {
    const styles = window.getComputedStyle(element);

    return {
      flexWrap: styles.flexWrap,
      clientWidth: element.clientWidth,
      scrollWidth: element.scrollWidth,
    };
  });

  expect(expandedFilterState.flexWrap).toBe("wrap");
  expect(expandedFilterState.scrollWidth).toBeLessThanOrEqual(expandedFilterState.clientWidth + 1);

  const initialOverflow = await main.evaluate((element) => ({
    clientWidth: element.clientWidth,
    scrollWidth: element.scrollWidth,
  }));

  expect(initialOverflow.scrollWidth).toBeLessThanOrEqual(initialOverflow.clientWidth + 1);

  await page.evaluate(() => window.scrollTo(0, 720));
  await expect(controls).toHaveAttribute("data-condensed", "true");

  const condensedFilterState = await filterScroll.evaluate((element) => {
    const styles = window.getComputedStyle(element);

    return {
      flexWrap: styles.flexWrap,
      clientWidth: element.clientWidth,
      scrollWidth: element.scrollWidth,
      overflowX: styles.overflowX,
    };
  });

  expect(condensedFilterState.flexWrap).toBe("nowrap");
  expect(condensedFilterState.overflowX).toBe("auto");
  expect(condensedFilterState.scrollWidth).toBeGreaterThan(condensedFilterState.clientWidth + 1);

  await categoryTab.click();
  await expect(categoryTab).toHaveClass(/is-active/);

  await searchInput.fill("Whiskey");
  await expect(page.getByRole("heading", { level: 5, name: "Whiskey" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 5, name: "Book Lover" })).toHaveCount(0);

  const finalOverflow = await main.evaluate((element) => ({
    clientWidth: element.clientWidth,
    scrollWidth: element.scrollWidth,
  }));

  expect(finalOverflow.scrollWidth).toBeLessThanOrEqual(finalOverflow.clientWidth + 1);
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
  await expect(page).toHaveURL(/\/get-involved$/);
});

test("plan your visit page stays focused on logistics", async ({ page }) => {
  await page.goto("/plan-your-visit");

  await expect(page.getByRole("heading", { level: 1, name: "What You Need to Know" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Event Details" })).toBeVisible();
  await expect(page.getByText("Parking available in lot and marked field")).toBeVisible();
  await expect(page.getByText("Tents, tables, and chairs provided")).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Admission Overview" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Know Before You Go" })).toHaveCount(0);
  await expect(page.getByRole("heading", { level: 3, name: "About Summer Fest" })).toHaveCount(0);
  await expect(page.getByText("Admission is free, and guests can choose optional purchases")).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Frequently Asked Questions" })).toBeVisible();

  await expect(page.getByRole("heading", { level: 3, name: "Wristbands vs Tickets" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: "Pricing" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Food & Drink" })).toHaveCount(0);
  await expect(page.getByRole("heading", { level: 2, name: "Activities & Games" })).toHaveCount(0);
  await expect(page.getByText("Unlimited games and activities")).toBeVisible();
  await expect(page.getByText("Pay one item at a time")).toBeVisible();
  await expect(page.getByRole("link", { name: "Open payment link for 1 wristband" })).toHaveAttribute(
    "href",
    "https://secure.myvanco.com/L-ZFPW/home",
  );
  await expect(page.getByRole("link", { name: "Open Vanco Payment Link" })).toHaveAttribute(
    "href",
    "https://secure.myvanco.com/L-ZFPW/home",
  );
});

test("legacy what to expect route now redirects to plan your visit", async ({ page }) => {
  await page.goto("/what-to-expect");

  await expect(page).toHaveURL(/\/plan-your-visit$/);
});

test("navigation, home festival sections, and legacy routes reflect the consolidated pages", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("link", { name: "Learn More" })).toHaveAttribute("href", "/plan-your-visit");
  await expect(page.getByRole("heading", { level: 2, name: "Festival Day for Families, Friends, and Neighbors" })).toBeVisible();
  await expect(page.getByText("A full day of food, fun, and friendly competition.")).toBeVisible();
  await expect(page.getByText("Food booths and sweet treats")).toBeVisible();
  const foodDrinkSection = page.locator("#food-drink");
  const activitiesSection = page.locator("#activities-games");

  await expect(foodDrinkSection.getByRole("heading", { level: 2, name: "Food & Drink" })).toBeVisible();
  await expect(activitiesSection.getByRole("heading", { level: 2, name: "Activities & Games" })).toBeVisible();
  await expect(foodDrinkSection.getByText("Brisket sandwiches", { exact: true })).toBeVisible();
  await expect(foodDrinkSection.getByText("Turkey legs", { exact: true })).toBeVisible();
  await expect(foodDrinkSection.getByText("Funnel cakes", { exact: true })).toBeVisible();
  await expect(foodDrinkSection.getByText("Fruit cups", { exact: true })).toBeVisible();
  await expect(foodDrinkSection.getByText("Margaritas", { exact: true })).toBeVisible();
  await expect(foodDrinkSection.getByText("Beer", { exact: true })).toBeVisible();
  await expect(foodDrinkSection.getByText("Soda", { exact: true })).toBeVisible();
  await expect(foodDrinkSection.getByText("Water", { exact: true })).toBeVisible();
  await expect(activitiesSection.getByText("Family-friendly games", { exact: true })).toBeVisible();
  await expect(activitiesSection.getByText("Tournament competitions", { exact: true })).toBeVisible();
  await expect(activitiesSection.getByText("Volleyball", { exact: true })).toBeVisible();
  await expect(activitiesSection.getByText("Washers", { exact: true })).toBeVisible();
  await expect(activitiesSection.getByText("Tournament winner awards", { exact: true })).toBeVisible();
  await expect(activitiesSection.getByText("Gift card draw", { exact: true })).toBeVisible();
  await expect(activitiesSection.getByText("Silent auction", { exact: true })).toBeVisible();
  await expect(page.getByText("Festival board")).toHaveCount(0);
  await expect(page.getByText("Community partner banner row")).toHaveCount(0);
  await expect(page.locator(".card-grid .content-card")).toHaveCount(0);

  const footerNav = page.getByRole("navigation", { name: "Footer navigation" });
  await expect(footerNav.getByRole("link", { name: "Plan Your Visit" })).toHaveAttribute("href", "/plan-your-visit");
  await expect(footerNav.getByRole("link", { name: "Get Involved" })).toHaveAttribute("href", "/get-involved");
  await expect(footerNav.getByRole("link", { name: "Contact" })).toHaveCount(0);
  await expect(page.locator("#primary-navigation").getByRole("link", { name: "What to Expect" })).toHaveCount(0);
  await expect(page.locator("#primary-navigation").getByRole("link", { name: "Contact" })).toHaveCount(0);

  await page.goto("/event-info");
  await expect(page).toHaveURL(/\/plan-your-visit$/);

  await page.goto("/about");
  await expect(page).toHaveURL(/\/plan-your-visit$/);

  await page.goto("/faq");
  await expect(page).toHaveURL(/\/plan-your-visit$/);

  await page.goto("/food-drink");
  await expect(page).toHaveURL(/\/#food-drink$/);

  await page.goto("/activities");
  await expect(page).toHaveURL(/\/#activities-games$/);

  await page.goto("/contact");
  await expect(page).toHaveURL(/\/get-involved$/);
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
