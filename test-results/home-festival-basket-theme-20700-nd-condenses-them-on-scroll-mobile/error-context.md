# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: home-festival.spec.ts >> basket themes page expands mobile controls near the top and condenses them on scroll
- Location: tests\home-festival.spec.ts:173:5

# Error details

```
Error: expect(locator).toHaveAttribute(expected) failed

Locator:  locator('.basket-controls')
Expected: "true"
Received: "false"
Timeout:  5000ms

Call log:
  - Expect "toHaveAttribute" with timeout 5000ms
  - waiting for locator('.basket-controls')
    9 × locator resolved to <div data-condensed="false" class="basket-controls">…</div>
      - unexpected value "false"

```

# Page snapshot

```yaml
- main [ref=e2]:
  - generic [ref=e5]:
    - link "Summer Fest at Holy Trinity home" [ref=e7] [cursor=pointer]:
      - /url: /
      - generic [ref=e8]: Holy Trinity Catholic Church
      - strong [ref=e9]: Summer Fest at Holy Trinity
    - button "Open navigation menu" [ref=e10] [cursor=pointer]
  - generic [ref=e15]:
    - link "← Back to Get Involved" [ref=e16] [cursor=pointer]:
      - /url: /get-involved
    - generic [ref=e17]:
      - heading "Silent Auction Basket Theme Ideas" [level=1] [ref=e18]
      - paragraph [ref=e19]: Choose one full theme or mix and match items below to build a basket donation.
  - generic [ref=e21]:
    - generic [ref=e24]:
      - heading [level=2]
    - generic [ref=e25]:
      - textbox "Search 50+ themes (e.g. 'Coffee', 'Tequila', 'Kids')..." [ref=e27]
      - generic [ref=e29]:
        - button "All" [ref=e30] [cursor=pointer]
        - button "Food & Hosting" [ref=e31] [cursor=pointer]
        - button "Home & Kitchen" [ref=e32] [cursor=pointer]
        - button "Relaxation & Self-Care" [ref=e33] [cursor=pointer]
        - button "Family, Kids & Pets" [ref=e34] [cursor=pointer]
        - button "Sports, Outdoors & Local Pride" [ref=e35] [cursor=pointer]
        - button "Faith, School & Seasonal" [ref=e36] [cursor=pointer]
    - generic [ref=e37]:
      - generic [ref=e38]:
        - heading "Food & Hosting 19 Options" [level=3] [ref=e39]:
          - text: Food & Hosting
          - generic [ref=e40]: 19 Options
        - generic [ref=e41]:
          - article [ref=e42]:
            - generic [ref=e43]:
              - heading "Tequila" [level=5] [ref=e44]
              - paragraph [ref=e45]: The ultimate fiesta starter with everything needed for craft margaritas.
              - generic [ref=e46]:
                - generic [ref=e47]: Margarita glasses
                - generic [ref=e48]: Margarita mix
                - generic [ref=e49]: Salt or Tajin
                - generic [ref=e50]: Lime juicer
            - link "Donate Tequila Theme" [ref=e53] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Tequila
              - generic [ref=e54]: Donate Tequila Theme
          - article [ref=e55]:
            - generic [ref=e56]:
              - heading "Movie Night" [level=5] [ref=e57]
              - paragraph [ref=e58]: A complete cinema experience for the whole family, from popcorn to streaming.
              - generic [ref=e59]:
                - generic [ref=e60]: Popcorn and seasoning
                - generic [ref=e61]: Candy assortment
                - generic [ref=e62]: Blanket
                - generic [ref=e63]: Streaming service gift card or theater gift card
                - generic [ref=e64]: Reusable popcorn bowls
            - link "Donate Movie Night Theme" [ref=e67] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Movie%20Night
              - generic [ref=e68]: Donate Movie Night Theme
          - article [ref=e69]:
            - generic [ref=e70]:
              - heading "Coffee" [level=5] [ref=e71]
              - paragraph [ref=e72]: Start the morning right with premium beans and cafe-quality accessories.
              - generic [ref=e73]:
                - generic [ref=e74]: Bag of ground beans
                - generic [ref=e75]: Mug or travel tumbler
                - generic [ref=e76]: Flavored syrups
                - generic [ref=e77]: Biscotti
                - generic [ref=e78]: Small French press
            - link "Donate Coffee Theme" [ref=e81] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Coffee
              - generic [ref=e82]: Donate Coffee Theme
          - article [ref=e83]:
            - generic [ref=e84]:
              - heading "Hot Cocoa" [level=5] [ref=e85]
              - paragraph [ref=e86]: A cozy collection for chilly evenings with gourmet chocolate and sweet toppings.
              - generic [ref=e87]:
                - generic [ref=e88]: Hot cocoa mix
                - generic [ref=e89]: Marshmallows and peppermint sticks
                - generic [ref=e90]: Seasonal mugs
                - generic [ref=e91]: Fuzzy socks or blanket
                - generic [ref=e92]: Brownie mix
            - link "Donate Hot Cocoa Theme" [ref=e95] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Hot%20Cocoa
              - generic [ref=e96]: Donate Hot Cocoa Theme
          - article [ref=e97]:
            - generic [ref=e98]:
              - heading "Pizza" [level=5] [ref=e99]
              - paragraph [ref=e100]: Everything but the dough for a high-end Italian pizza night at home.
              - generic [ref=e101]:
                - generic [ref=e102]: Pizza stone or pan
                - generic [ref=e103]: Pizza cutter or rocker
                - generic [ref=e104]: Gourmet pizza sauce
                - generic [ref=e105]: Pizza crust mix
                - generic [ref=e106]: Italian seasoning and red pepper flakes
                - generic [ref=e107]: Oven mitt
                - generic [ref=e108]: Gift card to local pizza place
            - link "Donate Pizza Theme" [ref=e111] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Pizza
              - generic [ref=e112]: Donate Pizza Theme
          - article [ref=e113]:
            - generic [ref=e114]:
              - heading "Breakfast" [level=5] [ref=e115]
              - paragraph [ref=e116]: Gourmet mixes and local syrups for a Sunday morning family tradition.
              - generic [ref=e117]:
                - generic [ref=e118]: Pancake or waffle mix
                - generic [ref=e119]: Syrup
                - generic [ref=e120]: Coffee or tea
                - generic [ref=e121]: Jam or local honey
                - generic [ref=e122]: Tea towel or serving tray
            - link "Donate Breakfast Theme" [ref=e125] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Breakfast
              - generic [ref=e126]: Donate Breakfast Theme
          - article [ref=e127]:
            - generic [ref=e128]:
              - heading "Italian Dinner" [level=5] [ref=e129]
              - paragraph [ref=e130]: A taste of Italy with artisanal pasta, fine oil, and red wine.
              - generic [ref=e131]:
                - generic [ref=e132]: Pasta and sauce
                - generic [ref=e133]: Olive oil
                - generic [ref=e134]: Breadsticks
                - generic [ref=e135]: Cheese grater
                - generic [ref=e136]: Pasta spoon
                - generic [ref=e137]: Wine
            - link "Donate Italian Dinner Theme" [ref=e140] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Italian%20Dinner
              - generic [ref=e141]: Donate Italian Dinner Theme
          - article [ref=e142]:
            - generic [ref=e143]:
              - heading "Date Night" [level=5] [ref=e144]
              - paragraph [ref=e145]: A romantic evening planned for you, featuring dinner, candles, and treats.
              - generic [ref=e146]:
                - generic [ref=e147]: Restaurant gift card
                - generic [ref=e148]: Candles
                - generic [ref=e149]: Chocolates
                - generic [ref=e150]: Wine glasses
                - generic [ref=e151]: Dessert plates
                - generic [ref=e152]: Movie gift card
            - link "Donate Date Night Theme" [ref=e155] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Date%20Night
              - generic [ref=e156]: Donate Date Night Theme
          - article [ref=e157]:
            - generic [ref=e158]:
              - heading "Southern Comfort" [level=5] [ref=e159]
              - paragraph [ref=e160]: Classic hospitality with local honey and southern-style mixes.
              - generic [ref=e161]:
                - generic [ref=e162]: Biscuit or cornbread mix
                - generic [ref=e163]: Local jam or honey
                - generic [ref=e164]: Sweet tea mix
                - generic [ref=e165]: Kitchen towel
                - generic [ref=e166]: Wooden spoon
                - generic [ref=e167]: Serving dish
            - link "Donate Southern Comfort Theme" [ref=e170] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Southern%20Comfort
              - generic [ref=e171]: Donate Southern Comfort Theme
          - article [ref=e172]:
            - generic [ref=e173]:
              - heading "Buc-ee's" [level=5] [ref=e174]
              - paragraph [ref=e175]: The ultimate Texas road trip stash from everyone's favorite beaver.
              - generic [ref=e176]:
                - generic [ref=e177]: Beaver Nuggets
                - generic [ref=e178]: Travel tumbler
                - generic [ref=e179]: Car air freshener
                - generic [ref=e180]: Road trip games
                - generic [ref=e181]: Puzzle book
                - generic [ref=e182]: Gas gift card
            - link "Donate Buc-ee's Theme" [ref=e185] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Buc-ee's
              - generic [ref=e186]: Donate Buc-ee's Theme
          - article [ref=e187]:
            - generic [ref=e188]:
              - heading "Tailgate" [level=5] [ref=e189]
              - paragraph [ref=e190]: Be the MVP of the parking lot with these game-day essentials.
              - generic [ref=e191]:
                - generic [ref=e192]: Cooler bag
                - generic [ref=e193]: Chips, dip, and snack mix
                - generic [ref=e194]: Team-colored cups
                - generic [ref=e195]: Grill tools
                - generic [ref=e196]: Serving trays
                - generic [ref=e197]: Folding camp chair
            - link "Donate Tailgate Theme" [ref=e200] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Tailgate
              - generic [ref=e201]: Donate Tailgate Theme
          - article [ref=e202]:
            - generic [ref=e203]:
              - heading "Crawfish" [level=5] [ref=e204]
              - paragraph [ref=e205]: Everything needed for a classic backyard seafood boil.
              - generic [ref=e206]:
                - generic [ref=e207]: Seafood boil seasoning
                - generic [ref=e208]: Crawfish tray
                - generic [ref=e209]: Bibs
                - generic [ref=e210]: Hand wipes
                - generic [ref=e211]: Hot sauce
                - generic [ref=e212]: Cajun snack mix
            - link "Donate Crawfish Theme" [ref=e215] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Crawfish
              - generic [ref=e216]: Donate Crawfish Theme
          - article [ref=e217]:
            - generic [ref=e218]:
              - heading "Brunch" [level=5] [ref=e219]
              - paragraph [ref=e220]: Elevate your weekend with mimosa glasses and muffin mixes.
              - generic [ref=e221]:
                - generic [ref=e222]: Muffin mix
                - generic [ref=e223]: Jam or preserves
                - generic [ref=e224]: Coffee or tea
                - generic [ref=e225]: Cute serving board
                - generic [ref=e226]: Mimosa glasses
                - generic [ref=e227]: Orange juice mixer
                - generic [ref=e228]: Pitchers
                - generic [ref=e229]: Coasters
            - link "Donate Brunch Theme" [ref=e232] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Brunch
              - generic [ref=e233]: Donate Brunch Theme
          - article [ref=e234]:
            - generic [ref=e235]:
              - heading "Charcuterie" [level=5] [ref=e236]
              - paragraph [ref=e237]: Craft the perfect spread with artisanal boards and accessories.
              - generic [ref=e238]:
                - generic [ref=e239]: Wooden serving board
                - generic [ref=e240]: Crackers
                - generic [ref=e241]: Jam or honey
                - generic [ref=e242]: Cheese knives
                - generic [ref=e243]: Nuts or olives
                - generic [ref=e244]: Serving tongs
            - link "Donate Charcuterie Theme" [ref=e247] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Charcuterie
              - generic [ref=e248]: Donate Charcuterie Theme
          - article [ref=e249]:
            - generic [ref=e250]:
              - heading "Picnic" [level=5] [ref=e251]
              - paragraph [ref=e252]: A complete set for an afternoon in the park with friends.
              - generic [ref=e253]:
                - generic [ref=e254]: Outdoor picnic blanket
                - generic [ref=e255]: Reusable plates and cups
                - generic [ref=e256]: Snack crackers and cookies
                - generic [ref=e257]: Cheese board items
                - generic [ref=e258]: Insulated tote
                - generic [ref=e259]: Bug spray
            - link "Donate Picnic Theme" [ref=e262] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Picnic
              - generic [ref=e263]: Donate Picnic Theme
          - article [ref=e264]:
            - generic [ref=e265]:
              - heading "S'mores" [level=5] [ref=e266]
              - paragraph [ref=e267]: The classic campfire tradition with a gourmet chocolate twist.
              - generic [ref=e268]:
                - generic [ref=e269]: Graham crackers
                - generic [ref=e270]: Chocolate bars
                - generic [ref=e271]: Marshmallows
                - generic [ref=e272]: Roasting sticks
                - generic [ref=e273]: Small fire pit accessory
                - generic [ref=e274]: Blanket
            - link "Donate S'mores Theme" [ref=e277] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=S'mores
              - generic [ref=e278]: Donate S'mores Theme
          - article [ref=e279]:
            - generic [ref=e280]:
              - heading "Sweet Tooth" [level=5] [ref=e281]
              - paragraph [ref=e282]: A curated collection for the candy lover in your life.
              - generic [ref=e283]:
                - generic [ref=e284]: Assorted chocolates
                - generic [ref=e285]: Gummies or sour candy
                - generic [ref=e286]: Cookies or brownie bites
                - generic [ref=e287]: Caramel popcorn
                - generic [ref=e288]: Candy jar or treat container
            - link "Donate Sweet Tooth Theme" [ref=e291] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Sweet%20Tooth
              - generic [ref=e292]: Donate Sweet Tooth Theme
          - article [ref=e293]:
            - generic [ref=e294]:
              - heading "Hosting" [level=5] [ref=e295]
              - paragraph [ref=e296]: Impress your guests with elegant serving tools and wine essentials.
              - generic [ref=e297]:
                - generic [ref=e298]: Serving tray and utensils
                - generic [ref=e299]: Cloth napkins
                - generic [ref=e300]: Dip bowl set
                - generic [ref=e301]: Appetizer plates
                - generic [ref=e302]: Bottle of wine
                - generic [ref=e303]: Wine or champagne chiller
            - link "Donate Hosting Theme" [ref=e306] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Hosting
              - generic [ref=e307]: Donate Hosting Theme
          - article [ref=e308]:
            - generic [ref=e309]:
              - heading "Healthy Habits" [level=5] [ref=e310]
              - paragraph [ref=e311]: Fuel your fitness goals with protein snacks and workout gear.
              - generic [ref=e312]:
                - generic [ref=e313]: Protein bars
                - generic [ref=e314]: Water bottle
                - generic [ref=e315]: Electrolytes
                - generic [ref=e316]: Resistance bands
                - generic [ref=e317]: Trail mix or nuts
                - generic [ref=e318]: Meal prep containers
            - link "Donate Healthy Habits Theme" [ref=e321] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Healthy%20Habits
              - generic [ref=e322]: Donate Healthy Habits Theme
      - generic [ref=e323]:
        - heading "Home & Kitchen 8 Options" [level=3] [ref=e324]:
          - text: Home & Kitchen
          - generic [ref=e325]: 8 Options
        - generic [ref=e326]:
          - article [ref=e327]:
            - generic [ref=e328]:
              - heading "Sourdough" [level=5] [ref=e329]
              - paragraph [ref=e330]: The complete starter kit for your artisanal bread-making journey.
              - generic [ref=e331]:
                - generic [ref=e332]: Banneton proofing basket
                - generic [ref=e333]: Bread lame or scoring tool
                - generic [ref=e334]: Bench scraper
                - generic [ref=e335]: Bread flour
                - generic [ref=e336]: Sourdough starter
                - generic [ref=e337]: Tea towel or bread bag
                - generic [ref=e338]: Bread recipe book or sourdough guide
            - link "Donate Sourdough Theme" [ref=e341] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Sourdough
              - generic [ref=e342]: Donate Sourdough Theme
          - article [ref=e343]:
            - generic [ref=e344]:
              - heading "Grill" [level=5] [ref=e345]
              - paragraph [ref=e346]: Everything the pitmaster needs for the perfect backyard BBQ.
              - generic [ref=e347]:
                - generic [ref=e348]: BBQ rubs and sauces
                - generic [ref=e349]: Grill utensils
                - generic [ref=e350]: Apron
                - generic [ref=e351]: Pellets or wood chips
                - generic [ref=e352]: Oven mitt or grilling gloves
                - generic [ref=e353]: Meat thermometer
            - link "Donate Grill Theme" [ref=e356] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Grill
              - generic [ref=e357]: Donate Grill Theme
          - article [ref=e358]:
            - generic [ref=e359]:
              - heading "Baking Basket" [level=5] [ref=e360]
              - paragraph [ref=e361]: Sweeten any afternoon with professional tools and fun toppings.
              - generic [ref=e362]:
                - generic [ref=e363]: Mixing bowl
                - generic [ref=e364]: Rubber spatula set
                - generic [ref=e365]: Sprinkles
                - generic [ref=e366]: Vanilla extract
                - generic [ref=e367]: Measuring cups or spoons
                - generic [ref=e368]: Recipe cards
                - generic [ref=e369]: Apron
            - link "Donate Baking Basket Theme" [ref=e372] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Baking%20Basket
              - generic [ref=e373]: Donate Baking Basket Theme
          - article [ref=e374]:
            - generic [ref=e375]:
              - heading "Gardening" [level=5] [ref=e376]
              - paragraph [ref=e377]: Everything needed to grow your own herbs and beautiful flowers.
              - generic [ref=e378]:
                - generic [ref=e379]: Gloves
                - generic [ref=e380]: Hand tools
                - generic [ref=e381]: Flower or herb seeds
                - generic [ref=e382]: Plant pot
                - generic [ref=e383]: Watering can
                - generic [ref=e384]: Garden decor
            - link "Donate Gardening Theme" [ref=e387] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Gardening
              - generic [ref=e388]: Donate Gardening Theme
          - article [ref=e389]:
            - generic [ref=e390]:
              - heading "Lemons" [level=5] [ref=e391]
              - paragraph [ref=e392]: Brighten any kitchen with citrus-themed decor and sweet treats.
              - generic [ref=e393]:
                - generic [ref=e394]: Lemon kitchen towel
                - generic [ref=e395]: Lemon candle
                - generic [ref=e396]: Lemon cookies
                - generic [ref=e397]: Lemon loaf mix
                - generic [ref=e398]: Lemon hand soap or lotion
                - generic [ref=e399]: Pitcher or drink dispenser
            - link "Donate Lemons Theme" [ref=e402] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Lemons
              - generic [ref=e403]: Donate Lemons Theme
          - article [ref=e404]:
            - generic [ref=e405]:
              - heading "Deep Cleaning" [level=5] [ref=e406]
              - paragraph [ref=e407]: The ultimate stash of high-end tools to make any home sparkle.
              - generic [ref=e408]:
                - generic [ref=e409]: Multi-surface cleaner
                - generic [ref=e410]: Glass cleaner
                - generic [ref=e411]: Microfiber cloth set
                - generic [ref=e412]: Scrub brushes or sponges
                - generic [ref=e413]: Rubber gloves
                - generic [ref=e414]: Laundry pods
                - generic [ref=e415]: Disinfecting wipes
            - link "Donate Deep Cleaning Theme" [ref=e418] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Deep%20Cleaning
              - generic [ref=e419]: Donate Deep Cleaning Theme
          - article [ref=e420]:
            - generic [ref=e421]:
              - heading "Kitchen Essentials" [level=5] [ref=e422]
              - paragraph [ref=e423]: Upgrade your culinary space with high-quality daily tools.
              - generic [ref=e424]:
                - generic [ref=e425]: Nice dish towels
                - generic [ref=e426]: Olive oil
                - generic [ref=e427]: Seasoning blends
                - generic [ref=e428]: Wooden spoon set
                - generic [ref=e429]: Measuring cups
                - generic [ref=e430]: Recipe cards
            - link "Donate Kitchen Essentials Theme" [ref=e433] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Kitchen%20Essentials
              - generic [ref=e434]: Donate Kitchen Essentials Theme
          - article [ref=e435]:
            - generic [ref=e436]:
              - heading "New Homeowner" [level=5] [ref=e437]
              - paragraph [ref=e438]: The perfect welcome gift with tools and essentials for a new space.
              - generic [ref=e439]:
                - generic [ref=e440]: Welcome mat
                - generic [ref=e441]: Hand soap
                - generic [ref=e442]: Dish towels or reusable towels
                - generic [ref=e443]: Basic toolbox
                - generic [ref=e444]: Measuring tape
                - generic [ref=e445]: Home improvement gift card
            - link "Donate New Homeowner Theme" [ref=e448] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=New%20Homeowner
              - generic [ref=e449]: Donate New Homeowner Theme
      - generic [ref=e450]:
        - heading "Relaxation & Self-Care 9 Options" [level=3] [ref=e451]:
          - text: Relaxation & Self-Care
          - generic [ref=e452]: 9 Options
        - generic [ref=e453]:
          - article [ref=e454]:
            - generic [ref=e455]:
              - heading "Whiskey" [level=5] [ref=e456]
              - paragraph [ref=e457]: A sophisticated collection for the connoisseur of fine spirits.
              - generic [ref=e458]:
                - generic [ref=e459]: Whiskey or rocks glasses
                - generic [ref=e460]: Whiskey stones
                - generic [ref=e461]: Ice mold
                - generic [ref=e462]: Cocktail cherries or bitters
                - generic [ref=e463]: Cigar cutter
                - generic [ref=e464]: Bottle of whiskey
                - generic [ref=e465]: Cigars
            - link "Donate Whiskey Theme" [ref=e468] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Whiskey
              - generic [ref=e469]: Donate Whiskey Theme
          - article [ref=e470]:
            - generic [ref=e471]:
              - heading "Spa / Self Care" [level=5] [ref=e472]
              - paragraph [ref=e473]: Transform your bathroom into a luxury retreat with these soothing treats.
              - generic [ref=e474]:
                - generic [ref=e475]: Bath salts or bath bombs
                - generic [ref=e476]: Lotion or hand cream
                - generic [ref=e477]: Face masks
                - generic [ref=e478]: Soft robe
                - generic [ref=e479]: Slippers
            - link "Donate Spa / Self Care Theme" [ref=e482] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Spa%20%2F%20Self%20Care
              - generic [ref=e483]: Donate Spa / Self Care Theme
          - article [ref=e484]:
            - generic [ref=e485]:
              - heading "Middle Age Starter Pack" [level=5] [ref=e486]
              - paragraph [ref=e487]: Practical comfort for the 'vintage' years, from ice packs to antacids.
              - generic [ref=e488]:
                - generic [ref=e489]: Reusable ice pack
                - generic [ref=e490]: Icy Hot
                - generic [ref=e491]: Epsom salts
                - generic [ref=e492]: Compression socks
                - generic [ref=e493]: Antacids
                - generic [ref=e494]: Heating pad
            - link "Donate Middle Age Starter Pack Theme" [ref=e497] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Middle%20Age%20Starter%20Pack
              - generic [ref=e498]: Donate Middle Age Starter Pack Theme
          - article [ref=e499]:
            - generic [ref=e500]:
              - heading "Beard Care" [level=5] [ref=e501]
              - paragraph [ref=e502]: Grooming essentials to keep any beard looking and feeling its best.
              - generic [ref=e503]:
                - generic [ref=e504]: Beard oil
                - generic [ref=e505]: Beard balm or butter
                - generic [ref=e506]: Beard wash
                - generic [ref=e507]: Beard comb or brush
                - generic [ref=e508]: Beard trimming scissors
                - generic [ref=e509]: Men's grooming gift card
            - link "Donate Beard Care Theme" [ref=e512] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Beard%20Care
              - generic [ref=e513]: Donate Beard Care Theme
          - article [ref=e514]:
            - generic [ref=e515]:
              - heading "Mom's Night In" [level=5] [ref=e516]
              - paragraph [ref=e517]: A relaxing evening designed specifically to pamper hard-working moms.
              - generic [ref=e518]:
                - generic [ref=e519]: Wine glasses or tumblers
                - generic [ref=e520]: Chocolates or snacks
                - generic [ref=e521]: Face mask
                - generic [ref=e522]: Cozy socks
                - generic [ref=e523]: Manicure set
            - link "Donate Mom's Night In Theme" [ref=e526] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Mom's%20Night%20In
              - generic [ref=e527]: Donate Mom's Night In Theme
          - article [ref=e528]:
            - generic [ref=e529]:
              - heading "Dad's Favorites" [level=5] [ref=e530]
              - paragraph [ref=e531]: A curated stash of rugged gear and snacks any dad would love.
              - generic [ref=e532]:
                - generic [ref=e533]: Jerky or snack mixes
                - generic [ref=e534]: BBQ sauces or rubs
                - generic [ref=e535]: Nice tumbler or whiskey glass
                - generic [ref=e536]: Pocket tool
                - generic [ref=e537]: Flashlight or headlamp
                - generic [ref=e538]: Lighter
                - generic [ref=e539]: Tire pressure gauge
                - generic [ref=e540]: Gift card to Home Depot, Lowe's, or Academy
            - link "Donate Dad's Favorites Theme" [ref=e543] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Dad's%20Favorites
              - generic [ref=e544]: Donate Dad's Favorites Theme
          - article [ref=e545]:
            - generic [ref=e546]:
              - heading "Book Lover" [level=5] [ref=e547]
              - paragraph [ref=e548]: Everything needed for a cozy afternoon lost in a great novel.
              - generic [ref=e549]:
                - generic [ref=e550]: Popular novel
                - generic [ref=e551]: Cozy blanket
                - generic [ref=e552]: Bookmarks
                - generic [ref=e553]: Tea or coffee
                - generic [ref=e554]: Reading light
                - generic [ref=e555]: Bookstore gift card
            - link "Donate Book Lover Theme" [ref=e558] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Book%20Lover
              - generic [ref=e559]: Donate Book Lover Theme
          - article [ref=e560]:
            - generic [ref=e561]:
              - heading "Rainy Day" [level=5] [ref=e562]
              - paragraph [ref=e563]: Turn a gray afternoon into fun with puzzles, hot tea, and games.
              - generic [ref=e564]:
                - generic [ref=e565]: Puzzle
                - generic [ref=e566]: Card game
                - generic [ref=e567]: Blanket
                - generic [ref=e568]: Hot tea or hot cocoa
                - generic [ref=e569]: Soup mix
                - generic [ref=e570]: Crackers
            - link "Donate Rainy Day Theme" [ref=e573] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Rainy%20Day
              - generic [ref=e574]: Donate Rainy Day Theme
          - article [ref=e575]:
            - generic [ref=e576]:
              - heading "Crocs" [level=5] [ref=e577]
              - paragraph [ref=e578]: Style and comfort for the fan of the world's most versatile footwear.
              - generic [ref=e579]:
                - generic [ref=e580]: Gift card
                - generic [ref=e581]: Charms
                - generic [ref=e582]: Crocs socks
                - generic [ref=e583]: Shoe bag
            - link "Donate Crocs Theme" [ref=e586] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Crocs
              - generic [ref=e587]: Donate Crocs Theme
      - generic [ref=e588]:
        - heading "Family, Kids & Pets 6 Options" [level=3] [ref=e589]:
          - text: Family, Kids & Pets
          - generic [ref=e590]: 6 Options
        - generic [ref=e591]:
          - article [ref=e592]:
            - generic [ref=e593]:
              - heading "Family Game Night" [level=5] [ref=e594]
              - paragraph [ref=e595]: Bring everyone to the table for an evening of friendly competition.
              - generic [ref=e596]:
                - generic [ref=e597]: Board or card game
                - generic [ref=e598]: Snacks or candy
                - generic [ref=e599]: Puzzle
                - generic [ref=e600]: Cozy blanket
            - link "Donate Family Game Night Theme" [ref=e603] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Family%20Game%20Night
              - generic [ref=e604]: Donate Family Game Night Theme
          - article [ref=e605]:
            - generic [ref=e606]:
              - heading "Kids Summer Fun" [level=5] [ref=e607]
              - paragraph [ref=e608]: Be the hero of the backyard with water toys and outdoor games.
              - generic [ref=e609]:
                - generic [ref=e610]: Slip n slide
                - generic [ref=e611]: Water balloons
                - generic [ref=e612]: Water guns
                - generic [ref=e613]: Sidewalk chalk
                - generic [ref=e614]: Bubbles
                - generic [ref=e615]: Popsicle molds
            - link "Donate Kids Summer Fun Theme" [ref=e618] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Kids%20Summer%20Fun
              - generic [ref=e619]: Donate Kids Summer Fun Theme
          - article [ref=e620]:
            - generic [ref=e621]:
              - heading "Pet Lover" [level=5] [ref=e622]
              - paragraph [ref=e623]: Special treats and toys for the four-legged family members.
              - generic [ref=e624]:
                - generic [ref=e625]: Dog or cat treats
                - generic [ref=e626]: Toy
                - generic [ref=e627]: Food or water bowl
                - generic [ref=e628]: Pet blanket or bandana
                - generic [ref=e629]: Pet store gift card
            - link "Donate Pet Lover Theme" [ref=e632] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Pet%20Lover
              - generic [ref=e633]: Donate Pet Lover Theme
          - article [ref=e634]:
            - generic [ref=e635]:
              - heading "Kids Activities" [level=5] [ref=e636]
              - paragraph [ref=e637]: Creative tools to keep small hands and big imaginations busy.
              - generic [ref=e638]:
                - generic [ref=e639]: Coloring books
                - generic [ref=e640]: Crayons or markers
                - generic [ref=e641]: Small toys
                - generic [ref=e642]: Crafts
                - generic [ref=e643]: Bubbles
                - generic [ref=e644]: Sidewalk chalk
                - generic [ref=e645]: Treats
            - link "Donate Kids Activities Theme" [ref=e648] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Kids%20Activities
              - generic [ref=e649]: Donate Kids Activities Theme
          - article [ref=e650]:
            - generic [ref=e651]:
              - heading "Crafts" [level=5] [ref=e652]
              - paragraph [ref=e653]: A complete makerspace in a box for your next creative project.
              - generic [ref=e654]:
                - generic [ref=e655]: Paint set or markers
                - generic [ref=e656]: Sketchbook or craft paper
                - generic [ref=e657]: Glue, tape, and scissors
                - generic [ref=e658]: DIY kit
                - generic [ref=e659]: Apron
                - generic [ref=e660]: Storage tote
            - link "Donate Crafts Theme" [ref=e663] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Crafts
              - generic [ref=e664]: Donate Crafts Theme
          - article [ref=e665]:
            - generic [ref=e666]:
              - heading "Baby" [level=5] [ref=e667]
              - paragraph [ref=e668]: Soft essentials and sweet toys for the newest addition to the family.
              - generic [ref=e669]:
                - generic [ref=e670]: Plush blanket
                - generic [ref=e671]: Baby bibs
                - generic [ref=e672]: Board book
                - generic [ref=e673]: Teether or toy
                - generic [ref=e674]: Baby lotion and wash
            - link "Donate Baby Theme" [ref=e677] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Baby
              - generic [ref=e678]: Donate Baby Theme
      - generic [ref=e679]:
        - heading "Sports, Outdoors & Local Pride 7 Options" [level=3] [ref=e680]:
          - text: Sports, Outdoors & Local Pride
          - generic [ref=e681]: 7 Options
        - generic [ref=e682]:
          - article [ref=e683]:
            - generic [ref=e684]:
              - heading "Texas" [level=5] [ref=e685]
              - paragraph [ref=e686]: Deeply local pride with iconic Texas-shaped treats and decor.
              - generic [ref=e687]:
                - generic [ref=e688]: Texas-shaped cutting board
                - generic [ref=e689]: Local salsa or BBQ sauce
                - generic [ref=e690]: Bluebonnet towel
                - generic [ref=e691]: Lone Star mug
            - link "Donate Texas Theme" [ref=e694] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Texas
              - generic [ref=e695]: Donate Texas Theme
          - article [ref=e696]:
            - generic [ref=e697]:
              - heading "Beach" [level=5] [ref=e698]
              - paragraph [ref=e699]: Everything needed for a sun-soaked afternoon on the sand.
              - generic [ref=e700]:
                - generic [ref=e701]: Towel
                - generic [ref=e702]: Sunscreen or aloe vera gel
                - generic [ref=e703]: Insulated tumbler or water bottle
                - generic [ref=e704]: Beach tote
                - generic [ref=e705]: Beach toys
            - link "Donate Beach Theme" [ref=e708] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Beach
              - generic [ref=e709]: Donate Beach Theme
          - article [ref=e710]:
            - generic [ref=e711]:
              - heading "Astros" [level=5] [ref=e712]
              - paragraph [ref=e713]: Show your H-Town pride with gear for the World Series champions.
              - generic [ref=e714]:
                - generic [ref=e715]: Astros cap or t-shirt
                - generic [ref=e716]: Baseball themed snacks
                - generic [ref=e717]: Astros cup or koozie
                - generic [ref=e718]: Baseball or souvenir
            - link "Donate Astros Theme" [ref=e721] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Astros
              - generic [ref=e722]: Donate Astros Theme
          - article [ref=e723]:
            - generic [ref=e724]:
              - heading "Barbers Hill" [level=5] [ref=e725]
              - paragraph [ref=e726]: Support the home team with local blue and white spirit gear.
              - generic [ref=e727]:
                - generic [ref=e728]: T-shirt or sweater
                - generic [ref=e729]: Baseball cap or beanie
                - generic [ref=e730]: Cup or tumbler
                - generic [ref=e731]: Blue and white pom-poms
                - generic [ref=e732]: Stadium blanket
            - link "Donate Barbers Hill Theme" [ref=e735] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Barbers%20Hill
              - generic [ref=e736]: Donate Barbers Hill Theme
          - article [ref=e737]:
            - generic [ref=e738]:
              - heading "Pool Day" [level=5] [ref=e739]
              - paragraph [ref=e740]: Inflatables and accessories for the perfect summer afternoon.
              - generic [ref=e741]:
                - generic [ref=e742]: Pool floaties
                - generic [ref=e743]: Inflatable lounge
                - generic [ref=e744]: Waterproof speaker
                - generic [ref=e745]: Towel
                - generic [ref=e746]: Sunscreen
                - generic [ref=e747]: Insulated tumbler
                - generic [ref=e748]: Pool toys or diving rings
                - generic [ref=e749]: Sunglasses
            - link "Donate Pool Day Theme" [ref=e752] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Pool%20Day
              - generic [ref=e753]: Donate Pool Day Theme
          - article [ref=e754]:
            - generic [ref=e755]:
              - heading "Fishing" [level=5] [ref=e756]
              - paragraph [ref=e757]: Practical gear and snacks for a successful day on the water.
              - generic [ref=e758]:
                - generic [ref=e759]: Tackle box
                - generic [ref=e760]: Fishing gear
                - generic [ref=e761]: Baseball cap or bucket hat
                - generic [ref=e762]: Insulated cooler bag
                - generic [ref=e763]: Jerky or trail snacks
                - generic [ref=e764]: Sunglasses strap
                - generic [ref=e765]: Sunscreen
                - generic [ref=e766]: Gaiters
            - link "Donate Fishing Theme" [ref=e769] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Fishing
              - generic [ref=e770]: Donate Fishing Theme
          - article [ref=e771]:
            - generic [ref=e772]:
              - heading "College-Specific" [level=5] [ref=e773]
              - paragraph [ref=e774]: Tailgate-ready gear for your favorite university fan.
              - generic [ref=e775]:
                - generic [ref=e776]: T-shirt or sweatshirt
                - generic [ref=e777]: Hat or beanie
                - generic [ref=e778]: Tumbler, mug, or cup
                - generic [ref=e779]: Car decal or window sticker
                - generic [ref=e780]: Stadium blanket
                - generic [ref=e781]: Clear game day bag
            - link "Donate College-Specific Theme" [ref=e784] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=College-Specific
              - generic [ref=e785]: Donate College-Specific Theme
      - generic [ref=e786]:
        - heading "Faith, School & Seasonal 7 Options" [level=3] [ref=e787]:
          - text: Faith, School & Seasonal
          - generic [ref=e788]: 7 Options
        - generic [ref=e789]:
          - article [ref=e790]:
            - generic [ref=e791]:
              - heading "Teacher Appreciation" [level=5] [ref=e792]
              - paragraph [ref=e793]: Give back to our educators with classroom tools and self-care.
              - generic [ref=e794]:
                - generic [ref=e795]: Nice pens
                - generic [ref=e796]: Classroom supplies
                - generic [ref=e797]: Coffee shop gift card
                - generic [ref=e798]: Amazon gift card
                - generic [ref=e799]: Target gift card
                - generic [ref=e800]: Rechargeable hand warmer
                - generic [ref=e801]: Instant espresso
                - generic [ref=e802]: Self-care items or nail polish
            - link "Donate Teacher Appreciation Theme" [ref=e805] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Teacher%20Appreciation
              - generic [ref=e806]: Donate Teacher Appreciation Theme
          - article [ref=e807]:
            - generic [ref=e808]:
              - heading "Catholic" [level=5] [ref=e809]
              - paragraph [ref=e810]: A beautiful collection of devotionals, rosaries, and parish-focused items.
              - generic [ref=e811]:
                - generic [ref=e812]: Chrism candle
                - generic [ref=e813]: Rosary
                - generic [ref=e814]: Saint medal or Tiny Saints
                - generic [ref=e815]: Crucifix
                - generic [ref=e816]: Devotional or prayer book
                - generic [ref=e817]: Holy water bottle
                - generic [ref=e818]: Catholic books
            - link "Donate Catholic Theme" [ref=e821] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Catholic
              - generic [ref=e822]: Donate Catholic Theme
          - article [ref=e823]:
            - generic [ref=e824]:
              - heading "Faith" [level=5] [ref=e825]
              - paragraph [ref=e826]: Spiritual essentials for quiet reflection and daily prayer.
              - generic [ref=e827]:
                - generic [ref=e828]: Devotional book
                - generic [ref=e829]: Journal
                - generic [ref=e830]: Scripture mug
                - generic [ref=e831]: Prayer cards
                - generic [ref=e832]: Candle or blanket
            - link "Donate Faith Theme" [ref=e835] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Faith
              - generic [ref=e836]: Donate Faith Theme
          - article [ref=e837]:
            - generic [ref=e838]:
              - heading "USA" [level=5] [ref=e839]
              - paragraph [ref=e840]: Patriotic decor and snacks for your next holiday celebration.
              - generic [ref=e841]:
                - generic [ref=e842]: Red, white, and blue decor
                - generic [ref=e843]: Flag-themed towel
                - generic [ref=e844]: Sparkling drink mix
                - generic [ref=e845]: Summer snacks
                - generic [ref=e846]: Serving tray
            - link "Donate USA Theme" [ref=e849] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=USA
              - generic [ref=e850]: Donate USA Theme
          - article [ref=e851]:
            - generic [ref=e852]:
              - heading "Christmas" [level=5] [ref=e853]
              - paragraph [ref=e854]: Celebrate the season with festive decor and holiday treats.
              - generic [ref=e855]:
                - generic [ref=e856]: Ornament set
                - generic [ref=e857]: Kitchen towel
                - generic [ref=e858]: Holiday candle
                - generic [ref=e859]: Cookie mix
                - generic [ref=e860]: Serving platter
                - generic [ref=e861]: Cookie cutters
            - link "Donate Christmas Theme" [ref=e864] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Christmas
              - generic [ref=e865]: Donate Christmas Theme
          - article [ref=e866]:
            - generic [ref=e867]:
              - heading "Easter" [level=5] [ref=e868]
              - paragraph [ref=e869]: Everything needed for a joyful and sweet spring celebration.
              - generic [ref=e870]:
                - generic [ref=e871]: Chocolate bunnies
                - generic [ref=e872]: Spring decor
                - generic [ref=e873]: Pastel table runner
                - generic [ref=e874]: Gift card for brunch
                - generic [ref=e875]: Bunny-themed serveware
            - link "Donate Easter Theme" [ref=e878] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Easter
              - generic [ref=e879]: Donate Easter Theme
          - article [ref=e880]:
            - generic [ref=e881]:
              - heading "Fall" [level=5] [ref=e882]
              - paragraph [ref=e883]: Warm up the season with autumn scents and pumpkin-spiced treats.
              - generic [ref=e884]:
                - generic [ref=e885]: Pumpkin spice
                - generic [ref=e886]: Fall-scented candle
                - generic [ref=e887]: Fall seasonings
                - generic [ref=e888]: Pumpkin bread mix
                - generic [ref=e889]: Decorative mini pumpkins
            - link "Donate Fall Theme" [ref=e892] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog&entry.theme=Fall
              - generic [ref=e893]: Donate Fall Theme
  - generic [ref=e895]:
    - generic [ref=e896]:
      - heading "Ready to donate your basket?" [level=2] [ref=e897]
      - paragraph [ref=e898]: Submit your theme selection through our donation form.
    - link "Open Donation Form" [ref=e901] [cursor=pointer]:
      - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog
      - generic [ref=e902]: Open Donation Form
  - generic [ref=e907]:
    - generic [ref=e908]:
      - generic [ref=e909]:
        - paragraph [ref=e910]: Holy Trinity Catholic Church
        - paragraph [ref=e911]: Summer Fest at Holy Trinity
        - paragraph [ref=e912]: A parish celebration supporting our building fund
      - generic [ref=e913]:
        - navigation "Footer navigation" [ref=e914]:
          - paragraph [ref=e915]: Explore
          - generic [ref=e916]:
            - link "Plan Your Visit" [ref=e918] [cursor=pointer]:
              - /url: /plan-your-visit
              - generic [ref=e919]: Plan Your Visit
            - link "Get Involved" [ref=e921] [cursor=pointer]:
              - /url: /get-involved
              - generic [ref=e922]: Get Involved
            - link "Donate" [ref=e924] [cursor=pointer]:
              - /url: https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog
              - generic [ref=e925]: Donate
        - generic [ref=e926]:
          - paragraph [ref=e927]: Stay connected
          - generic [ref=e928]:
            - link "Facebook (opens in a new tab)" [ref=e930] [cursor=pointer]:
              - /url: https://www.facebook.com/HolyTrinityMB/
              - img [ref=e932]
              - generic [ref=e934]: Facebook
            - link "Instagram (opens in a new tab)" [ref=e936] [cursor=pointer]:
              - /url: https://www.instagram.com/holytrinitycatholicchurchtx/
              - img [ref=e938]
              - generic [ref=e940]: Instagram
            - link "Parish Website (opens in a new tab)" [ref=e942] [cursor=pointer]:
              - /url: https://htcc-mb.org
              - img [ref=e944]
              - generic [ref=e946]: Parish Website
    - generic [ref=e947]:
      - paragraph [ref=e948]: Hosted by Holy Trinity Catholic Church
      - paragraph [ref=e949]: © 2026 Holy Trinity Catholic Church
```

# Test source

```ts
  120 |   await expect(sportsGroup.getByText("Pool Day", { exact: true })).toBeVisible();
  121 |   await expect(sportsGroup.getByText("Texas-shaped cutting board")).toBeVisible();
  122 | 
  123 |   const foodGroup = donateCard.locator(".basket-theme-group").filter({ hasText: "Food & Hosting" });
  124 | 
  125 |   await foodGroup.locator(".basket-theme-trigger").click();
  126 |   await expect(foodGroup.locator(".basket-theme-toggle")).toBeChecked();
  127 |   await expect(foodGroup.getByText("Movie Night", { exact: true })).toBeVisible();
  128 |   await expect(foodGroup.getByText("Reusable popcorn bowls")).toBeVisible();
  129 | 
  130 |   const faithGroup = donateCard.locator(".basket-theme-group").filter({ hasText: "Faith, School & Seasonal" });
  131 | 
  132 |   await faithGroup.locator(".basket-theme-trigger").click();
  133 |   await expect(faithGroup.locator(".basket-theme-toggle")).toBeChecked();
  134 |   await expect(faithGroup.getByText("Catholic", { exact: true })).toBeVisible();
  135 |   await expect(faithGroup.getByText("Holy water bottle")).toBeVisible();
  136 | 
  137 |   await expect(page.getByRole("heading", { level: 2, name: "Need the Parish Payment Portal?" })).toBeVisible();
  138 |   await expect(page.locator("body")).not.toContainText("1Gr_VpCTN1gbnyRrS_VXAmGgqlcWsQgErWRmKhDVUO3g");
  139 | });
  140 | 
  141 | test("donate basket ideas stay compact on mobile", async ({ page }) => {
  142 |   await page.setViewportSize({ width: 390, height: 844 });
  143 |   await page.goto("/get-involved");
  144 | 
  145 |   const donateCard = page.locator(".sign-up-card").filter({
  146 |     has: page.getByRole("heading", { level: 3, name: "Donate" }),
  147 |   });
  148 |   const basketSection = donateCard.locator(".basket-theme-section");
  149 |   const sportsGroup = donateCard.locator(".basket-theme-group").filter({ hasText: "Sports, Outdoors & Local Pride" });
  150 |   const sportsTrigger = sportsGroup.locator(".basket-theme-trigger");
  151 | 
  152 |   await expect(donateCard.getByRole("link", { name: "Open Donation Form" })).toBeVisible();
  153 |   await expect(basketSection).toBeVisible();
  154 | 
  155 |   const widths = await basketSection.evaluate((element) => ({
  156 |     clientWidth: element.clientWidth,
  157 |     scrollWidth: element.scrollWidth,
  158 |   }));
  159 | 
  160 |   expect(widths.scrollWidth).toBeLessThanOrEqual(widths.clientWidth + 1);
  161 | 
  162 |   await sportsTrigger.scrollIntoViewIfNeeded();
  163 |   await sportsTrigger.click();
  164 |   await expect(sportsGroup.locator(".basket-theme-toggle")).toBeChecked();
  165 |   await expect(sportsGroup.getByText("Pool Day", { exact: true })).toBeVisible();
  166 | 
  167 |   const triggerBox = await sportsTrigger.boundingBox();
  168 | 
  169 |   expect(triggerBox).not.toBeNull();
  170 |   expect(triggerBox?.height ?? 0).toBeGreaterThan(44);
  171 | });
  172 | 
  173 | test("basket themes page expands mobile controls near the top and condenses them on scroll", async ({ page }) => {
  174 |   await page.setViewportSize({ width: 390, height: 844 });
  175 |   await page.goto("/get-involved/basket-themes");
  176 | 
  177 |   await expect(page.getByRole("heading", { level: 1, name: "Silent Auction Basket Theme Ideas" })).toBeVisible();
  178 | 
  179 |   const controls = page.locator(".basket-controls");
  180 |   const filterScroll = controls.locator(".filter-scroll");
  181 |   const searchInput = controls.locator(".basket-search-input");
  182 |   const categoryTab = page.getByRole("button", { name: "Relaxation & Self-Care" });
  183 |   const main = page.locator("main");
  184 | 
  185 |   await expect(controls).toHaveAttribute("data-condensed", "false");
  186 |   await expect(categoryTab).toBeVisible();
  187 | 
  188 |   const searchBox = await searchInput.boundingBox();
  189 | 
  190 |   expect(searchBox).not.toBeNull();
  191 | 
  192 |   if (!searchBox) {
  193 |     throw new Error("Expected the basket search input to be measurable.");
  194 |   }
  195 | 
  196 |   expect(searchBox.x).toBeLessThan(18);
  197 |   expect(390 - (searchBox.x + searchBox.width)).toBeLessThan(18);
  198 | 
  199 |   const expandedFilterState = await filterScroll.evaluate((element) => {
  200 |     const styles = window.getComputedStyle(element);
  201 | 
  202 |     return {
  203 |       flexWrap: styles.flexWrap,
  204 |       clientWidth: element.clientWidth,
  205 |       scrollWidth: element.scrollWidth,
  206 |     };
  207 |   });
  208 | 
  209 |   expect(expandedFilterState.flexWrap).toBe("wrap");
  210 |   expect(expandedFilterState.scrollWidth).toBeLessThanOrEqual(expandedFilterState.clientWidth + 1);
  211 | 
  212 |   const initialOverflow = await main.evaluate((element) => ({
  213 |     clientWidth: element.clientWidth,
  214 |     scrollWidth: element.scrollWidth,
  215 |   }));
  216 | 
  217 |   expect(initialOverflow.scrollWidth).toBeLessThanOrEqual(initialOverflow.clientWidth + 1);
  218 | 
  219 |   await page.evaluate(() => window.scrollTo(0, 720));
> 220 |   await expect(controls).toHaveAttribute("data-condensed", "true");
      |                          ^ Error: expect(locator).toHaveAttribute(expected) failed
  221 | 
  222 |   const condensedFilterState = await filterScroll.evaluate((element) => {
  223 |     const styles = window.getComputedStyle(element);
  224 | 
  225 |     return {
  226 |       flexWrap: styles.flexWrap,
  227 |       clientWidth: element.clientWidth,
  228 |       scrollWidth: element.scrollWidth,
  229 |       overflowX: styles.overflowX,
  230 |     };
  231 |   });
  232 | 
  233 |   expect(condensedFilterState.flexWrap).toBe("nowrap");
  234 |   expect(condensedFilterState.overflowX).toBe("auto");
  235 |   expect(condensedFilterState.scrollWidth).toBeGreaterThan(condensedFilterState.clientWidth + 1);
  236 | 
  237 |   await categoryTab.click();
  238 |   await expect(categoryTab).toHaveClass(/is-active/);
  239 | 
  240 |   await searchInput.fill("Whiskey");
  241 |   await expect(page.getByRole("heading", { level: 5, name: "Whiskey" })).toBeVisible();
  242 |   await expect(page.getByRole("heading", { level: 5, name: "Book Lover" })).toHaveCount(0);
  243 | 
  244 |   const finalOverflow = await main.evaluate((element) => ({
  245 |     clientWidth: element.clientWidth,
  246 |     scrollWidth: element.scrollWidth,
  247 |   }));
  248 | 
  249 |   expect(finalOverflow.scrollWidth).toBeLessThanOrEqual(finalOverflow.clientWidth + 1);
  250 | });
  251 | 
  252 | test("home and contact pages reflect the new two-form signup flow", async ({ page }) => {
  253 |   await page.goto("/");
  254 | 
  255 |   const hero = page.locator(".hero-section");
  256 |   const countdownCard = hero.locator(".countdown-card");
  257 |   const calendarLink = hero.getByRole("link", { name: "Add to Calendar" });
  258 | 
  259 |   await expect(hero.getByRole("link", { name: "Register" })).toHaveAttribute(
  260 |     "href",
  261 |     "https://docs.google.com/forms/d/e/1FAIpQLSe9Z-FC43WnBFT__pQ3kTOlM_sxCGZFr0qVCkxr9oPAPj3j2A/viewform",
  262 |   );
  263 |   await expect(hero.getByRole("link", { name: "Donate" })).toHaveAttribute(
  264 |     "href",
  265 |     "https://docs.google.com/forms/d/e/1FAIpQLSdJRIpv0jbFyApfKM7SmREz85SOJ8odNe12Ex0SKPaE71NsbA/viewform?usp=dialog",
  266 |   );
  267 |   await expect(calendarLink).toHaveAttribute("href", "/api/calendar");
  268 |   await expect(calendarLink).toHaveAttribute("download", "");
  269 |   await expect(calendarLink).toBeVisible();
  270 | 
  271 |   const countdownRelation = await countdownCard.evaluate(
  272 |     (element, calendarAnchor) =>
  273 |       element.compareDocumentPosition(calendarAnchor as Node) & Node.DOCUMENT_POSITION_FOLLOWING,
  274 |     await calendarLink.elementHandle(),
  275 |   );
  276 | 
  277 |   expect(countdownRelation).toBeTruthy();
  278 | 
  279 |   await expect(page.getByRole("heading", { level: 2, name: "Ready to register, volunteer, or donate?" })).toBeVisible();
  280 |   await expect(page.getByRole("link", { name: "Open Live Forms" })).toBeVisible();
  281 | 
  282 |   await page.goto("/contact");
  283 |   await expect(page).toHaveURL(/\/get-involved$/);
  284 | });
  285 | 
  286 | test("plan your visit page stays focused on logistics", async ({ page }) => {
  287 |   await page.goto("/plan-your-visit");
  288 | 
  289 |   await expect(page.getByRole("heading", { level: 1, name: "What You Need to Know" })).toBeVisible();
  290 |   await expect(page.getByRole("heading", { level: 2, name: "Event Details" })).toBeVisible();
  291 |   await expect(page.getByText("Parking available in lot and marked field")).toBeVisible();
  292 |   await expect(page.getByText("Tents, tables, and chairs provided")).toBeVisible();
  293 |   await expect(page.getByRole("heading", { level: 2, name: "Admission Overview" })).toBeVisible();
  294 |   await expect(page.getByRole("heading", { level: 2, name: "Know Before You Go" })).toHaveCount(0);
  295 |   await expect(page.getByRole("heading", { level: 3, name: "About Summer Fest" })).toHaveCount(0);
  296 |   await expect(page.getByText("Admission is free, and guests can choose optional purchases")).toBeVisible();
  297 |   await expect(page.getByRole("heading", { level: 2, name: "Frequently Asked Questions" })).toBeVisible();
  298 | 
  299 |   await expect(page.getByRole("heading", { level: 3, name: "Wristbands vs Tickets" })).toBeVisible();
  300 |   await expect(page.getByRole("heading", { level: 3, name: "Pricing" })).toBeVisible();
  301 |   await expect(page.getByRole("heading", { level: 2, name: "Food & Drink" })).toHaveCount(0);
  302 |   await expect(page.getByRole("heading", { level: 2, name: "Activities & Games" })).toHaveCount(0);
  303 |   await expect(page.getByText("Unlimited games and activities")).toBeVisible();
  304 |   await expect(page.getByText("Pay one item at a time")).toBeVisible();
  305 |   await expect(page.getByRole("link", { name: "Open payment link for 1 wristband" })).toHaveAttribute(
  306 |     "href",
  307 |     "https://secure.myvanco.com/L-ZFPW/home",
  308 |   );
  309 |   await expect(page.getByRole("link", { name: "Open Vanco Payment Link" })).toHaveAttribute(
  310 |     "href",
  311 |     "https://secure.myvanco.com/L-ZFPW/home",
  312 |   );
  313 | });
  314 | 
  315 | test("legacy what to expect route now redirects to plan your visit", async ({ page }) => {
  316 |   await page.goto("/what-to-expect");
  317 | 
  318 |   await expect(page).toHaveURL(/\/plan-your-visit$/);
  319 | });
  320 | 
```