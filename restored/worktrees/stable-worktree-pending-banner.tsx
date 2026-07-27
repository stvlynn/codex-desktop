// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Wave EH — real body via extractFn(internal `BKi`) / export `SV`.

export type StableWorktreePendingBannerPeers = {
  usePendingWorktrees: (key: string) => [{ id: unknown }[] | undefined];
};

let peers: StableWorktreePendingBannerPeers | null = null;

/** Wire stable worktree pending lookup peers once companions land. */
export function setStableWorktreePendingBannerPeers(
  next: StableWorktreePendingBannerPeers,
): void {
  peers = next;
}

/**
 * Bundle export `SV` / internal `BKi`.
 * Find a pending worktree entry by id (banner data source).
 */
export function StableWorktreePendingBanner(
  worktreeId: unknown,
): { id: unknown } | null | undefined {
  if (peers == null) {
    throw new Error("StableWorktreePendingBanner peers are not configured");
  }
  const [pending] = peers.usePendingWorktrees("pending_worktrees");
  if (!worktreeId) return null;
  if (pending === undefined) return undefined;
  return pending.find((entry) => entry.id === worktreeId) ?? null;
}
