// Restored from ref/webview/assets/projects-index-page-AZjn-SLu.js
// Wave FZ — full polished body from `projects-index-page-AZjn-SLu/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 63 (verified 134/196).
// Careful split 1/3 — lane B (index page icon + thread rows)
/* split-lane-import-depth:1 */

import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import {
  chatgptConversationsGateAtom,
  useStepsProseAtom,
} from "../../composer/composer-appscope-atoms";
import { ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_Ist_Init } from "../../conversation/conversation-page-esm-inits";
import { isIterateeCall } from "../../boundaries/lodash-clone-deep-guts";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { ensurePinnedConversationsQueryInit } from "../../conversation/ensure-pinned-conversations-query-init";
import { DesktopPersistenceKeys } from "../../desktop/persistence-keys";
import { resolveRootPaths } from "../../environments/resolve-root-paths";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAZ } from "../../icons/app-icon-az";
import { ensureAppIconKhInit as EnsureAppIconKhInit } from "../../icons/app-icon-kh";
import { AppIconPlt } from "../../icons/app-icon-plt";
import { visibleRemoteControlConnections } from "../../remote-control/remote-control-connection-sets";
import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureBrowserDownloadSettingsInit as EnsureBrowserDownloadSettingsInit } from "../../settings/browser-download-settings";
import { chatgptProjectIdsByThreadKey } from "../../sidebar/chatgpt-project-ids-by-thread-key";
import { DropdownMenuPopover } from "../../ui/dropdown-menu-popover";
import { ElectronOnly } from "../../ui/electron-only";
import { remote } from "../../ui/remote";
import { SearchableDetailPageLayout } from "../../ui/searchable-detail-page-layout";
import { useSearchablePageTitleVisibility } from "../../ui/use-searchable-page-title-visibility";
import { ensurePersonalizationK0Init } from "../../utils/wave-as-gap-ensure-inits";

// Cross-part stubs.
const delta: any = undefined;
const gamma: any = undefined;
const jade: any = undefined;
const $r: any = undefined;
const ProjectsIndexPageHelper28: any = undefined;
const ProjectsIndexPageHelper37: any = undefined;
const vapor: any = undefined;
const wheat: any = undefined;
const yarn: any = undefined;
const chats: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const AppInitialAF: any = undefined;
const Chatgpt2: any = undefined;
const useQuickChatConversationFilter: any = undefined;
const AppInitialHQ: any = undefined;
const AppInitialMB: any = undefined;
const AppInitialNB: any = undefined;
const deferredConversationNN3: any = undefined;
const AppInitialNst: any = undefined;
const AppInitialTO: any = undefined;
const IntlProvider: any = undefined;
const AppInitialWN: any = undefined;
const AppInitialXa: any = undefined;

function onyx({
  groups,
  localProjects,
  showLocalProjects,
  showChatGptProjects,
}) {
  return showLocalProjects
    ? showChatGptProjects
      ? groups.filter((item) => {
          if (item.projectKind !== "local") return false;
          let hill = localProjects?.[item.projectId];
          return hill == null || !AppInitialNB(hill);
        })
      : groups
    : [];
}

function pearl({
  hasConversationSearchError,
  hasNextProjectListPage,
  hasProjectListError,
  isConversationSearchFetching,
  isFetchingNextProjectListPage,
  isProjectListLoading,
  query,
  showChatGptProjects,
}) {
  return !showChatGptProjects || query.trim().length === 0
    ? null
    : isProjectListLoading ||
        isFetchingNextProjectListPage ||
        isConversationSearchFetching ||
        (hasNextProjectListPage && !hasProjectListError)
      ? "searching"
      : hasProjectListError || hasConversationSearchError
        ? "error"
        : null;
}

function quartz({ chatGptSearchStatus, isProjectCatalogLoading, rowCount }) {
  return rowCount === 0
    ? isProjectCatalogLoading || chatGptSearchStatus === "searching"
      ? "loading"
      : chatGptSearchStatus === "error"
        ? "error"
        : "empty"
    : chatGptSearchStatus === "error"
      ? "partial-error"
      : chatGptSearchStatus;
}

function river({
  cloudRows = [],
  groups,
  query,
  sortDirection,
  sortKey,
  tasks,
}) {
  let isle = new Map(tasks.map((item) => [item.key, item])),
    juniper = query.trim().toLowerCase();
  return [
    ...groups.map((item) => or(item, isle, juniper)),
    ...cloudRows.map((item) => ({
      ...item,
      matchingConversations: timber(item.conversationSearchResults, juniper),
      matchingThreadKeys: slate(item.localThreadKeys, isle, juniper),
    })),
  ]
    .filter((item) =>
      juniper.length === 0
        ? true
        : `${item.name} ${item.sourceSearchText}`
            .toLowerCase()
            .includes(juniper) ||
          item.matchingThreadKeys.length > 0 ||
          (item.kind === "cloud" && item.matchingConversations.length > 0),
    )
    .sort((lagoon, meadow) => {
      let nest = umbra(lagoon, meadow, sortKey);
      return sortDirection === "ascending" ? nest : -nest;
    });
}

function or(oak, petal, quiet) {
  let rain = oak.threadKeys.flatMap((item) => {
      let urn = petal.get(item);
      return urn == null ? [] : [urn.at];
    }),
    trail =
      oak.projectUpdatedAt == null ? rain : [...rain, oak.projectUpdatedAt];
  return {
    group: oak,
    id: `codex:${oak.projectId}`,
    kind: "codex",
    matchingThreadKeys: slate(oak.threadKeys, petal, quiet),
    modifiedAt: trail.length === 0 ? null : Math.max(...trail),
    name: oak.label,
    projectId: oak.projectId,
    recentThreadKeys: [...oak.threadKeys].sort(
      (vine, wind) => (petal.get(wind)?.at ?? 0) - (petal.get(vine)?.at ?? 0),
    ),
    sourceSearchText:
      oak.projectKind === "local" ? resolveRootPaths(oak).join(" ") : oak.path,
  };
}

function slate(yarrow, azure, birch) {
  return birch.length === 0
    ? []
    : yarrow.filter((item) => {
        let canyon = azure.get(item);
        if (canyon == null) return false;
        let dew;
        return (
          (dew =
            canyon.kind === "remote"
              ? canyon.task.title
              : canyon.conversation == null
                ? canyon.pendingWorktree.label
                : AppInitialNst(canyon.conversation)),
          AppInitialWN(dew, birch)
        );
      });
}

function timber(ever, field) {
  return field.length === 0
    ? []
    : ever.filter((item) => AppInitialWN(item.title, field));
}

function umbra(grain, haven, ink) {
  switch (ink) {
    case "modified":
      return (
        (grain.modifiedAt ?? 0) - (haven.modifiedAt ?? 0) ||
        violet(grain, haven)
      );
    case "name":
      return violet(grain, haven);
  }
}

function violet(jadeite, kernel) {
  return (
    jadeite.name.localeCompare(kernel.name, undefined, {
      sensitivity: "base",
    }) || jadeite.id.localeCompare(kernel.id)
  );
}
var willow = esmInit(() => {
  AppInitialMB();
  ensureConversationPageEsm_Ist_Init();
  DropdownMenuPopover();
  ensurePinnedConversationsQueryInit();
});

function ProjectsIndexPageHelper15(maple) {
  let { status } = maple;
  if (status === "loading" || status === "searching") {
    let opal;
    return (
      <ProjectsIndexPageHelper16
        {...{
          status,
        }}
      />
    );
  }
  let nimbus;
  bb0: switch (status) {
    case "empty": {
      let plume;
      plume = (
        <MemoizedFormattedMessage
          {...{
            id: "projectsIndex.empty",
            defaultMessage: "No projects",
            description: "Empty state for projects index",
          }}
        />
      );
      nimbus = plume;
      break bb0;
    }
    case "error": {
      let quillow;
      quillow = (
        <MemoizedFormattedMessage
          {...{
            id: "projectsIndex.search.chatGpt.error.full",
            defaultMessage: "Couldn’t search ChatGPT chats",
            description:
              "Full error state below the Projects table when searching returns no ChatGPT chats because the backend request failed. This does not mean there are no matching chats",
          }}
        />
      );
      nimbus = quillow;
      break bb0;
    }
    case "partial-error": {
      let root;
      root = (
        <MemoizedFormattedMessage
          {...{
            id: "projectsIndex.search.chatGpt.error.partial",
            defaultMessage: "Some ChatGPT chats may be missing",
            description:
              "Warning below matching rows on the Projects page when backend ChatGPT chat search failed after some results loaded. It tells the user that displayed results may be incomplete",
          }}
        />
      );
      nimbus = root;
    }
  }
  return (
    <div className="px-0 py-10 text-center text-sm text-token-description-foreground">
      {nimbus}
    </div>
  );
}

function ProjectsIndexPageHelper16(silk) {
  let { status } = silk,
    thorn = (
      <span className="sr-only">
        {status === "searching" ? (
          <MemoizedFormattedMessage
            {...{
              id: "projectsIndex.search.chatGpt.loading",
              defaultMessage: "Searching ChatGPT chats…",
              description:
                "Screen-reader status for skeleton rows below existing Projects search results while ChatGPT chat search continues",
            }}
          />
        ) : (
          <MemoizedFormattedMessage
            {...{
              id: "projectsIndex.loading",
              defaultMessage: "Loading projects",
              description:
                "Screen-reader status for skeleton rows below the Projects table header while project data or search results load",
            }}
          />
        )}
      </span>
    );
  let upland = Array.from(
    {
      length: 4,
    },
    zinc,
  );
  return (
    <div aria-live="polite" role="status">
      {thorn}
      {upland}
    </div>
  );
}

function zinc(vista, wisp) {
  return (
    <div
      key={wisp}
      className={IntlProvider(delta, gamma, "min-h-[70px] items-center py-2")}
    >
      {
        <EnsureBrowserDownloadSettingsInit
          {...{
            className: "max-w-64",
            lines: 1,
            maxWidth: 88,
            minWidth: 52,
            seed: `projects-index-loading-name-${wisp}`,
          }}
        />
      }
      {
        <EnsureBrowserDownloadSettingsInit
          {...{
            className: "max-w-20 max-[680px]:hidden",
            lines: 1,
            maxWidth: 92,
            minWidth: 64,
            seed: `projects-index-loading-updated-${wisp}`,
            size: "sm",
          }}
        />
      }
      <span />
    </div>
  );
}
var _r,
  amber,
  basalt = esmInit(() => {
    _r = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureIntlFormattersInit();
    AppInitialTO();
    jade();
  }),
  cedar,
  daisy,
  ember = esmInit(() => {
    react();
    daisy = (yonder) => (
      <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...yonder}
      >
        <path
          d="M12.667 9.4743C12.9567 9.47444 13.1922 9.70997 13.1924 9.99969V11.4743H14.667C14.9567 11.4744 15.1922 11.71 15.1924 11.9997C15.1924 12.2896 14.9568 12.525 14.667 12.5251H13.1924V13.9997C13.1924 14.2896 12.9568 14.525 12.667 14.5251C12.377 14.5251 12.1416 14.2896 12.1416 13.9997V12.5251H10.667C10.377 12.5251 10.1416 12.2896 10.1416 11.9997C10.1418 11.7099 10.3771 11.4743 10.667 11.4743H12.1416V9.99969C12.1418 9.70989 12.3771 9.4743 12.667 9.4743Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.36914 2.1413C5.92368 2.14134 6.3602 2.23675 6.73242 2.38934C7.0975 2.53904 7.38153 2.73785 7.61816 2.90399C8.07606 3.22547 8.4207 3.47434 9.16602 3.4743H11.9473C13.3336 3.47453 14.4453 4.61186 14.4453 5.99969V7.06512C14.4452 7.48137 14.1212 7.85614 13.6562 7.85614H2.60547V11.3307C2.60547 12.1518 3.26027 12.8051 4.05371 12.8054H7.67578C7.96573 12.8054 8.20117 13.0408 8.20117 13.3307C8.20117 13.6207 7.96573 13.8561 7.67578 13.8561H4.05371C2.66737 13.8559 1.55566 12.7186 1.55566 11.3307V7.35028C1.55545 7.34411 1.55371 7.33795 1.55371 7.33173C1.55371 7.32523 1.55543 7.31864 1.55566 7.31219V4.66669C1.55566 3.27887 2.66737 2.14155 4.05371 2.1413H5.36914ZM4.05371 3.19208C3.26027 3.19233 2.60547 3.84568 2.60547 4.66669V6.80634H13.3955V5.99969C13.3955 5.17867 12.7407 4.52531 11.9473 4.52509H9.16699C8.07964 4.52528 7.50698 4.10834 7.01562 3.76337C6.77762 3.59627 6.57854 3.46129 6.33398 3.36102C6.09656 3.26369 5.79646 3.19212 5.36914 3.19208H4.05371Z"
          fill="currentColor"
        />
      </svg>
    );
  });

export function ProjectsIndexPageIcon() {
  let zenith = useIntl(),
    [anvil, beacon] = $r.useState(""),
    crag = CodexPluginActionResult(chatgptConversationsGateAtom),
    dome = crag ? "all" : "chats",
    eddy = useStepsProseAtom(),
    fjord = !crag || eddy === "STEPS_PROSE",
    glen = {
      conversationFilter: dome,
    };
  let hearth = useQuickChatConversationFilter(glen),
    { fetchNextProjectPage, hasNextProjectPage, isFetchingNextProjectPage } =
      hearth,
    inlet = CodexPluginActionResult(visibleRemoteControlConnections),
    jetty = {
      enabled: crag,
      threadKeys: inlet,
    };
  let { groups, isWorkspaceRootOptionsLoading } = CodexBrowserSurfaceActionType(
      isIterateeCall,
      jetty,
    ),
    { data: knob } = ensurePersonalizationK0Init(
      DesktopPersistenceKeys.LOCAL_PROJECTS,
    ),
    ledge = onyx({
      groups,
      localProjects: knob,
      showLocalProjects: crag,
      showChatGptProjects: fjord,
    });
  let mire = ledge,
    { data } = ensurePersonalizationK0Init(
      DesktopPersistenceKeys.THREAD_PROJECT_ASSIGNMENTS,
    ),
    nook = CodexBrowserSurfaceActionType(AppInitialHQ, inlet),
    { chatGptProjectIdByThreadKey } = chatgptProjectIdsByThreadKey({
      localProjects: knob,
      projectGroups: groups,
      tasks: nook,
      threadProjectAssignments: data,
    }),
    oxbow = new Map();
  for (let [platen, ratchet] of chatGptProjectIdByThreadKey) {
    let shim = oxbow.get(ratchet) ?? [];
    shim.push(platen);
    oxbow.set(ratchet, shim);
  }
  let [pond, quarry] = $r.useState("modified"),
    [rapids, spur] = $r.useState("descending"),
    { scrollContainerRef, showTitleInToolbar, titleRef } =
      useSearchablePageTitleVisibility(),
    [tor, updraft] = $r.useState(kelp),
    [verge, weir] = $r.useState(jasper),
    yard,
    anchor;
  yard = () => {
    fjord &&
      hasNextProjectPage &&
      !isFetchingNextProjectPage &&
      !hearth.isProjectError &&
      fetchNextProjectPage();
  };
  anchor = [
    fetchNextProjectPage,
    hasNextProjectPage,
    isFetchingNextProjectPage,
    hearth.isProjectError,
    fjord,
  ];
  $r.useEffect(yard, anchor);
  let bolt = fjord
      ? [...hearth.pinnedProjects, ...hearth.projects.map(ivory)]
      : [],
    cog = anvil.trim().toLowerCase();
  let disc = cog,
    edge = Chatgpt2(disc, yarn),
    forge =
      fjord &&
      disc.length > 0 &&
      edge.length > 0 &&
      !hearth.isProjectLoading &&
      !isFetchingNextProjectPage &&
      (!hasNextProjectPage || hearth.isProjectError),
    gear = {
      enabled: forge,
    };
  let { hasError, isFetching, projectResults } = CodexBrowserSurfaceActionType(
      deferredConversationNN3,
      {
        projectIds: bolt.map(hazel),
        query: edge,
      },
      gear,
    ),
    hinge = new Map(
      projectResults.map((item) => {
        let { conversations, projectId } = item;
        return [
          projectId,
          conversations.filter((_item) =>
            AppInitialAF(_item.conversation_origin, dome),
          ),
        ];
      }),
    ),
    iron = new Map(bolt.map(garnet)),
    joint = new Set(hearth.pinnedProjects.map(flint));
  let keystone = joint,
    latch = river({
      cloudRows: bolt.map((item) => ({
        id: `chatgpt:${item.gizmo.id}`,
        kind: "cloud",
        modifiedAt: lotus(item),
        name: item.gizmo.display.name.trim() || item.gizmo.id,
        projectId: item.gizmo.id,
        conversationSearchResults: hinge.get(item.gizmo.id) ?? [],
        localThreadKeys: crag ? (oxbow.get(item.gizmo.id) ?? []) : [],
        sourceSearchText: "ChatGPT",
      })),
      groups: mire,
      query: anvil,
      sortDirection: rapids,
      sortKey: pond,
      tasks: nook,
    }),
    motor = quartz({
      chatGptSearchStatus: pearl({
        hasConversationSearchError: hasError,
        hasNextProjectListPage: hasNextProjectPage,
        isConversationSearchFetching: isFetching || edge !== disc,
        isFetchingNextProjectListPage: isFetchingNextProjectPage,
        isProjectListLoading: hearth.isProjectLoading,
        hasProjectListError: hearth.isProjectError,
        query: anvil,
        showChatGptProjects: fjord,
      }),
      isProjectCatalogLoading:
        isWorkspaceRootOptionsLoading || (fjord && hearth.isProjectLoading),
      rowCount: latch.length,
    }),
    nut =
      !isWorkspaceRootOptionsLoading &&
      (!fjord || !hearth.isProjectLoading) &&
      mire.length === 0 &&
      bolt.length === 0,
    piston = zenith.formatMessage({
      id: "projectsIndex.search.placeholder",
      defaultMessage: "Search projects",
      description: "Accessible label and placeholder for projects index search",
    });
  let rivet = piston,
    screw = showTitleInToolbar ? (
      <MemoizedFormattedMessage
        {...{
          id: "projectsIndex.title",
          defaultMessage: "Projects",
          description: "Title for the projects index page",
        }}
      />
    ) : null;
  let torque = nut ? null : (
    <ProjectsIndexPageHelper24
      {...{
        compact: true,
        chatGptProjectCrudStatus: hearth.projectCrudStatus,
        onCreateChatGptProject: fjord
          ? hearth.handleCreateProjectOpen
          : undefined,
        sidebarMode: fjord ? "chatgpt" : "codex",
      }}
    />
  );
  let _e = (
    <EnsureAppIconKhInit
      {...{
        start: screw,
        trailing: torque,
      }}
    />
  );
  let valve = _e,
    axle = (tappet) => {
      if (pond !== tappet) {
        quarry(tappet);
        spur(wheat[tappet]);
        return;
      }
      spur(rapids === "ascending" ? "descending" : "ascending");
    };
  let bracket = axle,
    clamp = (arbor) => {
      updraft((bushing) => {
        let collar = new Set(bushing);
        return (
          collar.has(arbor) ? collar.delete(arbor) : collar.add(arbor),
          collar
        );
      });
    };
  let drill = clamp,
    engine = (dowel, flange) => {
      weir((gib) => {
        let hub = new Set(gib);
        return (flange ? hub.add(dowel) : hub.delete(dowel), hub);
      });
    };
  let frame = engine,
    gasket = (
      <ElectronOnly
        {...{
          extension: true,
          children: valve,
        }}
      />
    );
  let handle = (
    <ElectronOnly
      {...{
        browser: true,
        chromeExtension: true,
        electron: true,
        children: (
          <AppIconAZ.Header
            {...{
              children: valve,
            }}
          />
        ),
      }}
    />
  );
  let insert = SearchableDetailPageLayout,
    jacket = nut
      ? undefined
      : {
          id: "projects-index-search",
          label: rivet,
          onSearchQueryChange: beacon,
          placeholder: rivet,
          searchQuery: anvil,
        };
  let knurl = nut ? (
    fjord ? (
      <MemoizedFormattedMessage
        {...{
          id: "projectsIndex.chatGpt.empty.subtitle",
          defaultMessage:
            "Create a ChatGPT project to keep related chats, files, and instructions together",
          description:
            "Subtitle explaining ChatGPT projects when the Work mode projects index is empty",
        }}
      />
    ) : (
      <MemoizedFormattedMessage
        {...{
          id: "projectsIndex.empty.subtitle",
          defaultMessage:
            "Create a project to organize chats and give ChatGPT access to folders on your computer.",
          description:
            "Subtitle explaining the purpose of projects when the projects index is empty",
        }}
      />
    )
  ) : undefined;
  let lever = (
    <MemoizedFormattedMessage
      {...{
        id: "projectsIndex.title",
        defaultMessage: "Projects",
        description: "Title for the projects index page",
      }}
    />
  );
  let mount = nut ? (
      <div className="flex flex-1 items-center justify-center">
        {
          <ProjectsIndexPageHelper24
            {...{
              chatGptProjectCrudStatus: hearth.projectCrudStatus,
              onCreateChatGptProject: fjord
                ? hearth.handleCreateProjectOpen
                : undefined,
              sidebarMode: fjord ? "chatgpt" : "codex",
            }}
          />
        }
      </div>
    ) : (
      <div className="-mx-5 min-h-0 overflow-visible px-5">
        <div data-projects-header={true} className={IntlProvider(delta, vapor)}>
          {
            <ProjectsIndexPageHelper25
              {...{
                active: pond === "name",
                direction: rapids,
                onClick: () => bracket("name"),
                children: (
                  <MemoizedFormattedMessage
                    {...{
                      id: "projectsIndex.column.name",
                      defaultMessage: "Name",
                      description: "Projects index name column header",
                    }}
                  />
                ),
              }}
            />
          }
          {
            <ProjectsIndexPageHelper25
              {...{
                active: pond === "modified",
                className: "max-[680px]:hidden",
                direction: rapids,
                onClick: () => bracket("modified"),
                children: (
                  <MemoizedFormattedMessage
                    {...{
                      id: "projectsIndex.column.modified",
                      defaultMessage: "Updated",
                      description: "Projects index modified column header",
                    }}
                  />
                ),
              }}
            />
          }
          <span />
        </div>
        <div data-projects-rows={true} className="min-w-0">
          {latch.map((item) => {
            let idler = tor.has(item.id);
            if (item.kind === "cloud") {
              let jig = iron.get(item.projectId),
                keeper =
                  item.matchingThreadKeys.length > 0 ||
                  item.matchingConversations.length > 0;
              return jig == null ? null : (
                <ProjectsIndexPageHelper28
                  key={item.id}
                  {...{
                    expanded: idler || keeper,
                    isPinned: keystone.has(item.projectId),
                    onToggleExpanded: () => drill(item.id),
                    project: jig,
                    projectCrudStatus: hearth.projectCrudStatus,
                    row: item,
                    searchForcedExpanded: keeper,
                    canStartLocalTask: crag,
                    conversationFilter: dome,
                  }}
                />
              );
            }
            return (
              <ProjectsIndexPageHelper37
                key={item.id}
                {...{
                  expanded: idler || item.matchingThreadKeys.length > 0,
                  onShowAllChange: (lug) => frame(item.projectId, lug),
                  onToggleExpanded: () => drill(item.id),
                  row: item,
                  searchForcedExpanded: item.matchingThreadKeys.length > 0,
                  showAll: verge.has(item.projectId),
                  showLocalBadge: fjord,
                }}
              />
            );
          })}
          {motor == null ? null : (
            <ProjectsIndexPageHelper15
              {...{
                status: motor,
              }}
            />
          )}
        </div>
      </div>
    ),
    nozzle = (
      <SearchableDetailPageLayout
        {...{
          contentClassName: "!pt-7",
          headerVariant: "inset",
          horizontalPaddingClassName:
            "md:electron:px-toolbar md:extension:px-20",
          scrollContainerRef,
          search: jacket,
          subtitle: knurl,
          title: lever,
          titleRef,
          children: mount,
        }}
      />
    );
  return (
    <div className="flex h-full min-h-0 flex-col bg-token-main-surface-primary text-token-foreground">
      {gasket}
      {handle}
      {nozzle}
    </div>
  );
}

function flint(mandrel) {
  return mandrel.gizmo.id;
}

function garnet(nipple) {
  return [nipple.gizmo.id, nipple];
}

function hazel(orifice) {
  return orifice.gizmo.id;
}

function ivory(pin) {
  return pin.gizmo;
}

function jasper() {
  return new Set();
}

function kelp() {
  return new Set();
}

function ProjectsIndexPageHelper24(race) {
  let {
      chatGptProjectCrudStatus,
      compact = false,
      onCreateChatGptProject,
      sidebarMode,
    } = race,
    sleeve = (
      <ReadLoginRouteQuerySnapshot
        {...{
          size: "toolbar",
          children: compact ? (
            <MemoizedFormattedMessage
              {...{
                id: "projectsIndex.newProject",
                defaultMessage: "Create",
                description:
                  "Button label to create a new project from the projects index",
              }}
            />
          ) : (
            <MemoizedFormattedMessage
              {...{
                id: "projectsIndex.empty.newProject",
                defaultMessage: "New project",
                description:
                  "Empty state button label to create a new project from the projects index",
              }}
            />
          ),
        }}
      />
    );
  return (
    <AppInitialXa
      chatGptProjectCrudStatus={chatGptProjectCrudStatus}
      customTriggerButton={sleeve}
      mode="project"
      onCreateChatGptProject={onCreateChatGptProject}
      sidebarMode={sidebarMode}
      showOrganizeControl={false}
    />
  );
}

function ProjectsIndexPageHelper25(trunnion) {
  let { active, children, className, direction, onClick } = trunnion,
    boss = active && "text-token-foreground",
    cam = IntlProvider(
      "cursor-interaction flex w-max min-w-0 items-center gap-1 text-left text-xs leading-[18px] text-token-text-tertiary hover:text-token-foreground",
      boss,
      className,
    );
  let detent = <span className="truncate">{children}</span>;
  let eccentric = active ? (
    <AppIconPlt
      {...{
        "aria-hidden": "true",
        className: IntlProvider(
          "icon-2xs shrink-0 transition-transform",
          direction === "descending" && "rotate-180",
        ),
      }}
    />
  ) : null;
  return (
    <button type="button" className={cam} onClick={onClick}>
      {detent}
      {eccentric}
    </button>
  );
}

function lotus(follower) {
  let guide = Date.parse(follower.gizmo.updated_at);
  return Number.isFinite(guide) ? guide : null;
}
