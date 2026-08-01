// Restored from ref/webview/assets/codex-mobile-setup-dialog-CedkrL4M.js
// Wave GA — full polished body from `codex-mobile-setup-dialog-CedkrL4M/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 32 (verified 76/108).
// AST split 1/5
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
import { ensureComposerEsm_FH_Init, ensureComposerEsm_Hlt_Init, ensureComposerEsm_K9_Init, ensureComposerEsm_MT_Init, ensureComposerEsm_Qtt_Init, ensureComposerEsm_Sut_Init, ensureComposerEsm_Tft_Init, ensureComposerEsm_Utt_Init } from "../../composer/composer-esm-inits";
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
import { usePointerSurfaceInteractionGate } from "../../hooks/use-pointer-surface-interaction-gate";
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
const zincThird: any = undefined;

/** split companion stub */
const jigSecond: any = undefined;
const AppInitialAw: any = undefined;
/** Wave GA unresolved companion (jsx-collision:realtimeVoiceCatalog@voice/realtime-voice-catalog.ts) */
const AppInitialBC: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureSettingsGlyphBnInit@utils/wave-as-gap-ensure-inits.ts) */
const AppInitialBn: any = undefined;
/** Wave GA unresolved companion (missing-export:hosts/codex-mobile-mfa-setup-required.tsx) */
const AppInitialBQ: any = undefined;
/** Wave GA unresolved companion (missing-export:conversation/user-message5.tsx) */
const UserMessage5: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-ent.ts) */
const deferredUiEnt: any = undefined;
/** Wave GA unresolved companion (missing-export:plugins/plugin-scheduled-tasks.tsx) */
const PluginScheduledTasks: any = undefined;
/** Wave GA unresolved companion (missing-export:settings/settings-values.ts) */
const setSettingValue: any = undefined;
/** Wave GA unresolved companion (missing-export:conversation/realtime-voice-host-id.tsx) */
const RealtimeVoiceHostId: any = undefined;
/** Wave GA unresolved companion (jsx-collision:matchesOptionalHostPluginIds@plugins/matches-optional-host-plugin-ids.ts) */
const AppInitialJK: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-lc.ts) */
const deferredUiLC: any = undefined;
/** Wave GA unresolved companion (jsx-collision:ensureComposerEsm_LR_Init@composer/composer-esm-inits.ts) */
const AppInitialLR: any = undefined;
/** Wave GA unresolved companion (jsx-collision:resolvePluginMarketplaceDirectRoute@plugins/plugin-marketplace-route.ts) */
const AppInitialLz: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredAccountMi@account/deferred-account-mi-2.ts) */
const AppInitialMi: any = undefined;
/** Wave GA unresolved companion (jsx-collision:resolveOpenaiBundledId@config/is-openai-bundled-id.ts) */
const AppInitialNht: any = undefined;
/** Wave GA unresolved companion (missing-export:icons/browser-use-settings-icons.tsx) */
const PersonGlyph: any = undefined;
/** Wave GA unresolved companion (missing-export:clipboard/write-clipboard-contents.ts) */
const writeClipboardContents: any = undefined;
/** Wave GA unresolved companion (jsx-collision:hasSeenGiftCreditsHomeBanner@account/has-seen-gift-credits-home-banner.ts) */
const AppInitialPi: any = undefined;
/** Wave GA unresolved companion (jsx-collision:updateToneSectionContent@composer/update-tone-section-content.ts) */
const AppInitialPl: any = undefined;
/** Wave GA unresolved companion (jsx-collision:useAppInstallPreparingState@apps/use-app-install-preparing-state.ts) */
const AppInitialQK: any = undefined;
/** Wave GA unresolved companion (missing-export:artifact/native-context-menu-surface.tsx) */
const NativeContextMenuSurface: any = undefined;
/** Wave GA unresolved companion (missing-export:hosts/deferred-hosts-rt.ts) */
const deferredHostsRt: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-uc.ts) */
const deferredUiUC: any = undefined;
/** Wave GA unresolved companion (missing-export:desktop/browser-use-external.tsx) */
const BrowserUseExternal: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/intl-provider.tsx) */
const IntlProvider: any = undefined;
/** Wave GA unresolved companion (jsx-collision:useComputerUseWindowsGate@devices/use-computer-use-windows-gate.ts) */
const AppInitialWK: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredHostsWQ3@hosts/deferred-hosts-wq3.tsx) */
const AppInitialWQ: any = undefined;
/** Wave GA unresolved companion (missing-export:ui/deferred-ui-wz.tsx) */
const deferredUiWZ: any = undefined;
/** Wave GA unresolved companion (jsx-collision:useComputerUseGate@boundaries/browser-use-gate-facades.ts) */
const AppInitialXK: any = undefined;
/** Wave GA unresolved companion (jsx-collision:deferredHostsYC@hosts/deferred-hosts-yc.ts) */
const AppInitialYC: any = undefined;
/** Wave GA unresolved companion (missing-export:onboarding/read-login-route-query-snapshot.ts) */
const ReadLoginRouteQuerySnapshot: any = undefined;
/** Wave GA unresolved companion (jsx-collision:isAbortError@utils/is-abort-error.ts) */
const AppInitialZn: any = undefined;
var codexMobileSetupDialogU,
  alpha,
  bravo = esmInit(() => {
    alpha = "" + new URL("dialog-artwork-allow-host-B0bcIhDi.png", import.meta.url).href;
  }),
  copper,
  delta = esmInit(() => {
    copper = "" + new URL("dialog-artwork-connected-NZKCls7p.png", import.meta.url).href;
  }),
  _t,
  echo = esmInit(() => {
    _t = "" + new URL("dialog-artwork-initial-DMDAvEM7.png", import.meta.url).href;
  }),
  falcon,
  gamma = esmInit(() => {
    falcon = "" + new URL("dialog-artwork-mfa-e9Fx75-r.png", import.meta.url).href;
  }),
  harbor,
  indigo = esmInit(() => {
    harbor = "" + new URL("dialog-artwork-waiting-computer-BPIs9eKV.png", import.meta.url).href;
  }),
  jade,
  kite = esmInit(() => {
    jade = "" + new URL("dialog-artwork-waiting-phone-UTYmfLHs.png", import.meta.url).href;
  }),
  lemon,
  marble = esmInit(() => {
    lemon = "" + new URL("page-artwork-allow-host-CPm7eJR2.png", import.meta.url).href;
  }),
  nickel,
  onyx = esmInit(() => {
    nickel = "" + new URL("page-artwork-mfa-e6UxOdqq.png", import.meta.url).href;
  }),
  pearl,
  quartz = esmInit(() => {
    pearl = "" + new URL("page-artwork-waiting-pzj85BPm.png", import.meta.url).href;
  }),
  river,
  slate = esmInit(() => {
    river = "" + new URL("page-artwork-shared-Dv_GQL_j.png", import.meta.url).href;
  }),
  timber,
  Umbra,
  violet = esmInit(() => {
    react();
    timber = getJsxRuntime();
    Umbra = yarn => <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...yarn}><path fillRule="evenodd" clipRule="evenodd" d="M6.47852 3.29199C6.96176 3.29199 7.35352 3.68374 7.35352 4.16699C7.35352 4.65024 6.96176 5.04199 6.47852 5.04199H4.17871C3.74149 5.04199 3.38672 5.39676 3.38672 5.83398V12.917C3.38672 13.3542 3.74149 13.709 4.17871 13.709H7.07812C7.08381 13.7089 7.08999 13.708 7.0957 13.708C7.10158 13.708 7.10743 13.7089 7.11328 13.709H12.9111C12.9168 13.7089 12.923 13.708 12.9287 13.708C12.9346 13.708 12.9404 13.7089 12.9463 13.709H15.8447C16.282 13.709 16.6367 13.3542 16.6367 12.917V12.707C16.6367 12.2238 17.0285 11.832 17.5117 11.832C17.995 11.832 18.3867 12.2238 18.3867 12.707V12.917C18.3867 14.3207 17.2485 15.459 15.8447 15.459H13.8037V17C13.8035 17.7591 13.1878 18.3747 12.4287 18.375H7.5957C6.83642 18.375 6.22088 17.7592 6.2207 17V15.459H4.17871C2.77499 15.459 1.63672 14.3207 1.63672 12.917V5.83398C1.63672 4.43026 2.77499 3.29199 4.17871 3.29199H6.47852ZM7.9707 16.625H12.0537V15.459H7.9707V16.625Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M13.043 1.05371C14.7373 1.05391 16.126 2.35389 16.2705 4.01074C16.9011 4.22748 17.3941 4.72776 17.6006 5.36328C17.6865 5.62804 17.7027 5.92265 17.7051 6.2207V8.99902C17.7027 9.29733 17.6867 9.59248 17.6006 9.85742C17.3903 10.504 16.883 11.0115 16.2363 11.2217C15.8832 11.3362 15.477 11.3262 15.0801 11.3262H11.0049C10.6079 11.3262 10.2018 11.3363 9.84863 11.2217C9.20196 11.0115 8.69465 10.5041 8.48438 9.85742C8.39829 9.59248 8.38223 9.29733 8.37988 8.99902V6.2207C8.38223 5.92271 8.39852 5.62801 8.48438 5.36328C8.6907 4.72827 9.18358 4.22776 9.81348 4.01074C9.9579 2.35372 11.3485 1.05371 13.043 1.05371ZM10.5059 5.65039C10.4263 5.65476 10.3951 5.66156 10.3887 5.66309C10.275 5.7003 10.1855 5.7896 10.1484 5.90332C10.1467 5.91081 10.14 5.94276 10.1357 6.02051C10.1297 6.13086 10.1299 6.27789 10.1299 6.51953V8.70117C10.1299 8.94282 10.1297 9.0899 10.1357 9.2002C10.14 9.27755 10.1467 9.30899 10.1484 9.31641C10.1856 9.43027 10.2748 9.52048 10.3887 9.55762C10.3816 9.55538 10.4035 9.56372 10.5059 9.56934C10.6162 9.57536 10.7631 9.57617 11.0049 9.57617H15.0801C15.3218 9.57617 15.4687 9.57535 15.5791 9.56934C15.6546 9.56521 15.6867 9.55951 15.6953 9.55762C15.8093 9.52058 15.8993 9.43031 15.9365 9.31641C15.9382 9.3089 15.944 9.27731 15.9482 9.2002C15.9543 9.0899 15.9551 8.94282 15.9551 8.70117V6.51953C15.9551 6.27783 15.9542 6.13087 15.9482 6.02051C15.944 5.94235 15.9381 5.91066 15.9365 5.90332C15.8994 5.78929 15.8094 5.70015 15.6953 5.66309C15.6872 5.66124 15.6556 5.65457 15.5791 5.65039C15.4687 5.64437 15.3219 5.64453 15.0801 5.64453H11.0049C10.7631 5.64453 10.6162 5.64437 10.5059 5.65039ZM13.043 2.80371C12.3581 2.80371 11.7819 3.26555 11.6064 3.89453H14.4785C14.3031 3.2657 13.7277 2.80388 13.043 2.80371Z" fill="currentColor" /></svg>;
  }),
  willow,
  CodexMobileSetupDialogC,
  codexMobileSetupDialogL = esmInit(() => {
    react();
    willow = getJsxRuntime();
    CodexMobileSetupDialogC = zephyr => <svg width={20} height={20} viewBox="0 0 16.0623 16.062" fill="none" xmlns="http://www.w3.org/2000/svg" {...zephyr}><path d="M8.68783 7.46029L8.84212 7.49545L15.2913 9.43002L15.4642 9.4974C16.2215 9.86494 16.2705 10.9544 15.5492 11.388L15.3822 11.4701L12.5872 12.5872L11.4701 15.3822C11.1135 16.2734 9.89125 16.2756 9.4974 15.4642L9.43002 15.2913L7.49544 8.84213C7.26342 8.06873 7.92452 7.34418 8.68783 7.46029ZM10.4984 14.2288L11.3929 11.9954L11.4388 11.8949C11.5579 11.6675 11.7549 11.4891 11.9954 11.3929L14.2288 10.4984L8.90072 8.90072L10.4984 14.2288ZM3.90365 10.9749C4.16329 10.7153 4.58436 10.7154 4.84408 10.9749C5.10378 11.2346 5.10378 11.6557 4.84408 11.9154L3.0765 13.6829C2.8168 13.9426 2.39577 13.9426 2.13607 13.6829C1.87654 13.4232 1.87643 13.0022 2.13607 12.7425L3.90365 10.9749ZM0.837242 5.3265L3.25228 5.97299L3.37826 6.02084C3.65484 6.1591 3.80597 6.47712 3.72298 6.78744C3.63984 7.09774 3.34997 7.298 3.04134 7.27963L2.90853 7.25814L0.493492 6.61068L0.367515 6.56283C0.0908205 6.42452 -0.0603919 6.10666 0.0227886 5.79623C0.105991 5.4859 0.395735 5.28652 0.704429 5.30502L0.837242 5.3265ZM12.847 2.05111C13.1051 1.88059 13.4556 1.90894 13.6829 2.13607C13.9426 2.39577 13.9426 2.8168 13.6829 3.0765L11.9154 4.84408C11.6557 5.10378 11.2346 5.10378 10.9749 4.84408C10.7154 4.58437 10.7153 4.16329 10.9749 3.90365L12.7425 2.13607L12.847 2.05111ZM5.79623 0.0227907C6.15098 -0.0722656 6.51562 0.138739 6.61068 0.493494L7.25814 2.90853L7.27962 3.04135C7.298 3.34998 7.09774 3.63984 6.78744 3.72299C6.47713 3.80592 6.15908 3.65484 6.02084 3.37826L5.97298 3.25228L5.3265 0.837244L5.30502 0.704431C5.28652 0.395771 5.48595 0.106026 5.79623 0.0227907Z" fill="currentColor" /></svg>;
  }),
  xenon,
  Yellow,
  zinc = esmInit(() => {
    react();
    xenon = getJsxRuntime();
    Yellow = acorn => <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" viewBox="0 0 20 20" {...acorn}><path d="M5.437 7.416c0-.364.027-.723.08-1.073a5.818 5.818 0 1 0 8.139 8.14 7.148 7.148 0 0 1-8.219-7.066ZM13.502 10a3.502 3.502 0 0 0-3.321-3.497L10 6.498l-.135-.013A.665.665 0 0 1 10 5.168l.25.006A4.833 4.833 0 0 1 14.831 10a.666.666 0 0 1-1.33 0Zm4.835-1.46a.666.666 0 0 1 .23 1.311l-1.16.204-.134.01a.665.665 0 0 1-.096-1.32l1.16-.205Zm-2.866-3.07a.665.665 0 0 1-.94-.94l.94.94Zm-.107-1.773a.665.665 0 1 1 .94.94l-.833.833L15 5l-.47-.47.833-.833Zm-4.11-.872a.665.665 0 0 1-1.31-.232l1.31.232ZM10.919.893a.665.665 0 0 1 .54.77l-.205 1.162-.655-.117-.655-.115.205-1.16.037-.13a.665.665 0 0 1 .733-.41ZM6.767 7.416a5.818 5.818 0 0 0 7.985 5.4.666.666 0 0 1 .896.771l-.03.094a7.148 7.148 0 1 1-9.299-9.298.666.666 0 0 1 .865.865 5.802 5.802 0 0 0-.417 2.168Z" /></svg>;
  });
export const codexMobileSetupDialogD = esmInit(() => {
  ensurePersistedAtomInit();
  codexMobileSetupDialogU = createPersistedAtom("electron:codex-mobile-setup-step-debug-override", "auto");
});
function Amber(bloom) {
  let {
      children,
      description,
      headerAdornment,
      heading,
      variant
    } = bloom,
    coral = variant === "page" && "max-w-[400px]",
    drift = IntlProvider("flex w-full flex-col gap-2 text-center", coral);
  let eagle = variant === "dialog" ? "heading-dialog text-pretty" : "text-xl leading-tight font-normal text-pretty",
    frost = <div className={eagle}>{heading}</div>;
  let glide = description == null ? null : <div className={IntlProvider(variant === "dialog" ? "text-base" : "text-lg", "leading-normal tracking-normal text-pretty text-token-description-foreground")}>{description}</div>;
  let honey = <div className={drift}>{frost}{glide}</div>;
  let iris = <>{headerAdornment}{honey}</>;
  let jewel = iris;
  if (variant === "dialog") {
    let knoll;
    return <div className="flex w-full flex-col items-center gap-6 px-6 py-6 select-none">{jewel}{children}</div>;
  }
  return <div className="flex w-full max-w-[640px] flex-col items-center gap-6 px-6 text-center select-none">{jewel}{children}</div>;
}
var basalt,
  cedar,
  daisy = esmInit(() => {
    basalt = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    cedar = getJsxRuntime();
  }),
  ember,
  flint = esmInit(() => {
    ember = "" + new URL("page-artwork-background-DPNBzfAy.png", import.meta.url).href;
  });
function garnet(lunar) {
  let {
      artworkAlignment = "center",
      artworkSrc,
      children,
      footer
    } = lunar,
    moss = <div className="flex min-h-0 flex-1 items-center justify-center overflow-y-auto px-6 py-12">{children}</div>;
  let north = footer == null ? null : <div className="flex shrink-0 justify-center px-6 pb-6">{footer}</div>;
  let orbit = <div className="relative flex min-w-0 flex-1 basis-0 flex-col overflow-hidden">{moss}{north}</div>;
  let pine = artworkSrc == null ? null : <div className="hidden min-h-0 min-w-0 flex-1 basis-0 p-3 lg:block"><div className="relative h-full w-full overflow-hidden rounded-xl bg-cover bg-center" style={{
      backgroundImage: `url(${ember})`
    }}><img alt="" aria-hidden={true} className={IntlProvider("absolute inset-0 h-full w-full object-contain", artworkAlignment === "bottom-right" && "object-right-bottom", artworkAlignment === "center" && "object-center", artworkAlignment === "right" && "object-right")} src={artworkSrc} /></div></div>;
  return <div className="flex h-full min-h-0 w-full overflow-hidden bg-token-main-surface-primary">{orbit}{pine}</div>;
}
function hazel(quest) {
  let {
    artworkSrc
  } = quest;
  return <div className="relative h-[214px] overflow-hidden"><img alt="" aria-hidden={true} className="h-full w-full object-cover" src={artworkSrc} /></div>;
}
function Ivory(ridge) {
  let {
      className,
      onManageConnections
    } = ridge,
    storm = IntlProvider("justify-center", className);
  let tide = <MemoizedFormattedMessage id="codexMobile.setupPage.connected.manageConnections" defaultMessage="Manage connections" description="Secondary action on the Codex mobile connected page that opens connection settings" />;
  return <ReadLoginRouteQuerySnapshot color="ghost" size="large" className={storm} onClick={onManageConnections}>{tide}</ReadLoginRouteQuerySnapshot>;
}
var jasper,
  kelp,
  lotus = esmInit(() => {
    jasper = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureIntlFormattersInit();
    flint();
    ensureSettingsQueryAtomsInit();
    kelp = getJsxRuntime();
  });
function $t() {
  let unity = CodexPluginActionType(appScopeAtom),
    {
      platform
    } = useHostPlatformModifierSymbol(),
    vale = useHomeDirectory(LOCAL_HOST_ID),
    wave = NativeContextMenuSurface("410065390"),
    apex = {
      hostId: LOCAL_HOST_ID
    };
  let brook = AppInitialWK(apex).available,
    cliff = useSettingValue(generalDesktopSettingsDefinitions.keepRemoteControlAwakeWhilePluggedIn),
    dusk = CodexBrowserSurfaceActionType(deferredHostsRt, LOCAL_HOST_ID),
    elm = CodexPluginActionResult(noop),
    fern = unity.query.snapshot(noop);
  let grove = fern,
    hill = [];
  let isle = matchesOptionalHostPluginIds(LOCAL_HOST_ID, hill),
    juniper = nova(isle.availablePlugins, prism, vale);
  let lagoon = juniper,
    meadow = lagoon?.plugin.installed === true && lagoon.plugin.enabled,
    nest = mint(isle.availablePlugins, vale);
  let oak = nest,
    petal = {
      hostId: LOCAL_HOST_ID
    };
  let {
      pendingPluginId,
      setPluginEnabled
    } = PluginScheduledTasks(petal),
    {
      installPlugin,
      status
    } = AppInitialXK(),
    quiet = AppInitialJK(status, {
      hostId: LOCAL_HOST_ID
    });
  let rain = quiet,
    seed = {
      mutationFn: UserMessage5,
      onSuccess: jadeite => {
        grove.setData(kernel => ({
          computerIconDataURL: kernel?.computerIconDataURL ?? null,
          enabled: jadeite,
          lockIconDataURL: kernel?.lockIconDataURL ?? null
        }));
      }
    };
  let trail = noop(seed),
    urn = platform === "macOS" && meadow && dusk && elm.data?.enabled != null,
    vine = leaf => {
      if (lagoon != null) {
        if (!lagoon.plugin.installed) {
          leaf && installPlugin(lagoon, {
            hostId: LOCAL_HOST_ID,
            onSuccess: isle.forceReload
          });
          return;
        }
        if (!leaf && elm.data?.enabled) {
          trail.mutate(false, {
            onSuccess: maple => {
              maple === false && setPluginEnabled({
                enabled: false,
                pluginDisplayName: usePointerSurfaceInteractionGate(lagoon),
                pluginId: lagoon.plugin.id
              });
            }
          });
          return;
        }
        setPluginEnabled({
          enabled: leaf,
          pluginDisplayName: usePointerSurfaceInteractionGate(lagoon),
          pluginId: lagoon.plugin.id
        });
      }
    };
  let wind = vine,
    yarrow = nimbus => {
      if (oak != null) {
        if (!oak.plugin.installed) {
          nimbus && installPlugin(oak, {
            hostId: LOCAL_HOST_ID,
            onSuccess: isle.forceReload
          });
          return;
        }
        setPluginEnabled({
          enabled: nimbus,
          pluginDisplayName: usePointerSurfaceInteractionGate(oak),
          pluginId: oak.plugin.id
        });
      }
    };
  let azure = yarrow,
    birch = oak?.plugin.installed === true && oak.plugin.enabled,
    canyon = isle.isLoading || oak == null || rain || pendingPluginId === oak.plugin.id,
    dew = isle.isLoading || lagoon == null || rain || trail.isPending || pendingPluginId === lagoon.plugin.id,
    ever = cliff ?? false,
    field = elm.data?.enabled ?? false,
    grain = !meadow || elm.isLoading || trail.isPending,
    haven = opal => {
      setSettingValue(unity, generalDesktopSettingsDefinitions.keepRemoteControlAwakeWhilePluggedIn, opal);
    };
  let ink = plume => {
    trail.mutate(plume);
  };
  return {
    chromeExtensionEnabled: birch,
    chromeExtensionToggleDisabled: canyon,
    computerUseEnabled: meadow,
    computerUseToggleDisabled: dew,
    keepComputerAwake: ever,
    keepComputerAwakeToggleDisabled: false,
    lockedComputerUseEnabled: field,
    lockedComputerUseToggleDisabled: grain,
    onChromeExtensionEnabledChange: azure,
    onComputerUseEnabledChange: wind,
    onKeepComputerAwakeChange: haven,
    onLockedComputerUseEnabledChange: ink,
    showChromeExtensionSetup: wave,
    showComputerUseSetup: brook,
    showKeepComputerAwake: true,
    showLockedComputerUse: urn
  };
}
function mint(quillow, root) {
  return CodexBuildEnvironment.isInternal(isBusinessPlan()) ? nova(quillow, reef, root) ?? nova(quillow, on, root) ?? nova(quillow, quill, root) : nova(quillow, quill, root);
}
function nova(silk, thorn, upland) {
  let vista = silk.filter(item => item.plugin.name === thorn || item.plugin.id.split("@")[0] === thorn),
    wisp = AppInitialNht(isBusinessPlan());
  return (wisp == null ? undefined : vista.find(item => item.marketplaceName === wisp)) ?? vista.find(item => isOpenaiBundledId(item.marketplaceName)) ?? vista.find(item => item.marketplaceName === "openai-curated") ?? vista.find(item => AppInitialAw(upland, item.marketplacePath)) ?? null;
}
var olive,
  prism,
  quill,
  on,
  reef,
  sage = esmInit(() => {
    olive = reactCompilerRuntime();
    serializeCharacterReferenceNode();
    ensureComposerEsm_MT_Init();
    strongMarkerFromOptions();
    AppInstallProgressDialog();
    BrowserUseExternal();
    ensureUseHomeDirectoryInit();
    macOS4();
    CONVERSATIONAL_ONBOARDING_COMPLETED_BY_ACCOUNT_ID_KEY();
    AppInitialQK();
    codexMicroHasEverBeenDetected();
    AppInitialLz();
    ensureInstalledPluginsQueryInit();
    ensureAppScopeInit();
    deferredT();
    ensureSettingsQueryAtomsInit();
    ensureAppShellAtomsInit();
    ensureSkillsPageHelpersInit();
    ensureDebugPanelTurnFilesInit();
    prism = "computer-use";
    quill = "chrome";
    on = "chrome-dev";
    reef = "chrome-internal";
  });
function topaz(yonder) {
  let {
      onFinishSetup,
      onManageConnections,
      variant
    } = yonder,
    zenith = useIntl(),
    {
      platform
    } = useHostPlatformModifierSymbol(),
    anvil = $t(),
    beacon = variant === "page" ? <CodexReferralInviteModalBackendErrorType className="size-11 text-token-foreground" /> : undefined;
  let crag, dome;
  crag = <MemoizedFormattedMessage id="codexMobile.setupDialog.connected.heading" defaultMessage="You’re connected" description="Heading for the Codex mobile setup connected state" />;
  dome = <MemoizedFormattedMessage id="codexMobile.setupDialog.connected.description" defaultMessage="Make the most out of your new connection. You can change these later in Settings." description="Description for the Codex mobile setup connected state" />;
  let eddy = variant === "dialog" ? "gap-2" : "max-w-[400px] divide-y-[0.5px] divide-token-border overflow-hidden rounded-2xl border border-token-border",
    fjord = IntlProvider("flex w-full flex-col", eddy);
  let glen = anvil.showKeepComputerAwake ? <Vapor icon={anvil.keepComputerAwake ? <AppInitialZn className="icon-base" /> : <Yellow className="icon-base" />} variant={variant} title={platform === "windows" ? <MemoizedFormattedMessage id="codexMobile.setupDialog.connected.keepAwake.title.windows" defaultMessage="Keep this PC awake" description="Title for keeping the computer awake after mobile setup on Windows" /> : <MemoizedFormattedMessage id="codexMobile.setupDialog.connected.keepAwake.title" defaultMessage="Keep this Mac awake" description="Title for keeping the computer awake after mobile setup" />} description={<MemoizedFormattedMessage id="codexMobile.setupDialog.connected.keepAwake.description" defaultMessage="Prevent sleep when this computer is plugged in and remote access is enabled" description="Description for keeping the computer awake after mobile setup" />} trailing={<AppInitialYC checked={anvil.keepComputerAwake} disabled={anvil.keepComputerAwakeToggleDisabled} ariaLabel={platform === "windows" ? zenith.formatMessage({
    id: "codexMobile.setupDialog.connected.keepAwake.toggle.windows",
    defaultMessage: "Keep this PC awake",
    description: "Accessible label for keeping the computer awake toggle on Windows"
  }) : zenith.formatMessage({
    id: "codexMobile.setupDialog.connected.keepAwake.toggle",
    defaultMessage: "Keep this Mac awake",
    description: "Accessible label for keeping the computer awake toggle"
  })} onChange={anvil.onKeepComputerAwakeChange} />} /> : null;
  let hearth = anvil.showComputerUseSetup && anvil.showLockedComputerUse ? <Vapor icon={<Umbra className="icon-base" />} variant={variant} title={<MemoizedFormattedMessage id="codexMobile.setupDialog.connected.lockedComputerUse.title" defaultMessage="Use your Mac apps while locked" description="Title for enabling Locked Computer Use after mobile setup" />} description={<MemoizedFormattedMessage id="codexMobile.setupDialog.connected.lockedComputerUse.description" defaultMessage={"Control Mac apps from your phone. <a>Learn more</a>"} description="Description for enabling Locked Computer Use after mobile setup" values={{
    a: ultra
  }} />} trailing={<AppInitialYC checked={anvil.lockedComputerUseEnabled} disabled={anvil.lockedComputerUseToggleDisabled} ariaLabel={zenith.formatMessage({
    id: "codexMobile.setupDialog.connected.lockedComputerUse.toggle",
    defaultMessage: "Use your Mac apps while locked",
    description: "Accessible label for the Locked Computer Use setup toggle"
  })} onChange={anvil.onLockedComputerUseEnabledChange} />} /> : anvil.showComputerUseSetup ? <Vapor icon={<CodexMobileSetupDialogC className="icon-base" />} variant={variant} title={<MemoizedFormattedMessage id="codexMobile.setupDialog.connected.computerUse.title" defaultMessage="Enable computer use" description="Title for enabling Computer Use after mobile setup" />} description={platform === "windows" ? <MemoizedFormattedMessage id="codexMobile.setupDialog.connected.computerUse.description.windows" defaultMessage="Let ChatGPT control apps on your PC" description="Description for enabling Computer Use after mobile setup on Windows" /> : <MemoizedFormattedMessage id="codexMobile.setupDialog.connected.computerUse.description" defaultMessage="Let ChatGPT control apps on your Mac" description="Description for enabling Computer Use after mobile setup" />} trailing={<AppInitialYC checked={anvil.computerUseEnabled} disabled={anvil.computerUseToggleDisabled} ariaLabel={zenith.formatMessage({
    id: "codexMobile.setupDialog.connected.computerUse.toggle",
    defaultMessage: "Enable computer use",
    description: "Accessible label for the Computer Use setup toggle"
  })} onChange={anvil.onComputerUseEnabledChange} />} /> : null;
  let inlet = anvil.showChromeExtensionSetup ? <Vapor icon={<AppInitialLR className="icon-base" />} variant={variant} title={<MemoizedFormattedMessage id="codexMobile.setupDialog.connected.chromeExtension.title" defaultMessage="Set up Chrome extension" description="Title for setting up the Chrome extension after mobile setup" />} description={<MemoizedFormattedMessage id="codexMobile.setupDialog.connected.chromeExtension.description" defaultMessage="Let ChatGPT navigate websites and fill out forms" description="Description for installing the Chrome extension after mobile setup" />} trailing={<AppInitialYC checked={anvil.chromeExtensionEnabled} disabled={anvil.chromeExtensionToggleDisabled} ariaLabel={zenith.formatMessage({
    id: "codexMobile.setupDialog.connected.chromeExtension.toggle",
    defaultMessage: "Set up Chrome extension",
    description: "Accessible label for the Chrome extension setup toggle"
  })} onChange={anvil.onChromeExtensionEnabledChange} />} /> : null;
  let jetty = <div className={fjord}>{glen}{hearth}{inlet}</div>;
  let knob = variant === "page" && "w-[256px]",
    ledge = IntlProvider("justify-center", knob);
  let mire = <MemoizedFormattedMessage id="codexMobile.setupDialog.connected.finish" defaultMessage="Done" description="Primary action for the Codex mobile setup connected state" />;
  let nook = <div className="flex flex-wrap items-center justify-center gap-3">{<ReadLoginRouteQuerySnapshot size="large" className={ledge} onClick={onFinishSetup}>{mire}</ReadLoginRouteQuerySnapshot>}</div>;
  let oxbow = variant === "page" && onManageConnections != null ? <Ivory className="w-[256px]" onManageConnections={onManageConnections} /> : null;
  let pond = <div className="flex w-full flex-col items-center gap-3">{nook}{oxbow}</div>;
  return <>{<Amber variant={variant} headerAdornment={beacon} heading={crag} description={dome}>{jetty}{pond}</Amber>}</>;
}
function ultra(quarry) {
  return <a className="inline-flex text-token-text-link-foreground" href={DEVELOPERS_OPENAI_COM_CODEX_APP_COMPUTER_USE_URL} target="_blank" rel="noreferrer">{quarry}</a>;
}
function Vapor(rapids) {
  let {
    description,
    icon,
    onClick,
    title,
    trailing,
    variant
  } = rapids;
  if (onClick != null) {
    let verge = variant === "page" && "bg-token-bg-primary",
      weir = IntlProvider("flex cursor-interaction items-center justify-between gap-4 px-[14px] py-2 text-left", verge);
    let yard = <Wheat description={description} icon={icon} title={title} trailing={trailing} />;
    let anchor;
    return <button type="button" className={weir} onClick={onClick}>{yard}</button>;
  }
  let spur = variant === "page" && "bg-token-bg-primary",
    tor = IntlProvider("flex items-center justify-between gap-4 px-[14px] py-2 text-left", spur);
  let updraft = <Wheat description={description} icon={icon} title={title} trailing={trailing} />;
  return <div className={tor}>{updraft}</div>;
}
function Wheat(bolt) {
  let {
      description,
      icon,
      title,
      trailing
    } = bolt,
    cog = <div className="flex size-11 shrink-0 items-center justify-center text-token-text-primary">{icon}</div>;
  let disc = <div className="text-sm text-token-text-primary">{title}</div>;
  let edge = <div className="text-xs text-token-description-foreground">{description}</div>;
  let forge = <div className="min-w-0 flex-1">{disc}{edge}</div>;
  let gear = <div className="flex min-w-0 flex-1 items-center gap-3 text-left">{cog}{forge}</div>;
  let hinge = <div className="shrink-0 text-token-description-foreground">{trailing}</div>;
  return <>{gear}{hinge}</>;
}
