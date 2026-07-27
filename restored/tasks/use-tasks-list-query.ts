// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EJ — real body via extractFn(internal `mQr`) / export `pY`.

export type UseTasksListQueryPeers = {
  useAccountAuth: () => { authMethod: unknown };
  fetchTaskItems: (input: {
    limit?: unknown;
    taskFilter?: unknown;
  }) => Promise<unknown[]>;
  placeholderData: unknown;
  oneMinute: unknown;
  useQuery: (options: Record<string, unknown>) => unknown;
};

let peers: UseTasksListQueryPeers | null = null;

/** Wire tasks list query peers once companions land. */
export function setUseTasksListQueryPeers(next: UseTasksListQueryPeers): void {
  peers = next;
}

/**
 * Bundle export `pY` / internal `mQr`.
 * List tasks for ChatGPT auth, optionally filtered by environment label.
 */
export function useTasksListQuery(options?: {
  limit?: unknown;
  taskFilter?: unknown;
  enabled?: boolean;
  environmentLabel?: string;
}): unknown {
  if (peers == null) {
    throw new Error("UseTasksListQuery peers are not configured");
  }
  const { authMethod } = peers.useAccountAuth();
  const enabled = options?.enabled !== false && authMethod === "chatgpt";
  const select = options?.environmentLabel
    ? (
        items: Array<{ task_status_display?: { environment_label?: string } }>,
      ) =>
        items.filter(
          (item) =>
            item.task_status_display?.environment_label ===
            options.environmentLabel,
        )
    : undefined;
  return peers.useQuery({
    queryKey: ["tasks", options?.limit, options?.taskFilter],
    queryFn: () =>
      peers!.fetchTaskItems({
        limit: options?.limit,
        taskFilter: options?.taskFilter,
      }),
    enabled,
    select,
    placeholderData: peers.placeholderData,
    staleTime: peers.oneMinute,
  });
}
