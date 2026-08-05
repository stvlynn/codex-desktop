// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Pnr`) / export `j2`.

export type BindBindDeferredUiJ2Peers = {
  JE: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiJ2Peers | null = null;

/** Wire bindBindDeferredUiJ2 peers once companions land. */
export function setBindBindDeferredUiJ2Peers(
  next: BindBindDeferredUiJ2Peers,
): void {
  peers = next;
}

/**
 * Bundle export `j2` / internal `Pnr`.
 */
export function bindBindDeferredUiJ2() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiJ2 peers are not configured");
  }

  return peers.JE(({ requests: e }) => e.at(-1) ?? null);
}
