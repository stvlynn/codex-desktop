// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `vQr`) / export `dY`.

export type UseTaskTurnQueryPeers = {
  useQuery: (opts: Record<string, unknown>) => unknown;
  safeGet: (path: string, body: unknown) => Promise<unknown>;
  fiveSeconds: number;
};

let peers: UseTaskTurnQueryPeers | null = null;

/** Wire useTaskTurnQuery peers once companions land. */
export function setUseTaskTurnQueryPeers(next: UseTaskTurnQueryPeers): void {
  peers = next;
}

/**
 * Bundle export `dY` / internal `vQr`.
 * Query a task turn from the wham API.
 */
export function useTaskTurnQuery(
  taskId: string | null | undefined,
  turnId: string | null | undefined,
  options?: { enabled?: boolean; refetchInterval?: unknown },
): unknown {
  if (peers == null) {
    throw new Error("UseTaskTurnQuery peers are not configured");
  }
  const queryKey = ["task", taskId, "turn", turnId];
  const enabled = !!taskId && !!turnId && (options?.enabled ?? true);
  const queryFn = async () =>
    peers!.safeGet("/wham/tasks/{task_id}/turns/{task_turn_id}", {
      parameters: {
        path: { task_id: taskId ?? "", task_turn_id: turnId ?? "" },
      },
    });
  return peers.useQuery({
    queryKey,
    enabled,
    staleTime: peers.fiveSeconds,
    refetchInterval: options?.refetchInterval,
    queryFn,
  });
}
