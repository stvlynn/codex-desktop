// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `Ies`) / export `fw`.

export type FindMatchingPluginSharePeers = {
  Les: (...args: unknown[]) => unknown;
  Q9o: (...args: unknown[]) => unknown;
  WN: (...args: unknown[]) => unknown;
};
let peers: FindMatchingPluginSharePeers | null = null;

/** Wire findMatchingPluginShare peers once companions land. */
export function setFindMatchingPluginSharePeers(
  next: FindMatchingPluginSharePeers,
): void {
  peers = next;
}

/**
 * Bundle export `fw` / internal `Ies`.
 */
export function findMatchingPluginShare({
  availablePlugins,
  createdByMeRemotePlugins,
  homeDirectory,
  pluginShares,
  storefrontPlugins,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("findMatchingPluginShare peers are not configured");
  }
  let a = availablePlugins.find((item) => {
      return peers.Q9o(homeDirectory, item.marketplacePath);
    }),
    o = a == null ? null : peers.WN(a),
    s = storefrontPlugins.filter((item) => {
      return o != null && peers.WN(item) === o;
    }),
    c = peers.Les(createdByMeRemotePlugins, pluginShares, s);
  return {
    marketplaceFilterValue: o,
    plugins: [...s, ...c],
  };
}
