// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `N4s`) / export `Ch`.

export type UseTeenOnboardingAgeGatePeers = {
  Ah: (...args: unknown[]) => unknown;
  Cnt: (...args: unknown[]) => unknown;
  L4s: (...args: unknown[]) => unknown;
  age_status: (...args: unknown[]) => unknown;
  n$r: (...args: unknown[]) => unknown;
};

let peers: UseTeenOnboardingAgeGatePeers | null = null;

/** Wire useTeenOnboardingAgeGate peers once companions land. */
export function setUseTeenOnboardingAgeGatePeers(next: UseTeenOnboardingAgeGatePeers): void {
  peers = next;
}

/**
 * Bundle export `Ch` / internal `N4s`.
 */
export function useTeenOnboardingAgeGate(e: unknown) {
  if (peers == null) {
    throw new Error("useTeenOnboardingAgeGate peers are not configured");
  }

  let t = (0, peers.L4s.c)(14),
    { enabled: n } = e,
    { client: r, isLoading: i } = peers.Ah(),
    a;
  t[0] !== n || t[1] !== i || t[2] !== r
    ? ((a = n && !i && peers.Cnt(r, `1482884768`)),
      (t[0] = n),
      (t[1] = i),
      (t[2] = r),
      (t[3] = a))
    : (a = t[3]);
  let o = a,
    s;
  t[4] === o
    ? (s = t[5])
    : ((s = {
        enabled: o,
      }),
      (t[4] = o),
      (t[5] = s));
  let c = peers.n$r(s),
    l = c.data?.age_status === `under_18`;
  if (!n) {
    let e;
    return (
      t[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = {
            isLoading: !1,
            shouldUseTeenOnboarding: !1,
          }),
          (t[6] = e))
        : (e = t[6]),
      e
    );
  }
  let u = i || (o && c.isLoading),
    d;
  t[7] !== o || t[8] !== l || t[9] !== r
    ? ((d = o && l && peers.Cnt(r, `3150044490`)),
      (t[7] = o),
      (t[8] = l),
      (t[9] = r),
      (t[10] = d))
    : (d = t[10]);
  let f;
  return (
    t[11] !== u || t[12] !== d
      ? ((f = {
          isLoading: u,
          shouldUseTeenOnboarding: d,
        }),
        (t[11] = u),
        (t[12] = d),
        (t[13] = f))
      : (f = t[13]),
    f
  );
}
