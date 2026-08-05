// Restored from ref/webview/assets/projects-index-page-AZjn-SLu.js
// Wave FZ — full polished body from `projects-index-page-AZjn-SLu/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 63 (verified 134/196).
// Careful split 2/3 — lane B (row helpers 37-43)
/* split-lane-import-depth:1 */

import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { defaultHourlyScheduleConfig as DefaultHourlyScheduleConfig } from "../../automation/default-hourly-schedule-config";
import { appScopeAtom } from "../../runtime/app-scope-runtime";
import { useNavigate } from "../../boundaries/react-router-navigation";
import { deferredConversationN } from "../../conversation/deferred-conversation-n";
import { deferredConversationSo } from "../../conversation/deferred-conversation-so";
import { buildPullRequestRoutePath } from "../../conversation/github-pull-request-urls";
import { ThreadKeyVirtualList } from "../../conversation/thread-key-virtual-list";
import { DesktopPersistenceKeys } from "../../desktop/persistence-keys";
import { ensureRemoteConnectionsStorageInit } from "../../environments/ensure-remote-connections-storage-init";
import { isProjectActionable } from "../../environments/is-project-actionable";
import { resolveRootPaths } from "../../environments/resolve-root-paths";
import { worktreeLeafName as WorktreeLeafName } from "../../files/worktree-leaf-name";
import { ensureRealtimeVoiceStartHandlerInit as EnsureRealtimeVoiceStartHandlerInit } from "../../home/realtime-voice-nux";
import { HostConnectionStatusBadge } from "../../hosts/host-connection-status-badge";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { useIntl } from "../../i18n/use-intl";
import { AppIconAo } from "../../icons/app-icon-ao";
import { AppIconCS } from "../../icons/app-icon-cs";
import { AppIconKo } from "../../icons/app-icon-ko";
import { AppIconKS } from "../../icons/app-icon-ks";
import { AppIconQI } from "../../icons/app-icon-qi";
import { AppIconSft } from "../../icons/app-icon-sft";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { AppIconYm } from "../../icons/app-icon-ym";
import { useColdNavigate } from "../../navigation/use-cold-navigate";
import { thirdPartyAgentIdsForCursorGate } from "../../plugins/third-party-agent-ids-for-cursor-gate";
import { parsePullRequestFilterQuery } from "../../pull-requests/parse-pull-request-filter-query";
import { threadOverflowMenuT as ThreadOverflowMenuT } from "../../thread/thread-overflow-menu";
import { deferredUiHT } from "../../ui/deferred-ui-ht-2";
import { DropdownMenu } from "../../ui/dropdown-menu";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";
import { iconXs } from "../../ui/icon-xs";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { remote } from "../../ui/remote";
import { toggleSortedIdList } from "../../utils/toggle-sorted-id-list";
import {
  ensureImportSettingsCsInit as EnsureImportSettingsCsInit,
  ensurePersonalizationCInit,
  ensurePersonalizationK0Init,
} from "../../utils/wave-as-gap-ensure-inits";

// Cross-part stubs.
const $r: any = undefined;
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
const sidebarElectronPinThread: any = undefined;
const xenon: any = undefined;

function ProjectsIndexPageHelper37(mossPrime) {
  let {
      expanded,
      onShowAllChange,
      onToggleExpanded,
      row,
      searchForcedExpanded,
      showAll,
      showLocalBadge,
    } = mossPrime,
    northPrime = CodexPluginActionType(appScopeAtom),
    orbitPrime = useIntl(),
    pinePrime = thirdPartyAgentIdsForCursorGate(),
    questPrime = NativeContextMenuSurface(ensurePersonalizationCInit),
    { data } = ensurePersonalizationK0Init(
      DesktopPersistenceKeys.PINNED_PROJECT_IDS,
    ),
    ridgePrime = data?.includes(row.group.projectId);
  let stormPrime = ridgePrime === true,
    tidePrime =
      row.group.projectKind === "local" ? resolveRootPaths(row.group) : [];
  let unityPrime = tidePrime,
    valePrime =
      row.group.projectKind === "local" && isProjectActionable(row.group);
  let wavePrime = valePrime,
    apexPrime = wavePrime && (questPrime || unityPrime.length === 0),
    brookPrime = (event) => {
      event.defaultPrevented ||
        event.detail > 1 ||
        xenon(event.target) ||
        onToggleExpanded();
    };
  let cliffPrime = brookPrime,
    duskPrime = (event) => {
      event.defaultPrevented || xenon(event.target) || pinePrime(row.group);
    };
  let elmPrime = duskPrime,
    fernPrime = (
      <ProjectsIndexPageHelper44
        {...{
          canAddSource: apexPrime,
          canEditLocalProject: wavePrime,
          initialSources: unityPrime,
          row,
        }}
      />
    );
  let grovePrime = stormPrime
    ? orbitPrime.formatMessage({
        id: "projectsIndex.unpinProject",
        defaultMessage: "Unpin project",
        description: "Button label to unpin a project from the projects index",
      })
    : orbitPrime.formatMessage({
        id: "projectsIndex.pinProject",
        defaultMessage: "Pin project",
        description: "Button label to pin a project from the projects index",
      });
  let hillPrime = () => {
    readLoginRouteQuerySnapshotStub(
      northPrime,
      DesktopPersistenceKeys.PINNED_PROJECT_IDS,
      sage(data, row.group.projectId),
    );
  };
  let islePrime = stormPrime ? (
    <AppIconAo className="icon-xs" />
  ) : (
    <DefaultHourlyScheduleConfig
      {...{
        className: "icon-xs",
      }}
    />
  );
  let juniperPrime = (
    <ReadLoginRouteQuerySnapshot
      {...{
        "aria-label": grovePrime,
        className: indigo,
        color: "ghost",
        size: "icon",
        onClick: hillPrime,
        children: islePrime,
      }}
    />
  );
  let lagoonPrime = orbitPrime.formatMessage({
    id: "projectsIndex.startProjectChat",
    defaultMessage: "Start new chat in project",
    description: "Button label to start a new task from the projects index",
  });
  let meadowPrime = () => pinePrime(row.group);
  let nestPrime = (
    <AppIconYm
      {...{
        className: "icon-xs",
      }}
    />
  );
  let oakPrime = (
    <ReadLoginRouteQuerySnapshot
      {...{
        "aria-label": lagoonPrime,
        className: indigo,
        color: "ghost",
        size: "icon",
        onClick: meadowPrime,
        children: nestPrime,
      }}
    />
  );
  let petalPrime = (
    <>
      {fernPrime}
      {juniperPrime}
      {oakPrime}
    </>
  );
  let quietPrime = expanded ? (
    <div className="pb-3">
      {
        <ThreadKeyVirtualList
          {...{
            ariaLabel: orbitPrime.formatMessage(
              {
                id: "projectsIndex.recentChats.ariaLabel",
                defaultMessage: "Recent chats in {projectName}",
                description:
                  "Accessible label for expanded project recent tasks",
              },
              {
                projectName: row.name,
              },
            ),
            emptyState: (
              <MemoizedFormattedMessage
                {...{
                  id: "projectsIndex.recentChats.empty",
                  defaultMessage: "No chats",
                  description:
                    "Empty state for an expanded project in the projects index",
                }}
              />
            ),
            emptyStateClassName:
              "px-2 py-1 text-base text-token-text-secondary",
            expanded: showAll,
            itemWrapper: quill,
            maxItems: 10,
            onExpandedChange: onShowAllChange,
            variant: "tableRow",
            rowOptions: {
              canPin: false,
              hideRemoteHostEnvIcon: true,
              hideTimestamp: true,
              variant: "tableRow",
            },
            threadKeys:
              row.matchingThreadKeys.length > 0
                ? row.matchingThreadKeys
                : row.recentThreadKeys,
          }}
        />
      }
    </div>
  ) : null;
  let rainPrime =
    row.group.projectKind === "remote" ? (
      <EnsureRealtimeVoiceStartHandlerInit
        {...{
          className: "icon-xs shrink-0",
          remoteHostId: row.group.hostId,
          isRemoteProject: true,
        }}
      />
    ) : expanded ? (
      <AppIconKo className="icon-xs shrink-0" />
    ) : (
      <AppIconCS
        {...{
          className: "icon-xs shrink-0",
        }}
      />
    );
  let seedPrime = (
    <AppInitialD
      projectId={row.group.projectId}
      projectName={row.name}
      buttonClassName={
        "!h-7 !w-7 !p-1 text-token-description-foreground [&>svg]:!h-4 [&>svg]:!w-4"
      }
      fallbackIcon={rainPrime}
      markerClassName="h-4 w-4"
    />
  );
  let trailPrime =
    showLocalBadge && row.group.projectKind === "local" ? (
      <OptionalTooltip
        {...{
          tooltipContent: (
            <MemoizedFormattedMessage
              {...{
                id: "projectsIndex.localProject.tooltip",
                defaultMessage:
                  "ChatGPT works locally on your computer and can read and edit this project's contents",
                description:
                  "Tooltip explaining the laptop icon shown for local projects",
              }}
            />
          ),
          children: (
            <span
              aria-label={orbitPrime.formatMessage({
                id: "projectsIndex.localProject.accessibleLabel",
                defaultMessage: "Local project",
                description:
                  "Accessible label for the laptop icon shown for local projects",
              })}
              className="inline-flex shrink-0"
              role="img"
              tabIndex={0}
            >
              <AppIconKS
                aria-hidden={true}
                className="icon-xs text-token-text-secondary"
              />
            </span>
          ),
        }}
      />
    ) : null;
  let urnPrime =
    row.group.projectKind === "remote" && row.group.hostId != null ? (
      <ProjectsIndexPageHelper38
        {...{
          hostId: row.group.hostId,
        }}
      />
    ) : null;
  let vinePrime = searchForcedExpanded ? null : (
    <button
      type="button"
      className="group/project-toggle cursor-interaction rounded-sm"
      aria-label={orbitPrime.formatMessage({
        id: "projectsIndex.toggleProject",
        defaultMessage: "Toggle project",
        description:
          "Accessible label for expanding or collapsing a project row",
      })}
      aria-expanded={expanded}
      onClick={(event) => {
        event.stopPropagation();
        onToggleExpanded();
      }}
    >
      {
        <AppIconSft
          {...{
            "aria-hidden": "true",
            className: IntlProvider(
              "icon-xs shrink-0 text-token-text-secondary opacity-0 transition-transform group-hover/project-row:opacity-100 group-focus-visible/project-toggle:opacity-100",
              expanded ? "rotate-0 opacity-100" : "-rotate-90",
            ),
          }}
        />
      }
    </button>
  );
  let windPrime = (
    <>
      {trailPrime}
      {urnPrime}
      {vinePrime}
    </>
  );
  let yarrowPrime = (
    <ProjectsIndexPageHelper2
      {...{
        modifiedAt: row.modifiedAt,
      }}
    />
  );
  let azurePrime = searchForcedExpanded ? undefined : cliffPrime;
  return (
    <ProjectsIndexPageHelper27
      {...{
        actions: petalPrime,
        expandedContent: quietPrime,
        isExpanded: expanded,
        leading: seedPrime,
        name: row.name,
        nameTrailing: windPrime,
        updated: yarrowPrime,
        onClick: azurePrime,
        onDoubleClick: elmPrime,
      }}
    />
  );
}

function ProjectsIndexPageHelper38(birchPrime) {
  let { hostId } = birchPrime,
    { state } = iconXs(hostId);
  if (state == null) return null;
  return <HostConnectionStatusBadge hostId={hostId} />;
}

function quill(canyonPrime) {
  let { children, className, threadKey } = canyonPrime,
    dewPrime = CodexPluginActionType(appScopeAtom),
    everPrime = useIntl(),
    fieldPrime = useNavigate(),
    grainPrime = useColdNavigate(),
    havenPrime = CodexBrowserSurfaceActionType(
      ensureRemoteConnectionsStorageInit,
      threadKey,
    ),
    inkPrime = havenPrime?.kind === "local" ? havenPrime.conversationId : null,
    jadeitePrime = CodexBrowserSurfaceActionType(
      resolveForcedHostLayers,
      inkPrime,
    ),
    kernelPrime = CodexBrowserSurfaceActionType(deferredUiHT, threadKey),
    leafPrime =
      havenPrime?.kind === "local"
        ? havenPrime.conversationId
        : havenPrime?.kind === "remote"
          ? havenPrime.task.id
          : null,
    maplePrime = leafPrime != null,
    nimbusPrime =
      havenPrime?.kind === "local"
        ? (jadeitePrime ?? havenPrime.summary?.updatedAt ?? null)
        : havenPrime?.kind === "remote"
          ? (havenPrime.task.updated_at ?? havenPrime.task.created_at ?? null)
          : null,
    opalPrime = () => {
      buildPullRequestRoutePath(dewPrime, threadKey);
      parsePullRequestFilterQuery(dewPrime, threadKey, grainPrime, fieldPrime);
    };
  let plumePrime = opalPrime,
    quillowPrime = (event) => {
      event.defaultPrevented ||
        event.detail > 1 ||
        xenon(event.target) ||
        plumePrime();
    };
  let rootPrime = quillowPrime,
    silkPrime = (pondPrime) => {
      leafPrime != null && DeferredWorkspaceTA2(dewPrime, leafPrime, pondPrime);
    };
  let thornPrime = silkPrime,
    uplandPrime = everPrime.formatMessage(
      kernelPrime ? sidebarElectronPinThread : deferredConversationSo,
    );
  let vistaPrime = uplandPrime,
    wispPrime = IntlProvider(
      delta,
      echo,
      "before:inset-y-0",
      "group/thread-row cursor-interaction h-9 items-center text-base leading-9",
      className,
    );
  let yonderPrime = IntlProvider(harbor, "flex min-w-0 items-center gap-3");
  let zenithPrime = havenPrime ?? null,
    anvilPrime = (
      <ProjectsIndexPageHelper40
        {...{
          entry: zenithPrime,
          localConversationId: inkPrime,
        }}
      />
    );
  let beaconPrime = <div className="min-w-0 flex-1">{children}</div>;
  let cragPrime = (
    <div className={yonderPrime}>
      {anvilPrime}
      {beaconPrime}
    </div>
  );
  let domePrime = IntlProvider(
    harbor,
    "text-token-text-secondary max-[680px]:hidden",
  );
  let eddyPrime =
    nimbusPrime == null ? null : (
      <ProjectsIndexPageHelper2
        {...{
          modifiedAt: nimbusPrime,
        }}
      />
    );
  let fjordPrime = <span className={domePrime}>{eddyPrime}</span>;
  let glenPrime = IntlProvider(harbor, "flex min-w-0 justify-end gap-1");
  let hearthPrime = havenPrime ?? null,
    inletPrime = (
      <ProjectsIndexPageHelper41
        {...{
          entry: hearthPrime,
          onOpenThread: plumePrime,
        }}
      />
    );
  let jettyPrime = maplePrime ? (
    <ReadLoginRouteQuerySnapshot
      {...{
        "aria-label": vistaPrime,
        className: IntlProvider(
          indigo,
          "opacity-0 group-hover/thread-row:opacity-100 focus-visible:opacity-100",
        ),
        color: "ghost",
        size: "icon",
        onClick: () => thornPrime(!kernelPrime),
        children: kernelPrime ? (
          <AppIconAo className="icon-xs" />
        ) : (
          <DefaultHourlyScheduleConfig
            {...{
              className: "icon-xs",
            }}
          />
        ),
      }}
    />
  ) : null;
  let knobPrime = everPrime.formatMessage({
    id: "projectsIndex.openThread",
    defaultMessage: "Open chat",
    description: "Button label to open a task from an expanded project row",
  });
  let ledgePrime = IntlProvider(
    indigo,
    "opacity-0 group-hover/thread-row:opacity-100 focus-visible:opacity-100",
  );
  let mirePrime = (
    <AppIconYlt
      {...{
        className: "icon-xs",
      }}
    />
  );
  let nookPrime = (
    <ReadLoginRouteQuerySnapshot
      {...{
        "aria-label": knobPrime,
        className: ledgePrime,
        color: "ghost",
        size: "icon",
        onClick: plumePrime,
        children: mirePrime,
      }}
    />
  );
  let oxbowPrime = (
    <span className={glenPrime}>
      {inletPrime}
      {jettyPrime}
      {nookPrime}
    </span>
  );
  return (
    <div className={wispPrime} onClick={rootPrime}>
      {cragPrime}
      {fjordPrime}
      {oxbowPrime}
    </div>
  );
}

function ProjectsIndexPageHelper40(quarryPrime) {
  let { entry, localConversationId } = quarryPrime,
    rapidsPrime = CodexBrowserSurfaceActionType(
      AppInitialTo,
      localConversationId,
    ),
    spurPrime = entry?.kind === "remote" ? entry : null,
    torPrime = toggleSortedIdList(spurPrime);
  let updraftPrime = CodexBrowserSurfaceActionType(AppInitialNo, torPrime),
    vergePrime = CodexBrowserSurfaceActionType(
      AppInitialO,
      localConversationId,
    ),
    weirPrime = CodexBrowserSurfaceActionType(AppInitialU, localConversationId),
    yardPrime = CodexBrowserSurfaceActionType(
      AppInitialR4,
      localConversationId,
    ),
    anchorPrime =
      entry?.kind === "remote"
        ? updraftPrime?.iconBadge
        : rapidsPrime?.iconBadge,
    boltPrime = reef({
      entry,
      localHasUnreadTurn: weirPrime,
      localStatusType: vergePrime,
      localUnreadMessageCount: yardPrime,
    });
  let cogPrime = boltPrime,
    discPrime =
      anchorPrime == null ? (
        cogPrime == null ? null : (
          <EnsureImportSettingsCsInit
            {...{
              statusState: cogPrime,
            }}
          />
        )
      ) : (
        <WorktreeLeafName
          {...{
            badge: anchorPrime,
          }}
        />
      );
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center">
      {discPrime}
    </span>
  );
}

function ProjectsIndexPageHelper41(edgePrime) {
  let { entry, onOpenThread } = edgePrime;
  if (entry?.kind === "local") {
    let forgePrime;
    return (
      <ProjectsIndexPageHelper43
        {...{
          entry,
        }}
      />
    );
  }
  return (
    <ProjectsIndexPageHelper42
      {...{
        onOpenThread,
      }}
    />
  );
}

function ProjectsIndexPageHelper42(gearPrime) {
  let { onOpenThread } = gearPrime,
    hingePrime = useIntl(),
    [ironPrime, jointPrime] = $r.useState(false),
    keystonePrime = hingePrime.formatMessage({
      id: "projectsIndex.threadActions",
      defaultMessage: "Chat actions",
      description: "Button label for expanded project chat row actions",
    });
  let latchPrime = ironPrime && "opacity-100",
    motorPrime = IntlProvider(
      indigo,
      "opacity-0 group-hover/thread-row:opacity-100 focus-visible:opacity-100",
      latchPrime,
    );
  let nutPrime = (
    <AppIconQI
      {...{
        className: "icon-xs",
      }}
    />
  );
  let pistonPrime = (
    <ReadLoginRouteQuerySnapshot
      {...{
        "aria-label": keystonePrime,
        className: motorPrime,
        color: "ghost",
        size: "icon",
        children: nutPrime,
      }}
    />
  );
  let rivetPrime = () => {
    onOpenThread();
    jointPrime(false);
  };
  let screwPrime = (
    <MemoizedFormattedMessage
      {...{
        id: "projectsIndex.openThreadMenuItem",
        defaultMessage: "Open chat",
        description: "Menu item to open a task from an expanded project row",
      }}
    />
  );
  let torquePrime = (
    <DropdownMenu.Item
      {...{
        LeftIcon: AppIconYlt,
        onSelect: rivetPrime,
        children: screwPrime,
      }}
    />
  );
  return (
    <DropdownMenuPopover
      {...{
        align: "end",
        contentWidth: "xs",
        open: ironPrime,
        onOpenChange: jointPrime,
        triggerButton: pistonPrime,
        children: torquePrime,
      }}
    />
  );
}

function ProjectsIndexPageHelper43(valvePrime) {
  let { entry } = valvePrime,
    axlePrime = entry.conversationId,
    bracketPrime =
      CodexBrowserSurfaceActionType(deferredConversationN, axlePrime) ??
      entry.summary?.title ??
      null,
    clampPrime = entry.cwd,
    drillPrime = entry.workspaceKind === "projectless",
    enginePrime = IntlProvider(
      indigo,
      "opacity-0 group-hover/thread-row:opacity-100 focus-visible:opacity-100 data-[state=open]:opacity-100",
    );
  return (
    <ThreadOverflowMenuT
      {...{
        archiveNavigation: "none",
        archiveSource: "projects_index_thread_overflow_menu",
        conversationId: axlePrime,
        cwd: clampPrime,
        dropdownAlign: "end",
        hideForkActions: drillPrime,
        title: bracketPrime,
        triggerButtonClassName: enginePrime,
        triggerButtonColor: "ghost",
        triggerIconClassName: "icon-xs",
      }}
    />
  );
}
