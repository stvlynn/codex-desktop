// Restored from ref/webview/assets/appgen-settings-page-8V-xKkmK.js
// Wave FZ — full polished body from `appgen-settings-page-8V-xKkmK/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 34 (verified 76/109).
// AST split 3/3
/* split-lane-import-depth:1 */


import { isStartingProcessExpired as IsStartingProcessExpired } from "../../account/is-starting-process-expired";
import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { CodexAutomationCapabilityOrigin } from "../../analytics/codex-automation-capability-origin";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { ShellLayoutMetricsContext } from "../../app-shell/shell-layout-metrics-context";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { decayZoomPercent } from "../../artifact/clamp-zoom-percent";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { ensureComposerEsm_FH_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Wlt_Init as EnsureComposerEsm_Wlt_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_B0_Init } from "../../boundaries/conversation-page-esm-inits";
import { cloneTypedArray } from "../../boundaries/lodash-clone-deep-guts";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { ensureReactReduxInit } from "../../boundaries/react-redux-cjs";
import { Navigate, useMatch, useNavigate } from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { ensurePluginMentionPromptInit } from "../../browser/browser-use-helpers";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { isAppUri } from "../../composer/app-plugin-uri";
import { composerNavigation } from "../../composer/composer-navigation";
import { CHATGPT_PRODUCT_ID } from "../../config/chatgpt-product-id";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { useEventCallback } from "../../hooks/use-event-callback";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { HostFeatureConfigToggles } from "../../hosts/host-feature-config-toggles";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconAZ } from "../../icons/app-icon-az";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconCct } from "../../icons/app-icon-cct";
import { AppIconOi } from "../../icons/app-icon-oi";
import { clearActiveOverlayAfterNavigate } from "../../navigation/clear-active-overlay-after-navigate";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { SITES_OPENAI_BUNDLED_PLUGIN_ID } from "../../plugins/sites-openai-bundled-plugin-id";
import { usePluginCategoryPageTelemetry } from "../../plugins/use-plugin-category-page-telemetry";
import { usePluginNavigationTelemetry } from "../../plugins/use-plugin-navigation-telemetry";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { CopyButton } from "../../ui/copy-button";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { ElectronOnly } from "../../ui/electron-only";
import { initToolbarBreadcrumb, ToolbarBreadcrumb } from "../../ui/toolbar-breadcrumb";
import { formatUrlHostPath } from "../../utils/format-url-host-path";
import { isBareAllowedPermission } from "../../utils/is-bare-allowed-permission";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { svgToDataUri } from "../../utils/svg-to-data-uri";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { keysIn as KeysIn } from "../../vendor/lodash-cjs-predicates";
import { appgenShareDialogI, appgenShareDialogR as AppgenShareDialogR, appgenShareDialogT, ensureAppgenShareDialogInit } from "../appgen-share-dialog";
import { ensureChatgptSiteSuffixesInit } from "../chatgpt-site-suffixes";

/** app-initial companion (stub only; never promote) */
const AppInitialDO: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialFC: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialIf: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialO: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialOZ: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialT5: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialVC: any = undefined;
/** split companion stub */
const AppgenSettingsPageT: any = undefined;
/** split companion stub */
const daisy: any = undefined;
/** split companion stub */
const lemon: any = undefined;
/** split companion stub */
const slate: any = undefined;
/** split companion stub */
const violet: any = undefined;

export const appgenSettingsPageR = esmInit(() => {
  garnet = reactCompilerRuntime();
  ensureComposerEsm_Tft_Init();
  hazel = commonJsInit(clearActiveOverlayAfterNavigate(), 1);
  ensureComposerEsm_MT_Init();
  ivory = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureComposerEsm_P5_Init();
  AppInitialOZ();
  ensureSettingsQueryAtomsInit();
  findProcessManagerRow();
  useOpenLocatorInMainWindow();
  ensureComposerEsm_Qtt_Init();
  ensureConversationPageEsm_B0_Init();
  collectUniqueMappedPresenceEntries();
  ensureComposerEsm_Sut_Init();
  ensureComposerEsm_Ilt_Init();
  initToolbarBreadcrumb();
  ensureComposerEsm_K1_Init();
  usePluginCategoryPageTelemetry();
  AppInitialDO();
  ensureAppScopeInit();
  AppIconOi();
  codexCommandTheme();
  AppInitialVC();
  AppInitialFC();
  AppInitialO();
  cloneTypedArray();
  AppInitialIf();
  lemon();
  slate();
  AppInitialT5();
  CodexAutomationCapabilityOrigin();
  violet();
  ensureAppgenShareDialogInit();
  appgenShareDialogI();
  ensureChatgptSiteSuffixesInit();
  daisy();
  $t = "appgen-settings-site-title-error";
});
export { AppgenSettingsPageT as appgenSettingsPageT };
