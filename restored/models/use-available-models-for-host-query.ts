// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `NM`) / export `$Y`.

export type UseAvailableModelsForHostQueryPeers = {
  defaultLimit: number;
  useHostAuth: (
    hostId: unknown,
  ) => { authMethod?: string | null; isLoading?: boolean } | null | undefined;
  useModelsQuery: (
    key: unknown,
    params: Record<string, unknown>,
    options: { enabled: boolean },
  ) => unknown;
  modelsQueryKey: unknown;
};

let peers: UseAvailableModelsForHostQueryPeers | null = null;

/** Wire available-models-for-host query peers once companions land. */
export function setUseAvailableModelsForHostQueryPeers(
  next: UseAvailableModelsForHostQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `$Y` / internal `NM`.
 * Query available models for a host with auth + ultra-effort options.
 */
export function useAvailableModelsForHostQuery(args?: {
  hostId?: unknown;
  limit?: number;
  additionalAvailableModels?: Iterable<unknown>;
  includeUltraReasoningEffort?: boolean;
  enabled?: boolean;
}): unknown {
  if (peers == null) {
    throw new Error("UseAvailableModelsForHostQuery peers are not configured");
  }
  const hostId = args?.hostId ?? "local";
  const limit = args?.limit ?? peers.defaultLimit;
  const auth = peers.useHostAuth(hostId);
  const additionalAvailableModels = Array.from(
    args?.additionalAvailableModels ?? [],
  ).sort();
  const params = {
    additionalAvailableModels,
    authMethod: auth?.authMethod ?? null,
    hostId,
    includeUltraReasoningEffort: args?.includeUltraReasoningEffort !== false,
    limit,
  };
  const enabled = args?.enabled !== false && auth?.isLoading !== true;
  return peers.useModelsQuery(peers.modelsQueryKey, params, { enabled });
}
