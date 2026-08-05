// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `TNt`) / export `gat`.

export type DeferredGatPeers = {
  e: (...args: unknown[]) => unknown;
  lv: (...args: unknown[]) => unknown;
  ov: (...args: unknown[]) => unknown;
  xNt: (...args: unknown[]) => unknown;
};

let peers: DeferredGatPeers | null = null;

/** Wire deferredGat peers once companions land. */
export function setDeferredGatPeers(next: DeferredGatPeers): void {
  peers = next;
}

/**
 * Bundle export `gat` / internal `TNt`.
 */
export function deferredGat() {
  if (peers == null) {
    throw new Error("deferredGat peers are not configured");
  }

  return peers.e(() => {
    (peers.ov(), peers.lv(), peers.xNt());
  });
}
