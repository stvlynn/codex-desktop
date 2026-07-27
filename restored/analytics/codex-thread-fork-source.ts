// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `zZt` / export `ztt` — protobuf analytics enum.

export const CodexThreadForkSource = {
  CODEX_THREAD_FORK_SOURCE_UNSPECIFIED: "CODEX_THREAD_FORK_SOURCE_UNSPECIFIED",
  CODEX_THREAD_FORK_SOURCE_THREAD_OVERFLOW_MENU:
    "CODEX_THREAD_FORK_SOURCE_THREAD_OVERFLOW_MENU",
  CODEX_THREAD_FORK_SOURCE_BROWSER_TAB_CONTEXT_MENU:
    "CODEX_THREAD_FORK_SOURCE_BROWSER_TAB_CONTEXT_MENU",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export type CodexThreadForkSource =
  (typeof CodexThreadForkSource)[keyof typeof CodexThreadForkSource];
