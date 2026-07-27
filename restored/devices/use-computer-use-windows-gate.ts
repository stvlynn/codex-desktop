// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Z3r`) / export `WK`.

export type UseComputerUseWindowsGatePeers = {
  Q3r: (...args: unknown[]) => unknown;
  X3r: (...args: unknown[]) => unknown;
  e6r: (...args: unknown[]) => unknown;
  kh: (...args: unknown[]) => unknown;
  q3r: (...args: unknown[]) => unknown;
  t6r: (...args: unknown[]) => unknown;
  uk: (...args: unknown[]) => unknown;
};

let peers: UseComputerUseWindowsGatePeers | null = null;

/** Wire useComputerUseWindowsGate peers once companions land. */
export function setUseComputerUseWindowsGatePeers(next: UseComputerUseWindowsGatePeers): void {
  peers = next;
}

/**
 * Bundle export `WK` / internal `Z3r`.
 */
export function useComputerUseWindowsGate(e: unknown) {
  if (peers == null) {
    throw new Error("useComputerUseWindowsGate peers are not configured");
  }

  let t = (0, peers.t6r.c)(16),
    { enabled: n, hostId: r } = e,
    i = n === void 0 ? !0 : n,
    { isLoading: a, platform: o } = peers.uk(),
    s = peers.kh(`1506311413`),
    c;
  t[0] === r
    ? (c = t[1])
    : ((c = {
        featureName: `computer_use`,
        hostId: r,
      }),
      (t[0] = r),
      (t[1] = c));
  let l = peers.q3r(c),
    u = o === `windows` && !a,
    d = i && u,
    f;
  t[2] === d
    ? (f = t[3])
    : ((f = {
        enabled: d,
      }),
      (t[2] = d),
      (t[3] = f));
  let p = peers.Q3r(f),
    m = l.isLoading || (u && p.isLoading),
    h = l.enabled && (!u || p.enabled),
    g;
  t[4] !== h ||
  t[5] !== i ||
  t[6] !== m ||
  t[7] !== s ||
  t[8] !== a ||
  t[9] !== o
    ? ((g = peers.e6r({
        areRequiredFeaturesEnabled: h,
        enabled: i,
        isAnyFeatureLoading: m,
        isComputerUseGateEnabled: s,
        isHostCompatiblePlatform: peers.X3r(o),
        isPlatformLoading: a,
        windowType: `electron`,
      })),
      (t[4] = h),
      (t[5] = i),
      (t[6] = m),
      (t[7] = s),
      (t[8] = a),
      (t[9] = o),
      (t[10] = g))
    : (g = t[10]);
  let _ = g,
    v = _ === `available`,
    y = _ === `loading` && m,
    b = _ === `loading`,
    x;
  return (
    t[11] !== _ || t[12] !== v || t[13] !== y || t[14] !== b
      ? ((x = {
          available: v,
          isFetching: y,
          isLoading: b,
          reason: _,
        }),
        (t[11] = _),
        (t[12] = v),
        (t[13] = y),
        (t[14] = b),
        (t[15] = x))
      : (x = t[15]),
    x
  );
}
