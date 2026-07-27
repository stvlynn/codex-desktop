// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ger`) / export `y4`.

export type Statsig2Peers = {
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  mer: (...args: unknown[]) => unknown;
};

let peers: Statsig2Peers | null = null;

/** Wire statsig2 peers once companions land. */
export function setStatsig2Peers(next: Statsig2Peers): void {
  peers = next;
}

/**
 * Bundle export `y4` / internal `ger`.
 */
export function statsig2() {
  if (peers == null) {
    throw new Error("statsig2 peers are not configured");
  }
  return peers.Ta(peers.Q, null, {
    isEqual: peers.mer.default
  });
}
