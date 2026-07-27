// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `L1s`) / export `Kh`.

export type BindBindWslRemoteConnectionsPeers = {
  Au: (...args: unknown[]) => unknown;
  F1s: (...args: unknown[]) => unknown;
  I1s: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
};

let peers: BindBindWslRemoteConnectionsPeers | null = null;

/** Wire bindBindWslRemoteConnections peers once companions land. */
export function setBindBindWslRemoteConnectionsPeers(next: BindBindWslRemoteConnectionsPeers): void {
  peers = next;
}

/**
 * Bundle export `Kh` / internal `L1s`.
 */
export function bindBindWslRemoteConnections() {
  if (peers == null) {
    throw new Error("bindBindWslRemoteConnections peers are not configured");
  }

  return peers.e(() => {
    peers.Au(), F1s = `wsl_remote_connections`, I1s = `3855399757`;
  });
}
