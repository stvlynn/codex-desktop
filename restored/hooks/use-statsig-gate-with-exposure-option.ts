// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `gsc`) / export `op`.

export type UseStatsigGateWithExposureOptionPeers = {
  Mh: (...args: unknown[]) => unknown;
  _sc: (...args: unknown[]) => unknown;
  bsc: (...args: unknown[]) => unknown;
  xsc: (...args: unknown[]) => unknown;
};

let peers: UseStatsigGateWithExposureOptionPeers | null = null;

/** Wire useStatsigGateWithExposureOption peers once companions land. */
export function setUseStatsigGateWithExposureOptionPeers(next: UseStatsigGateWithExposureOptionPeers): void {
  peers = next;
}

/**
 * Bundle export `op` / internal `gsc`.
 */
export function useStatsigGateWithExposureOption(e: unknown) {
  if (peers == null) {
    throw new Error(
      "useStatsigGateWithExposureOption peers are not configured",
    );
  }

  let t = (0, peers.bsc.c)(6),
    n;
  t[0] === e
    ? (n = t[1])
    : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { disableExposureLog: r } = n,
    i = r === void 0 ? !1 : r,
    a;
  t[2] === i
    ? (a = t[3])
    : ((a = {
        disableExposureLog: i,
      }),
      (t[2] = i),
      (t[3] = a));
  let { value: o } = peers.Mh(peers.xsc, a),
    s;
  return (
    t[4] === o ? (s = t[5]) : ((s = peers._sc(o)), (t[4] = o), (t[5] = s)),
    s
  );
}
