// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `Ngs`) / export `nx`.

export type UseChatgptCreditsUsageQueryPeers = {
  useAccountAuth: () => {
    accountId: unknown;
    authMethod: unknown;
    userId: unknown;
  };
  buildCreditsUsageQuery: (input: {
    accountId: unknown;
    authMethod: unknown;
    enabled: boolean;
    userId: unknown;
  }) => unknown;
  useQuery: (options: unknown) => unknown;
};

let peers: UseChatgptCreditsUsageQueryPeers | null = null;

/** Wire ChatGPT credits usage query peers once companions land. */
export function setUseChatgptCreditsUsageQueryPeers(
  next: UseChatgptCreditsUsageQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `nx` / internal `Ngs`.
 * Query ChatGPT credits usage when account auth is present.
 */
export function useChatgptCreditsUsageQuery(options: {
  enabled?: boolean;
}): unknown {
  if (peers == null) {
    throw new Error("UseChatgptCreditsUsageQuery peers are not configured");
  }
  const { accountId, authMethod, userId } = peers.useAccountAuth();
  const enabled =
    Boolean(options.enabled) &&
    authMethod === "chatgpt" &&
    userId != null &&
    accountId != null;
  return peers.useQuery(
    peers.buildCreditsUsageQuery({
      accountId,
      authMethod,
      enabled,
      userId,
    }),
  );
}
