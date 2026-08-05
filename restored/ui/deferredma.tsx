// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `PQl`) / export `ma`.

export type BindDeferredmaPeers = {
  AQl: (...args: unknown[]) => unknown;
  DQl: (...args: unknown[]) => unknown;
  EQl: (...args: unknown[]) => unknown;
  MQl: (...args: unknown[]) => unknown;
  NQl: (...args: unknown[]) => unknown;
  OQl: (...args: unknown[]) => unknown;
  constructor: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  jQl: (...args: unknown[]) => unknown;
  kQl: (...args: unknown[]) => unknown;
  reason: (...args: unknown[]) => unknown;
};

let peers: BindDeferredmaPeers | null = null;

/** Wire bindDeferredma peers once companions land. */
export function setBindDeferredmaPeers(next: BindDeferredmaPeers): void {
  peers = next;
}

/**
 * Bundle export `ma` / internal `PQl`.
 */
export function bindDeferredma() {
  if (peers == null) {
    throw new Error("bindDeferredma peers are not configured");
  }

  return peers.e(() => {
    ((EQl = class extends Error {
      reason;
      constructor(e) {
        (super(peers.e), (this.reason = peers.e));
      }
    }),
      (DQl = 52),
      (OQl = `2025-07-13`),
      (kQl = 3),
      (AQl = 20),
      (jQl = /^[a-z0-9._-]+$/),
      (MQl = /\s/g),
      (NQl = {
        business: `Enterprise`,
        enterprise: `Enterprise`,
        enterprise_cbp_automation: `Enterprise`,
        enterprise_cbp_usage_based: `Enterprise`,
        free: `Free`,
        free_workspace: `Free`,
        go: `Go`,
        guest: `Free`,
        plus: `Plus`,
        pro: `Pro`,
        prolite: `Pro`,
        self_serve_business_usage_based: `Business`,
        team: `Business`,
      }));
  });
}
