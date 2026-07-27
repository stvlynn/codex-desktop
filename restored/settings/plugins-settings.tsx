// Restored from ref/webview/assets/plugins-settings-DERISQVS.js
// Plugins / skills / MCP settings section wrapping the plugins directory page.
// Stage 3: SO→useSelectedHost; Vet→CodexPluginDirectoryEntrypoint;
// ii/Xr/Gft layout+i18n; bO/n/Utt ESM inits dropped.

import type { ReactNode } from "react";

import { useSelectedHost } from "../hosts/use-selected-host";
import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { CodexPluginDirectoryEntrypoint } from "../plugins/codex-plugin-directory-entrypoint";
import { PluginsPage, ensurePluginsPageInit } from "../plugins/plugins-page";
import { SettingsSectionLayout } from "./settings-section-layout";
import { SettingsSectionTitle } from "./settings-section-title";

export type PluginsSettingsProps = {
  manageOnly?: boolean;
};

/**
 * Combined plugins settings section (export `t` / `pluginsSettingsT`).
 * When `manageOnly`, renders just the manage tabs (MCP/plugins) without chrome.
 */
export function PluginsSettings({
  manageOnly = false,
}: PluginsSettingsProps = {}): ReactNode {
  const { selectedHostId } = useSelectedHost();
  const initialManageTab = manageOnly ? "mcps" : "plugins";
  const page = (
    <PluginsPage
      directoryEntrypoint={
        CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SETTINGS
      }
      headerPlacement="none"
      hostId={selectedHostId}
      initialManageTab={initialManageTab}
      manageOnly
    />
  );
  if (manageOnly) return page;
  return (
    <SettingsSectionLayout
      title={<SettingsSectionTitle slug="plugins-settings" />}
      subtitle={
        <MemoizedFormattedMessage
          id="settings.section.plugins-settings.subtitle"
          defaultMessage="Manage plugins, skills, and MCPs"
          description="Subtitle for the combined plugins settings section"
        />
      }
    >
      {page}
    </SettingsSectionLayout>
  );
}

/** No-op Rolldown ESM init retained for graph compatibility (export `n`). */
export function ensurePluginsSettingsInit(): void {
  ensurePluginsPageInit();
}
