// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Cnr`) / export `m2`.

export type BindBindDeferredUiM2Peers = {
  JE: (...args: unknown[]) => unknown;
  originUrl: (...args: unknown[]) => unknown;
  trim: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiM2Peers | null = null;

/** Wire bindBindDeferredUiM2 peers once companions land. */
export function setBindBindDeferredUiM2Peers(next: BindBindDeferredUiM2Peers): void {
  peers = next;
}

/**
 * Bundle export `m2` / internal `Cnr`.
 */
export function bindBindDeferredUiM2() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiM2 peers are not configured");
  }

  return peers.JE(({
    gitInfo: e
  }) => e?.originUrl?.trim() || null);
}
