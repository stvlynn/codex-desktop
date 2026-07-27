// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EN — real body via extractFn(internal `oes`) / export `Cw`.

export type UsePluginConnectorAvailabilityPeers = {
  resolveAvailability: (input: {
    hostId: unknown;
    pluginApps: unknown;
    pluginSummary: unknown;
    marketplacePath: unknown;
    pluginName: unknown;
    remoteMarketplaceName: unknown;
  }) => unknown;
};

let peers: UsePluginConnectorAvailabilityPeers | null = null;

/** Wire usePluginConnectorAvailability peers once companions land. */
export function setUsePluginConnectorAvailabilityPeers(
  next: UsePluginConnectorAvailabilityPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Cw` / internal `oes`.
 * Resolve connector availability for a plugin/marketplace pair.
 */
export function usePluginConnectorAvailability(input: {
  hostId: unknown;
  pluginApps?: unknown;
  pluginSummary?: unknown;
  marketplacePath?: unknown;
  pluginName?: unknown;
  remoteMarketplaceName?: unknown;
}): unknown {
  if (peers == null) {
    throw new Error("UsePluginConnectorAvailability peers are not configured");
  }
  return peers.resolveAvailability({
    hostId: input.hostId,
    pluginApps: input.pluginApps,
    pluginSummary: input.pluginSummary,
    marketplacePath: input.marketplacePath,
    pluginName: input.pluginName,
    remoteMarketplaceName: input.remoteMarketplaceName,
  });
}
