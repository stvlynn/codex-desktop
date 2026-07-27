// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Tac`) / export `Op`.

export type BindDeferredGitOpPeers = {
  $f: (...args: unknown[]) => unknown;
  HG: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
};

let peers: BindDeferredGitOpPeers | null = null;

/** Wire bindDeferredGitOp peers once companions land. */
export function setBindDeferredGitOpPeers(next: BindDeferredGitOpPeers): void {
  peers = next;
}

/**
 * Bundle export `Op` / internal `Tac`.
 */
export function bindDeferredGitOp() {
  if (peers == null) {
    throw new Error("bindDeferredGitOp peers are not configured");
  }

  return peers.ka(
    peers.Q,
    ({ hostId: e, hostname: t, source: n = `pull_requests_page` }) => ({
      queryFn: ({ signal: r }) =>
        peers.HG(
          `gh-current-user`,
          {
            hostId: e,
            hostname: t,
          },
          {
            signal: r,
            source: n,
          },
        ),
      queryKey: peers.$f(`gh-current-user`, {
        hostId: e,
        hostname: t,
      }),
      staleTime: peers.Hf.ONE_MINUTE,
    }),
  );
}
