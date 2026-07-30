// Restored from ref/webview/assets/projects-index-page-AZjn-SLu.js
// Wave FZ — full polished body from `projects-index-page-AZjn-SLu/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 63 (verified 134/196).
// Careful split 2/3
/* split-lane-import-depth:1 */

import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { defaultHourlyScheduleConfig as DefaultHourlyScheduleConfig } from "../../automation/default-hourly-schedule-config";
import { normalizeCronScheduleFields } from "../../automation/normalize-cron-schedule-fields";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { chatgptConversationsGateAtom, useStepsProseAtom, writingBlocksControllerAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_B7_Init, ensureComposerEsm_F7_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_ML_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_QN_Init, ensureComposerEsm_Sp_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_TI_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init, ensureConversationPageEsm_Ist_Init, ensureConversationPageEsm_Qa_Init as EnsureConversationPageEsm_Qa_Init } from "../../boundaries/conversation-page-esm-inits";
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
const $r: any = undefined;
const AppInitialAF: any = undefined;
const AppInitialD: any = undefined;
const AppInitialNo: any = undefined;
const AppInitialO: any = undefined;
const AppInitialR4: any = undefined;
const AppInitialTo: any = undefined;
const AppInitialU: any = undefined;
const DeferredWorkspaceTA2: any = undefined;
const IntlProvider: any = undefined;
const NativeContextMenuSurface: any = undefined;
const ProjectsIndexPageHelper2: any = undefined;
const ProjectsIndexPageHelper27: any = undefined;
const ProjectsIndexPageHelper4: any = undefined;
const ProjectsIndexPageHelper44: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const harbor: any = undefined;
const indigo: any = undefined;
const readLoginRouteQuerySnapshotStub: any = undefined;
const reef: any = undefined;
const resolveForcedHostLayers: any = undefined;
const sage: any = undefined;
const setConversationPinnedState: any = undefined;
const sidebarElectronPinThread: any = undefined;
const xenon: any = undefined;

function ProjectsIndexPageHelper28(ferrule) {
  let {
      canStartLocalTask,
      conversationFilter,
      expanded,
      isPinned,
      onToggleExpanded,
      project,
      projectCrudStatus,
      row,
      searchForcedExpanded
    } = ferrule,
    grommet = CodexPluginActionType(appScopeAtom),
    header = useIntl(),
    injector = useNavigate(),
    jumper = useQueryClient(),
    kerf = marblePrime => {
      coerceLocalFilesystemPath({
        scope: grommet,
        isPinned: marblePrime,
        project,
        queryClient: jumper
      }).catch(mint);
    };
  let louver = kerf,
    manifold = canStartLocalTask ? () => {
      UtilityBarCategoryValue(grommet, project);
    } : undefined;
  let nip = manifold,
    outlet = header.formatMessage(isPinned ? {
      id: "projectsIndex.chatGpt.unpinProject",
      defaultMessage: "Unpin project",
      description: "Button label to unpin a ChatGPT project from the projects index"
    } : {
      id: "projectsIndex.chatGpt.pinProject",
      defaultMessage: "Pin project",
      description: "Button label to pin a ChatGPT project from the projects index"
    });
  let packing = outlet,
    reducer = row.matchingThreadKeys.length > 0 || row.matchingConversations.length > 0,
    strainer;
  if (expanded) {
    let nickelPrime;
    nickelPrime = reducer ? <ProjectsIndexPageHelper30 {...{
      conversations: row.matchingConversations,
      projectName: row.name,
      threadKeys: row.matchingThreadKeys
    }} /> : <ProjectsIndexPageHelper32 {...{
      conversationFilter,
      localThreadKeys: row.localThreadKeys,
      projectId: project.gizmo.id,
      projectName: row.name
    }} />;
    strainer = nickelPrime;
  }
  let tee = <ProjectsIndexPageHelper4 {...{
    isPinned,
    project,
    projectName: row.name,
    projectCrudStatus,
    onNewLocalTask: nip,
    onPinnedChange: louver
  }} />;
  let union = () => {
    louver(!isPinned);
  };
  let vent = isPinned ? <AppIconAo className="icon-xs" /> : <DefaultHourlyScheduleConfig {...{
    className: "icon-xs"
  }} />;
  let wye = <ReadLoginRouteQuerySnapshot {...{
    "aria-label": packing,
    className: indigo,
    color: "ghost",
    size: "icon",
    onClick: union,
    children: vent
  }} />;
  let zener = nip == null,
    alphaPrime = header.formatMessage({
      id: "projectsIndex.chatGpt.startProjectChat",
      defaultMessage: "Start new chat in project",
      description: "Button label to start a new ChatGPT chat from the projects index"
    });
  let bravoPrime = () => {
    useOpenLocatorInMainWindow(grommet, null);
    ensureComposerEsm_QN_Init(grommet, "chat");
    injector("/", {
      state: {
        chatGptProjectId: project.gizmo.id
      }
    });
  };
  let copperPrime = <AppIconYm {...{
    className: "icon-xs"
  }} />;
  let deltaPrime = <ReadLoginRouteQuerySnapshot {...{
    "aria-label": alphaPrime,
    className: indigo,
    color: "ghost",
    size: "icon",
    onClick: bravoPrime,
    children: copperPrime
  }} />;
  let echoPrime = <ElectronOnly {...{
    browser: true,
    chromeExtension: true,
    extension: true,
    electron: zener,
    children: deltaPrime
  }} />;
  let falconPrime = nip == null ? null : <ElectronOnly {...{
    electron: true,
    children: <ReadLoginRouteQuerySnapshot {...{
      "aria-label": header.formatMessage({
        id: "projectsIndex.chatGpt.startLocalProjectTask",
        defaultMessage: "Start new local chat in project",
        description: "Button label to start a local Codex task in a ChatGPT project from the projects index"
      }),
      className: indigo,
      color: "ghost",
      size: "icon",
      onClick: nip,
      children: <AppIconYm {...{
        className: "icon-xs"
      }} />
    }} />
  }} />;
  let gammaPrime = <>
      {tee}
      {wye}
      {echoPrime}
      {falconPrime}
    </>;
  let harborPrime = <AppIconCS {...{
    className: "icon-xs"
  }} />;
  let indigoPrime = <BrandedIcon className="icon-xs" color={project.gizmo.display.theme} fallbackIcon={harborPrime} icon={project.gizmo.display.emoji} />;
  let jadePrime = searchForcedExpanded ? null : <button type="button" className="group/project-toggle cursor-interaction rounded-sm" aria-label={header.formatMessage({
    id: "projectsIndex.chatGpt.toggleProject",
    defaultMessage: "Toggle project",
    description: "Accessible label for expanding or collapsing a ChatGPT project row"
  })} aria-expanded={expanded} onClick={event => {
    event.stopPropagation();
    onToggleExpanded();
  }}>
      {<AppIconSft {...{
      "aria-hidden": "true",
      className: IntlProvider("icon-xs shrink-0 text-token-text-secondary opacity-0 transition-transform group-hover/project-row:opacity-100 group-focus-visible/project-toggle:opacity-100", expanded ? "rotate-0 opacity-100" : "-rotate-90")
    }} />}
    </button>;
  let kitePrime = <ProjectsIndexPageHelper2 {...{
    modifiedAt: row.modifiedAt
  }} />;
  let lemonPrime = searchForcedExpanded ? undefined : event => {
    event.defaultPrevented || event.detail > 1 || xenon(event.target) || onToggleExpanded();
  };
  return <ProjectsIndexPageHelper27 {...{
    actions: gammaPrime,
    expandedContent: strainer,
    isExpanded: expanded,
    leading: indigoPrime,
    name: row.name,
    nameTrailing: jadePrime,
    updated: kitePrime,
    onClick: lemonPrime
  }} />;
}
function mint() {}
function ProjectsIndexPageHelper30(onyxPrime) {
  let {
      conversations,
      projectName,
      threadKeys
    } = onyxPrime,
    pearlPrime = useIntl(),
    quartzPrime = pearlPrime.formatMessage({
      id: "projectsIndex.search.matches.ariaLabel",
      defaultMessage: "Search matches in {projectName}",
      description: "Accessible label for matching tasks and chats in a project search result"
    }, {
      projectName
    });
  let riverPrime = threadKeys.length > 0 ? <ThreadKeyVirtualList {...{
    ariaLabel: pearlPrime.formatMessage({
      id: "projectsIndex.search.localTasks.ariaLabel",
      defaultMessage: "Matching local chats in {projectName}",
      description: "Accessible label for local Codex tasks matching a projects search"
    }, {
      projectName
    }),
    itemWrapper: quill,
    rowOptions: {
      canPin: false,
      hideTimestamp: true,
      variant: "tableRow"
    },
    threadKeys,
    variant: "tableRow"
  }} /> : null;
  let slatePrime = conversations.map(nova);
  return <div className="pb-3" aria-label={quartzPrime} role="list">
      {riverPrime}
      {slatePrime}
    </div>;
}
function nova(timberPrime) {
  return <ProjectsIndexPageHelper36 key={timberPrime.id} {...{
    conversation: timberPrime
  }} />;
}
function ProjectsIndexPageHelper32(umbraPrime) {
  let {
      conversationFilter,
      localThreadKeys,
      projectId,
      projectName
    } = umbraPrime,
    violetPrime = CodexPluginActionType(appScopeAtom).get(writingBlocksControllerAtom),
    willowPrime = useIntl(),
    {
      data,
      fetchNextPage,
      hasNextPage,
      isError,
      isFetchingNextPage,
      isLoading
    } = hvtBindableHelper(useInfiniteListQuery(violetPrime, projectId, true, conversationFilter)),
    xenonPrime;
  {
    let basaltPrime = data?.pages.flatMap(prism).filter(cedarPrime => AppInitialAF(cedarPrime.conversation_origin, conversationFilter));
    if (isLoading) {
      let daisyPrime;
      daisyPrime = <ProjectsIndexPageHelper35 {...{
        children: <PullRequestLastAccount {...{
          children: <MemoizedFormattedMessage {...{
            id: "projectsIndex.chatGpt.chats.loading",
            defaultMessage: "Loading chats",
            description: "Loading state for an expanded ChatGPT project on the projects index"
          }} />
        }} />
      }} />;
      xenonPrime = daisyPrime;
    } else if (isError) {
      let emberPrime;
      emberPrime = <ProjectsIndexPageHelper35 {...{
        children: <MemoizedFormattedMessage {...{
          id: "projectsIndex.chatGpt.chats.error",
          defaultMessage: "Could not load chats",
          description: "Error state for an expanded ChatGPT project on the projects index"
        }} />
      }} />;
      xenonPrime = emberPrime;
    } else if (basaltPrime?.length === 0) {
      let flintPrime;
      flintPrime = <ProjectsIndexPageHelper35 {...{
        children: <MemoizedFormattedMessage {...{
          id: "projectsIndex.chatGpt.chats.empty",
          defaultMessage: "No chats",
          description: "Empty state for an expanded ChatGPT project on the projects index"
        }} />
      }} />;
      xenonPrime = flintPrime;
    } else xenonPrime = basaltPrime?.map(olive);
  }
  let yellowPrime = willowPrime.formatMessage({
    id: "projectsIndex.chatGpt.chats.ariaLabel",
    defaultMessage: "Chats in {projectName}",
    description: "Accessible label for chats in an expanded ChatGPT project on the projects index"
  }, {
    projectName
  });
  let zincPrime = localThreadKeys.length > 0 ? <ThreadKeyVirtualList {...{
    ariaLabel: willowPrime.formatMessage({
      id: "projectsIndex.chatGpt.localTasks.ariaLabel",
      defaultMessage: "Local chats in {projectName}",
      description: "Accessible label for local Codex tasks in an expanded ChatGPT project"
    }, {
      projectName
    }),
    itemWrapper: quill,
    rowOptions: {
      canPin: false,
      hideTimestamp: true,
      variant: "tableRow"
    },
    threadKeys: localThreadKeys,
    variant: "tableRow"
  }} /> : null;
  let amberPrime = hasNextPage ? <ReadLoginRouteQuerySnapshot {...{
    className: "mt-1",
    color: "ghostMuted",
    disabled: isFetchingNextPage,
    onClick: () => {
      fetchNextPage();
    },
    children: isFetchingNextPage ? <MemoizedFormattedMessage {...{
      id: "projectsIndex.chatGpt.chats.loadingMore",
      defaultMessage: "Loading…",
      description: "Button label while loading more ChatGPT project chats"
    }} /> : <MemoizedFormattedMessage {...{
      id: "projectsIndex.chatGpt.chats.showMore",
      defaultMessage: "Show more",
      description: "Button label to load more ChatGPT project chats"
    }} />
  }} /> : null;
  return <div className="pb-3" aria-label={yellowPrime} role="list">
      {zincPrime}
      {xenonPrime}
      {amberPrime}
    </div>;
}
function olive(garnetPrime) {
  return <ProjectsIndexPageHelper36 key={garnetPrime.id} {...{
    conversation: garnetPrime
  }} />;
}
function prism(hazelPrime) {
  return hazelPrime.items;
}
function ProjectsIndexPageHelper35(ivoryPrime) {
  let {
    children
  } = ivoryPrime;
  return <div className="py-1 pl-7 text-base text-token-text-secondary">
      {children}
    </div>;
}
function ProjectsIndexPageHelper36(jasperPrime) {
  let {
      conversation
    } = jasperPrime,
    kelpPrime = CodexPluginActionType(appScopeAtom),
    lotusPrime = useIntl(),
    mintPrime = useNavigate(),
    novaPrime = conversation.title?.trim() || <MemoizedFormattedMessage {...{
      id: "projectsIndex.chatGpt.untitledChat",
      defaultMessage: "Untitled ChatGPT chat",
      description: "Fallback title for a ChatGPT chat in an expanded project on the projects index"
    }} />;
  let olivePrime = novaPrime,
    prismPrime = conversationRecencyTimestamp({
      createTime: conversation.create_time,
      updateTime: conversation.update_time
    });
  let quillPrime = prismPrime,
    reefPrime = () => {
      mintPrime(rewriteFileCitationMarkers(conversation.id));
    };
  let sagePrime = reefPrime,
    topazPrime = IntlProvider(delta, echo, "before:inset-y-0 group/thread-row cursor-interaction h-9 items-center text-base leading-9");
  let ultraPrime = event => {
    event.defaultPrevented || xenon(event.target) || sagePrime();
  };
  let vaporPrime, wheatPrime;
  vaporPrime = IntlProvider(harbor, "flex min-w-0 items-center gap-3");
  wheatPrime = <span className="w-4 shrink-0" />;
  let yarnPrime = <div className={vaporPrime}>
      {wheatPrime}
      <span className="min-w-0 truncate">{olivePrime}</span>
    </div>;
  let zephyrPrime = IntlProvider(harbor, "text-token-text-secondary max-[680px]:hidden");
  let acornPrime = <span className={zephyrPrime}>
      {<ProjectsIndexPageHelper2 {...{
      modifiedAt: quillPrime
    }} />}
    </span>;
  let bloomPrime = IntlProvider(harbor, "flex min-w-0 justify-end gap-1");
  let coralPrime = lotusPrime.formatMessage(conversation.is_starred === true ? sidebarElectronPinThread : deferredConversationSo);
  let driftPrime = IntlProvider(indigo, "opacity-0 group-hover/thread-row:opacity-100 focus-visible:opacity-100");
  let eaglePrime = () => {
    setConversationPinnedState({
      scope: kelpPrime,
      conversation,
      isPinned: conversation.is_starred !== true
    });
  };
  let frostPrime = conversation.is_starred === true ? <AppIconAo className="icon-xs" /> : <DefaultHourlyScheduleConfig {...{
    className: "icon-xs"
  }} />;
  let glidePrime = <ReadLoginRouteQuerySnapshot {...{
    "aria-label": coralPrime,
    className: driftPrime,
    color: "ghost",
    size: "icon",
    onClick: eaglePrime,
    children: frostPrime
  }} />;
  let honeyPrime = lotusPrime.formatMessage({
    id: "projectsIndex.chatGpt.openChat",
    defaultMessage: "Open chat",
    description: "Button label to open a chat from an expanded ChatGPT project row"
  });
  let irisPrime = IntlProvider(indigo, "opacity-0 group-hover/thread-row:opacity-100 focus-visible:opacity-100");
  let jewelPrime = <AppIconYlt {...{
    className: "icon-xs"
  }} />;
  let knollPrime = <ReadLoginRouteQuerySnapshot {...{
    "aria-label": honeyPrime,
    className: irisPrime,
    color: "ghost",
    size: "icon",
    onClick: sagePrime,
    children: jewelPrime
  }} />;
  let lunarPrime = <span className={bloomPrime}>
      {glidePrime}
      {knollPrime}
    </span>;
  return <div className={topazPrime} onClick={ultraPrime} role="listitem">
      {yarnPrime}
      {acornPrime}
      {lunarPrime}
    </div>;
}
function ProjectsIndexPageHelper37(mossPrime) {
  let {
      expanded,
      onShowAllChange,
      onToggleExpanded,
      row,
      searchForcedExpanded,
      showAll,
      showLocalBadge
    } = mossPrime,
    northPrime = CodexPluginActionType(appScopeAtom),
    orbitPrime = useIntl(),
    pinePrime = thirdPartyAgentIdsForCursorGate(),
    questPrime = NativeContextMenuSurface(ensurePersonalizationCInit),
    {
      data
    } = ensurePersonalizationK0Init(DesktopPersistenceKeys.PINNED_PROJECT_IDS),
    ridgePrime = data?.includes(row.group.projectId);
  let stormPrime = ridgePrime === true,
    tidePrime = row.group.projectKind === "local" ? resolveRootPaths(row.group) : [];
  let unityPrime = tidePrime,
    valePrime = row.group.projectKind === "local" && isProjectActionable(row.group);
  let wavePrime = valePrime,
    apexPrime = wavePrime && (questPrime || unityPrime.length === 0),
    brookPrime = event => {
      event.defaultPrevented || event.detail > 1 || xenon(event.target) || onToggleExpanded();
    };
  let cliffPrime = brookPrime,
    duskPrime = event => {
      event.defaultPrevented || xenon(event.target) || pinePrime(row.group);
    };
  let elmPrime = duskPrime,
    fernPrime = <ProjectsIndexPageHelper44 {...{
      canAddSource: apexPrime,
      canEditLocalProject: wavePrime,
      initialSources: unityPrime,
      row
    }} />;
  let grovePrime = stormPrime ? orbitPrime.formatMessage({
    id: "projectsIndex.unpinProject",
    defaultMessage: "Unpin project",
    description: "Button label to unpin a project from the projects index"
  }) : orbitPrime.formatMessage({
    id: "projectsIndex.pinProject",
    defaultMessage: "Pin project",
    description: "Button label to pin a project from the projects index"
  });
  let hillPrime = () => {
    readLoginRouteQuerySnapshotStub(northPrime, DesktopPersistenceKeys.PINNED_PROJECT_IDS, sage(data, row.group.projectId));
  };
  let islePrime = stormPrime ? <AppIconAo className="icon-xs" /> : <DefaultHourlyScheduleConfig {...{
    className: "icon-xs"
  }} />;
  let juniperPrime = <ReadLoginRouteQuerySnapshot {...{
    "aria-label": grovePrime,
    className: indigo,
    color: "ghost",
    size: "icon",
    onClick: hillPrime,
    children: islePrime
  }} />;
  let lagoonPrime = orbitPrime.formatMessage({
    id: "projectsIndex.startProjectChat",
    defaultMessage: "Start new chat in project",
    description: "Button label to start a new task from the projects index"
  });
  let meadowPrime = () => pinePrime(row.group);
  let nestPrime = <AppIconYm {...{
    className: "icon-xs"
  }} />;
  let oakPrime = <ReadLoginRouteQuerySnapshot {...{
    "aria-label": lagoonPrime,
    className: indigo,
    color: "ghost",
    size: "icon",
    onClick: meadowPrime,
    children: nestPrime
  }} />;
  let petalPrime = <>
      {fernPrime}
      {juniperPrime}
      {oakPrime}
    </>;
  let quietPrime = expanded ? <div className="pb-3">
      {<ThreadKeyVirtualList {...{
      ariaLabel: orbitPrime.formatMessage({
        id: "projectsIndex.recentChats.ariaLabel",
        defaultMessage: "Recent chats in {projectName}",
        description: "Accessible label for expanded project recent tasks"
      }, {
        projectName: row.name
      }),
      emptyState: <MemoizedFormattedMessage {...{
        id: "projectsIndex.recentChats.empty",
        defaultMessage: "No chats",
        description: "Empty state for an expanded project in the projects index"
      }} />,
      emptyStateClassName: "px-2 py-1 text-base text-token-text-secondary",
      expanded: showAll,
      itemWrapper: quill,
      maxItems: 10,
      onExpandedChange: onShowAllChange,
      variant: "tableRow",
      rowOptions: {
        canPin: false,
        hideRemoteHostEnvIcon: true,
        hideTimestamp: true,
        variant: "tableRow"
      },
      threadKeys: row.matchingThreadKeys.length > 0 ? row.matchingThreadKeys : row.recentThreadKeys
    }} />}
    </div> : null;
  let rainPrime = row.group.projectKind === "remote" ? <EnsureRealtimeVoiceStartHandlerInit {...{
    className: "icon-xs shrink-0",
    remoteHostId: row.group.hostId,
    isRemoteProject: true
  }} /> : expanded ? <AppIconKo className="icon-xs shrink-0" /> : <AppIconCS {...{
    className: "icon-xs shrink-0"
  }} />;
  let seedPrime = <AppInitialD projectId={row.group.projectId} projectName={row.name} buttonClassName={"!h-7 !w-7 !p-1 text-token-description-foreground [&>svg]:!h-4 [&>svg]:!w-4"} fallbackIcon={rainPrime} markerClassName="h-4 w-4" />;
  let trailPrime = showLocalBadge && row.group.projectKind === "local" ? <OptionalTooltip {...{
    tooltipContent: <MemoizedFormattedMessage {...{
      id: "projectsIndex.localProject.tooltip",
      defaultMessage: "ChatGPT works locally on your computer and can read and edit this project's contents",
      description: "Tooltip explaining the laptop icon shown for local projects"
    }} />,
    children: <span aria-label={orbitPrime.formatMessage({
      id: "projectsIndex.localProject.accessibleLabel",
      defaultMessage: "Local project",
      description: "Accessible label for the laptop icon shown for local projects"
    })} className="inline-flex shrink-0" role="img" tabIndex={0}>
              <AppIconKS aria-hidden={true} className="icon-xs text-token-text-secondary" />
            </span>
  }} /> : null;
  let urnPrime = row.group.projectKind === "remote" && row.group.hostId != null ? <ProjectsIndexPageHelper38 {...{
    hostId: row.group.hostId
  }} /> : null;
  let vinePrime = searchForcedExpanded ? null : <button type="button" className="group/project-toggle cursor-interaction rounded-sm" aria-label={orbitPrime.formatMessage({
    id: "projectsIndex.toggleProject",
    defaultMessage: "Toggle project",
    description: "Accessible label for expanding or collapsing a project row"
  })} aria-expanded={expanded} onClick={event => {
    event.stopPropagation();
    onToggleExpanded();
  }}>
      {<AppIconSft {...{
      "aria-hidden": "true",
      className: IntlProvider("icon-xs shrink-0 text-token-text-secondary opacity-0 transition-transform group-hover/project-row:opacity-100 group-focus-visible/project-toggle:opacity-100", expanded ? "rotate-0 opacity-100" : "-rotate-90")
    }} />}
    </button>;
  let windPrime = <>
      {trailPrime}
      {urnPrime}
      {vinePrime}
    </>;
  let yarrowPrime = <ProjectsIndexPageHelper2 {...{
    modifiedAt: row.modifiedAt
  }} />;
  let azurePrime = searchForcedExpanded ? undefined : cliffPrime;
  return <ProjectsIndexPageHelper27 {...{
    actions: petalPrime,
    expandedContent: quietPrime,
    isExpanded: expanded,
    leading: seedPrime,
    name: row.name,
    nameTrailing: windPrime,
    updated: yarrowPrime,
    onClick: azurePrime,
    onDoubleClick: elmPrime
  }} />;
}
function ProjectsIndexPageHelper38(birchPrime) {
  let {
      hostId
    } = birchPrime,
    {
      state
    } = iconXs(hostId);
  if (state == null) return null;
  return <HostConnectionStatusBadge hostId={hostId} />;
}
function quill(canyonPrime) {
  let {
      children,
      className,
      threadKey
    } = canyonPrime,
    dewPrime = CodexPluginActionType(appScopeAtom),
    everPrime = useIntl(),
    fieldPrime = useNavigate(),
    grainPrime = useColdNavigate(),
    havenPrime = CodexBrowserSurfaceActionType(ensureRemoteConnectionsStorageInit, threadKey),
    inkPrime = havenPrime?.kind === "local" ? havenPrime.conversationId : null,
    jadeitePrime = CodexBrowserSurfaceActionType(resolveForcedHostLayers, inkPrime),
    kernelPrime = CodexBrowserSurfaceActionType(deferredUiHT, threadKey),
    leafPrime = havenPrime?.kind === "local" ? havenPrime.conversationId : havenPrime?.kind === "remote" ? havenPrime.task.id : null,
    maplePrime = leafPrime != null,
    nimbusPrime = havenPrime?.kind === "local" ? jadeitePrime ?? havenPrime.summary?.updatedAt ?? null : havenPrime?.kind === "remote" ? havenPrime.task.updated_at ?? havenPrime.task.created_at ?? null : null,
    opalPrime = () => {
      buildPullRequestRoutePath(dewPrime, threadKey);
      parsePullRequestFilterQuery(dewPrime, threadKey, grainPrime, fieldPrime);
    };
  let plumePrime = opalPrime,
    quillowPrime = event => {
      event.defaultPrevented || event.detail > 1 || xenon(event.target) || plumePrime();
    };
  let rootPrime = quillowPrime,
    silkPrime = pondPrime => {
      leafPrime != null && DeferredWorkspaceTA2(dewPrime, leafPrime, pondPrime);
    };
  let thornPrime = silkPrime,
    uplandPrime = everPrime.formatMessage(kernelPrime ? sidebarElectronPinThread : deferredConversationSo);
  let vistaPrime = uplandPrime,
    wispPrime = IntlProvider(delta, echo, "before:inset-y-0", "group/thread-row cursor-interaction h-9 items-center text-base leading-9", className);
  let yonderPrime = IntlProvider(harbor, "flex min-w-0 items-center gap-3");
  let zenithPrime = havenPrime ?? null,
    anvilPrime = <ProjectsIndexPageHelper40 {...{
      entry: zenithPrime,
      localConversationId: inkPrime
    }} />;
  let beaconPrime = <div className="min-w-0 flex-1">{children}</div>;
  let cragPrime = <div className={yonderPrime}>
      {anvilPrime}
      {beaconPrime}
    </div>;
  let domePrime = IntlProvider(harbor, "text-token-text-secondary max-[680px]:hidden");
  let eddyPrime = nimbusPrime == null ? null : <ProjectsIndexPageHelper2 {...{
    modifiedAt: nimbusPrime
  }} />;
  let fjordPrime = <span className={domePrime}>
      {eddyPrime}
    </span>;
  let glenPrime = IntlProvider(harbor, "flex min-w-0 justify-end gap-1");
  let hearthPrime = havenPrime ?? null,
    inletPrime = <ProjectsIndexPageHelper41 {...{
      entry: hearthPrime,
      onOpenThread: plumePrime
    }} />;
  let jettyPrime = maplePrime ? <ReadLoginRouteQuerySnapshot {...{
    "aria-label": vistaPrime,
    className: IntlProvider(indigo, "opacity-0 group-hover/thread-row:opacity-100 focus-visible:opacity-100"),
    color: "ghost",
    size: "icon",
    onClick: () => thornPrime(!kernelPrime),
    children: kernelPrime ? <AppIconAo className="icon-xs" /> : <DefaultHourlyScheduleConfig {...{
      className: "icon-xs"
    }} />
  }} /> : null;
  let knobPrime = everPrime.formatMessage({
    id: "projectsIndex.openThread",
    defaultMessage: "Open chat",
    description: "Button label to open a task from an expanded project row"
  });
  let ledgePrime = IntlProvider(indigo, "opacity-0 group-hover/thread-row:opacity-100 focus-visible:opacity-100");
  let mirePrime = <AppIconYlt {...{
    className: "icon-xs"
  }} />;
  let nookPrime = <ReadLoginRouteQuerySnapshot {...{
    "aria-label": knobPrime,
    className: ledgePrime,
    color: "ghost",
    size: "icon",
    onClick: plumePrime,
    children: mirePrime
  }} />;
  let oxbowPrime = <span className={glenPrime}>
      {inletPrime}
      {jettyPrime}
      {nookPrime}
    </span>;
  return <div className={wispPrime} onClick={rootPrime}>
      {cragPrime}
      {fjordPrime}
      {oxbowPrime}
    </div>;
}
function ProjectsIndexPageHelper40(quarryPrime) {
  let {
      entry,
      localConversationId
    } = quarryPrime,
    rapidsPrime = CodexBrowserSurfaceActionType(AppInitialTo, localConversationId),
    spurPrime = entry?.kind === "remote" ? entry : null,
    torPrime = toggleSortedIdList(spurPrime);
  let updraftPrime = CodexBrowserSurfaceActionType(AppInitialNo, torPrime),
    vergePrime = CodexBrowserSurfaceActionType(AppInitialO, localConversationId),
    weirPrime = CodexBrowserSurfaceActionType(AppInitialU, localConversationId),
    yardPrime = CodexBrowserSurfaceActionType(AppInitialR4, localConversationId),
    anchorPrime = entry?.kind === "remote" ? updraftPrime?.iconBadge : rapidsPrime?.iconBadge,
    boltPrime = reef({
      entry,
      localHasUnreadTurn: weirPrime,
      localStatusType: vergePrime,
      localUnreadMessageCount: yardPrime
    });
  let cogPrime = boltPrime,
    discPrime = anchorPrime == null ? cogPrime == null ? null : <EnsureImportSettingsCsInit {...{
      statusState: cogPrime
    }} /> : <WorktreeLeafName {...{
      badge: anchorPrime
    }} />;
  return <span className="flex h-7 w-7 shrink-0 items-center justify-center">
      {discPrime}
    </span>;
}
function ProjectsIndexPageHelper41(edgePrime) {
  let {
    entry,
    onOpenThread
  } = edgePrime;
  if (entry?.kind === "local") {
    let forgePrime;
    return <ProjectsIndexPageHelper43 {...{
      entry
    }} />;
  }
  return <ProjectsIndexPageHelper42 {...{
    onOpenThread
  }} />;
}
function ProjectsIndexPageHelper42(gearPrime) {
  let {
      onOpenThread
    } = gearPrime,
    hingePrime = useIntl(),
    [ironPrime, jointPrime] = $r.useState(false),
    keystonePrime = hingePrime.formatMessage({
      id: "projectsIndex.threadActions",
      defaultMessage: "Chat actions",
      description: "Button label for expanded project chat row actions"
    });
  let latchPrime = ironPrime && "opacity-100",
    motorPrime = IntlProvider(indigo, "opacity-0 group-hover/thread-row:opacity-100 focus-visible:opacity-100", latchPrime);
  let nutPrime = <AppIconQI {...{
    className: "icon-xs"
  }} />;
  let pistonPrime = <ReadLoginRouteQuerySnapshot {...{
    "aria-label": keystonePrime,
    className: motorPrime,
    color: "ghost",
    size: "icon",
    children: nutPrime
  }} />;
  let rivetPrime = () => {
    onOpenThread();
    jointPrime(false);
  };
  let screwPrime = <MemoizedFormattedMessage {...{
    id: "projectsIndex.openThreadMenuItem",
    defaultMessage: "Open chat",
    description: "Menu item to open a task from an expanded project row"
  }} />;
  let torquePrime = <DropdownMenu.Item {...{
    LeftIcon: AppIconYlt,
    onSelect: rivetPrime,
    children: screwPrime
  }} />;
  return <DropdownMenuPopover {...{
    align: "end",
    contentWidth: "xs",
    open: ironPrime,
    onOpenChange: jointPrime,
    triggerButton: pistonPrime,
    children: torquePrime
  }} />;
}
function ProjectsIndexPageHelper43(valvePrime) {
  let {
      entry
    } = valvePrime,
    axlePrime = entry.conversationId,
    bracketPrime = CodexBrowserSurfaceActionType(deferredConversationN, axlePrime) ?? entry.summary?.title ?? null,
    clampPrime = entry.cwd,
    drillPrime = entry.workspaceKind === "projectless",
    enginePrime = IntlProvider(indigo, "opacity-0 group-hover/thread-row:opacity-100 focus-visible:opacity-100 data-[state=open]:opacity-100");
  return <ThreadOverflowMenuT {...{
    archiveNavigation: "none",
    archiveSource: "projects_index_thread_overflow_menu",
    conversationId: axlePrime,
    cwd: clampPrime,
    dropdownAlign: "end",
    hideForkActions: drillPrime,
    title: bracketPrime,
    triggerButtonClassName: enginePrime,
    triggerButtonColor: "ghost",
    triggerIconClassName: "icon-xs"
  }} />;
}
