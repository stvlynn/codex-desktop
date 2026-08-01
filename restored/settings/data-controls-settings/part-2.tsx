// Restored from ref/webview/assets/data-controls-DQbGPTwz.js
// Strict QG split (no --allow-flat): Wave5d-style careful split into parts; public API exported; cross-part refs soft-stubbed; bind in runtime-bridges.
// Stage 3 deep fill from `data-controls-DQbGPTwz/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 29 (verified 85/115).
// JSX calls converted: 107; mechanical renames: 378.

// Wave5d careful split 2/4
/* split-lane-import-depth:1 */

import type { ReactNode } from "react";
import {
  appScopeAtom,
  ensureAppScopeHostInit,
  ensureAppScopeInit,
  useAppScope,
} from "../../runtime/app-scope-runtime";
import { useAppScopeValue } from "../../composer/composer-appscope-atoms";
import {
  ensureComposerEsm_GS_Init,
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_ML_Init,
  ensureComposerEsm_odt_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_pdt_Init,
  ensureComposerEsm_wct_Init,
  ensureComposerEsm_Wdt_Init,
  ensureComposerEsm_YS_Init,
} from "../../composer/composer-esm-inits";
import {
  ensureConversationPageEsm_pvt_Init,
  ensureConversationPageEsm_RS_Init,
  ensureConversationPageEsm_xB_Init,
} from "../../conversation/conversation-page-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { useNavigate } from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { QueryStaleTimes } from "../../config/query-stale-times";
import { asThreadId } from "../../conversation/as-thread-id";
import {
  desktopHostRequest,
  ensureDesktopHostRequestInit,
} from "../../desktop/desktop-host-request";
import { invokeDesktopRpc } from "../../desktop/invoke-desktop-rpc";
import { HostApiError } from "../../errors/host-api-error";
import { ensureHomeDirectoryQueriesInit } from "../../hooks/home-directory-query";
import { useMutation } from "../../hooks/use-mutation";
import { useQuery } from "../../hooks/use-query";
import { useQueryClient } from "../../hooks/use-query-client";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { useSelectedHost } from "../../hosts/use-selected-host";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconCct } from "../../icons/app-icon-cct";
import { AppIcond } from "../../icons/app-icon-d";
import { AppIconSR } from "../../icons/app-icon-sr";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { FolderFileIcon } from "../../icons/folder-file-icon";
import { markdownToPlainText } from "../../markdown/markdown-to-plain-text";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { useColdNavigate } from "../../navigation/use-cold-navigate";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { workspaceRootFinderMessages } from "../../sidebar/workspace-root-finder-messages";
import { Button } from "../../ui/button";
import {
  ControlGroup,
  ensureControlGroupInit as EnsureControlGroupInit,
} from "../../ui/control-group";
import { deferredUiYY } from "../../ui/deferred-ui-yy";
import { DialogBody } from "../../ui/dialog-body";
import { DialogFooter } from "../../ui/dialog-footer";
import { DialogHeader } from "../../ui/dialog-header";
import { DialogWithTrigger } from "../../ui/dialog-with-trigger";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { arrayIncludesAll } from "../../utils/array-includes-all";
import { hvtBindableHelper } from "../../utils/hvt-bindable-helper";
import { identity } from "../../utils/identity";
import { relativePathFromCommonPrefix } from "../../utils/relative-path-from-common-prefix";
import { toComparableUnixPath } from "../../utils/workspace-path-keys";
import { cloudApiClient, ensureCloudApiClientInit } from "../cloud-api-client";
import { ensureHooksHelpersInit as EnsureHooksHelpersInit } from "../hooks-format-helpers";
import { ensureSettingsGroupInit, SettingsGroup } from "../settings-group";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import {
  initSettingsLoadingRow,
  SettingsLoadingRow,
} from "../settings-loading-row";
import { SettingsPanel } from "../settings-panel";
import { SettingsRow } from "../settings-row";
import { SettingsSectionLayout } from "../settings-section-layout";
import {
  ensureSettingsSectionTitleInit,
  SettingsSectionTitle,
} from "../settings-section-title";
import { buildVscodeQueryKey } from "../vscode-query-key";

import type { DataControlsSettingsProps } from "./part-1";

// Cross-part soft stubs (defined in sibling parts).
const EnsureSelectedHostInitStub: any = undefined;
const InfiniteScrollSentinel: any = undefined;
const SearchField: any = undefined;
const $: any = undefined;
const AppInitialCB: any = undefined;
const DeferredEnvironmentsTB2: any = undefined;
const flint: any = undefined;
const heath: any = undefined;
const index: any = undefined;
const signal: any = undefined;
const AppInitialCO: any = undefined;
const AppInitialJ9: any = undefined;
const AppInitialLj: any = undefined;
const AppInitialSB: any = undefined;
const AppInitialV9: any = undefined;
const DataControlsHelper1: any = undefined;
const DataControlsHelper12: any = undefined;
const DataControlsHelper2: any = undefined;
const DataControlsHelper27: any = undefined;
const DataControlsHelper28: any = undefined;
const DataControlsHelper29: any = undefined;
const DataControlsHelper31: any = undefined;
const DataControlsHelper32: any = undefined;
const DataControlsHelper4: any = undefined;
const copper: any = undefined;
const nova: any = undefined;

export function DataControlsSettings(
  props: DataControlsSettingsProps,
): ReactNode {
  let { selectedHostId } = useSelectedHost(),
    alpine = useAppScopeValue(DeferredEnvironmentsTB2),
    brook = useAppScopeValue(AppInitialSB),
    canyon = useAppScopeValue(arrayIncludesAll),
    dale = useAppScopeValue(AppInitialCB),
    estuary = {
      queryKey: ["archived-threads", selectedHostId],
      queryFn: () =>
        desktopHostRequest("list-archived-threads", {
          hostId: selectedHostId,
        }),
      enabled: true,
      staleTime: QueryStaleTimes.FIVE_SECONDS,
    };
  let { data, isLoading, isError } = useQuery(estuary),
    {
      data: _data,
      fetchNextPage,
      hasNextPage,
      isLoading: _isLoading,
      isFetchNextPageError,
      isFetchingNextPage: firth,
      isError: _isError,
    } = DataControlsHelper12(),
    glen = buildVscodeQueryKey("inbox-items", {
      limit: heath,
    });
  let isle = selectedHostId === LOCAL_HOST_ID,
    jetty = {
      queryKey: glen,
      queryFn: DataControlsHelper20,
      enabled: isle,
      staleTime: QueryStaleTimes.FIVE_SECONDS,
    };
  let { data: __data, isLoading: __isLoading } = useQuery(jetty),
    karst,
    loch;
  {
    let marsh = data,
      needle;
    {
      let oxbow = new Map();
      for (let pass of AppInitialCO(alpine, selectedHostId)) {
        let quay = {
          groupId: DataControlsHelper1(pass),
          hostId: pass.hostId,
          label: pass.label,
          path: pass.path,
          projectId: pass.projectId,
          projectKind: pass.projectKind,
        };
        oxbow.set(quay.groupId, quay);
      }
      needle = [...oxbow.values()];
    }
    karst = needle;
    let ravine;
    ravine = new Set(__data?.items.flatMap(DataControlsHelper19) ?? []);
    loch = DataControlsHelper2({
      automationThreadIds: ravine,
      cloudTasks: _data,
      localThreads: marsh,
      projects: karst,
      projectlessThreadIds: new Set(brook ?? []),
      threadProjectAssignments: canyon,
      threadWorkspaceRootHints: dale,
    });
  }
  let summit = loch,
    tundra = karst.map(DataControlsHelper18);
  let updraft = `${selectedHostId}:${tundra.join(",")}`,
    valley = hasNextPage && !isFetchNextPageError,
    woodland =
      isLoading || _isLoading || (selectedHostId === "local" && __isLoading),
    xylose = isError || (_data == null && _isError);
  return (
    <DataControlsHelper21
      key={updraft}
      {...{
        archivedChats: summit,
        projects: karst,
        hostId: selectedHostId,
        hasNextPage: valley,
        isLoading: woodland,
        isFetchingNextPage: firth,
        isError: xylose,
        onLoadNextPage: fetchNextPage,
      }}
    />
  );
}
function DataControlsHelper18(yard) {
  let { groupId } = yard;
  return groupId;
}
function DataControlsHelper19(zenith) {
  return zenith.automationId != null && zenith.threadId != null
    ? [zenith.threadId]
    : [];
}
function DataControlsHelper20() {
  return invokeDesktopRpc("inbox-items", {
    params: {
      limit: heath,
    },
  });
}
function DataControlsHelper21(anchor) {
  let {
      archivedChats,
      projects,
      hostId,
      hasNextPage,
      isLoading,
      isFetchingNextPage,
      isError,
      onLoadNextPage,
    } = anchor,
    beacon = useAppScope(appScopeAtom),
    compass = useQueryClient(),
    datum = useIntl(),
    engine = useNavigate(),
    frame = useColdNavigate(),
    [gauge, hinge] = index.useState(null),
    [joint, kernel] = index.useState(""),
    lever = index.useDeferredValue(joint),
    [module, node] = index.useState("all"),
    [pivot, relay] = index.useState(signal),
    [unit, vector] = index.useState("updated"),
    widget = new Set([...projects.map(DataControlsHelper25), flint, nova]),
    yield = pivot.kind === "all" || widget.has(pivot.groupId) ? pivot : signal,
    zone = yield.kind === "all" ? "project" : "none",
    alpha = DataControlsHelper4({
      entries: archivedChats,
      groupKey: zone,
      kindFilter: module,
      projectFilter: yield,
      searchQuery: lever,
      sortKey: unit,
    });
  let bravo = alpha,
    charlie = module !== "local" && hasNextPage,
    delta2 = hostId === "local" && archivedChats.some(DataControlsHelper24);
  let echo2 = delta2,
    foxtrot = (golf) => {
      asThreadId(golf.id);
      hostId === "local" && frame(golf.id);
    };
  let hotel = foxtrot,
    india,
    juliet;
  india = ["unarchive-thread", hostId];
  juliet = async (kilo) => (
    await desktopHostRequest("unarchive-conversation", {
      hostId,
      conversationId: asThreadId(kilo.id),
    }),
    kilo
  );
  let lima = async (mike) => {
    beacon.get(toastAtom).info(
      <MemoizedFormattedMessage
        {...{
          id: "settings.dataControls.archivedChats.unarchiving",
          defaultMessage: "Unarchiving chat…",
          description: "Toast shown while unarchiving a chat",
        }}
      />,
      {
        id: `unarchive-thread-${mike.id}`,
        duration: 0,
        hasCloseButton: false,
      },
    );
    await compass.cancelQueries({
      queryKey: ["archived-threads", hostId],
    });
    let november = compass.getQueryData(["archived-threads", hostId]) ?? [];
    return (
      compass.setQueryData(
        ["archived-threads", hostId],
        november.filter((item) => item.id !== mike.id),
      ),
      {
        previousThreads: november,
      }
    );
  };
  let oscar = (papa, romeo, sierra) => {
    let tango = papa instanceof AppInitialV9;
    !tango &&
      sierra?.previousThreads &&
      compass.setQueryData(
        ["archived-threads", hostId],
        sierra.previousThreads,
      );
    beacon
      .get(toastAtom)
      .danger(
        datum.formatMessage(tango ? copper.openError : copper.unarchiveError),
        {
          id: `unarchive-thread-${romeo.id}`,
        },
      );
  };
  let victor = (whiskey) => {
    beacon.get(toastAtom).info(
      <span>
        {
          <MemoizedFormattedMessage
            {...{
              ...copper.unarchiveSuccessPlain,
            }}
          />
        }
        <button
          className="pointer-events-auto ml-1 cursor-interaction text-token-link underline-offset-2 hover:underline"
          type="button"
          onClick={() => {
            hotel(whiskey);
          }}
        >
          {
            <MemoizedFormattedMessage
              {...{
                ...copper.viewNow,
              }}
            />
          }
        </button>
      </span>,
      {
        id: `unarchive-thread-${whiskey.id}`,
      },
    );
  };
  let xray = () => {
    compass.invalidateQueries({
      queryKey: ["archived-threads", hostId],
    });
  };
  let yankee = {
    mutationKey: india,
    mutationFn: juliet,
    onMutate: lima,
    onError: oscar,
    onSuccess: victor,
    onSettled: xray,
  };
  let zulu = useMutation(yankee),
    argon,
    boron;
  argon = ["delete-archived-conversations", hostId];
  boron = async (carbon) =>
    carbon.kind === "all"
      ? desktopHostRequest("delete-all-archived-conversations", {
          hostId,
        })
      : carbon.kind === "project"
        ? (
            await Promise.all(
              carbon.threadIds.map((item) =>
                desktopHostRequest("delete-archived-conversation", {
                  hostId,
                  conversationId: asThreadId(item),
                }),
              ),
            )
          ).flat()
        : desktopHostRequest("delete-archived-conversation", {
            hostId,
            conversationId: asThreadId(carbon.thread.id),
          });
  let neon = async (radon) => {
    let xenon2 = radon.kind === "single" ? [radon.thread.id] : radon.threadIds;
    beacon.get(toastAtom).info(
      radon.kind === "single" ? (
        <MemoizedFormattedMessage
          {...{
            ...copper.deleting,
          }}
        />
      ) : (
        <MemoizedFormattedMessage
          {...{
            ...copper.deletingAll,
          }}
        />
      ),
      {
        id: DataControlsHelper32(radon),
        duration: 0,
        hasCloseButton: false,
      },
    );
    await compass.cancelQueries({
      queryKey: ["archived-threads", hostId],
    });
    let helium = compass.getQueryData(["archived-threads", hostId]) ?? [];
    return (
      compass.setQueryData(
        ["archived-threads", hostId],
        helium.filter((item) => !xenon2.includes(item.id)),
      ),
      {
        deletingThreadIds: xenon2,
        previousThreads: helium,
      }
    );
  };
  let lithium = (sodium, potassium, calcium) => {
    calcium?.previousThreads &&
      compass.setQueryData(
        ["archived-threads", hostId],
        calcium.previousThreads,
      );
    beacon
      .get(toastAtom)
      .danger(
        datum.formatMessage(
          AppInitialJ9(sodium, "thread/delete")
            ? copper.deleteUnsupported
            : potassium.kind === "single"
              ? copper.deleteError
              : copper.deleteAllError,
        ),
        {
          id: DataControlsHelper32(potassium),
        },
      );
  };
  let iron = (cobalt, nickel) => {
    if (nickel.kind !== "single") {
      beacon.get(toastAtom).success(
        datum.formatMessage(
          {
            id: "settings.dataControls.archivedChats.deleteAllSuccess",
            defaultMessage:
              "Deleted {count, plural, one {# archived chat} other {# archived chats}}",
            description: "Success toast after deleting archived chats",
          },
          {
            count: cobalt.length || nickel.threadIds.length,
          },
        ),
        {
          id: DataControlsHelper32(nickel),
        },
      );
      return;
    }
    beacon
      .get(toastAtom)
      .success(datum.formatMessage(copper.deleteSuccessPlain), {
        id: DataControlsHelper32(nickel),
      });
  };
  let copper2 = () => {
    compass.invalidateQueries({
      queryKey: ["archived-threads", hostId],
    });
  };
  let silver = {
    mutationKey: argon,
    mutationFn: boron,
    onMutate: neon,
    onError: lithium,
    onSuccess: iron,
    onSettled: copper2,
  };
  let gold = useMutation(silver),
    lead = zulu.isPending || gold.isPending,
    tin = null,
    _e;
  if (isLoading) {
    let zinc2;
    zinc2 = (
      <SettingsPanel
        {...{
          children: (
            <SettingsLoadingRow
              {...{
                children: (
                  <MemoizedFormattedMessage
                    {...{
                      id: "settings.dataControls.archivedChats.loading",
                      defaultMessage: "Loading archived chats…",
                      description:
                        "Loading state label for archived chats list",
                    }}
                  />
                ),
              }}
            />
          ),
        }}
      />
    );
    _e = zinc2;
  } else if (isError || archivedChats.length === 0) {
    let chrome;
    chrome = (
      <SettingsPanel
        {...{
          children: (
            <AppInitialLj layout="settings-row">
              {isError ? (
                <MemoizedFormattedMessage
                  {...{
                    id: "settings.dataControls.archivedChats.error",
                    defaultMessage: "Could not load archived chats",
                    description: "Error state label for archived chats list",
                  }}
                />
              ) : (
                <MemoizedFormattedMessage
                  {...{
                    id: "settings.dataControls.archivedChats.empty",
                    defaultMessage: "No archived chats",
                    description: "Empty state label for archived chats list",
                  }}
                />
              )}
            </AppInitialLj>
          ),
        }}
      />
    );
    _e = chrome;
  } else {
    let titan;
    titan = (
      <DataControlsHelper26
        {...{
          kindFilter: module,
          projectFilter: yield,
          projects,
          searchQuery: joint,
          sortKey: unit,
          onKindFilterChange: node,
          onProjectFilterChange: relay,
          onSearchQueryChange: kernel,
          onSortKeyChange: vector,
        }}
      />
    );
    tin = titan;
    let vanadium =
      bravo.length === 0 && !charlie && !isFetchingNextPage ? (
        <SettingsPanel
          {...{
            children: (
              <AppInitialLj layout="settings-row">
                {
                  <MemoizedFormattedMessage
                    {...{
                      id: "settings.dataControls.archivedChats.noMatches",
                      defaultMessage: "No matching archived chats",
                      description:
                        "Empty state shown when archived chat search has no matches",
                    }}
                  />
                }
              </AppInitialLj>
            ),
          }}
        />
      ) : null;
    let manganese;
    {
      let scandium;
      scandium = (yttrium) => (
        <DataControlsHelper29
          key={yttrium.id}
          {...{
            group: yttrium,
            hostId,
            isDeleteDisabled: lead,
            showHeader: yield.kind === "all",
            unarchivingThreadId: zulu.variables?.id ?? null,
            isUnarchiving: zulu.isPending,
            onDelete: (niobium) => {
              hinge({
                kind: "single",
                thread: niobium,
              });
            },
            onUnarchive: (moly) => {
              zulu.mutate(moly);
            },
            onDeleteProject: (techne, ruthenium) => {
              hinge({
                kind: "project",
                projectLabel: techne,
                threads: ruthenium,
              });
            },
          }}
        />
      );
      manganese = bravo.map(scandium);
    }
    let rhodium = () => {
      onLoadNextPage();
    };
    let palladium = (
      <InfiniteScrollSentinel
        {...{
          hasNextPage: charlie,
          isFetchingNextPage,
          onLoadNextPage: rhodium,
        }}
      />
    );
    let cadmium;
    cadmium = (
      <>
        {vanadium}
        {manganese}
        {palladium}
      </>
    );
    _e = cadmium;
  }
  let indium = <SettingsSectionTitle slug="data-controls" />;
  let antimony =
    echo2 && !isLoading && !isError ? (
      <Button
        {...{
          color: "danger",
          size: "toolbar",
          disabled: lead,
          onClick: () => {
            hinge({
              kind: "all",
            });
          },
          children: [
            <EnsureSelectedHostInitStub
              {...{
                className: "icon-xs shrink-0",
              }}
            />,
            <MemoizedFormattedMessage
              {...{
                ...copper.deleteAll,
              }}
            />,
          ],
        }}
      />
    ) : null;
  let tellurium = () => {
    if (gauge != null) {
      if ((hinge(null), gauge.kind === "all")) {
        gold.mutate({
          kind: "all",
          threadIds: archivedChats.flatMap(DataControlsHelper23),
        });
        return;
      }
      if (gauge.kind === "project") {
        gold.mutate({
          kind: "project",
          projectLabel: gauge.projectLabel,
          threadIds: gauge.threads.map(DataControlsHelper22),
        });
        return;
      }
      gold.mutate({
        kind: "single",
        thread: gauge.thread,
      });
    }
  };
  let iodine = (cesium) => {
    cesium || hinge(null);
  };
  let barium = (
    <DataControlsHelper31
      {...{
        state: gauge,
        onConfirm: tellurium,
        onOpenChange: iodine,
      }}
    />
  );
  return (
    <SettingsSectionLayout
      {...{
        stickyControls: tin,
        title: indium,
        action: antimony,
        children: [_e, barium],
      }}
    />
  );
}
function DataControlsHelper22(lanthan) {
  return lanthan.id;
}
function DataControlsHelper23(cerium) {
  return cerium.kind === "local" ? [cerium.thread.id] : [];
}
function DataControlsHelper24(praseo) {
  return praseo.kind === "local";
}
function DataControlsHelper25(neodym) {
  return neodym.groupId;
}
function DataControlsHelper26(prometh) {
  let {
      kindFilter,
      projectFilter,
      projects,
      searchQuery,
      sortKey,
      onKindFilterChange,
      onProjectFilterChange,
      onSearchQueryChange,
      onSortKeyChange,
    } = prometh,
    samarium = useIntl(),
    europium = samarium.formatMessage($.searchArchivedChats);
  let gadolin = samarium.formatMessage($.searchArchivedChats);
  let terbium = (
    <SearchField
      {...{
        id: "archived-tasks-search",
        className: "min-w-0 flex-1",
        label: europium,
        placeholder: gadolin,
        searchQuery,
        onSearchQueryChange,
      }}
    />
  );
  let dyspros = (
    <DataControlsHelper27
      {...{
        kindFilter,
        sortKey,
        onKindFilterChange,
        onSortKeyChange,
      }}
    />
  );
  let holmium = (
    <DataControlsHelper28
      {...{
        projectFilter,
        projects,
        onProjectFilterChange,
      }}
    />
  );
  let erbium = (
    <EnsureControlGroupInit
      {...{
        className: "shrink-0",
        children: [dyspros, holmium],
      }}
    />
  );
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-center">
      {terbium}
      {erbium}
    </div>
  );
}
