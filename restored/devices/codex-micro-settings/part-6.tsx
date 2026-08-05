// Restored from ref/webview/assets/codex-micro-settings-OfPypdLl.js
// Wave5 stub-pass soft companions.
const DeferredUiIw: any = undefined;
const DeferredUiRw: any = undefined;
const NativeContextMenuSurface: any = undefined;
const chatProcessRegister: any = undefined;
const codexMicroLayoutC: any = undefined;
const codexMicroLayoutS: any = undefined;
const ensureKeyboardShortcutsGtInit: any = undefined;
const ensurePersonalizationCInit: any = undefined;
const setSettingValue: any = undefined;

// Wave FY — full polished body from `codex-micro-settings-OfPypdLl/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 55 (verified 127/182).
// Wave5d — FZ repair from fz-pascal L=5611 sus=56; JSX PascalCase + careful split.
// Wave5d careful split 6/10
/* split-lane-import-depth:1 */

import { isStartingProcessExpired as IsStartingProcessExpired } from "../../account/is-starting-process-expired";
import { openInBrowser } from "../../account/open-in-browser";
import { isBusinessPlan } from "../../account/plan-type-helpers";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import {
  siteAnalyticsEventsPath,
  siteAnalyticsPath,
} from "../../appgen/site-analytics-paths";
import { ARTIFACT_GENERATION_STAGE_IDS } from "../../artifacts/artifact-generation-ids";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
} from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../../conversation/conversation-page-esm-inits";
import {
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { BrowserWebviewPanel } from "../../browser/browser-webview-panel";
import { chatgpt2 as Chatgpt2 } from "../../browser/chatgpt2";
import { composerConnectorauthReconnectMessages } from "../../composer/composer-connectorauth-reconnect-messages";
import { getPluginDisplayName } from "../../composer/get-plugin-display-name";
import { getPluginShortDescription } from "../../composer/get-plugin-short-description";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { collaborationModeFromTurnOrParams } from "../../conversation/collaboration-mode-fields";
import { recentConversationsMetaQueryKey } from "../../conversation/recent-conversations-meta-query-key";
import {
  ensureCodexMicroAnalogActionTitleInit,
  getAnalogActionTitle,
} from "../../desktop/codex-micro-analog-action-title";
import {
  ensureCodexMicroWebviewCommandsInit,
  findCodexMicroWebviewCommand,
  getCodexMicroWebviewCommands,
} from "../../desktop/codex-micro-webview-commands";
import { appServices } from "../../desktop/desktop-services";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { DiffLinesStatsBadge } from "../../diff/diff-lines-stats-badge";
import { REMOTE_CONTROL_PAIRING_FEATURE_GATE_ID } from "../../feature-gates/feature-gate-ids";
import { ensureDebugPanelTurnFilesInit } from "../../hooks/debug-panel-turn-files";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import {
  ensureRemoteConnectionsFeatureInit,
  getEnabledRemoteConnectionState,
} from "../../hosts/remote-connections-feature";
import { useHostPlatformModifierSymbol } from "../../hotkeys/use-host-platform-modifier-symbol";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconEi } from "../../icons/app-icon-ei";
import { AppIconOi } from "../../icons/app-icon-oi";
import { AppIconPlt } from "../../icons/app-icon-plt";
import { AppIconSR } from "../../icons/app-icon-sr";
import { AppIconTv } from "../../icons/app-icon-tv";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { LoadingPreviewIcon } from "../../icons/loading-preview-icon";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { readScrollTop } from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { SettingsCommandMenuSectionItem } from "../../settings/settings-command-menu-section-item";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { ensureSettingsSectionTitleInit } from "../../settings/settings-section-title";
import { usePetsSettingsController } from "../../settings/use-pets-settings-controller";
import { useSettingValue } from "../../settings/use-setting-value";
import { collectUniqueMappedPresenceEntries } from "../../shell/collect-unique-mapped-presence-entries";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { deferredVM } from "../../ui/deferred-vm";
import { deferredZft as DeferredZft } from "../../ui/deferred-zft";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import {
  DropdownMenuPopover,
  ensureDropdownMenuPopoverInit,
} from "../../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { macOS4 } from "../../ui/mac-os4";
import { MenuBorderSeparator } from "../../ui/menu-border-separator";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { remote } from "../../ui/remote";
import {
  ensureSelectableListRowActivationInit,
  ensureSelectableListRowInit as EnsureSelectableListRowInit,
} from "../../ui/selectable-list-row";
import { sortable } from "../../ui/sortable";
import { VerticalScrollFadeMask } from "../../ui/vertical-scroll-fade-mask";
import { findByModel as FindByModel } from "../../utils/find-by-model";
import { identity } from "../../utils/identity";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { thinCallWithUndefined } from "../../utils/thin-call-with-undefined";
import {
  ensureKeyboardShortcutsGtInit as EnsureKeyboardShortcutsGtInit,
  ensureKeyboardShortcutsHMInit,
  ensurePersonalizationCInit as EnsurePersonalizationCInit,
} from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import { pendingWorktreeConversationStartApi } from "../../worktree/pending-worktree-conversation-start-api";
import {
  CodexMicroKeyboardSurface,
  codexMicroKeyboardSurfaceFlags,
  CodexMicroKeyboardSurfaceLabel,
  CodexMicroKeyboardSurfaceOverlay,
  CodexMicroKeyboardSurfacePanel,
  codexMicroKeyboardSurfaceState,
  CodexMicroKeyboardSurfaceTile,
  ensureCodexMicroKeyboardSurfaceAtomsInit,
  ensureCodexMicroKeyboardSurfaceHelpersInit,
  ensureCodexMicroKeyboardSurfaceInit,
  ensureCodexMicroKeyboardSurfaceUiInit,
  renderCodexMicroKeyboardSurface as RenderCodexMicroKeyboardSurface,
  useCodexMicroKeyboardSurface as UseCodexMicroKeyboardSurface,
} from "../codex-micro-keyboard-surface";
import {
  ensureCodexMicroLayoutInit,
  parseStreamDeckLayout,
} from "../codex-micro-layout";
import {
  codexMicroSlotSignalC,
  codexMicroSlotSignalF,
  codexMicroSlotSignalO,
  codexMicroSlotSignalR,
  codexMicroSlotSignalU,
  ensureCodexMicroSlotSignalsInit,
} from "../codex-micro-slot-signals";

// Wave5d soft JSX companions.
function Alpha(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Bravo(
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
function Delta(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}
function Echo(
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
function ReadLoginRouteQuerySnapshot(
  props: {
    children?: unknown;
    [key: string]: unknown;
  } = {},
): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialA: any = undefined;
const AppInitialFw: any = undefined;
const AppInitialHw: any = undefined;
const AppInitialK4: any = undefined;
const AppInitialNpt: any = undefined;
const AppInitialQr: any = undefined;
const AppInitialV1: any = undefined;
const AppInitialVw: any = undefined;
const CodexMicroSettingsHelper14: any = undefined;
const CodexMicroSettingsHelper20: any = undefined;
const CodexMicroSettingsHelper21: any = undefined;
const CodexMicroSettingsHelper22: any = undefined;
const CodexMicroSettingsHelper24: any = undefined;
const CodexMicroSettingsHelper27: any = undefined;
const CodexMicroSettingsHelper28: any = undefined;
const gamma: any = undefined;
const harbor: any = undefined;
const indigo: any = undefined;
const jade: any = undefined;
const kite: any = undefined;
const lemon: any = undefined;
const marble: any = undefined;
const nickel: any = undefined;
const onyx: any = undefined;
const pearl: any = undefined;
const quartz: any = undefined;
const river: any = undefined;
const slate: any = undefined;
const timber: any = undefined;
const umbra: any = undefined;
const violet: any = undefined;
const willow: any = undefined;
const xenon: any = undefined;
const yellow: any = undefined;
const zinc: any = undefined;
const amber: any = undefined;
const basalt: any = undefined;
const cedar: any = undefined;
const daisy: any = undefined;
const ember: any = undefined;
const flint: any = undefined;
const garnet: any = undefined;
const hazel: any = undefined;
const ivory: any = undefined;
const jasper: any = undefined;
const kelp: any = undefined;
const lotus: any = undefined;
const mint: any = undefined;
const nova: any = undefined;
const olive: any = undefined;
const prism: any = undefined;
const quill: any = undefined;
const reef: any = undefined;
const sage: any = undefined;
const topaz: any = undefined;
const ultra: any = undefined;
const vapor: any = undefined;
const wheat: any = undefined;
const yarn: any = undefined;
const zephyr: any = undefined;
const acorn: any = undefined;
const bloom: any = undefined;
const coral: any = undefined;
const drift: any = undefined;
const eagle: any = undefined;
const frost: any = undefined;
const glide: any = undefined;
const honey: any = undefined;
const iris: any = undefined;
const jewel: any = undefined;
const knoll: any = undefined;
const lunar: any = undefined;
const moss: any = undefined;
const north: any = undefined;
const orbit: any = undefined;
const pine: any = undefined;
const quest: any = undefined;
const ridge: any = undefined;
const storm: any = undefined;
const tide: any = undefined;
const unity: any = undefined;
const vale: any = undefined;
const wave: any = undefined;
const apex: any = undefined;
const brook: any = undefined;
const cliff: any = undefined;
const dusk: any = undefined;
const elm: any = undefined;
const fern: any = undefined;
const grove: any = undefined;
const hill: any = undefined;
const isle: any = undefined;
const juniper: any = undefined;
const lagoon: any = undefined;
const meadow: any = undefined;
const nest: any = undefined;
const oak: any = undefined;
const petal: any = undefined;
const quiet: any = undefined;
const rain: any = undefined;
const seed: any = undefined;
const trail: any = undefined;
const deferredUiB: any = undefined;
const deferredUiH: any = undefined;
const deferredUiXZ: any = undefined;
const deferredZft: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;
function urn(vine) {
  let { codexMicro } = vine,
    wind = CodexPluginActionType(appScopeAtom),
    yarrow = CodexPluginActionResult(AppInitialFw),
    azure = CodexPluginActionResult(DeferredUiIw),
    birch = CodexPluginActionResult(DeferredUiRw),
    canyon = CodexPluginActionResult(AppInitialK4),
    dew = CodexPluginActionResult(ensureCodexMicroSlotSignalsInit),
    ever =
      CodexPluginActionResult(codexMicroSlotSignalU) ?? codexMicroSlotSignalO,
    field = CodexPluginActionResult(deferredUiXZ),
    { platform } = useHostPlatformModifierSymbol(),
    grain = useSettingValue(AppInitialNpt.layout),
    haven = useSettingValue(AppInitialNpt.agentSource),
    ink = useSettingValue(AppInitialNpt.lightingBrightness),
    jadeite = useSettingValue(AppInitialNpt.lightingAutoOff),
    kernel = parseStreamDeckLayout(grain),
    leaf = thinCallWithUndefined(field, "quickChat") > 0,
    maple = NativeContextMenuSurface("2380644311"),
    nimbus = maple ? kernel.voiceButtonMode : "push-to-talk",
    opal = azure === "creator-micro-v2" ? "Creator Micro" : "Codex Micro",
    plume = ensureCodexMicroWebviewCommandsInit.filter(
      (item) =>
        (item.id !== "quickChat" || leaf) &&
        (item.id !== "composer.captureAppshot" || canyon) &&
        (!AppInitialV1(item.id) || maple),
    );
  let quillow = plume,
    { skills } = usePetsSettingsController(),
    [root, silk] = vale.useState(null),
    [thorn, upland] = vale.useState(null),
    vista = platform === "macOS",
    wisp = () => codexMicro.getInputMonitoringPermissionStatus();
  let yonder = {
    enabled: vista,
    queryFn: wisp,
    queryKey: codexMicroKeyboardSurfaceState,
    refetchInterval: codexMicroKeyboardSurfaceFlags,
    refetchIntervalInBackground: true,
    refetchOnMount: "always",
    staleTime: readScrollTop.FIVE_SECONDS,
  };
  let { data } = useQuery(yonder),
    zenith = openInBrowser,
    anvil =
      azure === "creator-micro-v2" ? (
        <MemoizedFormattedMessage
          {...{
            ...AppIconEi.creatorMicro,
          }}
        />
      ) : (
        <MemoizedFormattedMessage
          {...{
            ...AppInitialQr("codex-micro"),
          }}
        />
      );
  let beacon = (
    <MemoizedFormattedMessage
      {...{
        ...unity.connection,
      }}
    />
  );
  let crag =
    yarrow.status === "error" ? (
      <CodexMicroSettingsHelper24
        {...{
          deviceName: opal,
          error: yarrow.error,
        }}
      />
    ) : undefined;
  let dome = (
    <CodexMicroSettingsHelper22
      {...{
        error: yarrow.error,
        status: yarrow.status,
      }}
    />
  );
  let eddy = (
    <EnsurePersonalizationCInit
      {...{
        label: beacon,
        description: crag,
        control: dome,
      }}
    />
  );
  let fjord =
    yarrow.status === "connected" && yarrow.battery != null ? (
      <EnsurePersonalizationCInit
        {...{
          label: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.codexMicro.battery",
                defaultMessage: "Battery",
                description: "Label for the Codex Micro battery status",
              }}
            />
          ),
          control: <AppInitialA {...yarrow.battery} />,
        }}
      />
    ) : null;
  let glen =
    platform === "macOS" ? (
      <EnsurePersonalizationCInit
        {...{
          label: (
            <MemoizedFormattedMessage
              {...{
                ...unity.inputMonitoring,
              }}
            />
          ),
          description: (
            <MemoizedFormattedMessage
              {...{
                id: "settings.codexMicro.inputMonitoring.descriptionByDevice",
                defaultMessage:
                  "Required for {deviceName} key presses on macOS",
                description:
                  "Description for the macOS Input Monitoring permission state for Codex Micro or Creator Micro",
                values: {
                  deviceName: opal,
                },
              }}
            />
          ),
          control: (
            <div className="flex items-center gap-2">
              {
                <CodexMicroSettingsHelper21
                  {...{
                    status: data,
                  }}
                />
              }
              {data === "denied" ? (
                <ReadLoginRouteQuerySnapshot
                  {...{
                    color: "secondary",
                    onClick: () => {
                      codexMicro.openInputMonitoringSettings();
                    },
                    children: (
                      <MemoizedFormattedMessage
                        {...{
                          id: "settings.codexMicro.inputMonitoring.openSettings",
                          defaultMessage: "Open System Settings",
                          description:
                            "Button that opens macOS Input Monitoring settings",
                        }}
                      />
                    ),
                  }}
                />
              ) : null}
            </div>
          ),
        }}
      />
    ) : null;
  let hearth = (
    <MemoizedFormattedMessage
      {...{
        ...unity.lightingBrightness,
      }}
    />
  );
  let inlet = (
    <MemoizedFormattedMessage
      {...{
        ...unity.lightingBrightnessDescription,
        values: {
          deviceName: opal,
        },
      }}
    />
  );
  let jetty = (knurl) => {
    setSettingValue(wind, AppInitialNpt.lightingBrightness, knurl);
  };
  let ledge = (
    <CodexMicroSettingsHelper20
      {...{
        value: ink,
        onChange: jetty,
      }}
    />
  );
  let mire = (
    <EnsurePersonalizationCInit
      {...{
        label: hearth,
        description: inlet,
        control: ledge,
      }}
    />
  );
  let nook = (
    <MemoizedFormattedMessage
      {...{
        ...unity.lightingAutoOff,
      }}
    />
  );
  let oxbow = (
    <MemoizedFormattedMessage
      {...{
        ...unity.lightingAutoOffDescription,
        values: {
          deviceName: opal,
        },
      }}
    />
  );
  let pond = apex[jadeite],
    quarry = (
      <DropdownTriggerButton className="w-42!">
        {
          <MemoizedFormattedMessage
            {...{
              ...pond,
            }}
          />
        }
      </DropdownTriggerButton>
    );
  let rapids = CodexPluginActionResult.options.map((item) => (
    <DropdownMenu.Item
      key={item}
      {...{
        onSelect: () => {
          setSettingValue(wind, AppInitialNpt.lightingAutoOff, item);
        },
        children: (
          <MemoizedFormattedMessage
            {...{
              ...apex[item],
            }}
          />
        ),
      }}
    />
  ));
  let _e = (
    <DropdownMenuPopover
      {...{
        align: "end",
        contentWidth: "xs",
        triggerButton: quarry,
        children: rapids,
      }}
    />
  );
  let spur = (
    <EnsurePersonalizationCInit
      {...{
        label: nook,
        description: oxbow,
        control: _e,
      }}
    />
  );
  let be = (
    <UseChromeAndCodeThemeSync
      {...{
        children: (
          <UseChromeAndCodeThemeSync.Content
            {...{
              children: (
                <ParseUrlOrFallback
                  {...{
                    children: [eddy, fjord, glen, mire, spur],
                  }}
                />
              ),
            }}
          />
        ),
      }}
    />
  );
  let tor = useChromeAndCodeThemeSync,
    updraft = () => {
      chatProcessRegister(wind, gamma, {
        onConfirm: () => {
          setSettingValue(
            wind,
            AppInitialNpt.layout,
            ensureKeyboardShortcutsGtInit,
          );
        },
      });
    };
  let verge = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.codexMicro.keyboardLayout.reset",
        defaultMessage: "Reset layout",
        description:
          "Button that restores the default Codex Micro action-key layout",
      }}
    />
  );
  let weir = (
    <ReadLoginRouteQuerySnapshot
      {...{
        color: "ghost",
        size: "toolbar",
        onClick: updraft,
        children: verge,
      }}
    />
  );
  let yard = (
    <MemoizedFormattedMessage
      {...{
        ...unity.keyboardLayout,
        values: {
          deviceName: opal,
        },
      }}
    />
  );
  let anchor = (
    <UseChromeAndCodeThemeSync.Header
      {...{
        actions: weir,
        title: yard,
      }}
    />
  );
  let bolt = useChromeAndCodeThemeSync,
    cog = parseUrlOrFallback,
    disc,
    edge;
  disc = (
    <MemoizedFormattedMessage
      {...{
        ...unity.agentKeys,
      }}
    />
  );
  edge = (
    <MemoizedFormattedMessage
      {...{
        id: "settings.codexMicro.agentKeys.description",
        defaultMessage: "Choose what the six agent keys follow or trigger",
        description:
          "Description for the Codex Micro agent-key task source setting",
      }}
    />
  );
  let forge = wave[haven],
    gear = (
      <DropdownTriggerButton>
        {
          <MemoizedFormattedMessage
            {...{
              ...forge.label,
            }}
          />
        }
      </DropdownTriggerButton>
    );
  let hinge = siteAnalyticsPath.options.map((item) => {
    let lever = wave[item];
    return (
      <DropdownMenu.Item
        key={item}
        {...{
          allowWrap: true,
          onSelect: () => {
            upland(null);
            setSettingValue(wind, AppInitialNpt.agentSource, item);
          },
          children: (
            <div className="flex min-w-0 flex-col gap-0.5">
              <span className="truncate">
                {
                  <MemoizedFormattedMessage
                    {...{
                      ...lever.label,
                    }}
                  />
                }
              </span>
              <span className="text-sm text-token-text-secondary">
                {
                  <MemoizedFormattedMessage
                    {...{
                      ...lever.description,
                    }}
                  />
                }
              </span>
            </div>
          ),
        }}
      />
    );
  });
  let iron = (
    <EnsurePersonalizationCInit
      {...{
        label: disc,
        description: edge,
        control: (
          <DropdownMenuPopover
            {...{
              align: "end",
              contentWidth: "menuWide",
              triggerButton: gear,
              children: hinge,
            }}
          />
        ),
      }}
    />
  );
  let joint = ensurePersonalizationCInit,
    keystone,
    latch;
  keystone = (
    <MemoizedFormattedMessage
      {...{
        ...unity.knob,
      }}
    />
  );
  latch = (
    <MemoizedFormattedMessage
      {...{
        ...unity.knobDescription,
      }}
    />
  );
  let motor = DropdownMenuPopover,
    nut = brook[kernel.encoderMode],
    piston = (
      <DropdownTriggerButton>
        {
          <MemoizedFormattedMessage
            {...{
              ...nut.label,
            }}
          />
        }
      </DropdownTriggerButton>
    );
  let rivet = siteAnalyticsEventsPath.options.map((item) => {
      let mount = brook[item];
      return (
        <DropdownMenu.Item
          key={item}
          {...{
            allowWrap: true,
            onSelect: () => {
              setSettingValue(wind, AppInitialNpt.layout, {
                ...kernel,
                encoderMode: item,
              });
            },
            children: (
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="truncate">
                  {
                    <MemoizedFormattedMessage
                      {...{
                        ...mount.label,
                      }}
                    />
                  }
                </span>
                <span className="text-sm text-token-text-secondary">
                  {
                    <MemoizedFormattedMessage
                      {...{
                        ...mount.description,
                      }}
                    />
                  }
                </span>
              </div>
            ),
          }}
        />
      );
    }),
    screw = (
      <Falcon
        {...{
          align: "end",
          contentWidth: "menuWide",
          triggerButton: piston,
          children: rivet,
        }}
      />
    );
  let torque = (
    <Echo
      {...{
        label: keystone,
        description: latch,
        control: screw,
      }}
    />
  );
  let $e = haven === "custom" ? ever : undefined,
    valve = haven === "custom" ? upland : undefined,
    axle = (nozzle, platen) => {
      setSettingValue(
        wind,
        AppInitialNpt.layout,
        codexMicroLayoutS(kernel, nozzle, platen),
      );
    };
  let bracket, clamp;
  bracket = (ratchet) => {
    AppInitialVw(wind, ratchet);
  };
  clamp = (shim) => {
    AppInitialHw(wind, shim);
  };
  let drill = (
    <CodexMicroSettingsHelper28
      {...{
        agentSlots: dew,
        commands: quillow,
        customAgentAssignments: $e,
        deviceName: opal,
        layout: kernel,
        previewState: birch,
        skills,
        voiceButtonMode: nimbus,
        onEditSlot: silk,
        onEditAgentKey: valve,
        onSetAnalogAction: axle,
        onSelectAnalogDirection: bracket,
        onSetAnalogEditorOpen: clamp,
      }}
    />
  );
  let engine = maple ? (
    <_r
      {...{
        mode: kernel.voiceButtonMode,
        onChange: (tappet) => {
          setSettingValue(wind, AppInitialNpt.layout, {
            ...kernel,
            voiceButtonMode: tappet,
          });
        },
      }}
    />
  ) : null;
  let frame = (
    <Delta
      {...{
        children: [iron, torque, drill, engine],
      }}
    />
  );
  let gasket = (
    <Copper.Content
      {...{
        children: frame,
      }}
    />
  );
  let handle = (
    <Bravo
      {...{
        children: [anchor, gasket],
      }}
    />
  );
  let insert =
    root == null ? null : (
      <CodexMicroSettingsHelper27
        key={root}
        {...{
          commands: quillow,
          layout: kernel,
          skills,
          slotId: root,
          voiceButtonMode: nimbus,
          onOpenChange: (arbor) => {
            arbor || silk(null);
          },
          onSave: (bushing) => {
            setSettingValue(
              wind,
              AppInitialNpt.layout,
              codexMicroLayoutC(kernel, root, bushing),
            ).then(() => {
              silk(null);
            });
          },
        }}
      />
    );
  let jacket =
    haven === "custom" && thorn != null ? (
      <CodexMicroSettingsHelper14
        key={thorn}
        {...{
          agentKeyId: thorn,
          commands: quillow,
          skills,
          onOpenChange: (collar) => {
            collar || upland(null);
          },
        }}
      />
    ) : null;
  return (
    <Alpha
      {...{
        title: anvil,
        children: [be, handle, insert, jacket],
      }}
    />
  );
}
