// Restored from ref/webview/assets/mcp-settings-B15vUYaF.js
// MCP settings section — plugins directory in manage-only (MCP) mode.
// Stage 3: ii/Xr/Gft layout+i18n; PluginsSettings; n/Hft/Zr/oi ESM inits dropped.

import type { ReactNode } from "react";
import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { PluginsSettings, ensurePluginsSettingsInit } from "./plugins-settings";
import { SettingsSectionLayout } from "./settings-section-layout";
import { SettingsSectionTitle } from "./settings-section-title";

/**
 * MCP settings page shell (export `McpSettings`).
 * Renders PluginsSettings with manageOnly so only MCP tabs show.
 */
export function McpSettings(): ReactNode {
  return (
    <SettingsSectionLayout
      title={<SettingsSectionTitle slug="mcp-settings" />}
      subtitle={
        <MemoizedFormattedMessage
          id="settings.section.mcp-settings.subtitle"
          defaultMessage="Connect external tools and data sources"
          description="Subtitle for MCP settings section"
        />
      }
    >
      <PluginsSettings manageOnly />
    </SettingsSectionLayout>
  );
}

/** No-op Rolldown ESM init retained for graph compatibility. */
export function ensureMcpSettingsInit(): void {
  ensurePluginsSettingsInit();
}
