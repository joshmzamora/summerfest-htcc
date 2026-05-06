import "server-only";

import { createServerSupabaseClient } from "@/lib/supabase/server";
import { hasSupabaseEnv } from "@/lib/supabase/env";
import type { AuctionItem, AuctionItemsResult } from "@/lib/auction/types";

const auctionItemColumns = [
  "id",
  "title",
  "description",
  "image_url",
  "starting_bid",
  "current_highest_bid",
  "closes_at",
  "is_active",
  "created_at",
].join(",");

const playwrightAuctionItems: AuctionItem[] = [
  {
    id: "00000000-0000-4000-8000-000000000001",
    title: "St. Cecilia Basket",
    description: "A music-themed basket for the silent auction fixture.",
    image_url: null,
    starting_bid: 25,
    current_highest_bid: 40,
    closes_at: "2026-05-31T17:00:00-05:00",
    is_active: true,
    created_at: "2026-05-01T12:00:00-05:00",
  },
];

export async function getActiveAuctionItems(): Promise<AuctionItemsResult> {
  if (process.env.PLAYWRIGHT_AUCTION_FIXTURE === "true") {
    return {
      items: playwrightAuctionItems,
      isConfigured: false,
    };
  }

  if (!hasSupabaseEnv()) {
    return {
      items: [],
      isConfigured: false,
      loadError: "Supabase environment variables are not configured yet.",
    };
  }

  try {
    const supabase = await createServerSupabaseClient();
    const { data, error } = await supabase
      .from("auction_items")
      .select(auctionItemColumns)
      .eq("is_active", true)
      .order("closes_at", { ascending: true, nullsFirst: false })
      .order("created_at", { ascending: false })
      .returns<AuctionItem[]>();

    if (error) {
      return {
        items: [],
        isConfigured: true,
        loadError: error.message,
      };
    }

    return {
      items: data ?? [],
      isConfigured: true,
    };
  } catch (error) {
    return {
      items: [],
      isConfigured: true,
      loadError: error instanceof Error ? error.message : "Unable to load auction items.",
    };
  }
}
