// Restored from ref/webview/assets/chatgpt-conversation-page-Bq7nUgvB.js
// Wave FZ — full polished body from `chatgpt-conversation-page-Bq7nUgvB/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 83 (verified 274/356).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 10/11
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
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { chatgptConversationBranchAtom, chatgptConversationFlagsAtom, chatgptConversationLoadQueryAtom, chatgptConversationPreviewAtom, chatgptConversationServerIdAtom, chatgptConversationsGateAtom, chatgptConversationStatusAtom, chatgptConversationTitleAtom, chatgptThreadDerivedAtomBP, useStepsProseAtom, writingBlocksControllerAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_AG_Init, ensureComposerEsm_BF_Init, ensureComposerEsm_BI_Init, ensureComposerEsm_F7_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_II_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_J0_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_KF_Init, ensureComposerEsm_M0_Init, ensureComposerEsm_MF_Init, ensureComposerEsm_ML_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_S8_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_TI_Init, ensureComposerEsm_XP_Init, ensureComposerEsm_Ytt_Init, ensureComposerEsm_ZI_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_A0_Init, ensureConversationPageEsm_Act_Init, ensureConversationPageEsm_B0_Init, ensureConversationPageEsm_FR_Init, ensureConversationPageEsm_GS_Init, ensureConversationPageEsm_GZ_Init, ensureConversationPageEsm_Ist_Init, ensureConversationPageEsm_Jj_Init, ensureConversationPageEsm_Lo_Init, ensureConversationPageEsm_Mx_Init, ensureConversationPageEsm_Qa_Init, ensureConversationPageEsm_SP_Init, ensureConversationPageEsm_TP_Init } from "../../conversation/conversation-page-esm-inits";
import { useConversationFindHighlight } from "../conversation-source";
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
const ConversationSourceC: any = undefined;
const EnsureComposerEsm_J0_Init: any = undefined;
const InitThreadPanelToggleButton: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const UseChatgptComposerControllerP: any = undefined;
const AppInitialGL: any = undefined;
const AppInitialPV: any = undefined;
const AppInitialTT: any = undefined;
const AppInitialUO: any = undefined;
const AppInitialVF: any = undefined;
const chatProcessRegister: any = undefined;
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
const deferredConversationF83: any = undefined;
const os: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
function harbor(slate) {
  return !slate;
}
function indigo() {}
function jade(timber) {
  let {
      projectIcon,
      projectId,
      projectName
    } = timber,
    umbra = CodexBrowserSurfaceActionType(falcon, projectId);
  return umbra == null ? <ThreadTitleRow {...{
    projectIcon,
    projectLabel: projectName,
    sections: []
  }} /> : <ProjectHoverCardBody {...{
    group: umbra
  }} />;
}
function kite({
  contentX,
  conversationId,
  conversationLoadingLabel,
  entries,
  errorMessage,
  hasLoadError,
  hasRenderableTurns,
  isConversationLoading,
  disableSubmitForActiveTppTurn,
  isTemporaryChat,
  scrollStateConversationId,
  showPendingLoadingMessage,
  onAddSelectedText
}) {
  let violet = CodexPluginActionType(ensureComposerEsm_S8_Init),
    willow = copper.useRef(null),
    xenon = copper.useRef(null),
    yellow = copper.useRef(entries);
  yellow.current = entries;
  let [zinc, amber] = copper.useState(null),
    [basalt] = copper.useState(() => violet.get(AppInitialVF, scrollStateConversationId)),
    cedar = useEventCallback(garnet => {
      violet.set(AppInitialVF, scrollStateConversationId, Math.max(0, garnet - (zinc?.getHeightPx() ?? 0)));
    }),
    daisy = useEventCallback(hazel => {
      xenon.current = hazel;
    }),
    ember = copper.useMemo(() => ({
      scrollToTurn: async (ivory, jasper) => {
        if (jasper?.signal?.aborted) return;
        let kelp = xenon.current;
        if (kelp == null) throw Error("ChatGPT conversation search scroll requested before VirtualizedTurnList API was ready");
        await kelp.scrollToKey(ivory);
        !jasper?.signal?.aborted && (await waitForDoubleAnimationFrame());
      },
      getTurnContainer: lotus => willow.current?.querySelector(`[data-content-search-turn-key="${lotus}"]`) ?? null
    }), []),
    flint = copper.useMemo(() => bravo({
      getTurns: () => yellow.current,
      routeContextId: `chatgpt:${conversationId}`,
      scrollAdapter: ember
    }), [conversationId, ember]);
  return useConversationFindHighlight({
    containerRef: willow,
    contextId: flint.contextId
  }), <>
        {isConversationLoading ? null : <ConversationDiffSourceBridge conversationSource={flint} />}
        {<ThreadScrollLayout {...{
      contentX,
      initialOffset: basalt,
      onScroll: cedar,
      footer: <Alpha key={conversationId} {...{
        conversationId,
        disableSubmitForActiveTppTurn,
        isTemporaryChat,
        responseSpacerState: zinc
      }} />,
      children: [<div {...{
        ref: willow,
        [delta]: "true",
        className: "flex min-h-full flex-1 flex-col gap-1.5 py-5",
        "data-thread-find-target": "conversation",
        onFocusCapture: () => {
          setRightPanelConversation(violet, "conversation");
        },
        onMouseDownCapture: () => {
          setRightPanelConversation(violet, "conversation");
        },
        children: [hasLoadError ? <div className="rounded-xl border border-token-border-default bg-token-bg-secondary p-4 text-sm text-token-foreground">
                          {<MemoizedFormattedMessage {...{
            id: "chatgptConversations.loadError",
            defaultMessage: "Could not load this ChatGPT conversation",
            description: "Error state when a ChatGPT conversation fetch fails"
          }} />}
                        </div> : isConversationLoading ? <div aria-busy="true" aria-label={conversationLoadingLabel} className="relative min-h-0 flex-1" role="status">
                          {<EnsureComposerEsm_J0_Init {...{
            debugName: "ChatGptConversationPage",
            fillParent: true
          }} />}
                        </div> : hasRenderableTurns ? <Bravo {...{
          entries,
          onApiChange: daisy,
          responseSpacerState: zinc
        }} /> : <div className="rounded-xl border border-token-border-default bg-token-bg-secondary p-4 text-sm text-token-description-foreground">
                          {<MemoizedFormattedMessage {...{
            id: "chatgptConversations.emptyConversation",
            defaultMessage: "No renderable ChatGPT messages were found in this conversation",
            description: "Empty state when a ChatGPT conversation has no user or assistant text messages"
          }} />}
                        </div>, hasRenderableTurns ? null : <Copper {...{
          errorMessage,
          showPendingLoadingMessage
        }} />, <Delta {...{
          onResponseSpacerStateChange: amber
        }} />]
      }} />, <AppInitialGL targetSelector={echo}>
                  {({
          selectedText
        }) => <SelectedTextOverlay {...{
          conversationTerminology: "chat",
          selectedText,
          onAddSelectedText
        }} />}
                </AppInitialGL>]
    }} />}
      </>;
}
function lemon(mint) {
  let {
      entries,
      onApiChange,
      responseSpacerState
    } = mint,
    nova = responseSpacerState?.getHeightPx;
  return <ConversationSourceC {...{
    entries,
    gapPx: 6,
    getBottomScrollPaddingPx: nova,
    onApiChange,
    preserveMeasuredTurnViewport: true,
    RowComponent: marble
  }} />;
}
function marble(olive) {
  let {
      entry
    } = olive,
    prism = <_useChatgptComposerControllerL {...{
      browserConversationId: entry.browserConversationId,
      conversationId: entry.conversationId,
      branchingMessageId: entry.branchingMessageId,
      hostId: LOCAL_HOST_ID,
      isMostRecentTurn: entry.isMostRecentTurn,
      onEditLatestUserMessage: entry.onEditLatestUserMessage,
      onFork: entry.onFork,
      safetyReview: entry.safetyReview,
      turn: entry.turn,
      turnId: entry.id
    }} />;
  let quill = entry.isMostRecentTurn ? <Copper {...{
    errorMessage: entry.errorMessage,
    showPendingLoadingMessage: entry.showPendingLoadingMessage
  }} /> : null;
  return <div className="flex flex-col gap-1.5" data-content-search-turn-key={entry.turnKey}>
      {prism}
      {quill}
    </div>;
}
function nickel(reef) {
  let {
      errorMessage,
      showPendingLoadingMessage
    } = reef,
    sage = showPendingLoadingMessage ? <_useChatgptComposerControllerS {...{}} /> : null;
  let topaz = errorMessage == null ? null : <div className="rounded-xl border border-token-charts-red/30 bg-token-charts-red/10 p-4 text-sm text-token-foreground">
        {errorMessage}
      </div>;
  return <>
      {sage}
      {topaz}
    </>;
}
function onyx(ultra) {
  let {
      conversationId
    } = ultra,
    vapor = CodexPluginActionType(ensureComposerEsm_S8_Init),
    wheat = useIntl(),
    yarn = CodexPluginActionResult(ensureComposerEsm_M0_Init),
    zephyr = () => {
      if (yarn) {
        AppInitialPV(vapor);
        return;
      }
      if (vapor.get(ensureConversationPageEsm_A0_Init.tabs$).length === 0) {
        vapor.get(ensureComposerEsm_J0_Init) && ensureAppActionPayloadSchemasInit.dispatchHostMessage({
          type: "toggle-browser-panel",
          open: true,
          source: "manual",
          initiator: "side_panel_menu"
        });
        return;
      }
      openRightPanel(vapor, {
        activateFallbackTab: true
      });
    };
  let acorn = zephyr,
    bloom = <Echo {...{
      conversationId
    }} />;
  let coral = <AppIconAZ.RightPanelOutlet {...{
    children: <AppIconAZ.RightPanelTabs {...{}} />
  }} />;
  let drift = wheat.formatMessage(gamma.toggleSidePanel);
  let eagle = yarn ? <AppIconAZ className="icon-xs rotate-180" /> : <AppIconMZ {...{
    className: "icon-xs rotate-180"
  }} />;
  let frost = <AppIconAZ.HeaderAction {...{
    actionId: "chatgpt-conversation-side-panel",
    align: "end",
    order: 300,
    slotPosition: "right",
    children: <InitThreadPanelToggleButton {...{
      label: drift,
      pressed: yarn,
      onClick: acorn,
      children: eagle
    }} />
  }} />;
  return <>
      {bloom}
      {coral}
      {frost}
    </>;
}
function pearl(glide) {
  let {
      conversationId
    } = glide,
    honey = useIntl(),
    iris = CodexPluginActionResult(ensureConversationPageEsm_A0_Init.tabs$),
    jewel = honey.formatMessage({
      id: "chatgptConversations.sidePanel.emptyBrowserTab",
      defaultMessage: "New tab",
      description: "Title for an empty browser tab in the ChatGPT conversation side panel"
    });
  let knoll = jewel,
    lunar;
  {
    let moss;
    moss = north => {
      let orbit = deferredConversationF83(north, conversationId);
      return orbit == null ? null : <BrowserConversationPanel key={north.tabId} browserTabId={orbit} browserConversationId={conversationId} browserTabFallbackTitle={knoll} />;
    };
    lunar = iris.map(moss);
  }
  return <>{lunar}</>;
}
function quartz(pine) {
  let quest = {
    conversationId: pine.conversationId
  };
  let ridge = _useChatgptComposerControllerN(quest),
    storm = CodexBrowserSurfaceActionType(useChatgptComposerControllerI, pine.conversationId),
    tide = CodexBrowserSurfaceActionType(isCustomAgentId, pine.conversationId);
  return storm == null || tide ? <AppInitialTT>
      {<ProjectMarkerIcon {...{
      composerController: ridge,
      conversationId: pine.conversationId,
      disableSubmit: pine.disableSubmitForActiveTppTurn,
      isTemporaryChat: pine.isTemporaryChat,
      onSubmitAccepted: pine.responseSpacerState?.place,
      onSubmitError: pine.responseSpacerState?.clear
    }} />}
    </AppInitialTT> : <UseChatgptComposerControllerP {...{
    conversationId: pine.conversationId,
    isTemporaryChat: pine.isTemporaryChat,
    onContinueSuccess: undefined,
    request: storm
  }} />;
}
function river(unity) {
  let {
      currentNodeId,
      isStreaming,
      serverConversationId,
      title
    } = unity,
    vale = CodexPluginActionType(appScopeAtom),
    wave = useIntl(),
    apex = wave.formatMessage(gamma.share);
  let brook = apex,
    cliff = null;
  if (isStreaming) {
    let lagoon;
    lagoon = wave.formatMessage(gamma.shareDisabledStreaming);
    cliff = lagoon;
  } else if (serverConversationId == null || currentNodeId == null) {
    let meadow;
    meadow = wave.formatMessage(gamma.shareDisabledNotReady);
    cliff = meadow;
  }
  let dusk = () => {
    serverConversationId == null || currentNodeId == null || chatProcessRegister(vale, os, {
      currentNodeId,
      serverConversationId,
      title
    });
  };
  let elm = dusk,
    fern = cliff ?? brook,
    grove = cliff != null,
    hill = <AppInitialUO aria-hidden={true} className="icon-xs" />;
  let isle = <span className="hidden electron:inline">
      {<MemoizedFormattedMessage {...{
      ...gamma.share
    }} />}
    </span>;
  let juniper = <ReadLoginRouteQuerySnapshot {...{
    "aria-label": brook,
    className: "enabled:text-token-text-primary enabled:hover:text-token-text-primary",
    color: "ghost",
    disabled: grove,
    size: "toolbar",
    onClick: elm,
    children: [hill, isle]
  }} />;
  return <OptionalTooltip {...{
    tooltipContent: fern,
    children: juniper
  }} />;
}
