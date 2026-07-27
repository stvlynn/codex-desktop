// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `dD`) / export `M2`.

export type BindM2CoShellPeers = {
  JE: (...args: unknown[]) => unknown;
  YE: (...args: unknown[]) => unknown;
};

let peers: BindM2CoShellPeers | null = null;

/** Wire bindM2CoShell peers once companions land. */
export function setBindM2CoShellPeers(next: BindM2CoShellPeers): void {
  peers = next;
}

/**
 * Bundle export `M2` / internal `dD`.
 */
export function bindM2CoShell() {
  if (peers == null) {
    throw new Error("bindM2CoShell peers are not configured");
  }

  return peers.JE(({ latestThreadSettings: e }) => e ?? null, peers.YE.default);
}
