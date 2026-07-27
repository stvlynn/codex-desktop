// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `rE`) / export `k3`.

export type CreateGitLiveQueryOptionsPeers = {
  infiniteStaleTime: unknown;
  buildQueryKey: (input: {
    metadata: unknown;
    method: unknown;
    params: unknown;
    hostKey: unknown;
  }) => unknown;
  normalizeParams: (params: unknown, hostConfig: unknown) => unknown;
  requestGit: (input: {
    method: unknown;
    params: unknown;
    signal: unknown;
  }) => Promise<unknown>;
};

let peers: CreateGitLiveQueryOptionsPeers | null = null;

/** Wire git live-query option peers once companions land. */
export function setCreateGitLiveQueryOptionsPeers(
  next: CreateGitLiveQueryOptionsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `k3` / internal `rE`.
 * Build react-query options for a live git RPC method.
 */
export function createGitLiveQueryOptions(
  method: unknown,
  metadata: unknown,
  params: unknown,
  hostKey: unknown,
  hostConfig: unknown,
  options: Record<string, any> = {},
): Record<string, unknown> {
  if (peers == null) {
    throw new Error("CreateGitLiveQueryOptions peers are not configured");
  }
  const { liveQuery, retainRepoWatch, ...rest } = options;
  const resolvedLiveQuery =
    params == null || liveQuery == null || retainRepoWatch === false
      ? undefined
      : typeof liveQuery === "function"
        ? liveQuery(params)
        : liveQuery;
  const staleTime = rest.staleTime ?? peers.infiniteStaleTime;
  return {
    queryKey:
      metadata && params
        ? peers.buildQueryKey({
            metadata,
            method,
            params,
            hostKey,
          })
        : ["git", "disabled", method],
    queryFn: ({ signal }: { signal: unknown }) =>
      !metadata || !params
        ? Promise.reject(Error("Missing git metadata"))
        : peers!.requestGit({
            method,
            params: peers!.normalizeParams(params, hostConfig),
            signal,
          }),
    staleTime,
    gcTime: 1800 * 1000,
    ...rest,
    meta:
      resolvedLiveQuery == null
        ? rest.meta
        : {
            ...rest.meta,
            gitLiveQuery: { hostConfig, query: resolvedLiveQuery },
          },
    networkMode: "always",
    refetchOnWindowFocus: false,
    enabled: (query: unknown) =>
      metadata == null || params == null
        ? false
        : typeof rest.enabled === "function"
          ? rest.enabled(query)
          : (rest.enabled ?? true),
  };
}
