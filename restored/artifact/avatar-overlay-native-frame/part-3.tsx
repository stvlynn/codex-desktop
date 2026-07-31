// Restored from ref/webview/assets/avatar-overlay-native-frame-fyNMBrWH.js
// Wave GA — full polished body from `avatar-overlay-native-frame-fyNMBrWH/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 24 (verified 86/110).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 3/7
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
const AppInitialGct: any = undefined;
const AppInitialHt: any = undefined;
const AppInitialVct: any = undefined;
const IntlProvider: any = undefined;
const Yellow: any = undefined;
const avatarOverlayNativeFrameO: any = undefined;
const basalt: any = undefined;
const slate: any = undefined;

function Flint(piston) {
  let {
      ariaLabel,
      children,
      disabled,
      isAnimated = false,
      isInert,
      isPressed,
      nativeMaterialAttached,
      nativeSurfaceId,
      onClick,
      position,
      tooltipContent,
      visibilityClassName
    } = piston,
    rivet = nativeMaterialAttached ? 0 : position.x,
    screw = nativeMaterialAttached ? 0 : position.y,
    torque = {
      opacity: 1,
      scale: 1,
      x: rivet,
      y: screw
    };
  let valve = isAnimated ? {
    opacity: 0,
    scale: 0.45,
    x: rivet,
    y: screw - 8
  } : undefined;
  let axle = isAnimated ? {
    opacity: 0,
    scale: 0.45,
    x: rivet,
    y: screw - 8
  } : false;
  let bracket = nativeMaterialAttached ? {
    left: `calc(50% + ${position.x}px)`,
    top: position.y
  } : {
    left: "50%",
    top: 0
  };
  let clamp = isInert && "invisible",
    drill = IntlProvider("group/voice-action no-drag size-6", clamp, visibilityClassName);
  let engine = disabled ? "cursor-default" : "cursor-interaction",
    frame = isPressed && "text-token-foreground",
    gasket = IntlProvider("flex size-full items-center justify-center rounded-full focus-visible:ring-2 focus-visible:ring-token-focus-border focus-visible:outline-none", engine, frame);
  let handle = event => {
    event.stopPropagation();
    onClick?.();
  };
  let insert = <button type="button" aria-label={ariaLabel} aria-pressed={isPressed} disabled={disabled} className={gasket} onClick={handle}>{children}</button>;
  let jacket = <OptionalTooltip tooltipClassName="pointer-events-none" tooltipContent={tooltipContent}>{insert}</OptionalTooltip>;
  let knurl = <Yellow className={drill} inert={isInert} nativeMaterialAttached={nativeMaterialAttached} nativeSurfaceId={nativeSurfaceId}>{jacket}</Yellow>;
  return <ensureIntlFormattersInit.div animate={torque} className="absolute z-40 -translate-x-1/2" exit={valve} initial={axle} style={bracket} transition={kelp}>{knurl}</ensureIntlFormattersInit.div>;
}
function Garnet(lever) {
  let {
      mascot,
      showsNotificationBadge
    } = lever,
    mount = AppInitialHt.filter(hazel).map(item => {
      let nozzle = slate({
        mascot,
        showsNotificationBadge,
        surfaceId: item
      });
      return <div key={item} aria-hidden="true" className="pointer-events-none absolute z-40 size-6 -translate-x-1/2 rounded-full opacity-0" data-avatar-overlay-native-corner-radius="12" data-avatar-overlay-native-surface-id={item} inert={true} style={{
        left: `calc(50% + ${nozzle.x}px)`,
        top: nozzle.y
      }} />;
    });
  return <>{mount}</>;
}
function hazel(platen) {
  return platen !== "voice-controls";
}
var ivory,
  jasper,
  kelp,
  lotus,
  mint = esmInit(() => {
    ivory = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    useBrowserExtensionPluginSetupQuery();
    strongMarkerFromOptions();
    ensureIntlFormattersInit();
    avatarOverlayNativeFrameO();
    ensureComposerEsm_Sut_Init();
    ensureComposerEsm_Hlt_Init();
    AppInitialGct();
    ensureSettingsGlyphNltInit();
    ensureSoundOnInit();
    createDictationTranscriptSession();
    AppInitialVct();
    ensureConversationPageEsm_Act_Init();
    basalt();
    jasper = getJsxRuntime();
    kelp = {
      damping: 22,
      mass: 0.72,
      stiffness: 360,
      type: "spring"
    };
    lotus = Identity({
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
function avatarOverlayNativeFrameR({
  intl,
  latestTurnItems,
  notification,
  notificationCount = 1
}) {
  let ratchet = avatarOverlayPillDismissButtonM(notification),
    shim = intl.formatMessage(ratchet.labelMessage),
    tappet = (latestTurnItems == null ? null : avatarOverlayPillDismissButtonL(latestTurnItems, intl)) ?? notification.body ?? intl.formatMessage(ratchet.fallbackBodyMessage),
    arbor = notification.waitingRequest == null ? tappet : avatarOverlayPillDismissButtonF(notification.waitingRequest, intl),
    bushing = arbor.replace(/[.?!]+$/, ""),
    collar = notification.waitingRequest?.kind === "patch" ? notification.waitingRequest : null;
  return {
    actionAriaLabel: `${notification.title}. ${arbor === shim ? shim : `${shim}. ${bushing}`}. ${intl.formatMessage(nova.openNotification)}`,
    collapseNotificationAriaLabel: intl.formatMessage(nova.collapseNotification, {
      title: notification.title
    }),
    dismissNotificationAriaLabel: intl.formatMessage(nova.dismissNotification, {
      title: notification.title
    }),
    expandNotificationAriaLabel: intl.formatMessage(nova.expandNotification, {
      title: notification.title
    }),
    expandNotificationStackAriaLabel: intl.formatMessage(nova.expandNotificationStack, {
      count: notificationCount
    }),
    notificationListAriaLabel: intl.formatMessage(nova.notificationList),
    patchSummary: collar == null ? null : {
      additions: collar.additions > 0 ? intl.formatMessage(nova.compactPatchAdditions, {
        count: collar.additions
      }) : null,
      deletions: collar.deletions > 0 ? intl.formatMessage(nova.compactPatchDeletions, {
        count: collar.deletions
      }) : null,
      fileCount: intl.formatMessage(nova.compactPatchFileCount, {
        count: collar.fileCount
      })
    },
    statusIconAriaLabel: notification.waitingRequest?.kind === "question" ? intl.formatMessage(nova.questionStatusIcon) : shim,
    subtitle: tappet
  };
}
var nova,
  avatarOverlayNativeFrameI = esmInit(() => {
    ensureIntlFormattersInit();
    avatarOverlayPillDismissButtonH();
    avatarOverlayPillDismissButtonU();
    avatarOverlayPillDismissButtonP();
    nova = Identity({
      collapseNotification: {
        id: "avatarOverlay.collapseNotification",
        defaultMessage: "Collapse {title}",
        description: "Accessible label for collapsing a floating avatar notification row"
      },
      compactPatchAdditions: {
        id: "avatarOverlay.compactPatchAdditions",
        defaultMessage: "+{count}",
        description: "Compact additions count for a patch request in the floating avatar notification tray"
      },
      compactPatchDeletions: {
        id: "avatarOverlay.compactPatchDeletions",
        defaultMessage: "-{count}",
        description: "Compact deletions count for a patch request in the floating avatar notification tray"
      },
      compactPatchFileCount: {
        id: "avatarOverlay.compactPatchFileCount",
        defaultMessage: "{count, plural, one {# file} other {# files}}",
        description: "Compact file count for a patch request in the floating avatar notification tray"
      },
      dismissNotification: {
        id: "avatarOverlay.dismissNotification",
        defaultMessage: "Dismiss {title}",
        description: "Accessible label for dismissing a notification in the floating avatar notification tray"
      },
      expandNotification: {
        id: "avatarOverlay.expandNotification",
        defaultMessage: "Expand {title}",
        description: "Accessible label for expanding a floating avatar notification row"
      },
      expandNotificationStack: {
        id: "avatarOverlay.expandNotificationStack",
        defaultMessage: "Expand activity stack, {count, plural, one {# item} other {# items}}",
        description: "Accessible label for expanding grouped floating avatar notifications"
      },
      notificationList: {
        id: "avatarOverlay.notificationList",
        defaultMessage: "Activity notifications",
        description: "Accessible label for the list of floating avatar activity notifications"
      },
      openNotification: {
        id: "avatarOverlay.openNotification",
        defaultMessage: "Open notification",
        description: "Accessible label for an actionable row in the floating avatar notification tray"
      },
      questionStatusIcon: {
        id: "avatarOverlay.questionStatusIcon",
        defaultMessage: "Question",
        description: "Accessible label for a floating avatar notification waiting on a question answer"
      }
    });
  });
function Olive(dowel) {
  let {
      isNativeMeasurementPlaceholder = false,
      layout,
      nativeMaterialAttached,
      prefersReducedMotion,
      presentationOffsetY = 0,
      text
    } = dowel,
    flange = prism.useRef(null),
    gib = Math.max(188, layout.mascot.width * 2),
    hub = Math.min(gib, layout.viewport.width),
    idler = Math.min(Math.max(layout.mascot.left + layout.mascot.width / 2, hub / 2), layout.viewport.width - hub / 2),
    jig = idler - hub / 2,
    keeper = layout.mascot.left + layout.mascot.width / 2 - idler,
    lug = () => {
      let kingpin = flange.current;
      kingpin != null && (kingpin.scrollTop = kingpin.scrollHeight);
    };
  let mandrel;
  mandrel = [text];
  prism.useLayoutEffect(lug, mandrel);
  let nipple = isNativeMeasurementPlaceholder || undefined,
    orifice = {
      height: "auto",
      opacity: 1
    };
  let pin = isNativeMeasurementPlaceholder && "invisible",
    race = IntlProvider("no-drag pointer-events-none absolute -mt-9 flex shrink-0 justify-center text-left", pin);
  let sleeve = prefersReducedMotion || nativeMaterialAttached ? false : {
    height: 0,
    opacity: 0
  };
  let trunnion = isNativeMeasurementPlaceholder || undefined,
    boss = layout.mascot.top + layout.mascot.height + 12 + presentationOffsetY,
    cam = {
      left: jig,
      top: boss,
      width: hub
    };
  let detent = prefersReducedMotion ? {
    duration: 0
  } : {
    duration: 0.18,
    ease: [0.16, 1, 0.3, 1]
  };
  let eccentric = IntlProvider("relative z-[1] flex min-h-[52px] w-fit min-w-[188px] items-center rounded-[24px] px-3 py-2.5 forced-colors:bg-[Canvas]", nativeMaterialAttached ? "bg-transparent" : IntlProvider(avatarOverlayPillDismissButtonV.cssMaterial, avatarOverlayPillDismissButtonV.cssMaterialElevated));
  let follower = {
    maxWidth: hub
  };
  let guide = `calc(33.333% + ${keeper}px)`,
    helix = <div aria-hidden="true" className="pointer-events-none absolute -top-8 h-10 w-10 -translate-x-1" data-avatar-overlay-chromium-overflow="true" style={{
      left: guide
    }} />;
  let impeller = <div ref={flange} className="text-size-chat max-h-12 overflow-hidden leading-4 break-words whitespace-pre-wrap text-token-foreground italic">{text}</div>;
  let journal = <div className={eccentric} data-avatar-overlay-native-corner-radius="24" data-avatar-overlay-native-surface-id="realtime-caption" style={follower}>{helix}{impeller}</div>;
  return <ensureIntlFormattersInit.div aria-hidden={nipple} aria-live="polite" animate={orifice} className={race} data-avatar-overlay-size="realtime-caption" initial={sleeve} inert={trunnion} role="status" style={cam} transition={detent}>{journal}</ensureIntlFormattersInit.div>;
}
var $t,
  prism,
  quill,
  reef = esmInit(() => {
    $t = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    useBrowserExtensionPluginSetupQuery();
    prism = commonJsInit(react(), 1);
    avatarOverlayPillDismissButtonY();
    quill = getJsxRuntime();
  }),
  sage,
  topaz,
  on,
  ultra,
  vapor,
  wheat,
  yarn,
  zephyr,
  acorn,
  bloom = esmInit(() => {
    sage = "_activityStackFadeTop_1n95f_1";
    topaz = "_activityStackFadeBottom_1n95f_11";
    on = "_activityStackFadeBoth_1n95f_21";
    ultra = "_activityPill_1n95f_38";
    vapor = "_activityPillWaitingRequest_1n95f_65";
    wheat = "_activityPillLoading_1n95f_66";
    yarn = "_activityPillSingleControl_1n95f_70";
    zephyr = "_activityPillContentFade_1n95f_77";
    acorn = {
      activityStackFadeTop: sage,
      activityStackFadeBottom: topaz,
      activityStackFadeBoth: on,
      activityPill: ultra,
      activityPillWaitingRequest: vapor,
      activityPillLoading: wheat,
      activityPillSingleControl: yarn,
      activityPillContentFade: zephyr
    };
  });
export { avatarOverlayNativeFrameI };
export { avatarOverlayNativeFrameR };
