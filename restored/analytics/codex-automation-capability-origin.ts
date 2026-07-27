// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `q3o` / export `OT` — protobuf analytics enum.

export const CodexAutomationCapabilityOrigin = {
  CODEX_AUTOMATION_CAPABILITY_ORIGIN_UNSPECIFIED:
    "CODEX_AUTOMATION_CAPABILITY_ORIGIN_UNSPECIFIED",
  CODEX_AUTOMATION_CAPABILITY_ORIGIN_FIRST_PARTY:
    "CODEX_AUTOMATION_CAPABILITY_ORIGIN_FIRST_PARTY",
  CODEX_AUTOMATION_CAPABILITY_ORIGIN_MARKETPLACE:
    "CODEX_AUTOMATION_CAPABILITY_ORIGIN_MARKETPLACE",
  CODEX_AUTOMATION_CAPABILITY_ORIGIN_CUSTOM:
    "CODEX_AUTOMATION_CAPABILITY_ORIGIN_CUSTOM",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export type CodexAutomationCapabilityOrigin =
  (typeof CodexAutomationCapabilityOrigin)[keyof typeof CodexAutomationCapabilityOrigin];
