// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EI — real body via extractFn(internal `Cxo`) / export `EA`.

export type ActivatePendingWorktreeTargetPeers = {
  pendingAtom: unknown;
  targetAtom: unknown;
  buildTargetState: (
    sourceState: unknown,
    targetMeta: unknown,
    sourceWorkspaceRoot: unknown,
    targetWorkspaceRoot: unknown,
  ) => unknown;
  resolveTargetMeta: (store: AtomStore, conversationId: unknown) => unknown;
};

let peers: ActivatePendingWorktreeTargetPeers | null = null;

/** Wire activatePendingWorktreeTarget peers once companions land. */
export function setActivatePendingWorktreeTargetPeers(
  next: ActivatePendingWorktreeTargetPeers,
): void {
  peers = next;
}

/**
 * Bundle export `EA` / internal `Cxo`.
 * Promote a pending worktree entry onto its target conversation, then clear it.
 */
export type AtomStore = {
  get: (
    atom: unknown,
    key: unknown,
  ) => { state: unknown; sourceWorkspaceRoot: unknown } | null | undefined;
  set: (atom: unknown, key: unknown, value: unknown) => void;
};

export type ActivatePendingWorktreeTargetArgs = {
  pendingWorktreeId: unknown;
  targetConversationId: unknown;
  targetWorkspaceRoot: unknown;
};

export function activatePendingWorktreeTarget(
  store: AtomStore,
  args: ActivatePendingWorktreeTargetArgs,
): boolean {
  if (peers == null) {
    throw new Error("ActivatePendingWorktreeTarget peers are not configured");
  }
  const { pendingWorktreeId, targetConversationId, targetWorkspaceRoot } = args;
  const pending = store.get(peers.pendingAtom, pendingWorktreeId);
  if (pending == null) return false;
  store.set(
    peers.targetAtom,
    targetConversationId,
    peers.buildTargetState(
      pending.state,
      peers.resolveTargetMeta(store, targetConversationId),
      pending.sourceWorkspaceRoot,
      targetWorkspaceRoot,
    ),
  );
  store.set(peers.pendingAtom, pendingWorktreeId, null);
  return true;
}
