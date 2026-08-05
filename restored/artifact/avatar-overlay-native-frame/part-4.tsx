// Restored from ref/webview/assets/avatar-overlay-native-frame-fyNMBrWH.js
// Wave GA — full polished body from `avatar-overlay-native-frame-fyNMBrWH/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 24 (verified 86/110).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 4/7
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
import { Coral } from "./part-4-a";

// Wave5d soft stubs.
const AppInitialRgt: any = undefined;
const AvatarOverlayNativeFrameS: any = undefined;
const Cedar: any = undefined;
const Garnet: any = undefined;
const IntlProvider: any = undefined;
const NativeContextMenuSurface: any = undefined;
const Olive: any = undefined;
const brook: any = undefined;
const dusk: any = undefined;
const hill: any = undefined;
const isle: any = undefined;
const juniper: any = undefined;
const nest: any = undefined;
const oak: any = undefined;
const quartz: any = undefined;
const river: any = undefined;
const slate: any = undefined;
const xenon: any = undefined;

export function avatarOverlayNativeFrameT({
  activityCopies,
  activityStackPresentation,
  areActivityPillsVisible = true,
  avatar,
  avatarMenuItems,
  debugWindowBorderVisible = false,
  expandedNotificationIds = [],
  globalDictationOrbEnabled = false,
  interactiveRegionRef,
  isNotificationTrayOpen = true,
  layout,
  mascotDragState,
  mascotStyle,
  nativeMaterialAttached,
  notificationStackContentExpanded,
  notificationStackControlsVisible = true,
  notifications,
  notificationStackItemCount: sageSecond = notifications.length,
  notificationFollowUp,
  pointerSurfaceId = null,
  quickChatDictation,
  onActivityStackScroll,
  onActivateNotification,
  onHideActivityPills,
  onMascotLostPointerCapture,
  onMascotPointerCancel,
  onMascotPointerDown,
  onMascotPointerMove,
  onMascotPointerUp,
  onNotificationExpansionChange,
  onDismissNotification,
  onOpenNotificationActions,
  onRunNotificationControl,
  onRunNotificationAction,
  onSubmitQuestionOption,
  onQuickChatEditorActiveChange,
  onQuickChatDraftChange,
  onQuickChatVisibilityChange,
  onSubmitQuickChat,
  onTrayAnimationFrame,
  onShowActivityPills,
  quickChatDraft,
  quickChatEnabled = true,
  quickChatVisible,
  realtimeVoiceSurface,
  renderMode,
}: {
  activityCopies?: unknown;
  activityStackPresentation?: unknown;
  areActivityPillsVisible?: unknown;
  avatar?: unknown;
  avatarMenuItems?: unknown;
  debugWindowBorderVisible?: unknown;
  expandedNotificationIds?: unknown;
  globalDictationOrbEnabled?: unknown;
  interactiveRegionRef?: unknown;
  isNotificationTrayOpen?: unknown;
  layout?: unknown;
  mascotDragState?: unknown;
  mascotStyle?: unknown;
  nativeMaterialAttached?: unknown;
  notificationStackContentExpanded?: unknown;
  notificationStackControlsVisible?: unknown;
  notifications?: unknown;
  notificationStackItemCount?: unknown;
  notificationFollowUp?: unknown;
  pointerSurfaceId?: unknown;
  quickChatDictation?: unknown;
  onActivityStackScroll?: unknown;
  onActivateNotification?: unknown;
  onHideActivityPills?: unknown;
  onMascotLostPointerCapture?: unknown;
  onMascotPointerCancel?: unknown;
  onMascotPointerDown?: unknown;
  onMascotPointerMove?: unknown;
  onMascotPointerUp?: unknown;
  onNotificationExpansionChange?: unknown;
  onDismissNotification?: unknown;
  onOpenNotificationActions?: unknown;
  onRunNotificationControl?: unknown;
  onRunNotificationAction?: unknown;
  onSubmitQuestionOption?: unknown;
  onQuickChatEditorActiveChange?: unknown;
  onQuickChatDraftChange?: unknown;
  onQuickChatVisibilityChange?: unknown;
  onSubmitQuickChat?: unknown;
  onTrayAnimationFrame?: unknown;
  onShowActivityPills?: unknown;
  quickChatDraft?: unknown;
  quickChatEnabled?: unknown;
  quickChatVisible?: unknown;
  realtimeVoiceSurface?: unknown;
  renderMode?: unknown;
  [key: string]: unknown;
}) {
  let topazSecond = useIntl(),
    ultraSecond = replaceInMemoryStorageEntries(),
    vaporSecond =
      renderMode?.type === "native-surface" ? renderMode.id : undefined,
    wheatSecond =
      renderMode?.type === "native-surface" ||
      (renderMode?.type === "native-root" && nativeMaterialAttached),
    yarnSecond = renderMode != null,
    zephyrSecond = dusk.useRef(false),
    acornSecond = dusk.useRef(false),
    bloomSecond = dusk.useRef(null),
    [coralSecond, driftSecond] = dusk.useState(false),
    [_e, eagleSecond] = dusk.useState(false),
    frostSecond = globalDictationOrbEnabled && _e,
    be = quickChatVisible ?? coralSecond,
    glideSecond =
      renderMode?.type === "native-root" &&
      nativeMaterialAttached &&
      !frostSecond,
    honeySecond = avatarOverlayPillDismissButtonM(notifications[0]),
    [irisSecond, jewelSecond] = dusk.useState(null);
  writeScrollTop("avatar-overlay-computer-use-cursor-changed", (isleSecond) => {
    jewelSecond(isleSecond.point);
  });
  let knollSecond = notifications.length > 0,
    lunarSecond = knollSecond,
    mossSecond = realtimeVoiceSurface?.phase ?? "inactive",
    northSecond =
      realtimeVoiceSurface?.canStart === true || mossSecond !== "inactive",
    orbitSecond = northSecond
      ? slate({
          mascot: layout.mascot,
          showsNotificationBadge: true,
          surfaceId: "mascot-badge",
        })
      : null,
    pineSecond = avatarOverlayPillDismissButtonR(
      realtimeVoiceSurface?.isSessionActive ?? false,
      mossSecond !== "inactive",
      realtimeVoiceSurface?.petOpenIntent,
    ),
    questSecond = layout.mascot,
    ridgeSecond = notificationFollowUp?.caretPoint ?? irisSecond,
    stormSecond = realtimeVoiceSurface?.caption ?? null,
    tideSecond = realtimeVoiceSurface != null,
    unitySecond =
      ridgeSecond == null || avatar == null
        ? null
        : avatarOverlayPillDismissButtonG(
            questSecond,
            ridgeSecond,
            avatar.spriteVersionNumber,
          ),
    valeSecond = areActivityPillsVisible && knollSecond,
    waveSecond = valeSecond || frostSecond || be,
    apexSecond = sageSecond > 1 && isNotificationTrayOpen,
    brookSecond = sageSecond > 1 && !isNotificationTrayOpen,
    cliffSecond = notificationStackContentExpanded ?? apexSecond,
    duskSecond =
      layout.tray == null || renderMode?.type === "native-root"
        ? undefined
        : Math.max(0, layout.tray.height),
    elmSecond = () => {
      bloomSecond.current != null &&
        (window.clearTimeout(bloomSecond.current),
        (bloomSecond.current = null));
      quickChatVisible ?? driftSecond(true);
      onQuickChatVisibilityChange?.(true);
    },
    fernSecond = () => {
      zephyrSecond.current ||
        (bloomSecond.current != null &&
          window.clearTimeout(bloomSecond.current),
        (bloomSecond.current = window.setTimeout(() => {
          bloomSecond.current = null;
          !acornSecond.current &&
            interactiveRegionRef?.current?.querySelector(
              "[data-avatar-overlay-hit-region]:hover",
            ) == null &&
            (quickChatVisible ?? driftSecond(false),
            onQuickChatVisibilityChange?.(false));
        }, juniper)));
    };
  dusk.useEffect(
    () => (
      (zephyrSecond.current = false),
      () => {
        zephyrSecond.current = true;
        bloomSecond.current != null && window.clearTimeout(bloomSecond.current);
      }
    ),
    [],
  );
  let groveSecond;
  notificationStackControlsVisible && valeSecond && onHideActivityPills != null
    ? (groveSecond = {
        ariaLabel: apexSecond
          ? topazSecond.formatMessage({
              id: "avatarOverlay.collapseNotificationStack",
              defaultMessage: "Collapse activity stack",
              description:
                "Accessible label for collapsing grouped floating avatar notifications",
            })
          : topazSecond.formatMessage({
              id: "avatarOverlay.hideActivity",
              defaultMessage: "Hide activity",
              description:
                "Accessible label for stashing floating avatar activity",
            }),
        backgroundColor: "transparent",
        content: (
          <AppIconSft
            className={IntlProvider(
              "icon-sm [&_path]:[stroke-width:1.2px]",
              layout.placement.startsWith("bottom") && "rotate-180",
            )}
          />
        ),
        foregroundColor: "currentColor",
        isGlassy: true,
        isIconOnly: true,
        nativeMaterialAttached,
        onClick: onHideActivityPills,
      })
    : notificationStackControlsVisible &&
      onShowActivityPills != null &&
      knollSecond &&
      !areActivityPillsVisible &&
      (groveSecond = {
        ariaLabel: topazSecond.formatMessage(
          {
            id: "avatarOverlay.showActivity",
            defaultMessage:
              "Show activity, {count, plural, one {# item} other {# items}}",
            description:
              "Accessible label for showing stashed floating avatar activity",
          },
          {
            count: notifications.length,
          },
        ),
        backgroundColor: honeySecond.badgeBackgroundColor,
        content: notifications.length,
        foregroundColor: honeySecond.badgeForegroundColor,
        isGlassy: true,
        nativeMaterialAttached,
        onClick: onShowActivityPills,
      });
  let hillSecond =
    avatar == null ? null : (
      <AvatarMascotButton
        ariaLabel={topazSecond.formatMessage(isle.mascotLabel, {
          petName: avatar.displayName,
        })}
        assetRef={avatar.assetRef}
        lookFrame={unitySecond}
        notificationBadge={tideSecond ? undefined : groveSecond}
        spriteVersionNumber={avatar.spriteVersionNumber}
        spritesheetUrl={avatar.spritesheetUrl}
        state={honeySecond.mascotState}
        style={mascotStyle}
        transientState={mascotDragState}
      />
    );
  return (
    <main
      className={IntlProvider(
        "relative h-screen w-screen bg-transparent",
        renderMode?.type === "native-surface"
          ? "overflow-visible"
          : "overflow-hidden",
        debugWindowBorderVisible &&
          "-outline-offset-2 outline-2 outline-[#ff0000]",
      )}
      data-avatar-overlay-debug-window-border={
        debugWindowBorderVisible || undefined
      }
    >
      <section
        ref={interactiveRegionRef}
        data-avatar-overlay-content-frame="true"
        className="relative h-full w-full"
      >
        {vaporSecond == null && be && layout.tray != null ? (
          <div
            aria-hidden="true"
            className="absolute"
            data-avatar-overlay-hit-region="tray-mascot-bridge"
            style={brook(layout)}
            onPointerEnter={elmSecond}
            onPointerLeave={fernSecond}
          />
        ) : null}
        {stormSecond != null &&
        (vaporSecond == null || vaporSecond === "realtime-caption") ? (
          <Olive
            isNativeMeasurementPlaceholder={wheatSecond && vaporSecond == null}
            layout={layout}
            nativeMaterialAttached={nativeMaterialAttached}
            prefersReducedMotion={!!ultraSecond}
            presentationOffsetY={
              !nativeMaterialAttached &&
              realtimeVoiceSurface?.statusText != null
                ? xenon
                : 0
            }
            text={stormSecond}
          />
        ) : null}
        <div
          aria-hidden={glideSecond || undefined}
          data-avatar-overlay-hit-region={
            waveSecond ? "notification-tray" : undefined
          }
          className={IntlProvider(
            "absolute text-sm text-token-foreground",
            waveSecond && !glideSecond
              ? "cursor-interaction"
              : "pointer-events-none",
          )}
          inert={glideSecond}
          style={{
            height: layout.tray?.height,
            left: layout.tray?.left,
            top: layout.tray?.top,
            visibility: layout.tray == null ? "hidden" : undefined,
            width: layout.tray?.width,
          }}
          onPointerEnter={vaporSecond == null ? elmSecond : undefined}
          onPointerLeave={vaporSecond == null ? fernSecond : undefined}
        >
          <div
            className={IntlProvider(
              "relative w-max",
              nativeMaterialAttached &&
                vaporSecond == null &&
                "overflow-hidden",
            )}
            data-avatar-overlay-size="notification-tray"
            style={{
              maxHeight: duskSecond,
            }}
          >
            <div
              className="h-0 overflow-hidden"
              data-avatar-overlay-size="notification-tray-header"
            />
            <div>
              {
                <Coral
                  activityCopies={activityCopies}
                  activityStackPresentation={activityStackPresentation}
                  areActivityPillsLaidOut={layout.tray != null}
                  areActivityPillsVisible={areActivityPillsVisible}
                  isQuickChatVisible={be}
                  isNotificationStackCollapsed={brookSecond}
                  isNotificationTrayExpanded={cliffSecond}
                  isNotificationTrayVisiblyExpanded={apexSecond}
                  isTrayAboveMascot={layout.placement.startsWith("top")}
                  isGlobalDictationEnabled={globalDictationOrbEnabled}
                  isGlobalDictationVisible={frostSecond}
                  compositionSurfaceId={vaporSecond}
                  nativeMaterialAttached={nativeMaterialAttached}
                  nativePresentationOwnsMotion={wheatSecond}
                  usesStableBackingCanvases={yarnSecond}
                  notifications={notifications}
                  notificationFollowUp={notificationFollowUp}
                  expandedNotificationIds={expandedNotificationIds}
                  pointerSurfaceId={pointerSurfaceId}
                  quickChatDictation={quickChatDictation}
                  onActivityStackScroll={onActivityStackScroll}
                  onActivateNotification={onActivateNotification}
                  onGlobalDictationVisibilityChange={eagleSecond}
                  trayMaxHeight={duskSecond}
                  onDismissNotification={
                    sageSecond === 1 || isNotificationTrayOpen
                      ? onDismissNotification
                      : undefined
                  }
                  onOpenNotificationActions={onOpenNotificationActions}
                  onNotificationExpansionChange={onNotificationExpansionChange}
                  onRunNotificationControl={onRunNotificationControl}
                  onRunNotificationAction={onRunNotificationAction}
                  onSubmitQuestionOption={onSubmitQuestionOption}
                  onQuickChatEditorActiveChange={(juniperSecond) => {
                    acornSecond.current = juniperSecond;
                    onQuickChatEditorActiveChange?.(juniperSecond);
                    juniperSecond ? elmSecond() : fernSecond();
                  }}
                  onQuickChatDraftChange={onQuickChatDraftChange}
                  onTrayAnimationFrame={onTrayAnimationFrame}
                  onQuickChatPointerEnter={elmSecond}
                  onQuickChatPointerLeave={fernSecond}
                  onSubmitQuickChat={onSubmitQuickChat}
                  quickChatDraft={quickChatDraft}
                  quickChatEnabled={quickChatEnabled}
                />
              }
            </div>
          </div>
        </div>
        {vaporSecond == null &&
        pineSecond === "voice-orb" &&
        realtimeVoiceSurface != null ? (
          <div
            aria-hidden={realtimeVoiceSurface.statusText == null || undefined}
            className={IntlProvider(
              "pointer-events-none absolute z-30 -translate-x-1/2 -translate-y-1/2",
              realtimeVoiceSurface.statusText == null && "invisible",
            )}
            style={quartz({
              mascot: questSecond,
              orbScale: hill,
            })}
          >
            {
              <AvatarOverlayNativeFrameS
                isNativeMeasurementPlaceholder={nativeMaterialAttached}
                nativeMaterialAttached={nativeMaterialAttached}
                style={{
                  maxWidth: river({
                    mascot: questSecond,
                    viewport: layout.viewport,
                  }),
                }}
                text={realtimeVoiceSurface.statusText ?? "\xA0"}
              />
            }
          </div>
        ) : null}
        {(vaporSecond == null && avatar != null) ||
        AUTOMATION_MISSING_IN_APP_ERROR(vaporSecond) ? (
          <div
            className={IntlProvider(
              "group absolute cursor-grab active:cursor-grabbing",
              pineSecond === "hidden" && "pointer-events-none",
            )}
            style={{
              height: questSecond.height,
              left: questSecond.left,
              top: questSecond.top,
              width: questSecond.width,
            }}
            onLostPointerCapture={onMascotLostPointerCapture}
            onPointerCancel={onMascotPointerCancel}
            onPointerDown={onMascotPointerDown}
            onPointerMove={onMascotPointerMove}
            onPointerUp={onMascotPointerUp}
          >
            {vaporSecond == null ? (
              <div
                aria-hidden="true"
                className="codex-avatar-button pointer-events-none invisible absolute top-0 left-0"
                data-avatar-overlay-size="mascot"
                inert={true}
                style={mascotStyle}
              />
            ) : null}
            {
              <NativeContextMenuSurface items={avatarMenuItems}>
                <div
                  data-avatar-overlay-hit-region={
                    pineSecond === "hidden" ? undefined : "mascot"
                  }
                  className="h-full w-full"
                  onPointerEnter={elmSecond}
                  onPointerLeave={fernSecond}
                >
                  {
                    <EnsureRealtimeVoiceHandoffTargetInit
                      className="relative size-full"
                      handoff={realtimeVoiceSurface?.handoff ?? null}
                      surface="global-overlay"
                    >
                      {vaporSecond == null ? (
                        <MemoizedFormattedMessage reducedMotion="never">
                          <>
                            {pineSecond === "voice-orb" ||
                            realtimeVoiceSurface?.canStart === true ? (
                              <ensureIntlFormattersInit.div
                                key="voice-orb"
                                animate={
                                  pineSecond === "voice-orb"
                                    ? {
                                        opacity: 1,
                                        scale: hill,
                                      }
                                    : {
                                        opacity: 0,
                                        scale: hill * 0.45,
                                      }
                                }
                                className="absolute inset-0"
                                initial={false}
                                transition={oak}
                              >
                                {
                                  <ParseErrorMessageDetail
                                    glowEnabled={!nativeMaterialAttached}
                                    placement="center"
                                    presentationAnchorRef={
                                      realtimeVoiceSurface?.presentationAnchorRef
                                    }
                                    phase={mossSecond}
                                    voiceActivity={
                                      realtimeVoiceSurface?.activity ?? "idle"
                                    }
                                  />
                                }
                              </ensureIntlFormattersInit.div>
                            ) : null}
                            {hillSecond != null && pineSecond === "pet" ? (
                              <ensureIntlFormattersInit.div
                                key="pet"
                                animate={{
                                  opacity: 1,
                                  scale: 1,
                                }}
                                className="absolute inset-0"
                                initial={false}
                                transition={nest}
                              >
                                {hillSecond}
                              </ensureIntlFormattersInit.div>
                            ) : null}
                          </>
                        </MemoizedFormattedMessage>
                      ) : null}
                      {vaporSecond == null &&
                      mossSecond !== "active" &&
                      northSecond ? (
                        <Garnet
                          mascot={layout.mascot}
                          showsNotificationBadge={lunarSecond}
                        />
                      ) : null}
                      <Identity initial={false}>
                        {vaporSecond == null &&
                        tideSecond &&
                        groveSecond != null ? (
                          <AvatarMascotButton
                            key="mascot-badge"
                            animatesExit={!nativeMaterialAttached}
                            ignoresReducedMotion={true}
                            notificationBadge={groveSecond}
                            presentationPosition={
                              orbitSecond == null
                                ? undefined
                                : {
                                    left: `calc(50% + ${orbitSecond.x - 12}px)`,
                                    top: orbitSecond.y,
                                  }
                            }
                          />
                        ) : null}
                      </Identity>
                      {vaporSecond == null &&
                      tideSecond &&
                      groveSecond == null &&
                      nativeMaterialAttached &&
                      orbitSecond != null ? (
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute z-40 size-6 rounded-full opacity-0"
                          data-avatar-overlay-native-corner-radius="12"
                          data-avatar-overlay-native-surface-id="mascot-badge"
                          inert={true}
                          style={{
                            left: `calc(50% + ${orbitSecond.x - 12}px)`,
                            top: orbitSecond.y,
                          }}
                        />
                      ) : null}
                      {pineSecond === "hidden" ? null : (
                        <MemoizedFormattedMessage reducedMotion="never">
                          {
                            <Cedar
                              areControlsVisible={
                                pineSecond === "voice-orb" ||
                                AUTOMATION_MISSING_IN_APP_ERROR(
                                  pointerSurfaceId,
                                )
                              }
                              canStart={realtimeVoiceSurface?.canStart ?? false}
                              isRealtimeVoiceSurfaceVisible={
                                pineSecond === "voice-orb"
                              }
                              isMicrophoneMuted={
                                realtimeVoiceSurface?.microphoneMuted ?? false
                              }
                              isMuted={realtimeVoiceSurface?.muted ?? false}
                              isInert={
                                renderMode?.type === "native-root" &&
                                nativeMaterialAttached
                              }
                              nativeMaterialAttached={nativeMaterialAttached}
                              nativeSurfacePosition={
                                realtimeVoiceSurface?.nativeSurfacePosition
                              }
                              nativeSurfaceId={
                                AppInitialRgt(vaporSecond)
                                  ? vaporSecond
                                  : undefined
                              }
                              phase={mossSecond}
                              placement={layout.placement}
                              mascot={layout.mascot}
                              showsNotificationBadge={lunarSecond}
                              willResume={realtimeVoiceSurface?.willResume}
                              onStart={realtimeVoiceSurface?.onStart}
                              onStop={realtimeVoiceSurface?.onStop}
                              onToggleMicrophoneMute={
                                realtimeVoiceSurface?.onToggleMicrophoneMute
                              }
                              onToggleMute={realtimeVoiceSurface?.onToggleMute}
                            />
                          }
                        </MemoizedFormattedMessage>
                      )}
                    </EnsureRealtimeVoiceHandoffTargetInit>
                  }
                </div>
              </NativeContextMenuSurface>
            }
          </div>
        ) : null}
      </section>
    </main>
  );
}
