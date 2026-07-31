// Restored from ref/webview/assets/codex-mobile-setup-dialog-CedkrL4M.js
// Wave GA — full polished body from `codex-mobile-setup-dialog-CedkrL4M/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 32 (verified 76/108).
// AST split 4/5
/* split-lane-import-depth:1 */

import { isBusinessPlan } from "../../account/plan-type-helpers";
import { CodexBrowserSurfaceActionType } from "../../analytics/codex-browser-surface-action-type";
import { CodexPluginActionResult } from "../../analytics/codex-plugin-action-result";
import { CodexPluginActionType } from "../../analytics/codex-plugin-action-type-enum";
import { CodexPluginDirectoryEntrypoint } from "../../analytics/codex-plugin-directory-entrypoint";
import { CodexReferralInviteModalBackendErrorType } from "../../analytics/codex-referral-invite-modal-backend-error-type";
import { CODEX_THREAD_OPEN_STREAM_ROLE_RESOLVED_TYPE } from "../../analytics/codex-thread-open-stream-role-resolved-type";
import { logProductEvent } from "../../analytics/log-product-event";
import { AppInstallProgressDialog } from "../../apps/app-install-progress-dialog";
import { ArtifactPreviewZoomToFitLabel } from "../../artifact/artifact-preview-zoom-to-fit-label";
import { decayZoomPercent } from "../../artifact/clamp-zoom-percent";
import { appScopeAtom, ensureAppScopeInit } from "../../runtime/app-scope-runtime";
import { ensureComposerEsm_FH_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init } from "../../boundaries/composer-esm-inits";
import { createPersistedAtom, ensurePersistedAtomInit } from "../../boundaries/persisted-atom";
import { jsxRuntime as getJsxRuntime, react, reactCompilerRuntime } from "../../boundaries/react-cjs-runtime";
import { WritingBlockRenderer } from "../../composer/writing-block-renderer";
import { isOpenaiBundledId } from "../../config/is-openai-bundled-id";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { ensureClientCoordinationServiceInit } from "../../desktop/ensure-client-coordination-service-init";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { DEVELOPERS_OPENAI_COM_CODEX_APP_COMPUTER_USE_URL } from "../../docs/codex-doc-urls";
import { CodexBuildEnvironment } from "../../env/codex-build-environment";
import { MOBILE_MFA_SETUP_FEATURE_GATE_ID, REMOTE_CONTROL_PAIRING_FEATURE_GATE_ID } from "../../feature-gates/feature-gate-ids";
import { CONVERSATIONAL_ONBOARDING_COMPLETED_BY_ACCOUNT_ID_KEY } from "../../home/onboarding-storage-keys";
import { ensureDebugPanelTurnFilesInit } from "../../hooks/debug-panel-turn-files";
import { useEventCallback } from "../../hooks/use-event-callback";
import { ensureUseHomeDirectoryInit, useHomeDirectory } from "../../hooks/use-home-directory";
import { useIsDarkAppearance } from "../../hooks/use-is-dark-appearance";
import { UsePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
import { LOCAL_HOST_ID } from "../../hosts/local-host-id";
import { useHostPlatformModifierSymbol } from "../../hotkeys/use-host-platform-modifier-symbol";
import { MemoizedFormattedMessage } from "../../i18n/memoized-formatted-message";
import { ensureIntlFormattersInit, useIntl } from "../../i18n/use-intl";
import { AppIconAlt } from "../../icons/app-icon-alt";
import { AppIconDG } from "../../icons/app-icon-dg";
import { AppIconJG } from "../../icons/app-icon-jg";
import { PanelWidthIcon } from "../../icons/panel-width-icon";
import { serializeCharacterReferenceNode } from "../../markdown/serialize-character-reference-node";
import { strongMarkerFromOptions } from "../../markdown/strong-marker-from-options";
import { usePrefersReducedMotion } from "../../motion/use-prefers-reduced-motion";
import { ensureAppShellAtomsInit } from "../../navigation/app-shell-atoms";
import { codexMicroHasEverBeenDetected } from "../../onboarding/codex-micro-detection-signals";
import { matchesOptionalHostPluginIds } from "../../plugins/matches-optional-host-plugin-ids";
import { ensureInstalledPluginsQueryInit } from "../../plugins/use-installed-plugins-query";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { generalDesktopSettingsDefinitions } from "../../settings/general-desktop-settings-definitions";
import { ensureSettingsQueryAtomsInit } from "../../settings/settings-ipc";
import { useSettingValue } from "../../settings/use-setting-value";
import { ensureSkillsPageHelpersInit } from "../../skills/skills-page-helpers";
import { CopyButton } from "../../ui/copy-button";
import { deferredT } from "../../ui/deferred-t";
import { macOS4 } from "../../ui/mac-os4";
import { OptionalTooltip } from "../../ui/optional-tooltip";
import { noop } from "../../utils/noop";
import { ensureSvgToDataUriInit, svgToDataUri } from "../../utils/svg-to-data-uri";

/** split companion stub */
const $: any = undefined;
/** split companion stub */
const ApexPrime: any = undefined;
/** split companion stub */
const axleSecond: any = undefined;
/** split companion stub */
const BrookPrime: any = undefined;
/** split companion stub */
const CliffPrime: any = undefined;
/** split companion stub */
const DuskPrime: any = undefined;
/** split companion stub */
const ElmPrime: any = undefined;
/** split companion stub */
const hingeSecond: any = undefined;
/** split companion stub */
const indigoThird: any = undefined;
/** split companion stub */
const inletThird: any = undefined;
/** split companion stub */
const ironSecond: any = undefined;
/** split companion stub */
const JewelPrime: any = undefined;
/** split companion stub */
const keystoneSecond: any = undefined;
/** split companion stub */
const kiteThird: any = undefined;
/** split companion stub */
const latchSecond: any = undefined;
/** split companion stub */
const lemonThird: any = undefined;
/** split companion stub */
const pistonSecond: any = undefined;
/** split companion stub */
const rivetSecond: any = undefined;
/** split companion stub */
const seedFourth: any = undefined;
/** split companion stub */
const torqueSecond: any = undefined;

/** app-initial companion (stub only; never promote) */
const AppInitialBQ: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialMi: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialWQ: any = undefined;
/** split companion stub */
const IntlProvider: any = undefined;
/** split companion stub */
const NativeContextMenuSurface: any = undefined;
/** split companion stub */
const PersonGlyph: any = undefined;
/** split companion stub */
const RealtimeVoiceHostId: any = undefined;
/** split companion stub */
const _t: any = undefined;
/** split companion stub */
const arborPrime: any = undefined;
/** split companion stub */
const bushingPrime: any = undefined;
/** split companion stub */
const collarPrime: any = undefined;
/** split companion stub */
const dowelPrime: any = undefined;
/** split companion stub */
const flangePrime: any = undefined;
/** split companion stub */
const gibPrime: any = undefined;
/** split companion stub */
const hubPrime: any = undefined;
/** split companion stub */
const idlerPrime: any = undefined;
/** split companion stub */
const jigPrime: any = undefined;
/** split companion stub */
const arborSecond: any = undefined;
/** split companion stub */
const bushingSecond: any = undefined;
/** split companion stub */
const collarSecond: any = undefined;
/** split companion stub */
const dowelSecond: any = undefined;
/** split companion stub */
const flangeSecond: any = undefined;
/** split companion stub */
const gibSecond: any = undefined;
/** split companion stub */
const hubSecond: any = undefined;
/** split companion stub */
const idlerSecond: any = undefined;
/** split companion stub */
const arborThird: any = undefined;
/** split companion stub */
const hubThird: any = undefined;
/** split companion stub */
const DeferredUiLC: any = undefined;
/** split companion stub */
const deferredUiUC: any = undefined;
/** split companion stub */
const deferredUiWZ: any = undefined;
/** split companion stub */
const ReadLoginRouteQuerySnapshot: any = undefined;
/** split companion stub */
const writeClipboardContents: any = undefined;
const AppInitialPl: any = undefined;
const AppInitialPi: any = undefined;
function Alpha(garnet) {
  let {
      deviceType,
      hostId,
      onDeviceTypeChange,
      showDeviceTypeSelector = true,
      size = "default"
    } = garnet,
    hazel = hostId === undefined ? LOCAL_HOST_ID : hostId,
    ivory = useIntl(),
    jasper = NativeContextMenuSurface(MOBILE_MFA_SETUP_FEATURE_GATE_ID),
    kelp = NativeContextMenuSurface(REMOTE_CONTROL_PAIRING_FEATURE_GATE_ID),
    [lotus, mint] = onyx.useState("ios"),
    [nova, olive] = onyx.useState(false),
    [prism, quill] = onyx.useState("phone"),
    reef = showDeviceTypeSelector ? deviceType ?? prism : "phone",
    [sage] = onyx.useState(bravo),
    topaz = {
      hostId: hazel,
      openId: sage
    };
  let ultra = CodexBrowserSurfaceActionType(AppInitialWQ, topaz),
    vapor = jasper && !kelp,
    wheat = vapor && ultra.error == null ? ultra.data ?? null : null,
    yarn = wheat?.manualPairingCode ?? null,
    zephyr = vapor && wheat == null && (ultra.error == null || ultra.isFetching),
    acorn = !jasper || wheat?.pairingCode != null,
    bloom = reef === "phone" && !jasper && !kelp,
    coral = showDeviceTypeSelector && !kelp,
    drift = vapor && reef === "computer" && !zephyr,
    eagle = isle => {
      deviceType ?? quill(isle);
      onDeviceTypeChange?.(isle);
    };
  let frost = eagle,
    glide = ivory.formatMessage({
      id: "codexMobile.setupPage.waiting.pairing.refresh",
      defaultMessage: "Refresh pairing code",
      description: "Accessible label for refreshing the remote-control pairing code"
    });
  let honey = glide,
    iris = ivory.formatMessage({
      id: "codexMobile.setupPage.waiting.pairing.showQrCodeFullscreen",
      defaultMessage: "Show QR code fullscreen",
      description: "Accessible label for showing the remote-control pairing QR code fullscreen"
    });
  let jewel = iris,
    knoll = ivory.formatMessage({
      id: "codexMobile.setupPage.waiting.phoneDeepLink.qrCode",
      defaultMessage: "QR code to continue setup in ChatGPT",
      description: "Accessible label for the QR code that opens Codex in ChatGPT"
    });
  let lunar = knoll,
    moss = ivory.formatMessage({
      id: "codexMobile.setupPage.waiting.phoneDeepLink.animateQrCode",
      defaultMessage: "Animate QR code",
      description: "Accessible label for the button that replays the Codex mobile QR code animation"
    });
  let north = moss,
    orbit = ivory.formatMessage({
      id: "codexMobile.setupPage.waiting.pairing.copy",
      defaultMessage: "Copy pairing code",
      description: "Accessible label for copying the remote-control pairing code"
    });
  let pine = orbit,
    quest;
  if (kelp) {
    let juniper;
    juniper = <div className="max-w-[280px] text-base leading-normal text-token-text-secondary">{<MemoizedFormattedMessage id="codexMobile.setupPage.waiting.upgradeMessage" defaultMessage="Please upgrade to the latest version of the ChatGPT app to pair" description="Message shown instead of remote-control pairing controls when the desktop app must be upgraded" />}</div>;
    quest = juniper;
  } else if (zephyr) {
    let lagoon = ivory.formatMessage({
      id: "codexMobile.setupPage.waiting.pairing.loading",
      defaultMessage: "Loading pairing code",
      description: "Accessible label for the loading indicator shown while a remote-control pairing code is requested"
    });
    let meadow;
    meadow = <Delta ariaLabel={lagoon} />;
    quest = meadow;
  } else if (reef === "phone" && acorn) {
    let nest = wheat?.pairingCode,
      oak;
    oak = <BrookPrime ariaLabel={lunar} centerLogoAriaLabel={north} pairingCode={nest} platform={lotus} size={size} />;
    quest = oak;
  } else if (reef === "phone") {
    let petal;
    petal = <Marble error={ultra.error} />;
    quest = petal;
  } else if (jasper) {
    let quiet;
    quiet = <Echo error={ultra.error} manualPairingCode={yarn} size={size} />;
    quest = quiet;
  } else {
    let rain;
    rain = <Falcon />;
    quest = rain;
  }
  let ridge = size === "compact" && coral && "min-h-[300px]",
    storm = size !== "compact" && "mt-3",
    tide = IntlProvider("flex w-full flex-col items-center gap-4", ridge, storm);
  let unity = coral ? <div className="w-full rounded-full bg-token-foreground/5 p-1"><AppInitialPl buttonClassName={IntlProvider("!rounded-full !border-transparent !bg-transparent !py-1", "!text-token-text-secondary", "[&[aria-pressed=true]]:!bg-token-dropdown-background", "[&[aria-pressed=true]]:!text-token-foreground")} ariaLabel={ivory.formatMessage({
      id: "codexMobile.setupDialog.waiting.deviceType",
      defaultMessage: "Device type",
      description: "Accessible label for choosing which device type the approval steps target"
    })} options={[{
      id: "phone",
      label: <MemoizedFormattedMessage id="codexMobile.setupDialog.waiting.deviceType.phone" defaultMessage="Phone" description="Label for phone approval instructions" />
    }, {
      id: "computer",
      label: <MemoizedFormattedMessage id="codexMobile.setupDialog.waiting.deviceType.computer" defaultMessage="Computer" description="Label for computer approval instructions" />
    }]} selectedId={reef} onSelect={frost} fullWidth={true} /></div> : null;
  let vale = size === "compact" ? "bg-transparent" : "bg-token-bg-primary",
    wave = bloom ? null : "justify-center",
    apex = reef === "computer" ? size === "compact" ? "min-h-[200px] gap-3 p-4" : "min-h-[300px] gap-5 p-7" : size === "compact" ? "min-h-[248px] gap-3 p-4" : "min-h-[360px] gap-5 p-7",
    brook = IntlProvider("relative flex w-full flex-col items-center rounded-[24px] border border-token-border/70 text-center", vale, wave, apex);
  let cliff = bloom ? <div className="flex flex-1 items-center justify-center">{quest}</div> : quest;
  let dusk = bloom ? <Copper ariaLabel={ivory.formatMessage({
    id: "codexMobile.setupPage.ready.phoneDeepLink.deviceType",
    defaultMessage: "Phone type",
    description: "Accessible label for choosing which animated Codex mobile QR code to show"
  })} platform={lotus} onPlatformChange={mint} /> : null;
  let elm = vapor ? <div className="absolute right-3 bottom-3 flex items-center gap-1">{reef === "computer" && yarn != null ? <CopyButton buttonText={pine} iconClassName="icon-xs" iconOnly={true} onCopy={seed => {
      writeClipboardContents(yarn, seed);
    }} /> : null}{reef === "phone" && acorn ? <OptionalTooltip tooltipContent={jewel}>{<ReadLoginRouteQuerySnapshot aria-label={jewel} color="ghost" onClick={() => olive(true)} size="icon"><PanelWidthIcon className="icon-xs" /></ReadLoginRouteQuerySnapshot>}</OptionalTooltip> : null}{<OptionalTooltip tooltipContent={honey}>{<ReadLoginRouteQuerySnapshot aria-label={honey} color="ghost" disabled={ultra.isFetching} onClick={() => {
        ultra.refetch();
      }} size="icon"><AppIconAlt className={IntlProvider("icon-xs", ultra.isFetching ? "animate-spin" : null)} /></ReadLoginRouteQuerySnapshot>}</OptionalTooltip>}</div> : null;
  let fern = <div className={brook}>{cliff}{dusk}{elm}</div>;
  let grove = drift ? <Kite /> : null;
  let hill = wheat?.pairingCode == null ? null : <UsePointerSurfaceInteractionGate open={nova} onOpenChange={olive} contentClassName="fixed inset-0 !left-0 !top-0 grid h-[100dvh] w-screen max-w-none !translate-x-0 !translate-y-0 place-items-center overflow-visible rounded-none bg-transparent p-0 shadow-none ring-0 backdrop-blur-none" contentProps={{
    "aria-describedby": undefined,
    onClick: event => {
      event.target === event.currentTarget && olive(false);
    }
  }} dialogCloseClassName="!top-4 !right-4 bg-black/20 text-white hover:bg-white/10" dialogCloseLabel={ivory.formatMessage({
    id: "codexMobile.setupPage.waiting.pairing.closeFullscreenQrCode",
    defaultMessage: "Close fullscreen QR code",
    description: "Accessible label for closing the fullscreen remote-control pairing QR code"
  })} overlayClassName="!bg-black/75 backdrop-blur-sm" unstyledContent={true} viewportSized={true}><RealtimeVoiceHostId className="sr-only"><MemoizedFormattedMessage id="codexMobile.setupPage.waiting.pairing.fullscreenQrCodeTitle" defaultMessage="Pairing QR code" description="Title for the fullscreen remote-control pairing QR code dialog" /></RealtimeVoiceHostId><BrookPrime ariaLabel={lunar} centerLogoAriaLabel={north} fullscreen={true} pairingCode={wheat.pairingCode} platform={lotus} /></UsePointerSurfaceInteractionGate>;
  return <div className={tide}>{unity}{fern}{grove}{hill}</div>;
}
function bravo() {
  return crypto.randomUUID();
}
function Copper(trail) {
  let {
      ariaLabel,
      onPlatformChange,
      platform
    } = trail,
    urn = platform === "ios",
    vine = platform === "ios" ? "text-token-text-primary" : "text-token-text-tertiary",
    wind = IntlProvider("cursor-interaction rounded px-1 outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border", vine);
  let yarrow = () => onPlatformChange("ios");
  let azure = <MemoizedFormattedMessage id="codexMobile.setupPage.waiting.phoneDeepLink.deviceType.ios" defaultMessage="iPhone" description="Label for the iPhone Codex mobile QR code option" />;
  let birch = <button aria-pressed={urn} className={wind} onClick={yarrow} type="button">{azure}</button>;
  let canyon = platform === "android",
    dew = platform === "android" ? "text-token-text-primary" : "text-token-text-tertiary",
    ever = IntlProvider("cursor-interaction rounded px-1 outline-none focus-visible:ring-1 focus-visible:ring-token-focus-border", dew);
  let field = () => onPlatformChange("android");
  let grain = <MemoizedFormattedMessage id="codexMobile.setupPage.waiting.phoneDeepLink.deviceType.android" defaultMessage="Android" description="Label for the Android Codex mobile QR code option" />;
  let haven = <button aria-pressed={canyon} className={ever} onClick={field} type="button">{grain}</button>;
  return <div aria-label={ariaLabel} className="flex items-center justify-center gap-2 text-base font-medium" role="group">{birch}{haven}</div>;
}
function Delta(ink) {
  let {
      ariaLabel
    } = ink,
    jadeite = <VSCODE_EDITOR_ID className="size-7 text-token-text-secondary" />;
  return <div aria-label={ariaLabel} className="grid place-items-center" role="status">{jadeite}</div>;
}
function Echo(kernel) {
  let {
    error,
    manualPairingCode,
    size
  } = kernel;
  return <>{manualPairingCode == null ? <Marble error={error} /> : <div className={IntlProvider("cursor-text font-semibold tracking-[0.18em] text-token-text-primary lining-nums tabular-nums select-text [font-feature-settings:'cv08'_on]", size === "compact" ? "text-2xl" : "text-3xl")}>{manualPairingCode}</div>}</>;
}
function Falcon() {
  let leaf = <Jade index={1}><MemoizedFormattedMessage id="codexMobile.setupDialog.waiting.computer.step.openDesktopApp" defaultMessage={"Open the <strong>ChatGPT desktop app</strong> on the computer you want to authorize"} description="First computer approval instruction for adding another device" values={{
      strong: indigo
    }} /></Jade>;
  let maple = <Jade index={2}><MemoizedFormattedMessage id="codexMobile.setupDialog.waiting.computer.step.settingsConnections" defaultMessage={"Go to <strong>Connections</strong> tab in settings"} description="Second computer approval instruction for adding another device" values={{
      strong: harbor
    }} /></Jade>;
  return <div className="flex w-full flex-col gap-3">{leaf}{maple}{<Jade index={3}><MemoizedFormattedMessage id="codexMobile.setupDialog.waiting.computer.step.allow" defaultMessage={"Click <strong>Set up</strong> in the <strong>Control other devices</strong> tab"} description="Third computer approval instruction for adding another device" values={{
        strong: gamma
      }} /></Jade>}</div>;
}
function gamma(nimbus) {
  return <span className="font-semibold text-token-text-primary">{nimbus}</span>;
}
function harbor(opal) {
  return <span className="font-semibold text-token-text-primary">{opal}</span>;
}
function indigo(plume) {
  return <span className="font-semibold text-token-text-primary">{plume}</span>;
}
function Jade(quillow) {
  let {
      children,
      index
    } = quillow,
    root = <span className="inline-flex size-6 shrink-0 translate-y-[1px] items-center justify-center rounded-full bg-token-foreground/70 text-base leading-normal tracking-normal text-token-button-foreground">{index}</span>;
  let silk = <div className="text-left text-base leading-normal tracking-normal text-token-text-secondary">{children}</div>;
  return <div className="flex items-baseline gap-4 px-[10px] py-2">{root}{silk}</div>;
}
function Kite() {
  return <div className="w-full px-2 text-center text-sm leading-normal text-token-text-secondary">{<MemoizedFormattedMessage id="codexMobile.setupPage.waiting.computerPairingCode.caption" defaultMessage={"Click <strong>Add</strong> in the <strong>Settings > Connections > Control other devices</strong> tab on your other computer and enter this code"} description="Caption shown below the remote-control manual pairing code" values={{
      strong: lemon
    }} />}</div>;
}
function lemon(thorn) {
  return <strong className="font-semibold text-token-text-primary">{thorn}</strong>;
}
function Marble(upland) {
  let {
    error
  } = upland;
  return <div className="text-sm leading-normal text-token-text-secondary" role="alert">{error == null ? <MemoizedFormattedMessage id="codexMobile.setupPage.waiting.pairing.unavailable" defaultMessage="Pairing code unavailable" description="Message shown when the remote-control pairing code cannot be loaded" /> : <MemoizedFormattedMessage id="codexMobile.setupPage.waiting.pairing.unavailableWithError" defaultMessage={"Pairing code unavailable: {error}"} description="Message shown when the remote-control pairing code cannot be loaded, including the app-server error detail" values={{
      error: error.message
    }} />}</div>;
}
var nickel,
  onyx,
  pearl,
  quartz = esmInit(() => {
    nickel = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureComposerEsm_MT_Init();
    onyx = commonJsInit(react(), 1);
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    decayZoomPercent();
    findProcessManagerRow();
    WritingBlockRenderer();
    ensureComposerEsm_Sut_Init();
    ensureComposerEsm_Hlt_Init();
    deferredUiWZ();
    useEventCallback();
    ensureAppShellAtomsInit();
    ensureSkillsPageHelpersInit();
    ensureComposerEsm_FH_Init();
    AppInitialBQ();
    keystoneSecond();
    pearl = getJsxRuntime();
  });
function River(vista) {
  let {
      onSkip,
      onStartSetup,
      showStartSetupError,
      setupInProgress,
      variant
    } = vista,
    {
      platform
    } = useHostPlatformModifierSymbol(),
    wisp = violet(variant, platform);
  let yonder = wisp,
    zenith = <MemoizedFormattedMessage id="codexMobile.setupDialog.initial.description" defaultMessage="Continue chats from the ChatGPT desktop app on your phone or another device" description="Description for the Codex mobile setup dialog" />;
  let anvil = <CodexMobileSetupDialogO variant={variant} />;
  let beacon = variant === "page" && "w-full max-w-[400px]",
    crag = IntlProvider("flex flex-wrap items-center justify-center gap-3", beacon);
  let dome = variant === "dialog" ? <ReadLoginRouteQuerySnapshot color="secondary" onClick={onSkip} size="large" className="justify-center" disabled={setupInProgress}><MemoizedFormattedMessage id="codexMobile.setupDialog.initial.skip" defaultMessage="Later" description="Secondary action for the Codex mobile setup dialog" /></ReadLoginRouteQuerySnapshot> : null;
  let eddy = variant === "page" && "w-full",
    fjord = IntlProvider("justify-center", eddy);
  let glen = <MemoizedFormattedMessage id="codexMobile.setupDialog.initial.primary" defaultMessage="Get started" description="Primary action for the Codex mobile setup dialog" />;
  let hearth = <ReadLoginRouteQuerySnapshot onClick={onStartSetup} size="large" className={fjord} loading={setupInProgress}>{glen}</ReadLoginRouteQuerySnapshot>;
  let inlet = <div className={crag}>{dome}{hearth}</div>;
  let jetty = variant === "page" ? <div className="w-full max-w-[400px] text-center text-xs leading-normal text-token-description-foreground">{<MemoizedFormattedMessage id="codexMobile.setupPage.initial.securityNotice" defaultMessage="ChatGPT can access your desktop—including files, apps, and your browser—to complete tasks you send from your phone. This can introduce security risks. Only connect devices that you own and trust." description="Security notice shown on the Codex mobile setup page" />}</div> : null;
  let knob = showStartSetupError ? <div className="text-sm text-token-error-foreground">{<MemoizedFormattedMessage id="codexMobile.setupDialog.initial.startSetupError" defaultMessage="Couldn’t check security requirements. Try again" description="Error shown when Codex mobile setup cannot check the MFA requirement" />}</div> : null;
  return <JewelPrime variant={variant} heading={yonder} description={zenith}>{anvil}{inlet}{jetty}{knob}</JewelPrime>;
}
function Slate(ledge) {
  let {
      onAllowHost,
      setupInProgress,
      showAllowHostError,
      variant
    } = ledge,
    mire,
    nook;
  mire = <MemoizedFormattedMessage id="codexMobile.setupDialog.allowHost.heading" defaultMessage="Allow devices to control this computer?" description="Heading for the Codex mobile allow host dialog state" />;
  nook = <MemoizedFormattedMessage id="codexMobile.setupDialog.allowHost.description" defaultMessage="This lets authorized devices, such as your phone, connect to ChatGPT and control this computer remotely" description="Description for the Codex mobile allow host dialog state" />;
  let oxbow = <MemoizedFormattedMessage id="codexMobile.setupDialog.allowHost.primary" defaultMessage="Allow" description="Primary action for the Codex mobile allow host dialog state" />;
  let pond = <ReadLoginRouteQuerySnapshot size="large" className="justify-center" loading={setupInProgress} onClick={onAllowHost}>{oxbow}</ReadLoginRouteQuerySnapshot>;
  let quarry = showAllowHostError ? <div className="text-sm text-token-error-foreground">{<MemoizedFormattedMessage id="codexMobile.setupDialog.allowHost.error" defaultMessage="Couldn’t enable remote control. Try again" description="Error shown when Codex mobile setup cannot enable remote control" />}</div> : null;
  return <JewelPrime variant={variant} heading={mire} description={nook}>{pond}{quarry}</JewelPrime>;
}
function Timber(rapids) {
  let {
      onContinueOnChatGPT,
      variant
    } = rapids,
    spur,
    tor;
  spur = <MemoizedFormattedMessage id="codexMobile.setupDialog.mfaRequired.heading" defaultMessage="Turn on Multi-Factor Authentication" description="Heading for the Codex mobile MFA required dialog state" />;
  tor = <MemoizedFormattedMessage id="codexMobile.setupDialog.mfaRequired.description" defaultMessage="To enable this feature, you’ll need to turn on Multi-Factor Authentication for your ChatGPT account" description="Description for the Codex mobile MFA required dialog state" />;
  let updraft = <MemoizedFormattedMessage id="codexMobile.setupDialog.mfaRequired.primary" defaultMessage="Continue on chatgpt.com" description="Primary action for the Codex mobile MFA required dialog state" />;
  let verge = <ReadLoginRouteQuerySnapshot size="large" className="justify-center" onClick={onContinueOnChatGPT}>{updraft}</ReadLoginRouteQuerySnapshot>;
  return <JewelPrime variant={variant} heading={spur} description={tor}>{verge}</JewelPrime>;
}
function Umbra(weir) {
  let {
      onManageConnections
    } = weir,
    yard,
    anchor;
  yard = <MemoizedFormattedMessage id="codexMobile.setupPage.ready.remoteHeading" defaultMessage="Remote" description="Heading for the Remote page shown after setup has already completed" />;
  anchor = <MemoizedFormattedMessage id="codexMobile.setupPage.ready.description" defaultMessage="Scan QR code to set up a new phone or manage existing connections" description="Description for the Codex mobile page shown after setup has already completed" />;
  let bolt = <Alpha showDeviceTypeSelector={false} />;
  return <JewelPrime variant="page" heading={yard} description={anchor}><div className="flex w-full max-w-[460px] flex-col items-center gap-6">{bolt}{<DuskPrime onManageConnections={onManageConnections} />}</div></JewelPrime>;
}
function CodexMobileSetupDialogO(cog) {
  let {
      variant
    } = cog,
    disc = variant === "dialog" ? "w-[380px] gap-4" : "w-full max-w-[400px] divide-y-[0.5px] divide-token-border overflow-hidden rounded-2xl border border-token-border",
    edge = IntlProvider("flex flex-col", disc);
  let forge = <Willow icon={<AppInitialPi aria-hidden={true} className="size-5" />} title={<MemoizedFormattedMessage id="codexMobile.setupDialog.initial.feature.threads.title" defaultMessage="Pick up where you left off" description="Title for the first Codex mobile feature in the setup dialog" />}><MemoizedFormattedMessage id="codexMobile.setupDialog.initial.feature.threads.description" defaultMessage="Continue any chat or project from the ChatGPT desktop app" description="Description for the first Codex mobile feature in the setup dialog" /></Willow>;
  let gear = <Willow icon={<AppIconDG aria-hidden={true} className="size-5" />} title={<MemoizedFormattedMessage id="codexMobile.setupDialog.initial.feature.notifications.title" defaultMessage="Stay in the loop" description="Title for the second Codex mobile feature in the setup dialog" />}><MemoizedFormattedMessage id="codexMobile.setupDialog.initial.feature.notifications.description" defaultMessage="Get notified when ChatGPT finishes a task or needs your attention" description="Description for the second Codex mobile feature in the setup dialog" /></Willow>;
  let hinge = <Willow icon={<DeferredUiLC aria-hidden={true} className="size-5" />} title={<MemoizedFormattedMessage id="codexMobile.setupDialog.initial.feature.actions.title" defaultMessage="Start something new" description="Title for the third Codex mobile feature in the setup dialog" />}><MemoizedFormattedMessage id="codexMobile.setupDialog.initial.feature.actions.description" defaultMessage="Just send a message to start a task on your desktop" description="Description for the third Codex mobile feature in the setup dialog" /></Willow>;
  return <div className={edge}>{forge}{gear}{hinge}</div>;
}
function violet(iron, joint) {
  return iron === "dialog" ? joint === "windows" ? <MemoizedFormattedMessage id="codexMobile.setupDialog.initial.heading.windows" defaultMessage="Connect a device to this PC" description="Heading for the Codex mobile setup dialog on Windows" /> : <MemoizedFormattedMessage id="codexMobile.setupDialog.initial.heading.desktop" defaultMessage="Connect a device to this Mac" description="Heading for the Codex mobile setup dialog on non-Windows desktop platforms" /> : joint === "windows" ? <MemoizedFormattedMessage id="codexMobile.setupPage.initial.heading.windows" defaultMessage="Connect your phone to this PC" description="Heading for the Codex mobile setup page on Windows" /> : <MemoizedFormattedMessage id="codexMobile.setupDialog.initial.heading" defaultMessage="Connect your phone to this Mac" description="Heading for the Codex mobile setup page on non-Windows desktop platforms" />;
}
function Willow(keystone) {
  let {
      children,
      icon,
      title
    } = keystone,
    latch = <div className="flex h-8 w-8 shrink-0 items-center justify-center text-token-text-primary">{icon}</div>;
  let motor = <div className="text-base leading-normal tracking-normal text-token-text-primary">{title}</div>;
  let nut = <div className="text-sm leading-normal tracking-normal text-token-description-foreground">{children}</div>;
  let piston = <div className="flex min-w-0 flex-1 flex-col gap-1 text-left">{motor}{nut}</div>;
  return <div className="flex items-center gap-4 px-[14px] py-2">{latch}{piston}</div>;
}
var xenon,
  yellow,
  codexMobileSetupDialogS = esmInit(() => {
    xenon = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    macOS4();
    PersonGlyph();
    deferredUiUC();
    AppInitialMi();
    indigoThird();
    lemonThird();
    quartz();
    yellow = getJsxRuntime();
  });
function Zinc(rivet) {
  let {
      approvalDeviceMode,
      heading,
      hostId,
      onApprovalDeviceModeChange,
      variant
    } = rivet,
    screw = hostId === undefined ? LOCAL_HOST_ID : hostId,
    {
      platform
    } = useHostPlatformModifierSymbol(),
    torque = heading ?? (platform === "macOS" ? <MemoizedFormattedMessage id="codexMobile.setupDialog.waiting.heading.mac" defaultMessage="Approve on your device to control this Mac remotely" description="Heading for the Codex mobile setup waiting state on macOS" /> : <MemoizedFormattedMessage id="codexMobile.setupDialog.waiting.heading.pc" defaultMessage="Approve on your device to control this computer remotely" description="Heading for the Codex mobile setup waiting state on non-macOS platforms" />);
  let valve = torque;
  if (variant === "page") {
    let bracket = <MemoizedFormattedMessage id="codexMobile.setupPage.waiting.phoneDeepLink.caption" defaultMessage="Scan to continue setup in ChatGPT" description="Caption shown below the Codex mobile deep link QR code" />;
    let clamp = <div className="flex w-full max-w-[460px] flex-col items-center gap-6">{<Alpha hostId={screw} showDeviceTypeSelector={false} />}</div>;
    let drill;
    return <JewelPrime variant="page" heading={valve} description={bracket}>{clamp}</JewelPrime>;
  }
  let axle = <div className="flex w-full justify-center">{<Alpha deviceType={approvalDeviceMode} hostId={screw} onDeviceTypeChange={onApprovalDeviceModeChange} size="compact" />}</div>;
  return <JewelPrime variant="dialog" heading={valve}>{axle}</JewelPrime>;
}
var amber,
  basalt,
  cedar = esmInit(() => {
    amber = reactCompilerRuntime();
    ensureIntlFormattersInit();
    macOS4();
    ensureAppShellAtomsInit();
    indigoThird();
    quartz();
    basalt = getJsxRuntime();
  });
function codexMobileSetupDialogI(engine) {
  let {
      hostId,
      onAllowHost,
      onContinueOnChatGPT,
      onFinishSetup,
      onManageConnections,
      onSkip,
      onStartSetup,
      setupInProgress,
      showAllowHostError = false,
      showStartSetupError,
      step,
      variant,
      waitingHeading
    } = engine,
    [frame, gasket] = pistonSecond.useState("phone"),
    handle = <DollarI approvalDeviceMode={frame} hostId={hostId} onAllowHost={onAllowHost} onApprovalDeviceModeChange={gasket} onContinueOnChatGPT={onContinueOnChatGPT} onFinishSetup={onFinishSetup} onManageConnections={onManageConnections} onSkip={onSkip} onStartSetup={onStartSetup} setupInProgress={setupInProgress} showAllowHostError={showAllowHostError} showStartSetupError={showStartSetupError} step={step} variant={variant} waitingHeading={waitingHeading} />;
  let insert = handle;
  if (variant === "dialog") {
    let lever = daisy(step, frame);
    let mount = <CliffPrime artworkSrc={lever} />;
    let nozzle;
    return <div className="pointer-events-auto flex w-full flex-col overflow-hidden">{mount}{insert}</div>;
  }
  let jacket = flint(step);
  let knurl = ember(step);
  return <ApexPrime artworkAlignment={jacket} artworkSrc={knurl}>{insert}</ApexPrime>;
}
export function codexMobileSetupDialogR(platen: unknown) {
  let {
    onManageConnections
  } = platen;
  return <ApexPrime><Umbra onManageConnections={onManageConnections} /></ApexPrime>;
}
function DollarI(ratchet) {
  let {
    approvalDeviceMode,
    hostId,
    onAllowHost,
    onApprovalDeviceModeChange,
    onContinueOnChatGPT,
    onFinishSetup,
    onManageConnections,
    onSkip,
    onStartSetup,
    setupInProgress,
    showAllowHostError,
    showStartSetupError,
    step,
    variant,
    waitingHeading
  } = ratchet;
  switch (step) {
    case "allow-host":
      {
        let shim;
        return <Slate onAllowHost={onAllowHost} setupInProgress={setupInProgress} showAllowHostError={showAllowHostError} variant={variant} />;
      }
    case "connected":
      {
        let tappet;
        return <ElmPrime onFinishSetup={onFinishSetup} onManageConnections={onManageConnections} variant={variant} />;
      }
    case "initial":
      {
        let arbor;
        return <River onSkip={onSkip} onStartSetup={onStartSetup} showStartSetupError={showStartSetupError} setupInProgress={setupInProgress} variant={variant} />;
      }
    case "mfa-required":
      {
        let bushing;
        return <Timber onContinueOnChatGPT={onContinueOnChatGPT} variant={variant} />;
      }
    case "waiting":
      {
        let collar;
        return <Zinc approvalDeviceMode={approvalDeviceMode} heading={waitingHeading} hostId={hostId} onApprovalDeviceModeChange={onApprovalDeviceModeChange} variant={variant} />;
      }
  }
}
function daisy(dowel, flange) {
  switch (dowel) {
    case "allow-host":
      return hingeSecond;
    case "connected":
      return kiteThird;
    case "initial":
      return _t;
    case "mfa-required":
      return inletThird;
    case "waiting":
      return flange === "phone" ? ironSecond : seedFourth;
  }
}
function ember(gib) {
  switch (gib) {
    case "allow-host":
      return latchSecond;
    case "connected":
    case "initial":
      return axleSecond;
    case "mfa-required":
      return rivetSecond;
    case "waiting":
      return torqueSecond;
  }
}
function flint(hub) {
  switch (hub) {
    case "allow-host":
      return "bottom-right";
    case "mfa-required":
      return "right";
    case "connected":
    case "initial":
    case "waiting":
      return "center";
  }
}
