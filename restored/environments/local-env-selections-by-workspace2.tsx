// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `vK`) / export `fA`.

export type BindBindLocalEnvSelectionsByWorkspace2Peers = {
  kp: (...args: unknown[]) => unknown;
};

let peers: BindBindLocalEnvSelectionsByWorkspace2Peers | null = null;

/** Wire bindBindLocalEnvSelectionsByWorkspace2 peers once companions land. */
export function setBindBindLocalEnvSelectionsByWorkspace2Peers(next: BindBindLocalEnvSelectionsByWorkspace2Peers): void {
  peers = next;
}

/**
 * Bundle export `fA` / internal `vK`.
 */
export function bindBindLocalEnvSelectionsByWorkspace2() {
  if (peers == null) {
    throw new Error("bindBindLocalEnvSelectionsByWorkspace2 peers are not configured");
  }

  return peers.kp(`local-env-selections-by-workspace`, {});
}
