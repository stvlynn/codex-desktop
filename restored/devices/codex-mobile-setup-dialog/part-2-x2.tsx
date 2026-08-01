// Restored from ref/webview/assets/codex-mobile-setup-dialog-CedkrL4M.js
// Wave GA — full polished body from `codex-mobile-setup-dialog-CedkrL4M/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 32 (verified 76/108).
// Careful AST var-declarator split 2/4
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

import { codexMobileSetupDialogL } from "./part-5";
// Wave5d soft stubs (cross part-2-xN).
const _n: any = undefined;
const eagleThird: any = undefined;
const jasperThird: any = undefined;
const lagoonThird: any = undefined;

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

var rainThird = esmInit(wispSecond => {
    var frostThird = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
    frostThird = frostThird.replace(/u/g, "\\u");
    var glideThird = "(?:(?![A-Z0-9 $%*+\\-./:]|" + frostThird + ")(?:.|[\r\n]))+";
    wispSecond.KANJI = new RegExp(frostThird, "g");
    wispSecond.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
    wispSecond.BYTE = new RegExp(glideThird, "g");
    wispSecond.NUMERIC = new RegExp("[0-9]+", "g");
    wispSecond.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
    var honeyThird = RegExp("^" + frostThird + "$"),
      irisThird = RegExp("^[0-9]+$"),
      jewelThird = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
    wispSecond.testKanji = function (birchSecond) {
      return honeyThird.test(birchSecond);
    };
    wispSecond.testNumeric = function (yarrowSecond) {
      return irisThird.test(yarrowSecond);
    };
    wispSecond.testAlphanumeric = function (azureSecond) {
      return jewelThird.test(azureSecond);
    };
  }),
  canyonThird = esmInit(novaSecond => {
    var basaltThird = lagoonThird(),
      daisyThird = rainThird();
    novaSecond.NUMERIC = {
      id: "Numeric",
      bit: 1,
      ccBits: [10, 12, 14]
    };
    novaSecond.ALPHANUMERIC = {
      id: "Alphanumeric",
      bit: 2,
      ccBits: [9, 11, 13]
    };
    novaSecond.BYTE = {
      id: "Byte",
      bit: 4,
      ccBits: [8, 16, 16]
    };
    novaSecond.KANJI = {
      id: "Kanji",
      bit: 8,
      ccBits: [8, 10, 12]
    };
    novaSecond.MIXED = {
      bit: -1
    };
    novaSecond.getCharCountIndicator = function (screwPrime, torquePrime) {
      if (!screwPrime.ccBits) throw Error("Invalid mode: " + screwPrime);
      if (!basaltThird.isValid(torquePrime)) throw Error("Invalid version: " + torquePrime);
      return torquePrime >= 1 && torquePrime < 10 ? screwPrime.ccBits[0] : torquePrime < 27 ? screwPrime.ccBits[1] : screwPrime.ccBits[2];
    };
    novaSecond.getBestModeForData = function (leverPrime) {
      return daisyThird.testNumeric(leverPrime) ? novaSecond.NUMERIC : daisyThird.testAlphanumeric(leverPrime) ? novaSecond.ALPHANUMERIC : daisyThird.testKanji(leverPrime) ? novaSecond.KANJI : novaSecond.BYTE;
    };
    novaSecond.toString = function (knollSecond) {
      if (knollSecond && knollSecond.id) return knollSecond.id;
      throw Error("Invalid mode");
    };
    novaSecond.isValid = function (rainSecond) {
      return rainSecond && rainSecond.bit && rainSecond.ccBits;
    };
    function lunarPrime(nookPrime) {
      if (typeof nookPrime != "string") throw Error("Param is not a string");
      switch (nookPrime.toLowerCase()) {
        case "numeric":
          return novaSecond.NUMERIC;
        case "alphanumeric":
          return novaSecond.ALPHANUMERIC;
        case "kanji":
          return novaSecond.KANJI;
        case "byte":
          return novaSecond.BYTE;
        default:
          throw Error("Unknown mode: " + nookPrime);
      }
    }
    novaSecond.from = function (emberSecond, flintSecond) {
      if (novaSecond.isValid(emberSecond)) return emberSecond;
      try {
        return lunarPrime(emberSecond);
      } catch {
        return flintSecond;
      }
    };
  }),
  nimbusThird = esmInit(alphaSecond => {
    var slateThird = jasperThird(),
      timberThird = eagleThird(),
      umbraThird = _n(),
      violetThird = canyonThird(),
      willowThird = lagoonThird(),
      xenonThird = slateThird.getBCHDigit(7973);
    function birchPrime(acornSecond, bloomSecond, coralSecond) {
      for (let anchorFourth = 1; anchorFourth <= 40; anchorFourth++) if (bloomSecond <= alphaSecond.getCapacity(anchorFourth, coralSecond, acornSecond)) return anchorFourth;
    }
    function canyonPrime(brookSecond, cliffSecond) {
      return violetThird.getCharCountIndicator(brookSecond, cliffSecond) + 4;
    }
    function dewPrime(deltaSecond, echoSecond) {
      let jadeiteFourth = 0;
      return deltaSecond.forEach(function (item) {
        let oxbowFourth = canyonPrime(item.mode, echoSecond);
        jadeiteFourth += oxbowFourth + item.getBitsLength();
      }), jadeiteFourth;
    }
    function everPrime(quillSecond, reefSecond) {
      for (let quarryFourth = 1; quarryFourth <= 40; quarryFourth++) if (dewPrime(quillSecond, quarryFourth) <= alphaSecond.getCapacity(quarryFourth, reefSecond, violetThird.MIXED)) return quarryFourth;
    }
    alphaSecond.from = function (duskSecond, elmSecond) {
      return willowThird.isValid(duskSecond) ? parseInt(duskSecond, 10) : elmSecond;
    };
    alphaSecond.getCapacity = function (nimbusPrime, opalPrime, plumePrime) {
      if (!willowThird.isValid(nimbusPrime)) throw Error("Invalid QR Code version");
      plumePrime === undefined && (plumePrime = violetThird.BYTE);
      let cogThird = (slateThird.getSymbolTotalCodewords(nimbusPrime) - timberThird.getTotalCodewordsCount(nimbusPrime, opalPrime)) * 8;
      if (plumePrime === violetThird.MIXED) return cogThird;
      let discThird = cogThird - canyonPrime(plumePrime, nimbusPrime);
      switch (plumePrime) {
        case violetThird.NUMERIC:
          return Math.floor(discThird / 10 * 3);
        case violetThird.ALPHANUMERIC:
          return Math.floor(discThird / 11 * 2);
        case violetThird.KANJI:
          return Math.floor(discThird / 13);
        case violetThird.BYTE:
        default:
          return Math.floor(discThird / 8);
      }
    };
    alphaSecond.getBestVersionForData = function (valvePrime, axlePrime) {
      let duskFourth,
        elmFourth = umbraThird.from(axlePrime, umbraThird.M);
      if (Array.isArray(valvePrime)) {
        if (valvePrime.length > 1) return everPrime(valvePrime, elmFourth);
        if (valvePrime.length === 0) return 1;
        duskFourth = valvePrime[0];
      } else duskFourth = valvePrime;
      return birchPrime(duskFourth.mode, duskFourth.getLength(), elmFourth);
    };
    alphaSecond.getEncodedBits = function (gasketPrime) {
      if (!willowThird.isValid(gasketPrime) || gasketPrime < 7) throw Error("Invalid QR Code version");
      let quietFourth = gasketPrime << 12;
      for (; slateThird.getBCHDigit(quietFourth) - xenonThird >= 0;) quietFourth ^= 7973 << slateThird.getBCHDigit(quietFourth) - xenonThird;
      return gasketPrime << 12 | quietFourth;
    };
  }),
  zenithThird = esmInit(ironPrime => {
    var mossFourth = jasperThird(),
      northFourth = mossFourth.getBCHDigit(1335);
    ironPrime.getEncodedBits = function (gammaSecond, indigoSecond) {
      let mapleFourth = gammaSecond.bit << 3 | indigoSecond,
        nimbusFourth = mapleFourth << 10;
      for (; mossFourth.getBCHDigit(nimbusFourth) - northFourth >= 0;) nimbusFourth ^= 1335 << mossFourth.getBCHDigit(nimbusFourth) - northFourth;
      return (mapleFourth << 10 | nimbusFourth) ^ 21522;
    };
  }),
  anvilThird = esmInit((hearthSecond, inletSecond) => {
    var vineThird = canyonThird();
    function ridgePrime(pineSecond) {
      this.mode = vineThird.NUMERIC;
      this.data = pineSecond.toString();
    }
    ridgePrime.getBitsLength = function (northSecond) {
      return 10 * Math.floor(northSecond / 3) + (northSecond % 3 ? northSecond % 3 * 3 + 1 : 0);
    };
    ridgePrime.prototype.getLength = function () {
      return this.data.length;
    };
    ridgePrime.prototype.getBitsLength = function () {
      return ridgePrime.getBitsLength(this.data.length);
    };
    ridgePrime.prototype.write = function (weirPrime) {
      let wheatFourth, yarnFourth, zephyrFourth;
      for (wheatFourth = 0; wheatFourth + 3 <= this.data.length; wheatFourth += 3) {
        yarnFourth = this.data.substr(wheatFourth, 3);
        zephyrFourth = parseInt(yarnFourth, 10);
        weirPrime.put(zephyrFourth, 10);
      }
      let acornFourth = this.data.length - wheatFourth;
      acornFourth > 0 && (yarnFourth = this.data.substr(wheatFourth), zephyrFourth = parseInt(yarnFourth, 10), weirPrime.put(zephyrFourth, acornFourth * 3 + 1));
    };
    inletSecond.exports = ridgePrime;
  }),
  jettyThird = esmInit((jettySecond, knobSecond) => {
    var windThird = canyonThird(),
      yarrowThird = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:".split("");
    function stormPrime(waveSecond) {
      this.mode = windThird.ALPHANUMERIC;
      this.data = waveSecond;
    }
    stormPrime.getBitsLength = function (isleSecond) {
      return 11 * Math.floor(isleSecond / 2) + isleSecond % 2 * 6;
    };
    stormPrime.prototype.getLength = function () {
      return this.data.length;
    };
    stormPrime.prototype.getBitsLength = function () {
      return stormPrime.getBitsLength(this.data.length);
    };
    stormPrime.prototype.write = function (rivetPrime) {
      let apexFourth;
      for (apexFourth = 0; apexFourth + 2 <= this.data.length; apexFourth += 2) {
        let eddyFourth = yarrowThird.indexOf(this.data[apexFourth]) * 45;
        eddyFourth += yarrowThird.indexOf(this.data[apexFourth + 1]);
        rivetPrime.put(eddyFourth, 11);
      }
      this.data.length % 2 && rivetPrime.put(yarrowThird.indexOf(this.data[apexFourth]), 6);
    };
    knobSecond.exports = stormPrime;
  }),
  updraftThird = esmInit((havenPrime, inkPrime) => {
    var rapidsThird = canyonThird();
    function wavePrime(lemonSecond) {
      this.mode = rapidsThird.BYTE;
      typeof lemonSecond == "string" ? this.data = new TextEncoder().encode(lemonSecond) : this.data = new Uint8Array(lemonSecond);
    }
    wavePrime.getBitsLength = function (grainSecond) {
      return grainSecond * 8;
    };
    wavePrime.prototype.getLength = function () {
      return this.data.length;
    };
    wavePrime.prototype.getBitsLength = function () {
      return wavePrime.getBitsLength(this.data.length);
    };
    wavePrime.prototype.write = function (ultraSecond) {
      for (let updraftFourth = 0, vergeFourth = this.data.length; updraftFourth < vergeFourth; updraftFourth++) ultraSecond.put(this.data[updraftFourth], 8);
    };
    inkPrime.exports = wavePrime;
  }),
  gearThird = esmInit((yonderSecond, zenithSecond) => {
    var lunarThird = canyonThird(),
      mossThird = jasperThird();
    function pinePrime(meadowSecond) {
      this.mode = lunarThird.KANJI;
      this.data = meadowSecond;
    }
    pinePrime.getBitsLength = function (fieldSecond) {
      return fieldSecond * 13;
    };
    pinePrime.prototype.getLength = function () {
      return this.data.length;
    };
    pinePrime.prototype.getBitsLength = function () {
      return pinePrime.getBitsLength(this.data.length);
    };
    pinePrime.prototype.write = function (fjordPrime) {
      let copperFourth;
      for (copperFourth = 0; copperFourth < this.data.length; copperFourth++) {
        let zincFourth = mossThird.toSJIS(this.data[copperFourth]);
        if (zincFourth >= 33088 && zincFourth <= 40956) zincFourth -= 33088;else if (zincFourth >= 57408 && zincFourth <= 60351) zincFourth -= 49472;else throw Error("Invalid SJIS character: " + this.data[copperFourth] + "\nMake sure your charset is UTF-8");
        zincFourth = (zincFourth >>> 8 & 255) * 192 + (zincFourth & 255);
        fjordPrime.put(zincFourth, 13);
      }
    };
    zenithSecond.exports = pinePrime;
  }),
  latchThird = esmInit((harborSecond, onyxSecond) => {
    var yellowThird = {
      single_source_shortest_paths: function (weirSecond, yardSecond, anchorSecond) {
        var kernelThird = {},
          leafThird = {};
        leafThird[yardSecond] = 0;
        var mapleThird = yellowThird.PriorityQueue.make();
        mapleThird.push(yardSecond, 0);
        for (var opalThird, plumeThird, quillowThird, rootThird, silkThird, thornThird, uplandThird, vistaThird, wispThird; !mapleThird.empty();) for (quillowThird in opalThird = mapleThird.pop(), plumeThird = opalThird.value, rootThird = opalThird.cost, weirSecond[plumeThird] || {}) silkThird.hasOwnProperty(quillowThird) && (thornThird = silkThird[quillowThird], uplandThird = rootThird + thornThird, vistaThird = leafThird[quillowThird], wispThird = leafThird[quillowThird] === undefined, (wispThird || vistaThird > uplandThird) && (leafThird[quillowThird] = uplandThird, mapleThird.push(quillowThird, uplandThird), kernelThird[quillowThird] = plumeThird));
        if (anchorSecond !== undefined && leafThird[anchorSecond] === undefined) {
          var yonderThird = ["Could not find a path from ", yardSecond, " to ", anchorSecond, "."].join("");
          throw Error(yonderThird);
        }
        return kernelThird;
      },
      extract_shortest_path_from_predecessor_list: function (jasperSecond, kelpSecond) {
        for (var beaconFourth = [], cragFourth = kelpSecond; cragFourth;) {
          beaconFourth.push(cragFourth);
          jasperSecond[cragFourth];
          cragFourth = jasperSecond[cragFourth];
        }
        return beaconFourth.reverse(), beaconFourth;
      },
      find_path: function (timberSecond, umbraSecond, violetSecond) {
        var wispFourth = yellowThird.single_source_shortest_paths(timberSecond, umbraSecond, violetSecond);
        return yellowThird.extract_shortest_path_from_predecessor_list(wispFourth, violetSecond);
      },
      PriorityQueue: {
        make: function (enginePrime) {
          var juniperFourth = yellowThird.PriorityQueue,
            lagoonFourth = {},
            meadowFourth;
          for (meadowFourth in enginePrime ||= {}, juniperFourth) juniperFourth.hasOwnProperty(meadowFourth) && (lagoonFourth[meadowFourth] = juniperFourth[meadowFourth]);
          return lagoonFourth.queue = [], lagoonFourth.sorter = enginePrime.sorter || juniperFourth.default_sorter, lagoonFourth;
        },
        default_sorter: function (seedSecond, trailSecond) {
          return seedSecond.cost - trailSecond.cost;
        },
        push: function (garnetSecond, ivorySecond) {
          var anvilFourth = {
            value: garnetSecond,
            cost: ivorySecond
          };
          this.queue.push(anvilFourth);
          this.queue.sort(this.sorter);
        },
        pop: function () {
          return this.queue.shift();
        },
        empty: function () {
          return this.queue.length === 0;
        }
      }
    };
    onyxSecond !== undefined && (onyxSecond.exports = yellowThird);
  });
