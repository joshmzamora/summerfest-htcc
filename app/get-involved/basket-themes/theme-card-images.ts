export type BasketThemeCardImage = {
  src: string;
  position: string;
  photoId: string;
  sourcePage: string;
  originalDownloadUrl: string;
  photographer: string;
};

type BasketThemePhotoSource = {
  photoId: string;
  sourcePage: string;
  photographer: string;
  position?: string;
};

const basketThemePhotoSources = {
  margarita: {
    photoId: "29463223",
    sourcePage: "https://www.pexels.com/photo/refreshing-margarita-cocktail-with-lime-garnish-29463223/",
    photographer: "Marcelo Verfe",
    position: "center center",
  },
  movieNight: {
    photoId: "13005068",
    sourcePage: "https://www.pexels.com/photo/popcorn-in-clear-glass-bowl-13005068/",
    photographer: "Srattha Nualsate",
    position: "center center",
  },
  coffee: {
    photoId: "8937417",
    sourcePage: "https://www.pexels.com/photo/coffee-beans-and-a-cup-of-coffee-on-a-wooden-table-8937417/",
    photographer: "Thirdman",
    position: "center 40%",
  },
  hotCocoa: {
    photoId: "10002424",
    sourcePage: "https://www.pexels.com/photo/hot-chocolate-in-a-mug-10002424/",
    photographer: "Skyler Ewing",
    position: "center 34%",
  },
  pizza: {
    photoId: "35896396",
    sourcePage: "https://www.pexels.com/photo/delicious-gourmet-pizza-on-rustic-wooden-board-35896396/",
    photographer: "Mike C",
    position: "center center",
  },
  breakfast: {
    photoId: "6529827",
    sourcePage: "https://www.pexels.com/photo/pancakes-for-breakfast-6529827/",
    photographer: "RDNE Stock project",
    position: "center center",
  },
  italianDinner: {
    photoId: "31269813",
    sourcePage: "https://www.pexels.com/photo/delicious-italian-pasta-and-white-wine-pairing-31269813/",
    photographer: "Bon appetit",
    position: "center center",
  },
  dateNight: {
    photoId: "19763213",
    sourcePage: "https://www.pexels.com/photo/a-meal-and-a-glass-of-wine-standing-on-a-table-with-flowers-and-candles-19763213/",
    photographer: "Vinicius Vieira ft",
    position: "center center",
  },
  cozyKitchen: {
    photoId: "4794884",
    sourcePage: "https://www.pexels.com/photo/kitchen-utensils-on-the-kitchen-counter-4794884/",
    photographer: "Tima Miroshnichenko",
    position: "center center",
  },
  roadTripSnacks: {
    photoId: "7196443",
    sourcePage: "https://www.pexels.com/photo/set-of-various-snacks-in-car-7196443/",
    photographer: "Erik Mclean",
    position: "center center",
  },
  tailgateParty: {
    photoId: "9388531",
    sourcePage: "https://www.pexels.com/photo/close-up-of-sports-pins-9388531/",
    photographer: "Stephen Andrews",
    position: "center 42%",
  },
  crawfishBoil: {
    photoId: "32149282",
    sourcePage: "https://www.pexels.com/photo/delicious-cajun-crawfish-boil-with-herbs-32149282/",
    photographer: "Change C.C",
    position: "center center",
  },
  brunch: {
    photoId: "33401563",
    sourcePage: "https://www.pexels.com/photo/delicious-breakfast-pancakes-with-fresh-fruit-33401563/",
    photographer: "Gabriella Ally",
    position: "center center",
  },
  charcuterie: {
    photoId: "29098370",
    sourcePage: "https://www.pexels.com/photo/exquisite-charcuterie-board-with-cheeses-and-fruits-29098370/",
    photographer: "Jonathan Borba",
    position: "center center",
  },
  picnic: {
    photoId: "4728016",
    sourcePage: "https://www.pexels.com/photo/sliced-watermelon-and-lemonade-in-glass-bottle-on-white-and-gray-striped-beach-towel-4728016/",
    photographer: "Polina Tankilevitch",
    position: "center center",
  },
  smores: {
    photoId: "33625038",
    sourcePage: "https://www.pexels.com/photo/cozy-campfire-with-roasting-marshmallows-33625038/",
    photographer: "Lone Crow Photography",
    position: "center center",
  },
  candy: {
    photoId: "34015480",
    sourcePage: "https://www.pexels.com/photo/vibrant-candy-jar-spilling-colorful-jelly-sweets-34015480/",
    photographer: "Eterna Media",
    position: "center center",
  },
  healthyHabits: {
    photoId: "11880122",
    sourcePage: "https://www.pexels.com/photo/bottled-water-beside-red-dumbbell-11880122/",
    photographer: "Towfiqu barbhuiya",
    position: "center center",
  },
  sourdough: {
    photoId: "36370202",
    sourcePage: "https://www.pexels.com/photo/rustic-artisan-sourdough-bread-loaf-36370202/",
    photographer: "Alex Agnoluzzi",
    position: "center center",
  },
  grill: {
    photoId: "37058627",
    sourcePage: "https://www.pexels.com/photo/delicious-grilled-meat-skewers-on-barbecue-37058627/",
    photographer: "Mohamed Olwy",
    position: "center center",
  },
  baking: {
    photoId: "8478048",
    sourcePage: "https://www.pexels.com/photo/cookies-on-a-baking-tray-8478048/",
    photographer: "Los Muertos Crew",
    position: "center center",
  },
  gardening: {
    photoId: "6231656",
    sourcePage: "https://www.pexels.com/photo/potted-plants-on-shelf-in-greenhouse-6231656/",
    photographer: "Gary Barnes",
    position: "center center",
  },
  lemons: {
    photoId: "13938463",
    sourcePage: "https://www.pexels.com/photo/lemons-on-the-picnic-blanket-13938463/",
    photographer: "Nati",
    position: "center center",
  },
  cleaning: {
    photoId: "4440525",
    sourcePage: "https://www.pexels.com/photo/cleaning-materials-on-white-surface-4440525/",
    photographer: "Polina Tankilevitch",
    position: "center center",
  },
  kitchenEssentials: {
    photoId: "9475254",
    sourcePage: "https://www.pexels.com/photo/wooden-kitchen-utensils-9475254/",
    photographer: "Greta Hoffman",
    position: "center center",
  },
  newHome: {
    photoId: "36813408",
    sourcePage: "https://www.pexels.com/photo/couple-moving-into-new-home-with-boxes-36813408/",
    photographer: "Vitaly Gariev",
    position: "center center",
  },
  whiskey: {
    photoId: "19539063",
    sourcePage: "https://www.pexels.com/photo/whisky-on-rocks-in-glass-19539063/",
    photographer: "Volker Thimm",
    position: "center center",
  },
  spaSelfCare: {
    photoId: "8468661",
    sourcePage: "https://www.pexels.com/photo/jar-and-towel-in-basket-near-wax-candles-8468661/",
    photographer: "Ahloki",
    position: "center center",
  },
  middleAgeStarterPack: {
    photoId: "8939895",
    sourcePage: "https://www.pexels.com/photo/man-holding-water-bottle-and-yoga-mat-8939895/",
    photographer: "Vlada Karpovich",
    position: "center 28%",
  },
  beardCare: {
    photoId: "9201296",
    sourcePage: "https://www.pexels.com/photo/fashion-dark-vintage-luxury-9201296/",
    photographer: "Pexels search result attribution",
    position: "center center",
  },
  momsNightIn: {
    photoId: "19206995",
    sourcePage: "https://www.pexels.com/photo/glass-of-red-whine-next-to-a-candle-19206995/",
    photographer: "Gulsah Aydogan",
    position: "center center",
  },
  dadsFavorites: {
    photoId: "34695170",
    sourcePage: "https://www.pexels.com/photo/essential-survival-gear-setup-for-outdoor-adventures-34695170/",
    photographer: "Marta Branco",
    position: "center center",
  },
  bookLover: {
    photoId: "29010913",
    sourcePage: "https://www.pexels.com/photo/cozy-reading-setup-with-tea-on-blanket-29010913/",
    photographer: "Anna Zanovelli Bacci",
    position: "center center",
  },
  rainyDay: {
    photoId: "8549590",
    sourcePage: "https://www.pexels.com/photo/cup-of-tea-and-an-eyeglasses-on-the-stacks-of-books-near-the-window-8549590/",
    photographer: "Taryn Elliott",
    position: "center center",
  },
  crocs: {
    photoId: "8801134",
    sourcePage: "https://www.pexels.com/photo/pink-rubber-clogs-on-pink-background-8801134/",
    photographer: "Pexels search result attribution",
    position: "center center",
  },
  boardGame: {
    photoId: "4004174",
    sourcePage: "https://www.pexels.com/photo/monopoly-board-game-on-brown-wooden-table-4004174/",
    photographer: "cottonbro studio",
    position: "center center",
  },
  kidsSummer: {
    photoId: "36676392",
    sourcePage: "https://www.pexels.com/photo/summer-pool-scene-with-inflatable-floats-36676392/",
    photographer: "Petra Nesti",
    position: "center center",
  },
  petLover: {
    photoId: "11110982",
    sourcePage: "https://www.pexels.com/photo/dog-lying-on-bed-with-carrot-plush-toys-11110982/",
    photographer: "qiana zhang",
    position: "center center",
  },
  kidsActivities: {
    photoId: "32760485",
    sourcePage: "https://www.pexels.com/photo/child-creating-colorful-paper-crafts-with-crayons-32760485/",
    photographer: "Soc Nang Dong",
    position: "center center",
  },
  crafts: {
    photoId: "1470164",
    sourcePage: "https://www.pexels.com/photo/colourful-flatlay-1470164/",
    photographer: "Element5 Digital",
    position: "center center",
  },
  baby: {
    photoId: "20727817",
    sourcePage: "https://www.pexels.com/photo/newborn-and-teddies-on-blanket-20727817/",
    photographer: "Pexels search result attribution",
    position: "center 36%",
  },
  texas: {
    photoId: "33906449",
    sourcePage: "https://www.pexels.com/photo/stylish-cowboy-boots-in-golden-wheat-field-33906449/",
    photographer: "iddea photo",
    position: "center center",
  },
  beach: {
    photoId: "18674216",
    sourcePage: "https://www.pexels.com/photo/beach-towels-on-sand-18674216/",
    photographer: "Maria Kray",
    position: "center center",
  },
  baseball: {
    photoId: "26619470",
    sourcePage: "https://www.pexels.com/photo/balls-on-glove-on-grass-26619470/",
    photographer: "Eddie O.",
    position: "center center",
  },
  blueWhiteSpirit: {
    photoId: "7321048",
    sourcePage: "https://www.pexels.com/photo/a-close-up-shot-of-white-and-blue-pompoms-7321048/",
    photographer: "cottonbro studio",
    position: "center center",
  },
  fishing: {
    photoId: "12906291",
    sourcePage: "https://www.pexels.com/photo/fishing-rod-over-lake-12906291/",
    photographer: "Malanca Stanislav",
    position: "center center",
  },
  teacherAppreciation: {
    photoId: "8499575",
    sourcePage: "https://www.pexels.com/photo/photo-of-a-desk-with-school-supplies-8499575/",
    photographer: "RDNE Stock project",
    position: "center center",
  },
  rosary: {
    photoId: "6756378",
    sourcePage: "https://www.pexels.com/photo/close-up-of-person-praying-with-a-rosary-near-a-burning-candle-6756378/",
    photographer: "Trac Vu",
    position: "center center",
  },
  usa: {
    photoId: "6039071",
    sourcePage: "https://www.pexels.com/photo/people-picnic-summer-banner-6039071/",
    photographer: "Mohan Nannapaneni",
    position: "center center",
  },
  christmas: {
    photoId: "35193903",
    sourcePage: "https://www.pexels.com/photo/cozy-christmas-tree-with-lanterns-and-gifts-35193903/",
    photographer: "Alexander Mass",
    position: "center center",
  },
  easter: {
    photoId: "4022599",
    sourcePage: "https://www.pexels.com/photo/eggs-and-pink-flowers-4022599/",
    photographer: "Karola G",
    position: "center center",
  },
  fall: {
    photoId: "14751139",
    sourcePage: "https://www.pexels.com/photo/stack-of-pumpkins-14751139/",
    photographer: "helloiamtugce",
    position: "center center",
  },
  cozyRelief: {
    photoId: "29636809",
    sourcePage: "https://www.pexels.com/photo/cozy-indoor-relaxation-with-warm-slippers-29636809/",
    photographer: "Alina Matveycheva",
    position: "center center",
  },
} as const satisfies Record<string, BasketThemePhotoSource>;

const basketThemeAssignments = {
  Tequila: "margarita",
  "Movie Night": "movieNight",
  Coffee: "coffee",
  "Hot Cocoa": "hotCocoa",
  Pizza: "pizza",
  Breakfast: "breakfast",
  "Italian Dinner": "italianDinner",
  "Date Night": "dateNight",
  "Southern Comfort": "cozyKitchen",
  "Buc-ee's": "roadTripSnacks",
  Tailgate: "tailgateParty",
  Crawfish: "crawfishBoil",
  Brunch: "brunch",
  Charcuterie: "charcuterie",
  Picnic: "picnic",
  "S'mores": "smores",
  "Sweet Tooth": "candy",
  Hosting: "charcuterie",
  "Healthy Habits": "healthyHabits",
  Sourdough: "sourdough",
  Grill: "grill",
  "Baking Basket": "baking",
  Gardening: "gardening",
  Lemons: "lemons",
  "Deep Cleaning": "cleaning",
  "Kitchen Essentials": "kitchenEssentials",
  "New Homeowner": "newHome",
  Whiskey: "whiskey",
  "Spa / Self Care": "spaSelfCare",
  "Middle Age Starter Pack": "cozyRelief",
  "Beard Care": "beardCare",
  "Mom's Night In": "momsNightIn",
  "Dad's Favorites": "dadsFavorites",
  "Book Lover": "bookLover",
  "Rainy Day": "rainyDay",
  Crocs: "crocs",
  "Family Game Night": "boardGame",
  "Kids Summer Fun": "kidsSummer",
  "Pet Lover": "petLover",
  "Kids Activities": "kidsActivities",
  Crafts: "crafts",
  Baby: "baby",
  Texas: "texas",
  Beach: "beach",
  Astros: "baseball",
  "Barbers Hill": "blueWhiteSpirit",
  "Pool Day": "kidsSummer",
  Fishing: "fishing",
  "College-Specific": "tailgateParty",
  "Teacher Appreciation": "teacherAppreciation",
  Catholic: "rosary",
  Faith: "rosary",
  USA: "usa",
  Christmas: "christmas",
  Easter: "easter",
  Fall: "fall",
} as const satisfies Record<string, keyof typeof basketThemePhotoSources>;

const slugifyThemeName = (name: string) =>
  name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/['.]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const getOriginalDownloadUrl = (photoId: string) =>
  `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&cs=tinysrgb&w=1600`;

export const basketThemeCardImages = Object.fromEntries(
  Object.entries(basketThemeAssignments).map(([themeName, sourceKey]) => {
    const source = basketThemePhotoSources[sourceKey];

    return [
      themeName,
      {
        src: `/images/basket-themes/${slugifyThemeName(themeName)}.webp`,
        position: source.position ?? "center center",
        photoId: source.photoId,
        sourcePage: source.sourcePage,
        originalDownloadUrl: getOriginalDownloadUrl(source.photoId),
        photographer: source.photographer,
      } satisfies BasketThemeCardImage,
    ];
  }),
) as Record<string, BasketThemeCardImage>;

export const getBasketThemeCardImage = (themeName: string) => {
  return basketThemeCardImages[themeName];
};
