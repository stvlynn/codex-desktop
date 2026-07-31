// Restored from ref/webview/assets/codex-micro-settings-OfPypdLl.js
// Wave5 stub-pass soft companions.
const codexMicroLayoutL: any = undefined;
const codexMicroLayoutU: any = undefined;
const findByModel: any = undefined;
const usePointerSurfaceInteractionGate: any = undefined;

// Wave FY — full polished body from `codex-micro-settings-OfPypdLl/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 55 (verified 127/182).
// Wave5d — FZ repair from fz-pascal L=5611 sus=56; JSX PascalCase + careful split.
// Wave5d careful split 4/10
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
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
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
const deferredUiB: any = undefined;
const deferredUiH: any = undefined;
const deferredUiU: any = undefined;
const deferredZft: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;
function wave(dusk) {
  let {
      agentKeyId,
      commands,
      skills,
      onOpenChange
    } = dusk,
    elm = CodexPluginActionType(appScopeAtom),
    fern = useIntl(),
    grove = CodexPluginActionResult(codexMicroSlotSignalU) ?? codexMicroSlotSignalO,
    hill = grove[agentKeyId],
    [isle, juniper] = slate.useState(hill == null || "threadKey" in hill ? "chat" : hill.type === "command" ? "shortcut" : hill.type),
    [lagoon, meadow] = slate.useState(""),
    nest = lagoon.trim();
  let oak = nest,
    {
      loading: petal,
      options
    } = gamma(isle === "chat" ? oak : ""),
    quiet,
    rain,
    seed,
    trail,
    urn,
    vine,
    wind,
    yarrow,
    azure,
    birch,
    canyon,
    dew,
    ever,
    field,
    grain,
    haven,
    ink,
    jadeite;
  {
    let wisp = [];
    bb0: switch (isle) {
      case "chat":
        break bb0;
      case "shortcut":
        wisp = falcon(commands, oak, fern).map(brook);
        break bb0;
      case "keycap":
        {
          let glen;
          glen = hearth => {
            if (hearth.action.type === "custom-shortcut") return [];
            let inlet = harbor(hearth, fern);
            return oak.length > 0 && ![hearth.id, inlet, ...codexMicroLayoutU(hearth)].some(item => ensureKeyboardShortcutsHMInit(item, oak) > 0) ? [] : [{
              assignment: {
                type: "keycap",
                keycapId: hearth.id
              },
              description: inlet,
              keycap: hearth,
              title: hearth.id,
              value: hearth.id
            }];
          };
          wisp = [{
            id: isle,
            label: fern.formatMessage(umbra.keycap),
            options: codexMicroLayoutL.flatMap(glen)
          }];
          break bb0;
        }
      case "skill":
        {
          let jetty = indigo(skills),
            knob;
          knob = ledge => {
            let mire = getPluginDisplayName(ledge),
              nook = getPluginShortDescription(ledge);
            return oak.length > 0 && ![ledge.name, mire, nook].some(item => ensureKeyboardShortcutsHMInit(item, oak) > 0) ? [] : [{
              assignment: {
                type: "skill",
                skillName: ledge.name,
                skillPath: ledge.path
              },
              description: nook,
              title: mire,
              value: ledge.path
            }];
          };
          wisp = [{
            id: isle,
            label: fern.formatMessage(umbra.skill),
            options: jetty.flatMap(knob)
          }];
        }
    }
    wisp = wisp.filter(apex);
    let yonder = hill == null || !("type" in hill) ? null : hill.type === "command" ? hill.commandId : hill.type === "skill" ? hill.skillPath : hill.keycapId,
      zenith = fern.formatMessage({
        id: "settings.codexMicro.customAgent.search.labelByType",
        defaultMessage: "Search {type, select, chat {chats} shortcut {shortcuts} keycap {keycaps} skill {skills} other {assignments}} to assign",
        description: "Accessible label for searching Codex Micro agent-key assignments by assignment type"
      }, {
        type: isle
      });
    let anvil = zenith,
      beacon = ARTIFACT_GENERATION_STAGE_IDS.indexOf(agentKeyId) + 1,
      crag;
    crag = function (oxbow) {
      codexMicroSlotSignalC(elm, agentKeyId, oxbow);
      onOpenChange(false);
    };
    vine = crag;
    urn = usePointerSurfaceInteractionGate;
    yarrow = true;
    azure = "wide";
    birch = onOpenChange;
    trail = deferredUiB;
    jadeite = "max-h-[calc(100vh-4rem)] min-h-0 gap-0 overflow-hidden";
    let dome = <RealtimeVoiceHostId {...{
      children: <MemoizedFormattedMessage {...{
        id: "settings.codexMicro.customAgent.title",
        defaultMessage: "Assign agent key {position}",
        description: "Title of the Codex Micro custom agent-key assignment dialog",
        values: {
          position: beacon
        }
      }} />
    }} />;
    let eddy;
    eddy = <IsStartingProcessExpired {...{
      children: <MemoizedFormattedMessage {...{
        id: "settings.codexMicro.customAgent.description",
        defaultMessage: "Choose a chat, shortcut, keycap, or skill for this key",
        description: "Description of the Codex Micro custom agent-key assignment dialog"
      }} />
    }} />;
    wind = <DeferredUiU {...{
      children: <DeferredUiH {...{
        title: dome,
        subtitle: eddy
      }} />
    }} />;
    seed = deferredUiU;
    ink = "min-h-0 flex-1";
    rain = findByModel;
    ever = false;
    field = anvil;
    grain = "min-h-0 overflow-hidden rounded-lg";
    let fjord;
    fjord = fern.formatMessage({
      id: "settings.codexMicro.customAgent.search.placeholderByType",
      defaultMessage: "Search {type, select, chat {chats} shortcut {shortcuts} keycap {keycaps} skill {skills} other {assignments}}",
      description: "Placeholder for searching Codex Micro agent-key assignments by assignment type"
    }, {
      type: isle
    });
    haven = <FindByModel.Input {...{
      autoFocus: true,
      "aria-label": anvil,
      placeholder: fjord,
      value: lagoon,
      onValueChange: meadow
    }} />;
    quiet = findByModel.List;
    canyon = "max-h-[min(360px,50vh)]!";
    dew = isle === "chat" && petal ? <div className="flex h-24 items-center justify-center text-token-text-secondary">
          {<VSCODE_EDITOR_ID {...{
        className: "icon-xs"
      }} />}
        </div> : isle === "chat" && options.length === 0 ? <FindByModel.Empty {...{
      children: <MemoizedFormattedMessage {...{
        id: "settings.codexMicro.customAgent.search.empty",
        defaultMessage: "No active chats found",
        description: "Empty state for the Codex Micro custom agent-key task search"
      }} />
    }} /> : isle === "chat" ? <FindByModel.Group {...{
      heading: <span className="block px-2 pt-2 text-sm text-token-description-foreground">
                {oak.length === 0 ? <MemoizedFormattedMessage {...{
          id: "settings.codexMicro.customAgent.recent",
          defaultMessage: "Recent chats",
          description: "Heading for recent tasks in the Codex Micro custom assignment dialog"
        }} /> : <MemoizedFormattedMessage {...{
          id: "settings.codexMicro.customAgent.results",
          defaultMessage: "Search results",
          description: "Heading for task search results in the Codex Micro custom assignment dialog"
        }} />}
              </span>,
      children: options.map(item => {
        let {
            assignment,
            result
          } = item,
          {
            threadKey
          } = assignment,
          pond = ARTIFACT_GENERATION_STAGE_IDS.find(_item => {
            let tor = grove[_item];
            return tor != null && "threadKey" in tor && tor.threadKey === threadKey;
          }),
          quarry = pond == null ? null : ARTIFACT_GENERATION_STAGE_IDS.indexOf(pond) + 1,
          rapids = result.title ?? fern.formatMessage({
            id: "settings.codexMicro.customAgent.untitled",
            defaultMessage: "Untitled chat",
            description: "Fallback title for an untitled task in the Codex Micro custom assignment dialog"
          }),
          spur = result.kind === "local" ? result.projectLabel ?? result.cwd : result.projectLabel ?? result.environmentLabel;
        return <SettingsCommandMenuSectionItem key={threadKey} {...{
          value: threadKey,
          title: rapids,
          description: spur,
          titleTooltipContent: rapids,
          descriptionTooltipContent: spur,
          LeftIcon: AppIconSR,
          rightAccessory: pond === agentKeyId ? <AppIconZlt {...{
            className: "icon-xs text-token-text-primary"
          }} /> : quarry == null ? null : <span className="text-xs text-token-text-secondary">
                          {<MemoizedFormattedMessage {...{
              id: "settings.codexMicro.customAgent.assignedKey",
              defaultMessage: "Key {position}",
              description: "Label for the Codex Micro agent key currently assigned to a task",
              values: {
                position: quarry
              }
            }} />}
                        </span>,
          onSelect: () => vine(assignment)
        }} />;
      })
    }} /> : wisp.length === 0 ? <FindByModel.Empty {...{
      children: <MemoizedFormattedMessage {...{
        id: "settings.codexMicro.customAgent.actions.empty",
        defaultMessage: "No matching {type, select, shortcut {shortcuts} keycap {keycaps} skill {skills} other {actions}}",
        description: "Empty state when searching actions for a Codex Micro agent key",
        values: {
          type: isle
        }
      }} />
    }} /> : wisp.map(item => <FindByModel.Group key={item.id} {...{
      heading: <span className="block px-2 pt-2 text-sm text-token-description-foreground">
                  {item.label}
                </span>,
      children: item.options.map(_item => <SettingsCommandMenuSectionItem key={_item.value} {...{
        value: _item.value,
        title: _item.title,
        description: _item.description,
        LeftIcon: _item.assignment.type === "skill" ? LoadingPreviewIcon : _item.assignment.type === "command" ? AppIconOi : undefined,
        leftAccessory: _item.keycap == null ? undefined : <CodexMicroKeyboardSurfaceLabel {...{
          keycap: _item.keycap,
          className: "icon-xs shrink-0"
        }} />,
        rightAccessory: hill != null && "type" in hill && hill.type === _item.assignment.type && yonder === _item.value ? <AppIconZlt {...{
          className: "icon-xs text-token-text-primary"
        }} /> : null,
        onSelect: () => vine(_item.assignment)
      }} />)
    }} />);
  }
  let kernel = <Alpha {...{
    className: canyon,
    children: dew
  }} />;
  let leaf = <Bravo {...{
    shouldFilter: ever,
    label: field,
    className: grain,
    children: [haven, kernel]
  }} />;
  let maple = <Copper {...{
    className: ink,
    children: leaf
  }} />;
  let nimbus = umbra[isle],
    opal = <DropdownTriggerButton className="w-36">
        {<MemoizedFormattedMessage {...{
        ...nimbus
      }} />}
      </DropdownTriggerButton>;
  let plume = timber.map(item => <DropdownMenu.Item key={item} {...{
    rightIcon: isle === item ? <AppIconZlt {...{
      className: "icon-xs text-token-text-link-foreground"
    }} /> : null,
    onSelect: () => {
      juniper(item);
      meadow("");
    },
    children: <MemoizedFormattedMessage {...{
      ...umbra[item]
    }} />
  }} />);
  let quillow = <div className="mr-auto">
      {<DropdownMenuPopover {...{
      align: "start",
      side: "top",
      triggerButton: opal,
      children: plume
    }} />}
    </div>;
  let root = hill == null ? null : <ReadLoginRouteQuerySnapshot {...{
    color: "secondary",
    onClick: () => vine(null),
    children: <MemoizedFormattedMessage {...{
      id: "settings.codexMicro.customAgent.remove",
      defaultMessage: "Remove assignment",
      description: "Button that removes a custom Codex Micro agent-key assignment"
    }} />
  }} />;
  let silk = () => onOpenChange(false);
  let thorn = <MemoizedFormattedMessage {...{
    id: "settings.codexMicro.customAgent.cancel",
    defaultMessage: "Cancel",
    description: "Button that closes the Codex Micro custom agent-key assignment dialog"
  }} />;
  let upland = <ReadLoginRouteQuerySnapshot {...{
    color: "ghost",
    onClick: silk,
    children: thorn
  }} />;
  let _e = <DeferredUiU {...{
    children: <SetRemoteControlEnabledForHost {...{
      expandSingleButton: false,
      children: [quillow, root, upland]
    }} />
  }} />;
  let vista = <Delta {...{
    className: jadeite,
    children: [wind, maple, _e]
  }} />;
  return <Echo {...{
    open: yarrow,
    size: azure,
    onOpenChange: birch,
    children: vista
  }} />;
}
function apex(updraft) {
  return updraft.options.length > 0;
}
function brook(verge) {
  let {
    id,
    label,
    options
  } = verge;
  return {
    id,
    label,
    options: options.map(cliff)
  };
}
function cliff(weir) {
  let {
    command,
    description,
    title
  } = weir;
  return {
    assignment: {
      type: "command",
      commandId: command.id
    },
    description,
    title,
    value: command.id
  };
}
