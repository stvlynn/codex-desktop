// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `t6n`) / export `N3`.

export type UseGitRepoLiveQueryPeers = {
  $T: (...args: unknown[]) => unknown;
  H3n: (...args: unknown[]) => unknown;
  enabled: (...args: unknown[]) => unknown;
  jt: (...args: unknown[]) => unknown;
  liveQuery: (...args: unknown[]) => unknown;
  r6n: (...args: unknown[]) => unknown;
  rE: (...args: unknown[]) => unknown;
  retainRepoWatch: (...args: unknown[]) => unknown;
};

let peers: UseGitRepoLiveQueryPeers | null = null;

/** Wire useGitRepoLiveQuery peers once companions land. */
export function setUseGitRepoLiveQueryPeers(next: UseGitRepoLiveQueryPeers): void {
  peers = next;
}

export type GitRepoLiveQueryHostConfig = Record<string, unknown>;

export type GitRepoLiveQueryOptions = {
  enabled?: boolean;
  retainRepoWatch?: boolean;
  liveQuery?: unknown;
  select?: (data: unknown) => unknown;
  staleTime?: number;
} & Record<string, unknown>;

/**
 * Bundle export `N3` / internal `t6n`.
 */
export function useGitRepoLiveQuery(e: unknown, t: unknown, n: unknown, r: unknown, i: unknown, a: unknown) {
  if (peers == null) {
    throw new Error("useGitRepoLiveQuery peers are not configured");
  }

  let o = (0, peers.r6n.c)(6),
    s = peers.$T(t),
    c;
  o[0] !== e || o[1] !== t
    ? ((c =
        e == null
          ? null
          : {
              cwd: e,
              hostConfig: t,
            }),
      (o[0] = e),
      (o[1] = t),
      (o[2] = c))
    : (c = o[2]);
  let l = a?.enabled !== !1,
    u = a?.retainRepoWatch ?? a?.liveQuery == null,
    d;
  o[3] !== l || o[4] !== u
    ? ((d = {
        enabled: l,
        retainRepoWatch: u,
      }),
      (o[3] = l),
      (o[4] = u),
      (o[5] = d))
    : (d = o[5]);
  let { data: f } = peers.H3n(c, i, d);
  return peers.jt(
    peers.rE(n, f, f ? (typeof r == `function` ? r(f) : r) : null, s, t, a),
  );
}
