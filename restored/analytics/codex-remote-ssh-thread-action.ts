// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Eys` / export `yb` — protobuf analytics enum.

export const CodexRemoteSshThreadAction = {
  CODEX_REMOTE_SSH_THREAD_ACTION_UNSPECIFIED:
    "CODEX_REMOTE_SSH_THREAD_ACTION_UNSPECIFIED",
  CODEX_REMOTE_SSH_THREAD_ACTION_START: "CODEX_REMOTE_SSH_THREAD_ACTION_START",
  CODEX_REMOTE_SSH_THREAD_ACTION_FORK: "CODEX_REMOTE_SSH_THREAD_ACTION_FORK",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export type CodexRemoteSshThreadAction =
  (typeof CodexRemoteSshThreadAction)[keyof typeof CodexRemoteSshThreadAction];
