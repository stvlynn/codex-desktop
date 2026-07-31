// Restored from ref/webview/assets/quick-chat-window-_GO18s8K.js
// Wave FZ — full polished body from `quick-chat-window-_GO18s8K/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 36 (verified 102/137).
// AST split 3/3
/* split-lane-import-depth:1 */


import { isStartingProcessExpired } from "../../account/is-starting-process-expired";
import { CodexBrowserProfileImportCookieStatus } from "../../analytics/codex-browser-profile-import-cookie-status";
import { CodexBrowserProfileImportPasswordStatus } from "../../analytics/codex-browser-profile-import-password-status";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexRemoteControlRefreshSource } from "../../analytics/codex-remote-control-refresh-source";
import { CodexRemoteSshConnectionAction } from "../../analytics/codex-remote-ssh-connection-action";
import { AppQueryClientProvider } from "../../app/app-query-client-provider";
import { ensureCodexSpriteAssetsInit } from "../../assets/ensure-codex-sprite-assets-init";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { chatgptConversationFlagsAtom, chatgptConversationServerIdAtom, chatgptConversationTitleAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_BI_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_RV_Init as EnsureComposerEsm_RV_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_XP_Init, ensureComposerEsm_ZI_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_A0_Init, ensureConversationPageEsm_GS_Init, ensureConversationPageEsm_Mx_Init } from "../../boundaries/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { _useChatgptComposerControllerI, _useChatgptComposerControllerR, _useChatgptComposerControllerT, useChatgptComposerControllerA as UseChatgptComposerControllerA, useChatgptComposerControllerB as UseChatgptComposerControllerB, useChatgptComposerControllerF, useChatgptComposerControllerI, useChatgptComposerControllerN, useChatgptComposerControllerO, useChatgptComposerControllerP as UseChatgptComposerControllerP, useChatgptComposerControllerR, useChatgptComposerControllerT, useChatgptComposerControllerV as UseChatgptComposerControllerV, useChatgptComposerControllerW, useChatgptComposerControllerX, useChatgptComposerControllerY } from "../../composer/use-chatgpt-composer-controller";
import { activateConversationSurface } from "../../conversation/activate-conversation-surface";
import { ArtifactReferenceLink } from "../../conversation/artifact-reference-link";
import { isCustomAgentId } from "../../conversation/is-custom-agent-id";
import { ensureClientCoordinationServiceInit } from "../../desktop/ensure-client-coordination-service-init";
import { isRemoteControlConnectionFailedError } from "../../desktop/remote-control-connection-failed-error";
import { filterOpenTargets } from "../../files/filter-open-targets";
import { ContextMenuRegistration } from "../../hooks/use-context-menu-registration";
import { FormattedDate } from "../../i18n/formatted-date";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { renderStringOrIntlMessage } from "../../i18n/render-string-or-intl-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconQI } from "../../icons/app-icon-qi";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { AppIconYm } from "../../icons/app-icon-ym";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { resolveScienceModelLabel } from "../../models/resolve-science-model-label";
import { usePrefersReducedMotion } from "../../motion/use-prefers-reduced-motion";
import { clearActiveOverlayAfterNavigate } from "../../navigation/clear-active-overlay-after-navigate";
import { buildSiteSettingsPath as BuildSiteSettingsPath } from "../../navigation/site-settings-path";
import { useColdNavigate as UseColdNavigate } from "../../navigation/use-cold-navigate";
import { ProjectMarkerIcon } from "../../projects/project-marker-icon";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { openRightPanel } from "../../shell/open-right-panel";
import { useBrowserExtensionPluginSetupQuery } from "../../skills/use-browser-extension-plugin-setup-query";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";
import { FloatingSurfaceCssClass } from "../../ui/floating-surface-css-classes";
import { ensureIconPixelSizeInit, getIconPixelSize } from "../../ui/icon-pixel-size";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { initToolbarBreadcrumb, ToolbarBreadcrumb } from "../../ui/toolbar-breadcrumb";
import { createInMemoryStorageAdapter } from "../../utils/create-in-memory-storage-adapter";
import { identity as Identity } from "../../utils/identity";
import { identityValue } from "../../utils/identity-value";
import { safeZodValue } from "../../utils/safe-zod-value";
import { quickChatDockPositionAtom, quickChatSurfaceCollapsedAtom } from "../../windows/quick-chat-atoms";
import { attachQuickChatProject, mapQuickChatSurfaceMode, markQuickChatConversationStarted, openOrFocusQuickChat, setQuickChatDockPosition, setQuickChatSize } from "../../windows/quick-chat-surface-helpers";

/** split companion stub */
const $t: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialKx: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialTr: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialWP: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialYP: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialZo: any = undefined;
/** split companion stub */
const deferredUiUT: any = undefined;
/** split companion stub */
const ensureDockChevronIconInit: any = undefined;
/** split companion stub */
const ensureHistoryMaterializationInit: any = undefined;
/** split companion stub */
const ensureTrafficLightInsetsInit: any = undefined;
/** split companion stub */
const falcon: any = undefined;
/** split companion stub */
const garnet: any = undefined;
/** split companion stub */
const invalidateSnapshotAndRefetchIfRequired: any = undefined;
/** split companion stub */
const lunar: any = undefined;
/** split companion stub */
const nova: any = undefined;
/** split companion stub */
const prism: any = undefined;
/** split companion stub */
const quartz: any = undefined;
/** split companion stub */
const timber: any = undefined;
/** split companion stub */
const zinc: any = undefined;

export const quickChatWindowN = esmInit(() => {
  or = reactCompilerRuntime();
  ensureComposerEsm_Tft_Init();
  useBrowserExtensionPluginSetupQuery();
  ensureComposerEsm_MT_Init();
  storm = commonJsInit(react(), 1);
  tide = commonJsInit(safeZodValue(), 1);
  ensureIntlFormattersInit();
  identityValue();
  ensureTrafficLightInsetsInit();
  ensureSettingsQueryAtomsInit();
  AppInitialZo();
  ensureComposerEsm_Ilt_Init();
  initToolbarBreadcrumb();
  ensureComposerEsm_Hlt_Init();
  CodexBrowserProfileImportCookieStatus();
  AppIconYlt();
  deferredUiUT();
  ensureDockChevronIconInit();
  openRightPanel();
  ensureCodexSpriteAssetsInit();
  ensureAppScopeInit();
  ensureConversationPageEsm_A0_Init();
  invalidateSnapshotAndRefetchIfRequired();
  useChatgptComposerControllerR();
  useChatgptComposerControllerF();
  ensureConversationPageEsm_GS_Init();
  chatgptConversationFlagsAtom();
  AppInitialYP();
  useChatgptComposerControllerO();
  useChatgptComposerControllerW();
  CodexBrowserProfileImportPasswordStatus();
  ensureComposerEsm_BI_Init();
  _useChatgptComposerControllerI();
  ensureComposerEsm_XP_Init();
  renderStringOrIntlMessage();
  AppInitialKx();
  falcon();
  quartz();
  useChatgptComposerControllerX();
  timber();
  zinc();
  garnet();
  $t();
  nova();
  useChatgptComposerControllerY();
  prism();
  ensureConversationPageEsm_Mx_Init();
  lunar();
  _useChatgptComposerControllerT();
  ensureComposerEsm_MT_Init();
  ensureHistoryMaterializationInit();
  AppInitialTr();
  unity = 400;
  vale = 400;
  wave = {
    type: "spring",
    bounce: 0.16,
    duration: 0.42
  };
  apex = clearActiveOverlayAfterNavigate(appScopeAtom, (copperSecond, {
    get
  }) => copperSecond.map(item => get(AppInitialWP, item)), {
    isEqual: isStartingProcessExpired
  });
  brook = clearActiveOverlayAfterNavigate(appScopeAtom, (deltaSecond, {
    get
  }) => deltaSecond.map(item => get(chatgptConversationServerIdAtom, item)), {
    isEqual: isStartingProcessExpired
  });
});
