// Restored from ref/webview/assets/login-route-ALPtito9.js
// Wave FZ — full polished body from `login-route-ALPtito9/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 17 (verified 81/97).
// Wave5d — FZ repair from fz-pascal L=2134 sus=15; JSX PascalCase + careful split.
// Wave5d careful split 3/4
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
import { ensureComposerEsm_FH_Init, ensureComposerEsm_Ilt_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_P5_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init } from "../../boundaries/composer-esm-inits";
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

// Wave5d soft JSX companions.
function Alpha(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const AppInitialLb: any = undefined;
const AppInitialPgt: any = undefined;
const IntlProvider: any = undefined;
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
const jewel: any = undefined;
const knoll: any = undefined;
const lunar: any = undefined;
const moss: any = undefined;
const north: any = undefined;
const orbit: any = undefined;
const pine: any = undefined;
const quest: any = undefined;
const ridge: any = undefined;
const storm: any = undefined;
const tide: any = undefined;
const unity: any = undefined;
const vale: any = undefined;
const wave: any = undefined;
const apex: any = undefined;
const brook: any = undefined;
const cliff: any = undefined;
const dusk: any = undefined;
const elm: any = undefined;
const fern: any = undefined;
const grove: any = undefined;
const hill: any = undefined;
const isle: any = undefined;
const juniper: any = undefined;
const lagoon: any = undefined;
function meadow(ever) {
  let {
      onExit,
      audioContextRef
    } = ever,
    field = oak.useRef(null),
    grain = oak.useRef(null),
    haven = oak.useRef(null),
    ink = [];
  let jadeite = oak.useRef(ink),
    kernel = {
      x: 0,
      y: 0
    };
  let leaf = oak.useRef(kernel),
    maple = oak.useRef("right"),
    nimbus = oak.useRef("right"),
    opal = {
      columns: quiet,
      rows: quiet,
      cellSize: rain,
      width: quiet * rain,
      height: quiet * rain
    };
  let plume = oak.useRef(opal),
    quillow = oak.useRef(null),
    root = oak.useEffectEvent(onExit),
    silk = (ledge, mire, nook) => {
      if (audioContextRef.current == null) return;
      let oxbow = audioContextRef.current;
      oxbow.state === "suspended" && oxbow.resume();
      let pond = mire / 1e3,
        quarry = oxbow.createOscillator(),
        rapids = oxbow.createGain();
      quarry.type = nook;
      quarry.frequency.value = ledge;
      rapids.gain.setValueAtTime(1e-4, oxbow.currentTime);
      rapids.gain.exponentialRampToValueAtTime(0.18, oxbow.currentTime + 0.01);
      rapids.gain.exponentialRampToValueAtTime(1e-4, oxbow.currentTime + pond);
      quarry.connect(rapids);
      rapids.connect(oxbow.destination);
      quarry.start();
      quarry.stop(oxbow.currentTime + pond);
      quarry.onended = () => {
        quarry.disconnect();
        rapids.disconnect();
      };
    };
  let thorn = oak.useEffectEvent(silk),
    upland = () => {
      haven.current != null && (window.clearInterval(haven.current), haven.current = null);
    };
  let vista = upland,
    wisp = () => {
      if (quillow.current) return quillow.current;
      let spur = field.current;
      if (spur == null) return {
        snake: "#ffffff",
        food: "#f97316"
      };
      let tor = getComputedStyle(spur).color || "#ffffff",
        updraft = getComputedStyle(document.documentElement),
        verge = {
          snake: tor,
          food: updraft.getPropertyValue("--vscode-charts-red").trim() || updraft.getPropertyValue("--vscode-charts-orange").trim() || "#f97316"
        };
      return quillow.current = verge, verge;
    };
  let yonder = wisp,
    zenith = () => {
      if (field.current == null) return null;
      let weir = Math.max(1, Math.floor(window.devicePixelRatio || 1));
      field.current.width = Math.max(1, Math.floor(plume.current.width * weir));
      field.current.height = Math.max(1, Math.floor(plume.current.height * weir));
      field.current.style.width = `${plume.current.width}px`;
      field.current.style.height = `${plume.current.height}px`;
      let yard = field.current.getContext("2d");
      return yard == null ? null : (yard.setTransform(weir, 0, 0, weir, 0, 0), yard.imageSmoothingEnabled = false, yard);
    };
  let anvil = zenith,
    beacon = anchor => {
      let bolt = {
        x: Math.floor(Math.random() * plume.current.columns),
        y: Math.floor(Math.random() * plume.current.rows)
      };
      for (; anchor.some(item => item.x === bolt.x && item.y === bolt.y);) bolt = {
        x: Math.floor(Math.random() * plume.current.columns),
        y: Math.floor(Math.random() * plume.current.rows)
      };
      return bolt;
    };
  let crag = beacon,
    dome = () => {
      let cog = anvil();
      if (cog == null) return;
      let disc = yonder();
      cog.clearRect(0, 0, plume.current.width, plume.current.height);
      cog.fillStyle = disc.snake;
      for (let edge of jadeite.current) cog.fillRect(edge.x * plume.current.cellSize, edge.y * plume.current.cellSize, plume.current.cellSize, plume.current.cellSize);
      cog.fillStyle = disc.food;
      cog.fillRect(leaf.current.x * plume.current.cellSize, leaf.current.y * plume.current.cellSize, plume.current.cellSize, plume.current.cellSize);
    };
  let eddy = oak.useEffectEvent(dome),
    fjord = () => {
      let forge = Math.floor(plume.current.columns / 2),
        gear = Math.floor(plume.current.rows / 2);
      jadeite.current = [{
        x: forge,
        y: gear
      }, {
        x: forge - 1,
        y: gear
      }, {
        x: forge - 2,
        y: gear
      }];
      maple.current = "right";
      nimbus.current = "right";
      leaf.current = crag(jadeite.current);
      eddy();
    };
  let glen = oak.useEffectEvent(fjord),
    hearth = () => {
      if (grain.current == null) return;
      let hinge = grain.current.getBoundingClientRect(),
        iron = Math.max(1, Math.floor(hinge.width)),
        joint = Math.max(1, Math.floor(hinge.height)),
        keystone = Math.max(quiet, Math.floor(iron / rain)),
        latch = iron / keystone,
        motor = Math.max(quiet, Math.floor(joint / latch));
      plume.current = {
        columns: keystone,
        rows: motor,
        cellSize: latch,
        width: iron,
        height: joint
      };
      glen();
    };
  let inlet = oak.useEffectEvent(hearth),
    jetty = () => {
      inlet();
      let nut = event => {
        let piston = null;
        event.key === "ArrowUp" || event.key === "w" || event.key === "W" ? piston = "up" : event.key === "ArrowDown" || event.key === "s" || event.key === "S" ? piston = "down" : event.key === "ArrowLeft" || event.key === "a" || event.key === "A" ? piston = "left" : (event.key === "ArrowRight" || event.key === "d" || event.key === "D") && (piston = "right");
        piston != null && (event.preventDefault(), urn[maple.current] !== piston && (nimbus.current = piston));
      };
      return window.addEventListener("keydown", nut), haven.current = window.setInterval(() => {
        let rivet = jadeite.current,
          screw = rivet[0],
          torque = nimbus.current,
          valve = trail[torque],
          axle = {
            x: screw.x + valve.x,
            y: screw.y + valve.y
          };
        if (axle.x < 0 || axle.y < 0 || axle.x >= plume.current.columns || axle.y >= plume.current.rows) {
          vista();
          thorn(140, 220, "sawtooth");
          root();
          return;
        }
        let bracket = axle.x === leaf.current.x && axle.y === leaf.current.y;
        if ((bracket ? rivet : rivet.slice(0, -1)).some(item => item.x === axle.x && item.y === axle.y)) {
          vista();
          thorn(160, 220, "sawtooth");
          root();
          return;
        }
        let clamp = bracket ? [axle, ...rivet] : [axle, ...rivet.slice(0, -1)];
        jadeite.current = clamp;
        maple.current = torque;
        bracket && (leaf.current = crag(clamp), thorn(660, 120, "square"));
        eddy();
      }, seed), () => {
        vista();
        window.removeEventListener("keydown", nut);
      };
    };
  let knob;
  knob = [];
  oak.useEffect(jetty, knob);
  return <div className="h-full w-full" ref={grain}>
      <canvas className="h-full w-full text-token-foreground" ref={field} />
    </div>;
}
var nest,
  oak,
  petal,
  quiet,
  rain,
  seed,
  trail,
  urn,
  vine = esmInit(() => {
    nest = reactCompilerRuntime();
    oak = commonJsInit(react(), 1);
    quiet = 12;
    rain = 18;
    seed = 120;
    trail = {
      up: {
        x: 0,
        y: -1
      },
      down: {
        x: 0,
        y: 1
      },
      left: {
        x: -1,
        y: 0
      },
      right: {
        x: 1,
        y: 0
      }
    };
    urn = {
      up: "down",
      down: "up",
      left: "right",
      right: "left"
    };
  });
function wind(drill, engine) {
  if (engine === "signin") return drill;
  try {
    let frame = new URL(drill);
    switch (engine) {
      case "signup":
        frame.searchParams.set("screen_hint", "signup");
        break;
      case "google":
        frame.searchParams.set("screen_hint", "login_or_signup");
        frame.searchParams.set("connection", "google-oauth2");
        break;
      case "microsoft":
        frame.searchParams.set("screen_hint", "login_or_signup");
        frame.searchParams.set("connection", "windowslive");
        break;
    }
    return frame.toString();
  } catch {
    return drill;
  }
}
var yarrow = esmInit(() => {}),
  azure,
  birch,
  canyon = esmInit(() => {
    react();
    birch = gasket => <svg height={24} viewBox="0 0 24 24" width={24} xmlns="http://www.w3.org/2000/svg" {...gasket}>
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        <path d="M1 1h22v22H1z" fill="none" />
      </svg>;
  });
function dew(handle) {
  let {
      appBrand,
      apiKeyValue,
      isApiKeyEntryVisible,
      isApiKeySignInPending,
      isChatGptSignInPending,
      showChatGptProviderSignIn,
      onApiKeySubmit,
      onApiKeyValueChange,
      onChatGptSignIn,
      onChatGptSignUp,
      onPlaySnake,
      onResetApiKeyEntry,
      onShowApiKeyEntry: insert
    } = handle,
    jacket = useIntl(),
    knurl = appBrand === AppSurfaceId.ChatGPT;
  if (isChatGptSignInPending && !isApiKeyEntryVisible) {
    let dowel = knurl ? "size-10" : "size-[52px]",
      flange = IntlProvider("shrink-0", dowel);
    let gib = <AppBrandMark {...{
      appBrand,
      className: flange
    }} />;
    let hub = <p className="text-center text-[14px] leading-5 font-normal text-token-description-foreground">
        {<MemoizedFormattedMessage {...{
        id: "electron.onboarding.login.browserPending.welcomeV2",
        defaultMessage: "Continue signing in with your browser",
        description: "Message shown while ChatGPT sign-in continues in the browser"
      }} />}
      </p>;
    let idler = () => onChatGptSignIn();
    let jig = <MemoizedFormattedMessage {...{
      id: "electron.onboarding.login.chatgpt.cancel.welcomeV2",
      defaultMessage: "Cancel sign-in",
      description: "Cancel button label while ChatGPT sign-in is in progress on desktop onboarding"
    }} />;
    let keeper = <button className="flex h-[42px] w-full cursor-interaction items-center justify-center rounded-full border border-token-border bg-token-main-surface-primary text-[14px] leading-5 font-medium text-token-description-foreground hover:bg-token-list-hover-background" type="button" onClick={idler}>
        {jig}
      </button>;
    let lug;
    return <div className="flex h-full w-full items-center justify-center overflow-hidden bg-token-main-surface-primary pb-12 text-token-foreground">
        <div className="flex w-[340px] flex-col items-center gap-8">
          {gib}
          {hub}
          {keeper}
        </div>
      </div>;
  }
  let lever = knurl ? "gap-4" : "gap-8",
    mount = IntlProvider("flex w-full flex-col items-center", lever);
  let nozzle = jacket.formatMessage({
    id: "electron.onboarding.login.snake.start",
    defaultMessage: "Play Snake",
    description: "Aria label for the Codex logo button to start Snake"
  });
  let platen = !knurl && "size-[52px]",
    ratchet = IntlProvider("shrink-0", platen);
  let shim = <AppBrandMark {...{
    appBrand,
    className: ratchet
  }} />;
  let tappet = <button className="group flex cursor-interaction items-center justify-center rounded-full" type="button" aria-label={nozzle} onClick={onPlaySnake}>
      {shim}
    </button>;
  let arbor = <h1 className="w-[316px] text-center text-[28px] leading-9 font-normal text-token-foreground">
      {knurl ? <MemoizedFormattedMessage {...{
      id: "electron.onboarding.login.welcomeV2.title.chatgptSignIn",
      defaultMessage: "Sign in to ChatGPT",
      description: "Title on the v2 desktop onboarding login page for streamlined ChatGPT sign-in"
    }} /> : <MemoizedFormattedMessage {...{
      id: "electron.onboarding.login.welcomeV2.title",
      defaultMessage: "Get started with {appName}",
      description: "Title on the v2 desktop onboarding login page",
      values: {
        appName: AppInitialPgt(appBrand)
      }
    }} />}
    </h1>;
  let bushing = <div className={mount}>
      {tappet}
      {arbor}
    </div>;
  let collar = isApiKeyEntryVisible ? <div className="w-full">
      {<OnboardingLoginContent {...{
      apiKeyValue,
      isApiKeyEntryVisible,
      isApiKeySignInPending,
      isChatGptSignInPending,
      onApiKeySecondaryAction: onResetApiKeyEntry,
      onApiKeySubmit,
      onApiKeyValueChange,
      onChatGptSignIn,
      onShowApiKeyEntry: insert,
      apiKeySecondaryActionLabel: <MemoizedFormattedMessage {...{
        id: "electron.onboarding.login.apikey.cancel",
        defaultMessage: "Cancel",
        description: "Cancel button label for API key entry on desktop onboarding"
      }} />
    }} />}
    </div> : <div className="flex w-full flex-col items-center gap-3">
      <button className="flex h-[48px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-transparent bg-token-foreground text-[14px] leading-5 font-medium text-token-dropdown-background hover:bg-token-foreground/80" type="button" onClick={() => onChatGptSignIn()}>
        {<AppIconF0 {...{
        className: "size-6 shrink-0 text-token-dropdown-background"
      }} />}
        {knurl ? <MemoizedFormattedMessage {...{
        id: "electron.onboarding.login.chatgpt.continueToSignIn",
        defaultMessage: "Continue to sign in",
        description: "Button label for streamlined ChatGPT sign-in on desktop onboarding"
      }} /> : <MemoizedFormattedMessage {...{
        id: "electron.onboarding.login.chatgpt.signIn",
        defaultMessage: "Sign in with ChatGPT",
        description: "Button label to sign in with ChatGPT on desktop onboarding"
      }} />}
      </button>
      {showChatGptProviderSignIn ? <>
          <button className="flex h-[46px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-token-border bg-token-main-surface-primary text-[14px] leading-5 font-medium text-token-foreground hover:bg-token-list-hover-background" type="button" onClick={() => onChatGptSignIn("google")}>
            {<Alpha {...{
          className: "size-5 shrink-0",
          "aria-hidden": "true"
        }} />}
            {<MemoizedFormattedMessage {...{
          id: "electron.onboarding.login.google.signIn",
          defaultMessage: "Continue with Google",
          description: "Button label for Google sign-in on desktop onboarding"
        }} />}
          </button>
          <button className="flex h-[46px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-token-border bg-token-main-surface-primary text-[14px] leading-5 font-medium text-token-foreground hover:bg-token-list-hover-background" type="button" onClick={() => onChatGptSignIn("microsoft")}>
            <AppInitialLb className="size-5 shrink-0" aria-hidden="true" />
            {<MemoizedFormattedMessage {...{
          id: "electron.onboarding.login.microsoft.signIn",
          defaultMessage: "Continue with Microsoft",
          description: "Button label for Microsoft sign-in on desktop onboarding"
        }} />}
          </button>
        </> : null}
      <button className="flex h-[46px] w-full cursor-interaction items-center justify-center rounded-full border border-token-border bg-token-main-surface-primary text-[14px] leading-5 font-medium text-token-foreground hover:bg-token-list-hover-background" type="button" onClick={insert}>
        {<MemoizedFormattedMessage {...{
        id: "electron.onboarding.login.apikey.open.welcomeV2",
        defaultMessage: "Sign in another way",
        description: "Button label to open another sign-in method on v2 desktop onboarding"
      }} />}
      </button>
      <button className="flex h-9 cursor-interaction items-center justify-center px-2 text-[14px] leading-5 font-medium text-token-description-foreground underline hover:text-token-foreground" type="button" onClick={onChatGptSignUp}>
        {<MemoizedFormattedMessage {...{
        id: "electron.onboarding.login.signup.welcomeV2",
        defaultMessage: "Sign up",
        description: "Sign-up link on v2 desktop onboarding"
      }} />}
      </button>
    </div>;
  return <div className="flex h-full w-full items-center justify-center overflow-hidden bg-token-main-surface-primary pb-6 text-token-foreground">
      <div className="flex w-[340px] flex-col items-center gap-8">
        {bushing}
        {collar}
      </div>
    </div>;
}
