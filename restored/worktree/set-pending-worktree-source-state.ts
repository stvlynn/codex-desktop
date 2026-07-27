// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EI — real body via extractFn(internal `Sxo`) / export `kA`.

export type SetPendingWorktreeSourceStatePeers = {
  pendingAtom: unknown;
  buildSourceState: (
    store: AtomStore,
    sourceConversationId: unknown,
  ) => unknown;
};

let peers: SetPendingWorktreeSourceStatePeers | null = null;

/** Wire setPendingWorktreeSourceState peers once companions land. */
export function setSetPendingWorktreeSourceStatePeers(
  next: SetPendingWorktreeSourceStatePeers,
): void {
  peers = next;
}

/**
 * Bundle export `kA` / internal `Sxo`.
 * Record source conversation/workspace for a pending worktree id.
 */
export type AtomStore = {
  set: (atom: unknown, key: unknown, value: unknown) => void;
};

export type PendingWorktreeSourceArgs = {
  pendingWorktreeId: unknown;
  sourceConversationId: unknown;
  sourceWorkspaceRoot: unknown;
};

export function setPendingWorktreeSourceState(
  store: AtomStore,
  args: PendingWorktreeSourceArgs,
): void {
  if (peers == null) {
    throw new Error("SetPendingWorktreeSourceState peers are not configured");
  }
  const { pendingWorktreeId, sourceConversationId, sourceWorkspaceRoot } = args;
  store.set(peers.pendingAtom, pendingWorktreeId, {
    sourceWorkspaceRoot,
    state: peers.buildSourceState(store, sourceConversationId),
  });
}
