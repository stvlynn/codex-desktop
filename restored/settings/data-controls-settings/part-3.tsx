// Restored from ref/webview/assets/data-controls-DQbGPTwz.js
// Strict QG split (no --allow-flat): Wave5d-style careful split into parts; public API exported; cross-part refs soft-stubbed; bind in runtime-bridges.
// Stage 3 deep fill from `data-controls-DQbGPTwz/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 29 (verified 85/115).
// JSX calls converted: 107; mechanical renames: 378.

// Wave5d careful split 3/4
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

// Cross-part soft stubs (defined in sibling parts).
const AppInitialZa: any = undefined;
const $: any = undefined;
const $t: any = undefined;
const EnsureSelectedHostInitStub: any = undefined;
const flint: any = undefined;
const DataControlsHelper10: any = undefined;
const DataControlsHelper30: any = undefined;
const RevealInFileManagerButton: any = undefined;
const _t: any = undefined;
const nova: any = undefined;

function DataControlsHelper27(thulium) {
  let { kindFilter, sortKey, onKindFilterChange, onSortKeyChange } = thulium,
    ytterb = useIntl(),
    lutetium = ytterb.formatMessage($.filterArchivedChats);
  let hafnium = <AppInitialZa className="icon-xs shrink-0" />;
  let tantalum = $t(kindFilter);
  let tungsten = (
    <span className="truncate">
      {
        <MemoizedFormattedMessage
          {...{
            ...tantalum,
          }}
        />
      }
    </span>
  );
  let rhenium = (
    <DropdownTriggerButton className="w-[150px] md:w-36" aria-label={lutetium}>
      {hafnium}
      {tungsten}
    </DropdownTriggerButton>
  );
  let osmium = (
    <DropdownMenu.SectionLabel
      {...{
        children: (
          <MemoizedFormattedMessage
            {...{
              ...$.type,
            }}
          />
        ),
      }}
    />
  );
  let iridium = kindFilter === "all" ? AppIconZlt : undefined,
    platinum = () => {
      onKindFilterChange("all");
    };
  let mercury = (
    <MemoizedFormattedMessage
      {...{
        ...$.allChats,
      }}
    />
  );
  let thallium = (
    <DropdownMenu.Item
      {...{
        RightIcon: iridium,
        onSelect: platinum,
        children: mercury,
      }}
    />
  );
  let bismuth = kindFilter === "local" ? AppIconZlt : undefined,
    polonium = () => {
      onKindFilterChange("local");
    };
  let astatine = (
    <MemoizedFormattedMessage
      {...{
        ...$.local,
      }}
    />
  );
  let francium = (
    <DropdownMenu.Item
      {...{
        RightIcon: bismuth,
        onSelect: polonium,
        children: astatine,
      }}
    />
  );
  let radium = kindFilter === "cloud" ? AppIconZlt : undefined,
    actinium = () => {
      onKindFilterChange("cloud");
    };
  let thorium = (
    <MemoizedFormattedMessage
      {...{
        ...$.cloud,
      }}
    />
  );
  let protact = (
    <DropdownMenu.Item
      {...{
        RightIcon: radium,
        onSelect: actinium,
        children: thorium,
      }}
    />
  );
  let uranium = <DropdownMenu.Separator {...{}} />;
  let neptun = (
    <DropdownMenu.SectionLabel
      {...{
        children: (
          <MemoizedFormattedMessage
            {...{
              ...$.sortBy,
            }}
          />
        ),
      }}
    />
  );
  let pluton = sortKey === "updated" ? AppIconZlt : undefined,
    americ = () => {
      onSortKeyChange("updated");
    };
  let curium = (
    <MemoizedFormattedMessage
      {...{
        ...$.updated,
      }}
    />
  );
  let berkel = (
    <DropdownMenu.Item
      {...{
        RightIcon: pluton,
        onSelect: americ,
        children: curium,
      }}
    />
  );
  let californ = sortKey === "created" ? AppIconZlt : undefined,
    einstein = () => {
      onSortKeyChange("created");
    };
  let fermium = (
    <MemoizedFormattedMessage
      {...{
        ...$.created,
      }}
    />
  );
  let mendelev = (
    <DropdownMenu.Item
      {...{
        RightIcon: californ,
        onSelect: einstein,
        children: fermium,
      }}
    />
  );
  let nobel = sortKey === "alphabetical" ? AppIconZlt : undefined,
    lawrenc = () => {
      onSortKeyChange("alphabetical");
    };
  let ruther = (
    <MemoizedFormattedMessage
      {...{
        ...$.alphabetical,
      }}
    />
  );
  let dubnium = (
    <DropdownMenu.Item
      {...{
        RightIcon: nobel,
        onSelect: lawrenc,
        children: ruther,
      }}
    />
  );
  return (
    <DropdownMenuPopover
      {...{
        side: "bottom",
        align: "end",
        contentWidth: "menuNarrow",
        triggerButton: rhenium,
        children: [
          osmium,
          thallium,
          francium,
          protact,
          uranium,
          neptun,
          berkel,
          mendelev,
          dubnium,
        ],
      }}
    />
  );
}
function DataControlsHelper28(seaborg) {
  let { projectFilter, projects, onProjectFilterChange } = seaborg,
    bohrium = useIntl(),
    hassium =
      projectFilter.kind === "group"
        ? projects.find((item) => item.groupId === projectFilter.groupId)
        : null;
  let meitner = hassium,
    Darmstadt,
    roent,
    copernic,
    nihon,
    flerov,
    moscov,
    livermor,
    tenness,
    oganesson;
  {
    let quark = new Map();
    for (let photon of projects) {
      let gluon = quark.get(photon.label) ?? [];
      gluon.push(photon.path ?? photon.label);
      quark.set(photon.label, gluon);
    }
    Darmstadt = DropdownMenuPopover;
    roent = "bottom";
    copernic = "end";
    nihon = "workspace";
    flerov = "tall";
    let boson = bohrium.formatMessage($.filterArchivedChatsByProject);
    let fermion = (
      <FolderFileIcon
        {...{
          className: "icon-xs shrink-0",
        }}
      />
    );
    let hadron =
      projectFilter.kind === "all" ? (
        <MemoizedFormattedMessage
          {...{
            ...$.allProjects,
          }}
        />
      ) : projectFilter.groupId === "special:automations" ? (
        <MemoizedFormattedMessage
          {...{
            ...$.automations,
          }}
        />
      ) : projectFilter.groupId === "special:none" ? (
        <MemoizedFormattedMessage
          {...{
            ...$.chats,
          }}
        />
      ) : meitner == null ? (
        <MemoizedFormattedMessage
          {...{
            ...$.allProjects,
          }}
        />
      ) : (
        meitner.label
      );
    let lepton;
    lepton = <span className="truncate">{hadron}</span>;
    moscov = (
      <DropdownTriggerButton className="w-[180px] md:w-44" aria-label={boson}>
        {fermion}
        {lepton}
      </DropdownTriggerButton>
    );
    let neutrino = projectFilter.kind === "all" ? AppIconZlt : undefined,
      muon = () => {
        onProjectFilterChange({
          kind: "all",
        });
      };
    let tauon;
    tauon = (
      <MemoizedFormattedMessage
        {...{
          ...$.allProjects,
        }}
      />
    );
    livermor = (
      <DropdownMenu.Item
        {...{
          RightIcon: neutrino,
          onSelect: muon,
          children: tauon,
        }}
      />
    );
    tenness = <DropdownMenu.Separator {...{}} />;
    oganesson = projects.map((item) => {
      let positron = quark.get(item.label) ?? [],
        proton =
          positron.length > 1
            ? relativePathFromCommonPrefix(item.path ?? item.label, positron)
            : undefined,
        neutron =
          projectFilter.kind === "group" &&
          projectFilter.groupId === item.groupId;
      return (
        <DropdownMenu.Item
          key={item.groupId}
          {...{
            LeftIcon: FolderFileIcon,
            RightIcon: neutron ? AppIconZlt : undefined,
            tooltipText: proton,
            tooltipAlign: "center",
            onSelect: () => {
              onProjectFilterChange({
                kind: "group",
                groupId: item.groupId,
              });
            },
            children: item.label,
          }}
        />
      );
    });
  }
  let electron = <DropdownMenu.Separator {...{}} />;
  let nucleus =
      projectFilter.kind === "group" && projectFilter.groupId === "special:none"
        ? AppIconZlt
        : undefined,
    isotope = () => {
      onProjectFilterChange({
        kind: "group",
        groupId: flint,
      });
    };
  let plasma = (
    <MemoizedFormattedMessage
      {...{
        ...$.chats,
      }}
    />
  );
  let crystal = (
    <DropdownMenu.Item
      {...{
        LeftIcon: AppIconSR,
        RightIcon: nucleus,
        onSelect: isotope,
        children: plasma,
      }}
    />
  );
  let lattice =
      projectFilter.kind === "group" &&
      projectFilter.groupId === "special:automations"
        ? AppIconZlt
        : undefined,
    matrix = () => {
      onProjectFilterChange({
        kind: "group",
        groupId: nova,
      });
    };
  let tensor = (
    <MemoizedFormattedMessage
      {...{
        ...$.automations,
      }}
    />
  );
  let scalar = (
    <DropdownMenu.Item
      {...{
        LeftIcon: AppIconCct,
        RightIcon: lattice,
        onSelect: matrix,
        children: tensor,
      }}
    />
  );
  return (
    <Darmstadt
      {...{
        side: roent,
        align: copernic,
        contentWidth: nihon,
        contentMaxHeight: flerov,
        triggerButton: moscov,
        children: [livermor, tenness, oganesson, electron, crystal, scalar],
      }}
    />
  );
}
function DataControlsHelper29(affine) {
  let {
      group,
      hostId,
      isDeleteDisabled,
      showHeader,
      unarchivingThreadId,
      isUnarchiving,
      onDelete,
      onDeleteProject,
      onUnarchive,
    } = affine,
    linear = useIntl(),
    cubic = _t(group.entries, group.id);
  let quartic = cubic,
    spiral =
      group.projectLabel != null && hostId === "local" && quartic.length > 0,
    helix = showHeader ? (
      <SettingsGroup.Header
        {...{
          title: (
            <span className="flex min-w-0 items-center gap-2">
              {
                <FolderFileIcon
                  {...{
                    className: "icon-xs shrink-0",
                  }}
                />
              }
              <span className="truncate">
                {group.projectLabel == null ? (
                  <MemoizedFormattedMessage
                    {...{
                      id: "settings.dataControls.archivedChats.noProject",
                      defaultMessage: "No project",
                      description:
                        "Fallback project header for archived chats without a project",
                    }}
                  />
                ) : (
                  group.projectLabel
                )}
              </span>
            </span>
          ),
          actions: (
            <>
              <span className="text-sm text-token-text-secondary">
                {
                  <MemoizedFormattedMessage
                    {...{
                      id: "settings.dataControls.archivedChats.groupCount",
                      defaultMessage:
                        "{count, plural, one {# chat} other {# chats}}",
                      description:
                        "Archived chat count shown in a project group header",
                      values: {
                        count: group.entries.length,
                      },
                    }}
                  />
                }
              </span>
              {spiral ? (
                <DropdownMenuPopover
                  {...{
                    align: "end",
                    contentWidth: "menu",
                    triggerButton: (
                      <RevealInFileManagerButton
                        {...{
                          className:
                            "text-token-description-foreground hover:bg-token-list-hover-background hover:text-token-foreground",
                          label: linear.formatMessage({
                            id: "settings.dataControls.archivedChats.projectActions",
                            defaultMessage: "Project actions",
                            description:
                              "Accessible label for the project archived chats actions menu",
                          }),
                          size: "toolbar",
                        }}
                      />
                    ),
                    children: (
                      <DropdownMenu.Item
                        {...{
                          LeftIcon: EnsureSelectedHostInitStub,
                          className: "!text-token-error-foreground",
                          leftIconClassName:
                            "icon-xs text-token-error-foreground",
                          disabled: isDeleteDisabled,
                          onSelect: () => {
                            onDeleteProject(group.projectLabel, quartic);
                          },
                          children: (
                            <MemoizedFormattedMessage
                              {...{
                                ...$.deleteProjectChats,
                              }}
                            />
                          ),
                        }}
                      />
                    ),
                  }}
                />
              ) : null}
            </>
          ),
        }}
      />
    ) : null;
  let vortex;
  {
    let cyclone;
    cyclone = (tempest) => {
      switch (tempest.kind) {
        case "cloud":
          return (
            <DataControlsHelper10
              key={`cloud:${tempest.task.id}`}
              {...{
                archivedTask: tempest.task,
                showProjectName: !showHeader,
              }}
            />
          );
        case "local":
          return (
            <DataControlsHelper30
              key={`local:${tempest.thread.id}`}
              {...{
                archivedThread: tempest.thread,
                isDeleteDisabled,
                isUnarchiving:
                  isUnarchiving && unarchivingThreadId === tempest.thread.id,
                showDeleteButton: hostId === LOCAL_HOST_ID,
                showProjectName: !showHeader,
                onDelete: () => {
                  onDelete(tempest.thread);
                },
                onUnarchive: () => {
                  onUnarchive(tempest.thread);
                },
              }}
            />
          );
      }
    };
    vortex = group.entries.map(cyclone);
  }
  let monsoon = (
    <SettingsGroup.Content
      {...{
        children: (
          <SettingsPanel
            {...{
              children: vortex,
            }}
          />
        ),
      }}
    />
  );
  return (
    <SettingsGroup
      {...{
        children: [helix, monsoon],
      }}
    />
  );
}
