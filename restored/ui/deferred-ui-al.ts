// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Vca`) / export `AL`.

export type BindDeferredUiALPeers = {
  Bca: (...args: unknown[]) => unknown;
  J: (...args: unknown[]) => unknown;
  Lca: (...args: unknown[]) => unknown;
  Pca: (...args: unknown[]) => unknown;
  Rca: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  zca: (...args: unknown[]) => unknown;
};

let peers: BindDeferredUiALPeers | null = null;

/** Wire bindDeferredUiAL peers once companions land. */
export function setBindDeferredUiALPeers(next: BindDeferredUiALPeers): void {
  peers = next;
}

/**
 * Bundle export `AL` / internal `Vca`.
 */
export function bindDeferredUiAL() {
  if (peers == null) {
    throw new Error("bindDeferredUiAL peers are not configured");
  }

  return peers.e(() => {
    (peers.Pca(),
      (Lca = peers.r(peers.o(), 1)),
      (Rca = peers.J()),
      (zca = (0, peers.Lca.createContext)(void 0)),
      (Bca = 0));
  });
}
