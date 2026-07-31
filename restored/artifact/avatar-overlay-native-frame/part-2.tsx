// Restored from ref/webview/assets/avatar-overlay-native-frame-fyNMBrWH.js
// Wave GA — full polished body from `avatar-overlay-native-frame-fyNMBrWH/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 24 (verified 86/110).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 2/7
/* split-lane-import-depth:1 */

import { appActionSidebarProjectRefSchema } from "../../actions/app-action-payload-schemas";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { AUTOMATION_MISSING_IN_APP_ERROR } from "../../automations/automation-missing-error";
import { AvatarMascotButton, ensureAvatarMascotButtonInit } from "../../avatar/avatar-mascot-button";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../../conversation/conversation-page-esm-inits";
import { jsxRuntime as getJsxRuntime, react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { Chatgpt2 } from "../../browser/chatgpt2";
import { CHATGPT_PRODUCT_ID } from "../../config/chatgpt-product-id";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { ApplyActive } from "../../conversation/apply-active";
import { subAgentFromThreadSource } from "../../conversation/sub-agent-source-from-thread-source";
import { buildCodexDesktopRequestHeaders } from "../../desktop/codex-desktop-request-headers";
import { ensureClientCoordinationServiceInit } from "../../desktop/ensure-client-coordination-service-init";
import { ensureGlobalDictationOrbInit, GlobalDictationOrbT } from "../../desktop/global-dictation-orb";
import { createDictationTranscriptSession } from "../../dictation/create-dictation-transcript-session";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AddContextSquareIcon } from "../../icons/add-context-square-icon";
import { AppIconCct } from "../../icons/app-icon-cct";
import { AppIconMlt } from "../../icons/app-icon-mlt";
import { AppIconPlt } from "../../icons/app-icon-plt";
import { AppIconSft, ensureAppIconSftInit } from "../../icons/app-icon-sft";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { ensureSoundOnInit, SoundOn } from "../../icons/sound-on";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { usePrefersReducedMotion } from "../../motion/use-prefers-reduced-motion";
import { findSidebarSectionElement, writeScrollTop } from "../../navigation/app-action-dom";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { HotkeyKeysLabel } from "../../settings/hotkey-keys-label";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useBrowserExtensionPluginSetupQuery } from "../../skills/use-browser-extension-plugin-setup-query";
import { BulletSeparator } from "../../ui/bullet-separator";
import { ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { EnsureRealtimeVoiceHandoffTargetInit, RealtimeVoiceHandoffTarget } from "../../ui/realtime-voice-handoff-target";
import { ScrollingOrbBackdrop } from "../../ui/scrolling-orb-backdrop";
import { TooltipDelayProvider } from "../../ui/tooltip-delay-provider";
import { createResizeObserver, ensureCreateResizeObserverInit } from "../../utils/create-resize-observer";
import { Identity } from "../../utils/identity";
import { ParseErrorMessageDetail } from "../../utils/parse-error-message-detail";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { replaceInMemoryStorageEntries } from "../../utils/replace-in-memory-storage-entries";
import { ensureSettingsGlyphNltInit } from "../../utils/wave-as-gap-ensure-inits";
import { REALTIME_VOICE_MODE_ID } from "../../voice/realtime-voice-mode-id";
import { avatarOverlayPillDismissButtonA, avatarOverlayPillDismissButtonF, avatarOverlayPillDismissButtonG, avatarOverlayPillDismissButtonH, avatarOverlayPillDismissButtonI, avatarOverlayPillDismissButtonL, avatarOverlayPillDismissButtonM, avatarOverlayPillDismissButtonN, avatarOverlayPillDismissButtonO, avatarOverlayPillDismissButtonP, avatarOverlayPillDismissButtonR, avatarOverlayPillDismissButtonS, avatarOverlayPillDismissButtonT as AvatarOverlayPillDismissButtonT, avatarOverlayPillDismissButtonU, avatarOverlayPillDismissButtonUnderscore, avatarOverlayPillDismissButtonV, avatarOverlayPillDismissButtonY } from "../avatar-overlay-pill-dismiss-button";

// Wave5d soft stubs.
const AppInitialHct: any = undefined;
const Flint: any = undefined;
const IntlProvider: any = undefined;
const NeedsApps: any = undefined;
const lotus: any = undefined;

function quartz({
  mascot,
  orbScale = 1
}) {
  return {
    left: mascot.left + mascot.width / 2,
    top: mascot.top + mascot.height * (1 + orbScale) / 2
  };
}
function river({
  mascot,
  viewport
}) {
  let jetty = mascot.left + mascot.width / 2;
  return Math.max(0, 2 * Math.min(jetty - willow, viewport.width - jetty - willow));
}
export function avatarOverlayNativeFrameA({
  caption,
  status
}: {
  caption?: unknown;
  status?: unknown;
  [key: string]: unknown;
}) {
  return caption == null || status == null ? 0 : Math.max(0, status.top + status.height + violet - caption.top);
}
function slate({
  mascot,
  showsNotificationBadge,
  surfaceId
}) {
  let knob = showsNotificationBadge ? 4 : 3,
    ledge;
  switch (surfaceId) {
    case "voice-output":
      ledge = 0;
      break;
    case "voice-microphone":
      ledge = 1;
      break;
    case "mascot-badge":
      ledge = 2;
      break;
    case "voice-controls":
      ledge = knob - 1;
      break;
  }
  let mire = timber / 2,
    nook = mascot.width / 2 + umbra + mire,
    oxbow = 2 * Math.asin(32 / (2 * nook)),
    pond = (ledge - (knob - 1) / 2) * oxbow;
  return {
    x: Math.round(Math.sin(pond) * nook),
    y: Math.round(mascot.height / 2 - Math.cos(pond) * nook - mire)
  };
}
var timber,
  umbra,
  violet,
  willow,
  xenon,
  avatarOverlayNativeFrameO = esmInit(() => {
    timber = 24;
    umbra = 0;
    violet = 8;
    willow = 8;
    xenon = 44.25;
  });
function Yellow(quarry) {
  let {
      children,
      className,
      inert,
      nativeMaterialAttached,
      nativeSurfaceId,
      style
    } = quarry,
    rapids = nativeMaterialAttached ? "border-transparent bg-transparent shadow-none" : "border-white/85 bg-white/65 text-black shadow-[0_2px_6px_rgba(0,0,0,0.2)] backdrop-blur-xl hover:bg-white/80 [.electron-dark_&]:border-white/20 [.electron-dark_&]:bg-[#202020]/75 [.electron-dark_&]:text-white [.electron-dark_&]:hover:bg-[#2d2d2d]/85 [@media(prefers-reduced-transparency:reduce)]:bg-white/95 [@media(prefers-reduced-transparency:reduce)]:backdrop-blur-none [.electron-dark_&]:[@media(prefers-reduced-transparency:reduce)]:bg-[#202020]/95",
    spur = IntlProvider("rounded-full border shadow-sm forced-colors:border-[ButtonBorder] forced-colors:bg-[ButtonFace] forced-colors:text-[ButtonText] forced-colors:backdrop-blur-none", rapids, className);
  return <div className={spur} data-avatar-overlay-hit-region="realtime-voice" data-avatar-overlay-native-corner-radius="12" data-avatar-overlay-native-surface-id={nativeSurfaceId} inert={inert} style={style}>{children}</div>;
}
var zinc,
  amber,
  basalt = esmInit(() => {
    zinc = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    amber = getJsxRuntime();
  });
function Cedar(tor) {
  let {
      areControlsVisible = false,
      canRevealControls = true,
      canStart,
      isRealtimeVoiceSurfaceVisible = false,
      isMicrophoneMuted = false,
      isMuted = false,
      isInert = false,
      mascot,
      nativeMaterialAttached = false,
      nativeSurfacePosition,
      nativeSurfaceId,
      onStart,
      onStop,
      onOpenThread,
      onToggleMicrophoneMute: updraft,
      onToggleMute,
      phase,
      placement,
      showsNotificationBadge = false,
      willResume = false
    } = tor,
    verge = useIntl(),
    weir = phase !== "inactive",
    yard = phase === "starting",
    anchor = phase === "stopping",
    bolt = nativeSurfaceId != null && nativeSurfaceId !== "voice-controls";
  if (!weir && !canStart && !bolt) return null;
  let cog = phase === "active",
    disc = (cog || bolt) && updraft != null && onToggleMute != null,
    edge = canRevealControls ? "group-hover:pointer-events-auto group-hover:opacity-100 group-has-[:focus-visible]:pointer-events-auto group-has-[:focus-visible]:opacity-100" : null,
    forge = willResume ? lotus.resume : lotus.start;
  yard ? forge = lotus.starting : cog && onOpenThread != null ? forge = lotus.openThread : weir && (forge = lotus.stop);
  let gear = disc ? lotus.stop : forge,
    hinge = weir && !isRealtimeVoiceSurfaceVisible || areControlsVisible ? "pointer-events-auto opacity-100" : ["pointer-events-none opacity-0 focus-within:pointer-events-auto focus-within:opacity-100", edge];
  let iron = hinge,
    joint = !nativeMaterialAttached && nativeSurfaceId == null && disc ? <div className="absolute z-30" data-avatar-overlay-hit-region="realtime-voice" style={{
      height: 42,
      left: "calc(50% - 56px)",
      top: placement.startsWith("bottom") ? 0 : -10,
      width: 112
    }} onClick={ember} onPointerDown={daisy} /> : null;
  let keystone = disc && (nativeSurfaceId == null || nativeSurfaceId === "voice-output") ? <Flint key="voice-output" ariaLabel={verge.formatMessage(isMuted ? lotus.unmuteOutput : lotus.muteOutput)} disabled={!cog} isAnimated={!nativeMaterialAttached} isInert={isInert} isPressed={isMuted} nativeMaterialAttached={nativeMaterialAttached} nativeSurfaceId="voice-output" position={nativeSurfacePosition ?? slate({
    mascot,
    showsNotificationBadge: showsNotificationBadge,
    surfaceId: "voice-output"
  })} tooltipContent={<MemoizedFormattedMessage {...isMuted ? lotus.unmuteOutput : lotus.muteOutput} />} visibilityClassName={iron} onClick={onToggleMute}>{isMuted ? <ScrollingOrbBackdrop className="icon-xs" /> : <SoundOn className="icon-xs" />}</Flint> : null;
  let latch = disc && (nativeSurfaceId == null || nativeSurfaceId === "voice-microphone") ? <Flint key="voice-microphone" ariaLabel={verge.formatMessage(isMicrophoneMuted ? lotus.unmuteMicrophone : lotus.muteMicrophone)} disabled={!cog} isAnimated={!nativeMaterialAttached} isInert={isInert} isPressed={isMicrophoneMuted} nativeMaterialAttached={nativeMaterialAttached} nativeSurfaceId="voice-microphone" position={nativeSurfacePosition ?? slate({
    mascot,
    showsNotificationBadge: showsNotificationBadge,
    surfaceId: "voice-microphone"
  })} tooltipContent={<MemoizedFormattedMessage {...isMicrophoneMuted ? lotus.unmuteMicrophone : lotus.muteMicrophone} />} visibilityClassName={iron} onClick={updraft}>{isMicrophoneMuted ? <AppInitialHct className="icon-xs" /> : <AppIconMlt className="icon-xs" />}</Flint> : null;
  let motor = <MemoizedFormattedMessage reducedMotion="never">{<Identity initial={false}>{keystone}{latch}</Identity>}</MemoizedFormattedMessage>;
  let nut = nativeSurfaceId == null || nativeSurfaceId === "voice-controls" ? <Flint ariaLabel={verge.formatMessage(gear)} disabled={yard || anchor} isInert={isInert} nativeMaterialAttached={nativeMaterialAttached} nativeSurfaceId="voice-controls" position={nativeSurfacePosition ?? slate({
    mascot,
    showsNotificationBadge: showsNotificationBadge,
    surfaceId: "voice-controls"
  })} tooltipContent={<MemoizedFormattedMessage {...gear} />} visibilityClassName={iron} onClick={() => {
    if (disc) {
      onStop?.();
      return;
    }
    if (cog && onOpenThread != null) {
      onOpenThread();
      return;
    }
    weir ? onStop?.() : onStart?.();
  }}>{disc || (isRealtimeVoiceSurfaceVisible || onOpenThread == null) && (cog || anchor) ? <Chatgpt2 className="icon-xs" /> : yard ? <VSCODE_EDITOR_ID className="icon-xs" /> : <NeedsApps className="icon-xs" />}</Flint> : null;
  return <>{joint}{motor}{nut}</>;
}
function daisy(event) {
  event.stopPropagation();
}
function ember(event) {
  event.stopPropagation();
}
export { avatarOverlayNativeFrameO };
