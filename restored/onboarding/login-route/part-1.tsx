// Restored from ref/webview/assets/login-route-ALPtito9.js
// Wave FZ — full polished body from `login-route-ALPtito9/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 17 (verified 81/97).
// Wave5d — FZ repair from fz-pascal L=2134 sus=15; JSX PascalCase + careful split.
// Wave5d careful split 1/4
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
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_FH_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init } from "../../composer/composer-esm-inits";
import { ensureConversationPageEsm_B0_Init, ensureConversationPageEsm_FR_Init } from "../../conversation/conversation-page-esm-inits";
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
const readLoginRouteQuerySnapshot: any = undefined;
// Wave5d soft JSX companions.
function At(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function Alpha(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}
function ReadLoginRouteQuerySnapshot(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const LoginRouteHelper1: any = undefined;
const LoginRouteHelper2: any = undefined;
const LoginRouteHelper3: any = undefined;
const LoginRouteHelper4: any = undefined;
const LoginRouteHelper5: any = undefined;
const LoginRouteHelper6: any = undefined;
const LoginRouteHelper9: any = undefined;
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
const acorn: any = undefined;
const bloom: any = undefined;
const coral: any = undefined;
const drift: any = undefined;
const eagle: any = undefined;
const frost: any = undefined;
const glide: any = undefined;
const honey: any = undefined;
const iris: any = undefined;

/** Wave FZ unresolved companion (missing-export:utils/wave-at-gap-ensure-inits.ts) */
const ensureSelectWorkspaceCqInit: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:needsApps@hosts/needs-apps.ts) */
const AppInitialCt: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/deferred-ui-ent.ts) */
const deferredUiEnt: any = undefined;
/** Wave FZ unresolved companion (missing-export:projects/codex-cloud-access.tsx) */
const AppInitialGq: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:buildAgentTurnStartPayload@agents/build-agent-turn-start-payload.ts) */
const AppInitialHq: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useIsRemoteHost@hosts/use-is-remote-host.ts) */
const AppInitialLb: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:buildConversationComposerControllerArgs@approvals/build-conversation-composer-controller-args.ts) */
const AppInitialMq: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:getAppSurfaceDisplayName@app/app-surface-display-name.ts) */
const AppInitialPgt: any = undefined;
/** Wave FZ unresolved companion (missing-export:clipboard/write-clipboard-contents.ts) */
const writeClipboardContents: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:trimRateLimitName@account/trim-rate-limit-name.ts) */
const AppInitialUb: any = undefined;
/** Wave FZ unresolved companion (jsx-collision:useIsLoginMethodAvailable@onboarding/use-is-login-method-available.ts) */
const AppInitialUX: any = undefined;
/** Wave FZ unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave FZ unresolved companion (missing-export:conversation/is-update-phase-in-progress.ts) */
const isUpdatePhaseInProgress: any = undefined;
/** Wave FZ unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const readLoginRouteQuerySnapshotStub: any = undefined;
/** Wave FZ unresolved companion (sib-missing:account/chatgpt-desktop-auth-url.ts) */
const loginWithChatgpt: any = undefined;
function $e() {
  let orbit = CodexPluginActionType(appScopeAtom),
    pine = useUpdateAuthNonce(),
    quest = useNavigate(),
    ridge = useIntl(),
    [storm, tide] = jade.useState(null),
    unity = storm != null,
    vale = AppInitialUX(),
    [wave, apex] = jade.useState(false),
    [brook, cliff] = jade.useState(false),
    [dusk, elm] = jade.useState(null),
    [fern, grove] = jade.useState(""),
    [hill, isle] = jade.useState(false),
    juniper = jade.useRef(null),
    lagoon = trail => {
      let urn = ridge.formatMessage({
        id: "codex.signInFailed.message",
        defaultMessage: "Sign-in failed: {rawMessage}",
        description: "Sign-in failure toast message with error details"
      }, {
        rawMessage: trail
      });
      orbit.get(toastAtom).warning(urn);
    };
  jade.useEffect(() => {
    wave && (juniper.current?.focus(), juniper.current?.select());
  }, [wave]);
  jade.useEffect(() => {
    let vine = false;
    return (async () => {
      try {
        let wind = await invokeDesktopRpc("openai-api-key");
        if (vine) return;
        let yarrow = wind?.value ?? null;
        elm(yarrow);
        grove(azure => azure.length > 0 ? azure : yarrow ?? "");
      } catch {
        vine || elm(null);
      }
    })(), () => {
      vine = true;
    };
  }, []);
  let meadow = async () => {
      if (unity) {
        storm?.abortController.abort();
        tide(null);
        return;
      }
      let birch = new AbortController();
      tide({
        abortController: birch,
        kind: "browserRedirect"
      });
      try {
        let {
          authUrl,
          completion
        } = await getCodexAppVersionFromScope({
          signal: birch.signal
        });
        authUrl && PdfPermissionFlag({
          href: ensureBuildChatgptDesktopAuthUrlInit({
            authUrl,
            codexAppVersion: ensureChatgptDesktopAuthUrlInit(orbit),
            useDesktopAuth: false,
            useStreamlinedLoginUx: false
          }),
          initiator: "open_in_browser_bridge",
          openTarget: "external-browser"
        });
        let canyon = await completion;
        canyon.success ? (pine(), quest("/first-run")) : lagoon(AVATAR_OVERLAY_SURFACE_STACK_IDS(canyon.error ?? "Unknown error"));
      } catch (dew) {
        if (dew instanceof Error && dew.name === "AbortError") return;
        lagoon(AVATAR_OVERLAY_SURFACE_STACK_IDS(dew));
      } finally {
        tide(null);
      }
    },
    nest = async () => {
      if (unity) {
        storm?.abortController.abort();
        tide(null);
        return;
      }
      let ever = new AbortController();
      cliff(true);
      tide({
        abortController: ever,
        kind: "deviceCode"
      });
      try {
        let {
          verificationUrl,
          userCode,
          completion
        } = await loginWithChatgpt({
          signal: ever.signal
        });
        if (ever.signal.aborted) return;
        tide(grain => grain?.abortController === ever ? {
          ...grain,
          verificationUrl,
          userCode
        } : grain);
        PdfPermissionFlag({
          href: verificationUrl,
          initiator: "open_in_browser_bridge",
          openTarget: "external-browser"
        });
        let field = await completion;
        field.success ? (pine(), quest("/first-run")) : lagoon(AVATAR_OVERLAY_SURFACE_STACK_IDS(field.error ?? "Unknown error"));
      } catch (haven) {
        if (haven instanceof Error && haven.name === "AbortError") return;
        lagoon(AVATAR_OVERLAY_SURFACE_STACK_IDS(haven));
      } finally {
        tide(null);
      }
    },
    oak = async ink => {
      ink.length !== 0 && (await writeClipboardContents(ink)) && orbit.get(toastAtom).success(ridge.formatMessage({
        id: "codex.loggedOut.deviceCode.copySuccess",
        defaultMessage: "Copied device code",
        description: "Toast shown after copying the device code"
      }));
    },
    {
      data
    } = ensurePersonalizationK0Init("show-copilot-login-first"),
    petal = async () => {
      try {
        await readLoginRouteQuerySnapshotStub(orbit, "use-copilot-auth-if-available", true, {
          throwOnFailure: true
        });
        pine();
        quest("/first-run");
      } catch (jadeite) {
        lagoon(AVATAR_OVERLAY_SURFACE_STACK_IDS(jadeite));
      }
    },
    quiet = async () => {
      let kernel = fern.trim();
      if (!(!kernel || hill)) {
        isle(true);
        try {
          await canonicalizeWorkspacePathKey("login-with-api-key", {
            hostId: LOCAL_HOST_ID,
            apiKey: kernel
          });
          pine();
          quest("/first-run");
        } catch (leaf) {
          lagoon(AVATAR_OVERLAY_SURFACE_STACK_IDS(leaf));
        } finally {
          isle(false);
        }
      }
    },
    rain = !vale || !data ? <>
          {<LoginRouteHelper1 {...{
        isPrimary: true,
        handleChatGptSignIn: meadow,
        isChatGptSignInPending: unity
      }} />}
          {!unity && vale && <div className="pt-2">
              {<LoginRouteHelper2 {...{
          isPrimary: false,
          handleCopilotSignIn: petal
        }} />}
            </div>}
        </> : <>
          {!unity && <LoginRouteHelper2 {...{
        isPrimary: true,
        handleCopilotSignIn: petal
      }} />}
          <div className="pt-2">
            {<LoginRouteHelper1 {...{
          isPrimary: false,
          handleChatGptSignIn: meadow,
          isChatGptSignInPending: unity
        }} />}
          </div>
        </>,
    seed = storm?.kind === "deviceCode" ? storm : null;
  return <div className="fixed inset-0 overflow-hidden bg-token-side-bar-background">
      <div className="pointer-events-none absolute inset-0">
        <div className="-ml-6 h-full w-full" style={{
        WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 25%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0) 50%)",
        maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 35%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0) 78%)",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%"
      }}>
          {<Alpha {...{}} />}
        </div>
      </div>
      <div className="relative z-10 flex h-full justify-center px-4 py-6 sm:py-8">
        <div className="flex h-full w-full max-w-[360px] flex-col">
          <div className="flex min-h-0 flex-1 items-center justify-center">
            <h1 className="text-center text-3xl leading-tight font-medium text-token-foreground">
              {<MemoizedFormattedMessage {...{
              id: "codex.loggedOut.title",
              defaultMessage: "{appName}",
              description: "Title on logged out screen",
              values: {
                appName: ensureImportSettingsGctInit
              }
            }} />}
            </h1>
          </div>
          <div className="flex min-h-[192px] flex-col justify-end gap-4 pb-2 sm:pb-0">
            {!wave && seed == null && <div className="flex w-full justify-center">
                <div className="mx-auto inline-flex w-max flex-col items-stretch">
                  {rain}
                  {!unity && <At {...{
                setApiKeyValue: grove,
                defaultApiKeyFromEnv: dusk,
                setIsApiKeySignInVisible: apex
              }} />}
                  {!unity && <LoginRouteHelper4 {...{
                isVisible: brook,
                onToggle: () => {
                  cliff(maple => !maple);
                },
                children: <LoginRouteHelper3 {...{
                  handleChatGptDeviceCodeSignIn: nest
                }} />
              }} />}
                </div>
              </div>}
            {seed != null && <LoginRouteHelper9 {...{
            verificationUrl: seed.verificationUrl ?? "",
            userCode: seed.userCode ?? "",
            onOpenBrowser: () => {
              let nimbus = seed.verificationUrl;
              nimbus && PdfPermissionFlag({
                href: nimbus,
                initiator: "open_in_browser_bridge",
                openTarget: "external-browser"
              });
            },
            onCopyCode: oak,
            onCancel: () => {
              seed.abortController.abort();
              tide(null);
            }
          }} />}
            {!unity && wave && <LoginRouteHelper6 {...{
            apiKeyValue: fern,
            setApiKeyValue: grove,
            apiKeyInputRef: juniper,
            isApiKeyLoginPending: hill,
            setIsApiKeyLoginPending: isle,
            setIsApiKeySignInVisible: apex,
            handleApiKeySubmit: quiet
          }} />}
          </div>
        </div>
      </div>
    </div>;
}
function jewel(opal) {
  let {
      isPrimary,
      handleChatGptSignIn,
      isChatGptSignInPending
    } = opal,
    plume = isChatGptSignInPending ? <MemoizedFormattedMessage {...{
      id: "codex.loggedOut.signIn.cancel",
      defaultMessage: "Cancel Sign-in",
      description: "Cancel button for sign in"
    }} /> : <MemoizedFormattedMessage {...{
      id: "codex.loggedOut.signIn",
      defaultMessage: "Sign in with ChatGPT",
      description: "Sign in button text on logged out screen"
    }} />;
  return <LoginRouteHelper5 {...{
    isPrimary,
    onClick: handleChatGptSignIn,
    children: plume
  }} />;
}
function knoll(quillow) {
  let {
      isPrimary,
      handleCopilotSignIn
    } = quillow,
    root = <MemoizedFormattedMessage {...{
      id: "codex.loggedOut.signInWithCopilot",
      defaultMessage: "Sign in with GitHub Copilot",
      description: "Button label for GitHub Copilot sign-in on logged out screen"
    }} />;
  return <LoginRouteHelper5 {...{
    isPrimary,
    onClick: handleCopilotSignIn,
    children: root
  }} />;
}
function lunar(silk) {
  let {
      handleChatGptDeviceCodeSignIn
    } = silk,
    thorn = <MemoizedFormattedMessage {...{
      id: "codex.loggedOut.signInWithDeviceCode",
      defaultMessage: "Use device code",
      description: "Secondary button to sign in with a device code"
    }} />;
  return <LoginRouteHelper5 {...{
    isPrimary: false,
    onClick: handleChatGptDeviceCodeSignIn,
    children: thorn
  }} />;
}
function moss(upland) {
  let {
      isVisible,
      onToggle,
      children
    } = upland,
    vista = !isVisible,
    wisp = isVisible ? "1fr" : "0fr",
    yonder = +!!isVisible,
    zenith = {
      gridTemplateRows: wisp,
      opacity: yonder
    };
  let anvil = <div className="overflow-hidden">
      <div className="pb-2">{children}</div>
    </div>;
  let beacon = <div className="grid transition-[grid-template-rows,opacity] duration-basic ease-out" aria-hidden={vista} style={zenith}>
      {anvil}
    </div>;
  let crag = isVisible ? <MemoizedFormattedMessage {...{
    id: "codex.loggedOut.lessOptions",
    defaultMessage: "Less options",
    description: "Button label to hide additional sign-in methods"
  }} /> : <MemoizedFormattedMessage {...{
    id: "codex.loggedOut.moreOptions",
    defaultMessage: "More options",
    description: "Button label to reveal additional sign-in methods"
  }} />;
  let dome = <div className="flex justify-center">
      <button type="button" className="cursor-interaction text-center text-sm text-token-description-foreground hover:underline" onClick={onToggle}>
        {crag}
      </button>
    </div>;
  return <div className="pt-2">
      {beacon}
      {dome}
    </div>;
}
function north(eddy) {
  let {
      isPrimary,
      onClick,
      children
    } = eddy,
    fjord = isPrimary ? "primary" : "outline",
    glen = isPrimary ? topaz : frost;
  return <ReadLoginRouteQuerySnapshot {...{
    color: fjord,
    className: glen,
    onClick,
    children
  }} />;
}
function at(hearth) {
  let {
      setApiKeyValue,
      defaultApiKeyFromEnv,
      setIsApiKeySignInVisible
    } = hearth,
    inlet = () => {
      setIsApiKeySignInVisible(true);
      setApiKeyValue(knob => knob.length > 0 ? knob : defaultApiKeyFromEnv ?? "");
    };
  let jetty = <MemoizedFormattedMessage {...{
    id: "codex.loggedOut.useApiKey",
    defaultMessage: "Use API Key",
    description: "Secondary button to use API Key auth method"
  }} />;
  return <div className="pt-2">
      {<ReadLoginRouteQuerySnapshot {...{
      color: "outline",
      className: "w-full justify-center !rounded-full bg-token-foreground/10 px-4 py-2 font-medium backdrop-blur-md",
      onClick: inlet,
      children: jetty
    }} />}
    </div>;
}
