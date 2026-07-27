// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EA — real body via extractFn(internal `f3i`) / export `bz`.

export type PluginLike = {
  id: string;
  [key: string]: unknown;
};

export type LogPluginSectionSurfacePeers = {
  logProductEvent: (
    store: unknown,
    event: unknown,
    payload: Record<string, unknown>,
  ) => void;
  sectionEvent: unknown;
  remotePluginId: (plugin: PluginLike) => unknown;
};

let peers: LogPluginSectionSurfacePeers | null = null;

/** Wire plugin section-surface analytics once companions land. */
export function setLogPluginSectionSurfacePeers(
  next: LogPluginSectionSurfacePeers,
): void {
  peers = next;
}

/**
 * Bundle export `bz` / internal `f3i`.
 * Analytics for plugin section surface impressions/clicks.
 */
export function logPluginSectionSurface(
  store: unknown,
  args: {
    categoryId?: unknown;
    plugin: PluginLike;
    position?: unknown;
    sectionId?: unknown;
    source?: unknown;
    surface?: unknown;
    target?: unknown;
  },
): void {
  if (peers == null) {
    throw new Error("LogPluginSectionSurface peers are not configured");
  }
  peers.logProductEvent(store, peers.sectionEvent, {
    categoryId: args.categoryId,
    pluginId: args.plugin.id,
    position: args.position,
    remotePluginId: peers.remotePluginId(args.plugin),
    sectionId: args.sectionId,
    source: args.source,
    surface: args.surface,
    target: args.target,
  });
}
