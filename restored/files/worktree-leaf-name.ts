// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `bzl` / export `Po`.

import {
  lastTwoPathSegments,
  worktreePathSegmentsUnderHome,
} from "./worktree-path-segments-under-home";

/** Worktree leaf name under codex home, else last two path segments. */
export function worktreeLeafName(input: {
  codexHome?: string | null;
  worktreePath: string;
}): string {
  return (
    worktreePathSegmentsUnderHome(input.worktreePath, input.codexHome)?.[0] ??
    lastTwoPathSegments(input.worktreePath)
  );
}
