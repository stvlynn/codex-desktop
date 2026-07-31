// Restored from ref/webview/assets/chatgpt-conversation-page-Bq7nUgvB.js
// Wave FZ — full polished body from `chatgpt-conversation-page-Bq7nUgvB/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 83 (verified 274/356).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 11/11
/* split-lane-import-depth:1 */

import { ensureAccountPlanQueryInit } from "../../account/ensure-account-plan-query-init";
import { isStartingProcessExpired } from "../../account/is-starting-process-expired";
import { appActionSidebarProjectRefSchema, ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CodexBrowserProfileImportCookieStatus } from "../../analytics/codex-browser-profile-import-cookie-status";
import { CodexBrowserProfileImportPasswordStatus } from "../../analytics/codex-browser-profile-import-password-status";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexPluginDirectoryEntrypoint } from "../../analytics/codex-plugin-directory-entrypoint";
import { CodexReferralInviteModalBackendErrorType } from "../../analytics/codex-referral-invite-modal-backend-error-type";
import { shellPanelPinnedDerivedAtom } from "../../app-shell/shell-panel-pin";
import { AppQueryClientProvider } from "../../app/app-query-client-provider";
import { siteAnalyticsEventsPath, siteAnalyticsPath } from "../../appgen/site-analytics-paths";
import { ensureCodexSpriteAssetsInit } from "../../assets/ensure-codex-sprite-assets-init";
import { defaultHourlyScheduleConfig } from "../../automation/default-hourly-schedule-config";
import { normalizeCronScheduleFields } from "../../automation/normalize-cron-schedule-fields";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { chatgptConversationBranchAtom, chatgptConversationFlagsAtom, chatgptConversationLoadQueryAtom, chatgptConversationPreviewAtom, chatgptConversationServerIdAtom, chatgptConversationsGateAtom, chatgptConversationStatusAtom, chatgptConversationTitleAtom, chatgptThreadDerivedAtomBP, useStepsProseAtom, writingBlocksControllerAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_AG_Init, ensureComposerEsm_BF_Init, ensureComposerEsm_BI_Init, ensureComposerEsm_F7_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_II_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_J0_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_KF_Init, ensureComposerEsm_M0_Init, ensureComposerEsm_MF_Init, ensureComposerEsm_ML_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_S8_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_TI_Init, ensureComposerEsm_XP_Init, ensureComposerEsm_Ytt_Init, ensureComposerEsm_ZI_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_A0_Init, ensureConversationPageEsm_Act_Init, ensureConversationPageEsm_B0_Init, ensureConversationPageEsm_FR_Init, ensureConversationPageEsm_GS_Init, ensureConversationPageEsm_GZ_Init, ensureConversationPageEsm_Ist_Init, ensureConversationPageEsm_Jj_Init, ensureConversationPageEsm_Lo_Init, ensureConversationPageEsm_Mx_Init, ensureConversationPageEsm_Qa_Init, ensureConversationPageEsm_SP_Init, ensureConversationPageEsm_TP_Init } from "../../boundaries/conversation-page-esm-inits";
import { conversationSourceA, conversationSourceC, conversationSourceD, conversationSourceI, conversationSourceL, conversationSourceN, conversationSourceO, conversationSourceR, conversationSourceS, conversationSourceT, conversationSourceU } from "../../boundaries/conversation-source";
import { isIterateeCall } from "../../boundaries/lodash-clone-deep-guts";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { Navigate, useLocation, useNavigate } from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { _useChatgptComposerControllerA, _useChatgptComposerControllerC, _useChatgptComposerControllerD, _useChatgptComposerControllerF, _useChatgptComposerControllerI, _useChatgptComposerControllerL, _useChatgptComposerControllerM, _useChatgptComposerControllerN, _useChatgptComposerControllerO, _useChatgptComposerControllerP, _useChatgptComposerControllerR, _useChatgptComposerControllerS, useChatgptComposerControllerA, useChatgptComposerControllerC, useChatgptComposerControllerD, useChatgptComposerControllerE, useChatgptComposerControllerF, useChatgptComposerControllerG, useChatgptComposerControllerH, useChatgptComposerControllerI, useChatgptComposerControllerJ, useChatgptComposerControllerK, useChatgptComposerControllerL, useChatgptComposerControllerM, useChatgptComposerControllerN, useChatgptComposerControllerO, useChatgptComposerControllerP, useChatgptComposerControllerR, useChatgptComposerControllerS, useChatgptComposerControllerT, useChatgptComposerControllerU, useChatgptComposerControllerUnderscore } from "../../composer/use-chatgpt-composer-controller";
import { chatgpt2 } from "../../browser/chatgpt2";
import { CHATGPT_CITATION_ID } from "../../chatgpt/chatgpt-citation-id";
import { CHATGPT_CONTENT_REFERENCE_ID } from "../../chatgpt/chatgpt-content-reference-id";
import { CHATGPT_DIL_ID } from "../../chatgpt/chatgpt-dil-id";
import { CHATGPT_IMAGE_GROUP_ID } from "../../chatgpt/chatgpt-image-group-id";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { isLocalChatgptId } from "../../chatgpt/is-local-chatgpt-id";
import { SelectedTextOverlay } from "../../composer/selected-text-overlay";
import { MEMORIES_ID } from "../../config/memories-id";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { appServices } from "../../desktop/desktop-services";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { isRemoteControlConnectionFailedError } from "../../desktop/remote-control-connection-failed-error";
import { REMOTE_CONTROL_PAIRING_FEATURE_GATE_ID } from "../../feature-gates/feature-gate-ids";
import { ensureHasSeenRealtimeVoiceNuxAtomInit } from "../../home/realtime-voice-nux";
import { ensureDebugPanelParsersInit } from "../../hooks/debug-panel-turn-files";
import { ContextMenuRegistration } from "../../hooks/use-context-menu-registration";
import { useEventCallback } from "../../hooks/use-event-callback";
import { clampFloatingWindowRect, initFloatingWindowPointerDragConstants, resizeFloatingWindowRect, useFloatingWindowPointerDrag } from "../../hooks/use-floating-window-pointer-drag";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { HostFeatureConfigToggles } from "../../hosts/host-feature-config-toggles";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAZ } from "../../icons/app-icon-az";
import { AppIconJtt } from "../../icons/app-icon-jtt";
import { AppIconKG } from "../../icons/app-icon-kg";
import { ensureAppIconKhInit } from "../../icons/app-icon-kh";
import { AppIconMZ } from "../../icons/app-icon-mz";
import { AppIconOH } from "../../icons/app-icon-oh";
import { AppIconPR } from "../../icons/app-icon-pr";
import { AppIconQI } from "../../icons/app-icon-qi";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { AppIconZa } from "../../icons/app-icon-za";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { codexDirectiveMarkedExtensions } from "../../markdown/codex-directive-marked-extensions";
import { markdownToPlainText } from "../../markdown/markdown-to-plain-text";
import { rewriteFileCitationMarkers } from "../../markdown/rewrite-file-citation-markers";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { findSidebarSectionElement, readScrollTop, writeScrollTop } from "../../navigation/app-action-dom";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { clearActiveOverlayAfterNavigate } from "../../navigation/clear-active-overlay-after-navigate";
import { NavigationAllowContext } from "../../navigation/navigation-allow-context";
import { buildSiteSettingsPath } from "../../navigation/site-settings-path";
import { useColdNavigate } from "../../navigation/use-cold-navigate";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { pluginManagePathForCatalogEntry } from "../../plugins/plugin-manage-path-for-catalog-entry";
import { pluginProductBrowseNav } from "../../plugins/plugin-product-browse-nav";
import { ProjectMarkerIcon } from "../../projects/project-marker-icon";
import { visibleRemoteControlConnections } from "../../remote-control/remote-control-connection-sets";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureMemoryScopeHelpersInit } from "../../settings/ensure-memory-scope-helpers-init";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useChronicleSettingsSection } from "../../settings/use-chronicle-settings-section";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { isTunAtomEqualToNS } from "../../shell/is-tun-atom-equal-to-ns";
import { openRightPanel } from "../../shell/open-right-panel";
import { setRightPanelConversation } from "../../shell/set-right-panel-conversation";
import { ProjectHoverCardBody } from "../../sidebar/project-hover-card-body";
import { useBrowserExtensionPluginSetupQuery } from "../../skills/use-browser-extension-plugin-setup-query";
import { initThreadPanelToggleButton, ThreadPanelToggleButton } from "../../thread/thread-panel-toggle-button";
import { ThreadResourceCard } from "../../thread/thread-resource-card";
import { initThreadScrollControllerContext, useThreadScrollController } from "../../thread/thread-scroll-controller-context";
import { initThreadScrollLayout, ThreadScrollLayout } from "../../thread/thread-scroll-layout";
import { initToggleThreadSummaryPanel, initToggleThreadSummaryPanelAtoms, toggleThreadSummaryPanel, ToggleThreadSummaryPanel } from "../../thread/toggle-thread-summary-panel";
import { BrandedIcon } from "../../ui/branded-icon";
import { deferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH } from "../../ui/deferred-ui-h";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { ElectronOnly } from "../../ui/electron-only";
import { InsetBorderPanel } from "../../ui/inset-border-panel";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { PopoverMenu } from "../../ui/popover-menu";
import { RelativeDateStringLabel } from "../../ui/relative-date-string-label";
import { remote } from "../../ui/remote";
import { RemoteHrefIcon } from "../../ui/remote-href-icon";
import { ensureSeededAvatarInit } from "../../ui/seeded-avatar";
import { asRecord } from "../../utils/as-record";
import { coalesceTruthy } from "../../utils/coalesce-truthy";
import { codexProjectKey } from "../../utils/codex-project-key";
import { createInMemoryStorageAdapter } from "../../utils/create-in-memory-storage-adapter";
import { identity } from "../../utils/identity";
import { isNotNullish } from "../../utils/is-not-nullish";
import { nonEmptyStringOrNull } from "../../utils/non-empty-string-or-null";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { slugifyLoose } from "../../utils/slugify-loose";
import { sortedArrayFrom } from "../../utils/sorted-array-from";
import { tryParseJsonText } from "../../utils/try-parse-json-text";
import { waitForDoubleAnimationFrame } from "../../utils/wait-for-double-animation-frame";
import { ensureImportSettingsCLInit, ensureSettingsGlyphI0Init } from "../../utils/wave-as-gap-ensure-inits";
import { activateConversationSurface } from "../activate-conversation-surface";
import { BrowserConversationPanel } from "../browser-conversation-panel";
import { chatgptMessageFallbackId } from "../chatgpt-message-fallback-id";
import { initChatgptTemporaryChatUi, TemporaryChatHeaderControl, TemporaryChatOnboarding } from "../chatgpt-temporary-chat-ui/index";
import { ConversationDiffSourceBridge } from "../conversation-diff-source-bridge";
import { ensureConversationWorkRouteInit } from "../conversation-work-path";
import { deferredConversationR } from "../deferred-conversation-r";
import { fileAttachmentsFromMetadata } from "../file-attachment-from-metadata";
import { filterConversationTimelineItems } from "../filter-conversation-timeline-items";
import { isCustomAgentId } from "../is-custom-agent-id";
import { isVisuallyHiddenFromConversation } from "../is-visually-hidden-from-conversation";
import { markConversationIdle } from "../mark-conversation-idle";
import { messageContentToPlainText } from "../message-content-to-plain-text";
import { patchConversationMessage } from "../patch-conversation-message";
import { rebaseConversationId } from "../rebase-conversation-id";
import { THREAD_DETAIL_LEVEL_STEPS_PROSE } from "../thread-detail-level-ids";
import { ThreadTitleRow } from "../thread-title-row";
import { toggleConversationPinned } from "../toggle-conversation-pinned";
import { upsertConversationMessage } from "../upsert-conversation-message";
import { walkChatgptMessageTree } from "../walk-chatgpt-message-tree";

// Wave5d soft stubs.
const ReadLoginRouteQuerySnapshot: any = undefined;
const AppInitialDO: any = undefined;
const AppInitialDr: any = undefined;
const AppInitialFV: any = undefined;
const AppInitialGS: any = undefined;
const AppInitialIh: any = undefined;
const AppInitialJZ: any = undefined;
const AppInitialL: any = undefined;
const AppInitialLm: any = undefined;
const AppInitialMR: any = undefined;
const AppInitialNZ: any = undefined;
const AppInitialOS: any = undefined;
const AppInitialOZ: any = undefined;
const AppInitialRh: any = undefined;
const AppInitialUm: any = undefined;
const AppInitialWE: any = undefined;
const AppInitialWa: any = undefined;
const AppInitialYF: any = undefined;
const AppInitialYP: any = undefined;
const Remote7: any = undefined;
const _s: any = undefined;
const alpha: any = undefined;
const Alpha: any = undefined;
const bravo: any = undefined;
const Bravo: any = undefined;
const copper: any = undefined;
const Copper: any = undefined;
const delta: any = undefined;
const Delta: any = undefined;
const echo: any = undefined;
const Echo: any = undefined;
const falcon: any = undefined;
const Falcon: any = undefined;
const gamma: any = undefined;
const Gamma: any = undefined;
const harbor: any = undefined;
const Harbor: any = undefined;
const indigo: any = undefined;
const dataAppActionReviewFileExpanded: any = undefined;
const deferredUiEnt: any = undefined;
const ensureSelectWorkspaceOhInit: any = undefined;
const ensureThreadFindDiffProviderInit: any = undefined;
const ensureThreadFindStoreInit: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
const tokenInvalidated: any = undefined;
function jade(quartz) {
  let {
      isHandoffPending,
      isPinned,
      onHandoff,
      onOpenInQuickChat,
      onTogglePin,
      onToggleDebugPanel,
      serverConversationId,
      showHandoff
    } = quartz,
    river = useIntl(),
    slate = river.formatMessage({
      id: "chatgptConversations.actionsMenu",
      defaultMessage: "ChatGPT conversation actions",
      description: "Accessible label for the ChatGPT conversation actions menu"
    });
  let timber = slate,
    umbra = serverConversationId == null ? null : `https://chatgpt.com/c/${encodeURIComponent(serverConversationId)}`,
    violet = prism => {
      umbra != null && deferredUiEnt({
        event: prism,
        href: umbra,
        initiator: "open_in_browser_bridge"
      });
    };
  let willow = violet,
    xenon = <AppIconQI {...{
      className: "icon-sm"
    }} />;
  let yellow = <ReadLoginRouteQuerySnapshot {...{
    size: "icon",
    color: "ghost",
    className: "no-drag",
    "aria-label": timber,
    children: xenon
  }} />;
  let zinc = showHandoff ? <DropdownMenu.Item {...{
    disabled: onHandoff == null || isHandoffPending,
    LeftIcon: isHandoffPending ? VSCODE_EDITOR_ID : AppInitialLm,
    onSelect: onHandoff == null ? undefined : event => {
      event.preventDefault();
      onHandoff();
    },
    children: isHandoffPending ? <MemoizedFormattedMessage {...{
      id: "chatgptConversations.handoff.menuItemPending",
      defaultMessage: "Creating chat…",
      description: "Loading state shown while handing off a ChatGPT conversation to a Codex task"
    }} /> : <MemoizedFormattedMessage {...{
      id: "chatgptConversations.handoff.menuItem",
      defaultMessage: "Continue in work mode",
      description: "Menu item that continues a ChatGPT conversation in work mode"
    }} />
  }} /> : null;
  let amber = onTogglePin == null,
    basalt = isPinned ? AppIconZa : defaultHourlyScheduleConfig,
    cedar = isPinned ? conversationsSidebarMessages.unpin : conversationsSidebarMessages.pin,
    daisy = <MemoizedFormattedMessage {...{
      ...cedar
    }} />;
  let ember = <DropdownMenu.Item {...{
    disabled: amber,
    LeftIcon: basalt,
    onSelect: onTogglePin,
    children: daisy
  }} />;
  let flint = <MemoizedFormattedMessage {...{
    id: "chatgptConversations.debugPanel.menuItem",
    defaultMessage: "Debug",
    description: "Menu item that toggles the ChatGPT conversation debug panel"
  }} />;
  let garnet = <DropdownMenu.Item {...{
    LeftIcon: AppIconOH,
    onSelect: onToggleDebugPanel,
    children: flint
  }} />;
  let hazel = <MemoizedFormattedMessage {...{
    id: "chatgptConversations.openInQuickChat",
    defaultMessage: "Open in quick chat",
    description: "Menu item that opens the current ChatGPT conversation in Quick Chat"
  }} />;
  let ivory = <DropdownMenu.Item {...{
    LeftIcon: AppInitialDr,
    onSelect: onOpenInQuickChat,
    children: hazel
  }} />;
  let jasper = umbra == null,
    kelp = umbra ?? undefined,
    lotus = umbra ?? "https://chatgpt.com/",
    mint = <DropdownMenu.ItemIcon {...{
      size: "xs",
      children: <HostFeatureConfigToggles {...{
        href: lotus,
        className: "icon-xs"
      }} />
    }} />;
  let nova = <MemoizedFormattedMessage {...{
    id: "chatgptConversations.openInChatGpt",
    defaultMessage: "Open on chatgpt.com",
    description: "Menu item that opens the ChatGPT conversation on chatgpt.com"
  }} />;
  let olive = <DropdownMenu.Item {...{
    disabled: jasper,
    href: kelp,
    onClick: willow,
    children: [mint, nova]
  }} />;
  return <DropdownMenuPopover {...{
    align: "start",
    contentWidth: "menu",
    triggerButton: yellow,
    children: [zinc, ember, garnet, ivory, olive]
  }} />;
}
var kite, lemon, $, marble, nickel, onyx, pearl;
esmInit(() => {
  kite = reactCompilerRuntime();
  serializeCharacterReferenceNode();
  ensureComposerEsm_MT_Init();
  lemon = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureComposerEsm_P5_Init();
  MEMORIES_ID();
  AppInitialOZ();
  ensureSettingsGlyphI0Init();
  ensureConversationPageEsm_B0_Init();
  ensureSettingsQueryAtomsInit();
  ensureDropdownMenuInit();
  ensureComposerEsm_Qtt_Init();
  ensureConversationPageEsm_B0_Init();
  collectUniqueMappedPresenceEntries();
  AppInitialL();
  ensureConversationPageEsm_Jj_Init();
  ensureComposerEsm_Sut_Init();
  ensureComposerEsm_Ilt_Init();
  ensureComposerEsm_Hlt_Init();
  ensureComposerEsm_K1_Init();
  CodexBrowserProfileImportCookieStatus();
  ensureThreadFindDiffProviderInit();
  AppInitialRh();
  AppInitialIh();
  ensureThreadFindStoreInit();
  conversationSourceU();
  ensureConversationPageEsm_Lo_Init();
  tokenInvalidated();
  deferredConversationR();
  setRightPanelConversation();
  normalizeCronScheduleFields();
  ensureCodexSpriteAssetsInit();
  AppInitialDO();
  AppInitialNZ();
  AppInitialJZ();
  AppInitialUm();
  isRemoteControlConnectionFailedError();
  ensureConversationPageEsm_Qa_Init();
  ensureComposerEsm_M0_Init();
  conversationSourceL();
  findSidebarSectionElement();
  AppInitialGS();
  ensureAppScopeInit();
  filterConversationTimelineItems();
  ensureComposerEsm_F7_Init();
  ensureAppShellAtomsInit();
  InsetBorderPanel();
  AppInitialWa();
  REMOTE_CONTROL_PAIRING_FEATURE_GATE_ID();
  Remote7();
  ensureHasSeenRealtimeVoiceNuxAtomInit();
  ensureSelectWorkspaceOhInit();
  ThreadPanelToggleButton();
  AppInitialFV();
  initThreadScrollLayout();
  AppInitialWE();
  conversationSourceR();
  dataAppActionReviewFileExpanded();
  AppInitialMR();
  ensureComposerEsm_ML_Init();
  ensureDropdownMenuPopoverInit();
  useChatgptComposerControllerR();
  useChatgptComposerControllerF();
  ensureConversationPageEsm_GS_Init();
  chatgptConversationFlagsAtom();
  ensureComposerEsm_TI_Init();
  copper();
  AppInitialYP();
  bravo();
  AppInitialOS();
  chatgptConversationLoadQueryAtom();
  markConversationIdle();
  useChatgptComposerControllerN();
  useChatgptComposerControllerA();
  delta();
  AppInitialYF();
  echo();
  falcon();
  useChatgptComposerControllerU();
  _s();
  gamma();
  useChatgptComposerControllerS();
  CodexBrowserProfileImportPasswordStatus();
  _useChatgptComposerControllerC();
  TemporaryChatOnboarding();
  ensureComposerEsm_BI_Init();
  harbor();
  indigo();
  _useChatgptComposerControllerI();
  ensureComposerEsm_XP_Init();
  ensureComposerEsm_BF_Init();
  ensureConversationPageEsm_Mx_Init();
  ensureMemoryScopeHelpersInit();
  useChatgptComposerControllerT();
  ensureConversationWorkRouteInit();
  marble = "data-chatgpt-conversation-selection-target";
  nickel = `[${marble}]`;
  onyx = clearActiveOverlayAfterNavigate(appScopeAtom, (quill, {
    get
  }) => get(isIterateeCall, {
    enabled: true,
    threadKeys: get(visibleRemoteControlConnections)
  }).groups.find(item => item.projectKind === "local" && item.projectId === quill) ?? null);
  useChatgptComposerControllerC(alpha);
  pearl = identity({
    share: {
      id: "chatgptConversations.share",
      defaultMessage: "Share",
      description: "Button label that opens the ChatGPT conversation share dialog"
    },
    shareDisabledNotReady: {
      id: "chatgptConversations.shareDisabled.notReady",
      defaultMessage: "Load the conversation before sharing",
      description: "Tooltip for a disabled ChatGPT conversation share action before the conversation is ready"
    },
    shareDisabledStreaming: {
      id: "chatgptConversations.shareDisabled.streaming",
      defaultMessage: "Wait for ChatGPT to finish responding",
      description: "Tooltip for a disabled ChatGPT conversation share action while the response is still streaming"
    },
    toggleSidePanel: {
      id: "chatgptConversations.sidePanel.toggle",
      defaultMessage: "Toggle side panel",
      description: "Toggles the ChatGPT conversation side panel"
    }
  });
})();
