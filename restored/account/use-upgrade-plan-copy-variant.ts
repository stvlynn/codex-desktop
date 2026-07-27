// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `_Es`) / export `Wv`.

export type UseUpgradePlanCopyVariantPeers = {
  useStatsigClient: () => unknown;
  getGate: (
    client: unknown,
    gateId: string,
    options: { disableExposureLog: boolean },
  ) => { get: (key: unknown, fallback: boolean) => boolean };
  variantParam: unknown;
  upgradedCopy: unknown;
  defaultCopy: unknown;
};

let peers: UseUpgradePlanCopyVariantPeers | null = null;

/** Wire upgrade-plan copy variant peers once companions land. */
export function setUseUpgradePlanCopyVariantPeers(next: UseUpgradePlanCopyVariantPeers): void {
  peers = next;
}

/**
 * Bundle export `Wv` / internal `_Es`.
 * Return a getter that picks upgraded vs default plan copy via Statsig.
 */
export function useUpgradePlanCopyVariant(options: {
  logExposure: boolean;
}): () => unknown {
  if (peers == null) {
    throw new Error("UseUpgradePlanCopyVariant peers are not configured");
  }
  const client = peers.useStatsigClient();
  const { logExposure } = options;
  return () =>
    peers!
      .getGate(client, "337040058", { disableExposureLog: !logExposure })
      .get(peers!.variantParam, false)
      ? peers!.upgradedCopy
      : peers!.defaultCopy;
}
