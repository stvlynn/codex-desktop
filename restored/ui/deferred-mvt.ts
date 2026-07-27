// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Zt`) / export `mvt`.

export type BindDeferredMvtPeers = {
  At: (...args: unknown[]) => unknown;
  Ze: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindDeferredMvtPeers | null = null;

/** Wire bindDeferredMvt peers once companions land. */
export function setBindDeferredMvtPeers(next: BindDeferredMvtPeers): void {
  peers = next;
}

/**
 * Bundle export `mvt` / internal `Zt`.
 */
export function bindDeferredMvt() {
  if (peers == null) {
    throw new Error("bindDeferredMvt peers are not configured");
  }

  return peers.e(() => {
    peers.Ze(), peers.At();
  });
}
