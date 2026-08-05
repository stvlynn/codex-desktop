// Restored from ref/webview/assets/codex-mobile-setup-dialog-CedkrL4M.js
// Wave GA — full polished body from `codex-mobile-setup-dialog-CedkrL4M/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 32 (verified 76/108).
// Careful AST var-declarator split 3/4
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

import { codexMobileSetupDialogL } from "./part-5";
// Wave5d soft stubs (cross part-2-xN).
const _n: any = undefined;
const anvilThird: any = undefined;
const brookThird: any = undefined;
const canyonThird: any = undefined;
const eagleThird: any = undefined;
const gearThird: any = undefined;
const jasperThird: any = undefined;
const jettyThird: any = undefined;
const kelpThird: any = undefined;
const latchThird: any = undefined;
const nimbusThird: any = undefined;
const quillThird: any = undefined;
const rainThird: any = undefined;
const reefThird: any = undefined;
const sageThird: any = undefined;
const updraftThird: any = undefined;
const zenithThird: any = undefined;
const zephyrThird: any = undefined;

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

var pistonThird = esmInit((kernelSecond) => {
    var tappetSecond = canyonThird(),
      alphaThird = anvilThird(),
      bravoThird = jettyThird(),
      copperThird = updraftThird(),
      deltaThird = gearThird(),
      falconThird = rainThird(),
      gammaThird = jasperThird(),
      harborThird = latchThird();
    function petalPrime(apexSecond) {
      return unescape(encodeURIComponent(apexSecond)).length;
    }
    function quietPrime(tappetPrime, bravoSecond, copperSecond) {
      let havenFourth = [],
        inkFourth;
      for (; (inkFourth = tappetPrime.exec(copperSecond)) !== null; )
        havenFourth.push({
          data: inkFourth[0],
          index: inkFourth.index,
          mode: bravoSecond,
          length: inkFourth[0].length,
        });
      return havenFourth;
    }
    function rainPrime(wispPrime) {
      let torqueThird = quietPrime(
          falconThird.NUMERIC,
          tappetSecond.NUMERIC,
          wispPrime,
        ),
        valveThird = quietPrime(
          falconThird.ALPHANUMERIC,
          tappetSecond.ALPHANUMERIC,
          wispPrime,
        ),
        axleThird,
        clampThird;
      return (
        gammaThird.isKanjiModeEnabled()
          ? ((axleThird = quietPrime(
              falconThird.BYTE,
              tappetSecond.BYTE,
              wispPrime,
            )),
            (clampThird = quietPrime(
              falconThird.KANJI,
              tappetSecond.KANJI,
              wispPrime,
            )))
          : ((axleThird = quietPrime(
              falconThird.BYTE_KANJI,
              tappetSecond.BYTE,
              wispPrime,
            )),
            (clampThird = [])),
        torqueThird
          .concat(valveThird, axleThird, clampThird)
          .sort(function (nestSecond, oakSecond) {
            return nestSecond.index - oakSecond.index;
          })
          .map(function (item) {
            return {
              data: item.data,
              mode: item.mode,
              length: item.length,
            };
          })
      );
    }
    function seedPrime(jointPrime, keystonePrime) {
      switch (keystonePrime) {
        case tappetSecond.NUMERIC:
          return alphaThird.getBitsLength(jointPrime);
        case tappetSecond.ALPHANUMERIC:
          return bravoThird.getBitsLength(jointPrime);
        case tappetSecond.KANJI:
          return deltaThird.getBitsLength(jointPrime);
        case tappetSecond.BYTE:
          return copperThird.getBitsLength(jointPrime);
      }
    }
    function trailPrime(drillPrime) {
      return drillPrime.reduce(function (accumulator, current) {
        let birchFourth =
          accumulator.length - 1 >= 0
            ? accumulator[accumulator.length - 1]
            : null;
        return birchFourth && birchFourth.mode === current.mode
          ? ((accumulator[accumulator.length - 1].data += current.data),
            accumulator)
          : (accumulator.push(current), accumulator);
      }, []);
    }
    function urnPrime(torSecond) {
      let inkThird = [];
      for (let hearthThird = 0; hearthThird < torSecond.length; hearthThird++) {
        let spurThird = torSecond[hearthThird];
        switch (spurThird.mode) {
          case tappetSecond.NUMERIC:
            inkThird.push([
              spurThird,
              {
                data: spurThird.data,
                mode: tappetSecond.ALPHANUMERIC,
                length: spurThird.length,
              },
              {
                data: spurThird.data,
                mode: tappetSecond.BYTE,
                length: spurThird.length,
              },
            ]);
            break;
          case tappetSecond.ALPHANUMERIC:
            inkThird.push([
              spurThird,
              {
                data: spurThird.data,
                mode: tappetSecond.BYTE,
                length: spurThird.length,
              },
            ]);
            break;
          case tappetSecond.KANJI:
            inkThird.push([
              spurThird,
              {
                data: spurThird.data,
                mode: tappetSecond.BYTE,
                length: petalPrime(spurThird.data),
              },
            ]);
            break;
          case tappetSecond.BYTE:
            inkThird.push([
              {
                data: spurThird.data,
                mode: tappetSecond.BYTE,
                length: petalPrime(spurThird.data),
              },
            ]);
        }
      }
      return inkThird;
    }
    function vinePrime(thornSecond, uplandSecond) {
      let acornThird = {},
        bloomThird = {
          start: {},
        },
        coralThird = ["start"];
      for (let birchThird = 0; birchThird < thornSecond.length; birchThird++) {
        let fieldThird = thornSecond[birchThird],
          grainThird = [];
        for (let knobThird = 0; knobThird < fieldThird.length; knobThird++) {
          let torThird = fieldThird[knobThird],
            vergeThird = "" + birchThird + knobThird;
          grainThird.push(vergeThird);
          acornThird[vergeThird] = {
            node: torThird,
            lastCount: 0,
          };
          bloomThird[vergeThird] = {};
          for (
            let deltaFourth = 0;
            deltaFourth < coralThird.length;
            deltaFourth++
          ) {
            let falconFourth = coralThird[deltaFourth];
            acornThird[falconFourth] &&
            acornThird[falconFourth].node.mode === torThird.mode
              ? ((bloomThird[falconFourth][vergeThird] =
                  seedPrime(
                    acornThird[falconFourth].lastCount + torThird.length,
                    torThird.mode,
                  ) -
                  seedPrime(acornThird[falconFourth].lastCount, torThird.mode)),
                (acornThird[falconFourth].lastCount += torThird.length))
              : (acornThird[falconFourth] &&
                  (acornThird[falconFourth].lastCount = torThird.length),
                (bloomThird[falconFourth][vergeThird] =
                  seedPrime(torThird.length, torThird.mode) +
                  4 +
                  tappetSecond.getCharCountIndicator(
                    torThird.mode,
                    uplandSecond,
                  )));
          }
        }
        coralThird = grainThird;
      }
      for (let hingeFourth = 0; hingeFourth < coralThird.length; hingeFourth++)
        bloomThird[coralThird[hingeFourth]].end = 0;
      return {
        map: bloomThird,
        table: acornThird,
      };
    }
    function windPrime(leafPrime, maplePrime) {
      let anchorThird,
        boltThird = tappetSecond.getBestModeForData(leafPrime);
      if (
        ((anchorThird = tappetSecond.from(maplePrime, boltThird)),
        anchorThird !== tappetSecond.BYTE && anchorThird.bit < boltThird.bit)
      )
        throw Error(
          '"' +
            leafPrime +
            '" cannot be encoded with mode ' +
            tappetSecond.toString(anchorThird) +
            ".\n Suggested mode is: " +
            tappetSecond.toString(boltThird),
        );
      switch (
        (anchorThird === tappetSecond.KANJI &&
          !gammaThird.isKanjiModeEnabled() &&
          (anchorThird = tappetSecond.BYTE),
        anchorThird)
      ) {
        case tappetSecond.NUMERIC:
          return new alphaThird(leafPrime);
        case tappetSecond.ALPHANUMERIC:
          return new bravoThird(leafPrime);
        case tappetSecond.KANJI:
          return new deltaThird(leafPrime);
        case tappetSecond.BYTE:
          return new copperThird(leafPrime);
      }
    }
    kernelSecond.fromArray = function (handlePrime) {
      return handlePrime.reduce(function (accumulator, current) {
        return (
          typeof current == "string"
            ? accumulator.push(windPrime(current, null))
            : current.data &&
              accumulator.push(windPrime(current.data, current.mode)),
          accumulator
        );
      }, []);
    };
    kernelSecond.fromString = function (bracketPrime, clampPrime) {
      let fernFourth = vinePrime(
          urnPrime(rainPrime(bracketPrime, gammaThird.isKanjiModeEnabled())),
          clampPrime,
        ),
        groveFourth = harborThird.find_path(fernFourth.map, "start", "end"),
        hillFourth = [];
      for (let cogFourth = 1; cogFourth < groveFourth.length - 1; cogFourth++)
        hillFourth.push(fernFourth.table[groveFourth[cogFourth]].node);
      return kernelSecond.fromArray(trailPrime(hillFourth));
    };
    kernelSecond.rawSplit = function (stormSecond) {
      return kernelSecond.fromArray(
        rainPrime(stormSecond, gammaThird.isKanjiModeEnabled()),
      );
    };
  }),
  bracketThird = esmInit((honeySecond) => {
    var drillSecond = jasperThird(),
      engineSecond = _n(),
      frameSecond = kelpThird(),
      gasketSecond = quillThird(),
      handleSecond = reefThird(),
      insertSecond = sageThird(),
      jacketSecond = zephyrThird(),
      knurlSecond = eagleThird(),
      leverSecond = brookThird(),
      mountSecond = nimbusThird(),
      nozzleSecond = zenithThird(),
      platenSecond = canyonThird(),
      ratchetSecond = pistonThird();
    function fernPrime(jadeitePrime, kernelPrime) {
      let weirThird = jadeitePrime.size,
        yardThird = insertSecond.getPositions(kernelPrime);
      for (let drillThird = 0; drillThird < yardThird.length; drillThird++) {
        let shimThird = yardThird[drillThird][0],
          tappetThird = yardThird[drillThird][1];
        for (let harborFourth = -1; harborFourth <= 7; harborFourth++)
          if (
            !(
              shimThird + harborFourth <= -1 ||
              weirThird <= shimThird + harborFourth
            )
          )
            for (let oliveFourth = -1; oliveFourth <= 7; oliveFourth++)
              tappetThird + oliveFourth <= -1 ||
                weirThird <= tappetThird + oliveFourth ||
                ((harborFourth >= 0 &&
                  harborFourth <= 6 &&
                  (oliveFourth === 0 || oliveFourth === 6)) ||
                (oliveFourth >= 0 &&
                  oliveFourth <= 6 &&
                  (harborFourth === 0 || harborFourth === 6)) ||
                (harborFourth >= 2 &&
                  harborFourth <= 4 &&
                  oliveFourth >= 2 &&
                  oliveFourth <= 4)
                  ? jadeitePrime.set(
                      shimThird + harborFourth,
                      tappetThird + oliveFourth,
                      true,
                      true,
                    )
                  : jadeitePrime.set(
                      shimThird + harborFourth,
                      tappetThird + oliveFourth,
                      false,
                      true,
                    ));
      }
    }
    function grovePrime(riverSecond) {
      let thornFourth = riverSecond.size;
      for (let inletFourth = 8; inletFourth < thornFourth - 8; inletFourth++) {
        let spurFourth = inletFourth % 2 == 0;
        riverSecond.set(inletFourth, 6, spurFourth, true);
        riverSecond.set(6, inletFourth, spurFourth, true);
      }
    }
    function hillPrime(oxbowPrime, pondPrime) {
      let amberFourth = handleSecond.getPositions(pondPrime);
      for (
        let vaporFourth = 0;
        vaporFourth < amberFourth.length;
        vaporFourth++
      ) {
        let knollFourth = amberFourth[vaporFourth][0],
          lunarFourth = amberFourth[vaporFourth][1];
        for (let oakFourth = -2; oakFourth <= 2; oakFourth++)
          for (let everFourth = -2; everFourth <= 2; everFourth++)
            oakFourth === -2 ||
            oakFourth === 2 ||
            everFourth === -2 ||
            everFourth === 2 ||
            (oakFourth === 0 && everFourth === 0)
              ? oxbowPrime.set(
                  knollFourth + oakFourth,
                  lunarFourth + everFourth,
                  true,
                  true,
                )
              : oxbowPrime.set(
                  knollFourth + oakFourth,
                  lunarFourth + everFourth,
                  false,
                  true,
                );
      }
    }
    function islePrime(edgePrime, forgePrime) {
      let eagleFourth = edgePrime.size,
        frostFourth = mountSecond.getEncodedBits(forgePrime),
        glideFourth,
        honeyFourth,
        irisFourth;
      for (let fieldFourth = 0; fieldFourth < 18; fieldFourth++) {
        glideFourth = Math.floor(fieldFourth / 3);
        honeyFourth = (fieldFourth % 3) + eagleFourth - 8 - 3;
        irisFourth = ((frostFourth >> fieldFourth) & 1) == 1;
        edgePrime.set(glideFourth, honeyFourth, irisFourth, true);
        edgePrime.set(honeyFourth, glideFourth, irisFourth, true);
      }
    }
    function juniperPrime(cragPrime, domePrime, eddyPrime) {
      let leverThird = cragPrime.size,
        nozzleThird = nozzleSecond.getEncodedBits(domePrime, eddyPrime),
        platenThird,
        ratchetThird;
      for (platenThird = 0; platenThird < 15; platenThird++) {
        ratchetThird = ((nozzleThird >> platenThird) & 1) == 1;
        platenThird < 6
          ? cragPrime.set(platenThird, 8, ratchetThird, true)
          : platenThird < 8
            ? cragPrime.set(platenThird + 1, 8, ratchetThird, true)
            : cragPrime.set(
                leverThird - 15 + platenThird,
                8,
                ratchetThird,
                true,
              );
        platenThird < 8
          ? cragPrime.set(8, leverThird - platenThird - 1, ratchetThird, true)
          : platenThird < 9
            ? cragPrime.set(8, 15 - platenThird - 1 + 1, ratchetThird, true)
            : cragPrime.set(8, 15 - platenThird - 1, ratchetThird, true);
      }
      cragPrime.set(leverThird - 8, 8, 1, true);
    }
    function lagoonPrime(quillowPrime, rootPrime) {
      let edgeThird = quillowPrime.size,
        forgeThird = -1,
        hingeThird = edgeThird - 1,
        ironThird = 7,
        jointThird = 0;
      for (let echoFourth = edgeThird - 1; echoFourth > 0; echoFourth -= 2)
        for (echoFourth === 6 && echoFourth--; ; ) {
          for (let cliffFourth = 0; cliffFourth < 2; cliffFourth++)
            if (
              !quillowPrime.isReserved(hingeThird, echoFourth - cliffFourth)
            ) {
              let vineFourth = false;
              jointThird < rootPrime.length &&
                (vineFourth = ((rootPrime[jointThird] >>> ironThird) & 1) == 1);
              quillowPrime.set(
                hingeThird,
                echoFourth - cliffFourth,
                vineFourth,
              );
              ironThird--;
              ironThird === -1 && (jointThird++, (ironThird = 7));
            }
          if (
            ((hingeThird += forgeThird),
            hingeThird < 0 || edgeThird <= hingeThird)
          ) {
            hingeThird -= forgeThird;
            forgeThird = -forgeThird;
            break;
          }
        }
    }
    function meadowPrime(silkPrime, thornPrime, uplandPrime) {
      let keystoneThird = new frameSecond();
      uplandPrime.forEach(function (item) {
        keystoneThird.put(item.mode.bit, 4);
        keystoneThird.put(
          item.getLength(),
          platenSecond.getCharCountIndicator(item.mode, silkPrime),
        );
        item.write(keystoneThird);
      });
      let motorThird =
        (drillSecond.getSymbolTotalCodewords(silkPrime) -
          knurlSecond.getTotalCodewordsCount(silkPrime, thornPrime)) *
        8;
      for (
        keystoneThird.getLengthInBits() + 4 <= motorThird &&
        keystoneThird.put(0, 4);
        keystoneThird.getLengthInBits() % 8 != 0;
      )
        keystoneThird.putBit(0);
      let nutThird = (motorThird - keystoneThird.getLengthInBits()) / 8;
      for (let forgeFourth = 0; forgeFourth < nutThird; forgeFourth++)
        keystoneThird.put(forgeFourth % 2 ? 17 : 236, 8);
      return nestPrime(keystoneThird, silkPrime, thornPrime);
    }
    function nestPrime(anvilSecond, beaconSecond, cragSecond) {
      let orbitThird = drillSecond.getSymbolTotalCodewords(beaconSecond),
        pineThird =
          orbitThird -
          knurlSecond.getTotalCodewordsCount(beaconSecond, cragSecond),
        questThird = knurlSecond.getBlocksCount(beaconSecond, cragSecond),
        ridgeThird = questThird - (orbitThird % questThird),
        stormThird = Math.floor(orbitThird / questThird),
        tideThird = Math.floor(pineThird / questThird),
        unityThird = tideThird + 1,
        valeThird = stormThird - tideThird,
        waveThird = new leverSecond(valeThird),
        apexThird = 0,
        cliffThird = Array(questThird),
        duskThird = Array(questThird),
        elmThird = 0,
        fernThird = new Uint8Array(anvilSecond.buffer);
      for (let grainFourth = 0; grainFourth < questThird; grainFourth++) {
        let uplandFourth = grainFourth < ridgeThird ? tideThird : unityThird;
        cliffThird[grainFourth] = fernThird.slice(
          apexThird,
          apexThird + uplandFourth,
        );
        duskThird[grainFourth] = waveThird.encode(cliffThird[grainFourth]);
        apexThird += uplandFourth;
        elmThird = Math.max(elmThird, uplandFourth);
      }
      let groveThird = new Uint8Array(orbitThird),
        hillThird = 0,
        isleThird,
        juniperThird;
      for (isleThird = 0; isleThird < elmThird; isleThird++)
        for (juniperThird = 0; juniperThird < questThird; juniperThird++)
          isleThird < cliffThird[juniperThird].length &&
            (groveThird[hillThird++] = cliffThird[juniperThird][isleThird]);
      for (isleThird = 0; isleThird < valeThird; isleThird++)
        for (juniperThird = 0; juniperThird < questThird; juniperThird++)
          groveThird[hillThird++] = duskThird[juniperThird][isleThird];
      return groveThird;
    }
    function oakPrime(inkSecond, jadeiteSecond, leafSecond, mapleSecond) {
      let mintThird;
      if (Array.isArray(inkSecond))
        mintThird = ratchetSecond.fromArray(inkSecond);
      else if (typeof inkSecond == "string") {
        let silkFourth = jadeiteSecond;
        if (!silkFourth) {
          let rapidsFourth = ratchetSecond.rawSplit(inkSecond);
          silkFourth = mountSecond.getBestVersionForData(
            rapidsFourth,
            leafSecond,
          );
        }
        mintThird = ratchetSecond.fromString(inkSecond, silkFourth || 40);
      } else throw Error("Invalid data");
      let novaThird = mountSecond.getBestVersionForData(mintThird, leafSecond);
      if (!novaThird)
        throw Error("The amount of data is too big to be stored in a QR Code");
      if (!jadeiteSecond) jadeiteSecond = novaThird;
      else if (jadeiteSecond < novaThird)
        throw Error(
          "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
            novaThird +
            ".\n",
        );
      let oliveThird = meadowPrime(jadeiteSecond, leafSecond, mintThird),
        prismThird = new gasketSecond(drillSecond.getSymbolSize(jadeiteSecond));
      return (
        fernPrime(prismThird, jadeiteSecond),
        grovePrime(prismThird),
        hillPrime(prismThird, jadeiteSecond),
        juniperPrime(prismThird, leafSecond, 0),
        jadeiteSecond >= 7 && islePrime(prismThird, jadeiteSecond),
        lagoonPrime(prismThird, oliveThird),
        isNaN(mapleSecond) &&
          (mapleSecond = jacketSecond.getBestMask(
            prismThird,
            juniperPrime.bind(null, prismThird, leafSecond),
          )),
        jacketSecond.applyMask(mapleSecond, prismThird),
        juniperPrime(prismThird, leafSecond, mapleSecond),
        {
          modules: prismThird,
          version: jadeiteSecond,
          errorCorrectionLevel: leafSecond,
          maskPattern: mapleSecond,
          segments: mintThird,
        }
      );
    }
    honeySecond.create = function (quarryPrime, rapidsPrime) {
      if (quarryPrime === undefined || quarryPrime === "")
        throw Error("No input text");
      let emberFourth = engineSecond.M,
        flintFourth,
        garnetFourth;
      return (
        rapidsPrime !== undefined &&
          ((emberFourth = engineSecond.from(
            rapidsPrime.errorCorrectionLevel,
            engineSecond.M,
          )),
          (flintFourth = mountSecond.from(rapidsPrime.version)),
          (garnetFourth = jacketSecond.from(rapidsPrime.maskPattern)),
          rapidsPrime.toSJISFunc &&
            drillSecond.setToSJISFunction(rapidsPrime.toSJISFunc)),
        oakPrime(quarryPrime, flintFourth, emberFourth, garnetFourth)
      );
    };
  }),
  mountThird = esmInit((spurPrime) => {
    function azurePrime(pondSecond) {
      if (
        (typeof pondSecond == "number" && (pondSecond = pondSecond.toString()),
        typeof pondSecond != "string")
      )
        throw Error("Color should be defined as hex string");
      let dewThird = pondSecond.slice().replace("#", "").split("");
      if (dewThird.length < 3 || dewThird.length === 5 || dewThird.length > 8)
        throw Error("Invalid hex color: " + pondSecond);
      (dewThird.length === 3 || dewThird.length === 4) &&
        (dewThird = Array.prototype.concat.apply(
          [],
          dewThird.map(function (item) {
            return [item, item];
          }),
        ));
      dewThird.length === 6 && dewThird.push("F", "F");
      let everThird = parseInt(dewThird.join(""), 16);
      return {
        r: (everThird >> 24) & 255,
        g: (everThird >> 16) & 255,
        b: (everThird >> 8) & 255,
        a: everThird & 255,
        hex: "#" + dewThird.slice(0, 6).join(""),
      };
    }
    spurPrime.getOptions = function (beaconPrime) {
      beaconPrime ||= {};
      beaconPrime.color ||= {};
      let insertThird =
          beaconPrime.margin === undefined ||
          beaconPrime.margin === null ||
          beaconPrime.margin < 0
            ? 4
            : beaconPrime.margin,
        jacketThird =
          beaconPrime.width && beaconPrime.width >= 21
            ? beaconPrime.width
            : undefined,
        knurlThird = beaconPrime.scale || 4;
      return {
        width: jacketThird,
        scale: jacketThird ? 4 : knurlThird,
        margin: insertThird,
        color: {
          dark: azurePrime(beaconPrime.color.dark || "#000000ff"),
          light: azurePrime(beaconPrime.color.light || "#ffffffff"),
        },
        type: beaconPrime.type,
        rendererOpts: beaconPrime.rendererOpts || {},
      };
    };
    spurPrime.getScale = function (amberSecond, basaltSecond) {
      return basaltSecond.width &&
        basaltSecond.width >= amberSecond + basaltSecond.margin * 2
        ? basaltSecond.width / (amberSecond + basaltSecond.margin * 2)
        : basaltSecond.scale;
    };
    spurPrime.getImageWidth = function (vaporSecond, wheatSecond) {
      let jettyFourth = spurPrime.getScale(vaporSecond, wheatSecond);
      return Math.floor((vaporSecond + wheatSecond.margin * 2) * jettyFourth);
    };
    spurPrime.qrToImageData = function (discSecond, edgeSecond, forgeSecond) {
      let beaconThird = edgeSecond.modules.size,
        cragThird = edgeSecond.modules.data,
        domeThird = spurPrime.getScale(beaconThird, forgeSecond),
        eddyThird = Math.floor(
          (beaconThird + forgeSecond.margin * 2) * domeThird,
        ),
        fjordThird = forgeSecond.margin * domeThird,
        glenThird = [forgeSecond.color.light, forgeSecond.color.dark];
      for (let timberFourth = 0; timberFourth < eddyThird; timberFourth++)
        for (let daisyFourth = 0; daisyFourth < eddyThird; daisyFourth++) {
          let prismFourth = (timberFourth * eddyThird + daisyFourth) * 4,
            quillFourth = forgeSecond.color.light;
          if (
            timberFourth >= fjordThird &&
            daisyFourth >= fjordThird &&
            timberFourth < eddyThird - fjordThird &&
            daisyFourth < eddyThird - fjordThird
          ) {
            let yonderFourth = Math.floor(
                (timberFourth - fjordThird) / domeThird,
              ),
              zenithFourth = Math.floor((daisyFourth - fjordThird) / domeThird);
            quillFourth =
              glenThird[
                +!!cragThird[yonderFourth * beaconThird + zenithFourth]
              ];
          }
          discSecond[prismFourth++] = quillFourth.r;
          discSecond[prismFourth++] = quillFourth.g;
          discSecond[prismFourth++] = quillFourth.b;
          discSecond[prismFourth] = quillFourth.a;
        }
    };
  });
