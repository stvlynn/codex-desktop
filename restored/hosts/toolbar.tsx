// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `fJr`) / export `lX`.

export type BindBindToolbarPeers = {
  EM: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  kM: (...args: unknown[]) => unknown;
};

let peers: BindBindToolbarPeers | null = null;

/** Wire bindBindToolbar peers once companions land. */
export function setBindBindToolbarPeers(next: BindBindToolbarPeers): void {
  peers = next;
}

/**
 * Bundle export `lX` / internal `fJr`.
 */
export function bindBindToolbar() {
  if (peers == null) {
    throw new Error("bindBindToolbar peers are not configured");
  }

  return peers.e(() => {
    (peers.EM(), peers.kM());
  });
}
