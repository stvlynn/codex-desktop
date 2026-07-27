// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `f3i`) / export `bz`.

export type LogPluginSectionSurfacePeers = {
  J1t: (...args: unknown[]) => unknown;
  Ub: (...args: unknown[]) => unknown;
  h3i: (...args: unknown[]) => unknown;
};
let peers: LogPluginSectionSurfacePeers | null = null;

/** Wire logPluginSectionSurface peers once companions land. */
export function setLogPluginSectionSurfacePeers(
  next: LogPluginSectionSurfacePeers,
): void {
  peers = next;
}

/**
 * Bundle export `bz` / internal `f3i`.
 */
export function logPluginSectionSurface(
  e: unknown,
  {
    categoryId,
    plugin,
    position,
    sectionId,
    source,
    surface,
    target,
  }: Record<string, unknown>,
) {
  if (peers == null) {
    throw new Error("logPluginSectionSurface peers are not configured");
  }
  peers.Ub(e, peers.J1t, {
    categoryId,
    pluginId: plugin.id,
    position,
    remotePluginId: peers.h3i(plugin),
    sectionId,
    source,
    surface,
    target,
  });
}
