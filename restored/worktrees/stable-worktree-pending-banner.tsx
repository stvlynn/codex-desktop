// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Materialized via extractFn(internal `BKi`) / export `SV`.

export type StableWorktreePendingBannerPeers = {
  B_: (...args: unknown[]) => unknown;
  ZKi: (...args: unknown[]) => unknown;
};

let peers: StableWorktreePendingBannerPeers | null = null;

/** Wire StableWorktreePendingBanner peers once companions land. */
export function setStableWorktreePendingBannerPeers(
  next: StableWorktreePendingBannerPeers,
): void {
  peers = next;
}

/**
 * Bundle export `SV` / internal `BKi`.
 */
export function StableWorktreePendingBanner(e: unknown) {
  if (peers == null) {
    throw new Error("StableWorktreePendingBanner peers are not configured");
  }

  let t = (0, peers.ZKi.c)(3),
    [n] = peers.B_(`pending_worktrees`);
  if (!e) return null;
  if (n === void 0) return;
  let r;
  return (
    t[0] !== e || t[1] !== n
      ? ((r = n.find((t) => t.id === e) ?? null),
        (t[0] = e),
        (t[1] = n),
        (t[2] = r))
      : (r = t[2]),
    r
  );
}
