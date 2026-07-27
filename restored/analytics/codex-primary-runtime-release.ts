// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `HXt` — companion analytics enum (unexported; used by primary-runtime helpers).

export const CodexPrimaryRuntimeRelease = {
  CODEX_PRIMARY_RUNTIME_RELEASE_UNSPECIFIED:
    "CODEX_PRIMARY_RUNTIME_RELEASE_UNSPECIFIED",
  CODEX_PRIMARY_RUNTIME_RELEASE_LATEST: "CODEX_PRIMARY_RUNTIME_RELEASE_LATEST",
  CODEX_PRIMARY_RUNTIME_RELEASE_LATEST_ALPHA:
    "CODEX_PRIMARY_RUNTIME_RELEASE_LATEST_ALPHA",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export type CodexPrimaryRuntimeRelease =
  (typeof CodexPrimaryRuntimeRelease)[keyof typeof CodexPrimaryRuntimeRelease];
