// Restored from ref/webview/assets/debug-modal-C6a0m7Ey.js
// Wave GA — full polished body from `debug-modal-C6a0m7Ey/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 102 (verified 177/279).
// Wave5d — careful split for quality-gate flat limit (no --allow-flat).
// Careful split 2/17
/* split-lane-import-depth:1 */

import { debugOverride } from "../../account/debug-override";
import { ensureAccountPlanQueryInit } from "../../account/ensure-account-plan-query-init";
import { isStartingProcessExpired } from "../../account/is-starting-process-expired";
import { isBusinessPlan } from "../../account/plan-type-helpers";
import {
  appActionSidebarProjectRefSchema,
  ensureAppActionPayloadSchemasInit,
} from "../../actions/app-action-payload-schemas";
import { CODEX_APPSHOT_SHORTCUT_CHANGED_TYPE } from "../../analytics/codex-appshot-shortcut-changed-type";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexConversationalOnboardingExecutionAction } from "../../analytics/codex-conversational-onboarding-execution-action";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { ShellLayoutMetricsContext } from "../../app-shell/shell-layout-metrics-context";
import {
  siteAnalyticsEventsPath,
  siteAnalyticsPath,
} from "../../appgen/site-analytics-paths";
import {
  clampZoomPercent,
  decayZoomPercent,
} from "../../artifact/clamp-zoom-percent";
import { useUpdateAuthNonce } from "../../auth/use-update-auth-nonce";
import { clearUpcomingLocalDatetimeEntries } from "../../automation/clear-upcoming-local-datetime-entries";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import { writingBlocksControllerAtom } from "../../composer/composer-appscope-atoms";
import {
  ensureComposerEsm_B7_Init,
  ensureComposerEsm_E4_Init,
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_K1_Init,
  ensureComposerEsm_ML_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_P5_Init,
  ensureComposerEsm_Sp_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_TI_Init,
} from "../../composer/composer-esm-inits";
import {
  ensureConversationPageEsm_A0_Init,
  ensureConversationPageEsm_Act_Init,
  ensureConversationPageEsm_Mx_Init,
} from "../../conversation/conversation-page-esm-inits";
import { useAtomPair } from "../../boundaries/persisted-atom";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { useNavigate } from "../../boundaries/react-router-navigation";
import { chatgpt2 } from "../../browser/chatgpt2";
import { ensureCommandQueueActiveHelpersInit } from "../../commands/ensure-command-queue-active-helpers-init";
import { ensurePromptHistoryStorageInit } from "../../composer/ensure-prompt-history-storage-init";
import { WritingBlockRenderer } from "../../composer/writing-block-renderer";
import { APP_HOST_UPDATE_STATUS_PATH } from "../../config/app-host-update-status-path";
import { MCP_SERVERS_STATUS_PATH } from "../../config/mcp-servers-status-path";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { GeneratedImageTabs } from "../../conversation/generated-image-tabs";
import { CodexBuildEnvironment } from "../../env/codex-build-environment";
import { ensureRemoteSshConnectionEventInit } from "../../environments/ensure-remote-ssh-connection-event-init";
import { firstRepoMapEntry } from "../../environments/first-repo-map-entry";
import {
  CLOUD_ENVIRONMENT_SELECTOR_FEATURE_GATE_ID,
  PLAYGROUND_ONBOARDING_FEATURE_GATE_ID,
} from "../../feature-gates/feature-gate-ids";
import { filterOpenTargets } from "../../files/filter-open-targets";
import { WorkspaceDirectoryTreeSearch } from "../../files/workspace-directory-tree-search";
import { ONBOARDING_HIDE_GOOGLE_TILES_DEBUG_OVERRIDE_PREFERENCE_KEY } from "../../home/onboarding-preference-keys";
import { ensureDebugPanelTurnFilesInit } from "../../hooks/debug-panel-turn-files";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
import {
  ensureUseDebugPanelInit,
  ensureUseDebugPanelParsersInit,
  useDebugPanelEditedFilePaths,
  useDebugPanelEntries,
  useDebugPanelReferencedFilePaths,
} from "../../hooks/use-debug-panel";
import { useEventCallback } from "../../hooks/use-event-callback";
import {
  clampFloatingWindowRect,
  getCenteredFloatingWindowRect,
  initFloatingWindowPointerDragConstants,
  resizeFloatingWindowRect,
  useFloatingWindowPointerDrag,
} from "../../hooks/use-floating-window-pointer-drag";
import { useHostWorkspaceRoot } from "../../hooks/use-host-workspace-root";
import { usePlatformAwareFeatureGate } from "../../hooks/use-platform-aware-feature-gate";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { useQueryClient } from "../../hooks/use-query-client";
import { hostConfig2 } from "../../hosts/host-config2";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { bindZ2BindableHelper } from "../../hosts/z2-bindable-helper";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconDk } from "../../icons/app-icon-dk";
import { AppIconKtt } from "../../icons/app-icon-ktt";
import { AppIconNk } from "../../icons/app-icon-nk";
import { AppIconQI } from "../../icons/app-icon-qi";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconTk, ensureAppIconTkInit } from "../../icons/app-icon-tk";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { codex3 } from "../../models/codex3";
import { resolveScienceModelLabel } from "../../models/resolve-science-model-label";
import {
  findSidebarSectionElement,
  readScrollTop,
  scrollAppActionTargetByTurn,
  scrollAppActionTargetTo,
} from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { SIDEBAR_HIT_TEST_SELECTOR } from "../../navigation/sidebar-hit-test-selector";
import { useColdNavigate } from "../../navigation/use-cold-navigate";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { codexMicroHasEverBeenDetected } from "../../onboarding/codex-micro-detection-signals";
import { resolveOnboardingItemSource } from "../../onboarding/resolve-onboarding-item-source";
import { T5_ONBOARDING_V2_ID } from "../../onboarding/t5-onboarding-v2-id";
import { buildAvatarOverlayAnalyticsPayload } from "../../overlay/build-avatar-overlay-analytics-payload";
import { mergeCodexCompanions } from "../../pets/merge-codex-companions";
import { PLEASE_IMPLEMENT_THIS_PLAN_HEADER } from "../../prompts/please-implement-this-plan-header";
import { REMOTE_CONTROL_ENROLLMENT_ACCOUNT_MISMATCH_ERROR_CODE } from "../../remote-control/enrollment-account-mismatch-error-code";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureGpuTearingDebugSettingsInit } from "../../settings/gpu-tearing-debug-settings";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useSettingValue } from "../../settings/use-setting-value";
import { buildVscodeQueryKey } from "../../settings/vscode-query-key";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { runAppActionInPrimaryWindow } from "../../shell/run-app-action-in-primary-window";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { CopyButton } from "../../ui/copy-button";
import { deferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH } from "../../ui/deferred-ui-h";
import { deferredUiYn } from "../../ui/deferred-ui-yn";
import { deferredVM } from "../../ui/deferred-vm";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { ElectronOnly } from "../../ui/electron-only";
import { ensureContextMenuProviderInit } from "../../ui/ensure-context-menu-provider-init";
import { ght } from "../../ui/ght";
import { inProgress } from "../../ui/in-progress";
import { setPrimaryRuntimeInstallRelease2 } from "../../ui/set-primary-runtime-install-release2";
import { isUsageRateLimitBlocked } from "../../usage/is-usage-rate-limit-blocked";
import { coalesceTruthy } from "../../utils/coalesce-truthy";
import { countLeadingZeroBits32 } from "../../utils/count-leading-zero-bits-32";
import { identity } from "../../utils/identity";
import { isIndeterminate } from "../../utils/is-indeterminate";
import { isSvgHyphenatedTag } from "../../utils/is-svg-hyphenated-tag";
import { lerpIfFinite } from "../../utils/lerp-if-finite";
import { moveArrayItem } from "../../utils/move-array-item";
import { noop } from "../../utils/noop";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { sortedArrayFrom } from "../../utils/sorted-array-from";
import { svgToDataUri } from "../../utils/svg-to-data-uri";
import {
  buildThreadVirtualizerLayout,
  initThreadVirtualizer,
  visibleRangeFromDistance,
} from "../../utils/thread-virtualizer";
import { toggleSortedIdList } from "../../utils/toggle-sorted-id-list";
import {
  ensureImportSettingsB4Init,
  ensureKeyboardShortcutsHMInit,
  ensurePersonalizationCInit,
  ensurePersonalizationG0Init,
  ensurePersonalizationJutInit,
  ensurePersonalizationK0Init,
} from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import { identityCwd } from "../../utils/workspace-paths";
import { getRecentConversationsQueryKey } from "../../worktrees/get-recent-conversations-query-key";
import { appServices } from "../desktop-services";
import { findProcessManagerRow } from "../find-process-manager-row";
import { getBuildFlavor } from "../get-build-flavor";
import { DesktopPersistenceKeys } from "../persistence-keys";
import { isRemoteControlConnectionFailedError } from "../remote-control-connection-failed-error";

// Wave5d soft JSX companions.
function Basalt(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Copper(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Daisy(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Falcon(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Nickel(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Onyx(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Pearl(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Quartz(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function ReadLoginRouteQuerySnapshot(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Timber(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Umbra(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Violet(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Xenon(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Yellow(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Zinc(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialBC: any = undefined;
const AppInitialBt: any = undefined;
const AppInitialS4: any = undefined;
const AppInitialX4: any = undefined;
const AppInitialYC: any = undefined;
const DeferredUiA22: any = undefined;
const DeferredUiB22: any = undefined;
const DeferredUiI23: any = undefined;
const DeferredUiN2: any = undefined;
const DeferredUiO22: any = undefined;
const DeferredUiX232: any = undefined;
const Honey: any = undefined;
const Iris: any = undefined;
const Jewel: any = undefined;
const Lunar: any = undefined;
const NativeContextMenuSurface: any = undefined;
const Orbit: any = undefined;
const apex: any = undefined;
const brook: any = undefined;
const deferredHostsYC: any = undefined;
const deferredUiV43: any = undefined;
const deferredVoiceC4: any = undefined;
const falcon: any = undefined;
const readLoginRouteQuerySnapshot: any = undefined;
const tide: any = undefined;
const useStatsigGateAndComposerReady: any = undefined;
const violet: any = undefined;
const wave: any = undefined;

function Willow() {
  let acorn5 = CodexPluginActionType(appScopeAtom),
    bloom5 = useIntl(),
    coral5 = NativeContextMenuSurface("2380644311"),
    drift5 = useStatsigGateAndComposerReady(),
    eagle5 = CodexPluginActionResult(ensureImportSettingsB4Init),
    frost5 = eagle5.override,
    glide5 = CodexPluginActionResult(deferredUiV43),
    honey5 = CodexPluginActionResult(CODEX_APPSHOT_SHORTCUT_CHANGED_TYPE),
    iris5 = bloom5.formatMessage({
      id: "realtimeVoiceDebug.title",
      defaultMessage: "Voice chat",
      description: "Title for the voice chat debug settings section",
    });
  let jewel5 = bloom5.formatMessage({
    id: "realtimeVoiceDebug.statsigGate",
    defaultMessage: "Statsig gate",
    description: "Label for the voice chat Statsig gate debug state",
  });
  let knoll5 = bloom5.formatMessage(
    coral5
      ? {
          id: "realtimeVoiceDebug.enabled",
          defaultMessage: "Enabled",
          description: "Enabled debug state",
        }
      : {
          id: "realtimeVoiceDebug.disabled",
          defaultMessage: "Disabled",
          description: "Disabled debug state",
        },
  );
  let lunar5 = (
    <Falcon
      {...{
        label: jewel5,
        value: knoll5,
      }}
    />
  );
  let moss5 = bloom5.formatMessage({
    id: "realtimeVoiceDebug.debugOverride",
    defaultMessage: "Debug override",
    description: "Label for the voice chat debug override state",
  });
  let north5 = bloom5.formatMessage(
    glide5
      ? {
          id: "realtimeVoiceDebug.forcingOff",
          defaultMessage: "Forcing off",
          description: "Voice chat is forced off by a debug override",
        }
      : {
          id: "realtimeVoiceDebug.off",
          defaultMessage: "Off",
          description: "Debug override is off",
        },
  );
  let orbit5 = (
    <Falcon
      {...{
        label: moss5,
        value: north5,
      }}
    />
  );
  let pine5 = bloom5.formatMessage({
    id: "realtimeVoiceDebug.effectiveState",
    defaultMessage: "Effective voice chat state",
    description: "Label for the effective voice chat debug state",
  });
  let quest5 = bloom5.formatMessage(
    drift5
      ? {
          id: "realtimeVoiceDebug.effectiveEnabled",
          defaultMessage: "Enabled",
          description: "Voice chat is effectively enabled",
        }
      : {
          id: "realtimeVoiceDebug.effectiveDisabled",
          defaultMessage: "Disabled",
          description: "Voice chat is effectively disabled",
        },
  );
  let ridge5 = (
    <Falcon
      {...{
        label: pine5,
        value: quest5,
      }}
    />
  );
  let storm5 = (
    <div className="flex flex-col py-1.5">
      {lunar5}
      {orbit5}
      {ridge5}
    </div>
  );
  let tide5 = (
    <div className="text-xs text-token-description-foreground">
      {
        <MemoizedFormattedMessage
          {...{
            id: "realtimeVoiceDebug.forceOffDescription",
            defaultMessage:
              "Force voice chat off in this app and new app-server threads",
            description: "Description for the voice chat debug override",
          }}
        />
      }
    </div>
  );
  let unity5 = bloom5.formatMessage({
    id: "realtimeVoiceDebug.forceOffLabel",
    defaultMessage: "Force voice chat off",
    description: "Label for the voice chat debug override toggle",
  });
  let vale5 = (cliff5) => {
    acorn5.set(deferredUiV43, cliff5);
  };
  let wave5 = (
    <div className="flex items-center justify-between gap-3 py-1.5">
      {tide5}
      <AppInitialYC ariaLabel={unity5} checked={glide5} onChange={vale5} />
    </div>
  );
  let apex5 = eagle5.canUseLocalOverride ? (
    <div className="flex items-center justify-between gap-3 border-t-[0.5px] border-token-border py-2">
      <div className="text-xs text-token-description-foreground">
        {
          <MemoizedFormattedMessage
            {...{
              id: "realtimeVoiceDebug.simulateUsageLimitDescription",
              defaultMessage:
                "Send an approaching usage-limit event through the active voice chat",
              description:
                "Description for simulating an approaching usage-limit event in voice chat",
            }}
          />
        }
      </div>
      {
        <ReadLoginRouteQuerySnapshot
          {...{
            color: "outline",
            disabled: honey5.phase !== "active",
            onClick: () => {
              honey5.phase === "active" &&
                appServices.realtimeVoice?.control(honey5.locator, {
                  type: "simulate-usage-limit-approaching-for-debug",
                });
            },
            children: (
              <MemoizedFormattedMessage
                {...{
                  id: "realtimeVoiceDebug.simulateUsageLimit",
                  defaultMessage: "Simulate warning",
                  description:
                    "Button to simulate an approaching usage-limit warning in voice chat",
                }}
              />
            ),
          }}
        />
      }
    </div>
  ) : null;
  let brook5 = eagle5.canUseLocalOverride ? (
    <div className="flex flex-col gap-2 border-t-[0.5px] border-token-border py-2">
      {
        <Falcon
          {...{
            label: bloom5.formatMessage({
              id: "realtimeVoiceDebug.configSource",
              defaultMessage: "Config source",
              description: "Label for the voice chat config source",
            }),
            value:
              eagle5.source === "local-override"
                ? bloom5.formatMessage({
                    id: "realtimeVoiceDebug.localOverride",
                    defaultMessage: "Local override",
                    description: "Local voice chat config override source",
                  })
                : bloom5.formatMessage({
                    id: "realtimeVoiceDebug.statsig",
                    defaultMessage: "Statsig",
                    description: "Statsig voice chat config source",
                  }),
          }}
        />
      }
      <div className="flex items-center justify-between gap-3">
        <div className="text-xs text-token-description-foreground">
          {
            <MemoizedFormattedMessage
              {...{
                id: "realtimeVoiceDebug.localOverrideDescription",
                defaultMessage:
                  "Override the realtime Statsig config in this unpackaged local dev build",
                description:
                  "Description for the local voice chat config override",
              }}
            />
          }
        </div>
        <AppInitialYC
          ariaLabel={bloom5.formatMessage({
            id: "realtimeVoiceDebug.localOverrideLabel",
            defaultMessage: "Enable local voice chat config override",
            description:
              "Label for the local voice chat config override toggle",
          })}
          checked={frost5.enabled}
          onChange={(dusk5) => {
            acorn5.set(deferredVoiceC4, {
              enabled: dusk5,
              config:
                dusk5 && frost5.config.trim().length === 0
                  ? JSON.stringify(eagle5.statsigValue, null, 2)
                  : frost5.config,
            });
          }}
        />
      </div>
      <textarea
        aria-label={bloom5.formatMessage({
          id: "realtimeVoiceDebug.localOverrideInputLabel",
          defaultMessage: "Local voice chat config override",
          description: "Label for the local voice chat config override input",
        })}
        className="min-h-36 w-full resize-y rounded border border-token-border bg-token-input-background px-2 py-1.5 font-mono text-xs text-token-foreground focus:border-token-focus-border focus:outline-none"
        value={frost5.config}
        onChange={(event) => {
          acorn5.set(deferredVoiceC4, {
            ...frost5,
            config: event.currentTarget.value,
          });
        }}
      />
      {eagle5.error ? (
        <div className="text-xs text-token-error-foreground">
          {eagle5.error}
        </div>
      ) : null}
      <div className="flex items-start justify-between gap-3">
        <div className="text-xs text-token-description-foreground">
          {
            <MemoizedFormattedMessage
              {...{
                id: "realtimeVoiceDebug.localOverrideHelp",
                defaultMessage:
                  "Use valid JSON with the same object shape as Statsig. Trailing commas are not supported. Prompt changes apply to the next voice session. New-thread developer instructions apply when creating the next voice chat.",
                description:
                  "Help text for the local voice chat config override",
              }}
            />
          }
        </div>
        <button
          type="button"
          className="cursor-interaction text-xs text-token-text-link-foreground hover:underline"
          onClick={() => {
            acorn5.set(deferredVoiceC4, AppInitialX4);
          }}
        >
          {
            <MemoizedFormattedMessage
              {...{
                id: "realtimeVoiceDebug.resetToStatsig",
                defaultMessage: "Reset to Statsig",
                description:
                  "Button to reset the local voice chat config override",
              }}
            />
          }
        </button>
      </div>
    </div>
  ) : null;
  return (
    <Copper
      {...{
        title: iris5,
        storageKey: "debug-realtime-voice-override",
        variant: "global",
        children: [storm5, wave5, apex5, brook5],
      }}
    />
  );
}
var xenon,
  yellow,
  zinc = esmInit(() => {
    xenon = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    AppInitialBC();
    violet();
    falcon();
    AppInitialS4();
    ensureRemoteSshConnectionEventInit();
    hostConfig2();
    deferredHostsYC();
    ensureDynamicScriptLoadInit();
    ensureAppScopeInit();
    ensureSkillsPageHelpersInit();
  });
function Amber({ labels, projectlessThreadCwd, statuses, workspaceRoots }) {
  let elm5 = new Map();
  if (workspaceRoots != null)
    for (let fern5 of workspaceRoots)
      elm5.set(fern5, {
        projectRoot: fern5,
        title: labels?.[fern5] ?? fern5,
      });
  if (statuses != null)
    for (let grove5 of statuses)
      elm5.has(grove5.projectRoot) ||
        elm5.set(grove5.projectRoot, {
          projectRoot: grove5.projectRoot,
          title: labels?.[grove5.projectRoot] ?? grove5.projectRoot,
        });
  return (
    projectlessThreadCwd != null &&
      elm5.set(projectlessThreadCwd, {
        projectRoot: projectlessThreadCwd,
        title: "Projectless task",
      }),
    Array.from(elm5.values())
  );
}
var basalt = esmInit(() => {});
function Cedar({ sourceThreadId }) {
  let [hill5, isle5] = daisy.useState(ember),
    [juniper5, lagoon5] = daisy.useState("Not run yet"),
    [meadow5, nest5] = daisy.useState(false),
    oak5 = async () => {
      if (!meadow5) {
        nest5(true);
        try {
          let petal5 = JSON.parse(hill5),
            quiet5 = await runAppActionInPrimaryWindow(petal5, {
              sourceThreadId,
            });
          lagoon5(
            `Success\n\nResult:\n${JSON.stringify(quiet5, null, 2)}\n\nSent payload:\n${JSON.stringify(petal5, null, 2)}`,
          );
        } catch (rain5) {
          let seed5 = rain5 instanceof Error ? rain5.message : String(rain5);
          lagoon5(`Error: ${seed5}\n\nInput JSON:\n${hill5}`);
          appActionSidebarProjectRefSchema.error(
            "Failed to run debug app action",
            {
              safe: {},
              sensitive: {
                actionJson: hill5,
                error: rain5,
              },
            },
          );
        } finally {
          nest5(false);
        }
      }
    };
  return (
    <Copper
      {...{
        title: "App Actions",
        storageKey: "debug-app-actions",
        variant: "global",
        actions: (
          <button
            type="button"
            className="inline-flex items-center rounded border border-token-border px-3 py-1 text-xs text-token-foreground hover:bg-token-foreground/5 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={meadow5}
            onClick={() => {
              oak5();
            }}
          >
            {meadow5 ? "Running…" : "Run action"}
          </button>
        ),
        children: [
          <p className="text-token-foreground-secondary pt-2 text-xs">
            {
              "Run a raw app-control action payload against the primary app window. Agent tool availability is controlled by the app-control Statsig gate."
            }
          </p>,
          <div className="flex flex-col gap-2 py-2">
            <textarea
              className="bg-token-background-primary min-h-48 resize-y rounded border border-token-border p-2 font-mono text-xs text-token-foreground outline-none"
              spellCheck={false}
              value={hill5}
              onChange={(event) => {
                isle5(event.target.value);
              }}
            />
            <div className="rounded border border-token-border bg-token-foreground/5 px-3 py-2 text-xs whitespace-pre-wrap text-token-foreground">
              {juniper5}
            </div>
          </div>,
        ],
      }}
    />
  );
}
var daisy,
  $i,
  ember,
  flint = esmInit(() => {
    daisy = commonJsInit(react(), 1);
    useHostWorkspaceRoot();
    posixPathBasename();
    falcon();
    ember = '{\n  "type": "app.get_summary"\n}';
  });
function Garnet() {
  let trail5 = CodexPluginActionResult(DeferredUiB22);
  return (
    <Copper
      {...{
        storageKey: wave,
        title: "App Server",
        variant: "global",
        unmountChildrenWhenClosed: true,
        children: (
          <Nickel
            {...{
              hostIds: trail5,
            }}
          />
        ),
      }}
    />
  );
}
function Hazel(urn5) {
  let { hostIds } = urn5,
    vine5 = CodexPluginActionResult(AppInitialBt),
    wind5 = CodexPluginActionResult(DeferredUiI23),
    [yarrow5] = PLEASE_IMPLEMENT_THIS_PLAN_HEADER("host_config"),
    [azure5] = PLEASE_IMPLEMENT_THIS_PLAN_HEADER("remote_ssh_connections"),
    [birch5] = PLEASE_IMPLEMENT_THIS_PLAN_HEADER("remote_control_connections"),
    canyon5;
  {
    let dew5;
    dew5 = (alpha6) => (
      <Onyx
        key={alpha6}
        {...{
          hostId: alpha6,
          hostDetails: Lunar({
            defaultHostConfig: yarrow5,
            hostId: alpha6,
            remoteControlConnections: birch5,
            remoteSshConnections: azure5,
          }),
          notifications: vine5.filter((item) => item.hostId === alpha6),
          requests: wind5.filter((item) => item.hostId === alpha6),
        }}
      />
    );
    canyon5 = hostIds.map(dew5);
  }
  return <div className="flex flex-col gap-3 py-3">{canyon5}</div>;
}
function Ivory(bravo6) {
  let { hostDetails, hostId, notifications, requests } = bravo6,
    copper6 = CodexPluginActionType(appScopeAtom),
    delta6 = CodexBrowserSurfaceActionType(DeferredUiN2, hostId),
    echo6 = CodexBrowserSurfaceActionType(DeferredUiA22, hostId),
    falcon6 = CodexBrowserSurfaceActionType(DeferredUiO22, hostId),
    gamma6 = !!hostDetails.lines?.length,
    harbor6 = requests.filter(Orbit);
  let indigo6 = harbor6.length,
    jade6 =
      CodexBrowserSurfaceActionType(brook, hostId) ??
      hostDetails.stateType === "local",
    kite6 = hostDetails.stateType === "local" ? "local" : delta6,
    lemon6 = requests.filter(Lotus);
  let marble6 = lemon6.length,
    nickel6 = notifications.filter(Kelp);
  let onyx6 = nickel6.length,
    pearl6 = notifications.filter(Jasper);
  let quartz6 = pearl6.length,
    river6 = (event) => {
      copper6.set(brook, hostId, event.currentTarget.open);
    };
  let slate6 = (
    <span className="truncate font-medium text-token-foreground">
      {hostDetails.displayName}
    </span>
  );
  let timber6 = (
    <Pearl
      {...{
        state: kite6,
      }}
    />
  );
  let umbra6 = (
    <div className="flex items-center gap-2">
      {slate6}
      {timber6}
    </div>
  );
  let violet6 = hostDetails.stateType === "connection" ? ` · ${hostId}` : null,
    willow6 = ` · v${echo6 ?? "Unavailable"}`,
    xenon6 = (
      <div className="mt-1 truncate text-xs text-token-description-foreground">
        {hostDetails.connectionType}
        {violet6}
        {willow6}
      </div>
    );
  let yellow6 = (
    <div className="min-w-0">
      {umbra6}
      {xenon6}
    </div>
  );
  let zinc6 = (
    <span>
      {requests.length}
      {" requests"}
    </span>
  );
  let amber6 = (
    <span>
      {notifications.length}
      {" notifications"}
    </span>
  );
  let basalt6 =
    marble6 > 0 ? (
      <span className="rounded-full bg-token-charts-yellow/15 px-2 py-0.5 text-token-charts-yellow">
        {marble6}
        {" live"}
      </span>
    ) : null;
  let cedar6 =
    indigo6 > 0 ? (
      <span className="rounded-full bg-token-charts-red/15 px-2 py-0.5 text-token-charts-red">
        {indigo6}
        {" failed"}
      </span>
    ) : null;
  let daisy6 =
    onyx6 > 0 ? (
      <span className="rounded-full bg-token-charts-red/15 px-2 py-0.5 text-token-charts-red">
        {onyx6}
        {" notification errors"}
      </span>
    ) : null;
  let ember6 =
    quartz6 > 0 ? (
      <span className="rounded-full bg-token-foreground/10 px-2 py-0.5">
        {quartz6}
        {" deltas"}
      </span>
    ) : null;
  let flint6 = (
    <div className="flex shrink-0 items-center gap-2 text-xs text-token-description-foreground tabular-nums">
      {zinc6}
      {amber6}
      {basalt6}
      {cedar6}
      {daisy6}
      {ember6}
    </div>
  );
  let garnet6 = (
    <summary className="flex cursor-interaction list-none items-center justify-between gap-3 px-3 py-2.5 marker:content-none">
      {yellow6}
      {flint6}
    </summary>
  );
  let hazel6 = gamma6 ? (
    <Quartz
      {...{
        hostDetails,
      }}
    />
  ) : null;
  let ivory6 = (
    <Timber
      {...{
        hostId,
        threadStatusEntries: falcon6,
      }}
    />
  );
  let jasper6 = (
    <Umbra
      {...{
        hostId,
        requests,
      }}
    />
  );
  let kelp6 = (
    <Violet
      {...{
        hostId,
        notifications,
      }}
    />
  );
  let lotus6 = (
    <div className="border-t border-token-border px-3 pb-3">
      <div className="flex flex-col gap-3 py-3">
        {hazel6}
        {ivory6}
        {jasper6}
        {kelp6}
      </div>
    </div>
  );
  return (
    <details
      className="group rounded-xl border border-token-border bg-token-foreground/[0.03] shadow-sm"
      onToggle={river6}
      open={jade6}
    >
      {garnet6}
      {lotus6}
    </details>
  );
}
function Jasper(mint6) {
  return mint6.isNoisy;
}
function Kelp(nova6) {
  return nova6.severity === "error";
}
function Lotus(olive6) {
  return olive6.status === "pending";
}
function Mint(prism6) {
  let { hostDetails } = prism6,
    quill6 = hostDetails.lines?.map(Nova);
  return (
    <div className="rounded-lg border border-token-border bg-token-foreground/[0.025] px-3">
      {quill6}
    </div>
  );
}
function Nova(reef6) {
  return (
    <Falcon
      key={reef6.label}
      {...{
        label: reef6.label,
        value: reef6.value,
      }}
    />
  );
}
function Olive(sage6) {
  let { hostId, requests } = sage6,
    [topaz6, ultra6] = tide.useState(false),
    vapor6 = requests.filter(Orbit);
  let wheat6 = vapor6,
    yarn6 = topaz6 ? wheat6 : requests,
    zephyr6 = requests.length === 0,
    acorn6 = () => {
      clearUpcomingLocalDatetimeEntries(hostId);
    };
  let bloom6 = `debug-app-server-requests-${hostId}`,
    coral6 =
      wheat6.length > 0 || topaz6 ? (
        <div className="mb-2 flex justify-end">
          <label className="flex cursor-interaction items-center gap-2 text-xs text-token-description-foreground">
            <input
              checked={topaz6}
              className="cursor-interaction"
              onChange={(event) => {
                ultra6(event.currentTarget.checked);
              }}
              type="checkbox"
            />
            {"Failed"}
            <span className="tabular-nums">
              {"("}
              {wheat6.length}
              {")"}
            </span>
          </label>
        </div>
      ) : null;
  let drift6 =
    yarn6.length > 0 ? (
      <div className="flex max-h-[360px] flex-col gap-2 overflow-y-auto pr-1">
        {yarn6.map(Prism)}
      </div>
    ) : (
      <Xenon
        {...{
          message: topaz6
            ? "No failed requests recorded for this manager yet"
            : "No requests recorded for this manager yet",
        }}
      />
    );
  return (
    <Yellow
      {...{
        clearDisabled: zephyr6,
        onClear: acorn6,
        storageKey: bloom6,
        title: "Recent requests",
        children: [coral6, drift6],
      }}
    />
  );
}
function Prism(eagle6) {
  return (
    <Zinc
      key={eagle6.id}
      {...{
        request: eagle6,
      }}
    />
  );
}
function Quill({ hostId, threadStatusEntries }) {
  let [frost6, glide6] = tide.useState(null),
    [honey6, iris6] = tide.useState(null),
    jewel6 = Honey(threadStatusEntries),
    knoll6 = honey6 != null && apex.includes(honey6) ? honey6 : null,
    lunar6 =
      knoll6 == null ? jewel6 : jewel6.filter((item) => item.status === knoll6),
    moss6 =
      knoll6 == null
        ? `All states (${threadStatusEntries.length})`
        : Jewel({
            count:
              jewel6.find((item) => item.status === knoll6)?.entries.length ??
              0,
            status: knoll6,
          });
  return (
    <div className="overflow-hidden rounded-lg border border-token-border bg-token-foreground/[0.025]">
      {
        <Copper
          {...{
            storageKey: `debug-app-server-thread-status-${hostId}`,
            title: "Thread status",
            variant: "global",
            children: (
              <div className="py-3">
                {jewel6.length === 0 ? (
                  <Xenon
                    {...{
                      message: "No in-memory threads for this manager yet",
                    }}
                  />
                ) : (
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      {
                        <DropdownMenuPopover
                          {...{
                            contentWidth: "xs",
                            triggerButton: (
                              <button
                                type="button"
                                className="bg-token-background inline-flex max-w-80 min-w-40 cursor-interaction items-center justify-between gap-2 rounded-md border border-token-border px-2 py-1 text-xs text-token-foreground hover:bg-token-foreground/5"
                              >
                                <span className="truncate">{moss6}</span>
                                {
                                  <AppIconSft
                                    {...{
                                      className: "icon-2xs shrink-0 opacity-70",
                                    }}
                                  />
                                }
                              </button>
                            ),
                            children: [
                              <DropdownMenu.Item
                                {...{
                                  "aria-checked": knoll6 == null,
                                  role: "menuitemradio",
                                  RightIcon:
                                    knoll6 == null ? AppIconZlt : undefined,
                                  onSelect: () => {
                                    iris6(null);
                                  },
                                  children: [
                                    "All states (",
                                    threadStatusEntries.length,
                                    ")",
                                  ],
                                }}
                              />,
                              apex.map((item) => (
                                <DropdownMenu.Item
                                  key={item}
                                  {...{
                                    "aria-checked": knoll6 === item,
                                    role: "menuitemradio",
                                    RightIcon:
                                      knoll6 === item ? AppIconZlt : undefined,
                                    onSelect: () => {
                                      iris6(item);
                                    },
                                    children: Jewel({
                                      count:
                                        jewel6.find(
                                          (_item) => _item.status === item,
                                        )?.entries.length ?? 0,
                                      status: item,
                                    }),
                                  }}
                                />
                              )),
                            ],
                          }}
                        />
                      }
                    </div>
                    <div className="flex max-h-[300px] flex-col gap-3 overflow-y-auto pr-1">
                      {lunar6.length === 0 ? (
                        <Xenon
                          {...{
                            message: "No in-memory threads match this state",
                          }}
                        />
                      ) : (
                        lunar6.map((item) => (
                          <div
                            key={item.status}
                            className="flex flex-col gap-2"
                          >
                            <div className="text-xs font-medium text-token-description-foreground">
                              {Iris(item)}
                            </div>
                            <div className="flex flex-col gap-2">
                              {item.entries.map((_item) => (
                                <Basalt
                                  key={_item.conversationId}
                                  {...{
                                    entry: _item,
                                    isPending: frost6 === _item.conversationId,
                                    onUnsubscribe: async (north6) => {
                                      glide6(north6);
                                      try {
                                        await canonicalizeWorkspacePathKey(
                                          "unsubscribe-thread-for-host",
                                          {
                                            hostId,
                                            threadId: north6,
                                          },
                                        );
                                      } finally {
                                        glide6((orbit6) =>
                                          orbit6 === north6 ? null : orbit6,
                                        );
                                      }
                                    },
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            ),
          }}
        />
      }
    </div>
  );
}
function Reef(pine6) {
  let { entry, isPending, onUnsubscribe } = pine6,
    quest6 = CodexBrowserSurfaceActionType(
      DeferredUiX232,
      entry.conversationId,
    ),
    ridge6 =
      entry.resumeState === "resumed" && quest6?.role === "owner" && !isPending,
    storm6 = useColdNavigate(),
    tide6 = entry.title?.trim() || "Untitled thread";
  let unity6 = (
    <div className="truncate text-sm font-medium text-token-foreground">
      {tide6}
    </div>
  );
  let vale6 = (
    <div className="truncate font-mono text-[11px] text-token-description-foreground">
      {entry.conversationId}
    </div>
  );
  let wave6 = () => {
    storm6(entry.conversationId);
  };
  let apex6 = (
    <AppIconTk
      {...{
        className: "icon-xs",
      }}
    />
  );
  let brook6 = (
    <button
      type="button"
      aria-label="Open thread"
      className="cursor-interaction rounded p-0.5 text-token-charts-blue hover:bg-token-foreground/10"
      onClick={wave6}
    >
      {apex6}
    </button>
  );
  let cliff6 = (
    <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1">
      {vale6}
      {brook6}
    </div>
  );
  let dusk6 = (
    <div className="min-w-0">
      {unity6}
      {cliff6}
    </div>
  );
  let elm6 = !ridge6,
    fern6 = () => {
      onUnsubscribe(entry.conversationId);
    };
  let grove6 = isPending ? "Unsubscribing..." : "Unsubscribe",
    hill6 = (
      <button
        type="button"
        className="cursor-interaction rounded border border-token-border px-2 py-1 text-xs text-token-foreground hover:bg-token-foreground/10 disabled:cursor-default disabled:opacity-50"
        disabled={elm6}
        onClick={fern6}
      >
        {grove6}
      </button>
    );
  let isle6 = (
    <div className="flex items-start justify-between gap-3">
      {dusk6}
      {hill6}
    </div>
  );
  let juniper6 = `resume: ${entry.resumeState}`,
    lagoon6 = (
      <Daisy
        {...{
          label: juniper6,
        }}
      />
    );
  let meadow6 = `stream: ${quest6?.role ?? "none"}`,
    nest6 = (
      <Daisy
        {...{
          label: meadow6,
        }}
      />
    );
  let oak6 = `runtime: ${entry.threadRuntimeStatus?.type ?? "none"}`,
    petal6 = (
      <Daisy
        {...{
          label: oak6,
        }}
      />
    );
  let quiet6 = `turn: ${entry.lastTurnStatus ?? "none"}`,
    rain6 = (
      <Daisy
        {...{
          label: quiet6,
        }}
      />
    );
  let seed6 = (
    <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-token-description-foreground">
      {lagoon6}
      {nest6}
      {petal6}
      {rain6}
    </div>
  );
  return (
    <div className="bg-token-background rounded-lg border border-token-border px-3 py-2">
      {isle6}
      {seed6}
    </div>
  );
}
function Sage(trail6) {
  let { label } = trail6;
  return (
    <span className="rounded-full bg-token-foreground/10 px-2 py-0.5 tabular-nums">
      {label}
    </span>
  );
}
