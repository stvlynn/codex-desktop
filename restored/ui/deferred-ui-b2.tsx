// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Lnr`) / export `b2`.

export type BindBindDeferredUiB2Peers = {
  Dot: (...args: unknown[]) => unknown;
  JE: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiB2Peers | null = null;

/** Wire bindBindDeferredUiB2 peers once companions land. */
export function setBindBindDeferredUiB2Peers(
  next: BindBindDeferredUiB2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `b2` / internal `Lnr`.
 */
export function bindBindDeferredUiB2() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiB2 peers are not configured");
  }

  return peers.JE(peers.Dot);
}
