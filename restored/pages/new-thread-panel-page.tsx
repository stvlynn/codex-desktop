// Restored from ref/webview/assets/new-thread-panel-page-Dp9Fyy4t.js
// Wave FY — full polished body from `new-thread-panel-page-Dp9Fyy4t/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 9 (verified 18/27).

import { CodexBrowserProfileImportCookieStatus } from "../analytics/codex-browser-profile-import-cookie-status";
import { CodexPluginActionResult } from "../analytics/codex-plugin-action-result";
import { ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Tft_Init } from "../composer/composer-esm-inits";
import { reactCompilerRuntime } from "../boundaries/react-cjs-runtime";
import { Navigate } from "../boundaries/react-router-navigation";
import { CodexHomeAnnouncements, ensureCodexHomeAnnouncementsInit } from "../home/codex-home-announcements";
import { ensureHasSeenRealtimeVoiceNuxAtomInit } from "../home/realtime-voice-nux";
import { useSelectedHost } from "../hosts/use-selected-host";
import { ensureIntlFormattersInit, useIntl } from "../i18n/use-intl";
import { esmInit } from "../runtime/rolldown-runtime";
import { getCodeThemeRegistration } from "../themes/get-code-theme-registration";
import { ensureNewThreadBhInit, ensureNewThreadRmInit } from "../utils/wave-av-gap-ensure-inits";

/** Wave FY unresolved companion (jsx-collision:ensureNewThreadBhInit@utils/wave-av-gap-ensure-inits.ts) */
const AppInitialBh: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspaceDhInit: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureNewThreadLmInit@utils/wave-av-gap-ensure-inits.ts) */
const AppInitialLm: any = undefined;
/** Wave FY unresolved companion (jsx-collision:browserUseOriginStateQueryAtom@boundaries/browser-use-mutation-facades.ts) */
const AppInitialOO: any = undefined;
/** Wave FY unresolved companion (jsx-collision:siteAnalyticsEventsPath@appgen/site-analytics-paths.ts) */
const AppInitialTT: any = undefined;
/** Wave FY unresolved companion (jsx-collision:parseDiffFromFile@diff/parse-diff-from-file.ts) */
const AppInitialTW: any = undefined;
/** Wave FY unresolved companion (missing-export:hosts/deferred-hosts-vh.ts) */
const deferredHostsVh: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FY unresolved companion (jsx-collision:setKeyedAtomValueWithCleanup@utils/set-keyed-atom-value-with-cleanup.ts) */
const AppInitialZh: any = undefined;
export function NewThreadPanelPage() {
  let delta = useIntl(),
    echo = CodexPluginActionResult(getCodeThemeRegistration);
  {
    let marble;
    return <Navigate {...{
      to: "/",
      replace: true
    }} />;
  }
  let falcon = deferredHostsVh.isRecording() ? <AppInitialOO onPaint={alpha} /> : null;
  let gamma = delta.formatMessage({
    id: "homePage.mainContent",
    defaultMessage: "Main content",
    description: "Main landmark label for the home page"
  });
  let harbor = <div className="mx-auto flex w-full max-w-3xl flex-col gap-3 px-panel">
      <div className="flex-1" />
    </div>;
  let indigo = <div className="[container-type:size] relative flex w-full flex-1 flex-col items-center justify-center overflow-hidden [container-name:home-main-content]" role="main" aria-label={gamma}>
      {harbor}
    </div>;
  let jade = IntlProvider(ensureSelectWorkspaceDhInit, "z-10 -mt-[var(--thread-footer-overlap)] flex flex-col gap-2 pb-2");
  let kite = <div className="home-banners mt-2 flex flex-col gap-2 empty:hidden">
      {<CodexHomeAnnouncements {...{}} />}
    </div>;
  let lemon = <div className={jade}>
      {kite}
      <AppInitialTT>
        <AppInitialZh className="electron:hidden" selectedProject={echo} />
      </AppInitialTT>
    </div>;
  return <AppInitialLm>
      {falcon}
      <div className="flex h-full flex-col" data-vscode-context={'{"chatgpt.supportsNewChatMenu": true}'} tabIndex={0}>
        <div className="relative flex h-full flex-col">
          {indigo}
          {lemon}
        </div>
      </div>
    </AppInitialLm>;
}
function alpha() {
  return deferredHostsVh.markHomeVisible();
}
var bravo, copper;
esmInit(() => {
  bravo = reactCompilerRuntime();
  ensureComposerEsm_Tft_Init();
  ensureComposerEsm_MT_Init();
  ensureIntlFormattersInit();
  ensureComposerEsm_P5_Init();
  ensureCodexHomeAnnouncementsInit();
  ensureNewThreadBhInit();
  CodexBrowserProfileImportCookieStatus();
  AppInitialBh();
  useSelectedHost();
  AppInitialTW();
  ensureNewThreadRmInit();
  ensureHasSeenRealtimeVoiceNuxAtomInit();
})();

/** Wave FY: bind no longer required after full body promote */
export function bindNewThreadPanelPage(_next: unknown): void {}
export function ensureNewThreadPanelPageInit(): void {}
