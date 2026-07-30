// Restored from ref/webview/assets/automations-page-BWCJI7AO.js
// Stage 3 deep fill from `automations-page-BWCJI7AO/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 68 (verified 179/247).
// JSX calls converted: 228; mechanical renames: 624.
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 11/13
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
} from "../../boundaries/app-scope-runtime";
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
} from "../../boundaries/conversation-page-esm-inits";
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
const AutomationsLayoutHelper15: any = undefined;
const AutomationsLayoutHelper24: any = undefined;
const AutomationsLayoutHelper4: any = undefined;
const AutomationsLayoutHelper9: any = undefined;
const DeferredComposerTu: any = undefined;
const Ui: any = undefined;
const _a: any = undefined;
const autoSlot514: any = undefined;
const cascade: any = undefined;

function AutomationsLayoutHelper37(autoSlot489) {
  let { onBackToAutomations } = autoSlot489,
    autoSlot490 = (
      <MemoizedFormattedMessage
        {...{
          id: "inbox.automations.missingBackToScheduledTasks",
          defaultMessage: "Back to scheduled tasks",
          description:
            "Button label to return to the scheduled tasks list when a scheduled task detail page is missing",
        }}
      />
    );
  let autoSlot491 = (
    <Button
      {...{
        onClick: onBackToAutomations,
        children: autoSlot490,
      }}
    />
  );
  let autoSlot492, autoSlot493;
  autoSlot492 = (
    <MemoizedFormattedMessage
      {...{
        id: "inbox.automations.missingSubtitleDevice",
        defaultMessage:
          "This scheduled task may have been deleted or is no longer available on this device",
        description:
          "Subtitle shown when a scheduled task detail page points to a missing scheduled task",
      }}
    />
  );
  autoSlot493 = (
    <MemoizedFormattedMessage
      {...{
        id: "inbox.automations.missingUnavailable",
        defaultMessage: "Scheduled task unavailable",
        description:
          "Title shown when a scheduled task detail page points to a missing scheduled task",
      }}
    />
  );
  return (
    <AppShellLayout.DetailPanel
      {...{
        showCloseButton: false,
        children: (
          <EmptyState
            {...{
              className: "h-full",
              actions: autoSlot491,
              description: autoSlot492,
              title: autoSlot493,
            }}
          />
        ),
      }}
    />
  );
}
function AutomationsLayoutHelper38(autoSlot494) {
  let {
      canAddSuggestedAutomation,
      creatingAutomationId,
      isLoading,
      headerPlacement,
      pluginIconsById,
      pluginTemplateGroups,
      selectedPluginTemplateId,
      toolbarActions,
      onAddAutomationSuggestion,
      onSelectPluginTemplate,
    } = autoSlot494,
    autoSlot495 = useIntl(),
    [autoSlot496, autoSlot497] = cascade.useState(""),
    autoSlot498 = autoSlot495.formatMessage({
      id: "inbox.automations.search",
      defaultMessage: "Search scheduled tasks",
      description:
        "Accessible label and placeholder for searching scheduled tasks",
    });
  let autoSlot499 = autoSlot498,
    autoSlot500,
    autoSlot501;
  autoSlot500 = (
    <MemoizedFormattedMessage
      {...{
        id: "inbox.mode.automations",
        defaultMessage: "Scheduled tasks",
        description: "Header label for the scheduled tasks view",
      }}
    />
  );
  autoSlot501 = (
    <MemoizedFormattedMessage
      {...{
        id: "inbox.automations.subtitle",
        defaultMessage:
          "Ask ChatGPT to schedule tasks, set reminders, or monitor for updates",
        description: "Subtitle shown at the top of the scheduled tasks page",
      }}
    />
  );
  let autoSlot502 = isLoading
    ? undefined
    : {
        id: "scheduled-page-search",
        label: autoSlot499,
        onSearchQueryChange: autoSlot497,
        placeholder: autoSlot499,
        searchQuery: autoSlot496,
      };
  let autoSlot503 = isLoading ? (
    <DensityLoadingIndicator
      {...{
        loadingLabel: (
          <MemoizedFormattedMessage
            {...{
              id: "inbox.automations.loading",
              defaultMessage: "Loading scheduled tasks",
              description: "Accessible status while scheduled tasks load",
            }}
          />
        ),
      }}
    />
  ) : (
    <AutomationsLayoutHelper9
      {...{
        automations: [],
        canAdd: canAddSuggestedAutomation,
        creatingAutomationId,
        emptyState: <Ui {...{}} />,
        pluginIconsById,
        pluginTemplateGroups,
        searchQuery: autoSlot496,
        selectedPluginTemplateId,
        showDivider: false,
        onAdd: onAddAutomationSuggestion,
        onSelectPluginTemplate,
      }}
    />
  );
  return (
    <SearchableDetailPageLayout
      headerPlacement={headerPlacement}
      headerVariant="inset"
      title={autoSlot500}
      subtitle={autoSlot501}
      search={autoSlot502}
      toolbarActions={toolbarActions}
      toolbarInset={false}
    >
      {autoSlot503}
    </SearchableDetailPageLayout>
  );
}
function AutomationsLayoutHelper39(autoSlot504) {
  let {
      actions,
      banner,
      closeAction,
      detailsTrailing,
      draft,
      setDraft,
      selectedAutomation,
      formatRootLabel,
      workspaceGroups,
      onEditAutomationName,
      onSubmit,
    } = autoSlot504,
    autoSlot505 = useColdNavigate(),
    autoSlot506 = draft.kind === "heartbeat" ? draft.targetThreadId : null,
    autoSlot507;
  bb0: switch (draft.status) {
    case "ACTIVE": {
      let autoSlot508;
      autoSlot508 = (
        <MemoizedFormattedMessage
          {...{
            id: "inbox.automations.status.active",
            defaultMessage: "Active",
            description: "Label for active automation status",
          }}
        />
      );
      autoSlot507 = autoSlot508;
      break bb0;
    }
    case "PAUSED": {
      let autoSlot509;
      autoSlot509 = (
        <span className="text-token-description-foreground">
          {
            <MemoizedFormattedMessage
              {...{
                id: "inbox.automations.status.paused",
                defaultMessage: "Paused",
                description: "Label for paused automation status",
              }}
            />
          }
        </span>
      );
      autoSlot507 = autoSlot509;
      break bb0;
    }
    case "DELETED": {
      let autoSlot510;
      autoSlot510 = (
        <MemoizedFormattedMessage
          {...{
            id: "inbox.automations.status.deleted",
            defaultMessage: "Deleted",
            description: "Label for deleted automation status",
          }}
        />
      );
      autoSlot507 = autoSlot510;
    }
  }
  let autoSlot511 =
    autoSlot506 == null ? null : (
      <div className="flex justify-end">
        {
          <Button
            {...{
              color: "outline",
              size: "toolbar",
              onClick: () => {
                autoSlot505(autoSlot506);
              },
              children: [
                <MemoizedFormattedMessage
                  {...{
                    id: "inbox.automations.targetThread.open",
                    defaultMessage: "Open chat",
                    description:
                      "Button label for opening the chat connected to a heartbeat automation",
                  }}
                />,
                <AppIconsz
                  {...{
                    className: "icon-2xs",
                  }}
                />,
              ],
            }}
          />
        }
      </div>
    );
  let autoSlot512 = (
    <_a
      {...{
        automationId: selectedAutomation.id,
        formatRootLabel,
      }}
    />
  );
  let autoSlot513 = (
    <DeferredComposerTu
      {...{
        afterFrequency: autoSlot512,
        detailsTrailing,
        disablePromptAutoFocus: true,
        draft,
        formId: autoSlot514,
        setDraft,
        workspaceGroups,
        onSubmit,
      }}
    />
  );
  return (
    <AutomationsLayoutHelper15
      {...{
        actions,
        closeAction,
        footer: autoSlot511,
        name: draft.name,
        onNameChange: onEditAutomationName,
        statusLabel: autoSlot507,
        children: [banner, autoSlot513],
      }}
    />
  );
}
function AutomationsLayoutHelper40(autoSlot515) {
  let {
      draft,
      setDraft,
      canSave,
      isSaving,
      workspaceGroups,
      sourcePlugin,
      onEditAutomationName,
      onCreateManually,
      onCreateWithChat,
      onOpenSourcePlugin,
      onCancel,
      onSubmit,
    } = autoSlot515,
    autoSlot516 = useIntl(),
    autoSlot517 = canSave ? undefined : (
      <AutomationSaveRequirementsTooltip draft={draft} />
    );
  let autoSlot518 = autoSlot517,
    autoSlot519 = autoSlot516.formatMessage({
      id: "inbox.automations.create.cancel",
      defaultMessage: "Cancel",
      description: "Label for leaving manual scheduled task creation",
    });
  let autoSlot520 = {
    label: autoSlot519,
    onClose: onCancel,
  };
  let autoSlot521 = !canSave,
    autoSlot522 = (
      <div className="flex justify-end">
        {
          <AutomationsLayoutHelper4
            {...{
              mode: "manual-draft",
              manualDisabled: autoSlot521,
              manualLoading: isSaving,
              manualTooltipContent: autoSlot518,
              chatDisabled: isSaving,
              onCreateManually,
              onCreateWithChat,
            }}
          />
        }
      </div>
    );
  let autoSlot523 = (
    <span className="text-token-description-foreground">
      {
        <MemoizedFormattedMessage
          {...{
            id: "inbox.automations.status.new",
            defaultMessage: "New",
            description:
              "Label shown in the scheduled task detail panel while creating a task",
          }}
        />
      }
    </span>
  );
  let autoSlot524 =
    sourcePlugin == null ? null : (
      <AutomationsLayoutHelper24
        {...{
          sourcePlugin,
          onOpenSourcePlugin,
        }}
      />
    );
  let autoSlot525 = (
    <DeferredComposerTu
      {...{
        detailsTrailing: autoSlot524,
        disablePromptAutoFocus: true,
        draft,
        formId: autoSlot514,
        setDraft,
        workspaceGroups,
        onSubmit,
      }}
    />
  );
  return (
    <AutomationsLayoutHelper15
      {...{
        actions: null,
        autoFocusName: true,
        closeAction: autoSlot520,
        footer: autoSlot522,
        name: draft.name,
        onNameChange: onEditAutomationName,
        statusLabel: autoSlot523,
        children: autoSlot525,
      }}
    />
  );
}
