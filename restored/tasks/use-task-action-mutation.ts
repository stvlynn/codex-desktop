// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `UQr`) / export `aY`.

export type UseTaskActionMutationPeers = {
  useQueryClient: () => {
    invalidateQueries: (opts: { queryKey: unknown[] }) => unknown;
  };
  useMutation: (options: Record<string, unknown>) => unknown;
  mutationFn: (...args: unknown[]) => unknown;
};

let peers: UseTaskActionMutationPeers | null = null;

/** Wire task-action mutation peers once companions land. */
export function setUseTaskActionMutationPeers(
  next: UseTaskActionMutationPeers,
): void {
  peers = next;
}

/**
 * Bundle export `aY` / internal `UQr`.
 * Mutation that invalidates the tasks query on success.
 */
export function useTaskActionMutation(): unknown {
  if (peers == null) {
    throw new Error("UseTaskActionMutation peers are not configured");
  }
  const queryClient = peers.useQueryClient();
  return peers.useMutation({
    mutationFn: peers.mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
}
