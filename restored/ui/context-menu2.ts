// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `p7e`) / export `iut`.

export type ContextMenu2Peers = {
  z5e: (...args: unknown[]) => unknown;
};

let peers: ContextMenu2Peers | null = null;

/** Wire contextMenu2 peers once companions land. */
export function setContextMenu2Peers(next: ContextMenu2Peers): void {
  peers = next;
}

/**
 * Bundle export `iut` / internal `p7e`.
 */
export function contextMenu2() {
  if (peers == null) {
    throw new Error("contextMenu2 peers are not configured");
  }

  return peers.z5e;
}
