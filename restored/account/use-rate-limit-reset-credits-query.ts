// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `zQr`) / export `cY`.

export type UseRateLimitResetCreditsQueryPeers = {
  queryFn: () => Promise<unknown>;
  oneMinute: unknown;
  fiveSeconds: unknown;
  useQuery: (options: Record<string, unknown>) => unknown;
};

let peers: UseRateLimitResetCreditsQueryPeers | null = null;

/** Wire rate-limit reset credits query peers once companions land. */
export function setUseRateLimitResetCreditsQueryPeers(
  next: UseRateLimitResetCreditsQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `cY` / internal `zQr`.
 * Query rate-limit reset credits on a short refresh interval.
 */
export function useRateLimitResetCreditsQuery(): unknown {
  if (peers == null) {
    throw new Error("UseRateLimitResetCreditsQuery peers are not configured");
  }
  return peers.useQuery({
    queryKey: ["rate-limit-reset-credits"],
    queryFn: peers.queryFn,
    refetchInterval: peers.oneMinute,
    staleTime: peers.fiveSeconds,
  });
}
