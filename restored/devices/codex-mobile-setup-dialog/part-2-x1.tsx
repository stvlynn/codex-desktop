// Restored from ref/webview/assets/codex-mobile-setup-dialog-CedkrL4M.js
// Wave GA — full polished body from `codex-mobile-setup-dialog-CedkrL4M/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 32 (verified 76/108).
// Careful AST var-declarator split 1/4
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

import { codexMobileSetupDialogL } from "./part-5";
/** app-initial companion (stub only; never promote) */
const AppInitialBC: any = undefined;
/** app-initial companion (stub only; never promote) */
const AppInitialBn: any = undefined;
/** split companion stub */
const echoThird: any = undefined;
/** split companion stub */
const indigoThird: any = undefined;
/** split companion stub */
const lemonThird: any = undefined;
/** split companion stub */
const pearlThird: any = undefined;
/** split companion stub */
const shimSecond: any = undefined;

var riverThird,
  zincThird,
  cedarThird = esmInit(() => {
    riverThird = reactCompilerRuntime();
    ensureComposerEsm_Tft_Init();
    ensureIntlFormattersInit();
    ensureSettingsQueryAtomsInit();
    AppInitialBC();
    findProcessManagerRow();
    macOS4();
    CodexPluginDirectoryEntrypoint();
    ArtifactPreviewZoomToFitLabel();
    shimSecond();
    codexMobileSetupDialogL();
    AppInitialBn();
    echoThird();
    indigoThird();
    lemonThird();
    pearlThird();
    zincThird = getJsxRuntime();
  }),
  emberThird = esmInit((marbleSecond, nickelSecond) => {
    nickelSecond.exports = function () {
      return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
    };
  }),
  jasperThird = esmInit(nimbusSecond => {
    var topazThird,
      ultraThird = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
    nimbusSecond.getSymbolSize = function (ratchetPrime) {
      if (!ratchetPrime) throw Error("\"version\" cannot be null or undefined");
      if (ratchetPrime < 1 || ratchetPrime > 40) throw Error("\"version\" should be in range from 1 to 40");
      return ratchetPrime * 4 + 17;
    };
    nimbusSecond.getSymbolTotalCodewords = function (canyonSecond) {
      return ultraThird[canyonSecond];
    };
    nimbusSecond.getBCHDigit = function (driftSecond) {
      let ledgeFourth = 0;
      for (; driftSecond !== 0;) {
        ledgeFourth++;
        driftSecond >>>= 1;
      }
      return ledgeFourth;
    };
    nimbusSecond.setToSJISFunction = function (cedarSecond) {
      if (typeof cedarSecond != "function") throw Error("\"toSJISFunc\" is not a valid function.");
      topazThird = cedarSecond;
    };
    nimbusSecond.isKanjiModeEnabled = function () {
      return topazThird !== undefined;
    };
    nimbusSecond.toSJIS = function (dewSecond) {
      return topazThird(dewSecond);
    };
  }),
  _n = esmInit(glenSecond => {
    glenSecond.L = {
      bit: 1
    };
    glenSecond.M = {
      bit: 0
    };
    glenSecond.Q = {
      bit: 3
    };
    glenSecond.H = {
      bit: 2
    };
    function questPrime(hearthPrime) {
      if (typeof hearthPrime != "string") throw Error("Param is not a string");
      switch (hearthPrime.toLowerCase()) {
case "l":
        case "low":
          return glenSecond.L;
        case "m":
        case "medium":
          return glenSecond.M;
        case "q":
        case "quartile":
          return glenSecond.Q;
        case "h":
        case "high":
          return glenSecond.H;
        default:
          throw Error("Unknown EC Level: " + hearthPrime);
      }
    }
    glenSecond.isValid = function (orbitSecond) {
      return orbitSecond && orbitSecond.bit !== undefined && orbitSecond.bit >= 0 && orbitSecond.bit < 4;
    };
    glenSecond.from = function (yellowSecond, zincSecond) {
      if (glenSecond.isValid(yellowSecond)) return yellowSecond;
      try {
        return questPrime(yellowSecond);
      } catch {
        return zincSecond;
      }
    };
  }),
  kelpThird = esmInit((boltSecond, cogSecond) => {
    function valePrime() {
      this.buffer = [];
      this.length = 0;
    }
    valePrime.prototype = {
      get: function (topazSecond) {
        let hearthFourth = Math.floor(topazSecond / 8);
        return (this.buffer[hearthFourth] >>> 7 - topazSecond % 8 & 1) == 1;
      },
      put: function (yarnSecond, zephyrSecond) {
        for (let weirFourth = 0; weirFourth < zephyrSecond; weirFourth++) this.putBit((yarnSecond >>> zephyrSecond - weirFourth - 1 & 1) == 1);
      },
      getLengthInBits: function () {
        return this.length;
      },
      putBit: function (mountPrime) {
        let trailFourth = Math.floor(this.length / 8);
        this.buffer.length <= trailFourth && this.buffer.push(0);
        mountPrime && (this.buffer[trailFourth] |= 128 >>> this.length % 8);
        this.length++;
      }
    };
    cogSecond.exports = valePrime;
  }),
  quillThird = esmInit((quarrySecond, rapidsSecond) => {
    function tidePrime(framePrime) {
      if (!framePrime || framePrime < 1) throw Error("BitMatrix size must be defined and greater than 0");
      this.size = framePrime;
      this.data = new Uint8Array(framePrime * framePrime);
      this.reservedBit = new Uint8Array(framePrime * framePrime);
    }
    tidePrime.prototype.set = function (lotusSecond, mintSecond, oliveSecond, prismSecond) {
      let domeFourth = lotusSecond * this.size + mintSecond;
      this.data[domeFourth] = oliveSecond;
      prismSecond && (this.reservedBit[domeFourth] = true);
    };
    tidePrime.prototype.get = function (juniperSecond, lagoonSecond) {
      return this.data[juniperSecond * this.size + lagoonSecond];
    };
    tidePrime.prototype.xor = function (fernSecond, groveSecond, hillSecond) {
      this.data[fernSecond * this.size + groveSecond] ^= hillSecond;
    };
    tidePrime.prototype.isReserved = function (unitySecond, valeSecond) {
      return this.reservedBit[unitySecond * this.size + valeSecond];
    };
    rapidsSecond.exports = tidePrime;
  }),
  reefThird = esmInit(spurSecond => {
    var havenThird = jasperThird().getSymbolSize;
    spurSecond.getRowColCoords = function (pistonPrime) {
      if (pistonPrime === 1) return [];
      let stormFourth = Math.floor(pistonPrime / 7) + 2,
        tideFourth = havenThird(pistonPrime),
        unityFourth = tideFourth === 145 ? 26 : Math.ceil((tideFourth - 13) / (2 * stormFourth - 2)) * 2,
        valeFourth = [tideFourth - 7];
      for (let gearFourth = 1; gearFourth < stormFourth - 1; gearFourth++) valeFourth[gearFourth] = valeFourth[gearFourth - 1] - unityFourth;
      return valeFourth.push(6), valeFourth.reverse();
    };
    spurSecond.getPositions = function (vergePrime) {
      let reefFourth = [],
        sageFourth = spurSecond.getRowColCoords(vergePrime),
        ultraFourth = sageFourth.length;
      for (let rainFourth = 0; rainFourth < ultraFourth; rainFourth++) for (let quillowFourth = 0; quillowFourth < ultraFourth; quillowFourth++) rainFourth === 0 && quillowFourth === 0 || rainFourth === 0 && quillowFourth === ultraFourth - 1 || rainFourth === ultraFourth - 1 && quillowFourth === 0 || reefFourth.push([sageFourth[rainFourth], sageFourth[quillowFourth]]);
      return reefFourth;
    };
  }),
  sageThird = esmInit(shimPrime => {
    var canyonFourth = jasperThird().getSymbolSize;
    shimPrime.getPositions = function (sageSecond) {
      let fjordFourth = canyonFourth(sageSecond);
      return [[0, 0], [fjordFourth - 7, 0], [0, fjordFourth - 7]];
    };
  }),
  zephyrThird = esmInit(vistaSecond => {
    vistaSecond.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    var jadeThird = {
      N1: 3,
      N2: 3,
      N3: 40,
      N4: 10
    };
    vistaSecond.isValid = function (mossSecond) {
      return mossSecond != null && mossSecond !== "" && !isNaN(mossSecond) && mossSecond >= 0 && mossSecond <= 7;
    };
    vistaSecond.from = function (tideSecond) {
      return vistaSecond.isValid(tideSecond) ? parseInt(tideSecond, 10) : undefined;
    };
    vistaSecond.getPenaltyN1 = function (gearSecond) {
      let ledgeThird = gearSecond.size,
        mireThird = 0,
        nookThird = 0,
        oxbowThird = 0,
        pondThird = null,
        quarryThird = null;
      for (let bravoFourth = 0; bravoFourth < ledgeThird; bravoFourth++) {
        nookThird = oxbowThird = 0;
        pondThird = quarryThird = null;
        for (let bloomFourth = 0; bloomFourth < ledgeThird; bloomFourth++) {
          let jewelFourth = gearSecond.get(bravoFourth, bloomFourth);
          jewelFourth === pondThird ? nookThird++ : (nookThird >= 5 && (mireThird += jadeThird.N1 + (nookThird - 5)), pondThird = jewelFourth, nookThird = 1);
          jewelFourth = gearSecond.get(bloomFourth, bravoFourth);
          jewelFourth === quarryThird ? oxbowThird++ : (oxbowThird >= 5 && (mireThird += jadeThird.N1 + (oxbowThird - 5)), quarryThird = jewelFourth, oxbowThird = 1);
        }
        nookThird >= 5 && (mireThird += jadeThird.N1 + (nookThird - 5));
        oxbowThird >= 5 && (mireThird += jadeThird.N1 + (oxbowThird - 5));
      }
      return mireThird;
    };
    vistaSecond.getPenaltyN2 = function (torPrime) {
      let ivoryFourth = torPrime.size,
        jasperFourth = 0;
      for (let brookFourth = 0; brookFourth < ivoryFourth - 1; brookFourth++) for (let petalFourth = 0; petalFourth < ivoryFourth - 1; petalFourth++) {
        let azureFourth = torPrime.get(brookFourth, petalFourth) + torPrime.get(brookFourth, petalFourth + 1) + torPrime.get(brookFourth + 1, petalFourth) + torPrime.get(brookFourth + 1, petalFourth + 1);
        (azureFourth === 4 || azureFourth === 0) && jasperFourth++;
      }
      return jasperFourth * jadeThird.N2;
    };
    vistaSecond.getPenaltyN3 = function (glenPrime) {
      let indigoFourth = glenPrime.size,
        jadeFourth = 0,
        kiteFourth = 0,
        lemonFourth = 0;
      for (let driftFourth = 0; driftFourth < indigoFourth; driftFourth++) {
        kiteFourth = lemonFourth = 0;
        for (let nestFourth = 0; nestFourth < indigoFourth; nestFourth++) {
          kiteFourth = kiteFourth << 1 & 2047 | glenPrime.get(driftFourth, nestFourth);
          nestFourth >= 10 && (kiteFourth === 1488 || kiteFourth === 93) && jadeFourth++;
          lemonFourth = lemonFourth << 1 & 2047 | glenPrime.get(nestFourth, driftFourth);
          nestFourth >= 10 && (lemonFourth === 1488 || lemonFourth === 93) && jadeFourth++;
        }
      }
      return jadeFourth * jadeThird.N3;
    };
    vistaSecond.getPenaltyN4 = function (falconSecond) {
      let kernelFourth = 0,
        leafFourth = falconSecond.data.length;
      for (let keystoneFourth = 0; keystoneFourth < leafFourth; keystoneFourth++) kernelFourth += falconSecond.data[keystoneFourth];
      return Math.abs(Math.ceil(kernelFourth * 100 / leafFourth / 5) - 10) * jadeThird.N4;
    };
    function yarrowPrime(mireSecond, nookSecond, oxbowSecond) {
      switch (mireSecond) {
        case vistaSecond.Patterns.PATTERN000:
          return (nookSecond + oxbowSecond) % 2 == 0;
        case vistaSecond.Patterns.PATTERN001:
          return nookSecond % 2 == 0;
        case vistaSecond.Patterns.PATTERN010:
          return oxbowSecond % 3 == 0;
        case vistaSecond.Patterns.PATTERN011:
          return (nookSecond + oxbowSecond) % 3 == 0;
        case vistaSecond.Patterns.PATTERN100:
          return (Math.floor(nookSecond / 2) + Math.floor(oxbowSecond / 3)) % 2 == 0;
        case vistaSecond.Patterns.PATTERN101:
          return nookSecond * oxbowSecond % 2 + nookSecond * oxbowSecond % 3 == 0;
        case vistaSecond.Patterns.PATTERN110:
          return (nookSecond * oxbowSecond % 2 + nookSecond * oxbowSecond % 3) % 2 == 0;
        case vistaSecond.Patterns.PATTERN111:
          return (nookSecond * oxbowSecond % 3 + (nookSecond + oxbowSecond) % 2) % 2 == 0;
        default:
          throw Error("bad maskPattern:" + mireSecond);
      }
    }
    vistaSecond.applyMask = function (pearlSecond, quartzSecond) {
      let rootFourth = quartzSecond.size;
      for (let glenFourth = 0; glenFourth < rootFourth; glenFourth++) for (let torFourth = 0; torFourth < rootFourth; torFourth++) quartzSecond.isReserved(torFourth, glenFourth) || quartzSecond.xor(torFourth, glenFourth, yarrowPrime(pearlSecond, torFourth, glenFourth));
    };
    vistaSecond.getBestMask = function (ledgePrime, mirePrime) {
      let umbraFourth = Object.keys(vistaSecond.Patterns).length,
        violetFourth = 0,
        yellowFourth = 1 / 0;
      for (let waveFourth = 0; waveFourth < umbraFourth; waveFourth++) {
        mirePrime(waveFourth);
        vistaSecond.applyMask(waveFourth, ledgePrime);
        let isleFourth = vistaSecond.getPenaltyN1(ledgePrime) + vistaSecond.getPenaltyN2(ledgePrime) + vistaSecond.getPenaltyN3(ledgePrime) + vistaSecond.getPenaltyN4(ledgePrime);
        vistaSecond.applyMask(waveFourth, ledgePrime);
        isleFourth < yellowFourth && (yellowFourth = isleFourth, violetFourth = waveFourth);
      }
      return violetFourth;
    };
  }),
  eagleThird = esmInit(yardPrime => {
    var marbleThird = _n(),
      nickelThird = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
      onyxThird = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
    yardPrime.getBlocksCount = function (gearPrime, hingePrime) {
      switch (hingePrime) {
        case marbleThird.L:
          return nickelThird[(gearPrime - 1) * 4];
        case marbleThird.M:
          return nickelThird[(gearPrime - 1) * 4 + 1];
        case marbleThird.Q:
          return nickelThird[(gearPrime - 1) * 4 + 2];
        case marbleThird.H:
          return nickelThird[(gearPrime - 1) * 4 + 3];
        default:
          return;
      }
    };
    yardPrime.getTotalCodewordsCount = function (anchorPrime, boltPrime) {
      switch (boltPrime) {
        case marbleThird.L:
          return onyxThird[(anchorPrime - 1) * 4];
        case marbleThird.M:
          return onyxThird[(anchorPrime - 1) * 4 + 1];
        case marbleThird.Q:
          return onyxThird[(anchorPrime - 1) * 4 + 2];
        case marbleThird.H:
          return onyxThird[(anchorPrime - 1) * 4 + 3];
        default:
          return;
      }
    };
  }),
  knollThird = esmInit(vistaPrime => {
    var rivetThird = new Uint8Array(512),
      screwThird = new Uint8Array(256);
    (function () {
      let dewFourth = 1;
      for (let nookFourth = 0; nookFourth < 255; nookFourth++) {
        rivetThird[nookFourth] = dewFourth;
        screwThird[dewFourth] = nookFourth;
        dewFourth <<= 1;
        dewFourth & 256 && (dewFourth ^= 285);
      }
      for (let ironFourth = 255; ironFourth < 512; ironFourth++) rivetThird[ironFourth] = rivetThird[ironFourth - 255];
    })();
    vistaPrime.log = function (lunarSecond) {
      if (lunarSecond < 1) throw Error("log(" + lunarSecond + ")");
      return screwThird[lunarSecond];
    };
    vistaPrime.exp = function (everSecond) {
      return rivetThird[everSecond];
    };
    vistaPrime.mul = function (questSecond, ridgeSecond) {
      return questSecond === 0 || ridgeSecond === 0 ? 0 : rivetThird[screwThird[questSecond] + screwThird[ridgeSecond]];
    };
  }),
  northThird = esmInit(ledgeSecond => {
    var azureThird = knollThird();
    ledgeSecond.mul = function (nozzlePrime, platenPrime) {
      let urnFourth = new Uint8Array(nozzlePrime.length + platenPrime.length - 1);
      for (let knobFourth = 0; knobFourth < nozzlePrime.length; knobFourth++) for (let discFourth = 0; discFourth < platenPrime.length; discFourth++) urnFourth[knobFourth + discFourth] ^= azureThird.mul(nozzlePrime[knobFourth], platenPrime[discFourth]);
      return urnFourth;
    };
    ledgeSecond.mod = function (cogPrime, discPrime) {
      let coralFourth = new Uint8Array(cogPrime);
      for (; coralFourth.length - discPrime.length >= 0;) {
        let windFourth = coralFourth[0];
        for (let edgeFourth = 0; edgeFourth < discPrime.length; edgeFourth++) coralFourth[edgeFourth] ^= azureThird.mul(discPrime[edgeFourth], windFourth);
        let yarrowFourth = 0;
        for (; yarrowFourth < coralFourth.length && coralFourth[yarrowFourth] === 0;) yarrowFourth++;
        coralFourth = coralFourth.slice(yarrowFourth);
      }
      return coralFourth;
    };
    ledgeSecond.generateECPolynomial = function (slateSecond) {
      let vistaFourth = new Uint8Array([1]);
      for (let yardFourth = 0; yardFourth < slateSecond; yardFourth++) vistaFourth = ledgeSecond.mul(vistaFourth, new Uint8Array([1, azureThird.exp(yardFourth)]));
      return vistaFourth;
    };
  }),
  brookThird = esmInit((updraftSecond, vergeSecond) => {
    var jadeiteThird = northThird();
    function unityPrime(daisySecond) {
      this.genPoly = undefined;
      this.degree = daisySecond;
      this.degree && this.initialize(this.degree);
    }
    unityPrime.prototype.initialize = function (eagleSecond) {
      this.degree = eagleSecond;
      this.genPoly = jadeiteThird.generateECPolynomial(this.degree);
    };
    unityPrime.prototype.encode = function (updraftPrime) {
      if (!this.genPoly) throw Error("Encoder not initialized");
      let kelpFourth = new Uint8Array(updraftPrime.length + this.degree);
      kelpFourth.set(updraftPrime);
      let lotusFourth = jadeiteThird.mod(kelpFourth, this.genPoly),
        mintFourth = this.degree - lotusFourth.length;
      if (mintFourth > 0) {
        let pondFourth = new Uint8Array(this.degree);
        return pondFourth.set(lotusFourth, mintFourth), pondFourth;
      }
      return lotusFourth;
    };
    vergeSecond.exports = unityPrime;
  }),
  lagoonThird = esmInit(jewelSecond => {
    jewelSecond.isValid = function (petalSecond) {
      return !isNaN(petalSecond) && petalSecond >= 1 && petalSecond <= 40;
    };
  });
