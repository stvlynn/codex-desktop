// Restored from ref/webview/assets/codex-mobile-setup-dialog-CedkrL4M.js
// Wave GA — full polished body from `codex-mobile-setup-dialog-CedkrL4M/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 32 (verified 76/108).
// AST split 3/5
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
import {
  appScopeAtom,
  ensureAppScopeInit,
} from "../../runtime/app-scope-runtime";
import {
  ensureComposerEsm_FH_Init,
  ensureComposerEsm_Hlt_Init,
  ensureComposerEsm_K9_Init,
  ensureComposerEsm_MT_Init,
  ensureComposerEsm_Qtt_Init,
  ensureComposerEsm_Sut_Init,
  ensureComposerEsm_Tft_Init,
  ensureComposerEsm_Utt_Init,
} from "../../composer/composer-esm-inits";
import {
  createPersistedAtom,
  ensurePersistedAtomInit,
} from "../../boundaries/persisted-atom";
import {
  jsxRuntime as getJsxRuntime,
  react,
  reactCompilerRuntime,
} from "../../boundaries/react-cjs-runtime";
import { WritingBlockRenderer } from "../../composer/writing-block-renderer";
import { isOpenaiBundledId } from "../../config/is-openai-bundled-id";
import { VSCODE_EDITOR_ID } from "../../config/vscode-editor-id";
import { ensureClientCoordinationServiceInit } from "../../desktop/ensure-client-coordination-service-init";
import { findProcessManagerRow } from "../../desktop/find-process-manager-row";
import { DEVELOPERS_OPENAI_COM_CODEX_APP_COMPUTER_USE_URL } from "../../docs/codex-doc-urls";
import { CodexBuildEnvironment } from "../../env/codex-build-environment";
import {
  MOBILE_MFA_SETUP_FEATURE_GATE_ID,
  REMOTE_CONTROL_PAIRING_FEATURE_GATE_ID,
} from "../../feature-gates/feature-gate-ids";
import { CONVERSATIONAL_ONBOARDING_COMPLETED_BY_ACCOUNT_ID_KEY } from "../../home/onboarding-storage-keys";
import { ensureDebugPanelTurnFilesInit } from "../../hooks/debug-panel-turn-files";
import { useEventCallback } from "../../hooks/use-event-callback";
import {
  ensureUseHomeDirectoryInit,
  useHomeDirectory,
} from "../../hooks/use-home-directory";
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
import {
  ensureSvgToDataUriInit,
  svgToDataUri,
} from "../../utils/svg-to-data-uri";

import { Xenon, basalt } from "./part-3-a";
import { Mint, bloom, ultra, wheat } from "./part-3-b";

/** split companion stub */
const hazelFourth: any = undefined;
/** split companion stub */
const marbleFourth: any = undefined;
/** split companion stub */
const novaFourth: any = undefined;
/** split companion stub */
const topazFourth: any = undefined;
/** split companion stub */
const xenonFourth: any = undefined;

/** split companion stub */
const IntlProvider: any = undefined;
function coral(roller) {
  let {
    ariaLabel,
    centerLogoAriaLabel,
    fullscreen = false,
    pairingCode,
    platform,
    size = "default",
  } = roller;
  if (pairingCode != null) {
    let spindle;
    return (
      <Drift
        ariaLabel={ariaLabel}
        centerLogoAriaLabel={centerLogoAriaLabel}
        fullscreen={fullscreen}
        pairingCode={pairingCode}
        size={size}
      />
    );
  }
  return (
    <Frost
      ariaLabel={ariaLabel}
      centerLogoAriaLabel={centerLogoAriaLabel}
      platform={platform}
      size={size}
    />
  );
}
function Drift(thrust) {
  let {
      ariaLabel,
      centerLogoAriaLabel,
      fullscreen,
      pairingCode,
      size = "default",
    } = thrust,
    yoke;
  {
    let capstan = new URL("https://chatgpt.com/codex/pair");
    capstan.searchParams.set("pairing_code", pairingCode);
    yoke = iris(capstan.toString(), fullscreen ? "L" : "M", !fullscreen);
  }
  let baffle = yoke;
  if (fullscreen) {
    let diaphragm;
    return <Eagle ariaLabel={ariaLabel} {...baffle} />;
  }
  return (
    <Honey
      ariaLabel={ariaLabel}
      centerLogoAriaLabel={centerLogoAriaLabel}
      size={size}
      {...baffle}
    />
  );
}
function Eagle(elbow) {
  let { ariaLabel, cornersMarkup, dotsMarkup } = elbow,
    ferrule = (
      <div
        aria-hidden="true"
        className={
          "absolute inset-0 [&>svg]:block [&>svg]:h-full [&>svg]:w-full"
        }
        dangerouslySetInnerHTML={{
          __html: cornersMarkup,
        }}
      />
    );
  let grommet = (
    <div
      aria-hidden="true"
      className={"absolute inset-0 [&>svg]:block [&>svg]:h-full [&>svg]:w-full"}
      dangerouslySetInnerHTML={{
        __html: dotsMarkup,
      }}
    />
  );
  return (
    <div
      aria-label={ariaLabel}
      className="relative size-[min(640px,calc(100vw-48px),calc(100dvh-96px))] overflow-hidden rounded-[48px] bg-token-dropdown-background text-token-text-primary"
      role="img"
    >
      {ferrule}
      {grommet}
    </div>
  );
}
function Frost(header) {
  let { ariaLabel, centerLogoAriaLabel, platform, size = "default" } = header;
  if (platform === "android") {
    let injector;
    return <Glide ariaLabel={ariaLabel} size={size} />;
  }
  return (
    <DollarR
      ariaLabel={ariaLabel}
      centerLogoAriaLabel={centerLogoAriaLabel}
      size={size}
    />
  );
}
function Glide(jumper) {
  let { ariaLabel, size } = jumper,
    kerf =
      size === "compact"
        ? "size-[180px] rounded-[24px]"
        : "size-[270px] rounded-[32px]",
    louver = IntlProvider(
      "relative overflow-hidden bg-token-main-surface-primary",
      kerf,
    );
  let manifold = (
    <div
      aria-hidden="true"
      className={
        "h-full w-full text-token-text-primary [&>svg]:block [&>svg]:h-full [&>svg]:w-full"
      }
      dangerouslySetInnerHTML={{
        __html: xenonFourth,
      }}
    />
  );
  return (
    <div aria-label={ariaLabel} className={louver} role="img">
      {manifold}
    </div>
  );
}
function DollarR(nip) {
  let { ariaLabel, centerLogoAriaLabel, size } = nip,
    outlet = wheat(novaFourth.corners),
    packing = wheat(novaFourth.iosDots);
  return (
    <Honey
      ariaLabel={ariaLabel}
      centerLogoAriaLabel={centerLogoAriaLabel}
      cornersMarkup={outlet}
      dotsMarkup={packing}
      size={size}
    />
  );
}
function Honey(reducer) {
  let { ariaLabel, centerLogoAriaLabel, cornersMarkup, dotsMarkup, size } =
      reducer,
    strainer = brook.useRef(null),
    tee = () => {
      strainer.current?.triggerRipple();
    };
  let union = tee,
    vent =
      size === "compact"
        ? "size-[180px] rounded-[24px]"
        : "size-[270px] rounded-[32px]",
    wye = IntlProvider(
      "relative overflow-hidden bg-token-main-surface-primary",
      vent,
    );
  let zener = (
    <div
      aria-hidden="true"
      className="mobile-qr-corners pointer-events-none absolute inset-0 z-10 h-full w-full text-token-text-primary"
      dangerouslySetInnerHTML={{
        __html: cornersMarkup,
      }}
    />
  );
  let alphaPrime = (
    <Xenon ref={strainer} onArtworkReady={union} svgMarkup={dotsMarkup} />
  );
  let bravoPrime = size === "compact" ? "w-10" : "w-14",
    copperPrime = IntlProvider("pointer-events-auto aspect-square", bravoPrime);
  let deltaPrime = (
    <div className="pointer-events-none absolute inset-0 z-20 grid place-items-center">
      {
        <Mint
          ariaLabel={centerLogoAriaLabel}
          className={copperPrime}
          onClick={union}
        />
      }
    </div>
  );
  return (
    <div aria-label={ariaLabel} className={wye} role="img">
      {zener}
      {alphaPrime}
      {deltaPrime}
    </div>
  );
}
function iris(echoPrime, falconPrime, gammaPrime) {
  let harborPrime = apex.create(echoPrime, {
      errorCorrectionLevel: falconPrime,
    }).modules,
    indigoPrime = _i / (harborPrime.size + grove * 2);
  return {
    cornersMarkup: knoll(harborPrime.size, indigoPrime),
    dotsMarkup: jewel(harborPrime, indigoPrime, gammaPrime),
  };
}
function jewel(jadePrime, kitePrime, lemonPrime) {
  let marblePrime = [];
  for (let nickelPrime = 0; nickelPrime < jadePrime.size; nickelPrime += 1)
    for (let onyxPrime = 0; onyxPrime < jadePrime.size; onyxPrime += 1)
      !ridge(jadePrime, nickelPrime, onyxPrime) ||
        storm(jadePrime.size, nickelPrime, onyxPrime) ||
        (lemonPrime && ui(jadePrime.size, kitePrime, nickelPrime, onyxPrime)) ||
        marblePrime.push(moss(onyxPrime, kitePrime, nickelPrime));
  return orbit(marblePrime.join(""));
}
function knoll(pearlPrime, quartzPrime) {
  return orbit(
    [
      lunar(0, 0, quartzPrime),
      lunar(pearlPrime - fern, 0, quartzPrime),
      lunar(0, pearlPrime - fern, quartzPrime),
    ].join(""),
  );
}
function lunar(riverPrime, slatePrime, timberPrime) {
  let umbraPrime = quest(riverPrime, timberPrime),
    violetPrime = quest(slatePrime, timberPrime),
    willowPrime = timberPrime * fern,
    xenonPrime = timberPrime,
    yellowPrime = timberPrime * 2;
  return `<path fill-rule="evenodd" clip-rule="evenodd" d="${north(umbraPrime, violetPrime, willowPrime, timberPrime * 1.6)} ${north(umbraPrime + xenonPrime, violetPrime + xenonPrime, willowPrime - xenonPrime * 2, timberPrime)}" fill="currentColor"/><rect x="${vale(umbraPrime + yellowPrime)}" y="${vale(violetPrime + yellowPrime)}" width="${vale(willowPrime - yellowPrime * 2)}" height="${vale(willowPrime - yellowPrime * 2)}" rx="${vale(timberPrime)}" fill="currentColor"/>`;
}
function moss(zincPrime, amberPrime, basaltPrime) {
  let cedarPrime = amberPrime * elm,
    daisyPrime = pine(zincPrime, amberPrime),
    emberPrime = pine(basaltPrime, amberPrime);
  return `<path d="M ${vale(daisyPrime)} ${vale(emberPrime - cedarPrime)} A ${vale(cedarPrime)} ${vale(cedarPrime)} 0 1 1 ${vale(daisyPrime)} ${vale(emberPrime + cedarPrime)} A ${vale(cedarPrime)} ${vale(cedarPrime)} 0 1 1 ${vale(daisyPrime)} ${vale(emberPrime - cedarPrime)} Z" fill="currentColor"/>`;
}
function north(flintPrime, garnetPrime, hazelPrime, ivoryPrime) {
  let jasperPrime = flintPrime + hazelPrime,
    kelpPrime = garnetPrime + hazelPrime;
  return `M ${vale(flintPrime + ivoryPrime)} ${vale(garnetPrime)} H ${vale(jasperPrime - ivoryPrime)} A ${vale(ivoryPrime)} ${vale(ivoryPrime)} 0 0 1 ${vale(jasperPrime)} ${vale(garnetPrime + ivoryPrime)} V ${vale(kelpPrime - ivoryPrime)} A ${vale(ivoryPrime)} ${vale(ivoryPrime)} 0 0 1 ${vale(jasperPrime - ivoryPrime)} ${vale(kelpPrime)} H ${vale(flintPrime + ivoryPrime)} A ${vale(ivoryPrime)} ${vale(ivoryPrime)} 0 0 1 ${vale(flintPrime)} ${vale(kelpPrime - ivoryPrime)} V ${vale(garnetPrime + ivoryPrime)} A ${vale(ivoryPrime)} ${vale(ivoryPrime)} 0 0 1 ${vale(flintPrime + ivoryPrime)} ${vale(garnetPrime)} Z`;
}
function orbit(lotusPrime) {
  return `<svg width="${_i}" height="${_i}" viewBox="0 0 ${_i} ${_i}" fill="none" xmlns="${hill}">${lotusPrime}</svg>`;
}
function pine(mintPrime, novaPrime) {
  return quest(mintPrime, novaPrime) + novaPrime / 2;
}
function quest(olivePrime, prismPrime) {
  return (olivePrime + grove) * prismPrime;
}
function ui(quillPrime, reefPrime, sagePrime, topazPrime) {
  let ultraPrime = (quillPrime - 1) / 2,
    vaporPrime = (unity(Math.ceil(dusk / reefPrime)) - 1) / 2;
  return (
    Math.abs(sagePrime - ultraPrime) <= vaporPrime &&
    Math.abs(topazPrime - ultraPrime) <= vaporPrime
  );
}
function ridge(wheatPrime, yarnPrime, zephyrPrime) {
  return wheatPrime.data[yarnPrime * wheatPrime.size + zephyrPrime] === 1;
}
function storm(acornPrime, bloomPrime, coralPrime) {
  return (
    tide(bloomPrime, coralPrime, 0, 0) ||
    tide(bloomPrime, coralPrime, 0, acornPrime - fern) ||
    tide(bloomPrime, coralPrime, acornPrime - fern, 0)
  );
}
function tide(driftPrime, eaglePrime, frostPrime, glidePrime) {
  return (
    driftPrime >= frostPrime &&
    driftPrime < frostPrime + fern &&
    eaglePrime >= glidePrime &&
    eaglePrime < glidePrime + fern
  );
}
function unity(honeyPrime) {
  return honeyPrime % 2 == 0 ? honeyPrime + 1 : honeyPrime;
}
function vale(irisPrime) {
  return Number(irisPrime.toFixed(4));
}
var wave,
  apex,
  brook,
  cliff,
  _i,
  dusk,
  elm,
  fern,
  grove,
  hill,
  isle = esmInit(() => {
    wave = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    apex = marbleFourth();
    brook = commonJsInit(react(), 1);
    hazelFourth();
    topazFourth();
    basalt();
    ultra();
    bloom();
    cliff = getJsxRuntime();
    _i = 330;
    dusk = 70;
    elm = 0.42;
    fern = 7;
    grove = 4;
    hill = "http://www.w3.org/2000/svg";
  });
