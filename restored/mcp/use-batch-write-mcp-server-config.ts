// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EI — real body via extractFn(internal `g5n`) / export `K4`.

export type UseBatchWriteMcpServerConfigPeers = {
  useQueryClient: () => unknown;
  ipc: (method: string, payload: Record<string, unknown>) => Promise<unknown>;
  refreshAfterWrite: (hostId: string, queryClient: unknown) => Promise<void>;
  onError: (error: unknown) => void;
  useMutation: (opts: Record<string, unknown>) => unknown;
};

let peers: UseBatchWriteMcpServerConfigPeers | null = null;

/** Wire useBatchWriteMcpServerConfig peers once companions land. */
export function setUseBatchWriteMcpServerConfigPeers(
  next: UseBatchWriteMcpServerConfigPeers,
): void {
  peers = next;
}

/**
 * Bundle export `K4` / internal `g5n`.
 * Mutation hook that batch-writes mcp_servers config values.
 */
export function useBatchWriteMcpServerConfig(args?: {
  hostId?: string;
}): unknown {
  if (peers == null) {
    throw new Error("UseBatchWriteMcpServerConfig peers are not configured");
  }
  const hostId = args?.hostId ?? "local";
  const queryClient = peers.useQueryClient();
  const mutationFn = (edit: {
    filePath: unknown;
    key: unknown;
    value: unknown;
  }) =>
    peers!.ipc("batch-write-config-value", {
      hostId,
      edits: [
        {
          keyPath: `mcp_servers.${String(edit.key)}`,
          value: edit.value,
          mergeStrategy: "replace",
        },
      ],
      filePath: edit.filePath,
      expectedVersion: null,
    });
  return peers.useMutation({
    mutationFn,
    onError: peers.onError,
    onSuccess: async () => {
      await peers!.refreshAfterWrite(hostId, queryClient);
    },
  });
}
