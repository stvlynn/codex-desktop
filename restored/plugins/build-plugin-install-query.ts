// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Build plugin-install navigation query (export Bz).

export type BuildPluginInstallQueryPeers = {
  /** Extra query fields from plugin record. Bundle `GN`. */
  pluginQueryExtras: (
    plugin: PluginInstallQueryPlugin,
  ) => Record<string, unknown>;
  /** Build install route query object. Bundle `Iwe`. */
  buildInstallQuery: (args: {
    hostId?: string;
    pluginId: string;
    [key: string]: unknown;
  }) => unknown;
};

export type PluginInstallQueryPlugin = {
  plugin: { id: string };
};

export type BuildPluginInstallQueryOptions = {
  hostId?: string;
};

let peers: BuildPluginInstallQueryPeers | null = null;

export function setBuildPluginInstallQueryPeers(
  next: BuildPluginInstallQueryPeers,
): void {
  peers = next;
}

/** Bundle `g4i` / export `Bz`. */
export function buildPluginInstallQuery(
  plugin: PluginInstallQueryPlugin,
  options?: BuildPluginInstallQueryOptions,
): unknown {
  if (peers == null) {
    throw new Error("buildPluginInstallQuery peers are not configured");
  }
  return peers.buildInstallQuery({
    hostId: options?.hostId,
    pluginId: plugin.plugin.id,
    ...peers.pluginQueryExtras(plugin),
  });
}
