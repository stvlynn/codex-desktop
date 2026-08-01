// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `HJs`/`UJs`/`WJs` — exports Tg/Dg/Og.

/** `HJs` / `Tg` — hide worktree chrome in compact windows. */
export function shouldShowWorktreeChrome(args: {
  isCompactWindow: boolean;
}): boolean {
  return !args.isCompactWindow;
}

type WorktreeDirection = "to-local" | "to-worktree" | string;

/** `UJs` / `Dg` */
export function resolveWorktreeHandoffDirection(args: {
  codexWorktree?: unknown;
  operation?: { direction: WorktreeDirection } | null;
  threadHandoff?: { isWorktreeConversation?: boolean } | null;
}): WorktreeDirection {
  const { codexWorktree, operation, threadHandoff } = args;
  if (operation == null) {
    if (threadHandoff == null) {
      return codexWorktree ? "to-local" : "to-worktree";
    }
    return threadHandoff.isWorktreeConversation ? "to-local" : "to-worktree";
  }
  return operation.direction;
}

/** `WJs` / `Og` — drop successful operations from UI state. */
export function clearSuccessfulWorktreeOperation<
  T extends { status?: string } | null | undefined,
>(operation: T): T | null {
  return operation?.status === "success" ? null : (operation ?? null);
}

// --- split/export lane aliases ---
export { resolveWorktreeHandoffDirection as ResolveWorktreeHandoffDirection };
