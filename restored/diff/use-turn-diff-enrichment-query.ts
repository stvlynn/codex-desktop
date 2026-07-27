// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EP — real body via extractFn(internal `B6i`) / export `QR`.

export type UseTurnDiffEnrichmentQueryPeers = {
  useQuery: (opts: Record<string, unknown>) => unknown;
  buildQueryKey: (args: Record<string, unknown>) => unknown[];
  queryFn: (args: Record<string, unknown>) => Promise<unknown>;
};

let peers: UseTurnDiffEnrichmentQueryPeers | null = null;

/** Wire useTurnDiffEnrichmentQuery peers once companions land. */
export function setUseTurnDiffEnrichmentQueryPeers(
  next: UseTurnDiffEnrichmentQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `QR` / internal `B6i`.
 * Query enriched turn-diff metadata for a conversation turn.
 */
export function useTurnDiffEnrichmentQuery(args: {
  conversationId?: unknown;
  turnId?: unknown;
  enabled?: boolean;
}): unknown {
  if (peers == null) {
    throw new Error("UseTurnDiffEnrichmentQuery peers are not configured");
  }
  const enabled =
    (args.enabled ?? true) &&
    args.conversationId != null &&
    args.turnId != null;
  return peers.useQuery({
    queryKey: peers.buildQueryKey(args),
    enabled,
    queryFn: () => peers!.queryFn(args),
  });
}
