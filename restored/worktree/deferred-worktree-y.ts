// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `GPs`) / export `Y_`.

export type BindDeferredWorktreeYPeers = {
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  WPs: (...args: unknown[]) => unknown;
};

let peers: BindDeferredWorktreeYPeers | null = null;

/** Wire bindDeferredWorktreeY peers once companions land. */
export function setBindDeferredWorktreeYPeers(next: BindDeferredWorktreeYPeers): void {
  peers = next;
}

/**
 * Bundle export `Y_` / internal `GPs`.
 */
export function bindDeferredWorktreeY() {
  if (peers == null) {
    throw new Error("bindDeferredWorktreeY peers are not configured");
  }

  return peers.Oa(peers.Q, (e, {
    get: t
  }) => {
    let n = t(peers.WPs, e);
    return n.isError ? `unavailable` : n.data == null ? `loading` : n.data.kind;
  });
}
