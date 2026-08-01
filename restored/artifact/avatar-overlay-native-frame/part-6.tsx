// Restored from ref/webview/assets/avatar-overlay-native-frame-fyNMBrWH.js
// Wave GA — full polished body from `avatar-overlay-native-frame-fyNMBrWH/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 24 (verified 86/110).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 6/7
/* split-lane-import-depth:1 */

import { appActionSidebarProjectRefSchema } from "../../actions/app-action-payload-schemas";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { AUTOMATION_MISSING_IN_APP_ERROR } from "../../automations/automation-missing-error";
import { AvatarMascotButton, ensureAvatarMascotButtonInit } from "../../avatar/avatar-mascot-button";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_Hlt_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
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
const AppInitialXct: any = undefined;
const IntlProvider: any = undefined;
const Jewel: any = undefined;
const Onyx: any = undefined;
const Pine: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const Ridge: any = undefined;
const _t: any = undefined;
const acorn: any = undefined;
const apex: any = undefined;
const at: any = undefined;
const avatarOverlayNativeFrameR: any = undefined;
const copper: any = undefined;
const dusk: any = undefined;
const elm: any = undefined;
const fern: any = undefined;
const grove: any = undefined;
const isle: any = undefined;
const meadow: any = undefined;
const wave: any = undefined;

function Knoll(dewPrime) {
  let {
      canExpandActivityStack,
      copy,
      isExpanded,
      isNativeMeasurementPlaceholder,
      isNotificationStackCollapsed,
      isPointerSurfaceHovered,
      isStackedBehindPrimary,
      nativeMaterialAttached,
      nativePresentationOwnsMotion,
      nativeSurfaceId,
      notification,
      notificationFollowUp,
      publishesFollowUpVisibility,
      onAnimationFrame,
      role: everPrime,
      onActivateNotification,
      onDismissNotification,
      onOpenNotificationActions,
      onExpansionChange,
      onRunNotificationControl,
      onRunNotificationAction,
      onSubmitQuestionOption
    } = dewPrime,
    fieldPrime = useIntl(),
    grainPrime = replaceInMemoryStorageEntries(),
    havenPrime = copy ?? avatarOverlayNativeFrameR({
      intl: fieldPrime,
      notification
    });
  let inkPrime = havenPrime,
    jadeitePrime = avatarOverlayPillDismissButtonM(notification),
    kernelPrime = notification.waitingRequest,
    [leafPrime, maplePrime] = dusk.useState(false),
    nimbusPrime = isExpanded ?? leafPrime,
    [opalPrime, plumePrime] = dusk.useState(false),
    quillowPrime = dusk.useRef(nimbusPrime),
    [rootPrime, silkPrime] = dusk.useState(undefined),
    [thornPrime, uplandPrime] = dusk.useState(notificationFollowUp?.draft ?? ""),
    [vistaPrime, wispPrime] = dusk.useState(false),
    [yonderPrime, zenithPrime] = dusk.useState(null),
    anvilPrime = isPointerSurfaceHovered || !nativePresentationOwnsMotion && vistaPrime,
    beaconPrime = dusk.useRef(null),
    cragPrime = dusk.useRef(null),
    domePrime = dusk.useRef(null),
    eddyPrime = dusk.useRef(undefined),
    fjordPrime = notification.kind === "activity" && canExpandActivityStack && onActivateNotification != null,
    glenPrime = fjordPrime || notification.kind !== "activity" && (onActivateNotification != null || notification.action != null),
    hearthPrime = notification.controlTarget != null && onRunNotificationControl != null,
    inletPrime = notification.isLoading && hearthPrime,
    jettyPrime = notification.kind !== "activity" && onDismissNotification != null && !inletPrime,
    knobPrime = !isNotificationStackCollapsed && notification.notificationPreferenceId != null && onOpenNotificationActions != null,
    ledgePrime = opalPrime || nimbusPrime,
    mirePrime = kernelPrime != null && ledgePrime,
    _e = kernelPrime != null && !inletPrime && !ledgePrime,
    nookPrime = hearthPrime && rootPrime !== undefined && rootPrime === notification.turnKey,
    oxbowPrime = notificationFollowUp?.notificationId === notification.id && notificationFollowUp.turnKey === notification.turnKey ? notificationFollowUp : null,
    pondPrime = notificationFollowUp !== undefined,
    be = nativePresentationOwnsMotion && !isNativeMeasurementPlaceholder ? thornPrime : oxbowPrime?.draft ?? thornPrime,
    quarryPrime = hearthPrime && (pondPrime ? oxbowPrime != null : nookPrime),
    rapidsPrime = hearthPrime && (!isNotificationStackCollapsed || quarryPrime),
    spurPrime = inletPrime && (quarryPrime || !isNotificationStackCollapsed && anvilPrime),
    torPrime = rapidsPrime && (quarryPrime || !isNotificationStackCollapsed && anvilPrime),
    updraftPrime = oxbowPrime?.submissionStatus === "error",
    vergePrime = oxbowPrime?.submissionStatus === "submitting",
    weirPrime = publishesFollowUpVisibility && quarryPrime,
    yardPrime = nativePresentationOwnsMotion && !isNativeMeasurementPlaceholder && hearthPrime,
    anchorPrime = kernelPrime != null || spurPrime,
    boltPrime = nativePresentationOwnsMotion && isPointerSurfaceHovered && yonderPrime === "reply",
    cogPrime = nativePresentationOwnsMotion && isPointerSurfaceHovered && yonderPrime === "stop",
    discPrime = notification.kind !== "activity" && kernelPrime == null && notification.title.length <= 20 && inkPrime.subtitle.length > 40,
    edgePrime = helixPrime => {
      if (eddyPrime.current?.(), eddyPrime.current = undefined, helixPrime == null || kernelPrime == null) return;
      let impellerPrime = () => {
        let journalPrime = Array.from(helixPrime.querySelectorAll("[data-avatar-overlay-overflow-content=\"true\"]")).some(wave),
          kingpinPrime = helixPrime.querySelector("[data-avatar-overlay-waiting-request-body=\"true\"]"),
          landPrime = kingpinPrime != null && kingpinPrime.clientHeight > 0 && kingpinPrime.scrollHeight > kingpinPrime.clientHeight + grove;
        plumePrime(meshPrime => quillowPrime.current && meshPrime ? meshPrime : journalPrime || landPrime);
      };
      impellerPrime();
      eddyPrime.current = createResizeObserver({
        axis: "both",
        target: helixPrime,
        onChange: impellerPrime
      });
    };
  let forgePrime = edgePrime,
    gearPrime = neckPrime => {
      onRunNotificationControl?.(notification, neckPrime);
    };
  let hingePrime = dusk.useEffectEvent(gearPrime),
    ironPrime,
    jointPrime;
  ironPrime = () => {
    quillowPrime.current = nimbusPrime;
  };
  jointPrime = [nimbusPrime];
  dusk.useLayoutEffect(ironPrime, jointPrime);
  let keystonePrime = () => {
    if (weirPrime) return pondPrime ? (hingePrime({
      type: "follow-up-active-changed",
      isActive: true
    }), () => {
      hingePrime({
        type: "follow-up-active-changed",
        isActive: false
      });
    }) : (hingePrime({
      type: "open-follow-up"
    }), () => {
      hingePrime({
        type: "close-follow-up"
      });
    });
  };
  let latchPrime;
  latchPrime = [pondPrime, weirPrime];
  dusk.useEffect(keystonePrime, latchPrime);
  let motorPrime, nutPrime;
  motorPrime = () => {
    nookPrime && beaconPrime.current?.focus();
  };
  nutPrime = [nookPrime];
  writeScrollTop("avatar-overlay-keyboard-interaction-ready", motorPrime, nutPrime);
  let pistonPrime = () => {
    uplandPrime("");
    silkPrime(undefined);
    pondPrime && onRunNotificationControl?.(notification, {
      type: "close-follow-up"
    });
  };
  let rivetPrime = pistonPrime,
    ScrewPrime = copper,
    torquePrime = notification.isLoading && acorn.activityPillLoading,
    valvePrime = kernelPrime != null && acorn.activityPillWaitingRequest,
    $e = _e && acorn.activityPillSingleControl,
    axlePrime = IntlProvider("relative flow-root min-h-[54px] rounded-[27px]", acorn.activityPill, torquePrime, valvePrime, $e);
  let bracketPrime = event => {
    let padPrime = event.target;
    !knobPrime || padPrime instanceof HTMLElement && (padPrime.isContentEditable || padPrime.closest("input, textarea, select, [contenteditable='true']") != null) || (event.preventDefault(), event.stopPropagation(), onOpenNotificationActions(notification));
  };
  let clampPrime, drillPrime, at;
  clampPrime = () => {
    wispPrime(true);
  };
  drillPrime = () => {
    wispPrime(true);
  };
  at = () => {
    wispPrime(false);
  };
  let enginePrime = event => {
    if (!nativePresentationOwnsMotion || isNativeMeasurementPlaceholder) return;
    let quillshaftPrime = event.target;
    if (quillshaftPrime instanceof Node && cragPrime.current?.contains(quillshaftPrime)) {
      zenithPrime("reply");
      return;
    }
    if (quillshaftPrime instanceof Node && domePrime.current?.contains(quillshaftPrime)) {
      zenithPrime("stop");
      return;
    }
    zenithPrime(null);
  };
  let framePrime = glenPrime || knobPrime ? "button" : undefined,
    gasketPrime = fjordPrime ? inkPrime.expandNotificationStackAriaLabel : glenPrime ? inkPrime.actionAriaLabel : knobPrime ? fieldPrime.formatMessage(subAgentFromThreadSource.notificationActions, {
      title: notification.title
    }) : undefined;
  let handlePrime = isStackedBehindPrimary && "opacity-0",
    insertPrime = torPrime && acorn.activityPillContentFade,
    jacketPrime = glenPrime ? "cursor-interaction" : "cursor-default",
    knurlPrime = IntlProvider("block min-h-[54px] w-full min-w-0 px-[22px] py-[10px] text-left select-none focus-visible:outline-token-focus focus-visible:outline focus-visible:outline-offset-[-2px]", handlePrime, "pr-[var(--activity-pill-content-padding-right)]", insertPrime, jacketPrime);
  let leverPrime = glenPrime || knobPrime ? 0 : undefined,
    mountPrime = () => {
      if (glenPrime) {
        if (onActivateNotification != null) {
          onActivateNotification(notification.id);
          return;
        }
        notification.action != null && onRunNotificationAction?.(notification);
      }
    };
  let nozzlePrime = event => {
    if (!(!glenPrime && !knobPrime || event.key !== "Enter" && event.key !== " ")) {
      if (event.preventDefault(), onActivateNotification != null) {
        onActivateNotification(notification.id);
        return;
      }
      if (glenPrime) {
        onRunNotificationAction?.(notification);
        return;
      }
      onOpenNotificationActions?.(notification);
    }
  };
  let _t = notification.kind !== "activity" && "font-bold",
    _avatarOverlayNativeFrameS = kernelPrime != null && "pr-[38px]",
    platenPrime = discPrime && "line-clamp-2",
    ratchetPrime = !discPrime && (kernelPrime != null && nimbusPrime ? "break-words whitespace-pre-wrap" : "truncate"),
    _avatarOverlayNativeFrameC = notification.kind === "activity" && "text-token-text-secondary",
    shimPrime = notification.kind !== "activity" && "text-token-foreground",
    tappetPrime = IntlProvider("text-[13px] leading-[17px]", _t, _avatarOverlayNativeFrameS, platenPrime, ratchetPrime, _avatarOverlayNativeFrameC, shimPrime);
  let arborPrime = discPrime && <><span aria-hidden={true} className="mx-1.5 font-normal text-token-text-secondary">{<MemoizedFormattedMessage id="avatarOverlay.inlineSubtitleSeparator" defaultMessage="•" description="Separator between an activity pill title and its inline subtitle" />}</span><span className={IntlProvider("font-normal text-token-text-secondary", notification.isLoading && "inline loading-shimmer-pure-text")}>{inkPrime.subtitle}</span></>;
  let bushingPrime = <div className={tappetPrime} data-avatar-overlay-overflow-content="true">{notification.title}{arborPrime}</div>;
  let _avatarOverlayNativeFrameA = kernelPrime == null ? undefined : {
    maxHeight: nimbusPrime ? fern : elm
  };
  let collarPrime = (notification.kind === "activity" || discPrime) && "hidden",
    dowelPrime = kernelPrime == null && "truncate",
    flangePrime = kernelPrime != null && (nimbusPrime ? "overflow-y-auto overscroll-contain" : "overflow-clip"),
    gibPrime = IntlProvider("text-[13px] leading-[17px]", collarPrime, "text-token-text-secondary", dowelPrime, flangePrime);
  let hubPrime = kernelPrime == null ? "true" : undefined,
    idlerPrime = grainPrime ? {
      duration: 0
    } : {
      duration: 0.18,
      ease: [0.23, 1, 0.32, 1]
    };
  let _avatarOverlayNativeFrameO = kernelPrime == null && !discPrime && <span className={IntlProvider(notification.isLoading && "loading-shimmer-pure-text max-w-full truncate align-bottom")}>{inkPrime.subtitle}</span>;
  let jigPrime = kernelPrime != null && <Lunar isExpanded={nimbusPrime} nativeMaterialAttached={nativeMaterialAttached} patchSummaryCopy={inkPrime.patchSummary} request={kernelPrime} onRunNotificationAction={rollerPrime => {
    onRunNotificationAction?.(notification, rollerPrime);
  }} onSubmitQuestionOption={spindlePrime => {
    onSubmitQuestionOption?.(notification, spindlePrime);
  }} />;
  let keeperPrime = <ensureIntlFormattersInit.div animate={_avatarOverlayNativeFrameA} className={gibPrime} initial={false} data-avatar-overlay-overflow-content={hubPrime} data-avatar-overlay-waiting-request-body="true" transition={idlerPrime}>{_avatarOverlayNativeFrameO}{jigPrime}</ensureIntlFormattersInit.div>;
  let lugPrime = <ensureIntlFormattersInit.div ref={forgePrime} role={framePrime} aria-label={gasketPrime} className={knurlPrime} tabIndex={leverPrime} onClick={mountPrime} onKeyDown={nozzlePrime}>{bushingPrime}{keeperPrime}</ensureIntlFormattersInit.div>;
  let mandrelPrime = inkPrime.statusIconAriaLabel,
    nipplePrime = jadeitePrime.iconType,
    orificePrime = jadeitePrime.iconType === "check-circle" ? "success" : undefined,
    pinPrime = (anchorPrime || nativeMaterialAttached && nativePresentationOwnsMotion && jadeitePrime.iconType === "check-circle") && "opacity-0",
    racePrime = IntlProvider("relative flex h-8 w-[var(--activity-pill-status-width)] items-center justify-center", pinPrime);
  let sleevePrime = kernelPrime?.kind === "question" ? <AppInitialXct className={jadeitePrime.iconClassName} /> : apex(jadeitePrime),
    trunnionPrime = <span className={racePrime}>{sleevePrime}</span>;
  let bossPrime = <span role="img" aria-label={mandrelPrime} className="pointer-events-none absolute top-3 right-[var(--activity-pill-edge-inset)] flex h-8 w-[var(--activity-pill-status-width)] items-center justify-center" data-avatar-overlay-status={nipplePrime} data-avatar-overlay-trailing-accessory={orificePrime}>{trunnionPrime}</span>;
  let camPrime = rapidsPrime ? <div className={IntlProvider("absolute top-3 right-[var(--activity-pill-control-right-inset)] z-20 flex h-8 items-center gap-[var(--activity-pill-control-gap)]", torPrime ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0")}>{<ReadLoginRouteQuerySnapshot ref={cragPrime} aria-label={fieldPrime.formatMessage(isle.replyNotification, {
      title: notification.title
    })} aria-pressed={quarryPrime} data-native-hovered={boltPrime || undefined} className={IntlProvider(meadow, avatarOverlayPillDismissButtonV.replyStopControl, nativeMaterialAttached ? "enabled:hover:!bg-transparent" : avatarOverlayPillDismissButtonV.cssControl)} color="ghost" size="icon" title={fieldPrime.formatMessage(isle.replyNotification, {
      title: notification.title
    })} onClick={() => {
      if (quarryPrime) {
        rivetPrime();
        return;
      }
      uplandPrime("");
      silkPrime(notification.turnKey);
      pondPrime && onRunNotificationControl?.(notification, {
        type: "open-follow-up"
      });
      yardPrime && window.requestAnimationFrame(() => {
        beaconPrime.current?.focus();
      });
    }}><Onyx className="relative size-7" /></ReadLoginRouteQuerySnapshot>}{_e ? null : <ReadLoginRouteQuerySnapshot ref={domePrime} aria-label={fieldPrime.formatMessage(isle.stopNotification, {
      title: notification.title
    })} aria-hidden={!spurPrime || undefined} data-native-hovered={cogPrime || undefined} className={IntlProvider(meadow, !spurPrime && "pointer-events-none opacity-0", avatarOverlayPillDismissButtonV.replyStopControl, nativeMaterialAttached ? "enabled:hover:!bg-transparent" : avatarOverlayPillDismissButtonV.cssControl)} color="ghost" size="icon" tabIndex={spurPrime ? undefined : -1} title={fieldPrime.formatMessage(isle.stopNotification, {
      title: notification.title
    })} onClick={() => {
      uplandPrime("");
      silkPrime(undefined);
      onRunNotificationControl?.(notification, {
        type: "stop"
      });
    }}><AddContextSquareIcon className="relative size-6 rotate-[-1deg]" /></ReadLoginRouteQuerySnapshot>}</div> : null;
  let detentPrime = mirePrime ? <div className="absolute top-3 right-[var(--activity-pill-control-right-inset)] z-20 flex h-8 items-center">{<ReadLoginRouteQuerySnapshot aria-expanded={nimbusPrime} aria-label={nimbusPrime ? inkPrime.collapseNotificationAriaLabel : inkPrime.expandNotificationAriaLabel} className={IntlProvider("size-[var(--activity-pill-control-size)] !rounded-full", nativeMaterialAttached ? "!bg-[rgba(80,89,96,0.18)] !text-token-foreground enabled:hover:!bg-[rgba(80,89,96,0.24)] [.electron-dark_&]:!bg-white/15 [.electron-dark_&]:enabled:hover:!bg-white/20" : "bg-[rgba(127,127,127,0.2)] text-token-foreground [.electron-dark_&]:bg-white/15", !nativeMaterialAttached && avatarOverlayPillDismissButtonV.cssControl)} color="ghost" disabled={!ledgePrime} size="icon" onClick={() => {
      nimbusPrime && plumePrime(true);
      let thrustPrime = !nimbusPrime;
      quillowPrime.current = thrustPrime;
      onExpansionChange == null ? maplePrime(thrustPrime) : onExpansionChange(notification.id, thrustPrime);
    }}><ensureIntlFormattersInit.span animate={{
        rotate: nimbusPrime ? 0 : -90
      }} transition={grainPrime ? {
        duration: 0
      } : {
        duration: 0.16,
        ease: [0.23, 1, 0.32, 1]
      }}><AppIconSft className="size-5" /></ensureIntlFormattersInit.span></ReadLoginRouteQuerySnapshot>}</div> : null;
  let eccentricPrime = quarryPrime || yardPrime ? <Jewel autoFocus={nookPrime} draft={be} hasSubmissionError={updraftPrime} inputRef={beaconPrime} isNativeMeasurementPlaceholder={isNativeMeasurementPlaceholder} isSubmitting={vergePrime} isVisible={quarryPrime} keepsNativeBackingMounted={yardPrime} notificationTitle={notification.title} prefersReducedMotion={!!grainPrime} onAnimationFrame={onAnimationFrame} onClose={rivetPrime} onDraftChange={(yokePrime, bafflePrime) => {
    uplandPrime(yokePrime);
    pondPrime && onRunNotificationControl?.(notification, {
      type: "follow-up-editor-changed",
      caretPoint: bafflePrime,
      draft: yokePrime
    });
  }} onSubmitFollowUp={capstanPrime => {
    pondPrime || (uplandPrime(""), silkPrime(undefined));
    onRunNotificationControl?.(notification, {
      type: "submit-follow-up",
      prompt: capstanPrime
    });
  }} /> : null;
  let followerPrime = <Identity onExitComplete={onAnimationFrame}>{eccentricPrime}</Identity>;
  let guidePrime = jettyPrime && !quarryPrime ? <div aria-hidden={nativePresentationOwnsMotion && !anvilPrime ? true : undefined} className={IntlProvider("absolute -top-1 -left-1 z-20", anvilPrime ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0")} data-avatar-overlay-chromium-overflow="true">{<AvatarOverlayPillDismissButtonT ariaLabel={inkPrime.dismissNotificationAriaLabel} onClick={() => {
      onDismissNotification(notification);
    }} />}</div> : null;
  return <ScrewPrime className={axlePrime} nativeMaterialAttached={nativeMaterialAttached} nativePresentationOwnsMotion={nativePresentationOwnsMotion} nativeSurfaceId={nativeSurfaceId} role={everPrime} onUpdate={onAnimationFrame} onContextMenu={bracketPrime} onFocusCapture={clampPrime} onPointerEnter={drillPrime} onPointerLeave={at} onPointerMove={enginePrime}>{lugPrime}{bossPrime}{camPrime}{detentPrime}{followerPrime}{guidePrime}</ScrewPrime>;
}
function Lunar(diaphragmPrime) {
  let {
      isExpanded,
      nativeMaterialAttached,
      onRunNotificationAction,
      onSubmitQuestionOption,
      patchSummaryCopy,
      request
    } = diaphragmPrime,
    elbowPrime = grommetPrime => {
      "questionOption" in grommetPrime || onRunNotificationAction(grommetPrime);
    };
  let ferrulePrime = elbowPrime;
  switch (request.kind) {
    case "question":
      {
        let headerPrime = isExpanded ? "break-words whitespace-pre-wrap" : "truncate",
          injectorPrime = IntlProvider("min-w-0 pr-[38px]", headerPrime);
        let jumperPrime = <div className={injectorPrime} data-avatar-overlay-overflow-content="true">{request.prompt}</div>;
        let kerfPrime = request.options.map(moss);
        let louverPrime = outletPrime => {
          if ("questionOption" in outletPrime) {
            onSubmitQuestionOption?.(outletPrime.questionOption);
            return;
          }
          onRunNotificationAction(outletPrime);
        };
        let manifoldPrime = <Ridge actions={kerfPrime} nativeMaterialAttached={nativeMaterialAttached} onRunNotificationAction={louverPrime} />;
        let nipPrime;
        return <div data-avatar-overlay-compact-waiting-request="question">{jumperPrime}{manifoldPrime}</div>;
      }
    case "patch":
      {
        let packingPrime = <Pine copy={patchSummaryCopy} files={request.files} isExpanded={isExpanded} summary={request.summary} />;
        let reducerPrime = <Ridge actions={request.actions} nativeMaterialAttached={nativeMaterialAttached} onRunNotificationAction={ferrulePrime} />;
        let strainerPrime;
        return <div data-avatar-overlay-compact-waiting-request="patch">{packingPrime}{reducerPrime}</div>;
      }
    case "plan":
      {
        let teePrime;
        return <North isExpanded={isExpanded} nativeMaterialAttached={nativeMaterialAttached} onRunNotificationAction={ferrulePrime} request={request} />;
      }
    case "exec":
      {
        let unionPrime = <Orbit isExpanded={isExpanded} text={request.summary} />;
        let ventPrime = <Ridge actions={request.actions} nativeMaterialAttached={nativeMaterialAttached} onRunNotificationAction={ferrulePrime} />;
        let wyePrime;
        return <div data-avatar-overlay-compact-waiting-request="exec">{unionPrime}{ventPrime}</div>;
      }
    case "network":
      {
        let zenerPrime = <Orbit isExpanded={isExpanded} text={request.target} />;
        let alphaSecond = <Ridge actions={request.actions} nativeMaterialAttached={nativeMaterialAttached} onRunNotificationAction={ferrulePrime} />;
        let bravoSecond;
        return <div data-avatar-overlay-compact-waiting-request="network">{zenerPrime}{alphaSecond}</div>;
      }
    case "permission":
      {
        let copperSecond = <Orbit isExpanded={isExpanded} text={request.target} />;
        let deltaSecond = <Ridge actions={request.actions} nativeMaterialAttached={nativeMaterialAttached} onRunNotificationAction={ferrulePrime} />;
        let echoSecond;
        return <div data-avatar-overlay-compact-waiting-request="permission">{copperSecond}{deltaSecond}</div>;
      }
    case "tool":
      {
        let falconSecond = request.summary ?? request.target,
          gammaSecond = <Orbit isExpanded={isExpanded} text={falconSecond} />;
        let harborSecond = <Ridge actions={request.actions} nativeMaterialAttached={nativeMaterialAttached} onRunNotificationAction={ferrulePrime} />;
        let indigoSecond;
        return <div data-avatar-overlay-compact-waiting-request="tool">{gammaSecond}{harborSecond}</div>;
      }
  }
}
function moss(jadeSecond, kiteSecond) {
  return {
    label: jadeSecond.label,
    tone: kiteSecond === 0 ? "primary" : "secondary",
    questionOption: jadeSecond
  };
}
function North(lemonSecond) {
  let {
      isExpanded,
      nativeMaterialAttached,
      onRunNotificationAction,
      request
    } = lemonSecond,
    marbleSecond = <Orbit isExpanded={isExpanded} text={request.summary} />;
  let nickelSecond = <Ridge actions={request.actions} nativeMaterialAttached={nativeMaterialAttached} onRunNotificationAction={onRunNotificationAction} />;
  return <div data-avatar-overlay-compact-waiting-request={request.kind}>{marbleSecond}{nickelSecond}</div>;
}
function Orbit(onyxSecond) {
  let {
      isExpanded,
      text
    } = onyxSecond,
    pearlSecond = isExpanded ? "break-words whitespace-pre-wrap" : "truncate whitespace-nowrap",
    quartzSecond = IntlProvider("min-w-0 pr-[38px]", pearlSecond);
  return <div className={quartzSecond} data-avatar-overlay-compact-waiting-summary-text="true" data-avatar-overlay-overflow-content="true">{text}</div>;
}
