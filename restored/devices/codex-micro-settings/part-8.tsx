// Restored from ref/webview/assets/codex-micro-settings-OfPypdLl.js
// Wave5 stub-pass soft companions.
const codexMicroLayoutN: any = undefined;
const codexMicroLayoutR: any = undefined;
const ensurePersonalizationCInit: any = undefined;
const usePointerSurfaceInteractionGate: any = undefined;

// Wave FY — full polished body from `codex-micro-settings-OfPypdLl/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 55 (verified 127/182).
// Wave5d — FZ repair from fz-pascal L=5611 sus=56; JSX PascalCase + careful split.
// Wave5d careful split 8/10
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
function RealtimeVoiceHostId(props: {
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
const CodexMicroSettingsHelper25: any = undefined;
const CodexMicroSettingsHelper26: any = undefined;
const CodexMicroSettingsHelper8: any = undefined;
const IntlProvider: any = undefined;
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
const isle: any = undefined;
const juniper: any = undefined;
const deferredUiB: any = undefined;
const deferredUiH: any = undefined;
const deferredUiU: any = undefined;
const deferredZft: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;
function lagoon(nest) {
  let {
      keycap,
      skills,
      slot,
      voiceButtonMode
    } = nest,
    oak = useIntl(),
    petal = slot.action?.type === "skill" ? slot.action : null,
    quiet = slot.action?.type === "command" ? slot.action.commandId : slot.commandId,
    rain,
    seed,
    trail,
    urn,
    vine,
    wind,
    yarrow;
  {
    trail = quiet == null ? null : getCodexMicroWebviewCommands(quiet);
    let dew = trail;
    dew == null && keycap.action.type === "command" && (dew = getCodexMicroWebviewCommands(keycap.action.command));
    seed = dew == null ? null : BrowserWebviewPanel(dew, oak).description;
    bb0: switch (keycap.action.type) {
      case "command":
        rain = null;
        break bb0;
      case "composer-text":
        {
          let field;
          field = <MemoizedFormattedMessage {...{
            id: "settings.codexMicro.keycaps.composerText.description",
            defaultMessage: "Available when a composer is active",
            description: "Availability description for Codex Micro composer text keycaps"
          }} />;
          rain = field;
          break bb0;
        }
      case "custom-shortcut":
        {
          let grain;
          grain = <MemoizedFormattedMessage {...{
            id: "settings.codexMicro.keycaps.custom.description",
            defaultMessage: "Choose a shortcut to assign",
            description: "Description for an unassigned Codex Micro custom keycap"
          }} />;
          rain = grain;
          break bb0;
        }
      case "external-url":
        {
          let haven;
          haven = <MemoizedFormattedMessage {...{
            id: "settings.codexMicro.keycaps.externalUrl.description",
            defaultMessage: "Opens in your preferred browser",
            description: "Description for a Codex Micro external URL keycap"
          }} />;
          rain = haven;
          break bb0;
        }
      case "named":
        {
          let ink;
          ink = voiceButtonMode === "realtime" ? <MemoizedFormattedMessage {...{
            ...flint.microphoneKeyVoiceChatDescription
          }} /> : <MemoizedFormattedMessage {...{
            ...flint.microphoneKeyPushToTalkDescription
          }} />;
          rain = ink;
        }
    }
    wind = "flex min-w-32 flex-col gap-0.5";
    let ever;
    ever = gamma(keycap);
    yarrow = <span className="font-mono text-xs font-semibold">
        {ever}
      </span>;
    urn = "text-xs";
    vine = petal == null ? trail == null ? <CodexMicroSettingsHelper25 {...{
      keycap,
      voiceButtonMode
    }} /> : collaborationModeFromTurnOrParams(trail, oak) : ensureCodexMicroAnalogActionTitleInit(petal, skills, oak);
  }
  let azure = <span className={urn}>
      {vine}
    </span>;
  let birch = petal == null ? seed ?? (trail == null ? rain : null) : null,
    canyon = <span className="text-xs text-token-description-foreground">
        {birch}
      </span>;
  return <div className={wind}>
      {yarrow}
      {azure}
      {canyon}
    </div>;
}
function meadow(jadeite) {
  let {
      commands,
      layout,
      skills,
      slotId,
      voiceButtonMode,
      onOpenChange,
      onSave
    } = jadeite,
    kernel = useIntl(),
    leaf = layout.slots[slotId],
    [maple, nimbus] = jewel.useState(leaf.keycapId),
    opal = leaf.action ?? (leaf.commandId == null ? undefined : {
      type: "command",
      commandId: leaf.commandId
    });
  let [plume, quillow] = jewel.useState(opal),
    [root, silk] = jewel.useState(""),
    [thorn, upland] = jewel.useState(null),
    vista,
    wisp,
    yonder,
    zenith,
    anvil,
    beacon,
    crag,
    dome,
    eddy,
    fjord,
    glen,
    hearth,
    inlet,
    jetty,
    knob,
    ledge,
    mire,
    nook;
  {
    let cog = codexMicroLayoutR(maple),
      disc = plume?.type === "command" ? getCodexMicroWebviewCommands(plume.commandId) : null;
    beacon = cog.action.type === "custom-shortcut" ? kernel.formatMessage({
      id: "settings.codexMicro.editor.customShortcut.none",
      defaultMessage: "Unassigned",
      description: "Dropdown option that clears a Codex Micro keycap command"
    }) : kernel.formatMessage({
      id: "settings.codexMicro.editor.customShortcut.useDefault",
      defaultMessage: "Use keycap default",
      description: "Dropdown option that restores a Codex Micro keycap's predefined action"
    });
    let edge = codexMicroLayoutN(slotId),
      forge = nut => falcon(nut, root);
    let gear = edge.filter(forge);
    anvil = usePointerSurfaceInteractionGate;
    dome = true;
    eddy = "wide";
    fjord = onOpenChange;
    zenith = deferredUiB;
    ledge = "form";
    mire = "max-h-[calc(100vh-4rem)] min-h-0 gap-0 overflow-hidden";
    nook = event => {
      event.preventDefault();
      onSave({
        keycapId: cog.id,
        commandId: disc?.id,
        action: plume?.type === "skill" ? plume : undefined
      });
    };
    let hinge;
    hinge = <RealtimeVoiceHostId {...{
      children: <MemoizedFormattedMessage {...{
        id: "settings.codexMicro.editor.title",
        defaultMessage: "Edit keycap",
        description: "Title for the Codex Micro keycap slot editor"
      }} />
    }} />;
    crag = <DeferredUiU {...{
      children: <DeferredUiH {...{
        title: hinge,
        subtitle: <IsStartingProcessExpired {...{
          children: <MemoizedFormattedMessage {...{
            id: "settings.codexMicro.editor.subtitle",
            defaultMessage: "Choose what appears on {slotId}",
            description: "Subtitle for the Codex Micro keycap slot editor",
            values: {
              slotId
            }
          }} />
        }} />
      }} />
    }} />;
    yonder = deferredUiU;
    inlet = "flex min-h-0 flex-1 flex-col gap-3";
    let iron = <DeferredUiB {...{
      className: "icon-sm shrink-0 text-token-input-placeholder-foreground"
    }} />;
    let joint = kernel.formatMessage({
      id: "settings.codexMicro.editor.searchLabel",
      defaultMessage: "Search keycaps",
      description: "Accessible label for searching Codex Micro keycaps in the keycap editor"
    });
    let keystone = kernel.formatMessage({
      id: "settings.codexMicro.editor.searchPlaceholder",
      defaultMessage: "Search keycaps",
      description: "Placeholder for searching Codex Micro keycaps in the keycap editor"
    });
    let latch;
    latch = event => {
      silk(event.currentTarget.value);
    };
    jetty = <div className="flex h-10 shrink-0 items-center gap-2 rounded-lg border border-token-input-border bg-token-input-background/75 px-3 text-sm text-token-input-foreground">
        {iron}
        <input autoFocus={true} className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-token-input-placeholder-foreground" aria-label={joint} placeholder={keystone} value={root} onChange={latch} />
      </div>;
    let motor = gear.length === 0 ? <div className="bg-token-surface-secondary flex min-h-28 items-center justify-center rounded-lg border border-token-border px-4 text-sm text-token-description-foreground">
          {<MemoizedFormattedMessage {...{
        id: "settings.codexMicro.editor.noKeycaps",
        defaultMessage: "No matching keycaps",
        description: "Empty state shown when keycap search returns no results"
      }} />}
        </div> : <div className="grid grid-cols-[repeat(auto-fill,minmax(4.75rem,4.75rem))] justify-between gap-2">
          {gear.map(item => {
        let piston = item.id === cog.id,
          rivet = cliff.find(_item => layout.slots[_item.slotId].keycapId === item.id);
        return <OptionalTooltip key={item.id} {...{
          delayOpen: true,
          tooltipContent: <CodexMicroSettingsHelper26 {...{
            keycap: item,
            skills,
            slot: rivet == null ? {
              keycapId: item.id
            } : layout.slots[rivet.slotId],
            voiceButtonMode
          }} />,
          children: <button type="button" aria-pressed={piston} className={IntlProvider("cursor-interaction relative flex aspect-square w-[4.75rem] flex-col items-center justify-center gap-1.5 rounded-[0.8rem] border border-white/[0.86] bg-[#f7f5f1] px-2 py-2 text-[#171717] shadow-[inset_0_0_0_1px_rgba(228,228,228,0.68),0_1px_2px_rgba(79,72,63,0.18)] outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border dark:border-white/[0.14] dark:bg-[#202127] dark:text-token-text-primary dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_1px_2px_rgba(0,0,0,0.32)]", piston ? "border-token-charts-blue/60 bg-token-charts-blue/10 text-token-text-link-foreground ring-1 ring-token-charts-blue/40 dark:border-token-charts-blue/80 dark:bg-token-charts-blue/20 dark:ring-token-charts-blue/60 dark:text-token-text-link-foreground" : null)} onClick={() => {
            if (piston) return;
            nimbus(item.id);
            let screw = rivet == null ? null : layout.slots[rivet.slotId];
            quillow(screw?.action ?? (screw?.commandId == null ? undefined : {
              type: "command",
              commandId: screw.commandId
            }));
          }}>
                      {<CodexMicroKeyboardSurfaceLabel {...{
              keycap: item,
              className: "size-4"
            }} />}
                      <span className="font-mono text-[11px]">
                        {gamma(item)}
                      </span>
                    </button>
        }} />;
      })}
        </div>;
    knob = <div className="vertical-scroll-fade-mask min-h-0 flex-1 overflow-y-auto px-1 pt-1 pb-1 [--edge-fade-distance:1rem]">
        {motor}
      </div>;
    wisp = parseUrlOrFallback;
    vista = ensurePersonalizationCInit;
    glen = <MemoizedFormattedMessage {...{
      id: "settings.codexMicro.editor.customShortcut.label",
      defaultMessage: "Assigned shortcut or skill",
      description: "Label for choosing the shortcut or skill assigned to a Codex Micro keycap"
    }} />;
    hearth = plume?.type === "skill" ? ensureCodexMicroAnalogActionTitleInit(plume, skills, kernel) : disc == null ? cog.action.type === "custom-shortcut" ? <MemoizedFormattedMessage {...{
      id: "settings.codexMicro.editor.customShortcut.unassigned",
      defaultMessage: "Unassigned",
      description: "Label shown when a Codex Micro keycap has no command assigned"
    }} /> : <MemoizedFormattedMessage {...{
      id: "settings.codexMicro.editor.customShortcut.defaultAction",
      defaultMessage: "Keycap default: {action}",
      description: "Description shown when a Codex Micro keycap uses its predefined action",
      values: {
        action: <CodexMicroSettingsHelper25 key={"action"} {...{
          keycap: cog,
          voiceButtonMode
        }} />
      }
    }} /> : collaborationModeFromTurnOrParams(disc, kernel);
  }
  let oxbow = torque => {
    upland(torque?.closest(".codex-dialog") ?? null);
  };
  let pond = <DropdownTriggerButton>
      {<MemoizedFormattedMessage {...{
      id: "settings.codexMicro.editor.customShortcut.choose",
      defaultMessage: "Choose",
      description: "Button label for choosing the command assigned to a Codex Micro keycap"
    }} />}
    </DropdownTriggerButton>;
  let quarry = <div ref={oxbow}>
      {<CodexMicroSettingsHelper8 {...{
      commands,
      noActionLabel: beacon,
      portalContainer: thorn,
      selectedAction: plume,
      skills,
      triggerButton: pond,
      onActionSelect: quillow
    }} />}
    </div>;
  let rapids = <Alpha {...{
    label: glen,
    description: hearth,
    control: quarry
  }} />;
  let spur = <Bravo {...{
    children: rapids
  }} />;
  let tor = <Copper {...{
    className: inlet,
    children: [jetty, knob, spur]
  }} />;
  let updraft = () => {
    onOpenChange(false);
  };
  let verge = <MemoizedFormattedMessage {...{
    id: "settings.codexMicro.editor.cancel",
    defaultMessage: "Cancel",
    description: "Cancel button label for the Codex Micro keycap slot editor"
  }} />;
  let weir = <ReadLoginRouteQuerySnapshot {...{
    type: "button",
    color: "ghost",
    onClick: updraft,
    children: verge
  }} />;
  let yard = <ReadLoginRouteQuerySnapshot {...{
    color: "primary",
    type: "submit",
    children: <MemoizedFormattedMessage {...{
      id: "settings.codexMicro.editor.save",
      defaultMessage: "Save",
      description: "Save button label for the Codex Micro keycap slot editor"
    }} />
  }} />;
  let anchor = <DeferredUiU {...{
    children: <SetRemoteControlEnabledForHost {...{
      children: [weir, yard]
    }} />
  }} />;
  let bolt = <Delta {...{
    as: ledge,
    className: mire,
    onSubmit: nook,
    children: [crag, tor, anchor]
  }} />;
  return <Echo {...{
    open: dome,
    size: eddy,
    onOpenChange: fjord,
    children: bolt
  }} />;
}
