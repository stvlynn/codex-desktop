// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EM — real body via extractFn(internal `op`) / export `Yut`.

export type ReadLoginRouteQuerySnapshotPeers = {
  readSnapshot: (...args: unknown[]) => unknown;
};

let peers: ReadLoginRouteQuerySnapshotPeers | null = null;

/** Wire readLoginRouteQuerySnapshot peers once companions land. */
export function setReadLoginRouteQuerySnapshotPeers(
  next: ReadLoginRouteQuerySnapshotPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Yut` / internal `op`.
 * Read a login-route query snapshot via peers (bundle op).
 */
export function readLoginRouteQuerySnapshot(...args: unknown[]): unknown {
  if (peers == null) {
    throw new Error("ReadLoginRouteQuerySnapshot peers are not configured");
  }
  return peers.readSnapshot(...args);
}
