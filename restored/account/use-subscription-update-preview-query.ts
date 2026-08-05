// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EF — real body via extractFn(internal `Hgs`) / export `Xb`.

export type UseSubscriptionUpdatePreviewQueryArgs = {
  accountId: string;
  updatedPlan: unknown;
};

export type UseSubscriptionUpdatePreviewQueryPeers = {
  useQuery: (options: {
    queryKey: unknown[];
    queryFn: () => unknown;
    staleTime: number;
  }) => unknown;
  queryKeyBase: unknown[];
  safeGet: (
    path: string,
    init: { parameters: { query: Record<string, unknown> } },
  ) => unknown;
  fiveMinutesMs: number;
};

let peers: UseSubscriptionUpdatePreviewQueryPeers | null = null;

/** Wire subscription preview query peers once companions land. */
export function setUseSubscriptionUpdatePreviewQueryPeers(
  next: UseSubscriptionUpdatePreviewQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Xb` / internal `Hgs`.
 * Preview a subscription plan update for an account.
 */
export function useSubscriptionUpdatePreviewQuery(
  args: UseSubscriptionUpdatePreviewQueryArgs,
): unknown {
  if (peers == null) {
    throw new Error(
      "UseSubscriptionUpdatePreviewQuery peers are not configured",
    );
  }
  const { accountId, updatedPlan } = args;
  return peers.useQuery({
    queryKey: [...peers.queryKeyBase, accountId, updatedPlan],
    queryFn: () =>
      peers!.safeGet("/subscriptions/update/preview", {
        parameters: {
          query: { account_id: accountId, updated_plan: updatedPlan },
        },
      }),
    staleTime: peers.fiveMinutesMs,
  });
}
