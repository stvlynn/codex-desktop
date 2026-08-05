// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `A6i`) / export `ez`.

export type UseGitRepoLookupQueryPeers = {
  Fo: (...args: unknown[]) => unknown;
  N6i: (...args: unknown[]) => unknown;
  VFi: (...args: unknown[]) => unknown;
  enabled: (...args: unknown[]) => unknown;
  retainRepoWatch: (...args: unknown[]) => unknown;
};

let peers: UseGitRepoLookupQueryPeers | null = null;

/** Wire useGitRepoLookupQuery peers once companions land. */
export function setUseGitRepoLookupQueryPeers(
  next: UseGitRepoLookupQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ez` / internal `A6i`.
 */
export function useGitRepoLookupQuery(
  e: unknown,
  t: unknown,
  n: unknown,
  r: unknown,
) {
  if (peers == null) {
    throw new Error("useGitRepoLookupQuery peers are not configured");
  }

  let i = (0, peers.N6i.c)(8),
    a = r?.enabled ?? !0,
    o;
  i[0] !== e || i[1] !== t
    ? ((o =
        e == null
          ? null
          : {
              cwd: e,
              hostConfig: t,
            }),
      (i[0] = e),
      (i[1] = t),
      (i[2] = o))
    : (o = i[2]);
  let s = r?.retainRepoWatch,
    c;
  return (
    i[3] !== n || i[4] !== a || i[5] !== o || i[6] !== s
      ? ((c = {
          enabled: a,
          operationSource: n,
          lookup: o,
          retainRepoWatch: s,
        }),
        (i[3] = n),
        (i[4] = a),
        (i[5] = o),
        (i[6] = s),
        (i[7] = c))
      : (c = i[7]),
    peers.Fo(peers.VFi, c)
  );
}
