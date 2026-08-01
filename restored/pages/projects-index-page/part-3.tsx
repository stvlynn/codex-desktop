// Restored from ref/webview/assets/projects-index-page-AZjn-SLu.js
// Wave FZ — full polished body from `projects-index-page-AZjn-SLu/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 63 (verified 134/196).
// Careful split 3/3
/* split-lane-import-depth:1 */

import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { defaultHourlyScheduleConfig as DefaultHourlyScheduleConfig } from "../../automation/default-hourly-schedule-config";
import { normalizeCronScheduleFields } from "../../automation/normalize-cron-schedule-fields";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { chatgptConversationsGateAtom, useStepsProseAtom, writingBlocksControllerAtom } from "../../composer/composer-appscope-atoms";
import { ensureComposerEsm_B7_Init, ensureComposerEsm_F7_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_ML_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_QN_Init, ensureComposerEsm_Sp_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_TI_Init } from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init, ensureConversationPageEsm_Ist_Init, ensureConversationPageEsm_Qa_Init as EnsureConversationPageEsm_Qa_Init } from "../../conversation/conversation-page-esm-inits";
import { isIterateeCall } from "../../boundaries/lodash-clone-deep-guts";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { useNavigate } from "../../boundaries/react-router-navigation";
import { chatgpt2 } from "../../browser/chatgpt2";
import { sidebarRealtimeStatusMessages } from "../../chat/sidebar-realtime-status";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { sidebarProjectMessages } from "../../chatgpt/sidebar-project-messages";
import { INLINE_MENTION_GROUP_CLASS } from "../../composer/inline-mention-class-names";
import { ConversationNavListItem } from "../../conversation/conversation-nav-list-item";
import { conversationRecencyTimestamp } from "../../conversation/conversation-recency-timestamp";
import { ensureConversationWorkRouteInit } from "../../conversation/conversation-work-path";
import { deferredConversationN } from "../../conversation/deferred-conversation-n";
import { deferredConversationSo } from "../../conversation/deferred-conversation-so";
import { deferredConversationSQ } from "../../conversation/deferred-conversation-sq-2";
import { ensurePinnedConversationsQueryInit } from "../../conversation/ensure-pinned-conversations-query-init";
import { buildPullRequestRoutePath } from "../../conversation/github-pull-request-urls";
import { ensureSidebarThreadKeyPrefixesInit, localThreadIdFromSidebarKey, parseSidebarThreadKey, toLocalSidebarThreadKey } from "../../conversation/sidebar-thread-keys";
import { ThreadKeyVirtualList } from "../../conversation/thread-key-virtual-list";
import { DesktopPersistenceKeys } from "../../desktop/persistence-keys";
import { isRemoteControlConnectionFailedError } from "../../desktop/remote-control-connection-failed-error";
import { ensureRemoteConnectionsStorageInit } from "../../environments/ensure-remote-connections-storage-init";
import { isProjectActionable } from "../../environments/is-project-actionable";
import { resolveRootPaths } from "../../environments/resolve-root-paths";
import { MOBILE_MFA_SETUP_FEATURE_GATE_ID, REMOTE_CONTROL_PAIRING_FEATURE_GATE_ID } from "../../feature-gates/feature-gate-ids";
import { worktreeLeafName as WorktreeLeafName } from "../../files/worktree-leaf-name";
import { pullRequestLastAccount as PullRequestLastAccount } from "../../git/pull-request-last-account-2";
import { ProjectPinnedActionsMenu } from "../../home/project-pinned-actions-menu";
import { ensureRealtimeVoiceStartHandlerInit as EnsureRealtimeVoiceStartHandlerInit } from "../../home/realtime-voice-nux";
import { useInfiniteListQuery } from "../../hooks/use-infinite-list-query";
import { useQueryClient } from "../../hooks/use-query-client";
import { HostConnectionStatusBadge } from "../../hosts/host-connection-status-badge";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAo } from "../../icons/app-icon-ao";
import { AppIconAZ } from "../../icons/app-icon-az";
import { AppIconCS } from "../../icons/app-icon-cs";
import { ensureAppIconKhInit as EnsureAppIconKhInit } from "../../icons/app-icon-kh";
import { AppIconKo } from "../../icons/app-icon-ko";
import { AppIconKS } from "../../icons/app-icon-ks";
import { AppIconPlt } from "../../icons/app-icon-plt";
import { AppIconQI } from "../../icons/app-icon-qi";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconYj } from "../../icons/app-icon-yj";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { AppIconYm } from "../../icons/app-icon-ym";
import { rewriteFileCitationMarkers } from "../../markdown/rewrite-file-citation-markers";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { useColdNavigate } from "../../navigation/use-cold-navigate";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { mcpServersNeedingLoginFromImport } from "../../onboarding/mcp-servers-needing-login-from-import";
import { thirdPartyAgentIdsForCursorGate } from "../../plugins/third-party-agent-ids-for-cursor-gate";
import { parsePullRequestFilterQuery } from "../../pull-requests/parse-pull-request-filter-query";
import { visibleRemoteControlConnections } from "../../remote-control/remote-control-connection-sets";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureBrowserDownloadSettingsInit as EnsureBrowserDownloadSettingsInit } from "../../settings/browser-download-settings";
import { ensureMemoryScopeHelpersInit } from "../../settings/ensure-memory-scope-helpers-init";
import { ensureGpuTearingDebugSettingsInit, gpuTearingDebugSettingsAtom } from "../../settings/gpu-tearing-debug-settings";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { chatgptProjectIdsByThreadKey } from "../../sidebar/chatgpt-project-ids-by-thread-key";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { threadOverflowMenuN, threadOverflowMenuT as ThreadOverflowMenuT } from "../../thread/thread-overflow-menu";
import { BrandedIcon } from "../../ui/branded-icon";
import { deferredT } from "../../ui/deferred-t";
import { deferredUiH } from "../../ui/deferred-ui-h";
import { deferredUiHT } from "../../ui/deferred-ui-ht-2";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";
import { ElectronOnly } from "../../ui/electron-only";
import { ensureAllUnavailableClusterInit } from "../../ui/ensure-all-unavailable-cluster-init";
import { iconXs } from "../../ui/icon-xs";
import { InsetBorderPanel } from "../../ui/inset-border-panel";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { remote } from "../../ui/remote";
import { SearchableDetailPageLayout } from "../../ui/searchable-detail-page-layout";
import { ensureUseSearchablePageTitleVisibilityInit, useSearchablePageTitleVisibility } from "../../ui/use-searchable-page-title-visibility";
import { UtilityBarCategoryValue } from "../../ui/utility-bar-category-value";
import { coerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { hvtBindableHelper } from "../../utils/hvt-bindable-helper";
import { isBareAllowedPermission } from "../../utils/is-bare-allowed-permission";
import { toggleSortedIdList } from "../../utils/toggle-sorted-id-list";
import { ensureImportSettingsCLInit, ensureImportSettingsCsInit as EnsureImportSettingsCsInit, ensurePersonalizationCInit, ensurePersonalizationG0Init, ensurePersonalizationJutInit, ensurePersonalizationK0Init } from "../../utils/wave-as-gap-ensure-inits";
import { requestRealtimeVoicePresentationSurface } from "../../voice/request-realtime-voice-presentation-surface";

// Cross-part stubs.
const AppIconJo: any = undefined;
const AppInitialDa: any = undefined;
const AppInitialEA: any = undefined;
const AppInitialEa: any = undefined;
const AppInitialGS: any = undefined;
const AppInitialJo: any = undefined;
const AppInitialOF: any = undefined;
const AppInitialOZ: any = undefined;
const AppInitialOa: any = undefined;
const AppInitialPa: any = undefined;
const AppInitialQS: any = undefined;
const AppInitialQo: any = undefined;
const AppInitialSa: any = undefined;
const AppInitialYo: any = undefined;
const CodexThread: any = undefined;
const DeferredHostsRQ3: any = undefined;
const DeferredUiV2: any = undefined;
const HasSeenKnowledgeWorkAnnouncement: any = undefined;
const InboxItems2: any = undefined;
const InfiniteScrollSentinel: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const applySvg: any = undefined;
const basalt: any = undefined;
const chatProcessRegister: any = undefined;
const chats: any = undefined;
const daisy: any = undefined;
const deferredUiCm: any = undefined;
const deferredUiHelperLs: any = undefined;
const deferredUiRa: any = undefined;
const deferredUiXj: any = undefined;
const ember: any = undefined;
const ensureDockChevronIconInit: any = undefined;
const ensureHistoryMaterializationInit: any = undefined;
const ensureSelectWorkspaceKNInit: any = undefined;
const ensureSelectWorkspaceOhInit: any = undefined;
const indigo: any = undefined;
const jade: any = undefined;
const nickel: any = undefined;
const remote2: any = undefined;
const willow: any = undefined;
const yellow: any = undefined;

function ProjectsIndexPageHelper44(framePrime) {
  let {
      canAddSource,
      canEditLocalProject,
      initialSources,
      row
    } = framePrime,
    gasketPrime = CodexPluginActionType(appScopeAtom),
    handlePrime = useIntl(),
    insertPrime = CodexBrowserSurfaceActionType(ensureSidebarThreadKeyPrefixesInit, row.group.threadKeys),
    jacketPrime = deferredConversationSQ(insertPrime);
  let knurlPrime = jacketPrime,
    leverPrime = $r.useRef(null),
    [mountPrime, nozzlePrime] = $r.useState(false),
    [platenPrime, ratchetPrime] = $r.useState(false),
    [shimPrime, tappetPrime] = $r.useState(false),
    arborPrime = event => {
      let racePrime = leverPrime.current;
      if (racePrime != null) {
        leverPrime.current = null;
        event.preventDefault();
        bb5: switch (racePrime) {
          case "edit":
            row.group.projectKind === "local" && localThreadIdFromSidebarKey(gasketPrime, {
              initialName: row.name,
              initialSources,
              project: topaz(row.group),
              showDeleteAction: true
            });
            break bb5;
          case "rename":
            AppInitialEa(gasketPrime, row.group);
        }
      }
    };
  let bushingPrime = handlePrime.formatMessage({
    id: "projectsIndex.projectActions",
    defaultMessage: "Project actions",
    description: "Button label for project row actions"
  });
  let collarPrime = <AppIconQI {...{
    className: "icon-xs"
  }} />;
  let dowelPrime = <ReadLoginRouteQuerySnapshot {...{
    "aria-label": bushingPrime,
    className: indigo,
    color: "ghost",
    size: "icon",
    children: collarPrime
  }} />;
  let flangePrime = canEditLocalProject ? <DropdownMenu.Item {...{
    LeftIcon: AppIconYj,
    onSelect: () => {
      leverPrime.current = "edit";
      nozzlePrime(false);
    },
    children: <MemoizedFormattedMessage {...{
      id: "projectsIndex.editProject",
      defaultMessage: "Edit project",
      description: "Menu item to edit a project from the projects index"
    }} />
  }} /> : isProjectActionable(row.group) ? <DropdownMenu.Item {...{
    LeftIcon: AppIconYj,
    onSelect: () => {
      leverPrime.current = "rename";
      nozzlePrime(false);
    },
    children: <MemoizedFormattedMessage {...{
      ...AppInitialOa.menuItem
    }} />
  }} /> : null;
  let gibPrime = canAddSource ? <DropdownMenu.Item {...{
    LeftIcon: daisy,
    onSelect: () => {
      leverPrime.current = "edit";
      nozzlePrime(false);
    },
    children: <MemoizedFormattedMessage {...{
      id: "projectsIndex.addSource",
      defaultMessage: "Add source",
      description: "Menu item to add a source folder from the projects index"
    }} />
  }} /> : null;
  let hubPrime = knurlPrime.length === 0,
    idlerPrime,
    jigPrime;
  jigPrime = () => {
    nozzlePrime(false);
    ratchetPrime(true);
  };
  idlerPrime = <MemoizedFormattedMessage {...{
    id: "projectsIndex.archiveProjectThreads",
    defaultMessage: "Archive chats",
    description: "Menu item to archive all archiveable tasks in a project from the projects index"
  }} />;
  let keeperPrime = <DropdownMenu.Item {...{
    LeftIcon: AppIconJo,
    disabled: hubPrime,
    onSelect: jigPrime,
    children: idlerPrime
  }} />;
  let lugPrime = <DropdownMenu.Item {...{
    LeftIcon: chatgpt2,
    onSelect: () => {
      nozzlePrime(false);
      tappetPrime(true);
    },
    children: <MemoizedFormattedMessage {...{
      id: "projectsIndex.removeProject",
      defaultMessage: "Remove",
      description: "Menu item to remove a project from the projects index"
    }} />
  }} />;
  let mandrelPrime = <DropdownMenuPopover {...{
    align: "end",
    contentWidth: "xs",
    open: mountPrime,
    onOpenChange: nozzlePrime,
    onCloseAutoFocus: arborPrime,
    triggerButton: dowelPrime,
    children: [flangePrime, gibPrime, keeperPrime, lugPrime]
  }} />;
  let nipplePrime = platenPrime ? <DeferredHostsRQ3 {...{
    projectLabel: row.name,
    threadKeys: row.group.threadKeys,
    currentThreadKey: null,
    onOpenChange: ratchetPrime
  }} /> : null;
  let orificePrime = shimPrime && row.group.projectKind === "local" ? <MOBILE_MFA_SETUP_FEATURE_GATE_ID {...{
    project: row.group,
    projectLabel: row.name,
    onOpenChange: tappetPrime,
    onDropdownOpenChange: nozzlePrime
  }} /> : null;
  let pinPrime = shimPrime && row.group.projectKind === "remote" ? <InboxItems2 {...{
    projectId: row.group.projectId,
    projectLabel: row.name,
    onOpenChange: tappetPrime,
    onDropdownOpenChange: nozzlePrime
  }} /> : null;
  return <>
      {mandrelPrime}
      {nipplePrime}
      {orificePrime}
      {pinPrime}
    </>;
}
function reef({
  entry,
  localHasUnreadTurn,
  localStatusType,
  localUnreadMessageCount
}) {
  switch (entry?.kind) {
    case "local":
      return entry.pendingWorktree == null ? {
        type: localStatusType ?? "idle",
        unread: localHasUnreadTurn === true,
        unreadCount: localUnreadMessageCount ?? 0
      } : {
        type: entry.pendingWorktree.phase === "queued" || entry.pendingWorktree.phase === "creating" ? "loading" : entry.pendingWorktree.phase === "failed" ? "error" : "idle",
        unread: entry.pendingWorktree.needsAttention
      };
    case "remote":
      {
        let sleevePrime = entry.task.task_status_display?.latest_turn_status_display?.turn_status;
        return {
          type: sleevePrime === "in_progress" || sleevePrime === "pending" ? "loading" : sleevePrime === "failed" ? "error" : "idle",
          unread: entry.task.has_unread_turn
        };
      }
    case undefined:
      return null;
  }
}
function sage(trunnionPrime, bossPrime) {
  return trunnionPrime?.includes(bossPrime) === true ? trunnionPrime.filter(item => item !== bossPrime) : [...(trunnionPrime ?? []), bossPrime];
}
function topaz(camPrime) {
  return {
    projectId: camPrime.projectId,
    ...(camPrime.projectKind === "local" ? {
      rootPaths: resolveRootPaths(camPrime)
    } : {})
  };
}
var ultra, $r, $, vapor, wheat, yarn;
esmInit(() => {
  ultra = reactCompilerRuntime();
  serializeCharacterReferenceNode();
  ensureComposerEsm_Tft_Init();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  $r = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureComposerEsm_P5_Init();
  conversationsSidebarMessages();
  AppInitialPa();
  DeferredUiV2();
  ensureComposerEsm_B7_Init();
  ensureComposerEsm_TI_Init();
  AppIconCS();
  ensureAllUnavailableClusterInit();
  AppInitialOF();
  ensureMemoryScopeHelpersInit();
  ensureHistoryMaterializationInit();
  ensureConversationWorkRouteInit();
  AppInitialOZ();
  ensureSettingsQueryAtomsInit();
  ensureDropdownMenuInit();
  deferredUiCm();
  ensureComposerEsm_Hlt_Init();
  ensureComposerEsm_K1_Init();
  ensureSelectWorkspaceKNInit();
  ensurePersonalizationJutInit();
  isRemoteControlConnectionFailedError();
  deferredUiHelperLs();
  ensurePersonalizationG0Init();
  mcpServersNeedingLoginFromImport();
  AppInitialYo();
  applySvg();
  AppIconYlt();
  ensureAppIconSftInit();
  ensureDockChevronIconInit();
  deferredUiXj();
  AppInitialQS();
  AppInitialJo();
  normalizeCronScheduleFields();
  isRemoteControlConnectionFailedError();
  ensureConversationPageEsm_Act_Init();
  ensureComposerEsm_Sp_Init();
  gpuTearingDebugSettingsAtom();
  deferredT();
  threadOverflowMenuN();
  ensureGpuTearingDebugSettingsInit();
  iconXs();
  AppInitialGS();
  deferredUiH();
  requestRealtimeVoicePresentationSurface();
  chatProcessRegister();
  chats();
  remote2();
  AppInitialDa();
  nickel();
  willow();
  jade();
  yellow();
  basalt();
  ensureAppScopeInit();
  ensureComposerEsm_F7_Init();
  AppInitialQo();
  ember();
  BrandedIcon();
  InfiniteScrollSentinel();
  toLocalSidebarThreadKey();
  AppInitialSa();
  ConversationNavListItem();
  parseSidebarThreadKey();
  InsetBorderPanel();
  DropdownMenuPopover();
  AppInitialEA();
  sidebarRealtimeStatusMessages();
  REMOTE_CONTROL_PAIRING_FEATURE_GATE_ID();
  ensureSkillsPageHelpersInit();
  remote();
  deferredUiRa();
  CodexThread();
  ensureSkillsPageHelpersInit();
  ensureSelectWorkspaceOhInit();
  HasSeenKnowledgeWorkAnnouncement();
  ensureComposerEsm_ML_Init();
  ensureUseSearchablePageTitleVisibilityInit();
  vapor = "min-h-10 items-center border-b border-token-border-light px-0 py-2 text-xs leading-[18px] text-token-text-tertiary [&:has(+_[data-projects-rows]>[data-project-row-wrapper]:first-child>[data-project-row]:hover)]:border-b-transparent";
  wheat = {
    modified: "descending",
    name: "ascending"
  };
  yarn = 200;
})();
