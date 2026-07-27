// Restored from ref/webview/assets/settings-external-section-CUhNrXMO.js
// External / browser-alpha settings section shell (title + subtitle only).
// Stage 3: ii→SettingsSectionLayout; Xr→SettingsSectionTitle; Gft→MemoizedFormattedMessage;
// ESM inits (Hft/Ivt/jvt/oi/Zr) dropped.

import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { SettingsSectionLayout } from "./settings-section-layout";
import { SettingsSectionTitle } from "./settings-section-title";

/**
 * Settings section placeholder for pages that open in the system browser
 * during Alpha (export `SettingsExternalSection` / `l`).
 */
export function SettingsExternalSection() {
  return (
    <SettingsSectionLayout
      title={<SettingsSectionTitle slug="environments" />}
      subtitle={
        <MemoizedFormattedMessage
          id="settings.section.external"
          defaultMessage="Opens in your browser during Alpha"
          description="Subtitle for settings sections that open in a browser during the Alpha build"
        />
      }
    />
  );
}
