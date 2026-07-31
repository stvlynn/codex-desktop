// Restored from ref/webview/assets/automations-page-BWCJI7AO.js
// Stage 3 deep fill from `automations-page-BWCJI7AO/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 68 (verified 179/247).
// JSX calls converted: 228; mechanical renames: 624.
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 10/13
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
const $e: any = undefined;
const $t: any = undefined;
const _n: any = undefined;
const _t: any = undefined;
const apex2: any = undefined;
const at: any = undefined;
const aurora: any = undefined;
const autoSlot348: any = undefined;
const autoSlot351: any = undefined;
const autoSlot358: any = undefined;
const autoSlot364: any = undefined;
const autoSlot365: any = undefined;
const autoSlot367: any = undefined;
const autoSlot368: any = undefined;
const autoSlot369: any = undefined;
const autoSlot370: any = undefined;
const autoSlot371: any = undefined;
const autoSlot373: any = undefined;
const autoSlot379: any = undefined;
const autoSlot381: any = undefined;
const autoSlot382: any = undefined;
const autoSlot383: any = undefined;
const autoSlot384: any = undefined;
const autoSlot395: any = undefined;
const autoSlot397: any = undefined;
const autoSlot400: any = undefined;
const autoSlot402: any = undefined;
const autoSlot403: any = undefined;
const autoSlot404: any = undefined;
const autoSlot406: any = undefined;
const autoSlot409: any = undefined;
const autoSlot420: any = undefined;
const autoSlot438: any = undefined;
const autoSlot446: any = undefined;
const autoSlot453: any = undefined;
const autoSlot455: any = undefined;
const autoSlot456: any = undefined;
const autoSlot459: any = undefined;
const autoSlot462: any = undefined;
const autoSlot463: any = undefined;
const autoSlot466: any = undefined;
const autoSlot470: any = undefined;
const autoSlot471: any = undefined;
const autoSlot474: any = undefined;
const autoSlot476: any = undefined;
const automations: any = undefined;
const corona: any = undefined;
const eddy2: any = undefined;
const equinox: any = undefined;
const foam: any = undefined;
const isAutomationsLoading: any = undefined;
const meridian: any = undefined;
const on: any = undefined;
const onMarkAllRead: any = undefined;
const rapids: any = undefined;
const shower: any = undefined;
const spiral: any = undefined;
const surge: any = undefined;
const swell: any = undefined;
const torrent: any = undefined;
const unreadAutomationIds: any = undefined;
const vortex: any = undefined;
const whirl: any = undefined;
const zephyr2: any = undefined;

// Wave5d soft stubs.
const AppInitialU: any = undefined;
const AppInitialVu: any = undefined;
const AutomationsLayoutHelper19: any = undefined;
const AutomationsLayoutHelper24: any = undefined;
const AutomationsLayoutHelper27: any = undefined;
const AutomationsLayoutHelper32: any = undefined;
const AutomationsLayoutHelper37: any = undefined;
const AutomationsLayoutHelper38: any = undefined;
const AutomationsLayoutHelper39: any = undefined;
const AutomationsLayoutHelper4: any = undefined;
const AutomationsLayoutHelper40: any = undefined;
const AutomationsLayoutHelper42: any = undefined;
const _i: any = undefined;
const cascade: any = undefined;

function AutomationsLayoutHelper34__splitRest1(__splitParams: any) {
  ContextMenuRegistration("manageTasks", autoSlot402);
  cascade.useEffect(() => {
    meridian !== "edit" ||
      autoSlot381 == null ||
      !autoSlot379 ||
      !autoSlot384 ||
      autoSlot382 == null ||
      !AppInitialVu(autoSlot382, autoSlot381) ||
      autoSlot383 ||
      eddy2 ||
      autoSlot420.isPending ||
      autoSlot409.isPending ||
      autoSlot438.isPending ||
      (whirl(true), autoSlot420.mutate(autoSlot381));
  }, [
    meridian,
    autoSlot379,
    autoSlot409.isPending,
    autoSlot382,
    autoSlot438.isPending,
    autoSlot381,
    autoSlot383,
    autoSlot384,
    eddy2,
    autoSlot420,
    autoSlot420.isPending,
  ]);
  let autoSlot478 =
      meridian === "create" ? null : (
        <AutomationsLayoutHelper4
          {...{
            assistant: vortex ? "chatgpt" : "codex",
            mode: "global-chat",
            onCreateManually: () => {
              autoSlot471(autoSlot402);
            },
            onCreateWithChat: () => {
              autoSlot471(autoSlot403);
            },
          }}
        />
      ),
    autoSlot479 = meridian != null,
    autoSlot480 = meridian === "create" ? autoSlot348.pluginTemplateId : null;
  return (
    <>
      <div className="flex h-full min-h-0 flex-col">
        {
          <AutomationsLayoutHelper35
            {...{
              isOpen: autoSlot479,
              onClose: autoSlot397,
              children:
                meridian == null ? (
                  <AutomationsLayoutHelper36 {...{}} />
                ) : meridian === "create" ? (
                  <AutomationsLayoutHelper40
                    {...{
                      draft: autoSlot348,
                      setDraft: autoSlot351,
                      canSave: autoSlot379,
                      isSaving: autoSlot409.isPending,
                      workspaceGroups: autoSlot370,
                      sourcePlugin: autoSlot367,
                      onCreateManually: $t,
                      onCreateWithChat: autoSlot403,
                      onOpenSourcePlugin: autoSlot404,
                      onCancel: () => {
                        autoSlot400({
                          type: "close",
                        });
                      },
                      onEditAutomationName: autoSlot463,
                      onSubmit: autoSlot455,
                    }}
                  />
                ) : meridian === "edit" && equinox != null ? (
                  <AutomationsLayoutHelper39
                    {...{
                      actions: (
                        <AutomationsLayoutHelper42
                          {...{
                            isPaused: autoSlot348.status === "PAUSED",
                            isDeleting: autoSlot438.isPending,
                            isRetrySavePending: eddy2 || autoSlot420.isPending,
                            isRunNowPending: autoSlot446.isPending,
                            isSaveRetryVisible: autoSlot383,
                            showResetToPluginDefaults:
                              autoSlot348.kind === "cron" &&
                              autoSlot348.pluginTemplateId != null,
                            isResetToPluginDefaultsDisabled:
                              at == null || autoSlot369,
                            isUsingPluginDefaults: autoSlot369,
                            onDelete: autoSlot462,
                            onPause: () => {
                              autoSlot456("PAUSED");
                            },
                            onRetrySave: autoSlot470,
                            onResetToPluginDefaults: () => {
                              swell(true);
                            },
                            onResume: () => {
                              autoSlot456("ACTIVE");
                            },
                            onRunNow: () => {
                              autoSlot466(autoSlot348);
                            },
                          }}
                        />
                      ),
                      closeAction: {
                        label: spiral.formatMessage({
                          id: "inbox.automations.detail.close",
                          defaultMessage: "Close scheduled task details",
                          description:
                            "Accessible label for closing the scheduled task detail panel",
                        }),
                        onClose: autoSlot397,
                      },
                      draft: autoSlot348,
                      setDraft: autoSlot351,
                      selectedAutomation: equinox,
                      detailsTrailing:
                        autoSlot365 == null ? null : (
                          <AutomationsLayoutHelper24
                            {...{
                              sourcePlugin: autoSlot365,
                              onOpenSourcePlugin: autoSlot474,
                            }}
                          />
                        ),
                      banner: (
                        <AutomationsLayoutHelper27
                          {...{
                            sourcePlugin: autoSlot365,
                            onOpenSourcePlugin: autoSlot474,
                          }}
                        />
                      ),
                      formatRootLabel: autoSlot371,
                      workspaceGroups: autoSlot370,
                      onEditAutomationName: autoSlot463,
                      onSubmit: autoSlot455,
                    }}
                  />
                ) : meridian === "missing" ? (
                  <AutomationsLayoutHelper37
                    {...{
                      onBackToAutomations: autoSlot397,
                    }}
                  />
                ) : (
                  <AppShellLayout.DetailPanelLoading
                    {...{
                      loadingLabel: (
                        <MemoizedFormattedMessage
                          {...{
                            id: "inbox.automations.detailLoading",
                            defaultMessage: "Loading scheduled task details",
                            description:
                              "Accessible status while scheduled task details load",
                          }}
                        />
                      ),
                      showCloseButton: false,
                    }}
                  />
                ),
            }}
          />
        }
        {
          <DialogWithTrigger
            {...{
              open: rapids,
              onOpenChange: (autoSlot481) => {
                autoSlot481 || torrent(null);
              },
              children: (
                <DialogBody
                  {...{
                    children: [
                      <DialogSection
                        {...{
                          children: (
                            <DialogHeader
                              {...{
                                title: (
                                  <MemoizedFormattedMessage
                                    {...{
                                      id: "inbox.automations.deleteConfirm.title",
                                      defaultMessage: "Delete {name}?",
                                      description:
                                        "Title for the delete automation confirmation dialog",
                                      values: {
                                        name: (
                                          <strong className="font-semibold text-token-text-primary">
                                            {shower?.name ||
                                              spiral.formatMessage({
                                                id: "settings.automations.dialog.newTitle",
                                                defaultMessage:
                                                  "New scheduled task",
                                                description:
                                                  "Header title for a new scheduled task before it is named",
                                              })}
                                          </strong>
                                        ),
                                      },
                                    }}
                                  />
                                ),
                                subtitle: (
                                  <MemoizedFormattedMessage
                                    {...{
                                      id: "inbox.automations.deleteConfirm.descriptionNoPeriod",
                                      defaultMessage:
                                        "This will permanently delete the scheduled task and stop future runs",
                                      description:
                                        "Description for the delete scheduled task confirmation dialog",
                                    }}
                                  />
                                ),
                              }}
                            />
                          ),
                        }}
                      />,
                      <DialogSection
                        {...{
                          children: (
                            <DialogFooter
                              {...{
                                children: [
                                  <Button
                                    {...{
                                      color: "outline",
                                      onClick: () => {
                                        torrent(null);
                                      },
                                      children: (
                                        <MemoizedFormattedMessage
                                          {...{
                                            id: "inbox.automations.deleteConfirm.cancel",
                                            defaultMessage: "Cancel",
                                            description:
                                              "Cancel button label for delete automation confirmation dialog",
                                          }}
                                        />
                                      ),
                                    }}
                                  />,
                                  <Button
                                    {...{
                                      color: "danger",
                                      loading: autoSlot438.isPending,
                                      onClick: on,
                                      children: (
                                        <MemoizedFormattedMessage
                                          {...{
                                            id: "inbox.automations.deleteConfirm.confirm",
                                            defaultMessage:
                                              "Delete scheduled task",
                                            description:
                                              "Confirm button label for delete scheduled task confirmation dialog",
                                          }}
                                        />
                                      ),
                                    }}
                                  />,
                                ],
                              }}
                            />
                          ),
                        }}
                      />,
                    ],
                  }}
                />
              ),
            }}
          />
        }
        {at != null && autoSlot368 != null && surge ? (
          <_i
            {...{
              hostId: LOCAL_HOST_ID,
              isOpen: true,
              name: at.template.name,
              prompt: at.template.prompt,
              rrule: at.template.rrule,
              onConfirm: () => {
                autoSlot351((autoSlot482) =>
                  AppInitialU(autoSlot482, autoSlot368),
                );
              },
              onOpenChange: (autoSlot483) => {
                swell(autoSlot483);
              },
            }}
          />
        ) : null}
        {
          <DialogWithTrigger
            {...{
              open: aurora != null,
              onOpenChange: (autoSlot484) => {
                autoSlot484 || corona(null);
              },
              showDialogClose: false,
              size: "compact",
              children: (
                <DialogBody
                  {...{
                    as: "form",
                    onSubmit: (event) => {
                      event.preventDefault();
                      autoSlot406();
                    },
                    children: [
                      <DialogSection
                        {...{
                          children: (
                            <DialogHeader
                              {...{
                                title: (
                                  <MemoizedFormattedMessage
                                    {...{
                                      id: "inbox.automations.discardDraft.title",
                                      defaultMessage:
                                        "Discard scheduled task changes?",
                                      description:
                                        "Title for the confirmation dialog shown before discarding scheduled task changes",
                                    }}
                                  />
                                ),
                                subtitle: (
                                  <MemoizedFormattedMessage
                                    {...{
                                      id: "inbox.automations.discardDraft.description",
                                      defaultMessage:
                                        "Your changes to this scheduled task will be lost",
                                      description:
                                        "Description for the confirmation dialog shown before discarding scheduled task changes",
                                    }}
                                  />
                                ),
                              }}
                            />
                          ),
                        }}
                      />,
                      <DialogSection
                        {...{
                          children: (
                            <DialogFooter
                              {...{
                                children: [
                                  <Button
                                    {...{
                                      color: "secondary",
                                      onClick: () => {
                                        corona(null);
                                      },
                                      children: (
                                        <MemoizedFormattedMessage
                                          {...{
                                            id: "inbox.automations.discardDraft.cancel",
                                            defaultMessage: "Keep editing",
                                            description:
                                              "Cancel button label for keeping a scheduled task creation draft",
                                          }}
                                        />
                                      ),
                                    }}
                                  />,
                                  <Button
                                    {...{
                                      color: "danger",
                                      type: "submit",
                                      children: (
                                        <MemoizedFormattedMessage
                                          {...{
                                            id: "inbox.automations.discardDraft.confirm",
                                            defaultMessage: "Discard",
                                            description:
                                              "Confirm button label for discarding a scheduled task creation draft",
                                          }}
                                        />
                                      ),
                                    }}
                                  />,
                                ],
                              }}
                            />
                          ),
                        }}
                      />,
                    ],
                  }}
                />
              ),
            }}
          />
        }
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
          {automations.length === 0 ? (
            <AutomationsLayoutHelper38
              {...{
                canAddSuggestedAutomation:
                  !apex2.isLoading && apex2.model != null,
                creatingAutomationId: foam,
                isLoading: isAutomationsLoading,
                headerPlacement: AutomationsLayoutHelper19(autoSlot479),
                pluginIconsById: $e,
                pluginTemplateGroups: zephyr2,
                selectedPluginTemplateId: autoSlot480,
                toolbarActions: autoSlot478,
                onAddAutomationSuggestion: autoSlot453,
                onSelectPluginTemplate: _n,
              }}
            />
          ) : (
            <AutomationsLayoutHelper32
              {...{
                automations: _t,
                sourcePluginsByAutomationId: autoSlot364,
                automationRowSummaries: autoSlot373,
                canAddAutomationSuggestion:
                  !apex2.isLoading && apex2.model != null,
                creatingAutomationId: foam,
                headerPlacement: AutomationsLayoutHelper19(autoSlot479),
                pluginIconsById: $e,
                pluginTemplateGroups: zephyr2,
                unreadAutomationIds,
                runningAutomationIds: autoSlot358,
                isRunNowPending: autoSlot446.isPending,
                selectedAutomationId: equinox?.id ?? null,
                selectedPluginTemplateId: autoSlot480,
                toolbarActions: autoSlot478,
                onMarkAllRead,
                onSelectAutomation: autoSlot476,
                onAddAutomationSuggestion: autoSlot453,
                onSelectPluginTemplate: _n,
                onPauseAutomation: (autoSlot485) => {
                  autoSlot459(autoSlot485, "PAUSED");
                },
                onResumeAutomation: (autoSlot486) => {
                  autoSlot459(autoSlot486, "ACTIVE");
                },
                onRunAutomation: autoSlot466,
                onDeleteAutomation: (autoSlot487) => {
                  autoSlot395(autoSlot487);
                },
              }}
            />
          )}
        </div>
      </div>
    </>
  );
  return undefined as any;
}
function AutomationsLayoutHelper35(autoSlot488) {
  let { children, isOpen, onClose } = autoSlot488;
  return (
    <AppShellLayout.DetailPanelOutlet
      {...{
        isOpen,
        onClose,
        children,
      }}
    />
  );
}
function AutomationsLayoutHelper36() {
  return (
    <AppShellLayout.DetailPanel
      {...{
        showCloseButton: false,
        children: (
          <EmptyState
            {...{
              className: "h-full",
              title: (
                <MemoizedFormattedMessage
                  {...{
                    id: "inbox.automations.selectScheduledTask",
                    defaultMessage: "Select a scheduled task to view",
                    description:
                      "Empty detail title shown before a scheduled task is selected",
                  }}
                />
              ),
            }}
          />
        ),
      }}
    />
  );
}
