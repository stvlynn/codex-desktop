// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Nh`) / export `olt`.

export type UseStatsigGateValuePeers = {
  Ah: (...args: unknown[]) => unknown;
  Ant: (...args: unknown[]) => unknown;
  Ph: (...args: unknown[]) => unknown;
};

let peers: UseStatsigGateValuePeers | null = null;

/** Wire useStatsigGateValue peers once companions land. */
export function setUseStatsigGateValuePeers(
  next: UseStatsigGateValuePeers,
): void {
  peers = next;
}

/**
 * Bundle export `olt` / internal `Nh`.
 */
export function useStatsigGateValue(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("useStatsigGateValue peers are not configured");
  }

  let n = (0, peers.Ant.c)(4),
    { client: r } = peers.Ah(),
    i;
  return (
    n[0] !== r || n[1] !== e || n[2] !== t
      ? ((i = peers.Ph(r, e, t)),
        (n[0] = r),
        (n[1] = e),
        (n[2] = t),
        (n[3] = i))
      : (i = n[3]),
    i
  );
}
