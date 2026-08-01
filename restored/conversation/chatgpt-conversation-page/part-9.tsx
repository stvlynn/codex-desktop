// Restored from ref/webview/assets/chatgpt-conversation-page-Bq7nUgvB.js
// Wave FZ — full polished body from `chatgpt-conversation-page-Bq7nUgvB/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 83 (verified 274/356).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 9/11
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
import { chatgptConversationBranchAtom, chatgptConversationFlagsAtom, chatgptConversationLoadQueryAtom, chatgptConversationPreviewAtom, chatgptConversationServerIdAtom, chatgptConversationsGateAtom, chatgptConversationStatusAtom, chatgptConversationTitleAtom, chatgptThreadDerivedAtomBP, useStepsProseAtom, writingBlocksControllerAtom } from "../../composer/composer-appscope-atoms";
import { ensureComposerEsm_AG_Init, ensureComposerEsm_BF_Init, ensureComposerEsm_BI_Init, ensureComposerEsm_F7_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_II_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_J0_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_KF_Init, ensureComposerEsm_M0_Init, ensureComposerEsm_MF_Init, ensureComposerEsm_ML_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_S8_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_TI_Init, ensureComposerEsm_XP_Init, ensureComposerEsm_Ytt_Init, ensureComposerEsm_ZI_Init } from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_A0_Init, ensureConversationPageEsm_Act_Init, ensureConversationPageEsm_B0_Init, ensureConversationPageEsm_FR_Init, ensureConversationPageEsm_GS_Init, ensureConversationPageEsm_GZ_Init, ensureConversationPageEsm_Ist_Init, ensureConversationPageEsm_Jj_Init, ensureConversationPageEsm_Lo_Init, ensureConversationPageEsm_Mx_Init, ensureConversationPageEsm_Qa_Init, ensureConversationPageEsm_SP_Init, ensureConversationPageEsm_TP_Init } from "../../conversation/conversation-page-esm-inits";
import { useSummaryContentShift } from "../conversation-source";
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
const EnsureAppIconKhInit: any = undefined;
const InitChatgptTemporaryChatUi: any = undefined;
const UseChronicleSettingsSection: any = undefined;
const AppInitialD: any = undefined;
const AppInitialDP: any = undefined;
const AppInitialFN: any = undefined;
const AppInitialIN: any = undefined;
const AppInitialKP: any = undefined;
const AppInitialMP: any = undefined;
const AppInitialNR: any = undefined;
const AppInitialOP: any = undefined;
const AppInitialPP: any = undefined;
const AppInitialRN: any = undefined;
const AppInitialUP: any = undefined;
const AppInitialVP: any = undefined;
const AppInitialXP: any = undefined;
const DeferredNavigationFTStub: any = undefined;
const branchConversationAtMessage: any = undefined;
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
const jade: any = undefined;
const kite: any = undefined;
const lemon: any = undefined;
const marble: any = undefined;
function nickel(onyx) {
  let {
      conversationId,
      isTemporaryChat
    } = onyx,
    pearl = CodexPluginActionType(appScopeAtom),
    [quartz, river] = marble.useState(false),
    [slate, timber] = marble.useState(null),
    [umbra, violet] = marble.useState(false),
    willow = useIntl(),
    xenon = AppInitialNR(),
    yellow = useNavigate(),
    zinc = useColdNavigate(),
    amber = CodexBrowserSurfaceActionType(chatgptConversationServerIdAtom, conversationId);
  CodexBrowserSurfaceActionType(useChatgptComposerControllerK, amber);
  let basalt = CodexBrowserSurfaceActionType(isCustomAgentId, conversationId),
    cedar = amber ?? conversationId,
    daisy = CodexBrowserSurfaceActionType(chatgptConversationBranchAtom, conversationId),
    ember = CodexBrowserSurfaceActionType(chatgptConversationFlagsAtom, conversationId),
    flint = CodexBrowserSurfaceActionType(rebaseConversationId, conversationId),
    garnet = CodexBrowserSurfaceActionType(chatgptThreadDerivedAtomBP, conversationId),
    hazel = CodexBrowserSurfaceActionType(AppInitialVP, conversationId),
    ivory = CodexBrowserSurfaceActionType(chatgptConversationStatusAtom, conversationId),
    jasper = CodexBrowserSurfaceActionType(AppInitialUP, conversationId),
    kelp = CodexBrowserSurfaceActionType(AppInitialKP, conversationId),
    lotus = CodexBrowserSurfaceActionType(patchConversationMessage, conversationId),
    mint = CodexPluginActionResult(DeferredNavigationFTStub(AppInitialOP, amber)),
    nova = CodexBrowserSurfaceActionType(AppInitialMP, conversationId),
    olive = CodexBrowserSurfaceActionType(branchConversationAtMessage, conversationId),
    prism = CodexBrowserSurfaceActionType(chatgptConversationTitleAtom, conversationId),
    quill = CodexBrowserSurfaceActionType(chatgptConversationServerIdAtom, conversationId),
    reef = CodexBrowserSurfaceActionType(chatgptConversationPreviewAtom, conversationId),
    sage = ivory === "streaming",
    topaz = useStepsProseAtom() === THREAD_DETAIL_LEVEL_STEPS_PROSE,
    ultra = useSummaryContentShift(conversationId),
    vapor = ink => {
      AppInitialDP(pearl, conversationId, ink);
      ensureConversationPageEsm_SP_Init(pearl, conversationId, {
        isTemporaryChat
      });
    };
  let wheat = vapor,
    yarn = jadeite => {
      AppInitialXP(pearl, conversationId, jadeite, {
        isTemporaryChat
      });
      ensureConversationPageEsm_SP_Init(pearl, conversationId, {
        isTemporaryChat
      });
    };
  let zephyr = yarn,
    acorn = garnet != null,
    bloom = mint.data,
    coral = () => AppInitialFN(pearl.queryClient, conversationId);
  let [drift] = marble.useState(coral),
    _e = bloom == null ? drift?.projectId ?? null : AppInitialIN(bloom);
  let eagle = _e,
    frost = eagle != null,
    glide = () => {
      if (eagle == null) throw Error("Expected a ChatGPT project id");
      return pearl.get(writingBlocksControllerAtom).getProject(eagle);
    };
  let be = eagle ?? "",
    honey = AppInitialRN(be);
  let iris = {
    enabled: frost,
    queryFn: glide,
    queryKey: honey,
    staleTime: readScrollTop.ONE_MINUTE
  };
  let {
      data
    } = useQuery(iris),
    jewel = data?.gizmo.display.name.trim() || null;
  let knoll = jewel,
    lunar = data?.gizmo.display.theme,
    moss = <UseChronicleSettingsSection {...{
      className: "icon-xs shrink-0"
    }} />;
  let north = data?.gizmo.display.emoji,
    orbit = <BrandedIcon className="icon-xs" color={lunar} fallbackIcon={moss} icon={north} />;
  let pine = orbit,
    {
      renderedConversation,
      renderedTurns,
      showPendingLoadingMessage
    } = useChatgptComposerControllerJ({
      conversation: bloom,
      isStreaming: sage,
      mode: "conversation",
      moderationDisclaimersByMessageId: hazel,
      pendingSubmission: quill ? {
        attachments: olive,
        prompt: nova,
        selectedTextAttachments: prism
      } : null,
      threadCurrentNode: daisy,
      threadMapping: garnet
    }),
    quest = echo({
      messages: renderedConversation == null ? [] : walkChatgptMessageTree(renderedConversation),
      pendingAttachments: quill ? olive : [],
      turns: renderedTurns
    }),
    ridge = amber ?? conversationId,
    storm = (bloom?.conversation_origin ?? ember) === "tpp",
    tide = storm && lotus == null,
    unity = storm && renderedTurns.at(-1)?.turn.status === "in_progress",
    vale = kelp ?? (bloom == null ? drift?.title ?? null : bloom.title?.trim() || null);
  let wave = vale,
    apex = wave ?? willow.formatMessage({
      id: "chatgptConversations.untitled",
      defaultMessage: "Untitled conversation",
      description: "Fallback title for a ChatGPT conversation without a title"
    });
  let brook = apex,
    cliff = flint ?? reef,
    dusk = amber ?? conversationId,
    elm = amber != null && mint.isLoading && !acorn,
    fern = amber ?? (isLocalChatgptId(conversationId) ? null : conversationId);
  let grove = fern,
    hill = kernel => {
      grove == null || slate != null || (timber(kernel), AppInitialPP(pearl, {
        conversationId: grove,
        messageId: kernel
      }).then(value => {
        let {
          clientThreadId
        } = value;
        xenon() && yellow(rewriteFileCitationMarkers(clientThreadId, {
          isTemporaryChat
        }));
      }).catch(() => {
        xenon() && (timber(null), pearl.get(toastAtom).danger(willow.formatMessage({
          id: "chatgptConversations.branchFailed",
          defaultMessage: "Failed to create chat",
          description: "Error shown when ChatGPT cannot continue a conversation in a new chat"
        })));
      }));
    };
  let at = useEventCallback(hill),
    isle = async (leaf, maple) => {
      try {
        await bravo(pearl, {
          conversationId,
          isTemporaryChat,
          messageId: leaf,
          prompt: maple
        });
      } catch (nimbus) {
        let opal = nimbus;
        throw pearl.get(toastAtom).danger(willow.formatMessage({
          id: "chatgptConversations.editMessageFailed",
          defaultMessage: "Failed to edit message",
          description: "Toast shown in a Chat mode conversation when submitting an edit to the latest user message fails"
        })), opal;
      }
    };
  let juniper = useEventCallback(isle),
    lagoon = () => {
      umbra || (violet(true), useChatgptComposerControllerL(pearl, {
        chatGptThreadId: conversationId,
        conversationTitle: brook
      }).then(value => {
        if (xenon()) {
          if (value != null) {
            zinc(value);
            return;
          }
          violet(false);
          pearl.get(toastAtom).danger(willow.formatMessage({
            id: "chatgptConversations.handoffFailed",
            defaultMessage: "Failed to create chat",
            description: "Error shown when ChatGPT cannot hand off a conversation to a task"
          }));
        }
      }));
    };
  let meadow = lagoon,
    nest = useChatgptComposerControllerM({
      browserConversationId: undefined,
      conversationId,
      errorMessage: cliff,
      branchingMessageId: slate,
      onEditLatestUserMessage: grove != null && !storm && !sage && !quill ? juniper : undefined,
      onFork: grove == null ? undefined : at,
      renderedTurns,
      safetyReview: jasper,
      showPendingLoadingMessage
    }),
    oak = daisy ?? bloom?.current_node ?? null,
    petal = willow.formatMessage({
      id: "chatgptConversations.loadingConversation",
      defaultMessage: "Loading ChatGPT conversation",
      description: "Accessible loading status shown while a ChatGPT conversation is loading in Codex Desktop"
    });
  let quiet = petal,
    _t = <_useChatgptComposerControllerR {...{
      conversationId
    }} />;
  let rain = <AppIconAZ.MainContentLayout {...{
    layout: "thread-edge-scroll"
  }} />;
  let seed = <AppIconAZ.Header {...{
    children: isTemporaryChat ? <TemporaryChatHeaderControl {...{
      isIndicator: true,
      isTemporaryChat
    }} /> : <EnsureAppIconKhInit {...{
      project: eagle == null ? undefined : {
        hoverCardContent: <Alpha {...{
          projectIcon: pine,
          projectId: eagle,
          projectName: knoll
        }} />,
        icon: pine,
        name: knoll
      },
      start: <span className="min-w-0 truncate">
                  {brook}
                </span>,
      startActions: <>
                  {tide ? <OptionalTooltip {...{
          side: "bottom",
          sideOffset: 6,
          tooltipContent: <MemoizedFormattedMessage {...{
            id: "chatgptConversations.header.cloudTaskTooltip",
            defaultMessage: "This chat was started in the cloud, so ChatGPT won't be able to access files on your computer unless you add them to your conversation",
            description: "Tooltip explaining file access limitations for a ChatGPT task that was started in the cloud"
          }} />,
          children: <span aria-label={willow.formatMessage({
            id: "chatgptConversations.header.cloudTask",
            defaultMessage: "Cloud chat",
            description: "Accessible label for the cloud task indicator in a ChatGPT conversation header"
          })} className="pointer-events-auto inline-flex shrink-0" role="img">
                            <AppInitialD className="icon-2xs no-drag shrink-0 translate-x-px text-token-description-foreground" />
                          </span>
        }} /> : null}
                  {<Bravo {...{
          isHandoffPending: umbra,
          isPinned: bloom?.is_starred === true,
          onHandoff: amber == null || basalt ? undefined : meadow,
          onOpenInQuickChat: () => {
            activateConversationSurface(pearl, conversationId, brook);
          },
          onTogglePin: bloom == null ? undefined : () => {
            toggleConversationPinned({
              scope: pearl,
              conversation: {
                gizmo_id: bloom.gizmo_id,
                id: bloom.conversation_id,
                is_archived: bloom.is_archived,
                is_starred: bloom.is_starred,
                title: bloom.title
              }
            }).catch(gamma);
          },
          onToggleDebugPanel: () => {
            river(falcon);
          },
          serverConversationId: amber,
          showHandoff: topaz && !storm
        }} />}
                </>
    }} />
  }} />;
  let trail = isTemporaryChat ? null : <AppIconAZ.HeaderAction {...{
    actionId: "chatgpt-conversation-share",
    align: "end",
    order: 100,
    children: <Copper {...{
      currentNodeId: oak,
      isStreaming: sage,
      serverConversationId: amber,
      title: wave
    }} />
  }} />;
  let urn = <Delta {...{
    conversationId: ridge,
    data: quest,
    shouldBlockExternalEgress: basalt
  }} />;
  let vine = <Echo {...{
    conversationId
  }} />;
  let wind = <ElectronOnly {...{
    electron: true,
    children: [rain, seed, trail, urn, vine]
  }} />;
  let yarrow = sage || quill,
    azure = mint.isError && !acorn,
    birch = renderedTurns.length > 0,
    canyon = <Falcon {...{
      contentX: ultra.contentShift,
      conversationId,
      conversationLoadingLabel: quiet,
      entries: nest,
      errorMessage: cliff,
      hasLoadError: azure,
      hasRenderableTurns: birch,
      isConversationLoading: elm,
      disableSubmitForActiveTppTurn: unity,
      isTemporaryChat,
      scrollStateConversationId: cedar,
      showPendingLoadingMessage,
      onAddSelectedText: wheat
    }} />;
  let dew = <Gamma {...{
    conversationId: ridge,
    data: quest,
    display: ultra,
    shouldBlockExternalEgress: basalt
  }} />;
  let ever = quartz ? <Harbor {...{
    conversation: renderedConversation,
    conversationId: dusk,
    onClose: () => {
      river(false);
    }
  }} /> : null;
  let field = <ConversationDiffSourceBridge {...{
    children: <div className="flex h-full min-h-0 flex-col">
            {canyon}
            {dew}
            {ever}
          </div>
  }} />;
  let grain = <DeferredNavigationFTStub {...{
    disabled: yarrow,
    onFilesDropped: zephyr,
    children: field
  }} />;
  let haven = <InitChatgptTemporaryChatUi {...{
    isTemporaryChat
  }} />;
  return <>
      {_t}
      {wind}
      {grain}
      {haven}
    </>;
}
