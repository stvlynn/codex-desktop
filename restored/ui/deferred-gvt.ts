// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Yt`) / export `gvt`.

export type BindDeferredGvtPeers = {
  Jt: (...args: unknown[]) => unknown;
  Ze: (...args: unknown[]) => unknown;
  at: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
};

let peers: BindDeferredGvtPeers | null = null;

/** Wire bindDeferredGvt peers once companions land. */
export function setBindDeferredGvtPeers(next: BindDeferredGvtPeers): void {
  peers = next;
}

/**
 * Bundle export `gvt` / internal `Yt`.
 */
export function bindDeferredGvt() {
  if (peers == null) {
    throw new Error("bindDeferredGvt peers are not configured");
  }

  return peers.e(() => {
    ((Jt = peers.r(peers.o(), 1)), peers.Ze(), peers.at());
  });
}
