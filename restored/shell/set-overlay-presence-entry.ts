// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Gvu`) / export `rt`.

export type RtPeers = {
  Jvu: (...args: unknown[]) => unknown;
  P9: (...args: unknown[]) => unknown;
};
let peers: RtPeers | null = null;

/** Wire rt peers once companions land. */
export function setRtPeers(next: RtPeers): void {
  peers = next;
}

/**
 * Bundle export `rt` / internal `Gvu`.
 */
export function rt(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("rt peers are not configured");
  }
  e.set(peers.P9, peers.Jvu(e.get(peers.P9), t, n));
}
