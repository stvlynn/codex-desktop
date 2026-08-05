// Restored from ref/webview/assets/projects-index-page-AZjn-SLu.js
// Wave FZ — full polished body from `projects-index-page-AZjn-SLu/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 63 (verified 134/196).
// Careful split 2/3 — lane A (workspace helpers 28-36)
/* split-lane-import-depth:1 */

import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { defaultHourlyScheduleConfig as DefaultHourlyScheduleConfig } from "../../automation/default-hourly-schedule-config";
import { appScopeAtom } from "../../runtime/app-scope-runtime";
import { writingBlocksControllerAtom } from "../../composer/composer-appscope-atoms";
import { ensureComposerEsm_QN_Init } from "../../composer/composer-esm-inits";
import { useNavigate } from "../../boundaries/react-router-navigation";
import { conversationRecencyTimestamp } from "../../conversation/conversation-recency-timestamp";
import { deferredConversationSo } from "../../conversation/deferred-conversation-so";
import { ThreadKeyVirtualList } from "../../conversation/thread-key-virtual-list";
import { pullRequestLastAccount as PullRequestLastAccount } from "../../git/pull-request-last-account-2";
import { useInfiniteListQuery } from "../../hooks/use-infinite-list-query";
import { useQueryClient } from "../../hooks/use-query-client";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { useIntl } from "../../i18n/use-intl";
import { AppIconAo } from "../../icons/app-icon-ao";
import { AppIconCS } from "../../icons/app-icon-cs";
import { AppIconSft } from "../../icons/app-icon-sft";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { AppIconYm } from "../../icons/app-icon-ym";
import { rewriteFileCitationMarkers } from "../../markdown/rewrite-file-citation-markers";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { BrandedIcon } from "../../ui/branded-icon";
import { ElectronOnly } from "../../ui/electron-only";
import { UtilityBarCategoryValue } from "../../ui/utility-bar-category-value";
import { coerceLocalFilesystemPath } from "../../utils/coerce-local-filesystem-path";
import { hvtBindableHelper } from "../../utils/hvt-bindable-helper";

// Cross-part stubs.
const AppInitialAF: any = undefined;
const IntlProvider: any = undefined;
const ProjectsIndexPageHelper2: any = undefined;
const ProjectsIndexPageHelper27: any = undefined;
const ProjectsIndexPageHelper4: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const harbor: any = undefined;
const indigo: any = undefined;
const setConversationPinnedState: any = undefined;
const sidebarElectronPinThread: any = undefined;
const xenon: any = undefined;
const quill: any = undefined;

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
      searchForcedExpanded,
    } = ferrule,
    grommet = CodexPluginActionType(appScopeAtom),
    header = useIntl(),
    injector = useNavigate(),
    jumper = useQueryClient(),
    kerf = (marblePrime) => {
      coerceLocalFilesystemPath({
        scope: grommet,
        isPinned: marblePrime,
        project,
        queryClient: jumper,
      }).catch(mint);
    };
  let louver = kerf,
    manifold = canStartLocalTask
      ? () => {
          UtilityBarCategoryValue(grommet, project);
        }
      : undefined;
  let nip = manifold,
    outlet = header.formatMessage(
      isPinned
        ? {
            id: "projectsIndex.chatGpt.unpinProject",
            defaultMessage: "Unpin project",
            description:
              "Button label to unpin a ChatGPT project from the projects index",
          }
        : {
            id: "projectsIndex.chatGpt.pinProject",
            defaultMessage: "Pin project",
            description:
              "Button label to pin a ChatGPT project from the projects index",
          },
    );
  let packing = outlet,
    reducer =
      row.matchingThreadKeys.length > 0 || row.matchingConversations.length > 0,
    strainer;
  if (expanded) {
    let nickelPrime;
    nickelPrime = reducer ? (
      <ProjectsIndexPageHelper30
        {...{
          conversations: row.matchingConversations,
          projectName: row.name,
          threadKeys: row.matchingThreadKeys,
        }}
      />
    ) : (
      <ProjectsIndexPageHelper32
        {...{
          conversationFilter,
          localThreadKeys: row.localThreadKeys,
          projectId: project.gizmo.id,
          projectName: row.name,
        }}
      />
    );
    strainer = nickelPrime;
  }
  let tee = (
    <ProjectsIndexPageHelper4
      {...{
        isPinned,
        project,
        projectName: row.name,
        projectCrudStatus,
        onNewLocalTask: nip,
        onPinnedChange: louver,
      }}
    />
  );
  let union = () => {
    louver(!isPinned);
  };
  let vent = isPinned ? (
    <AppIconAo className="icon-xs" />
  ) : (
    <DefaultHourlyScheduleConfig
      {...{
        className: "icon-xs",
      }}
    />
  );
  let wye = (
    <ReadLoginRouteQuerySnapshot
      {...{
        "aria-label": packing,
        className: indigo,
        color: "ghost",
        size: "icon",
        onClick: union,
        children: vent,
      }}
    />
  );
  let zener = nip == null,
    alphaPrime = header.formatMessage({
      id: "projectsIndex.chatGpt.startProjectChat",
      defaultMessage: "Start new chat in project",
      description:
        "Button label to start a new ChatGPT chat from the projects index",
    });
  let bravoPrime = () => {
    useOpenLocatorInMainWindow(grommet, null);
    ensureComposerEsm_QN_Init(grommet, "chat");
    injector("/", {
      state: {
        chatGptProjectId: project.gizmo.id,
      },
    });
  };
  let copperPrime = (
    <AppIconYm
      {...{
        className: "icon-xs",
      }}
    />
  );
  let deltaPrime = (
    <ReadLoginRouteQuerySnapshot
      {...{
        "aria-label": alphaPrime,
        className: indigo,
        color: "ghost",
        size: "icon",
        onClick: bravoPrime,
        children: copperPrime,
      }}
    />
  );
  let echoPrime = (
    <ElectronOnly
      {...{
        browser: true,
        chromeExtension: true,
        extension: true,
        electron: zener,
        children: deltaPrime,
      }}
    />
  );
  let falconPrime =
    nip == null ? null : (
      <ElectronOnly
        {...{
          electron: true,
          children: (
            <ReadLoginRouteQuerySnapshot
              {...{
                "aria-label": header.formatMessage({
                  id: "projectsIndex.chatGpt.startLocalProjectTask",
                  defaultMessage: "Start new local chat in project",
                  description:
                    "Button label to start a local Codex task in a ChatGPT project from the projects index",
                }),
                className: indigo,
                color: "ghost",
                size: "icon",
                onClick: nip,
                children: (
                  <AppIconYm
                    {...{
                      className: "icon-xs",
                    }}
                  />
                ),
              }}
            />
          ),
        }}
      />
    );
  let gammaPrime = (
    <>
      {tee}
      {wye}
      {echoPrime}
      {falconPrime}
    </>
  );
  let harborPrime = (
    <AppIconCS
      {...{
        className: "icon-xs",
      }}
    />
  );
  let indigoPrime = (
    <BrandedIcon
      className="icon-xs"
      color={project.gizmo.display.theme}
      fallbackIcon={harborPrime}
      icon={project.gizmo.display.emoji}
    />
  );
  let jadePrime = searchForcedExpanded ? null : (
    <button
      type="button"
      className="group/project-toggle cursor-interaction rounded-sm"
      aria-label={header.formatMessage({
        id: "projectsIndex.chatGpt.toggleProject",
        defaultMessage: "Toggle project",
        description:
          "Accessible label for expanding or collapsing a ChatGPT project row",
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
  let kitePrime = (
    <ProjectsIndexPageHelper2
      {...{
        modifiedAt: row.modifiedAt,
      }}
    />
  );
  let lemonPrime = searchForcedExpanded
    ? undefined
    : (event) => {
        event.defaultPrevented ||
          event.detail > 1 ||
          xenon(event.target) ||
          onToggleExpanded();
      };
  return (
    <ProjectsIndexPageHelper27
      {...{
        actions: gammaPrime,
        expandedContent: strainer,
        isExpanded: expanded,
        leading: indigoPrime,
        name: row.name,
        nameTrailing: jadePrime,
        updated: kitePrime,
        onClick: lemonPrime,
      }}
    />
  );
}

function mint() {}

function ProjectsIndexPageHelper30(onyxPrime) {
  let { conversations, projectName, threadKeys } = onyxPrime,
    pearlPrime = useIntl(),
    quartzPrime = pearlPrime.formatMessage(
      {
        id: "projectsIndex.search.matches.ariaLabel",
        defaultMessage: "Search matches in {projectName}",
        description:
          "Accessible label for matching tasks and chats in a project search result",
      },
      {
        projectName,
      },
    );
  let riverPrime =
    threadKeys.length > 0 ? (
      <ThreadKeyVirtualList
        {...{
          ariaLabel: pearlPrime.formatMessage(
            {
              id: "projectsIndex.search.localTasks.ariaLabel",
              defaultMessage: "Matching local chats in {projectName}",
              description:
                "Accessible label for local Codex tasks matching a projects search",
            },
            {
              projectName,
            },
          ),
          itemWrapper: quill,
          rowOptions: {
            canPin: false,
            hideTimestamp: true,
            variant: "tableRow",
          },
          threadKeys,
          variant: "tableRow",
        }}
      />
    ) : null;
  let slatePrime = conversations.map(nova);
  return (
    <div className="pb-3" aria-label={quartzPrime} role="list">
      {riverPrime}
      {slatePrime}
    </div>
  );
}

function nova(timberPrime) {
  return (
    <ProjectsIndexPageHelper36
      key={timberPrime.id}
      {...{
        conversation: timberPrime,
      }}
    />
  );
}

function ProjectsIndexPageHelper32(umbraPrime) {
  let { conversationFilter, localThreadKeys, projectId, projectName } =
      umbraPrime,
    violetPrime = CodexPluginActionType(appScopeAtom).get(
      writingBlocksControllerAtom,
    ),
    willowPrime = useIntl(),
    {
      data,
      fetchNextPage,
      hasNextPage,
      isError,
      isFetchingNextPage,
      isLoading,
    } = hvtBindableHelper(
      useInfiniteListQuery(violetPrime, projectId, true, conversationFilter),
    ),
    xenonPrime;
  {
    let basaltPrime = data?.pages
      .flatMap(prism)
      .filter((cedarPrime) =>
        AppInitialAF(cedarPrime.conversation_origin, conversationFilter),
      );
    if (isLoading) {
      let daisyPrime;
      daisyPrime = (
        <ProjectsIndexPageHelper35
          {...{
            children: (
              <PullRequestLastAccount
                {...{
                  children: (
                    <MemoizedFormattedMessage
                      {...{
                        id: "projectsIndex.chatGpt.chats.loading",
                        defaultMessage: "Loading chats",
                        description:
                          "Loading state for an expanded ChatGPT project on the projects index",
                      }}
                    />
                  ),
                }}
              />
            ),
          }}
        />
      );
      xenonPrime = daisyPrime;
    } else if (isError) {
      let emberPrime;
      emberPrime = (
        <ProjectsIndexPageHelper35
          {...{
            children: (
              <MemoizedFormattedMessage
                {...{
                  id: "projectsIndex.chatGpt.chats.error",
                  defaultMessage: "Could not load chats",
                  description:
                    "Error state for an expanded ChatGPT project on the projects index",
                }}
              />
            ),
          }}
        />
      );
      xenonPrime = emberPrime;
    } else if (basaltPrime?.length === 0) {
      let flintPrime;
      flintPrime = (
        <ProjectsIndexPageHelper35
          {...{
            children: (
              <MemoizedFormattedMessage
                {...{
                  id: "projectsIndex.chatGpt.chats.empty",
                  defaultMessage: "No chats",
                  description:
                    "Empty state for an expanded ChatGPT project on the projects index",
                }}
              />
            ),
          }}
        />
      );
      xenonPrime = flintPrime;
    } else xenonPrime = basaltPrime?.map(olive);
  }
  let yellowPrime = willowPrime.formatMessage(
    {
      id: "projectsIndex.chatGpt.chats.ariaLabel",
      defaultMessage: "Chats in {projectName}",
      description:
        "Accessible label for chats in an expanded ChatGPT project on the projects index",
    },
    {
      projectName,
    },
  );
  let zincPrime =
    localThreadKeys.length > 0 ? (
      <ThreadKeyVirtualList
        {...{
          ariaLabel: willowPrime.formatMessage(
            {
              id: "projectsIndex.chatGpt.localTasks.ariaLabel",
              defaultMessage: "Local chats in {projectName}",
              description:
                "Accessible label for local Codex tasks in an expanded ChatGPT project",
            },
            {
              projectName,
            },
          ),
          itemWrapper: quill,
          rowOptions: {
            canPin: false,
            hideTimestamp: true,
            variant: "tableRow",
          },
          threadKeys: localThreadKeys,
          variant: "tableRow",
        }}
      />
    ) : null;
  let amberPrime = hasNextPage ? (
    <ReadLoginRouteQuerySnapshot
      {...{
        className: "mt-1",
        color: "ghostMuted",
        disabled: isFetchingNextPage,
        onClick: () => {
          fetchNextPage();
        },
        children: isFetchingNextPage ? (
          <MemoizedFormattedMessage
            {...{
              id: "projectsIndex.chatGpt.chats.loadingMore",
              defaultMessage: "Loading…",
              description:
                "Button label while loading more ChatGPT project chats",
            }}
          />
        ) : (
          <MemoizedFormattedMessage
            {...{
              id: "projectsIndex.chatGpt.chats.showMore",
              defaultMessage: "Show more",
              description: "Button label to load more ChatGPT project chats",
            }}
          />
        ),
      }}
    />
  ) : null;
  return (
    <div className="pb-3" aria-label={yellowPrime} role="list">
      {zincPrime}
      {xenonPrime}
      {amberPrime}
    </div>
  );
}

function olive(garnetPrime) {
  return (
    <ProjectsIndexPageHelper36
      key={garnetPrime.id}
      {...{
        conversation: garnetPrime,
      }}
    />
  );
}

function prism(hazelPrime) {
  return hazelPrime.items;
}

function ProjectsIndexPageHelper35(ivoryPrime) {
  let { children } = ivoryPrime;
  return (
    <div className="py-1 pl-7 text-base text-token-text-secondary">
      {children}
    </div>
  );
}

function ProjectsIndexPageHelper36(jasperPrime) {
  let { conversation } = jasperPrime,
    kelpPrime = CodexPluginActionType(appScopeAtom),
    lotusPrime = useIntl(),
    mintPrime = useNavigate(),
    novaPrime = conversation.title?.trim() || (
      <MemoizedFormattedMessage
        {...{
          id: "projectsIndex.chatGpt.untitledChat",
          defaultMessage: "Untitled ChatGPT chat",
          description:
            "Fallback title for a ChatGPT chat in an expanded project on the projects index",
        }}
      />
    );
  let olivePrime = novaPrime,
    prismPrime = conversationRecencyTimestamp({
      createTime: conversation.create_time,
      updateTime: conversation.update_time,
    });
  let quillPrime = prismPrime,
    reefPrime = () => {
      mintPrime(rewriteFileCitationMarkers(conversation.id));
    };
  let sagePrime = reefPrime,
    topazPrime = IntlProvider(
      delta,
      echo,
      "before:inset-y-0 group/thread-row cursor-interaction h-9 items-center text-base leading-9",
    );
  let ultraPrime = (event) => {
    event.defaultPrevented || xenon(event.target) || sagePrime();
  };
  let vaporPrime, wheatPrime;
  vaporPrime = IntlProvider(harbor, "flex min-w-0 items-center gap-3");
  wheatPrime = <span className="w-4 shrink-0" />;
  let yarnPrime = (
    <div className={vaporPrime}>
      {wheatPrime}
      <span className="min-w-0 truncate">{olivePrime}</span>
    </div>
  );
  let zephyrPrime = IntlProvider(
    harbor,
    "text-token-text-secondary max-[680px]:hidden",
  );
  let acornPrime = (
    <span className={zephyrPrime}>
      {
        <ProjectsIndexPageHelper2
          {...{
            modifiedAt: quillPrime,
          }}
        />
      }
    </span>
  );
  let bloomPrime = IntlProvider(harbor, "flex min-w-0 justify-end gap-1");
  let coralPrime = lotusPrime.formatMessage(
    conversation.is_starred === true
      ? sidebarElectronPinThread
      : deferredConversationSo,
  );
  let driftPrime = IntlProvider(
    indigo,
    "opacity-0 group-hover/thread-row:opacity-100 focus-visible:opacity-100",
  );
  let eaglePrime = () => {
    setConversationPinnedState({
      scope: kelpPrime,
      conversation,
      isPinned: conversation.is_starred !== true,
    });
  };
  let frostPrime =
    conversation.is_starred === true ? (
      <AppIconAo className="icon-xs" />
    ) : (
      <DefaultHourlyScheduleConfig
        {...{
          className: "icon-xs",
        }}
      />
    );
  let glidePrime = (
    <ReadLoginRouteQuerySnapshot
      {...{
        "aria-label": coralPrime,
        className: driftPrime,
        color: "ghost",
        size: "icon",
        onClick: eaglePrime,
        children: frostPrime,
      }}
    />
  );
  let honeyPrime = lotusPrime.formatMessage({
    id: "projectsIndex.chatGpt.openChat",
    defaultMessage: "Open chat",
    description:
      "Button label to open a chat from an expanded ChatGPT project row",
  });
  let irisPrime = IntlProvider(
    indigo,
    "opacity-0 group-hover/thread-row:opacity-100 focus-visible:opacity-100",
  );
  let jewelPrime = (
    <AppIconYlt
      {...{
        className: "icon-xs",
      }}
    />
  );
  let knollPrime = (
    <ReadLoginRouteQuerySnapshot
      {...{
        "aria-label": honeyPrime,
        className: irisPrime,
        color: "ghost",
        size: "icon",
        onClick: sagePrime,
        children: jewelPrime,
      }}
    />
  );
  let lunarPrime = (
    <span className={bloomPrime}>
      {glidePrime}
      {knollPrime}
    </span>
  );
  return (
    <div className={topazPrime} onClick={ultraPrime} role="listitem">
      {yarnPrime}
      {acornPrime}
      {lunarPrime}
    </div>
  );
}
