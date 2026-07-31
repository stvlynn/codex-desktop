// Restored from ref/webview/assets/chatgpt-conversation-page-Bq7nUgvB.js
// Wave FZ — full polished body from `chatgpt-conversation-page-Bq7nUgvB/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 83 (verified 274/356).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 8/11
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
const AppInitialLh: any = undefined;
const AppInitialMF: any = undefined;
const AppInitialTF: any = undefined;
const AppInitialU5: any = undefined;
const AppInitialW8: any = undefined;
const AppInitialXF: any = undefined;
const alpha: any = undefined;
const Alpha: any = undefined;
const bravo: any = undefined;
const Bravo: any = undefined;
const copper: any = undefined;
const Copper: any = undefined;
const deferredNavigationFT: any = undefined;
const deferredUiXT: any = undefined;
function delta({
  downloadUrl = null,
  fileId = null,
  libraryFileId = null,
  messageId,
  mimeType = null,
  name,
  sandboxPath = null,
  sizeBytes = null
}) {
  let cedar = useChatgptComposerControllerG(downloadUrl),
    daisy = {
      downloadTarget: cedar == null ? fileId == null ? null : {
        fileId,
        type: "file-id"
      } : {
        downloadUrl: cedar,
        type: "download-url"
      },
      fileId,
      key: "",
      kind: "file",
      libraryFileId,
      messageId,
      mimeType,
      name,
      sandboxPath,
      sizeBytes
    };
  return {
    ...daisy,
    key: echo(daisy)[0] ?? `message:${messageId}`
  };
}
function echo(ember) {
  let flint = [ember.libraryFileId == null ? null : `library:${ember.libraryFileId}`, ember.sandboxPath == null ? null : `sandbox:${ember.sandboxPath}`, ember.fileId == null ? null : `file:${ember.fileId}`, ember.downloadTarget?.type === "download-url" ? `download:${ember.downloadTarget.downloadUrl}` : null].filter(item => item != null);
  return flint.length > 0 ? flint : [`message:${ember.messageId}:name:${ember.name}`];
}
function falcon(event, garnet) {
  return {
    ...garnet,
    downloadTarget: garnet.downloadTarget ?? event.downloadTarget,
    fileId: garnet.fileId ?? event.fileId,
    key: event.key,
    libraryFileId: garnet.libraryFileId ?? event.libraryFileId,
    mimeType: garnet.mimeType ?? event.mimeType,
    sandboxPath: garnet.sandboxPath ?? event.sandboxPath,
    sizeBytes: garnet.sizeBytes ?? event.sizeBytes
  };
}
function gamma(hazel) {
  let ivory = hazel.split("/").at(-1)?.trim();
  return ivory == null || ivory.length === 0 ? null : ivory;
}
function harbor(jasper) {
  return typeof jasper == "string" && jasper.trim().length > 0 ? jasper : null;
}
function indigo(kelp) {
  let lotus = kelp?.split("/").filter(Boolean).at(-1);
  return lotus == null || lotus.length === 0 ? null : lotus.replaceAll("_", " ");
}
var jade,
  kite,
  lemon,
  marble,
  nickel,
  onyx,
  _c,
  pearl,
  quartz,
  river,
  slate,
  timber,
  umbra,
  violet,
  willow,
  xenon = esmInit(() => {
    coalesceTruthy();
    useChatgptComposerControllerUnderscore();
    AppInitialXF();
    ensureComposerEsm_BF_Init();
    jade = {
      "/library/create_library_file": "create_library_file",
      "/library/replace_library_file": "replace_library_file",
      "/connector_openai_library/implicit_link::connector_openai_library/create_library_file": "create_library_file",
      "/connector_openai_library/implicit_link::connector_openai_library/replace_library_file": "replace_library_file"
    };
    kite = /\/ecosystem\/apps\/[^/]+/;
    lemon = deferredUiXT({
      download_url: coalesceTruthy().trim().min(1).nullish(),
      file_id: coalesceTruthy().trim().min(1).nullish(),
      file_size_bytes: remote().finite().nonnegative().nullish(),
      id: coalesceTruthy().trim().min(1).nullish(),
      library_file_id: coalesceTruthy().trim().min(1).nullish(),
      mime_type: coalesceTruthy().trim().min(1).nullish(),
      name: coalesceTruthy().trim().min(1),
      size: remote().finite().nonnegative().nullish(),
      type: sortedArrayFrom("file")
    });
    marble = lemon.omit({
      type: true
    }).extend({
      type: sortedArrayFrom("file").optional()
    });
    nickel = deferredUiXT({
      items: deferredNavigationFT(siteAnalyticsPath()),
      type: sortedArrayFrom("file_navlist")
    });
    onyx = deferredUiXT({
      content_references: deferredNavigationFT(siteAnalyticsPath()).nullish(),
      content_references_by_file: ensureAccountPlanQueryInit(coalesceTruthy(), siteAnalyticsPath()).nullish()
    });
    _c = ensureAccountPlanQueryInit(coalesceTruthy(), siteAnalyticsPath());
    pearl = deferredUiXT({
      invoked_plugin: deferredUiXT({
        parsed_function_call: deferredUiXT({
          kwargs: ensureAccountPlanQueryInit(coalesceTruthy(), siteAnalyticsPath()).optional()
        }).optional()
      }).nullish(),
      invoked_resource: deferredUiXT({
        resource_uri: coalesceTruthy()
      })
    });
    quartz = deferredUiXT({
      current_version_number: remote().int().nonnegative().nullish(),
      file_id: coalesceTruthy().trim().min(1),
      file_name: coalesceTruthy().trim().min(1),
      file_size_bytes: remote().finite().nonnegative().nullish(),
      library_file_id: coalesceTruthy().trim().min(1),
      mime_type: coalesceTruthy().trim().min(1).nullish(),
      operation: buildSiteSettingsPath(["create_library_file", "replace_library_file"]),
      status: sortedArrayFrom("succeeded")
    });
    river = deferredUiXT({
      file_id: coalesceTruthy().trim().min(1),
      file_size_bytes: remote().finite().nonnegative().nullish(),
      library_file_id: coalesceTruthy().trim().min(1),
      mime_type: coalesceTruthy().trim().min(1).nullish(),
      name: coalesceTruthy().trim().min(1)
    });
    slate = deferredUiXT({
      app_metadata: deferredUiXT({
        review: deferredUiXT({
          status: coalesceTruthy().nullish()
        }).nullish()
      }).nullish(),
      connector_type: coalesceTruthy().nullish(),
      id: coalesceTruthy().trim().min(1),
      status: coalesceTruthy().nullish()
    });
    timber = deferredUiXT({
      selected_mcp_sources: deferredNavigationFT(siteAnalyticsPath()).nullish()
    });
    umbra = deferredUiXT({
      invoked_resource: deferredUiXT({
        resource_uri: coalesceTruthy().trim().min(1).nullish()
      }).nullish()
    });
    violet = deferredUiXT({
      __internal: deferredUiXT({
        api_tool_error: deferredUiXT({
          error_code: siteAnalyticsPath().optional()
        }).nullish()
      }).nullish(),
      _internal: deferredUiXT({
        api_tool_error: deferredUiXT({
          error_code: siteAnalyticsPath().optional()
        }).nullish()
      }).nullish(),
      chatgpt_sdk: deferredUiXT({
        distribution_channel: coalesceTruthy().nullish(),
        is_error: ensureComposerEsm_MT_Init().nullish(),
        tool_response_metadata: deferredUiXT({
          status: coalesceTruthy().nullish()
        }).nullish()
      }).nullish(),
      invoked_plugin: deferredUiXT({
        connector_name: coalesceTruthy().trim().min(1).nullish(),
        http_response_status: siteAnalyticsEventsPath([coalesceTruthy(), remote()]).nullish(),
        plugin_id: coalesceTruthy().trim().min(1).nullish()
      }).nullish(),
      invoked_resource: deferredUiXT({
        app_name: coalesceTruthy().trim().min(1).nullish(),
        connector_id: coalesceTruthy().trim().min(1).nullish(),
        publish_status: coalesceTruthy().nullish(),
        resource_uri: coalesceTruthy().trim().min(1).nullish()
      }).nullish(),
      is_error: ensureComposerEsm_MT_Init().nullish(),
      tool_icons: deferredNavigationFT(coalesceTruthy().trim().min(1)).nullish()
    });
    willow = class {
      files = [];
      indexByAlias = new Map();
      deleteAlias(mint) {
        let nova = this.indexByAlias.get(mint);
        if (nova != null) {
          this.files[nova] = undefined;
          for (let [olive, prism] of this.indexByAlias) prism === nova && this.indexByAlias.delete(olive);
        }
      }
      hasAlias(quill) {
        return this.indexByAlias.has(quill);
      }
      upsert(reef) {
        let sage = echo(reef),
          topaz = [...new Set(sage.flatMap(item => {
            let yarn = this.indexByAlias.get(item);
            return yarn == null ? [] : [yarn];
          }))].sort((zephyr, acorn) => zephyr - acorn);
        if (topaz.length === 0) {
          let bloom = this.files.length;
          this.files.push(reef);
          for (let coral of sage) this.indexByAlias.set(coral, bloom);
          return;
        }
        let ultra = topaz[0];
        if (ultra == null) return;
        let vapor = this.files[ultra] ?? reef;
        for (let drift of topaz.slice(1)) {
          let eagle = this.files[drift];
          eagle != null && (vapor = falcon(vapor, eagle));
          this.files[drift] = undefined;
        }
        vapor = falcon(vapor, reef);
        this.files[ultra] = vapor;
        let wheat = new Set(topaz);
        for (let [frost, glide] of this.indexByAlias) wheat.has(glide) && this.indexByAlias.set(frost, ultra);
        for (let honey of echo(vapor)) this.indexByAlias.set(honey, ultra);
      }
      values() {
        return this.files.filter(item => item != null);
      }
    };
  });
function yellow({
  messages,
  pendingAttachments = [],
  turns
}) {
  let iris = bravo(messages),
    jewel = [...iris.inputs],
    knoll = new Map(),
    lunar = new Map(),
    moss = zinc(messages),
    north = [];
  for (let orbit of pendingAttachments) jewel.some(item => item.fileId === orbit.id || orbit.libraryFileId != null && item.libraryFileId === orbit.libraryFileId) || jewel.push({
    downloadTarget: {
      fileId: orbit.id,
      type: "file-id"
    },
    fileId: orbit.id,
    key: `input:pending:${orbit.id}`,
    kind: "file",
    libraryFileId: orbit.libraryFileId ?? null,
    messageId: "pending-submission",
    mimeType: orbit.mimeType,
    name: orbit.name,
    sandboxPath: null,
    sizeBytes: orbit.size ?? null
  });
  for (let {
    id,
    turn
  } of turns) for (let pine of amber(turn.items)) {
    if (pine.type === "assistant-message") {
      for (let quest of pine.contentReferences) for (let ridge of ensureComposerEsm_II_Init(quest)) lunar.has(ridge.url) || lunar.set(ridge.url, {
        key: ridge.url,
        kind: "web",
        label: ridge.label,
        title: ridge.title,
        url: ridge.url
      });
      continue;
    }
    if (pine.type === "todo-list") {
      north = pine.plan.map((item, index) => ({
        key: `progress:${id}:${String(index)}`,
        label: item.step,
        status: moss ? "completed" : item.status
      }));
      continue;
    }
    if (pine.type === "generated-image" && pine.status === "completed" && pine.src != null) {
      let storm = `image:${pine.id}`;
      knoll.set(storm, {
        height: pine.height ?? null,
        imageId: pine.id,
        key: storm,
        kind: "generated-image",
        src: pine.src,
        width: pine.width ?? null
      });
    }
  }
  return {
    inputs: jewel,
    outputs: [...iris.outputs, ...knoll.values()],
    progressSteps: north,
    sources: [...lunar.values(), ...iris.pluginSources],
    subagents: fileAttachmentsFromMetadata(messages, {
      isTurnLive: turns.at(-1)?.turn.status === "in_progress"
    })?.subagents ?? []
  };
}
function zinc(tide) {
  let unity = -1;
  for (let vale = tide.length - 1; vale >= 0; vale--) {
    let wave = tide[vale];
    if (wave?.recipient === "turn_plan.update_turn_plan" && CHATGPT_DIL_ID(wave)?.item?.type === "todo-list") {
      unity = vale;
      break;
    }
  }
  return unity === -1 ? false : tide.slice(unity + 1).some(item => item.author.role === "assistant" && item.channel === "final" && item.recipient === "all" && item.status === "finished_successfully");
}
function amber(apex) {
  return apex.flatMap(item => item.type === "chatgpt-reasoning-group" ? item.items : [item]);
}
var basalt = esmInit(() => {
  ThreadResourceCard();
  xenon();
  AppInitialMF();
  AppInitialTF();
});
export function ChatgptConversationPageIcon() {
  let {
      conversationId
    } = AppInitialU5(),
    {
      search
    } = useLocation();
  if (conversationId == null) {
    let juniper;
    return <Navigate {...{
      to: "/",
      replace: true
    }} />;
  }
  let brook = ensureComposerEsm_ZI_Init(conversationId);
  let cliff = brook,
    dusk = AppInitialW8(search);
  let elm = dusk,
    fern = <AppInitialLh.Surface />;
  let grove = elm ? null : <Alpha {...{
    conversationId: cliff
  }} />;
  let hill = `${cliff}:${elm}`,
    isle = <Bravo key={hill} {...{
      conversationId: cliff,
      isTemporaryChat: elm
    }} />;
  return <>
      {fern}
      {grove}
      {isle}
    </>;
}
