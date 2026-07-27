// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `QFo`) / export `xO`.

export type AtomStoreSet = {
  set: (atom: unknown, value: unknown) => void;
};

export type SetStableWorktreeStatusAtomPeers = {
  stableWorktreeStatusAtom: unknown;
};

let peers: SetStableWorktreeStatusAtomPeers | null = null;

/** Wire stable worktree status write peers once companions land. */
export function setSetStableWorktreeStatusAtomPeers(
  next: SetStableWorktreeStatusAtomPeers,
): void {
  peers = next;
}

/**
 * Bundle export `xO` / internal `QFo`.
 * Write the stable-worktree status atom.
 */
export function setStableWorktreeStatusAtom(
  store: AtomStoreSet,
  value: unknown,
): void {
  if (peers == null) {
    throw new Error("SetStableWorktreeStatusAtom peers are not configured");
  }
  store.set(peers.stableWorktreeStatusAtom, value);
}
