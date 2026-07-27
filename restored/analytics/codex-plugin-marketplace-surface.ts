// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `zb` / export `Het` — protobuf analytics enum.

export const CodexPluginMarketplaceSurface = {
  CODEX_PLUGIN_MARKETPLACE_SURFACE_UNSPECIFIED:
    "CODEX_PLUGIN_MARKETPLACE_SURFACE_UNSPECIFIED",
  CODEX_PLUGIN_MARKETPLACE_SURFACE_DIRECTORY:
    "CODEX_PLUGIN_MARKETPLACE_SURFACE_DIRECTORY",
  CODEX_PLUGIN_MARKETPLACE_SURFACE_DETAILS:
    "CODEX_PLUGIN_MARKETPLACE_SURFACE_DETAILS",
  CODEX_PLUGIN_MARKETPLACE_SURFACE_CONNECTOR_SETUP:
    "CODEX_PLUGIN_MARKETPLACE_SURFACE_CONNECTOR_SETUP",
  UNRECOGNIZED: "UNRECOGNIZED",
} as const;

export type CodexPluginMarketplaceSurface =
  (typeof CodexPluginMarketplaceSurface)[keyof typeof CodexPluginMarketplaceSurface];
