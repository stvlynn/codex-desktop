// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EE — real body via extractFn(internal `RIs`) / export `T_`.

export type RefreshAppsAfterFirstPluginConnectPeers = {
  didAppsChange: (args: {
    previousApps: unknown;
    nextApps: unknown;
  }) => boolean;
  refreshAmbientSuggestions: (
    queryClient: unknown,
    key: unknown,
  ) => Promise<unknown>;
  ambientSuggestionsKey: (hostId: unknown) => unknown;
  suggestionDomains: unknown[];
  invokeRefresh: (args: {
    params: {
      domain: unknown;
      hostId: unknown;
      projectRoot: unknown;
      mode: "first-plugin-connect";
    };
  }) => Promise<unknown>;
  homeProjectRoot: () => unknown;
  invalidateAmbient: (queryClient: unknown) => Promise<unknown>;
  invalidateAmbientRefresh: (queryClient: unknown) => Promise<unknown>;
};

let peers: RefreshAppsAfterFirstPluginConnectPeers | null = null;

/** Wire first-plugin-connect refresh peers once companions land. */
export function setRefreshAppsAfterFirstPluginConnectPeers(
  next: RefreshAppsAfterFirstPluginConnectPeers,
): void {
  peers = next;
}

/**
 * Bundle export `T_` / internal `RIs`.
 * Refresh apps list and ambient suggestions after first plugin connect.
 */
export async function refreshAppsAfterFirstPluginConnect(args: {
  hostId: unknown;
  queryClient: { getQueryData: (key: unknown[]) => unknown };
  refreshAppsList: () => Promise<unknown>;
}): Promise<unknown> {
  if (peers == null) {
    throw new Error(
      "RefreshAppsAfterFirstPluginConnect peers are not configured",
    );
  }
  const { hostId, queryClient, refreshAppsList } = args;
  const previousApps = queryClient.getQueryData(["apps", "list", hostId]);
  const nextApps = await refreshAppsList();
  if (!peers.didAppsChange({ previousApps, nextApps })) {
    return nextApps;
  }
  await peers.refreshAmbientSuggestions(
    queryClient,
    peers.ambientSuggestionsKey(hostId),
  );
  await Promise.all(
    peers.suggestionDomains.map((domain) =>
      peers!.invokeRefresh({
        params: {
          domain,
          hostId,
          projectRoot: peers!.homeProjectRoot(),
          mode: "first-plugin-connect",
        },
      }),
    ),
  );
  await Promise.all([
    peers.invalidateAmbient(queryClient),
    peers.invalidateAmbientRefresh(queryClient),
  ]);
  return nextApps;
}
