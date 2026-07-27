// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `PXt` / export `Dtt` — protobuf analytics enum.

export const CodexRemoteSshConnectionResult = {
  CODEX_REMOTE_SSH_CONNECTION_RESULT_UNSPECIFIED:
    "CODEX_REMOTE_SSH_CONNECTION_RESULT_UNSPECIFIED",
  CODEX_REMOTE_SSH_CONNECTION_RESULT_STARTED:
    "CODEX_REMOTE_SSH_CONNECTION_RESULT_STARTED",
  CODEX_REMOTE_SSH_CONNECTION_RESULT_SUCCEEDED:
    "CODEX_REMOTE_SSH_CONNECTION_RESULT_SUCCEEDED",
  CODEX_REMOTE_SSH_CONNECTION_RESULT_FAILED:
    "CODEX_REMOTE_SSH_CONNECTION_RESULT_FAILED",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export type CodexRemoteSshConnectionResult =
  (typeof CodexRemoteSshConnectionResult)[keyof typeof CodexRemoteSshConnectionResult];
