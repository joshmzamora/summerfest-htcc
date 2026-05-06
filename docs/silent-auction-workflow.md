# Silent Auction Committee Workflow

The website uses Supabase for pledge-style silent auction bids. No online payments are collected through the site.

## Setup

1. Create a Supabase project, or start the local stack with `npm run supabase:start`.
2. Copy `.env.local.example` to `.env.local`.
3. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.
   - Local values are printed by `npm run supabase:start`.
   - Hosted values are in Supabase Dashboard > Project Settings > API.
4. Apply the schema:
   - Local: `npm run supabase:reset`.
   - Hosted: run `supabase/migrations/20260506104541_silent_auction_setup.sql` in the SQL editor, or link the project and run `npm run supabase:push`.
5. Restart the Next.js dev server after editing `.env.local`.

## Add Auction Items

1. Open the Supabase dashboard for the Summer Fest project.
2. Go to Table Editor, then `auction_items`.
3. Add one row per item:
   - `title`: public item name.
   - `description`: short public description.
   - `image_url`: optional public image URL.
   - `starting_bid`: minimum first pledge bid.
   - `current_highest_bid`: leave as `0` for a new item.
   - `closes_at`: optional closing date and time.
   - `is_active`: set to `true` while bidding is open.

## View Bids

Committee members can view all submitted bids in the Supabase `bids` table. Bidder email and phone are not shown publicly on the website.

Public visitors can insert bids, but they cannot read the `bids` table. A private trigger validates each bid, updates the public highest bid, and rejects bids that are too low or submitted after closing.

## Identify Winners

For each item, the winner is the highest `bid_amount`. If two bids have the same amount, use the earlier `created_at` time as the tiebreaker.

You can run the winner-review query included at the bottom of `docs/silent-auction-supabase.sql`.

## Payment

Bids are pledges. After the auction closes, contact winning bidders by email or phone and complete payment directly through the committee's offline process.

## Realtime

For live highest-bid updates, the migration adds `public.auction_items` to the `supabase_realtime` publication when it exists. In hosted Supabase, you can also confirm it in Dashboard > Database > Publications.
