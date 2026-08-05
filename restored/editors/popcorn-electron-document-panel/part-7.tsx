// Restored from ref/webview/assets/PopcornElectronDocumentPanel-Cz-nyTbC.js
// Wave GA — full polished body from `PopcornElectronDocumentPanel-Cz-nyTbC/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 17 (verified 103/120).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 7/65
/* split-lane-import-depth:1 */

import { ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import {
  jsxRuntime as getJsxRuntime,
  react,
} from "../../boundaries/react-cjs-runtime";
import {
  __workbookT,
  _workbookT,
  workbookA,
  workbookB,
  workbookC,
  workbookD,
  workbookE,
  workbookF,
  workbookG,
  WorkbookI,
  workbookIt,
  workbookJ,
  workbookK,
  workbookL,
  workbookLt,
  workbookM,
  workbookN,
  workbookNt,
  workbookO,
  workbookOt,
  workbookP,
  workbookQ,
  WorkbookR,
  workbookRt,
  workbookS,
  workbookSt,
  workbookU,
  workbookUnderscore,
  workbookV,
  workbookW,
  WorkbookW,
  workbookX,
  workbookY,
  workbookZ,
} from "../../workbook/editor-compat";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import {
  ensureFeatureCatalogAtomsInit,
  ensureFeatureCatalogInit,
  getFeatureCatalogEntries,
  PopcornFindBar,
} from "../feature-catalog";
import {
  ensurePopcornPageNumberNavigationInit,
  PopcornPageNumberNavigation,
} from "../popcorn-page-number-navigation";
import {
  ensureRemoteTextEditSessionInit,
  RemoteTextEditSessionA,
  RemoteTextEditSessionB,
  RemoteTextEditSessionC,
  RemoteTextEditSessionChrome,
  RemoteTextEditSessionE,
  RemoteTextEditSessionF,
  RemoteTextEditSessionH,
  RemoteTextEditSessionI,
  RemoteTextEditSessionLowerT,
  RemoteTextEditSessionM,
  RemoteTextEditSessionN,
  RemoteTextEditSessionO,
  RemoteTextEditSessionP,
  RemoteTextEditSessionR,
  RemoteTextEditSessionS,
  RemoteTextEditSessionSurfaceKind,
  RemoteTextEditSessionU,
  RemoteTextEditSessionV,
  RemoteTextEditSessionW,
  RemoteTextEditSessionX,
  RemoteTextEditSessionY,
  RemoteTextEditSessionZoomControl,
} from "../remote-text-edit-session/index";

// Wave5d soft stubs.
const $i: any = undefined;
const $n: any = undefined;
const $r: any = undefined;
const C: any = undefined;
const _: any = undefined;
const _i: any = undefined;
const _n: any = undefined;
const acorn: any = undefined;
const acornR16: any = undefined;
const acornR18: any = undefined;
const apex: any = undefined;
const basalt: any = undefined;
const bravoR17: any = undefined;
const bravoR3: any = undefined;
const brookR2: any = undefined;
const copperR3: any = undefined;
const coral: any = undefined;
const daisyR18: any = undefined;
const delta: any = undefined;
const duskR2: any = undefined;
const elmR2: any = undefined;
const falcon: any = undefined;
const fernR2: any = undefined;
const glide: any = undefined;
const groveR2: any = undefined;
const harbor: any = undefined;
const hillR2: any = undefined;
const indigo: any = undefined;
const isleR2: any = undefined;
const ivoryR3: any = undefined;
const jasperR3: any = undefined;
const jewel: any = undefined;
const kelp: any = undefined;
const kiteR3: any = undefined;
const lunarR18: any = undefined;
const mintR3: any = undefined;
const nickelR3: any = undefined;
const north: any = undefined;
const novaR3: any = undefined;
const onyxR3: any = undefined;
const ridgeR2: any = undefined;
const riverR3: any = undefined;
const slateR18: any = undefined;
const stormR2: any = undefined;
const timber: any = undefined;
const u: any = undefined;
const ui: any = undefined;
const ultraR3: any = undefined;
const vaporR3: any = undefined;
const violet: any = undefined;
const w: any = undefined;
const waveR16: any = undefined;
const willow: any = undefined;
const yellow: any = undefined;
const zinc: any = undefined;
const zincR3: any = undefined;

function _a(wheatR3, cliffR4, violetR6 = waveR16, yarnR7 = {}) {
  let irisR15 = yarnR7.layoutMode === "pageless",
    jewelR15 = jewel(
      wheatR3.sections.length > 0
        ? wheatR3.sections
        : [
            {
              id: "doc-section-1",
              breakType: 0,
              pageSetup: undefined,
              columns: undefined,
              elements: wheatR3.elements,
              header: undefined,
              footer: undefined,
              firstHeader: undefined,
              firstFooter: undefined,
              differentFirstPage: undefined,
              startsWithPageBreak: false,
            },
          ],
      wheatR3,
    ),
    knollR15 = [],
    lunarR15 = [],
    mossR15 = [],
    northR15 = [],
    orbitR15 = [],
    pineR15 = {},
    ridgeR15,
    stormR15,
    tideR15,
    unityR15 = 0,
    valeR15 = 0,
    waveR15 = false,
    apexR15 = false,
    brookR15,
    cliffR15 = ridgeR2(),
    duskR15 = new Map(),
    fernR15 = novaR3(),
    groveR15 = new workbookIt(wheatR3.textStyles ?? []),
    hillR15 = (lotusR13) => groveR15.resolve(lotusR13),
    isleR15 = zincR3(wheatR3),
    alphaR16 = mintR3(
      wheatR3,
      hillR15,
      isleR15,
      wheatR3.settings?.defaultTabStop,
    ),
    bravoR16 = jewelR15.map((item) => ({
      section: item,
      settings: $i(item, wheatR3, yarnR7),
    }));
  for (let copperR16 = 0; copperR16 < bravoR16.length; copperR16 += 1) {
    let { section, settings } = bravoR16[copperR16],
      deltaR16 = bravoR16[copperR16 - 1],
      echoR16 = bravoR16[copperR16 + 1];
    north(pineR15, section);
    let falconR16 = ivoryR3(
        section.header?.elements ?? lunarR15,
        hillR15,
        isleR15,
      ),
      harborR16 = ivoryR3(
        section.footer?.elements ?? mossR15,
        hillR15,
        isleR15,
      ),
      indigoR16 = ivoryR3(
        section.firstHeader?.elements ?? northR15,
        hillR15,
        isleR15,
      ),
      jadeR16 = ivoryR3(
        section.firstFooter?.elements ?? orbitR15,
        hillR15,
        isleR15,
      ),
      kiteR16 = !!section.pageSetup?.pageNumbers;
    section.header && (lunarR15 = falconR16);
    section.footer && (mossR15 = harborR16);
    section.firstHeader && (northR15 = indigoR16);
    section.firstFooter && (orbitR15 = jadeR16);
    let lemonR16 = jasperR3(
        section.elements ?? [],
        hillR15,
        isleR15,
        wheatR3.settings?.defaultTabStop,
      ),
      marbleR16 = section.id || "doc-section",
      nickelR16 = (willowR7) =>
        apex(
          marbleR16,
          settings,
          irisR15
            ? []
            : willowR7 && section.differentFirstPage
              ? indigoR16
              : falconR16,
          irisR15
            ? []
            : willowR7 && section.differentFirstPage
              ? jadeR16
              : harborR16,
          irisR15 ? false : kiteR16,
          pineR15,
          cliffR4,
          violetR6,
        ),
      onyxR16 =
        !ridgeR15 ||
        !tideR15 ||
        (!irisR15 && (stormR15 !== settings.key || glide(section)));
    onyxR16 &&
      (ridgeR15 &&
        knollR15.push(
          kelp(ridgeR15, tideR15 ?? settings, knollR15.length + 1, yarnR7),
        ),
      (ridgeR15 = nickelR16(true)),
      (duskR15 = new Map()),
      (fernR15 = novaR3()),
      (stormR15 = settings.key),
      (tideR15 = settings),
      (unityR15 = settings.contentTopPx),
      (valeR15 = 0),
      (waveR15 = false),
      (apexR15 = false),
      (brookR15 = undefined),
      (cliffR15 = ridgeR2()));
    let pearlR16 = Math.max(unityR15, settings.contentTopPx),
      quartzR16 =
        !onyxR16 &&
        (irisR15 || !glide(section)) &&
        pearlR16 > settings.contentTopPx + 0.01,
      timberR16 =
        deltaR16 !== undefined &&
        section.breakType === C.SECTION_BREAK_TYPE_CONTINUOUS &&
        riverR3(deltaR16.settings.columns, settings.columns),
      umbraR16 = quartzR16 && waveR15 && (!timberR16 || !apexR15);
    if (
      ridgeR15 !== undefined &&
      echoR16 !== undefined &&
      settings.columns.widths.length > 1 &&
      echoR16.settings.key === settings.key &&
      (irisR15 || !glide(echoR16.section)) &&
      riverR3(settings.columns, echoR16.settings.columns) &&
      ridgeR15
    ) {
      let wheatR21 = basalt({
        preparedElements: lemonR16,
        settings,
        sectionStartY: pearlR16,
        initialOccupiedRegions: cliffR15,
        sectionIndex: copperR16,
        ctx: cliffR4,
        theme: violetR6,
      });
      if (wheatR21) {
        ridgeR15.bodyElements.push(...wheatR21.bodyElements);
        unityR15 = wheatR21.endY;
        valeR15 = wheatR21.trailingSpaceAfterPx;
        waveR15 = wheatR21.previousEmptyParagraph;
        apexR15 = wheatR21.previousEmptyParagraphHasSpacing;
        brookR15 = wheatR21.previousParagraphStyleId;
        cliffR15 = wheatR21.occupiedRegions;
        continue;
      }
    }
    let violetR16 = 0,
      willowR16 = brookR2(settings, pearlR16),
      xenonR16 = duskR2(settings, quartzR16 ? valeR15 : 0),
      yellowR16 = elmR2(settings, umbraR16 ? waveR15 : false),
      zincR16 = elmR2(settings, umbraR16 ? apexR15 : false),
      amberR16 = fernR2(settings, quartzR16 ? brookR15 : undefined),
      basaltR16 = groveR2(settings),
      cedarR16 = stormR2(cliffR15),
      emberR16 = () => {
        ridgeR15 &&
          knollR15.push(
            kelp(ridgeR15, tideR15 ?? settings, knollR15.length + 1, yarnR7),
          );
        ridgeR15 = nickelR16(false);
        duskR15 = new Map();
        fernR15 = novaR3();
        stormR15 = settings.key;
        tideR15 = settings;
        pearlR16 = settings.contentTopPx;
        valeR15 = 0;
        waveR15 = false;
        apexR15 = false;
        brookR15 = undefined;
        violetR16 = 0;
        willowR16 = brookR2(settings, pearlR16);
        xenonR16 = duskR2(settings);
        yellowR16 = elmR2(settings);
        zincR16 = elmR2(settings);
        amberR16 = fernR2(settings);
        basaltR16 = groveR2(settings);
        cedarR16 = ridgeR2();
      },
      flintR16 = () => {
        if (violetR16 < settings.columns.widths.length - 1) {
          violetR16 += 1;
          return;
        }
        emberR16();
      },
      garnetR16 = new Map();
    for (let pineR16 = 0; pineR16 < lemonR16.length; pineR16 += 1) {
      let questR16 = lemonR16[pineR16];
      if (questR16.docxSectionBreakCarrier) {
        xenonR16[violetR16] = questR16.lastParagraphSpaceAfterPx;
        yellowR16[violetR16] = false;
        zincR16[violetR16] = false;
        amberR16[violetR16] = undefined;
        valeR15 = questR16.lastParagraphSpaceAfterPx;
        waveR15 = false;
        apexR15 = false;
        brookR15 = undefined;
        continue;
      }
      if (questR16.kind === "table" && yellow(lemonR16, pineR16)) {
        let falconR18 = questR16.element.table;
        if (!falconR18 || falconR18.rows.length === 0) continue;
        let gammaR18 = 0;
        for (; gammaR18 < falconR18.rows.length; ) {
          let lemonR18 =
              settings.columns.widths[violetR16] ?? settings.contentWidthPx,
            marbleR18 = willowR16[violetR16] ?? pearlR16,
            nickelR18 = marbleR18 + (xenonR16[violetR16] ?? 0),
            onyxR18 = kiteR3(
              questR16,
              nickelR18,
              duskR15,
              basaltR16[violetR16],
              irisR15 ? nickelR3(settings, pearlR16) : 0,
            ),
            pearlR18 = marbleR18 === settings.contentTopPx,
            quartzR18 = Math.max(0, settings.contentBottomPx - onyxR18),
            riverR18 = _i({
              preparedElement: questR16,
              rowOffset: gammaR18,
              availableHeight: quartzR18,
              isFreshPageSlot: pearlR18,
              ctx: cliffR4,
              widthPx: lemonR18,
              theme: violetR6,
              documentGridLinePitchTwips: settings.documentGridLinePitchTwips,
            });
          if (!riverR18.element || riverR18.rowCount <= 0) {
            flintR16();
            continue;
          }
          ridgeR15 ||
            ((ridgeR15 = nickelR16(false)),
            (duskR15 = new Map()),
            (fernR15 = novaR3()));
          let timberR18 = delta(questR16, settings, violetR16);
          ridgeR15.bodyElements.push(
            acorn(
              riverR18.element,
              "table",
              timberR18,
              onyxR18,
              riverR18.widthPx,
              riverR18.heightPx,
              cliffR4,
              violetR6,
              undefined,
              hillR2({
                settings,
                sectionIndex: copperR16,
                sourceElementIndex: pineR16,
                fragmentIndex: isleR2(garnetR16, pineR16),
                columnIndex: violetR16,
                rowStartIndex: gammaR18 + 1,
                rowEndIndex: gammaR18 + riverR18.rowCount,
              }),
            ),
          );
          falcon(
            cedarR16,
            {
              ...questR16,
              element: riverR18.element,
            },
            {
              xPx: timberR18,
              yPx: onyxR18,
              widthPx: riverR18.widthPx,
              heightPx: riverR18.heightPx,
            },
          );
          gammaR18 += riverR18.rowCount;
          willowR16[violetR16] = Math.max(
            nickelR18,
            onyxR18 + riverR18.heightPx,
          );
          xenonR16[violetR16] = 0;
          yellowR16[violetR16] = false;
          zincR16[violetR16] = false;
          amberR16[violetR16] = undefined;
          valeR15 = 0;
          waveR15 = false;
          apexR15 = false;
          brookR15 = undefined;
          gammaR18 < falconR18.rows.length && flintR16();
        }
        continue;
      }
      if (questR16.kind !== "text") {
        let unityR17 = false;
        for (; !unityR17; ) {
          let groveR17 =
              settings.columns.widths[violetR16] ?? settings.contentWidthPx,
            hillR17 = willowR16[violetR16] ?? pearlR16,
            isleR17 = hillR17 + (xenonR16[violetR16] ?? 0),
            alphaR18 = vaporR3(
              questR16,
              cliffR4,
              groveR17,
              violetR6,
              settings.documentGridLinePitchTwips,
            ),
            bravoR18 = kiteR3(
              questR16,
              isleR17,
              duskR15,
              basaltR16[violetR16],
              irisR15 ? nickelR3(settings, pearlR16) : 0,
            ),
            copperR18 = onyxR3(questR16, isleR17, bravoR18, alphaR18.heightPx),
            deltaR18 = hillR17 === settings.contentTopPx;
          if (copperR18 > settings.contentBottomPx && !deltaR18) {
            if (violetR16 < settings.columns.widths.length - 1) {
              violetR16 += 1;
              continue;
            }
            ridgeR15 &&
              knollR15.push(
                kelp(
                  ridgeR15,
                  tideR15 ?? settings,
                  knollR15.length + 1,
                  yarnR7,
                ),
              );
            ridgeR15 = nickelR16(false);
            duskR15 = new Map();
            fernR15 = novaR3();
            stormR15 = settings.key;
            tideR15 = settings;
            pearlR16 = settings.contentTopPx;
            valeR15 = 0;
            waveR15 = false;
            apexR15 = false;
            brookR15 = undefined;
            violetR16 = 0;
            willowR16 = brookR2(settings, pearlR16);
            xenonR16 = duskR2(settings);
            yellowR16 = elmR2(settings);
            zincR16 = elmR2(settings);
            amberR16 = fernR2(settings);
            basaltR16 = groveR2(settings);
            cedarR16 = ridgeR2();
            continue;
          }
          ridgeR15 ||
            ((ridgeR15 = nickelR16(false)),
            (duskR15 = new Map()),
            (fernR15 = novaR3()));
          let echoR18 = delta(questR16, settings, violetR16);
          ridgeR15.bodyElements.push(
            acorn(
              questR16.element,
              questR16.kind,
              echoR18,
              bravoR18,
              alphaR18.widthPx,
              alphaR18.heightPx,
              cliffR4,
              violetR6,
              undefined,
              hillR2({
                settings,
                sectionIndex: copperR16,
                sourceElementIndex: pineR16,
                fragmentIndex: isleR2(garnetR16, pineR16),
                columnIndex: violetR16,
              }),
            ),
          );
          falcon(cedarR16, questR16, {
            xPx: echoR18,
            yPx: bravoR18,
            widthPx: alphaR18.widthPx,
            heightPx: alphaR18.heightPx,
          });
          willowR16[violetR16] = copperR18;
          xenonR16[violetR16] = 0;
          yellowR16[violetR16] = false;
          zincR16[violetR16] = false;
          amberR16[violetR16] = undefined;
          valeR15 = 0;
          waveR15 = false;
          apexR15 = false;
          brookR15 = undefined;
          unityR17 = true;
        }
        continue;
      }
      let ridgeR16 = 0,
        stormR16 = false;
      for (; !stormR16; ) {
        let tideR16 =
            settings.columns.widths[violetR16] ?? settings.contentWidthPx,
          unityR16 = willowR16[violetR16] ?? pearlR16,
          valeR16 = $r(
            questR16,
            tideR16,
            violetR6,
            settings.documentGridLinePitchTwips,
          );
        if (valeR16.length === 0 || ridgeR16 >= valeR16.length) {
          copperR3(questR16.element, unityR16, duskR15);
          basaltR16[violetR16] = unityR16;
          stormR16 = true;
          break;
        }
        let apexR16 = yellowR16[violetR16] ?? false,
          brookR16 = zincR16[violetR16] ?? false,
          cliffR16 = willow({
            lineIndex: ridgeR16,
            lines: valeR16,
            previousElementWasEmptyParagraph: apexR16,
            previousEmptyParagraphHasSpacing: brookR16,
            firstParagraphSpaceBeforePx: questR16.firstParagraphSpaceBeforePx,
          }),
          duskR16 = bravoR3({
            previousParagraphStyleId: amberR16[violetR16],
            currentParagraphStyleId: questR16.firstParagraphStyleId,
            currentParagraphUsesContextualSpacing:
              questR16.firstParagraphUsesContextualSpacing,
          }),
          elmR16 =
            cliffR16 || (duskR16 && ridgeR16 === 0 && violet(valeR16[0])),
          fernR16 = elmR16 && ridgeR16 === 0 ? 1 : ridgeR16;
        if (fernR16 >= valeR16.length) {
          copperR3(questR16.element, unityR16, duskR15);
          basaltR16[violetR16] = unityR16;
          stormR16 = true;
          break;
        }
        let groveR16 = timber(questR16.element, valeR16),
          hillR16 =
            unityR16 -
            indigo({
              lineIndex: fernR16,
              trailingSpaceAfterPx: duskR16 ? 0 : (xenonR16[violetR16] ?? 0),
              firstParagraphSpaceBeforePx: elmR16
                ? 0
                : questR16.firstParagraphSpaceBeforePx,
            }),
          isleR16 = ultraR3(fernR15, alphaR16, settings, violetR6),
          alphaR17 = $n(
            cedarR16,
            settings.columns.xPositions[violetR16] ?? settings.contentLeftPx,
            tideR16,
            hillR16,
            isleR16,
            Math.max(1, valeR16[fernR16]?.heightPx ?? 0),
            groveR16,
          );
        hillR16 = alphaR17.currentY;
        let copperR17 = Math.max(0, alphaR17.boundaryBottomPx - hillR16),
          deltaR17 = unityR16 === settings.contentTopPx,
          { nextLineIndex, fragmentHeightPx, endsWithFlowBreak } = ui({
            lines: valeR16,
            startIndex: fernR16,
            currentY: hillR16,
            boundaryBottomPx: alphaR17.boundaryBottomPx,
            pageContentBottomPx: settings.contentBottomPx,
            pageFootnoteIds: fernR15.ids,
            preparedFootnotes: alphaR16,
            footnoteWidthPx: settings.contentWidthPx,
            theme: violetR6,
          });
        if (groveR16 && nextLineIndex > fernR16 && !deltaR17) {
          let timberR26 = zinc(
            questR16,
            lemonR16,
            pineR16,
            cliffR4,
            tideR16,
            violetR6,
            settings.documentGridLinePitchTwips,
          );
          timberR26 !== undefined &&
            fragmentHeightPx + timberR26 > copperR17 + topazR19 &&
            ((nextLineIndex = fernR16),
            (fragmentHeightPx = 0),
            (endsWithFlowBreak = false));
        }
        if (nextLineIndex === fernR16) {
          if (!deltaR17) {
            if (violetR16 < settings.columns.widths.length - 1) {
              violetR16 += 1;
              continue;
            }
            ridgeR15 &&
              knollR15.push(
                kelp(
                  ridgeR15,
                  tideR15 ?? settings,
                  knollR15.length + 1,
                  yarnR7,
                ),
              );
            ridgeR15 = nickelR16(false);
            duskR15 = new Map();
            fernR15 = novaR3();
            stormR15 = settings.key;
            tideR15 = settings;
            pearlR16 = settings.contentTopPx;
            valeR15 = 0;
            waveR15 = false;
            apexR15 = false;
            brookR15 = undefined;
            violetR16 = 0;
            willowR16 = brookR2(settings, pearlR16);
            xenonR16 = duskR2(settings);
            yellowR16 = elmR2(settings);
            zincR16 = elmR2(settings);
            amberR16 = fernR2(settings);
            basaltR16 = groveR2(settings);
            cedarR16 = ridgeR2();
            continue;
          }
          fragmentHeightPx = Math.max(1, valeR16[fernR16]?.heightPx ?? 0);
          nextLineIndex = Math.min(valeR16.length, fernR16 + 1);
          endsWithFlowBreak = false;
        }
        if (
          (ridgeR15 ||
            ((ridgeR15 = nickelR16(false)),
            (duskR15 = new Map()),
            (fernR15 = novaR3())),
          ridgeR15.bodyElements.push({
            kind: "text",
            element: questR16.element,
            xPx:
              settings.columns.xPositions[violetR16] ?? settings.contentLeftPx,
            yPx: hillR16,
            widthPx: tideR16,
            heightPx: fragmentHeightPx,
            flow: hillR2({
              settings,
              sectionIndex: copperR16,
              sourceElementIndex: pineR16,
              fragmentIndex: isleR2(garnetR16, pineR16),
              columnIndex: violetR16,
              lineStartIndex: fernR16 + 1,
              lineEndIndex: nextLineIndex,
            }),
            textLines: valeR16.slice(fernR16, nextLineIndex),
          }),
          irisR15 ||
            coral(
              ridgeR15,
              fernR15,
              alphaR16,
              valeR16,
              fernR16,
              nextLineIndex,
              settings,
              cliffR4,
              violetR6,
            ),
          ridgeR16 === 0 &&
            (copperR3(questR16.element, hillR16, duskR15),
            (basaltR16[violetR16] = hillR16)),
          (willowR16[violetR16] = hillR16 + fragmentHeightPx),
          (ridgeR16 = nextLineIndex),
          (xenonR16[violetR16] = 0),
          endsWithFlowBreak && ridgeR16 < valeR16.length)
        ) {
          if (violetR16 < settings.columns.widths.length - 1) {
            violetR16 += 1;
            continue;
          }
          ridgeR15 &&
            knollR15.push(
              kelp(ridgeR15, tideR15 ?? settings, knollR15.length + 1, yarnR7),
            );
          ridgeR15 = nickelR16(false);
          duskR15 = new Map();
          fernR15 = novaR3();
          stormR15 = settings.key;
          tideR15 = settings;
          pearlR16 = settings.contentTopPx;
          valeR15 = 0;
          waveR15 = false;
          apexR15 = false;
          brookR15 = undefined;
          violetR16 = 0;
          willowR16 = brookR2(settings, pearlR16);
          xenonR16 = duskR2(settings);
          yellowR16 = elmR2(settings);
          zincR16 = elmR2(settings);
          amberR16 = fernR2(settings);
          basaltR16 = groveR2(settings);
          cedarR16 = ridgeR2();
          continue;
        }
        if (ridgeR16 >= valeR16.length) {
          let valeR21 =
            (questR16.element.paragraphs?.length ?? 0) > 1 ? jasperR19 : 0;
          willowR16[violetR16] = (willowR16[violetR16] ?? pearlR16) + valeR21;
          xenonR16[violetR16] =
            valeR21 > 0 ? 0 : questR16.lastParagraphSpaceAfterPx;
          yellowR16[violetR16] = timber(questR16.element, valeR16);
          zincR16[violetR16] =
            yellowR16[violetR16] === true && harbor(questR16);
          amberR16[violetR16] = questR16.lastParagraphStyleId;
          valeR15 = xenonR16[violetR16] ?? 0;
          waveR15 = yellowR16[violetR16] ?? false;
          apexR15 = zincR16[violetR16] ?? false;
          brookR15 = questR16.lastParagraphStyleId;
          stormR16 = true;
          break;
        }
        if ((willowR16[violetR16] ?? pearlR16) >= settings.contentBottomPx) {
          if (violetR16 < settings.columns.widths.length - 1) {
            violetR16 += 1;
            continue;
          }
          ridgeR15 &&
            knollR15.push(
              kelp(ridgeR15, tideR15 ?? settings, knollR15.length + 1, yarnR7),
            );
          ridgeR15 = nickelR16(false);
          duskR15 = new Map();
          fernR15 = novaR3();
          stormR15 = settings.key;
          tideR15 = settings;
          pearlR16 = settings.contentTopPx;
          valeR15 = 0;
          waveR15 = false;
          apexR15 = false;
          brookR15 = undefined;
          violetR16 = 0;
          willowR16 = brookR2(settings, pearlR16);
          xenonR16 = duskR2(settings);
          yellowR16 = elmR2(settings);
          zincR16 = elmR2(settings);
          amberR16 = fernR2(settings);
          basaltR16 = groveR2(settings);
          cedarR16 = ridgeR2();
        }
      }
    }
    unityR15 = Math.max(...willowR16);
    cliffR15 = stormR2(cedarR16);
  }
  return (
    ridgeR15 && tideR15
      ? knollR15.push(kelp(ridgeR15, tideR15, knollR15.length + 1, yarnR7))
      : ridgeR15 && knollR15.push(ridgeR15),
    knollR15
  );
}
var apexR18,
  copperR19,
  nickelR19,
  yellowR19,
  jasperR19,
  topazR19,
  eagleR19,
  pineR19,
  duskR19,
  falconR20,
  riverR20,
  cedarR20,
  novaR20,
  zephyrR20,
  knollR20,
  valeR20 = esmInit(() => {
    w();
    u();
    _();
    workbookZ();
    workbookM();
    workbookA();
    _n();
    workbookP();
    slateR18();
    bravoR17();
    acornR18();
    workbookSt();
    workbookJ();
    daisyR18();
    acornR16();
    lunarR18();
    apexR18 = 12240;
    copperR19 = 15840;
    nickelR19 = 1e5;
    yellowR19 = {
      top: 1440,
      bottom: 1440,
      left: 1440,
      right: 1440,
      header: 720,
      footer: 720,
      gutter: 0,
    };
    jasperR19 = 8;
    topazR19 = 0.5;
    eagleR19 = 1;
    pineR19 = "__docxMirrorMargins:1";
    duskR19 = "__docxPageNumberStart:";
    falconR20 = "__docxPageNumberFormat:";
    riverR20 = 2;
    cedarR20 = 1;
    novaR20 = 5;
    zephyrR20 = 6;
    knollR20 = {
      layoutDocumentFlow: _a,
    };
  });
