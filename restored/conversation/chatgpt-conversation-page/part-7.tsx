// Restored from ref/webview/assets/chatgpt-conversation-page-Bq7nUgvB.js
// Wave FZ — full polished body from `chatgpt-conversation-page-Bq7nUgvB/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 83 (verified 274/356).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 7/11
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
import {
  ensureSummaryPanelDisplayAtomInit,
  ensureSummaryPanelDisplayRuntimeInit,
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
const AppInitialOL: any = undefined;
const AppInitialOZ: any = undefined;
const AppInitialRG: any = undefined;
const AppInitialUL: any = undefined;
const AppInitialZE: any = undefined;
const _c: any = undefined;
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
const nickel: any = undefined;
const onyx: any = undefined;
const pearl: any = undefined;
const quartz: any = undefined;
const river: any = undefined;
const slate: any = undefined;
const timber: any = undefined;
function umbra(ivory) {
  let {
    status
  } = ivory;
  switch (status) {
    case "waiting":
      {
        let jasper;
        return <MemoizedFormattedMessage {...{
          id: "chatgptConversations.summaryPanel.subagents.status.waiting",
          defaultMessage: "Waiting",
          description: "Short status label for a delegated agent waiting to start in the Work task details panel. Sibling statuses are Working, Done, and Failed."
        }} />;
      }
    case "working":
      {
        let kelp;
        return <MemoizedFormattedMessage {...{
          id: "chatgptConversations.summaryPanel.subagents.status.working",
          defaultMessage: "Working",
          description: "Short status label for a delegated agent currently working in the Work task details panel. Sibling statuses are Waiting, Done, and Failed."
        }} />;
      }
    case "done":
      {
        let lotus;
        return <MemoizedFormattedMessage {...{
          id: "chatgptConversations.summaryPanel.subagents.status.done",
          defaultMessage: "Done",
          description: "Short status label for a completed delegated agent in the Work task details panel. Sibling statuses are Waiting, Working, and Failed."
        }} />;
      }
    case "failed":
      {
        let mint;
        return <MemoizedFormattedMessage {...{
          id: "chatgptConversations.summaryPanel.subagents.status.failed",
          defaultMessage: "Failed",
          description: "Short status label for a failed delegated agent in the Work task details panel. Sibling statuses are Waiting, Working, and Done."
        }} />;
      }
  }
}
var violet,
  willow,
  xenon,
  yellow,
  zinc = esmInit(() => {
    violet = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    willow = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    codexProjectKey();
    ensureConversationPageEsm_GZ_Init();
    AppInitialOZ();
    ensureConversationPageEsm_B0_Init();
    ensureComposerEsm_AG_Init();
    ensureImportSettingsCLInit();
    AppInitialUL();
    AppInitialOL();
    ensureComposerEsm_Sut_Init();
    ensureComposerEsm_Ilt_Init();
    ensureComposerEsm_Hlt_Init();
    CodexPluginDirectoryEntrypoint();
    falcon();
    pluginProductBrowseNav();
    AppInitialRG();
    ensureConversationPageEsm_TP_Init();
    ensureAppScopeInit();
    filterConversationTimelineItems();
    ensureSeededAvatarInit();
    AppInitialZE();
    ToggleThreadSummaryPanel();
    ensureSummaryPanelDisplayAtomInit();
    initToggleThreadSummaryPanelAtoms();
    ensureSummaryPanelDisplayRuntimeInit();
    posixPathBasename();
    ensureComposerEsm_TI_Init();
    _useChatgptComposerControllerM();
    _useChatgptComposerControllerD();
    yellow = identity({
      sources: {
        id: "chatgptConversations.summaryPanel.sources.title",
        defaultMessage: "Sources",
        description: "Title for the sources section in the ChatGPT summary panel"
      }
    });
  });
function amber(nova) {
  let olive = new timber(),
    prism = new timber(),
    quill = new timber(),
    reef = new Map(),
    sage = new Map(),
    topaz = new Set(),
    ultra = [],
    vapor = garnet(nova);
  for (let zephyr of nova) {
    let acorn = chatgptMessageFallbackId(zephyr);
    zephyr.author.role === "assistant" && ultra.push(messageContentToPlainText(zephyr));
    for (let eagle of basalt(zephyr)) olive.upsert(eagle);
    let bloom = codexDirectiveMarkedExtensions(zephyr.metadata).map(item => alpha({
      downloadUrl: item.downloadUrl,
      fileId: item.fileId,
      libraryFileId: item.libraryFileId,
      messageId: acorn,
      mimeType: item.mimeType,
      name: item.name,
      sizeBytes: item.sizeBytes
    }));
    if (zephyr.author.role === "user") for (let frost of bloom) olive.upsert(frost);else if (zephyr.author.role === "assistant") {
      for (let glide of bloom) prism.upsert(glide);
      for (let honey of $s(zephyr)) prism.upsert(honey);
    }
    let coral = daisy(zephyr);
    for (let iris of coral) {
      let jewel = iris.file.libraryFileId;
      if (jewel == null) continue;
      let knoll = iris.versionNumber ?? -1;
      knoll < (sage.get(jewel) ?? -1) || (sage.set(jewel, knoll), topaz.add(jewel), prism.upsert(iris.file));
    }
    if (coral.length === 0) for (let lunar of flint(zephyr)) quill.upsert(lunar);
    let drift = hazel(zephyr, vapor);
    if (drift != null) {
      let moss = reef.get(drift.key);
      reef.set(drift.key, moss == null ? drift : {
        ...moss,
        connectorId: drift.connectorId ?? moss.connectorId,
        label: drift.label,
        logoUrl: drift.logoUrl ?? moss.logoUrl,
        pluginId: drift.pluginId ?? moss.pluginId,
        resourceUri: drift.resourceUri ?? moss.resourceUri
      });
    }
  }
  let wheat = ultra.join("\n").toLocaleLowerCase();
  for (let north of quill.values()) (bravo(north).some(item => olive.hasAlias(item)) || wheat.includes(north.name.toLocaleLowerCase())) && olive.upsert(north);
  let yarn = prism.values();
  for (let orbit of topaz) olive.deleteAlias(`library:${orbit}`);
  return {
    inputs: olive.values(),
    outputs: yarn,
    pluginSources: [...reef.values()]
  };
}
function basalt(pine) {
  let quest = lemon.safeParse(pine.metadata);
  if (!quest.success) return [];
  let ridge = [...(quest.data.content_references ?? [])];
  for (let unity of Object.values(quest.data.content_references_by_file ?? {})) {
    let vale = Array.isArray(unity) ? unity : [unity];
    ridge.push(...vale);
  }
  let storm = [],
    tide = chatgptMessageFallbackId(pine);
  for (let wave of ridge) {
    let apex = indigo.safeParse(wave);
    if (apex.success) {
      storm.push(cedar(apex.data, tide));
      continue;
    }
    let brook = kite.safeParse(wave);
    if (brook.success) for (let cliff of brook.data.items) {
      let dusk = jade.safeParse(cliff);
      dusk.success && storm.push(cedar({
        ...dusk.data,
        type: "file"
      }, tide));
    }
  }
  return storm;
}
function cedar(elm, fern) {
  return alpha({
    downloadUrl: elm.download_url ?? null,
    fileId: elm.id ?? elm.file_id ?? null,
    libraryFileId: elm.library_file_id ?? null,
    messageId: fern,
    mimeType: elm.mime_type ?? null,
    name: elm.name,
    sizeBytes: elm.size ?? elm.file_size_bytes ?? null
  });
}
function $s(grove) {
  let hill = asRecord(grove.metadata),
    isle = asRecord(hill?.__internal),
    juniper = asRecord(hill?._internal),
    lagoon = [hill?.code_interpreter_file_links, isle?.code_interpreter_file_links, juniper?.code_interpreter_file_links],
    meadow = [];
  for (let nest of lagoon) {
    let oak = _c.safeParse(nest);
    if (oak.success) for (let [petal, quiet] of Object.entries(oak.data)) {
      let rain = delta(quiet),
        seed = copper(petal);
      rain == null || seed == null || meadow.push(alpha({
        fileId: rain,
        messageId: chatgptMessageFallbackId(grove),
        name: seed,
        sandboxPath: petal
      }));
    }
  }
  return meadow;
}
function daisy(trail) {
  if (trail.author.role !== "tool") return [];
  let urn = marble.safeParse(trail.metadata);
  if (!urn.success) return [];
  let vine = gamma[urn.data.invoked_resource.resource_uri];
  if (vine == null) return [];
  let wind = asRecord(tryParseJsonText(trail));
  if (wind == null) return [];
  let yarrow = asRecord(asRecord(wind.result)?.structuredContent) ?? wind,
    azure = asRecord(wind.arguments),
    birch = urn.data.invoked_plugin?.parsed_function_call?.kwargs,
    canyon = asRecord(birch?.args),
    dew = chatgptMessageFallbackId(trail);
  if (vine === "create_library_file" && Array.isArray(yarrow.results)) {
    let grain = azure?.files;
    return !Array.isArray(grain) || grain.length !== yarrow.results.length ? [] : yarrow.results.flatMap((item, index) => {
      let haven = nickel.safeParse(item);
      return !haven.success || haven.data.operation !== vine ? [] : [ember(haven.data, dew, delta(grain[index]))];
    });
  }
  let ever = nickel.safeParse(yarrow);
  if (!ever.success || ever.data.operation !== vine) return [];
  let field = delta(azure?.file) ?? delta(canyon?.file) ?? delta(birch?.file);
  return [ember(ever.data, dew, field)];
}
function ember(ink, jadeite, kernel) {
  return {
    file: alpha({
      fileId: ink.file_id,
      libraryFileId: ink.library_file_id,
      messageId: jadeite,
      mimeType: ink.mime_type ?? null,
      name: ink.file_name,
      sandboxPath: kernel,
      sizeBytes: ink.file_size_bytes ?? null
    }),
    versionNumber: ink.current_version_number ?? null
  };
}
function flint(leaf) {
  if (leaf.author.role !== "tool") return [];
  let maple = river.safeParse(leaf.metadata);
  if (!maple.success) return [];
  let nimbus = asRecord(tryParseJsonText(leaf));
  if (nimbus == null) return [];
  let opal = asRecord(asRecord(nimbus.result)?.structuredContent) ?? nimbus;
  return !(maple.data.invoked_resource?.resource_uri === "/library/search" || opal.api_tool_source === "files/search") || !Array.isArray(opal.results) ? [] : opal.results.flatMap(item => {
    let plume = onyx.safeParse(item);
    if (!plume.success) return [];
    let quillow = plume.data;
    return [alpha({
      fileId: quillow.file_id,
      libraryFileId: quillow.library_file_id,
      messageId: chatgptMessageFallbackId(leaf),
      mimeType: quillow.mime_type ?? null,
      name: quillow.name,
      sizeBytes: quillow.file_size_bytes ?? null
    })];
  });
}
function garnet(root) {
  let silk = new Set();
  for (let thorn of root) {
    let upland = quartz.safeParse(thorn.metadata);
    if (upland.success) for (let vista of upland.data.selected_mcp_sources ?? []) {
      let wisp = pearl.safeParse(vista);
      !wisp.success || wisp.data.connector_type !== "MCP" || wisp.data.status !== "ONLY_ME" && wisp.data.app_metadata?.review?.status !== "DEVELOPMENT" || silk.add(wisp.data.id);
    }
  }
  return silk;
}
function hazel(yonder, zenith) {
  if (yonder.author.role !== "tool" || yonder.status === "in_progress" || yonder.status === "finished_partial_completion") return null;
  let anvil = slate.safeParse(yonder.metadata);
  if (!anvil.success) return null;
  let beacon = anvil.data,
    crag = beacon.chatgpt_sdk?.tool_response_metadata?.status;
  if (beacon.is_error === true || beacon.chatgpt_sdk?.is_error === true || crag === "error" || crag === "cancelled" || beacon.__internal?.api_tool_error?.error_code != null || beacon._internal?.api_tool_error?.error_code != null || beacon.invoked_resource?.publish_status === "private" || beacon.chatgpt_sdk?.distribution_channel === "only_me") return null;
  let dome = beacon.invoked_plugin?.http_response_status;
  if (dome != null) {
    let inlet = Number(dome);
    if (!Number.isInteger(inlet) || inlet < 200 || inlet >= 300) return null;
  }
  let eddy = beacon.invoked_resource?.connector_id ?? null;
  if (eddy == null || zenith.has(eddy)) return null;
  let fjord = beacon.invoked_plugin?.plugin_id ?? null,
    glen = beacon.invoked_resource?.resource_uri ?? null,
    hearth = beacon.invoked_plugin?.connector_name ?? beacon.invoked_resource?.app_name ?? fjord ?? echo(glen) ?? eddy;
  return {
    connectorId: eddy,
    key: `plugin:${eddy}`,
    kind: "plugin",
    label: hearth,
    logoUrl: beacon.tool_icons?.find(jetty => harbor.test(jetty)) ?? null,
    pluginId: fjord,
    resourceUri: glen
  };
}
