// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `DHl`) / export `no`.

export type BindDeferredGitNoPeers = {
  EHl: (...args: unknown[]) => unknown;
  LE: (...args: unknown[]) => unknown;
  Oa: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  xHl: (...args: unknown[]) => unknown;
};

let peers: BindDeferredGitNoPeers | null = null;

/** Wire bindDeferredGitNo peers once companions land. */
export function setBindDeferredGitNoPeers(next: BindDeferredGitNoPeers): void {
  peers = next;
}

/**
 * Bundle export `no` / internal `DHl`.
 */
export function bindDeferredGitNo() {
  if (peers == null) {
    throw new Error("bindDeferredGitNo peers are not configured");
  }

  return peers.Oa(peers.Q, (e, { get: t }) =>
    !t(peers.EHl) || e == null ? null : peers.xHl(e, t(peers.LE)),
  );
}
