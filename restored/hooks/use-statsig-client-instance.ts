// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `jh`) / export `alt`.

export type UseStatsigClientInstancePeers = {
  Ah: (...args: unknown[]) => unknown;
};

let peers: UseStatsigClientInstancePeers | null = null;

/** Wire useStatsigClientInstance peers once companions land. */
export function setUseStatsigClientInstancePeers(
  next: UseStatsigClientInstancePeers,
): void {
  peers = next;
}

/**
 * Bundle export `alt` / internal `jh`.
 */
export function useStatsigClientInstance() {
  if (peers == null) {
    throw new Error("useStatsigClientInstance peers are not configured");
  }

  return peers.Ah().client;
}
