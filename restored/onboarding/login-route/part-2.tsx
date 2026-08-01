// Restored from ref/webview/assets/login-route-ALPtito9.js
// Wave FZ — full polished body from `login-route-ALPtito9/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 17 (verified 81/97).
// Wave5d — FZ repair from fz-pascal L=2134 sus=15; JSX PascalCase + careful split.
// Wave5d careful split 2/4
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

// Wave5d soft JSX companions.
function ReadLoginRouteQuerySnapshot(props: {
  children?: unknown;
  [key: string]: unknown;
} = {}): unknown {
  return props.children ?? null;
}

// Wave5d soft stubs.
const deferredUiEnt: any = undefined;
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
function mint(drift) {
  let {
      apiKeyValue,
      setApiKeyValue,
      apiKeyInputRef,
      isApiKeyLoginPending,
      setIsApiKeyLoginPending,
      setIsApiKeySignInVisible,
      handleApiKeySubmit
    } = drift,
    eagle = useIntl(),
    frost = <MemoizedFormattedMessage {...{
      id: "codex.loggedOut.apiKeyPrompt.inputLabel",
      defaultMessage: "Enter your OpenAI API key",
      description: "Label for API key input"
    }} />;
  let glide = eagle.formatMessage({
    id: "codex.loggedOut.apiKeyPrompt.placeholder",
    defaultMessage: "sk-...",
    description: "Placeholder text hint for API key input field"
  });
  let honey = event => {
    setApiKeyValue(event.target.value);
  };
  let iris = <label className="block text-sm text-token-foreground">
      {frost}
      <input ref={apiKeyInputRef} className="mt-4 w-full rounded-lg border border-token-border bg-token-input-background px-3 py-2 text-sm text-token-foreground focus:border-token-focus-border focus:outline-none" placeholder={glide} value={apiKeyValue} onChange={honey} onFocus={olive} />
    </label>;
  let jewel = <p className="mt-3 text-[10px] text-token-description-foreground">
      {<MemoizedFormattedMessage {...{
      id: "codex.loggedOut.cloudTasksDisabledWithApiKey",
      defaultMessage: "Cloud chats disabled with API key",
      description: "Disclaimer explaining that remote features need ChatGPT sign-in"
    }} />}
    </p>;
  let knoll = <button type="button" className="inline-flex cursor-interaction items-center gap-1 text-sm text-token-text-link-foreground hover:underline max-[280px]:hidden" onClick={nova}>
      {<MemoizedFormattedMessage {...{
      id: "codex.loggedOut.apiKeyPrompt.getKey",
      defaultMessage: "Get API Key",
      description: "Button to open OpenAI API key management page"
    }} />}
      {<HostFeatureConfigToggles {...{
      href: topaz,
      className: "icon-2xs"
    }} />}
    </button>;
  let lunar = () => {
    setIsApiKeyLoginPending(false);
    setIsApiKeySignInVisible(false);
  };
  let moss = <MemoizedFormattedMessage {...{
    id: "codex.loggedOut.apiKeyPrompt.cancel",
    defaultMessage: "Cancel",
    description: "Cancel button for API key login"
  }} />;
  let north = <ReadLoginRouteQuerySnapshot {...{
    color: "ghost",
    onClick: lunar,
    children: moss
  }} />;
  let orbit = apiKeyValue.trim().length === 0 || isApiKeyLoginPending;
  let pine = <MemoizedFormattedMessage {...{
    id: "codex.loggedOut.apiKeyPrompt.confirm",
    defaultMessage: "OK",
    description: "Confirm button for API key login"
  }} />;
  let quest = <ReadLoginRouteQuerySnapshot {...{
    className: "px-4",
    onClick: handleApiKeySubmit,
    disabled: orbit,
    loading: isApiKeyLoginPending,
    children: pine
  }} />;
  let ridge = <div className="mt-4 flex items-center justify-end gap-2 min-[280px]:justify-between">
      {knoll}
      <div className="flex justify-end gap-2">
        {north}
        {quest}
      </div>
    </div>;
  return <div className="w-full rounded-2xl border border-token-border bg-token-dropdown-background/80 px-4 py-4 backdrop-blur-lg">
      {iris}
      {jewel}
      {ridge}
    </div>;
}
function nova(storm) {
  deferredUiEnt({
    event: storm,
    href: topaz,
    initiator: "open_in_browser_bridge"
  });
}
function olive(event) {
  event.currentTarget.select();
}
function prism(tide) {
  let {
      verificationUrl,
      userCode,
      onOpenBrowser,
      onCopyCode,
      onCancel
    } = tide,
    unity = useIntl(),
    vale = userCode.length > 0 ? userCode : "......",
    [wave, apex] = reef.useState(false),
    brook = wave ? unity.formatMessage({
      id: "codex.loggedOut.deviceCode.copyAriaLabel.copied",
      defaultMessage: "Copied",
      description: "Aria label for the copied state of the device code copy affordance on the logged out screen"
    }) : unity.formatMessage({
      id: "codex.loggedOut.deviceCode.copyAriaLabel.copy",
      defaultMessage: "Copy",
      description: "Aria label for the device code copy affordance on the logged out screen"
    });
  let cliff = brook,
    dusk = () => {
      userCode.length !== 0 && (onCopyCode(userCode), apex(true), window.setTimeout(() => {
        apex(false);
      }, 2e3));
    };
  let elm = dusk,
    fern = <p className="text-sm text-token-foreground">
        {<MemoizedFormattedMessage {...{
        id: "codex.loggedOut.deviceCode.instructions",
        defaultMessage: "To use a device code to log in, click the open browser button and paste the code below.",
        description: "Instructions shown while a device code login is in progress"
      }} />}
      </p>;
  let grove = event => {
    (event.key === "Enter" || event.key === " ") && (event.preventDefault(), elm());
  };
  let hill = event => {
    event.stopPropagation();
    elm();
  };
  let isle = wave ? <AppIconZlt {...{
    className: "icon-sm text-token-foreground"
  }} /> : <AppIconPR {...{
    className: "icon-sm"
  }} />;
  let juniper = <div className="absolute top-2 right-2 opacity-100 transition-opacity sm:opacity-0 sm:group-focus-within:opacity-100 sm:group-hover:opacity-100">
      {<ReadLoginRouteQuerySnapshot {...{
      color: "ghost",
      size: "icon",
      className: "rounded-md",
      "aria-label": cliff,
      onClick: hill,
      children: isle
    }} />}
    </div>;
  let lagoon = <p className="text-xs font-medium tracking-[0.2em] text-token-description-foreground uppercase">
      {<MemoizedFormattedMessage {...{
      id: "codex.loggedOut.deviceCode.codeLabel",
      defaultMessage: "Device code",
      description: "Label above the user code shown during device code sign in"
    }} />}
    </p>;
  let meadow = <p className="mt-2 overflow-x-auto text-center font-mono text-[28px] font-semibold tracking-[0.12em] whitespace-nowrap text-token-foreground">
      {vale}
    </p>;
  let nest = <div className="group relative rounded-xl border border-token-border bg-token-input-background px-3 py-3" role="button" tabIndex={0} onClick={elm} onKeyDown={grove}>
      {juniper}
      {lagoon}
      {meadow}
    </div>;
  let oak = <MemoizedFormattedMessage {...{
    id: "codex.loggedOut.deviceCode.cancel",
    defaultMessage: "Cancel",
    description: "Button to cancel a device code login"
  }} />;
  let petal = <ReadLoginRouteQuerySnapshot {...{
    color: "ghost",
    onClick: onCancel,
    children: oak
  }} />;
  let quiet = verificationUrl.length === 0,
    rain = <MemoizedFormattedMessage {...{
      id: "codex.loggedOut.deviceCode.openBrowser",
      defaultMessage: "Open browser",
      description: "Button to open the device code verification page"
    }} />;
  let seed = <ReadLoginRouteQuerySnapshot {...{
    onClick: onOpenBrowser,
    disabled: quiet,
    children: rain
  }} />;
  let trail = <div className="flex w-full flex-wrap items-center justify-between gap-2">
      {petal}
      {seed}
    </div>;
  return <div className="w-full rounded-2xl border border-token-border bg-token-dropdown-background/80 px-4 py-4 backdrop-blur-lg">
      <div className="space-y-3">
        {fern}
        {nest}
        {trail}
      </div>
    </div>;
}
var quill,
  reef,
  sage,
  topaz,
  ultra,
  vapor,
  wheat,
  yarn = esmInit(() => {
    quill = reactCompilerRuntime();
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    reef = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureComposerEsm_P5_Init();
    chatgpt2();
    AppActionSelector();
    loginWithChatgptDeviceCode();
    ensureAuthProviderInit();
    deferredVX();
    ensureSettingsQueryAtomsInit();
    ensureComposerEsm_Qtt_Init();
    ensureConversationPageEsm_B0_Init();
    ensureComposerEsm_Ilt_Init();
    ensurePersonalizationJutInit();
    ensurePersonalizationG0Init();
    ensureDropdownMenuPopoverInit();
    ensureConversationPageEsm_FR_Init();
    ensureAppScopeInit();
    ensureAppShellAtomsInit();
    buildChatgptDesktopAuthUrl();
    ensureComposerEsm_FH_Init();
    scrollAppActionTargetTo();
    ensureAsciiEngineViewInit();
    ensureAsciiEngineInit();
    topaz = "https://platform.openai.com/api-keys";
    ultra = reef.memo(function () {
      let urn = {
        initialColumns: 130,
        initialRows: 100,
        initialMode: "composite",
        preferredVideoKeyword: "blossom"
      };
      let {
        columns,
        rows,
        lines
      } = useAsciiEngine(urn);
      return <AsciiEngineView {...{
        lines,
        columns,
        rows,
        autoCover: true
      }} />;
    });
    vapor = "w-full cursor-interaction justify-center !rounded-full border px-4 py-2 font-medium";
    wheat = "bg-token-foreground/10 w-full justify-center !rounded-full px-4 py-2 font-medium backdrop-blur-md";
  });
function zephyr(vine) {
  let wind = vine.get("enabled", false);
  return {
    useDesktopAuth: vine.get("use_desktop_auth", wind),
    useStreamlinedLoginUx: vine.get("use_streamlined_login_ux", wind)
  };
}
function acorn(yarrow) {
  return yarrow;
}
var _t,
  bloom,
  coral = esmInit(() => {
    _t = "3446609779";
    bloom = "1561420571";
  });
