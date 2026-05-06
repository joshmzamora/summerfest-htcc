"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

import { MotionPanel, MotionStagger } from "@/components/FestivalMotion";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import type { AuctionItem } from "@/lib/auction/types";

type SilentAuctionClientProps = {
  initialItems: AuctionItem[];
  isConfigured: boolean;
  loadError?: string;
};

type BidFormState = {
  bidderName: string;
  bidderEmail: string;
  bidderPhone: string;
  bidAmount: string;
};

type ItemFeedback = {
  kind: "success" | "error";
  message: string;
};

const emptyForm: BidFormState = {
  bidderName: "",
  bidderEmail: "",
  bidderPhone: "",
  bidAmount: "",
};

const moneyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
});

function formatMoney(value: number | null | undefined) {
  return moneyFormatter.format(value ?? 0);
}

function formatClosingTime(value: string | null) {
  if (!value) {
    return "Closing time coming soon";
  }

  return dateFormatter.format(new Date(value));
}

function getCurrentBid(item: AuctionItem) {
  return item.current_highest_bid ?? 0;
}

function getMinimumNextBid(item: AuctionItem) {
  const currentBid = getCurrentBid(item);

  if (currentBid > 0) {
    return Math.max(item.starting_bid, currentBid + 1);
  }

  return item.starting_bid;
}

function validateBid(item: AuctionItem, form: BidFormState) {
  const name = form.bidderName.trim();
  const email = form.bidderEmail.trim();
  const phone = form.bidderPhone.trim();
  const bidAmount = Number(form.bidAmount);
  const currentBid = getCurrentBid(item);

  if (!name || !email || !phone || !form.bidAmount) {
    return "Please enter your name, email, phone number, and bid amount.";
  }

  if (!Number.isFinite(bidAmount) || bidAmount <= 0) {
    return "Please enter a valid bid amount.";
  }

  if (bidAmount < item.starting_bid) {
    return `Your bid must be at least the starting bid of ${formatMoney(item.starting_bid)}.`;
  }

  if (currentBid > 0 && bidAmount <= currentBid) {
    return `Your bid must be higher than the current highest bid of ${formatMoney(currentBid)}.`;
  }

  return null;
}

function getItemInitials(title: string) {
  return title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");
}

export function SilentAuctionClient({
  initialItems,
  isConfigured,
  loadError,
}: SilentAuctionClientProps) {
  const [items, setItems] = useState(initialItems);
  const [openItemId, setOpenItemId] = useState<string | null>(null);
  const [forms, setForms] = useState<Record<string, BidFormState>>({});
  const [feedback, setFeedback] = useState<Record<string, ItemFeedback>>({});
  const [submittingItemId, setSubmittingItemId] = useState<string | null>(null);
  const supabase = useMemo(() => {
    if (!isConfigured) {
      return null;
    }

    try {
      return createBrowserSupabaseClient();
    } catch {
      return null;
    }
  }, [isConfigured]);

  useEffect(() => {
    if (!supabase) {
      return;
    }

    const channel = supabase
      .channel("silent-auction-items")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "auction_items",
        },
        (payload) => {
          const updatedItem = payload.new as AuctionItem;

          setItems((currentItems) =>
            currentItems.map((item) =>
              item.id === updatedItem.id
                ? {
                    ...item,
                    current_highest_bid: updatedItem.current_highest_bid,
                    closes_at: updatedItem.closes_at,
                    is_active: updatedItem.is_active,
                  }
                : item,
            ),
          );
        },
      )
      .subscribe();

    return () => {
      void supabase.removeChannel(channel);
    };
  }, [supabase]);

  function updateForm(itemId: string, field: keyof BidFormState, value: string) {
    setForms((currentForms) => ({
      ...currentForms,
      [itemId]: {
        ...(currentForms[itemId] ?? emptyForm),
        [field]: value,
      },
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>, item: AuctionItem) {
    event.preventDefault();

    const form = forms[item.id] ?? emptyForm;
    const validationError = validateBid(item, form);

    if (validationError) {
      setFeedback((current) => ({
        ...current,
        [item.id]: { kind: "error", message: validationError },
      }));
      return;
    }

    if (!supabase) {
      setFeedback((current) => ({
        ...current,
        [item.id]: {
          kind: "error",
          message: "Supabase is not configured yet, so bids cannot be submitted.",
        },
      }));
      return;
    }

    setSubmittingItemId(item.id);
    setFeedback((current) => ({
      ...current,
      [item.id]: {
        kind: "success",
        message: "Sending your pledge bid...",
      },
    }));

    const bidAmount = Number(form.bidAmount);
    const { error } = await supabase.from("bids").insert({
      item_id: item.id,
      bidder_name: form.bidderName.trim(),
      bidder_email: form.bidderEmail.trim(),
      bidder_phone: form.bidderPhone.trim(),
      bid_amount: bidAmount,
    });

    setSubmittingItemId(null);

    if (error) {
      setFeedback((current) => ({
        ...current,
        [item.id]: {
          kind: "error",
          message: error.message || "We could not place that bid. Please try again.",
        },
      }));
      return;
    }

    setItems((currentItems) =>
      currentItems.map((currentItem) =>
        currentItem.id === item.id
          ? { ...currentItem, current_highest_bid: bidAmount }
          : currentItem,
      ),
    );
    setForms((currentForms) => ({ ...currentForms, [item.id]: emptyForm }));
    setFeedback((current) => ({
      ...current,
      [item.id]: {
        kind: "success",
        message:
          "Your pledge bid was recorded. If it wins, the committee will contact you directly for payment.",
      },
    }));
  }

  return (
    <div className="silent-auction-shell">
      <MotionPanel className="silent-auction-disclaimer" reveal="sticker">
        <p>Bids are pledges. Winning bidders will be contacted by the committee to complete payment directly.</p>
      </MotionPanel>

      {loadError ? (
        <MotionPanel className="silent-auction-status process-flow-card" reveal="card">
          <div className="admission-panel-header">
            <h3>{isConfigured ? "Auction items need setup" : "Supabase setup needed"}</h3>
            <p>{loadError}</p>
          </div>
          <ul className="detail-list">
            <li>Apply the Supabase migration in supabase/migrations.</li>
            <li>Add active auction items in Supabase.</li>
            <li>Restart the dev server after editing .env.local.</li>
          </ul>
        </MotionPanel>
      ) : null}

      {items.length > 0 ? (
        <MotionStagger className="silent-auction-grid" stagger={0.08}>
          {items.map((item) => {
            const currentBid = getCurrentBid(item);
            const nextBid = getMinimumNextBid(item);
            const form = forms[item.id] ?? emptyForm;
            const itemFeedback = feedback[item.id];
            const formOpen = openItemId === item.id;
            const hasBid = currentBid > 0;

            return (
              <MotionPanel
                as="article"
                className="process-flow-card silent-auction-card"
                hover="card"
                key={item.id}
                reveal="card"
              >
                <div className="silent-auction-image-wrap">
                  {item.image_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.image_url} alt="" className="silent-auction-image" />
                  ) : (
                    <div className="silent-auction-placeholder" aria-hidden="true">
                      <span>{getItemInitials(item.title) || "SA"}</span>
                    </div>
                  )}
                </div>
                <div className="silent-auction-card-body">
                  <div className="admission-panel-header silent-auction-card-header">
                    <span className="silent-auction-chip">Pledge bid</span>
                    <h3>{item.title}</h3>
                    {item.description ? <p>{item.description}</p> : null}
                  </div>

                  <dl className="silent-auction-bid-meta">
                    <div>
                      <dt>{hasBid ? "Current highest bid" : "Starting bid"}</dt>
                      <dd>{formatMoney(hasBid ? currentBid : item.starting_bid)}</dd>
                    </div>
                    <div>
                      <dt>Closes</dt>
                      <dd>{formatClosingTime(item.closes_at)}</dd>
                    </div>
                  </dl>

                  <div className="button-row silent-auction-actions">
                    <button
                      className="button button-primary"
                      type="button"
                      onClick={() => {
                        setOpenItemId((current) => (current === item.id ? null : item.id));
                        setFeedback((current) => {
                          const next = { ...current };
                          delete next[item.id];
                          return next;
                        });
                      }}
                    >
                      <span className="button-label">{formOpen ? "Close Bid Form" : "Place Bid"}</span>
                    </button>
                  </div>

                  {formOpen ? (
                    <form className="silent-auction-form" noValidate onSubmit={(event) => handleSubmit(event, item)}>
                      <p className="silent-auction-form-note">
                        Next bid must be at least {formatMoney(nextBid)}.
                      </p>
                      <label>
                        <span>Name</span>
                        <input
                          autoComplete="name"
                          name="bidderName"
                          required
                          type="text"
                          value={form.bidderName}
                          onChange={(event) => updateForm(item.id, "bidderName", event.target.value)}
                        />
                      </label>
                      <label>
                        <span>Email</span>
                        <input
                          autoComplete="email"
                          name="bidderEmail"
                          required
                          type="email"
                          value={form.bidderEmail}
                          onChange={(event) => updateForm(item.id, "bidderEmail", event.target.value)}
                        />
                      </label>
                      <label>
                        <span>Phone</span>
                        <input
                          autoComplete="tel"
                          name="bidderPhone"
                          required
                          type="tel"
                          value={form.bidderPhone}
                          onChange={(event) => updateForm(item.id, "bidderPhone", event.target.value)}
                        />
                      </label>
                      <label>
                        <span>Bid amount</span>
                        <input
                          inputMode="decimal"
                          min={nextBid}
                          name="bidAmount"
                          required
                          step="1"
                          type="number"
                          value={form.bidAmount}
                          onChange={(event) => updateForm(item.id, "bidAmount", event.target.value)}
                        />
                      </label>
                      {itemFeedback ? (
                        <p className={`silent-auction-feedback is-${itemFeedback.kind}`} role="status">
                          {itemFeedback.message}
                        </p>
                      ) : null}
                      <button
                        className="button button-secondary"
                        disabled={submittingItemId === item.id}
                        type="submit"
                      >
                        <span className="button-label">
                          {submittingItemId === item.id ? "Placing Bid..." : "Submit Pledge Bid"}
                        </span>
                      </button>
                    </form>
                  ) : itemFeedback ? (
                    <p className={`silent-auction-feedback is-${itemFeedback.kind}`} role="status">
                      {itemFeedback.message}
                    </p>
                  ) : null}
                </div>
              </MotionPanel>
            );
          })}
        </MotionStagger>
      ) : !loadError ? (
        <MotionPanel className="silent-auction-status process-flow-card" reveal="card">
          <div className="admission-panel-header">
            <h3>Auction items coming soon</h3>
            <p>Active silent auction items will appear here once the committee adds them in Supabase.</p>
          </div>
        </MotionPanel>
      ) : null}
    </div>
  );
}
