export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      auction_items: {
        Row: {
          id: string;
          title: string;
          description: string | null;
          image_url: string | null;
          starting_bid: number;
          current_highest_bid: number;
          closes_at: string | null;
          is_active: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description?: string | null;
          image_url?: string | null;
          starting_bid?: number;
          current_highest_bid?: number;
          closes_at?: string | null;
          is_active?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string | null;
          image_url?: string | null;
          starting_bid?: number;
          current_highest_bid?: number;
          closes_at?: string | null;
          is_active?: boolean;
          created_at?: string;
        };
        Relationships: [];
      };
      bids: {
        Row: {
          id: string;
          item_id: string;
          bidder_name: string;
          bidder_email: string;
          bidder_phone: string;
          bid_amount: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          item_id: string;
          bidder_name: string;
          bidder_email: string;
          bidder_phone: string;
          bid_amount: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          item_id?: string;
          bidder_name?: string;
          bidder_email?: string;
          bidder_phone?: string;
          bid_amount?: number;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "bids_item_id_fkey";
            columns: ["item_id"];
            isOneToOne: false;
            referencedRelation: "auction_items";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
