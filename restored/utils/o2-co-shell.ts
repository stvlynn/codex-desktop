// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `uD`) / export `O2`.

export type BindO2CoShellPeers = {
  JE: (...args: unknown[]) => unknown;
  YE: (...args: unknown[]) => unknown;
};

let peers: BindO2CoShellPeers | null = null;

/** Wire bindO2CoShell peers once companions land. */
export function setBindO2CoShellPeers(next: BindO2CoShellPeers): void {
  peers = next;
}

/**
 * Bundle export `O2` / internal `uD`.
 */
export function bindO2CoShell() {
  if (peers == null) {
    throw new Error("bindO2CoShell peers are not configured");
  }

  return peers.JE(({ latestCollaborationMode: e }) => e, peers.YE.default);
}
