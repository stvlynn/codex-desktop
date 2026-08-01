// Restored from ref/webview/assets/realtime-voice-launch-surface-C9glm7ls.js
// Wave FX — full polished body from `realtime-voice-launch-surface-C9glm7ls/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 6 (verified 35/41).

import { CODEX_APPSHOT_SHORTCUT_CHANGED_TYPE } from "../analytics/codex-appshot-shortcut-changed-type";
import { CodexPluginActionResult } from "../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../analytics/codex-plugin-action-type-enum";
import { appScopeAtom, ensureAppScopeInit } from "../runtime/app-scope-runtime";
import { ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init } from "../composer/composer-esm-inits";
import { reactCompilerRuntime } from "../boundaries/react-cjs-runtime";
import { useLocation } from "../boundaries/react-router-navigation";
import { marketplacePathsEqual } from "../browser/browser-use-helpers";
import { ensureRemoteSshConnectionEventInit } from "../environments/ensure-remote-ssh-connection-event-init";
import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit } from "../i18n/use-intl";
import { usePrefersReducedMotion } from "../motion/use-prefers-reduced-motion";
import { mergeDirectoryPluginApps } from "../plugins/merge-directory-plugin-apps";
import { esmInit } from "../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../settings/settings-ipc";
import { partitionPluginSkills } from "../skills/partition-plugin-skills";
import { useBrowserExtensionPluginSetupQuery } from "../skills/use-browser-extension-plugin-setup-query";
import { ensureRealtimeVoiceStageLayoutTokensInit as EnsureRealtimeVoiceStageLayoutTokensInit, ensureRealtimeVoiceStageMotionTokensInit, REALTIME_VOICE_ORB_ENTER_TRANSITION, REALTIME_VOICE_ORB_EXIT_TRANSITION, REALTIME_VOICE_ORB_REDUCED_MOTION_TRANSITION, REALTIME_VOICE_STAGE_BOTTOM_TRANSLATE, REALTIME_VOICE_STAGE_TOP_CLASS, REALTIME_VOICE_STAGE_TOP_TRANSLATE, RealtimeVoiceStageLayout } from "../ui/realtime-voice-stage-layout";
import { parseErrorMessageDetail as ParseErrorMessageDetail } from "../utils/parse-error-message-detail";
import { ensurePersonalizationCInit } from "../utils/wave-as-gap-ensure-inits";
import { cancelRealtimeVoiceLaunch } from "./cancel-realtime-voice-launch";
import { ensureClientCoordinationServiceInit } from "./ensure-client-coordination-service-init";
import { markRealtimeVoiceHandoffComplete } from "./mark-realtime-voice-handoff-complete";

/** Wave FX unresolved companion (jsx-collision:ensureComposerScrollBufferInit@composer/ensure-composer-scroll-buffer-init.ts) */
const AppInitialFct: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredUiH@ui/deferred-ui-h.ts) */
const AppInitialH: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-ui-iw-2.tsx) */
const DeferredUiIw: any = undefined;
/** Wave FX unresolved companion (missing-export:ui/deferred-ui-rw-2.tsx) */
const DeferredUiRw: any = undefined;
/** Wave FX unresolved companion (jsx-collision:deferredUiU@ui/deferred-ui-u.ts) */
const AppInitialU: any = undefined;
/** Wave FX unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
export function RealtimeVoiceLaunchSurface() {
  let delta = CodexPluginActionType(appScopeAtom),
    echo = useLocation(),
    falcon = CodexPluginActionResult(DeferredUiIw),
    gamma = CodexPluginActionResult(CODEX_APPSHOT_SHORTCUT_CHANGED_TYPE),
    harbor = CodexPluginActionResult(AppInitialU),
    indigo = usePrefersReducedMotion(),
    jade = falcon == null || DeferredUiRw(`${echo.pathname}${echo.search}`, falcon.originPath, partitionPluginSkills(gamma, harbor));
  if (falcon == null || !jade || falcon.request.source === "composer_button_existing_thread" && falcon.phase !== "failed") return null;
  if (falcon.phase === "failed") {
    let yellow = <h2 className="text-base font-medium text-token-foreground">
        {<MemoizedFormattedMessage {...{
        id: "realtimeVoice.launch.failedTitle",
        defaultMessage: "Voice chat couldn’t start",
        description: "Title shown when an optimistic realtime voice launch fails"
      }} />}
      </h2>;
    let zinc = falcon.error || <MemoizedFormattedMessage {...{
      id: "realtimeVoice.launch.failedDescription",
      defaultMessage: "Try again, or go back",
      description: "Description shown when an optimistic realtime voice launch fails"
    }} />;
    let amber = <div className="flex flex-col gap-1">
        {yellow}
        <p className="text-sm text-token-text-secondary">
          {zinc}
        </p>
      </div>;
    let basalt = () => {
      marketplacePathsEqual(delta, falcon.request, falcon.originPath).catch(alpha);
    };
    let cedar = <MemoizedFormattedMessage {...{
      id: "realtimeVoice.launch.retry",
      defaultMessage: "Try again",
      description: "Button that retries a failed realtime voice launch"
    }} />;
    let daisy = <ReadLoginRouteQuerySnapshot {...{
      color: "primary",
      onClick: basalt,
      size: "medium",
      children: cedar
    }} />;
    let ember = () => {
      cancelRealtimeVoiceLaunch(delta);
    };
    let flint = <MemoizedFormattedMessage {...{
      id: "realtimeVoice.launch.back",
      defaultMessage: "Back",
      description: "Button that dismisses a failed realtime voice launch and returns to the previous surface"
    }} />;
    let garnet = <ReadLoginRouteQuerySnapshot {...{
      color: "secondary",
      onClick: ember,
      size: "medium",
      children: flint
    }} />;
    let hazel = <div className="flex gap-2">
        {daisy}
        {garnet}
      </div>;
    let ivory;
    return <div className="absolute inset-0 z-30 flex items-center justify-center bg-token-main-surface-primary">
        <div className="flex flex-col items-center gap-4 text-center">
          {amber}
          {hazel}
        </div>
      </div>;
  }
  let kite = gamma.phase === "active" && gamma.preferredPresentationSurface === "main-thread",
    lemon = falcon.phase === "connected" && falcon.handoffComplete,
    marble = +!lemon,
    nickel = {
      opacity: marble
    };
  let onyx = () => {
    lemon && ensurePersonalizationCInit(delta, falcon.request);
  };
  let pearl = indigo ? REALTIME_VOICE_ORB_EXIT_TRANSITION : REALTIME_VOICE_STAGE_TOP_TRANSLATE,
    quartz = <span className="sr-only" role="status">
        {<MemoizedFormattedMessage {...{
        id: "realtimeVoice.launch.starting",
        defaultMessage: "Starting voice chat",
        description: "Accessible status announced while realtime voice starts"
      }} />}
      </span>;
  let river = {
    transform: RealtimeVoiceStageLayout
  };
  let slate = {
    height: 112,
    width: 112
  };
  let _RealtimeVoiceLaunchSurface = !kite,
    timber = () => markRealtimeVoiceHandoffComplete(delta, falcon.request);
  let umbra = gamma.phase === "inactive" ? "starting" : gamma.phase,
    violet = gamma.phase === "inactive" ? "idle" : gamma.activity,
    willow = <ParseErrorMessageDetail {...{
      className: "!aspect-square !size-full",
      glowEnabled: false,
      phase: umbra,
      placement: "center",
      voiceActivity: violet
    }} />;
  let xenon = <div className={REALTIME_VOICE_STAGE_BOTTOM_TRANSLATE}>
      <div className={ensureRealtimeVoiceStageMotionTokensInit} style={river}>
        <div className="relative flex" style={slate}>
          {<EnsureRealtimeVoiceStageLayoutTokensInit {...{
          isConnecting: _RealtimeVoiceLaunchSurface,
          onHandoffComplete: timber,
          orb: willow,
          orbDiameter: 112,
          reduceMotion: indigo
        }} />}
        </div>
      </div>
    </div>;
  return <ensureIntlFormattersInit.div {...{
    animate: nickel,
    className: "absolute inset-0 z-30 bg-token-main-surface-primary",
    initial: false,
    onAnimationComplete: onyx,
    transition: pearl,
    children: [quartz, xenon]
  }} />;
}
function alpha() {}
var bravo, copper;
esmInit(() => {
  bravo = reactCompilerRuntime();
  useBrowserExtensionPluginSetupQuery();
  ensureComposerEsm_MT_Init();
  ensureIntlFormattersInit();
  ensureComposerEsm_P5_Init();
  ensureSettingsQueryAtomsInit();
  ensureClientCoordinationServiceInit();
  AppInitialFct();
  ensureAppScopeInit();
  REALTIME_VOICE_ORB_REDUCED_MOTION_TRANSITION();
  ensureRemoteSshConnectionEventInit();
  mergeDirectoryPluginApps();
  REALTIME_VOICE_STAGE_TOP_CLASS();
  AppInitialH();
  REALTIME_VOICE_ORB_ENTER_TRANSITION();
})();

/** Wave FX: bind no longer required after full body promote */
export function bindRealtimeVoiceLaunchSurface(_next: unknown): void {}
export function ensureRealtimeVoiceLaunchSurfaceInit(): void {}
