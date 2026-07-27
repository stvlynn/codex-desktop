// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EP — real body via extractFn(internal `gsc`) / export `op`.

export type UseStatsigGateWithExposureOptionPeers = {
  useGateValue: (
    gateId: unknown,
    options?: { disableExposureLog?: boolean },
  ) => boolean;
};

let peers: UseStatsigGateWithExposureOptionPeers | null = null;

/** Wire useStatsigGateWithExposureOption peers once companions land. */
export function setUseStatsigGateWithExposureOptionPeers(
  next: UseStatsigGateWithExposureOptionPeers,
): void {
  peers = next;
}

/**
 * Bundle export `op` / internal `gsc`.
 * Statsig gate hook with optional exposure disable.
 */
export function useStatsigGateWithExposureOption(
  gateId: unknown,
  options?: { disableExposureLog?: boolean },
): boolean {
  if (peers == null) {
    throw new Error(
      "UseStatsigGateWithExposureOption peers are not configured",
    );
  }
  const opts = options ?? {};
  return peers.useGateValue(gateId, {
    disableExposureLog: opts.disableExposureLog,
  });
}
