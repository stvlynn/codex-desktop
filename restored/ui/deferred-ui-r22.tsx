// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `lrr`) / export `R2`.

export type BindBindDeferredUiR22Peers = {
  JE: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiR22Peers | null = null;

/** Wire bindBindDeferredUiR22 peers once companions land. */
export function setBindBindDeferredUiR22Peers(next: BindBindDeferredUiR22Peers): void {
  peers = next;
}

/**
 * Bundle export `R2` / internal `lrr`.
 */
export function bindBindDeferredUiR22() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiR22 peers are not configured");
  }

  return peers.JE(({
    projectlessOutputDirectory: e
  }) => e ?? null);
}
