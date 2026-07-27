// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Allowed `source` values for post-credit-purchase enable-auto-reload actions
// (`PTs`, co-located with `LTs` / export `cy` init).

/** Bundle `PTs` (co-located; not a chunk export). */
export const POST_CREDIT_PURCHASE_ACTION_SOURCES = [
  "auto_top_up_failure_banner",
  "usage_settings_purchase_cta",
  "usage_settings_auto_reload_cta",
  "sidebar_usage_alert",
  "rate_limit_upsell_banner",
  "rate_limit_reset_modal",
] as const;

export type PostCreditPurchaseActionSource =
  (typeof POST_CREDIT_PURCHASE_ACTION_SOURCES)[number];
