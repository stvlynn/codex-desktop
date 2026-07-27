// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Eac`) / export `Pp`.

export type BindDeferredGitPpPeers = {
  $f: (...args: unknown[]) => unknown;
  Aa: (...args: unknown[]) => unknown;
  Cac: (...args: unknown[]) => unknown;
  HG: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  wac: (...args: unknown[]) => unknown;
  xac: (...args: unknown[]) => unknown;
};

let peers: BindDeferredGitPpPeers | null = null;

/** Wire bindDeferredGitPp peers once companions land. */
export function setBindDeferredGitPpPeers(next: BindDeferredGitPpPeers): void {
  peers = next;
}

/**
 * Bundle export `Pp` / internal `Eac`.
 */
export function bindDeferredGitPp() {
  if (peers == null) {
    throw new Error("bindDeferredGitPp peers are not configured");
  }

  return peers.Aa(peers.Q, ({ account: e, filters: t }) => ({
    gcTime: peers.Hf.TEN_MINUTES,
    getNextPageParam: (e) => (e.hasNextPage ? (e.endCursor ?? void 0) : void 0),
    initialPageParam: peers.wac,
    meta: {
      hostId: e.hostId,
    },
    queryFn: ({ pageParam: n, signal: r }) =>
      peers.HG(
        `gh-pr-search`,
        {
          account: e,
          cursor: n,
          filters: t,
          pageSize: peers.Cac,
        },
        {
          signal: r,
          source: `pull_requests_page`,
        },
      ),
    queryKey: peers.$f(
      `gh-pr-search`,
      {
        account: e,
        cursor: peers.wac,
        filters: t,
        pageSize: peers.Cac,
      },
      peers.xac(e),
    ),
    refetchOnMount: !0,
    refetchOnWindowFocus: !0,
    staleTime: peers.Hf.ONE_MINUTE,
  }));
}
