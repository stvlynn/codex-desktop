// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `RIs`) / export `T_`.

export type RefreshAppsAfterFirstPluginConnectPeers = {
  $f: (...args: unknown[]) => unknown;
  U8n: (...args: unknown[]) => unknown;
  VIs: (...args: unknown[]) => unknown;
  Zti: (...args: unknown[]) => unknown;
  eu: (...args: unknown[]) => unknown;
  rp: (...args: unknown[]) => unknown;
  zIs: (...args: unknown[]) => unknown;
};
let peers: RefreshAppsAfterFirstPluginConnectPeers | null = null;

/** Wire refreshAppsAfterFirstPluginConnect peers once companions land. */
export function setRefreshAppsAfterFirstPluginConnectPeers(
  next: RefreshAppsAfterFirstPluginConnectPeers,
): void {
  peers = next;
}

/**
 * Bundle export `T_` / internal `RIs`.
 */
export async function refreshAppsAfterFirstPluginConnect({
  hostId,
  queryClient,
  refreshAppsList,
}: Record<string, unknown>) {
  if (peers == null) {
    throw new Error(
      "refreshAppsAfterFirstPluginConnect peers are not configured",
    );
  }
  let r = queryClient.getQueryData(["apps", "list", hostId]),
    i = await refreshAppsList();
  return peers.zIs({
    previousApps: r,
    nextApps: i,
  })
    ? (await peers.U8n(queryClient, peers.Zti(hostId)),
      await Promise.all(
        peers.VIs.map((item) => {
          return peers.rp("ambient-suggestions-refresh", {
            params: {
              domain: item,
              hostId,
              projectRoot: peers.eu("~"),
              mode: "first-plugin-connect",
            },
          });
        }),
      ),
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: peers.$f("ambient-suggestions"),
        }),
        queryClient.invalidateQueries({
          queryKey: peers.$f("ambient-suggestions-refresh"),
        }),
      ]),
      i)
    : i;
}
