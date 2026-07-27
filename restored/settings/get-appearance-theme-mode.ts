// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `lL` / export `vU` — `bp(Su.theme) ?? "system"`.
// Sync setting reader is injectable (bundle `bp` / `Fo(FQe, …)`).

import { AppearanceSettings } from "./appearance-settings";
import type { AppearanceThemeMode } from "./appearance-settings";
import type { SettingDefinition } from "./setting-definition";

type SyncSettingReader = <T>(setting: SettingDefinition<T>) => T | undefined;

let syncSettingReader: SyncSettingReader | null = null;

/** Wire the sync setting reader used by appearance helpers. */
export function setAppearanceThemeSyncReader(reader: SyncSettingReader): void {
  syncSettingReader = reader;
}

export function getAppearanceThemeMode(): AppearanceThemeMode {
  return syncSettingReader?.(AppearanceSettings.theme) ?? "system";
}
