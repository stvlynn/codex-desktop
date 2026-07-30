// Restored from ref/webview/assets/personalization-settings-DkpdQsHj.js
// Wave5 stub-pass soft companions.
const NativeContextMenuSurface: any = undefined;
const applyU0000U001FU007F2: any = undefined;
const ensureSidebarPanelIconInit: any = undefined;

// Wave FX — full polished body from `personalization-settings-DkpdQsHj/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 40 (verified 94/134).
// Wave5d — FZ repair from fy-clean L=2691 sus=22; JSX PascalCase + careful split.
// Wave5d careful split 5/5
/* split-lane-import-depth:1 */

import { openInBrowser as OpenInBrowser } from "../../account/open-in-browser";
import { appActionSidebarProjectRefSchema } from "../../actions/app-action-payload-schemas";
import { formatAgentMention } from "../../agents/format-agent-mention";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CODEX_MEMORY_SETTING_TOGGLED_TYPE } from "../../analytics/codex-memory-setting-toggled-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { chatgptConversationsGateAtom } from "../../boundaries/composer-appscope-atoms";
import { ensureComposerEsm_B7_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K1_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
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
function ReadLoginRouteQuerySnapshot(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialFC: any = undefined;
const AppInitialG: any = undefined;
const AppInitialVC: any = undefined;
const PersonalizationSettingsHelper28: any = undefined;
const deferredUiB: any = undefined;
const deferredUiE: any = undefined;
const deferredUiH: any = undefined;
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
const useChromeAndCodeThemeSync: any = undefined;
function bloom() {
  let glide = useIntl(),
    honey = NativeContextMenuSurface("1444479692"),
    {
      selectedHostId
    } = useSelectedHost(),
    iris = {
      hostId: selectedHostId
    };
  let {
      personality,
      setPersonality
    } = deferredUiE(iris),
    jewel = glide.formatMessage(zephyr.friendly);
  let knoll = glide.formatMessage({
    id: "composer.personalitySlashCommand.description.friendly",
    defaultMessage: "Warm, collaborative, and helpful",
    description: "Description for the friendly personality option"
  });
  let lunar = {
    value: "friendly",
    label: jewel,
    description: knoll
  };
  let moss = glide.formatMessage(zephyr.pragmatic);
  let north = glide.formatMessage({
    id: "composer.personalitySlashCommand.description.pragmatic",
    defaultMessage: "Concise, task-focused, and direct",
    description: "Description for the pragmatic personality option"
  });
  let orbit = {
    value: "pragmatic",
    label: moss,
    description: north
  };
  let pine = [lunar, orbit];
  let quest = pine,
    ridge = quest.find(item => item.value === personality) ?? quest[0];
  let storm = ridge,
    tide = honey ? <UseChromeAndCodeThemeSync {...{
      children: <UseChromeAndCodeThemeSync.Content {...{
        children: [<ResolveBrowserTabPanelSide {...{
          content: <MemoizedFormattedMessage {...{
            id: "settings.personalization.personality.modelSupportNotice",
            defaultMessage: "Personality settings are not supported by every model. Codex's tone can be customized in Custom instructions.",
            description: "Notice explaining that availability of personality settings vary by model and custom instructions can control tone"
          }} />,
          Icon: applyActive,
          type: "warning"
        }} />, <ParseUrlOrFallback {...{
          children: <EnsurePersonalizationCInit {...{
            label: <MemoizedFormattedMessage {...{
              ...zephyr.personality
            }} />,
            description: <MemoizedFormattedMessage {...{
              id: "settings.personalization.personality.description",
              defaultMessage: "Choose a default tone for ChatGPT responses",
              description: "Description for personality selection in personalization settings"
            }} />,
            control: <DropdownMenuPopover {...{
              triggerButton: <DropdownTriggerButton>
                                      <span className="flex items-center gap-1.5">
                                        {storm.label}
                                      </span>
                                    </DropdownTriggerButton>,
              align: "end",
              children: <div className="w-[260px] max-w-xs space-y-1">
                                      {quest.map(item => <DropdownMenu.Item key={item.value} {...{
                  onSelect: () => {
                    setPersonality(item.value);
                  },
                  RightIcon: personality === item.value ? AppIconZlt : undefined,
                  children: <div className="flex flex-col items-start gap-0.5">
                                                  <span className="text-sm">
                                                    {item.label}
                                                  </span>
                                                  <span className="text-xs text-token-text-secondary">
                                                    {item.description}
                                                  </span>
                                                </div>
                }} />)}
                                    </div>
            }} />
          }} />
        }} />]
      }} />
    }} /> : null;
  let unity = <PersonalizationSettingsHelper28 key={selectedHostId} {...{
    hostId: selectedHostId
  }} />;
  return <>
      {tide}
      {unity}
    </>;
}
function coral(vale) {
  let {
      hostId
    } = vale,
    wave = CodexPluginActionType(appScopeAtom),
    apex = useIntl(),
    brook = useQueryClient(),
    [cliff, dusk] = frost.useState(null),
    {
      data,
      error,
      isFetching,
      refetch
    } = CodexBrowserSurfaceActionType(alpha, hostId),
    elm = (haven, ink) => {
      brook.setQueryData(buildVscodeQueryKey("codex-agents-md", {
        hostId: ink.hostId
      }), {
        path: haven.path,
        contents: ink.contents
      });
      dusk(null);
      wave.get(toastAtom).success(apex.formatMessage({
        id: "settings.personalization.agents.save.success",
        defaultMessage: "Saved agents.md",
        description: "Toast shown when agents.md is saved"
      }));
    };
  let fern = () => {
    wave.get(toastAtom).danger(apex.formatMessage({
      id: "settings.personalization.agents.save.error",
      defaultMessage: "Unable to save agents.md",
      description: "Toast shown when agents.md save fails"
    }));
  };
  let grove = {
    onSuccess: elm,
    onError: fern
  };
  let hill = applyU0000U001FU007F2("codex-agents-md-save", grove),
    isle = data?.contents ?? "",
    juniper = cliff ?? isle,
    lagoon = cliff != null && cliff !== isle,
    meadow = data != null,
    nest = !meadow && isFetching,
    oak = hill.isPending,
    petal = error != null && data == null,
    quiet = () => {
      !meadow || !lagoon || oak || hill.mutate({
        hostId,
        contents: juniper
      });
    };
  let rain = quiet,
    seed = meadow && lagoon && !oak,
    trail = event => {
      event.preventDefault();
      rain();
    };
  let urn;
  urn = {
    accelerator: "CmdOrCtrl+S",
    enabled: seed,
    onKeyDown: trail
  };
  PanelWidthIcon(urn);
  let vine = apex.formatMessage({
    id: "settings.personalization.agents.placeholder",
    defaultMessage: "Add your custom instructions…",
    description: "Placeholder text for personal agents editor"
  });
  let wind = vine,
    yarrow = apex.formatMessage(zephyr.customInstructions);
  let azure = yarrow,
    birch = <MemoizedFormattedMessage {...{
      ...zephyr.customInstructions
    }} />;
  let canyon = <MemoizedFormattedMessage {...{
    id: "settings.personalization.agents.description",
    defaultMessage: "Give ChatGPT extra instructions and context for all chats on this host. <a>Learn more</a>",
    description: "Description for personal agents settings section",
    values: {
      a: drift
    }
  }} />;
  let dew = !lagoon || !meadow,
    ever = <MemoizedFormattedMessage {...{
      id: "settings.personalization.agents.save",
      defaultMessage: "Save",
      description: "Save button label for personal agents editor"
    }} />;
  let field = <UseChromeAndCodeThemeSync.Header {...{
    title: birch,
    subtitle: canyon,
    actions: <ReadLoginRouteQuerySnapshot {...{
      color: "secondary",
      disabled: dew,
      loading: oak,
      onClick: rain,
      size: "toolbar",
      children: ever
    }} />
  }} />;
  let grain = <UseChromeAndCodeThemeSync.Content {...{
    children: petal ? <div className="flex items-center justify-between gap-3">
            <div className="text-sm text-token-text-secondary">
              {<MemoizedFormattedMessage {...{
          id: "settings.personalization.agents.loadError",
          defaultMessage: "Unable to load agents.md.",
          description: "Error message shown when agents.md fails to load"
        }} />}
            </div>
            {<ReadLoginRouteQuerySnapshot {...{
        className: "shrink-0",
        color: "secondary",
        onClick: () => {
          refetch();
        },
        size: "toolbar",
        children: <MemoizedFormattedMessage {...{
          id: "settings.personalization.agents.retry",
          defaultMessage: "Retry",
          description: "Button label to retry loading agents.md"
        }} />
      }} />}
          </div> : <div className="flex flex-col gap-3">
            {nest ? <div className="flex items-center gap-2 text-sm text-token-text-secondary">
                {<VSCODE_EDITOR_ID {...{
          className: "icon-xs"
        }} />}
                {<MemoizedFormattedMessage {...{
          id: "settings.personalization.agents.loading",
          defaultMessage: "Loading agents.md…",
          description: "Loading label for agents.md editor"
        }} />}
              </div> : <textarea aria-label={azure} id="personal-agents-editor" className="min-h-[160px] w-full resize-y rounded-xl border border-token-border bg-token-input-background px-3 py-2 text-base text-token-input-foreground shadow-sm outline-none focus:ring-1 focus:ring-token-focus-border" disabled={!meadow || oak} placeholder={wind} value={juniper} onChange={event => {
        let jadeite = event.target.value;
        dusk(jadeite === isle ? null : jadeite);
      }} />}
          </div>
  }} />;
  return <UseChromeAndCodeThemeSync {...{
    children: [field, grain]
  }} />;
}
function drift(kernel) {
  return <a className="inline-flex text-token-text-link-foreground" href={DEVELOPERS_OPENAI_COM_CODEX_GUIDES_AGENTS_MD_URL} target="_blank" rel="noreferrer">
      {kernel}
    </a>;
}
var eagle, frost, $;
esmInit(() => {
  eagle = reactCompilerRuntime();
  serializeCharacterReferenceNode();
  ensureComposerEsm_MT_Init();
  frost = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureComposerEsm_B7_Init();
  ensureAppShellAtomsInit();
  ensureSettingsQueryAtomsInit();
  ensureDropdownMenuInit();
  ensureComposerEsm_Sut_Init();
  ensureComposerEsm_Ilt_Init();
  ensureComposerEsm_K1_Init();
  AppInitialG();
  findProcessManagerRow();
  ensureDropdownMenuPopoverInit();
  buildCodexDesktopRequestHeaders();
  ensureSidebarPanelIconInit();
  ensureAppScopeInit();
  wheat();
  AppIconOi();
  acorn();
  codexCommandTheme();
  AppIconBO();
  AppInitialVC();
  ensureSettingsSectionTitleInit();
  AppInitialFC();
  ensureSkillsPageHelpersInit();
  scrollAppActionTargetTo();
  jasper();
})();
