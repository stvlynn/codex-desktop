// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `P3r`) / export `ZK`.

export type ClosedConnectionStatePeers = {
  A3r: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  M3r: (...args: unknown[]) => unknown;
  N3r: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Ta: (...args: unknown[]) => unknown;
  c: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  j3r: (...args: unknown[]) => unknown;
  zN: (...args: unknown[]) => unknown;
};

let peers: ClosedConnectionStatePeers | null = null;

/** Wire closedConnectionState peers once companions land. */
export function setClosedConnectionStatePeers(next: ClosedConnectionStatePeers): void {
  peers = next;
}

/**
 * Bundle export `ZK` / internal `P3r`.
 */
export function closedConnectionState() {
  if (peers == null) {
    throw new Error("closedConnectionState peers are not configured");
  }

  return peers.e(() => {
    A3r = peers.c(), peers.Ho(), peers.ed(), j3r = {
      kind: `closed`
    }, zN = peers.Ta(peers.Q, peers.j3r), M3r = 0, N3r = new Map();
  });
}
