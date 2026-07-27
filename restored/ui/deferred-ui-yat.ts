// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Tjt`) / export `Yat`.

export type DeferredUiYatPeers = {
  EAt: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ojt: (...args: unknown[]) => unknown;
  rjt: (...args: unknown[]) => unknown;
  wjt: (...args: unknown[]) => unknown;
};

let peers: DeferredUiYatPeers | null = null;

/** Wire deferredUiYat peers once companions land. */
export function setDeferredUiYatPeers(next: DeferredUiYatPeers): void {
  peers = next;
}

/**
 * Bundle export `Yat` / internal `Tjt`.
 */
export function deferredUiYat() {
  if (peers == null) {
    throw new Error("deferredUiYat peers are not configured");
  }

  return peers.e(() => {
    peers.rjt(), peers.wjt(), peers.EAt(), peers.ojt();
  });
}
