// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `xMl`) / export `Gs`.

export type UseOnboardingPluginPlanEffectPeers = {
  CMl: (...args: unknown[]) => unknown;
  EMl: (...args: unknown[]) => unknown;
  Ju: (...args: unknown[]) => unknown;
  NMl: (...args: unknown[]) => unknown;
  Nh: (...args: unknown[]) => unknown;
  Qsc: (...args: unknown[]) => unknown;
  SMl: (...args: unknown[]) => unknown;
  jMl: (...args: unknown[]) => unknown;
};

let peers: UseOnboardingPluginPlanEffectPeers | null = null;

/** Wire useOnboardingPluginPlanEffect peers once companions land. */
export function setUseOnboardingPluginPlanEffectPeers(
  next: UseOnboardingPluginPlanEffectPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Gs` / internal `xMl`.
 */
export function useOnboardingPluginPlanEffect(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("useOnboardingPluginPlanEffect peers are not configured");
  }

  let n = (0, peers.jMl.c)(17),
    {
      mailProvider: r,
      plan: i,
      plugins: a,
      selectedRole: o,
      useRemotePluginFlow: s,
    } = t,
    c = (0, peers.NMl.useRef)(!1),
    { locale: l } = peers.Ju(),
    u = peers.Qsc(),
    d;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = {
        disableExposureLog: !0,
      }),
      (n[0] = d))
    : (d = n[0]);
  let f = peers.Nh(`2165992955`, d),
    p = peers.Nh(`2165992955`),
    m = peers.Nh(`1852804523`),
    h,
    g;
  (n[1] !== u ||
  n[2] !== p ||
  n[3] !== l ||
  n[4] !== r ||
  n[5] !== i ||
  n[6] !== e ||
  n[7] !== o ||
  n[8] !== f ||
  n[9] !== m
    ? ((h = () => {
        if (o == null) {
          c.current = !1;
          return;
        }
        if (c.current || r == null) return;
        c.current = !0;
        let { catalog: t, exposureParameter: n } = peers.EMl({
          config: u,
          generalTaskIds: f.get(`general`, null),
          locale: l,
          mailProvider: r,
          plan: i,
          randomizeOrder: m.get(`randomize_order`, !1),
          roleTaskIds: f.get(o, null),
          selectedRole: o,
        });
        (peers.SMl(e, t), n != null && p.get(n, null));
      }),
      (g = [u, p, l, r, i, e, o, f, m]),
      (n[1] = u),
      (n[2] = p),
      (n[3] = l),
      (n[4] = r),
      (n[5] = i),
      (n[6] = e),
      (n[7] = o),
      (n[8] = f),
      (n[9] = m),
      (n[10] = h),
      (n[11] = g))
    : ((h = n[10]), (g = n[11])),
    (0, peers.NMl.useEffect)(h, g));
  let _, v;
  (n[12] !== a || n[13] !== e || n[14] !== s
    ? ((_ = () => {
        peers.CMl(e, a, s);
      }),
      (v = [a, e, s]),
      (n[12] = a),
      (n[13] = e),
      (n[14] = s),
      (n[15] = _),
      (n[16] = v))
    : ((_ = n[15]), (v = n[16])),
    (0, peers.NMl.useEffect)(_, v));
}
