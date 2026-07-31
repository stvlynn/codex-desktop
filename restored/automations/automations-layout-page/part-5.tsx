// Restored from ref/webview/assets/automations-page-BWCJI7AO.js
// Stage 3 deep fill from `automations-page-BWCJI7AO/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 68 (verified 179/247).
// JSX calls converted: 228; mechanical renames: 624.
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 5/13
/* split-lane-import-depth:1 */

import type { ReactNode } from "react";
import { CodexAutomationAction } from "../../analytics/codex-automation-action";
import { CODEX_AUTOMATION_CREATED_TYPE } from "../../analytics/codex-automation-created-type";
import { CodexAutomationDeleteStatus } from "../../analytics/codex-automation-delete-status";
import { CodexAutomationFailureReason } from "../../analytics/codex-automation-failure-reason";
import { CodexAutomationSource } from "../../analytics/codex-automation-source";
import { CODEX_AUTOMATION_UPDATED_TYPE } from "../../analytics/codex-automation-updated-type";
import { logProductEvent } from "../../analytics/log-product-event";
import { AppShellLayout } from "../../app-shell/app-shell-layout";
import { RelativeDateByMinute } from "../../apps/relative-date-by-minute";
import { applyModelSettingsToAutomationDraft } from "../../automation/apply-model-settings-to-automation-draft";
import { automationCreatePayloadFromDraft } from "../../automation/automation-create-payload-from-draft";
import { AutomationNameField } from "../../automation/automation-name-field";
import { AutomationSaveRequirementsTooltip } from "../../automation/automation-save-requirements-tooltip";
import {
  automationDraftWithHeartbeatKind,
  DEFAULT_AUTOMATION_DRAFT,
} from "../../automation/default-automation-draft";
import { formatScheduleTimeOfDay } from "../../automation/format-schedule-time-of-day";
import { isBlankAutomationDraft } from "../../automation/is-blank-automation-draft";
import { isValidScheduleConfig } from "../../automation/is-valid-schedule-config";
import { normalizeCronScheduleFields } from "../../automation/normalize-cron-schedule-fields";
import { RRULE_WEEKDAY_OPTIONS } from "../../automation/rrule-weekday-options";
import { scheduleConfigFromRrule } from "../../automation/schedule-config-from-rrule";
import {
  appScopeAtom,
  ensureAppScopeHostInit,
  ensureAppScopeInit,
  useAppScope,
} from "../../runtime/app-scope-runtime";
import {
  useAppScopeValue,
  useStepsProseAtom,
} from "../../boundaries/composer-appscope-atoms";
import {
  ensureComposerEsm__8_Init,
  ensureComposerEsm_AG_Init,
  ensureComposerEsm_b8_Init,
  ensureComposerEsm_F7_Init,
  ensureComposerEsm_GS_Init,
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_ML_Init,
  ensureComposerEsm_n0_Init,
  ensureComposerEsm_oR_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_RV_Init,
  ensureComposerEsm_Sp_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_tlt_Init,
  ensureComposerEsm_udt_Init,
  ensureComposerEsm_wct_Init,
  ensureComposerEsm_YS_Init,
} from "../../boundaries/composer-esm-inits";
import {
  ensureConversationPageEsm_GZ_Init,
  ensureConversationPageEsm_pvt_Init,
  ensureConversationPageEsm_xB_Init,
} from "../../conversation/conversation-page-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import {
  useLocation,
  useNavigate,
} from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { DOM_ONINPUT_EVENT_NAME } from "../../config/dom-oninput-event-name";
import { asThreadId } from "../../conversation/as-thread-id";
import { ConversationMarkdownText } from "../../conversation/conversation-markdown-text";
import { isHeartbeatItem } from "../../conversation/is-heartbeat-item";
import { isThreadNeedsResumeActive } from "../../conversation/is-thread-needs-resume-active";
import { recentConversationsMetaQueryKey } from "../../conversation/recent-conversations-meta-query-key";
import { resolveConversationTitle } from "../../conversation/resolve-conversation-title";
import { subagentActivityMessages } from "../../conversation/subagent-activity-messages";
import { ThinkingShimmerMessage } from "../../conversation/thinking-shimmer-message";
import { THREAD_DETAIL_LEVEL_STEPS_PROSE } from "../../conversation/thread-detail-level-ids";
import { ensureDesktopHostRequestInit } from "../../desktop/desktop-host-request";
import { useFeatureGateEnabled as UseFeatureGateEnabled } from "../../feature-gates/use-feature-gate-enabled";
import { displayLabelForRootPath } from "../../files/display-label-for-root-path";
import { ensureHomeDirectoryQueriesInit } from "../../hooks/home-directory-query";
import { ContextMenuRegistration } from "../../hooks/use-context-menu-registration";
import {
  ensureUseDebouncedValueInit,
  useDebouncedValue,
} from "../../hooks/use-debounced-value";
import {
  ensureUsePluginScheduledTasksInit,
  usePluginScheduledTasksN,
} from "../../hooks/use-plugin-scheduled-tasks";
import { useQueryClient } from "../../hooks/use-query-client";
import { useVscodeMutation } from "../../hooks/use-vscode-query";
import { HostCwdPathLabel } from "../../hosts/host-cwd-path-label";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconaR } from "../../icons/app-icon-ar";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconCct } from "../../icons/app-icon-cct";
import { AppIconDk } from "../../icons/app-icon-dk";
import { AppIconEH } from "../../icons/app-icon-eh";
import { AppIconFE } from "../../icons/app-icon-fe";
import { AppIconJO } from "../../icons/app-icon-jo";
import { AppIconkk } from "../../icons/app-icon-kk";
import { AppIconLV } from "../../icons/app-icon-lv";
import { AppIconSR } from "../../icons/app-icon-sr";
import { AppIconsz } from "../../icons/app-icon-sz";
import { AppIcont0 } from "../../icons/app-icon-t0";
import { AppIconUg } from "../../icons/app-icon-ug";
import { AppIconyct } from "../../icons/app-icon-yct";
import { ensureHooksInfoIconInit } from "../../icons/hooks-settings-icons";
import {
  ensurePlayOutlineIconInit,
  PlayOutlineIcon,
} from "../../icons/play-outline-icon";
import { PlusIcon } from "../../icons/plus-icon";
import { appLogger } from "../../logging/app-logger";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { useColdNavigate } from "../../navigation/use-cold-navigate";
import { pluginIdFromScheduledTaskKey } from "../../plugins/parse-plugin-scheduled-task-key";
import {
  ensureInstalledPluginsQueryInit,
  useInstalledPluginsQuery,
} from "../../plugins/use-installed-plugins-query";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { createGlobalStateSetting } from "../../settings/setting-definition";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { SettingsPanel } from "../../settings/settings-panel";
import { buildVscodeQueryKey } from "../../settings/vscode-query-key";
import { workspaceRootFinderMessages } from "../../sidebar/workspace-root-finder-messages";
import {
  EmptyState,
  ensureSkillsPageHelpersInit,
} from "../../skills/skills-page-helpers";
import { ActionListRow } from "../../ui/action-list-row";
import { AppLogoImage } from "../../ui/app-logo-image";
import { AUTO_WIDTH_GAP_CLASS } from "../../ui/auto-width-gap-class";
import { BulletSeparator } from "../../ui/bullet-separator";
import { Button } from "../../ui/button";
import { Callout, ensureCalloutInit } from "../../ui/callout";
import { closeSidePanelUnlessWindowResize } from "../../ui/close-side-panel-unless-window-resize";
import { CompoundButtonMenu } from "../../ui/compound-button-menu";
import { cx } from "../../ui/cx";
import { deferredUicz } from "../../ui/deferred-uicz";
import { DensityLoadingIndicator } from "../../ui/density-loading-indicator";
import { DialogBody } from "../../ui/dialog-body";
import { DialogClose } from "../../ui/dialog-close";
import { DialogFooter } from "../../ui/dialog-footer";
import { DialogHeader } from "../../ui/dialog-header";
import { DialogOverlay } from "../../ui/dialog-overlay";
import { DialogSection } from "../../ui/dialog-section";
import { DialogWithTrigger } from "../../ui/dialog-with-trigger";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { heartbeatSchedule } from "../../ui/heartbeat-schedule";
import { inProgress } from "../../ui/in-progress";
import { inProgress2 } from "../../ui/in-progress2";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { OverlayPanelWithTitle } from "../../ui/overlay-panel-with-title";
import { RelativeDateStringLabel } from "../../ui/relative-date-string-label";
import { SearchableDetailPageLayout } from "../../ui/searchable-detail-page-layout";
import {
  ensureSegmentedControlInit,
  SegmentedControl,
} from "../../ui/segmented-control";
import {
  ensureSelectableListRowActivationInit,
  EnsureSelectableListRowInit as EnsureSelectableListRowInit,
  SelectableListRow,
  selectableListRowActivationProps,
} from "../../ui/selectable-list-row";
import { skeletonTitleWidthPresets } from "../../ui/skeleton-title-width-presets";
import { Spinner } from "../../ui/spinner";
import { zlt as Zlt } from "../../ui/zlt";
import { escapeRegExp } from "../../utils/escape-regexp";
import { identity } from "../../utils/identity";
import { shallowClonePlainOrArray as ShallowClonePlainOrArray } from "../../utils/shallow-clone-plain-or-array";
import { ensureImportSettingsCLInit } from "../../utils/wave-as-gap-ensure-inits";
import { ensureZodRuntime, zodObject } from "../../vendor/zod";

// Wave5d soft stubs.
const AppInitialVO: any = undefined;
const AppInitialWg: any = undefined;
const RevealInFileManagerButton: any = undefined;
const applyRoundedFull: any = undefined;
const deferredUiOk: any = undefined;

function AutomationsLayoutHelper28(ruthenium) {
  let {
      automation,
      displayName,
      managementActions,
      scheduleLabel,
      secondLineAdornment,
      hasUnreadRuns,
      isInProgress,
      isPaused,
      isSelected,
      onSelect,
    } = ruthenium,
    rhodium = useIntl(),
    palladium = cadmium.useId(),
    indium =
      isInProgress ||
      (isPaused && managementActions == null) ||
      (!isPaused && automation.nextRunAt != null),
    antimony;
  if (isInProgress) {
    let tellurium;
    tellurium = (
      <Spinner
        {...{
          className: "icon-sm shrink-0 text-token-description-foreground",
        }}
      />
    );
    antimony = tellurium;
  } else if (isPaused && managementActions != null) {
    let iodine = () => {
      managementActions.onResume(automation);
    };
    let cesium = (
      <AppIconDk
        {...{
          className: "icon-sm",
        }}
      />
    );
    let barium;
    barium = (
      <span className="pointer-events-auto inline-flex">
        {
          <AutomationsLayoutHelper29
            {...{
              label: lanthan.resume,
              onClick: iodine,
              children: cesium,
            }}
          />
        }
      </span>
    );
    antimony = barium;
  } else if (isPaused) {
    let cerium;
    cerium = (
      <AppIconkk
        {...{
          className: "icon-sm shrink-0 text-token-description-foreground",
        }}
      />
    );
    antimony = cerium;
  } else if (managementActions != null) {
    let praseo = () => {
      managementActions.onPause(automation);
    };
    let neodym = (
      <span className="relative inline-flex">
        {
          <AppIconUg
            {...{
              className:
                "icon-sm group-focus-within/status-toggle:opacity-0 group-hover/status-toggle:opacity-0",
            }}
          />
        }
        {
          <AppIconkk
            {...{
              className:
                "icon-sm absolute inset-0 opacity-0 group-focus-within/status-toggle:opacity-100 group-hover/status-toggle:opacity-100",
            }}
          />
        }
      </span>
    );
    let prometh;
    prometh = (
      <span className="group/status-toggle pointer-events-auto inline-flex">
        {
          <AutomationsLayoutHelper29
            {...{
              label: lanthan.pause,
              onClick: praseo,
              children: neodym,
            }}
          />
        }
      </span>
    );
    antimony = prometh;
  } else {
    let samarium;
    samarium = (
      <AppIconUg
        {...{
          className: "icon-sm shrink-0 text-token-description-foreground",
        }}
      />
    );
    antimony = samarium;
  }
  let europium =
      isPaused && !isSelected
        ? "opacity-60 hover:opacity-100 focus-within:opacity-100"
        : null,
    gadolin = cx("automation-row", europium);
  let terbium = () => {
    onSelect(automation);
  };
  let dyspros =
    hasUnreadRuns || managementActions != null ? (
      <span className="relative inline-flex min-w-16 items-center justify-end">
        {hasUnreadRuns ? (
          <span className="flex group-focus-within:opacity-0 group-hover:opacity-0 group-has-[[data-state=open]]:opacity-0">
            {
              <ShallowClonePlainOrArray
                {...{
                  statusState: {
                    type: "idle",
                    unread: true,
                  },
                }}
              />
            }
          </span>
        ) : null}
        {managementActions == null ? null : (
          <span className="pointer-events-none absolute right-0 inline-flex items-center justify-end opacity-0 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100 has-[[data-state=open]]:pointer-events-auto has-[[data-state=open]]:opacity-100">
            {
              <DropdownMenuPopover
                {...{
                  align: "end",
                  contentWidth: "xs",
                  triggerButton: (
                    <RevealInFileManagerButton
                      {...{
                        className:
                          "text-token-description-foreground hover:text-token-foreground data-[state=open]:text-token-foreground",
                        iconClassName: "icon-xs",
                        label: rhodium.formatMessage(lanthan.moreActions),
                        size: "toolbar",
                      }}
                    />
                  ),
                  children: [
                    <DropdownMenu.Item
                      {...{
                        disabled: managementActions.isRunNowPending,
                        LeftIcon: ensurePlayOutlineIconInit,
                        leftIconClassName: "icon-xs",
                        onSelect: () => {
                          managementActions.onRun(automation);
                        },
                        children: (
                          <MemoizedFormattedMessage
                            {...{
                              ...lanthan.runNow,
                            }}
                          />
                        ),
                      }}
                    />,
                    <DropdownMenu.Item
                      {...{
                        LeftIcon: isPaused ? AppIconDk : AppIconkk,
                        leftIconClassName: "icon-xs",
                        onSelect: () => {
                          isPaused
                            ? managementActions.onResume(automation)
                            : managementActions.onPause(automation);
                        },
                        children: (
                          <MemoizedFormattedMessage
                            {...{
                              ...(isPaused ? lanthan.resume : lanthan.pause),
                            }}
                          />
                        ),
                      }}
                    />,
                    managementActions.onDelete == null ? null : (
                      <DropdownMenu.Item
                        {...{
                          className: "!text-token-error-foreground",
                          LeftIcon: AppIconBO,
                          leftIconClassName: "icon-xs",
                          onSelect: () => {
                            managementActions.onDelete?.(automation);
                          },
                          children: (
                            <MemoizedFormattedMessage
                              {...{
                                ...lanthan.delete,
                              }}
                            />
                          ),
                        }}
                      />
                    ),
                  ],
                }}
              />
            }
          </span>
        )}
      </span>
    ) : undefined;
  let holmium = scheduleLabel ? <span>{scheduleLabel}</span> : null;
  let erbium = indium && scheduleLabel ? <BulletSeparator /> : null;
  let thulium = isInProgress ? (
    <ThinkingShimmerMessage
      {...{
        className: "text-token-description-foreground",
        message: (
          <MemoizedFormattedMessage
            {...{
              id: "inbox.automations.inProgress",
              defaultMessage: "In progress",
              description: "Label for an automation that is currently running",
            }}
          />
        ),
      }}
    />
  ) : null;
  let ytterb =
    !isInProgress && !isPaused && automation.nextRunAt != null ? (
      <span className="inline-flex gap-1">
        {
          <MemoizedFormattedMessage
            {...{
              id: "inbox.automations.nextRunRelative",
              defaultMessage: "Next run",
              description:
                "Label before the relative time until the next scheduled task run",
            }}
          />
        }
        <span className="sr-only">
          {
            <MemoizedFormattedMessage
              {...{
                id: "inbox.automations.nextRunRelativeSeparator",
                defaultMessage: ", ",
                description:
                  "Accessible separator before a scheduled task's relative next run time",
              }}
            />
          }
        </span>
        {
          <RelativeDateStringLabel
            {...{
              dateString: new Date(automation.nextRunAt).toISOString(),
            }}
          />
        }
      </span>
    ) : null;
  let lutetium =
    isPaused && managementActions == null ? (
      <MemoizedFormattedMessage
        {...{
          id: "inbox.automations.pausedRowStatus",
          defaultMessage: "Paused",
          description:
            "Visible status for a paused scheduled task in a navigation-only row",
        }}
      />
    ) : null;
  let hafnium =
    isPaused && managementActions != null ? (
      <span className="sr-only">
        {
          <MemoizedFormattedMessage
            {...{
              id: "inbox.automations.pausedRowDescription",
              defaultMessage: ", Paused",
              description:
                "Accessible status appended to a paused scheduled task's schedule",
            }}
          />
        }
      </span>
    ) : null;
  let tantalum =
    secondLineAdornment != null && (scheduleLabel || indium) ? (
      <BulletSeparator />
    ) : null;
  let tungsten = (
    <span id={palladium} className="inline-flex items-center gap-1.5">
      {holmium}
      {erbium}
      {thulium}
      {ytterb}
      {lutetium}
      {hafnium}
      {tantalum}
      {secondLineAdornment}
    </span>
  );
  return (
    <EnsureSelectableListRowInit
      {...{
        ariaDescribedBy: palladium,
        ariaLabel: displayName,
        className: gadolin,
        compactSecondLine: true,
        hasInteractiveContent: true,
        icon: antimony,
        isSelected,
        onSelect: terbium,
        rightText: dyspros,
        rightTextPosition: "center",
        secondLine: tungsten,
        title: displayName,
      }}
    />
  );
}
function AutomationsLayoutHelper29(rhenium) {
  let { children, label, onClick } = rhenium,
    osmium = useIntl(),
    iridium = (
      <MemoizedFormattedMessage
        {...{
          ...label,
        }}
      />
    );
  let platinum = osmium.formatMessage(label);
  let mercury = <span className="inline-flex">{children}</span>;
  let thallium = (
    <Button
      {...{
        "aria-label": platinum,
        className:
          "text-token-description-foreground hover:text-token-foreground",
        color: "ghostTertiary",
        size: "iconMd",
        uniform: true,
        onClick,
        children: mercury,
      }}
    />
  );
  return (
    <OptionalTooltip
      {...{
        tooltipContent: iridium,
        children: thallium,
      }}
    />
  );
}
var bismuth,
  cadmium,
  polonium,
  lanthan,
  $i = esmInit(() => {
    bismuth = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    cadmium = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    applyRoundedFull();
    Button();
    ensureDropdownMenuInit();
    ensureImportSettingsCLInit();
    workspaceRootFinderMessages();
    ensureSelectableListRowActivationInit();
    ensureComposerEsm_Sut_Init();
    ensureComposerEsm_Hlt_Init();
    escapeRegExp();
    inProgress();
    deferredUiOk();
    PlayOutlineIcon();
    AppInitialVO();
    AppInitialWg();
    ensureComposerEsm_Sp_Init();
    lanthan = identity({
      runNow: {
        id: "settings.automations.runNow",
        defaultMessage: "Run now",
        description: "Button label for running an automation immediately",
      },
      pause: {
        id: "inbox.automations.pauseTooltip",
        defaultMessage: "Pause",
        description: "Tooltip label for pausing an automation",
      },
      resume: {
        id: "inbox.automations.resumeTooltip",
        defaultMessage: "Resume",
        description: "Tooltip label for resuming an automation",
      },
      delete: {
        id: "inbox.automations.deleteTooltip",
        defaultMessage: "Delete",
        description: "Tooltip label for deleting an automation",
      },
      moreActions: {
        id: "inbox.automations.moreActions",
        defaultMessage: "Scheduled task actions",
        description: "Accessible label for a scheduled task's actions menu",
      },
    });
  });
function AutomationsLayoutHelper30(astatine, francium) {
  let radium = AutomationsLayoutHelper31(astatine);
  return (
    radium.length === 0 ||
    AutomationsLayoutHelper31(francium.join(" ")).includes(radium)
  );
}
function AutomationsLayoutHelper31(actinium) {
  return actinium.toLocaleLowerCase().replace(/\s+/g, " ").trim();
}
var thorium = esmInit(() => {});
