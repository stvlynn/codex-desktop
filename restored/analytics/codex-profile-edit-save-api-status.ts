// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `eZt` / export `Xet` — protobuf analytics enum.

export const CodexProfileEditSaveApiStatus = {
  CODEX_PROFILE_EDIT_SAVE_API_STATUS_UNSPECIFIED:
    "CODEX_PROFILE_EDIT_SAVE_API_STATUS_UNSPECIFIED",
  CODEX_PROFILE_EDIT_SAVE_API_STATUS_NOT_ATTEMPTED:
    "CODEX_PROFILE_EDIT_SAVE_API_STATUS_NOT_ATTEMPTED",
  CODEX_PROFILE_EDIT_SAVE_API_STATUS_SUCCEEDED:
    "CODEX_PROFILE_EDIT_SAVE_API_STATUS_SUCCEEDED",
  CODEX_PROFILE_EDIT_SAVE_API_STATUS_FAILED:
    "CODEX_PROFILE_EDIT_SAVE_API_STATUS_FAILED",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export type CodexProfileEditSaveApiStatus =
  (typeof CodexProfileEditSaveApiStatus)[keyof typeof CodexProfileEditSaveApiStatus];
