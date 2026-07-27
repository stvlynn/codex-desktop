// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `_5r`) / export `kK`.

export type HydratePluginMetadataBatchPeers = {
  T5r: (...args: unknown[]) => unknown;
  VN: (...args: unknown[]) => unknown;
  i: (...args: unknown[]) => unknown;
};
let peers: HydratePluginMetadataBatchPeers | null = null;

/** Wire HydratePluginMetadataBatch peers once companions land. */
export function setHydratePluginMetadataBatchPeers(
  next: HydratePluginMetadataBatchPeers,
): void {
  peers = next;
}

/**
 * Bundle export `kK` / internal `_5r`.
 */
export async function HydratePluginMetadataBatch({
  hostId,
  plugins,
  queryClient,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error("HydratePluginMetadataBatch peers are not configured");
  }
  let r = [...plugins];
  async function i(a) {
    let o = plugins[a];
    if (o == null) return;
    let [s, c, l] = await Promise.all([
      peers.VN(o.composerIconPath, hostId, queryClient),
      peers.VN(o.logoPath, hostId, queryClient),
      peers.VN(o.logoDarkPath, hostId, queryClient),
    ]);
    (s != null || c != null || l != null) &&
      (r[a] = {
        ...o,
        composerIconPath: s ?? o.composerIconPath,
        logoDarkPath: l ?? o.logoDarkPath,
        logoPath: c ?? o.logoPath,
        plugin: o.plugin.interface
          ? {
              ...o.plugin,
              interface: {
                ...o.plugin.interface,
                composerIcon: s ?? o.plugin.interface.composerIcon,
                logo: c ?? o.plugin.interface.logo,
                ...(l == null
                  ? {}
                  : {
                      logoDark: l,
                    }),
              },
            }
          : o.plugin,
      });
    await peers.i(a + peers.T5r);
  }
  return (
    await Promise.all(
      Array.from(
        {
          length: Math.min(peers.T5r, plugins.length),
        },
        (e, t) => {
          return peers.i(t);
        },
      ),
    ),
    r
  );
}
