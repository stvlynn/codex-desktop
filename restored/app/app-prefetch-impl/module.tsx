// Restored from ref/webview/assets/app-prefetch-impl-BNGKTmLU.js
// Wave FY — full polished body from `app-prefetch-impl-BNGKTmLU/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 36 (verified 41/77).
// AST split 1/1
/* split-lane-import-depth:1 */


import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { ensureComposerEsm_J0_Init, ensureComposerEsm_MT_Init } from "../../composer/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { MEMORIES_ID } from "../../config/memories-id";
import { QueuedMessageTraySurface } from "../../conversation/queued-message-tray-surface";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { LOCAL_ENVIRONMENT_CONFIG_PATH_KEY } from "../../env/codex-path-env-keys";
import { pathContainsWorktreesDir } from "../../files/path-contains-worktrees-dir";
import { remoteUpstreamUrl } from "../../git/remote-upstream-url";
import { homeDirectoryQueryAtom } from "../../hooks/home-directory-query";
import { ensureHostConfigIdInit, ensureHostRpcClientsInit } from "../../hooks/host-rpc-client";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
import { ensureUseGitConfigValueInit, useGitConfigValue } from "../../hooks/use-git-config-value";
import { ensureUseGitSubmodulePathsInit, useGitSubmodulePaths } from "../../hooks/use-git-submodule-paths";
import { hostConfig2 } from "../../hosts/host-config2";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { readScrollTop } from "../../navigation/app-action-dom";
import { isOpenaiCuratedMarketplaceToken } from "../../plugins/is-openai-curated-marketplace-token";
import { matchesOptionalHostPluginIds } from "../../plugins/matches-optional-host-plugin-ids";
import { pluginMarketplaceRequestFields } from "../../plugins/plugin-marketplace-request-fields";
import { ensureInstalledPluginsQueryInit } from "../../plugins/use-installed-plugins-query";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureViteModulepreloadRuntime } from "../../runtime/vite-preload";
import { readCodexHomeFromQuery } from "../../settings/read-codex-home-from-query";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { Badge } from "../../ui/badge";
import { deferredVX } from "../../ui/deferred-vx";
import { semanticAccentColors } from "../../ui/semantic-accent-colors";
import { extractColonPrefixedNamedTokens } from "../../utils/extract-colon-prefixed-named-tokens";
import { reuseArrayIfShallowEqual } from "../../utils/reuse-array-if-shallow-equal";
import { titleCaseColonSegments } from "../../utils/title-case-colon-segments";
import { quickChatSurfaceCollapsedAtom } from "../../windows/quick-chat-atoms";

const AppInitialA3: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredGitAW@git/deferred-git-aw.ts) */
const AppInitialAW: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredUiB@ui/deferred-ui-b.ts) */
const AppInitialB: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredUiCW@ui/deferred-ui-cw.ts) */
const AppInitialCW: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureEnvironmentLabelsD3Init: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureComposerEsm_DN_Init@composer/composer-esm-inits.ts) */
const AppInitialDN: any = undefined;
/** Wave FY unresolved companion (missing-export:apps/use-app-host-update-status-infinite-query.ts) */
const useAppHostUpdateStatusInfiniteQuery: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredNavigationEN@navigation/deferred-navigation-en-2.ts) */
const AppInitialEN: any = undefined;
/** Wave FY unresolved companion (jsx-collision:usePetsSettingsController@settings/use-pets-settings-controller.ts) */
const AppInitialEz: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-f22.tsx) */
const DeferredUiF22: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureEnvironmentLabelsF3Init: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureEnvironmentLabelsF3Init@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialF3: any = undefined;
/** Wave FY unresolved companion (missing-export:boundaries/browser-use-plugin-facades.ts) */
const ensureConfigQueryAtomsInit: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredUiHX@ui/deferred-ui-hx.ts) */
const AppInitialHX: any = undefined;
/** Wave FY unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostId: any = undefined;
/** Wave FY unresolved companion (missing-export:hosts/deferred-hosts-j4.ts) */
const deferredHostsJ4: any = undefined;
/** Wave FY unresolved companion (missing-export:settings/use-local-environment-editor-state.ts) */
const useLocalEnvironmentEditorState: any = undefined;
/** Wave FY unresolved companion (jsx-collision:setReviewDiffFilter@review/set-review-diff-filter.ts) */
const AppInitialOW: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureEnvironmentLabelsP3Init@utils/wave-at-gap-ensure-inits.ts) */
const AppInitialP3: any = undefined;
/** Wave FY unresolved companion (missing-export:navigation/data-app-action-review-file-expanded-2.ts) */
const dataAppActionReviewFileExpanded: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspacePXInit: any = undefined;
/** Wave FY unresolved companion (jsx-collision:useCreditAutoReloadSettingsQuery@account/use-credit-auto-reload-settings-query.ts) */
const AppInitialQb: any = undefined;
/** Wave FY unresolved companion (missing-export:hosts/models.tsx) */
const Models: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredConversationR@conversation/deferred-conversation-r.ts) */
const AppInitialR: any = undefined;
/** Wave FY unresolved companion (missing-export:boundaries/browser-use-plugin-facades.ts) */
const ensureConfigQueryAtomsInitStub: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredHostsRq@hosts/deferred-hosts-rq.ts) */
const AppInitialRq: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/apply-footer-uoylu2.ts) */
const applyFooterUoylu2: any = undefined;
/** Wave FY unresolved companion (jsx-collision:deferredUiSW@ui/deferred-ui-sw.ts) */
const AppInitialSW: any = undefined;
/** Wave FY unresolved companion (jsx-collision:ensureAppgenSiteQueriesInit@appgen/site-query-atoms.ts) */
const AppInitialT5: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-v2.tsx) */
const DeferredUiV2: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-v43.tsx) */
const deferredUiV43: any = undefined;
/** Wave FY unresolved companion (missing-export:runtime/vite-preload.ts) */
const vitePreload: any = undefined;
/** Wave FY unresolved companion (missing-export:browser/list.ts) */
const list: any = undefined;
/** Wave FY unresolved companion (missing-export:browser/deferred-browser-y0.ts) */
const deferredBrowserY0: any = undefined;
/** Wave FY unresolved companion (missing-export:settings/usage-settings.ts) */
const usageSettings: any = undefined;
/** Wave FY unresolved companion (jsx-collision:chatgpt@account/chatgpt.ts) */
const AppInitialZq: any = undefined;
const __vite__mapDeps = (harbor, indigo = __vite__mapDeps, jade = indigo.f || (indigo.f = ["./local-conversation-page-Bf1KJPOR.js", "./rolldown-runtime-BG2f4sTM.js", "./app-initial-C-fROkKo.js", "./app-initial-Czet5G9g.css", "./checkmark-arrows-counterclockwise-rotate-lg-COZ08dCs.js", "./share-invite-autocomplete-CSfuQIPj.js", "./conversation-source-AkSNVCIa.js", "./thread-scroll-layout-Cig7hXqW.js", "./thread-scroll-controller-context-value-BUNTzBse.js", "./thread-virtualizer-43g3Bw27.js", "./subagent-panel-BKCKb2_c.js", "./toggle-thread-summary-panel-jC7ifugU.js", "./use-debug-panel-G2DtvEwQ.js", "./local-conversation-stream-role-product-event-BzrRYxBq.js", "./local-conversation-thread-C3pAiUmg.js", "./realtime-voice-handoff-target-Dyx7hOYI.js", "./artifact-creation-prompts-CWNgl5xb.js", "./use-git-config-value-BVCZfaZo.js", "./artifact-file-preview-icon-n81pVXki.js", "./onboarding-banner-C3hNSPU0.js", "./turn-sources-model-BEofELck.js", "./star-zhAPZW1a.js", "./app-window-BBkpManV.js", "./environment-labels-BrZBoJDP.js", "./local-remote-dropdown-BYLT5Lpc.js", "./use-git-submodule-paths-BOmLGs8q.js", "./dock-B_5B6SvV.js", "./use-codex-worktrees-FWkscfGb.js", "./local-environment-workflow-messages-Q6HEVFW7.js", "./connect-plugins-submenu-item-DerJfgcJ.js", "./header-DIFeySl0.js", "./realtime-voice-stage-layout-CjclUtP9.js", "./pulsing-dot.module-CR6Hfk8C.js", "./pulsing-dot-CGC7XOvr.css", "./thread-overflow-menu-jSLwXfym.js", "./local-environment-editor-9PiWGb5h.js", "./play-outline-DP2VGTN0.js", "./flask-XOjEQMSz.js", "./esm-C58sDLre.js", "./circle-dashed-Dwd5Aray.js", "./worktree-setup-auto-fix-CqsFmOeg.js", "./pull-request-detail-query-BJjNrn31.js", "./pull-request-media-Dku_XReA.js", "./detail-page-Kk44C3vf.js", "./thread-app-shell-chrome-CBH_UkIP.js", "./thread-panel-toggle-button-CKdJKdPZ.js", "./use-media-query-B4kOXzqr.js", "./upgrade-plan-dialog-CKTSoudj.js", "./color-icon-CJgkzSbJ.js", "./subscription-update-plan-IbQvs_Ig.js", "./format-currency-Wwdloj8u.js", "./plan-pricing-CDdVyvV-.js", "./pricing-plan-page-C21WmWTp.js", "./trending-topics-BRaoa8a_.js", "./thread-side-panel-tabs-C6Na0Uge.js"])) => harbor.map(item => jade[item]);
var alpha,
  bravo,
  copper = esmInit(() => {
    dataAppActionReviewFileExpanded();
    AppInitialOW();
    alpha = AppInitialAW({
      method: "synced-branch",
      getParams: kite => ({
        cwd: kite.root,
        operationSource: kite.operationSource
      }),
      getOptions: () => ({
        staleTime: readScrollTop.FIVE_SECONDS
      })
    });
    bravo = alpha.fromTarget$;
  });
function delta(lemon, marble, nickel) {
  let onyx = readCodexHomeFromQuery(),
    pearl = lemon ?? null,
    quartz = pathContainsWorktreesDir(pearl, onyx);
  let river = lemon == null ? null : {
    cwd: lemon,
    hostConfig: marble
  };
  let slate;
  return slate = {
    enabled: quartz,
    operationSource: nickel,
    lookup: river
  }, CodexBrowserSurfaceActionType(bravo, slate);
}
var echo,
  falcon = esmInit(() => {
    echo = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    ensureSelectWorkspacePXInit();
    copper();
  });
export function appPrefetchImpl({
  stage
}: { stage?: unknown; [key: string]: unknown }) {
  let timber = stage >= 2,
    umbra = stage >= 3,
    violet = stage >= 4,
    willow = stage >= 5,
    xenon = stage >= 6,
    {
      authMethod,
      isLoading
    } = useAuth(),
    {
      data: yellow,
      isLoading: _isLoading
    } = reuseArrayIfShallowEqual(),
    zinc = AppIconAlt(),
    amber = applyFooterUoylu2(),
    basalt = authMethod === "chatgpt" && !isLoading && !_isLoading && yellow?.structure === "personal",
    {
      data,
      isPending
    } = AppInitialQb({
      enabled: basalt
    });
  AppInitialB({
    billingCurrency: isPending ? undefined : data ?? zinc.getContext().user?.country ?? null,
    enabled: basalt
  });
  QueuedMessageTraySurface({
    enabled: basalt,
    includePaymentMethod: true
  });
  quickChatSurfaceCollapsedAtom({
    enabled: basalt
  });
  CodexPluginActionResult(titleCaseColonSegments, {
    enabled: basalt
  });
  gamma.useEffect(() => {
    vitePreload(() => import("../../pages/local-conversation-page"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46]), import.meta.url).catch(() => undefined);
  }, []);
  gamma.useEffect(() => {
    if (authMethod !== "chatgpt" || isLoading || amber) return;
    let mint = Badge(zinc, $, {
      disableExposureLog: true
    }).get("surface", "web");
    mint !== "dialog" && mint !== "page" || Promise.all([vitePreload(() => import("../../account/upgrade-plan-dialog"), __vite__mapDeps([47, 1, 2, 3, 48, 49, 50, 51]), import.meta.url), vitePreload(() => import("../../account/pricing-plan-page"), __vite__mapDeps([52, 1, 2, 3, 53, 49, 50, 51]), import.meta.url)]).catch(() => undefined);
  }, [authMethod, isLoading, amber, zinc]);
  let cedar = CodexPluginActionResult(ensureComposerEsm_J0_Init, {
    enabled: timber
  });
  gamma.useEffect(() => {
    cedar && vitePreload(() => import("../../thread/thread-side-panel-tabs"), __vite__mapDeps([54, 2, 1, 3]), import.meta.url).catch(() => undefined);
  }, [cedar]);
  let daisy = CodexPluginActionResult(DeferredUiF22),
    ember = CodexBrowserSurfaceActionType(hostConfig2, daisy),
    flint = CodexBrowserSurfaceActionType(AppInitialSW, {
      hostConfig: ember,
      operationSource: "startup_prefetch"
    }, {
      enabled: umbra
    }).data?.available === true,
    garnet = CodexBrowserSurfaceActionType(AppInitialA3, {
      hostId: daisy
    }, {
      enabled: umbra
    }),
    hazel = CodexPluginActionResult(deferredHostsJ4),
    ivory = ensureEnvironmentLabelsF3Init(CodexPluginActionResult(ensureEnvironmentLabelsD3Init), zinc.checkGate(ensureHostConfigIdInit)),
    jasper = pathContainsWorktreesDir(hazel, readCodexHomeFromQuery()) ? hazel : null,
    kelp = violet && flint && ivory === "full";
  CodexPluginActionResult(AppInitialHX, {
    enabled: timber
  });
  CodexPluginActionResult(AppInitialRq, {
    enabled: timber
  });
  CodexBrowserSurfaceActionType(deferredBrowserY0, daisy, {
    enabled: timber
  });
  AppInitialF3(hazel == null ? null : {
    cwd: hazel,
    hostConfig: ember
  }, "startup_prefetch", {
    enabled: kelp,
    watchForGitInit: true
  });
  AppInitialEz(hazel, ember, "startup_prefetch", {
    enabled: kelp
  });
  semanticAccentColors(hazel, ember, "startup_prefetch", {
    enabled: kelp
  });
  useGitSubmodulePaths(hazel, ember, "startup_prefetch", {
    enabled: kelp
  });
  useGitConfigValue(kelp ? jasper : null, ember, LOCAL_ENVIRONMENT_CONFIG_PATH_KEY, "worktree", "startup_prefetch", {
    enabled: kelp
  });
  delta(kelp ? jasper : null, ember, "startup_prefetch");
  CodexBrowserSurfaceActionType(ensureConfigQueryAtomsInit, {
    authMethod,
    hostId: daisy
  }, {
    enabled: willow
  });
  CodexBrowserSurfaceActionType(deferredUiV43, daisy, {
    enabled: willow
  });
  findProcessManagerRow({
    enabled: willow,
    hostId: daisy
  });
  CodexBrowserSurfaceActionType(homeDirectoryQueryAtom, daisy, {
    enabled: willow
  });
  pluginMarketplaceRequestFields({
    enabled: xenon,
    hostId: daisy
  });
  matchesOptionalHostPluginIds(daisy, garnet.data?.roots ?? [], {
    enabled: xenon && !isLoading && garnet.isFetched
  });
  let lotus = CodexPluginActionResult(AppInitialEN);
  return useAppHostUpdateStatusInfiniteQuery({
    enabled: xenon && lotus === "available"
  }), null;
}
var gamma, $;
esmInit(() => {
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  gamma = commonJsInit(react(), 1);
  DeferredUiV2();
  AppInitialDN();
  AppInitialT5();
  ensureAuthProviderInit();
  deferredVX();
  MEMORIES_ID();
  RealtimeVoiceHostId();
  AppInitialCW();
  ensureUseGitConfigValueInit();
  AppInitialR();
  remoteUpstreamUrl();
  AppInitialP3();
  ensureUseGitSubmodulePathsInit();
  falcon();
  ensureSelectWorkspacePXInit();
  ensureInstalledPluginsQueryInit();
  isOpenaiCuratedMarketplaceToken();
  AppInitialZq();
  ensureConfigQueryAtomsInitStub();
  list();
  Models();
  ensureHostRpcClientsInit();
  usageSettings();
  useLocalEnvironmentEditorState();
  extractColonPrefixedNamedTokens();
  ensureSkillsPageHelpersInit();
  ensureViteModulepreloadRuntime();
  $ = "1640366510";
})();
export { appPrefetchImpl as AppPrefetchImpl };
