// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Nnr`) / export `A2`.

export type BindA2CoShellPeers = {
  JE: (...args: unknown[]) => unknown;
};

let peers: BindA2CoShellPeers | null = null;

/** Wire bindA2CoShell peers once companions land. */
export function setBindA2CoShellPeers(next: BindA2CoShellPeers): void {
  peers = next;
}

/**
 * Bundle export `A2` / internal `Nnr`.
 */
export function bindA2CoShell() {
  if (peers == null) {
    throw new Error("bindA2CoShell peers are not configured");
  }

  return peers.JE(({ latestReasoningEffort: e }) => e);
}
