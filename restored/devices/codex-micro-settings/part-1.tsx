// Restored from ref/webview/assets/codex-micro-settings-OfPypdLl.js
// Wave FY — full polished body from `codex-micro-settings-OfPypdLl/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 55 (verified 127/182).
// Wave5d — FZ repair from fz-pascal L=5611 sus=56; JSX PascalCase + careful split.
// Wave5d careful split 1/10
/* split-lane-import-depth:1 */

import { isStartingProcessExpired as IsStartingProcessExpired } from "../../account/is-starting-process-expired";
import { openInBrowser } from "../../account/open-in-browser";
import { isBusinessPlan } from "../../account/plan-type-helpers";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { useChromeAndCodeThemeSync as UseChromeAndCodeThemeSync } from "../../appearance/use-chrome-and-code-theme-sync";
import { siteAnalyticsEventsPath, siteAnalyticsPath } from "../../appgen/site-analytics-paths";
import { ARTIFACT_GENERATION_STAGE_IDS } from "../../artifacts/artifact-generation-ids";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../../conversation/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { BrowserWebviewPanel } from "../../browser/browser-webview-panel";
import { chatgpt2 as Chatgpt2 } from "../../browser/chatgpt2";
import { composerConnectorauthReconnectMessages } from "../../composer/composer-connectorauth-reconnect-messages";
import { getPluginDisplayName } from "../../composer/get-plugin-display-name";
import { getPluginShortDescription } from "../../composer/get-plugin-short-description";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { collaborationModeFromTurnOrParams } from "../../conversation/collaboration-mode-fields";
import { recentConversationsMetaQueryKey } from "../../conversation/recent-conversations-meta-query-key";
import { ensureCodexMicroAnalogActionTitleInit, getAnalogActionTitle } from "../../desktop/codex-micro-analog-action-title";
import { ensureCodexMicroWebviewCommandsInit, findCodexMicroWebviewCommand, getCodexMicroWebviewCommands } from "../../desktop/codex-micro-webview-commands";
import { appServices } from "../../desktop/desktop-services";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { DiffLinesStatsBadge } from "../../diff/diff-lines-stats-badge";
import { REMOTE_CONTROL_PAIRING_FEATURE_GATE_ID } from "../../feature-gates/feature-gate-ids";
import { ensureDebugPanelTurnFilesInit } from "../../hooks/debug-panel-turn-files";
import { usePointerSurfaceInteractionGate as UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { useQuery } from "../../hooks/use-query";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { ensureRemoteConnectionsFeatureInit, getEnabledRemoteConnectionState } from "../../hosts/remote-connections-feature";
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
import { DropdownMenuPopover, ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { DropdownTriggerButton } from "../../ui/dropdown-trigger-button";
import { macOS4 } from "../../ui/mac-os4";
import { MenuBorderSeparator } from "../../ui/menu-border-separator";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { remote } from "../../ui/remote";
import { ensureSelectableListRowActivationInit, ensureSelectableListRowInit as EnsureSelectableListRowInit } from "../../ui/selectable-list-row";
import { sortable } from "../../ui/sortable";
import { VerticalScrollFadeMask } from "../../ui/vertical-scroll-fade-mask";
import { findByModel as FindByModel } from "../../utils/find-by-model";
import { identity } from "../../utils/identity";
import { parseUrlOrFallback as ParseUrlOrFallback } from "../../utils/parse-url-or-fallback";
import { thinCallWithUndefined } from "../../utils/thin-call-with-undefined";
import { ensureKeyboardShortcutsGtInit as EnsureKeyboardShortcutsGtInit, ensureKeyboardShortcutsHMInit, ensurePersonalizationCInit as EnsurePersonalizationCInit } from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import { pendingWorktreeConversationStartApi } from "../../worktree/pending-worktree-conversation-start-api";
import { CodexMicroKeyboardSurface, codexMicroKeyboardSurfaceFlags, CodexMicroKeyboardSurfaceLabel, CodexMicroKeyboardSurfaceOverlay, CodexMicroKeyboardSurfacePanel, codexMicroKeyboardSurfaceState, CodexMicroKeyboardSurfaceTile, ensureCodexMicroKeyboardSurfaceAtomsInit, ensureCodexMicroKeyboardSurfaceHelpersInit, ensureCodexMicroKeyboardSurfaceInit, ensureCodexMicroKeyboardSurfaceUiInit, renderCodexMicroKeyboardSurface as RenderCodexMicroKeyboardSurface, useCodexMicroKeyboardSurface as UseCodexMicroKeyboardSurface } from "../codex-micro-keyboard-surface";
import { ensureCodexMicroLayoutInit, parseStreamDeckLayout } from "../codex-micro-layout";
import { codexMicroSlotSignalC, codexMicroSlotSignalF, codexMicroSlotSignalO, codexMicroSlotSignalR, codexMicroSlotSignalU, ensureCodexMicroSlotSignalsInit } from "../codex-micro-slot-signals";
const AppInitialA: any = undefined;
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
const CodexMicroSettingsHelper4: any = undefined;
const CodexMicroSettingsHelper5: any = undefined;
const CodexMicroSettingsHelper6: any = undefined;
const CodexMicroSettingsHelper7: any = undefined;
const at: any = undefined;
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
const deferredUiB: any = undefined;
const deferredUiFC: any = undefined;
const deferredUiH: any = undefined;
const deferredUiHelperPM: any = undefined;
const deferredUiU1: any = undefined;
const deferredZft: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;

/** Wave FY unresolved companion (jsx-collision:filterConnectedRemoteConnections@hosts/use-selected-host.ts) */
const AppInitialBB: any = undefined;
/** Wave FY unresolved companion (missing-export:models/deferred-bw.tsx) */
const AppInitialBw: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureSettingsGlyphCHInit@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialCH: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-cr.tsx) */
const deferredUiCR: any = undefined;
/** Wave FY unresolved companion (jsx-collision:copyContinuousScale@d3/copy-continuous-scale.ts) */
const AppInitialEv: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredUiFC@ui/deferred-ui-fc.ts) */
const AppInitialFC: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/apply-svg.tsx) */
const applySvg: any = undefined;
/** Wave FY unresolved companion (jsx-collision:findByModel@utils/find-by-model.ts) */
const AppInitialFM: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-fw-2.tsx) */
const AppInitialFw: any = undefined;
/** Wave FY unresolved companion (missing-export:settings/chatgpt2.tsx) */
/** Wave FY unresolved companion (jsx-collision:setCodexMicroHudOpen@desktop/codex-micro-input-state.ts) */
const AppInitialHw: any = undefined;
/** Wave FY unresolved companion (missing-export:plugins/has-seen-knowledge-work-announcement.tsx) */
const HasSeenKnowledgeWorkAnnouncement: any = undefined;
/** Wave FY unresolved companion (missing-export:navigation/cmdk-item-select.tsx) */
const CmdkItemSelect: any = undefined;
/** Wave FY unresolved companion (missing-export:settings/settings-values.ts) */
const setSettingValue: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-iw-2.tsx) */
const DeferredUiIw: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostId: any = undefined;
/** Wave FY unresolved companion (jsx-collision:useBatchWriteMcpServerConfig@mcp/use-batch-write-mcp-server-config.ts) */
const AppInitialK4: any = undefined;
/** Wave FY unresolved companion (jsx-collision:stableQueryKey@utils/stable-query-key.ts) */
const AppInitialKi: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureKeyboardShortcutsKtInit@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialKt: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/remote-hosted-pip-hidden-thread-ids.ts) */
const remoteHostedPipHiddenThreadIds: any = undefined;
/** Wave FY unresolved companion (jsx-collision:codexMicroSettingsDefinitions@settings/codex-micro-settings-definitions.ts) */
const AppInitialNpt: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspaceNstInit: any = undefined;
/** Wave FY unresolved companion (jsx-collision:macOS3@ui/mac-os3.ts) */
const AppInitialO4: any = undefined;
/** Wave FY unresolved companion (missing-export:navigation/data-app-action-review-file-expanded-2.ts) */
const dataAppActionReviewFileExpanded: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredUiHelperPM@ui/deferred-ui-helper-pm.ts) */
const AppInitialPM: any = undefined;
/** Wave FY unresolved companion (jsx-collision:lookupMessageDescriptor@utils/lookup-message-descriptor.ts) */
const AppInitialQr: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredConversationR@conversation/deferred-conversation-r.ts) */
const AppInitialR: any = undefined;
/** Wave FY unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurface: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-rw-2.tsx) */
const DeferredUiRw: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/chatgpt5.tsx) */
const Chatgpt5: any = undefined;
/** Wave FY unresolved companion (missing-export:browser/skills3.tsx) */
const Skills3: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-u.ts) */
const deferredUiU: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredUiU1@ui/deferred-ui-u1.tsx) */
const AppInitialU1: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-ub-2.ts) */
const deferredUiUB: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/missing-conversation.tsx) */
const AppInitialUr: any = undefined;
/** Wave FY unresolved companion (missing-export:hosts/set-remote-control-enabled-for-host.ts) */
const setRemoteControlEnabledForHost: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureHotkeyThreadV1Init@utils/wave-av-gap-ensure-inits.ts) */
const AppInitialV1: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureHistoryMaterializationInit@boundaries/quick-chat-window-facades.tsx) */
const AppInitialVa: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredVoiceVC@voice/deferred-voice-vc.ts) */
const AppInitialVC: any = undefined;
/** Wave FY unresolved companion (jsx-collision:fileExtensionFromPath@files/file-extension-from-path.ts) */
const AppInitialVT: any = undefined;
/** Wave FY unresolved companion (jsx-collision:setCodexMicroAnalogDirectionOnStore@desktop/codex-micro-input-state.ts) */
const AppInitialVw: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-wx.ts) */
const deferredUiWX: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/coerce-string-or-passthrough.ts) */
const coerceStringOrPassthrough: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-xz.ts) */
const deferredUiXZ: any = undefined;
/** Wave FY unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const readLoginRouteQuerySnapshot: any = undefined;
/** Wave FY unresolved companion (missing-export:shell/normalize-presence-to-normal.ts) */
const normalizePresenceToNormal: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/chat-process-register.ts) */
const chatProcessRegister: any = undefined;
/** Wave FY unresolved companion (sib-missing:devices/codex-micro-layout.ts) */
const codexMicroLayoutC: any = undefined;
/** Wave FY unresolved companion (sib-missing:devices/codex-micro-layout.ts) */
const codexMicroLayoutL: any = undefined;
/** Wave FY unresolved companion (sib-missing:devices/codex-micro-layout.ts) */
const codexMicroLayoutN: any = undefined;
/** Wave FY unresolved companion (sib-missing:devices/codex-micro-layout.ts) */
const codexMicroLayoutR: any = undefined;
/** Wave FY unresolved companion (sib-missing:devices/codex-micro-layout.ts) */
const codexMicroLayoutS: any = undefined;
/** Wave FY unresolved companion (sib-missing:devices/codex-micro-layout.ts) */
const codexMicroLayoutU: any = undefined;
function yarn(frost, glide, honey) {
  let iris = glide.trim(),
    jewel = acorn.default(frost.flatMap(item => {
      let {
        description,
        title
      } = BrowserWebviewPanel(item, honey);
      return iris.length > 0 && ![item.id, title, description].some(_item => ensureKeyboardShortcutsHMInit(_item, iris) > 0) ? [] : [{
        command: item,
        description,
        group: "commandMenuGroupKey" in item ? item.commandMenuGroupKey ?? "app" : "app",
        title
      }];
    }), knoll => knoll.title.toLowerCase());
  return AppInitialU1.flatMap(item => {
    let lunar = jewel.filter(_item => _item.group === item);
    return lunar.length === 0 ? [] : [{
      id: item,
      label: honey.formatMessage(coral[item]),
      options: lunar
    }];
  });
}
function zephyr(moss) {
  let north = isBusinessPlan();
  return acorn.default(bloom.default(moss.filter(item => item.enabled && deferredVM(item, north)), orbit => orbit.path), pine => getPluginDisplayName(pine).toLowerCase());
}
var acorn,
  bloom,
  coral,
  drift = esmInit(() => {
    sortable();
    acorn = commonJsInit(deferredUiUB(), 1);
    bloom = commonJsInit(ensureSelectWorkspaceNstInit(), 1);
    ensureIntlFormattersInit();
    AppInitialUr();
    deferredVM();
    remoteHostedPipHiddenThreadIds();
    ensureSkillsPageHelpersInit();
    ensureDebugPanelTurnFilesInit();
    coral = identity({
      thread: {
        id: "settings.codexMicro.analog.commands.thread",
        defaultMessage: "Chat",
        description: "Section heading for Codex Micro task action choices"
      },
      navigation: {
        id: "settings.codexMicro.analog.commands.navigation",
        defaultMessage: "Navigation",
        description: "Section heading for Codex Micro navigation action choices"
      },
      panels: {
        id: "settings.codexMicro.analog.commands.panels",
        defaultMessage: "Panels",
        description: "Section heading for Codex Micro panel action choices"
      },
      workspace: {
        id: "settings.codexMicro.analog.commands.workspace",
        defaultMessage: "Workspace",
        description: "Section heading for Codex Micro workspace action choices"
      },
      skills: {
        id: "settings.codexMicro.analog.commands.skills",
        defaultMessage: "Skill actions",
        description: "Section heading for Codex Micro skill management action choices"
      },
      configure: {
        id: "settings.codexMicro.analog.commands.configure",
        defaultMessage: "Settings",
        description: "Section heading for Codex Micro settings action choices"
      },
      app: {
        id: "settings.codexMicro.analog.commands.app",
        defaultMessage: "App",
        description: "Section heading for Codex Micro app action choices"
      }
    });
  });
function eagle(quest) {
  let {
      commands,
      mapping,
      joystick,
      selectedDirection,
      skills,
      onActionChange,
      onDirectionSelect,
      onEditorOpenChange
    } = quest,
    ridge = useIntl(),
    [storm, tide] = vapor.useState(false),
    [unity, vale] = vapor.useState(""),
    wave = zephyr(skills),
    apex = unity.trim(),
    brook = mapping[selectedDirection],
    cliff = brook?.type === "command" ? getCodexMicroWebviewCommands(brook.commandId)?.id : null,
    dusk = brook == null ? ridge.formatMessage(alpha.none) : ensureCodexMicroAnalogActionTitleInit(brook, wave, ridge),
    elm = wave.filter(item => apex.length === 0 || [item.name, getPluginDisplayName(item), getPluginShortDescription(item)].some(_item => ensureKeyboardShortcutsHMInit(_item, apex) > 0)),
    fern = yarn(commands, apex, ridge),
    grove = elm.length > 0 || fern.length > 0,
    hill = ridge.formatMessage({
      id: "settings.codexMicro.analog.clearAssignment",
      defaultMessage: "Clear assignment",
      description: "Accessible label and tooltip for clearing a Codex Micro analog direction assignment"
    });
  let isle = hill,
    juniper = () => {
      onEditorOpenChange(false);
    };
  let lagoon = vapor.useEffectEvent(juniper),
    meadow = () => () => {
      lagoon();
    };
  let nest;
  nest = [];
  vapor.useEffect(meadow, nest);
  let oak = function (nimbus) {
    tide(nimbus);
    onEditorOpenChange(nimbus);
    nimbus || vale("");
  };
  let petal = oak,
    quiet = ridge.formatMessage({
      id: "settings.codexMicro.keyboardLayout.analog.configure",
      defaultMessage: "Configure analog stick actions",
      description: "Accessible label for opening the Codex Micro analog stick action mapping editor"
    });
  let rain = <CodexMicroKeyboardSurfaceTile {...{
    className: "size-full group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.82),0_0_12px_rgba(141,181,255,0.2)] dark:group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14),0_0_12px_rgba(141,181,255,0.24)]",
    joystick
  }} />;
  let seed = <button type="button" aria-label={quiet} className="group relative z-10 m-auto size-[92%] cursor-interaction">
      {rain}
    </button>;
  let trail = <RealtimeVoiceHostId {...{
    children: <MemoizedFormattedMessage {...{
      id: "settings.codexMicro.analog.title",
      defaultMessage: "Analog stick",
      description: "Title of the Codex Micro analog stick action mapping dialog"
    }} />
  }} />;
  let urn = <DeferredUiU {...{
    children: <DeferredUiH {...{
      title: trail,
      subtitle: <IsStartingProcessExpired {...{
        children: <MemoizedFormattedMessage {...{
          id: "settings.codexMicro.analog.description",
          defaultMessage: "Choose what each direction triggers",
          description: "Description of the Codex Micro analog stick action mapping dialog"
        }} />
      }} />
    }} />
  }} />;
  let vine = <CodexMicroKeyboardSurfaceTile {...{
    className: "size-20 justify-self-center",
    joystick
  }} />;
  let wind = ridge.formatMessage({
    id: "settings.codexMicro.analog.directionGroup.label",
    defaultMessage: "Analog direction mappings",
    description: "Accessible label for the Codex Micro analog direction mapping group"
  });
  let yarrow = wheat.map(item => <CodexMicroSettingsHelper4 key={item} {...{
      action: mapping[item],
      direction: item,
      isSelected: selectedDirection === item,
      skills: wave,
      onSelect: () => {
        onDirectionSelect(item);
      }
    }} />),
    azure = <div aria-label={wind} className="flex min-w-0 flex-col gap-1" role="group">
        {yarrow}
      </div>;
  let birch = <DeferredUiU {...{
    children: <div className="grid grid-cols-[8rem_minmax(0,1fr)] items-center gap-5">
            {vine}
            {azure}
          </div>
  }} />;
  let canyon = <span className="font-medium">
      {<MemoizedFormattedMessage {...{
      id: "settings.codexMicro.analog.assignDirection",
      defaultMessage: "Assign {direction}",
      description: "Label above Codex Micro analog direction action choices",
      values: {
        direction: <CodexMicroSettingsHelper7 key={"direction"} {...{
          direction: selectedDirection,
          lowercase: true
        }} />
      }
    }} />}
    </span>;
  let dew = ridge.formatMessage({
    id: "settings.codexMicro.analog.currentAssignment",
    defaultMessage: "Current assignment",
    description: "Accessible label for the current Codex Micro analog direction assignment"
  });
  let ever = brook == null ? null : <OptionalTooltip {...{
    tooltipContent: isle,
    children: <ReadLoginRouteQuerySnapshot {...{
      uniform: true,
      "aria-label": isle,
      className: "shrink-0",
      color: "ghost",
      size: "iconMd",
      onClick: () => {
        onActionChange(selectedDirection, null);
      },
      children: <Chatgpt2 {...{
        "aria-hidden": true
      }} />
    }} />
  }} />;
  let field = ridge.formatMessage({
    id: "settings.codexMicro.analog.search.label",
    defaultMessage: "Search analog actions and skills",
    description: "Accessible label for searching actions and skills in the Codex Micro analog mapping dialog"
  });
  let grain = ridge.formatMessage({
    id: "settings.codexMicro.analog.search.placeholder",
    defaultMessage: "Search actions and skills",
    description: "Placeholder for searching actions and skills in the Codex Micro analog mapping dialog"
  });
  let haven = <EnsureKeyboardShortcutsGtInit {...{
    ariaLabel: field,
    placeholder: grain,
    value: unity,
    onValueChange: vale
  }} />;
  let ink = grove ? <div className="flex flex-col gap-4">
        {elm.length === 0 ? null : <UseChromeAndCodeThemeSync {...{
        children: [<UseChromeAndCodeThemeSync.Header {...{
          title: <MemoizedFormattedMessage {...{
            id: "settings.codexMicro.analog.skills",
            defaultMessage: "Skills",
            description: "Section heading for Codex Micro analog skill choices"
          }} />
        }} />, <UseChromeAndCodeThemeSync.Content {...{
          children: elm.map(item => <CodexMicroSettingsHelper5 key={item.path} {...{
            description: getPluginShortDescription(item),
            isSelected: brook?.type === "skill" && brook.skillName === item.name && brook.skillPath === item.path,
            onSelect: () => {
              onActionChange(selectedDirection, {
                type: "skill",
                skillName: item.name,
                skillPath: item.path
              });
            },
            title: getPluginDisplayName(item)
          }} />)
        }} />]
      }} />}
        {fern.map(item => <UseChromeAndCodeThemeSync key={item.id} {...{
        children: [<UseChromeAndCodeThemeSync.Header {...{
          title: item.label
        }} />, <UseChromeAndCodeThemeSync.Content {...{
          children: item.options.map(_item => {
            let {
              command,
              description,
              title
            } = _item;
            return <CodexMicroSettingsHelper5 key={command.id} {...{
              description: description || null,
              isSelected: cliff === command.id,
              onSelect: () => {
                onActionChange(selectedDirection, {
                  type: "command",
                  commandId: command.id
                });
              },
              title
            }} />;
          })
        }} />]
      }} />)}
      </div> : <div className="py-2 text-sm text-token-text-secondary">
        {<MemoizedFormattedMessage {...{
        id: "settings.codexMicro.analog.noResults",
        defaultMessage: "No matching actions or skills",
        description: "Empty search state for Codex Micro analog direction choices"
      }} />}
      </div>,
    jadeite = <div className="vertical-scroll-fade-mask min-h-0 flex-1 overflow-y-auto pe-1 [--edge-fade-distance:1rem]">
        {ink}
      </div>;
  let kernel = () => {
    petal(false);
  };
  let leaf = <MemoizedFormattedMessage {...{
    id: "settings.codexMicro.analog.done",
    defaultMessage: "Done",
    description: "Button that closes the Codex Micro analog action mapping dialog"
  }} />;
  let maple;
  return maple = <DeferredUiU {...{
    children: <SetRemoteControlEnabledForHost {...{
      children: <ReadLoginRouteQuerySnapshot {...{
        color: "primary",
        onClick: kernel,
        children: leaf
      }} />
    }} />
  }} />, <UsePointerSurfaceInteractionGate {...{
    open: storm,
    size: "wide",
    onOpenChange: petal,
    triggerContent: seed,
    children: <DeferredUiB {...{
      className: "max-h-[min(680px,calc(100vh-4rem))] min-h-0 gap-0 overflow-hidden",
      children: [urn, birch, <DeferredUiU {...{
        className: "flex min-h-0 flex-1 flex-col gap-3",
        children: [<div className="flex items-center justify-between gap-4 text-sm">
                          {canyon}
                          <div aria-label={dew} className="flex max-w-[60%] min-w-0 items-center gap-1" role="group">
                            {<CodexMicroSettingsHelper6 {...{
              title: dusk,
              unassigned: brook == null
            }} />}
                            {ever}
                          </div>
                        </div>, haven, jadeite]
      }} />, maple]
    }} />
  }} />;
}
