// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `l2r`) / export `Xq`.

export type DeferredAccountXqPeers = {
  GM: (...args: unknown[]) => unknown;
  Ma: (...args: unknown[]) => unknown;
  gXr: (...args: unknown[]) => unknown;
  qM: (...args: unknown[]) => unknown;
  xN: (...args: unknown[]) => unknown;
};

let peers: DeferredAccountXqPeers | null = null;

/** Wire deferredAccountXq peers once companions land. */
export function setDeferredAccountXqPeers(next: DeferredAccountXqPeers): void {
  peers = next;
}

/**
 * Bundle export `Xq` / internal `l2r`.
 */
export function deferredAccountXq() {
  if (peers == null) {
    throw new Error("deferredAccountXq peers are not configured");
  }
  return peers.Ma(
    peers.GM,
    ({ get: e }) => e(peers.qM) && peers.gXr(e(peers.xN)) != null,
  );
}
