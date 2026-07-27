// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `BZt` / export `Ltt` — protobuf analytics enum.

export const CodexThreadForkDestination = {
  CODEX_THREAD_FORK_DESTINATION_UNSPECIFIED:
    "CODEX_THREAD_FORK_DESTINATION_UNSPECIFIED",
  CODEX_THREAD_FORK_DESTINATION_LOCAL: "CODEX_THREAD_FORK_DESTINATION_LOCAL",
  CODEX_THREAD_FORK_DESTINATION_SAME_WORKTREE:
    "CODEX_THREAD_FORK_DESTINATION_SAME_WORKTREE",
  CODEX_THREAD_FORK_DESTINATION_NEW_WORKTREE:
    "CODEX_THREAD_FORK_DESTINATION_NEW_WORKTREE",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export type CodexThreadForkDestination =
  (typeof CodexThreadForkDestination)[keyof typeof CodexThreadForkDestination];
