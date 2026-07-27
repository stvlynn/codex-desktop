// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `YQr`) / export `lY`.

export type UseSearchBranchesQueryPeers = {
  Hf: (...args: unknown[]) => unknown;
  JQr: (...args: unknown[]) => unknown;
  XQr: (...args: unknown[]) => unknown;
  Xt: (...args: unknown[]) => unknown;
  ZQr: (...args: unknown[]) => unknown;
  iN: (...args: unknown[]) => unknown;
};

let peers: UseSearchBranchesQueryPeers | null = null;

/** Wire useSearchBranchesQuery peers once companions land. */
export function setUseSearchBranchesQueryPeers(next: UseSearchBranchesQueryPeers): void {
  peers = next;
}

/**
 * Bundle export `lY` / internal `YQr`.
 */
export function useSearchBranchesQuery(e: unknown, t: unknown, n: unknown) {
  if (peers == null) {
    throw new Error("useSearchBranchesQuery peers are not configured");
  }

  let r = (0, peers.iN.c)(12),
    i;
  r[0] === n
    ? (i = r[1])
    : ((i = n === void 0 ? {} : n), (r[0] = n), (r[1] = i));
  let { enabled: a } = i,
    o = a === void 0 ? !0 : a,
    s;
  r[2] !== t || r[3] !== e
    ? ((s = [`search-branches`, e, t]), (r[2] = t), (r[3] = e), (r[4] = s))
    : (s = r[4]);
  let c = !!e && o,
    l;
  r[5] !== t || r[6] !== e
    ? ((l = (n) => {
        let { pageParam: r } = n;
        return peers.JQr(e ?? ``, t, 20, r);
      }),
      (r[5] = t),
      (r[6] = e),
      (r[7] = l))
    : (l = r[7]);
  let u;
  return (
    r[8] !== s || r[9] !== c || r[10] !== l
      ? ((u = {
          queryKey: s,
          enabled: c,
          initialPageParam: null,
          staleTime: peers.Hf.ONE_MINUTE,
          queryFn: l,
          select: peers.ZQr,
          getNextPageParam: peers.XQr,
        }),
        (r[8] = s),
        (r[9] = c),
        (r[10] = l),
        (r[11] = u))
      : (u = r[11]),
    peers.Xt(u)
  );
}
