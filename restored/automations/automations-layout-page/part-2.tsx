// Restored from ref/webview/assets/automations-page-BWCJI7AO.js
// Stage 3 deep fill from `automations-page-BWCJI7AO/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 68 (verified 179/247).
// JSX calls converted: 228; mechanical renames: 624.
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 2/13
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
const AppInitialLj: any = undefined;
const AppInitialNu: any = undefined;
const AppInitialUj: any = undefined;
const AppInitialXu: any = undefined;
const DeferredBu: any = undefined;
const deferredComposerTuStub: any = undefined;
const deferredUiDH: any = undefined;
const deferredUiIE: any = undefined;

function AutomationsLayoutHelper7(eddy) {
  let fjord = gust.safeParse(eddy);
  if (!fjord.success) return null;
  let { pluginId, template } = fjord.data,
    helm = deferredComposerTuStub({
      pluginId,
      template,
    });
  return isValidScheduleConfig({
    ...helm.scheduleConfig,
    mode: "custom",
    customRrule: template.rrule,
  })
    ? helm
    : null;
}
var gust,
  ink = esmInit(() => {
    ensureZodRuntime();
    DeferredBu();
    AppInitialNu();
    gust = zodObject({
      pluginId: ensureZodRuntime().min(1),
      template: zodObject({
        key: ensureZodRuntime().min(1),
        name: ensureZodRuntime().trim().min(1),
        prompt: ensureZodRuntime().trim().min(1),
        rrule: ensureZodRuntime().trim().min(1),
      }),
    });
  }),
  jewel,
  Knoll,
  lagoon = esmInit(() => {
    react();
    Knoll = (meadow) => (
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...meadow}
      >
        <path
          d="M10.0004 2.04327C13.4217 2.04346 16.2944 4.61966 16.6655 8.02081L17.227 13.1712L17.2358 13.3353C17.2361 14.1509 16.5738 14.8312 15.7377 14.8314H13.9018C13.5034 16.6195 11.9085 17.9562 10.0004 17.9564C8.09213 17.9564 6.49643 16.6196 6.09808 14.8314H4.26214C3.37065 14.8311 2.67643 14.0575 2.77288 13.1712L3.3344 8.02081L3.37737 7.70441C3.88652 4.46108 6.68591 2.04327 10.0004 2.04327ZM7.48089 14.8314C7.8428 15.8758 8.83285 16.6263 10.0004 16.6263C11.1678 16.6261 12.1571 15.8756 12.519 14.8314H7.48089ZM10.0004 3.37335C7.34338 3.37335 5.09898 5.31146 4.69085 7.91144L4.65667 8.16534L4.09515 13.3148C4.08429 13.4142 4.16215 13.501 4.26214 13.5013H15.7377C15.8252 13.5012 15.8956 13.4351 15.9047 13.3519V13.3148L15.3432 8.16534C15.0458 5.43887 12.743 3.37354 10.0004 3.37335Z"
          fill="currentColor"
        />
      </svg>
    );
  });
function AutomationsLayoutHelper8(nimbus) {
  let {
      action,
      description,
      hostId,
      icon,
      iconClassName,
      isAddDisabled,
      isCreating,
      isSelected,
      name,
      scheduleLabel,
      onSelect,
    } = nimbus,
    orbit = useIntl(),
    plume =
      action === "add"
        ? orbit.formatMessage(
            {
              id: "inbox.automations.emptySuggestion.add",
              defaultMessage: "Add {name} scheduled task",
              description:
                "Accessible label for immediately adding a suggested scheduled task",
            },
            {
              name,
            },
          )
        : orbit.formatMessage(
            {
              id: "inbox.automations.pluginTemplate.setUp",
              defaultMessage: "Set up {name} scheduled task",
              description:
                "Accessible label for opening a plugin scheduled task template in the setup panel",
            },
            {
              name,
            },
          );
  let quill2 = plume,
    ripple = cx("relative inline-flex", iconClassName);
  let shard = isCreating ? (
    <Spinner
      {...{
        className: "icon-sm",
      }}
    />
  ) : (
    <>
      <span
        className={
          "icon-sm group-focus-within:opacity-0 group-focus-within/add:opacity-0 group-hover:opacity-0 group-hover/add:opacity-0 [&>svg]:size-full"
        }
      >
        {icon}
      </span>
      {
        <PlusIcon
          {...{
            className:
              "icon-sm absolute inset-0 text-token-description-foreground opacity-0 group-focus-within:opacity-100 group-focus-within/add:opacity-100 group-hover:opacity-100 group-hover/add:opacity-100",
          }}
        />
      }
    </>
  );
  let thorn = <span className={ripple}>{shard}</span>;
  let umbra = (
    <span className="pointer-events-auto inline-flex">
      {
        <Button
          {...{
            "aria-label": quill2,
            className: "group/add",
            color: "ghostTertiary",
            disabled: isAddDisabled,
            size: "iconMd",
            uniform: true,
            onClick: onSelect,
            children: thorn,
          }}
        />
      }
    </span>
  );
  let vista = (
    <OptionalTooltip
      {...{
        tooltipContent: quill2,
        children: umbra,
      }}
    />
  );
  let wisp = (
    <ConversationMarkdownText
      className="line-clamp-1"
      cwd={null}
      hostId={hostId}
      pluginMentionPresentation="text"
      text={description}
      variant="compact"
    />
  );
  return (
    <EnsureSelectableListRowInit
      {...{
        ariaLabel: name,
        className: "automation-row",
        compactSecondLine: true,
        hasInteractiveContent: true,
        icon: vista,
        isDisabled: isAddDisabled,
        isSelected,
        secondaryTitle: scheduleLabel,
        secondLine: wisp,
        title: name,
        onSelect,
      }}
    />
  );
}
var yonder,
  zeal,
  anvil = esmInit(() => {
    yonder = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureIntlFormattersInit();
    Button();
    ensureSelectableListRowActivationInit();
    ensureComposerEsm_Sut_Init();
    ensureComposerEsm_Hlt_Init();
    AppInitialXu();
    ensureComposerEsm_tlt_Init();
  });
function Ui() {
  return (
    <AppInitialLj className="min-h-56 text-token-input-placeholder-foreground">
      {
        <MemoizedFormattedMessage
          {...{
            id: "inbox.automations.search.emptyTitle",
            defaultMessage: "No scheduled tasks found",
            description:
              "Empty state title when no scheduled tasks match a search",
          }}
        />
      }
    </AppInitialLj>
  );
}
function AutomationsLayoutHelper9(basalt) {
  let {
      automations,
      canAdd,
      creatingAutomationId,
      emptyState,
      pluginIconsById,
      pluginTemplateGroups,
      searchQuery,
      selectedPluginTemplateId,
      showDivider,
      onAdd,
      onSelectPluginTemplate,
    } = basalt,
    cinder = useIntl(),
    dune,
    ember2;
  {
    let forge = searchQuery.trim().toLocaleLowerCase(),
      granite = (harbor) =>
        !automations.some(
          (item) =>
            item.kind === "cron" &&
            item.name === harbor.name &&
            item.prompt === harbor.prompt,
        );
    let inlet;
    inlet = (jasper) => {
      let keel = OverlayPanelWithTitle(jasper.scheduleConfig, cinder) ?? "";
      return {
        suggestion: jasper,
        scheduleLabel: keel,
        searchTerms: [jasper.name, jasper.description, jasper.prompt, keel],
      };
    };
    ember2 = AutomationsLayoutHelper12(cinder)
      .filter(granite)
      .map(inlet)
      .filter((item) => AutomationsLayoutHelper11(item.searchTerms, forge));
    let ledge;
    ledge = (mesa) =>
      mesa.templates.map((item) => {
        let notch = deferredComposerTuStub({
            pluginId: mesa.plugin.id,
            template: item,
          }),
          oak = OverlayPanelWithTitle(notch.scheduleConfig, cinder) ?? "",
          prairie = pluginIconsById.get(mesa.plugin.id);
        return {
          suggestion: {
            ...notch,
            id: notch.pluginTemplateId,
            description: item.prompt,
            icon: (
              <AppLogoImage
                {...{
                  alt: "",
                  className: "icon-sm",
                  fallback: (
                    <AppIconLV
                      {...{
                        className: "icon-sm text-token-text-secondary",
                      }}
                    />
                  ),
                  logoDarkUrl: prairie?.logoDarkUrl,
                  logoUrl: prairie?.logoUrl,
                }}
              />
            ),
            iconClassName: "",
          },
          scheduleLabel: oak,
          searchTerms: [
            mesa.plugin.displayName,
            mesa.plugin.name,
            item.name,
            item.prompt,
            oak,
          ],
        };
      });
    dune = (pluginTemplateGroups ?? [])
      .flatMap(ledge)
      .filter((item) => AutomationsLayoutHelper11(item.searchTerms, forge));
  }
  let quarry = dune;
  if (ember2.length === 0 && quarry.length === 0) {
    let reef2;
    return emptyState == null ? null : <>{emptyState}</>;
  }
  let spire = showDivider
      ? "mt-3 border-t border-token-border pt-3"
      : undefined,
    terrace =
      ember2.length > 0 ? (
        <AutomationsLayoutHelper10
          {...{
            action: "add",
            canAdd,
            creatingAutomationId,
            selectedSuggestionId: null,
            suggestions: ember2,
            title: (
              <MemoizedFormattedMessage
                {...{
                  id: "inbox.automations.suggestions",
                  defaultMessage: "Suggestions",
                  description:
                    "Heading above suggested scheduled task templates",
                }}
              />
            ),
            onSelect: onAdd,
          }}
        />
      ) : null;
  let upland =
    quarry.length > 0 ? (
      <AutomationsLayoutHelper10
        {...{
          action: "set-up",
          canAdd: true,
          creatingAutomationId: null,
          selectedSuggestionId: selectedPluginTemplateId,
          suggestions: quarry,
          title: (
            <MemoizedFormattedMessage
              {...{
                id: "inbox.automations.fromPlugins",
                defaultMessage: "From Plugins",
                description:
                  "Heading above scheduled task templates provided by plugins",
              }}
            />
          ),
          onSelect: onSelectPluginTemplate,
        }}
      />
    ) : null;
  return (
    <div className={spire}>
      {terrace}
      {upland}
    </div>
  );
}
function AutomationsLayoutHelper10(verge) {
  let {
      action,
      canAdd,
      creatingAutomationId,
      selectedSuggestionId,
      suggestions,
      title,
      onSelect,
    } = verge,
    warren = (
      <h2 className="px-2 pb-2 text-lg leading-6 text-token-text-secondary">
        {title}
      </h2>
    );
  let xeric;
  {
    let yarrow;
    yarrow = (zonal) => {
      let { suggestion, scheduleLabel } = zonal;
      return (
        <div key={suggestion.id} role="listitem">
          {
            <AutomationsLayoutHelper8
              {...{
                action,
                description: suggestion.description,
                hostId: LOCAL_HOST_ID,
                icon: suggestion.icon,
                iconClassName: suggestion.iconClassName,
                isAddDisabled: !canAdd || creatingAutomationId != null,
                isCreating: creatingAutomationId === suggestion.id,
                isSelected: selectedSuggestionId === suggestion.id,
                name: suggestion.name,
                scheduleLabel,
                onSelect: () => {
                  onSelect(suggestion);
                },
              }}
            />
          }
        </div>
      );
    };
    xeric = suggestions.map(yarrow);
  }
  let alpine = (
    <div className="flex flex-col gap-1" role="list">
      {xeric}
    </div>
  );
  return (
    <section className="pt-3 first:pt-0">
      {warren}
      {alpine}
    </section>
  );
}
function AutomationsLayoutHelper11(brook, canyon) {
  return brook.some((item) => item.toLocaleLowerCase().includes(canyon));
}
function AutomationsLayoutHelper12(dale) {
  return [
    {
      id: "daily-brief",
      icon: <Knoll {...{}} />,
      iconClassName: "text-token-charts-blue",
      name: dale.formatMessage({
        id: "inbox.automations.emptySuggestion.dailyBrief",
        defaultMessage: "Daily brief",
        description: "Suggested automation button label",
      }),
      description: dale.formatMessage({
        id: "inbox.automations.emptySuggestion.dailyBrief.description",
        defaultMessage:
          "Start each weekday with a summary of your calendar, unread email, and priorities",
        description: "Description of the daily brief automation example",
      }),
      prompt: dale.formatMessage({
        id: "inbox.automations.emptySuggestion.dailyBrief.taskPrompt",
        defaultMessage:
          "Give me a morning brief with what's on my calendar, important unread emails, and anything that needs my attention today.",
        description: "Task prompt for the daily brief automation example",
      }),
      scheduleConfig: {
        mode: "weekdays",
        intervalHours: 24,
        intervalMinutes: null,
        weekdays: ["MO", "TU", "WE", "TH", "FR"],
        time: "08:00",
        customRrule: "",
      },
    },
    {
      id: "weekly-review",
      icon: <AppIconEH />,
      iconClassName: "text-token-charts-purple",
      name: dale.formatMessage({
        id: "inbox.automations.emptySuggestion.weeklyReview",
        defaultMessage: "Weekly review",
        description: "Suggested automation button label",
      }),
      description: dale.formatMessage({
        id: "inbox.automations.emptySuggestion.weeklyReview.description",
        defaultMessage:
          "Turn your recent work into a concise status update every Friday",
        description: "Description of the weekly review automation example",
      }),
      prompt: dale.formatMessage({
        id: "inbox.automations.emptySuggestion.weeklyReview.taskPrompt",
        defaultMessage:
          "Review what I worked on this week and draft a short status update.",
        description: "Task prompt for the weekly review automation example",
      }),
      scheduleConfig: {
        mode: "weekly",
        intervalHours: 24,
        intervalMinutes: null,
        weekdays: ["FR"],
        time: "16:00",
        customRrule: "",
      },
    },
    {
      id: "follow-up-monitor",
      icon: <AppIconFE {...{}} />,
      iconClassName: "text-token-charts-green",
      name: dale.formatMessage({
        id: "inbox.automations.emptySuggestion.followUpMonitor",
        defaultMessage: "Follow-up monitor",
        description: "Suggested automation button label",
      }),
      description: dale.formatMessage({
        id: "inbox.automations.emptySuggestion.followUpMonitor.description",
        defaultMessage:
          "Review recent email and calendar activity and flag anything that needs your attention",
        description: "Description of the follow-up monitor automation example",
      }),
      prompt: dale.formatMessage({
        id: "inbox.automations.emptySuggestion.followUpMonitor.taskPrompt",
        defaultMessage:
          "Review recent email and calendar activity, highlight meaningful changes, and flag anything that needs my attention.",
        description: "Task prompt for the follow-up monitor automation example",
      }),
      scheduleConfig: {
        mode: "weekdays",
        intervalHours: 24,
        intervalMinutes: null,
        weekdays: ["MO", "TU", "WE", "TH", "FR"],
        time: "09:00",
        customRrule: "",
      },
    },
  ];
}
var estuary,
  firth,
  glen = esmInit(() => {
    estuary = reactCompilerRuntime();
    ensureIntlFormattersInit();
    DeferredBu();
    AppInitialNu();
    ensureComposerEsm_AG_Init();
    AppInitialUj();
    ensureComposerEsm_RV_Init();
    lagoon();
    deferredUiIE();
    deferredUiDH();
    ensureAppShellAtomsInit();
    anvil();
  });
