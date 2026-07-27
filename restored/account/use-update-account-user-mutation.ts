// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EM — real body via extractFn(internal `WQl`) / export `Gi`.

export type UseUpdateAccountUserMutationPeers = {
  useQueryClient: () => unknown;
  buildMutationKey: (args: { accountId: unknown; userId: unknown }) => unknown;
  mutationFn: (...args: unknown[]) => unknown;
  onSuccess: (
    queryClient: unknown,
    mutationKey: unknown,
    data: unknown,
  ) => void;
  useMutation: (options: unknown) => unknown;
};

let peers: UseUpdateAccountUserMutationPeers | null = null;

/** Wire useUpdateAccountUserMutation peers once companions land. */
export function setUseUpdateAccountUserMutationPeers(
  next: UseUpdateAccountUserMutationPeers,
): void {
  peers = next;
}

/**
 * Bundle export `Gi` / internal `WQl`.
 * Mutation hook to update an account user and sync cache.
 */
export function useUpdateAccountUserMutation(args: {
  accountId: unknown;
  userId: unknown;
}): unknown {
  if (peers == null) {
    throw new Error("UseUpdateAccountUserMutation peers are not configured");
  }
  const queryClient = peers.useQueryClient();
  const mutationKey = peers.buildMutationKey(args);
  return peers.useMutation({
    mutationFn: peers.mutationFn,
    onSuccess: (data: unknown) => {
      peers!.onSuccess(queryClient, mutationKey, data);
    },
  });
}
