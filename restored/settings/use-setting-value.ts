// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// React hook wrapper for the setting-value atom family (bundle `bp` / `Lut`).

import type { SettingDefinition } from "./setting-definition";

/**
 * Store-scoped reader installed by the app shell.
 * Production resolves `Fo(settingValueAtomFamily, setting)`.
 */
export type UseSettingValueImpl = <T>(setting: SettingDefinition<T>) => T;

let useSettingValueImpl: UseSettingValueImpl | null = null;

/** Wire the reactive `useSettingValue` implementation once the store is ready. */
export function setUseSettingValueImpl(impl: UseSettingValueImpl): void {
  useSettingValueImpl = impl;
}

/**
 * Read the live value for a setting definition (bundle `bp` / export `Lut`).
 * Throws until {@link setUseSettingValueImpl} is called during bootstrap.
 */
export function useSettingValue<T>(setting: SettingDefinition<T>): T {
  if (useSettingValueImpl == null) {
    throw new Error("useSettingValue implementation has not been configured");
  }
  return useSettingValueImpl(setting);
}
