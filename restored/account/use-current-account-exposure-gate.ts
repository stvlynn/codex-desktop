// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `qnc`) / export `Qp`.

export type UseCurrentAccountExposureGatePeers = {
  resolveAudience: (account: unknown) => string | null | undefined;
  defaultConfig: {
    enabled: unknown;
    remainingThresholdPercent: unknown;
    ctaVariant: unknown;
  };
  gateIdsByAudience: Record<string, string>;
  getExperiment: (
    client: unknown,
    gateId: string,
    options: { disableExposureLog: unknown },
  ) => { get: (key: string, fallback: unknown) => unknown };
};

let peers: UseCurrentAccountExposureGatePeers | null = null;

/** Wire current-account exposure gate peers once companions land. */
export function setUseCurrentAccountExposureGatePeers(
  next: UseCurrentAccountExposureGatePeers,
): void {
  peers = next;
}

/**
 * Bundle export `Qp` / internal `qnc`.
 * Resolve exposure-gate config for the current account audience.
 */
export function useCurrentAccountExposureGate(
  client: unknown,
  options: { currentAccount: unknown; disableExposureLog: unknown },
): { audience: string | null | undefined; config: Record<string, unknown> } {
  if (peers == null) {
    throw new Error("UseCurrentAccountExposureGate peers are not configured");
  }
  const audience = peers.resolveAudience(options.currentAccount);
  if (audience == null) {
    return { audience, config: { ...peers.defaultConfig } };
  }
  const experiment = peers.getExperiment(
    client,
    peers.gateIdsByAudience[audience],
    { disableExposureLog: options.disableExposureLog },
  );
  return {
    audience,
    config: {
      enabled: experiment.get("enabled", peers.defaultConfig.enabled),
      remainingThresholdPercent: experiment.get(
        "remaining_threshold_percent",
        peers.defaultConfig.remainingThresholdPercent,
      ),
      ctaVariant: experiment.get("cta_variant", peers.defaultConfig.ctaVariant),
    },
  };
}
