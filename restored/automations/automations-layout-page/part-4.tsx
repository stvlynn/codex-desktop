// Restored from ref/webview/assets/automations-page-BWCJI7AO.js
// Stage 3 deep fill from `automations-page-BWCJI7AO/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 68 (verified 179/247).
// JSX calls converted: 228; mechanical renames: 624.
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 4/13
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
const AppInitialKz: any = undefined;
const AppInitialVC: any = undefined;
const AutomationsLayoutHelper20: any = undefined;
const DeferredBu: any = undefined;
const buildPluginInstallQuery: any = undefined;
const ensurePluginDisplayNameHelperInit: any = undefined;

function AutomationsLayoutHelper21({
  automations,
  intl,
  formatProjectLabel,
  formatRootLabel,
  threadLabelById,
}) {
  let oscar = new Map();
  for (let papa of automations)
    oscar.set(
      papa.id,
      AutomationsLayoutHelper20({
        automation: papa,
        intl,
        formatProjectLabel,
        formatRootLabel,
        threadLabelById,
      }),
    );
  return oscar;
}
var romeo = esmInit(() => {
  ensureAppShellAtomsInit();
  DeferredBu();
});
function AutomationsLayoutHelper22({
  hostId,
  isLoading,
  isSupportedByRuntime,
  plugin,
  pluginId,
}) {
  if (plugin == null)
    return {
      state: isLoading ? "loading" : "unavailable",
      detailPath: null,
      displayName: null,
      logoDarkUrl: null,
      logoUrl: null,
      pluginId,
    };
  let sierra = "available";
  return (
    plugin.plugin.installed
      ? plugin.plugin.enabled
        ? plugin.plugin.availability === "AVAILABLE"
          ? isSupportedByRuntime ||
            (sierra = isLoading ? "loading" : "unavailable")
          : (sierra = "unavailable")
        : (sierra = "disabled")
      : (sierra = "uninstalled"),
    {
      state: sierra,
      detailPath: buildPluginInstallQuery(plugin, {
        hostId,
      }),
      displayName: DialogWithTrigger(plugin),
      logoDarkUrl: plugin.composerIconPath ?? plugin.logoDarkPath,
      logoUrl: plugin.composerIconPath ?? plugin.logoPath,
      pluginId,
    }
  );
}
function AutomationsLayoutHelper23({
  automations,
  runtimeSupportedPluginIds,
  hostId,
  isLoading,
  plugins,
}) {
  let tango = new Map(plugins.map((item) => [item.plugin.id, item])),
    victor = new Map();
  for (let whiskey of automations) {
    let xray =
      whiskey.kind === "cron" && whiskey.pluginTemplateId != null
        ? pluginIdFromScheduledTaskKey(whiskey.pluginTemplateId)
        : null;
    xray != null &&
      victor.set(
        whiskey.id,
        AutomationsLayoutHelper22({
          hostId,
          isLoading,
          isSupportedByRuntime: runtimeSupportedPluginIds.has(xray),
          plugin: tango.get(xray),
          pluginId: xray,
        }),
      );
  }
  return victor;
}
var yankee = esmInit(() => {
  ensureAppShellAtomsInit();
  ensurePluginDisplayNameHelperInit();
  AppInitialKz();
});
function AutomationsLayoutHelper24(zulu) {
  let { sourcePlugin, onOpenSourcePlugin } = zulu,
    argon = useIntl(),
    boron =
      sourcePlugin.detailPath == null || sourcePlugin.displayName == null
        ? undefined
        : argon.formatMessage(
            {
              id: "inbox.automations.openPluginSource",
              defaultMessage: "Open {plugin} plugin",
              description:
                "Accessible label for opening the plugin that contributed a scheduled task",
            },
            {
              plugin: sourcePlugin.displayName,
            },
          );
  let carbon = (
    <MemoizedFormattedMessage
      {...{
        id: "inbox.automations.pluginSourceLabel",
        defaultMessage: "From",
        description: "Label for the plugin that contributed a scheduled task",
      }}
    />
  );
  let neon = (
    <AppIconLV
      {...{
        className: "size-4",
      }}
    />
  );
  let radon = (
    <AppLogoImage
      {...{
        className: "size-4 shrink-0",
        alt: "",
        fallback: neon,
        logoDarkUrl: sourcePlugin.logoDarkUrl,
        logoUrl: sourcePlugin.logoUrl,
      }}
    />
  );
  let xenon2 = (
    <span className="min-w-0 truncate">
      {
        <AutomationsLayoutHelper25
          {...{
            sourcePlugin,
          }}
        />
      }
    </span>
  );
  let helium = (
    <span className="flex max-w-80 min-w-0 items-center justify-end gap-1.5 text-sm text-token-text-primary">
      {radon}
      {xenon2}
    </span>
  );
  let lithium = sourcePlugin.detailPath == null;
  return (
    <ActionListRow
      {...{
        ariaLabel: boron,
        label: carbon,
        trailing: helium,
        variant: "nested",
        disabled: lithium,
        onClick: onOpenSourcePlugin,
      }}
    />
  );
}
function AutomationsLayoutHelper25(sodium) {
  let { sourcePlugin } = sodium,
    potassium = sourcePlugin.displayName;
  if (sourcePlugin.state === "loading") {
    let calcium;
    return (
      <MemoizedFormattedMessage
        {...{
          id: "inbox.automations.pluginSourceLoading",
          defaultMessage: "Loading plugin…",
          description:
            "Source label for a scheduled task while its plugin is loading",
        }}
      />
    );
  }
  if (potassium == null) {
    let iron;
    return (
      <span className="text-token-editor-warning-foreground">
        {
          <MemoizedFormattedMessage
            {...{
              id: "inbox.automations.pluginSourceUnavailable",
              defaultMessage: "Plugin unavailable",
              description:
                "Fallback source label for a scheduled task whose plugin is unavailable",
            }}
          />
        }
      </span>
    );
  }
  let cobalt = AutomationsLayoutHelper26;
  if (sourcePlugin.state === "disabled") {
    let nickel;
    return (
      <MemoizedFormattedMessage
        {...{
          id: "inbox.automations.pluginSourceDisabled",
          defaultMessage: "{plugin} · <warning>Disabled</warning>",
          description:
            "Source label for a scheduled task whose plugin is disabled",
          values: {
            plugin: potassium,
            warning: cobalt,
          },
        }}
      />
    );
  }
  if (sourcePlugin.state === "uninstalled") {
    let copper2;
    return (
      <MemoizedFormattedMessage
        {...{
          id: "inbox.automations.pluginSourceUninstalled",
          defaultMessage: "{plugin} · <warning>Uninstalled</warning>",
          description:
            "Source label for a scheduled task whose plugin is uninstalled",
          values: {
            plugin: potassium,
            warning: cobalt,
          },
        }}
      />
    );
  }
  if (sourcePlugin.state === "unavailable") {
    let silver;
    return (
      <MemoizedFormattedMessage
        {...{
          id: "inbox.automations.pluginSourceUnavailableStatus",
          defaultMessage: "{plugin} · <warning>Unavailable</warning>",
          description:
            "Source label for a scheduled task whose plugin is unavailable",
          values: {
            plugin: potassium,
            warning: cobalt,
          },
        }}
      />
    );
  }
  return potassium;
}
function AutomationsLayoutHelper26(gold) {
  return <span className="text-token-editor-warning-foreground">{gold}</span>;
}
var lead,
  tin,
  zinc2 = esmInit(() => {
    lead = reactCompilerRuntime();
    ensureIntlFormattersInit();
    ensureComposerEsm_AG_Init();
    ensureComposerEsm_RV_Init();
    AppInitialVC();
  });
function AutomationsLayoutHelper27(chrome) {
  let { sourcePlugin, onOpenSourcePlugin } = chrome;
  if (
    sourcePlugin == null ||
    sourcePlugin.state === "available" ||
    sourcePlugin.state === "loading"
  )
    return null;
  let titan;
  bb0: switch (sourcePlugin.state) {
    case "disabled": {
      let vanadium;
      vanadium = (
        <MemoizedFormattedMessage
          {...{
            id: "inbox.automations.pluginUnavailable.disabled",
            defaultMessage:
              "The source plugin for this scheduled task is disabled. This task may not work properly.",
            description:
              "Warning shown when a linked scheduled task's source plugin is disabled",
          }}
        />
      );
      titan = vanadium;
      break bb0;
    }
    case "uninstalled": {
      let manganese;
      manganese = (
        <MemoizedFormattedMessage
          {...{
            id: "inbox.automations.pluginUnavailable.uninstalled",
            defaultMessage:
              "The source plugin for this scheduled task is uninstalled. This task may not work properly.",
            description:
              "Warning shown when a linked scheduled task's source plugin is uninstalled",
          }}
        />
      );
      titan = manganese;
      break bb0;
    }
    case "unavailable": {
      let scandium;
      scandium = (
        <MemoizedFormattedMessage
          {...{
            id: "inbox.automations.pluginUnavailable.unavailable",
            defaultMessage:
              "The source plugin for this scheduled task is unavailable. This task may not work properly.",
            description:
              "Warning shown when a linked scheduled task's source plugin is unavailable",
          }}
        />
      );
      titan = scandium;
    }
  }
  let yttrium =
    sourcePlugin.detailPath == null ? null : (
      <MemoizedFormattedMessage
        {...{
          id: "inbox.automations.pluginUnavailable.openPlugin",
          defaultMessage: "Open plugin",
          description:
            "Button label for opening an unavailable source plugin from a scheduled task",
        }}
      />
    );
  return (
    <Callout
      {...{
        Icon: AppIconyct,
        type: "warning",
        content: titan,
        primaryCtaText: yttrium,
        onPrimaryCtaClick: onOpenSourcePlugin,
      }}
    />
  );
}
var niobium,
  moly,
  techne = esmInit(() => {
    niobium = reactCompilerRuntime();
    ensureIntlFormattersInit();
    ensureCalloutInit();
    ensureHooksInfoIconInit();
  });
