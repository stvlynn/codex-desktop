// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Connector/app ids referenced by Welcome V2 home prompt tiles.

/**
 * Apps/connectors catalog ids that appear on Welcome V2 home suggestion tiles.
 * Used by prompt `appIds` fields (not the Statsig apps+connectors merge gate).
 */
export const WELCOME_V2_HOME_PROMPT_APP_IDS = [
  "github",
  "linear",
  "file-word-document",
  "file-spreadsheet",
  "gmail",
  "slack",
  "google-calendar",
  "google-drive",
  "figma",
] as const;

export type WelcomeV2HomePromptAppId =
  (typeof WELCOME_V2_HOME_PROMPT_APP_IDS)[number];
