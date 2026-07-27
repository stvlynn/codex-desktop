// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EE — real body via extractFn(internal `G7r`) / export `lK`.

export type UseConnectorLogoQueriesArgs = {
  apps: unknown[];
  enabled?: boolean;
};

export type UseConnectorLogoQueriesPeers = {
  useQueryClient: () => unknown;
  buildRequests: (apps: unknown[]) => unknown[];
  staticRequests: unknown[];
  mapRequest: (request: unknown) => unknown;
  fetchLogos: (args: {
    queryClient: unknown;
    requests: unknown[];
  }) => Promise<unknown>;
  useQueries: (options: unknown) => unknown;
};

let peers: UseConnectorLogoQueriesPeers | null = null;

/** Wire connector logo query peers once companions land. */
export function setUseConnectorLogoQueriesPeers(
  next: UseConnectorLogoQueriesPeers,
): void {
  peers = next;
}

/**
 * Bundle export `lK` / internal `G7r`.
 * Parallel queries for connector logo assets.
 */
export function useConnectorLogoQueries(
  args: UseConnectorLogoQueriesArgs,
): unknown {
  if (peers == null) {
    throw new Error("UseConnectorLogoQueries peers are not configured");
  }
  const { apps, enabled = true } = args;
  const queryClient = peers.useQueryClient();
  const sourceApps = enabled ? apps : undefined;
  const requests =
    sourceApps == null ? undefined : peers.buildRequests(sourceApps);
  const queryDefs = [
    ...peers.staticRequests,
    ...(requests ?? []).map(peers.mapRequest),
  ];
  const fetchFn = async () => {
    if (requests == null)
      throw new Error("connector logo requests are required");
    return peers!.fetchLogos({ queryClient, requests });
  };
  return peers.useQueries({
    queries: queryDefs,
    enabled: requests != null && requests.length > 0,
    queryFn: fetchFn,
  });
}
