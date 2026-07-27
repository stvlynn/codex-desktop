// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EP — real body via extractFn(internal `zqa`) / export `dM`.

export type UseAtMentionThreadRootsPeers = {
  useAtomValue: (atom: unknown) => unknown;
  threadRootsAtom: unknown;
  filterRoots: (roots: unknown, opts: Record<string, unknown>) => unknown;
};

let peers: UseAtMentionThreadRootsPeers | null = null;

/** Wire useAtMentionThreadRoots peers once companions land. */
export function setUseAtMentionThreadRootsPeers(
  next: UseAtMentionThreadRootsPeers,
): void {
  peers = next;
}

/**
 * Bundle export `dM` / internal `zqa`.
 * Resolve @-mention thread roots for the active composer scope.
 */
export function useAtMentionThreadRoots(
  options?: Record<string, unknown>,
): unknown {
  if (peers == null) {
    throw new Error("UseAtMentionThreadRoots peers are not configured");
  }
  const roots = peers.useAtomValue(peers.threadRootsAtom);
  return peers.filterRoots(roots, options ?? {});
}
