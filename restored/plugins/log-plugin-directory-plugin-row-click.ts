// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `d3i`) / export `xz`.

export type LogPluginDirectoryPluginRowClickPeers = {
  LZt: (...args: unknown[]) => unknown;
  f3i: (...args: unknown[]) => unknown;
  kind: (...args: unknown[]) => unknown;
  position: (...args: unknown[]) => unknown;
  zb: (...args: unknown[]) => unknown;
};
let peers: LogPluginDirectoryPluginRowClickPeers | null = null;

/** Wire logPluginDirectoryPluginRowClick peers once companions land. */
export function setLogPluginDirectoryPluginRowClickPeers(
  next: LogPluginDirectoryPluginRowClickPeers,
): void {
  peers = next;
}

/**
 * Bundle export `xz` / internal `d3i`.
 */
export function logPluginDirectoryPluginRowClick(
  e: unknown,
  { placement, plugin, source }: Record<string, unknown>,
) {
  if (peers == null) {
    throw new Error(
      "logPluginDirectoryPluginRowClick peers are not configured",
    );
  }
  peers.f3i(e, {
    categoryId:
      placement?.kind === "category" ? placement.categoryId : undefined,
    plugin,
    position: placement?.position,
    sectionId: placement?.kind === "home" ? placement.sectionId : undefined,
    source,
    surface: peers.zb.CODEX_PLUGIN_MARKETPLACE_SURFACE_DIRECTORY,
    target: peers.LZt.CODEX_PLUGIN_CLICK_TARGET_PLUGIN_ROW,
  });
}
