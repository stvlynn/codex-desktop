// Restored from ref/webview/assets/avatar-overlay-featuregate-page-By_CHFcE.js
// Wave FY — full polished body from `avatar-overlay-featuregate-page-By_CHFcE/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 2 (verified 11/13).

import { CODEX_APPSHOT_SHORTCUT_CHANGED_TYPE } from "../analytics/codex-appshot-shortcut-changed-type";
import { CodexPluginActionResult } from "../analytics/codex-plugin-action-result";
import { ensureComposerEsm_MT_Init } from "../composer/composer-esm-inits";
import { react, reactCompilerRuntime } from "../boundaries/react-cjs-runtime";
import { ensureRemoteSshConnectionEventInit } from "../environments/ensure-remote-ssh-connection-event-init";
import { commonJsInit, esmInit } from "../runtime/rolldown-runtime";
import { ensureViteModulepreloadRuntime } from "../runtime/vite-preload";
import { ensureSkillsPageHelpersInit } from "../skills/skills-page-helpers";

/** Wave FY unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurface: any = undefined;
/** Wave FY unresolved companion (missing-export:runtime/vite-preload.ts) */
const vitePreload: any = undefined;
const __vite__mapDeps = (harbor, indigo = __vite__mapDeps, jade = indigo.f || (indigo.f = ["../overlay/avatar-overlay-native-page", "./rolldown-runtime-BG2f4sTM.js", "./app-initial-C-fROkKo.js", "./app-initial-Czet5G9g.css", "./avatar-overlay-native-frame-fyNMBrWH.js", "./avatar-overlay-pill-dismiss-button-DqyLuTaP.js", "./avatar-overlay-pill-dismiss-button-BheeR2ow.css", "./avatar-mascot-button-DbJheYLr.js", "./codex-avatar-93dNPzLt.js", "./codex-avatar-CBhzyYwb.css", "./global-dictation-orb-DtjKqirr.js", "./global-dictation-orb-BOlLShjq.css", "./sound-on-DZELB64X.js", "./realtime-voice-handoff-target-Dyx7hOYI.js", "./create-resize-observer-NgApag1I.js", "./avatar-overlay-native-frame-UT9ONpB0.css", "./use-floating-window-pointer-interactivity-KA_kDpzs.js", "./use-avatar-overlay-selection-AlDkSEsR.js", "./custom-avatars-query-BoNA278E.js", "./avatar-overlay-debug-state-CtxOR8Zi.js", "./avatar-overlay-mascot-size-4juuy68a.js", "../overlay/avatar-overlay-page"])) => harbor.map(item => jade[item]);
function alpha() {
  let kite = NativeContextMenuSurface("3563904085"),
    lemon = NativeContextMenuSurface("620613358"),
    marble = CodexPluginActionResult(CODEX_APPSHOT_SHORTCUT_CHANGED_TYPE);
  return kite && (marble == null || marble.phase === "inactive" || lemon);
}
var bravo = esmInit(() => {
  ensureComposerEsm_MT_Init();
  ensureRemoteSshConnectionEventInit();
  ensureSkillsPageHelpersInit();
});
export function AvatarOverlayFeaturegatePage() {
  let falcon = alpha();
  return falcon ? <Falcon {...{}} /> : <Gamma {...{}} />;
}
var copper, delta, echo, Falcon, Gamma;
esmInit(() => {
  copper = reactCompilerRuntime();
  delta = commonJsInit(react(), 1);
  bravo();
  ensureViteModulepreloadRuntime();
  Falcon = delta.lazy(async () => ({
    default: (await vitePreload(async () => {
      let {
        AvatarOverlayNativePage
      } = await import("../overlay/avatar-overlay-native-page");
      return {
        AvatarOverlayNativePage
      };
    }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), import.meta.url)).AvatarOverlayNativePage
  }));
  Gamma = delta.lazy(async () => ({
    default: (await vitePreload(async () => {
      let {
        AvatarOverlayPage
      } = await import("../overlay/avatar-overlay-page");
      return {
        AvatarOverlayPage
      };
    }, __vite__mapDeps([21, 1, 2, 3, 5, 6, 7, 8, 9, 13, 14, 16, 17, 18, 19, 20]), import.meta.url)).AvatarOverlayPage
  }));
})();
export { AvatarOverlayFeaturegatePage as AvatarOverlayFeatureGatePage };
/** Wave FY: bind no longer required after full body promote */
export function bindAvatarOverlayFeatureGatePage(_next: unknown): void {}
export function ensureAvatarOverlayFeatureGatePageInit(): void {}
