// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EI — real body via extractFn(internal `$xo`) / export `hA`.

export type SetWorktreeOperationSnapshotPeers = {
  snapshotQuery: (
    queryClient: {
      query: { snapshot: (...args: unknown[]) => SnapshotHandle };
    },
    params: Record<string, unknown>,
  ) => SnapshotHandle;
  commonParams: (a?: unknown, b?: unknown) => Record<string, unknown>;
  queryKey: unknown;
};

let peers: SetWorktreeOperationSnapshotPeers | null = null;

/** Wire setWorktreeOperationSnapshot peers once companions land. */
export function setSetWorktreeOperationSnapshotPeers(
  next: SetWorktreeOperationSnapshotPeers,
): void {
  peers = next;
}

/**
 * Bundle export `hA` / internal `$xo`.
 * Write a worktree operation snapshot into the query cache and invalidate.
 */
export type SnapshotHandle = {
  setData: (data: { value: unknown }) => void;
  invalidate: () => void;
};

export function setWorktreeOperationSnapshot(
  queryClient: { query: { snapshot: (...args: unknown[]) => SnapshotHandle } },
  dirs: { commonDir: unknown; root: unknown },
  hostConfig: unknown,
  value: unknown,
  operationSource: unknown,
): void {
  if (peers == null) {
    throw new Error("SetWorktreeOperationSnapshot peers are not configured");
  }
  const handle = peers.snapshotQuery(queryClient, {
    commonDir: dirs.commonDir,
    root: dirs.root,
    hostConfig,
    key: peers.queryKey,
    operationSource,
    scope: "worktree",
    ...peers.commonParams(undefined, null),
  });
  handle.setData({ value });
  handle.invalidate();
}
