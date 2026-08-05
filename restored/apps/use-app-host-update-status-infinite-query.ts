// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `$Un`) / export `E5`.

export type UseAppHostUpdateStatusInfiniteQueryPeers = {
  Hf: (...args: unknown[]) => unknown;
  Xt: (...args: unknown[]) => unknown;
  cWn: (...args: unknown[]) => unknown;
  eWn: (...args: unknown[]) => unknown;
  nWn: (...args: unknown[]) => unknown;
  rWn: (...args: unknown[]) => unknown;
  sWn: (...args: unknown[]) => unknown;
};

let peers: UseAppHostUpdateStatusInfiniteQueryPeers | null = null;

/** Wire UseAppHostUpdateStatusInfiniteQuery peers once companions land. */
export function setUseAppHostUpdateStatusInfiniteQueryPeers(
  next: UseAppHostUpdateStatusInfiniteQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `E5` / internal `$Un`.
 */
export function UseAppHostUpdateStatusInfiniteQuery(e: unknown) {
  if (peers == null) {
    throw new Error(
      "UseAppHostUpdateStatusInfiniteQuery peers are not configured",
    );
  }

  let t = (0, peers.sWn.c)(4),
    n;
  t[0] === e
    ? (n = t[1])
    : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { enabled: r } = n,
    i = r === void 0 ? !0 : r,
    a;
  return (
    t[2] === i
      ? (a = t[3])
      : ((a = {
          queryKey: peers.cWn,
          initialPageParam: null,
          queryFn: peers.rWn,
          enabled: i,
          getNextPageParam: peers.nWn,
          retry: !1,
          select: peers.eWn,
          staleTime: peers.Hf.FIVE_MINUTES,
        }),
        (t[2] = i),
        (t[3] = a)),
    peers.Xt(a)
  );
}
