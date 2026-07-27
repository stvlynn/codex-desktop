// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `IM`) / export `ZY`.

export type BindBindDeferredZYPeers = {
  MM: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindBindDeferredZYPeers | null = null;

/** Wire bindBindDeferredZY peers once companions land. */
export function setBindBindDeferredZYPeers(next: BindBindDeferredZYPeers): void {
  peers = next;
}

/**
 * Bundle export `ZY` / internal `IM`.
 */
export function bindBindDeferredZY() {
  if (peers == null) {
    throw new Error("bindBindDeferredZY peers are not configured");
  }

  return peers.e(() => {
    peers.MM();
  });
}
