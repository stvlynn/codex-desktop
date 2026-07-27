// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `jpo`) / export `xj`.

export type BindBinddeferredGitXj3Peers = {
  $f: (...args: unknown[]) => unknown;
  HG: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  gp: (...args: unknown[]) => unknown;
  isInstalled: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
};

let peers: BindBinddeferredGitXj3Peers | null = null;

/** Wire bindBinddeferredGitXj3 peers once companions land. */
export function setBindBinddeferredGitXj3Peers(next: BindBinddeferredGitXj3Peers): void {
  peers = next;
}

/**
 * Bundle export `xj` / internal `jpo`.
 */
export function bindBinddeferredGitXj3() {
  if (peers == null) {
    throw new Error("bindBinddeferredGitXj3 peers are not configured");
  }

  return peers.ka(peers.Q, (e) => ({
    gcTime: peers.Hf.INFINITE,
    meta: {
      hostId: e.hostId ?? `local`,
    },
    queryFn: async ({ signal: t }) =>
      peers.gp.github == null
        ? {
            isInstalled: !1,
            isAuthenticated: !1,
          }
        : peers.HG(`gh-cli-status`, e, {
            signal: t,
            source: `git_direct_call`,
          }),
    queryKey: peers.$f(`gh-cli-status`, e),
    staleTime: (e) =>
      e.state.data?.isInstalled === !0 && e.state.data.isAuthenticated === !0
        ? peers.Hf.INFINITE
        : peers.Hf.FIVE_SECONDS,
  }));
}
