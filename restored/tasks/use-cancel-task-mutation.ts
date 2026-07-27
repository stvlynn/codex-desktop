// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `KQr`) / export `eY`.

export type UseCancelTaskMutationPeers = {
  useQueryClient: () => {
    invalidateQueries: (opts: { queryKey: unknown[] }) => unknown;
  };
  useMutation: (options: Record<string, unknown>) => unknown;
  mutationFn: (...args: unknown[]) => unknown;
};

let peers: UseCancelTaskMutationPeers | null = null;

/** Wire cancel-task mutation peers once companions land. */
export function setUseCancelTaskMutationPeers(
  next: UseCancelTaskMutationPeers,
): void {
  peers = next;
}

/**
 * Bundle export `eY` / internal `KQr`.
 * Cancel a task and invalidate tasks + task detail queries.
 */
export function useCancelTaskMutation(): unknown {
  if (peers == null) {
    throw new Error("UseCancelTaskMutation peers are not configured");
  }
  const queryClient = peers.useQueryClient();
  return peers.useMutation({
    mutationFn: peers.mutationFn,
    onSuccess: (_data: unknown, taskId: unknown) => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      queryClient.invalidateQueries({ queryKey: ["task", taskId] });
    },
  });
}
