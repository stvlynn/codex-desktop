// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EM — real body via extractFn(internal `vE`) / export `l3`.

export type UseInvalidateCustomAvatarsPeers = {
  useQueryClient: () => unknown;
  invalidateQueryKeyAndNotify: (
    queryClient: unknown,
    queryKey: unknown,
  ) => Promise<unknown>;
};

let peers: UseInvalidateCustomAvatarsPeers | null = null;

/** Wire useInvalidateCustomAvatars peers once companions land. */
export function setUseInvalidateCustomAvatarsPeers(
  next: UseInvalidateCustomAvatarsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `l3` / internal `vE`.
 * Return an async invalidator for custom-avatar query keys.
 */
export function useInvalidateCustomAvatars(): (
  queryKey: unknown,
) => Promise<unknown> {
  if (peers == null) {
    throw new Error("UseInvalidateCustomAvatars peers are not configured");
  }
  const queryClient = peers.useQueryClient();
  return async (queryKey: unknown) => {
    await peers!.invalidateQueryKeyAndNotify(queryClient, queryKey);
  };
}
