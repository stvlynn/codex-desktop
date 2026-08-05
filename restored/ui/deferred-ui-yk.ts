// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `wEo`) / export `yk`.

export type DeferredUiYkPeers = {
  AQn: (...args: unknown[]) => unknown;
  Gf: (...args: unknown[]) => unknown;
  Kb: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: DeferredUiYkPeers | null = null;

/** Wire deferredUiYk peers once companions land. */
export function setDeferredUiYkPeers(next: DeferredUiYkPeers): void {
  peers = next;
}

/**
 * Bundle export `yk` / internal `wEo`.
 */
export function deferredUiYk() {
  if (peers == null) {
    throw new Error("deferredUiYk peers are not configured");
  }

  return peers.e(() => {
    (peers.AQn(), peers.Kb(), peers.Gf());
  });
}
