// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ah`) / export `ilt`.

export type UseStatsigClientBundlePeers = {
  jnt: (...args: unknown[]) => unknown;
  knt: (...args: unknown[]) => unknown;
};

let peers: UseStatsigClientBundlePeers | null = null;

/** Wire useStatsigClientBundle peers once companions land. */
export function setUseStatsigClientBundlePeers(
  next: UseStatsigClientBundlePeers,
): void {
  peers = next;
}

/**
 * Bundle export `ilt` / internal `Ah`.
 */
export function useStatsigClientBundle() {
  if (peers == null) {
    throw new Error("useStatsigClientBundle peers are not configured");
  }

  return (peers.knt(), (0, peers.jnt.useStatsigClient)());
}
