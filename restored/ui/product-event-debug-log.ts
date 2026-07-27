// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `G9l`) / export `_r`.

export type ProductEventDebugLogPeers = {
  B9l: (...args: unknown[]) => unknown;
  H7: (...args: unknown[]) => unknown;
  H9l: (...args: unknown[]) => unknown;
  U9l: (...args: unknown[]) => unknown;
  V9l: (...args: unknown[]) => unknown;
  W9l: (...args: unknown[]) => unknown;
  crypto: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  o: (...args: unknown[]) => unknown;
  r: (...args: unknown[]) => unknown;
  z9l: (...args: unknown[]) => unknown;
};

let peers: ProductEventDebugLogPeers | null = null;

/** Wire productEventDebugLog peers once companions land. */
export function setProductEventDebugLogPeers(next: ProductEventDebugLogPeers): void {
  peers = next;
}

/**
 * Bundle export `_r` / internal `G9l`.
 */
export function productEventDebugLog() {
  if (peers == null) {
    throw new Error("productEventDebugLog peers are not configured");
  }

  return peers.e(() => {
    z9l = peers.r(peers.o(), 1), B9l = 200, V9l = typeof peers.crypto < `u` && typeof peers.crypto.randomUUID == `function` ? peers.crypto.randomUUID() : `product-event-debug-log`, H9l = new Set(), H7 = new Map(), U9l = [], W9l = 0;
  });
}
