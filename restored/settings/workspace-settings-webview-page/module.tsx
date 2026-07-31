// Restored from ref/webview/assets/workspace-settings-webview-page-DGgV9FIa.js
// Wave FY — full polished body from `workspace-settings-webview-page-DGgV9FIa/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 7 (verified 34/40).
// AST split 1/1
/* split-lane-import-depth:1 */


import { ensureAppActionPayloadSchemasInit } from "../../actions/app-action-payload-schemas";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { PublicationTermsBanner } from "../../apps/publication-terms-banner";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { Navigate, useLocation } from "../../boundaries/react-router-navigation";
import { BrowserWebviewPanel } from "../../browser/browser-webview-panel";
import { pullRequestCacheKey } from "../../conversation/github-pull-request-urls";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { CHATGPT_COM_ADMIN_URL } from "../../docs/codex-doc-urls";
import { lazyWithSuspense } from "../../environments/lazy-with-suspense";
import { ensureAuthProviderInit, useAuth } from "../../hooks/use-auth";
import { useQueryClient } from "../../hooks/use-query-client";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { findSidebarSectionElement } from "../../navigation/app-action-dom";
import { isCurrentSpecialWindowRoute } from "../../navigation/is-special-window-route";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { ensureBadgeInit } from "../../ui/badge";
import { StackedCardHeader } from "../../ui/stacked-card-header";
import { coalesceTruthy } from "../../utils/coalesce-truthy";
import { reuseArrayIfShallowEqual } from "../../utils/reuse-array-if-shallow-equal";

const RealtimeVoiceHostId: any = undefined;
/** Wave FY unresolved companion (missing-export:navigation/initial-route3.tsx) */
const InitialRoute3: any = undefined;
/** Wave FY unresolved companion (missing-export:utils/apply-footer-uoylu2.ts) */
const applyFooterUoylu2: any = undefined;
/** Wave FY unresolved companion (jsx-collision:useSearchParams@boundaries/react-router-navigation.tsx) */
const AppInitialW5: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FY unresolved companion (missing-export:ui/deferred-ui-xt.ts) */
const deferredUiXT: any = undefined;
export function workspaceSettingsWebviewPageWorkspaceSettingsWebviewPage() {
  let [iris] = AppInitialW5();
  return copper(iris) == null ? <Navigate {...{
    to: "/",
    replace: true
  }} /> : null;
}
export function workspaceSettingsWebviewPageWorkspaceSettingsWebviewHost() {
  let jewel = CodexPluginActionType(appScopeAtom),
    {
      authMethod,
      isLoading,
      userId
    } = useAuth(),
    {
      data,
      isLoading: _isLoading
    } = reuseArrayIfShallowEqual(),
    knoll = useLocation(),
    lunar = {
      disableExposureLog: true
    };
  let moss = harbor.useLayer(onyx, lunar),
    north = applyFooterUoylu2(),
    orbit = AppIconAlt(),
    pine = orbit.getContext().user.customIDs?.workspace_id;
  let quest = pine,
    ridge = data?.id,
    storm = bravo({
      accountId: ridge,
      userId
    });
  let tide = storm,
    unity = knoll.pathname === "/workspace-settings/web" ? copper(new URLSearchParams(knoll.search))?.accountId ?? null : null;
  let vale = unity,
    wave = !isCurrentSpecialWindowRoute() && authMethod === "chatgpt" && !isLoading && userId != null && !north && data?.structure === "workspace" && quest === data.id && moss.get("enable_workspace_settings_webview", false) ? data.id : null;
  let apex = wave,
    brook = isLoading || _isLoading || north,
    cliff = !brook && vale === apex ? vale : null,
    dusk = cliff ?? apex,
    elm = dusk != null && quest === dusk && orbit.getDynamicConfig("762342243", {
      disableExposureLog: true
    }).get("override", "").trim().toLowerCase() || undefined;
  let fern = elm,
    grove = CodexBrowserSurfaceActionType(violet, tide),
    hill = dusk != null && grove.accountId === dusk && grove.userId === userId ? grove.generation : grove.generation + 1,
    _workspaceSettingsWebviewPageWorkspaceSettingsWebviewPage = indigo.useRef(null),
    _workspaceSettingsWebviewPageWorkspaceSettingsWebviewHost,
    isle;
  _workspaceSettingsWebviewPageWorkspaceSettingsWebviewHost = () => (ensureAppActionPayloadSchemasInit.dispatchMessage("workspace-settings-webview-presentation-changed", {
    partition: tide,
    presented: cliff != null
  }), () => {
    ensureAppActionPayloadSchemasInit.dispatchMessage("workspace-settings-webview-presentation-changed", {
      partition: tide,
      presented: false
    });
  });
  isle = [tide, cliff];
  indigo.useLayoutEffect(_workspaceSettingsWebviewPageWorkspaceSettingsWebviewHost, isle);
  let juniper, lagoon;
  lagoon = () => {
    let azure = jewel.get(violet, tide);
    if (dusk == null) {
      azure.accountId != null && !isLoading && !_isLoading && !north && jewel.set(violet, tide, {
        accountId: null,
        failedAttemptCount: 0,
        generation: azure.generation + 1,
        loadState: "loading",
        userId: undefined
      });
      return;
    }
    azure.accountId === dusk && azure.userId === userId || jewel.set(violet, tide, {
      accountId: dusk,
      failedAttemptCount: 0,
      generation: hill,
      loadState: "loading",
      userId
    });
  };
  juniper = [dusk, hill, isLoading, _isLoading, north, tide, jewel, userId];
  indigo.useLayoutEffect(lagoon, juniper);
  let meadow, nest;
  meadow = () => {
    let birch = cliff != null && _workspaceSettingsWebviewPageWorkspaceSettingsWebviewPage.current !== cliff;
    if (_workspaceSettingsWebviewPageWorkspaceSettingsWebviewPage.current = cliff, !birch) return;
    let canyon = jewel.get(violet, tide);
    if (canyon.accountId !== cliff || canyon.userId !== userId || canyon.loadState !== "failed" || canyon.failedAttemptCount < timber) return;
    let dew = {
      ...canyon,
      failedAttemptCount: 0,
      generation: canyon.generation + 1,
      loadState: "loading"
    };
    jewel.set(violet, tide, dew);
  };
  nest = [tide, cliff, jewel, userId];
  indigo.useLayoutEffect(meadow, nest);
  let oak = ever => {
    let field = jewel.get(violet, tide);
    field.accountId !== dusk || field.generation !== hill || field.userId !== userId || field.loadState === ever || jewel.set(violet, tide, {
      ...field,
      failedAttemptCount: ever === "failed" ? field.failedAttemptCount + 1 : ever === "ready" ? 0 : field.failedAttemptCount,
      loadState: ever
    });
  };
  let petal = oak,
    quiet,
    rain;
  if (quiet = () => {
    if (grove.accountId == null || cliff != null && grove.loadState !== "failed" || grove.loadState === "failed" && grove.failedAttemptCount >= timber) return;
    let grain = window.setTimeout(() => {
      let haven = jewel.get(violet, tide);
      if (haven.accountId !== grove.accountId || haven.generation !== grove.generation || haven.userId !== grove.userId) return;
      let ink = {
        ...haven,
        generation: haven.generation + 1,
        loadState: "loading"
      };
      jewel.set(violet, tide, ink);
    }, grove.loadState === "failed" ? Math.min(river * 2 ** Math.max(0, grove.failedAttemptCount - 1), slate) : pearl);
    return () => {
      window.clearTimeout(grain);
    };
  }, rain = [grove.accountId, grove.failedAttemptCount, grove.generation, grove.loadState, grove.userId, tide, cliff, jewel], indigo.useEffect(quiet, rain), vale != null && !brook && cliff == null) {
    let jadeite;
    return <Navigate {...{
      to: "/",
      replace: true
    }} />;
  }
  if (dusk == null) return null;
  let seed = cliff != null,
    trail = !seed,
    urn = !seed,
    vine = !seed && "pointer-events-none invisible",
    wind = IntlProvider("fixed inset-0 z-30", vine);
  let _e = `${userId ?? ""}|${dusk}|${fern ?? ""}|${hill}`,
    yarrow = <AlphaR1 key={_e} {...{
      accountId: dusk,
      onLoadStateChange: petal,
      partition: tide,
      routingOverride: fern
    }} />;
  return <div aria-hidden={trail} inert={urn} className={wind}>
      {yarrow}
    </div>;
}
function alpha(willow) {
  let {
      accountId,
      onLoadStateChange,
      partition,
      routingOverride
    } = willow,
    [xenon, yellow] = indigo.useState(true),
    [zinc, amber] = indigo.useState(null),
    basalt = lotus => {
      amber(falcon(lotus) ? lotus : null);
    };
  let cedar = basalt,
    daisy,
    ember;
  daisy = () => {
    if (zinc == null) return;
    let mint = false,
      nova = null,
      olive = () => {
        nova != null && (window.clearTimeout(nova), nova = null);
      },
      prism = () => {
        olive();
        nova = window.setTimeout(() => {
          let topaz = delta(zinc);
          topaz != null && echo(topaz) && !zinc.isLoading() || (onLoadStateChange("failed"), mint || yellow(true));
        }, quartz);
      },
      quill = () => {
        let ultra = delta(zinc);
        if (!(ultra == null || ultra.protocol === "about:")) {
          if (echo(ultra) && !zinc.isLoading()) {
            olive();
            onLoadStateChange("ready");
            mint || yellow(false);
            return;
          }
          ultra.origin === lemon && !ultra.pathname.startsWith(marble) && (onLoadStateChange("failed"), mint || yellow(true));
        }
      },
      reef = vapor => {
        vapor.isMainFrame !== false && (prism(), onLoadStateChange("loading"), mint || yellow(true));
      },
      sage = wheat => {
        let yarn = wheat;
        if (yarn.isMainFrame !== false) {
          if (yarn.errorCode === -3) {
            quill();
            return;
          }
          onLoadStateChange("failed");
          mint || yellow(true);
        }
      };
    return zinc.addEventListener("dom-ready", quill), zinc.addEventListener("did-start-navigation", reef), zinc.addEventListener("did-fail-load", sage), zinc.addEventListener("did-finish-load", quill), zinc.addEventListener("did-stop-loading", quill), zinc.addEventListener("did-navigate-in-page", quill), prism(), quill(), () => {
      mint = true;
      olive();
      zinc.removeEventListener("dom-ready", quill);
      zinc.removeEventListener("did-start-navigation", reef);
      zinc.removeEventListener("did-fail-load", sage);
      zinc.removeEventListener("did-finish-load", quill);
      zinc.removeEventListener("did-stop-loading", quill);
      zinc.removeEventListener("did-navigate-in-page", quill);
    };
  };
  ember = [onLoadStateChange, zinc];
  indigo.useEffect(daisy, ember);
  let flint = new URL(CHATGPT_COM_ADMIN_URL);
  let garnet = flint,
    hazel,
    ivory,
    jasper,
    kelp;
  {
    let zephyr = new URL("about:blank");
    zephyr.searchParams.set("toUrl", `${garnet.pathname}${garnet.search}`);
    zephyr.searchParams.set("accountId", accountId);
    routingOverride != null && zephyr.searchParams.set("routingOverride", routingOverride);
    hazel = BrowserWebviewPanel;
    ivory = xenon;
    jasper = partition;
    kelp = zephyr.toString();
  }
  return <BravoR1 {...{
    isLoading: ivory,
    partition: jasper,
    src: kelp,
    webviewRef: cedar
  }} />;
}
function bravo({
  accountId,
  userId
}) {
  let acorn = JSON.stringify([userId, accountId]),
    bloom = umbra.get(acorn);
  return bloom ?? (bloom = `${StackedCardHeader}${crypto.randomUUID()}`, umbra.set(acorn, bloom)), bloom;
}
function copper(coral) {
  let drift = kite.safeParse(Object.fromEntries(coral.entries()));
  return drift.success ? drift.data : null;
}
function delta(eagle) {
  try {
    return new URL(eagle.getURL());
  } catch {
    return null;
  }
}
function echo(frost) {
  return frost.origin === lemon && (frost.pathname === nickel || frost.pathname.startsWith(`${nickel}/`));
}
function falcon(glide) {
  return glide != null && "getURL" in glide && typeof glide.getURL == "function" && "isLoading" in glide && typeof glide.isLoading == "function";
}
var gamma, harbor, indigo, jade, kite, lemon, marble, nickel, onyx, pearl, quartz, river, slate, timber, umbra, violet;
esmInit(() => {
  gamma = reactCompilerRuntime();
  harbor = ensureBadgeInit();
  ensureComposerEsm_Tft_Init();
  ensureComposerEsm_MT_Init();
  strongMarkerFromOptions();
  indigo = commonJsInit(react(), 1);
  ensureComposerEsm_P5_Init();
  coalesceTruthy();
  ensureAuthProviderInit();
  RealtimeVoiceHostId();
  InitialRoute3();
  PublicationTermsBanner();
  findProcessManagerRow();
  findSidebarSectionElement();
  ensureAppScopeInit();
  ensureSkillsPageHelpersInit();
  pullRequestCacheKey();
  kite = deferredUiXT({
    accountId: coalesceTruthy().min(1)
  });
  lemon = new URL(lazyWithSuspense).origin;
  marble = "/api/auth/";
  nickel = "/admin";
  onyx = "2493655517";
  pearl = 240000;
  quartz = 3e4;
  river = 1e3;
  slate = 6e4;
  timber = 5;
  umbra = new Map();
  violet = useQueryClient(appScopeAtom, honey => ({
    accountId: null,
    failedAttemptCount: 0,
    generation: 0,
    loadState: "loading",
    userId: undefined
  }));
})();

const AlphaR1 = alpha;
const BravoR1 = BrowserWebviewPanel;
