// Restored from ref/webview/assets/automations-page-BWCJI7AO.js
// Stage 3 deep fill from `automations-page-BWCJI7AO/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 68 (verified 179/247).
// JSX calls converted: 228; mechanical renames: 624.
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 13/13
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

const $r: any = undefined;
const AppInitialNu: any = undefined;
const AppInitialOZ: any = undefined;
const AppInitialPs: any = undefined;
const AppInitialS: any = undefined;
const AppInitialVO: any = undefined;
const AppInitialVr: any = undefined;
const AppInitialYo: any = undefined;
const DeferredBu: any = undefined;
const DeferredUiYO2: any = undefined;
const Models: any = undefined;
const RevealInFileManagerButton: any = undefined;
const cedar: any = undefined;
const deferredPluginsKu: any = undefined;
const deferredUiCm: any = undefined;
const deferredUiOk: any = undefined;
const deferredUiWX: any = undefined;
const delta2: any = undefined;
const echo2: any = undefined;
const ensureSelectWorkspaceNstInit: any = undefined;
const glen: any = undefined;
const ink: any = undefined;
const juliet: any = undefined;
const lattice: any = undefined;
const matrix: any = undefined;
const romeo: any = undefined;
const settingsAutomationsSaveTooltipRequirements: any = undefined;
const signal: any = undefined;
const techne: any = undefined;
const unit: any = undefined;
const userMessage2: any = undefined;
const yankee: any = undefined;
const zinc: any = undefined;
const zinc2: any = undefined;

function AutomationsLayoutHelper42(autoSlot563) {
  let {
      isPaused,
      isDeleting,
      isRetrySavePending,
      isRunNowPending,
      isSaveRetryVisible,
      showResetToPluginDefaults,
      isResetToPluginDefaultsDisabled,
      isUsingPluginDefaults,
      onDelete,
      onPause,
      onRetrySave,
      onResetToPluginDefaults,
      onResume,
      onRunNow,
    } = autoSlot563,
    autoSlot564 = useIntl(),
    autoSlot565 = isSaveRetryVisible ? (
      <Button
        {...{
          size: "toolbar",
          color: "primary",
          disabled: isRetrySavePending,
          loading: isRetrySavePending,
          onClick: onRetrySave,
          children: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.automations.saveRetry",
                defaultMessage: "Retry save",
                description:
                  "Button label for retrying a failed automation save",
              }}
            />
          ),
        }}
      />
    ) : null;
  let autoSlot566 = autoSlot564.formatMessage({
    id: "settings.automations.actionsAria",
    defaultMessage: "Scheduled task actions",
    description: "Accessible label for the scheduled task actions menu",
  });
  let autoSlot567 = (
    <RevealInFileManagerButton
      {...{
        label: autoSlot566,
        size: "toolbar",
      }}
    />
  );
  let autoSlot568 = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.automations.runNow",
        defaultMessage: "Run now",
        description: "Button label for running an automation immediately",
      }}
    />
  );
  let autoSlot569 = (
    <DropdownMenu.Item
      {...{
        disabled: isRunNowPending,
        LeftIcon: ensurePlayOutlineIconInit,
        leftIconClassName: "icon-xs",
        onSelect: onRunNow,
        children: autoSlot568,
      }}
    />
  );
  let autoSlot570 = showResetToPluginDefaults ? (
    <DropdownMenu.Item
      {...{
        disabled: isResetToPluginDefaultsDisabled,
        LeftIcon: AppIconJO,
        leftIconClassName: "icon-xs",
        tooltipText: isUsingPluginDefaults ? (
          <MemoizedFormattedMessage
            {...{
              id: "settings.automations.resetToPluginDefaults.alreadyDefault",
              defaultMessage: "Already using plugin defaults",
              description:
                "Tooltip shown when a scheduled task already matches its plugin template defaults",
            }}
          />
        ) : undefined,
        onSelect: onResetToPluginDefaults,
        children: (
          <MemoizedFormattedMessage
            {...{
              id: "settings.automations.resetToPluginDefaults",
              defaultMessage: "Reset to plugin defaults",
              description:
                "Menu item for resetting a scheduled task to its plugin template defaults",
            }}
          />
        ),
      }}
    />
  ) : null;
  let autoSlot571 = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.automations.delete",
        defaultMessage: "Delete",
        description: "Menu item for deleting a scheduled task",
      }}
    />
  );
  let autoSlot572 = (
    <DropdownMenu.Item
      {...{
        className: "!text-token-error-foreground",
        disabled: isDeleting,
        LeftIcon: AppIconBO,
        leftIconClassName: "icon-xs",
        onSelect: onDelete,
        children: autoSlot571,
      }}
    />
  );
  let autoSlot573 = (
    <DropdownMenuPopover
      {...{
        align: "end",
        contentWidth: "xs",
        triggerButton: autoSlot567,
        children: [autoSlot569, autoSlot570, autoSlot572],
      }}
    />
  );
  let autoSlot574 = isPaused ? (
    <Button
      {...{
        size: "toolbar",
        color: "ghost",
        uniform: true,
        onClick: onResume,
        "aria-label": autoSlot564.formatMessage({
          id: "settings.automations.resumeAria",
          defaultMessage: "Resume scheduled task",
          description: "Aria label for resuming a scheduled task",
        }),
        children: (
          <AppIconDk
            {...{
              className: "icon-sm",
            }}
          />
        ),
      }}
    />
  ) : (
    <Button
      {...{
        size: "toolbar",
        color: "ghost",
        uniform: true,
        onClick: onPause,
        "aria-label": autoSlot564.formatMessage({
          id: "settings.automations.pauseAria",
          defaultMessage: "Pause scheduled task",
          description: "Aria label for pausing a scheduled task",
        }),
        children: (
          <AppIconkk
            {...{
              className: "icon-sm",
            }}
          />
        ),
      }}
    />
  );
  return (
    <div className="flex items-center gap-2">
      {autoSlot565}
      {autoSlot573}
      {autoSlot574}
    </div>
  );
}
function AutomationsLayoutHelper43(autoSlot575) {
  return autoSlot575.status === "DELETED" ? null : autoSlot575;
}
function AutomationsLayoutHelper44(autoSlot576) {
  if (typeof autoSlot576 != "object" || !autoSlot576) return null;
  let autoSlot577,
    autoSlot578 = null;
  if ("previousAutomations" in autoSlot576) {
    let autoSlot579 = autoSlot576.previousAutomations;
    typeof autoSlot579 == "object" &&
      autoSlot579 &&
      "items" in autoSlot579 &&
      Array.isArray(autoSlot579.items) &&
      (autoSlot577 = {
        items: autoSlot579.items,
      });
  }
  if ("previousDraftStatus" in autoSlot576) {
    let autoSlot580 = autoSlot576.previousDraftStatus;
    autoSlot580 === "ACTIVE" ||
    autoSlot580 === "PAUSED" ||
    autoSlot580 === "DELETED"
      ? (autoSlot578 = autoSlot580)
      : (autoSlot580 ?? (autoSlot578 = null));
  }
  return autoSlot577 == null && autoSlot578 == null
    ? null
    : {
        previousAutomations: autoSlot577,
        previousDraftStatus: autoSlot578,
      };
}
function AutomationsLayoutHelper45({ status, success }) {
  let autoSlot581;
  if (
    (status === "deleted"
      ? (autoSlot581 =
          CodexAutomationDeleteStatus.CODEX_AUTOMATION_DELETE_STATUS_DELETED)
      : status === "not_found" &&
        (autoSlot581 =
          CodexAutomationDeleteStatus.CODEX_AUTOMATION_DELETE_STATUS_NOT_FOUND),
    success || status === "deleted")
  )
    return autoSlot581 == null
      ? {}
      : {
          deleteStatus: autoSlot581,
        };
  switch (status) {
    case "not_found":
      return {
        deleteStatus: autoSlot581,
        failureReason:
          CodexAutomationFailureReason.CODEX_AUTOMATION_FAILURE_REASON_MISSING_AUTOMATION,
      };
    case "invalid_id":
      return {
        failureReason:
          CodexAutomationFailureReason.CODEX_AUTOMATION_FAILURE_REASON_INVALID_ID,
      };
    case "store_unavailable":
      return {
        failureReason:
          CodexAutomationFailureReason.CODEX_AUTOMATION_FAILURE_REASON_STORAGE_UNAVAILABLE,
      };
    case "state_cleanup_failed":
      return {
        failureReason:
          CodexAutomationFailureReason.CODEX_AUTOMATION_FAILURE_REASON_STATE_CLEANUP_FAILED,
      };
    case "remove_failed":
      return {
        failureReason:
          CodexAutomationFailureReason.CODEX_AUTOMATION_FAILURE_REASON_REMOVE_FAILED,
      };
  }
}
var autoSlot582, autoSlot360, cascade, $, autoSlot514;
esmInit(() => {
  autoSlot582 = reactCompilerRuntime();
  subagentActivityMessages();
  ensureConversationPageEsm_pvt_Init();
  ensureComposerEsm_Tft_Init();
  ensureSkillsPageHelpersInit();
  autoSlot360 = commonJsInit(ensureSelectWorkspaceNstInit(), 1);
  ensureAppScopeHostInit();
  ensureAppShellAtomsInit();
  cascade = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureComposerEsm_P5_Init();
  deferredPluginsKu();
  deferredUiWX();
  ensureAppShellAtomsInit();
  ensureDesktopHostRequestInit();
  inProgress2();
  cedar();
  zinc();
  settingsAutomationsSaveTooltipRequirements();
  $r();
  ink();
  AppInitialS();
  DeferredBu();
  AppInitialNu();
  identity();
  glen();
  signal();
  AppInitialVr();
  unit();
  AppInitialPs();
  ensureUsePluginScheduledTasksInit();
  ensureConversationPageEsm_GZ_Init();
  AppInitialOZ();
  Button();
  Zlt();
  ensureComposerEsm_YS_Init();
  ensureComposerEsm_GS_Init();
  ensureDropdownMenuInit();
  ensureImportSettingsCLInit();
  ensureSkillsPageHelpersInit();
  workspaceRootFinderMessages();
  deferredUiCm();
  skeletonTitleWidthPresets();
  ensureComposerEsm_Sut_Init();
  ensureComposerEsm_Ilt_Init();
  ensureComposerEsm_Hlt_Init();
  SelectableListRow();
  useDebouncedValue();
  ensureSkillsPageHelpersInit();
  AppInitialYo();
  DeferredUiYO2();
  deferredUicz();
  inProgress();
  deferredUiOk();
  PlayOutlineIcon();
  AppInitialVO();
  userMessage2();
  ensureInstalledPluginsQueryInit();
  isThreadNeedsResumeActive();
  Models();
  ensureAppScopeInit();
  ensureComposerEsm_b8_Init();
  ensureHomeDirectoryQueriesInit();
  ensureComposerEsm_F7_Init();
  ensureAppShellAtomsInit();
  ensureConversationPageEsm_xB_Init();
  ensureComposerEsm_tlt_Init();
  ensureUseDebouncedValueInit();
  ensureComposerEsm_ML_Init();
  ensureSettingsQueryAtomsInit();
  delta2();
  echo2();
  juliet();
  romeo();
  yankee();
  zinc2();
  techne();
  lattice();
  matrix();
  autoSlot514 = "automation-form";
})();
