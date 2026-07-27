// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `LQr`) / export `nY`.

export type UseCreateTaskMutationPeers = {
  useQueryClient: () => {
    invalidateQueries: (opts: { queryKey: unknown }) => unknown;
  };
  useMutation: (opts: Record<string, unknown>) => unknown;
  mutationFn: (...args: unknown[]) => unknown;
};

let peers: UseCreateTaskMutationPeers | null = null;

/** Wire useCreateTaskMutation peers once companions land. */
export function setUseCreateTaskMutationPeers(
  next: UseCreateTaskMutationPeers,
): void {
  peers = next;
}

/**
 * Bundle export `nY` / internal `LQr`.
 * Create-task mutation that invalidates task query keys on success.
 */
export function useCreateTaskMutation(): unknown {
  if (peers == null) {
    throw new Error("UseCreateTaskMutation peers are not configured");
  }
  const queryClient = peers.useQueryClient();
  return peers.useMutation({
    mutationFn: peers.mutationFn,
    onSuccess: (_data: unknown, vars: { taskId: unknown; turnId: unknown }) => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      queryClient.invalidateQueries({ queryKey: ["task", vars.taskId] });
      queryClient.invalidateQueries({
        queryKey: ["task", vars.taskId, "turns"],
      });
      queryClient.invalidateQueries({
        queryKey: ["task", vars.taskId, "turn", vars.turnId],
      });
    },
  });
}
