// Restored from ref/webview/assets/appearance-settings-DS7AO6pK.js
// Appearance settings section wrapping GeneralSettings.
// Stage 3: ii/Xr layout; GeneralSettings; n/oi/Zr ESM inits dropped.

import type { ReactNode } from "react";

import {
  GeneralSettings,
  ensureGeneralSettingsInit,
} from "./general-settings.tsx";
import { SettingsSectionLayout } from "./settings-section-layout";
import { SettingsSectionTitle } from "./settings-section-title";

/**
 * Appearance settings page shell (export `AppearanceSettings`).
 */
export function AppearanceSettings(): ReactNode {
  return (
    <SettingsSectionLayout title={<SettingsSectionTitle slug="appearance" />}>
      <GeneralSettings />
    </SettingsSectionLayout>
  );
}

/** No-op Rolldown ESM init retained for graph compatibility. */
export function ensureAppearanceSettingsInit(): void {
  ensureGeneralSettingsInit();
}
