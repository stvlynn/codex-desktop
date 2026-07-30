// Restored from ref/webview/assets/automations-page-BWCJI7AO.js
// Stage 3 deep fill from `automations-page-BWCJI7AO/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 68 (verified 179/247).
// JSX calls converted: 228; mechanical renames: 624.
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 6/13
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

const $i: any = undefined;
const AppInitialMs: any = undefined;
const AutomationsLayoutHelper28: any = undefined;
const AutomationsLayoutHelper30: any = undefined;
const AutomationsLayoutHelper34: any = undefined;
const AutomationsLayoutHelper9: any = undefined;
const AutomationsLayoutPageProps: any = undefined;
const Ui: any = undefined;
const deferredConversationC: any = undefined;
const deferredUiCm: any = undefined;
const desktopHostRequest: any = undefined;
const glen: any = undefined;
const thorium: any = undefined;

function AutomationsLayoutHelper32(protact) {
  let {
      automations,
      sourcePluginsByAutomationId,
      automationRowSummaries,
      canAddAutomationSuggestion,
      creatingAutomationId,
      headerPlacement = "page",
      pluginIconsById,
      pluginTemplateGroups,
      unreadAutomationIds,
      runningAutomationIds,
      isRunNowPending,
      selectedAutomationId,
      selectedPluginTemplateId,
      scrollContainerRef,
      toolbarActions,
      onSelectAutomation: uranium,
      onRunAutomation,
      onMarkAllRead,
      onPauseAutomation,
      onResumeAutomation,
      onDeleteAutomation,
      titleRef,
      onAddAutomationSuggestion,
      onSelectPluginTemplate,
    } = protact,
    neptun = useIntl(),
    [pluton, americ] = curium.useState(""),
    [berkel, californ] = curium.useState("all"),
    Einstein,
    fermium,
    mendelev,
    nobel,
    lawrenc,
    ruther,
    dubnium,
    seaborg,
    bohrium,
    hassium,
    meitner,
    darmstadt,
    roent,
    copernic,
    nihon,
    flerov;
  {
    let moscov;
    moscov = (livermor) => {
      let tenness = sourcePluginsByAutomationId.get(livermor.id),
        oganesson = livermor.status === "PAUSED";
      if (!(berkel === "all" || (berkel === "paused" ? oganesson : !oganesson)))
        return false;
      let quark = automationRowSummaries.get(livermor.id);
      return AutomationsLayoutHelper30(pluton, [
        livermor.name,
        livermor.prompt,
        tenness?.displayName,
        quark?.workspaceLabel,
        quark?.scheduleLabel,
      ]);
    };
    flerov = automations.filter(moscov);
    let photon = neptun.formatMessage({
      id: "inbox.automations.search",
      defaultMessage: "Search scheduled tasks",
      description:
        "Accessible label and placeholder for searching scheduled tasks",
    });
    let gluon = photon,
      boson;
    boson = <Ui {...{}} />;
    fermium = boson;
    let fermion = neptun.formatMessage({
      id: "inbox.automations.statusFilter.ariaLabel",
      defaultMessage: "Scheduled task status",
      description: "Accessible label for filtering scheduled tasks by status",
    });
    let hadron = {
      id: "all",
      label: (
        <MemoizedFormattedMessage
          {...{
            id: "inbox.automations.statusFilter.all",
            defaultMessage: "All",
            description: "Filter option for all scheduled tasks",
          }}
        />
      ),
    };
    let lepton = {
      id: "active",
      label: (
        <MemoizedFormattedMessage
          {...{
            id: "inbox.automations.statusFilter.active",
            defaultMessage: "Active",
            description: "Filter option for active scheduled tasks",
          }}
        />
      ),
    };
    let neutrino = [
      hadron,
      lepton,
      {
        id: "paused",
        label: (
          <MemoizedFormattedMessage
            {...{
              id: "inbox.automations.statusFilter.paused",
              defaultMessage: "Paused",
              description: "Filter option for paused scheduled tasks",
            }}
          />
        ),
      },
    ];
    let muon = (
      <SegmentedControl
        ariaLabel={fermion}
        options={neutrino}
        selectedId={berkel}
        size="toolbar"
        onSelect={californ}
      />
    );
    let tauon = muon,
      positron = unreadAutomationIds?.length ? (
        <Button
          {...{
            color: "ghost",
            size: "toolbar",
            onClick: onMarkAllRead,
            children: [
              <Zlt
                {...{
                  "aria-hidden": true,
                  className: "icon-xs",
                }}
              />,
              <MemoizedFormattedMessage
                {...{
                  id: "inbox.automations.markAllRead",
                  defaultMessage: "Mark all as read",
                  description:
                    "Button to mark every unread scheduled task run as read",
                }}
              />,
            ],
          }}
        />
      ) : null;
    let proton = positron;
    Einstein = SearchableDetailPageLayout;
    seaborg = headerPlacement;
    bohrium = "inset";
    hassium = tauon;
    meitner = proton;
    darmstadt = scrollContainerRef;
    roent = (
      <MemoizedFormattedMessage
        {...{
          id: "inbox.mode.automations",
          defaultMessage: "Scheduled tasks",
          description: "Header label for the scheduled tasks view",
        }}
      />
    );
    copernic = (
      <MemoizedFormattedMessage
        {...{
          id: "inbox.automations.subtitle",
          defaultMessage:
            "Ask ChatGPT to schedule tasks, set reminders, or monitor for updates",
          description: "Subtitle shown at the top of the scheduled tasks page",
        }}
      />
    );
    nihon = {
      id: "scheduled-page-search",
      label: gluon,
      onSearchQueryChange: americ,
      placeholder: gluon,
      searchQuery: pluton,
    };
    mendelev = titleRef;
    nobel = toolbarActions;
    lawrenc = false;
    ruther = flerov.length === 0 && berkel !== "all" ? fermium : null;
    dubnium =
      flerov.length > 0 ? (
        <div className="flex flex-col gap-1" role="list">
          {flerov.map((item) => {
            let neutron = automationRowSummaries.get(item.id),
              nucleus = sourcePluginsByAutomationId.get(item.id);
            return (
              <div key={item.id} className="relative" role="listitem">
                {
                  <AutomationsLayoutHelper28
                    {...{
                      automation: item,
                      displayName: item.name,
                      scheduleLabel: neutron?.scheduleLabel ?? "",
                      secondLineAdornment:
                        nucleus == null ? null : (
                          <span className="inline-flex max-w-40 shrink-0 items-center gap-1 text-xs leading-4 text-token-text-secondary">
                            {
                              <AppLogoImage
                                {...{
                                  className: "size-3.5",
                                  alt: "",
                                  fallback: (
                                    <AppIconLV
                                      {...{
                                        className: "size-3.5",
                                      }}
                                    />
                                  ),
                                  logoDarkUrl: nucleus.logoDarkUrl,
                                  logoUrl: nucleus.logoUrl,
                                }}
                              />
                            }
                            {nucleus.displayName == null ? null : (
                              <span className="min-w-0 truncate">
                                {nucleus.displayName}
                              </span>
                            )}
                            {nucleus.state !== "available" &&
                            nucleus.state !== "loading" ? (
                              <>
                                {
                                  <AppIconyct
                                    {...{
                                      className:
                                        "icon-2xs shrink-0 text-token-editor-warning-foreground",
                                    }}
                                  />
                                }
                                <span className="sr-only">
                                  {
                                    <MemoizedFormattedMessage
                                      {...{
                                        id: "inbox.automations.pluginSourceIssue",
                                        defaultMessage:
                                          "Source plugin has an issue",
                                        description:
                                          "Accessible warning for a scheduled task whose source plugin is unavailable",
                                      }}
                                    />
                                  }
                                </span>
                              </>
                            ) : null}
                          </span>
                        ),
                      hasUnreadRuns:
                        unreadAutomationIds?.includes(item.id) === true,
                      isInProgress: runningAutomationIds.includes(item.id),
                      isPaused: item.status === "PAUSED",
                      isSelected: selectedAutomationId === item.id,
                      managementActions: {
                        isRunNowPending,
                        onDelete: onDeleteAutomation,
                        onPause: onPauseAutomation,
                        onResume: onResumeAutomation,
                        onRun: onRunAutomation,
                      },
                      onSelect: uranium,
                    }}
                  />
                }
              </div>
            );
          })}
        </div>
      ) : null;
  }
  let isotope =
    berkel === "all" ? (
      <AutomationsLayoutHelper9
        {...{
          automations,
          canAdd: canAddAutomationSuggestion,
          creatingAutomationId,
          emptyState: flerov.length === 0 ? fermium : null,
          pluginIconsById,
          pluginTemplateGroups,
          searchQuery: pluton,
          selectedPluginTemplateId,
          showDivider: flerov.length > 0,
          onAdd: onAddAutomationSuggestion,
          onSelectPluginTemplate,
        }}
      />
    ) : null;
  return (
    <Einstein
      {...{
        headerPlacement: seaborg,
        headerVariant: bohrium,
        navigation: hassium,
        pageActions: meitner,
        scrollContainerRef: darmstadt,
        title: roent,
        subtitle: copernic,
        search: nihon,
        titleRef: mendelev,
        toolbarActions: nobel,
        toolbarInset: lawrenc,
        children: [ruther, dubnium, isotope],
      }}
    />
  );
}
var plasma,
  curium,
  crystal,
  lattice = esmInit(() => {
    plasma = reactCompilerRuntime();
    curium = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    Button();
    ensureComposerEsm_AG_Init();
    deferredUiCm();
    ensureSegmentedControlInit();
    ensureComposerEsm_RV_Init();
    ensureDropdownMenuPopoverInit();
    ensureHooksInfoIconInit();
    $i();
    thorium();
    glen();
  });
async function AutomationsLayoutHelper33({ queryClient, threadId }) {
  await desktopHostRequest("unarchive-conversation", {
    hostId: LOCAL_HOST_ID,
    conversationId: asThreadId(threadId),
  });
  await queryClient.invalidateQueries({
    queryKey: buildVscodeQueryKey("inbox-items", {
      limit: 200,
    }),
  });
}
var matrix = esmInit(() => {
  ensureAppShellAtomsInit();
  ensureDesktopHostRequestInit();
  ensureAppShellAtomsInit();
  ensureSettingsQueryAtomsInit();
});
export function AutomationsPageIcon(
  props: AutomationsLayoutPageProps,
): ReactNode {
  let tensor = useAppScopeValue(deferredConversationC),
    { items, markAllRead, unreadRunCounts } = AppInitialMs(),
    scalar = tensor.data,
    affine = tensor.isLoading,
    linear = scalar?.items ?? [];
  let cubic = unreadRunCounts?.automationIds;
  return (
    <AutomationsLayoutHelper34
      {...{
        automations: linear,
        automationHistoryItems: items,
        unreadAutomationIds: cubic,
        isAutomationsLoading: affine,
        onMarkAllRead: markAllRead,
      }}
    />
  );
}
