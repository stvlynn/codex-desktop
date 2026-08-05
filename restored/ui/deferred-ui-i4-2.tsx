// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `xnr`) / export `i4`.

export type BindBindDeferredUiI4Peers = {
  JE: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiI4Peers | null = null;

/** Wire bindBindDeferredUiI4 peers once companions land. */
export function setBindBindDeferredUiI4Peers(
  next: BindBindDeferredUiI4Peers,
): void {
  peers = next;
}

/**
 * Bundle export `i4` / internal `xnr`.
 */
export function bindBindDeferredUiI4() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiI4 peers are not configured");
  }

  return peers.JE(({ updatedAt: e }) => e);
}
