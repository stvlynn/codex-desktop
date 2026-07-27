// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `DPs` / export `$_`.

import { toPosixPath } from "../utils/workspace-paths";

/** Resolve a git root from a `.git` or worktree path. */
export function resolveGitRootFromPath(
  pathValue: string | null | undefined,
): string | null {
  if (!pathValue) return null;
  const normalized = toPosixPath(pathValue).replace(/\/+$/, "");
  const worktreeIdx = normalized.indexOf("/.git/worktrees/");
  if (worktreeIdx === -1) {
    return normalized.endsWith("/.git") ? normalized.slice(0, -5) : null;
  }
  return normalized.slice(0, worktreeIdx);
}
