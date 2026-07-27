// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `xA`) / export `x$`.

export type BindGitOrigins3Peers = {
  $f: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  dirs: (...args: unknown[]) => unknown;
  gAr: (...args: unknown[]) => unknown;
  hostId: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
  rp: (...args: unknown[]) => unknown;
};

let peers: BindGitOrigins3Peers | null = null;

/** Wire bindGitOrigins3 peers once companions land. */
export function setBindGitOrigins3Peers(next: BindGitOrigins3Peers): void {
  peers = next;
}

/**
 * Bundle export `x$` / internal `xA`.
 */
export function bindGitOrigins3() {
  if (peers == null) {
    throw new Error("bindGitOrigins3 peers are not configured");
  }

  return peers.ka(peers.Q, ({ params: e, source: t }, { queryClient: n }) => ({
    enabled: e?.dirs == null || e.dirs.length > 0,
    meta: {
      gitOrigins: {
        dirs: e?.dirs,
        hostId: e?.hostId,
      },
    },
    placeholderData: () => peers.gAr(n, e),
    queryFn: () =>
      peers.rp(`git-origins`, {
        params: e,
        source: t,
      }),
    queryKey: peers.$f(`git-origins`, e),
    staleTime: peers.Hf.FIVE_SECONDS,
  }));
}
