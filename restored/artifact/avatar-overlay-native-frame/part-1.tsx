// Restored from ref/webview/assets/avatar-overlay-native-frame-fyNMBrWH.js
// Wave GA — full polished body from `avatar-overlay-native-frame-fyNMBrWH/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 24 (verified 86/110).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 1/7
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

const AppInitialAgt: any = undefined;
/** Wave GA unresolved companion (missing-export:hosts/needs-apps.ts) */
const NeedsApps: any = undefined;
/** Wave GA unresolved companion (jsx-collision:compareSemver@utils/compare-semver.ts) */
const AppInitialDgt: any = undefined;
/** Wave GA unresolved companion (jsx-collision:dictationErrorMessages@composer/dictation-error-messages.ts) */
const AppInitialEct: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureComposerScrollBufferInit@composer/ensure-composer-scroll-buffer-init.ts) */
const AppInitialFct: any = undefined;
/** Wave GA unresolved companion (missing-export:utils/apply-svg.tsx) */
const applySvg: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureImportSettingsGctInit@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialGct: any = undefined;
/** Wave GA unresolved companion (jsx-collision:getChromeGlobal@browser/get-chrome-global.ts) */
const AppInitialHct: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureComposerEsm_Hlt_Init@boundaries/composer-esm-inits.ts) */
const AppInitialHlt: any = undefined;
/** Wave GA unresolved companion (missing-export:conversation/user-message3.tsx) */
const AppInitialHt: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureChromeRuntimeSettingsInit@desktop/ensure-chrome-runtime-settings-init.ts) */
const AppInitialJct: any = undefined;
/** Wave GA unresolved companion (missing-export:desktop/codex-dismiss-tooltips.tsx) */
const CodexDismissTooltips: any = undefined;
/** Wave GA unresolved companion (jsx-collision:identityValue@utils/identity-value.ts) */
const AppInitialLt: any = undefined;
/** Wave GA unresolved companion (jsx-collision:isHeartbeatItem@conversation/is-heartbeat-item.ts) */
const AppInitialRgt: any = undefined;
/** Wave GA unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurface: any = undefined;
/** Wave GA unresolved companion (jsx-collision:applySvg2@git/apply-svg2.tsx) */
const AppInitialSct: any = undefined;
/** Wave GA unresolved companion (missing-export:conversation/deferred-conversation-sgt.tsx) */
const DeferredConversationSgt: any = undefined;
/** Wave GA unresolved companion (jsx-collision:classifyTranscriptionFetchError@voice/classify-transcription-fetch-error.ts) */
const AppInitialTct: any = undefined;
/** Wave GA unresolved companion (missing-export:review/gpt-rosalind-preview.tsx) */
const AppInitialUgt: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureCloudApiClientInit@settings/cloud-api-client.ts) */
const AppInitialVct: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave GA unresolved companion (missing-export:desktop/rpc.ts) */
const initializeAppHostServices: any = undefined;
/** Wave GA unresolved companion (jsx-collision:applyActive2@conversation/apply-active2.ts) */
const AppInitialXct: any = undefined;
/** Wave GA unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
function at(petal) {
  return petal === "primary" ? "activity-primary" : "activity-secondary";
}
var alpha,
  bravo = esmInit(() => {
    alpha = ["activity-primary", "activity-secondary", "activity-tertiary"];
  });
function copper(quiet) {
  let {
      children,
      className,
      nativeMaterialAttached,
      nativePresentationOwnsMotion,
      nativeSurfaceId,
      onContextMenu,
      onFocusCapture,
      onPointerEnter,
      onPointerLeave,
      onPointerMove,
      onUpdate,
      role
    } = quiet,
    rain = nativePresentationOwnsMotion ? undefined : {
      opacity: 1
    };
  let seed = nativePresentationOwnsMotion ? false : {
    opacity: 0
  };
  let trail = nativePresentationOwnsMotion ? {
    duration: 0
  } : {
    duration: 0.18,
    ease: "easeOut"
  };
  let urn = harbor(nativeMaterialAttached, IntlProvider(avatarOverlayPillDismissButtonV.activityPillMaterial, className));
  let vine = nativeSurfaceId ?? at(role);
  let wind = <Gamma className={urn} cornerRadius={27} nativeSurfaceId={vine}>{children}</Gamma>;
  return <ensureIntlFormattersInit.div animate={rain} initial={seed} className="group no-drag relative z-10 w-full text-left" data-avatar-overlay-measure="notification-tray-row" role="listitem" transition={trail} onContextMenu={onContextMenu} onFocusCapture={onFocusCapture} onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave} onPointerMove={onPointerMove} onUpdate={onUpdate}>{wind}</ensureIntlFormattersInit.div>;
}
function Delta(yarrow) {
  let {
    children,
    className,
    nativeMaterialAttached,
    nativeSurfaceId,
    size,
    ...rest
  } = yarrow;
  let azure = kite[size],
    birch = harbor(nativeMaterialAttached, IntlProvider(avatarOverlayPillDismissButtonV.activityPillMaterial, "w-max max-w-full truncate rounded-full select-none text-token-text-secondary", azure.className, className));
  return <Gamma {...rest} className={birch} cornerRadius={azure.cornerRadius} nativeSurfaceId={nativeSurfaceId}>{children}</Gamma>;
}
function Echo(canyon) {
  let {
      nativeMaterialAttached,
      notificationCount
    } = canyon,
    dew = DeferredConversationSgt[1],
    ever = DeferredConversationSgt[2],
    field = AppInitialDgt({
      height: 54,
      left: 0,
      top: 0,
      width: 345
    }, dew);
  let grain = field,
    haven = AppInitialDgt({
      height: 54,
      left: 0,
      top: 0,
      width: 345
    }, ever);
  let ink = haven,
    jadeite = AppInitialUgt(notificationCount);
  let kernel = {
    height: jadeite
  };
  let leaf = notificationCount > 2 ? <div className={harbor(nativeMaterialAttached, IntlProvider(avatarOverlayPillDismissButtonV.activityPillMaterial, "absolute rounded-[27px]"))} data-avatar-overlay-native-corner-radius={27} data-avatar-overlay-native-surface-id="activity-tertiary" style={ink} /> : null;
  let maple = harbor(nativeMaterialAttached, IntlProvider(avatarOverlayPillDismissButtonV.activityPillMaterial, "absolute rounded-[27px]"));
  let nimbus = <div className={maple} data-avatar-overlay-native-corner-radius={27} data-avatar-overlay-native-surface-id="activity-secondary" style={grain} />;
  return <div aria-hidden="true" className="absolute top-0 right-0 left-0" data-avatar-overlay-measure="notification-tray-row" style={kernel}>{leaf}{nimbus}</div>;
}
function Falcon(opal) {
  let {
      children,
      emptyWidth,
      nativeMaterialAttached,
      nativePresentationOwnsMotion,
      onBlurCapture,
      onFocusCapture,
      onPointerDown,
      onPointerEnter,
      onPointerLeave,
      onSubmit,
      onUpdate,
      width
    } = opal,
    plume = nativePresentationOwnsMotion ? undefined : nativeMaterialAttached ? {
      opacity: 1
    } : {
      opacity: 1,
      width
    };
  let quillow = nativePresentationOwnsMotion ? undefined : {
    opacity: 0
  };
  let root = nativeMaterialAttached || nativePresentationOwnsMotion ? false : {
    opacity: 0,
    width: emptyWidth
  };
  let silk = nativePresentationOwnsMotion ? {
    duration: 0
  } : {
    opacity: {
      duration: 0.18,
      ease: [0.16, 1, 0.3, 1]
    },
    width: {
      bounce: 0.22,
      type: "spring",
      visualDuration: 0.32
    }
  };
  let thorn = harbor(nativeMaterialAttached, "no-drag flex h-10 items-center gap-3 rounded-full py-1.5 pr-1.5 pl-[14px] text-token-foreground");
  let upland = nativeMaterialAttached ? width : undefined,
    vista = {
      maxWidth: "calc(100vw - 12px)",
      width: upland
    };
  return <ensureIntlFormattersInit.form animate={plume} exit={quillow} initial={root} transition={silk} className={thorn} data-avatar-overlay-hit-region="notification-composer" data-avatar-overlay-native-corner-radius="20" data-avatar-overlay-native-surface-id="composer" style={vista} onBlurCapture={onBlurCapture} onFocusCapture={onFocusCapture} onPointerDown={onPointerDown} onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave} onSubmit={onSubmit} onUpdate={onUpdate}>{children}</ensureIntlFormattersInit.form>;
}
function Gamma(wisp) {
  let {
    children,
    className,
    cornerRadius,
    nativeSurfaceId,
    ...rest
  } = wisp;
  return <div {...rest} className={className} data-avatar-overlay-native-corner-radius={cornerRadius} data-avatar-overlay-native-surface-id={nativeSurfaceId}>{children}</div>;
}
function harbor(yonder, zenith) {
  return IntlProvider(zenith, "forced-colors:bg-[Canvas]", yonder ? "bg-transparent" : avatarOverlayPillDismissButtonV.cssMaterial, !yonder && avatarOverlayPillDismissButtonV.cssMaterialElevated);
}
var indigo,
  jade,
  kite,
  _t = esmInit(() => {
    indigo = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    useBrowserExtensionPluginSetupQuery();
    strongMarkerFromOptions();
    bravo();
    avatarOverlayPillDismissButtonY();
    jade = getJsxRuntime();
    kite = {
      micro: {
        className: "p-2 text-[8.5px] leading-none",
        cornerRadius: 14.5
      }
    };
  });
function AvatarOverlayNativeFrameS(anvil) {
  let {
      className,
      isNativeMeasurementPlaceholder = false,
      nativeMaterialAttached,
      style,
      text
    } = anvil,
    beacon = usePrefersReducedMotion(),
    crag = nativeMaterialAttached && !beacon,
    dome = isNativeMeasurementPlaceholder || undefined,
    eddy = isNativeMeasurementPlaceholder && "invisible",
    fjord = IntlProvider("no-drag pointer-events-none", eddy, className);
  let glen = isNativeMeasurementPlaceholder || undefined,
    hearth = isNativeMeasurementPlaceholder ? text : <ensureIntlFormattersInit.span key={text} animate={{
      opacity: 1
    }} className="loading-shimmer-pure-text max-w-full truncate align-bottom" initial={crag ? {
      opacity: 0
    } : false} transition={crag ? {
      delay: 0.06,
      duration: 0.12,
      ease: [0.4, 0, 0.6, 1]
    } : {
      duration: 0
    }}>{text}</ensureIntlFormattersInit.span>;
  return <Delta aria-hidden={dome} aria-live="polite" className={fjord} inert={glen} nativeMaterialAttached={nativeMaterialAttached} nativeSurfaceId="voice-status" role="status" size="micro" style={style}>{hearth}</Delta>;
}
var lemon,
  marble,
  avatarOverlayNativeFrameC = esmInit(() => {
    lemon = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    useBrowserExtensionPluginSetupQuery();
    _t();
    ensureClientCoordinationServiceInit();
    marble = getJsxRuntime();
  }),
  nickel,
  Onyx,
  pearl = esmInit(() => {
    react();
    nickel = getJsxRuntime();
    Onyx = inlet => <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...inlet}><path d="M12.6961 20.1078C12.9614 20.1078 13.1788 20.0232 13.348 19.8539C13.5173 19.6846 13.602 19.4765 13.602 19.2294V16.3196H13.8216C15.2948 16.3196 16.5186 16.5484 17.4931 17.0059C18.4676 17.4634 19.2843 18.3098 19.9431 19.5451C20.0712 19.7922 20.2176 19.9477 20.3824 20.0118C20.5471 20.0758 20.7118 20.1078 20.8765 20.1078C21.0778 20.1078 21.2608 20.0232 21.4255 19.8539C21.5902 19.6846 21.6725 19.4353 21.6725 19.1059C21.6725 17.2301 21.3958 15.6105 20.8422 14.2471C20.2886 12.8837 19.433 11.8337 18.2755 11.0971C17.118 10.3605 15.6333 9.99216 13.8216 9.99216H13.602V7.09608C13.602 6.84902 13.5173 6.63399 13.348 6.45098C13.1788 6.26797 12.9569 6.17647 12.6824 6.17647C12.4993 6.17647 12.3346 6.21993 12.1882 6.30686C12.0418 6.39379 11.8725 6.52876 11.6804 6.71176L5.6549 12.3255C5.5085 12.4627 5.40784 12.6 5.35294 12.7373C5.29804 12.8745 5.27059 13.0118 5.27059 13.149C5.27059 13.2771 5.29804 13.4098 5.35294 13.5471C5.40784 13.6843 5.5085 13.8216 5.6549 13.9588L11.6804 19.6137C11.8542 19.7784 12.0212 19.902 12.1814 19.9843C12.3415 20.0667 12.5131 20.1078 12.6961 20.1078Z" fill="currentColor" /></svg>;
  });
export { avatarOverlayNativeFrameC };
export { AvatarOverlayNativeFrameS };
