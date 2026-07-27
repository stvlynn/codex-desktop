// Restored from ref/webview/assets/skills-settings-uK_TVER6.js
// Skills settings section wrapping SkillsPage.
// Stage 3: ii→SettingsSectionLayout; skills-page; n/oi ESM inits dropped.

import type { ReactNode } from "react";

import { SkillsPage, ensureSkillsPageInit } from "../skills/skills-page";
import { SettingsSectionLayout } from "./settings-section-layout";

/**
 * Skills settings page shell (export `SkillsSettings`).
 */
export function SkillsSettings(): ReactNode {
  return (
    <SettingsSectionLayout>
      <SkillsPage />
    </SettingsSectionLayout>
  );
}

/** No-op Rolldown ESM init retained for graph compatibility. */
export function ensureSkillsSettingsInit(): void {
  ensureSkillsPageInit();
}
