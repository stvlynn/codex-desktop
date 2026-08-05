// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ha`) / export `Q_t`.

export type BindDeferredQtPeers = {
  Ai: (...args: unknown[]) => unknown;
  Ca: (...args: unknown[]) => unknown;
  Hn: (...args: unknown[]) => unknown;
  Ni: (...args: unknown[]) => unknown;
  Oi: (...args: unknown[]) => unknown;
  Qn: (...args: unknown[]) => unknown;
  Qr: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ui: (...args: unknown[]) => unknown;
};

let peers: BindDeferredQtPeers | null = null;

/** Wire bindDeferredQt peers once companions land. */
export function setBindDeferredQtPeers(next: BindDeferredQtPeers): void {
  peers = next;
}

/**
 * Bundle export `Q_t` / internal `Ha`.
 */
export function bindDeferredQt() {
  if (peers == null) {
    throw new Error("bindDeferredQt peers are not configured");
  }

  return peers.e(() => {
    (peers.Qn(),
      peers.Hn(),
      peers.ui(),
      peers.Oi(),
      peers.Qr(),
      peers.Ca(),
      peers.Ai(),
      peers.Ni());
  });
}
