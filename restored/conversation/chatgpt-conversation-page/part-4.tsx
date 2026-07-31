// Restored from ref/webview/assets/chatgpt-conversation-page-Bq7nUgvB.js
// Wave FZ — full polished body from `chatgpt-conversation-page-Bq7nUgvB/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 83 (verified 274/356).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 4/11
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
const DeferredUiB: any = undefined;
const DeferredUiH: any = undefined;
const DeferredUiU: any = undefined;
const IsStartingProcessExpired: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const UsePointerSurfaceInteractionGate: any = undefined;
const AppInitialIP: any = undefined;
const AppInitialP: any = undefined;
const AppInitialQj: any = undefined;
const AppInitialTP: any = undefined;
const IntlProvider: any = undefined;
const RealtimeVoiceHostId: any = undefined;
const as: any = undefined;
const alpha: any = undefined;
const Alpha: any = undefined;
const bravo: any = undefined;
const Bravo: any = undefined;
const copper: any = undefined;
const Copper: any = undefined;
const deferredUiU: any = undefined;
const is: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
function os({
  currentNodeId,
  onClose,
  serverConversationId,
  title
}) {
  let marble = useIntl(),
    nickel = CodexPluginActionType(appScopeAtom),
    [onyx, pearl] = gamma.useState(null),
    [quartz, river] = gamma.useState("idle"),
    [slate, timber] = gamma.useState(null),
    umbra = title?.trim(),
    violet = quartz === "creating",
    willow = onyx ?? indigo;
  async function xenon() {
    if (violet) return;
    timber(null);
    river("creating");
    let yellow = onyx == null ? "create-failed" : "copy-failed";
    try {
      let zinc = onyx;
      if (zinc ?? (zinc = (await alpha({
        client: nickel.get(writingBlocksControllerAtom),
        conversationId: serverConversationId,
        currentNodeId,
        title
      })).shareLinkUrl, yellow = "copy-failed", pearl(zinc)), !(await echo(zinc))) throw Error("Failed to copy ChatGPT conversation share link");
      river("copied");
      nickel.get(toastAtom).success(marble.formatMessage(jade.shareCopied));
    } catch (amber) {
      let basalt = amber instanceof is ? "blocked" : yellow;
      basalt !== "blocked" && appActionSidebarProjectRefSchema.warning("chatgpt_conversation_share_failed", {
        safe: {
          stage: basalt
        },
        sensitive: {
          error: amber
        }
      });
      let cedar;
      switch (basalt) {
        case "blocked":
          cedar = marble.formatMessage(jade.shareBlocked);
          break;
        case "copy-failed":
          cedar = marble.formatMessage(jade.shareCopyFailed);
          break;
        case "create-failed":
          cedar = marble.formatMessage(jade.shareCreateFailed);
          break;
      }
      timber(basalt);
      river("idle");
      nickel.get(toastAtom).danger(cedar);
    }
  }
  return <UsePointerSurfaceInteractionGate {...{
    open: true,
    shouldIgnoreClickOutside: violet,
    showDialogClose: !violet,
    contentClassName: "rounded-[24px]",
    onOpenChange: daisy => {
      !daisy && !violet && onClose();
    },
    children: <DeferredUiB {...{
      as: "form",
      className: "gap-5 px-5 py-5",
      onSubmit: event => {
        event.preventDefault();
        xenon();
      },
      children: [<DeferredUiH {...{
        className: "gap-2 pr-8",
        title: <RealtimeVoiceHostId {...{
          className: "contents",
          children: <MemoizedFormattedMessage {...{
            ...jade.title
          }} />
        }} />,
        subtitle: <IsStartingProcessExpired {...{
          className: "contents",
          children: <MemoizedFormattedMessage {...{
            ...jade.description
          }} />
        }} />
      }} />, <DeferredUiU {...{
        children: <div className="flex items-center gap-3 rounded-2xl border border-token-border-default bg-token-bg-secondary p-3">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-token-foreground/5 text-token-text-secondary">
                          {<AppIconJtt {...{
              "aria-hidden": true,
              className: "icon-sm"
            }} />}
                        </span>
                        <div className="min-w-0">
                          <div className="truncate text-sm font-medium text-token-foreground">
                            {umbra || <MemoizedFormattedMessage {...{
                ...jade.untitledConversation
              }} />}
                          </div>
                          <div className="mt-0.5 text-xs text-token-text-tertiary">
                            {<MemoizedFormattedMessage {...{
                ...jade.publicLinkAudience
              }} />}
                          </div>
                        </div>
                      </div>
      }} />, slate == null ? null : <DeferredUiU {...{
        children: <div role="alert" className="rounded-xl border border-token-charts-red/30 bg-token-charts-red/10 px-3 py-2 text-sm text-token-foreground">
                          {<Alpha {...{
            error: slate
          }} />}
                        </div>
      }} />, <DeferredUiU {...{
        children: <div className="flex items-center gap-2 rounded-full border border-token-border-default bg-token-dropdown-background p-1.5 focus-within:border-token-border-heavy">
                        <div className="flex min-w-0 flex-1 items-center gap-2 px-2">
                          <AppInitialQj aria-hidden={true} className="icon-xs shrink-0 text-token-text-tertiary" />
                          <input aria-label={marble.formatMessage(jade.shareLinkLabel)} className={IntlProvider("w-full min-w-0 border-0 bg-transparent py-1 text-sm outline-none", onyx == null ? "text-token-text-tertiary" : "text-token-foreground")} disabled={onyx == null} readOnly={true} value={willow} />
                        </div>
                        {<ReadLoginRouteQuerySnapshot {...{
            color: "primary",
            loading: violet,
            size: "medium",
            type: "submit",
            children: [violet ? null : quartz === "copied" ? <AppIconZlt {...{
              "aria-hidden": true,
              className: "icon-xs"
            }} /> : onyx == null ? <AppInitialQj aria-hidden={true} className="icon-xs" /> : <AppIconPR {...{
              "aria-hidden": true,
              className: "icon-xs"
            }} />, quartz === "copied" ? <MemoizedFormattedMessage {...{
              ...jade.copied
            }} /> : onyx == null ? <MemoizedFormattedMessage {...{
              ...jade.createLink
            }} /> : <MemoizedFormattedMessage {...{
              ...jade.copyLink
            }} />]
          }} />}
                      </div>
      }} />]
    }} />
  }} />;
}
function delta(ember) {
  let {
    error
  } = ember;
  switch (error) {
    case "blocked":
      {
        let flint;
        return <MemoizedFormattedMessage {...{
          ...jade.shareBlocked
        }} />;
      }
    case "copy-failed":
      {
        let garnet;
        return <MemoizedFormattedMessage {...{
          ...jade.shareCopyFailed
        }} />;
      }
    case "create-failed":
      {
        let hazel;
        return <MemoizedFormattedMessage {...{
          ...jade.shareCreateFailed
        }} />;
      }
  }
}
async function echo(ivory) {
  try {
    return await appServices.clipboard.writeText(ivory), true;
  } catch (lotus) {
    appActionSidebarProjectRefSchema.warning("chatgpt_conversation_share_clipboard_write_failed", {
      safe: {
        method: "host",
        usesOwlAppShell: window.electronBridge?.usesOwlAppShell?.() === true
      },
      sensitive: {
        error: lotus
      }
    });
  }
  let jasper = window.navigator.clipboard;
  if (jasper == null) return false;
  let kelp = globalThis.ClipboardItem;
  if (kelp != null && typeof jasper.write == "function") {
    let mint = new Blob([ivory], {
      type: fs
    });
    try {
      return await jasper.write([new kelp({
        [fs]: mint
      })]), true;
    } catch (nova) {
      appActionSidebarProjectRefSchema.warning("chatgpt_conversation_share_clipboard_write_failed", {
        safe: {
          method: "clipboard-item"
        },
        sensitive: {
          error: nova
        }
      });
    }
  }
  if (typeof jasper.writeText != "function") return false;
  try {
    return await jasper.writeText(ivory), true;
  } catch (olive) {
    return appActionSidebarProjectRefSchema.warning("chatgpt_conversation_share_clipboard_write_failed", {
      safe: {
        method: "write-text"
      },
      sensitive: {
        error: olive
      }
    }), false;
  }
}
var falcon,
  gamma,
  harbor,
  indigo,
  fs,
  jade,
  kite = esmInit(() => {
    falcon = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureComposerEsm_MT_Init();
    gamma = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    findProcessManagerRow();
    useOpenLocatorInMainWindow();
    ensureComposerEsm_Ilt_Init();
    ensureDropdownMenuPopoverInit();
    ensureConversationPageEsm_FR_Init();
    ensureComposerEsm_Ytt_Init();
    ensureConversationPageEsm_Jj_Init();
    ensureDynamicScriptLoadInit();
    ensureAppScopeInit();
    posixPathBasename();
    ensureComposerEsm_TI_Init();
    as();
    indigo = "https://chatgpt.com/share/…";
    fs = "text/plain";
    jade = identity({
      copied: {
        id: "chatgptConversations.shareDialog.copied",
        defaultMessage: "Copied",
        description: "Button label after a ChatGPT conversation share link has been copied"
      },
      copyLink: {
        id: "chatgptConversations.shareDialog.copyLink",
        defaultMessage: "Copy link",
        description: "Button label for copying an existing ChatGPT conversation share link"
      },
      createLink: {
        id: "chatgptConversations.shareDialog.createLink",
        defaultMessage: "Create link",
        description: "Button label for creating and copying a ChatGPT conversation share link"
      },
      description: {
        id: "chatgptConversations.shareDialog.description",
        defaultMessage: "Your name and any messages you add after sharing stay private",
        description: "Description in the ChatGPT conversation share dialog explaining what stays private"
      },
      publicLinkAudience: {
        id: "chatgptConversations.shareDialog.publicLinkAudience",
        defaultMessage: "Anyone with the link can view this chat",
        description: "Audience note in the ChatGPT conversation share dialog preview card"
      },
      shareBlocked: {
        id: "chatgptConversations.shareDialog.shareBlocked",
        defaultMessage: "This conversation can't be shared",
        description: "Error shown when a ChatGPT conversation share link is blocked by moderation"
      },
      shareCopied: {
        id: "chatgptConversations.shareDialog.shareCopied",
        defaultMessage: "Share link copied",
        description: "Toast shown after copying a ChatGPT conversation share link"
      },
      shareCopyFailed: {
        id: "chatgptConversations.shareDialog.shareCopyFailed",
        defaultMessage: "Share link created, but it could not be copied",
        description: "Inline error and toast in the ChatGPT conversation share dialog shown after a public link was created but all clipboard copy methods failed"
      },
      shareCreateFailed: {
        id: "chatgptConversations.shareDialog.shareCreateFailed",
        defaultMessage: "Could not create share link",
        description: "Inline error and toast in the ChatGPT conversation share dialog shown when creating a public link fails before clipboard copying begins"
      },
      shareLinkLabel: {
        id: "chatgptConversations.shareDialog.shareLinkLabel",
        defaultMessage: "Share link",
        description: "Accessible label for the ChatGPT conversation share link field"
      },
      title: {
        id: "chatgptConversations.shareDialog.title",
        defaultMessage: "Share public link to chat",
        description: "Title for the ChatGPT conversation share dialog"
      },
      untitledConversation: {
        id: "chatgptConversations.shareDialog.untitledConversation",
        defaultMessage: "Untitled conversation",
        description: "Fallback preview title for a ChatGPT conversation without a title in the share dialog"
      }
    });
  });
async function lemon(prism, {
  conversationId,
  isTemporaryChat = false,
  messageId,
  prompt
}) {
  if (prism.get(chatgptConversationStatusAtom, conversationId) === "streaming" || prism.get(chatgptConversationServerIdAtom, conversationId)) throw Error("The chat is busy.");
  if (prism.get(chatgptConversationFlagsAtom, conversationId) === "tpp") throw Error("Work messages cannot be edited with the Chat flow.");
  let quill = bravo({
    currentNode: prism.get(chatgptConversationBranchAtom, conversationId),
    mapping: prism.get(chatgptThreadDerivedAtomBP, conversationId),
    messageId
  });
  if (quill == null) throw Error("The latest user message could not be edited.");
  let reef = fileAttachmentsFromMetadata(quill.message.metadata),
    sage = prompt.trim(),
    topaz = quill.message.content.content_type === "multimodal_text" && quill.message.content.parts.some(item => typeof item != "string");
  if (sage.length === 0 && reef.length === 0 && !topaz) throw Error("The edited message cannot be empty.");
  let ultra = prism.get(AppInitialP, conversationId),
    vapor = copper(quill.message);
  await AppInitialIP(prism, {
    attachments: reef,
    conversationId,
    isTemporaryChat,
    model: ultra.slug,
    parentMessageId: quill.parentMessageId,
    prompt: sage,
    systemHints: vapor,
    thinkingEffort: ultra.thinkingEffort,
    userCompletionMessages: AppInitialTP({
      message: quill.message,
      prompt: sage,
      systemHints: vapor
    })
  });
}
