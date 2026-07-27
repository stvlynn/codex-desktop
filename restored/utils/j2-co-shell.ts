// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Pnr`) / export `j2`.

export type BindJ2CoShellPeers = {
  JE: (...args: unknown[]) => unknown;
};

let peers: BindJ2CoShellPeers | null = null;

/** Wire bindJ2CoShell peers once companions land. */
export function setBindJ2CoShellPeers(next: BindJ2CoShellPeers): void {
  peers = next;
}

/**
 * Bundle export `j2` / internal `Pnr`.
 */
export function bindJ2CoShell() {
  if (peers == null) {
    throw new Error("bindJ2CoShell peers are not configured");
  }

  return peers.JE(({
    requests: e
  }) => e.at(-1) ?? null);
}
