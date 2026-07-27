// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `B_`) / export `jot`.

export type UseStatsigConfigValuePairPeers = {
  Fo: (...args: unknown[]) => unknown;
  Io: (...args: unknown[]) => unknown;
  L_: (...args: unknown[]) => unknown;
  Q: (...args: unknown[]) => unknown;
  aOt: (...args: unknown[]) => unknown;
  iOt: (...args: unknown[]) => unknown;
};

let peers: UseStatsigConfigValuePairPeers | null = null;

/** Wire useStatsigConfigValuePair peers once companions land. */
export function setUseStatsigConfigValuePairPeers(next: UseStatsigConfigValuePairPeers): void {
  peers = next;
}

/**
 * Bundle export `jot` / internal `B_`.
 */
export function useStatsigConfigValuePair(e: unknown) {
  if (peers == null) {
    throw new Error("useStatsigConfigValuePair peers are not configured");
  }

  let t = (0, peers.aOt.c)(6),
    n = peers.Io(peers.Q),
    r = peers.Fo(peers.iOt, e),
    i;
  t[0] !== e || t[1] !== n
    ? ((i = (t) => {
        peers.L_(n, e, t);
      }),
      (t[0] = e),
      (t[1] = n),
      (t[2] = i))
    : (i = t[2]);
  let a = i,
    o;
  return (
    t[3] !== a || t[4] !== r
      ? ((o = [r, a]), (t[3] = a), (t[4] = r), (t[5] = o))
      : (o = t[5]),
    o
  );
}
