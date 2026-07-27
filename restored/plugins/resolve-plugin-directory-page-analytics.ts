// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `o3i` / export `gz` — pure helper.

import { CodexPluginPageName } from "../analytics/codex-plugin-page-name";
import { CodexPluginSource } from "../analytics/codex-plugin-source";

export type PluginDirectoryTab = "openai" | "workspace" | "personal" | string;

function pluginSourceForDirectoryTab(tab: PluginDirectoryTab): string {
  switch (tab) {
    case "openai":
      return CodexPluginSource.CODEX_PLUGIN_SOURCE_CURATED;
    case "workspace":
      return CodexPluginSource.CODEX_PLUGIN_SOURCE_WORKSPACE;
    case "personal":
      return CodexPluginSource.CODEX_PLUGIN_SOURCE_PERSONAL;
    default:
      return CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER;
  }
}

/** Resolve analytics pageName/source for the plugin directory surface. */
export function resolvePluginDirectoryPageAnalytics(args: {
  categoryKey: string | null | undefined;
  directoryTab: PluginDirectoryTab;
  isGlobalSearch: boolean;
  searchQuery: string;
}): { pageName: string; source: string } {
  const { categoryKey, directoryTab, isGlobalSearch, searchQuery } = args;
  if (searchQuery !== "") {
    return {
      pageName: CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_SEARCH,
      source: isGlobalSearch
        ? CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER
        : pluginSourceForDirectoryTab(directoryTab),
    };
  }
  if (categoryKey != null) {
    return {
      pageName: CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_CATEGORY,
      source: pluginSourceForDirectoryTab(directoryTab),
    };
  }
  switch (directoryTab) {
    case "openai":
      return {
        pageName: CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_DIRECTORY,
        source: CodexPluginSource.CODEX_PLUGIN_SOURCE_CURATED,
      };
    case "workspace":
      return {
        pageName: CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_WORKSPACE,
        source: CodexPluginSource.CODEX_PLUGIN_SOURCE_WORKSPACE,
      };
    case "personal":
      return {
        pageName: CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_PERSONAL,
        source: CodexPluginSource.CODEX_PLUGIN_SOURCE_PERSONAL,
      };
    default:
      return {
        pageName: CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_DIRECTORY,
        source: CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
      };
  }
}
