// Restored from ref/webview/assets/automations-page-BWCJI7AO.js
// Stage 3 deep fill from `automations-page-BWCJI7AO/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 68 (verified 179/247).
// JSX calls converted: 228; mechanical renames: 624.
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 3/13
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
const AppInitialDN: any = undefined;
const AppInitialFC: any = undefined;
const AppInitialOZ: any = undefined;
const AppInitialVC: any = undefined;
const AppInitialXu: any = undefined;
const AppInitialZu: any = undefined;
const DeferredBu: any = undefined;
const DeferredConversationCStub: any = undefined;
const deferredUiFN: any = undefined;
const deferredUiFu: any = undefined;
const hourly: any = undefined;

function _i(heath) {
  let { hostId, isOpen, name, prompt, rrule, onConfirm, onOpenChange } = heath,
    isle = (
      <MemoizedFormattedMessage
        {...{
          id: "common.close",
          defaultMessage: "Close",
          description: "Close button label",
        }}
      />
    );
  let jetty = (event) => {
    event.preventDefault();
    onConfirm();
    onOpenChange(false);
  };
  let karst = (
    <AppIconCct
      {...{
        className: "icon-md text-token-text-secondary",
      }}
    />
  );
  let loch = (
    <MemoizedFormattedMessage
      {...{
        id: "inbox.automations.pluginTemplatePreview.kind",
        defaultMessage: "Scheduled",
        description:
          "Kind label shown beside a plugin scheduled task template preview",
      }}
    />
  );
  let marsh = (
    <DialogHeader
      {...{
        icon: karst,
        title: (
          <DialogClose
            {...{
              children: <AppInitialDN kind={loch} title={name} />,
            }}
          />
        ),
      }}
    />
  );
  let needle = (
    <Callout
      {...{
        Icon: AppIcont0,
        type: "infoAccent",
        content: (
          <DialogOverlay
            {...{
              children: (
                <MemoizedFormattedMessage
                  {...{
                    id: "inbox.automations.pluginTemplatePreview.resetDescription",
                    defaultMessage:
                      "Your customized title, prompt, and schedule will be replaced",
                    description:
                      "Description shown before resetting a scheduled task to its plugin template",
                  }}
                />
              ),
            }}
          />
        ),
      }}
    />
  );
  let oxbow = (
    <SettingsPanel
      {...{
        variant: "secondary",
        children: (
          <div className="vertical-scroll-fade-mask max-h-80 overflow-y-auto p-4">
            <ConversationMarkdownText
              cwd={null}
              hostId={hostId}
              pluginMentionPresentation="static"
              text={prompt}
              variant="compact"
            />
          </div>
        ),
      }}
    />
  );
  let pass = (
    <AutomationsLayoutHelper13
      {...{
        rrule,
      }}
    />
  );
  let quay = () => {
    onOpenChange(false);
  };
  let ravine = (
    <MemoizedFormattedMessage
      {...{
        id: "inbox.automations.pluginTemplatePreview.cancel",
        defaultMessage: "Cancel",
        description:
          "Cancel button label for the plugin scheduled task template preview",
      }}
    />
  );
  let summit = (
    <Button
      {...{
        color: "outline",
        type: "button",
        onClick: quay,
        children: ravine,
      }}
    />
  );
  let tundra = (
    <Button
      {...{
        color: "primary",
        type: "submit",
        children: (
          <MemoizedFormattedMessage
            {...{
              id: "inbox.automations.pluginTemplatePreview.reset",
              defaultMessage: "Reset to defaults",
              description:
                "Button label for resetting a scheduled task to its plugin template",
            }}
          />
        ),
      }}
    />
  );
  let updraft = (
    <DialogFooter
      {...{
        className: AUTO_WIDTH_GAP_CLASS,
        children: [summit, tundra],
      }}
    />
  );
  let valley = (
    <DialogBody
      {...{
        as: "form",
        className:
          "max-h-[calc(100dvh/var(--codex-window-zoom)-2rem)] gap-4 overflow-y-auto",
        onSubmit: jetty,
        children: [marsh, needle, oxbow, pass, updraft],
      }}
    />
  );
  return (
    <DialogWithTrigger
      {...{
        dialogCloseLabel: isle,
        open: isOpen,
        size: "wide",
        onOpenChange,
        children: valley,
      }}
    />
  );
}
function AutomationsLayoutHelper13(woodland) {
  let { rrule } = woodland,
    xylose = useIntl(),
    Yard,
    Zenith,
    anchor,
    beacon,
    compass,
    datum,
    engine;
  {
    let frame = scheduleConfigFromRrule(rrule),
      gauge =
        frame.mode === "custom"
          ? normalizeCronScheduleFields(frame.customRrule)
          : null,
      hinge = gauge?.frequency ?? frame.mode,
      index = identity.find((item) => item.id === hinge),
      joint = gauge?.weekdays ?? frame.weekdays,
      kernel = RRULE_WEEKDAY_OPTIONS.filter((item) => joint.includes(item.id)),
      lever =
        kernel.length === 1 && kernel[0] != null
          ? xylose.formatMessage(kernel[0].longLabelMessage)
          : xylose.formatList(
              kernel.map((item) => xylose.formatMessage(item.labelMessage)),
            ),
      module =
        hinge === "hourly" || index == null
          ? (OverlayPanelWithTitle(frame, xylose) ?? rrule)
          : xylose.formatMessage(index.labelMessage),
      node = gauge?.time ?? frame.time;
    Zenith = OverlayPanelWithTitle;
    engine = (
      <MemoizedFormattedMessage
        {...{
          id: "inbox.automations.frequency",
          defaultMessage: "Frequency",
          description: "Section label above scheduled task frequency controls",
        }}
      />
    );
    Yard = SettingsPanel;
    anchor = "secondary";
    let offset;
    offset = (
      <MemoizedFormattedMessage
        {...{
          id: "inbox.automations.repeat.label",
          defaultMessage: "Repeat",
          description: "Label for the scheduled task repeat mode row",
        }}
      />
    );
    beacon = (
      <DeferredConversationCStub
        {...{
          control: module,
          label: offset,
          variant: "nested",
        }}
      />
    );
    compass =
      hinge === "weekly" ? (
        <DeferredConversationCStub
          {...{
            control: lever,
            label: (
              <MemoizedFormattedMessage
                {...{
                  id: "inbox.automations.day.label",
                  defaultMessage: "On",
                  description: "Label for the scheduled task weekday row",
                }}
              />
            ),
            variant: "nested",
          }}
        />
      ) : null;
    datum =
      hinge === "daily" || hinge === "weekdays" || hinge === "weekly" ? (
        <DeferredConversationCStub
          {...{
            control: formatScheduleTimeOfDay(node, xylose),
            label: (
              <MemoizedFormattedMessage
                {...{
                  id: "inbox.automations.time.label",
                  defaultMessage: "At",
                  description: "Label for the scheduled task time row",
                }}
              />
            ),
            variant: "nested",
          }}
        />
      ) : null;
  }
  let pivot = (
    <Yard
      {...{
        variant: anchor,
        children: [beacon, compass, datum],
      }}
    />
  );
  return (
    <Zenith
      {...{
        title: engine,
        children: pivot,
      }}
    />
  );
}
var query,
  relay,
  signal = esmInit(() => {
    query = reactCompilerRuntime();
    ensureIntlFormattersInit();
    heartbeatSchedule();
    ensureCalloutInit();
    Button();
    ensureComposerEsm_YS_Init();
    ensureComposerEsm_GS_Init();
    AppInitialXu();
    ensureComposerEsm_wct_Init();
    ensureComposerEsm_n0_Init();
    AppInitialVC();
    AppInitialFC();
    deferredUiFN();
    DeferredBu();
    hourly();
  });
function AutomationsLayoutHelper14({ intl, startNewConversation }) {
  startNewConversation({
    prefillPrompt: intl.formatMessage({
      id: "inbox.automations.createWithChatGPT.prompt",
      defaultMessage:
        "Let's set up a scheduled task together. First, explain how scheduled tasks work in ChatGPT. Then interview me to figure out what I need scheduled and when it should run.",
      description:
        "Composer prefill prompt for creating a scheduled task by chatting with ChatGPT",
    }),
  });
}
var unit = esmInit(() => {});
function AutomationsLayoutHelper15(vector) {
  let {
      actions,
      autoFocusName = false,
      children,
      closeAction,
      footer = null,
      name,
      onNameChange,
      statusLabel,
    } = vector,
    widget =
      statusLabel == null ? null : (
        <div className="text-sm font-medium text-token-link electron:ml-1 extension:-ml-1">
          {statusLabel}
        </div>
      );
  let yield =
    closeAction == null
      ? {
          showCloseButton: false,
        }
      : {
          closeLabel: closeAction.label,
          onClose: closeAction.onClose,
        };
  let zone = (
    <AutomationNameField
      {...{
        id: "automation-detail-panel-title",
        autoFocus: autoFocusName,
        value: name,
        onChange: onNameChange,
      }}
    />
  );
  let alpha = (
    <div className="h-full overflow-y-auto px-panel pb-panel">
      <div className="flex flex-col gap-6">
        {zone}
        {children}
      </div>
    </div>
  );
  return (
    <AppShellLayout.DetailPanel
      {...{
        actions,
        footer: footer,
        leading: widget,
        ...yield,
        children: alpha,
      }}
    />
  );
}
var bravo,
  charlie,
  delta2 = esmInit(() => {
    bravo = reactCompilerRuntime();
    AppInitialOZ();
    deferredUiFu();
  });
function AutomationsLayoutHelper16({
  canArchive,
  isArchived,
  isUnread,
  itemId,
  threadId,
  onArchive,
  onMarkRead,
  onMarkUnread,
  onUnarchive,
}) {
  return [
    ...(isArchived && threadId != null
      ? [
          {
            id: "unarchive",
            message: identity({
              id: "inbox.automations.history.unarchive",
              defaultMessage: "Unarchive",
              description:
                "Action label to unarchive an automation history task",
            }),
            onSelect: () => {
              onUnarchive(threadId);
            },
          },
        ]
      : []),
    isUnread
      ? {
          id: "mark-read",
          message: identity({
            id: "inbox.contextMenu.markRead",
            defaultMessage: "Mark as read",
            description:
              "Context menu item to mark an automation history row as read",
          }),
          onSelect: () => {
            onMarkRead(itemId);
          },
        }
      : {
          id: "mark-unread",
          message: identity({
            id: "inbox.contextMenu.markUnread",
            defaultMessage: "Mark as unread",
            description:
              "Context menu item to mark an automation history row as unread",
          }),
          onSelect: () => {
            onMarkUnread(itemId);
          },
        },
    ...(canArchive
      ? [
          {
            id: "archive-run",
            message: identity({
              id: "inbox.contextMenu.archiveRun",
              defaultMessage: "Archive",
              description:
                "Context menu item to archive an automation history row",
            }),
            onSelect: onArchive,
          },
        ]
      : []),
  ];
}
var echo2 = esmInit(() => {
  ensureIntlFormattersInit();
});
function AutomationsLayoutHelper17(foxtrot, golf, hotel) {
  return golf === hotel
    ? (closeSidePanelUnlessWindowResize(foxtrot, true), true)
    : false;
}
function AutomationsLayoutHelper18({
  hasUnsavedChanges,
  perform,
  setPending,
  transition,
}) {
  if (hasUnsavedChanges) {
    setPending(transition);
    return;
  }
  perform(transition);
}
function AutomationsLayoutHelper19(india) {
  return india ? "toolbar" : "page";
}
var juliet = esmInit(() => {
  ensureAppShellAtomsInit();
});
function AutomationsLayoutHelper20({
  automation,
  intl,
  formatProjectLabel,
  formatRootLabel,
  threadLabelById,
}) {
  let kilo = intl.formatMessage({
      id: "settings.automations.rruleSummaryFallback",
      defaultMessage: "Custom schedule",
      description: "Fallback label when RRULE summary cannot be generated",
    }),
    lima =
      AppInitialZu({
        rrule: automation.rrule,
        nextRunAt: automation.nextRunAt,
        intl,
        fallbackMessage: kilo,
      }) ?? kilo;
  return {
    workspaceLabel: isHeartbeatItem(automation)
      ? (() => {
          let mike =
            threadLabelById?.get(automation.targetThreadId) ??
            automation.targetThreadId;
          return intl.formatMessage(
            {
              id: "inbox.automations.rowSummary.heartbeat",
              defaultMessage: "Heartbeat • {thread}",
              description:
                "Summary label for heartbeat automations in the automation list",
            },
            {
              thread: mike,
            },
          );
        })()
      : (() => {
          if (automation.target?.type === "project")
            return (
              formatProjectLabel?.(automation.target.projectId) ??
              automation.target.projectId
            );
          if (automation.target?.type === "projectless")
            return (
              formatRootLabel?.("~") ??
              intl.formatMessage({
                id: "settings.automations.projectDropdown.none",
                defaultMessage: "None",
                description:
                  "Label for selecting no project in the automation project dropdown",
              })
            );
          let november = automation.cwds.map((item) =>
            formatRootLabel
              ? formatRootLabel(item)
              : displayLabelForRootPath({
                  root: item,
                  labels: {},
                }),
          );
          return november.length > 0
            ? intl.formatList(november, {
                type: "conjunction",
              })
            : null;
        })(),
    scheduleLabel: lima,
  };
}
