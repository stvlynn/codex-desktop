// Restored from ref/webview/assets/automations-page-BWCJI7AO.js
// Stage 3 deep fill from `automations-page-BWCJI7AO/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 68 (verified 179/247).
// JSX calls converted: 228; mechanical renames: 624.
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 1/13
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

const deferredConversationC: any = undefined;
/** Unresolved companion (missing-export:settings/hourly.ts) */
const hourly: any = undefined;
/** Unresolved companion (missing-export:ui/deferred-ui-fu.ts) */
const deferredUiFu: any = undefined;
/** Unresolved companion (missing-export:composer/deferred-composer-tu.tsx) */
const DeferredComposerTu: any = undefined;
/** Unresolved companion (jsx-collision:identity@utils/identity.ts) */
const AppInitialAu: any = undefined;
/** Unresolved companion (missing-export:ui/deferred-bu-2.tsx) */
const DeferredBu: any = undefined;
/** Unresolved companion (jsx-collision:createPersistedAtomSetting@settings/setting-definition.ts) */
const AppInitialBu: any = undefined;
/** Unresolved companion (missing-export:boundaries/browser-use-plugin-facades.ts) */
const buildPluginInstallQuery: any = undefined;
/** Unresolved companion (missing-export:conversation/deferred-conversation-c.ts) */
const DeferredConversationCStub: any = undefined;
/** Unresolved companion (missing-export:ui/deferred-ui-cm.ts) */
const deferredUiCm: any = undefined;
/** Unresolved companion (missing-export:ui/deferred-ui-cr.tsx) */
const deferredUiCR: any = undefined;
/** Unresolved companion (jsx-collision:hourly@settings/hourly.ts) */
const AppInitialCu: any = undefined;
/** Unresolved companion (missing-export:ui/deferred-ui-dh.tsx) */
const deferredUiDH: any = undefined;
/** Unresolved companion (jsx-collision:stripMentionWrappers@composer/strip-mention-wrappers.ts) */
const AppInitialDN: any = undefined;
/** Unresolved companion (jsx-collision:automationUpdatePayloadFromDraft@automation/automation-update-payload-from-draft.ts) */
const AppInitialDu: any = undefined;
/** Unresolved companion (missing-export:boundaries/browser-use-plugin-facades.ts) */
const ensurePluginDisplayNameHelperInit: any = undefined;
/** Unresolved companion (jsx-collision:ensureSettingsPanelInit@settings/settings-panel.tsx) */
const AppInitialFC: any = undefined;
/** Unresolved companion (missing-export:ui/deferred-ui-fn.ts) */
const deferredUiFN: any = undefined;
/** Unresolved companion (missing-export:skills/skills-page-helpers.tsx) */
const useSetActiveProject: any = undefined;
/** Unresolved companion (missing-export:ui/deferred-ui-fu.ts) */
const deferredUiFuStub: any = undefined;
/** Unresolved companion (missing-export:skills/skills-page-helpers.tsx) */
const useAppScopeSetter: any = undefined;
/** Unresolved companion (jsx-collision:applyModelSettingsToAutomationDraft@automation/apply-model-settings-to-automation-draft.ts) */
const AppInitialGu: any = undefined;
/** Unresolved companion (missing-export:desktop/desktop-host-request.ts) */
const desktopHostRequest: any = undefined;
/** Unresolved companion (missing-export:boundaries/browser-use-ui-facades.tsx) */
const RevealInFileManagerButton: any = undefined;
/** Unresolved companion (missing-export:ui/deferred-ui-ie.tsx) */
const deferredUiIE: any = undefined;
/** Unresolved companion (missing-export:conversation/user-message2.ts) */
const userMessage2: any = undefined;
/** Unresolved companion (missing-export:icons/app-icon-jo.tsx) */
const AppIconJo: any = undefined;
/** Unresolved companion (missing-export:plugins/deferred-plugins-ku.ts) */
const deferredPluginsKu: any = undefined;
/** Unresolved companion (jsx-collision:isLiveAutomationEqual@automation/is-live-automation-equal.ts) */
const AppInitialKu: any = undefined;
/** Unresolved companion (jsx-collision:ensurePluginPageAnalyticsInit@boundaries/browser-use-plugin-facades.ts) */
const AppInitialKz: any = undefined;
/** Unresolved companion (missing-export:boundaries/browser-use-ui-facades.tsx) */
const AppInitialLj: any = undefined;
/** Unresolved companion (missing-export:ui/deferred-ui-m22-2.tsx) */
const DeferredUiM22: any = undefined;
/** Unresolved companion (jsx-collision:useInboxItemsController@inbox/use-inbox-items-controller.ts) */
const AppInitialMs: any = undefined;
/** Unresolved companion (jsx-collision:automationsNotShallowEqual@automation/automations-not-shallow-equal.ts) */
const AppInitialMu: any = undefined;
/** Unresolved companion (missing-export:ui/deferred-ui-n2.tsx) */
const DeferredUiN2: any = undefined;
/** Unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspaceNstInit: any = undefined;
/** Unresolved companion (missing-export:settings/settings-automations-save-tooltip-requirements.ts) */
const settingsAutomationsSaveTooltipRequirements: any = undefined;
/** Unresolved companion (jsx-collision:omitOwnKeys@utils/omit-own-keys.ts) */
const AppInitialNu: any = undefined;
/** Unresolved companion (missing-export:ui/deferred-ui-o22.tsx) */
const DeferredUiO22: any = undefined;
/** Unresolved companion (missing-export:hosts/deferred-hosts-o3.ts) */
const deferredHostsO3: any = undefined;
/** Unresolved companion (missing-export:ui/deferred-ui-ok.tsx) */
const deferredUiOk: any = undefined;
/** Unresolved companion (jsx-collision:areAutomationSchedulesEqual@automation/are-automation-schedules-equal.ts) */
const AppInitialOu: any = undefined;
/** Unresolved companion (jsx-collision:ensureConversationPageEsm_oZ_Init@conversation/conversation-page-esm-inits.ts) */
const AppInitialOZ: any = undefined;
/** Unresolved companion (jsx-collision:inboxItems@desktop/inbox-items.ts) */
const AppInitialPs: any = undefined;
/** Unresolved companion (missing-export:hosts/models.tsx) */
const Models: any = undefined;
/** Unresolved companion (jsx-collision:collaborationModeOrFallback@conversation/collaboration-mode-fields.ts) */
const AppInitialRr: any = undefined;
/** Unresolved companion (jsx-collision:deferredConversationS@conversation/deferred-conversation-s.ts) */
const AppInitialS: any = undefined;
/** Unresolved companion (jsx-collision:formatScheduleTimeOfDay@automation/format-schedule-time-of-day.ts) */
const AppInitialSu: any = undefined;
/** Unresolved companion (missing-export:environments/deferred-environments-tb2.tsx) */
const DeferredEnvironmentsTB2: any = undefined;
/** Unresolved companion (missing-export:composer/deferred-composer-tu.tsx) */
const deferredComposerTuStub: any = undefined;
/** Unresolved companion (jsx-collision:applyCronTemplateFields@automation/apply-cron-template-fields.ts) */
const AppInitialU: any = undefined;
/** Unresolved companion (jsx-collision:ensureSettingsEmptyStateInit@boundaries/browser-use-ui-facades.tsx) */
const AppInitialUj: any = undefined;
/** Unresolved companion (jsx-collision:ensureSettingsRowInit@settings/settings-row.tsx) */
const AppInitialVC: any = undefined;
/** Unresolved companion (missing-export:icons/browser-use-settings-icons.tsx) */
const AppInitialVO: any = undefined;
/** Unresolved companion (missing-export:conversation/heartbeat-thread-permissions-by-id2.tsx) */
const AppInitialVr: any = undefined;
/** Unresolved companion (jsx-collision:automationsShallowEqual@automation/automations-shallow-equal.ts) */
const AppInitialVu: any = undefined;
/** Unresolved companion (jsx-collision:useSearchParams@boundaries/react-router-navigation.tsx) */
const AppInitialW5: any = undefined;
/** Unresolved companion (jsx-collision:deferredWg@ui/deferred-wg-2.tsx) */
const AppInitialWg: any = undefined;
/** Unresolved companion (jsx-collision:buildAutomationDraftFromSeed@automation/build-automation-draft-from-seed.ts) */
const AppInitialWu: any = undefined;
/** Unresolved companion (missing-export:utils/apply-rounded-full.ts) */
const applyRoundedFull: any = undefined;
/** Unresolved companion (missing-export:ui/deferred-ui-wx.ts) */
const deferredUiWX: any = undefined;
/** Unresolved companion (missing-export:ui/deferred-ui-x9.ts) */
const deferredUiX9: any = undefined;
/** Unresolved companion (jsx-collision:automationCreatePayloadFromDraft@automation/automation-create-payload-from-draft.ts) */
const AppInitialXu: any = undefined;
/** Unresolved companion (missing-export:ui/deferred-ui-yo2.tsx) */
const DeferredUiYO2: any = undefined;
/** Unresolved companion (jsx-collision:deferredUiYo@ui/deferred-ui-yo.tsx) */
const AppInitialYo: any = undefined;
/** Unresolved companion (missing-export:mcp/presentation.tsx) */
const AppInitialYz: any = undefined;
/** Unresolved companion (missing-export:conversation/deferred-conversation-zr.tsx) */
const AppInitialZr: any = undefined;
/** Unresolved companion (jsx-collision:formatAutomationScheduleLabel@automation/format-automation-schedule-label.ts) */
const AppInitialZu: any = undefined;

export type AutomationsLayoutPageProps = Record<string, unknown>;

function AutomationsLayoutHelper1(copper) {
  return {
    conversationId: asThreadId(copper),
    hostId: LOCAL_HOST_ID,
    source: "automation_history",
  };
}
function AutomationsLayoutHelper2(gamma) {
  return (
    gamma.status !== "ARCHIVED" &&
    gamma.status !== "IN_PROGRESS" &&
    gamma.threadId != null
  );
}
async function AutomationsLayoutHelper3({ archiveThread, items }) {
  let onyx = items
      .filter(AutomationsLayoutHelper2)
      .map((item) => item.threadId),
    reef = await Promise.all(
      onyx.map(async (item) => {
        try {
          return (await archiveThread(item), true);
        } catch (amber) {
          return (
            appLogger.warning("automation_history_archive_failed", {
              safe: {},
              sensitive: {
                error: amber,
                threadId: item,
              },
            }),
            false
          );
        }
      }),
    ),
    birch = reef.filter(Boolean).length;
  return {
    succeededCount: birch,
    failedCount: reef.length - birch,
  };
}
var cedar = esmInit(() => {
  ensureAppShellAtomsInit();
  ensureAppShellAtomsInit();
  ensureComposerEsm_udt_Init();
});
function AutomationsLayoutHelper4(delta) {
  let {
      assistant = "chatgpt",
      mode,
      manualDisabled = false,
      manualLoading = false,
      manualTooltipContent,
      chatDisabled = false,
      onCreateManually,
      onCreateWithChat,
    } = delta,
    ember = useIntl();
  if (mode === "manual-draft") {
    let flint = manualTooltipContent == null,
      grove = ember.formatMessage(haven.create);
    let ivory = (
      <MemoizedFormattedMessage
        {...{
          ...haven.create,
        }}
      />
    );
    let jade = (
      <span className="inline-flex">
        {
          <Button
            {...{
              "aria-label": grove,
              color: "primary",
              disabled: manualDisabled,
              loading: manualLoading,
              size: "toolbar",
              onClick: onCreateManually,
              children: ivory,
            }}
          />
        }
      </span>
    );
    let kelp;
    return (
      <OptionalTooltip
        {...{
          delayOpen: true,
          disabled: flint,
          tooltipContent: manualTooltipContent,
          children: jade,
        }}
      />
    );
  }
  let lotus = (
    <MemoizedFormattedMessage
      {...{
        ...haven.createManually,
      }}
    />
  );
  let maple = lotus,
    nova = ember.formatMessage(haven.create);
  let olive = (manualDisabled || manualLoading) && chatDisabled,
    pearl = ember.formatMessage(haven.newScheduledTaskOptions);
  let quartz =
    assistant === "codex" ? (
      <MemoizedFormattedMessage
        {...{
          ...haven.createWithCodex,
        }}
      />
    ) : (
      <MemoizedFormattedMessage
        {...{
          ...haven.createWithChat,
        }}
      />
    );
  let raven = (
    <DropdownMenu.Item
      {...{
        LeftIcon: AppIconSR,
        disabled: chatDisabled,
        onSelect: onCreateWithChat,
        children: quartz,
      }}
    />
  );
  let sage = manualDisabled || manualLoading,
    tide = manualDisabled ? manualTooltipContent : undefined,
    umber = (
      <DropdownMenu.Item
        {...{
          LeftIcon: AppIconaR,
          disabled: sage,
          tooltipText: tide,
          onSelect: onCreateManually,
          children: maple,
        }}
      />
    );
  let violet = (
    <>
      {raven}
      {umber}
    </>
  );
  let willow = (
    <MemoizedFormattedMessage
      {...{
        ...haven.create,
      }}
    />
  );
  return (
    <CompoundButtonMenu
      color="primary"
      size="toolbar"
      primaryAriaLabel={nova}
      primaryDisabled={chatDisabled}
      dropdownDisabled={olive}
      secondaryAriaLabel={pearl}
      onClick={onCreateWithChat}
      dropdownAlign="end"
      dropdownContent={violet}
    >
      {willow}
    </CompoundButtonMenu>
  );
}
var xenon,
  yarn,
  haven,
  zinc = esmInit(() => {
    xenon = reactCompilerRuntime();
    ensureIntlFormattersInit();
    Button();
    AppInitialYz();
    ensureDropdownMenuInit();
    ensureComposerEsm_Hlt_Init();
    deferredUiCR();
    ensureComposerEsm_oR_Init();
    haven = identity({
      create: {
        id: "inbox.automations.create",
        defaultMessage: "Create",
        description: "Button label for creating a scheduled task",
      },
      createManually: {
        id: "inbox.automations.createMenu.setUpManually",
        defaultMessage: "Set up manually",
        description: "Menu item for opening the manual scheduled task editor",
      },
      createWithChat: {
        id: "inbox.automations.createWithChatGPT",
        defaultMessage: "Create with ChatGPT",
        description:
          "Menu item for creating a scheduled task by chatting with ChatGPT",
      },
      createWithCodex: {
        id: "inbox.automations.createWithCodex",
        defaultMessage: "Create with Codex",
        description:
          "Menu item for creating a scheduled task by working with Codex",
      },
      newScheduledTaskOptions: {
        id: "inbox.automations.createMenu.options",
        defaultMessage: "Create scheduled task options",
        description:
          "Aria label for the scheduled task creation dropdown button",
      },
    });
  });
function AutomationsLayoutHelper5(apex) {
  let {
      archiveableItemCount,
      hasUnreadItems,
      isArchiving,
      onArchiveAll,
      onMarkAllRead,
    } = apex,
    bloom = useIntl(),
    [coral, drift] = echo.useState(false),
    fern = bloom.formatMessage({
      id: "inbox.automations.history.actions",
      defaultMessage: "Previous run actions",
      description:
        "Aria label for the automation history actions dropdown trigger",
    });
  let glade = (
    <RevealInFileManagerButton
      {...{
        label: fern,
        className:
          "h-6 w-6 rounded-md !p-1 text-token-foreground opacity-75 hover:opacity-100",
        color: "ghostActive",
        size: "icon",
      }}
    />
  );
  let haze = !hasUnreadItems,
    iris = (
      <MemoizedFormattedMessage
        {...{
          id: "inbox.automations.history.markAllRead",
          defaultMessage: "Mark all as read",
          description: "Dropdown menu item to mark all automation runs as read",
        }}
      />
    );
  let jazz = (
    <DropdownMenu.Item
      {...{
        LeftIcon: Zlt,
        disabled: haze,
        onSelect: onMarkAllRead,
        children: iris,
      }}
    />
  );
  let kite = archiveableItemCount === 0 || isArchiving,
    lane,
    mist;
  lane = () => drift(true);
  mist = (
    <MemoizedFormattedMessage
      {...{
        id: "inbox.automations.history.archiveAll",
        defaultMessage: "Archive all",
        description: "Dropdown menu item to archive all automation runs",
      }}
    />
  );
  let nook = (
    <DropdownMenu.Item
      {...{
        LeftIcon: AppIconJo,
        disabled: kite,
        onSelect: lane,
        children: mist,
      }}
    />
  );
  let opal = (
    <DropdownMenuPopover
      {...{
        align: "end",
        contentWidth: "xs",
        triggerButton: glade,
        children: [jazz, nook],
      }}
    />
  );
  let pine = (
    <AutomationsLayoutHelper6
      {...{
        count: archiveableItemCount,
        open: coral,
        onConfirm: onArchiveAll,
        onOpenChange: drift,
      }}
    />
  );
  return (
    <>
      {opal}
      {pine}
    </>
  );
}
function AutomationsLayoutHelper6(quill) {
  let { count, open, onConfirm, onOpenChange } = quill,
    ridge = (event) => {
      event.preventDefault();
      onOpenChange(false);
      onConfirm();
    };
  let silk = (
    <DialogClose
      {...{
        className: "contents",
        children: (
          <MemoizedFormattedMessage
            {...{
              id: "inbox.automations.history.archiveAllConfirmTitleNatural",
              defaultMessage:
                "{count, plural, one {Archive this run?} other {Archive # runs?}}",
              description: "Confirmation title for archiving automation runs",
              values: {
                count,
              },
            }}
          />
        ),
      }}
    />
  );
  let talon = (
    <DialogOverlay
      {...{
        className: "contents",
        children: (
          <MemoizedFormattedMessage
            {...{
              id: "inbox.automations.history.archiveAllConfirmSubtitleNatural",
              defaultMessage:
                "{count, plural, one {You can find this run’s chat later in archived chats} other {You can find these runs’ chats later in archived chats}}",
              description:
                "Confirmation subtitle for archiving automation runs",
              values: {
                count,
              },
            }}
          />
        ),
      }}
    />
  );
  let ultra = (
    <DialogSection
      {...{
        children: (
          <DialogHeader
            {...{
              title: silk,
              subtitle: talon,
            }}
          />
        ),
      }}
    />
  );
  let vale = () => onOpenChange(false);
  let wave = (
    <MemoizedFormattedMessage
      {...{
        id: "inbox.automations.history.archiveAllCancel",
        defaultMessage: "Cancel",
        description: "Cancel button label for archiving automation runs",
      }}
    />
  );
  let yarn2 = (
    <Button
      {...{
        color: "ghost",
        type: "button",
        onClick: vale,
        children: wave,
      }}
    />
  );
  let zephyr = (
    <Button
      {...{
        color: "danger",
        type: "submit",
        children: (
          <MemoizedFormattedMessage
            {...{
              id: "inbox.automations.history.archiveAllConfirm",
              defaultMessage:
                "{count, plural, one {Archive} other {Archive all}}",
              description: "Confirm button label for archiving automation runs",
              values: {
                count,
              },
            }}
          />
        ),
      }}
    />
  );
  let atlas = (
    <DialogSection
      {...{
        children: (
          <DialogFooter
            {...{
              children: [yarn2, zephyr],
            }}
          />
        ),
      }}
    />
  );
  let brine = (
    <DialogBody
      {...{
        as: "form",
        onSubmit: ridge,
        children: [ultra, atlas],
      }}
    />
  );
  return (
    <DialogWithTrigger
      {...{
        open,
        onOpenChange,
        size: "compact",
        children: brine,
      }}
    />
  );
}
var crest,
  echo,
  dusk,
  $r = esmInit(() => {
    crest = reactCompilerRuntime();
    echo = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    Button();
    ensureComposerEsm_YS_Init();
    ensureComposerEsm_GS_Init();
    ensureDropdownMenuInit();
    workspaceRootFinderMessages();
    AppInitialYo();
    ensureDropdownMenuPopoverInit();
  });
