// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `Yti`) / export `ZW`.

export type UseAmbientSuggestionsAppEnabledQueryPeers = {
  buildQueryKey: (hostId: unknown, accountId: unknown) => unknown;
  getDesktopBridge: () => {
    ambientSuggestions?: {
      hasAccessibleAndEnabledApp: (args: {
        hostId: unknown;
      }) => Promise<boolean>;
    };
  };
  useQuery: (options: Record<string, unknown>) => unknown;
  fiveMinutesMs: number;
};

let peers: UseAmbientSuggestionsAppEnabledQueryPeers | null = null;

/** Wire ambient-suggestions app-enabled query peers once companions land. */
export function setUseAmbientSuggestionsAppEnabledQueryPeers(
  next: UseAmbientSuggestionsAppEnabledQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `ZW` / internal `Yti`.
 * Query whether ambient-suggestions app is accessible and enabled for a host.
 */
export function useAmbientSuggestionsAppEnabledQuery(args: {
  accountId: unknown;
  enabled: boolean;
  hostId: unknown;
}): unknown {
  if (peers == null) {
    throw new Error(
      "UseAmbientSuggestionsAppEnabledQuery peers are not configured",
    );
  }
  const { accountId, enabled, hostId } = args;
  const queryKey = peers.buildQueryKey(hostId, accountId);
  const queryFn = async () =>
    (await peers!
      .getDesktopBridge()
      .ambientSuggestions?.hasAccessibleAndEnabledApp({ hostId })) ?? false;
  return peers.useQuery({
    queryKey,
    queryFn,
    enabled,
    retry: false,
    staleTime: peers.fiveMinutesMs,
  });
}
