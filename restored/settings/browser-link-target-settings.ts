// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Link-target / menu-bar setting definition catalog (bundle `IEe` / `kpt`).

export type SettingDefinitionLike = {
  key: string;
  description?: string;
  default?: unknown;
  agentAccess?: string;
  schema?: unknown;
  [key: string]: unknown;
};

/**
 * Bundle `IEe` / export `kpt` — open-link / local-url target preferences.
 */
export const browserLinkTargetSettings = {
  macMenuBarEnabled: {
    key: "mac-menu-bar-enabled",
    agentAccess: "read-write",
  } satisfies SettingDefinitionLike,
  openLinkInTargetPreference: {
    key: "open-link-in-target-preference",
    description: "Where web links open by default",
    agentAccess: "read-write",
  } satisfies SettingDefinitionLike,
  openLocalUrlInTargetPreference: {
    key: "open-local-url-in-target-preference",
    description: "Where local file URLs open by default",
    agentAccess: "read-write",
  } satisfies SettingDefinitionLike,
};

export type BrowserLinkTargetSettings = typeof browserLinkTargetSettings;

/** Bundle companion ESM init. */
export function ensureBrowserLinkTargetSettingsInit(): void {}
