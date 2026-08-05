// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Pti`) / export `lG`.

export type DeferredUilGPeers = {
  TN: (...args: unknown[]) => unknown;
  _ti: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  jti: (...args: unknown[]) => unknown;
  kXr: (...args: unknown[]) => unknown;
};

let peers: DeferredUilGPeers | null = null;

/** Wire deferredUilG peers once companions land. */
export function setDeferredUilGPeers(next: DeferredUilGPeers): void {
  peers = next;
}

/**
 * Bundle export `lG` / internal `Pti`.
 */
export function deferredUilG() {
  if (peers == null) {
    throw new Error("deferredUilG peers are not configured");
  }

  return peers.e(() => {
    (peers.jti(), peers.kXr(), peers.TN(), peers._ti());
  });
}
