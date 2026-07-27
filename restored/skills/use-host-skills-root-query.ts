// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `gts`) / export `JC`.

export type UseHostSkillsRootQueryPeers = {
  KN: (...args: unknown[]) => unknown;
  QN: (...args: unknown[]) => unknown;
  Qes: (...args: unknown[]) => unknown;
  Sz: (...args: unknown[]) => unknown;
  _ts: (...args: unknown[]) => unknown;
  bb0: (...args: unknown[]) => unknown;
  vts: (...args: unknown[]) => unknown;
  yts: (...args: unknown[]) => unknown;
};

let peers: UseHostSkillsRootQueryPeers | null = null;

/** Wire useHostSkillsRootQuery peers once companions land. */
export function setUseHostSkillsRootQueryPeers(next: UseHostSkillsRootQueryPeers): void {
  peers = next;
}

/**
 * Bundle export `JC` / internal `gts`.
 */
export function useHostSkillsRootQuery(e: unknown) {
  if (peers == null) {
    throw new Error("useHostSkillsRootQuery peers are not configured");
  }

  let t = (0, peers._ts.c)(16),
    { enabled: n, hostId: r, root: i } = e,
    a = n === void 0 ? !0 : n,
    o = i ?? peers.vts,
    s;
  t[0] === a
    ? (s = t[1])
    : ((s = {
        enabled: a,
      }),
      (t[0] = a),
      (t[1] = s));
  let { skills: c } = peers.Sz(o, r, s),
    l;
  t[2] === a
    ? (l = t[3])
    : ((l = {
        enabled: a,
      }),
      (t[2] = a),
      (t[3] = l));
  let { availablePlugins: u } = peers.KN(r, o, l),
    d;
  t[4] !== a || t[5] !== r
    ? ((d = {
        enabled: a,
        hostId: r,
      }),
      (t[4] = a),
      (t[5] = r),
      (t[6] = d))
    : (d = t[6]);
  let { data: f } = peers.QN(d),
    p,
    m;
  if (t[7] !== u || t[8] !== a || t[9] !== c || t[10] !== f) {
    m = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = f === void 0 ? [] : f;
      if (!a) {
        let e;
        (t[13] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = {
              capabilityNames: peers.yts,
            }),
            (t[13] = e))
          : (e = t[13]),
          (m = e));
        break bb0;
      }
      p = peers.Qes({
        apps: e,
        plugins: u,
        skills: c,
      });
    }
    ((t[7] = u), (t[8] = a), (t[9] = c), (t[10] = f), (t[11] = p), (t[12] = m));
  } else ((p = t[11]), (m = t[12]));
  if (m !== Symbol.for(`react.early_return_sentinel`)) return m;
  let h = p,
    g;
  return (
    t[14] === h
      ? (g = t[15])
      : ((g = {
          capabilityNames: h,
        }),
        (t[14] = h),
        (t[15] = g)),
    g
  );
}
