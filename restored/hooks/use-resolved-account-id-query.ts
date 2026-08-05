// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Igs`) / export `cx`.

export type UseResolvedAccountIdQueryPeers = {
  FZ: (...args: unknown[]) => unknown;
  Hf: (...args: unknown[]) => unknown;
  Qgs: (...args: unknown[]) => unknown;
  Rit: (...args: unknown[]) => unknown;
  Uh: (...args: unknown[]) => unknown;
  jt: (...args: unknown[]) => unknown;
  message: (...args: unknown[]) => unknown;
  w_s: (...args: unknown[]) => unknown;
  y_s: (...args: unknown[]) => unknown;
};

let peers: UseResolvedAccountIdQueryPeers | null = null;

/** Wire useResolvedAccountIdQuery peers once companions land. */
export function setUseResolvedAccountIdQueryPeers(
  next: UseResolvedAccountIdQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `cx` / internal `Igs`.
 */
export function useResolvedAccountIdQuery(e: unknown) {
  if (peers == null) {
    throw new Error("useResolvedAccountIdQuery peers are not configured");
  }

  let t = (0, peers.FZ.c)(10),
    { accountId: n, enabled: r } = e,
    i = r && n == null,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = {
        enabled: i,
      }),
      (t[0] = i),
      (t[1] = a));
  let { accountId: o, isLoading: s } = peers.Qgs(a),
    c = n ?? o,
    l = n == null && s,
    u;
  t[2] === c ? (u = t[3]) : ((u = [...peers.y_s, c]), (t[2] = c), (t[3] = u));
  let d = r && !l && c != null,
    f;
  t[4] === c
    ? (f = t[5])
    : ((f = async () => {
        if (c == null) return null;
        try {
          return await peers.Uh.safeGet(
            `/accounts/{account_id}/spend-controls/current-user/monthly-usage`,
            {
              parameters: {
                path: {
                  account_id: c,
                },
              },
              additionalHeaders: {
                "Cache-Control": `no-store`,
                Pragma: `no-cache`,
              },
            },
          );
        } catch (e) {
          let t = e;
          if (t instanceof Error && peers.Rit(t)?.message === peers.w_s)
            return null;
          throw t;
        }
      }),
      (t[4] = c),
      (t[5] = f));
  let p;
  return (
    t[6] !== u || t[7] !== d || t[8] !== f
      ? ((p = {
          queryKey: u,
          enabled: d,
          staleTime: 0,
          gcTime: 0,
          refetchOnMount: `always`,
          refetchInterval: peers.Hf.ONE_MINUTE,
          refetchIntervalInBackground: !1,
          refetchOnWindowFocus: !0,
          retry: !1,
          queryFn: f,
        }),
        (t[6] = u),
        (t[7] = d),
        (t[8] = f),
        (t[9] = p))
      : (p = t[9]),
    peers.jt(p)
  );
}
