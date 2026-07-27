// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Protobuf-style enum for plugin directory entrypoints (bundle `Fb` / export `Vet`).

/**
 * Where the plugin directory UI was opened from (bundle `Fb` / export `Vet`).
 */
export const CodexPluginDirectoryEntrypoint = {
  CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_UNSPECIFIED:
    "CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_UNSPECIFIED",
  CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_DIRECT:
    "CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_DIRECT",
  CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SETTINGS:
    "CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SETTINGS",
  CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SIDEBAR:
    "CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SIDEBAR",
  CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_OTHER:
    "CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_OTHER",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export type CodexPluginDirectoryEntrypoint =
  (typeof CodexPluginDirectoryEntrypoint)[keyof typeof CodexPluginDirectoryEntrypoint];
