// Restored from ref/webview/assets/data-controls-DQbGPTwz.js
// Strict QG split (no --allow-flat): Wave5d-style careful split into parts; public API exported; cross-part refs soft-stubbed; bind in runtime-bridges.
// Stage 3 deep fill from `data-controls-DQbGPTwz/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 29 (verified 85/115).
// JSX calls converted: 107; mechanical renames: 378.

// Wave5d careful split 1/4
/* split-lane-import-depth:1 */

import type { ReactNode } from "react";
import {
  appScopeAtom,
  ensureAppScopeHostInit,
  ensureAppScopeInit,
  useAppScope,
} from "../../boundaries/app-scope-runtime";
import { useAppScopeValue } from "../../boundaries/composer-appscope-atoms";
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
} from "../../boundaries/composer-esm-inits";
import {
  ensureConversationPageEsm_pvt_Init,
  ensureConversationPageEsm_RS_Init,
  ensureConversationPageEsm_xB_Init,
} from "../../boundaries/conversation-page-esm-inits";
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

/** Unresolved companion (missing-export:hosts/use-selected-host.ts) */
const ensureSelectedHostInit: any = undefined;
/** Unresolved companion (jsx-collision:message@conversation/message.ts) */
const AppInitialA9: any = undefined;
/** Unresolved companion (missing-export:ui/deferred-ui-ba-2.tsx) */
const deferredUiBa: any = undefined;
/** Unresolved companion (missing-export:hosts/use-selected-host.ts) */
const EnsureSelectedHostInitStub: any = undefined;
/** Unresolved companion (jsx-collision:deferredUibY@ui/deferred-uib-y.ts) */
const AppInitialBY: any = undefined;
/** Unresolved companion (missing-export:environments/environments.tsx) */
const AppInitialCB: any = undefined;
/** Unresolved companion (jsx-collision:filterProjectsByHost@environments/filter-projects-by-host.ts) */
const AppInitialCO: any = undefined;
/** Unresolved companion (missing-export:ui/deferred-ui-cr.tsx) */
const deferredUiCR: any = undefined;
/** Unresolved companion (jsx-collision:ensureConversationPageEsm_f__Init@boundaries/conversation-page-esm-inits.ts) */
const AppInitialF: any = undefined;
/** Unresolved companion (jsx-collision:ensureSettingsPanelInit@settings/settings-panel.tsx) */
const AppInitialFC: any = undefined;
/** Unresolved companion (missing-export:boundaries/browser-use-ui-facades.tsx) */
const RevealInFileManagerButton: any = undefined;
/** Unresolved companion (missing-export:conversation/user-message2.ts) */
const userMessage2: any = undefined;
/** Unresolved companion (jsx-collision:isUnknownRpcMethodError@settings/is-unknown-rpc-method-error.ts) */
const AppInitialJ9: any = undefined;
/** Unresolved companion (jsx-collision:displayNameFromPath@settings/hooks-format-helpers.ts) */
const AppInitialL: any = undefined;
/** Unresolved companion (missing-export:boundaries/browser-use-ui-facades.tsx) */
const AppInitialLj: any = undefined;
/** Unresolved companion (jsx-collision:codexMicroDeviceNameMessages@devices/codex-micro-device-name-messages.ts) */
const AppInitialOi: any = undefined;
/** Unresolved companion (missing-export:environments/deferred-environments-sb2.tsx) */
const AppInitialSB: any = undefined;
/** Unresolved companion (missing-export:environments/deferred-environments-tb2.tsx) */
const DeferredEnvironmentsTB2: any = undefined;
/** Unresolved companion (jsx-collision:ensureSkillsPageHelpersInit@skills/skills-page-helpers.tsx) */
const AppInitialTm: any = undefined;
/** Unresolved companion (jsx-collision:ensureSettingsEmptyStateInit@boundaries/browser-use-ui-facades.tsx) */
const AppInitialUj: any = undefined;
/** Unresolved companion (missing-export:conversation/deferred-conversation-v9.tsx) */
const AppInitialV9: any = undefined;
/** Unresolved companion (jsx-collision:ensureSettingsRowInit@settings/settings-row.tsx) */
const AppInitialVC: any = undefined;
/** Unresolved companion (missing-export:icons/browser-use-settings-icons.tsx) */
const AppInitialVO: any = undefined;
/** Unresolved companion (missing-export:skills/skills-page-helpers.tsx) */
const SearchField: any = undefined;
/** Unresolved companion (jsx-collision:ensureSkillsPageHelpersInit@skills/skills-page-helpers.tsx) */
const AppInitialWO: any = undefined;
/** Unresolved companion (missing-export:boundaries/quick-chat-window-facades.tsx) */
const InfiniteScrollSentinel: any = undefined;
/** Unresolved companion (missing-export:conversation/unarchived-conversation-load-error.tsx) */
const AppInitialY9: any = undefined;
/** Unresolved companion (missing-export:icons/app-icon-za.tsx) */
const AppInitialZa: any = undefined;
/** Unresolved companion (jsx-collision:ensureCloseGlyphIconInit@boundaries/quick-chat-window-facades.tsx) */
const AppInitialZo: any = undefined;
export type DataControlsSettingsProps = Record<string, unknown>;
var copper,
  gamma = esmInit(() => {
    ensureIntlFormattersInit();
    copper = identity({
      delete: {
        id: "settings.dataControls.archivedChats.delete",
        defaultMessage: "Delete",
        description: "Button label to permanently delete an archived chat",
      },
      deleteAll: {
        id: "settings.dataControls.archivedChats.deleteAll",
        defaultMessage: "Delete all",
        description:
          "Button label to permanently delete all archived local chats",
      },
      deleteAllError: {
        id: "settings.dataControls.archivedChats.deleteAllError",
        defaultMessage: "Failed to delete archived chats",
        description: "Error message when deleting all archived chats fails",
      },
      deleteError: {
        id: "settings.dataControls.archivedChats.deleteError",
        defaultMessage: "Failed to delete archived chat",
        description: "Error message when deleting an archived chat fails",
      },
      deleteUnsupported: {
        id: "settings.dataControls.archivedChats.deleteUnsupported",
        defaultMessage:
          "This host doesn’t support deleting chats. Update the Codex CLI on the host and try again.",
        description:
          "Error message when a Codex host does not support deleting archived chats",
      },
      deleteSuccessPlain: {
        id: "settings.dataControls.archivedChats.deleteSuccessPlain",
        defaultMessage: "Deleted archived chat",
        description: "Success toast after deleting an archived chat",
      },
      deleting: {
        id: "settings.dataControls.archivedChats.deleting",
        defaultMessage: "Deleting archived chat…",
        description: "Toast shown while deleting an archived chat",
      },
      deletingAll: {
        id: "settings.dataControls.archivedChats.deletingAll",
        defaultMessage: "Deleting archived chats…",
        description: "Toast shown while deleting all archived chats",
      },
      unarchiveError: {
        id: "settings.dataControls.archivedChats.unarchiveError",
        defaultMessage: "Failed to unarchive chat",
        description: "Error message when unarchiving a chat",
      },
      openError: {
        id: "settings.dataControls.archivedChats.openError",
        defaultMessage: "Unarchived chat, but failed to open it",
        description:
          "Error message when an archived chat was unarchived but could not be opened",
      },
      unarchiveSuccessPlain: {
        id: "settings.dataControls.archivedChats.unarchiveSuccessPlain",
        defaultMessage: "Unarchived chat",
        description: "Success toast after unarchiving a chat",
      },
      viewNow: {
        id: "settings.dataControls.archivedChats.viewNow",
        defaultMessage: "View now",
        description:
          "Action label to open an unarchived chat from the success toast",
      },
      unarchive: {
        id: "settings.dataControls.archivedChats.unarchive",
        defaultMessage: "Unarchive",
        description: "Button label to unarchive a chat",
      },
    });
  });
function DataControlsHelper1(onyx) {
  return `project:${onyx.projectKind}:${onyx.hostId ?? ""}:${onyx.projectId}`;
}
function DataControlsHelper2({
  automationThreadIds = new Set(),
  cloudTasks,
  localThreads,
  projects = [],
  projectlessThreadIds = new Set(),
  threadProjectAssignments,
  threadWorkspaceRootHints,
}) {
  return [
    ...(cloudTasks ?? []).map((item) => {
      let reef = markdownToPlainText(item.title ?? "").trim(),
        amber = item.task_status_display?.environment_label?.trim() ?? "",
        birch = AppInitialL(amber),
        cedar = projectlessThreadIds.has(item.id),
        delta = DataControlsHelper5({
          assignment: threadProjectAssignments?.[item.id],
          projects,
        }),
        ember = cedar ? null : (delta?.label ?? birch);
      return {
        kind: "cloud",
        createdAt: DataControlsHelper6(item.created_at, item.updated_at),
        filterGroupId: cedar ? flint : (delta?.groupId ?? "special:none"),
        projectGroupId: cedar
          ? null
          : (delta?.groupId ?? (birch == null ? null : amber)),
        projectLabel: ember,
        searchValues: [reef, ember ?? "", amber],
        task: item,
        title: reef,
        updatedAt: DataControlsHelper6(item.updated_at, item.created_at),
      };
    }),
    ...(localThreads ?? []).map((item) => {
      let grove = markdownToPlainText(item.name?.trim() || item.preview).trim(),
        haven = AppInitialL(item.cwd),
        ivory = AppInitialL(item.path),
        jade = projectlessThreadIds.has(item.id),
        kelp = DataControlsHelper5({
          assignment: threadProjectAssignments?.[item.id],
          fallbackPaths: [threadWorkspaceRootHints?.[item.id], item.cwd],
          projects,
        }),
        lotus = null;
      jade ||
        (kelp == null
          ? haven == null
            ? ivory != null && (lotus = item.path)
            : (lotus = item.cwd)
          : (lotus = kelp.groupId));
      let maple = jade ? null : (kelp?.label ?? haven ?? ivory);
      return {
        kind: "local",
        createdAt: DataControlsHelper6(item.createdAt, item.updatedAt),
        filterGroupId: automationThreadIds.has(item.id)
          ? nova
          : jade
            ? flint
            : (kelp?.groupId ?? "special:none"),
        projectGroupId: lotus,
        projectLabel: maple,
        searchValues: [grove, maple ?? "", haven ?? "", ivory ?? ""],
        thread: item,
        title: grove,
        updatedAt: DataControlsHelper6(item.updatedAt, item.createdAt),
      };
    }),
  ].sort((olive, pearl) => pearl.updatedAt - olive.updatedAt);
}
function DataControlsHelper3(quartz) {
  let raven = new deferredUiYY(quartz, {
    ignoreLocation: true,
    keys: ["searchValues"],
    threshold: 0.4,
  });
  return (sage) => {
    let tide = sage.trim();
    return tide.length === 0
      ? quartz
      : raven.search(tide).map(({ item }) => item);
  };
}
function DataControlsHelper4({
  entries,
  groupKey,
  kindFilter,
  projectFilter = {
    kind: "all",
  },
  searchQuery,
  sortKey,
}) {
  let umber = DataControlsHelper3(
    entries.filter(
      (item) =>
        (kindFilter === "all" || item.kind === kindFilter) &&
        (projectFilter.kind === "all" ||
          item.filterGroupId === projectFilter.groupId),
    ),
  )(searchQuery);
  if (groupKey === "none")
    return umber.length === 0
      ? []
      : [
          {
            id: "all",
            projectLabel: null,
            entries: [...umber].sort((violet, willow) =>
              DataControlsHelper8(violet, willow, sortKey),
            ),
          },
        ];
  let xenon = new Map();
  for (let yarn of umber) {
    let zinc = yarn.projectGroupId ?? "",
      apex = xenon.get(zinc);
    if (apex != null) {
      apex.entries.push(yarn);
      continue;
    }
    xenon.set(zinc, {
      id: zinc,
      projectLabel: yarn.projectLabel,
      entries: [yarn],
    });
  }
  let bloom = [...xenon.values()];
  for (let coral of bloom)
    coral.entries.sort((drift, echo) =>
      DataControlsHelper8(drift, echo, sortKey),
    );
  return bloom.sort((fern, glade) => {
    if (sortKey === "alphabetical") {
      let haze = (fern.projectLabel ?? "").localeCompare(
        glade.projectLabel ?? "",
      );
      return haze === 0 ? fern.id.localeCompare(glade.id) : haze;
    }
    let iris =
      DataControlsHelper9(glade, sortKey) - DataControlsHelper9(fern, sortKey);
    if (iris !== 0) return iris;
    let jazz = (fern.projectLabel ?? "").localeCompare(
      glade.projectLabel ?? "",
    );
    return jazz === 0 ? fern.id.localeCompare(glade.id) : jazz;
  });
}
function _t(kite, lane) {
  return kite.flatMap((item) =>
    item.kind === "local" && (item.projectGroupId ?? "") === lane
      ? [item.thread]
      : [],
  );
}
function DataControlsHelper5({ assignment, fallbackPaths = [], projects }) {
  if (assignment != null) {
    let mist = projects.find((item) =>
      item.projectId !== assignment.projectId ||
      item.projectKind !== assignment.projectKind
        ? false
        : assignment.projectKind === "local"
          ? true
          : item.hostId === assignment.hostId && item.path === assignment.path,
    );
    if (mist != null) return mist;
  }
  for (let nook of fallbackPaths) {
    if (nook == null || nook.trim().length === 0) continue;
    let opal = toComparableUnixPath(nook).replace(/\/+$/, ""),
      pine = projects.filter(
        (item) =>
          item.projectKind === "local" &&
          item.path != null &&
          toComparableUnixPath(item.path).replace(/\/+$/, "") === opal,
      );
    if (pine.length === 1) return pine[0] ?? null;
  }
  return null;
}
function DataControlsHelper6(quill, ridge) {
  return quill != null && Number.isFinite(quill)
    ? quill
    : ridge != null && Number.isFinite(ridge)
      ? ridge
      : 0;
}
function DataControlsHelper7(silk, talon) {
  switch (talon) {
    case "alphabetical":
      return 0;
    case "created":
      return silk.createdAt;
    case "updated":
      return silk.updatedAt;
  }
}
function DataControlsHelper8(ultra, vale, wave) {
  if (wave === "alphabetical") {
    let yarn2 = ultra.title.localeCompare(vale.title);
    return yarn2 === 0 ? vale.updatedAt - ultra.updatedAt : yarn2;
  }
  let zephyr =
    DataControlsHelper7(vale, wave) - DataControlsHelper7(ultra, wave);
  return zephyr === 0 ? ultra.title.localeCompare(vale.title) : zephyr;
}
function DataControlsHelper9(atlas, brine) {
  let crest = 0;
  for (let dusk of atlas.entries)
    crest = Math.max(crest, DataControlsHelper7(dusk, brine));
  return crest;
}
var nova,
  flint,
  eddy = esmInit(() => {
    AppInitialBY();
    userMessage2();
    EnsureHooksHelpersInit();
    ensureComposerEsm_Wdt_Init();
    nova = "special:automations";
    flint = "special:none";
  });
function DataControlsHelper10(fjord) {
  let { archivedTask, showProjectName } = fjord,
    gust = useAppScope(appScopeAtom),
    helm = useQueryClient(),
    ink = useIntl(),
    jewel = useNavigate(),
    knoll,
    lagoon;
  knoll = ["recover-cloud-task", archivedTask.id];
  lagoon = () =>
    cloudApiClient.safePost("/wham/tasks/{task_id}/recover", {
      parameters: {
        path: {
          task_id: archivedTask.id,
        },
      },
    });
  let meadow = () => {
    gust.get(toastAtom).danger(ink.formatMessage(copper.unarchiveError));
  };
  let nimbus = () => {
    helm.setQueryData(["tasks", "archived"], (orbit) =>
      orbit == null
        ? orbit
        : {
            ...orbit,
            pages: orbit.pages.map((item) => ({
              ...item,
              items: item.items.filter((_item) => _item.id !== archivedTask.id),
            })),
          },
    );
    gust.get(toastAtom).info(
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
            jewel(`/remote/${archivedTask.id}`);
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
        id: `recover-cloud-task-${archivedTask.id}`,
      },
    );
  };
  let plume = () => {
    helm.invalidateQueries({
      queryKey: ["tasks"],
    });
  };
  let quill2 = {
    mutationKey: knoll,
    mutationFn: lagoon,
    onError: meadow,
    onSuccess: nimbus,
    onSettled: plume,
  };
  let ripple = useMutation(quill2),
    shard = markdownToPlainText(archivedTask.title ?? "").trim();
  let thorn = shard,
    umbra,
    vista,
    wisp,
    yonder;
  {
    let zeal = DataControlsHelper11(archivedTask),
      anvil;
    anvil = showProjectName
      ? archivedTask.task_status_display?.environment_label?.trim()
      : null;
    vista = anvil;
    wisp = zeal != null;
    umbra = wisp
      ? ink.formatDate(zeal, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "";
    yonder = wisp
      ? ink.formatTime(zeal, {
          hour: "numeric",
          minute: "2-digit",
        })
      : "";
  }
  let basalt = yonder,
    cinder = <AppIcond className="icon-sm" />;
  let dune =
    thorn.length > 0 ? (
      thorn
    ) : (
      <MemoizedFormattedMessage
        {...{
          id: "settings.dataControls.archivedChats.untitled",
          defaultMessage: "Untitled chat",
          description: "Fallback title for an archived chat",
        }}
      />
    );
  let ember2 = <span className="truncate">{dune}</span>;
  let forge = wisp ? (
    vista ? (
      <MemoizedFormattedMessage
        {...{
          id: "settings.dataControls.archivedChats.dateTimeWithEnvironment",
          defaultMessage: "{date}, {time} • {environment}",
          description:
            "Date, time, and environment name for an archived cloud task",
          values: {
            date: umbra,
            time: basalt,
            environment: vista,
          },
        }}
      />
    ) : (
      <MemoizedFormattedMessage
        {...{
          id: "settings.dataControls.archivedChats.dateTime",
          defaultMessage: "{date}, {time}",
          description: "Date and time for an archived chat",
          values: {
            date: umbra,
            time: basalt,
          },
        }}
      />
    )
  ) : null;
  let granite = <span className="truncate">{forge}</span>;
  let harbor = () => {
    ripple.isPending || ripple.mutate();
  };
  let inlet = (
    <MemoizedFormattedMessage
      {...{
        ...copper.unarchive,
      }}
    />
  );
  let jasper = (
    <Button
      {...{
        color: "secondary",
        size: "toolbar",
        disabled: ripple.isPending,
        loading: ripple.isPending,
        onClick: harbor,
        children: inlet,
      }}
    />
  );
  return (
    <SettingsRow
      {...{
        icon: cinder,
        label: ember2,
        description: granite,
        control: jasper,
      }}
    />
  );
}
function DataControlsHelper11(keel) {
  let ledge = keel.updated_at ?? keel.created_at;
  if (ledge == null) return null;
  let mesa = new Date(ledge * 1e3);
  return Number.isFinite(mesa.getTime()) ? mesa : null;
}
var notch,
  oak,
  prairie = esmInit(() => {
    notch = reactCompilerRuntime();
    ensureConversationPageEsm_pvt_Init();
    ensureAppScopeHostInit();
    ensureIntlFormattersInit();
    ensureComposerEsm_P5_Init();
    Button();
    ensureComposerEsm_Ilt_Init();
    AppInitialF();
    userMessage2();
    ensureAppScopeInit();
    AppInitialVC();
    ensureCloudApiClientInit();
    gamma();
  });
function DataControlsHelper12() {
  let quarry = ["tasks", "archived"];
  let reef2;
  return (
    (reef2 = {
      queryKey: quarry,
      initialPageParam: null,
      queryFn: DataControlsHelper16,
      getNextPageParam: DataControlsHelper15,
      select: DataControlsHelper13,
      staleTime: QueryStaleTimes.FIVE_SECONDS,
    }),
    hvtBindableHelper(reef2)
  );
}
function DataControlsHelper13(spire) {
  return spire.pages.flatMap(DataControlsHelper14);
}
function DataControlsHelper14(terrace) {
  return terrace.items;
}
function DataControlsHelper15(upland) {
  return upland.cursor ?? null;
}
function DataControlsHelper16(verge) {
  let { pageParam } = verge;
  return DataControlsHelper17(pageParam);
}
async function DataControlsHelper17(warren) {
  try {
    return await cloudApiClient.safeGet("/wham/tasks/list", {
      parameters: {
        query: {
          limit: 20,
          cursor: warren,
          task_filter: "archived",
        },
      },
    });
  } catch (xeric) {
    if (
      xeric instanceof HostApiError &&
      (xeric.status === 401 || xeric.status === 403 || xeric.status === 404)
    )
      return {
        items: [],
        cursor: null,
      };
    throw xeric;
  }
}
var yarrow,
  zonal = esmInit(() => {
    yarrow = reactCompilerRuntime();
    ensureConversationPageEsm_pvt_Init();
    ensureComposerEsm_pdt_Init();
    ensureCloudApiClientInit();
    ensureComposerEsm_odt_Init();
  });
