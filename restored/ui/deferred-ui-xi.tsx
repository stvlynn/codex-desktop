// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `EQl`) / export `Xi`.

export type BindBindDeferredUiXiPeers = {
  constructor: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  reason: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiXiPeers | null = null;

/** Wire bindBindDeferredUiXi peers once companions land. */
export function setBindBindDeferredUiXiPeers(next: BindBindDeferredUiXiPeers): void {
  peers = next;
}

/**
 * Bundle export `Xi` / internal `EQl`.
 */
export function bindBindDeferredUiXi() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiXi peers are not configured");
  }

  return class extends Error {
    reason;
    constructor(e) {
      super(peers.e), this.reason = peers.e;
    }
  };
}
