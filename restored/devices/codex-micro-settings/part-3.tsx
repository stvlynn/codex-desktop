// Restored from ref/webview/assets/codex-micro-settings-OfPypdLl.js
// Wave5 stub-pass soft companions.
const HasSeenKnowledgeWorkAnnouncement: any = undefined;
const dataAppActionReviewFileExpanded: any = undefined;

// Wave FY — full polished body from `codex-micro-settings-OfPypdLl/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 55 (verified 127/182).
// Wave5d — FZ repair from fz-pascal L=5611 sus=56; JSX PascalCase + careful split.
// Wave5d careful split 3/10
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

// Wave5d soft stubs.
const AppInitialBB: any = undefined;
const AppInitialFM: any = undefined;
const AppInitialPM: any = undefined;
const AppInitialVT: any = undefined;
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
const deferredUiB: any = undefined;
const deferredUiH: any = undefined;
const deferredUiWX: any = undefined;
const deferredZft: any = undefined;
const parseUrlOrFallback: any = undefined;
const useChromeAndCodeThemeSync: any = undefined;
var marble,
  nickel,
  onyx = esmInit(() => {
    marble = reactCompilerRuntime();
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    findProcessManagerRow();
    useOpenLocatorInMainWindow();
  }),
  pearl,
  quartz = esmInit(() => {
    ensureIntlFormattersInit();
    pearl = identity({
      agentKeys: {
        id: "settings.codexMicro.agentKeys.label",
        defaultMessage: "Agent keys",
        description: "Label for choosing which tasks Codex Micro agent keys open"
      },
      customChats: {
        id: "settings.codexMicro.agentKeys.customChats",
        defaultMessage: "Custom assignments",
        description: "Option for assigning Codex Micro agent keys to individual tasks or actions"
      },
      customChatsDescription: {
        id: "settings.codexMicro.agentKeys.customChatsDescription",
        defaultMessage: "Choose a chat, shortcut, keycap, or skill for each key",
        description: "Explanation of the Codex Micro custom agent source"
      },
      connection: {
        id: "settings.codexMicro.connection.label",
        defaultMessage: "Connection",
        description: "Label for the Codex Micro connection state"
      },
      connectionFailed: {
        id: "settings.codexMicro.connection.connectionFailed",
        defaultMessage: "Connection failed",
        description: "Codex Micro status when the app cannot connect to a detected device"
      },
      connectionFailedDescription: {
        id: "settings.codexMicro.connection.connectionFailedDescriptionByDevice",
        defaultMessage: "Codex found your {deviceName} but couldn't connect. Codex is reconnecting automatically. If the problem continues, reconnect it and check whether a keyboard remapper or security tool is blocking access.",
        description: "Troubleshooting guidance shown when Codex cannot connect to a detected Codex Micro or Creator Micro"
      },
      connectionProblem: {
        id: "settings.codexMicro.connection.problem",
        defaultMessage: "Connection problem",
        description: "Fallback Codex Micro error status"
      },
      connectionProblemDescription: {
        id: "settings.codexMicro.connection.problemDescriptionByDevice",
        defaultMessage: "Codex couldn't communicate with your {deviceName}. Codex is reconnecting automatically. If the problem continues, reconnect it and try again.",
        description: "Fallback troubleshooting guidance for a Codex Micro or Creator Micro connection error"
      },
      discoveryFailed: {
        id: "settings.codexMicro.connection.discoveryFailed",
        defaultMessage: "Discovery failed",
        description: "Codex Micro status when device discovery fails"
      },
      discoveryFailedDescription: {
        id: "settings.codexMicro.connection.discoveryFailedDescriptionByDevice",
        defaultMessage: "Codex couldn't check for your {deviceName}. Codex will try again automatically. If the problem continues, reconnect the device or restart Codex.",
        description: "Troubleshooting guidance shown when Codex Micro or Creator Micro device discovery fails"
      },
      transportUnavailable: {
        id: "settings.codexMicro.connection.transportUnavailable",
        defaultMessage: "Connection interrupted",
        description: "Codex Micro status when an active device connection becomes unusable"
      },
      transportUnavailableDescription: {
        id: "settings.codexMicro.connection.transportUnavailableDescriptionByDevice",
        defaultMessage: "Codex lost communication with your {deviceName} and is reconnecting automatically. If your computer still shows the device and the problem continues, a keyboard remapper or security tool may be blocking access. Check that tool's device rules, reconnect {deviceName}, or contact IT if it is managed.",
        description: "Troubleshooting guidance shown when the Codex Micro or Creator Micro transport becomes unusable"
      },
      inputMonitoring: {
        id: "settings.codexMicro.inputMonitoring.label",
        defaultMessage: "Input Monitoring",
        description: "Label for the macOS Input Monitoring permission state"
      },
      microphoneKey: {
        id: "settings.codexMicro.microphoneKey.label",
        defaultMessage: "Microphone key",
        description: "Label for choosing how the Codex Micro microphone key works"
      },
      microphoneKeyDescription: {
        id: "settings.codexMicro.microphoneKey.description",
        defaultMessage: "Choose how the microphone key works",
        description: "Description for the Codex Micro microphone-key mode setting"
      },
      microphoneKeyPushToTalk: {
        id: "settings.codexMicro.microphoneKey.pushToTalk",
        defaultMessage: "Push to talk",
        description: "Option that uses the Codex Micro microphone key for dictation"
      },
      microphoneKeyPushToTalkDescription: {
        id: "settings.codexMicro.microphoneKey.pushToTalkDescription",
        defaultMessage: "Hold to dictate or double-tap to keep recording",
        description: "Explanation of the Codex Micro push-to-talk mode"
      },
      microphoneKeyVoiceChat: {
        id: "settings.codexMicro.microphoneKey.voiceChat",
        defaultMessage: "Voice Chat",
        description: "Option that uses the Codex Micro microphone key for Voice Chat"
      },
      microphoneKeyVoiceChatDescription: {
        id: "settings.codexMicro.microphoneKey.voiceChatDescription",
        defaultMessage: "Tap to start a Voice Chat or toggle your microphone, then hold to end",
        description: "Explanation of the Codex Micro Voice Chat mode"
      },
      microphoneKeyStartVoiceChat: {
        id: "settings.codexMicro.microphoneKey.startVoiceChat",
        defaultMessage: "Start a Voice Chat",
        description: "Codex Micro microphone key action for starting a Voice Chat"
      },
      keyboardLayout: {
        id: "settings.codexMicro.keyboardLayout.titleByDevice",
        defaultMessage: "{deviceName} Layout",
        description: "Heading for the Codex Micro or Creator Micro hardware layout preview"
      },
      knob: {
        id: "settings.codexMicro.knob.label",
        defaultMessage: "Knob",
        description: "Label for choosing what the Codex Micro knob controls"
      },
      knobDescription: {
        id: "settings.codexMicro.knob.description",
        defaultMessage: "Choose what turning the knob controls",
        description: "Description for the Codex Micro knob mode setting"
      },
      knobComposerNavigation: {
        id: "settings.codexMicro.knob.composerNavigation",
        defaultMessage: "Composer navigation",
        description: "Option for navigating composer controls with the Codex Micro knob"
      },
      knobComposerNavigationDescription: {
        id: "settings.codexMicro.knob.composerNavigationDescription",
        defaultMessage: "Move through composer controls and options",
        description: "Explanation of the Codex Micro composer navigation knob mode"
      },
      knobComposerNavigationTurnRight: {
        id: "settings.codexMicro.knob.composerNavigationTurnRight",
        defaultMessage: "Move to the previous control or option",
        description: "Action performed when turning the Codex Micro knob clockwise in composer navigation mode"
      },
      knobComposerNavigationTurnLeft: {
        id: "settings.codexMicro.knob.composerNavigationTurnLeft",
        defaultMessage: "Move to the next control or option",
        description: "Action performed when turning the Codex Micro knob counterclockwise in composer navigation mode"
      },
      knobComposerNavigationClick: {
        id: "settings.codexMicro.knob.composerNavigationClick",
        defaultMessage: "Open or select the highlighted control",
        description: "Action performed when clicking the Codex Micro knob in composer navigation mode"
      },
      knobReasoning: {
        id: "settings.codexMicro.knob.reasoning",
        defaultMessage: "Reasoning only",
        description: "Option for controlling reasoning effort with the Codex Micro knob"
      },
      knobReasoningDescription: {
        id: "settings.codexMicro.knob.reasoningDescription",
        defaultMessage: "Open and adjust reasoning effort",
        description: "Explanation of the Codex Micro reasoning-only knob mode"
      },
      knobReasoningTurnRight: {
        id: "settings.codexMicro.knob.reasoningTurnRight",
        defaultMessage: "Decrease reasoning effort",
        description: "Action performed when turning the Codex Micro knob clockwise in reasoning-only mode"
      },
      knobReasoningTurnLeft: {
        id: "settings.codexMicro.knob.reasoningTurnLeft",
        defaultMessage: "Increase reasoning effort",
        description: "Action performed when turning the Codex Micro knob counterclockwise in reasoning-only mode"
      },
      knobReasoningClick: {
        id: "settings.codexMicro.knob.reasoningClick",
        defaultMessage: "Open the slider or advanced options",
        description: "Action performed when clicking the Codex Micro knob in reasoning-only mode"
      },
      knobConversationScroll: {
        id: "settings.codexMicro.knob.conversationScroll",
        defaultMessage: "Conversation scrolling",
        description: "Option for scrolling the active conversation with the Codex Micro knob"
      },
      knobConversationScrollDescription: {
        id: "settings.codexMicro.knob.conversationScrollDescription",
        defaultMessage: "Scroll through the active conversation",
        description: "Explanation of the Codex Micro conversation-scrolling knob mode"
      },
      knobConversationScrollTurnRight: {
        id: "settings.codexMicro.knob.conversationScrollTurnRight",
        defaultMessage: "Scroll down the conversation",
        description: "Action performed when turning the Codex Micro knob clockwise in conversation-scrolling mode"
      },
      knobConversationScrollTurnLeft: {
        id: "settings.codexMicro.knob.conversationScrollTurnLeft",
        defaultMessage: "Scroll up the conversation",
        description: "Action performed when turning the Codex Micro knob counterclockwise in conversation-scrolling mode"
      },
      knobConversationScrollClick: {
        id: "settings.codexMicro.knob.conversationScrollClick",
        defaultMessage: "Jump to the latest message",
        description: "Action performed when clicking the Codex Micro knob in conversation-scrolling mode"
      },
      lightingBrightness: {
        id: "settings.codexMicro.lightingBrightness.label",
        defaultMessage: "Brightness",
        description: "Label for the Codex Micro lighting brightness setting"
      },
      lightingBrightnessDescription: {
        id: "settings.codexMicro.lightingBrightness.descriptionByDevice",
        defaultMessage: "Adjusts the brightness of all {deviceName} lighting",
        description: "Description for the Codex Micro or Creator Micro lighting brightness setting"
      },
      lightingAutoOff: {
        id: "settings.codexMicro.lightingAutoOff.label",
        defaultMessage: "Auto-dim",
        description: "Label for the Codex Micro lighting auto-dim setting"
      },
      lightingAutoOffDescription: {
        id: "settings.codexMicro.lightingAutoOff.descriptionByDevice",
        defaultMessage: "Turns lighting off after inactivity and back on when you use {deviceName} or an agent key changes color or state",
        description: "Description for the Codex Micro or Creator Micro lighting auto-dim setting"
      },
      lightingAutoOffOff: {
        id: "settings.codexMicro.lightingAutoOff.off",
        defaultMessage: "Off",
        description: "Option that keeps Codex Micro lighting on indefinitely"
      },
      lightingAutoOff30Seconds: {
        id: "settings.codexMicro.lightingAutoOff.thirtySeconds",
        defaultMessage: "30 seconds",
        description: "Codex Micro lighting auto-off interval of 30 seconds"
      },
      lightingAutoOff1Minute: {
        id: "settings.codexMicro.lightingAutoOff.oneMinute",
        defaultMessage: "1 minute",
        description: "Codex Micro lighting auto-off interval of 1 minute"
      },
      lightingAutoOff3Minutes: {
        id: "settings.codexMicro.lightingAutoOff.threeMinutes",
        defaultMessage: "3 minutes",
        description: "Codex Micro lighting auto-off interval of 3 minutes"
      },
      lightingAutoOff10Minutes: {
        id: "settings.codexMicro.lightingAutoOff.tenMinutes",
        defaultMessage: "10 minutes",
        description: "Codex Micro lighting auto-off interval of 10 minutes"
      },
      lightingAutoOff30Minutes: {
        id: "settings.codexMicro.lightingAutoOff.thirtyMinutes",
        defaultMessage: "30 minutes",
        description: "Codex Micro lighting auto-off interval of 30 minutes"
      },
      lightingAutoOff1Hour: {
        id: "settings.codexMicro.lightingAutoOff.oneHour",
        defaultMessage: "1 hour",
        description: "Codex Micro lighting auto-off interval of 1 hour"
      },
      pinnedChats: {
        id: "settings.codexMicro.agentKeys.pinnedChats",
        defaultMessage: "Pinned chats",
        description: "Option for mapping Codex Micro agent keys to pinned tasks"
      },
      pinnedChatsDescription: {
        id: "settings.codexMicro.agentKeys.pinnedChatsDescription",
        defaultMessage: "First six chats in Pinned",
        description: "Explanation of the Codex Micro pinned tasks agent source"
      },
      priorityChats: {
        id: "settings.codexMicro.agentKeys.priorityChats",
        defaultMessage: "Priority chats",
        description: "Option for mapping Codex Micro agent keys to priority tasks"
      },
      priorityChatsDescription: {
        id: "settings.codexMicro.agentKeys.priorityChatsDescription",
        defaultMessage: "Waiting, unread, and active chats first",
        description: "Explanation of the Codex Micro priority tasks agent source"
      },
      recentChats: {
        id: "settings.codexMicro.agentKeys.recentChats",
        defaultMessage: "Most recent chats",
        description: "Option for mapping Codex Micro agent keys to the most recently updated tasks"
      },
      recentChatsDescription: {
        id: "settings.codexMicro.agentKeys.recentChatsDescription",
        defaultMessage: "First six recently updated chats, pinned or unpinned",
        description: "Explanation of the Codex Micro most recent tasks agent source"
      }
    });
  });
function river(yellow) {
  let {
      data = [],
      isLoading
    } = recentConversationsMetaQueryKey(),
    {
      remoteConnections
    } = getEnabledRemoteConnectionState(),
    zinc = AppInitialBB(remoteConnections) ?? [],
    {
      data: _data
    } = CodexPluginActionResult(composerConnectorauthReconnectMessages),
    amber = CodexPluginActionResult(AppInitialVT),
    basalt = yellow.trim();
  let cedar = basalt,
    daisy = Chatgpt2(cedar, xenon),
    ember = [LOCAL_HOST_ID, ...zinc.map(timber).sort(slate)],
    {
      data: __data,
      isFetching
    } = useQuery({
      queryKey: ["codex-micro-custom-thread-search", ember, daisy],
      queryFn: async () => (await Promise.allSettled(ember.map(async item => (await canonicalizeWorkspacePathKey("search-threads-for-host", {
        hostId: item,
        query: daisy,
        limit: willow
      })).map(_item => ({
        hostId: item,
        result: _item
      }))))).flatMap($n),
      enabled: daisy.length > 0,
      staleTime: readScrollTop.THIRTY_SECONDS
    }),
    flint = daisy === cedar,
    garnet = isLoading || cedar.length > 0 && (!flint || isFetching),
    hazel = umbra({
      asyncResults: flint ? __data : undefined,
      cloudTasks: _data,
      conversationsMeta: data,
      hostIds: new Set(ember),
      projectLabelByThreadKey: amber,
      query: cedar,
      limit: willow
    });
  return {
    loading: garnet,
    options: hazel
  };
}
function $n(ivory) {
  return ivory.status === "fulfilled" ? ivory.value : [];
}
function slate(jasper, kelp) {
  return jasper.localeCompare(kelp);
}
function timber(lotus) {
  return lotus.hostId;
}
function umbra({
  asyncResults,
  cloudTasks,
  conversationsMeta,
  hostIds,
  limit,
  projectLabelByThreadKey,
  query
}) {
  let mint = AppInitialFM({
      cloudTasks,
      conversationsMeta,
      hostIds,
      projectLabelByThreadKey
    }),
    nova = query.length === 0 ? [...mint].sort((prism, quill) => quill.updatedAt - prism.updatedAt).slice(0, limit) : AppInitialPM({
      asyncResults: asyncResults?.map(({
        result
      }) => result) ?? [],
      loadedChatSearchResults: mint,
      limit,
      query
    }),
    olive = new Map(conversationsMeta.map(item => [item.id, item.hostId ?? "local"]));
  for (let {
    hostId,
    result
  } of asyncResults ?? []) olive.set(result.threadId, hostId);
  return nova.flatMap(item => item.kind === "chatgpt" ? [] : [{
    assignment: {
      hostId: item.kind === "local" ? olive.get(item.threadId) ?? "local" : null,
      threadKey: item.threadKey,
      title: item.title?.trim() || item.searchTitle
    },
    result: item
  }]);
}
var violet,
  willow,
  xenon,
  or = esmInit(() => {
    violet = reactCompilerRuntime();
    serializeCharacterReferenceNode();
    ensureComposerEsm_MT_Init();
    deferredUiWX();
    MenuBorderSeparator();
    AppActionSelector();
    VerticalScrollFadeMask();
    ensureRemoteConnectionsFeatureInit();
    ensureAppShellAtomsInit();
    REMOTE_CONTROL_PAIRING_FEATURE_GATE_ID();
    remote();
    dataAppActionReviewFileExpanded();
    HasSeenKnowledgeWorkAnnouncement();
    willow = 30;
    xenon = 150;
  });
