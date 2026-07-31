// Restored from ref/webview/assets/personalization-settings-DkpdQsHj.js
// Wave5 stub-pass soft companions.
const DeferredUiE2: any = undefined;
const DeferredUiV2: any = undefined;
const ensureConfigQueryAtomsInit: any = undefined;
const tokenInvalidated: any = undefined;

// Wave FX — full polished body from `personalization-settings-DkpdQsHj/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 40 (verified 94/134).
// Wave5d — FZ repair from fy-clean L=2691 sus=22; JSX PascalCase + careful split.
// Wave5d careful split 3/5
/* split-lane-import-depth:1 */

import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { appActionSidebarProjectRefSchema } from "../../actions/app-action-payload-schemas";
import { formatAgentMention } from "../../agents/format-agent-mention";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CODEX_MEMORY_SETTING_TOGGLED_TYPE } from "../../analytics/codex-memory-setting-toggled-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { chatgptConversationsGateAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_B7_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { composerNavigation } from "../../composer/composer-navigation";
import { MEMORIES_ID } from "../../config/memories-id";
import { USER_CONFIG_PATH } from "../../config/user-config-path";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { applyActive } from "../../conversation/apply-active";
import { deferredConversationP } from "../../conversation/deferred-conversation-p";
import { ensureSteeringUserMessageClusterInit } from "../../conversation/ensure-steering-user-message-cluster-init";
import { buildCodexDesktopRequestHeaders } from "../../desktop/codex-desktop-request-headers";
import { appServices } from "../../desktop/desktop-services";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { DesktopPersistenceKeys } from "../../desktop/persistence-keys";
import { DEVELOPERS_OPENAI_COM_CODEX_GUIDES_AGENTS_MD_URL } from "../../docs/codex-doc-urls";
import { ensureGitRepoWatchAtomsInit } from "../../hooks/git-method-query-atoms";
import { homeDirectoryQueryAtom } from "../../hooks/home-directory-query";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQueryClient } from "../../hooks/use-query-client";
import { HostFeatureConfigToggles } from "../../hosts/host-feature-config-toggles";
import { useSelectedHost } from "../../hosts/use-selected-host";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconOi } from "../../icons/app-icon-oi";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { PanelWidthIcon } from "../../icons/panel-width-icon";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { readScrollTop, scrollAppActionTargetTo } from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { resolveBrowserTabPanelSide as ResolveBrowserTabPanelSide } from "../../navigation/resolve-browser-tab-panel-side";
import { SIDEBAR_HIT_TEST_SELECTOR } from "../../navigation/sidebar-hit-test-selector";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { ElectronOnly } from "../../ui/electron-only";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { protobufAnalyticsEventsV1CodexMemorySettingToggled } from "../../ui/protobuf-analytics-events-v1-codex-memory-setting-toggled-2";
import { identity } from "../../utils/identity";
import { noop } from "../../utils/noop";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit, ensurePersonalizationG0Init, ensurePersonalizationJutInit, ensurePersonalizationK0Init, ensurePersonalizationM6Init } from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import { buildMemoryFeatureFlags } from "../build-memory-feature-flags";
import { ensureChronicleConfigQueriesInit, useChronicleConfigQuery } from "../chronicle-config-queries";
import { gpuTearingDebugSettingsAtom } from "../gpu-tearing-debug-settings";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import { ensureSettingsSectionTitleInit, SettingsSectionTitle } from "../settings-section-title";
import { buildVscodeQueryKey } from "../vscode-query-key";

// Wave5d soft stubs.
const AppInitialB: any = undefined;
const AppInitialBC: any = undefined;
const AppInitialUt: any = undefined;
const AppInitialVC: any = undefined;
const AppInitialWt: any = undefined;
const deferredUiB: any = undefined;
const deferredUiH: any = undefined;
const openInBrowser: any = undefined;
const parseUrlOrFallback: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const falcon: any = undefined;
const gamma: any = undefined;
const harbor: any = undefined;
const indigo: any = undefined;
const jade: any = undefined;
const kite: any = undefined;
const lemon: any = undefined;
const marble: any = undefined;
const nickel: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;
function $t(amber) {
  let {
    isChecking,
    status
  } = amber;
  if (isChecking) {
    let basalt;
    return <MemoizedFormattedMessage {...{
      id: "settings.general.experimentalFeatures.chronicle.permissionStatus.checking",
      defaultMessage: "Checking",
      description: "Chronicle permission status while checking native state"
    }} />;
  }
  if (status == null) {
    let cedar;
    return <MemoizedFormattedMessage {...{
      id: "settings.general.experimentalFeatures.chronicle.permissionStatus.unknown",
      defaultMessage: "Unknown",
      description: "Chronicle permission status when native state cannot be read"
    }} />;
  }
  switch (status) {
    case "granted":
      {
        let daisy;
        return <MemoizedFormattedMessage {...{
          id: "settings.general.experimentalFeatures.chronicle.permissionStatus.granted",
          defaultMessage: "Granted",
          description: "Chronicle permission status when granted"
        }} />;
      }
    case "not-determined":
      {
        let ember;
        return <MemoizedFormattedMessage {...{
          id: "settings.general.experimentalFeatures.chronicle.permissionStatus.notDetermined",
          defaultMessage: "Not requested",
          description: "Chronicle permission status before the user has been prompted"
        }} />;
      }
    case "denied":
      {
        let flint;
        return <MemoizedFormattedMessage {...{
          id: "settings.general.experimentalFeatures.chronicle.permissionStatus.denied",
          defaultMessage: "Denied",
          description: "Chronicle permission status when denied"
        }} />;
      }
    case "restricted":
      {
        let garnet;
        return <MemoizedFormattedMessage {...{
          id: "settings.general.experimentalFeatures.chronicle.permissionStatus.restricted",
          defaultMessage: "Restricted",
          description: "Chronicle permission status when blocked by policy"
        }} />;
      }
    case "unknown":
      {
        let hazel;
        return <MemoizedFormattedMessage {...{
          id: "settings.general.experimentalFeatures.chronicle.permissionStatus.unknown",
          defaultMessage: "Unknown",
          description: "Chronicle permission status when native state cannot be read"
        }} />;
      }
  }
}
function onyx({
  isChecking,
  status
}) {
  if (isChecking || status == null) return "text-token-description-foreground";
  switch (status) {
    case "granted":
      return "text-token-charts-green";
    case "denied":
    case "restricted":
      return "text-token-charts-red";
    case "not-determined":
    case "unknown":
      return "text-token-description-foreground";
  }
}
function pearl({
  accessibilityStatus,
  screenRecordingStatus
}) {
  return screenRecordingStatus === "denied" ? "screen-recording" : screenRecordingStatus === "granted" && accessibilityStatus === "denied" ? "accessibility" : null;
}
function quartz(ivory) {
  return ivory instanceof Error ? ivory.message : "Failed to enable Chronicle";
}
var river,
  slate,
  timber,
  umbra = esmInit(() => {
    river = reactCompilerRuntime();
    serializeCharacterReferenceNode();
    ensureComposerEsm_Tft_Init();
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    slate = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    DeferredUiV2();
    ensureSettingsQueryAtomsInit();
    findProcessManagerRow();
    useOpenLocatorInMainWindow();
    AppInitialBC();
    ensureComposerEsm_Hlt_Init();
    ensurePersonalizationJutInit();
    ensurePersonalizationG0Init();
    conversationsSidebarMessages();
    DeferredUiE2();
    ensureConfigQueryAtomsInit();
    ensureAppScopeInit();
    AppInitialVC();
    posixPathBasename();
    scrollAppActionTargetTo();
    ensureChronicleConfigQueriesInit();
    AppInitialB();
    useOpenLocatorInMainWindow();
    tokenInvalidated();
  });
function on({
  chronicleResearchPreviewEnabled,
  chronicleResearchPreviewVisible,
  isMemoryFeatureEnabled,
  memoryConfig
}) {
  return {
    chronicleResearchPreviewEnabled,
    chronicleResearchPreviewVisible,
    ...AppInitialUt({
      isMemoryFeatureEnabled,
      memoryConfig
    }),
    skipToolAssistedChatsEnabled: memoryConfig.disableOnExternalContext
  };
}
function violet(jasper, {
  chronicleResearchPreviewEnabled,
  isMemoryFeatureEnabled,
  memoryConfigPatch
} = {}) {
  return on({
    chronicleResearchPreviewEnabled: chronicleResearchPreviewEnabled ?? jasper.chronicleResearchPreviewEnabled,
    chronicleResearchPreviewVisible: jasper.chronicleResearchPreviewVisible,
    isMemoryFeatureEnabled: isMemoryFeatureEnabled ?? jasper.isMemoryFeatureEnabled,
    memoryConfig: {
      ...jasper.memoryConfig,
      ...memoryConfigPatch
    }
  });
}
function willow({
  productLogger,
  previousEnabled,
  selectedEnabled,
  settingName,
  state
}) {
  productLogger.logProductEvent(CODEX_MEMORY_SETTING_TOGGLED_TYPE, {
    settingName,
    previousEnabled,
    selectedEnabled,
    ...state
  });
}
async function xenon({
  productLogger,
  write,
  ...rest
}) {
  try {
    await write();
  } catch {
    return;
  }
  willow({
    productLogger,
    ...rest
  });
}
async function yellow({
  productLogger,
  previousState,
  selectedEnabled,
  featureWrite,
  configWrite,
  chronicleDisable
}) {
  let [kelp, lotus, mint] = await Promise.allSettled([featureWrite(), configWrite(), chronicleDisable?.() ?? Promise.resolve()]),
    nova = kelp.status === "fulfilled" ? selectedEnabled : previousState.memoryFeatureEnabled,
    olive = lotus.status === "fulfilled" ? selectedEnabled : previousState.generateMemoriesEnabled,
    prism = lotus.status === "fulfilled" ? selectedEnabled : previousState.useMemoriesEnabled,
    quill = {
      ...previousState,
      chronicleResearchPreviewEnabled: chronicleDisable != null && mint.status === "fulfilled" ? false : previousState.chronicleResearchPreviewEnabled,
      memoryFeatureEnabled: nova,
      generateMemoriesEnabled: olive,
      useMemoriesEnabled: prism,
      memoriesEnabled: nova && olive && prism
    };
  quill.memoriesEnabled !== previousState.memoriesEnabled && willow({
    productLogger,
    previousEnabled: previousState.memoriesEnabled,
    selectedEnabled,
    settingName: "memories",
    state: quill
  });
}
var zinc = esmInit(() => {
  protobufAnalyticsEventsV1CodexMemorySettingToggled();
  AppInitialWt();
});
