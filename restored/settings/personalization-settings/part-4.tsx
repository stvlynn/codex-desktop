// Restored from ref/webview/assets/personalization-settings-DkpdQsHj.js
// Wave5 stub-pass soft companions.
const DeferredUiE2: any = undefined;
const deferredBrowserY0: any = undefined;
const ensureConfigQueryAtomsInit: any = undefined;
const list: any = undefined;

// Wave FX — full polished body from `personalization-settings-DkpdQsHj/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 40 (verified 94/134).
// Wave5d — FZ repair from fy-clean L=2691 sus=22; JSX PascalCase + careful split.
// Wave5d careful split 4/5
/* split-lane-import-depth:1 */

import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { appActionSidebarProjectRefSchema } from "../../actions/app-action-payload-schemas";
import { formatAgentMention } from "../../agents/format-agent-mention";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CODEX_MEMORY_SETTING_TOGGLED_TYPE } from "../../analytics/codex-memory-setting-toggled-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { chatgptConversationsGateAtom } from "../../composer/composer-appscope-atoms";
import { ensureComposerEsm_B7_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { conversationsSidebarMessages } from "../../chatgpt/conversations-sidebar-messages";
import { composerNavigation } from "../../composer/composer-navigation";
import { MEMORIES_ID } from "../../config/memories-id";
import { USER_CONFIG_PATH } from "../../config/user-config-path";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { applyActive } from "../../conversation/apply-active";
import { deferredConversationP } from "../../conversation/deferred-conversation-p";
import { ensureSteeringUserMessageClusterInit } from "../../conversation/ensure-steering-user-message-cluster-init";
import { buildCodexDesktopRequestHeaders } from "../../desktop/codex-desktop-request-headers";
import { appServices } from "../../desktop/desktop-services";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { DesktopPersistenceKeys } from "../../desktop/persistence-keys";
import { DEVELOPERS_OPENAI_COM_CODEX_GUIDES_AGENTS_MD_URL } from "../../docs/codex-doc-urls";
import { ensureGitRepoWatchAtomsInit } from "../../hooks/git-method-query-atoms";
import { homeDirectoryQueryAtom } from "../../hooks/home-directory-query";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQueryClient } from "../../hooks/use-query-client";
import { HostFeatureConfigToggles } from "../../hosts/host-feature-config-toggles";
import { useSelectedHost } from "../../hosts/use-selected-host";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconBO } from "../../icons/app-icon-bo";
import { AppIconOi } from "../../icons/app-icon-oi";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { PanelWidthIcon } from "../../icons/panel-width-icon";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { readScrollTop, scrollAppActionTargetTo } from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { resolveBrowserTabPanelSide as ResolveBrowserTabPanelSide } from "../../navigation/resolve-browser-tab-panel-side";
import { SIDEBAR_HIT_TEST_SELECTOR } from "../../navigation/sidebar-hit-test-selector";
import { useOpenLocatorInMainWindow } from "../../navigation/use-open-locator-in-main-window";
import { ensureDynamicScriptLoadInit } from "../../runtime/ensure-dynamic-script-load-init";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { codexCommandTheme } from "../../ui/codex-command-theme";
import { deferredUiB as DeferredUiB } from "../../ui/deferred-ui-b";
import { deferredUiH as DeferredUiH } from "../../ui/deferred-ui-h";
import { DropdownMenu, ensureDropdownMenuInit } from "../../ui/dropdown-menu";
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { ElectronOnly } from "../../ui/electron-only";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { protobufAnalyticsEventsV1CodexMemorySettingToggled } from "../../ui/protobuf-analytics-events-v1-codex-memory-setting-toggled-2";
import { identity } from "../../utils/identity";
import { noop } from "../../utils/noop";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { ensurePersonalizationCInit as EnsurePersonalizationCInit, ensurePersonalizationG0Init, ensurePersonalizationJutInit, ensurePersonalizationK0Init, ensurePersonalizationM6Init } from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import { buildMemoryFeatureFlags } from "../build-memory-feature-flags";
import { ensureChronicleConfigQueriesInit, useChronicleConfigQuery } from "../chronicle-config-queries";
import { gpuTearingDebugSettingsAtom } from "../gpu-tearing-debug-settings";
import { ensureSettingsQueryAtomsInit } from "../settings-ipc";
import { ensureSettingsSectionTitleInit, SettingsSectionTitle } from "../settings-section-title";
import { buildVscodeQueryKey } from "../vscode-query-key";

// Wave5d soft JSX companions.
function DeferredUiU(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function ReadLoginRouteQuerySnapshot(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function SetRemoteControlEnabledForHost(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitial0: any = undefined;
const AppInitialB: any = undefined;
const AppInitialBC: any = undefined;
const AppInitialC: any = undefined;
const AppInitialFC: any = undefined;
const AppInitialO9: any = undefined;
const AppInitialS: any = undefined;
const AppInitialVC: any = undefined;
const AppInitialW: any = undefined;
const AppInitialX: any = undefined;
const AppInitialY: any = undefined;
const AppInitialYC: any = undefined;
const AppInitialYgt: any = undefined;
const PersonalizationSettingsHelper25: any = undefined;
const PersonalizationSettingsHelper27: any = undefined;
const PersonalizationSettingsHelper5: any = undefined;
const deferredUiB: any = undefined;
const deferredUiH: any = undefined;
const deferredUiX9: any = undefined;
const openInBrowser: any = undefined;
const parseUrlOrFallback: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
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
const useChromeAndCodeThemeSync: any = undefined;
function isle() {
  let petal = CodexPluginActionType(appScopeAtom),
    quiet = useIntl(),
    rain = CodexPluginActionResult(deferredUiX9),
    {
      selectedHostId
    } = useSelectedHost(),
    seed = ensureSteeringUserMessageClusterInit(selectedHostId),
    [trail, urn] = meadow.useState(false),
    vine = AppInitialW(),
    wind = AppInitialS(),
    {
      data
    } = CodexBrowserSurfaceActionType(homeDirectoryQueryAtom, selectedHostId),
    {
      data: _data = [],
      isLoading
    } = CodexBrowserSurfaceActionType(deferredBrowserY0, selectedHostId);
  let yarrow = _data,
    azure = vine && !wind.isLoading && !wind.available,
    birch = {
      queryConfig: {
        enabled: azure,
        refetchOnMount: "always",
        refetchOnWindowFocus: true
      }
    };
  let {
      data: __data
    } = SIDEBAR_HIT_TEST_SELECTOR("chronicle-permissions", birch),
    canyon = alpha(selectedHostId),
    dew = {
      hostId: selectedHostId
    };
  let ever = HostFeatureConfigToggles(dew),
    field = useChronicleConfigQuery(),
    grain = () => canonicalizeWorkspacePathKey("reset-memories-for-host", {
      hostId: selectedHostId
    });
  let haven, ink;
  haven = () => {
    urn(false);
    petal.get(toastAtom).success(<MemoizedFormattedMessage {...{
      id: "settings.memory.resetSuccess",
      defaultMessage: "Memories reset",
      description: "Toast shown after resetting memories"
    }} />);
  };
  ink = () => {
    petal.get(toastAtom).danger(<MemoizedFormattedMessage {...{
      id: "settings.memory.resetError",
      defaultMessage: "Unable to reset memories",
      description: "Toast shown when resetting memories fails"
    }} />);
  };
  let jadeite = {
    mutationFn: grain,
    onSuccess: haven,
    onError: ink
  };
  let kernel = noop(jadeite),
    leaf = AppInitial0(yarrow);
  let maple = leaf;
  if (maple == null) return null;
  let nimbus = maple.enabled,
    opal = data?.config,
    plume = AppInitialO9(opal);
  let quillow = plume,
    root = data?.config,
    silk = AppInitialYgt(root, AppInitialY);
  let thorn = silk === true,
    upland = isLoading || canyon.isPending || ever.isPending || field.isPending || kernel.isPending,
    vista = seed.kind === "local",
    wisp = upland || vista && wind.isLoading,
    yonder = nimbus && quillow.generateMemories && quillow.useMemories,
    zenith = vista && vine && !wind.isLoading && !wind.available && __data?.chronicleSidecarPresent === true,
    anvil = {
      chronicleResearchPreviewEnabled: thorn,
      chronicleResearchPreviewVisible: zenith,
      isMemoryFeatureEnabled: nimbus,
      memoryConfig: quillow
    };
  let beacon = anvil,
    crag = motor => {
      let {
        chronicleResearchPreviewEnabled,
        isMemoryFeatureEnabled,
        memoryConfigPatch
      } = motor === undefined ? {} : motor;
      return bravo(beacon, {
        chronicleResearchPreviewEnabled,
        isMemoryFeatureEnabled,
        memoryConfigPatch
      });
    };
  let dome = crag,
    eddy = nut => {
      echo({
        productLogger: rain,
        previousState: dome(),
        selectedEnabled: nut,
        featureWrite: () => ever.mutateAsync({
          featureName: MEMORIES_ID,
          enabled: nut
        }),
        configWrite: () => canyon.mutateAsync({
          edits: [{
            keyPath: "memories.generate_memories",
            value: nut
          }, {
            keyPath: "memories.use_memories",
            value: nut
          }]
        }),
        ...(!nut && vista ? {
          chronicleDisable: () => wind.available && appServices.chronicle != null ? appServices.chronicle.setEnabled(false) : field.mutateAsync({
            enabled: false
          })
        } : {})
      });
    };
  let fjord = eddy,
    glen = async () => {
      await kernel.mutateAsync();
    };
  let hearth = glen,
    inlet = <MemoizedFormattedMessage {...{
      ...timber.memory
    }} />;
  let jetty = <UseChromeAndCodeThemeSync.Header {...{
    title: inlet,
    subtitle: <MemoizedFormattedMessage {...{
      id: "settings.personalization.memory.subtitle",
      defaultMessage: "Configure how ChatGPT collects, retains, and consolidates memories. <a>Learn more</a>",
      description: "Description for memory settings in personalization",
      values: {
        a: juniper
      }
    }} />
  }} />;
  let knob, ledge;
  knob = <MemoizedFormattedMessage {...{
    ...timber.enableMemories
  }} />;
  ledge = <MemoizedFormattedMessage {...{
    id: "settings.memory.enableMemoriesDescription",
    defaultMessage: "Generate new memories from chats and bring them into new chats",
    description: "Description for enabling memories"
  }} />;
  let mire = quiet.formatMessage({
    id: "settings.memory.enableMemoriesAriaLabel",
    defaultMessage: "Enable memories",
    description: "Accessible label for enabling memories"
  });
  let nook = <EnsurePersonalizationCInit {...{
    label: knob,
    description: ledge,
    control: <AppInitialYC checked={yonder} disabled={wisp} ariaLabel={mire} onChange={fjord} />
  }} />;
  let oxbow = zenith ? <PersonalizationSettingsHelper5 {...{
    onChronicleResearchPreviewToggled: (piston, rivet) => {
      copper({
        productLogger: rain,
        previousEnabled: piston,
        selectedEnabled: rivet,
        settingName: "chronicle_research_preview",
        state: dome({
          chronicleResearchPreviewEnabled: rivet
        })
      });
    }
  }} /> : null;
  let pond, quarry;
  pond = <MemoizedFormattedMessage {...{
    ...timber.allowMemoryGenerationFromToolAssistedTasks
  }} />;
  quarry = <MemoizedFormattedMessage {...{
    id: "settings.memory.allowMemoryGenerationFromToolAssistedTasksDescription",
    defaultMessage: "Generate memories from chats that used MCP tools or web search",
    description: "Description for allowing memory generation when MCP or web search is used"
  }} />;
  let rapids = !quillow.disableOnExternalContext,
    spur = upland || !nimbus,
    tor = quiet.formatMessage({
      id: "settings.memory.allowMemoryGenerationFromToolAssistedTasksAriaLabel",
      defaultMessage: "Allow memory generation from tool-assisted chats",
      description: "Accessible label for allowing memory generation when MCP or web search is used"
    });
  let updraft = screw => {
    let torque = !screw;
    delta({
      productLogger: rain,
      previousEnabled: quillow.disableOnExternalContext,
      selectedEnabled: torque,
      settingName: "skip_tool_assisted_chats",
      state: dome({
        memoryConfigPatch: {
          disableOnExternalContext: torque
        }
      }),
      write: () => canyon.mutateAsync({
        edits: [{
          keyPath: "memories.disable_on_external_context",
          value: torque
        }, {
          keyPath: "memories.no_memories_if_mcp_or_web_search",
          value: null
        }]
      })
    });
  };
  let verge = <EnsurePersonalizationCInit {...{
    label: pond,
    description: quarry,
    control: <AppInitialYC checked={rapids} disabled={spur} ariaLabel={tor} onChange={updraft} />
  }} />;
  let weir, yard;
  weir = <MemoizedFormattedMessage {...{
    ...timber.resetMemories
  }} />;
  yard = <MemoizedFormattedMessage {...{
    id: "settings.memory.resetMemoriesDescription",
    defaultMessage: "Delete all ChatGPT memories",
    description: "Description for resetting memories"
  }} />;
  let anchor, bolt;
  anchor = () => {
    urn(true);
  };
  bolt = <MemoizedFormattedMessage {...{
    id: "settings.memory.resetMemoriesButton",
    defaultMessage: "Reset",
    description: "Button label for resetting memories"
  }} />;
  let cog = <EnsurePersonalizationCInit {...{
    label: weir,
    description: yard,
    control: <ReadLoginRouteQuerySnapshot {...{
      color: "danger",
      disabled: kernel.isPending,
      loading: kernel.isPending,
      onClick: anchor,
      children: bolt
    }} />
  }} />;
  let disc = <UseChromeAndCodeThemeSync {...{
    children: [jetty, <UseChromeAndCodeThemeSync.Content {...{
      children: <ParseUrlOrFallback {...{
        children: [nook, oxbow, verge, cog]
      }} />
    }} />]
  }} />;
  let edge = <DeferredUiU {...{
    children: <DeferredUiH {...{
      title: <MemoizedFormattedMessage {...{
        id: "settings.memory.resetDialogTitle",
        defaultMessage: "Reset all memories?",
        description: "Title for reset memories confirmation dialog"
      }} />,
      subtitle: <MemoizedFormattedMessage {...{
        id: "settings.memory.resetDialogSubtitle",
        defaultMessage: "This deletes all ChatGPT memories",
        description: "Subtitle for reset memories confirmation dialog"
      }} />
    }} />
  }} />;
  let forge, gear;
  forge = () => {
    urn(false);
  };
  gear = <MemoizedFormattedMessage {...{
    id: "settings.memory.resetDialogCancel",
    defaultMessage: "Cancel",
    description: "Cancel button label for reset memories dialog"
  }} />;
  let hinge = <ReadLoginRouteQuerySnapshot {...{
    color: "ghost",
    disabled: kernel.isPending,
    onClick: forge,
    children: gear
  }} />;
  let iron = () => {
    rain.logProductEvent(ensurePersonalizationM6Init, {
      resetScope: "all_memories"
    });
    hearth();
  };
  let $e = <MemoizedFormattedMessage {...{
    id: "settings.memory.resetDialogConfirm",
    defaultMessage: "Reset",
    description: "Confirm button label for reset memories dialog"
  }} />;
  let joint = <ReadLoginRouteQuerySnapshot {...{
    color: "danger",
    loading: kernel.isPending,
    onClick: iron,
    children: $e
  }} />;
  let keystone = <DeferredUiB {...{
    children: [edge, <DeferredUiU {...{
      children: <SetRemoteControlEnabledForHost {...{
        children: [hinge, joint]
      }} />
    }} />]
  }} />;
  let latch = <UsePointerSurfaceInteractionGate {...{
    open: trail,
    onOpenChange: urn,
    size: "compact",
    children: keystone
  }} />;
  return <>
      {disc}
      {latch}
    </>;
}
function juniper(valve) {
  return <a className="inline-flex text-token-text-link-foreground" href="https://developers.openai.com/codex/memories" target="_blank" rel="noreferrer">
      {valve}
    </a>;
}
var lagoon,
  meadow,
  nest,
  oak = esmInit(() => {
    lagoon = reactCompilerRuntime();
    protobufAnalyticsEventsV1CodexMemorySettingToggled();
    serializeCharacterReferenceNode();
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    meadow = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    AppActionSelector();
    ensureSettingsQueryAtomsInit();
    findProcessManagerRow();
    useOpenLocatorInMainWindow();
    ensureComposerEsm_Ilt_Init();
    AppInitialBC();
    AppInitialC();
    AppInitialX();
    formatAgentMention();
    acorn();
    DeferredUiE2();
    ensureComposerEsm_K9_Init();
    ensureConfigQueryAtomsInit();
    list();
    ensureDynamicScriptLoadInit();
    ensureAppScopeInit();
    ember();
    codexCommandTheme();
    AppIconBO();
    AppInitialVC();
    AppInitialFC();
    ensureAppShellAtomsInit();
    scrollAppActionTargetTo();
    ensureChronicleConfigQueriesInit();
    falcon();
    AppInitialB();
    gamma();
  });
export function PersonalizationSettings() {
  let axle = CodexPluginActionResult(chatgptConversationsGateAtom);
  return <OpenInBrowser {...{
    title: <SettingsSectionTitle slug="personalization" />,
    children: [axle ? <PersonalizationSettingsHelper27 {...{}} /> : null, <ElectronOnly {...{
      electron: true,
      extension: true,
      children: <PersonalizationSettingsHelper25 {...{}} />
    }} />]
  }} />;
}
