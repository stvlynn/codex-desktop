// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `LTs`) / export `cy`.

export type BindBindAutoTopUpFailureBannerPeers = {
  FTs: (...args: unknown[]) => unknown;
  ITs: (...args: unknown[]) => unknown;
  NTs: (...args: unknown[]) => unknown;
  PTs: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  il: (...args: unknown[]) => unknown;
  ml: (...args: unknown[]) => unknown;
  oQ: (...args: unknown[]) => unknown;
  pl: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
  vTs: (...args: unknown[]) => unknown;
};

let peers: BindBindAutoTopUpFailureBannerPeers | null = null;

/** Wire bindBindAutoTopUpFailureBanner peers once companions land. */
export function setBindBindAutoTopUpFailureBannerPeers(next: BindBindAutoTopUpFailureBannerPeers): void {
  peers = next;
}

/**
 * Bundle export `cy` / internal `LTs`.
 */
export function bindBindAutoTopUpFailureBanner() {
  if (peers == null) {
    throw new Error("bindBindAutoTopUpFailureBanner peers are not configured");
  }

  return peers.e(() => {
    NTs = peers.c(), peers.Sl(), peers.vTs(), peers.oQ(), PTs = peers.pl([`auto_top_up_failure_banner`, `usage_settings_purchase_cta`, `usage_settings_auto_reload_cta`, `sidebar_usage_alert`, `rate_limit_upsell_banner`, `rate_limit_reset_modal`]), FTs = peers.sl({
      kind: peers.ml(`enable-auto-reload`),
      payload: peers.sl({
        recharge_threshold: peers.X(),
        recharge_target: peers.X(),
        recharge_monthly_limit: peers.X().nullable().optional(),
        enroll_in_auto_reload_discount: peers.il().optional(),
        supress_immediate_topup: peers.il().optional()
      }),
      source: peers.PTs
    }), ITs = peers.sl({
      postCreditPurchaseAction: peers.FTs.optional()
    });
  });
}
