// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `kh`) / export `rlt`.

export type UseFeatureGateEnabledPeers = {
  ensureStatsigReady: () => void;
  readGate: (store: unknown, gateId: unknown) => boolean;
  gateStore: unknown;
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
 * Ensure Statsig init then read a feature gate by id.
 */
export function useFeatureGateEnabled(gateId: unknown): boolean {
  if (peers == null) {
    throw new Error("UseFeatureGateEnabled peers are not configured");
  }
  peers.ensureStatsigReady();
  return peers.readGate(peers.gateStore, gateId);
}
