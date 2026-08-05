// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `vMt`) / export `zat`.

export type BindDeferredZatPeers = {
  Fjt: (...args: unknown[]) => unknown;
  Mjt: (...args: unknown[]) => unknown;
  Tjt: (...args: unknown[]) => unknown;
  _Mt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  gMt: (...args: unknown[]) => unknown;
};

let peers: BindDeferredZatPeers | null = null;

/** Wire bindDeferredZat peers once companions land. */
export function setBindDeferredZatPeers(next: BindDeferredZatPeers): void {
  peers = next;
}

/**
 * Bundle export `zat` / internal `vMt`.
 */
export function bindDeferredZat() {
  if (peers == null) {
    throw new Error("bindDeferredZat peers are not configured");
  }

  return peers.e(() => {
    (peers.Tjt(), peers.Fjt(), (_Mt = peers.gMt(peers.Mjt)));
  });
}
