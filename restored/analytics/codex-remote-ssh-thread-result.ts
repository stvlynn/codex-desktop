// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `Nys` / export `bb` — protobuf analytics enum.

export const CodexRemoteSshThreadResult = {
  CODEX_REMOTE_SSH_THREAD_RESULT_UNSPECIFIED:
    "CODEX_REMOTE_SSH_THREAD_RESULT_UNSPECIFIED",
  CODEX_REMOTE_SSH_THREAD_RESULT_SUCCEEDED:
    "CODEX_REMOTE_SSH_THREAD_RESULT_SUCCEEDED",
  CODEX_REMOTE_SSH_THREAD_RESULT_FAILED:
    "CODEX_REMOTE_SSH_THREAD_RESULT_FAILED",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export type CodexRemoteSshThreadResult =
  (typeof CodexRemoteSshThreadResult)[keyof typeof CodexRemoteSshThreadResult];
