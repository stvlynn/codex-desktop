// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Sme`) / export `Bgt`.

export type BindBindSelfServeBusinessUsageBasedPeers = {
  _me: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  xme: (...args: unknown[]) => unknown;
};

let peers: BindBindSelfServeBusinessUsageBasedPeers | null = null;

/** Wire bindBindSelfServeBusinessUsageBased peers once companions land. */
export function setBindBindSelfServeBusinessUsageBasedPeers(next: BindBindSelfServeBusinessUsageBasedPeers): void {
  peers = next;
}

/**
 * Bundle export `Bgt` / internal `Sme`.
 */
export function bindBindSelfServeBusinessUsageBased() {
  if (peers == null) {
    throw new Error("bindBindSelfServeBusinessUsageBased peers are not configured");
  }

  return peers.e(() => {
    peers._me(), xme = [`plus`, `pro`, `business`, `team`, `self_serve_business_usage_based`];
  });
}
