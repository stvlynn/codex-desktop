// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `G7r`) / export `lK`.

export type UseConnectorLogoQueriesPeers = {
  Hf: (...args: unknown[]) => unknown;
  K7r: (...args: unknown[]) => unknown;
  a9r: (...args: unknown[]) => unknown;
  bb0: (...args: unknown[]) => unknown;
  eP: (...args: unknown[]) => unknown;
  i9r: (...args: unknown[]) => unknown;
  jt: (...args: unknown[]) => unknown;
  m9r: (...args: unknown[]) => unknown;
  o9r: (...args: unknown[]) => unknown;
  rt: (...args: unknown[]) => unknown;
};

let peers: UseConnectorLogoQueriesPeers | null = null;

/** Wire useConnectorLogoQueries peers once companions land. */
export function setUseConnectorLogoQueriesPeers(
  next: UseConnectorLogoQueriesPeers,
): void {
  peers = next;
}

/**
 * Bundle export `lK` / internal `G7r`.
 */
export function useConnectorLogoQueries(e: unknown) {
  if (peers == null) {
    throw new Error("useConnectorLogoQueries peers are not configured");
  }

  let t = (0, peers.eP.c)(14),
    { apps: n, enabled: r } = e,
    i = r === void 0 ? !0 : r,
    a = peers.rt(),
    o = i ? n : void 0,
    s;
  t[0] === o
    ? (s = t[1])
    : ((s = o == null ? void 0 : peers.i9r(o)), (t[0] = o), (t[1] = s));
  let c = s,
    l;
  t[2] === c
    ? (l = t[3])
    : ((l = [...peers.m9r, ...(c ?? []).map(peers.K7r)]),
      (t[2] = c),
      (t[3] = l));
  let u = l,
    d;
  t[4] !== c || t[5] !== a
    ? ((d = async () => {
        if (c == null) throw Error(`connector logo requests are required`);
        return peers.a9r({
          queryClient: a,
          requests: c,
        });
      }),
      (t[4] = c),
      (t[5] = a),
      (t[6] = d))
    : (d = t[6]);
  let f = c != null && c.length > 0,
    p;
  t[7] !== u || t[8] !== d || t[9] !== f
    ? ((p = {
        queryKey: u,
        queryFn: d,
        enabled: f,
        staleTime: peers.Hf.INFINITE,
      }),
      (t[7] = u),
      (t[8] = d),
      (t[9] = f),
      (t[10] = p))
    : (p = t[10]);
  let m = peers.jt(p),
    h;
  bb0: {
    if (o == null) {
      h = void 0;
      break bb0;
    }
    let e;
    (t[11] !== o || t[12] !== m.data
      ? ((e = peers.o9r({
          apps: o,
          connectorLogoSrcByCacheKey: m.data,
        })),
        (t[11] = o),
        (t[12] = m.data),
        (t[13] = e))
      : (e = t[13]),
      (h = e));
  }
  return h;
}
