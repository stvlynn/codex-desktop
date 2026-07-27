// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EB — real body via extractFn(internal `Ies`) / export `fw`.

export type FindMatchingPluginShareArgs = {
  availablePlugins: Array<{
    marketplacePath?: unknown;
    [key: string]: unknown;
  }>;
  createdByMeRemotePlugins: unknown[];
  homeDirectory: unknown;
  pluginShares: unknown[];
  storefrontPlugins: Array<{ [key: string]: unknown }>;
};

export type FindMatchingPluginSharePeers = {
  isSameMarketplacePath: (home: unknown, marketplacePath: unknown) => boolean;
  marketplaceFilterValue: (plugin: unknown) => unknown;
  mergeCreatedShares: (
    createdByMe: unknown[],
    shares: unknown[],
    storefrontMatches: unknown[],
  ) => unknown[];
};

let peers: FindMatchingPluginSharePeers | null = null;

/** Wire marketplace match peers once companions land. */
export function setFindMatchingPluginSharePeers(
  next: FindMatchingPluginSharePeers,
): void {
  peers = next;
}

/**
 * Bundle export `fw` / internal `Ies`.
 * Find storefront + share plugins matching the home marketplace filter.
 */
export function findMatchingPluginShare(args: FindMatchingPluginShareArgs): {
  marketplaceFilterValue: unknown;
  plugins: unknown[];
} {
  if (peers == null) {
    throw new Error("FindMatchingPluginShare peers are not configured");
  }
  const {
    availablePlugins,
    createdByMeRemotePlugins,
    homeDirectory,
    pluginShares,
    storefrontPlugins,
  } = args;
  const match = availablePlugins.find((plugin) =>
    peers!.isSameMarketplacePath(homeDirectory, plugin.marketplacePath),
  );
  const filterValue =
    match == null ? null : peers.marketplaceFilterValue(match);
  const storefrontMatches = storefrontPlugins.filter(
    (plugin) =>
      filterValue != null &&
      peers!.marketplaceFilterValue(plugin) === filterValue,
  );
  const merged = peers.mergeCreatedShares(
    createdByMeRemotePlugins,
    pluginShares,
    storefrontMatches,
  );
  return {
    marketplaceFilterValue: filterValue,
    plugins: [...storefrontMatches, ...merged],
  };
}
