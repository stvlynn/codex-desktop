// Restored from ref/webview/assets/automations-page-BWCJI7AO.js
// Stage 3 deep fill from `automations-page-BWCJI7AO/auto-polished.tsx` with companion import rewrite.
// Soft-shell replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 68 (verified 179/247).
// JSX calls converted: 228; mechanical renames: 624.
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 7/13
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
} from "../../composer/composer-appscope-atoms";
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
} from "../../composer/composer-esm-inits";
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
const AppInitialAu: any = undefined;
const AppInitialBu: any = undefined;
const AppInitialCu: any = undefined;
const AppInitialDu: any = undefined;
const AppInitialGu: any = undefined;
const AppInitialKu: any = undefined;
const AppInitialMu: any = undefined;
const AppInitialOu: any = undefined;
const AppInitialU: any = undefined;
const AppInitialVu: any = undefined;
const AppInitialW5: any = undefined;
const AppInitialWu: any = undefined;
const AutomationsLayoutHelper14: any = undefined;
const AutomationsLayoutHelper18: any = undefined;
const AutomationsLayoutHelper21: any = undefined;
const AutomationsLayoutHelper22: any = undefined;
const AutomationsLayoutHelper23: any = undefined;
const AutomationsLayoutHelper7: any = undefined;
const DeferredEnvironmentsTB2: any = undefined;
const autoSlot360: any = undefined;
const cascade: any = undefined;
const deferredComposerTuStub: any = undefined;
const deferredHostsO3: any = undefined;
const deferredUiFuStub: any = undefined;
const deferredUiX9: any = undefined;
const useAppScopeSetter: any = undefined;
const useSetActiveProject: any = undefined;

function AutomationsLayoutHelper34({
  automations,
  automationHistoryItems,
  unreadAutomationIds,
  isAutomationsLoading,
  onMarkAllRead,
}) {
  let quartic = useAppScope(ensureComposerEsm__8_Init),
    spiral = useIntl(),
    helix = automationDraftWithHeartbeatKind(
      UseFeatureGateEnabled("1488233300"),
    ),
    vortex = useStepsProseAtom() === THREAD_DETAIL_LEVEL_STEPS_PROSE,
    cyclone = useAppScopeValue(deferredUiX9),
    tempest = useQueryClient(),
    monsoon = useAppScopeValue(deferredHostsO3),
    zephyr2 = usePluginScheduledTasksN({
      hostId: LOCAL_HOST_ID,
    })?.groups,
    breeze = useSetActiveProject(),
    squall = useNavigate(),
    gale = useLocation(),
    [blizzard, drizzle] = AppInitialW5(),
    [shower, torrent] = cascade.useState(null),
    rapids = shower != null,
    [eddy2, whirl] = cascade.useState(false),
    [surge, swell] = cascade.useState(false),
    breaker = cascade.useRef(null),
    [foam, spray] = cascade.useState(null),
    mist2 = cascade.useRef(false),
    fog = cascade.useRef(null),
    [cloud, cirrus] = cascade.useState(() => {
      let cumulus = AutomationsLayoutHelper7(gale.state);
      return cumulus == null
        ? helix
        : AppInitialU(DEFAULT_AUTOMATION_DRAFT, cumulus);
    }),
    [stratus, nimbus2] = cascade.useState(cloud),
    [aurora, corona] = cascade.useState(null),
    eclipse = blizzard.get("automationId"),
    solstice = blizzard.get("automationMode"),
    equinox =
      eclipse == null
        ? null
        : (automations.find((item) => item.id === eclipse) ?? null),
    meridian =
      solstice === "create"
        ? "create"
        : eclipse == null
          ? null
          : equinox == null
            ? isAutomationsLoading
              ? "loading"
              : "missing"
            : "edit",
    horizon = DOM_ONINPUT_EVENT_NAME(AppInitialBu),
    zenith2 = useAppScopeSetter(AppInitialBu),
    nadir = useAppScopeSetter(createGlobalStateSetting),
    { data } = ensureComposerEsm_YS_Init(),
    apex2 = HostCwdPathLabel({
      hostId: LOCAL_HOST_ID,
      cwd: null,
    }),
    vertex =
      horizon != null &&
      ((solstice === "create" && equinox == null) ||
        (equinox != null && horizon.id === equinox.id))
        ? horizon
        : null,
    autoSlot348 = applyModelSettingsToAutomationDraft({
      draft:
        (vertex != null && isBlankAutomationDraft(cloud)
          ? AppInitialWu({
              seed: vertex,
              targetAutomation: equinox,
              models: data?.models,
            })
          : null) ??
        (equinox != null && cloud.id !== equinox.id
          ? AppInitialCu(equinox, data?.models)
          : cloud),
      modelSettings: apex2,
    }),
    autoSlot349 = applyModelSettingsToAutomationDraft({
      draft:
        vertex != null && isBlankAutomationDraft(stratus)
          ? AppInitialWu({
              seed: vertex,
              targetAutomation: null,
              models: data?.models,
            })
          : stratus,
      modelSettings: apex2,
    }),
    autoSlot350 =
      meridian === "create" && AppInitialMu(autoSlot348, autoSlot349),
    autoSlot351 = (autoSlot352) => {
      cirrus((autoSlot353) => {
        let autoSlot354 = applyModelSettingsToAutomationDraft({
          draft:
            equinox != null && autoSlot353.id !== equinox.id
              ? AppInitialCu(equinox, data?.models)
              : vertex != null && isBlankAutomationDraft(autoSlot353)
                ? AppInitialWu({
                    seed: vertex,
                    targetAutomation: equinox,
                    models: data?.models,
                  })
                : autoSlot353,
          modelSettings: apex2,
        });
        return typeof autoSlot352 == "function"
          ? autoSlot352(autoSlot354)
          : autoSlot352;
      });
    },
    autoSlot355 = monsoon.data,
    { data: _data } = recentConversationsMetaQueryKey(),
    autoSlot356 = new Map(
      (_data ?? []).map((item) => [
        String(item.id),
        resolveConversationTitle(item) ?? String(item.id),
      ]),
    ),
    autoSlot357 = new Set(
      (_data ?? [])
        .filter(isThreadNeedsResumeActive)
        .map((item) => String(item.id)),
    ),
    autoSlot358 = Array.from(
      new Set(
        automationHistoryItems.flatMap((item) =>
          item.automationId != null &&
          item.threadId != null &&
          autoSlot357.has(item.threadId)
            ? [item.automationId]
            : [],
        ),
      ),
    ),
    { availablePlugins, installedPlugins, isLoading } =
      useInstalledPluginsQuery(LOCAL_HOST_ID),
    autoSlot359 = autoSlot360.default(
      [...availablePlugins, ...installedPlugins],
      (autoSlot361) => autoSlot361.plugin.id,
    ),
    autoSlot362 = new Set(availablePlugins.map((item) => item.plugin.id)),
    autoSlot363 = autoSlot359.map(AppInitialGu),
    $e = new Map(
      availablePlugins.map((item) => [
        item.plugin.id,
        {
          logoDarkUrl: item.composerIconPath ?? item.logoDarkPath,
          logoUrl: item.composerIconPath ?? item.logoPath,
        },
      ]),
    ),
    autoSlot364 = AutomationsLayoutHelper23({
      automations,
      runtimeSupportedPluginIds: autoSlot362,
      hostId: LOCAL_HOST_ID,
      isLoading,
      plugins: autoSlot359,
    }),
    autoSlot365 =
      equinox == null ? null : (autoSlot364.get(equinox.id) ?? null),
    autoSlot366 =
      autoSlot348.pluginTemplateId == null
        ? null
        : pluginIdFromScheduledTaskKey(autoSlot348.pluginTemplateId),
    autoSlot367 =
      autoSlot366 == null
        ? null
        : AutomationsLayoutHelper22({
            hostId: LOCAL_HOST_ID,
            isLoading,
            isSupportedByRuntime: autoSlot362.has(autoSlot366),
            plugin: autoSlot359.find((item) => item.plugin.id === autoSlot366),
            pluginId: autoSlot366,
          }),
    at =
      autoSlot348.kind === "cron" && autoSlot348.pluginTemplateId != null
        ? ((zephyr2 ?? [])
            .flatMap((item) =>
              item.templates.map((_item) => ({
                selection: deferredComposerTuStub({
                  pluginId: item.plugin.id,
                  template: _item,
                }),
                template: _item,
              })),
            )
            .find(
              ({ selection }) =>
                selection.pluginTemplateId === autoSlot348.pluginTemplateId,
            ) ?? null)
        : null,
    autoSlot368 = at?.selection ?? null,
    autoSlot369 = autoSlot368 != null && AppInitialOu(autoSlot348, autoSlot368),
    autoSlot370 = useAppScopeValue(DeferredEnvironmentsTB2),
    autoSlot371 = (autoSlot372) =>
      autoSlot372 === "~"
        ? spiral.formatMessage({
            id: "settings.automations.projectDropdown.none",
            defaultMessage: "None",
            description:
              "Label for selecting no project in the automation project dropdown",
          })
        : displayLabelForRootPath({
            root: autoSlot372,
            labels: autoSlot355?.labels ?? {},
          }),
    autoSlot373 = AutomationsLayoutHelper21({
      automations,
      intl: spiral,
      formatProjectLabel: (autoSlot374) =>
        autoSlot370.find((item) => item.projectId === autoSlot374)?.label ??
        autoSlot374,
      formatRootLabel: autoSlot371,
      threadLabelById: autoSlot356,
    }),
    _t = [...automations].sort((autoSlot375, autoSlot376) => {
      let autoSlot377 = autoSlot375.nextRunAt ?? 1 / 0,
        autoSlot378 = autoSlot376.nextRunAt ?? 1 / 0;
      return autoSlot377 === autoSlot378
        ? autoSlot375.name.localeCompare(autoSlot376.name)
        : autoSlot377 - autoSlot378;
    }),
    { trimmedName, trimmedPrompt, canSave } = AppInitialAu(autoSlot348),
    autoSlot379 =
      canSave && !(eclipse != null && equinox == null && isAutomationsLoading),
    autoSlot380 = deferredUiFuStub(autoSlot348),
    autoSlot381 =
      meridian === "edit" &&
      canSave &&
      autoSlot380 != null &&
      autoSlot348.status !== "DELETED"
        ? AppInitialDu({
            draft: autoSlot348,
            name: trimmedName,
            prompt: trimmedPrompt,
            status: autoSlot348.status,
            rrule: autoSlot380,
          })
        : null,
    autoSlot382 = useDebouncedValue(autoSlot381, 600),
    autoSlot383 = AppInitialVu(breaker.current, autoSlot381),
    autoSlot384 =
      autoSlot381 != null &&
      equinox != null &&
      !AppInitialKu(equinox, autoSlot381),
    autoSlot385 = meridian === "edit" && (autoSlot381 == null || autoSlot383),
    autoSlot386 = () => {
      zenith2(null);
    },
    autoSlot387 = ({ automationId, automationMode, replace = false }) => {
      let autoSlot388 = new URLSearchParams(blizzard);
      if (
        (automationId == null
          ? autoSlot388.delete("automationId")
          : autoSlot388.set("automationId", automationId),
        automationMode == null
          ? autoSlot388.delete("automationMode")
          : autoSlot388.set("automationMode", automationMode),
        replace)
      ) {
        drizzle(autoSlot388, {
          replace: true,
          state: null,
        });
        return;
      }
      drizzle(autoSlot388, {
        state: null,
      });
    },
    autoSlot389 = (autoSlot390 = helix) => {
      cirrus(autoSlot390);
      nimbus2(autoSlot390);
      whirl(false);
    },
    autoSlot391 = (autoSlot392) => {
      autoSlot389(autoSlot392);
      autoSlot386();
      autoSlot387({
        automationId: null,
        automationMode: "create",
      });
    },
    autoSlot393 = (autoSlot394) => {
      autoSlot351(AppInitialCu(autoSlot394, data?.models));
      autoSlot386();
      autoSlot387({
        automationId: autoSlot394.id,
      });
    },
    autoSlot395 = (autoSlot396) => {
      torrent(autoSlot396);
    },
    autoSlot397 = () => {
      autoSlot386();
      autoSlot387({
        replace: true,
      });
      autoSlot389();
    },
    autoSlot398 = (autoSlot399) => {
      switch (autoSlot399.type) {
        case "codex":
          autoSlot389();
          AutomationsLayoutHelper14({
            intl: spiral,
            startNewConversation: breeze,
          });
          return;
        case "close":
          autoSlot397();
          return;
        case "open-automation":
          autoSlot393(autoSlot399.automation);
          return;
        case "open-plugin":
          squall(autoSlot399.detailPath);
          return;
        case "plugin-template":
          autoSlot391(
            AppInitialU(DEFAULT_AUTOMATION_DRAFT, autoSlot399.template),
          );
          return;
        case "reset":
          autoSlot391(helix);
          return;
      }
    },
    autoSlot400 = (autoSlot401) => {
      AutomationsLayoutHelper18({
        hasUnsavedChanges: autoSlot350 || autoSlot385,
        perform: autoSlot398,
        setPending: corona,
        transition: autoSlot401,
      });
    },
    autoSlot402 = () => {
      autoSlot400({
        type: "reset",
      });
    },
    autoSlot403 = () => {
      autoSlot400({
        type: "codex",
      });
    },
    autoSlot404 = () => {
      let autoSlot405 = autoSlot367?.detailPath;
      autoSlot405 != null &&
        autoSlot400({
          type: "open-plugin",
          detailPath: autoSlot405,
        });
    },
    autoSlot406 = () => {
      let autoSlot407 = aurora;
      corona(null);
      autoSlot407 != null && autoSlot398(autoSlot407);
    },
    autoSlot408 = () => {
      tempest.invalidateQueries({
        queryKey: buildVscodeQueryKey("list-automations"),
      });
    };
  return undefined as any;
}
