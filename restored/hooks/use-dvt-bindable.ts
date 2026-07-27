// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Tt`) / export `Dvt`.

export type UseDvtBindablePeers = {
  Ct: (...args: unknown[]) => unknown;
  Et: (...args: unknown[]) => unknown;
  St: (...args: unknown[]) => unknown;
  We: (...args: unknown[]) => unknown;
  _t: (...args: unknown[]) => unknown;
  bt: (...args: unknown[]) => unknown;
  ct: (...args: unknown[]) => unknown;
  error: (...args: unknown[]) => unknown;
  g: (...args: unknown[]) => unknown;
  gt: (...args: unknown[]) => unknown;
  ne: (...args: unknown[]) => unknown;
  pt: (...args: unknown[]) => unknown;
  rt: (...args: unknown[]) => unknown;
  vt: (...args: unknown[]) => unknown;
  we: (...args: unknown[]) => unknown;
  xt: (...args: unknown[]) => unknown;
};
let peers: UseDvtBindablePeers | null = null;

/** Wire useDvtBindable peers once companions land. */
export function setUseDvtBindablePeers(next: UseDvtBindablePeers): void {
  peers = next;
}

/**
 * Bundle export `Dvt` / internal `Tt`.
 */
export function useDvtBindable(
  { queries, ...rest }: Record<string, unknown>,
  n: unknown,
) {
  if (peers == null) {
    throw new Error("useDvtBindable peers are not configured");
  }
  let r = peers.rt(n),
    i = peers.ct(),
    a = peers.pt(),
    o = peers.Et.useMemo(() => {
      return queries.map((item) => {
        let t = r.defaultQueryOptions(item);
        return ((t._optimisticResults = i ? "isRestoring" : "optimistic"), t);
      });
    }, [queries, r, i]);
  o.forEach((item) => {
    peers.bt(item);
    peers.gt(item, a);
  });
  peers._t(a);
  let [s] = peers.Et.useState(() => {
      return new peers.We(r, o, rest);
    }),
    [c, l, u] = s.getOptimisticResult(o, rest.combine),
    d = !i && rest.subscribed !== false;
  peers.Et.useSyncExternalStore(
    peers.Et.useCallback(
      (e) => {
        return d ? s.subscribe(peers.ne.batchCalls(e)) : peers.g;
      },
      [s, d],
    ),
    () => {
      return s.getCurrentResult();
    },
    () => {
      return s.getCurrentResult();
    },
  );
  peers.Et.useEffect(() => {
    s.setQueries(o, rest);
  }, [o, rest, s]);
  let f = c.some((item, index) => {
    return peers.St(o[index], item);
  })
    ? c.flatMap((item, index) => {
        let n = o[index];
        if (n) {
          let t = new peers.we(r, n);
          if (peers.St(n, item)) return peers.Ct(n, t, a);
          peers.xt(item, i) && peers.Ct(n, t, a);
        }
        return [];
      })
    : [];
  if (f.length > 0) throw Promise.all(f);
  let p = c.find((item, index) => {
    let n = o[index];
    return (
      n &&
      peers.vt({
        result: item,
        errorResetBoundary: a,
        throwOnError: n.throwOnError,
        query: r.getQueryCache().get(n.queryHash),
        suspense: n.suspense,
      })
    );
  });
  if (p?.error) throw p.error;
  return l(u());
}
