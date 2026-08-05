// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `rT`) / export `k8`.

export type BindK8CoShellPeers = {
  Q: (...args: unknown[]) => unknown;
  wa: (...args: unknown[]) => unknown;
};

let peers: BindK8CoShellPeers | null = null;

/** Wire bindK8CoShell peers once companions land. */
export function setBindK8CoShellPeers(next: BindK8CoShellPeers): void {
  peers = next;
}

/**
 * Bundle export `k8` / internal `rT`.
 */
export function bindK8CoShell() {
  if (peers == null) {
    throw new Error("bindK8CoShell peers are not configured");
  }

  return peers.wa(`ThreadScope`, {
    key: (e) => e.clientThreadId,
    parent: peers.Q,
    retain: {
      max: 20,
    },
  });
}
