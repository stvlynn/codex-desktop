// Restored from ref/webview/assets/PopcornElectronDocumentPanel-Cz-nyTbC.js
// Wave GA — full polished body from `PopcornElectronDocumentPanel-Cz-nyTbC/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 17 (verified 103/120).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 4/65
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
const _r: any = undefined;
const bravoR3: any = undefined;
const deltaR3: any = undefined;
const drift: any = undefined;
const falconR3: any = undefined;
const frostR2: any = undefined;
const gammaR3: any = undefined;
const harborR3: any = undefined;
const indigoR3: any = undefined;
const knollR2: any = undefined;
const lunarR2: any = undefined;
const marbleR2: any = undefined;
const oliveR3: any = undefined;
const questR2: any = undefined;
const reef: any = undefined;
const reefR3: any = undefined;
const riverR20: any = undefined;
const sageR3: any = undefined;
const topazR19: any = undefined;
const waveR16: any = undefined;
const waveR2: any = undefined;
const xenonR2: any = undefined;

function $r(riverR7, slateR7, timberR7 = waveR16, umbraR7) {
  let valeR24 = reefR3(slateR7, umbraR7),
    apexR24 = riverR7.linesByWidth.get(valeR24);
  if (apexR24) return apexR24;
  let brookR24 =
    riverR7.kind === "text"
      ? drift(
          riverR7.element,
          slateR7,
          timberR7,
          riverR7.defaultTabStopTwips,
          umbraR7,
        )
      : [];
  return (riverR7.linesByWidth.set(valeR24, brookR24), brookR24);
}
function vaporR3(glideR7, honeyR7, irisR7, jewelR7 = waveR16, lunarR7) {
  let quartzR25 = reefR3(irisR7, lunarR7),
    riverR25 = glideR7.measurementsByWidth.get(quartzR25);
  if (riverR25) return riverR25;
  let slateR25 = reef(
    glideR7.element,
    glideR7.kind,
    honeyR7,
    irisR7,
    jewelR7,
    lunarR7,
  );
  return (glideR7.measurementsByWidth.set(quartzR25, slateR25), slateR25);
}
function copper(deltaR7, echoR7, gammaR7, harborR7 = waveR16, indigoR7) {
  let knollR24 = knollR2(deltaR7.element, gammaR7),
    mossR24 = reefR3(knollR24, indigoR7),
    northR24 = deltaR7.tableMeasurementsByWidth.get(mossR24);
  if (northR24) return northR24;
  let orbitR24 = questR2(deltaR7.element, echoR7, knollR24, harborR7, indigoR7);
  return (deltaR7.tableMeasurementsByWidth.set(mossR24, orbitR24), orbitR24);
}
function delta(kelpR4, lotusR4, mintR4) {
  let tideR21 = lotusR4.columns.xPositions[mintR4] ?? lotusR4.contentLeftPx,
    unityR21 = lotusR4.columns.widths[mintR4] ?? lotusR4.contentWidthPx;
  if (kelpR4.kind === "table") {
    let jasperR26 = gamma(kelpR4.element, lotusR4);
    if (jasperR26 !== undefined) return jasperR26;
    let kelpR26 = echo(kelpR4.element, tideR21, unityR21);
    return kelpR26 === undefined ? lunarR2(kelpR4.element, tideR21) : kelpR26;
  }
  if (deltaR3(kelpR4.kind)) {
    let lotusR26 = gamma(kelpR4.element, lotusR4);
    if (lotusR26 !== undefined) return lotusR26;
    let mintR26 = echo(kelpR4.element, tideR21, unityR21);
    return mintR26 === undefined ? xenonR2(kelpR4.element, tideR21) : mintR26;
  }
  return tideR21;
}
function echo(tideR5, valeR5, waveR5) {
  if (!_r(tideR5)) return;
  let novaR23 = tideR5.placement;
  if (novaR23 === undefined) return;
  let oliveR23 = novaR23.horizontalAlignment?.trim().toLowerCase();
  if (!oliveR23) return;
  let prismR23 = marbleR2(tideR5).widthPx;
  return oliveR23 === "center"
    ? valeR5 + Math.max(0, (waveR5 - prismR23) / 2)
    : oliveR23 === "right"
      ? valeR5 + Math.max(0, waveR5 - prismR23)
      : valeR5;
}
function falcon(quillR5, reefR5, sageR5) {
  let lemonR23 = harborR3(reefR5.element) && !gammaR3(reefR5.element);
  if (!lemonR23 && !indigoR3(reefR5.element)) return;
  let { leftPx, rightPx, topPx, bottomPx } = workbookJ(reefR5.element);
  waveR2(quillR5, {
    leftPx: sageR5.xPx - leftPx,
    rightPx: sageR5.xPx + sageR5.widthPx + rightPx,
    topPx: sageR5.yPx - topPx,
    bottomPx: sageR5.yPx + sageR5.heightPx + bottomPx,
    emptyTextOnly: lemonR23,
  });
}
function gamma(zephyrR13, acornR13) {
  if (zephyrR13.placement?.type !== riverR20) return;
  let yellowR20 = zephyrR13.placement.horizontalRelativeFrom
      ?.trim()
      .toLowerCase(),
    zincR20 =
      zephyrR13.bbox?.widthEmu !== undefined && zephyrR13.bbox.widthEmu > 0
        ? zephyrR13.bbox.widthEmu * workbookE
        : 0;
  if (
    zephyrR13.placement.xOffsetEmu !== undefined &&
    Number.isFinite(zephyrR13.placement.xOffsetEmu)
  ) {
    let slateR14 = zephyrR13.placement.xOffsetEmu * workbookE;
    return yellowR20 === "page" ? slateR14 : acornR13.contentLeftPx + slateR14;
  }
  let amberR20 = zephyrR13.placement.horizontalAlignment?.trim().toLowerCase();
  if (!amberR20) return;
  let basaltR20 = yellowR20 === "page",
    daisyR20 = basaltR20 ? 0 : acornR13.contentLeftPx,
    emberR20 = basaltR20 ? acornR13.pageWidthPx : acornR13.contentWidthPx;
  return amberR20 === "center"
    ? daisyR20 + Math.max(0, (emberR20 - zincR20) / 2)
    : amberR20 === "right"
      ? daisyR20 + Math.max(0, emberR20 - zincR20)
      : daisyR20;
}
function harbor(acornR10) {
  return (
    acornR10.firstParagraphSpaceBeforePx > 0 ||
    acornR10.lastParagraphSpaceAfterPx > 0
  );
}
function indigo({
  lineIndex,
  trailingSpaceAfterPx,
  firstParagraphSpaceBeforePx,
}) {
  return lineIndex === 0
    ? workbookJ(trailingSpaceAfterPx, firstParagraphSpaceBeforePx)
    : 0;
}
function jade(stormR10) {
  return stormR10
    ? stormR10.segments.some((item) => (item.text ?? "").trim().length > 0)
    : false;
}
function kite(slateR4, timberR4, umbraR4) {
  let mintR21 = (timberR5) => {
      let ultraR22 = timberR4,
        vaporR22 = 0,
        wheatR22 = false;
      for (; ultraR22 < slateR4.length; ) {
        let alphaR25 = slateR4[ultraR22],
          copperR25 = Math.max(1, alphaR25?.heightPx ?? 0);
        if (vaporR22 + copperR25 > umbraR4 + topazR19) break;
        if (
          ((vaporR22 += copperR25),
          (ultraR22 += 1),
          timberR5 && alphaR25?.flowBreakAfter)
        ) {
          wheatR22 = true;
          break;
        }
      }
      return {
        nextLineIndex: ultraR22,
        fragmentHeightPx: vaporR22,
        endsWithFlowBreak: wheatR22,
      };
    },
    novaR21 = mintR21(true);
  if (!novaR21.endsWithFlowBreak) return novaR21;
  let oliveR21 = mintR21(false);
  return oliveR21.nextLineIndex < slateR4.length ? oliveR21 : novaR21;
}
function ui({
  lines,
  startIndex,
  currentY,
  boundaryBottomPx,
  pageContentBottomPx,
  pageFootnoteIds,
  preparedFootnotes,
  footnoteWidthPx,
  theme,
}) {
  if (preparedFootnotes.idsByReferenceRunId.size === 0)
    return kite(lines, startIndex, Math.max(0, boundaryBottomPx - currentY));
  let valeR19 = startIndex,
    waveR19 = 0,
    apexR19 = false,
    brookR19 = [...pageFootnoteIds],
    cliffR19 = new Set(brookR19);
  for (; valeR19 < lines.length; ) {
    let onyxR22 = lines[valeR19],
      pearlR22 = [...brookR19],
      quartzR22 = new Set(cliffR19);
    for (let frostR14 of oliveR3(onyxR22, preparedFootnotes))
      quartzR22.has(frostR14) ||
        (pearlR22.push(frostR14), quartzR22.add(frostR14));
    let slateR22 =
        pearlR22.length > 0
          ? sageR3(preparedFootnotes, pearlR22, footnoteWidthPx, theme)
              .reservedHeightPx
          : 0,
      timberR22 = Math.min(boundaryBottomPx, pageContentBottomPx - slateR22),
      umbraR22 = Math.max(0, timberR22 - currentY),
      violetR22 = Math.max(1, onyxR22?.heightPx ?? 0);
    if (waveR19 + violetR22 > umbraR22 + topazR19) break;
    if (
      ((waveR19 += violetR22),
      (valeR19 += 1),
      (brookR19 = pearlR22),
      (cliffR19 = quartzR22),
      onyxR22?.flowBreakAfter)
    ) {
      apexR19 = true;
      break;
    }
  }
  return {
    nextLineIndex: valeR19,
    fragmentHeightPx: waveR19,
    endsWithFlowBreak: apexR19,
  };
}
function lemon(onyxR10) {
  return typeof onyxR10 == "number" && Number.isFinite(onyxR10) && onyxR10 > 1
    ? Math.floor(onyxR10)
    : 1;
}
function nickel(harborR10, indigoR10, jadeR10) {
  let elmR13 = 0;
  for (let driftR14 = indigoR10; driftR14 < jadeR10; driftR14 += 1)
    elmR13 += Math.max(1, harborR10[driftR14] ?? 0);
  return elmR13;
}
function onyx(irisR6, jewelR6, knollR6) {
  if (knollR6 <= jewelR6) return false;
  for (let vaporR25 = jewelR6; vaporR25 < knollR6; vaporR25 += 1) {
    let quartzR26 = irisR6[vaporR25];
    if (quartzR26)
      for (let questR13 of quartzR26.cells) {
        let yellowR14 = lemon(questR13.rowSpan);
        if (Math.min(irisR6.length, vaporR25 + yellowR14) > knollR6)
          return false;
      }
  }
  return true;
}
function pearl(quillR8, reefR8, topazR8) {
  let waveR25 = quillR8.length - reefR8,
    apexR25 = Math.max(1, Math.min(topazR8, waveR25));
  for (let sageR14 = reefR8 + apexR25; sageR14 <= quillR8.length; sageR14 += 1)
    if (onyx(quillR8, reefR8, sageR14)) return sageR14 - reefR8;
  return apexR25;
}
function quartz(elmR7) {
  let mintR25 = elmR7.table;
  if (
    !mintR25 ||
    mintR25.rows.length <= 1 ||
    mintR25.properties?.firstRow !== true
  )
    return 0;
  let novaR25 = mintR25.rows[0];
  return novaR25 ? +!novaR25.cells.some((item) => lemon(item.rowSpan) > 1) : 0;
}
function river(cedarR6, daisyR6, emberR6, flintR6) {
  let alphaR24 = cedarR6.table;
  if (!alphaR24) return cedarR6;
  let bravoR24 =
      daisyR6 > 0 && flintR6 > 0 ? alphaR24.rows.slice(0, flintR6) : [],
    copperR24 = alphaR24.rows.slice(daisyR6, daisyR6 + emberR6);
  return {
    ...cedarR6,
    bbox: cedarR6.bbox
      ? {
          ...cedarR6.bbox,
          heightEmu: undefined,
        }
      : cedarR6.bbox,
    table: {
      ...alphaR24,
      rows: [...bravoR24, ...copperR24],
    },
  };
}
function _i({
  preparedElement,
  rowOffset,
  availableHeight,
  isFreshPageSlot,
  ctx,
  widthPx,
  theme,
  documentGridLinePitchTwips,
}) {
  let amberR18 = preparedElement.element.table;
  if (
    !amberR18 ||
    amberR18.rows.length === 0 ||
    rowOffset >= amberR18.rows.length
  )
    return {
      rowCount: 0,
      widthPx,
      heightPx: 0,
    };
  let basaltR18 = amberR18.rows,
    cedarR18 = copper(
      preparedElement,
      ctx,
      widthPx,
      theme,
      documentGridLinePitchTwips,
    ),
    emberR18 = amberR18.properties?.keepTogether === true,
    flintR18 = quartz(preparedElement.element),
    garnetR18 = rowOffset > 0 ? nickel(cedarR18.rowHeightsPx, 0, flintR18) : 0,
    hazelR18 =
      rowOffset === 0 && flintR18 > 0 && amberR18.rows.length > flintR18
        ? flintR18 + 1
        : 1,
    ivoryR18 = Math.min(hazelR18, amberR18.rows.length - rowOffset);
  if (emberR18) {
    let yarnR22 = amberR18.rows.length - rowOffset,
      acornR22 =
        garnetR18 +
        nickel(cedarR18.rowHeightsPx, rowOffset, amberR18.rows.length);
    if (!isFreshPageSlot && acornR22 > availableHeight + topazR19)
      return {
        rowCount: 0,
        widthPx: cedarR18.widthPx,
        heightPx: 0,
      };
    let bloomR22 = river(preparedElement.element, rowOffset, yarnR22, flintR18),
      coralR22 = reef(bloomR22, "table", ctx, widthPx, theme);
    return {
      element: bloomR22,
      rowCount: yarnR22,
      widthPx: coralR22.widthPx,
      heightPx: coralR22.heightPx > 0 ? coralR22.heightPx : acornR22,
    };
  }
  let jasperR18 = garnetR18,
    kelpR18 = 0,
    lotusR18 = 0;
  for (
    let daisyR25 = rowOffset;
    daisyR25 < amberR18.rows.length;
    daisyR25 += 1
  ) {
    jasperR18 += Math.max(1, cedarR18.rowHeightsPx[daisyR25] ?? 0);
    let xenonR26 = daisyR25 - rowOffset + 1;
    if (jasperR18 > availableHeight + topazR19) break;
    xenonR26 >= ivoryR18 &&
      onyx(basaltR18, rowOffset, daisyR25 + 1) &&
      ((kelpR18 = xenonR26), (lotusR18 = jasperR18));
  }
  if (kelpR18 === 0) {
    if (!isFreshPageSlot)
      return {
        rowCount: 0,
        widthPx: cedarR18.widthPx,
        heightPx: 0,
      };
    kelpR18 = pearl(basaltR18, rowOffset, ivoryR18);
    lotusR18 =
      garnetR18 + nickel(cedarR18.rowHeightsPx, rowOffset, rowOffset + kelpR18);
  }
  let mintR18 = river(preparedElement.element, rowOffset, kelpR18, flintR18),
    novaR18 = reef(mintR18, "table", ctx, widthPx, theme);
  return {
    element: mintR18,
    rowCount: kelpR18,
    widthPx: novaR18.widthPx,
    heightPx: novaR18.heightPx > 0 ? novaR18.heightPx : lotusR18,
  };
}
function slate(isleR7) {
  if ((isleR7.paragraphs?.length ?? 0) !== 1) return false;
  let sageR25 = isleR7.paragraphs?.[0];
  return sageR25
    ? (sageR25.runs ?? []).every(
        (item) => (item.text ?? "").trim().length === 0,
      )
    : false;
}
function timber(basaltR11, daisyR11) {
  return slate(basaltR11)
    ? daisyR11.length > 0 && daisyR11.every((item) => !jade(item))
    : false;
}
function umbra(irisR9) {
  let unityR26 = irisR9.paragraphs ?? [];
  return (
    unityR26.length === 1 &&
    unityR26[0]?.docxSectionBreakCarrier === true &&
    slate(irisR9)
  );
}
function violet(brookR7) {
  return brookR7
    ? brookR7.segments.length === 0 &&
        brookR7.widthPx === 0 &&
        brookR7.baselineOffsetPx === 0 &&
        brookR7.maxAscentPx === 0 &&
        brookR7.maxDescentPx === 0
    : false;
}
function willow({
  lineIndex,
  lines,
  previousElementWasEmptyParagraph,
  previousEmptyParagraphHasSpacing,
  firstParagraphSpaceBeforePx,
}) {
  return lineIndex !== 0 ||
    firstParagraphSpaceBeforePx <= 0 ||
    !violet(lines[0])
    ? false
    : previousElementWasEmptyParagraph && previousEmptyParagraphHasSpacing;
}
function yellow(northR8, orbitR8) {
  let echoR26 = northR8[orbitR8];
  return echoR26
    ? falconR3(echoR26.kind)
      ? !(
          gammaR3(echoR26.element) ||
          harborR3(echoR26.element) ||
          (indigoR3(echoR26.element) && !frostR2(echoR26.element))
        )
      : true
    : false;
}
function zinc(
  lemonR8,
  willowR8,
  hazelR8,
  sageR8,
  eagleR8,
  pineR8 = waveR16,
  elmR8,
) {
  let lotusR19 = 0;
  for (let ultraR19 = hazelR8 + 1; ultraR19 < willowR8.length; ultraR19 += 1) {
    let lunarR19 = willowR8[ultraR19];
    if (!lunarR19 || !yellow(willowR8, ultraR19)) continue;
    if (lunarR19.kind !== "text")
      return (
        lotusR19 + vaporR3(lunarR19, sageR8, eagleR8, pineR8, elmR8).heightPx
      );
    let mossR19 = $r(lunarR19, eagleR8, pineR8, elmR8),
      northR19 = timber(lunarR19.element, mossR19),
      orbitR19 = bravoR3({
        previousParagraphStyleId: lemonR8.lastParagraphStyleId,
        currentParagraphStyleId: lunarR19.firstParagraphStyleId,
        currentParagraphUsesContextualSpacing:
          lunarR19.firstParagraphUsesContextualSpacing,
      });
    if (!northR19 && lunarR19.firstParagraphSpaceBeforePx <= 0 && lotusR19 <= 0)
      return;
    let questR19 =
      willow({
        lineIndex: 0,
        lines: mossR19,
        previousElementWasEmptyParagraph: true,
        previousEmptyParagraphHasSpacing: harbor(lemonR8),
        firstParagraphSpaceBeforePx: lunarR19.firstParagraphSpaceBeforePx,
      }) || orbitR19
        ? 1
        : 0;
    if (questR19 >= mossR19.length) return lotusR19;
    let ridgeR19 = mossR19
      .slice(questR19)
      .reduce(
        (accumulator, current) => accumulator + Math.max(1, current.heightPx),
        0,
      );
    if (northR19) {
      lotusR19 += ridgeR19;
      continue;
    }
    return lotusR19 + ridgeR19;
  }
}
