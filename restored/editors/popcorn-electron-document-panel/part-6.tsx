// Restored from ref/webview/assets/PopcornElectronDocumentPanel-Cz-nyTbC.js
// Wave GA — full polished body from `PopcornElectronDocumentPanel-Cz-nyTbC/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 17 (verified 103/120).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 6/65
/* split-lane-import-depth:1 */

import { ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import { jsxRuntime as getJsxRuntime, react } from "../../boundaries/react-cjs-runtime";
import { __workbookT, _workbookT, workbookA, workbookB, workbookC, workbookD, workbookE, workbookF, workbookG, WorkbookI, workbookIt, workbookJ, workbookK, workbookL, workbookLt, workbookM, workbookN, workbookNt, workbookO, workbookOt, workbookP, workbookQ, WorkbookR, workbookRt, workbookS, workbookSt, workbookU, workbookUnderscore, workbookV, workbookW, WorkbookW, workbookX, workbookY, workbookZ } from "../../workbook/editor-compat";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureFeatureCatalogAtomsInit, ensureFeatureCatalogInit, getFeatureCatalogEntries, PopcornFindBar } from "../feature-catalog";
import { ensurePopcornPageNumberNavigationInit, PopcornPageNumberNavigation } from "../popcorn-page-number-navigation";
import { ensureRemoteTextEditSessionInit, RemoteTextEditSessionA, RemoteTextEditSessionB, RemoteTextEditSessionC, RemoteTextEditSessionChrome, RemoteTextEditSessionE, RemoteTextEditSessionF, RemoteTextEditSessionH, RemoteTextEditSessionI, RemoteTextEditSessionLowerT, RemoteTextEditSessionM, RemoteTextEditSessionN, RemoteTextEditSessionO, RemoteTextEditSessionP, RemoteTextEditSessionR, RemoteTextEditSessionS, RemoteTextEditSessionSurfaceKind, RemoteTextEditSessionU, RemoteTextEditSessionV, RemoteTextEditSessionW, RemoteTextEditSessionX, RemoteTextEditSessionY, RemoteTextEditSessionZoomControl } from "../remote-text-edit-session/index";

// Wave5d soft stubs.
const C: any = undefined;
const apexR18: any = undefined;
const apexR2: any = undefined;
const c: any = undefined;
const cedar: any = undefined;
const copperR19: any = undefined;
const copperR3: any = undefined;
const daisy: any = undefined;
const deltaR3: any = undefined;
const duskR19: any = undefined;
const falconR20: any = undefined;
const flint: any = undefined;
const gamma: any = undefined;
const honeyR2: any = undefined;
const jasperR19: any = undefined;
const kiteR3: any = undefined;
const lunarR2: any = undefined;
const m: any = undefined;
const marbleR17: any = undefined;
const nickelR19: any = undefined;
const nova: any = undefined;
const onyxR3: any = undefined;
const prism: any = undefined;
const prismR3: any = undefined;
const quill: any = undefined;
const reef: any = undefined;
const riverR3: any = undefined;
const sageR3: any = undefined;
const ultra: any = undefined;
const waveR16: any = undefined;
const xenonR17: any = undefined;
const xenonR2: any = undefined;
const yellowR19: any = undefined;
const zephyr: any = undefined;

function acorn(driftR5, eagleR5, frostR5, glideR5, honeyR5, irisR5, knollR5, lunarR5, mossR5, northR5) {
  let zincR23 = {
    kind: eagleR5,
    element: driftR5,
    xPx: frostR5,
    yPx: glideR5,
    widthPx: honeyR5,
    heightPx: irisR5,
    flow: northR5,
    textLines: mossR5
  };
  return eagleR5 === "group" && (zincR23.children = ultra(driftR5, frostR5, glideR5, honeyR5, knollR5, lunarR5)), eagleR5 === "table" && (zincR23.children = zephyr(driftR5, frostR5, glideR5, honeyR5, irisR5, knollR5, lunarR5, northR5)), zincR23;
}
function bloom(deltaR4, echoR4, falconR4, gammaR4, harborR4, indigoR4) {
  if (deltaR4.bodyElements = deltaR4.bodyElements.filter(item => item.flow?.noteKind !== "footnote"), echoR4.ids.length === 0) return;
  let xenonR21 = sageR3(falconR4, echoR4.ids, gammaR4.contentWidthPx, indigoR4);
  xenonR21.textHeightPx <= 0 || deltaR4.bodyElements.push(acorn(xenonR21.element, "text", gammaR4.contentLeftPx, gammaR4.contentBottomPx - xenonR21.textHeightPx, gammaR4.contentWidthPx, xenonR21.textHeightPx, harborR4, indigoR4, xenonR21.lines, {
    noteKind: "footnote",
    noteIds: [...echoR4.ids]
  }));
}
function coral(harborR8, indigoR8, jadeR8, kiteR8, marbleR8, nickelR8, onyxR8, pearlR8, quartzR8) {
  let eagleR25 = false;
  for (let zincR14 of prismR3(kiteR8, marbleR8, nickelR8, jadeR8)) indigoR8.idSet.has(zincR14) || (indigoR8.idSet.add(zincR14), indigoR8.ids.push(zincR14), eagleR25 = true);
  eagleR25 && bloom(harborR8, indigoR8, jadeR8, onyxR8, pearlR8, quartzR8);
}
function drift(topazR5, ultraR5, vaporR5 = waveR16, wheatR5, zephyrR5) {
  return workbookQ(topazR5, vaporR5, {
    bboxPx: {
      x: 0,
      y: 0,
      width: Math.max(1, ultraR5),
      height: 1e5
    },
    paddingPx: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    wrap: true,
    paragraphSpacingUnit: "twips",
    defaultTabStopTwips: wheatR5,
    documentGridLinePitchTwips: zephyrR5
  })?.lines ?? [];
}
function eagle(harborR13, slateR13, daisyR13, oliveR13, vaporR13) {
  let marbleR20 = [],
    nickelR20 = slateR13,
    onyxR20 = new Map(),
    pearlR20;
  for (let [questR20, ridgeR20] of harborR13.entries()) {
    let apexR20 = apexR2(ridgeR20),
      brookR20 = reef(ridgeR20, apexR20, oliveR13, daisyR13.contentWidthPx, vaporR13),
      cliffR20 = apexR20 === "table" ? gamma(ridgeR20, daisyR13) ?? lunarR2(ridgeR20, daisyR13.contentLeftPx) : deltaR3(apexR20) ? gamma(ridgeR20, daisyR13) ?? xenonR2(ridgeR20, daisyR13.contentLeftPx) : daisyR13.contentLeftPx,
      duskR20 = apexR20 === "text" ? nickelR20 : kiteR3({
        element: ridgeR20,
        kind: apexR20
      }, nickelR20, onyxR20, pearlR20);
    if (marbleR20.push(acorn(ridgeR20, apexR20, cliffR20, duskR20, brookR20.widthPx, brookR20.heightPx, oliveR13, vaporR13)), apexR20 === "text") {
      copperR3(ridgeR20, duskR20, onyxR20);
      pearlR20 = duskR20;
      nickelR20 += brookR20.heightPx;
      questR20 < harborR13.length - 1 && (nickelR20 += jasperR19);
      continue;
    }
    let elmR20 = onyxR3({
      element: ridgeR20,
      kind: apexR20
    }, nickelR20, duskR20, brookR20.heightPx);
    elmR20 > nickelR20 && (nickelR20 = elmR20, questR20 < harborR13.length - 1 && (nickelR20 += jasperR19));
  }
  return {
    elements: marbleR20,
    totalHeightPx: Math.max(0, nickelR20 - slateR13)
  };
}
function $i(jewelR5, unityR5, isleR5 = {}) {
  let lemonR19 = jewelR5.pageSetup?.widthEmu || unityR5.widthEmu || apexR18,
    marbleR19 = jewelR5.pageSetup?.heightEmu || unityR5.heightEmu || copperR19,
    onyxR19 = Math.max(1, honeyR2(lemonR19)),
    pearlR19 = Math.max(1, honeyR2(marbleR19)),
    quartzR19 = isleR5.layoutMode === "pageless" ? Math.max(pearlR19, nickelR19) : pearlR19,
    riverR19 = cedar(jewelR5),
    slateR19 = riverR19.leftPx,
    timberR19 = Math.max(1, onyxR19 - riverR19.leftPx - riverR19.rightPx),
    umbraR19 = riverR19.topPx,
    violetR19 = Math.max(umbraR19, quartzR19 - riverR19.bottomPx),
    willowR19 = nova(jewelR5, slateR19, timberR19),
    xenonR19 = prism(jewelR5),
    zincR19 = quill(xenonR19),
    amberR19 = jewelR5.pageSetup?.pageMargin ?? yellowR19;
  return {
    pageWidthPx: onyxR19,
    pageHeightPx: quartzR19,
    basePageHeightPx: pearlR19,
    margins: riverR19,
    contentLeftPx: slateR19,
    contentWidthPx: timberR19,
    contentTopPx: umbraR19,
    contentBottomPx: violetR19,
    columns: willowR19,
    documentGrid: xenonR19,
    documentGridLinePitchTwips: zincR19,
    key: [isleR5.layoutMode ?? "paged", lemonR19, isleR5.layoutMode === "pageless" ? quartzR19 : marbleR19, amberR19.top ?? yellowR19.top, amberR19.bottom ?? yellowR19.bottom, amberR19.left ?? yellowR19.left, amberR19.right ?? yellowR19.right, amberR19.header ?? yellowR19.header, amberR19.footer ?? yellowR19.footer, xenonR19?.type ?? "no-grid-type", xenonR19?.linePitchTwips ?? "no-grid-line-pitch", xenonR19?.charSpaceTwips ?? "no-grid-char-space", zincR19 ?? "no-grid", daisy(jewelR5.id) ? "mirror" : "plain"].join(":")
  };
}
function glide(jadeR7) {
  return jadeR7.startsWithPageBreak === true || jadeR7.breakType === C.SECTION_BREAK_TYPE_NEXT_PAGE || jadeR7.breakType === C.SECTION_BREAK_TYPE_EVEN_PAGE || jadeR7.breakType === C.SECTION_BREAK_TYPE_ODD_PAGE;
}
function honey(emberR7) {
  return (emberR7.elements ?? []).some(item => apexR2(item) === "text" ? (item.paragraphs ?? []).some(_item => (_item.runs ?? []).some(__item => (__item.text ?? "").trim().length > 0)) : true);
}
function iris(hazelR11) {
  return !glide(hazelR11) || honey(hazelR11) ? false : (hazelR11.elements?.length ?? 0) > 0;
}
function jewel(ridgeR3, stormR3) {
  let groveR20 = [],
    hillR20 = false;
  for (let reefR21 of ridgeR3) {
    if (iris(reefR21)) {
      hillR20 ||= glide(reefR21);
      continue;
    }
    let bloomR21 = groveR20[groveR20.length - 1],
      coralR21 = bloomR21 ? $i(bloomR21, stormR3) : undefined,
      driftR21 = $i(reefR21, stormR3),
      eagleR21 = !hillR20 && bloomR21 !== undefined && glide(reefR21) && coralR21?.key === driftR21.key && !riverR3(coralR21.columns, driftR21.columns) && !reefR21.pageSetup && !reefR21.header && !reefR21.footer && !reefR21.firstHeader && !reefR21.firstFooter && !reefR21.differentFirstPage;
    groveR20.push(eagleR21 ? {
      ...reefR21,
      breakType: C.SECTION_BREAK_TYPE_UNSPECIFIED
    } : reefR21);
    hillR20 = false;
  }
  return groveR20;
}
function knoll(fernR9, groveR9) {
  if (fernR9) {
    for (let quillR14 of fernR9.split(";")) if (quillR14.startsWith(groveR9)) return quillR14.slice(groveR9.length);
  }
}
function lunar(cliffR7) {
  switch (cliffR7) {
    case "decimal":
    case "upperRoman":
    case "lowerRoman":
    case "upperLetter":
    case "lowerLetter":
      return cliffR7;
    default:
      return;
  }
}
function moss(coralR5) {
  let timberR23 = coralR5.pageSetup;
  if (timberR23?.pageNumbers) return timberR23.pageNumbers;
  let umbraR23 = knoll(coralR5.id, duskR19),
    violetR23 = umbraR23 ? Number.parseInt(umbraR23, 10) : undefined,
    willowR23 = violetR23 !== undefined && Number.isFinite(violetR23) && violetR23 > 0 ? violetR23 : undefined,
    yellowR23 = lunar(knoll(coralR5.id, falconR20));
  return willowR23 !== undefined || yellowR23 !== undefined ? {
    start: willowR23,
    formatType: yellowR23
  } : undefined;
}
function north(acornR7, bloomR7) {
  let jadeR25 = moss(bloomR7);
  jadeR25 && (jadeR25.formatType && (acornR7.formatType = jadeR25.formatType), jadeR25.start === undefined ? acornR7.nextValue === undefined && (acornR7.nextValue = 1) : acornR7.nextValue = jadeR25.start);
}
function orbit(echoR6, falconR6) {
  let honeyR23 = falconR6 ?? "decimal";
  return honeyR23 === "upperRoman" ? pine(echoR6).toUpperCase() : honeyR23 === "lowerRoman" ? pine(echoR6).toLowerCase() : honeyR23 === "upperLetter" ? ridge(echoR6).toUpperCase() : honeyR23 === "lowerLetter" ? ridge(echoR6).toLowerCase() : String(echoR6);
}
function pine(pearlR5) {
  let prismR22 = [[1e3, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]],
    quillR22 = Math.max(1, Math.floor(pearlR5)),
    reefR22 = "";
  for (let [bloomR14, coralR14] of prismR22) for (; quillR22 >= bloomR14;) {
    reefR22 += coralR14;
    quillR22 -= bloomR14;
  }
  return reefR22;
}
function ridge(duskR7) {
  let kelpR25 = Math.max(1, Math.floor(duskR7)),
    lotusR25 = "";
  for (; kelpR25 > 0;) {
    --kelpR25;
    lotusR25 = String.fromCharCode(65 + kelpR25 % 26) + lotusR25;
    kelpR25 = Math.floor(kelpR25 / 26);
  }
  return lotusR25;
}
function storm(wheatR12, yarnR12) {
  return wheatR12.some(item => tide(item, yarnR12));
}
function tide(basaltR4, cedarR4) {
  return (basaltR4.paragraphs ?? []).some(item => (item.runs ?? []).some(_item => (_item.text ?? "").includes(cedarR4))) || (basaltR4.children ?? []).some(item => tide(item, cedarR4)) ? true : (basaltR4.table?.rows ?? []).some(item => item.cells.some(_item => (_item.text ?? "").includes(cedarR4) || (_item.paragraphs ?? []).some(__item => (__item.runs ?? []).some(___item => (___item.text ?? "").includes(cedarR4))) ? true : (_item.elements ?? []).some(__item => tide(__item, cedarR4))));
}
function unity(acornR8, bloomR8) {
  let groveR25 = slateR10 => slateR10.replaceAll(marbleR17, bloomR8.currentPageText ?? "").replaceAll(xenonR17, bloomR8.totalPagesText ?? "");
  return acornR8.map(item => vale(item, groveR25));
}
function vale(questR10, elmR10) {
  return {
    ...questR10,
    paragraphs: (questR10.paragraphs ?? []).map(item => ({
      ...item,
      runs: (item.runs ?? []).map(_item => ({
        ..._item,
        text: elmR10(_item.text ?? "")
      }))
    })),
    children: (questR10.children ?? []).map(item => vale(item, elmR10)),
    table: questR10.table ? {
      ...questR10.table,
      rows: questR10.table.rows.map(item => ({
        ...item,
        cells: item.cells.map(_item => ({
          ..._item,
          text: _item.text ? elmR10(_item.text) : _item.text,
          paragraphs: (_item.paragraphs ?? []).map(__item => ({
            ...__item,
            runs: (__item.runs ?? []).map(___item => ({
              ...___item,
              text: elmR10(___item.text ?? "")
            }))
          })),
          elements: (_item.elements ?? []).map(__item => vale(__item, elmR10))
        }))
      }))
    } : questR10.table
  };
}
function wave(coralR13, driftR13) {
  let flintR20 = Math.max(driftR13.contentTopPx, driftR13.pageHeightPx - driftR13.margins.footerPx - 18);
  return {
    kind: "text",
    element: {
      id: "",
      type: m.ELEMENT_TYPE_TEXT,
      paragraphs: [{
        id: "",
        runs: [{
          id: "",
          text: coralR13,
          citations: [],
          reviewMarkIds: []
        }],
        textStyle: {
          alignment: c.ALIGNMENT_TYPE_CENTER,
          fontSize: 1e3,
          name: "Times New Roman",
          typeface: "Times New Roman"
        },
        inlineNodes: []
      }],
      effects: [],
      children: [],
      levelsStyles: [],
      citations: []
    },
    xPx: driftR13.contentLeftPx,
    yPx: flintR20,
    widthPx: driftR13.contentWidthPx,
    heightPx: 18
  };
}
function apex(gammaR9, riverR9, cedarR9, novaR9, zephyrR9, knollR9, valeR9, alphaR10) {
  let wheatR19 = storm(cedarR9, "__docxField:PAGE__") || storm(novaR9, "__docxField:PAGE__"),
    yarnR19 = wheatR19 ? orbit(knollR9.nextValue ?? 1, knollR9.formatType) : undefined;
  wheatR19 && (knollR9.nextValue = (knollR9.nextValue ?? 1) + 1);
  let zephyrR19 = unity(cedarR9, {
      currentPageText: yarnR19
    }),
    acornR19 = unity(novaR9, {
      currentPageText: yarnR19
    }),
    bloomR19 = eagle(zephyrR19, Math.max(0, riverR9.margins.headerPx), riverR9, valeR9, alphaR10),
    coralR19 = eagle(acornR19, 0, riverR9, valeR9, alphaR10),
    driftR19 = eagle(acornR19, Math.max(riverR9.contentTopPx, riverR9.pageHeightPx - riverR9.margins.footerPx - coralR19.totalHeightPx), riverR9, valeR9, alphaR10),
    frostR19;
  return zephyrR9 && !wheatR19 && knollR9.nextValue !== undefined && (frostR19 = wave(orbit(knollR9.nextValue, knollR9.formatType), riverR9), knollR9.nextValue += 1), {
    sectionId: gammaR9,
    widthPx: riverR9.pageWidthPx,
    heightPx: riverR9.pageHeightPx,
    layout: flint(riverR9),
    headerElements: bloomR19.elements,
    bodyElements: [],
    footerElements: driftR19.elements,
    pageNumberElement: frostR19
  };
}
