// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `JJs` / export `Ag`.

export type HostWorktreeOperation = {
  direction?: string;
  request?: {
    destinationHostId?: string;
    destinationWorkspaceRoot?: string;
  };
};

/** True when an in-flight operation targets this host worktree destination. */
export function isActiveHostWorktreeOperation(input: {
  destinationHostId: string;
  destinationWorkspaceRoot: string;
  operation?: HostWorktreeOperation | null;
}): boolean {
  const { operation, destinationHostId, destinationWorkspaceRoot } = input;
  return (
    operation?.direction === "to-host-worktree" &&
    operation.request?.destinationHostId === destinationHostId &&
    operation.request?.destinationWorkspaceRoot === destinationWorkspaceRoot
  );
}
