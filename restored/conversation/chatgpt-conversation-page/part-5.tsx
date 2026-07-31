// Restored from ref/webview/assets/chatgpt-conversation-page-Bq7nUgvB.js
// Wave FZ — full polished body from `chatgpt-conversation-page-Bq7nUgvB/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 83 (verified 274/356).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 5/11
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
import {
  summaryPanelDisplayAtom,
  useSummaryPanelDisplaySync,
} from "../conversation-source";
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
const Harbor: any = undefined;
const InitToggleThreadSummaryPanel: any = undefined;
const AppInitialXF: any = undefined;
const AppInitialYP: any = undefined;
const IntlProvider: any = undefined;
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
const deferredUiE1: any = undefined;
const ensureSelectWorkspaceDhInit: any = undefined;
function harbor({
  currentNode,
  mapping,
  messageId
}) {
  if (mapping == null) return null;
  let yellow = walkChatgptMessageTree({
    current_node: currentNode,
    mapping
  }).reverse().find(item => item.author.role === "user" && !isVisuallyHiddenFromConversation(item));
  if (yellow == null || chatgptMessageFallbackId(yellow) !== messageId) return null;
  let zinc = Object.values(mapping).find(item => item.message === yellow)?.parent;
  if (zinc == null) return null;
  let amber = asRecord(yellow.metadata);
  return nonEmptyStringOrNull(amber?.targeted_reply) != null || nonEmptyStringOrNull(amber?.targeted_reply_label) != null ? null : {
    message: yellow,
    parentMessageId: zinc
  };
}
function indigo(basalt) {
  return CHATGPT_CONTENT_REFERENCE_ID(asRecord(basalt.metadata)?.system_hints).filter(item => item === "search" || item === "picture_v2" || isCustomAgentId(item));
}
var _s = esmInit(() => {
  AppInitialYP();
  AppInitialXF();
  ensureConversationPageEsm_SP_Init();
  ensureComposerEsm_XP_Init();
  ensureComposerEsm_BF_Init();
  upsertConversationMessage();
});
function jade(cedar) {
  let {
      conversationId
    } = cedar,
    daisy = CodexPluginActionType(ensureComposerEsm_S8_Init),
    ember = IntlProvider(ensureSelectWorkspaceDhInit, "relative flex min-h-full flex-col pb-8");
  let flint = ensureDebugPanelParsersInit(daisy.value);
  return <ConversationDiffSourceBridge {...{
    header: null,
    children: <div className="[container-type:inline-size] h-full flex-1 overflow-y-auto pt-(--thread-content-top-inset) [container-name:thread-content] electron:[scrollbar-gutter:stable_both-edges]">
            <div className={ember}>
              {<_useChatgptComposerControllerA {...{
          browserConversationId: flint,
          conversationId
        }} />}
            </div>
          </div>
  }} />;
}
var kite,
  lemon,
  marble = esmInit(() => {
    kite = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureComposerEsm_MT_Init();
    filterConversationTimelineItems();
    ensureHasSeenRealtimeVoiceNuxAtomInit();
    _useChatgptComposerControllerO();
  }),
  nickel,
  onyx,
  pearl = esmInit(() => {
    react();
    onyx = garnet => <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" viewBox="0 0 20 20" {...garnet}>
        <path d="M10 2.085a7.915 7.915 0 1 1 0 15.83 7.915 7.915 0 0 1 0-15.83Z" />
      </svg>;
  });
function quartz(hazel) {
  let {
      conversationId,
      data,
      display,
      shouldBlockExternalEgress
    } = hazel,
    ivory = <Alpha {...{
      conversationId,
      data,
      shouldBlockExternalEgress
    }} />;
  return <PopoverMenu.Root {...{
    shouldHideInlineImmediately: display.shouldHideInlineImmediately,
    shouldShow: display.shouldShow,
    children: ivory
  }} />;
}
function river(jasper) {
  let {
      conversationId,
      data,
      shouldBlockExternalEgress
    } = jasper,
    kelp = CodexPluginActionType(ensureComposerEsm_S8_Init),
    lotus = useIntl(),
    {
      isPinned
    } = CodexBrowserSurfaceActionType(shellPanelPinnedDerivedAtom, true),
    mint = CodexPluginActionResult(summaryPanelDisplayAtom),
    nova = CodexBrowserSurfaceActionType(deferredUiE1, "togglePinnedSummary");
  useSummaryPanelDisplaySync(kelp);
  let olive;
  olive = () => {
    toggleThreadSummaryPanel(kelp);
  };
  ContextMenuRegistration("togglePinnedSummary", olive);
  return <AppIconAZ.HeaderAction {...{
    actionId: "chatgpt-thread-summary-panel-toggle",
    align: "end",
    order: 250,
    children: mint.displayMode === "overlay" ? <InitToggleThreadSummaryPanel {...{
      isOpen: mint.isPopoverOpen,
      onOpenChange: prism => {
        kelp.set(summaryPanelDisplayAtom, quill => quill.displayMode !== "overlay" || quill.isPopoverOpen === prism ? quill : {
          ...quill,
          isPopoverOpen: prism
        });
      },
      trigger: <PopoverMenu.HeaderButton {...{
        label: lotus.formatMessage({
          id: "chatgptConversations.summaryPanel.toggle",
          defaultMessage: "Toggle summary",
          description: "Button label for toggling the ChatGPT summary panel"
        }),
        pressed: mint.isPopoverOpen,
        shortcut: nova
      }} />,
      children: <PopoverMenu.PopoverContent {...{
        children: <Alpha {...{
          conversationId,
          data,
          shouldBlockExternalEgress
        }} />
      }} />
    }} /> : <PopoverMenu.HeaderButton {...{
      label: lotus.formatMessage({
        id: "chatgptConversations.summaryPanel.togglePinned",
        defaultMessage: "Toggle pinned summary",
        description: "Button label for toggling whether the ChatGPT summary panel reserves layout space"
      }),
      pressed: isPinned,
      shortcut: nova,
      onClick: () => toggleThreadSummaryPanel(kelp)
    }} />
  }} />;
}
function slate(reef) {
  let {
      conversationId,
      data,
      shouldBlockExternalEgress
    } = reef,
    sage = data.sources.filter(umbra);
  let topaz = sage,
    ultra = data.sources.filter(timber);
  let vapor = ultra,
    wheat = topaz.length + vapor.length,
    yarn = data.progressSteps.length > 0 ? <PopoverMenu.Section {...{
      sectionKey: "chatgpt-progress",
      title: <MemoizedFormattedMessage {...{
        id: "chatgptConversations.summaryPanel.progress.title",
        defaultMessage: "Progress",
        description: "Section title in the Work task details panel for the task's current plan steps."
      }} />,
      titleSuffix: <PopoverMenu.SectionCount {...{
        count: data.progressSteps.length
      }} />,
      children: <Bravo {...{
        steps: data.progressSteps
      }} />
    }} /> : null;
  let zephyr = data.outputs.length > 0 ? <PopoverMenu.Section {...{
    sectionKey: "chatgpt-outputs",
    title: <MemoizedFormattedMessage {...{
      id: "chatgptConversations.summaryPanel.outputs.title",
      defaultMessage: "Outputs",
      description: "Section title in the Work task details panel for files and images generated by the task."
    }} />,
    titleSuffix: <PopoverMenu.SectionCount {...{
      count: data.outputs.length
    }} />,
    children: <Copper {...{
      conversationId,
      outputs: data.outputs,
      shouldBlockExternalEgress
    }} />
  }} /> : null;
  let acorn = <MemoizedFormattedMessage {...{
    ...gamma.sources
  }} />;
  let bloom = <PopoverMenu.SectionCount {...{
    count: wheat
  }} />;
  let coral = <Delta {...{
    pluginSources: vapor,
    shouldBlockExternalEgress,
    webSources: topaz
  }} />;
  let drift = <PopoverMenu.Section {...{
    sectionKey: "chatgpt-sources",
    title: acorn,
    titleSuffix: bloom,
    children: coral
  }} />;
  let eagle = data.inputs.length > 0 ? <PopoverMenu.Section {...{
    sectionKey: "chatgpt-inputs",
    title: <MemoizedFormattedMessage {...{
      id: "chatgptConversations.summaryPanel.inputs.title",
      defaultMessage: "Inputs",
      description: "Section title in the Work task details panel for files supplied to the task."
    }} />,
    titleSuffix: <PopoverMenu.SectionCount {...{
      count: data.inputs.length
    }} />,
    children: <Echo {...{
      conversationId,
      files: data.inputs,
      shouldBlockExternalEgress
    }} />
  }} /> : null;
  let frost = data.subagents.length > 0 ? <PopoverMenu.Section {...{
    sectionKey: "chatgpt-subagents",
    title: <MemoizedFormattedMessage {...{
      id: "chatgptConversations.summaryPanel.subagents.title",
      defaultMessage: "Subagents",
      description: "Section title in the Work task details panel for delegated agents working on the task."
    }} />,
    titleSuffix: <PopoverMenu.SectionCount {...{
      count: data.subagents.length
    }} />,
    children: <Falcon {...{
      conversationId,
      subagents: data.subagents
    }} />
  }} /> : null;
  return <PopoverMenu.Content {...{
    children: [yarn, zephyr, drift, eagle, frost]
  }} />;
}
function timber(glide) {
  return glide.kind === "plugin";
}
function umbra(honey) {
  return honey.kind === "web" && NavigationAllowContext(honey.url) != null;
}
function violet(iris) {
  let {
      pluginSources,
      shouldBlockExternalEgress,
      webSources
    } = iris,
    jewel = useIntl(),
    knoll = jewel.formatMessage(gamma.sources);
  let lunar = knoll;
  if (webSources.length === 0 && pluginSources.length === 0) {
    let orbit;
    return <div className="py-1 text-base text-token-description-foreground">
        {<MemoizedFormattedMessage {...{
        id: "chatgptConversations.summaryPanel.sources.empty",
        defaultMessage: "No sources yet",
        description: "Empty state for the sources section in the ChatGPT summary panel"
      }} />}
      </div>;
  }
  let moss = webSources.length > 0 ? <ul aria-label={lunar} className="-ml-1 flex w-full flex-wrap gap-0.5">
        {webSources.map(item => {
      let pine = NavigationAllowContext(item.url);
      if (pine == null) return null;
      let quest = item.title ?? item.label;
      return <li key={item.key} className="flex">
              {<OptionalTooltip {...{
          tooltipContent: quest,
          side: "left",
          children: <Gamma {...{
            href: pine,
            label: quest,
            shouldBlockExternalEgress,
            source: item
          }} />
        }} />}
            </li>;
    })}
      </ul> : null;
  let north = pluginSources.length > 0 ? <PopoverMenu.List {...{
    items: pluginSources,
    getKey: js,
    listAriaLabel: lunar,
    children: ridge => <Harbor {...{
      shouldBlockExternalEgress,
      source: ridge
    }} />
  }} /> : null;
  return <>
      {moss}
      {north}
    </>;
}
function js(event) {
  return event.key;
}
function willow(storm) {
  let {
      href,
      label,
      shouldBlockExternalEgress,
      source
    } = storm,
    tide = !shouldBlockExternalEgress,
    unity = <RemoteHrefIcon href={href} className="icon-xs shrink-0 overflow-hidden rounded-[22%]" loadRemote={tide} />;
  return <RelativeDateStringLabel aria-label={label} className="flex size-6 shrink-0 cursor-interaction items-center justify-center rounded-sm text-token-text-secondary hover:bg-token-list-hover-background hover:text-token-foreground" href={href} initiator="markdown_link_click" requiresConfirmation={shouldBlockExternalEgress} title={source.url}>
      {unity}
    </RelativeDateStringLabel>;
}
function xenon(vale) {
  let {
    steps
  } = vale;
  return <PopoverMenu.List {...{
    items: steps,
    getKey: bravo,
    children: alpha
  }} />;
}
