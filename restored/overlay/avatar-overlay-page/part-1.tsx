// Restored from ref/webview/assets/avatar-overlay-page--lFBkhmD.js
// Wave FY — full polished body from `avatar-overlay-page--lFBkhmD/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 39 (verified 132/171).
// Careful split 1/3
/* split-lane-import-depth:1 */

import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CODEX_APPSHOT_SHORTCUT_CHANGED_TYPE } from "../../analytics/codex-appshot-shortcut-changed-type";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CODEX_LOGIN_SUCCESS_TYPE } from "../../analytics/codex-login-success-type";
import { CODEX_ONBOARDING_WORKSPACE_CONTINUE_CLICKED_TYPE } from "../../analytics/codex-onboarding-workspace-continue-clicked-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexPluginPageName } from "../../analytics/codex-plugin-page-name";
import { NOOP_ANALYTICS_CLIENT } from "../../analytics/noop-analytics-client";
import { AvatarOverlayPillDismissButton, AvatarOverlayPillDismissButtonAction, AvatarOverlayPillDismissButtonLabel, AvatarOverlayPillDismissButtonMark, AvatarOverlayPillDismissButtonOption, AvatarOverlayPillDismissButtonTrigger, avatarOverlayPillDismissButtonValue, dismissAvatarOverlayPill, ensureAvatarOverlayPillDismissButtonAtomsInit, ensureAvatarOverlayPillDismissButtonHelpersInit, ensureAvatarOverlayPillDismissButtonIconsInit, ensureAvatarOverlayPillDismissButtonInit, ensureAvatarOverlayPillDismissButtonStylesInit, ensureAvatarOverlayPillDismissButtonUiInit, ensureAvatarOverlayPillDismissButtonYieldInit, formatAvatarOverlayPillDismiss, getAvatarOverlayPillDismissState, renderAvatarOverlayPillDismissButton } from "../../artifact/avatar-overlay-pill-dismiss-button";
import { ensureCodexSpriteAssetsInit } from "../../assets/ensure-codex-sprite-assets-init";
import { AvatarMascotButton, ensureAvatarMascotButtonInit } from "../../avatar/avatar-mascot-button";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../../conversation/conversation-page-esm-inits";
import { getPersistedAtomItem } from "../../boundaries/persisted-atom-store";
import { jsxRuntime as getJsxRuntime, react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { Chatgpt2 } from "../../browser/chatgpt2";
import { buildMcpToolApprovalResult } from "../../composer/mcp-tool-approval-result";
import { CHATGPT_PRODUCT_ID } from "../../config/chatgpt-product-id";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { activeTurnsOrNull } from "../../conversation/active-turns-or-null";
import { applyActive } from "../../conversation/apply-active";
import { recentConversationsMetaQueryKey } from "../../conversation/recent-conversations-meta-query-key";
import { subAgentFromThreadSource } from "../../conversation/sub-agent-source-from-thread-source";
import { avatarOverlayMascotAspectRatio, avatarOverlayMascotWidthStyle, clampAvatarOverlayMascotWidthPx, defaultAvatarOverlayMascotWidthPx, ensureAvatarOverlayMascotSizeInit, useAvatarOverlayMascotSize } from "../../desktop/avatar-overlay-mascot-size";
import { buildCodexDesktopRequestHeaders } from "../../desktop/codex-desktop-request-headers";
import { createDictationTranscriptSession } from "../../dictation/create-dictation-transcript-session";
import { ensureRemoteSshConnectionEventInit } from "../../environments/ensure-remote-ssh-connection-event-init";
import { ensureUseFloatingWindowPointerInteractivityInit, useFloatingWindowPointerInteractivity } from "../../hooks/use-floating-window-pointer-interactivity";
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconCct } from "../../icons/app-icon-cct";
import { AppIconMlt } from "../../icons/app-icon-mlt";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconYlt } from "../../icons/app-icon-ylt";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { BrowserTabMediaIcon } from "../../icons/browser-tab-media-icon";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { findSidebarSectionElement, writeScrollTop } from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { isOpenaiCuratedMarketplaceToken } from "../../plugins/is-openai-curated-marketplace-token";
import { pluginMarketplaceRequestFields } from "../../plugins/plugin-marketplace-request-fields";
import { isPleaseImplementThisPlan } from "../../prompts/is-please-implement-this-plan";
import { PLEASE_IMPLEMENT_THIS_PLAN_HEADER } from "../../prompts/please-implement-this-plan-header";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureHooksQueriesInit, writeHooksStateMutationAtom } from "../../settings/hooks-query-atoms";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { useBrowserExtensionPluginSetupQuery } from "../../skills/use-browser-extension-plugin-setup-query";
import { BulletSeparator } from "../../ui/bullet-separator";
import { DeferredUi2 } from "../../ui/deferred-ui2";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { EnsureRealtimeVoiceHandoffTargetInit, RealtimeVoiceHandoffTarget } from "../../ui/realtime-voice-handoff-target";
import { ScrollingOrbBackdrop } from "../../ui/scrolling-orb-backdrop";
import { createResizeObserver, ensureCreateResizeObserverInit } from "../../utils/create-resize-observer";
import { Identity } from "../../utils/identity";
import { nonEmptyTrimmedStringOrNull } from "../../utils/non-empty-trimmed-string-or-null";
import { ParseErrorMessageDetail } from "../../utils/parse-error-message-detail";
import { replaceInMemoryStorageEntries } from "../../utils/replace-in-memory-storage-entries";
import { ensureSettingsGlyphNltInit } from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import { REALTIME_VOICE_MODE_ID } from "../../voice/realtime-voice-mode-id";
import { AnnotationFocusMode } from "../annotation-focus-mode";
import { buildAvatarOverlayAnalyticsPayload } from "../build-avatar-overlay-analytics-payload";
import { avatarOverlaySelectionA, avatarOverlaySelectionB, avatarOverlaySelectionD, avatarOverlaySelectionF, avatarOverlaySelectionG, avatarOverlaySelectionH, avatarOverlaySelectionI, avatarOverlaySelectionL, avatarOverlaySelectionM, avatarOverlaySelectionN, avatarOverlaySelectionO, avatarOverlaySelectionP, avatarOverlaySelectionR, avatarOverlaySelectionT, avatarOverlaySelectionU, avatarOverlaySelectionUpperC, avatarOverlaySelectionUpperS, avatarOverlaySelectionV, avatarOverlaySelectionX, avatarOverlaySelectionY } from "../use-avatar-overlay-selection";

// Cross-part stubs (same-package helpers live in sibling parts).
const $n: any = undefined;
const AvatarOverlayPageHelper12: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const falcon: any = undefined;
const gamma: any = undefined;
const harbor: any = undefined;
const indigo: any = undefined;
const NativeContextMenuSurface: any = undefined;
/** Wave FY unresolved companion (missing-export:hosts/needs-apps.ts) */
const NeedsApps: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureComposerScrollBufferInit@composer/ensure-composer-scroll-buffer-init.ts) */
const AppInitialFct: any = undefined;
/** Wave FY unresolved companion (jsx-collision:useOpenLocatorInMainWindow@navigation/use-open-locator-in-main-window.ts) */
const AppInitialG: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureImportSettingsGctInit@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialGct: any = undefined;
/** Wave FY unresolved companion (missing-export:worktrees/resolve-stable-worktree-status.ts) */
const resolveStableWorktreeStatus: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredUiH@ui/deferred-ui-h.ts) */
const AppInitialH: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredUiH9@ui/deferred-ui-h9.ts) */
const AppInitialH9: any = undefined;
/** Wave FY unresolved companion (jsx-collision:getChromeGlobal@browser/get-chrome-global.ts) */
const AppInitialHct: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredUiHk@ui/deferred-ui-hk.tsx) */
const AppInitialHk: any = undefined;
/** Wave FY unresolved companion (jsx-collision:wrapMcpToolCallResult@mcp/wrap-mcp-tool-call-result.ts) */
const AppInitialHot: any = undefined;
/** Wave FY unresolved companion (missing-export:hosts/list-permission-profiles.tsx) */
const ListPermissionProfiles: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostId: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/formatted-message.tsx) */
const FormattedMessage: any = undefined;
/** Wave FY unresolved companion (missing-export:boundaries/browser-use-ui-facades.tsx) */
const SettingsSectionChrome: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureImmerRuntime@vendor/immer.ts) */
const AppInitialM9: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/set-local-storage-item.ts) */
const setLocalStorageItem: any = undefined;
/** Wave FY unresolved companion (jsx-collision:readSharedObjectSnapshotValue@utils/read-shared-object-snapshot-value.ts) */
const AppInitialMot: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-n2.tsx) */
const DeferredUiN2: any = undefined;
/** Wave FY unresolved companion (missing-export:desktop/use-selected-avatar.ts) */
const ensureUseSelectedAvatarInit: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/composer-scope.ts) */
const composerScope: any = undefined;
/** Wave FY unresolved companion (missing-export:plugins/install.tsx) */
const Install: any = undefined;
/** Wave FY unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurfaceStub: any = undefined;
/** Wave FY unresolved companion (jsx-collision:applySvg2@git/apply-svg2.tsx) */
const AppInitialSct: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredUiU@ui/deferred-ui-u.ts) */
const AppInitialU: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-v2.tsx) */
const DeferredUiV2: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureCloudApiClientInit@settings/cloud-api-client.ts) */
const AppInitialVct: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FY unresolved companion (missing-export:desktop/rpc.ts) */
const initializeAppHostServices: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-wx.ts) */
const deferredUiWX: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-x9.ts) */
const deferredUiX9: any = undefined;
/** Wave FY unresolved companion (jsx-collision:applyActive2@conversation/apply-active2.ts) */
const AppInitialXct: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-yot.tsx) */
const DeferredYot: any = undefined;
/** Wave FY unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const readLoginRouteQuerySnapshot: any = undefined;
/** Wave FY unresolved companion (sib-missing:artifact/avatar-overlay-pill-dismiss-button.tsx) */
const avatarOverlayPillDismissButtonUnderscore: any = undefined;
/** Wave FY unresolved companion (sib-missing:overlay/use-avatar-overlay-selection.ts) */
const useAvatarOverlaySelectionUnderscore: any = undefined;
/** Wave FY unresolved companion (sib-missing:desktop/avatar-overlay-debug-state.ts) */
const avatarOverlayDebugStateIState: any = undefined;
/** Wave FY unresolved companion (sib-missing:desktop/avatar-overlay-debug-state.ts) */
const avatarOverlayDebugStateRState: any = undefined;
/** Wave FY unresolved companion (sib-missing:desktop/avatar-overlay-debug-state.ts) */
const avatarOverlayDebugStateTState: any = undefined;
function jade({
  conversationId,
  hostId,
  intl,
  resolvedApps,
  status,
  turnKey,
  updatedAtMs
}) {
  let yellow = avatarOverlaySelectionB({
    intl,
    resolvedApps,
    status
  });
  return yellow == null ? null : {
    action: null,
    body: "",
    controlTarget: null,
    expiresAtMs: null,
    id: "realtime-codex-activity",
    isLoading: true,
    kind: "activity",
    level: "info",
    localConversationId: conversationId,
    notificationPreferenceId: isPleaseImplementThisPlan(conversationId, hostId),
    source: hostId === "local" ? "local" : "remote-host",
    title: yellow,
    turnKey,
    updatedAtMs,
    usesLiveConversationState: false,
    waitingRequest: null
  };
}
var _n = esmInit(() => {
  activeTurnsOrNull();
  ensureAppShellAtomsInit();
  avatarOverlaySelectionX();
});
function kite({
  attention
}) {
  return attention.map(item => ({
    action: {
      path: item.route
    },
    body: item.message,
    controlTarget: item.controlTarget,
    expiresAtMs: avatarOverlaySelectionA(item.kind === "input-required" ? "waiting" : "failed", item.updatedAtMs),
    id: item.id,
    isLoading: false,
    kind: "attention",
    level: item.kind === "input-required" ? "warning" : "danger",
    localConversationId: item.localConversationId,
    notificationPreferenceId: item.id,
    source: item.source,
    title: item.kind === "input-required" && item.request != null ? dismissAvatarOverlayPill(item.title, item.request) : item.title,
    turnKey: item.turnKey,
    updatedAtMs: item.updatedAtMs,
    waitingRequest: item.request
  }));
}
var lemon = esmInit(() => {
  avatarOverlaySelectionO();
  ensureAvatarOverlayPillDismissButtonAtomsInit();
});
function marble(zinc) {
  return zinc.flatMap(item => item.status !== "waiting" && item.status !== "failed" ? [] : [{
    controlTarget: item.controlTarget,
    id: item.key,
    kind: item.status === "waiting" ? "input-required" : "failed",
    localConversationId: item.localConversationId,
    message: item.subtitle,
    request: item.status === "waiting" ? item.waitingRequest : null,
    route: item.actionPath,
    source: item.source,
    title: item.title,
    turnKey: item.turnKey,
    updatedAtMs: item.updatedAtMs
  }]);
}
var nickel = esmInit(() => {});
function AvatarOverlayPageHelper4(amber) {
  let {
      className,
      areControlsVisible = false,
      canRevealControls = true,
      canStart,
      isRealtimeVoiceSurfaceVisible = false,
      isMicrophoneMuted = false,
      isMuted = false,
      onStart,
      onStop,
      onOpenThread,
      onToggleMicrophoneMute,
      onToggleMute,
      phase,
      willResume: basalt = false
    } = amber,
    cedar = useIntl(),
    daisy = phase !== "inactive",
    ember = phase === "starting",
    flint = phase === "stopping";
  if (!daisy && !canStart) return null;
  let garnet = phase === "active",
    hazel = garnet && onToggleMicrophoneMute != null && onToggleMute != null,
    ivory = canRevealControls ? "group-hover:pointer-events-auto group-hover:opacity-100 group-has-[:focus-visible]:pointer-events-auto group-has-[:focus-visible]:opacity-100" : null;
  if (hazel) {
    let topaz = IntlProvider("no-drag absolute bottom-0 left-1/2 z-40 flex -translate-x-1/2 items-center gap-0.5 rounded-full border border-token-border bg-token-main-surface-primary p-0.5 text-token-text-secondary shadow-lg shadow-black/20 backdrop-blur-sm forced-colors:bg-[Canvas] forced-colors:backdrop-blur-none [@media(prefers-reduced-transparency:reduce)]:backdrop-blur-none", className, areControlsVisible ? "pointer-events-auto opacity-100" : ["pointer-events-none opacity-0", ivory]);
    let ultra = cedar.formatMessage(isMuted ? quartz.unmuteOutput : quartz.muteOutput);
    let vapor = isMuted ? quartz.unmuteOutput : quartz.muteOutput,
      wheat = <MemoizedFormattedMessage {...vapor} />;
    let yarn = isMuted ? <ScrollingOrbBackdrop className="icon-xs" /> : <BrowserTabMediaIcon className="icon-xs" />;
    let zephyr = <AvatarOverlayPageHelper5 ariaLabel={ultra} isPressed={isMuted} tooltipContent={wheat} onClick={onToggleMute}>{yarn}</AvatarOverlayPageHelper5>;
    let acorn = cedar.formatMessage(isMicrophoneMuted ? quartz.unmuteMicrophone : quartz.muteMicrophone);
    let bloom = isMicrophoneMuted ? quartz.unmuteMicrophone : quartz.muteMicrophone,
      coral = <MemoizedFormattedMessage {...bloom} />;
    let drift = isMicrophoneMuted ? <AppInitialHct className="icon-xs" /> : <AppIconMlt className="icon-xs" />;
    let eagle = <AvatarOverlayPageHelper5 ariaLabel={acorn} isPressed={isMicrophoneMuted} tooltipContent={coral} onClick={onToggleMicrophoneMute}>{drift}</AvatarOverlayPageHelper5>;
    let frost = cedar.formatMessage(quartz.stop);
    let glide = <MemoizedFormattedMessage {...quartz.stop} />;
    let honey = () => {
      onStop?.();
    };
    let iris = <Chatgpt2 className="icon-xs" />;
    let jewel = <AvatarOverlayPageHelper5 ariaLabel={frost} className="!bg-token-charts-blue !text-white hover:!bg-token-charts-blue/90 active:!bg-token-charts-blue/80" tooltipContent={glide} onClick={honey}>{iris}</AvatarOverlayPageHelper5>;
    let knoll;
    return <div className={topaz} data-avatar-overlay-hit-region="realtime-voice">{zephyr}{eagle}{jewel}</div>;
  }
  let jasper = ember ? quartz.starting : garnet && onOpenThread != null ? quartz.openThread : daisy ? quartz.stop : basalt ? quartz.resume : quartz.start,
    kelp = <MemoizedFormattedMessage {...jasper} />;
  let lotus = cedar.formatMessage(jasper);
  let mint = ember || flint,
    nova = ember || flint ? "cursor-default" : "cursor-interaction",
    olive = garnet && !isRealtimeVoiceSurfaceVisible ? "bg-token-charts-blue text-white hover:bg-token-charts-blue/90 active:bg-token-charts-blue/80" : "bg-token-main-surface-primary text-token-text-secondary hover:text-token-foreground",
    prism = IntlProvider("group/voice-action no-drag absolute bottom-0 left-0 z-40 flex size-8 items-center justify-center rounded-full border border-token-border shadow-lg shadow-black/20 backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none forced-colors:bg-[Canvas] forced-colors:backdrop-blur-none [@media(prefers-reduced-transparency:reduce)]:backdrop-blur-none", className, nova, olive, daisy && !isRealtimeVoiceSurfaceVisible ? "opacity-100" : areControlsVisible ? "pointer-events-auto opacity-100" : ["pointer-events-none opacity-0 focus-visible:pointer-events-auto focus-visible:opacity-100", ivory]);
  let quill = event => {
    if (event.stopPropagation(), garnet && onOpenThread != null) {
      onOpenThread();
      return;
    }
    daisy ? onStop?.() : onStart?.();
  };
  let reef = flint || (isRealtimeVoiceSurfaceVisible || onOpenThread == null) && garnet ? <Chatgpt2 className="icon-xs" /> : ember ? <VSCODE_EDITOR_ID className="icon-xs" /> : <NeedsApps className="icon-xs" />;
  let sage = <button type="button" aria-label={lotus} disabled={mint} className={prism} data-avatar-overlay-hit-region="realtime-voice" onClick={quill}>{reef}</button>;
  return <OptionalTooltip tooltipContent={kelp}>{sage}</OptionalTooltip>;
}
function AvatarOverlayPageHelper5(lunar) {
  let {
      ariaLabel,
      children,
      className,
      isPressed,
      onClick,
      tooltipContent
    } = lunar,
    moss = isPressed && "bg-token-foreground/10 text-token-foreground",
    north = IntlProvider("flex size-7 cursor-interaction items-center justify-center rounded-full text-token-text-secondary hover:bg-token-foreground/10 hover:text-token-foreground focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none", moss, className);
  let orbit = event => {
    event.stopPropagation();
    onClick();
  };
  let pine = <button type="button" aria-label={ariaLabel} aria-pressed={isPressed} className={north} onClick={orbit}>{children}</button>;
  return <OptionalTooltip tooltipContent={tooltipContent}>{pine}</OptionalTooltip>;
}
var onyx,
  pearl,
  quartz,
  river = esmInit(() => {
    onyx = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureIntlFormattersInit();
    ensureComposerEsm_Sut_Init();
    ensureComposerEsm_Hlt_Init();
    AppInitialGct();
    ensureSettingsGlyphNltInit();
    createDictationTranscriptSession();
    AppInitialHk();
    AppInitialVct();
    ensureConversationPageEsm_Act_Init();
    pearl = getJsxRuntime();
    quartz = Identity({
      start: {
        id: "avatarOverlay.startRealtimeVoice",
        defaultMessage: "Start new voice chat",
        description: "Accessible label and tooltip for starting a new voice chat from the floating avatar"
      },
      resume: {
        id: "avatarOverlay.resumeRealtimeVoice",
        defaultMessage: "Resume voice chat",
        description: "Accessible label and tooltip for resuming the most recent voice chat from the floating avatar"
      },
      stop: {
        id: "avatarOverlay.stopRealtimeVoice",
        defaultMessage: "Stop voice chat",
        description: "Accessible label and tooltip for stopping realtime voice from the floating avatar"
      },
      starting: {
        id: "avatarOverlay.startingRealtimeVoice",
        defaultMessage: "Starting voice chat",
        description: "Accessible label and tooltip while realtime voice starts from the floating avatar"
      },
      openThread: {
        id: "avatarOverlay.openRealtimeVoiceThread",
        defaultMessage: "Open voice chat",
        description: "Accessible label and tooltip for opening the detailed Codex task from realtime voice"
      },
      muteMicrophone: {
        id: "avatarOverlay.muteMicrophone",
        defaultMessage: "Mute microphone",
        description: "Accessible label and tooltip for muting microphone input from the floating avatar"
      },
      unmuteMicrophone: {
        id: "avatarOverlay.unmuteMicrophone",
        defaultMessage: "Unmute microphone",
        description: "Accessible label and tooltip for unmuting microphone input from the floating avatar"
      },
      muteOutput: {
        id: "avatarOverlay.muteOutput",
        defaultMessage: "Mute voice chat",
        description: "Accessible label and tooltip for showing realtime voice output as captions from the floating avatar"
      },
      unmuteOutput: {
        id: "avatarOverlay.unmuteOutput",
        defaultMessage: "Unmute voice chat",
        description: "Accessible label and tooltip for resuming realtime voice audio output from the floating avatar"
      }
    });
  });
function AvatarOverlayPageHelper6(quest) {
  let {
      prefersReducedMotion,
      shouldInsetForScrollbar = false,
      text
    } = quest,
    ridge = timber.useRef(null),
    storm = () => {
      let elm = ridge.current;
      elm != null && (elm.scrollTop = elm.scrollHeight);
    };
  let tide;
  tide = [text];
  timber.useLayoutEffect(storm, tide);
  let unity = {
    height: "auto",
    opacity: 1
  };
  let vale = shouldInsetForScrollbar && "[scrollbar-gutter:stable]",
    wave = IntlProvider("no-drag w-full min-w-0 shrink-0 overflow-hidden px-1.5 text-left", vale);
  let apex = prefersReducedMotion ? false : {
    height: 0,
    opacity: 0
  };
  let brook = prefersReducedMotion ? {
    duration: 0
  } : {
    duration: 0.18,
    ease: [0.16, 1, 0.3, 1]
  };
  let cliff = IntlProvider("relative z-[1] overflow-hidden rounded-[18px] px-3 py-2 forced-colors:bg-[Canvas]", avatarOverlayPillDismissButtonValue.cssMaterial);
  let dusk = <div className={cliff}><div ref={ridge} className="text-size-chat-sm h-12 overflow-hidden leading-4 break-words whitespace-pre-wrap text-token-foreground">{text}</div></div>;
  return <ensureIntlFormattersInit.div aria-live="polite" animate={unity} className={wave} data-avatar-overlay-size="notification-tray-caption" initial={apex} role="status" transition={brook}>{dusk}</ensureIntlFormattersInit.div>;
}
var slate,
  timber,
  umbra,
  violet = esmInit(() => {
    slate = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    useBrowserExtensionPluginSetupQuery();
    timber = commonJsInit(react(), 1);
    ensureAvatarOverlayPillDismissButtonYieldInit();
    umbra = getJsxRuntime();
  });
function willow({
  avatar,
  avatarMenuItems,
  debugWindowBorderVisible = false,
  interactiveRegionRef,
  isDragging = false,
  isNotificationTrayOpen = true,
  realtimeVoiceSurface,
  layout,
  mascotLayout = layout.mascot,
  mascotStyle,
  mascotDragState,
  mascotResizeHandle,
  notifications,
  onLostPointerCapture,
  onCloseNotificationTray,
  onPointerCancel,
  onPointerDown,
  onPointerMove: fern,
  onPointerUp,
  onDismissNotification,
  onOpenNotificationActions,
  onRunNotificationAction,
  onSubmitQuestionOption,
  onNotificationReplyEditorActiveChange,
  onOpenNotificationReply,
  onSubmitNotificationReply,
  onOpenNotificationTray
}) {
  let grove = useIntl(),
    hill = replaceInMemoryStorageEntries(),
    isle = AvatarOverlayPillDismissButtonMark(notifications[0]),
    juniper = notifications.length > 0,
    lagoon = realtimeVoiceSurface?.phase ?? "inactive",
    meadow = renderAvatarOverlayPillDismissButton(realtimeVoiceSurface?.isSessionActive ?? false, lagoon !== "inactive"),
    nest = meadow === "voice-orb",
    oak = meadow === "hidden",
    petal = meadow === "pet" ? mascotLayout : {
      ...mascotLayout,
      height: 121,
      width: ensureAvatarOverlayMascotSizeInit
    },
    [quiet, rain] = echo.useState(null),
    [seed, trail] = echo.useState(null);
  writeScrollTop("avatar-overlay-computer-use-cursor-changed", ink => {
    rain(ink.point);
  });
  let urn = seed ?? quiet,
    vine = urn == null ? null : getAvatarOverlayPillDismissState(petal, urn, avatar.spriteVersionNumber),
    wind = juniper && isNotificationTrayOpen,
    yarrow = realtimeVoiceSurface?.controlsHovered === true && !isDragging,
    azure = realtimeVoiceSurface?.caption ?? null,
    birch = wind || azure != null,
    canyon = juniper || birch,
    dew = layout.placement.startsWith("top"),
    ever = notifications.length > 1,
    field = layout.tray == null ? undefined : Math.max(0, layout.tray.height),
    grain;
  wind ? grain = {
    ariaLabel: grove.formatMessage(gamma.collapseNotificationTray),
    backgroundColor: "var(--color-token-bg-primary)",
    content: <AppIconSft className="icon-xs opacity-80" />,
    foregroundColor: "var(--color-token-text-secondary)",
    onClick: onCloseNotificationTray
  } : juniper && (grain = {
    ariaLabel: grove.formatMessage({
      id: "avatarOverlay.toggleNotificationTray",
      defaultMessage: "Open activity tray, {count, plural, one {# item} other {# items}}",
      description: "Accessible label for the floating avatar activity count button"
    }, {
      count: notifications.length
    }),
    backgroundColor: isle.badgeBackgroundColor,
    content: notifications.length,
    foregroundColor: isle.badgeForegroundColor,
    onClick: onOpenNotificationTray
  });
  let haven = <AvatarMascotButton ariaLabel={grove.formatMessage(gamma.mascotLabel, {
    petName: avatar.displayName
  })} assetRef={avatar.assetRef} lookFrame={isDragging ? null : vine} spriteVersionNumber={avatar.spriteVersionNumber} spritesheetUrl={avatar.spritesheetUrl} notificationBadge={grain} resizeHandle={mascotResizeHandle == null ? undefined : {
    ariaLabel: grove.formatMessage(gamma.resizeMascot),
    ...mascotResizeHandle
  }} state={isle.mascotState} style={mascotStyle} transientState={mascotDragState} />;
  return <main className={IntlProvider("relative h-screen w-screen overflow-hidden bg-transparent", debugWindowBorderVisible && "-outline-offset-2 outline-2 outline-[#ff0000]")} data-avatar-overlay-debug-window-border={debugWindowBorderVisible || undefined}><section ref={interactiveRegionRef} data-avatar-overlay-content-frame="true" className="relative h-full w-full cursor-grab active:cursor-grabbing" onLostPointerCapture={onLostPointerCapture} onPointerCancel={onPointerCancel} onPointerDown={onPointerDown} onPointerMove={fern} onPointerUp={onPointerUp}>{canyon ? <div aria-hidden={birch ? undefined : true} data-avatar-overlay-hit-region="notification-tray" inert={!birch} className={IntlProvider("absolute flex cursor-interaction text-sm text-token-foreground", dew ? "items-end" : "items-start")} style={{
        height: layout.tray?.height,
        left: layout.tray?.left,
        pointerEvents: birch ? undefined : "none",
        top: layout.tray?.top,
        visibility: layout.tray == null ? "hidden" : undefined,
        width: layout.tray?.width
      }}>{<ensureIntlFormattersInit.div animate={{
          opacity: +!!birch
        }} className="relative w-full overflow-hidden [corner-shape:var(--codex-corner-shape)]" data-avatar-overlay-size="notification-tray" initial={false} style={ever ? {
          maxHeight: field
        } : undefined} transition={hill ? {
          duration: 0
        } : {
          duration: 0.18,
          ease: "easeOut"
        }}><div className="h-0 overflow-hidden" data-avatar-overlay-size="notification-tray-header" /><div>{<AvatarOverlayPageHelper8 areNotificationsVisible={wind} isTrayAboveMascot={dew} isNotificationTrayVisible={birch} notifications={notifications} prefersReducedMotion={!!hill} realtimeVoiceCaption={azure} trayMaxHeight={field} onDismissNotification={onDismissNotification} onOpenNotificationActions={onOpenNotificationActions} onRunNotificationAction={onRunNotificationAction} onSubmitQuestionOption={onSubmitQuestionOption} onNotificationReplyEditorActiveChange={onNotificationReplyEditorActiveChange} onReplyCaretPointChange={trail} onOpenNotificationReply={onOpenNotificationReply} onSubmitNotificationReply={onSubmitNotificationReply} />}</div></ensureIntlFormattersInit.div>}</div> : null}{<NativeContextMenuSurfaceStub items={avatarMenuItems}><div data-avatar-overlay-hit-region={oak ? undefined : "mascot"} className={IntlProvider("group absolute duration-[160ms] ease-out [@media(prefers-reduced-motion:reduce)]:transition-none", oak && "pointer-events-none", isDragging && !nest ? "scale-95 transition-transform" : "transition-none")} style={{
          height: petal.height,
          left: petal.left,
          top: petal.top,
          width: petal.width
        }}>{<EnsureRealtimeVoiceHandoffTargetInit className="relative size-full" handoff={realtimeVoiceSurface?.handoff ?? null} surface="global-overlay">{nest ? <ParseErrorMessageDetail placement={layout.placement} presentationAnchorRef={realtimeVoiceSurface?.presentationAnchorRef} phase={lagoon} voiceActivity={realtimeVoiceSurface?.activity ?? "idle"} /> : oak ? null : haven}{oak ? null : <AvatarOverlayPageHelper4 className={nest ? IntlProvider(layout.placement.endsWith("end") ? "-ml-5" : "ml-5", layout.placement.startsWith("top") ? "-translate-y-5" : "translate-y-5") : undefined} areControlsVisible={yarrow} canRevealControls={!isDragging} canStart={realtimeVoiceSurface?.canStart ?? false} isRealtimeVoiceSurfaceVisible={nest} isMicrophoneMuted={realtimeVoiceSurface?.microphoneMuted ?? false} isMuted={realtimeVoiceSurface?.muted ?? false} phase={lagoon} willResume={realtimeVoiceSurface?.willResume} onOpenThread={realtimeVoiceSurface?.onOpenThread} onStart={realtimeVoiceSurface?.onStart} onStop={realtimeVoiceSurface?.onStop} onToggleMicrophoneMute={realtimeVoiceSurface?.onToggleMicrophoneMute} onToggleMute={realtimeVoiceSurface?.onToggleMute} />}</EnsureRealtimeVoiceHandoffTargetInit>}</div></NativeContextMenuSurfaceStub>}</section></main>;
}
function AvatarOverlayPageHelper8(jadeite) {
  let {
      areNotificationsVisible,
      isTrayAboveMascot,
      isNotificationTrayVisible,
      notifications,
      onDismissNotification,
      onOpenNotificationActions,
      onNotificationReplyEditorActiveChange,
      onReplyCaretPointChange,
      onOpenNotificationReply,
      onRunNotificationAction,
      onSubmitQuestionOption,
      onSubmitNotificationReply,
      prefersReducedMotion,
      realtimeVoiceCaption,
      trayMaxHeight
    } = jadeite,
    kernel = useIntl(),
    leaf = echo.useRef(null),
    maple = avatarOverlaySelectionU(notifications, kernel);
  let nimbus = maple,
    opal = realtimeVoiceCaption == null ? "" : "caption",
    plume = isTrayAboveMascot ? "tray-above" : "tray-below",
    quillow = [nimbus, opal, plume];
  let root = quillow.join("\0"),
    silk = notifications.length > 1,
    thorn = {
      hasScrollableContent: false,
      hasLatestNotificationsAbove: false,
      hiddenOlderNotificationCount: 0
    };
  let [upland, vista] = echo.useState(thorn),
    [wisp, yonder] = echo.useState(null),
    zenith = echo.useRef(null),
    anvil = notifications.some(item => item.id === wisp) ? wisp : null;
  let beacon = anvil,
    crag = beacon != null && areNotificationsVisible,
    dome,
    eddy;
  dome = () => {
    if (crag) return onNotificationReplyEditorActiveChange?.(true), () => {
      onNotificationReplyEditorActiveChange?.(false);
      onReplyCaretPointChange(null);
    };
  };
  eddy = [crag, onNotificationReplyEditorActiveChange, onReplyCaretPointChange];
  echo.useEffect(dome, eddy);
  let fjord, glen;
  glen = () => {
    zenith.current?.focus();
  };
  fjord = [];
  writeScrollTop("avatar-overlay-keyboard-interaction-ready", glen, fjord);
  let hearth = upland.hiddenOlderNotificationCount,
    inlet = upland.hasScrollableContent,
    jetty = areNotificationsVisible && inlet && silk && upland.hasLatestNotificationsAbove,
    knob = areNotificationsVisible && inlet && silk && hearth > 0,
    ledge = areNotificationsVisible && inlet && silk,
    mire = areNotificationsVisible && inlet,
    nook = notifications.length > 0,
    oxbow = nook && silk,
    pond = prefersReducedMotion ? {
      duration: 0
    } : {
      duration: 0.18,
      ease: [0.16, 1, 0.3, 1]
    };
  let quarry = pond,
    rapids = realtimeVoiceCaption == null ? null : <AvatarOverlayPageHelper6 key="realtime-voice-caption" prefersReducedMotion={prefersReducedMotion} shouldInsetForScrollbar={mire} text={realtimeVoiceCaption} />;
  let spur = rapids,
    tor = joint => {
      vista(keystone => {
        let latch = alpha(joint);
        return bravo(keystone, latch) ? keystone : latch;
      });
    };
  let updraft = tor,
    verge = motor => {
      leaf.current = motor;
      motor != null && updraft(motor);
    };
  let weir = verge,
    yard = () => {
      let nut = leaf.current;
      if (nut == null) return;
      updraft(nut);
      let piston = window.requestAnimationFrame(() => {
          updraft(nut);
        }),
        rivet = new ResizeObserver(() => {
          updraft(nut);
        });
      return rivet.observe(nut), () => {
        window.cancelAnimationFrame(piston);
        rivet.disconnect();
      };
    };
  let anchor;
  anchor = [root, trayMaxHeight, updraft];
  echo.useLayoutEffect(yard, anchor);
  let bolt = () => {
    let screw = leaf.current;
    screw != null && (screw.scrollTo({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      top: 0
    }), vista(alpha(screw, 0)));
  };
  let cog = bolt,
    _e = () => {
      let torque = leaf.current;
      if (torque == null) return;
      let valve = xenon(torque, hearth);
      torque.scrollTo({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        top: valve
      });
      vista(alpha(torque, valve));
    };
  let disc = _e,
    edge = spur != null && "gap-1.5",
    be = IntlProvider("relative flex w-full min-w-0 flex-col overflow-hidden", edge);
  let forge = oxbow ? {
    height: trayMaxHeight,
    maxHeight: trayMaxHeight
  } : undefined;
  let gear = isTrayAboveMascot ? null : spur,
    hinge = nook ? <ensureIntlFormattersInit.div layout={oxbow} className="relative min-h-0 min-w-0 flex-1" transition={quarry}>{<Identity>{jetty ? <AvatarOverlayPageHelper9 key="latest" prefersReducedMotion={prefersReducedMotion} onClick={cog} /> : null}</Identity>}<ensureIntlFormattersInit.div ref={weir} animate={{
        opacity: +!!isNotificationTrayVisible,
        y: isNotificationTrayVisible || prefersReducedMotion ? 0 : 3
      }} aria-label={kernel.formatMessage(gamma.notificationList)} className={IntlProvider("scrollbar-on-hover flex h-full w-full min-w-0 flex-col gap-1.5 overflow-y-auto px-1.5 pt-1 pb-0 [--edge-fade-distance:0.75rem]", ledge && "vertical-scroll-fade-mask snap-y snap-mandatory")} data-avatar-overlay-size="notification-tray-list" role="list" initial={false} transition={prefersReducedMotion ? {
        duration: 0
      } : {
        duration: 0.16,
        ease: "easeOut"
      }} onScroll={event => {
        let axle = alpha(event.currentTarget);
        vista(bracket => bravo(bracket, axle) ? bracket : axle);
      }}>{notifications.map((item, index) => <AvatarOverlayPageHelper12 key={item.id} isReplying={beacon === item.id} notification={item} notificationIndex={index} onCloseReply={() => {
          yonder(clamp => clamp === item.id ? null : clamp);
        }} onDismissNotification={onDismissNotification} onOpenNotificationActions={onOpenNotificationActions} onOpenReply={() => {
          onOpenNotificationReply?.(item);
          yonder(item.id);
        }} onRunNotificationAction={onRunNotificationAction} onReplyCaretPointChange={onReplyCaretPointChange} onSubmitQuestionOption={onSubmitQuestionOption} onSubmitNotificationReply={onSubmitNotificationReply} prefersReducedMotion={prefersReducedMotion} replyInputRef={zenith} />)}</ensureIntlFormattersInit.div>{<Identity>{knob ? <AvatarOverlayPageHelper10 key="older" count={hearth} prefersReducedMotion={prefersReducedMotion} onClick={disc} /> : null}</Identity>}</ensureIntlFormattersInit.div> : null;
  let iron = isTrayAboveMascot ? spur : null;
  return <ensureIntlFormattersInit.div layout={oxbow} className={be} data-avatar-overlay-size="notification-tray-content" style={forge} transition={quarry}>{gear}{hinge}{iron}</ensureIntlFormattersInit.div>;
}
function AvatarOverlayPageHelper9(drill) {
  let {
      onClick,
      prefersReducedMotion
    } = drill,
    engine = useIntl(),
    frame = engine.formatMessage(gamma.showLatestNotifications);
  let gasket = {
    opacity: 1,
    scale: 1,
    x: "-50%"
  };
  let handle = prefersReducedMotion ? 1 : 0.96,
    insert = {
      opacity: 0,
      scale: handle,
      x: "-50%"
    };
  let jacket = prefersReducedMotion ? 1 : 0.96,
    knurl = {
      opacity: 0,
      scale: jacket,
      x: "-50%"
    };
  let lever = prefersReducedMotion ? {
    duration: 0
  } : {
    duration: 0.14,
    ease: "easeOut"
  };
  let mount = IntlProvider(indigo, "top-1 min-w-12");
  let nozzle = prefersReducedMotion ? undefined : {
    scale: 1.03
  };
  let platen = prefersReducedMotion ? undefined : {
    scale: 0.96
  };
  let ratchet = engine.formatMessage(gamma.latestNotifications);
  let shim = <span>{ratchet}</span>;
  let tappet = <AppIconYlt className="icon-2xs hidden -rotate-90 opacity-70 group-hover:block group-focus:block" />;
  return <ensureIntlFormattersInit.button type="button" aria-label={frame} data-avatar-overlay-hit-region="notification-scroll-control" animate={gasket} exit={insert} initial={knurl} transition={lever} className={mount} whileHover={nozzle} whileTap={platen} onClick={onClick}>{shim}{tappet}</ensureIntlFormattersInit.button>;
}
function AvatarOverlayPageHelper10(arbor) {
  let {
      count,
      onClick,
      prefersReducedMotion
    } = arbor,
    bushing = useIntl(),
    collar = bushing.formatMessage(gamma.showOlderNotifications, {
      count
    });
  let dowel = {
    opacity: 1,
    scale: 1,
    x: "-50%"
  };
  let flange = prefersReducedMotion ? 1 : 0.96,
    gib = {
      opacity: 0,
      scale: flange,
      x: "-50%"
    };
  let hub = prefersReducedMotion ? 1 : 0.96,
    idler = {
      opacity: 0,
      scale: hub,
      x: "-50%"
    };
  let jig = prefersReducedMotion ? {
    duration: 0
  } : {
    duration: 0.14,
    ease: "easeOut"
  };
  let keeper = IntlProvider(indigo, "bottom-1 min-w-9");
  let lug = prefersReducedMotion ? undefined : {
    scale: 1.03
  };
  let mandrel = prefersReducedMotion ? undefined : {
    scale: 0.96
  };
  let nipple = bushing.formatMessage(gamma.compactOlderNotificationCount, {
    count
  });
  let orifice = <span className="group-hover:hidden group-focus:hidden">{nipple}</span>;
  let pin = bushing.formatMessage(gamma.olderNotificationCount, {
    count
  });
  let race = <span className="hidden group-hover:inline group-focus:inline">{pin}</span>;
  let sleeve = <AppIconYlt className="icon-2xs hidden rotate-90 opacity-70 group-hover:block group-focus:block" />;
  return <ensureIntlFormattersInit.button type="button" aria-label={collar} data-avatar-overlay-hit-region="notification-scroll-control" animate={dowel} exit={gib} initial={idler} transition={jig} className={keeper} whileHover={lug} whileTap={mandrel} onClick={onClick}>{orifice}{race}{sleeve}</ensureIntlFormattersInit.button>;
}
function xenon(trunnion, boss) {
  if (boss <= harbor) return trunnion.scrollHeight;
  let cam = copper(trunnion);
  return cam[delta(cam, $n(trunnion, cam)) + harbor]?.offsetTop ?? trunnion.scrollHeight;
}
