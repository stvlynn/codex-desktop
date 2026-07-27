// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `_N`) / export `dJ`.

export type BindDeferredGitDJPeers = {
  gN: (...args: unknown[]) => unknown;
};

let peers: BindDeferredGitDJPeers | null = null;

/** Wire bindDeferredGitDJ peers once companions land. */
export function setBindDeferredGitDJPeers(next: BindDeferredGitDJPeers): void {
  peers = next;
}

/**
 * Bundle export `dJ` / internal `_N`.
 */
export function bindDeferredGitDJ(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("bindDeferredGitDJ peers are not configured");
  }

  peers.gN(e, e => {
    e[t] = typeof n == `function` ? n(e[t]) : n;
  });
}
