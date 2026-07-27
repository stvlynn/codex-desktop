// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `wT` / export `z6` — protobuf analytics enum.

export const CodexAutomationAction = {
  CODEX_AUTOMATION_ACTION_UNSPECIFIED: "CODEX_AUTOMATION_ACTION_UNSPECIFIED",
  CODEX_AUTOMATION_ACTION_CREATED: "CODEX_AUTOMATION_ACTION_CREATED",
  CODEX_AUTOMATION_ACTION_UPDATED: "CODEX_AUTOMATION_ACTION_UPDATED",
  CODEX_AUTOMATION_ACTION_DELETED: "CODEX_AUTOMATION_ACTION_DELETED",
  CODEX_AUTOMATION_ACTION_RUN_NOW: "CODEX_AUTOMATION_ACTION_RUN_NOW",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export type CodexAutomationAction =
  (typeof CodexAutomationAction)[keyof typeof CodexAutomationAction];
