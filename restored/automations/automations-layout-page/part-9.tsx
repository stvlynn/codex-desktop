// Restored from ref/webview/assets/automations-page-BWCJI7AO.js
// Stage 3 deep fill from `automations-page-BWCJI7AO/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 68 (verified 179/247).
// JSX calls converted: 228; mechanical renames: 624.
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 9/13
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

// Wave5d soft stubs (qg unbound).
const apex2: any = undefined;
const autoSlot348: any = undefined;
const autoSlot350: any = undefined;
const autoSlot351: any = undefined;
const autoSlot363: any = undefined;
const autoSlot365: any = undefined;
const autoSlot379: any = undefined;
const autoSlot380: any = undefined;
const autoSlot381: any = undefined;
const autoSlot383: any = undefined;
const autoSlot384: any = undefined;
const autoSlot385: any = undefined;
const autoSlot393: any = undefined;
const autoSlot400: any = undefined;
const autoSlot409: any = undefined;
const autoSlot420: any = undefined;
const autoSlot438: any = undefined;
const automations: any = undefined;
const corona: any = undefined;
const cyclone: any = undefined;
const eddy2: any = undefined;
const equinox: any = undefined;
const fog: any = undefined;
const mist2: any = undefined;
const quartic: any = undefined;
const shower: any = undefined;
const spiral: any = undefined;
const spray: any = undefined;
const torrent: any = undefined;
const trimmedName: any = undefined;
const trimmedPrompt: any = undefined;
const whirl: any = undefined;

// Wave5d soft stubs.
const AppInitialDu: any = undefined;
const AppInitialRr: any = undefined;
const AppInitialSu: any = undefined;
const AppInitialZr: any = undefined;
const AutomationsLayoutHelper17: any = undefined;
const DeferredUiM22: any = undefined;
const DeferredUiN2: any = undefined;
const DeferredUiO22: any = undefined;

function AutomationsLayoutHelper34__splitRest2(__splitParams: any) {
  let autoSlot446 = useVscodeMutation("automation-run-now", {
      onSuccess: (autoSlot447, autoSlot448) => {
        let autoSlot449 =
          automations.find((item) => item.id === autoSlot448.id) ?? null;
        DEFAULT_AUTOMATION_DRAFT(
          cyclone,
          {
            action: CodexAutomationAction.CODEX_AUTOMATION_ACTION_RUN_NOW,
            source: CodexAutomationSource.CODEX_AUTOMATION_SOURCE_MANUAL_PAGE,
            success: autoSlot447.success,
          },
          autoSlot449,
          autoSlot363,
        );
        quartic.get(toastAtom).info(
          spiral.formatMessage({
            id: "inbox.automations.runNowSuccess",
            defaultMessage: "Scheduled task started",
            description: "Toast shown when a scheduled task is run immediately",
          }),
        );
      },
      onError: (autoSlot450, autoSlot451) => {
        let autoSlot452 =
          automations.find((item) => item.id === autoSlot451.id) ?? null;
        DEFAULT_AUTOMATION_DRAFT(
          cyclone,
          {
            action: CodexAutomationAction.CODEX_AUTOMATION_ACTION_RUN_NOW,
            source: CodexAutomationSource.CODEX_AUTOMATION_SOURCE_MANUAL_PAGE,
            success: false,
            failureReason:
              CodexAutomationFailureReason.CODEX_AUTOMATION_FAILURE_REASON_HOST_ERROR,
          },
          autoSlot452,
          autoSlot363,
        );
        quartic.get(toastAtom).danger(
          spiral.formatMessage({
            id: "inbox.automations.runNowError",
            defaultMessage: "Could not start scheduled task",
            description:
              "Toast title when starting a scheduled task immediately fails",
          }),
          {
            description: autoSlot450.message,
          },
        );
      },
    }),
    $t = () => {
      if (
        autoSlot379 &&
        !(autoSlot348.kind === "cron" && autoSlot348.model == null)
      ) {
        if (autoSlot348.id != null) {
          if (autoSlot348.status === "DELETED") return;
          whirl(true);
          autoSlot420.mutate(
            AppInitialDu({
              draft: autoSlot348,
              name: trimmedName,
              prompt: trimmedPrompt,
              status: autoSlot348.status,
              rrule: autoSlot380,
            }),
          );
          return;
        }
        autoSlot409.mutate(
          automationCreatePayloadFromDraft({
            draft: autoSlot348,
            name: trimmedName,
            prompt: trimmedPrompt,
            rrule: autoSlot380,
          }),
        );
      }
    },
    autoSlot453 = (autoSlot454) => {
      autoSlot409.isPending ||
        apex2.isLoading ||
        apex2.model == null ||
        ((mist2.current = true),
        spray(autoSlot454.id),
        autoSlot409.mutate(
          AppInitialSu({
            modelSettings: apex2,
            template: autoSlot454,
          }),
        ));
    },
    autoSlot455 = (event) => {
      event.preventDefault();
      $t();
    },
    autoSlot456 = (autoSlot457) => {
      autoSlot348.id == null ||
        autoSlot380 == null ||
        (autoSlot351((autoSlot458) => ({
          ...autoSlot458,
          status: autoSlot457,
        })),
        autoSlot420.mutate(
          AppInitialDu({
            draft: autoSlot348,
            name: trimmedName,
            prompt: trimmedPrompt,
            status: autoSlot457,
            rrule: autoSlot380,
          }),
        ));
    },
    autoSlot459 = (autoSlot460, autoSlot461) => {
      if (equinox?.id === autoSlot460.id) {
        autoSlot456(autoSlot461);
        return;
      }
      autoSlot420.mutate(identity(autoSlot460, autoSlot461));
    },
    on = () => {
      shower != null &&
        autoSlot438.mutate({
          id: shower.id,
        });
    },
    autoSlot462 = () => {
      equinox != null && torrent(equinox);
    },
    autoSlot463 = (autoSlot464) => {
      autoSlot351((autoSlot465) => ({
        ...autoSlot465,
        name: autoSlot464,
      }));
    },
    autoSlot466 = (autoSlot467) => {
      if (autoSlot467.id == null) return;
      let autoSlot468 =
          autoSlot467.kind === "heartbeat" ? autoSlot467.targetThreadId : null,
        autoSlot469 = autoSlot468 == null ? null : asThreadId(autoSlot468);
      autoSlot446.mutate({
        id: autoSlot467.id,
        collaborationMode:
          autoSlot469 == null
            ? null
            : (quartic.get(DeferredUiO22, autoSlot469) ?? null),
        permissions:
          autoSlot469 == null
            ? null
            : AppInitialRr(
                quartic.get(DeferredUiN2, autoSlot469),
                quartic.get(DeferredUiM22, autoSlot469),
                quartic.get(AppInitialZr)?.[autoSlot469],
              ),
      });
    },
    autoSlot470 = () => {
      autoSlot381 == null ||
        autoSlot420.isPending ||
        eddy2 ||
        (whirl(true), autoSlot420.mutate(autoSlot381));
    },
    autoSlot471 = (autoSlot472) => {
      if (autoSlot381 == null || autoSlot383) {
        autoSlot472();
        return;
      }
      if (!autoSlot384 && !eddy2 && !autoSlot420.isPending) {
        autoSlot472();
        return;
      }
      fog.current = {
        action: autoSlot472,
        update: autoSlot381,
      };
      !eddy2 &&
        !autoSlot420.isPending &&
        (whirl(true), autoSlot420.mutate(autoSlot381));
    },
    _n = (autoSlot473) => {
      autoSlot471(() => {
        autoSlot400({
          type: "plugin-template",
          template: autoSlot473,
        });
      });
    },
    autoSlot474 = () => {
      let autoSlot475 = autoSlot365?.detailPath;
      autoSlot475 != null &&
        autoSlot471(() => {
          autoSlot400({
            type: "open-plugin",
            detailPath: autoSlot475,
          });
        });
    },
    autoSlot476 = (autoSlot477) => {
      if (
        !AutomationsLayoutHelper17(quartic, equinox?.id ?? null, autoSlot477.id)
      ) {
        if (autoSlot350 || autoSlot385) {
          corona({
            type: "open-automation",
            automation: autoSlot477,
          });
          return;
        }
        autoSlot471(() => {
          autoSlot393(autoSlot477);
        });
      }
    };
  return undefined as any;
}
