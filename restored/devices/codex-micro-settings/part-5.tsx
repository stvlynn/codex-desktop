// Restored from ref/webview/assets/codex-micro-settings-OfPypdLl.js
// Wave5 stub-pass soft companions.
const CmdkItemSelect: any = undefined;
const coerceStringOrPassthrough: any = undefined;
const or: any = undefined;

// Wave FY — full polished body from `codex-micro-settings-OfPypdLl/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 55 (verified 127/182).
// Wave5d — FZ repair from fz-pascal L=5611 sus=56; JSX PascalCase + careful split.
// Wave5d careful split 5/10
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

// Wave5d soft stubs.
const AppInitialCH: any = undefined;
const AppInitialKi: any = undefined;
const AppInitialUr: any = undefined;
const AppInitialVC: any = undefined;
const CodexMicroSettingsHelper19: any = undefined;
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
const deferredUiB: any = undefined;
const deferredUiCR: any = undefined;
const deferredUiH: any = undefined;
const deferredZft: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;
function lemon(willow, xenon) {
  switch (willow.action.type) {
    case "command":
      {
        let yellow = getCodexMicroWebviewCommands(willow.action.command);
        return yellow == null ? willow.action.command : collaborationModeFromTurnOrParams(yellow, xenon);
      }
    case "composer-text":
      return xenon.formatMessage({
        id: "settings.codexMicro.customAgent.keycaps.composerText",
        defaultMessage: "Insert {text} into the composer",
        description: "Description for a Codex Micro keycap that inserts text into the composer"
      }, {
        text: willow.action.text
      });
    case "custom-shortcut":
      return xenon.formatMessage({
        id: "settings.codexMicro.customAgent.keycaps.customShortcut",
        defaultMessage: "Custom shortcut",
        description: "Description for an unassigned Codex Micro shortcut keycap"
      });
    case "external-url":
      return xenon.formatMessage({
        id: "settings.codexMicro.customAgent.keycaps.externalUrl",
        defaultMessage: "Open {url}",
        description: "Description for a Codex Micro keycap that opens an external URL"
      }, {
        url: willow.action.url
      });
    case "named":
      return xenon.formatMessage({
        id: "settings.codexMicro.customAgent.keycaps.microphone",
        defaultMessage: "Microphone",
        description: "Description for the Codex Micro microphone keycap"
      });
  }
}
var marble,
  nickel,
  onyx,
  pearl,
  quartz,
  river = esmInit(() => {
    marble = reactCompilerRuntime();
    CmdkItemSelect();
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    nickel = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    DiffLinesStatsBadge();
    AppInitialUr();
    ensureSettingsQueryAtomsInit();
    findProcessManagerRow();
    useOpenLocatorInMainWindow();
    ensureDropdownMenuInit();
    ensureComposerEsm_Sut_Init();
    deferredVM();
    coerceStringOrPassthrough();
    deferredUiCR();
    ensureDropdownMenuPopoverInit();
    AppInitialKi();
    AppInitialCH();
    ensureAppScopeInit();
    ensureSettingsSectionTitleInit();
    ensureSkillsPageHelpersInit();
    ensureSkillsPageHelpersInit();
    copper();
    findCodexMicroWebviewCommand();
    codexMicroSlotSignalF();
    ensureCodexMicroKeyboardSurfaceUiInit();
    ensureCodexMicroLayoutInit();
    or();
    pearl = ["chat", "shortcut", "keycap", "skill"];
    quartz = identity({
      chat: {
        id: "settings.codexMicro.customAgent.assignmentType.chat",
        defaultMessage: "Chats",
        description: "Assignment picker option for Codex Micro agent-key chats"
      },
      shortcut: {
        id: "settings.codexMicro.customAgent.assignmentType.shortcut",
        defaultMessage: "Shortcuts",
        description: "Assignment picker option for Codex Micro agent-key shortcuts"
      },
      keycap: {
        id: "settings.codexMicro.customAgent.assignmentType.keycap",
        defaultMessage: "Keycaps",
        description: "Assignment picker option for Codex Micro agent-key keycaps"
      },
      skill: {
        id: "settings.codexMicro.customAgent.assignmentType.skill",
        defaultMessage: "Skills",
        description: "Assignment picker option for Codex Micro agent-key skills"
      }
    });
  });
function _r(zinc) {
  let {
      mode,
      onChange
    } = zinc,
    amber,
    basalt;
  amber = <MemoizedFormattedMessage {...{
    ...alpha.microphoneKey
  }} />;
  basalt = <MemoizedFormattedMessage {...{
    ...alpha.microphoneKeyDescription
  }} />;
  let cedar = umbra[mode],
    daisy = <DropdownTriggerButton>
        {<MemoizedFormattedMessage {...{
        ...cedar.label
      }} />}
      </DropdownTriggerButton>;
  let ember = CodexBrowserSurfaceActionType.options.map(item => {
    let flint = umbra[item];
    return <DropdownMenu.Item key={item} {...{
      allowWrap: true,
      onSelect: () => onChange(item),
      children: <div className="flex min-w-0 flex-col gap-0.5">
                <span className="truncate">
                  {<MemoizedFormattedMessage {...{
            ...flint.label
          }} />}
                </span>
                <span className="text-sm text-token-text-secondary">
                  {<MemoizedFormattedMessage {...{
            ...flint.description
          }} />}
                </span>
              </div>
    }} />;
  });
  return <EnsurePersonalizationCInit {...{
    label: amber,
    description: basalt,
    control: <DropdownMenuPopover {...{
      align: "end",
      contentWidth: "menuWide",
      triggerButton: daisy,
      children: ember
    }} />
  }} />;
}
var slate,
  timber,
  umbra,
  violet = esmInit(() => {
    slate = reactCompilerRuntime();
    strongMarkerFromOptions();
    ensureIntlFormattersInit();
    ensureDropdownMenuInit();
    AppInitialVC();
    ensureSettingsSectionTitleInit();
    bravo();
    umbra = {
      "push-to-talk": {
        label: alpha.microphoneKeyPushToTalk,
        description: alpha.microphoneKeyPushToTalkDescription
      },
      realtime: {
        label: alpha.microphoneKeyVoiceChat,
        description: alpha.microphoneKeyVoiceChatDescription
      }
    };
  });
export function CodexMicroSettings() {
  let garnet = appServices.codexMicro;
  if (garnet == null) return null;
  return <CodexMicroSettingsHelper19 {...{
    codexMicro: garnet
  }} />;
}
