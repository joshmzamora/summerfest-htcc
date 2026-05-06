-- Summer Fest silent auction setup.
-- Public visitors can view active auction items and insert pledge bids.
-- Bidder contact details remain private: there is no public SELECT policy on bids.

create extension if not exists pgcrypto;

create schema if not exists private;

revoke all on schema private from anon, authenticated, public;

create table if not exists public.auction_items (
  id uuid primary key default gen_random_uuid(),
  title text not null check (length(trim(title)) > 0),
  description text,
  image_url text,
  starting_bid numeric(10, 2) not null default 0 check (starting_bid >= 0),
  current_highest_bid numeric(10, 2) not null default 0 check (current_highest_bid >= 0),
  closes_at timestamptz,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.bids (
  id uuid primary key default gen_random_uuid(),
  item_id uuid not null references public.auction_items(id) on delete cascade,
  bidder_name text not null check (length(trim(bidder_name)) > 0),
  bidder_email text not null check (length(trim(bidder_email)) > 0),
  bidder_phone text not null check (length(trim(bidder_phone)) > 0),
  bid_amount numeric(10, 2) not null check (bid_amount > 0),
  created_at timestamptz not null default now()
);

create index if not exists auction_items_active_closes_idx
  on public.auction_items (is_active, closes_at);

create index if not exists bids_item_amount_idx
  on public.bids (item_id, bid_amount desc, created_at asc);

alter table public.auction_items enable row level security;
alter table public.bids enable row level security;

grant usage on schema public to anon, authenticated;
grant select on public.auction_items to anon, authenticated;
grant insert on public.bids to anon, authenticated;

drop policy if exists "Public can view active auction items" on public.auction_items;
create policy "Public can view active auction items"
  on public.auction_items
  for select
  to anon, authenticated
  using (is_active = true);

drop policy if exists "Public can submit pledge bids" on public.bids;
create policy "Public can submit pledge bids"
  on public.bids
  for insert
  to anon, authenticated
  with check (
    length(trim(bidder_name)) > 0
    and length(trim(bidder_email)) > 0
    and length(trim(bidder_phone)) > 0
    and position('@' in trim(bidder_email)) > 1
    and bid_amount > 0
    and exists (
      select 1
      from public.auction_items
      where auction_items.id = bids.item_id
        and auction_items.is_active = true
        and (auction_items.closes_at is null or auction_items.closes_at > now())
        and bids.bid_amount >= auction_items.starting_bid
    )
  );

create or replace function private.apply_bid_to_item()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_item public.auction_items%rowtype;
  v_name text := trim(coalesce(new.bidder_name, ''));
  v_email text := trim(coalesce(new.bidder_email, ''));
  v_phone text := trim(coalesce(new.bidder_phone, ''));
  v_current_bid numeric := 0;
begin
  new.bidder_name := v_name;
  new.bidder_email := v_email;
  new.bidder_phone := v_phone;

  if v_name = '' or v_email = '' or v_phone = '' or new.bid_amount is null then
    raise exception 'Please enter your name, email, phone number, and bid amount.';
  end if;

  if position('@' in v_email) <= 1 then
    raise exception 'Please enter a valid email address.';
  end if;

  select *
  into v_item
  from public.auction_items
  where id = new.item_id
  for update;

  if not found then
    raise exception 'This auction item could not be found.';
  end if;

  if v_item.is_active is not true then
    raise exception 'This auction item is no longer accepting bids.';
  end if;

  if v_item.closes_at is not null and v_item.closes_at <= now() then
    raise exception 'Bidding has closed for this auction item.';
  end if;

  v_current_bid := coalesce(v_item.current_highest_bid, 0);

  if new.bid_amount < v_item.starting_bid then
    raise exception 'Your bid must be at least the starting bid of $%.', v_item.starting_bid;
  end if;

  if v_current_bid > 0 and new.bid_amount <= v_current_bid then
    raise exception 'Your bid must be higher than the current highest bid of $%.', v_current_bid;
  end if;

  update public.auction_items
  set current_highest_bid = new.bid_amount
  where id = new.item_id;

  return new;
end;
$$;

drop trigger if exists bids_apply_to_item on public.bids;
create trigger bids_apply_to_item
  before insert on public.bids
  for each row
  execute function private.apply_bid_to_item();

do $$
begin
  if exists (
    select 1
    from pg_catalog.pg_publication
    where pubname = 'supabase_realtime'
  ) and not exists (
    select 1
    from pg_catalog.pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'auction_items'
  ) then
    execute 'alter publication supabase_realtime add table public.auction_items';
  end if;
end;
$$;

-- Optional committee query for winner review:
-- select distinct on (b.item_id)
--   i.title,
--   b.bid_amount,
--   b.bidder_name,
--   b.bidder_email,
--   b.bidder_phone,
--   b.created_at
-- from public.bids b
-- join public.auction_items i on i.id = b.item_id
-- order by b.item_id, b.bid_amount desc, b.created_at asc;
