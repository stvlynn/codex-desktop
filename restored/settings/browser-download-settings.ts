// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Browser download / annotation setting definition catalog (bundle `OEe` / `Fpt`).

export type SettingDefinitionLike = {
  key: string;
  description?: string;
  default?: unknown;
  agentAccess?: string;
  schema?: unknown;
  [key: string]: unknown;
};

/**
 * Bundle `OEe` / export `Fpt` — setting defs for browser downloads / annotations.
 * Keys are bindable; host may replace the catalog after config restore.
 */
export const browserDownloadSettings = {
  annotationScreenshotsMode: {
    key: "browser-annotation-screenshots-mode",
    description: "When browser annotation screenshots are included",
    agentAccess: "read-write",
    default: "necessary",
  } satisfies SettingDefinitionLike,
  downloadDirectory: {
    key: "download-directory",
    description: "Default download directory for the embedded browser",
    agentAccess: "hidden",
    default: null,
  } satisfies SettingDefinitionLike,
  promptForDownloadLocation: {
    key: "prompt-for-download-location",
    description: "Ask where to save each download",
    agentAccess: "read-write",
    default: false,
  } satisfies SettingDefinitionLike,
};

export type BrowserDownloadSettings = typeof browserDownloadSettings;

/** Bundle companion ESM init. */
export function ensureBrowserDownloadSettingsInit(): void {}
