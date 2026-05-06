insert into public.auction_items (
  id,
  title,
  description,
  starting_bid,
  current_highest_bid,
  closes_at,
  is_active
)
values (
  '00000000-0000-4000-8000-000000000001',
  'St. Cecilia Basket',
  'A music-themed basket for local Supabase development.',
  25,
  40,
  '2026-05-31T17:00:00-05:00',
  true
)
on conflict (id) do update
set
  title = excluded.title,
  description = excluded.description,
  starting_bid = excluded.starting_bid,
  current_highest_bid = excluded.current_highest_bid,
  closes_at = excluded.closes_at,
  is_active = excluded.is_active;
