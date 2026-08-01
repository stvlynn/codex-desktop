// Restored from ref/webview/assets/automations-page-BWCJI7AO.js
// Stage 3 deep fill from `automations-page-BWCJI7AO/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 68 (verified 179/247).
// JSX calls converted: 228; mechanical renames: 624.
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 8/13
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
} from "../../composer/composer-appscope-atoms";
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
} from "../../composer/composer-esm-inits";
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

// Wave5d soft stubs (qg unbound).
const autoSlot348: any = undefined;
const autoSlot351: any = undefined;
const autoSlot363: any = undefined;
const autoSlot389: any = undefined;
const autoSlot397: any = undefined;
const autoSlot408: any = undefined;
const automations: any = undefined;
const blizzard: any = undefined;
const breaker: any = undefined;
const corona: any = undefined;
const cyclone: any = undefined;
const data: any = undefined;
const drizzle: any = undefined;
const eclipse: any = undefined;
const fog: any = undefined;
const mist2: any = undefined;
const nadir: any = undefined;
const quartic: any = undefined;
const spiral: any = undefined;
const spray: any = undefined;
const tempest: any = undefined;
const torrent: any = undefined;
const vertex: any = undefined;
const whirl: any = undefined;

// Wave5d soft stubs.
const AppInitialCu: any = undefined;
const AppInitialVu: any = undefined;
const AutomationsLayoutHelper43: any = undefined;
const AutomationsLayoutHelper44: any = undefined;
const AutomationsLayoutHelper45: any = undefined;

function AutomationsLayoutHelper34__splitRest1(__splitParams: any) {
  let autoSlot409 = useVscodeMutation("automation-create", {
      onSuccess: (autoSlot410) => {
        let autoSlot411 = mist2.current;
        if (
          ((mist2.current = false),
          spray(null),
          DEFAULT_AUTOMATION_DRAFT(
            cyclone,
            {
              action: CodexAutomationAction.CODEX_AUTOMATION_ACTION_CREATED,
              source: autoSlot411
                ? CodexAutomationSource.CODEX_AUTOMATION_SOURCE_SUGGESTED_CARD
                : CodexAutomationSource.CODEX_AUTOMATION_SOURCE_MANUAL_PAGE,
              success: true,
            },
            autoSlot410.item,
            autoSlot363,
          ),
          tempest.setQueryData(
            buildVscodeQueryKey("list-automations"),
            (autoSlot412) =>
              autoSlot412 == null
                ? {
                    items: [autoSlot410.item],
                  }
                : {
                    items: autoSlot412.items.some(
                      (item) => item.id === autoSlot410.item.id,
                    )
                      ? autoSlot412.items.map((item) =>
                          item.id === autoSlot410.item.id
                            ? autoSlot410.item
                            : item,
                        )
                      : [...autoSlot412.items, autoSlot410.item],
                  },
          ),
          autoSlot408(),
          vertex != null &&
            nadir({
              directiveKey: vertex.directiveKey,
              automationId: autoSlot410.item.id,
            }),
          autoSlot411)
        ) {
          logProductEvent(quartic, CODEX_AUTOMATION_CREATED_TYPE, {});
          return;
        }
        autoSlot389(AppInitialCu(autoSlot410.item, data?.models));
        corona(null);
        let autoSlot413 = new URLSearchParams(blizzard);
        autoSlot413.delete("tab");
        autoSlot413.delete("automationMode");
        autoSlot413.set("automationId", autoSlot410.item.id);
        drizzle(autoSlot413, {
          replace: true,
          state: null,
        });
        logProductEvent(quartic, CODEX_AUTOMATION_CREATED_TYPE, {});
      },
      onError: (autoSlot414, autoSlot415) => {
        let autoSlot416 = mist2.current;
        mist2.current = false;
        spray(null);
        DEFAULT_AUTOMATION_DRAFT(
          cyclone,
          {
            action: CodexAutomationAction.CODEX_AUTOMATION_ACTION_CREATED,
            source: autoSlot416
              ? CodexAutomationSource.CODEX_AUTOMATION_SOURCE_SUGGESTED_CARD
              : CodexAutomationSource.CODEX_AUTOMATION_SOURCE_MANUAL_PAGE,
            success: false,
            failureReason:
              CodexAutomationFailureReason.CODEX_AUTOMATION_FAILURE_REASON_HOST_ERROR,
          },
          autoSlot415,
          autoSlot363,
        );
        quartic.get(toastAtom).danger(
          spiral.formatMessage({
            id: "inbox.automations.createError",
            defaultMessage: "Could not create scheduled task",
            description: "Toast title when creating a scheduled task fails",
          }),
          {
            description: autoSlot414.message,
          },
        );
      },
    }),
    autoSlot417 = (autoSlot418) => {
      let autoSlot419 = fog.current;
      if (autoSlot419 == null) {
        whirl(false);
        return;
      }
      if (!AppInitialVu(autoSlot419.update, autoSlot418)) {
        autoSlot420.mutate(autoSlot419.update);
        return;
      }
      fog.current = null;
      whirl(false);
      autoSlot419.action();
    },
    autoSlot420 = useVscodeMutation("automation-update", {
      onMutate: (autoSlot421) => {
        let autoSlot422 = buildVscodeQueryKey("list-automations"),
          autoSlot423 = tempest.getQueryData(autoSlot422),
          autoSlot424 =
            autoSlot348.id === autoSlot421.id ? autoSlot348.status : null;
        return (
          tempest.setQueryData(autoSlot422, (autoSlot425) =>
            autoSlot425 == null
              ? autoSlot425
              : {
                  items: autoSlot425.items.map((item) => {
                    if (item.id !== autoSlot421.id) return item;
                    let { notificationPolicy, ...rest } = autoSlot421,
                      autoSlot426 =
                        notificationPolicy === undefined
                          ? item.notificationPolicy
                          : notificationPolicy,
                      autoSlot427 =
                        rest.status === "PAUSED" ? null : item.nextRunAt;
                    return rest.kind === "heartbeat"
                      ? {
                          ...rest,
                          ...(autoSlot426 == null
                            ? {}
                            : {
                                notificationPolicy: autoSlot426,
                              }),
                          nextRunAt: autoSlot427,
                          lastRunAt: item.lastRunAt,
                          createdAt: item.createdAt,
                          updatedAt: item.updatedAt,
                        }
                      : {
                          ...rest,
                          ...(autoSlot426 == null
                            ? {}
                            : {
                                notificationPolicy: autoSlot426,
                              }),
                          pluginTemplateId:
                            item.kind === "cron" ? item.pluginTemplateId : null,
                          target:
                            rest.projectId == null
                              ? {
                                  type: "projectless",
                                }
                              : {
                                  type: "project",
                                  projectId: rest.projectId,
                                },
                          cwds: item.kind === "cron" ? item.cwds : [],
                          localEnvironmentConfigPath:
                            rest.localEnvironmentConfigPath === undefined
                              ? item.kind === "cron"
                                ? item.localEnvironmentConfigPath
                                : null
                              : rest.localEnvironmentConfigPath,
                          nextRunAt: autoSlot427,
                          lastRunAt: item.lastRunAt,
                          createdAt: item.createdAt,
                          updatedAt: item.updatedAt,
                        };
                  }),
                },
          ),
          {
            previousAutomations: autoSlot423,
            previousDraftStatus: autoSlot424,
          }
        );
      },
      onSuccess: (autoSlot428, autoSlot429) => {
        DEFAULT_AUTOMATION_DRAFT(
          cyclone,
          {
            action: CodexAutomationAction.CODEX_AUTOMATION_ACTION_UPDATED,
            source: CodexAutomationSource.CODEX_AUTOMATION_SOURCE_MANUAL_PAGE,
            success: true,
          },
          autoSlot428.item,
          autoSlot363,
        );
        breaker.current = null;
        tempest.setQueryData(
          buildVscodeQueryKey("list-automations"),
          (autoSlot430) =>
            autoSlot430 == null
              ? autoSlot430
              : {
                  items: autoSlot430.items.map((item) =>
                    item.id === autoSlot428.item.id ? autoSlot428.item : item,
                  ),
                },
        );
        autoSlot408();
        autoSlot417(autoSlot429);
        logProductEvent(quartic, CODEX_AUTOMATION_UPDATED_TYPE, {});
      },
      onError: (autoSlot431, autoSlot432, autoSlot433) => {
        let autoSlot434 = automations.find(
          (item) => item.id === autoSlot432.id,
        );
        DEFAULT_AUTOMATION_DRAFT(
          cyclone,
          {
            action: CodexAutomationAction.CODEX_AUTOMATION_ACTION_UPDATED,
            source: CodexAutomationSource.CODEX_AUTOMATION_SOURCE_MANUAL_PAGE,
            success: false,
            failureReason:
              autoSlot431.message ===
              "Automation does not exist in the app and could not be updated. It may have been deleted manually by the user."
                ? CodexAutomationFailureReason.CODEX_AUTOMATION_FAILURE_REASON_MISSING_AUTOMATION
                : CodexAutomationFailureReason.CODEX_AUTOMATION_FAILURE_REASON_HOST_ERROR,
          },
          autoSlot432,
          autoSlot363,
          autoSlot434 ?? null,
        );
        let autoSlot435 = AutomationsLayoutHelper44(autoSlot433);
        breaker.current = AutomationsLayoutHelper43(autoSlot432);
        let autoSlot436 = autoSlot435?.previousDraftStatus;
        autoSlot435?.previousAutomations != null &&
          tempest.setQueryData(
            buildVscodeQueryKey("list-automations"),
            autoSlot435.previousAutomations,
          );
        autoSlot436 != null &&
          autoSlot348.id === autoSlot432.id &&
          autoSlot351((autoSlot437) => ({
            ...autoSlot437,
            status: autoSlot436,
          }));
        fog.current = null;
        whirl(false);
        quartic.get(toastAtom).danger(
          spiral.formatMessage({
            id: "inbox.automations.updateError",
            defaultMessage: "Could not update scheduled task",
            description: "Toast title when updating a scheduled task fails",
          }),
          {
            description: autoSlot431.message,
          },
        );
      },
    }),
    autoSlot438 = useVscodeMutation("automation-delete", {
      onSuccess: (autoSlot439, autoSlot440) => {
        let autoSlot441 =
          autoSlot439.item ??
          automations.find((item) => item.id === autoSlot440.id) ??
          null;
        if (
          (DEFAULT_AUTOMATION_DRAFT(
            cyclone,
            {
              action: CodexAutomationAction.CODEX_AUTOMATION_ACTION_DELETED,
              source: CodexAutomationSource.CODEX_AUTOMATION_SOURCE_MANUAL_PAGE,
              success: autoSlot439.success,
              ...AutomationsLayoutHelper45({
                status: autoSlot439.status,
                success: autoSlot439.success,
              }),
            },
            autoSlot441,
            autoSlot363,
          ),
          !autoSlot439.success)
        ) {
          autoSlot408();
          torrent(null);
          quartic.get(toastAtom).danger(
            spiral.formatMessage({
              id: "inbox.automations.deleteError",
              defaultMessage: "Could not delete scheduled task",
              description: "Toast title when deleting a scheduled task fails",
            }),
            {
              description: spiral.formatMessage({
                id: "inbox.automations.deleteFailedTryAgain",
                defaultMessage: "Try again",
                description:
                  "Toast description when deleting an automation fails without a bridge error",
              }),
            },
          );
          return;
        }
        tempest.setQueryData(
          buildVscodeQueryKey("list-automations"),
          (autoSlot442) =>
            autoSlot442 == null
              ? autoSlot442
              : {
                  items: autoSlot442.items.filter(
                    (item) => item.id !== autoSlot440.id,
                  ),
                },
        );
        autoSlot408();
        torrent(null);
        eclipse === autoSlot440.id && autoSlot397();
      },
      onError: (autoSlot443, autoSlot444) => {
        let autoSlot445 =
          automations.find((item) => item.id === autoSlot444.id) ?? null;
        DEFAULT_AUTOMATION_DRAFT(
          cyclone,
          {
            action: CodexAutomationAction.CODEX_AUTOMATION_ACTION_DELETED,
            source: CodexAutomationSource.CODEX_AUTOMATION_SOURCE_MANUAL_PAGE,
            success: false,
            failureReason:
              CodexAutomationFailureReason.CODEX_AUTOMATION_FAILURE_REASON_HOST_ERROR,
          },
          autoSlot445,
          autoSlot363,
        );
        torrent(null);
        quartic.get(toastAtom).danger(
          spiral.formatMessage({
            id: "inbox.automations.deleteError",
            defaultMessage: "Could not delete scheduled task",
            description: "Toast title when deleting a scheduled task fails",
          }),
          {
            description: autoSlot443.message,
          },
        );
      },
    });
  return undefined as any;
}
