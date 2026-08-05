// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `znr`) / export `Y2`.

export type BindBindDeferredUiY23Peers = {
  JE: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiY23Peers | null = null;

/** Wire bindBindDeferredUiY23 peers once companions land. */
export function setBindBindDeferredUiY23Peers(
  next: BindBindDeferredUiY23Peers,
): void {
  peers = next;
}

/**
 * Bundle export `Y2` / internal `znr`.
 */
export function bindBindDeferredUiY23() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiY23 peers are not configured");
  }

  return peers.JE(({ source: e }) => e ?? null);
}
