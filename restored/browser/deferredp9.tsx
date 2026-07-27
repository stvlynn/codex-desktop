// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ix`) / export `p9`.

export type BindBindDeferredp9Peers = {
  Pan: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  _l: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  fl: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredp9Peers | null = null;

/** Wire bindBindDeferredp9 peers once companions land. */
export function setBindBindDeferredp9Peers(next: BindBindDeferredp9Peers): void {
  peers = next;
}

/**
 * Bundle export `p9` / internal `Ix`.
 */
export function bindBindDeferredp9() {
  if (peers == null) {
    throw new Error("bindBindDeferredp9 peers are not configured");
  }

  return peers.e(() => {
    peers.Sl(), Pan = peers.fl(peers.X(), peers._l());
  });
}
