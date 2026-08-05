// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `kh`) / export `rlt`.

export type UseFeatureGateEnabledPeers = {
  Eh: (...args: unknown[]) => unknown;
  Fo: (...args: unknown[]) => unknown;
  knt: (...args: unknown[]) => unknown;
};

let peers: UseFeatureGateEnabledPeers | null = null;

/** Wire useFeatureGateEnabled peers once companions land. */
export function setUseFeatureGateEnabledPeers(
  next: UseFeatureGateEnabledPeers,
): void {
  peers = next;
}

/**
 * Bundle export `rlt` / internal `kh`.
 */
export function useFeatureGateEnabled(e: unknown) {
  if (peers == null) {
    throw new Error("useFeatureGateEnabled peers are not configured");
  }

  return (peers.knt(), peers.Fo(peers.Eh, e));
}
