// Restored from ref/webview/assets/agent-settings-3N239YzB.js
// Wave5 stub-pass soft companions.
const DeferredUiAP2: any = undefined;
const Models: any = undefined;
const NativeContextMenuSurface: any = undefined;
const ensurePersonalizationCInit: any = undefined;
const ensureUseSelectedAvatarInit: any = undefined;

// Wave FX — full polished body from `agent-settings-3N239YzB/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 51 (verified 113/164).
// Wave5d — FZ repair from fy-clean L=3008 sus=28; JSX PascalCase + careful split.
// Wave5d careful split 2/5
/* split-lane-import-depth:1 */

import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CODEX_PRIMARY_RUNTIME_DEPENDENCIES_DIAGNOSE_TYPE } from "../../analytics/codex-primary-runtime-dependencies-diagnose-type";
import { CODEX_PROFILE_INLINE_PHOTO_CHANGE_EVENT_TYPE } from "../../analytics/codex-profile-inline-photo-change-event-type";
import { logProductEvent } from "../../analytics/log-product-event";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { normalizeAppIconThemeEntries } from "../../apps/normalize-app-icon-theme-entries";
import { automationsNotShallowEqual } from "../../automation/automations-not-shallow-equal";
import { isBlankAutomationDraft as IsBlankAutomationDraft } from "../../automation/is-blank-automation-draft";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_B7_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Utt_Init } from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init, ensureConversationPageEsm_B0_Init } from "../../conversation/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { useLocation } from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { chatgpt2 as Chatgpt2 } from "../../browser/chatgpt2";
import { LAYERED_RESPONSE_CONFIG_PATH } from "../../config/layered-response-config-path";
import { managedConfigFilePath } from "../../config/managed-config-file-path";
import { USER_CONFIG_PATH } from "../../config/user-config-path";
import { WORKSPACE_DEPENDENCIES_ID } from "../../config/workspace-dependencies-id";
import { applyActive } from "../../conversation/apply-active";
import { chatgptProjectQueryKey } from "../../conversation/chatgpt-conversation-query-keys";
import { deferredConversationN } from "../../conversation/deferred-conversation-n";
import { ensureSteeringUserMessageClusterInit } from "../../conversation/ensure-steering-user-message-cluster-init";
import { markConversationIdle } from "../../conversation/mark-conversation-idle";
import { cancelPrimaryRuntimeInstall } from "../../desktop/cancel-primary-runtime-install";
import { buildCodexDesktopRequestHeaders } from "../../desktop/codex-desktop-request-headers";
import { appServices } from "../../desktop/desktop-services";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { invokeDesktopRpc } from "../../desktop/invoke-desktop-rpc";
import { primaryRuntimeDiagnosticsQueryKey } from "../../desktop/primary-runtime-diagnostics-query-key";
import { realtimeVoiceCommandMessages } from "../../desktop/realtime-voice-command-messages";
import { DEVELOPERS_OPENAI_COM_CODEX_CONFIG_BASIC_URL } from "../../docs/codex-doc-urls";
import { areVisualizationFeatureGatesEnabled as AreVisualizationFeatureGatesEnabled } from "../../feature-gates/are-visualization-feature-gates-enabled";
import { ensureDebugPanelTurnFilesInit } from "../../hooks/debug-panel-turn-files";
import { FkrDataBridge } from "../../hooks/fkr-data-bridge";
import { ensureAuthProviderInit } from "../../hooks/use-auth";
import { useQuery } from "../../hooks/use-query";
import { HostFeatureConfigToggles } from "../../hosts/host-feature-config-toggles";
import { useLocalCwdModeHostConfig } from "../../hosts/use-local-cwd-mode-host-config";
import { useSelectedHost } from "../../hosts/use-selected-host";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconL0 } from "../../icons/app-icon-l0";
import { AppIconOi } from "../../icons/app-icon-oi";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { mcpGlobalCapabilityCatalogAtom as McpGlobalCapabilityCatalogAtom } from "../../mcp/mcp-capability-host";
import { readScrollTop, scrollAppActionTargetTo } from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { resolveBrowserTabPanelSide as ResolveBrowserTabPanelSide } from "../../navigation/resolve-browser-tab-panel-side";
import { useIsLoginMethodAvailable } from "../../onboarding/use-is-login-method-available";
import { usePluginCategoryPageTelemetry } from "../../plugins/use-plugin-category-page-telemetry";
import { usePluginNavigationTelemetry as UsePluginNavigationTelemetry } from "../../plugins/use-plugin-navigation-telemetry";
import { PLEASE_IMPLEMENT_THIS_PLAN_HEADER } from "../../prompts/please-implement-this-plan-header";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiYn } from "../../ui/deferred-ui-yn";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { ElectronOnly } from "../../ui/electron-only";
import { FloatingSurfaceCssClass } from "../../ui/floating-surface-css-classes";
import { setPrimaryRuntimeInstallRelease2 } from "../../ui/set-primary-runtime-install-release2";
import { extractColonPrefixedNamedTokens } from "../../utils/extract-colon-prefixed-named-tokens";
import { identity } from "../../utils/identity";
import { isAbortError } from "../../utils/is-abort-error";
import { isXcodeLicenseError } from "../../utils/is-xcode-license-error";
import { lerpIfFinite as LerpIfFinite } from "../../utils/lerp-if-finite";
import { noop } from "../../utils/noop";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { ensureImportSettingsGctInit, ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import { identityCwd } from "../../utils/workspace-paths";
import { pendingWorktreeConversationStartApi } from "../../worktree/pending-worktree-conversation-start-api";
import { readCodexHomeFromQuery } from "../read-codex-home-from-query";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import { initSettingsLoadingRow, SettingsLoadingRow } from "../settings-loading-row";
import { ensureSettingsSectionTitleInit, SettingsSectionTitle } from "../settings-section-title";

// Wave5d soft JSX companions.
function Alpha(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Bravo(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Copper(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Delta(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Echo(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AgentSettingsHelper11: any = undefined;
const AgentSettingsHelper15: any = undefined;
const AgentSettingsHelper17: any = undefined;
const AgentSettingsHelper18: any = undefined;
const AgentSettingsHelper20: any = undefined;
const AppInitialBC: any = undefined;
const AppInitialEX: any = undefined;
const AppInitialFC: any = undefined;
const AppInitialGX: any = undefined;
const AppInitialMP: any = undefined;
const AppInitialRX: any = undefined;
const AppInitialVC: any = undefined;
const AppInitialYC: any = undefined;
const AppInitialZ7: any = undefined;
const falcon: any = undefined;
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
const deferredUiB: any = undefined;
const deferredUiEnt: any = undefined;
const openInBrowser: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;
function prism(wheat) {
  let {
      hostId
    } = wheat,
    yarn = CodexPluginActionType(appScopeAtom),
    zephyr = useIntl(),
    acorn = CodexPluginActionResult(normalizeAppIconThemeEntries),
    {
      data
    } = CodexPluginActionResult(DeferredUiAP2),
    bloom = CodexPluginActionResult(AppInitialMP),
    coral = {
      hostId
    };
  let {
      data: _data
    } = findProcessManagerRow(coral),
    drift,
    eagle,
    frost,
    glide,
    honey,
    iris,
    jewel,
    knoll,
    lunar,
    moss,
    north,
    orbit,
    pine,
    quest;
  iris = Symbol.for("react.early_return_sentinel");
  bb0: {
    let wave = dusk => dusk === "max" ? _data?.hasModelSupportingMaxReasoningEffort === true : _data?.hasModelSupportingUltraReasoningEffort === true;
    let apex = topaz.filter(wave);
    if (_data == null || apex.length === 0) {
      iris = null;
      break bb0;
    }
    let brook = elm => acorn.has(elm);
    let cliff = AppInitialEX.length + apex.filter(brook).length;
    honey = useChromeAndCodeThemeSync;
    quest = <UseChromeAndCodeThemeSync.Header {...{
      title: <MemoizedFormattedMessage {...{
        id: "settings.agent.modelFeatures.title",
        defaultMessage: "Model features",
        description: "Title for model feature settings"
      }} />
    }} />;
    glide = useChromeAndCodeThemeSync.Content;
    frost = parseUrlOrFallback;
    eagle = ensurePersonalizationCInit;
    orbit = <MemoizedFormattedMessage {...{
      id: "settings.agent.modelFeatures.reasoningEfforts.label",
      defaultMessage: "Available reasoning efforts",
      description: "Label for the available reasoning efforts setting"
    }} />;
    pine = <MemoizedFormattedMessage {...{
      id: "settings.agent.modelFeatures.reasoningEfforts.description",
      defaultMessage: "Choose which reasoning effort levels appear in model controls. Availability varies by model",
      description: "Description for the available reasoning efforts setting"
    }} />;
    drift = DropdownMenuPopover;
    jewel = "end";
    knoll = "menuWide";
    lunar = <DropdownTriggerButton>
        {<MemoizedFormattedMessage {...{
        id: "settings.agent.modelFeatures.reasoningEfforts.selectedCount",
        defaultMessage: "{count, plural, one {# selected} other {# selected}}",
        description: "Number of available reasoning efforts selected",
        values: {
          count: cliff
        }
      }} />}
      </DropdownTriggerButton>;
    moss = AppInitialEX.map(quill);
    north = apex.map(item => <DropdownMenu.CheckboxItem key={item} {...{
      checked: acorn.has(item),
      onCheckedChange: fern => {
        AppInitialRX(yarn, {
          enabled: fern,
          hostId,
          listModelsData: _data,
          reasoningEffort: item
        });
      },
      children: <IsBlankAutomationDraft {...{
        effort: item
      }} />
    }} />);
  }
  if (iris !== Symbol.for("react.early_return_sentinel")) return iris;
  let ridge = <Alpha {...{
    align: jewel,
    contentWidth: knoll,
    triggerButton: lunar,
    children: [moss, north]
  }} />;
  let storm = <Bravo {...{
    label: orbit,
    description: pine,
    control: ridge
  }} />;
  let tide = _data.hasModelSupportingUltraReasoningEffort ? <EnsurePersonalizationCInit {...{
    label: <MemoizedFormattedMessage {...{
      id: "settings.agent.modelFeatures.modelPickerSliderUltra.label",
      defaultMessage: "Ultra in model picker slider",
      description: "Label for the setting that adds Ultra to the model picker slider"
    }} />,
    description: <MemoizedFormattedMessage {...{
      id: "settings.agent.modelFeatures.modelPickerSliderUltra.description",
      defaultMessage: "Show Ultra as the highest slider option",
      description: "Description for the setting that adds Ultra to the model picker slider"
    }} />,
    control: <AppInitialYC aria-busy={bloom.isPending || undefined} checked={data?.ultraEffortEnabled === true} disabled={data == null || bloom.isPending} onChange={grove => {
      bloom.mutate(grove);
    }} ariaLabel={zephyr.formatMessage({
      id: "settings.agent.modelFeatures.modelPickerSliderUltra.ariaLabel",
      defaultMessage: "Show Ultra in the model picker slider",
      description: "Accessible label for the Ultra model picker slider setting toggle"
    })} />
  }} /> : null;
  let unity = <Copper {...{
    children: [storm, tide]
  }} />;
  let vale = <Delta {...{
    children: unity
  }} />;
  return <Echo {...{
    children: [quest, vale]
  }} />;
}
function quill(hill) {
  return <DropdownMenu.CheckboxItem key={hill} {...{
    checked: true,
    disabled: true,
    children: <IsBlankAutomationDraft {...{
      effort: hill
    }} />
  }} />;
}
var reef,
  sage,
  topaz,
  ultra = esmInit(() => {
    reef = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    ensureIntlFormattersInit();
    markConversationIdle();
    ensureDropdownMenuInit();
    AppInitialBC();
    automationsNotShallowEqual();
    Models();
    FkrDataBridge();
    ensureAppScopeInit();
    codexCommandTheme();
    AppInitialVC();
    ensureSettingsSectionTitleInit();
    AppInitialFC();
    topaz = ["max", "ultra"];
  });
export function AgentSettings() {
  let {
      selectedHostId
    } = useSelectedHost(),
    isle = ensureSteeringUserMessageClusterInit(selectedHostId),
    juniper = AppInitialGX(selectedHostId),
    lagoon = CodexPluginActionResult(AppInitialZ7),
    meadow = NativeContextMenuSurface(ensureUseSelectedAvatarInit),
    nest = NativeContextMenuSurface("2106641128"),
    oak = NativeContextMenuSurface("3693343337");
  return <>
      {<OpenInBrowser {...{
      title: <SettingsSectionTitle slug="agent" />,
      subtitle: <MemoizedFormattedMessage {...{
        id: "settings.agent.configuration.subtitle.summary",
        defaultMessage: "Configure approval policy and sandbox settings <a>Learn more</a>",
        description: "Summary text for the configuration settings subtitle",
        values: {
          a: petal => <a className="inline-flex text-token-text-link-foreground" href={DEVELOPERS_OPENAI_COM_CODEX_CONFIG_BASIC_URL} target="_blank" rel="noreferrer">
                        {petal}
                      </a>
        }
      }} />,
      children: [lagoon ? <UseChromeAndCodeThemeSync {...{
        children: [<UseChromeAndCodeThemeSync.Header {...{
          title: <MemoizedFormattedMessage {...{
            ...olive.customConfig
          }} />
        }} />, <UseChromeAndCodeThemeSync.Content {...{
          children: [juniper.map((item, index) => <ResolveBrowserTabPanelSide key={`${index}:${item.kind}:${item.summary}:${item.path ?? ""}`} {...{
            content: <>
                                      {<AreVisualizationFeatureGatesEnabled {...{
                cwd: null,
                className: "[&>p]:my-0",
                textStyle: {
                  kind: "small"
                },
                children: item.summary
              }} />}
                                      {item.details != null && item.details.length > 0 ? <AreVisualizationFeatureGatesEnabled {...{
                cwd: null,
                className: "[&>p]:my-0",
                textStyle: {
                  kind: "small"
                },
                children: item.details
              }} /> : null}
                                      {item.path == null ? null : <MemoizedFormattedMessage {...{
                id: "settings.agent.configuration.notice.fileContext",
                defaultMessage: "File: {path}{location}",
                description: "File path and optional location for a config or rules warning shown in settings",
                values: {
                  path: <code>{item.path}</code>,
                  location: item.range == null ? "" : <MemoizedFormattedMessage {...{
                    id: "settings.agent.configuration.notice.fileLocationSuffix",
                    defaultMessage: " (line {line}, column {column})",
                    description: "Suffix showing the line and column for a config warning in settings",
                    values: {
                      line: item.range.start.line,
                      column: item.range.start.column
                    }
                  }} />
                }
              }} />}
                                    </>,
            Icon: isXcodeLicenseError,
            onPrimaryCtaClick: () => {
              item.path != null && useIsLoginMethodAvailable({
                hostId: selectedHostId,
                path: item.path,
                ...(item.range == null ? {} : {
                  range: item.range
                })
              });
            },
            primaryCtaText: item.path == null ? undefined : <MemoizedFormattedMessage {...{
              id: "settings.agent.configuration.notice.openFile",
              defaultMessage: "Open file",
              description: "Button label to open the file associated with a config or rules warning"
            }} />,
            role: "alert",
            type: "warning"
          }} />), <ElectronOnly {...{
            electron: true,
            children: <AgentSettingsHelper20 {...{
              hostId: selectedHostId
            }} />
          }} />, <ElectronOnly {...{
            extension: true,
            children: <ParseUrlOrFallback {...{
              children: <EnsurePersonalizationCInit {...{
                label: <MemoizedFormattedMessage {...{
                  id: "settings.agent.configuration.configToml",
                  defaultMessage: "config.toml",
                  description: "Label for config.toml open button"
                }} />,
                description: <>
                                                {<MemoizedFormattedMessage {...{
                    id: "settings.agent.configuration.configToml.description",
                    defaultMessage: "Edit your config to customize agent behavior",
                    description: "Description for config.toml open row"
                  }} />}{" "}
                                                <span className="block" />
                                                {<MemoizedFormattedMessage {...{
                    id: "settings.agent.configuration.configToml.restartNote",
                    defaultMessage: "Restart ChatGPT after editing to apply changes",
                    description: "Note that config.toml changes require a restart"
                  }} />}{" "}
                                                <a className="inline-flex items-center gap-1 text-token-text-secondary hover:text-token-text-primary" href={DEVELOPERS_OPENAI_COM_CODEX_CONFIG_BASIC_URL} target="_blank" rel="noreferrer" onClick={quiet => {
                    deferredUiEnt({
                      event: quiet,
                      href: DEVELOPERS_OPENAI_COM_CODEX_CONFIG_BASIC_URL,
                      initiator: "open_in_browser_bridge"
                    });
                  }}>
                                                  {<MemoizedFormattedMessage {...{
                      id: "settings.agent.configuration.configToml.docs",
                      defaultMessage: "Docs",
                      description: "Link label for config documentation"
                    }} />}
                                                  {<HostFeatureConfigToggles {...{
                      href: DEVELOPERS_OPENAI_COM_CODEX_CONFIG_BASIC_URL,
                      className: "icon-xxs"
                    }} />}
                                                </a>
                                              </>,
                control: <McpGlobalCapabilityCatalogAtom {...{
                  hostId: selectedHostId
                }} />
              }} />
            }} />
          }} />]
        }} />]
      }} /> : null, oak ? <AgentSettingsHelper15 {...{
        hostId: selectedHostId
      }} /> : null, <ElectronOnly {...{
        electron: true,
        children: nest ? <div>
                      {<AgentSettingsHelper11 {...{
            hostId: selectedHostId
          }} />}
                    </div> : null
      }} />, <ElectronOnly {...{
        electron: true,
        children: meadow && isle.kind === "local" ? <AgentSettingsHelper17 {...{
          hostId: selectedHostId
        }} /> : null
      }} />]
    }} />}
    </>;
}
function vapor(rain) {
  let {
      hostId
    } = rain,
    seed = appServices.primaryRuntime;
  if (seed == null) return null;
  return <AgentSettingsHelper18 {...{
    hostId,
    primaryRuntime: seed
  }} />;
}
