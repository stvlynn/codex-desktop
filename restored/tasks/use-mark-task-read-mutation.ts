// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `e$r`) / export `oY`.

export type UseMarkTaskReadMutationPeers = {
  invalidateQueries: (queryKey: unknown[]) => Promise<unknown>;
  useMutation: (opts: Record<string, unknown>) => unknown;
  safePost: (path: string, body: unknown) => Promise<unknown>;
};

let peers: UseMarkTaskReadMutationPeers | null = null;

/** Wire useMarkTaskReadMutation peers once companions land. */
export function setUseMarkTaskReadMutationPeers(
  next: UseMarkTaskReadMutationPeers,
): void {
  peers = next;
}

/**
 * Bundle export `oY` / internal `e$r`.
 * Mark-task-read mutation with task list invalidation.
 */
export function useMarkTaskReadMutation(taskId: string): unknown {
  if (peers == null) {
    throw new Error("UseMarkTaskReadMutation peers are not configured");
  }
  const mutationFn = () =>
    peers!.safePost("/wham/tasks/{task_id}/mark_read", {
      parameters: { path: { task_id: taskId } },
    });
  const onSuccess = async () => {
    await Promise.all([
      peers!.invalidateQueries(["tasks"]),
      peers!.invalidateQueries(["task", taskId]),
    ]);
  };
  return peers.useMutation({ mutationFn, onSuccess });
}
