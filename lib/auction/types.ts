export type AuctionItem = {
  id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  starting_bid: number;
  current_highest_bid: number | null;
  closes_at: string | null;
  is_active: boolean;
  created_at: string;
};

export type AuctionItemsResult = {
  items: AuctionItem[];
  isConfigured: boolean;
  loadError?: string;
};
