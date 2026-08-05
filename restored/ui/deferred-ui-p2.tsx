// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `cD`) / export `p2`.

export type BindBindDeferredUiP2Peers = {
  JE: (...args: unknown[]) => unknown;
  branch: (...args: unknown[]) => unknown;
  trim: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiP2Peers | null = null;

/** Wire bindBindDeferredUiP2 peers once companions land. */
export function setBindBindDeferredUiP2Peers(
  next: BindBindDeferredUiP2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `p2` / internal `cD`.
 */
export function bindBindDeferredUiP2() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiP2 peers are not configured");
  }

  return peers.JE(({ gitInfo: e }) => e?.branch?.trim() || null);
}
