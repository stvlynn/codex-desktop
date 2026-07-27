// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `WXt` — companion analytics enum (unexported; used by primary-runtime helpers).

export const CodexPrimaryRuntimeDependenciesDiagnoseStatus = {
  CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_UNSPECIFIED:
    "CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_UNSPECIFIED",
  CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_OK:
    "CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_OK",
  CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_PROBLEM:
    "CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_PROBLEM",
  CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_FAILED:
    "CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_STATUS_FAILED",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export type CodexPrimaryRuntimeDependenciesDiagnoseStatus =
  (typeof CodexPrimaryRuntimeDependenciesDiagnoseStatus)[keyof typeof CodexPrimaryRuntimeDependenciesDiagnoseStatus];
