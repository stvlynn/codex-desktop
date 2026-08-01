// Restored from ref/webview/assets/hotkey-window-new-thread-page-B1_4Sek-.js
// Wave FX — full polished body from `hotkey-window-new-thread-page-B1_4Sek-/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 6 (verified 21/27).

import { CodexBrowserProfileImportCookieStatus } from "../analytics/codex-browser-profile-import-cookie-status";
import { CodexPluginActionResult } from "../analytics/codex-plugin-action-result";
import { ensureComposerEsm_MT_Init } from "../composer/composer-esm-inits";
import { reactCompilerRuntime } from "../boundaries/react-cjs-runtime";
import { ConversationDiffSourceBridge } from "../conversation/conversation-diff-source-bridge";
import { ensureHasSeenRealtimeVoiceNuxAtomInit } from "../home/realtime-voice-nux";
import { HotkeyWindowDetailLayoutContext, useHotkeyWindowDetailLayout } from "../hooks/use-hotkey-window-detail-layout";
import { MemoizedFormattedMessage } from "../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit } from "../i18n/use-intl";
import { ensureAppIconKhInit } from "../icons/app-icon-kh";
import { strongMarkerFromOptions } from "../markdown/strong-marker-from-options";
import { ensureDynamicScriptLoadInit } from "../runtime/ensure-dynamic-script-load-init";
import { esmInit } from "../runtime/rolldown-runtime";
import { getCodeThemeRegistration } from "../themes/get-code-theme-registration";
import { initThreadScrollLayout, ThreadScrollLayout } from "../thread/thread-scroll-layout";
import { ensureNewThreadBhInit } from "../utils/wave-av-gap-ensure-inits";
import { appServices } from "./desktop-services";
import { ProjectSelectorControl } from "./project-selector-control";

/** Wave FX unresolved companion (missing-export:hosts/wsl-remote-connections.tsx) */
const WslRemoteConnections: any = undefined;
/** Wave FX unresolved companion (jsx-collision:hero@worktree/hero.ts) */
const AppInitialKm: any = undefined;
/** Wave FX unresolved companion (jsx-collision:ensureHotkeyThreadQptInit@utils/wave-av-gap-ensure-inits.ts) */
const AppInitialQpt: any = undefined;
/** Wave FX unresolved companion (jsx-collision:siteAnalyticsEventsPath@appgen/site-analytics-paths.ts) */
const AppInitialTT: any = undefined;
/** Wave FX unresolved companion (jsx-collision:parseDiffFromFile@diff/parse-diff-from-file.ts) */
const AppInitialTW: any = undefined;
/** Wave FX unresolved companion (jsx-collision:setKeyedAtomValueWithCleanup@utils/set-keyed-atom-value-with-cleanup.ts) */
const AppInitialZh: any = undefined;
export function HotkeyWindowNewThreadPage() {
  let delta = CodexPluginActionResult(getCodeThemeRegistration),
    echo = alpha,
    falcon;
  falcon = {
    title: <span className="max-w-full truncate">
        {<MemoizedFormattedMessage {...{
        id: "threadPage.newThread",
        defaultMessage: "New chat",
        description: "Header title for the home page"
      }} />}
      </span>,
    mainWindowPath: "/",
    canCollapseToHome: false
  };
  useHotkeyWindowDetailLayout(falcon);
  let gamma = <AppInitialTT>
      <AppInitialZh selectedProject={delta} showWorkspaceDropdownInUtilityBar={false} onLocalConversationCreated={echo} />
    </AppInitialTT>;
  let harbor = <div aria-hidden="true">
      {<WslRemoteConnections {...{
      className: "h-12 w-12 text-token-foreground/20"
    }} />}
    </div>;
  let indigo = <div className="flex h-full items-center justify-center px-panel">
      <div className="flex flex-col items-center gap-3 text-center">
        {harbor}
        <div className="flex flex-col items-center gap-1">
          <div className="heading-xl mt-2 font-normal text-token-foreground select-none">
            {<MemoizedFormattedMessage {...{
            id: "home.hero.letsBuild",
            defaultMessage: "Let’s build",
            description: "Label above the workspace name on the electron home page"
          }} />}
          </div>
          <ProjectSelectorControl variant="hero" />
        </div>
      </div>
    </div>;
  return <ConversationDiffSourceBridge className="h-full [--padding-panel:calc(var(--padding-panel-base)/2)]">
      {<ThreadScrollLayout {...{
      footer: gamma,
      children: indigo
    }} />}
    </ConversationDiffSourceBridge>;
}
function alpha(jade) {
  appServices.hotkeyWindowHotkeys?.open({
    path: AppInitialQpt(jade)
  });
}
var bravo, copper;
esmInit(() => {
  bravo = reactCompilerRuntime();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  ensureIntlFormattersInit();
  ensureNewThreadBhInit();
  CodexBrowserProfileImportCookieStatus();
  AppInitialKm();
  ensureAppIconKhInit();
  ensureDynamicScriptLoadInit();
  AppInitialTW();
  ensureHasSeenRealtimeVoiceNuxAtomInit();
  initThreadScrollLayout();
  HotkeyWindowDetailLayoutContext();
})();

/** Wave FX: bind no longer required after full body promote */
export function bindHotkeyWindowNewThreadPage(_next: unknown): void {}
export function ensureHotkeyWindowNewThreadPageInit(): void {}
