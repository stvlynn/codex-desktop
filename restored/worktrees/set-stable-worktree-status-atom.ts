// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `QFo`) / export `xO`.

export type XOPeers = {
  eIo: (...args: unknown[]) => unknown;
};
let peers: XOPeers | null = null;

/** Wire xO peers once companions land. */
export function setXOPeers(next: XOPeers): void {
  peers = next;
}

/**
 * Bundle export `xO` / internal `QFo`.
 */
export function xO(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("xO peers are not configured");
  }
  e.set(peers.eIo, t);
}
