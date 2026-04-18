export const paymentUrl = "https://secure.myvanco.com/L-ZFPW/home";
export const donationFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog";
export const registrationFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSe9Z-FC43WnBFT__pQ3kTOlM_sxCGZFr0qVCkxr9oPAPj3j2A/viewform";
export const festivalLocation = "3515 Trinity Dr, Mont Belvieu, TX 77580, USA";
export const googleMapsLocationUrl =
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(festivalLocation)}`;

export const siteContent = {
  churchName: "Holy Trinity Catholic Church",
  eventName: "Summer Fest at Holy Trinity",
  tagline: "Food, games, tournaments, auctions, and family fun for the whole community",
  eventDate: "May 31, 2026",
  eventTime: "11:30 AM - 5:00 PM",
  location: festivalLocation,
  heroNote: "A parish celebration and fundraiser benefitting the building fund.",
  calendarEvent: {
    title: "Summer Fest at Holy Trinity",
    start: "2026-05-31T11:30:00-05:00",
    end: "2026-05-31T17:00:00-05:00",
    location: festivalLocation,
    description:
      "Food, games, tournaments, auctions, and family fun for the whole community. A parish celebration and fundraiser benefitting the building fund.",
    fileName: "summer-fest-at-holy-trinity.ics",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Event Info", href: "/event-info" },
    { label: "Get Involved", href: "/get-involved" },
    { label: "Contact", href: "/contact" },
  ],
  heroActions: [
    { label: "Volunteer", href: "/get-involved", variant: "primary" as const },
    { label: "Register", href: registrationFormUrl, variant: "secondary" as const, external: true },
    { label: "Donate", href: donationFormUrl, variant: "secondary" as const, external: true },
    { label: "Learn More", href: "/event-info", variant: "ghost" as const },
  ],
  quickInfo: [
    { label: "Date", value: "May 31, 2026", icon: "sun" },
    { label: "Time", value: "11:30 AM - 5:00 PM", icon: "clock" },
    {
      label: "Location",
      value: festivalLocation,
      icon: "pin",
      href: googleMapsLocationUrl,
      external: true,
      ariaLabel: "Open festival location in maps",
    },
    { label: "Parking", value: "Parking available in lot and marked field", icon: "wheel" },
    {
      label: "Seating",
      value: "Tents, tables, and chairs provided (We strongly encourage guests to bring their own chairs!)",
      icon: "chair",
    },
    { label: "Pets", value: "No pets allowed", icon: "paw" },
  ],
  admission: {
    title: "Admission",
    summary:
      "Admission is free, and guests can buy Summer Fest wristbands, ticket bundles, and vendor booth fees ahead of time.",
    bullets: [
      "Free admission for all guests",
      "Advance purchases are available online",
      "Use the Summer Fest forms for vendor registration and silent auction details",
    ],
    cta: {
      label: "Open Vanco Payment Link",
      href: paymentUrl,
      external: true,
    },
    explainer: [
      {
        title: "Wristband",
        icon: "wristband",
        headline: "Unlimited games and activities",
        description: "A wristband gives access to all games and activities throughout the day.",
        note: "Great for kids and anyone planning to play all day.",
      },
      {
        title: "Tickets",
        icon: "tickets",
        headline: "Pay one item at a time",
        description: "Tickets can be used for food and drink purchases and for individual games and activities.",
        note: "Tickets are not unlimited like wristbands.",
      },
    ],
    pricing: [
      {
        title: "1 wristband",
        price: "$25",
        description: "A simple option for one guest planning to enjoy the games and activities.",
      },
      {
        title: "3 wristbands",
        price: "$65",
        description: "A family-friendly bundle for three guests at a lower total price.",
      },
      {
        title: "5 tickets",
        price: "$5",
        description: "A small ticket bundle for food, drinks, or select festival purchases.",
      },
      {
        title: "Vendor booth",
        price: "$50 fee",
        description: "Vendor booth fee, plus a contribution to the silent auction.",
        note: "Silent auction contribution required",
      },
    ],
  },
  foodAndDrink: [
    "Brisket sandwiches",
    "Turkey legs",
    "Funnel cakes",
    "Fruit cups",
    "Margaritas",
    "Beer",
    "Soda",
    "Water",
  ],
  foodHighlights: [
    {
      title: "Festival favorites",
      body: "Expect savory classics, sweet treats, and easy options for families enjoying the day together.",
    },
    {
      title: "Refreshing drinks",
      body: "Cold water, soda, and adult beverage options will be offered respectfully and responsibly.",
    },
    {
      title: "More to enjoy",
      body: "The full menu is still coming together, and more festival favorites may be added as the day gets closer.",
    },
  ],
  foodNote: "Menu is still being finalized.",
  activities: [
    "Family-friendly games",
    "Tournament competitions",
    "Volleyball",
    "Washers",
    "Tournament winner awards",
    "Gift card draw",
    "Silent auction",
  ],
  activitiesHighlights: [
    {
      title: "Play together",
      body: "Games and activities are being planned for children, teens, and adults to enjoy throughout the afternoon.",
    },
    {
      title: "Tournament energy",
      body: "Friendly competition will be part of the celebration, with plenty of spirited fun for teams and spectators alike.",
    },
    {
      title: "More to come",
      body: "More games, contests, and festival fun will be shared as plans are finalized.",
    },
  ],
  activitiesNote: "Full activity lineup coming soon.",
  signUps: [
    {
      title: "Register",
      description: "For volunteers, vendors, and tournament registration so teams and helpers can sign up in one place.",
      buttonLabel: "Open Registration Form",
      formUrl: registrationFormUrl,
      details: ["Volunteer sign-ups", "Vendor registration", "Tournament registration"],
    },
    {
      title: "Donate",
      description: "Share silent auction items or make a monetary gift through the festival donation form.",
      buttonLabel: "Open Donation Form",
      formUrl: donationFormUrl,
      details: ["Silent auction items", "Monetary donations", "Physical item", "Gift certificate", "Service", "Experience"],
    },
  ],
  involvementHighlights: [
    {
      title: "Registration in one place",
      body: "Volunteers, vendors, and tournament participants can all use the live registration form instead of waiting for separate sign-up links.",
    },
    {
      title: "Donation form is live",
      body: "Supporters can now submit silent auction item information and monetary donations through the live Summer Fest donation form.",
    },
    {
      title: "Payment portal still available",
      body: "The parish payment portal remains available for church payments, but the Google Forms are now the main way to register and share donation interest for Summer Fest.",
    },
  ],
  donationOptions: ["Silent auction item donations", "Monetary donations"],
  policies: [
    "Parking is available in the church lot and marked field areas.",
    "Tents, tables, and chairs will be provided, and guests may bring chairs if preferred.",
    "No pets are allowed at the event.",
    "We ask all guests to help keep the day welcoming, respectful, and family-friendly.",
  ],
  faqs: [
    {
      question: "Is admission free?",
      answer: "Yes. Admission is free for everyone attending Summer Fest.",
    },
    {
      question: "What do wristbands include?",
      answer: "Wristbands are expected to cover games and activities. Final pricing and details will be posted as they are confirmed.",
    },
    {
      question: "Can I bring my own chairs?",
      answer:
        "Yes. Tents, tables, and chairs will be available, and guests are welcome to bring chairs if they prefer.",
    },
    {
      question: "Where do I park?",
      answer: "Parking will be available in the lot and marked field areas.",
    },
    {
      question: "Are pets allowed?",
      answer: "No. Pets are not allowed at the event.",
    },
    {
      question: "How do I volunteer?",
      answer: "Use the Summer Fest Registration form on the Get Involved page to sign up as a volunteer.",
    },
    {
      question: "How do I become a vendor?",
      answer: "Use the Summer Fest Registration form on the Get Involved page to register as a vendor.",
    },
    {
      question: "How do I donate to the silent auction or make a monetary donation?",
      answer: "Use the Summer Fest Donation form on the Get Involved page to share silent auction items or make a monetary donation.",
    },
  ],
  sponsors: [
    "Sponsor logo",
    "Sponsor logo",
    "Sponsor logo",
    "Sponsor logo",
  ],
  sponsorCallout:
    "Local businesses, parish supporters, and community partners will be recognized here as sponsor information is confirmed.",
  logoPlaceholder: {
    title: "Church or Event Logo",
    description: "The official church or event logo will be featured here.",
  },
  contact: {
    heading: "Questions, sign-ups, and support links",
    body: "Use the Summer Fest forms for registration and donations, and check back here for parish office contact details and festival updates.",
  },
  sharePrompt: {
    title: "Enjoying the Summer Fest site?",
    intro: "Share it with family and friends or save it for later. Every share helps more neighbors hear about the day.",
    mobile: {
      title: "Spread the word",
      description: "Share Summer Fest in a tap, or keep it handy on your phone for festival day.",
      shareLabel: "Share This Site",
      installLabel: "Save to Home Screen",
      copyLabel: "Copy Link",
      laterLabel: "Maybe later",
    },
    desktop: {
      title: "Spread the word",
      description: "Share Summer Fest with friends, or keep it handy on your computer for festival day.",
      shareLabel: "Share from Browser",
      copyLabel: "Copy Site Link",
      bookmarkLabel: "Bookmark This Page",
      laterLabel: "Maybe later",
    },
    feedback: {
      copySuccess: "Link copied. You're ready to share it.",
      shareSuccess: "Thanks for helping spread the word.",
      installReady: "A home-screen shortcut keeps Summer Fest one tap away.",
    },
    timing: {
      delayMs: 25000,
      scrollRatio: 0.86,
      bottomOffsetPx: 220,
      bottomDelayMs: 2000,
      dismissCooldownDays: 21,
      maybeLaterCooldownDays: 7,
      successCooldownDays: 45,
    },
  },
  footerLinks: [
    { label: "Event Info", href: "/event-info" },
    { label: "Get Involved", href: "/get-involved" },
    { label: "Contact", href: "/contact" },
    { label: "Donate", href: donationFormUrl },
  ],
  socialLinks: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/HolyTrinityMB/",
      platform: "facebook",
      external: true,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/holytrinitycatholicchurchtx/",
      platform: "instagram",
      external: true,
    },
    {
      label: "Parish Website",
      href: "https://htcc-mb.org",
      platform: "website",
      external: true,
    },
  ],
  pageIntros: {
    about: {
      title: "A welcoming summer celebration for the parish and the wider community",
      description:
        "Holy Trinity Summer Fest is designed to feel like a joyful invitation: good food, games, fellowship, and support for the parish building fund.",
    },
    food: {
      title: "Festival bites, cold drinks, and sweet treats",
      description:
        "From hearty favorites to refreshing drinks, this page gathers the menu lineup and the latest food updates as festival day approaches.",
    },
    activities: {
      title: "Friendly competition and family fun all afternoon",
      description:
        "The activity lineup is coming together with all-ages games, tournament moments, and classic festival fun.",
    },
    involved: {
      title: "Volunteer, register, support the fest, or help it grow",
      description:
        "Find the live registration and donation forms for volunteers, vendors, tournament entries, silent auction items, and festival support.",
    },
    contactPage: {
      title: "Stay connected with the latest Summer Fest links",
      description:
        "Use this page to find current festival form links, the parish payment portal, and upcoming contact updates.",
    },
  },
  homeHighlights: [
    {
      title: "Event Info",
      body: "Find the key details for the day in one place, including event basics, food, activities, and frequently asked questions.",
      href: "/event-info",
      label: "Event Info",
    },
    {
      title: "Get Involved",
      body: "Open the live Summer Fest registration and donation forms for volunteers, vendors, tournament entries, and silent auction support.",
      href: "/get-involved",
      label: "Get Involved",
    },
    {
      title: "Contact",
      body: "Visit the contact page for parish contact details and the latest festival communication updates.",
      href: "/contact",
      label: "Contact",
    },
  ],
} as const;

export type SiteContent = typeof siteContent;
