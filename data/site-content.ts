export const paymentUrl = "https://secure.myvanco.com/L-ZFPW/home";

export const siteContent = {
  churchName: "Holy Trinity Catholic Church",
  eventName: "Holy Trinity Summer Fest 2026",
  tagline: "A day of food, fun, and fellowship in support of Holy Trinity",
  eventDate: "May 31, 2026",
  eventTime: "11:30 AM - 5:00 PM",
  location: "Location details coming soon",
  heroNote: "Open to the community and benefitting Holy Trinity Catholic Church's building fund.",
  countdownTarget: "2026-05-31T11:30:00-05:00",
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Food", href: "/food-drink" },
    { label: "Activities", href: "/activities" },
    { label: "Sign Up", href: "/get-involved" },
    { label: "Support", href: "/support" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  heroActions: [
    { label: "Volunteer", href: "/get-involved", variant: "primary" as const },
    { label: "Register", href: paymentUrl, variant: "secondary" as const, external: true },
    { label: "Donate", href: paymentUrl, variant: "secondary" as const, external: true },
    { label: "Learn More", href: "/about", variant: "ghost" as const },
  ],
  quickInfo: [
    { label: "Date", value: "May 31, 2026", icon: "sun" },
    { label: "Time", value: "11:30 AM - 5:00 PM", icon: "clock" },
    { label: "Location", value: "Location details coming soon", icon: "pin" },
    { label: "Parking", value: "Parking available in lot and marked field", icon: "wheel" },
    {
      label: "Seating",
      value: "Tents, tables, and chairs provided (bring chairs if preferred)",
      icon: "chair",
    },
    { label: "Pets", value: "No pets allowed", icon: "paw" },
  ],
  admission: {
    title: "Admission",
    summary:
      "Everyone is welcome to join the celebration. Admission is free, with simple festival options for games, food, and activities.",
    bullets: [
      "Free admission for all guests",
      "Wristbands give access to games and activities",
      "Tickets are used for food, drinks, and select activity purchases",
    ],
    placeholders: ["Pricing coming soon", "Bundles coming soon", "Accepted payment methods coming soon"],
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
      title: "Menu updates ahead",
      body: "The final menu lineup is still being organized, so additional items may be added soon.",
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
      body: "The activity schedule is being built to keep children, teens, and adults engaged throughout the afternoon.",
    },
    {
      title: "Tournament energy",
      body: "Friendly competition will be part of the day, with room for bragging rights and community fun.",
    },
    {
      title: "More to come",
      body: "The full lineup is still growing as organizers confirm the final event schedule.",
    },
  ],
  activitiesNote: "Full activity lineup coming soon.",
  signUps: [
    {
      title: "Volunteer Sign-Up",
      description: "Help welcome guests, support activities, and make the day run smoothly.",
      buttonLabel: "Open Volunteer Form",
      formUrl: "",
      embedLabel: "Volunteer form embed area reserved for Google Forms",
    },
    {
      title: "Tournament Registration",
      description: "Reserve your spot for tournament play and friendly festival competition.",
      buttonLabel: "Open Tournament Form",
      formUrl: "",
      embedLabel: "Tournament registration embed area reserved for Google Forms",
    },
    {
      title: "Vendor Registration",
      description: "Apply for a vendor booth and be part of this community festival day.",
      buttonLabel: "Open Vendor Form",
      formUrl: paymentUrl,
      embedLabel: "Vendor registration embed area reserved for Google Forms",
    },
  ],
  donationOptions: ["Silent auction donations", "Basket adoption", "Monetary donations"],
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
      answer: "Wristbands are planned to cover games and activities. Final pricing and details are coming soon.",
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
      answer: "Visit the Get Involved page to find the volunteer placeholder button and future Google Form area.",
    },
    {
      question: "How do I become a vendor?",
      answer: "Visit the Get Involved page. Additional vendor details and future form links will be added soon.",
    },
  ],
  sponsors: [
    "Sponsor logo coming soon",
    "Sponsor logo coming soon",
    "Sponsor logo coming soon",
    "Sponsor logo coming soon",
  ],
  sponsorCallout:
    "Local businesses, parish supporters, and community partners will be highlighted here as sponsor materials are collected.",
  logoPlaceholder: {
    title: "Church or Event Logo",
    description: "Logo upload area reserved for the final church or event artwork.",
  },
  contact: {
    heading: "Contact information coming soon",
    body: "This section is ready for a future email address, phone number, and parish office details.",
  },
  footerLinks: [
    { label: "About", href: "/about" },
    { label: "Get Involved", href: "/get-involved" },
    { label: "Support", href: "/support" },
    { label: "FAQ", href: "/faq" },
  ],
  socialPlaceholders: ["Facebook coming soon", "Instagram coming soon", "Parish updates coming soon"],
  pageIntros: {
    about: {
      eyebrow: "About the Fest",
      title: "A welcoming summer celebration for the parish and the wider community",
      description:
        "Holy Trinity Summer Fest is designed to feel like a joyful invitation: good food, games, fellowship, and support for the parish building fund.",
    },
    food: {
      eyebrow: "Food & Drink",
      title: "Festival bites, cold drinks, and sweet treats",
      description:
        "From hearty favorites to refreshing drinks, this page is reserved for the menu lineup and future updates as the fest gets closer.",
    },
    activities: {
      eyebrow: "Activities & Games",
      title: "Friendly competition and family fun all afternoon",
      description:
        "The activity lineup is being built with a mix of all-ages games, tournament moments, and festival staples.",
    },
    involved: {
      eyebrow: "Get Involved",
      title: "Volunteer, register, or prepare to join the action",
      description:
        "The sign-up experience is kept simple, with clean placeholders ready for future Google Form links and embeds.",
    },
    support: {
      eyebrow: "Donations & Support",
      title: "Help build a great day and support the building fund",
      description:
        "There are several ways to contribute, from silent auction donations to direct monetary support through the existing payment portal.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Helpful answers before festival day",
      description:
        "These answers cover the most common questions for guests, families, volunteers, and future participants.",
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Stay connected as more details are released",
      description:
        "This page is ready for parish contact details, volunteer coordination information, and future event updates.",
    },
  },
  homeHighlights: [
    {
      title: "Plan your day",
      body: "See the essentials first, then hop into the dedicated pages for food, activities, FAQs, and getting involved.",
      href: "/about",
      label: "Explore Event Details",
    },
    {
      title: "Bring the family",
      body: "Summer Fest is designed to feel joyful, neighborly, and easy to navigate for guests of all ages.",
      href: "/activities",
      label: "See Activities",
    },
    {
      title: "Join the effort",
      body: "Volunteer, register, or support the building fund with simple next steps and future form placeholders.",
      href: "/get-involved",
      label: "Get Involved",
    },
  ],
} as const;

export type SiteContent = typeof siteContent;
