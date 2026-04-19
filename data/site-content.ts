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
    { label: "Plan Your Visit", href: "/plan-your-visit" },
    { label: "What to Expect", href: "/what-to-expect" },
    { label: "Get Involved", href: "/get-involved" },
  ],
  heroActions: [
    { label: "Volunteer", href: "/get-involved", variant: "primary" as const },
    { label: "Register", href: registrationFormUrl, variant: "secondary" as const, external: true },
    { label: "Donate", href: donationFormUrl, variant: "secondary" as const, external: true },
    { label: "Learn More", href: "/plan-your-visit", variant: "ghost" as const },
  ],
  planYourVisit: {
    intro: {
      title: "What You Need to Know",
    },
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
    about: {
      title: "About Summer Fest",
      summary:
        "Summer Fest is a community celebration bringing families, friends, and neighbors together for a full day of food, games, and fellowship—while supporting Holy Trinity's building fund.",
      bullets: [
        "Hosted by Holy Trinity Catholic Church",
        "Open to the entire community",
        "A day of food, games, and fellowship supporting the building fund",
      ],
    },
    admissionOverview: {
      title: "Admission Overview",
      summary:
        "Admission is free, and guests can choose optional purchases if they want to enjoy food, drinks, games, activities, or vendor participation.",
      bullets: [
        "Free admission for all guests",
        "Optional purchases for food, games, and activities",
        "Detailed pricing is on the What to Expect page",
      ],
      cta: {
        label: "View Pricing & Festival Details",
        href: "/what-to-expect",
      },
    },
    faqs: [
      {
        question: "Is admission free?",
        answer: "Yes. Admission is free for everyone attending Summer Fest.",
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
  },
  whatToExpect: {
    intro: {
      title: "What to Expect at Summer Fest",
    },
    wristbandsOrTickets: {
      title: "Wristbands vs Tickets",
      description: "Choose the option that best fits how you want to enjoy the day.",
      items: [
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
    },
    pricing: {
      title: "Pricing",
      description: "Early bird pricing is available now through the Summer Fest Vanco payment page.",
      cta: {
        label: "Open Vanco Payment Link",
        href: paymentUrl,
        external: true,
      },
      items: [
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
    foodAndDrink: {
      title: "Food & Drink",
      description: "Classic festival bites, sweet treats, and cold drinks are planned throughout the day.",
      note: "Menu is still being finalized.",
      groups: [
        {
          title: "Savory favorites",
          items: ["Brisket sandwiches", "Turkey legs"],
        },
        {
          title: "Sweet and fresh picks",
          items: ["Funnel cakes", "Fruit cups"],
        },
        {
          title: "Cold drinks",
          items: ["Margaritas", "Beer", "Soda", "Water"],
        },
      ],
    },
    activitiesAndGames: {
      title: "Activities & Games",
      description: "Expect a mix of family fun, tournament play, and a few festival favorites.",
      note: "Full lineup is still being finalized.",
      groups: [
        {
          title: "Family fun",
          items: ["Family-friendly games", "Gift card draw"],
        },
        {
          title: "Tournament play",
          items: ["Tournament competitions", "Volleyball", "Washers", "Tournament winner awards"],
        },
        {
          title: "Festival extras",
          items: ["Silent auction"],
        },
      ],
    },
  },
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
  policies: [
    "Parking is available in the church lot and marked field areas.",
    "Tents, tables, and chairs will be provided, and guests may bring chairs if preferred.",
    "No pets are allowed at the event.",
    "We ask all guests to help keep the day welcoming, respectful, and family-friendly.",
  ],
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
    { label: "Plan Your Visit", href: "/plan-your-visit" },
    { label: "What to Expect", href: "/what-to-expect" },
    { label: "Get Involved", href: "/get-involved" },
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
      title: "Donate, Register, Volunteer",
    },
  },
  homeHighlights: [
    {
      title: "Plan Your Visit",
      body: "Find the practical details for the day in one place, including timing, location, parking, seating, policies, and FAQs.",
      href: "/plan-your-visit",
      label: "Plan Your Visit",
    },
    {
      title: "What to Expect",
      body: "Preview the festival experience with wristbands, pricing, food, drinks, activities, and games planned for the celebration.",
      href: "/what-to-expect",
      label: "What to Expect",
    },
    {
      title: "Get Involved",
      body: "Open the live Summer Fest registration and donation forms for volunteers, vendors, tournament entries, and silent auction support.",
      href: "/get-involved",
      label: "Get Involved",
    },
  ],
} as const;

export type SiteContent = typeof siteContent;
