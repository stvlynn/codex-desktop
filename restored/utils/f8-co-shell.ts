// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `tYn`) / export `F8`.

export type F8CoShellPeers = {
  Ta: (...args: unknown[]) => unknown;
  rT: (...args: unknown[]) => unknown;
};

let peers: F8CoShellPeers | null = null;

/** Wire f8CoShell peers once companions land. */
export function setF8CoShellPeers(next: F8CoShellPeers): void {
  peers = next;
}

/**
 * Bundle export `F8` / internal `tYn`.
 */
export function f8CoShell() {
  if (peers == null) {
    throw new Error("f8CoShell peers are not configured");
  }

  return peers.Ta(peers.rT, null);
}
