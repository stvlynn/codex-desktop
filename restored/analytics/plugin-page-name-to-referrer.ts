// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Bundle `m3i` / export `_z`.

import { CodexPluginPageName } from "./codex-plugin-page-name";
import { CodexPluginPageReferrer } from "./codex-plugin-page-referrer";

type PluginPageName =
  (typeof CodexPluginPageName)[keyof typeof CodexPluginPageName];
type PluginPageReferrer =
  (typeof CodexPluginPageReferrer)[keyof typeof CodexPluginPageReferrer];

/** Map a plugin page-name enum to its analytics referrer enum. */
export function pluginPageNameToReferrer(
  pageName: PluginPageName,
): PluginPageReferrer {
  switch (pageName) {
    case CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_DIRECTORY:
      return CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_DIRECTORY;
    case CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_CATEGORY:
      return CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_CATEGORY;
    case CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_WORKSPACE:
      return CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_WORKSPACE;
    case CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_PERSONAL:
      return CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_PERSONAL;
    case CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_SEARCH:
      return CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_SEARCH;
    case CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_UNSPECIFIED:
    case CodexPluginPageName.CODEX_PLUGIN_PAGE_NAME_DETAILS:
    case CodexPluginPageName.UNRECOGNIZED:
      return CodexPluginPageReferrer.CODEX_PLUGIN_PAGE_REFERRER_UNSPECIFIED;
  }
}
