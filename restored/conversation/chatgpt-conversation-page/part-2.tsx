// Restored from ref/webview/assets/chatgpt-conversation-page-Bq7nUgvB.js
// Wave FZ — full polished body from `chatgpt-conversation-page-Bq7nUgvB/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 83 (verified 274/356).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 2/11
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
import { _useChatgptComposerControllerA, _useChatgptComposerControllerC, _useChatgptComposerControllerD, _useChatgptComposerControllerF, _useChatgptComposerControllerI, _useChatgptComposerControllerL, _useChatgptComposerControllerM, _useChatgptComposerControllerN, _useChatgptComposerControllerO, _useChatgptComposerControllerP, _useChatgptComposerControllerR, _useChatgptComposerControllerS, useChatgptComposerControllerA, useChatgptComposerControllerC, useChatgptComposerControllerD, useChatgptComposerControllerE, useChatgptComposerControllerF, useChatgptComposerControllerG, useChatgptComposerControllerH, useChatgptComposerControllerI, useChatgptComposerControllerJ, useChatgptComposerControllerK, useChatgptComposerControllerL, useChatgptComposerControllerM, useChatgptComposerControllerN, useChatgptComposerControllerO, useChatgptComposerControllerP, useChatgptComposerControllerR, useChatgptComposerControllerS, useChatgptComposerControllerT, useChatgptComposerControllerU, useChatgptComposerControllerUnderscore } from "../../boundaries/use-chatgpt-composer-controller/index";
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
const Chatgpt2: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const AppInitialDF: any = undefined;
const AppInitialFF: any = undefined;
const AppInitialPF: any = undefined;
const IntlProvider: any = undefined;
const alpha: any = undefined;
const Alpha: any = undefined;
const bravo: any = undefined;
const Bravo: any = undefined;
const copper: any = undefined;
const Copper: any = undefined;
const delta: any = undefined;
const Delta: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
const useFloatingWindowPointerDragT: any = undefined;
function echo(xenon) {
  let {
      conversation,
      conversationId,
      onClose
    } = xenon,
    yellow = useFloatingWindowPointerDrag(),
    zinc = useIntl(),
    [amber, basalt] = river.useState(lemon),
    [cedar, daisy] = river.useState(kite),
    [ember, flint] = river.useState(0),
    [garnet, hazel] = river.useState(jade),
    ivory = conversation == null ? null : walkChatgptMessageTree(conversation),
    jasper = ivory?.length ?? 0,
    kelp = ivory?.[ember] == null ? 0 : ember,
    lotus = ivory?.[kelp] ?? null,
    mint = zinc.formatMessage({
      id: "chatgptConversations.debugPanel.label",
      defaultMessage: "Debug",
      description: "Accessible label for the ChatGPT conversation debug panel"
    });
  let nova = mint,
    olive,
    prism;
  olive = () => {
    let storm = () => {
      let tide = marble();
      basalt(tide);
      daisy(unity => clampFloatingWindowRect(unity, tide));
    };
    return window.addEventListener("resize", storm), () => {
      window.removeEventListener("resize", storm);
    };
  };
  prism = [];
  river.useEffect(olive, prism);
  let quill;
  quill = [];
  river.useEffect(indigo, quill);
  let reef = () => {
      ivory != null && alpha({
        conversation: {
          conversation_id: conversationId,
          messages: ivory
        },
        conversationId
      });
    },
    sage = () => {
      hazel(AppInitialPF());
    };
  let topaz = sage,
    ultra = () => {
      let vale = AppInitialFF();
      hazel(vale.entries.length);
      alpha({
        conversation: vale,
        conversationId: "stream-trace"
      });
    };
  let vapor = ultra,
    wheat = () => {
      AppInitialDF();
      hazel(0);
    };
  let yarn = wheat,
    zephyr = wave => {
      daisy(apex => clampFloatingWindowRect({
        ...apex,
        x: apex.x + wave.x,
        y: apex.y + wave.y
      }, amber));
    };
  let acorn = zephyr,
    bloom = brook => {
      daisy(cliff => resizeFloatingWindowRect(cliff, brook, amber));
    };
  let coral = bloom,
    drift = {
      height: cedar.height,
      left: cedar.x,
      top: cedar.y,
      width: cedar.width
    };
  let eagle = dusk => {
    yellow(dusk, acorn);
  };
  let frost = <div className="min-w-0">
      <h2 className="min-w-0 truncate text-sm font-semibold">
        {<MemoizedFormattedMessage {...{
        id: "chatgptConversations.debugPanel.title",
        defaultMessage: "Conversation",
        description: "Title for the ChatGPT conversation debug panel"
      }} />}
      </h2>
    </div>;
  let glide = <MemoizedFormattedMessage {...{
    id: "chatgptConversations.debugPanel.downloadMessages",
    defaultMessage: "Download messages",
    description: "Button label that downloads the inspected ChatGPT conversation messages JSON"
  }} />;
  let honey = zinc.formatMessage({
    id: "chatgptConversations.debugPanel.close",
    defaultMessage: "Close debug panel",
    description: "Accessible label for closing the ChatGPT conversation debug panel"
  });
  let iris = <Chatgpt2 {...{
    "aria-hidden": true,
    className: "icon-xs"
  }} />;
  let jewel = <ReadLoginRouteQuerySnapshot {...{
    "aria-label": honey,
    color: "ghost",
    size: "icon",
    onPointerDown: gamma,
    onClick: onClose,
    children: iris
  }} />;
  let knoll = <span className="mr-auto text-token-text-tertiary">
      {<MemoizedFormattedMessage {...{
      id: "chatgptConversations.debugPanel.traceBuffer",
      defaultMessage: "Trace buffer: {count, plural, one {# snapshot} other {# snapshots}}",
      description: "Count of ChatGPT conversation stream trace snapshots captured while the debug panel is open",
      values: {
        count: garnet
      }
    }} />}
    </span>;
  let lunar = <ReadLoginRouteQuerySnapshot {...{
    className: "text-xs",
    color: "secondary",
    size: "default",
    onClick: topaz,
    children: <MemoizedFormattedMessage {...{
      id: "chatgptConversations.debugPanel.refreshTrace",
      defaultMessage: "Refresh trace",
      description: "Button label that refreshes the ChatGPT conversation stream trace count"
    }} />
  }} />;
  let moss = <ReadLoginRouteQuerySnapshot {...{
    className: "text-xs",
    color: "secondary",
    size: "default",
    onClick: vapor,
    children: <MemoizedFormattedMessage {...{
      id: "chatgptConversations.debugPanel.downloadTrace",
      defaultMessage: "Download trace",
      description: "Button label that downloads the ChatGPT conversation stream trace JSON"
    }} />
  }} />;
  let north = <ReadLoginRouteQuerySnapshot {...{
    className: "text-xs",
    color: "ghost",
    size: "default",
    onClick: yarn,
    children: <MemoizedFormattedMessage {...{
      id: "chatgptConversations.debugPanel.clearTrace",
      defaultMessage: "Clear trace",
      description: "Button label that clears the ChatGPT conversation stream trace buffer"
    }} />
  }} />;
  let orbit = <div className="flex shrink-0 flex-wrap items-center gap-2 border-b border-token-border-light px-3 py-2 text-xs">
      {knoll}
      {lunar}
      {moss}
      {north}
    </div>;
  let pine = zinc.formatMessage({
    id: "chatgptConversations.debugPanel.resize",
    defaultMessage: "Resize debug panel",
    description: "Accessible label for resizing the ChatGPT conversation debug panel"
  });
  let quest = elm => {
    yellow(elm, coral);
  };
  let ridge;
  return ridge = <button aria-label={pine} className="absolute right-0 bottom-0 h-4 w-4 cursor-se-resize" type="button" onPointerDown={quest} />, <aside aria-label={nova} className="fixed z-50 flex flex-col overflow-hidden rounded-xl bg-token-dropdown-background/90 text-token-foreground shadow-lg ring-[0.5px] ring-token-border backdrop-blur-xl" style={drift}>
        <div className="grid h-toolbar-sm shrink-0 cursor-move grid-cols-[1fr_auto] items-center gap-2 border-b border-token-border-light px-3 text-token-text-primary select-none" onPointerDown={eagle}>
          {frost}
          <div className="no-drag flex items-center gap-1">
            {<ReadLoginRouteQuerySnapshot {...{
          className: "text-xs",
          color: "secondary",
          disabled: jasper === 0,
          size: "default",
          onPointerDown: harbor,
          onClick: reef,
          children: glide
        }} />}
            {jewel}
          </div>
        </div>
        {orbit}
        {ivory == null || ivory.length === 0 ? <div className="flex min-h-0 flex-1 items-center justify-center px-4 text-sm text-token-text-tertiary">
            {<MemoizedFormattedMessage {...{
        id: "chatgptConversations.debugPanel.empty",
        defaultMessage: "No messages to inspect",
        description: "Empty state for the ChatGPT conversation debug panel"
      }} />}
          </div> : <div className="flex min-h-0 flex-1 bg-token-bg-secondary/20">
            <div className="flex w-[320px] shrink-0 flex-col border-r border-token-border-light bg-token-bg-primary">
              <div className="border-b border-token-border-light px-4 py-3 text-sm font-semibold">
                {<MemoizedFormattedMessage {...{
            id: "chatgptConversations.debugPanel.messages",
            defaultMessage: "Messages",
            description: "Heading for the ChatGPT conversation debug message list"
          }} />}
              </div>
              <div className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto">
                {ivory.map((item, index) => {
            let fern = onyx(item),
              grove = index === kelp;
            return <button key={pearl(item, index)} aria-pressed={grove} className={IntlProvider("flex w-full min-w-0 cursor-interaction flex-col gap-1 overflow-hidden border-b border-token-border-light px-4 py-3 text-left", grove ? "bg-token-bg-tertiary text-token-text-primary" : "text-token-text-tertiary hover:bg-token-bg-secondary")} type="button" onClick={() => {
              flint(index);
            }}>
                      <span className="flex w-full min-w-0 items-center gap-2">
                        <span className="shrink-0 rounded bg-token-bg-secondary px-1.5 py-0.5 font-mono text-[10px] text-token-text-tertiary uppercase">
                          {item.author.role}
                        </span>
                        <span className="min-w-0 flex-1 truncate font-mono text-[11px]">
                          {pearl(item, index)}
                        </span>
                      </span>
                      <span className="line-clamp-2 min-w-0 text-xs leading-4 break-all">
                        {fern.length > 0 ? fern : <MemoizedFormattedMessage {...{
                  id: "chatgptConversations.debugPanel.noTextContent",
                  defaultMessage: "No text content",
                  description: "Fallback preview for a ChatGPT debug message with no text body"
                }} />}
                      </span>
                    </button>;
          })}
              </div>
            </div>
            <div className="flex min-w-0 flex-1 flex-col bg-token-bg-primary">
              <div className="flex items-start gap-2 border-b border-token-border-light px-4 py-3">
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold">
                    {<MemoizedFormattedMessage {...{
                id: "chatgptConversations.debugPanel.selectedMessage",
                defaultMessage: "Selected message",
                description: "Heading for the selected ChatGPT debug message JSON"
              }} />}
                  </div>
                  {lotus == null ? null : <div className="mt-1 truncate font-mono text-[11px] text-token-text-tertiary">
                      {pearl(lotus, kelp)}
                    </div>}
                </div>
                {<ReadLoginRouteQuerySnapshot {...{
            className: "shrink-0 text-xs",
            color: "secondary",
            disabled: lotus == null,
            size: "default",
            onClick: () => {
              lotus != null && navigator.clipboard?.writeText(JSON.stringify(lotus, null, 2)).catch(falcon);
            },
            children: <MemoizedFormattedMessage {...{
              id: "chatgptConversations.debugPanel.copySelectedMessage",
              defaultMessage: "Copy",
              description: "Button label that copies the selected ChatGPT debug message as formatted JSON"
            }} />
          }} />}
              </div>
              {<Alpha {...{
          className: "min-h-0 flex-1 px-4 py-3",
          value: lotus
        }} />}
            </div>
          </div>}
        {ridge}
      </aside>;
}
function falcon() {}
function gamma(event) {
  event.stopPropagation();
}
function harbor(event) {
  event.stopPropagation();
}
function indigo() {
  return CHATGPT_CITATION_ID();
}
function jade() {
  return AppInitialPF();
}
function kite() {
  return nickel(marble());
}
function lemon() {
  return marble();
}
function marble() {
  return {
    height: window.innerHeight,
    topInset: 36,
    width: window.innerWidth
  };
}
function nickel(hill) {
  let isle = hill.height - hill.topInset,
    juniper = Math.min(umbra, Math.max(0, hill.width - timber * 2));
  return clampFloatingWindowRect({
    height: Math.min(violet, Math.max(0, isle - timber * 2)),
    width: juniper,
    x: hill.width - juniper - timber,
    y: hill.topInset + timber
  }, hill);
}
function onyx(lagoon) {
  return messageContentToPlainText(lagoon).replace(/\s+/g, " ").trim();
}
function pearl(meadow, nest) {
  return meadow.id ?? `${meadow.author.role}-${nest}`;
}
var quartz,
  river,
  slate,
  timber,
  umbra,
  violet,
  willow = esmInit(() => {
    quartz = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    river = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    copper();
    initFloatingWindowPointerDragConstants();
    useFloatingWindowPointerDragT();
    ensureConversationPageEsm_Act_Init();
    ensureConversationPageEsm_A0_Init();
    delta();
    ensureComposerEsm_MF_Init();
    ensureComposerEsm_BF_Init();
    timber = 16;
    umbra = 760;
    violet = 640;
  });
