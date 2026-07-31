// Restored from ref/webview/assets/automations-page-BWCJI7AO.js
// Stage 3 deep fill from `automations-page-BWCJI7AO/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 68 (verified 179/247).
// JSX calls converted: 228; mechanical renames: 624.
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 12/13
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
const AppIconJo: any = undefined;
const AppInitialMs: any = undefined;
const AutomationsLayoutHelper1: any = undefined;
const AutomationsLayoutHelper16: any = undefined;
const AutomationsLayoutHelper2: any = undefined;
const AutomationsLayoutHelper3: any = undefined;
const AutomationsLayoutHelper33: any = undefined;
const AutomationsLayoutHelper5: any = undefined;
const AutomationsLayoutHelper6: any = undefined;
const cascade: any = undefined;
const desktopHostRequest: any = undefined;

function _a({ automationId, formatRootLabel }) {
  let autoSlot526 = useIntl(),
    autoSlot527 = useAppScope(appScopeAtom),
    [autoSlot528, autoSlot529] = cascade.useState(false),
    autoSlot530 = useColdNavigate(),
    { data } = recentConversationsMetaQueryKey(),
    { items, markRead, markUnread } = AppInitialMs(),
    autoSlot531 = new Map(
      (data ?? []).map((item) => [
        String(item.id),
        resolveConversationTitle(item),
      ]),
    ),
    autoSlot532 = new Set(
      (data ?? [])
        .filter(isThreadNeedsResumeActive)
        .map((item) => String(item.id)),
    ),
    autoSlot533 = items
      .filter((item) => item.automationId === automationId)
      .sort(
        (autoSlot534, autoSlot535) =>
          autoSlot535.createdAt - autoSlot534.createdAt,
      ),
    autoSlot536 = autoSlot533.some((item) => item.readAt == null),
    autoSlot537 = autoSlot533.filter(AutomationsLayoutHelper2).length,
    autoSlot538 = async (autoSlot539) => {
      try {
        await AutomationsLayoutHelper33({
          queryClient: autoSlot527.queryClient,
          threadId: autoSlot539,
        });
      } catch {
        autoSlot527.get(toastAtom).danger(
          autoSlot526.formatMessage({
            id: "inbox.automations.history.unarchiveError",
            defaultMessage: "Failed to unarchive chat",
            description:
              "Error toast shown when unarchiving an automation history chat fails",
          }),
        );
      }
    },
    autoSlot540 = () => {
      autoSlot533.forEach((item) => {
        item.readAt ?? markRead(item.id);
      });
    },
    autoSlot541 = async (autoSlot542) => {
      await desktopHostRequest(
        "archive-conversation",
        AutomationsLayoutHelper1(autoSlot542),
      );
    },
    autoSlot543 = () => {
      autoSlot527.queryClient.invalidateQueries({
        queryKey: buildVscodeQueryKey("inbox-items", {
          limit: 200,
        }),
      });
    },
    autoSlot544 = async (autoSlot545) => {
      try {
        await autoSlot541(autoSlot545);
        autoSlot543();
      } catch {
        autoSlot527.get(toastAtom).danger(
          autoSlot526.formatMessage({
            id: "inbox.automations.history.archiveError",
            defaultMessage: "Could not archive run",
            description: "Error toast when an automation run fails to archive",
          }),
        );
      }
    };
  return autoSlot533.length === 0 ? null : (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex items-center justify-between px-1 pt-6 pb-2 text-base text-token-input-placeholder-foreground">
        <span className="opacity-75">
          {
            <MemoizedFormattedMessage
              {...{
                id: "inbox.automations.history",
                defaultMessage: "Previous runs",
                description:
                  "Section label above the automation history rail section",
              }}
            />
          }
        </span>
        {
          <AutomationsLayoutHelper5
            {...{
              archiveableItemCount: autoSlot537,
              hasUnreadItems: autoSlot536,
              isArchiving: autoSlot528,
              onArchiveAll: async () => {
                if (!(autoSlot537 === 0 || autoSlot528)) {
                  autoSlot529(true);
                  try {
                    let { failedCount, succeededCount } =
                      await AutomationsLayoutHelper3({
                        items: autoSlot533,
                        archiveThread: autoSlot541,
                      });
                    if ((autoSlot543(), failedCount === 0)) {
                      autoSlot527.get(toastAtom).success(
                        autoSlot526.formatMessage(
                          {
                            id: "inbox.automations.history.archiveAllSuccess",
                            defaultMessage:
                              "Archived {count, plural, one {# run} other {# runs}}",
                            description:
                              "Success toast after archiving all automation runs",
                          },
                          {
                            count: succeededCount,
                          },
                        ),
                      );
                      return;
                    }
                    autoSlot527.get(toastAtom).danger(
                      autoSlot526.formatMessage(
                        {
                          id: "inbox.automations.history.archiveAllPartialError",
                          defaultMessage:
                            "Archived {succeededCount}; could not archive {failedCount}",
                          description:
                            "Error toast when some automation runs fail to archive",
                        },
                        {
                          failedCount,
                          succeededCount,
                        },
                      ),
                    );
                  } finally {
                    autoSlot529(false);
                  }
                }
              },
              onMarkAllRead: autoSlot540,
            }}
          />
        }
      </div>
      <div className="vertical-scroll-fade-mask flex min-h-0 flex-1 flex-col overflow-y-auto [--edge-fade-distance:1rem]">
        {autoSlot533.map((item) => (
          <AutomationsLayoutHelper41
            key={item.id}
            {...{
              item,
              conversationTitle:
                item.threadId == null
                  ? null
                  : (autoSlot531.get(item.threadId) ?? null),
              formatRootLabel,
              isRunning:
                item.threadId != null && autoSlot532.has(item.threadId),
              onArchive: autoSlot544,
              onMarkRead: markRead,
              onMarkUnread: markUnread,
              onUnarchive: (autoSlot546) => {
                autoSlot538(autoSlot546);
              },
              onSelect: (autoSlot547) => {
                autoSlot530(autoSlot547);
              },
            }}
          />
        ))}
      </div>
    </div>
  );
}
function AutomationsLayoutHelper41({
  item,
  conversationTitle,
  formatRootLabel,
  isRunning,
  onArchive,
  onMarkRead,
  onMarkUnread,
  onUnarchive,
  onSelect,
}) {
  let autoSlot548 = useIntl(),
    [autoSlot549, autoSlot550] = cascade.useState(false),
    [autoSlot551, autoSlot552] = cascade.useState(false),
    autoSlot553 = item.threadId,
    autoSlot554 = item.status === "ARCHIVED",
    autoSlot555 = item.readAt == null,
    autoSlot556 = autoSlot554 && autoSlot553 != null,
    autoSlot557 = AutomationsLayoutHelper2(item) && !isRunning && !autoSlot551,
    autoSlot558 =
      autoSlot553 != null && !autoSlot554
        ? () => {
            onSelect(autoSlot553);
          }
        : undefined,
    autoSlot559 = autoSlot558 == null,
    autoSlot560 = selectableListRowActivationProps({
      onSelect: autoSlot558,
      isDisabled: autoSlot559,
    }),
    autoSlot561 = isRunning ? (
      <Spinner
        {...{
          className: "icon-xs shrink-0",
        }}
      />
    ) : autoSlot555 ? (
      <span
        className={cx(
          "h-2 w-2 rounded-full",
          autoSlot554
            ? "bg-token-error-foreground"
            : "bg-token-text-link-foreground",
        )}
      />
    ) : autoSlot554 ? (
      <AppIconJo
        {...{
          className: "icon-xs shrink-0 text-token-disabled-foreground",
        }}
      />
    ) : (
      <span className="h-2 w-2 rounded-full bg-token-description-foreground" />
    ),
    autoSlot562 = (
      <UseFeatureGateEnabled
        {...{
          items: AutomationsLayoutHelper16({
            isArchived: autoSlot554,
            isUnread: autoSlot555,
            itemId: item.id,
            threadId: autoSlot553,
            canArchive: autoSlot557,
            onArchive: () => autoSlot550(true),
            onMarkRead,
            onMarkUnread,
            onUnarchive,
          }),
          children: (
            <div role="listitem">
              <div
                className={cx(
                  "group flex items-center gap-2 rounded-md pl-1 pr-3 py-2 text-base [content-visibility:auto] [contain-intrinsic-size:auto_64px]",
                  autoSlot556 && "relative",
                  autoSlot559 ? "cursor-default" : "cursor-interaction",
                  !autoSlot559 && "hover:bg-token-list-hover-background",
                )}
                {...autoSlot560}
              >
                <div className="flex w-5 shrink-0 items-center justify-center text-token-description-foreground">
                  {autoSlot561}
                </div>
                <div
                  className={cx(
                    "flex min-w-0 flex-1 items-center gap-2",
                    autoSlot559 && "opacity-50",
                  )}
                >
                  <div className="flex min-w-0 flex-1 flex-col gap-0.5 leading-tight">
                    <div className="flex min-w-0 items-center gap-2">
                      <span className="truncate font-normal text-token-foreground">
                        {conversationTitle ??
                          item.title ??
                          item.automationName ??
                          autoSlot548.formatMessage({
                            id: "inbox.automations.history.untitled",
                            defaultMessage: "Untitled",
                            description:
                              "Fallback title for an automation history task without a title",
                          })}
                      </span>
                      {item.sourceCwd == null ? null : (
                        <span className="truncate text-sm text-token-description-foreground">
                          {formatRootLabel(item.sourceCwd)}
                        </span>
                      )}
                    </div>
                  </div>
                  <div
                    className={cx(
                      "flex min-w-[4.5rem] items-center justify-end self-center",
                      autoSlot556 &&
                        "group-hover:opacity-0 group-focus-within:opacity-0",
                    )}
                  >
                    <span className="text-sm whitespace-nowrap text-token-description-foreground tabular-nums">
                      {
                        <RelativeDateByMinute
                          {...{
                            dateString: new Date(item.createdAt).toISOString(),
                          }}
                        />
                      }
                    </span>
                  </div>
                </div>
                {autoSlot556 ? (
                  <Button
                    {...{
                      color: "ghostActive",
                      size: "composerSm",
                      className:
                        "pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 opacity-0 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100 focus:pointer-events-auto focus:opacity-100",
                      onClick: (event) => {
                        event.stopPropagation();
                        onUnarchive(autoSlot553);
                      },
                      children: (
                        <MemoizedFormattedMessage
                          {...{
                            id: "inbox.automations.history.unarchive",
                            defaultMessage: "Unarchive",
                            description:
                              "Action label to unarchive an automation history task",
                          }}
                        />
                      ),
                    }}
                  />
                ) : null}
              </div>
            </div>
          ),
        }}
      />
    );
  return (
    <>
      {autoSlot554 ? (
        <OptionalTooltip
          {...{
            tooltipContent: (
              <MemoizedFormattedMessage
                {...{
                  id: "inbox.automations.history.archivedTooltip",
                  defaultMessage: "Run was archived",
                  description:
                    "Tooltip shown for archived automation runs in the previous runs list",
                }}
              />
            ),
            children: <div>{autoSlot562}</div>,
          }}
        />
      ) : (
        autoSlot562
      )}
      {
        <AutomationsLayoutHelper6
          {...{
            count: 1,
            open: autoSlot549,
            onOpenChange: autoSlot550,
            onConfirm: async () => {
              if (!(autoSlot553 == null || autoSlot551)) {
                autoSlot552(true);
                try {
                  await onArchive(autoSlot553);
                } finally {
                  autoSlot552(false);
                }
              }
            },
          }}
        />
      }
    </>
  );
}
