// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `RSu`) / export `S`.

export type UsePlatformAwareFeatureGatePeers = {
  BSu: (...args: unknown[]) => unknown;
  Oh: (...args: unknown[]) => unknown;
  kh: (...args: unknown[]) => unknown;
  uk: (...args: unknown[]) => unknown;
  zSu: (...args: unknown[]) => unknown;
};

let peers: UsePlatformAwareFeatureGatePeers | null = null;

/** Wire usePlatformAwareFeatureGate peers once companions land. */
export function setUsePlatformAwareFeatureGatePeers(
  next: UsePlatformAwareFeatureGatePeers,
): void {
  peers = next;
}

/**
 * Bundle export `S` / internal `RSu`.
 */
export function usePlatformAwareFeatureGate() {
  if (peers == null) {
    throw new Error("usePlatformAwareFeatureGate peers are not configured");
  }

  let e = (0, peers.BSu.c)(9),
    { isLoading: t, platform: n } = peers.uk(),
    r = peers.Oh(),
    i = peers.kh(`3488289778`),
    a;
  e[0] !== t || e[1] !== i || e[2] !== r || e[3] !== n
    ? ((a = peers.zSu({
        isPlatformLoading: t,
        isSkysightEnabled: i,
        isStatsigLoading: r,
        platform: n,
      })),
      (e[0] = t),
      (e[1] = i),
      (e[2] = r),
      (e[3] = n),
      (e[4] = a))
    : (a = e[4]);
  let o = a,
    s = o === `available`,
    c = o === `loading`,
    l;
  return (
    e[5] !== o || e[6] !== s || e[7] !== c
      ? ((l = {
          available: s,
          isLoading: c,
          reason: o,
        }),
        (e[5] = o),
        (e[6] = s),
        (e[7] = c),
        (e[8] = l))
      : (l = e[8]),
    l
  );
}

// --- missing-relative-export aliases ---
export { usePlatformAwareFeatureGate as UsePlatformAwareFeatureGate };
