// Restored from ref/webview/assets/browser-sidebar-hidden-browser-use-webview-host-DiWBG71p.js
// Wave FY — full polished body from `browser-sidebar-hidden-browser-use-webview-host-DiWBG71p/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 8 (verified 23/30).

import { CodexBrowserSurfaceActionType } from "../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../analytics/codex-plugin-action-result";
import { ensureComposerEsm_M0_Init, ensureComposerEsm_MT_Init } from "../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_A0_Init, ensureConversationPageEsm_B0_Init } from "../conversation/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../boundaries/react-cjs-runtime";
import { MEMORIES_ID } from "../config/memories-id";
import { filterProjectsByHost as FilterProjectsByHost } from "../environments/filter-projects-by-host";
import { AGENT_MODE_BY_HOST_ID_STORAGE_KEY } from "../hosts/agent-mode-storage-key";
import { AppIconF0 } from "../icons/app-icon-f0";
import { ensureAppIconL0Init } from "../icons/app-icon-l0";
import { strongMarkerFromOptions } from "../markdown/strong-marker-from-options";
import { ensureAppShellAtomsInit } from "../navigation/app-shell-atoms";
import { commonJsInit, esmInit } from "../runtime/rolldown-runtime";
import { getIconPixelSize } from "../ui/icon-pixel-size";
import { identityValue } from "../utils/identity-value";
import { ensureSettingsGlyphI0Init } from "../utils/wave-as-gap-ensure-inits";
import { asBrowserTabId } from "./as-browser-tab-id";
import { useBrowserOpenTarget } from "./use-browser-open-target";

/** Wave FY unresolved companion (missing-export:ui/deferred-ui-bz.ts) */
const deferredUiBZ: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredUiD8@ui/deferred-ui-d8.ts) */
const AppInitialD8: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/cloud.tsx) */
const Cloud: any = undefined;
/** Wave FY unresolved companion (jsx-collision:flashBrowserCommentPopupShake@browser/flash-browser-comment-popup-shake.ts) */
const AppInitialLO: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureSvgToDataUriInit@utils/svg-to-data-uri.ts) */
const AppInitialP0: any = undefined;
/** Wave FY unresolved companion (missing-export:boundaries/browser-use-mutation-facades.ts) */
const ensureOpenLinkTargetHelpersInit: any = undefined;
/** Wave FY unresolved companion (missing-export:shell/normalize-presence-to-normal.ts) */
const normalizePresenceToNormal: any = undefined;
export function BrowserSidebarHiddenBrowserUseWebviewHost(marble: unknown) {
  let {
      browserUseTabIdsKey,
      conversationId
    } = marble,
    nickel = CodexBrowserSurfaceActionType(AppInitialD8, conversationId),
    onyx = CodexPluginActionResult(ensureAppIconL0Init.activeTab$),
    pearl = CodexPluginActionResult(ensureConversationPageEsm_A0_Init.activeTab$),
    quartz = CodexPluginActionResult(AppIconF0),
    river = CodexPluginActionResult(ensureOpenLinkTargetHelpersInit),
    slate,
    timber;
  slate = garnet => river.on("change", garnet);
  timber = () => river.get();
  let umbra = echo.useSyncExternalStore(slate, timber, bravo),
    violet = CodexPluginActionResult(ensureComposerEsm_M0_Init),
    willow = CodexPluginActionResult(useBrowserOpenTarget),
    xenon = CodexPluginActionResult(AppInitialP0),
    yellow,
    zinc;
  yellow = hazel => xenon.on("change", hazel);
  zinc = () => xenon.get();
  let amber = echo.useSyncExternalStore(yellow, zinc, alpha),
    _BrowserSidebarHiddenBrowserUseWebviewHost = quartz || umbra > 0,
    basalt = violet && willow || amber > 0,
    cedar = new Set(Cloud(conversationId, {
      bottom: onyx,
      right: pearl
    }, {
      bottom: _BrowserSidebarHiddenBrowserUseWebviewHost,
      right: basalt
    }));
  let daisy = cedar;
  if (!nickel && daisy.size > 0) return null;
  let ember, flint;
  flint = Symbol.for("react.early_return_sentinel");
  bb0: {
    let ivory = lotus => !daisy.has(lotus);
    let jasper = browserUseTabIdsKey.split("\0").map(asBrowserTabId).filter(ivory);
    if (jasper.length === 0) {
      flint = null;
      break bb0;
    }
    let kelp;
    kelp = mint => <BrowserSidebarHiddenBrowserUseWebviewHostHelper3 key={mint} {...{
      browserTabId: mint,
      conversationId
    }} />;
    ember = jasper.map(kelp);
  }
  if (flint !== Symbol.for("react.early_return_sentinel")) return flint;
  return <>{ember}</>;
}
function alpha() {
  return 0;
}
function bravo() {
  return 0;
}
function BrowserSidebarHiddenBrowserUseWebviewHostHelper3(gamma) {
  let {
      browserTabId,
      conversationId
    } = gamma,
    harbor = getIconPixelSize(),
    indigo = echo.useRef(null),
    jade = () => normalizePresenceToNormal.getSnapshot(conversationId, browserTabId);
  let kite = echo.useSyncExternalStore(normalizePresenceToNormal.subscribe, jade, copper);
  if (kite != null && kite.tabType !== AGENT_MODE_BY_HOST_ID_STORAGE_KEY.WEB) return null;
  let lemon = kite == null || kite.url.length === 0 ? "about:blank" : kite.url;
  return <FilterProjectsByHost {...{
    bounds: null,
    browserTabId,
    conversationId,
    hostKind: "hidden-browser-use",
    initialUrl: lemon,
    isVisible: false,
    scale: 1,
    shouldBootstrapWhenHidden: true,
    shouldPaint: false,
    webviewRef: indigo,
    windowZoom: harbor
  }} />;
}
function copper() {
  return null;
}
var delta, echo, falcon;
esmInit(() => {
  delta = reactCompilerRuntime();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  echo = commonJsInit(react(), 1);
  identityValue();
  ensureSettingsGlyphI0Init();
  ensureConversationPageEsm_B0_Init();
  ensureAppShellAtomsInit();
  MEMORIES_ID();
  deferredUiBZ();
  AppInitialLO();
})();

/** Wave FY: bind no longer required after full body promote */
export function bindHiddenBrowserUseWebviewHost(_next: unknown): void {}
export function ensureHiddenBrowserUseWebviewHostInit(): void {}

/** Bundle public export name (IMPORT_MAP / original `HiddenBrowserUseWebviewHost`). */
export {
  BrowserSidebarHiddenBrowserUseWebviewHost as HiddenBrowserUseWebviewHost,
};
