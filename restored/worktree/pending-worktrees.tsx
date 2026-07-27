// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `ySr`) / export `H1`.

export type BindBindPendingWorktreesPeers = {
  Ma: (...args: unknown[]) => unknown;
  hT: (...args: unknown[]) => unknown;
  iT: (...args: unknown[]) => unknown;
  phase: (...args: unknown[]) => unknown;
  vSr: (...args: unknown[]) => unknown;
};

let peers: BindBindPendingWorktreesPeers | null = null;

/** Wire bindBindPendingWorktrees peers once companions land. */
export function setBindBindPendingWorktreesPeers(next: BindBindPendingWorktreesPeers): void {
  peers = next;
}

/**
 * Bundle export `H1` / internal `ySr`.
 */
export function bindBindPendingWorktrees() {
  if (peers == null) {
    throw new Error("bindBindPendingWorktrees peers are not configured");
  }

  return peers.Ma(peers.hT, ({
    get: e,
    scope: t
  }) => {
    if (t.value.routeKind !== `client-local-thread`) return `ready`;
    let {
      clientThreadId: n
    } = t.value;
    return e(peers.iT, n) == null ? e(peers.vSr, n)?.phase === `failed` ? `failed` : `provisioning` : `ready`;
  });
}
