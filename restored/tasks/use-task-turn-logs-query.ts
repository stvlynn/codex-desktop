// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EK — real body via extractFn(internal `yQr`) / export `fY`.

export type UseTaskTurnLogsQueryPeers = {
  useQuery: (opts: Record<string, unknown>) => unknown;
  safeGet: (path: string, body: unknown) => Promise<unknown>;
  fiveSeconds: number;
};

let peers: UseTaskTurnLogsQueryPeers | null = null;

/** Wire useTaskTurnLogsQuery peers once companions land. */
export function setUseTaskTurnLogsQueryPeers(
  next: UseTaskTurnLogsQueryPeers,
): void {
  peers = next;
}

/**
 * Bundle export `fY` / internal `yQr`.
 * Query task-turn logs from the wham API.
 */
export function useTaskTurnLogsQuery(
  taskId: string | null | undefined,
  turnId: string | null | undefined,
  options?: { enabled?: boolean },
): unknown {
  if (peers == null) {
    throw new Error("UseTaskTurnLogsQuery peers are not configured");
  }
  const queryKey = ["task", taskId, "turn", turnId, "logs"];
  const enabled = !!taskId && !!turnId && (options?.enabled ?? true);
  const queryFn = async () =>
    peers!.safeGet("/wham/tasks/{task_id}/turns/{task_turn_id}/logs", {
      parameters: {
        path: { task_id: taskId ?? "", task_turn_id: turnId ?? "" },
      },
    });
  return peers.useQuery({
    queryKey,
    enabled,
    staleTime: peers.fiveSeconds,
    queryFn,
  });
}
