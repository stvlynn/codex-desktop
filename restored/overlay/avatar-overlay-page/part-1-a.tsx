// Restored from ref/webview/assets/avatar-overlay-page--lFBkhmD.js
// Wave FY — full polished body from `avatar-overlay-page--lFBkhmD/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 39 (verified 132/171).
// Careful split 1/3
/* split-lane-import-depth:1 */

import {
  ensureAvatarOverlayPillDismissButtonAtomsInit,
  ensureAvatarOverlayPillDismissButtonYieldInit,
} from "../../artifact/avatar-overlay-pill-dismiss-button";
import {
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
} from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_Act_Init } from "../../conversation/conversation-page-esm-inits";
import {
  jsxRuntime as getJsxRuntime,
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { activeTurnsOrNull } from "../../conversation/active-turns-or-null";
import { createDictationTranscriptSession } from "../../dictation/create-dictation-transcript-session";
import { ensureIntlFormattersInit } from "../../i18n/use-intl";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { useBrowserExtensionPluginSetupQuery } from "../../skills/use-browser-extension-plugin-setup-query";
import { Identity } from "../../utils/identity";
import { ensureSettingsGlyphNltInit } from "../../utils/wave-as-gap-ensure-inits";
import {
  avatarOverlaySelectionO,
  avatarOverlaySelectionX,
} from "../use-avatar-overlay-selection";

// Cross-part stubs (same-package helpers live in sibling parts).
const $n: any = undefined;

export const AvatarOverlayPageHelper12: any = undefined;

export const alpha: any = undefined;

export const bravo: any = undefined;

const copper: any = undefined;

const delta: any = undefined;

export const echo: any = undefined;

const falcon: any = undefined;

export const gamma: any = undefined;

const harbor: any = undefined;

export const indigo: any = undefined;

const NativeContextMenuSurface: any = undefined;

/** Wave FY unresolved companion (missing-export:hosts/needs-apps.ts) */
export const NeedsApps: any = undefined;

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
export const AppInitialHct: any = undefined;

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
export const NativeContextMenuSurfaceStub: any = undefined;

/** Wave FY unresolved companion (jsx-collision:applySvg2@git/apply-svg2.tsx) */
const AppInitialSct: any = undefined;

/** Wave FY unresolved companion (jsx-collision:deferredUiU@ui/deferred-ui-u.ts) */
const AppInitialU: any = undefined;

/** Wave FY unresolved companion (missing-export:ui/deferred-ui-v2.tsx) */
const DeferredUiV2: any = undefined;

/** Wave FY unresolved companion (jsx-collision:ensureCloudApiClientInit@settings/cloud-api-client.ts) */
const AppInitialVct: any = undefined;

/** Wave FY unresolved companion (missing-export:ui/intl-provider.tsx) */
export const IntlProvider: any = undefined;

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

var _n = esmInit(() => {
  activeTurnsOrNull();
  ensureAppShellAtomsInit();
  avatarOverlaySelectionX();
});

var lemon = esmInit(() => {
  avatarOverlaySelectionO();
  ensureAvatarOverlayPillDismissButtonAtomsInit();
});

var nickel = esmInit(() => {});

export var onyx,
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
        description:
          "Accessible label and tooltip for starting a new voice chat from the floating avatar",
      },
      resume: {
        id: "avatarOverlay.resumeRealtimeVoice",
        defaultMessage: "Resume voice chat",
        description:
          "Accessible label and tooltip for resuming the most recent voice chat from the floating avatar",
      },
      stop: {
        id: "avatarOverlay.stopRealtimeVoice",
        defaultMessage: "Stop voice chat",
        description:
          "Accessible label and tooltip for stopping realtime voice from the floating avatar",
      },
      starting: {
        id: "avatarOverlay.startingRealtimeVoice",
        defaultMessage: "Starting voice chat",
        description:
          "Accessible label and tooltip while realtime voice starts from the floating avatar",
      },
      openThread: {
        id: "avatarOverlay.openRealtimeVoiceThread",
        defaultMessage: "Open voice chat",
        description:
          "Accessible label and tooltip for opening the detailed Codex task from realtime voice",
      },
      muteMicrophone: {
        id: "avatarOverlay.muteMicrophone",
        defaultMessage: "Mute microphone",
        description:
          "Accessible label and tooltip for muting microphone input from the floating avatar",
      },
      unmuteMicrophone: {
        id: "avatarOverlay.unmuteMicrophone",
        defaultMessage: "Unmute microphone",
        description:
          "Accessible label and tooltip for unmuting microphone input from the floating avatar",
      },
      muteOutput: {
        id: "avatarOverlay.muteOutput",
        defaultMessage: "Mute voice chat",
        description:
          "Accessible label and tooltip for showing realtime voice output as captions from the floating avatar",
      },
      unmuteOutput: {
        id: "avatarOverlay.unmuteOutput",
        defaultMessage: "Unmute voice chat",
        description:
          "Accessible label and tooltip for resuming realtime voice audio output from the floating avatar",
      },
    });
  });

export var slate,
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

export function xenon(trunnion: any, boss: any) {
  if (boss <= harbor) return trunnion.scrollHeight;
  let cam = copper(trunnion);
  return (
    cam[delta(cam, $n(trunnion, cam)) + harbor]?.offsetTop ??
    trunnion.scrollHeight
  );
}
