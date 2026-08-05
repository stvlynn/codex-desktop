// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `dD`) / export `M2`.

export type BindBindDeferredUiM22Peers = {
  JE: (...args: unknown[]) => unknown;
  YE: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiM22Peers | null = null;

/** Wire bindBindDeferredUiM22 peers once companions land. */
export function setBindBindDeferredUiM22Peers(
  next: BindBindDeferredUiM22Peers,
): void {
  peers = next;
}

/**
 * Bundle export `M2` / internal `dD`.
 */
export function bindBindDeferredUiM22() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiM22 peers are not configured");
  }

  return peers.JE(({ latestThreadSettings: e }) => e ?? null, peers.YE.default);
}
