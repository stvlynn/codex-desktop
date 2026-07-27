// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `RKi` / export `yV`.

/** True while a worktree is still being prepared. */
export function isWorktreePendingPhase(
  phase: string | null | undefined,
): boolean {
  switch (phase) {
    case "queued":
    case "creating":
    case "setting-up":
      return true;
    case "worktree-ready":
    case "failed":
      return false;
    default:
      return false;
  }
}
