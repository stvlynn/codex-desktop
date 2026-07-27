// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EG — real body via extractFn(internal `d3i`) / export `xz`.

export type LogPluginDirectoryPluginRowClickArgs = {
  placement?: {
    kind?: string;
    categoryId?: unknown;
    position?: unknown;
    sectionId?: unknown;
  };
  plugin: unknown;
  source: unknown;
};

export type LogPluginDirectoryPluginRowClickPeers = {
  logEvent: (store: unknown, payload: Record<string, unknown>) => void;
  marketplaceSurface: unknown;
  clickTargetPlugin: unknown;
};

let peers: LogPluginDirectoryPluginRowClickPeers | null = null;

/** Wire plugin directory row-click logging peers once companions land. */
export function setLogPluginDirectoryPluginRowClickPeers(
  next: LogPluginDirectoryPluginRowClickPeers,
): void {
  peers = next;
}

/**
 * Bundle export `xz` / internal `d3i`.
 * Log a plugin directory row click with placement metadata.
 */
export function logPluginDirectoryPluginRowClick(
  store: unknown,
  args: LogPluginDirectoryPluginRowClickArgs,
): void {
  if (peers == null) {
    throw new Error(
      "LogPluginDirectoryPluginRowClick peers are not configured",
    );
  }
  const { placement, plugin, source } = args;
  peers.logEvent(store, {
    categoryId:
      placement?.kind === "category" ? placement.categoryId : undefined,
    plugin,
    position: placement?.position,
    sectionId: placement?.kind === "home" ? placement.sectionId : undefined,
    source,
    surface: peers.marketplaceSurface,
    target: peers.clickTargetPlugin,
  });
}
