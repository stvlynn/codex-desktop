// Restored from ref/webview/assets/PopcornElectronDocumentPanel-Cz-nyTbC.js
// Wave GA — full polished body from `PopcornElectronDocumentPanel-Cz-nyTbC/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 17 (verified 103/120).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 3/65
/* split-lane-import-depth:1 */

import { ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import { jsxRuntime as getJsxRuntime, react } from "../../boundaries/react-cjs-runtime";
import { __workbookT, _workbookT, workbookA, workbookB, workbookC, workbookD, workbookE, workbookF, workbookG, WorkbookI, workbookIt, workbookJ, workbookK, workbookL, workbookLt, workbookM, workbookN, workbookNt, workbookO, workbookOt, workbookP, workbookQ, WorkbookR, workbookRt, workbookS, workbookSt, workbookU, workbookUnderscore, workbookV, workbookW, WorkbookW, workbookX, workbookY, workbookZ } from "../../workbook/editor-compat";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureFeatureCatalogAtomsInit, ensureFeatureCatalogInit, getFeatureCatalogEntries, PopcornFindBar } from "../feature-catalog";
import { ensurePopcornPageNumberNavigationInit, PopcornPageNumberNavigation } from "../popcorn-page-number-navigation";
import { ensureRemoteTextEditSessionInit, RemoteTextEditSessionA, RemoteTextEditSessionB, RemoteTextEditSessionC, RemoteTextEditSessionChrome, RemoteTextEditSessionE, RemoteTextEditSessionF, RemoteTextEditSessionH, RemoteTextEditSessionI, RemoteTextEditSessionLowerT, RemoteTextEditSessionM, RemoteTextEditSessionN, RemoteTextEditSessionO, RemoteTextEditSessionP, RemoteTextEditSessionR, RemoteTextEditSessionS, RemoteTextEditSessionSurfaceKind, RemoteTextEditSessionU, RemoteTextEditSessionV, RemoteTextEditSessionW, RemoteTextEditSessionX, RemoteTextEditSessionY, RemoteTextEditSessionZoomControl } from "../remote-text-edit-session/index";

// Wave5d soft stubs.
const cedarR20: any = undefined;
const drift: any = undefined;
const eagleR19: any = undefined;
const eagleR2: any = undefined;
const frostR2: any = undefined;
const honeyR2: any = undefined;
const ivoryR2: any = undefined;
const m: any = undefined;
const novaR20: any = undefined;
const riverR20: any = undefined;
const tideR2: any = undefined;
const topazR2: any = undefined;
const umbra: any = undefined;
const unityR2: any = undefined;
const zephyrR20: any = undefined;

function valeR2(jewelR12, knollR12) {
  return !jewelR12.emptyTextOnly || knollR12;
}
function waveR2(tideR3, valeR3) {
  let deltaR21 = {
      ...valeR3
    },
    echoR21 = true;
  for (; echoR21;) {
    echoR21 = false;
    for (let ridgeR22 = tideR3.length - 1; ridgeR22 >= 0; --ridgeR22) {
      let reefR23 = tideR3[ridgeR22];
      !reefR23 || !unityR2(reefR23, deltaR21) || (deltaR21.leftPx = Math.min(deltaR21.leftPx, reefR23.leftPx), deltaR21.rightPx = Math.max(deltaR21.rightPx, reefR23.rightPx), deltaR21.topPx = Math.min(deltaR21.topPx, reefR23.topPx), deltaR21.bottomPx = Math.max(deltaR21.bottomPx, reefR23.bottomPx), tideR3.splice(ridgeR22, 1), echoR21 = true);
    }
  }
  tideR3.push(deltaR21);
  tideR3.sort((marbleR10, nickelR10) => Math.abs(marbleR10.topPx - nickelR10.topPx) > 0.01 ? marbleR10.topPx - nickelR10.topPx : marbleR10.leftPx - nickelR10.leftPx);
}
function $n(jewelR13, knollR13, lunarR13, zephyrR3, acornR3, bloomR3 = 0, coralR3 = false) {
  let bloomR20 = knollR13 + lunarR13,
    coralR20 = zephyrR3,
    driftR20 = Math.max(0, bloomR3);
  for (;;) {
    let timberR21 = jewelR13.find(item => valeR2(item, coralR3) && tideR2(knollR13, bloomR20, item.leftPx, item.rightPx) && coralR20 >= item.topPx - 0.01 && coralR20 < item.bottomPx - 0.01);
    if (!timberR21) {
      let pineR22 = jewelR13.filter(item => valeR2(item, coralR3) && tideR2(knollR13, bloomR20, item.leftPx, item.rightPx) && item.topPx > coralR20 + 0.01).sort((willowR13, xenonR13) => willowR13.topPx - xenonR13.topPx)[0],
        questR22 = Math.min(acornR3, pineR22?.topPx ?? acornR3);
      if (!pineR22 || questR22 - coralR20 >= driftR20 - 0.01) return {
        currentY: coralR20,
        boundaryBottomPx: questR22
      };
      coralR20 = pineR22.bottomPx;
      continue;
    }
    coralR20 = timberR21.bottomPx;
  }
}
var lunarR18 = esmInit(() => {});
function apexR2(brookR3) {
  return brookR3.type === m.ELEMENT_TYPE_TABLE || brookR3.table ? "table" : brookR3.type === m.ELEMENT_TYPE_CHART || brookR3.type === m.ELEMENT_TYPE_CHART_REFERENCE || brookR3.chartReference ? "chart" : brookR3.type === m.ELEMENT_TYPE_IMAGE || brookR3.type === m.ELEMENT_TYPE_IMAGE_REFERENCE || brookR3.imageReference || brookR3.image ? "image" : brookR3.type === m.ELEMENT_TYPE_SHAPE || brookR3.shape ? "shape" : brookR3.type === m.ELEMENT_TYPE_GROUP || (brookR3.children?.length ?? 0) > 0 ? "group" : "text";
}
function brookR2(eagleR10, glideR10) {
  let umbraR14 = eagleR10.columns.widths.map(() => glideR10);
  return umbraR14.length > 0 ? umbraR14 : [glideR10];
}
function duskR2(duskR9, elmR9 = 0) {
  let valeR13 = duskR9.columns.widths.map(() => 0);
  return valeR13.length === 0 ? [elmR9] : (valeR13[0] = elmR9, valeR13);
}
function elmR2(pineR9, questR9 = false) {
  let ridgeR13 = pineR9.columns.widths.map(() => false);
  return ridgeR13.length === 0 ? [questR9] : (ridgeR13[0] = questR9, ridgeR13);
}
function fernR2(ridgeR9, stormR9) {
  let stormR13 = ridgeR9.columns.widths.map(() => undefined);
  return stormR13.length === 0 ? [stormR9] : (stormR13[0] = stormR9, stormR13);
}
function groveR2(tideR9, unityR9) {
  let tideR13 = tideR9.columns.widths.map(() => undefined);
  return tideR13.length === 0 ? [unityR9] : (tideR13[0] = unityR9, tideR13);
}
function or(cedarR7, daisyR7) {
  return {
    xPx: cedarR7.columns.xPositions[daisyR7] ?? cedarR7.contentLeftPx,
    yPx: cedarR7.contentTopPx,
    widthPx: cedarR7.columns.widths[daisyR7] ?? cedarR7.contentWidthPx,
    heightPx: cedarR7.contentBottomPx - cedarR7.contentTopPx
  };
}
function hillR2({
  settings,
  sectionIndex,
  sourceElementIndex,
  fragmentIndex,
  columnIndex,
  lineStartIndex,
  lineEndIndex,
  rowStartIndex,
  rowEndIndex,
  balanced
}) {
  return {
    sectionIndex: sectionIndex + 1,
    sourceElementIndex: sourceElementIndex + 1,
    fragmentIndex,
    columnIndex: columnIndex + 1,
    columnFrame: or(settings, columnIndex),
    lineStartIndex,
    lineEndIndex,
    rowStartIndex,
    rowEndIndex,
    balanced,
    documentGridLinePitchTwips: settings.documentGridLinePitchTwips,
    documentGridLinePitchPx: settings.documentGridLinePitchTwips === undefined ? undefined : honeyR2(settings.documentGridLinePitchTwips)
  };
}
function isleR2(jasperR11, kelpR11) {
  let novaR14 = (jasperR11.get(kelpR11) ?? 0) + 1;
  return jasperR11.set(kelpR11, novaR14), novaR14;
}
function alphaR3(hillR9, isleR9) {
  let waveR13 = hillR9?.trim().toLowerCase(),
    apexR13 = isleR9?.trim().toLowerCase();
  return !!waveR13 && waveR13 === apexR13;
}
function bravoR3({
  previousParagraphStyleId,
  currentParagraphStyleId,
  currentParagraphUsesContextualSpacing
}) {
  return currentParagraphUsesContextualSpacing && alphaR3(previousParagraphStyleId, currentParagraphStyleId);
}
function copperR3(emberR10, flintR10, garnetR10) {
  for (let reefR14 of emberR10.paragraphs ?? []) reefR14.id && !garnetR10.has(reefR14.id) && garnetR10.set(reefR14.id, flintR10);
}
function deltaR3(valeR10) {
  return valeR10 === "image" || valeR10 === "shape" || valeR10 === "group" || valeR10 === "chart";
}
function falconR3(ridgeR12) {
  return deltaR3(ridgeR12) || ridgeR12 === "table";
}
function gammaR3(slateR12) {
  return slateR12.placement?.behindDocument === true;
}
function harborR3(pearlR11) {
  return pearlR11.placement?.type === riverR20 && pearlR11.placement.wrap?.type === cedarR20;
}
function indigoR3(quartzR11) {
  return quartzR11.placement?.type === riverR20 && quartzR11.placement.wrap?.type === novaR20;
}
function _r(jewelR8) {
  if (!jadeR3(jewelR8)) return false;
  let bravoR26 = jewelR8.placement?.horizontalAlignment?.trim().toLowerCase();
  return bravoR26 === "left" || bravoR26 === "center" || bravoR26 === "right";
}
function jadeR3(timberR12) {
  return timberR12.placement?.type === eagleR19 && !frostR2(timberR12);
}
function kiteR3(honeyR4, irisR4, jewelR4, knollR4, lunarR4 = 0) {
  if (falconR3(honeyR4.kind)) {
    let jewelR22 = eagleR2(honeyR4.element, jewelR4);
    if (jewelR22 !== undefined) return jewelR22;
    if (jadeR3(honeyR4.element)) return irisR4 + workbookJ(honeyR4.element).topPx;
    if (frostR2(honeyR4.element) && knollR4 !== undefined) return knollR4 + (honeyR4.element.bbox?.yEmu ?? 0) * workbookE;
    let lunarR22 = topazR2(honeyR4.element, jewelR4);
    if (lunarR22 !== undefined) return marbleR3(honeyR4.element) ? lunarR4 + lunarR22 : lunarR22;
    let mossR22 = ivoryR2(honeyR4.element, irisR4);
    return lemonR3(honeyR4.element) ? lunarR4 + mossR22 : mossR22;
  }
  return irisR4;
}
function lemonR3(zincR11) {
  return zincR11.bbox?.yEmu !== undefined && Number.isFinite(zincR11.bbox.yEmu);
}
function marbleR3(reefR9) {
  return reefR9.placement?.type === riverR20 && reefR9.placement.verticalRelativeFrom?.trim().toLowerCase() === "page";
}
function nickelR3(umbraR12, violetR12) {
  return Math.max(0, violetR12 - umbraR12.contentTopPx);
}
function onyxR3(harborR9, indigoR9, jadeR9, kiteR9) {
  return falconR3(harborR9.kind) && (gammaR3(harborR9.element) || indigoR3(harborR9.element) || harborR3(harborR9.element)) ? indigoR9 : Math.max(indigoR9, jadeR9 + kiteR9 + quartzR3(harborR9.element));
}
function quartzR3(zephyrR12) {
  return jadeR3(zephyrR12) ? workbookJ(zephyrR12).bottomPx : 0;
}
function riverR3(fernR5, groveR5) {
  if (fernR5.widths.length !== groveR5.widths.length) return true;
  for (let indigoR25 = 0; indigoR25 < fernR5.widths.length; indigoR25 += 1) if (Math.abs((fernR5.widths[indigoR25] ?? 0) - (groveR5.widths[indigoR25] ?? 0)) > 0.5 || Math.abs((fernR5.xPositions[indigoR25] ?? 0) - (groveR5.xPositions[indigoR25] ?? 0)) > 0.5) return true;
  return false;
}
function slateR3(eagleR9) {
  return eagleR9.sections.length > 0 ? eagleR9.sections.flatMap(item => item.elements ?? []) : eagleR9.elements ?? [];
}
function timberR3(glideR6, honeyR6) {
  for (let apexR14 of glideR6.paragraphs ?? []) honeyR6(apexR14);
  let willowR24 = glideR6.table;
  if (willowR24) for (let pearlR26 of willowR24.rows) for (let mossR26 of pearlR26.cells) {
    for (let brookR14 of mossR26.paragraphs ?? []) honeyR6(brookR14);
    for (let stormR14 of mossR26.elements ?? []) timberR3(stormR14, honeyR6);
  }
}
function umbraR3(questR8, ridgeR8, stormR8) {
  let falconR26 = questR8,
    gammaR26 = new Set();
  for (; falconR26 && !gammaR26.has(falconR26);) {
    gammaR26.add(falconR26);
    let mintR14 = ridgeR8.get(falconR26);
    if (mintR14) return mintR14;
    falconR26 = stormR8.get(falconR26);
  }
}
function violetR3(hillR7) {
  let prismR25 = hillR7?.replace(/%[0-9]+/g, "").trim();
  if (!prismR25) return;
  if (prismR25 === "o") return "◦";
  let quillR25 = prismR25.codePointAt(0);
  return quillR25 === 61623 ? "•" : quillR25 === 61607 ? "▪" : prismR25;
}
function willowR3(waveR3, apexR3) {
  let falconR21 = apexR3 ?? "",
    gammaR21 = falconR21.startsWith("[") && falconR21.endsWith("]"),
    harborR21 = falconR21.endsWith(")"),
    indigoR21 = falconR21.endsWith(".");
  switch (waveR3) {
    case "decimal":
      return gammaR21 ? "arabicBracketBoth" : !indigoR21 && !harborR21 ? "arabicPlain" : "arabicPeriod";
    case "lowerLetter":
      return harborR21 ? "alphaLcParenR" : "alphaLcPeriod";
    case "upperLetter":
      return harborR21 ? "alphaUcParenR" : "alphaUcPeriod";
    case "lowerRoman":
      return "romanLcPeriod";
    case "upperRoman":
      return "romanUcPeriod";
    default:
      return;
  }
}
function xenonR3(prismR4, quillR4, sageR4) {
  let bravoR22 = prismR4?.levels?.find(yellowR13 => (yellowR13.level ?? 0) === quillR4);
  if (!bravoR22) return;
  if (bravoR22.numberFormat === "bullet") {
    let ultraR26 = violetR3(bravoR22.levelText);
    return ultraR26 ? {
      startAt: sageR4,
      paragraphStyle: {
        bulletCharacter: ultraR26,
        tabStops: []
      }
    } : undefined;
  }
  let copperR22 = willowR3(bravoR22.numberFormat, bravoR22.levelText);
  if (copperR22) return {
    startAt: sageR4,
    paragraphStyle: {
      autoNumberType: copperR22,
      autoNumberStartAt: sageR4,
      tabStops: []
    }
  };
}
function yellowR3(flintR7, garnetR7, hazelR7) {
  let hillR24 = flintR7?.autoNumberStartAt;
  if (typeof hillR24 == "number" && hillR24 > 0) return hillR24;
  let isleR24 = garnetR7?.levels?.find(zincR13 => (zincR13.level ?? 0) === hazelR7)?.startAt;
  return typeof isleR24 == "number" && isleR24 > 0 ? isleR24 : 1;
}
function zincR3(yarnR5) {
  let echoR19 = new Map(),
    falconR19 = new Map(),
    gammaR19 = new Map(),
    harborR19 = new Map(),
    indigoR19 = new Map(),
    jadeR19 = new Map(),
    kiteR19 = new Set();
  for (let zephyrR14 of yarnR5.textStyles ?? []) zephyrR14.id && gammaR19.set(zephyrR14.id, zephyrR14.basedOn);
  for (let tideR23 of yarnR5.numberingDefinitions ?? []) {
    tideR23?.numId && harborR19.set(tideR23.numId, tideR23);
    for (let cedarR25 of tideR23?.levels ?? []) cedarR25?.paragraphStyleId && tideR23?.numId && falconR19.set(cedarR25.paragraphStyleId, {
      numId: tideR23.numId,
      level: Math.max(0, cedarR25.level ?? 0)
    });
  }
  for (let indigoR14 of yarnR5.paragraphNumberings ?? []) indigoR14?.paragraphId && indigoR14.numId && echoR19.set(indigoR14.paragraphId, indigoR14);
  for (let kiteR21 of slateR3(yarnR5)) timberR3(kiteR21, riverR4 => {
    if (!riverR4.id || kiteR19.has(riverR4.id)) return;
    kiteR19.add(riverR4.id);
    let emberR21 = echoR19.get(riverR4.id) ?? umbraR3(riverR4.styleId, falconR19, gammaR19);
    if (!emberR21?.numId) return;
    let flintR21 = Math.max(0, emberR21.level ?? 0),
      garnetR21 = harborR19.get(emberR21.numId),
      ivoryR21 = indigoR19.get(emberR21.numId) ?? [];
    for (let knollR14 = flintR21 + 1; knollR14 < ivoryR21.length; knollR14 += 1) ivoryR21[knollR14] = undefined;
    ivoryR21[flintR21] === undefined && (ivoryR21[flintR21] = yellowR3(riverR4.paragraphStyle, garnetR21, flintR21));
    let jasperR21 = ivoryR21[flintR21] ?? 1;
    jadeR19.set(riverR4.id, {
      startAt: jasperR21,
      paragraphStyle: xenonR3(garnetR21, flintR21, jasperR21)?.paragraphStyle
    });
    ivoryR21[flintR21] = jasperR21 + 1;
    indigoR19.set(emberR21.numId, ivoryR21);
  });
  return jadeR19;
}
function basaltR3(prismR6, quillR6, reefR6) {
  let lemonR24 = workbookLt(prismR6, quillR6);
  if (lemonR24) return prismR6?.autoNumberType && (prismR6.marginLeft === undefined && (lemonR24.marginLeft = undefined), prismR6.indent === undefined && (lemonR24.indent = undefined)), reefR6 !== undefined && (lemonR24.autoNumberStartAt = reefR6), lemonR24;
}
function cedarR3(coralR8, driftR8, frostR8) {
  let hillR25 = coralR8.paragraphs ?? [];
  if (hillR25.length === 0) return coralR8;
  let isleR25 = daisyR3(hillR25, driftR8, frostR8);
  return isleR25.changed ? {
    ...coralR8,
    paragraphs: isleR25.paragraphs
  } : coralR8;
}
function daisyR3(kiteR4, violetR4, garnetR4, reefR4 = {}) {
  let quillR18 = false;
  return {
    paragraphs: kiteR4.map(item => {
      let driftR18 = item.id ? garnetR4.get(item.id) : undefined,
        eagleR18 = driftR18?.startAt,
        frostR18 = violetR4(item.styleId);
      if (!frostR18) {
        if (eagleR18 === undefined) return item;
        let riverR23 = basaltR3(item.paragraphStyle, undefined, undefined),
          slateR23 = workbookLt(driftR18?.paragraphStyle, riverR23);
        return slateR23 && eagleR18 !== undefined && slateR23.autoNumberType && (slateR23.autoNumberStartAt = eagleR18), slateR23 === item.paragraphStyle ? item : (quillR18 = true, {
          ...item,
          paragraphStyle: slateR23
        });
      }
      let glideR18 = emberR3(item.textStyle, frostR18.textStyle, reefR4.preserveDirectTextStyle === true),
        honeyR18 = frostR18.contextualSpacing ? WorkbookR(glideR18) : glideR18,
        irisR18 = basaltR3(item.paragraphStyle, frostR18.paragraphStyle, undefined),
        jewelR18 = workbookLt(driftR18?.paragraphStyle, irisR18);
      jewelR18 && eagleR18 !== undefined && jewelR18.autoNumberType && (jewelR18.autoNumberStartAt = eagleR18);
      let knollR18 = flintR3(item.runs, reefR4.preserveDirectTextStyle === true ? glideR18 : frostR18.textStyle),
        mossR18 = item.spaceBefore ?? frostR18.spaceBefore,
        northR18 = item.spaceAfter ?? frostR18.spaceAfter,
        orbitR18 = {
          ...item,
          textStyle: honeyR18,
          paragraphStyle: jewelR18,
          runs: knollR18,
          ...(mossR18 === undefined ? {} : {
            spaceBefore: mossR18
          }),
          ...(northR18 === undefined ? {} : {
            spaceAfter: northR18
          })
        };
      return (orbitR18.textStyle !== item.textStyle || orbitR18.paragraphStyle !== item.paragraphStyle || orbitR18.runs !== item.runs || orbitR18.spaceBefore !== item.spaceBefore || orbitR18.spaceAfter !== item.spaceAfter) && (quillR18 = true), orbitR18;
    }),
    changed: quillR18
  };
}
function emberR3(zephyrR6, acornR6, bloomR6 = false) {
  if (!bloomR6) {
    let pearlR25 = {};
    return zephyrR6?.alignment !== undefined && (pearlR25.alignment = zephyrR6.alignment), zephyrR6?.scheme !== undefined && (pearlR25.scheme = zephyrR6.scheme), Object.keys(pearlR25).length === 0 ? acornR6 : workbookS(pearlR25, acornR6);
  }
  return workbookS(zephyrR6, acornR6);
}
function flintR3(copperR6, deltaR6) {
  if (!copperR6 || !deltaR6) return copperR6;
  let {
    alignment,
    ...rest
  } = deltaR6;
  if (Object.keys(rest).length === 0) return copperR6;
  let eagleR23 = false,
    glideR23 = copperR6.map(item => {
      let pineR13 = workbookS(item.textStyle, rest);
      return pineR13 === item.textStyle ? item : (eagleR23 = true, {
        ...item,
        textStyle: pineR13
      });
    });
  return eagleR23 ? glideR23 : copperR6;
}
function garnetR3(xenonR4, yellowR4, zincR4) {
  let yarnR21 = xenonR4.table;
  if (!yarnR21 || yarnR21.rows.length === 0) return xenonR4;
  let zephyrR21 = false,
    acornR21 = yarnR21.rows.map(item => {
      let stormR22 = false,
        tideR22 = item.cells.map(_item => {
          let reefR24 = _item.paragraphs ?? [];
          if (reefR24.length === 0) return _item;
          let sageR24 = daisyR3(reefR24, yellowR4, zincR4, {
            preserveDirectTextStyle: true
          });
          return sageR24.changed ? (stormR22 = true, {
            ..._item,
            paragraphs: sageR24.paragraphs
          }) : _item;
        });
      return stormR22 ? (zephyrR21 = true, {
        ...item,
        cells: tideR22
      }) : item;
    });
  return zephyrR21 ? {
    ...xenonR4,
    table: {
      ...yarnR21,
      rows: acornR21
    }
  } : xenonR4;
}
function hazelR3(zincR10, amberR10, basaltR10) {
  return garnetR3(zincR10.paragraphs && zincR10.paragraphs.length > 0 ? cedarR3(zincR10, amberR10, basaltR10) : zincR10, amberR10, basaltR10);
}
function ivoryR3(emberR12, flintR12, garnetR12) {
  return emberR12.map(item => hazelR3(item, flintR12, garnetR12));
}
function jasperR3(xenonR12, ivoryR12, topazR12, frostR12) {
  return xenonR12.map(item => {
    let slateR20 = hazelR3(item, ivoryR12, topazR12),
      timberR20 = slateR20.paragraphs ?? [],
      umbraR20 = timberR20.length > 0 ? workbookF({
        element: slateR20,
        unit: "twips"
      }) : {
        firstParagraphSpaceBeforePx: 0,
        lastParagraphSpaceAfterPx: 0
      },
      violetR20 = timberR20[0],
      willowR20 = timberR20[timberR20.length - 1];
    return {
      element: slateR20,
      kind: apexR2(slateR20),
      linesByWidth: new Map(),
      measurementsByWidth: new Map(),
      tableMeasurementsByWidth: new Map(),
      defaultTabStopTwips: frostR12,
      docxSectionBreakCarrier: umbra(slateR20),
      firstParagraphSpaceBeforePx: umbraR20.firstParagraphSpaceBeforePx,
      lastParagraphSpaceAfterPx: umbraR20.lastParagraphSpaceAfterPx,
      firstParagraphStyleId: violetR20?.styleId,
      lastParagraphStyleId: willowR20?.styleId,
      firstParagraphUsesContextualSpacing: workbookOt(violetR20?.textStyle)
    };
  });
}
function kelpR3(jasperR8, kelpR8) {
  return {
    id: jasperR8,
    type: m.ELEMENT_TYPE_TEXT,
    paragraphs: kelpR8,
    effects: [],
    children: [],
    levelsStyles: [],
    citations: []
  };
}
function mintR3(jadeR4, lemonR4, marbleR4, nickelR4) {
  let yellowR21 = new Map(),
    zincR21 = new Map();
  for (let lotusR22 of jadeR4.footnotes ?? []) {
    if (lotusR22.id === undefined || lotusR22.id.length === 0) continue;
    let glideR22 = jasperR3([kelpR3(`docx-footnote-${lotusR22.id}`, lotusR22.paragraphs ?? [])], lemonR4, marbleR4, nickelR4)[0];
    if (glideR22) {
      yellowR21.set(lotusR22.id, glideR22.element);
      for (let cliffR25 of lotusR22.referenceRunIds ?? []) {
        let honeyR26 = zincR21.get(cliffR25);
        if (honeyR26) {
          honeyR26.push(lotusR22.id);
          continue;
        }
        zincR21.set(cliffR25, [lotusR22.id]);
      }
    }
  }
  return {
    elementById: yellowR21,
    idsByReferenceRunId: zincR21,
    layoutByKey: new Map()
  };
}
function novaR3() {
  return {
    ids: [],
    idSet: new Set()
  };
}
function oliveR3(zincR6, amberR6) {
  if (!zincR6) return [];
  let fernR23 = [],
    groveR23 = new Set();
  for (let reefR25 of zincR6.segments) {
    let indigoR26 = reefR25.run.id;
    if (indigoR26 === undefined) continue;
    let jadeR26 = amberR6.idsByReferenceRunId.get(indigoR26);
    if (jadeR26) for (let mossR14 of jadeR26) groveR23.has(mossR14) || (groveR23.add(mossR14), fernR23.push(mossR14));
  }
  return fernR23;
}
function prismR3(vaporR8, wheatR8, yarnR8, zephyrR8) {
  let duskR25 = [],
    elmR25 = new Set();
  for (let riverR14 = wheatR8; riverR14 < yarnR8; riverR14 += 1) for (let acornR14 of oliveR3(vaporR8[riverR14], zephyrR8)) elmR25.has(acornR14) || (elmR25.add(acornR14), duskR25.push(acornR14));
  return duskR25;
}
function quillR3(tideR11, unityR11) {
  return `${Math.round(unityR11 * 1e3)}|${tideR11.join(",")}`;
}
function reefR3(elmR11, fernR11) {
  return `${Math.round(elmR11 * 1e3)}|${fernR11 ?? ""}`;
}
function sageR3(daisyR4, emberR4, flintR4, hazelR4) {
  let irisR21 = quillR3(emberR4, flintR4),
    jewelR21 = daisyR4.layoutByKey.get(irisR21);
  if (jewelR21) return jewelR21;
  let knollR21 = [];
  for (let lemonR14 of emberR4) {
    let jasperR14 = daisyR4.elementById.get(lemonR14);
    jasperR14 && knollR21.push(...(jasperR14.paragraphs ?? []));
  }
  let lunarR21 = kelpR3(`docx-footnotes-${emberR4.join("-")}`, knollR21),
    mossR21 = drift(lunarR21, flintR4, hazelR4),
    northR21 = mossR21.reduce((accumulator, current) => accumulator + Math.max(1, current.heightPx), 0),
    orbitR21 = {
      element: lunarR21,
      lines: mossR21,
      textHeightPx: northR21,
      reservedHeightPx: northR21 > 0 ? northR21 + zephyrR20 : 0
    };
  return daisyR4.layoutByKey.set(irisR21, orbitR21), orbitR21;
}
function topazR3(lunarR9, mossR9, northR9, orbitR9) {
  return lunarR9.ids.length === 0 ? 0 : sageR3(mossR9, lunarR9.ids, northR9.contentWidthPx, orbitR9).reservedHeightPx;
}
function ultraR3(mossR11, northR11, orbitR11, pineR11) {
  return orbitR11.contentBottomPx - topazR3(mossR11, northR11, orbitR11, pineR11);
}
