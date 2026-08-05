// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `pPt`) / export `lat`.

export type DeferredLatPeers = {
  dv: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  lv: (...args: unknown[]) => unknown;
  pv: (...args: unknown[]) => unknown;
};

let peers: DeferredLatPeers | null = null;

/** Wire deferredLat peers once companions land. */
export function setDeferredLatPeers(next: DeferredLatPeers): void {
  peers = next;
}

/**
 * Bundle export `lat` / internal `pPt`.
 */
export function deferredLat() {
  if (peers == null) {
    throw new Error("deferredLat peers are not configured");
  }

  return peers.e(() => {
    (peers.pv(), peers.dv(), peers.lv());
  });
}
