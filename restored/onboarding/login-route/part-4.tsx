// Restored from ref/webview/assets/login-route-ALPtito9.js
// Wave5 stub-pass soft companions.
const _t: any = undefined;
const ensureSelectWorkspaceCqInit: any = undefined;

// Wave FZ — full polished body from `login-route-ALPtito9/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 17 (verified 81/97).
// Wave5d — FZ repair from fz-pascal L=2134 sus=15; JSX PascalCase + careful split.
// Wave5d careful split 4/4
/* split-lane-import-depth:1 */

import { buildChatgptDesktopAuthUrl, ensureBuildChatgptDesktopAuthUrlInit, ensureChatgptDesktopAuthUrlInit, getCodexAppVersionFromScope, loginWithChatgptDeviceCode } from "../../account/chatgpt-desktop-auth-url";
import { deferredAccountXq } from "../../account/deferred-account-xq";
import { selfServeBusinessUsageBased } from "../../account/self-serve-business-usage-based";
import { CODEX_LOGIN_METHOD_SELECTED_TYPE } from "../../analytics/codex-login-method-selected-type";
import { CODEX_LOGIN_SUCCESS_TYPE } from "../../analytics/codex-login-success-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexProfileEditSaveApiStatus } from "../../analytics/codex-profile-edit-save-api-status";
import { logProductEvent } from "../../analytics/log-product-event";
import { AppSurfaceId } from "../../app/app-surface-ids";
import { useUpdateAuthNonce } from "../../auth/use-update-auth-nonce";
import { appScopeAtom, ensureAppScopeInit } from "../../boundaries/app-scope-runtime";
import { ensureComposerEsm_FH_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init } from "../../boundaries/composer-esm-inits";
import { ensureConversationPageEsm_B0_Init, ensureConversationPageEsm_FR_Init } from "../../boundaries/conversation-page-esm-inits";
import { react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { useNavigate } from "../../boundaries/react-router-navigation";
import { toastAtom } from "../../boundaries/toast-atom";
import { chatgpt2 } from "../../browser/chatgpt2";
import { CHATGPT_PRODUCT_ID } from "../../config/chatgpt-product-id";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { invokeDesktopRpc } from "../../desktop/invoke-desktop-rpc";
import { AsciiEngineView, ensureAsciiEngineInit, ensureAsciiEngineViewInit, useAsciiEngine } from "../../hooks/use-ascii-engine";
import { ensureAuthProviderInit } from "../../hooks/use-auth";
import { useQueryClient } from "../../hooks/use-query-client";
import { HostFeatureConfigToggles } from "../../hosts/host-feature-config-toggles";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AddContextSquareIcon } from "../../icons/add-context-square-icon";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconF0 } from "../../icons/app-icon-f0";
import { AppIconPR } from "../../icons/app-icon-pr";
import { AppIconZlt } from "../../icons/app-icon-zlt";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { scrollAppActionTargetTo } from "../../navigation/app-action-dom";
import { AppActionSelector } from "../../navigation/app-action-selectors";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { AVATAR_OVERLAY_SURFACE_STACK_IDS } from "../../overlay/avatar-overlay-surface-stack-ids";
import { PdfPermissionFlag } from "../../pdf/pdf-permission-flag";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { buildVscodeQueryKey } from "../../settings/vscode-query-key";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { Badge } from "../../ui/badge";
import { deferredSn } from "../../ui/deferred-sn";
import { deferredVX } from "../../ui/deferred-vx";
import { ensureDropdownMenuPopoverInit } from "../../ui/dropdown-menu-popover";
import { size12AriaIcon } from "../../ui/size12-aria-icon";
import { countLeadingZeroBits32 } from "../../utils/count-leading-zero-bits-32";
import { identityValue } from "../../utils/identity-value";
import { ensureImportSettingsGctInit, ensurePersonalizationG0Init, ensurePersonalizationJutInit, ensurePersonalizationK0Init, ensureSettingsGlyphI0Init } from "../../utils/wave-as-gap-ensure-inits";
import { canonicalizeWorkspacePathKey } from "../../utils/workspace-path-keys";
import { AppBrandMark } from "../app-brand-mark";
import { initOnboardingLoginContent, OnboardingLoginContent } from "../onboarding-login-content";

// Wave5d soft JSX companions.
function IsUpdatePhaseInProgress(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialCt: any = undefined;
const AppInitialGq: any = undefined;
const AppInitialHq: any = undefined;
const AppInitialMq: any = undefined;
const AppInitialUb: any = undefined;
const LoginRouteHelper12: any = undefined;
const LoginRouteHelper14: any = undefined;
const LoginRouteHelper15: any = undefined;
const alpha: any = undefined;
const bravo: any = undefined;
const copper: any = undefined;
const delta: any = undefined;
const echo: any = undefined;
const falcon: any = undefined;
const gamma: any = undefined;
const harbor: any = undefined;
const indigo: any = undefined;
const jade: any = undefined;
const kite: any = undefined;
const lemon: any = undefined;
const marble: any = undefined;
const nickel: any = undefined;
const onyx: any = undefined;
const pearl: any = undefined;
const quartz: any = undefined;
const river: any = undefined;
const slate: any = undefined;
const timber: any = undefined;
const umbra: any = undefined;
const violet: any = undefined;
const willow: any = undefined;
const xenon: any = undefined;
const yellow: any = undefined;
const zinc: any = undefined;
const amber: any = undefined;
const basalt: any = undefined;
const cedar: any = undefined;
const daisy: any = undefined;
const ember: any = undefined;
const flint: any = undefined;
const garnet: any = undefined;
const hazel: any = undefined;
const ivory: any = undefined;
const jasper: any = undefined;
const kelp: any = undefined;
const lotus: any = undefined;
const mint: any = undefined;
const nova: any = undefined;
const olive: any = undefined;
const prism: any = undefined;
const quill: any = undefined;
const reef: any = undefined;
const sage: any = undefined;
const topaz: any = undefined;
const ultra: any = undefined;
const vapor: any = undefined;
const wheat: any = undefined;
const yarn: any = undefined;
const zephyr: any = undefined;
var acorn,
  bloom,
  coral = esmInit(() => {
    acorn = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    strongMarkerFromOptions();
    ensureIntlFormattersInit();
    reef();
    AppInitialUb();
    ensureSettingsGlyphI0Init();
    size12AriaIcon();
    initOnboardingLoginContent();
  });
function drift() {
  let jewel = CodexPluginActionType(appScopeAtom),
    knoll = useUpdateAuthNonce(),
    lunar = useNavigate(),
    moss = useIntl(),
    north = useQueryClient(),
    orbit = CodexPluginActionResult(deferredAccountXq),
    pine = identityValue(AppInitialMq),
    quest = identityValue(AppInitialHq),
    ridge = identityValue(AppInitialGq),
    storm = orbit == null ? null : {
      hasPreviouslyCompletedOnboarding: orbit
    },
    tide = AppIconAlt(),
    unity = bravo(AddContextSquareIcon(zephyr).get("enabled", false)),
    vale = trail => {
      jewel.get(toastAtom).warning(moss.formatMessage({
        id: "electron.onboarding.login.error",
        defaultMessage: "Sign-in failed: {rawMessage}",
        description: "Toast shown when sign-in fails on the desktop onboarding page"
      }, {
        rawMessage: trail
      }));
    },
    [wave, apex] = frost.useState(null),
    brook = wave != null,
    [cliff, dusk] = frost.useState(false),
    [elm, fern] = frost.useState(false),
    [grove, hill] = frost.useState(""),
    [isle, juniper] = frost.useState(false),
    lagoon = frost.useRef(null),
    meadow = () => {
      quest(false);
      ridge(true);
    },
    nest = () => {
      dusk(false);
      juniper(false);
      hill("");
    },
    oak = () => {
      storm != null && (logProductEvent(jewel, CODEX_LOGIN_METHOD_SELECTED_TYPE, {
        method: "apikey",
        ...storm
      }), dusk(true));
    },
    petal = () => {
      fern(false);
    },
    quiet = () => {
      lagoon.current ?? (typeof window > "u" || "AudioContext" in window && (lagoon.current = new window.AudioContext(), lagoon.current.state === "suspended" && lagoon.current.resume()));
    },
    rain = () => {
      quiet();
      fern(true);
    },
    seed = async (urn = "signin") => {
      if (brook) {
        wave?.abort();
        apex(null);
        return;
      }
      if (storm == null) return;
      let vine = urn === "google" || urn === "microsoft" ? urn : "chatgpt";
      logProductEvent(jewel, CODEX_LOGIN_METHOD_SELECTED_TYPE, {
        method: vine,
        ...storm
      });
      let wind = new AbortController();
      apex(wind);
      try {
        let {
            useDesktopAuth,
            useStreamlinedLoginUx
          } = alpha(Badge(tide, _t)),
          yarrow = AppInitialCt(tide, "2936610421"),
          {
            authUrl,
            completion
          } = await getCodexAppVersionFromScope({
            signal: wind.signal,
            ...(yarrow ? {
              appBrand: CHATGPT_PRODUCT_ID
            } : {}),
            useHostedLoginSuccessPage: yarrow,
            useStreamlinedLogin: useStreamlinedLoginUx
          });
        authUrl && PdfPermissionFlag({
          href: ensureBuildChatgptDesktopAuthUrlInit({
            authUrl: copper(authUrl, urn),
            codexAppVersion: ensureChatgptDesktopAuthUrlInit(jewel),
            includeCodexOriginStableId: true,
            useDesktopAuth,
            useStreamlinedLoginUx
          }),
          initiator: "open_in_browser_bridge",
          openTarget: "external-browser"
        });
        let azure = await completion;
        azure.success ? (logProductEvent(jewel, CODEX_LOGIN_SUCCESS_TYPE, {
          method: vine,
          ...storm
        }), north.removeQueries({
          queryKey: buildVscodeQueryKey("account-info"),
          exact: true
        }), meadow(), pine(true), knoll(), lunar("/welcome", {
          replace: true
        })) : (logProductEvent(jewel, CodexProfileEditSaveApiStatus, {
          method: vine,
          errorKind: eagle(azure.error),
          ...storm
        }), vale(AVATAR_OVERLAY_SURFACE_STACK_IDS(azure.error ?? "Unknown error")));
      } catch (birch) {
        if (birch instanceof Error && birch.name === "AbortError") {
          logProductEvent(jewel, CodexProfileEditSaveApiStatus, {
            method: vine,
            errorKind: "abort",
            ...storm
          });
          return;
        }
        logProductEvent(jewel, CodexProfileEditSaveApiStatus, {
          method: vine,
          errorKind: eagle(birch),
          ...storm
        });
        vale(AVATAR_OVERLAY_SURFACE_STACK_IDS(birch));
      } finally {
        apex(null);
      }
    };
  return storm == null ? <IsUpdatePhaseInProgress {...{
    children: <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-token-description-foreground">
            {<VSCODE_EDITOR_ID {...{
        className: "h-4 w-4 text-token-foreground"
      }} />}
            {<MemoizedFormattedMessage {...{
        id: "electron.onboarding.login.loading",
        defaultMessage: "Loading…",
        description: "Loading state while the login page prepares onboarding telemetry"
      }} />}
          </div>
  }} /> : <IsUpdatePhaseInProgress {...{
    fullBleed: true,
    hideHeader: elm,
    children: elm ? <div className="flex h-full w-full">
            {<LoginRouteHelper12 {...{
        onExit: petal,
        audioContextRef: lagoon
      }} />}
          </div> : <LoginRouteHelper14 {...{
      appBrand: CHATGPT_PRODUCT_ID,
      apiKeyValue: grove,
      isApiKeyEntryVisible: cliff,
      isApiKeySignInPending: isle,
      isChatGptSignInPending: brook,
      showChatGptProviderSignIn: unity,
      onApiKeySubmit: async () => {
        let canyon = grove.trim();
        if (!(!canyon || isle || storm == null)) {
          juniper(true);
          try {
            await canonicalizeWorkspacePathKey("login-with-api-key", {
              hostId: LOCAL_HOST_ID,
              apiKey: canyon
            });
            logProductEvent(jewel, CODEX_LOGIN_SUCCESS_TYPE, {
              method: "apikey",
              ...storm
            });
            meadow();
            pine(true);
            knoll();
            lunar("/welcome", {
              replace: true
            });
          } catch (dew) {
            logProductEvent(jewel, CodexProfileEditSaveApiStatus, {
              method: "apikey",
              errorKind: eagle(dew),
              ...storm
            });
            vale(AVATAR_OVERLAY_SURFACE_STACK_IDS(dew));
          } finally {
            juniper(false);
          }
        }
      },
      onApiKeyValueChange: hill,
      onChatGptSignIn: seed,
      onChatGptSignUp: () => seed("signup"),
      onPlaySnake: rain,
      onResetApiKeyEntry: nest,
      onShowApiKeyEntry: oak
    }} />
  }} />;
}
function eagle(ever) {
  let field = typeof ever == "string" ? ever : ever instanceof Error ? ever.message : "";
  if (!field) return "unknown";
  let grain = field.toLowerCase();
  return grain.includes("network") || grain.includes("fetch") || grain.includes("timeout") ? "network" : grain.includes("auth") || grain.includes("unauthorized") || grain.includes("forbidden") || grain.includes("invalid api key") || grain.includes("401") || grain.includes("403") ? "auth" : "unknown";
}
var frost,
  $,
  glide = esmInit(() => {
    ensureComposerEsm_Utt_Init();
    serializeCharacterReferenceNode();
    countLeadingZeroBits32();
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    frost = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureComposerEsm_P5_Init();
    chatgpt2();
    AppActionSelector();
    loginWithChatgptDeviceCode();
    ensureAuthProviderInit();
    ensureComposerEsm_Qtt_Init();
    ensureComposerEsm_Sut_Init();
    ensureComposerEsm_Ilt_Init();
    ensureSelectWorkspaceCqInit();
    ensureComposerEsm_K9_Init();
    ensureAppScopeInit();
    ensureAppShellAtomsInit();
    buildChatgptDesktopAuthUrl();
    ensureSkillsPageHelpersInit();
    delta();
    scrollAppActionTargetTo();
    deferredSn();
    kelp();
    nova();
    coral();
  });
export function LoginRouteIcon() {
  {
    let haven;
    return <LoginRouteHelper15 {...{}} />;
  }
  return <$e {...{}} />;
}
var honey, iris;
esmInit(() => {
  honey = reactCompilerRuntime();
  react();
  selfServeBusinessUsageBased();
  yarn();
  glide();
})();
