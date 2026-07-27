// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `Whu`) / export `kt`.

export type UseBrowserExtensionStatusQueryPeers = {
  buildStatusQuery: (args: {
    browserExtensionId: unknown;
  }) => Record<string, unknown>;
  useQuery: (options: Record<string, unknown>) => {
    data: unknown;
    isLoading: boolean;
  };
  fiveSecondsMs: number;
  isConnectedFromData: (data: unknown) => boolean;
};

let peers: UseBrowserExtensionStatusQueryPeers | null = null;

/** Wire browser-extension status query peers once companions land. */
export function setUseBrowserExtensionStatusQueryPeers(
  next: UseBrowserExtensionStatusQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `kt` / internal `Whu`.
 * Query browser extension connection status.
 */
export function useBrowserExtensionStatusQuery(args: {
  browserExtensionId: unknown;
}): { isConnected: boolean; isLoading: boolean } {
  if (peers == null) {
    throw new Error("UseBrowserExtensionStatusQuery peers are not configured");
  }
  const { browserExtensionId } = args;
  const enabled = browserExtensionId != null;
  const base = peers.buildStatusQuery({ browserExtensionId });
  const { data, isLoading } = peers.useQuery({
    enabled,
    refetchOnWindowFocus: true,
    staleTime: peers.fiveSecondsMs,
    ...base,
  });
  return {
    isConnected: peers.isConnectedFromData(data),
    isLoading: browserExtensionId != null && isLoading,
  };
}
