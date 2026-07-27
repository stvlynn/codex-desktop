// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `hx`) / export `O9`.

export type InProgress2Peers = {
  dg: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: InProgress2Peers | null = null;

/** Wire inProgress2 peers once companions land. */
export function setInProgress2Peers(next: InProgress2Peers): void {
  peers = next;
}

/**
 * Bundle export `O9` / internal `hx`.
 */
export function inProgress2() {
  if (peers == null) {
    throw new Error("inProgress2 peers are not configured");
  }

  return peers.e(() => {
    peers.dg();
  });
}
