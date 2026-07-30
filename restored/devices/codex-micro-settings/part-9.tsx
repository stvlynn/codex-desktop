// Restored from ref/webview/assets/codex-micro-settings-OfPypdLl.js
// Wave5 stub-pass soft companions.
const codexMicroLayoutR: any = undefined;
const codexMicroLayoutU: any = undefined;

// Wave FY — full polished body from `codex-micro-settings-OfPypdLl/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 55 (verified 127/182).
// Wave5d — FZ repair from fz-pascal L=5611 sus=56; JSX PascalCase + careful split.
// Wave5d careful split 9/10
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
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../../boundaries/conversation-page-esm-inits";
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

// Wave5d soft stubs.
const CodexMicroSettingsHelper25: any = undefined;
const CodexMicroSettingsHelper26: any = undefined;
const CodexMicroSettingsHelper3: any = undefined;
const CodexMicroSettingsHelper31: any = undefined;
const CodexMicroSettingsHelper32: any = undefined;
const IntlProvider: any = undefined;
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
const deferredUiB: any = undefined;
const deferredUiH: any = undefined;
const deferredZft: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;
function brook(rain) {
  let {
      agentSlots,
      commands,
      customAgentAssignments,
      deviceName,
      layout,
      previewState,
      skills,
      voiceButtonMode,
      onEditAgentKey,
      onEditSlot,
      onSetAnalogAction,
      onSelectAnalogDirection,
      onSetAnalogEditorOpen
    } = rain,
    seed = useIntl(),
    [trail, urn, vine, wind, yarrow, azure] = quiet,
    birch = <CodexMicroSettingsHelper31 {...{
      deviceName,
      mode: layout.encoderMode,
      pulse: previewState.knobPulse
    }} />;
  let canyon = ARTIFACT_GENERATION_STAGE_IDS.map((item, index) => <>
        {index === 2 ? <CodexMicroSettingsHelper3 {...{
      commands,
      joystick: previewState.joystick,
      mapping: layout.analogStick,
      selectedDirection: previewState.selectedAnalogDirection,
      skills,
      onActionChange: onSetAnalogAction,
      onDirectionSelect: onSelectAnalogDirection,
      onEditorOpenChange: onSetAnalogEditorOpen
    }} /> : null}
        {<CodexMicroKeyboardSurfaceOverlay {...{
      assignmentTitle: dusk(customAgentAssignments?.[item], skills, seed),
      keycap: cliff(customAgentAssignments?.[item]),
      position: index + 1,
      isPressed: previewState.pressedKeys.includes(item),
      slot: agentSlots[index],
      onClick: onEditAgentKey == null ? undefined : () => onEditAgentKey(item)
    }} />}
      </>);
  let dew = layout.slots[trail.slotId],
    ever = trail.slotId,
    field = grove(previewState.pressedKeys, trail.keys);
  let grain = <CodexMicroSettingsHelper32 {...{
    slot: dew,
    slotId: ever,
    isPressed: field,
    skills,
    voiceButtonMode,
    onEditSlot
  }} />;
  let haven = layout.slots[urn.slotId],
    ink = urn.slotId,
    jadeite = grove(previewState.pressedKeys, urn.keys);
  let kernel = <CodexMicroSettingsHelper32 {...{
    slot: haven,
    slotId: ink,
    isPressed: jadeite,
    skills,
    voiceButtonMode,
    onEditSlot
  }} />;
  let leaf = layout.slots[vine.slotId],
    maple = vine.slotId,
    nimbus = grove(previewState.pressedKeys, vine.keys);
  let opal = <CodexMicroSettingsHelper32 {...{
    slot: leaf,
    slotId: maple,
    isPressed: nimbus,
    skills,
    voiceButtonMode,
    onEditSlot
  }} />;
  let plume = layout.slots[wind.slotId],
    quillow = wind.slotId,
    root = grove(previewState.pressedKeys, wind.keys);
  let silk = <CodexMicroSettingsHelper32 {...{
    slot: plume,
    slotId: quillow,
    isPressed: root,
    skills,
    voiceButtonMode,
    onEditSlot
  }} />;
  let thorn = <RenderCodexMicroKeyboardSurface {...{}} />;
  let upland = layout.slots[yarrow.slotId],
    vista = yarrow.slotId,
    wisp = grove(previewState.pressedKeys, yarrow.keys);
  let yonder = <CodexMicroSettingsHelper32 {...{
    slot: upland,
    slotId: vista,
    className: "col-span-2",
    isPressed: wisp,
    skills,
    voiceButtonMode,
    onEditSlot
  }} />;
  let zenith = layout.slots[azure.slotId],
    anvil = azure.slotId,
    beacon = grove(previewState.pressedKeys, azure.keys);
  let crag = <CodexMicroSettingsHelper32 {...{
    slot: zenith,
    slotId: anvil,
    isPressed: beacon,
    skills,
    voiceButtonMode,
    onEditSlot
  }} />;
  return <div className="flex justify-center px-4 py-5">
      {<UseCodexMicroKeyboardSurface {...{
      children: [birch, canyon, grain, kernel, opal, silk, thorn, yonder, crag]
    }} />}
    </div>;
}
function cliff(dome) {
  return dome != null && "type" in dome && dome.type === "keycap" ? codexMicroLayoutR(dome.keycapId) : undefined;
}
function dusk(eddy, fjord, glen) {
  if (!(eddy == null || "threadKey" in eddy)) return eddy.type === "keycap" ? glen.formatMessage({
    id: "settings.codexMicro.agentKeyPreview.keycap",
    defaultMessage: "{keycapId} keycap",
    description: "Title for a keycap assigned to a Codex Micro agent key"
  }, {
    keycapId: eddy.keycapId
  }) : ensureCodexMicroAnalogActionTitleInit(eddy, fjord, glen);
}
function elm(hearth) {
  let {
      deviceName,
      mode,
      pulse
    } = hearth,
    inlet = useIntl(),
    jetty = oak[mode],
    knob = <span className="text-xs font-semibold text-token-text-primary">
        {<MemoizedFormattedMessage {...{
        id: "settings.codexMicro.keyboardLayout.knobTooltip.title",
        defaultMessage: "Knob controls",
        description: "Title for the tooltip describing Codex Micro encoder knob controls"
      }} />}
      </span>;
  let ledge = <span className="text-xs text-token-text-secondary">
      {<MemoizedFormattedMessage {...{
      ...jetty.description
    }} />}
    </span>;
  let mire = <dt className="font-medium whitespace-nowrap text-token-text-primary">
      {<MemoizedFormattedMessage {...{
      id: "settings.codexMicro.keyboardLayout.knobTooltip.turnRight",
      defaultMessage: "Turn right",
      description: "Label for turning the Codex Micro encoder knob clockwise"
    }} />}
    </dt>;
  let nook = <dd className="text-token-text-secondary">
      {<MemoizedFormattedMessage {...{
      ...jetty.turnRightAction
    }} />}
    </dd>;
  let oxbow = <dt className="font-medium whitespace-nowrap text-token-text-primary">
      {<MemoizedFormattedMessage {...{
      id: "settings.codexMicro.keyboardLayout.knobTooltip.turnLeft",
      defaultMessage: "Turn left",
      description: "Label for turning the Codex Micro encoder knob counterclockwise"
    }} />}
    </dt>;
  let pond = <dd className="text-token-text-secondary">
      {<MemoizedFormattedMessage {...{
      ...jetty.turnLeftAction
    }} />}
    </dd>;
  let quarry = <dt className="font-medium whitespace-nowrap text-token-text-primary">
      {<MemoizedFormattedMessage {...{
      id: "settings.codexMicro.keyboardLayout.knobTooltip.click",
      defaultMessage: "Click",
      description: "Label for clicking the Codex Micro encoder knob once"
    }} />}
    </dt>;
  let rapids = <dd className="text-token-text-secondary">
      {<MemoizedFormattedMessage {...{
      ...jetty.clickAction
    }} />}
    </dd>;
  let spur = <dt className="font-medium whitespace-nowrap text-token-text-primary">
      {<MemoizedFormattedMessage {...{
      id: "settings.codexMicro.keyboardLayout.knobTooltip.pressAndHold",
      defaultMessage: "Press and hold",
      description: "Label for pressing and holding the Codex Micro encoder knob"
    }} />}
    </dt>;
  let tor = <dd className="text-token-text-secondary">
      {<MemoizedFormattedMessage {...{
      id: "settings.codexMicro.keyboardLayout.knobTooltip.pressAndHoldActionByDevice",
      defaultMessage: "Open {deviceName} settings",
      description: "Action performed when pressing and holding the Codex Micro or Creator Micro encoder knob",
      values: {
        deviceName
      }
    }} />}
    </dd>;
  let updraft = <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 text-xs leading-4">
      {mire}
      {nook}
      {oxbow}
      {pond}
      {quarry}
      {rapids}
      {spur}
      {tor}
    </dl>;
  let verge = <div className="flex w-64 flex-col gap-2.5 p-3">
      {knob}
      {ledge}
      {updraft}
    </div>;
  let weir = inlet.formatMessage({
    id: "settings.codexMicro.keyboardLayout.knobByDevice",
    defaultMessage: "{deviceName} knob",
    description: "Accessible label for the encoder knob in the Codex Micro or Creator Micro keyboard preview"
  }, {
    deviceName
  });
  let yard = <CodexMicroKeyboardSurface {...{
    ariaLabel: weir,
    pulse
  }} />;
  return <OptionalTooltip {...{
    align: "start",
    delayOpen: true,
    disablePadding: true,
    tooltipMaxWidth: "18rem",
    tooltipContent: verge,
    children: yard
  }} />;
}
function fern(anchor) {
  let {
      slot,
      slotId,
      className,
      isPressed,
      skills,
      voiceButtonMode,
      onEditSlot
    } = anchor,
    bolt = codexMicroLayoutR(slot.keycapId);
  let cog = bolt,
    disc = useIntl(),
    edge = slot.action?.type === "skill" ? slot.action : null,
    forge = slot.action?.type === "command" ? slot.action.commandId : slot.commandId,
    gear,
    hinge,
    iron,
    joint,
    keystone,
    latch,
    motor,
    nut,
    piston,
    rivet;
  {
    let bracket = forge == null ? null : getCodexMicroWebviewCommands(forge);
    hinge = OptionalTooltip;
    piston = true;
    rivet = <CodexMicroSettingsHelper26 {...{
      keycap: cog,
      skills,
      slot,
      voiceButtonMode
    }} />;
    latch = "button";
    let clamp = isPressed && "translate-y-px scale-[0.985]";
    motor = IntlProvider("group relative z-10 cursor-interaction transition-transform duration-basic ease-out", clamp, className);
    nut = () => {
      onEditSlot(slotId);
    };
    gear = CodexMicroKeyboardSurfacePanel;
    let drill = isPressed && "bg-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.92),0_0_12px_rgba(141,181,255,0.26)] dark:bg-[#282b34] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14),0_0_14px_rgba(141,181,255,0.28)]";
    keystone = IntlProvider("size-full transition-[box-shadow,background-color] duration-basic ease-out group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.92),0_0_12px_rgba(141,181,255,0.18)] dark:group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12),0_0_12px_rgba(141,181,255,0.24)]", drill);
    iron = "sr-only";
    joint = edge == null ? bracket == null ? <CodexMicroSettingsHelper25 {...{
      keycap: cog,
      voiceButtonMode
    }} /> : collaborationModeFromTurnOrParams(bracket, disc) : ensureCodexMicroAnalogActionTitleInit(edge, skills, disc);
  }
  let screw = <span className={iron}>
      {joint}
    </span>;
  let torque = <CodexMicroKeyboardSurfaceLabel {...{
    keycap: cog,
    className: "size-5"
  }} />;
  let valve = <Alpha {...{
    className: keystone,
    children: [screw, torque]
  }} />;
  let axle = <button type={latch} className={motor} onClick={nut}>
      {valve}
    </button>;
  return <Bravo {...{
    delayOpen: piston,
    tooltipContent: rivet,
    children: axle
  }} />;
}
function grove(engine, frame) {
  return frame.some(item => engine.includes(item));
}
function hill(gasket, handle) {
  let insert = handle.trim().toLowerCase();
  return insert.length === 0 ? true : [gasket.id, ...codexMicroLayoutU(gasket)].some(item => item.toLowerCase().includes(insert));
}
function isle(jacket) {
  return jacket.id === "SPLIT" ? "FORK" : jacket.id === "BRCH" ? "DRAFT" : jacket.id;
}
var juniper, lagoon, $, meadow, nest, oak, petal, quiet;
