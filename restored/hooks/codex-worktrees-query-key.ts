// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Query-key helpers for Codex managed worktrees (X_/Z_).

/** Bundle export `X_` — TanStack query key for `codex-worktrees`. */
export function codexWorktreesQueryKey(hostId: string, worktreesRoot?: string | null): unknown[] {
  const key: unknown[] = ["git", hostId, "codex-worktrees"];
  return worktreesRoot == null ? key : [...key, worktreesRoot];
}

/** Bundle export `Z_` — Rolldown ESM init retained as no-op. */
export function ensureCodexWorktreesQueryKeyInit(): void {}
