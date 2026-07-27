// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `ivs` / export `Rb` — protobuf analytics enum.

export const CodexPluginSource = {
  CODEX_PLUGIN_SOURCE_UNSPECIFIED: "CODEX_PLUGIN_SOURCE_UNSPECIFIED",
  CODEX_PLUGIN_SOURCE_CURATED: "CODEX_PLUGIN_SOURCE_CURATED",
  CODEX_PLUGIN_SOURCE_WORKSPACE: "CODEX_PLUGIN_SOURCE_WORKSPACE",
  CODEX_PLUGIN_SOURCE_PERSONAL: "CODEX_PLUGIN_SOURCE_PERSONAL",
  CODEX_PLUGIN_SOURCE_OTHER: "CODEX_PLUGIN_SOURCE_OTHER",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export type CodexPluginSource =
  (typeof CodexPluginSource)[keyof typeof CodexPluginSource];
