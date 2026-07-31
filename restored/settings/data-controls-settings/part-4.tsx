// Restored from ref/webview/assets/data-controls-DQbGPTwz.js
// Strict QG split (no --allow-flat): Wave5d-style careful split into parts; public API exported; cross-part refs soft-stubbed; bind in runtime-bridges.
// Stage 3 deep fill from `data-controls-DQbGPTwz/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 29 (verified 85/115).
// JSX calls converted: 107; mechanical renames: 378.

// Wave5d careful split 4/4
/* split-lane-import-depth:1 */

import type { ReactNode } from "react";
import {
  appScopeAtom,
  ensureAppScopeHostInit,
  ensureAppScopeInit,
  useAppScope,
} from "../../runtime/app-scope-runtime";
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

// Cross-part soft stubs (defined in sibling parts).
const EnsureSelectedHostInitStub: any = undefined;
const AppInitialA9: any = undefined;
const AppInitialFC: any = undefined;
const AppInitialL: any = undefined;
const AppInitialOi: any = undefined;
const AppInitialUj: any = undefined;
const AppInitialVC: any = undefined;
const deferredUiCR: any = undefined;
const eddy: any = undefined;
const gamma: any = undefined;
const prairie: any = undefined;
const userMessage2: any = undefined;
const zonal: any = undefined;
const AppInitialTm: any = undefined;
const AppInitialVO: any = undefined;
const AppInitialWO: any = undefined;
const AppInitialY9: any = undefined;
const AppInitialZo: any = undefined;
const copper: any = undefined;
const deferredUiBa: any = undefined;
const ensureSelectedHostInit: any = undefined;

function DataControlsHelper30(zephyr2) {
  let {
      archivedThread,
      isDeleteDisabled,
      isUnarchiving,
      showDeleteButton,
      showProjectName,
      onDelete,
      onUnarchive,
    } = zephyr2,
    breeze = useIntl(),
    squall = markdownToPlainText(
      archivedThread.name?.trim() || archivedThread.preview,
    ).trim();
  let gale = squall,
    blizzard,
    drizzle,
    shower,
    torrent;
  {
    let cascade = new Date(Number(archivedThread.updatedAt) * 1e3),
      rapids = new Date(Number(archivedThread.createdAt) * 1e3),
      current = Number.isFinite(cascade.getTime())
        ? cascade
        : Number.isFinite(rapids.getTime())
          ? rapids
          : null,
      eddy2;
    eddy2 = showProjectName
      ? (AppInitialL(archivedThread.cwd) ?? AppInitialL(archivedThread.path))
      : null;
    shower = eddy2;
    drizzle = current != null;
    blizzard = drizzle
      ? breeze.formatDate(current, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "";
    torrent = drizzle
      ? breeze.formatTime(current, {
          hour: "numeric",
          minute: "2-digit",
        })
      : "";
  }
  let whirl = torrent,
    surge = breeze.formatMessage({
      id: "settings.dataControls.archivedChats.deleteAriaLabel",
      defaultMessage: "Delete archived chat",
      description: "Aria label for deleting an archived chat",
    });
  let swell = surge,
    breaker =
      gale.length > 0 ? (
        gale
      ) : (
        <MemoizedFormattedMessage
          {...{
            id: "settings.dataControls.archivedChats.untitled",
            defaultMessage: "Untitled chat",
            description: "Fallback title for an archived chat",
          }}
        />
      );
  let foam = <span className="truncate">{breaker}</span>;
  let spray = drizzle ? (
    shower ? (
      <MemoizedFormattedMessage
        {...{
          id: "settings.dataControls.archivedChats.dateTimeWithRepo",
          defaultMessage: "{date}, {time} • {repo}",
          description: "Date, time, and repo name for an archived chat",
          values: {
            date: blizzard,
            time: whirl,
            repo: shower,
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
            date: blizzard,
            time: whirl,
          },
        }}
      />
    )
  ) : null;
  let mist2 = <span className="truncate">{spray}</span>;
  let fog = showDeleteButton ? (
    <OptionalTooltip
      {...{
        tooltipContent: swell,
        children: (
          <Button
            {...{
              "aria-label": swell,
              className:
                "text-token-charts-red enabled:hover:bg-token-charts-red/10",
              color: "ghost",
              size: "toolbar",
              uniform: true,
              disabled: isDeleteDisabled,
              onClick: onDelete,
              children: (
                <EnsureSelectedHostInitStub
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
  ) : null;
  let cirrus = () => {
    isDeleteDisabled || onUnarchive();
  };
  let cumulus = (
    <MemoizedFormattedMessage
      {...{
        ...copper.unarchive,
      }}
    />
  );
  let stratus = (
    <Button
      {...{
        className: "shrink-0",
        color: "secondary",
        size: "toolbar",
        disabled: isDeleteDisabled,
        loading: isUnarchiving,
        onClick: cirrus,
        children: cumulus,
      }}
    />
  );
  let nimbus2 = (
    <>
      {fog}
      {stratus}
    </>
  );
  return (
    <SettingsRow
      {...{
        label: foam,
        description: mist2,
        control: nimbus2,
      }}
    />
  );
}
function DataControlsHelper31(aurora) {
  let { state, onConfirm, onOpenChange } = aurora;
  if (state == null) return null;
  let corona = (
    <EnsureHooksHelpersInit
      {...{
        children: (
          <DialogHeader
            {...{
              title:
                state.kind === "all" ? (
                  <MemoizedFormattedMessage
                    {...{
                      id: "settings.dataControls.archivedChats.deleteAllConfirm.title",
                      defaultMessage: "Delete all archived local chats?",
                      description:
                        "Title for confirming deletion of all archived local chats",
                    }}
                  />
                ) : state.kind === "project" ? (
                  <MemoizedFormattedMessage
                    {...{
                      id: "settings.dataControls.archivedChats.deleteProjectConfirm.title",
                      defaultMessage: "Delete all in project?",
                      description:
                        "Title for confirming deletion of archived local chats in one project",
                    }}
                  />
                ) : (
                  <MemoizedFormattedMessage
                    {...{
                      id: "settings.dataControls.archivedChats.deleteConfirm.title",
                      defaultMessage: "Delete archived chat?",
                      description:
                        "Title for confirming deletion of an archived chat",
                    }}
                  />
                ),
            }}
          />
        ),
      }}
    />
  );
  let eclipse = (
    <EnsureHooksHelpersInit
      {...{
        className: "text-token-description-foreground",
        children: (
          <p>
            {state.kind === "all" ? (
              <MemoizedFormattedMessage
                {...{
                  id: "settings.dataControls.archivedChats.deleteAllConfirm.body",
                  defaultMessage:
                    "This permanently deletes all local archived chats",
                  description:
                    "Body copy in the delete all archived local chats confirmation dialog",
                }}
              />
            ) : state.kind === "project" ? (
              <MemoizedFormattedMessage
                {...{
                  id: "settings.dataControls.archivedChats.deleteProjectConfirm.body",
                  defaultMessage:
                    "This permanently deletes {count, plural, one {# local archived chat} other {# local archived chats}} in this project",
                  description:
                    "Body copy in the delete archived local chats in project confirmation dialog",
                  values: {
                    count: state.threads.length,
                  },
                }}
              />
            ) : (
              <MemoizedFormattedMessage
                {...{
                  id: "settings.dataControls.archivedChats.deleteConfirm.body",
                  defaultMessage: "This permanently deletes the archived chat",
                  description:
                    "Body copy in the delete archived chat confirmation dialog",
                }}
              />
            )}
          </p>
        ),
      }}
    />
  );
  let solstice = () => {
    onOpenChange(false);
  };
  let equinox = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.dataControls.archivedChats.deleteConfirm.cancel",
        defaultMessage: "Cancel",
        description: "Cancel button label for deleting archived chats",
      }}
    />
  );
  let meridian = (
    <Button
      {...{
        color: "ghost",
        onClick: solstice,
        children: equinox,
      }}
    />
  );
  let horizon = (
    <MemoizedFormattedMessage
      {...{
        ...copper.delete,
      }}
    />
  );
  let zenith2 = (
    <Button
      {...{
        color: "danger",
        onClick: onConfirm,
        children: horizon,
      }}
    />
  );
  let nadir = (
    <EnsureHooksHelpersInit
      {...{
        children: (
          <DialogFooter
            {...{
              children: [meridian, zenith2],
            }}
          />
        ),
      }}
    />
  );
  let apex2 = (
    <DialogBody
      {...{
        children: [corona, eclipse, nadir],
      }}
    />
  );
  return (
    <DialogWithTrigger
      {...{
        open: true,
        showDialogClose: false,
        onOpenChange,
        children: apex2,
      }}
    />
  );
}
function $t(vertex) {
  switch (vertex) {
    case "all":
      return $.allChats;
    case "cloud":
      return $.cloud;
    case "local":
      return $.local;
  }
}
function DataControlsHelper32(controlsSlot348) {
  return controlsSlot348.kind === "all"
    ? "delete-archived-chats"
    : controlsSlot348.kind === "project"
      ? `delete-archived-project-${controlsSlot348.projectLabel ?? "no-project"}`
      : `delete-archived-thread-${controlsSlot348.thread.id}`;
}
var controlsSlot349, index, controlsSlot350, $, signal, heath;
esmInit(() => {
  controlsSlot349 = reactCompilerRuntime();
  ensureConversationPageEsm_pvt_Init();
  ensureAppScopeHostInit();
  ensureAppShellAtomsInit();
  index = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureComposerEsm_P5_Init();
  ensureAppShellAtomsInit();
  ensureDesktopHostRequestInit();
  AppInitialY9();
  AppInitialA9();
  Button();
  ensureComposerEsm_YS_Init();
  ensureComposerEsm_GS_Init();
  ensureDropdownMenuInit();
  AppInitialZo();
  AppInitialUj();
  workspaceRootFinderMessages();
  AppInitialTm();
  ensureComposerEsm_Ilt_Init();
  ensureComposerEsm_Hlt_Init();
  deferredUiCR();
  ensureDropdownMenuPopoverInit();
  ensureComposerEsm_wct_Init();
  deferredUiBa();
  ensureConversationPageEsm_RS_Init();
  AppInitialVO();
  userMessage2();
  ensureAppScopeInit();
  ensureHomeDirectoryQueriesInit();
  ControlGroup();
  AppInitialOi();
  ensureSettingsGroupInit();
  ensureSelectedHostInit();
  AppInitialWO();
  initSettingsLoadingRow();
  AppInitialVC();
  ensureSettingsSectionTitleInit();
  AppInitialFC();
  ensureAppShellAtomsInit();
  ensureConversationPageEsm_xB_Init();
  EnsureHooksHelpersInit();
  ensureComposerEsm_Wdt_Init();
  ensureComposerEsm_pdt_Init();
  ensureComposerEsm_ML_Init();
  ensureSettingsQueryAtomsInit();
  gamma();
  eddy();
  prairie();
  zonal();
  $ = identity({
    searchArchivedChats: {
      id: "settings.dataControls.archivedChats.search.placeholder",
      defaultMessage: "Search archived chats",
      description: "Placeholder for the archived chats search input",
    },
    filterArchivedChats: {
      id: "settings.dataControls.archivedChats.filter.ariaLabel",
      defaultMessage: "Filter archived chats",
      description: "Accessible label for the archived chats filter dropdown",
    },
    groupArchivedChats: {
      id: "settings.dataControls.archivedChats.group.ariaLabel",
      defaultMessage: "Group archived chats",
      description: "Accessible label for the archived chats grouping dropdown",
    },
    filterArchivedChatsByProject: {
      id: "settings.dataControls.archivedChats.projectFilter.ariaLabel",
      defaultMessage: "Filter archived chats by project",
      description: "Accessible label for the archived chats project dropdown",
    },
    allProjects: {
      id: "settings.dataControls.archivedChats.projectFilter.allProjects",
      defaultMessage: "All projects",
      description:
        "Project filter option showing archived chats from all projects",
    },
    chats: {
      id: "settings.dataControls.archivedChats.projectFilter.chats",
      defaultMessage: "Chats",
      description: "Project filter option showing projectless archived chats",
    },
    automations: {
      id: "settings.dataControls.archivedChats.projectFilter.automations",
      defaultMessage: "Scheduled tasks",
      description: "Project filter option showing archived scheduled task runs",
    },
    type: {
      id: "settings.dataControls.archivedChats.filter.section.type",
      defaultMessage: "Type",
      description: "Section label for archived chat type filter options",
    },
    sortBy: {
      id: "settings.dataControls.archivedChats.filter.section.sort",
      defaultMessage: "Sort by",
      description: "Section label for archived chat sort options",
    },
    allChats: {
      id: "settings.dataControls.archivedChats.filter.all",
      defaultMessage: "All chats",
      description: "Filter option showing every archived chat",
    },
    local: {
      id: "settings.dataControls.archivedChats.filter.local",
      defaultMessage: "Local",
      description: "Filter option showing local archived chats",
    },
    cloud: {
      id: "settings.dataControls.archivedChats.filter.cloud",
      defaultMessage: "Cloud",
      description: "Filter option showing cloud archived chats",
    },
    project: {
      id: "settings.dataControls.archivedChats.group.project",
      defaultMessage: "Project",
      description: "Grouping option that groups archived chats by project",
    },
    none: {
      id: "settings.dataControls.archivedChats.group.none",
      defaultMessage: "None",
      description: "Grouping option that shows archived chats in one list",
    },
    updated: {
      id: "settings.dataControls.archivedChats.sort.updated",
      defaultMessage: "Updated",
      description: "Sort option for archived chats by last updated time",
    },
    created: {
      id: "settings.dataControls.archivedChats.sort.created",
      defaultMessage: "Created",
      description: "Sort option for archived chats by creation time",
    },
    alphabetical: {
      id: "settings.dataControls.archivedChats.sort.alphabetical",
      defaultMessage: "Alphabetical",
      description: "Sort option for archived chats by title",
    },
    deleteProjectChats: {
      id: "settings.dataControls.archivedChats.deleteProjectChats",
      defaultMessage: "Delete all in project",
      description:
        "Menu item label for deleting local archived chats in a project",
    },
  });
  signal = {
    kind: "all",
  };
  heath = 1e5;
})();
