// Restored from ref/webview/assets/chatgpt-conversation-page-Bq7nUgvB.js
// Wave FZ — full polished body from `chatgpt-conversation-page-Bq7nUgvB/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 83 (verified 274/356).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 6/11
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
const IsNotNullish: any = undefined;
const Orbit: any = undefined;
const Pine: any = undefined;
const PluginManagePathForCatalogEntry: any = undefined;
const Quest: any = undefined;
const QuickChatConversationTitleAtom: any = undefined;
const SlugifyLoose: any = undefined;
const alpha: any = undefined;
const Alpha: any = undefined;
const bravo: any = undefined;
const Bravo: any = undefined;
const copper: any = undefined;
const Copper: any = undefined;
const quickChatConversationTitleAtom: any = undefined;
function delta(pearl) {
  return <PopoverMenu.Item {...{
    tone: "muted",
    title: pearl.label,
    children: [<PopoverMenu.ItemLeading {...{
      variant: "status",
      children: <Alpha {...{
        status: pearl.status
      }} />
    }} />, <PopoverMenu.ItemLabel {...{
      children: pearl.label
    }} />, <PopoverMenu.ItemMeta {...{
      children: <Bravo {...{
        status: pearl.status
      }} />
    }} />]
  }} />;
}
function echo(event) {
  return event.key;
}
function falcon(quartz) {
  let {
    status
  } = quartz;
  switch (status) {
    case "completed":
      {
        let river;
        return <CodexReferralInviteModalBackendErrorType {...{
          "aria-hidden": true
        }} />;
      }
    case "in_progress":
      {
        let slate;
        return <VSCODE_EDITOR_ID {...{
          "aria-hidden": true
        }} />;
      }
    case "pending":
      {
        let timber;
        return <Orbit {...{
          "aria-hidden": true
        }} />;
      }
  }
}
function gamma(umbra) {
  let {
    status
  } = umbra;
  switch (status) {
    case "completed":
      {
        let violet;
        return <MemoizedFormattedMessage {...{
          id: "chatgptConversations.summaryPanel.progress.status.completed",
          defaultMessage: "Done",
          description: "Short status label for a completed plan step in the Work task details panel. Sibling statuses are In progress and Pending."
        }} />;
      }
    case "in_progress":
      {
        let willow;
        return <MemoizedFormattedMessage {...{
          id: "chatgptConversations.summaryPanel.progress.status.inProgress",
          defaultMessage: "In progress",
          description: "Short status label for the active plan step in the Work task details panel. Sibling statuses are Done and Pending."
        }} />;
      }
    case "pending":
      {
        let xenon;
        return <MemoizedFormattedMessage {...{
          id: "chatgptConversations.summaryPanel.progress.status.pending",
          defaultMessage: "Pending",
          description: "Short status label for a plan step that has not started in the Work task details panel. Sibling statuses are Done and In progress."
        }} />;
      }
  }
}
function harbor(yellow) {
  let {
      conversationId,
      outputs,
      shouldBlockExternalEgress
    } = yellow,
    zinc = amber => amber.kind === "file" ? <Pine {...{
      conversationId,
      file: amber,
      shouldBlockExternalEgress
    }} /> : <PopoverMenu.Item {...{
      tone: "muted",
      children: [<PopoverMenu.ItemLeading {...{
        children: <QuickChatConversationTitleAtom {...{}} />
      }} />, <PopoverMenu.ItemLabel {...{
        children: <MemoizedFormattedMessage {...{
          id: "chatgptConversations.summaryPanel.outputs.generatedImage.label",
          defaultMessage: "Generated image",
          description: "Label for an image row in the Outputs section of the Work task details panel."
        }} />
      }} />]
    }} />;
  return <PopoverMenu.List {...{
    items: outputs,
    getKey: indigo,
    children: zinc
  }} />;
}
function indigo(event) {
  return event.key;
}
function jade(basalt) {
  let {
      conversationId,
      files,
      shouldBlockExternalEgress
    } = basalt,
    cedar = daisy => <Pine {...{
      conversationId,
      file: daisy,
      shouldBlockExternalEgress
    }} />;
  return <PopoverMenu.List {...{
    items: files,
    getKey: kite,
    children: cedar
  }} />;
}
function kite(event) {
  return event.key;
}
function lemon(ember) {
  let {
      conversationId,
      file,
      shouldBlockExternalEgress
    } = ember,
    flint = CodexPluginActionType(appScopeAtom),
    garnet = CodexPluginActionType(ensureComposerEsm_S8_Init),
    hazel = useIntl(),
    [ivory, jasper] = copper.useState(false),
    kelp = _useChatgptComposerControllerP();
  let lotus = kelp,
    mint = file.downloadTarget != null && shouldBlockExternalEgress,
    nova = file.downloadTarget != null && !mint,
    olive = <PopoverMenu.ItemLeading {...{
      children: <SlugifyLoose {...{}} />
    }} />;
  let prism = <PopoverMenu.ItemLabel {...{
    children: file.name
  }} />;
  let quill = ivory ? <PopoverMenu.ItemMeta {...{
    variant: "icon",
    children: <VSCODE_EDITOR_ID {...{
      "aria-hidden": true
    }} />
  }} /> : null;
  let reef = <>
      {olive}
      {prism}
      {quill}
    </>;
  let sage = reef;
  if (mint) {
    let vapor = lotus ? hazel.formatMessage({
      id: "chatgptConversations.summaryPanel.files.previewBlocked.ariaLabel",
      defaultMessage: "Preview of {fileName} unavailable in lockdown mode",
      description: "Accessible label for a disabled file row in the Work task details panel when lockdown mode blocks downloading the file for the right-side preview panel. The fileName placeholder is the displayed file name."
    }, {
      fileName: file.name
    }) : hazel.formatMessage({
      id: "chatgptConversations.summaryPanel.files.downloadBlocked.ariaLabel",
      defaultMessage: "Download {fileName} unavailable in lockdown mode",
      description: "Accessible label for a disabled file download in the Work task details panel when lockdown mode blocks external file access. The fileName placeholder is the displayed file name."
    }, {
      fileName: file.name
    });
    let wheat = vapor,
      yarn;
    return <PopoverMenu.ItemButton {...{
      "aria-label": wheat,
      disabled: true,
      tone: "muted",
      children: sage
    }} />;
  }
  if (!nova) {
    let zephyr;
    return <PopoverMenu.Item {...{
      tone: "muted",
      title: file.name,
      children: sage
    }} />;
  }
  let topaz;
  if (lotus && ivory) {
    let acorn;
    acorn = hazel.formatMessage({
      id: "chatgptConversations.summaryPanel.files.openingPreview.ariaLabel",
      defaultMessage: "Opening preview of {fileName}",
      description: "Accessible label for a disabled file row in the Work task details panel while its file is being prepared for the right-side preview panel. The fileName placeholder is the displayed name of the input or output file."
    }, {
      fileName: file.name
    });
    topaz = acorn;
  } else if (lotus) {
    let bloom;
    bloom = hazel.formatMessage({
      id: "chatgptConversations.summaryPanel.files.openPreview.ariaLabel",
      defaultMessage: "Open preview of {fileName}",
      description: "Accessible label for a file row button in the Work task details panel that downloads the file and opens it in the right-side preview panel. The fileName placeholder is the displayed name of the input or output file."
    }, {
      fileName: file.name
    });
    topaz = bloom;
  } else if (ivory) {
    let coral;
    coral = hazel.formatMessage({
      id: "chatgptConversations.summaryPanel.files.downloading.ariaLabel",
      defaultMessage: "Downloading {fileName}",
      description: "Accessible label for a disabled file row in the Work task details panel while its download is pending. The fileName placeholder is the displayed name of the input or output file."
    }, {
      fileName: file.name
    });
    topaz = coral;
  } else {
    let drift;
    drift = hazel.formatMessage({
      id: "chatgptConversations.summaryPanel.files.download.ariaLabel",
      defaultMessage: "Download {fileName}",
      description: "Accessible label for a file row button in the Work task details panel. The fileName placeholder is the displayed name of the input or output file that will be downloaded."
    }, {
      fileName: file.name
    });
    topaz = drift;
  }
  let ultra = () => {
    ivory || file.downloadTarget == null || (jasper(true), useChatgptComposerControllerH(garnet, flint.get(writingBlocksControllerAtom), {
      conversationId,
      fileName: file.name,
      tabKey: file.fileId ?? `${file.messageId}:${file.name}`,
      target: file.downloadTarget
    }).catch(error => {
      appActionSidebarProjectRefSchema.warning("ChatGPT task file open failed", {
        safe: {},
        sensitive: {
          error
        }
      });
      flint.get(toastAtom).danger(lotus ? hazel.formatMessage({
        id: "chatgptConversations.summaryPanel.files.previewFailed.toast",
        defaultMessage: "Failed to open {fileName}",
        description: "Error toast shown when a file in the Work task details panel cannot be downloaded and opened in the right-side preview panel. The fileName placeholder is the displayed file name."
      }, {
        fileName: file.name
      }) : hazel.formatMessage({
        id: "chatgptConversations.summaryPanel.files.downloadFailed.toast",
        defaultMessage: "Failed to download {fileName}",
        description: "Error toast shown when a file in the Work task details panel cannot be downloaded. The fileName placeholder is the displayed file name."
      }, {
        fileName: file.name
      }));
    }).finally(() => {
      jasper(false);
    }));
  };
  return <PopoverMenu.ItemButton {...{
    "aria-busy": ivory,
    "aria-label": topaz,
    disabled: ivory,
    tone: "muted",
    onClick: ultra,
    children: sage
  }} />;
}
function marble(eagle) {
  let {
      shouldBlockExternalEgress,
      source
    } = eagle,
    frost = <PluginManagePathForCatalogEntry {...{}} />;
  let glide = !shouldBlockExternalEgress,
    honey = <PopoverMenu.ItemLeading {...{
      children: <AppIconKG {...{
        alt: "",
        className: "icon-sm shrink-0 object-contain",
        fallback: frost,
        knownAppId: source.connectorId,
        loadRemote: glide,
        logoUrl: source.logoUrl
      }} />
    }} />;
  let iris = <PopoverMenu.ItemLabel {...{
    children: source.label
  }} />;
  return <PopoverMenu.Item {...{
    tone: "muted",
    title: source.label,
    children: [honey, iris]
  }} />;
}
function nickel(jewel) {
  let {
      conversationId,
      subagents
    } = jewel,
    knoll = CodexPluginActionType(ensureComposerEsm_S8_Init),
    lunar = moss => <PopoverMenu.ItemButton {...{
      tone: "muted",
      onClick: () => _useChatgptComposerControllerF(knoll, {
        conversationId,
        selectedThreadId: moss.threadId
      }),
      children: [<PopoverMenu.ItemLeading {...{
        variant: "preview",
        children: <IsNotNullish {...{
          seed: moss.threadId,
          "aria-hidden": true
        }} />
      }} />, <PopoverMenu.ItemLabel {...{
        children: moss.displayName ?? <MemoizedFormattedMessage {...{
          id: "chatgptConversations.subagents.nameFallback",
          defaultMessage: "Subagent",
          description: "Short fallback name shown in Work subagent activity chips and side panel rows when the backend did not provide a display name."
        }} />
      }} />, <PopoverMenu.ItemMeta {...{
        children: <Quest {...{
          status: moss.status
        }} />
      }} />]
    }} />;
  return <PopoverMenu.List {...{
    items: subagents,
    getKey: onyx,
    children: lunar
  }} />;
}
function onyx(north) {
  return north.threadId;
}
