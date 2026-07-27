// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EI — real body via extractFn(internal `n$r`) / export `sY`.

export type UseOnboardingContextQueryPeers = {
  useAccountAuth: () => { accountId: unknown; authMethod: unknown };
  useQuery: (opts: Record<string, unknown>) => unknown;
  queryFn: () => Promise<unknown>;
  staleTime: unknown;
};

let peers: UseOnboardingContextQueryPeers | null = null;

/** Wire useOnboardingContextQuery peers once companions land. */
export function setUseOnboardingContextQueryPeers(
  next: UseOnboardingContextQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `sY` / internal `n$r`.
 * Query onboarding context for the ChatGPT-authenticated account.
 */
export function useOnboardingContextQuery(args?: {
  enabled?: boolean;
}): unknown {
  if (peers == null) {
    throw new Error("UseOnboardingContextQuery peers are not configured");
  }
  const enabled = args?.enabled ?? true;
  const { accountId, authMethod } = peers.useAccountAuth();
  const queryKey = ["onboarding", "context", authMethod, accountId];
  return peers.useQuery({
    queryKey,
    queryFn: peers.queryFn,
    staleTime: peers.staleTime,
    enabled: enabled && authMethod === "chatgpt",
  });
}
