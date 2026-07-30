// Restored from ref/webview/assets/avatar-overlay-native-frame-fyNMBrWH.js
// Wave GA — full polished body from `avatar-overlay-native-frame-fyNMBrWH/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 24 (verified 86/110).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 7/7
/* split-lane-import-depth:1 */

import { appActionSidebarProjectRefSchema } from "../../actions/app-action-payload-schemas";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { AUTOMATION_MISSING_IN_APP_ERROR } from "../../automations/automation-missing-error";
import { AvatarMascotButton, ensureAvatarMascotButtonInit } from "../../avatar/avatar-mascot-button";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../../boundaries/conversation-page-esm-inits";
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
const AppInitialEct: any = undefined;
const AppInitialFct: any = undefined;
const AppInitialJct: any = undefined;
const AppInitialSct: any = undefined;
const AppInitialVct: any = undefined;
const CodexDismissTooltips: any = undefined;
const IntlProvider: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const _t: any = undefined;
const applySvg: any = undefined;
const avatarOverlayNativeFrameC: any = undefined;
const avatarOverlayNativeFrameI: any = undefined;
const avatarOverlayNativeFrameO: any = undefined;
const bloom: any = undefined;
const bravo: any = undefined;
const initializeAppHostServices: any = undefined;
const mint: any = undefined;
const pearl: any = undefined;
const reef: any = undefined;

function Pine(riverSecond) {
  let {
    copy,
    files,
    isExpanded,
    summary
  } = riverSecond;
  if (copy == null) return null;
  if (!isExpanded) {
    let yellowSecond = <span>{copy.fileCount}</span>;
    let zincSecond = copy.additions == null ? null : <span className="ml-1.5 text-token-charts-green">{copy.additions}</span>;
    let amberSecond = copy.deletions == null ? null : <span className="ml-1.5 text-token-error-foreground">{copy.deletions}</span>;
    let basaltSecond = <BulletSeparator className="mx-1.5 text-token-text-tertiary" />;
    let cedarSecond = <span>{summary}</span>;
    let daisySecond;
    return <div className="min-w-0 truncate pr-[38px] whitespace-nowrap" data-avatar-overlay-compact-waiting-summary-text="true" data-avatar-overlay-overflow-content="true">{yellowSecond}{zincSecond}{amberSecond}{basaltSecond}{cedarSecond}</div>;
  }
  let slateSecond = <span className="text-[11px] leading-4">{copy.fileCount}</span>;
  let timberSecond = copy.additions == null ? null : <span className="text-[11px] leading-4 text-token-charts-green">{copy.additions}</span>;
  let umbraSecond = copy.deletions == null ? null : <span className="text-[11px] leading-4 text-token-error-foreground">{copy.deletions}</span>;
  let violetSecond = <div className="mt-0.5 flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-0.5">{slateSecond}{timberSecond}{umbraSecond}</div>;
  let willowSecond = files.map(quest);
  let xenonSecond = <div className="mt-0.5 min-w-0 space-y-0.5">{willowSecond}</div>;
  return <div data-avatar-overlay-compact-waiting-summary-text="true" data-avatar-overlay-overflow-content="true">{violetSecond}{xenonSecond}</div>;
}
function quest(emberSecond) {
  return <div key={emberSecond} className="leading-4 break-words">{emberSecond}</div>;
}
function Ridge(flintSecond) {
  let {
    actions,
    nativeMaterialAttached,
    onRunNotificationAction
  } = flintSecond;
  return <div className="no-drag mt-1.5 flex min-w-0 flex-wrap items-center justify-end gap-2 overflow-visible pb-[3px]">{[...actions.filter(unity), ...actions.filter(tide)].map(item => <ReadLoginRouteQuerySnapshot key={item.ariaLabel ?? item.label} className={IntlProvider("max-w-full min-w-0 px-3 text-[13px] font-medium enabled:active:hover:opacity-80", item.tone === "primary" && "!bg-token-charts-blue !text-white enabled:hover:!bg-token-charts-blue/90", item.tone === "secondary" && nativeMaterialAttached && "!bg-[rgba(80,89,96,0.12)] !text-token-foreground enabled:hover:!bg-[rgba(80,89,96,0.18)]")} color={vale(item.tone)} size="composer" aria-label={item.ariaLabel ?? item.label} title={item.ariaLabel ?? item.label} onClick={event => {
      event.stopPropagation();
      onRunNotificationAction(item);
    }} onPointerDown={storm}><span className="truncate">{item.label}</span></ReadLoginRouteQuerySnapshot>)}</div>;
}
function storm(event) {
  event.stopPropagation();
}
function tide(garnetSecond) {
  return garnetSecond.tone === "primary";
}
function unity(hazelSecond) {
  return hazelSecond.tone !== "primary";
}
function vale(ivorySecond) {
  switch (ivorySecond) {
    case "primary":
      return "primary";
    case "danger":
      return "danger";
    case "secondary":
      return "secondary";
  }
}
function wave(jasperSecond) {
  return jasperSecond.clientWidth > 0 && jasperSecond.scrollWidth > jasperSecond.clientWidth + grove;
}
function apex(kelpSecond) {
  switch (kelpSecond.iconType) {
    case "check-circle":
      return <><span aria-hidden="true" className="absolute size-[27.890625px] rounded-full bg-[color(display-p3_0.149_0.749_0.302_/_0.18)] mix-blend-darken" />{<AppIconZlt aria-hidden="true" className="relative size-[17px] shrink-0 scale-110 text-[color(display-p3_0.149_0.749_0.302)] mix-blend-darken [&_path]:stroke-current [&_path]:stroke-[0.65px] [&_path]:[paint-order:stroke_fill] [&_path]:[stroke-linecap:round] [&_path]:[stroke-linejoin:round]" />}</>;
    case "clock":
      return <AppIconCct className={kelpSecond.iconClassName} />;
    case "spinner":
      return null;
    case "warning":
      return <ApplyActive className={kelpSecond.iconClassName} />;
  }
}
function brook(lotusSecond) {
  let mintSecond = lotusSecond.tray;
  if (mintSecond == null) return {};
  let novaSecond = lotusSecond.mascot,
    oliveSecond = Math.min(mintSecond.left, novaSecond.left) - lagoon,
    prismSecond = lotusSecond.placement.startsWith("top"),
    quillSecond = prismSecond ? mintSecond.top + mintSecond.height - lagoon : novaSecond.top + novaSecond.height - lagoon,
    reefSecond = prismSecond ? novaSecond.top + lagoon : mintSecond.top + lagoon;
  return {
    height: Math.max(0, reefSecond - quillSecond),
    left: oliveSecond,
    top: quillSecond,
    width: Math.max(mintSecond.left + mintSecond.width, novaSecond.left + novaSecond.width) - oliveSecond + lagoon
  };
}
var cliff, dusk, $, elm, fern, grove, hill, isle, juniper, lagoon, meadow, nest, oak;
export const avatarOverlayNativeFrameN = esmInit(() => {
  cliff = reactCompilerRuntime();
  ensureComposerEsm_Tft_Init();
  useBrowserExtensionPluginSetupQuery();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  dusk = commonJsInit(react(), 1);
  ensureIntlFormattersInit();
  ensureAvatarMascotButtonInit();
  avatarOverlayPillDismissButtonUnderscore();
  initializeAppHostServices();
  ensureSettingsQueryAtomsInit();
  AppIconZlt();
  ensureComposerEsm_Ilt_Init();
  TooltipDelayProvider();
  HotkeyKeysLabel();
  AppInitialJct();
  ensureGlobalDictationOrbInit();
  pearl();
  applySvg();
  ensureDropdownMenuPopoverInit();
  ensureAppIconSftInit();
  CHATGPT_PRODUCT_ID();
  AppInitialSct();
  CodexDismissTooltips();
  buildCodexDesktopRequestHeaders();
  AppInitialVct();
  findSidebarSectionElement();
  mint();
  avatarOverlayNativeFrameC();
  AppInitialFct();
  RealtimeVoiceHandoffTarget();
  ensureAppScopeInit();
  ensureCreateResizeObserverInit();
  AppInitialEct();
  posixPathBasename();
  avatarOverlayNativeFrameI();
  avatarOverlayPillDismissButtonS();
  avatarOverlayPillDismissButtonI();
  avatarOverlayPillDismissButtonH();
  REALTIME_VOICE_MODE_ID();
  avatarOverlayNativeFrameO();
  avatarOverlayPillDismissButtonN();
  _t();
  bravo();
  reef();
  bloom();
  avatarOverlayPillDismissButtonY();
  $ = getJsxRuntime();
  elm = 56;
  fern = 180;
  grove = 1;
  hill = 1;
  isle = Identity({
    mascotLabel: {
      id: "petOverlay.mascotLabel",
      defaultMessage: "{petName} pet",
      description: "Accessible label for the floating Codex pet"
    },
    replyNotification: {
      id: "avatarOverlay.replyNotification",
      defaultMessage: "Reply to {title}",
      description: "Accessible label for replying to a floating avatar notification"
    },
    stopNotification: {
      id: "avatarOverlay.stopNotification",
      defaultMessage: "Stop {title}",
      description: "Accessible label for stopping a running task from the floating avatar notification tray"
    },
    quickChat: {
      id: "avatarOverlay.quickChat",
      defaultMessage: "Chat",
      description: "Accessible label for the floating pet chat input"
    },
    sendQuickChat: {
      id: "avatarOverlay.sendQuickChat",
      defaultMessage: "Send chat",
      description: "Accessible label for submitting a floating pet chat"
    },
    askPlaceholder: {
      id: "avatarOverlay.askPlaceholder",
      defaultMessage: "Ask",
      description: "Placeholder for Quick Chat when the floating pet is idle"
    },
    startNewTaskPlaceholder: {
      id: "avatarOverlay.startNewTaskPlaceholder",
      defaultMessage: "Start new chat",
      description: "Placeholder for Quick Chat when the floating pet has activity"
    },
    quickChatError: {
      id: "avatarOverlay.quickChatError",
      defaultMessage: "Unable to start chat",
      description: "Compact error shown when floating pet Quick Chat fails"
    },
    notificationList: {
      id: "avatarOverlay.notificationList",
      defaultMessage: "Activity notifications",
      description: "Accessible label for the list of floating avatar activity notifications"
    }
  });
  juniper = 300;
  lagoon = 8;
  meadow = "relative size-[var(--activity-pill-control-size)] shrink-0 !rounded-full !border-0 bg-transparent !p-0 before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:content-['']";
  nest = {
    duration: 0.22,
    ease: [0.4, 0, 0.6, 1]
  };
  oak = {
    opacity: nest,
    scale: {
      damping: 22,
      mass: 0.82,
      stiffness: 300,
      type: "spring"
    }
  };
});
