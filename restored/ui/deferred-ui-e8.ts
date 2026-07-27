// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `uT`) / export `E8`.

export type BindDeferredUiE8Peers = {
  lT: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiE8Peers | null = null;

/** Wire bindDeferredUiE8 peers once companions land. */
export function setBindDeferredUiE8Peers(next: BindDeferredUiE8Peers): void {
  peers = next;
}

/**
 * Bundle export `E8` / internal `uT`.
 */
export function bindDeferredUiE8() {
  if (peers == null) {
    throw new Error("bindDeferredUiE8 peers are not configured");
  }

  return peers.lT;
}
