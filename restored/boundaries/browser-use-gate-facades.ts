// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `c6r`) / export `BK`.

export type BrowserUseGateFacadesPeers = {
  AD: (...args: unknown[]) => unknown;
  Cu: (...args: unknown[]) => unknown;
  Y: (...args: unknown[]) => unknown;
  bp: (...args: unknown[]) => unknown;
  kh: (...args: unknown[]) => unknown;
  l6r: (...args: unknown[]) => unknown;
  q3r: (...args: unknown[]) => unknown;
  u6r: (...args: unknown[]) => unknown;
};

let peers: BrowserUseGateFacadesPeers | null = null;

/** Wire browserUseGateFacades peers once companions land. */
export function setBrowserUseGateFacadesPeers(next: BrowserUseGateFacadesPeers): void {
  peers = next;
}

/**
 * Bundle export `BK` / internal `c6r`.
 */
export function browserUseGateFacades(e: unknown) {
  if (peers == null) {
    throw new Error("browserUseGateFacades peers are not configured");
  }

  let t = (0, peers.u6r.c)(13),
    { hostId: n } = e,
    r = peers.Y(peers.AD),
    i = peers.kh(`410262010`),
    a;
  t[0] === n
    ? (a = t[1])
    : ((a = {
        featureName: `browser_use`,
        hostId: n,
      }),
      (t[0] = n),
      (t[1] = a));
  let o = peers.q3r(a),
    s = peers.bp(peers.Cu.runCodexInWsl),
    c = o.enabled && !o.isLoading,
    l = o.isLoading,
    u = s === !0,
    d;
  t[2] !== i || t[3] !== r || t[4] !== c || t[5] !== l || t[6] !== u
    ? ((d = peers.l6r({
        isBrowserAgentGateEnabled: i,
        isBrowserSidebarEnabled: r,
        isBrowserUseEnabled: c,
        isLoading: l,
        runCodexInWsl: u,
        windowType: `electron`,
      })),
      (t[2] = i),
      (t[3] = r),
      (t[4] = c),
      (t[5] = l),
      (t[6] = u),
      (t[7] = d))
    : (d = t[7]);
  let f = d,
    p = f === `available`,
    m = f === `available`,
    h = f === `loading`,
    g;
  return (
    t[8] !== f || t[9] !== p || t[10] !== m || t[11] !== h
      ? ((g = {
          allowed: p,
          available: m,
          isLoading: h,
          reason: f,
        }),
        (t[8] = f),
        (t[9] = p),
        (t[10] = m),
        (t[11] = h),
        (t[12] = g))
      : (g = t[12]),
    g
  );
}
