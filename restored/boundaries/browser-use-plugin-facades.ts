// Restored from ref/webview/assets/app-initial-C-fROkKo.js
// Thin boundary re-export — plugin helpers / mutations / ESM inits
// (openBoundary cleared).

export {
  buildPluginInstallQuery,
  setBuildPluginInstallQueryPeers,
  type BuildPluginInstallQueryOptions,
  type BuildPluginInstallQueryPeers,
  type PluginInstallQueryPlugin,
} from "../plugins/build-plugin-install-query";

export {
  ensurePluginDisplayNameHelperInit,
  pluginDisplayName,
  titleCasePluginName,
  type PluginDisplayNameInput,
} from "../plugins/plugin-display-name-helper";

export {
  setPluginInstallMutationPeers,
  useInstallPluginMutation,
  useSetPluginEnabledMutation,
  type PluginInstallMutationPeers,
  type PluginMutationHostArgs,
} from "../plugins/plugin-install-mutations";

export {
  CODEX_SETTINGS_LINK_DESTINATION_CHANGED_TYPE,
  ensureBrowserUseFullCdpAccessClusterInit,
  ensureBrowserUseMessagesInit,
  ensureConfigQueryAtomsInit,
  ensureHostConfigAtomsInit,
  ensureMarketplaceJsonPathInit,
  ensureOpenLinkPreferenceAnalyticsInit,
  ensurePluginInstallFlowInit,
  ensurePluginPageAnalyticsInit,
  ensureThreadResumeGateInit,
} from "../plugins/browser-use-plugin-esm-inits";
