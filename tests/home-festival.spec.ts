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

  const tequilaCard = page.locator(".basket-theme-card").filter({
    has: page.getByRole("heading", { level: 5, name: "Tequila" }),
  });
  const faithCard = page.locator(".basket-theme-card").filter({
    has: page.getByRole("heading", { level: 5, name: "Faith" }),
  });

  const tequilaBackground = await tequilaCard.evaluate((element) => {
    return window.getComputedStyle(element, "::before").backgroundImage;
  });
  const faithBackground = await faithCard.evaluate((element) => {
    return window.getComputedStyle(element, "::before").backgroundImage;
  });

  expect(tequilaBackground).toContain("/images/basket-themes/tequila.webp");
  expect(faithBackground).toContain("/images/basket-themes/faith.webp");

  const imageToggle = page.getByRole("switch", { name: "Show background images" });
  await expect(imageToggle).toHaveAttribute("aria-checked", "true");
  await imageToggle.click();
  await expect(imageToggle).toHaveAttribute("aria-checked", "false");
  await expect(page.locator("main")).toHaveAttribute("data-background-images", "false");

  const tequilaBackgroundAfterToggle = await tequilaCard.evaluate((element) => {
    return window.getComputedStyle(element, "::before").opacity;
  });

  expect(tequilaBackgroundAfterToggle).toBe("0");

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
  await expect(page.getByRole("switch", { name: "Show background images" })).toHaveCount(0);

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
  await expect(page.locator(".page-intro-text-first .page-intro-copy")).toHaveCSS("text-align", "center");
  await expect(page.getByRole("heading", { level: 2, name: "Event Details" })).toBeVisible();
  const titleToInfoGap = await page.evaluate(() => {
    const title = document.querySelector(".page-intro h1");
    const info = document.querySelector(".info-bar");

    if (!title || !info) {
      return Number.POSITIVE_INFINITY;
    }

    return info.getBoundingClientRect().top - title.getBoundingClientRect().bottom;
  });

  expect(titleToInfoGap).toBeLessThanOrEqual(150);
  await expect(page.getByText("Parking available in lot and marked field")).toBeVisible();
  await expect(page.getByText("Tents, tables, and chairs provided")).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Need wristbands, tickets, or vendor pricing?" })).toBeVisible();
  await expect(page.locator(".visit-purchase-card").getByRole("link", { name: "Buy Wristbands & Tickets" })).toHaveAttribute("href", "/buy-wristbands-tickets");
  await expect(page.getByRole("heading", { level: 2, name: "Know Before You Go" })).toHaveCount(0);
  await expect(page.getByRole("heading", { level: 3, name: "About Summer Fest" })).toHaveCount(0);
  await expect(page.getByRole("heading", { level: 2, name: "Admission Overview" })).toHaveCount(0);
  await expect(page.getByRole("heading", { level: 2, name: "Frequently Asked Questions" })).toBeVisible();

  await expect(page.getByRole("heading", { level: 3, name: "Wristbands vs Tickets" })).toHaveCount(0);
  await expect(page.getByRole("heading", { level: 3, name: "Pricing" })).toHaveCount(0);
  await expect(page.getByRole("heading", { level: 2, name: "Food & Drink" })).toHaveCount(0);
  await expect(page.getByRole("heading", { level: 2, name: "Activities & Games" })).toHaveCount(0);
  await expect(page.getByText("Unlimited games and activities")).toHaveCount(0);
  await expect(page.getByText("Pay one item at a time")).toHaveCount(0);
  await expect(page.getByRole("link", { name: "Open payment link for 1 wristband" })).toHaveCount(0);
  await expect(page.getByRole("link", { name: "Open Vanco Payment Link" })).toHaveCount(0);
});

test("buy wristbands and tickets page owns admission and pricing", async ({ page }) => {
  await page.goto("/buy-wristbands-tickets");

  await expect(page.getByRole("heading", { level: 1, name: "Buy Wristbands & Tickets" })).toBeVisible();
  await expect(page.locator(".page-intro-text-first .page-intro-copy")).toHaveCSS("text-align", "center");
  await expect(page.getByRole("heading", { level: 2, name: "Admission Overview" })).toBeVisible();
  await expect(page.locator(".admission-free-banner").getByText("Admission is free", { exact: true })).toBeVisible();
  await expect(page.getByText("Use this page to compare wristbands")).toHaveCount(0);
  await expect(page.getByText("guests can choose optional purchases")).toHaveCount(0);
  await expect(page.getByRole("heading", { level: 3, name: "Wristbands vs Tickets" })).toBeVisible();
  await expect(page.getByText("Unlimited games and activities")).toBeVisible();
  await expect(page.getByText("Pay one item at a time")).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: "Pricing" })).toBeVisible();
  await expect(page.locator(".pricing-board-header > span")).toHaveCount(0);
  await expect(page.getByText(/Full pricing is now in effect/)).toBeVisible();
  await expect(page.locator(".pricing-badge", { hasText: "Full price" })).toHaveCount(4);
  await expect(page.getByRole("link", { name: "Open payment link for 1 wristband" })).toContainText("$30");
  await expect(page.getByRole("link", { name: "Open payment link for 3 wristbands" })).toContainText("$75");
  await expect(page.getByRole("link", { name: "Open payment link for 5 tickets" })).toContainText("$6");
  await expect(page.getByText("Email htcc_festival@yahoo.com to register")).toBeVisible();
  await expect(page.getByRole("link", { name: "Open payment link for 1 wristband" })).toHaveAttribute(
    "href",
    "https://secure.myvanco.com/L-ZFPW/home",
  );
  await expect(page.getByRole("link", { name: "Open Vanco Payment Link" })).toHaveAttribute(
    "href",
    "https://secure.myvanco.com/L-ZFPW/home",
  );
});

test("buy wristbands and tickets page stays readable on tablet widths", async ({ page }) => {
  await page.setViewportSize({ width: 820, height: 1180 });
  await page.goto("/buy-wristbands-tickets");

  const main = page.locator("main");
  const overflow = await main.evaluate((element) => ({
    clientWidth: element.clientWidth,
    scrollWidth: element.scrollWidth,
  }));
  const gridColumnCount = await page.locator(".buy-wristbands-tickets-page .visit-overview-grid").evaluate(
    (element) => getComputedStyle(element).gridTemplateColumns.split(" ").length,
  );

  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.clientWidth + 1);
  expect(gridColumnCount).toBe(1);
  await expect(page.locator(".pricing-badge", { hasText: "Full price" }).first()).toBeVisible();
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
  const viewport = page.viewportSize();

  if ((viewport?.width ?? 0) < 960) {
    const menuButton = page.getByRole("button", { name: "Open navigation menu" });
    await expect(menuButton.getByText("Menu")).toBeVisible();
    await menuButton.click();
    await expect(page.locator("#primary-navigation").getByRole("link", { name: "Day-Of Guide" })).toHaveAttribute("href", "/day-of-guide");
    await expect(page.locator("#primary-navigation").getByRole("link", { name: "Buy Wristbands & Tickets" })).toHaveAttribute("href", "/buy-wristbands-tickets");
  } else {
    await expect(page.locator("#primary-navigation-desktop").getByRole("link", { name: "Day-Of Guide" })).toHaveAttribute("href", "/day-of-guide");
    await expect(page.locator("#primary-navigation-desktop").getByRole("link", { name: "Buy Wristbands & Tickets" })).toHaveAttribute("href", "/buy-wristbands-tickets");
  }

  await expect(footerNav.getByRole("link", { name: "Day-Of Guide" })).toHaveAttribute("href", "/day-of-guide");
  await expect(footerNav.getByRole("link", { name: "Plan Your Visit" })).toHaveAttribute("href", "/plan-your-visit");
  await expect(footerNav.getByRole("link", { name: "Buy Wristbands & Tickets" })).toHaveAttribute("href", "/buy-wristbands-tickets");
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
  await expect(page).toHaveURL(/\/day-of-guide$/);

  await page.goto("/contact");
  await expect(page).toHaveURL(/\/get-involved$/);
});

test("day-of guide renders tentative schedule and activity content", async ({ page }) => {
  await page.goto("/day-of-guide");

  await expect(page.getByRole("heading", { level: 1, name: "Day-Of Guide" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Tentative Schedule" })).toBeVisible();
  await expect(page.getByText("Time slot")).toHaveCount(0);
  await expect(page.locator(".day-of-activity-card").getByText("Tentative", { exact: true })).toHaveCount(0);
  const titleToScheduleGap = await page.evaluate(() => {
    const title = document.querySelector(".page-intro h1");
    const schedule = document.querySelector(".day-of-schedule-section");

    if (!title || !schedule) {
      return Number.POSITIVE_INFINITY;
    }

    return schedule.getBoundingClientRect().top - title.getBoundingClientRect().bottom;
  });

  expect(titleToScheduleGap).toBeLessThanOrEqual(150);
  await expect(page.getByText("Tentative schedule: times and match order may shift on festival day.")).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Tentative Activities" })).toBeVisible();
  await expect(page.getByText("Tentative activities: booths, contests, and game stations may be adjusted before or during the event.")).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Need parking, seating, or location info?" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Open Plan Your Visit" })).toHaveAttribute("href", "/plan-your-visit");

  const scheduleSection = page.locator(".day-of-schedule-section");
  await expect(scheduleSection.getByRole("heading", { level: 3, name: "11:30 AM" })).toBeVisible();
  await expect(scheduleSection.getByText("Prayer and welcome", { exact: true })).toBeVisible();
  await expect(scheduleSection.getByText("Volleyball tournament playoff game", { exact: true })).toBeVisible();
  await expect(scheduleSection.getByText("Tug of war championships", { exact: true })).toBeVisible();
  await expect(scheduleSection.getByText("Watermelon eating contest", { exact: true })).toBeVisible();
  await expect(scheduleSection.getByText("Horseshoes / Corn Hole Tournament, match 3 and 4 winners", { exact: true })).toBeVisible();

  const activitySection = page.locator(".day-of-activities-section");
  await expect(activitySection.getByRole("heading", { level: 3, name: "Games & Family Fun" })).toBeVisible();
  await expect(activitySection.getByRole("heading", { level: 3, name: "Contests & Tournament Activities" })).toBeVisible();
  await expect(activitySection.getByRole("heading", { level: 3, name: "Booths & Festival Extras" })).toBeVisible();
  await expect(activitySection.getByText("Duck Pond", { exact: true })).toBeVisible();
  await expect(activitySection.getByText("Bean Bag Toss", { exact: true })).toBeVisible();
  await expect(activitySection.getByText("Tug of War Contest", { exact: true })).toBeVisible();
  await expect(activitySection.getByText("Mary's Crafts", { exact: true })).toBeVisible();
  await expect(activitySection.getByText("Paper Bag Booth", { exact: true })).toBeVisible();
});

test("day-of guide stays mobile friendly without horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/day-of-guide");

  const main = page.locator("main");
  const overflow = await main.evaluate((element) => ({
    clientWidth: element.clientWidth,
    scrollWidth: element.scrollWidth,
  }));

  expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.clientWidth + 1);
  await expect(page.locator("#primary-navigation-desktop")).toBeHidden();
  await expect(page.getByRole("heading", { level: 2, name: "Tentative Schedule" })).toBeVisible();
  await expect(page.getByText("Prayer and welcome", { exact: true })).toBeVisible();
  await expect(page.getByText("Nerf or Water Gun Ping Pong Ball Shoot", { exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "Open Plan Your Visit" })).toBeVisible();
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
