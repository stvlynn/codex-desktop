// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Oh`) / export `slt`.

export type UseStatsigClientLoadingPeers = {
  Ah: (...args: unknown[]) => unknown;
};

let peers: UseStatsigClientLoadingPeers | null = null;

/** Wire useStatsigClientLoading peers once companions land. */
export function setUseStatsigClientLoadingPeers(
  next: UseStatsigClientLoadingPeers,
): void {
  peers = next;
}

/**
 * Bundle export `slt` / internal `Oh`.
 */
export function useStatsigClientLoading() {
  if (peers == null) {
    throw new Error("useStatsigClientLoading peers are not configured");
  }

  return peers.Ah().isLoading;
}
