// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `SA`) / export `S$`.

export type BindGitOrigins2Peers = {
  $f: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Ho: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  Sl: (...args: unknown[]) => unknown;
  Uf: (...args: unknown[]) => unknown;
  X: (...args: unknown[]) => unknown;
  _Ar: (...args: unknown[]) => unknown;
  ap: (...args: unknown[]) => unknown;
  dirs: (...args: unknown[]) => unknown;
  e: (...args: unknown[]) => unknown;
  ed: (...args: unknown[]) => unknown;
  gAr: (...args: unknown[]) => unknown;
  hostId: (...args: unknown[]) => unknown;
  ka: (...args: unknown[]) => unknown;
  ol: (...args: unknown[]) => unknown;
  rp: (...args: unknown[]) => unknown;
  sl: (...args: unknown[]) => unknown;
  xA: (...args: unknown[]) => unknown;
};

let peers: BindGitOrigins2Peers | null = null;

/** Wire bindGitOrigins2 peers once companions land. */
export function setBindGitOrigins2Peers(next: BindGitOrigins2Peers): void {
  peers = next;
}

/**
 * Bundle export `S$` / internal `SA`.
 */
export function bindGitOrigins2() {
  if (peers == null) {
    throw new Error("bindGitOrigins2 peers are not configured");
  }

  return peers.e(() => {
    (peers.Ho(),
      peers.Sl(),
      peers.ed(),
      peers.Uf(),
      peers.ap(),
      (_Ar = peers.sl({
        dirs: peers.ol(peers.X()).optional(),
        hostId: peers.X().optional(),
      })),
      (xA = peers.ka(
        peers.Q,
        ({ params: e, source: t }, { queryClient: n }) => ({
          enabled: peers.e?.dirs == null || peers.e.dirs.length > 0,
          meta: {
            gitOrigins: {
              dirs: peers.e?.dirs,
              hostId: peers.e?.hostId,
            },
          },
          placeholderData: () => peers.gAr(n, peers.e),
          queryFn: () =>
            peers.rp(`git-origins`, {
              params: peers.e,
              source: t,
            }),
          queryKey: peers.$f(`git-origins`, peers.e),
          staleTime: peers.Hf.FIVE_SECONDS,
        }),
      )));
  });
}
