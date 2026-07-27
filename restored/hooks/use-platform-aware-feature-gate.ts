// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EL — real body via extractFn(internal `RSu`) / export `S`.

export type UsePlatformAwareFeatureGatePeers = {
  usePlatform: () => { isLoading: boolean; platform: unknown };
  useStatsigLoading: () => boolean;
  useGate: (gateId: string) => boolean;
  resolve: (args: {
    isPlatformLoading: boolean;
    isSkysightEnabled: boolean;
    isStatsigLoading: boolean;
    platform: unknown;
  }) => unknown;
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
 * Combine platform + Statsig loading into a feature gate decision.
 */
export function usePlatformAwareFeatureGate(): unknown {
  if (peers == null) {
    throw new Error("UsePlatformAwareFeatureGate peers are not configured");
  }
  const { isLoading, platform } = peers.usePlatform();
  const isStatsigLoading = peers.useStatsigLoading();
  const isSkysightEnabled = peers.useGate("3488289778");
  return peers.resolve({
    isPlatformLoading: isLoading,
    isSkysightEnabled,
    isStatsigLoading,
    platform,
  });
}
