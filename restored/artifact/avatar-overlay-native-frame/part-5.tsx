// Restored from ref/webview/assets/avatar-overlay-native-frame-fyNMBrWH.js
// Wave GA — full polished body from `avatar-overlay-native-frame-fyNMBrWH/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 24 (verified 86/110).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 5/7
/* split-lane-import-depth:1 */

import { appActionSidebarProjectRefSchema } from "../../actions/app-action-payload-schemas";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { AUTOMATION_MISSING_IN_APP_ERROR } from "../../automations/automation-missing-error";
import {
  AvatarMascotButton,
  ensureAvatarMascotButtonInit,
} from "../../avatar/avatar-mascot-button";
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_Ilt_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
} from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../../conversation/conversation-page-esm-inits";
import {
  jsxRuntime as getJsxRuntime,
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { toastAtom } from "../../boundaries/toast-atom";
import { Chatgpt2 } from "../../browser/chatgpt2";
import { CHATGPT_PRODUCT_ID } from "../../config/chatgpt-product-id";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { ApplyActive } from "../../conversation/apply-active";
import { subAgentFromThreadSource } from "../../conversation/sub-agent-source-from-thread-source";
import { buildCodexDesktopRequestHeaders } from "../../desktop/codex-desktop-request-headers";
import { ensureClientCoordinationServiceInit } from "../../desktop/ensure-client-coordination-service-init";
import {
  ensureGlobalDictationOrbInit,
  GlobalDictationOrbT,
} from "../../desktop/global-dictation-orb";
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
import {
  findSidebarSectionElement,
  writeScrollTop,
} from "../../navigation/app-action-dom";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { HotkeyKeysLabel } from "../../settings/hotkey-keys-label";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useBrowserExtensionPluginSetupQuery } from "../../skills/use-browser-extension-plugin-setup-query";
import { BulletSeparator } from "../../ui/bullet-separator";
import { ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import {
  EnsureRealtimeVoiceHandoffTargetInit,
  RealtimeVoiceHandoffTarget,
} from "../../ui/realtime-voice-handoff-target";
import { ScrollingOrbBackdrop } from "../../ui/scrolling-orb-backdrop";
import { TooltipDelayProvider } from "../../ui/tooltip-delay-provider";
import {
  createResizeObserver,
  ensureCreateResizeObserverInit,
} from "../../utils/create-resize-observer";
import { Identity } from "../../utils/identity";
import { ParseErrorMessageDetail } from "../../utils/parse-error-message-detail";
import { posixPathBasename } from "../../utils/posix-path-basename";
import { replaceInMemoryStorageEntries } from "../../utils/replace-in-memory-storage-entries";
import { ensureSettingsGlyphNltInit } from "../../utils/wave-as-gap-ensure-inits";
import { REALTIME_VOICE_MODE_ID } from "../../voice/realtime-voice-mode-id";
import {
  avatarOverlayPillDismissButtonA,
  avatarOverlayPillDismissButtonF,
  avatarOverlayPillDismissButtonG,
  avatarOverlayPillDismissButtonH,
  avatarOverlayPillDismissButtonI,
  avatarOverlayPillDismissButtonL,
  avatarOverlayPillDismissButtonM,
  avatarOverlayPillDismissButtonN,
  avatarOverlayPillDismissButtonO,
  avatarOverlayPillDismissButtonP,
  avatarOverlayPillDismissButtonR,
  avatarOverlayPillDismissButtonS,
  avatarOverlayPillDismissButtonT as AvatarOverlayPillDismissButtonT,
  avatarOverlayPillDismissButtonU,
  avatarOverlayPillDismissButtonUnderscore,
  avatarOverlayPillDismissButtonV,
  avatarOverlayPillDismissButtonY,
} from "../avatar-overlay-pill-dismiss-button";

// Wave5d soft stubs.
const AppInitialAgt: any = undefined;
const AppInitialHlt: any = undefined;
const AppInitialLt: any = undefined;
const AppInitialTct: any = undefined;
const AppInitialUgt: any = undefined;
const Falcon: any = undefined;
const IntlProvider: any = undefined;
const Knoll: any = undefined;
const NeedsApps: any = undefined;
const ReadLoginRouteQuerySnapshot: any = undefined;
const acorn: any = undefined;
const dusk: any = undefined;
const isle: any = undefined;

function Component_n(copperPrime) {
  let {
      activityCopies,
      activityStackPresentation,
      compositionSurfaceId,
      expandedNotificationIds,
      isNotificationStackCollapsed,
      isExpanded,
      isVisiblyExpanded,
      isTrayAboveMascot,
      nativeMaterialAttached,
      nativePresentationOwnsMotion,
      notifications,
      notificationFollowUp,
      pointerSurfaceId,
      publishesFollowUpVisibility,
      onActivityStackScroll,
      onActivateNotification: deltaPrime,
      onAnimationFrame,
      onDismissNotification,
      onOpenNotificationActions,
      onNotificationExpansionChange,
      onRunNotificationControl,
      onRunNotificationAction,
      onSubmitQuestionOption,
      stackTransition,
    } = copperPrime,
    echoPrime = useIntl(),
    falconPrime,
    gammaPrime,
    harborPrime,
    indigoPrime,
    jadePrime,
    kitePrime,
    lemonPrime,
    marblePrime,
    nickelPrime,
    onyxPrime,
    pearlPrime,
    quartzPrime;
  {
    let timberPrime = new Map(notifications.map(honey)),
      umbraPrime = activityStackPresentation.slots.some(glide);
    let violetPrime = umbraPrime,
      willowPrime =
        notifications.length > 1 && (isExpanded || nativePresentationOwnsMotion)
          ? activityStackPresentation.viewportRect.height
          : (activityStackPresentation.slots[0]?.presentationRect.height ?? 0),
      xenonPrime = isVisiblyExpanded
        ? willowPrime
        : AppInitialUgt(
            notifications.length,
            activityStackPresentation.slots[0]?.presentationRect.height,
          );
    let yellowPrime = xenonPrime,
      zincPrime =
        isExpanded &&
        !nativeMaterialAttached &&
        compositionSurfaceId == null &&
        activityStackPresentation.contentHeight >
          activityStackPresentation.viewportRect.height,
      amberPrime = zincPrime && activityStackPresentation.slots.some(frost);
    let basaltPrime = amberPrime,
      cedarPrime = zincPrime && activityStackPresentation.slots.some(eagle);
    let daisyPrime = cedarPrime;
    onyxPrime =
      activityCopies?.[0]?.notificationListAriaLabel ??
      echoPrime.formatMessage(isle.notificationList);
    let emberPrime =
      compositionSurfaceId == null &&
      nativePresentationOwnsMotion &&
      "overflow-hidden";
    pearlPrime = IntlProvider(
      "relative w-[345px] max-w-full shrink-0",
      emberPrime,
    );
    quartzPrime = "notification-stack-visible-layout";
    gammaPrime = "list";
    harborPrime = {
      height: yellowPrime,
    };
    indigoPrime =
      isExpanded && onActivityStackScroll != null
        ? (event) => {
            event.preventDefault();
            onActivityStackScroll(event.deltaY);
          }
        : undefined;
    let flintPrime = zincPrime ? "-inset-x-6 overflow-hidden" : "inset-0",
      garnetPrime = zincPrime && (basaltPrime ? "top-0" : "-top-6"),
      hazelPrime = zincPrime && (daisyPrime ? "bottom-0" : "-bottom-6"),
      ivoryPrime = basaltPrime && daisyPrime && acorn.activityStackFadeBoth,
      jasperPrime = basaltPrime && !daisyPrime && acorn.activityStackFadeTop,
      kelpPrime = !basaltPrime && daisyPrime && acorn.activityStackFadeBottom;
    nickelPrime = IntlProvider(
      "absolute",
      flintPrime,
      garnetPrime,
      hazelPrime,
      ivoryPrime,
      jasperPrime,
      kelpPrime,
    );
    let lotusPrime = zincPrime ? "inset-x-6" : "inset-x-0",
      mintPrime = isTrayAboveMascot
        ? zincPrime && !daisyPrime
          ? "bottom-6"
          : "bottom-0"
        : zincPrime && !basaltPrime
          ? "top-6"
          : "top-0";
    falconPrime = IntlProvider("absolute", lotusPrime, mintPrime);
    jadePrime = "true";
    kitePrime = "notification-stack-backing-layout";
    lemonPrime = {
      height: willowPrime,
    };
    marblePrime = activityStackPresentation.slots.map((item) => {
      let { itemId, presentationRect, slotId, zIndex } = item;
      if (slotId === "activity-slot-8" && !nativePresentationOwnsMotion)
        return null;
      let novaPrime = timberPrime.get(itemId);
      if (novaPrime == null) return null;
      let olivePrime = activityCopies?.[notifications.indexOf(novaPrime)],
        prismPrime =
          novaPrime === notifications[0] &&
          (!nativePresentationOwnsMotion ||
            (isExpanded
              ? slotId !== "activity-slot-8"
              : slotId === "activity-slot-8" || !violetPrime)),
        quillPrime = !isExpanded && !prismPrime;
      if (compositionSurfaceId != null && compositionSurfaceId !== slotId)
        return null;
      let reefPrime =
        nativePresentationOwnsMotion && compositionSurfaceId == null;
      return (
        <ensureIntlFormattersInit.div
          key={`${slotId}:${itemId}`}
          layout={!nativePresentationOwnsMotion}
          layoutDependency={isExpanded}
          aria-hidden={reefPrime || quillPrime ? "true" : undefined}
          className={IntlProvider(
            "absolute",
            quillPrime && "pointer-events-none",
            reefPrime && "invisible",
          )}
          inert={reefPrime || quillPrime || undefined}
          style={{
            left:
              presentationRect.left -
              activityStackPresentation.viewportRect.left,
            top:
              presentationRect.top - activityStackPresentation.viewportRect.top,
            width: presentationRect.width,
            zIndex,
          }}
          transition={stackTransition}
          onUpdate={onAnimationFrame}
        >
          {
            <Knoll
              canExpandActivityStack={
                !isExpanded && prismPrime && notifications.length > 1
              }
              copy={olivePrime}
              isStackedBehindPrimary={quillPrime}
              isNativeMeasurementPlaceholder={reefPrime}
              isNotificationStackCollapsed={isNotificationStackCollapsed}
              isPointerSurfaceHovered={pointerSurfaceId === slotId}
              nativeMaterialAttached={nativeMaterialAttached}
              nativePresentationOwnsMotion={nativePresentationOwnsMotion}
              nativeSurfaceId={slotId}
              notification={novaPrime}
              notificationFollowUp={notificationFollowUp}
              publishesFollowUpVisibility={publishesFollowUpVisibility}
              isExpanded={
                onNotificationExpansionChange == null
                  ? undefined
                  : expandedNotificationIds.includes(novaPrime.id)
              }
              onAnimationFrame={onAnimationFrame}
              role={prismPrime ? "primary" : "secondary"}
              onActivateNotification={deltaPrime}
              onDismissNotification={onDismissNotification}
              onOpenNotificationActions={onOpenNotificationActions}
              onExpansionChange={onNotificationExpansionChange}
              onRunNotificationControl={onRunNotificationControl}
              onRunNotificationAction={onRunNotificationAction}
              onSubmitQuestionOption={onSubmitQuestionOption}
            />
          }
        </ensureIntlFormattersInit.div>
      );
    });
  }
  let riverPrime = (
    <div
      className={falconPrime}
      data-avatar-overlay-backing-canvas={jadePrime}
      data-avatar-overlay-size={kitePrime}
      style={lemonPrime}
    >
      {marblePrime}
    </div>
  );
  let slatePrime = <div className={nickelPrime}>{riverPrime}</div>;
  return (
    <div
      aria-label={onyxPrime}
      className={pearlPrime}
      data-avatar-overlay-size={quartzPrime}
      role={gammaPrime}
      style={harborPrime}
      onWheel={indigoPrime}
    >
      {slatePrime}
    </div>
  );
}
function eagle(sagePrime) {
  let { edgeZone } = sagePrime;
  return edgeZone === "bottom";
}
function frost(topazPrime) {
  let { edgeZone } = topazPrime;
  return edgeZone === "top";
}
function glide(ultraPrime) {
  let { slotId } = ultraPrime;
  return slotId === AppInitialAgt;
}
function honey(vaporPrime) {
  return [vaporPrime.id, vaporPrime];
}
function Iris({
  hasNotifications,
  nativeMaterialAttached,
  nativePresentationOwnsMotion,
  quickChatDictation,
  onActiveChange,
  onAnimationFrame,
  onDraftChange,
  onPointerEnter,
  onPointerLeave,
  onSubmitQuickChat,
  quickChatDraft,
}) {
  let wheatPrime = CodexPluginActionType(appScopeAtom),
    yarnPrime = useIntl(),
    zephyrPrime = dusk.useRef(null),
    acornPrime = dusk.useRef(false),
    [bloomPrime, coralPrime] = dusk.useState(false),
    [driftPrime, eaglePrime] = dusk.useState(""),
    frostPrime = quickChatDraft ?? driftPrime,
    [glidePrime, honeyPrime] = dusk.useState(null),
    irisPrime = frostPrime.trim(),
    jewelPrime = hasNotifications ? 160 : 85,
    knollPrime = frostPrime.length === 0 ? jewelPrime : 344,
    lunarPrime = dusk.useEffectEvent(() => {
      acornPrime.current &&
        ((acornPrime.current = false), onActiveChange?.(false));
    }),
    mossPrime = () => {
      onAnimationFrame != null &&
        window.requestAnimationFrame(onAnimationFrame);
    },
    northPrime = (stormPrime) => {
      quickChatDraft ?? eaglePrime(stormPrime);
      onDraftChange?.(stormPrime);
      mossPrime();
      honeyPrime(null);
    },
    orbitPrime = async (tidePrime) => {
      if (
        !(tidePrime.length === 0 || bloomPrime || onSubmitQuickChat == null)
      ) {
        coralPrime(true);
        honeyPrime(null);
        try {
          await onSubmitQuickChat(tidePrime);
          northPrime("");
        } catch {
          honeyPrime(yarnPrime.formatMessage(isle.quickChatError));
        } finally {
          coralPrime(false);
        }
      }
    },
    pinePrime = quickChatDictation.supportState,
    {
      canRetryDictation,
      isDictating,
      isTranscribing,
      retryDictation,
      startDictation,
      stopDictation,
    } = createDictationTranscriptSession({
      cleanupEnabled: quickChatDictation.cleanupEnabled,
      enabled: pinePrime === true,
      onTranscriptInsert: (unityPrime) => {
        let valePrime = AppInitialHlt(frostPrime, unityPrime);
        valePrime !== frostPrime &&
          (northPrime(valePrime), zephyrPrime.current?.focus());
      },
      onTranscriptSend: (wavePrime) => {
        let apexPrime = AppInitialHlt(frostPrime, wavePrime);
        northPrime(apexPrime);
        orbitPrime(apexPrime.trim());
      },
      getSurroundingText: () => frostPrime,
      onStartError: (brookPrime) => {
        wheatPrime
          .get(toastAtom)
          .danger(AppInitialTct(yarnPrime, "start", brookPrime).message);
        appActionSidebarProjectRefSchema.error(
          "[AvatarOverlay] unable to start dictation",
          {
            safe: {},
            sensitive: {
              error: brookPrime,
            },
          },
        );
      },
      onTranscribeError: (cliffPrime) => {
        wheatPrime
          .get(toastAtom)
          .danger(
            AppInitialTct(yarnPrime, "transcription", cliffPrime).message,
          );
        appActionSidebarProjectRefSchema.error(
          "[AvatarOverlay] dictation failed",
          {
            safe: {},
            sensitive: {
              error: cliffPrime,
            },
          },
        );
      },
      onUnsupported: () => {
        wheatPrime.get(toastAtom).danger(
          yarnPrime.formatMessage({
            id: "composer.dictation.unsupported",
            defaultMessage: "Dictation is not available on this device",
            description:
              "Toast text shown when dictation is not supported on the current device",
          }),
        );
      },
      streamingEnabled: quickChatDictation.streamingEnabled,
    }),
    questPrime =
      pinePrime !== false &&
      (irisPrime.length === 0 ||
        isDictating ||
        isTranscribing ||
        canRetryDictation);
  dusk.useLayoutEffect(
    () => (
      onAnimationFrame?.(),
      () => {
        onAnimationFrame != null &&
          window.requestAnimationFrame(onAnimationFrame);
      }
    ),
    [onAnimationFrame],
  );
  dusk.useEffect(
    () => () => {
      lunarPrime();
    },
    [],
  );
  writeScrollTop(
    "avatar-overlay-keyboard-interaction-ready",
    () => {
      acornPrime.current && zephyrPrime.current?.focus();
    },
    [],
  );
  let ridgePrime = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    !(isDictating || isTranscribing) && (await orbitPrime(irisPrime));
  };
  return (
    <Falcon
      emptyWidth={jewelPrime}
      nativeMaterialAttached={nativeMaterialAttached}
      nativePresentationOwnsMotion={nativePresentationOwnsMotion}
      width={knollPrime}
      onFocusCapture={() => {
        acornPrime.current = true;
        onActiveChange?.(true);
      }}
      onBlurCapture={(event) => {
        let duskPrime = event.relatedTarget;
        (duskPrime instanceof Node &&
          event.currentTarget.contains(duskPrime)) ||
          ((acornPrime.current = false), onActiveChange?.(false));
      }}
      onPointerDown={() => {
        acornPrime.current = true;
        onActiveChange?.(true);
      }}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onSubmit={(elmPrime) => {
        ridgePrime(elmPrime);
      }}
      onUpdate={onAnimationFrame}
    >
      <input
        ref={zephyrPrime}
        aria-label={yarnPrime.formatMessage(isle.quickChat)}
        className={IntlProvider(
          "min-w-0 flex-1 bg-transparent text-[14px] leading-[18px] font-medium outline-none",
          nativeMaterialAttached
            ? "text-token-foreground placeholder:text-token-foreground/35"
            : "text-token-foreground placeholder:text-token-text-secondary",
        )}
        data-avatar-overlay-composition-autofocus="true"
        placeholder={
          hasNotifications
            ? yarnPrime.formatMessage(isle.startNewTaskPlaceholder)
            : yarnPrime.formatMessage(isle.askPlaceholder)
        }
        value={frostPrime}
        onChange={(event) => {
          northPrime(event.currentTarget.value);
        }}
      />
      <ensureIntlFormattersInit.div
        className="shrink-0"
        layout="position"
        transition={{
          duration: 0.18,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {questPrime ? (
          <AppInitialLt
            className="size-7 shrink-0 !bg-[#636363] !text-white enabled:hover:!bg-[#636363] disabled:opacity-100 electron:!rounded-full"
            color="secondary"
            idleIcon={<NeedsApps className="icon-sm" />}
            isDictating={isDictating}
            isVisible={true}
            isTranscribing={isTranscribing}
            canRetryDictation={canRetryDictation}
            disabled={pinePrime !== true || bloomPrime || isTranscribing}
            retryDictation={retryDictation}
            shortcutLabel={null}
            size="icon"
            startDictation={startDictation}
            stopDictation={stopDictation}
          />
        ) : (
          <ReadLoginRouteQuerySnapshot
            aria-label={yarnPrime.formatMessage(isle.sendQuickChat)}
            className="size-7 shrink-0 !bg-[#636363] !text-white enabled:hover:!bg-[#636363] disabled:opacity-100 electron:!rounded-full"
            color="secondary"
            disabled={irisPrime.length === 0 || bloomPrime}
            loading={bloomPrime}
            size="icon"
            type="submit"
          >
            {bloomPrime ? null : <AppIconPlt className="icon-sm" />}
          </ReadLoginRouteQuerySnapshot>
        )}
      </ensureIntlFormattersInit.div>
      {glidePrime == null ? null : (
        <span className="sr-only" role="alert">
          {glidePrime}
        </span>
      )}
    </Falcon>
  );
}
function Jewel(fernPrime) {
  let {
      autoFocus,
      draft,
      hasSubmissionError,
      inputRef,
      isNativeMeasurementPlaceholder,
      isSubmitting,
      isVisible,
      keepsNativeBackingMounted,
      notificationTitle,
      prefersReducedMotion,
      onAnimationFrame,
      onClose,
      onDraftChange,
      onSubmitFollowUp,
    } = fernPrime,
    grovePrime = useIntl(),
    hillPrime = keepsNativeBackingMounted && !isVisible,
    islePrime = dusk.useRef(null),
    juniperPrime = (event) => {
      let birchPrime = avatarOverlayPillDismissButtonO(event.currentTarget);
      islePrime.current !== birchPrime &&
        ((islePrime.current = birchPrime),
        onDraftChange(
          event.currentTarget.value,
          avatarOverlayPillDismissButtonA(event.currentTarget),
        ));
    };
  let lagoonPrime = juniperPrime,
    meadowPrime = hillPrime ? true : undefined,
    nestPrime = {
      height: "auto",
      marginBottom: 14,
      opacity: 1,
      y: 0,
    };
  let oakPrime = isNativeMeasurementPlaceholder
    ? undefined
    : {
        height: 0,
        marginBottom: 0,
        opacity: 0,
        y: prefersReducedMotion ? 0 : -2,
      };
  let petalPrime =
    isNativeMeasurementPlaceholder || keepsNativeBackingMounted
      ? false
      : {
          height: 0,
          marginBottom: 0,
          opacity: 0,
          y: prefersReducedMotion ? 0 : -2,
        };
  let quietPrime = hillPrime ? true : undefined,
    rainPrime =
      isNativeMeasurementPlaceholder || prefersReducedMotion
        ? {
            duration: 0,
          }
        : {
            height: {
              duration: 0.22,
              ease: [0.23, 1, 0.32, 1],
            },
            marginBottom: {
              duration: 0.22,
              ease: [0.23, 1, 0.32, 1],
            },
            opacity: {
              duration: 0.12,
              ease: "easeOut",
            },
            y: {
              duration: 0.16,
              ease: "easeOut",
            },
          };
  let seedPrime = (event) => {
    event.preventDefault();
    let canyonPrime = draft.trim();
    canyonPrime.length === 0 || isSubmitting || onSubmitFollowUp(canyonPrime);
  };
  let trailPrime = grovePrime.formatMessage(
    {
      id: "avatarOverlay.notificationFollowUpInput",
      defaultMessage: "Follow up on {title}",
      description:
        "Accessible label for the floating avatar notification follow-up input",
    },
    {
      title: notificationTitle,
    },
  );
  let urnPrime = autoFocus ? "true" : undefined,
    vinePrime = grovePrime.formatMessage({
      id: "avatarOverlay.notificationFollowUpPlaceholder",
      defaultMessage: "Follow up",
      description:
        "Placeholder for the floating avatar notification follow-up input",
    });
  let windPrime = (event) => {
    if (
      event.key === "Enter" &&
      !event.shiftKey &&
      !event.nativeEvent.isComposing
    ) {
      event.preventDefault();
      event.currentTarget.form?.requestSubmit();
      return;
    }
    event.key === "Escape" && (event.stopPropagation(), onClose());
  };
  let yarrowPrime = (
    <textarea
      ref={inputRef}
      aria-label={trailPrime}
      autoFocus={autoFocus}
      className="[field-sizing:content] max-h-20 min-w-0 resize-none overflow-y-auto bg-transparent py-[4.5px] text-[13px] leading-4 text-token-foreground outline-none placeholder:text-token-text-secondary"
      data-avatar-overlay-composition-autofocus={urnPrime}
      placeholder={vinePrime}
      rows={1}
      value={draft}
      onChange={lagoonPrime}
      onSelect={lagoonPrime}
      onKeyDown={windPrime}
    />
  );
  let azurePrime = hasSubmissionError ? (
    <div
      className="truncate pb-1 text-[11px] leading-3 text-token-error-foreground"
      role="alert"
    >
      {
        <MemoizedFormattedMessage
          id="avatarOverlay.notificationFollowUpError"
          defaultMessage="Unable to send reply"
          description="Compact error shown when a floating avatar notification follow-up fails"
        />
      }
    </div>
  ) : null;
  return (
    <ensureIntlFormattersInit.form
      aria-hidden={meadowPrime}
      animate={nestPrime}
      className="no-drag electron-dark:bg-token-side-bar-background mx-3.5 grid min-h-[26px] grid-cols-1 items-center overflow-hidden rounded-[12.5px] border-[0.5px] border-token-input-border bg-token-main-surface-primary px-2.5"
      exit={oakPrime}
      initial={petalPrime}
      inert={quietPrime}
      transition={rainPrime}
      onSubmit={seedPrime}
      onUpdate={onAnimationFrame}
    >
      {yarrowPrime}
      {azurePrime}
    </ensureIntlFormattersInit.form>
  );
}
