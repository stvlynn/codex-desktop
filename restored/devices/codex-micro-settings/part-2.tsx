// Restored from ref/webview/assets/codex-micro-settings-OfPypdLl.js
// Wave5 stub-pass soft companions.
const applySvg: any = undefined;
const ensureSelectableListRowInit: any = undefined;

// Wave FY — full polished body from `codex-micro-settings-OfPypdLl/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 55 (verified 127/182).
// Wave5d — FZ repair from fz-pascal L=5611 sus=56; JSX PascalCase + careful split.
// Wave5d careful split 2/10
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
const AppInitialEv: any = undefined;
const AppInitialKt: any = undefined;
const CodexMicroSettingsHelper6: any = undefined;
const CodexMicroSettingsHelper7: any = undefined;
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
const deferredUiB: any = undefined;
const deferredUiH: any = undefined;
const deferredZft: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;
function lunar(fern) {
  let {
      action,
      direction,
      isSelected,
      skills,
      onSelect
    } = fern,
    grove = useIntl(),
    hill,
    isle,
    juniper,
    lagoon,
    meadow,
    nest,
    oak;
  {
    juniper = action == null ? grove.formatMessage(unity.none) : ensureCodexMicroAnalogActionTitleInit(action, skills, grove);
    let wind = grove.formatMessage(unity[direction]);
    isle = OptionalTooltip;
    nest = "trigger-overflows";
    oak = juniper;
    hill = ensureSelectableListRowInit;
    lagoon = isSelected ? "true" : undefined;
    meadow = grove.formatMessage({
      id: "settings.codexMicro.analog.direction.mapping",
      defaultMessage: "{direction}: {action}",
      description: "Accessible label for a Codex Micro analog direction and its assigned action"
    }, {
      action: juniper,
      direction: wind
    });
  }
  let petal = tide[direction],
    quiet = IntlProvider("size-4 shrink-0", petal);
  let rain = <AppIconPlt {...{
    className: quiet
  }} />;
  let seed = action == null,
    trail = <CodexMicroSettingsHelper6 {...{
      compact: true,
      title: juniper,
      unassigned: seed
    }} />;
  let urn = <CodexMicroSettingsHelper7 {...{
    direction
  }} />;
  let vine = <Alpha {...{
    ariaCurrent: lagoon,
    ariaLabel: meadow,
    density: "compact",
    icon: rain,
    isSelected,
    onSelect,
    rightText: trail,
    title: urn
  }} />;
  return <Bravo {...{
    openWhen: nest,
    tooltipContent: oak,
    children: vine
  }} />;
}
function moss(yarrow) {
  let {
      description,
      isSelected,
      onSelect,
      title
    } = yarrow,
    azure = isSelected ? "true" : undefined,
    birch = isSelected ? <AppIconTv className="size-4 shrink-0 text-token-text-link-foreground" /> : null;
  let canyon = description == null ? null : <span className="block truncate">{description}</span>;
  return <EnsureSelectableListRowInit {...{
    ariaCurrent: azure,
    compactSecondLine: true,
    density: "compact",
    isSelected,
    onSelect,
    rightText: birch,
    secondLine: canyon,
    title
  }} />;
}
function north(dew) {
  let {
      compact = false,
      title,
      unassigned
    } = dew,
    ever = compact || undefined,
    field = compact ? "max-w-56 text-xs" : "max-w-full",
    grain = unassigned && "text-token-description-foreground",
    haven = IntlProvider("block truncate", field, grain);
  return <span data-tooltip-overflow-target={ever} className={haven}>
      {title}
    </span>;
}
function orbit(ink) {
  let {
    direction,
    lowercase
  } = ink;
  if (!(lowercase !== undefined && lowercase)) {
    let jadeite = unity[direction],
      kernel;
    return <MemoizedFormattedMessage {...{
      ...jadeite
    }} />;
  }
  switch (direction) {
    case "up":
      {
        let leaf;
        return <MemoizedFormattedMessage {...{
          ...unity.upLowercase
        }} />;
      }
    case "right":
      {
        let maple;
        return <MemoizedFormattedMessage {...{
          ...unity.rightLowercase
        }} />;
      }
    case "down":
      {
        let nimbus;
        return <MemoizedFormattedMessage {...{
          ...unity.downLowercase
        }} />;
      }
    case "left":
      {
        let opal;
        return <MemoizedFormattedMessage {...{
          ...unity.leftLowercase
        }} />;
      }
  }
}
var pine,
  quest,
  ridge,
  storm,
  tide,
  unity,
  vale = esmInit(() => {
    pine = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    quest = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    findCodexMicroWebviewCommand();
    ensureSettingsQueryAtomsInit();
    findProcessManagerRow();
    useOpenLocatorInMainWindow();
    ensureSelectableListRowActivationInit();
    ensureComposerEsm_Hlt_Init();
    deferredVM();
    applySvg();
    AppInitialEv();
    ensureConversationPageEsm_Act_Init();
    AppInitialKt();
    codexCommandTheme();
    ensureSkillsPageHelpersInit();
    ensureSkillsPageHelpersInit();
    getAnalogActionTitle();
    kelp();
    ensureCodexMicroKeyboardSurfaceInit();
    storm = ["up", "right", "down", "left"];
    tide = {
      up: "",
      right: "rotate-90",
      down: "rotate-180",
      left: "-rotate-90"
    };
    unity = identity({
      none: {
        id: "settings.codexMicro.analog.none",
        defaultMessage: "None",
        description: "Short label for a Codex Micro analog direction with no action assigned"
      },
      up: {
        id: "settings.codexMicro.analog.direction.up",
        defaultMessage: "Up",
        description: "Up direction label in the Codex Micro analog action dialog"
      },
      right: {
        id: "settings.codexMicro.analog.direction.right",
        defaultMessage: "Right",
        description: "Right direction label in the Codex Micro analog action dialog"
      },
      down: {
        id: "settings.codexMicro.analog.direction.down",
        defaultMessage: "Down",
        description: "Down direction label in the Codex Micro analog action dialog"
      },
      left: {
        id: "settings.codexMicro.analog.direction.left",
        defaultMessage: "Left",
        description: "Left direction label in the Codex Micro analog action dialog"
      },
      upLowercase: {
        id: "settings.codexMicro.analog.direction.up.lowercase",
        defaultMessage: "up",
        description: "Lowercase up direction label in the Codex Micro analog action dialog"
      },
      rightLowercase: {
        id: "settings.codexMicro.analog.direction.right.lowercase",
        defaultMessage: "right",
        description: "Lowercase right direction label in the Codex Micro analog action dialog"
      },
      downLowercase: {
        id: "settings.codexMicro.analog.direction.down.lowercase",
        defaultMessage: "down",
        description: "Lowercase down direction label in the Codex Micro analog action dialog"
      },
      leftLowercase: {
        id: "settings.codexMicro.analog.direction.left.lowercase",
        defaultMessage: "left",
        description: "Lowercase left direction label in the Codex Micro analog action dialog"
      }
    });
  });
function wave(plume) {
  let {
      commands,
      noActionLabel,
      portalContainer,
      selectedAction,
      skills,
      triggerButton,
      onActionSelect
    } = plume,
    quillow = useIntl(),
    [root, silk] = brook.useState(""),
    thorn;
  {
    let upland = copper(commands, root, quillow),
      vista = fjord => root.trim().length === 0 || [fjord.name, getPluginDisplayName(fjord), getPluginShortDescription(fjord)].some(item => ensureKeyboardShortcutsHMInit(item, root) > 0);
    let wisp = delta(skills).filter(vista),
      yonder = root.trim().length === 0 || ensureKeyboardShortcutsHMInit(noActionLabel, root) > 0;
    let zenith = yonder,
      anvil = glen => {
        glen || silk("");
      };
    let beacon = quillow.formatMessage({
      id: "settings.codexMicro.editor.customShortcut.search.label",
      defaultMessage: "Search shortcuts and skills for keycap",
      description: "Accessible label for searching shortcuts and skills assignable to a Codex Micro keycap"
    });
    let crag = quillow.formatMessage({
      id: "settings.codexMicro.editor.customShortcut.search.placeholder",
      defaultMessage: "Search shortcuts or skills",
      description: "Placeholder for searching shortcuts and skills assignable to a Codex Micro keycap"
    });
    let dome = event => {
      silk(event.currentTarget.value);
    };
    let eddy;
    eddy = <DropdownMenu.SearchInput {...{
      className: "shrink-0",
      "aria-label": beacon,
      placeholder: crag,
      value: root,
      onChange: dome
    }} />;
    thorn = <DropdownMenuPopover {...{
      align: "end",
      side: "top",
      contentClassName: "overflow-hidden",
      contentMaxHeight: "tall",
      contentWidth: "panelWide",
      portalContainer,
      onOpenChange: anvil,
      triggerButton,
      children: [eddy, zenith || wisp.length > 0 || upland.length > 0 ? <DropdownMenu.Section {...{
        className: "min-h-0 flex-1 overflow-y-auto",
        children: [zenith ? <DropdownMenu.Item {...{
          rightIcon: selectedAction == null ? <AppIconTv className="icon-xs text-token-text-link-foreground" /> : null,
          onSelect: () => {
            onActionSelect(undefined);
          },
          children: noActionLabel
        }} /> : null, upland.map((item, index) => <>
                        {zenith || index > 0 ? <DropdownMenu.Separator {...{}} /> : null}
                        {<DropdownMenu.SectionLabel {...{
            children: item.label
          }} />}
                        {item.options.map(_item => {
            let {
              command,
              description,
              title
            } = _item;
            return <DropdownMenu.Item key={command.id} {...{
              rightIcon: selectedAction?.type === "command" && command.id === selectedAction.commandId ? <AppIconTv className="icon-xs text-token-text-link-foreground" /> : null,
              SubText: description.length === 0 ? null : <span className="text-xs text-token-description-foreground">
                                      {description}
                                    </span>,
              onSelect: () => {
                onActionSelect({
                  type: "command",
                  commandId: command.id
                });
              },
              children: title
            }} />;
          })}
                      </>), wisp.length === 0 ? null : <>
                        {zenith || upland.length > 0 ? <DropdownMenu.Separator {...{}} /> : null}
                        {<DropdownMenu.SectionLabel {...{
            children: <MemoizedFormattedMessage {...{
              id: "settings.codexMicro.editor.customShortcut.skills",
              defaultMessage: "Skills",
              description: "Section heading for skills assignable to a Codex Micro keycap"
            }} />
          }} />}
                        {wisp.map(item => <DropdownMenu.Item key={item.path} {...{
            rightIcon: selectedAction?.type === "skill" && selectedAction.skillPath === item.path ? <AppIconTv className="icon-xs text-token-text-link-foreground" /> : null,
            SubText: <span className="text-xs text-token-description-foreground">
                                  {getPluginShortDescription(item)}
                                </span>,
            onSelect: () => {
              onActionSelect({
                type: "skill",
                skillName: item.name,
                skillPath: item.path
              });
            },
            children: getPluginDisplayName(item)
          }} />)}
                      </>]
      }} /> : <DropdownMenu.Message {...{
        centered: true,
        children: <MemoizedFormattedMessage {...{
          id: "settings.codexMicro.editor.customShortcut.search.noResults",
          defaultMessage: "No matching shortcuts or skills",
          description: "Empty state shown when searching shortcuts and skills assignable to a Codex Micro keycap"
        }} />
      }} />]
    }} />;
  }
  return thorn;
}
var apex,
  brook,
  cliff,
  dusk = esmInit(() => {
    apex = reactCompilerRuntime();
    brook = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureDropdownMenuInit();
    deferredVM();
    AppInitialEv();
    ensureSkillsPageHelpersInit();
    ensureSkillsPageHelpersInit();
    kelp();
  });
function elm(hearth) {
  let {
      onClose,
      onConfirm
    } = hearth,
    inlet = <MemoizedFormattedMessage {...{
      id: "settings.codexMicro.keyboardLayout.resetConfirmation.title",
      defaultMessage: "Reset keyboard layout?",
      description: "Title for the dialog confirming a Codex Micro keyboard layout reset"
    }} />;
  let jetty = inlet,
    knob = <MemoizedFormattedMessage {...{
      id: "settings.codexMicro.keyboardLayout.resetConfirmation.description",
      defaultMessage: "This restores the command keys and analog stick to their default assignments without changing your agent key mode or custom chat assignments",
      description: "Explanation shown before resetting the Codex Micro keyboard layout"
    }} />;
  let ledge = knob,
    mire = weir => {
      weir || onClose();
    };
  let nook = event => {
    event.preventDefault();
    onConfirm();
    onClose();
  };
  let oxbow, pond;
  oxbow = <RealtimeVoiceHostId {...{
    className: "sr-only",
    children: jetty
  }} />;
  pond = <IsStartingProcessExpired {...{
    className: "sr-only",
    children: ledge
  }} />;
  let quarry = <DeferredUiU {...{
    children: <DeferredUiH {...{
      title: jetty,
      subtitle: ledge
    }} />
  }} />;
  let rapids = <MemoizedFormattedMessage {...{
    id: "settings.codexMicro.keyboardLayout.resetConfirmation.cancel",
    defaultMessage: "Cancel",
    description: "Button that cancels resetting the Codex Micro keyboard layout"
  }} />;
  let spur = <ReadLoginRouteQuerySnapshot {...{
    color: "secondary",
    onClick: onClose,
    children: rapids
  }} />;
  let tor = <ReadLoginRouteQuerySnapshot {...{
    color: "danger",
    type: "submit",
    children: <MemoizedFormattedMessage {...{
      id: "settings.codexMicro.keyboardLayout.resetConfirmation.confirm",
      defaultMessage: "Reset layout",
      description: "Button that confirms resetting the Codex Micro keyboard layout"
    }} />
  }} />;
  let updraft = <DeferredUiU {...{
    children: <SetRemoteControlEnabledForHost {...{
      children: [spur, tor]
    }} />
  }} />;
  let verge = <DeferredUiB {...{
    as: "form",
    onSubmit: nook,
    children: [oxbow, pond, quarry, updraft]
  }} />;
  return <UsePointerSurfaceInteractionGate {...{
    open: true,
    showDialogClose: false,
    size: "compact",
    onOpenChange: mire,
    children: verge
  }} />;
}
