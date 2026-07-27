// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Lko`) / export `ek`.

export type BindBindDeferredUiEkPeers = {
  Pko: (...args: unknown[]) => unknown;
  Pm: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredUiEkPeers | null = null;

/** Wire bindBindDeferredUiEk peers once companions land. */
export function setBindBindDeferredUiEkPeers(next: BindBindDeferredUiEkPeers): void {
  peers = next;
}

/**
 * Bundle export `ek` / internal `Lko`.
 */
export function bindBindDeferredUiEk() {
  if (peers == null) {
    throw new Error("bindBindDeferredUiEk peers are not configured");
  }

  return peers.Pm(peers.Pko, !1);
}
