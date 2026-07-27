// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Rko`) / export `tk`.

export type BindDeferredtkPeers = {
  Fko: (...args: unknown[]) => unknown;
  Im: (...args: unknown[]) => unknown;
  Lko: (...args: unknown[]) => unknown;
  NEo: (...args: unknown[]) => unknown;
  Pko: (...args: unknown[]) => unknown;
  Pm: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindDeferredtkPeers | null = null;

/** Wire bindDeferredtk peers once companions land. */
export function setBindDeferredtkPeers(next: BindDeferredtkPeers): void {
  peers = next;
}

/**
 * Bundle export `tk` / internal `Rko`.
 */
export function bindDeferredtk() {
  if (peers == null) {
    throw new Error("bindDeferredtk peers are not configured");
  }

  return peers.e(() => {
    peers.NEo(), peers.Im(), peers.Fko(), Lko = peers.Pm(peers.Pko, !1);
  });
}
