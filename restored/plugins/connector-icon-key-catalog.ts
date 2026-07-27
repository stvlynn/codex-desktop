// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `hei` companion keys for connector icon lookup.

/** Known connector icon catalog keys (bundle `hei`). */
export const CONNECTOR_ICON_KEYS = [
  "figma",
  "file-csv",
  "file-pdf",
  "file-presentation",
  "file-spreadsheet",
  "file-word-document",
  "git",
  "gmail",
  "google-calendar",
  "google-docs",
  "google-drive",
  "google-sheets",
  "google-slides",
  "github",
  "linear",
  "notion",
  "salesforce",
  "sites",
  "slack",
  "wallet",
] as const;

export type ConnectorIconKey = (typeof CONNECTOR_ICON_KEYS)[number];

export const CONNECTOR_ICON_KEY_SET = new Set<string>(CONNECTOR_ICON_KEYS);
