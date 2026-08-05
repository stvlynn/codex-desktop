// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `$xo`) / export `setWorktreeOperationSnapshot`.

export type WorktreeOperationSnapshotPeers = {
  F3n: (...args: unknown[]) => unknown;
  Wxo: (...args: unknown[]) => unknown;
  jxe: (...args: unknown[]) => unknown;
};
let peers: WorktreeOperationSnapshotPeers | null = null;

/** Wire setWorktreeOperationSnapshot peers once companions land. */
export function setWorktreeOperationSnapshotPeers(
  next: WorktreeOperationSnapshotPeers,
): void {
  peers = next;
}

/**
 * Bundle export `setWorktreeOperationSnapshot` / internal `$xo`.
 */
export function setWorktreeOperationSnapshot(
  e: unknown,
  t: unknown,
  n: unknown,
  r: unknown,
  i: unknown,
) {
  if (peers == null) {
    throw new Error("setWorktreeOperationSnapshot peers are not configured");
  }
  let a = e.query.snapshot(peers.Wxo, {
    commonDir: t.commonDir,
    root: t.root,
    hostConfig: n,
    key: peers.jxe,
    operationSource: i,
    scope: "worktree",
    ...peers.F3n(undefined, null),
  });
  a.setData({
    value: r,
  });
  a.invalidate();
}
