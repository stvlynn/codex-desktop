// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `g4i`) / export `Bz`.

export type BindBuildPluginInstallQueryPeers = {
  GN: (...args: unknown[]) => unknown;
  Iwe: (...args: unknown[]) => unknown;
  hostId: (...args: unknown[]) => unknown;
};

let peers: BindBuildPluginInstallQueryPeers | null = null;

/** Wire bindBuildPluginInstallQuery peers once companions land. */
export function setBindBuildPluginInstallQueryPeers(next: BindBuildPluginInstallQueryPeers): void {
  peers = next;
}

/**
 * Bundle export `Bz` / internal `g4i`.
 */
export function bindBuildPluginInstallQuery(e: unknown, t: unknown) {
  if (peers == null) {
    throw new Error("bindBuildPluginInstallQuery peers are not configured");
  }

  return peers.Iwe({
    hostId: t?.hostId,
    pluginId: e.plugin.id,
    ...peers.GN(e)
  });
}
