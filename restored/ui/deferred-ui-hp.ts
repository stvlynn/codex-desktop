// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Noc`) / export `hp`.

export type BindDeferredUiHpPeers = {
  QGa: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiHpPeers | null = null;

/** Wire bindDeferredUiHp peers once companions land. */
export function setBindDeferredUiHpPeers(next: BindDeferredUiHpPeers): void {
  peers = next;
}

/**
 * Bundle export `hp` / internal `Noc`.
 */
export function bindDeferredUiHp() {
  if (peers == null) {
    throw new Error("bindDeferredUiHp peers are not configured");
  }

  return peers.e(() => {
    peers.QGa();
  });
}
