// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `rE`) / export `k3`.

export type CreateGitLiveQueryOptionsPeers = {
  $3n: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  XT: (...args: unknown[]) => unknown;
  q3n: (...args: unknown[]) => unknown;
};

let peers: CreateGitLiveQueryOptionsPeers | null = null;

/** Wire createGitLiveQueryOptions peers once companions land. */
export function setCreateGitLiveQueryOptionsPeers(next: CreateGitLiveQueryOptionsPeers): void {
  peers = next;
}

/**
 * Bundle export `k3` / internal `rE`.
 */
export function createGitLiveQueryOptions(e: unknown, t: unknown, n: unknown, r: unknown, i: unknown, a: unknown) {
  if (peers == null) {
    throw new Error("createGitLiveQueryOptions peers are not configured");
  }

  let { liveQuery: o, retainRepoWatch: s, ...c } = a ?? {},
    l =
      n == null || o == null || s === !1
        ? void 0
        : typeof o == `function`
          ? o(n)
          : o,
    u = c.staleTime ?? peers.Hf.INFINITE;
  return {
    queryKey:
      t && n
        ? peers.q3n({
            metadata: t,
            method: e,
            params: n,
            hostKey: r,
          })
        : [`git`, `disabled`, e],
    queryFn: ({ signal: r }) =>
      !t || !n
        ? Promise.reject(Error(`Missing git metadata`))
        : peers.XT(`git`).request({
            method: e,
            params: peers.$3n(n, i),
            signal: r,
          }),
    staleTime: u,
    gcTime: 1800 * 1e3,
    ...c,
    meta:
      l == null
        ? c.meta
        : {
            ...c.meta,
            gitLiveQuery: {
              hostConfig: i,
              query: l,
            },
          },
    networkMode: `always`,
    refetchOnWindowFocus: !1,
    enabled: (e) =>
      t == null || n == null
        ? !1
        : typeof c.enabled == `function`
          ? c.enabled(e)
          : (c.enabled ?? !0),
  };
}
