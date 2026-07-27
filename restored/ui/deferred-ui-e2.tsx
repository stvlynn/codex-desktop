// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Jnr`) / export `E2`.

export type BindBindDeferredUiE2Peers = {
  JE: (...args: unknown[]) => unknown;
  Utr: (...args: unknown[]) => unknown;
  sg: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiE2Peers | null = null;

/** Wire bindBindDeferredUiE2 peers once companions land. */
export function setBindBindDeferredUiE2Peers(next: BindBindDeferredUiE2Peers): void {
  peers = next;
}

/**
 * Bundle export `E2` / internal `Jnr`.
 */
export function bindBindDeferredUiE2() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiE2 peers are not configured");
  }

  return peers.JE(e => peers.Utr(peers.sg(e)).diff);
}
