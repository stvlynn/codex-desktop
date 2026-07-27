// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ujr`) / export `ZQ`.

export type SelfServeBusinessUsageBasedPeers = {
  Sl: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  cjr: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ljr: (...args: unknown[]) => unknown;
  pl: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
};

let peers: SelfServeBusinessUsageBasedPeers | null = null;

/** Wire selfServeBusinessUsageBased peers once companions land. */
export function setSelfServeBusinessUsageBasedPeers(next: SelfServeBusinessUsageBasedPeers): void {
  peers = next;
}

/**
 * Bundle export `ZQ` / internal `ujr`.
 */
export function selfServeBusinessUsageBased() {
  if (peers == null) {
    throw new Error("selfServeBusinessUsageBased peers are not configured");
  }
  return peers.e(() => {
    peers.Sl(), cjr = peers.pl([`free`, `go`, `plus`, `pro`, `prolite`, `team`, `self_serve_business_usage_based`, `business`, `enterprise_cbp_usage_based`, `enterprise_cbp_automation`, `enterprise`, `edu`, `edu_plus`, `edu_pro`, `unknown`]), peers.sl({
      accessToken: peers.X(),
      accountId: peers.X(),
      accountUserId: peers.X().nullable().default(null),
      userId: peers.X().nullable(),
      email: peers.X().nullable(),
      planType: peers.cjr,
      computeResidency: peers.X().nullable().default(null)
    }), ljr = !1;
  });
}
