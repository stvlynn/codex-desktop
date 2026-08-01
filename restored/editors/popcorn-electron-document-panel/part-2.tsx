// Restored from ref/webview/assets/PopcornElectronDocumentPanel-Cz-nyTbC.js
// Wave GA — full polished body from `PopcornElectronDocumentPanel-Cz-nyTbC/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 17 (verified 103/120).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 2/65
/* split-lane-import-depth:1 */

import { ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import { jsxRuntime as getJsxRuntime, react } from "../../boundaries/react-cjs-runtime";
import { __workbookT, _workbookT, workbookA, workbookB, workbookC, workbookD, workbookE, workbookF, workbookG, WorkbookI, workbookIt, workbookJ, workbookK, workbookL, workbookLt, workbookM, workbookN, workbookNt, workbookO, workbookOt, workbookP, workbookQ, WorkbookR, workbookRt, workbookS, workbookSt, workbookU, workbookUnderscore, workbookV, workbookW, WorkbookW, workbookX, workbookY, workbookZ } from "../../workbook/editor-compat";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureFeatureCatalogAtomsInit, ensureFeatureCatalogInit, getFeatureCatalogEntries, PopcornFindBar } from "../feature-catalog";
import { ensurePopcornPageNumberNavigationInit, PopcornPageNumberNavigation } from "../popcorn-page-number-navigation";
import { ensureRemoteTextEditSessionInit, RemoteTextEditSessionA, RemoteTextEditSessionB, RemoteTextEditSessionC, RemoteTextEditSessionChrome, RemoteTextEditSessionE, RemoteTextEditSessionF, RemoteTextEditSessionH, RemoteTextEditSessionI, RemoteTextEditSessionLowerT, RemoteTextEditSessionM, RemoteTextEditSessionN, RemoteTextEditSessionO, RemoteTextEditSessionP, RemoteTextEditSessionR, RemoteTextEditSessionS, RemoteTextEditSessionSurfaceKind, RemoteTextEditSessionU, RemoteTextEditSessionV, RemoteTextEditSessionW, RemoteTextEditSessionX, RemoteTextEditSessionY, RemoteTextEditSessionZoomControl } from "../remote-text-edit-session/index";

// Wave5d soft stubs.
const bravo: any = undefined;
const m: any = undefined;
const marble: any = undefined;
const o: any = undefined;
const u: any = undefined;
const valeR22: any = undefined;

function xenon(unityR12) {
  return JSON.stringify(unityR12, marble);
}
var ivoryR15,
  topazR15 = esmInit(() => {
    ivoryR15 = class {
      #e;
      #t;
      reset() {
        this.#e = undefined;
        this.#t = undefined;
      }
      getPages(pineR7, questR7, ridgeR7 = "default") {
        let yellowR25 = `${ridgeR7}:${xenon(pineR7)}`;
        if (yellowR25 === this.#e && this.#t) return this.#t;
        let zincR25 = questR7(pineR7);
        return this.#e = yellowR25, this.#t = zincR25, zincR25;
      }
    };
  }),
  frostR15,
  questR15,
  elmR15 = esmInit(() => {
    workbookD();
    workbookK();
    frostR15 = class {
      #e;
      constructor(quartzR10, riverR10) {
        this.#e = structuredClone(quartzR10);
        riverR10?.addParagraphs(quartzR10.paragraphs);
      }
      get id() {
        return this.#e.id ?? "";
      }
      toProto() {
        return structuredClone(this.#e);
      }
    };
    questR15 = class {
      #e = [];
      #t;
      #n;
      #r;
      #i;
      constructor(bravoR6) {
        this.#t = bravoR6.documentId ?? "";
        this.#n = bravoR6.textElementId ?? "";
        this.#r = bravoR6.resolveTextRange;
        this.#i = bravoR6.onMutated;
        let driftR23 = bravoR6.endnotes ?? [];
        this.#e = driftR23.map(item => new frostR15(item, bravoR6.fontFamilyCache));
      }
      get items() {
        return [...this.#e];
      }
      add(orbitR5, pineR5) {
        let cedarR23 = this.#a(orbitR5),
          daisyR23 = this.#o(pineR5.range),
          emberR23 = {
            id: workbookF(),
            paragraphs: cedarR23,
            referenceTextRange: daisyR23,
            referenceRunIds: []
          },
          flintR23 = new frostR15(emberR23);
        return this.#e.push(flintR23), this.#i?.(), flintR23;
      }
      replace(yellowR11) {
        this.#e = yellowR11.map(item => new frostR15(item));
        this.#i?.();
      }
      toProto() {
        return this.#e.map(item => item.toProto());
      }
      #a(jadeR12) {
        return workbookQ(jadeR12) ? workbookE(jadeR12) : workbookE([String(jadeR12)]);
      }
      #o(alphaR7) {
        let glideR24 = this.#r(alphaR7);
        if (glideR24) return {
          slideId: this.#t,
          elementId: this.#n,
          startCp: glideR24.startCp,
          length: glideR24.length
        };
      }
    };
  }),
  gammaR16,
  slateR16 = esmInit(() => {
    valeR22();
    gammaR16 = class {
      #e;
      #t;
      constructor(pineR10 = [], ridgeR10 = {}) {
        this.#e = bravo(pineR10);
        this.#t = ridgeR10.onMutated;
      }
      get items() {
        return bravo(this.#e);
      }
      getByName(garnetR9) {
        if (!garnetR9) return;
        let vaporR26 = this.#e.find(item => item.name === garnetR9);
        return vaporR26 ? bravo(vaporR26) : undefined;
      }
      set(groveR6) {
        let eagleR24 = bravo(groveR6),
          frostR24 = this.#e.findIndex(item => item.name === eagleR24.name);
        return frostR24 >= 0 ? this.#e[frostR24] = eagleR24 : this.#e.push(eagleR24), this.#t?.(), bravo(eagleR24);
      }
      delete(falconR9) {
        let flintR26 = this.#e.findIndex(item => item.name === falconR9);
        return flintR26 < 0 ? false : (this.#e.splice(flintR26, 1), this.#t?.(), true);
      }
      replace(kiteR12) {
        this.#e = bravo(kiteR12);
        this.#t?.();
      }
      toProto() {
        return bravo(this.#e);
      }
    };
  }),
  daisyR16,
  oliveR16,
  $t = esmInit(() => {
    workbookD();
    workbookK();
    daisyR16 = class {
      #e;
      constructor(jadeR11, kiteR11) {
        this.#e = jadeR11;
        kiteR11?.addParagraphs(jadeR11.paragraphs);
      }
      get id() {
        return this.#e.id ?? "";
      }
      toProto() {
        return {
          ...this.#e,
          referenceRunIds: this.#e.referenceRunIds ?? [],
          paragraphs: this.#e.paragraphs ? this.#e.paragraphs.map(item => ({
            ...item,
            runs: item.runs?.map(mintR13 => ({
              ...mintR13
            })) ?? []
          })) : []
        };
      }
    };
    oliveR16 = class {
      #e = [];
      #t;
      #n;
      #r;
      #i;
      constructor(alphaR6) {
        this.#t = alphaR6.documentId ?? "";
        this.#n = alphaR6.textElementId ?? "";
        this.#r = alphaR6.resolveTextRange;
        this.#i = alphaR6.onMutated;
        let coralR23 = alphaR6.footnotes ?? [];
        this.#e = coralR23.map(item => new daisyR16(item, alphaR6.fontFamilyCache));
      }
      add(questR5, ridgeR5) {
        let garnetR23 = this.#a(questR5),
          hazelR23 = this.#o(ridgeR5.range),
          jasperR23 = {
            id: workbookF(),
            paragraphs: garnetR23,
            referenceTextRange: hazelR23,
            referenceRunIds: []
          },
          kelpR23 = new daisyR16(jasperR23);
        return this.#e.push(kelpR23), this.#i?.(), kelpR23;
      }
      toProto() {
        return this.#e.map(item => item.toProto());
      }
      #a(lemonR12) {
        return workbookQ(lemonR12) ? workbookE(lemonR12) : workbookE([String(lemonR12)]);
      }
      #o(bravoR7) {
        let honeyR24 = this.#r(bravoR7);
        if (honeyR24) return {
          slideId: this.#t,
          elementId: this.#n,
          startCp: honeyR24.startCp,
          length: honeyR24.length
        };
      }
    };
  });
function ivory(onyxR11) {
  let hazelR14 = onyxR11 === undefined ? 1 : Math.floor(onyxR11);
  return hazelR14 > 1 ? hazelR14 : 1;
}
function topaz(hillR8) {
  for (let tideR26 of hillR8) for (let gammaR14 of tideR26.cells ?? []) if (gammaR14.horizontalMerge === false || gammaR14.verticalMerge === false) return true;
  return false;
}
function frost(fernR10) {
  return fernR10.map(item => ({
    ...item,
    cells: item.cells.map(_item => ({
      ..._item
    }))
  }));
}
function quest(groveR3) {
  for (let daisyR21 of groveR3) for (let glideR21 = 0; glideR21 < daisyR21.cells.length; glideR21 += 1) {
    let waveR21 = daisyR21.cells[glideR21];
    if (!waveR21 || waveR21.horizontalMerge !== true) {
      waveR21?.horizontalMerge === false && (waveR21.horizontalMerge = true);
      continue;
    }
    let apexR21 = ivory(waveR21.gridSpan),
      brookR21 = glideR21 + 1;
    for (; brookR21 < daisyR21.cells.length;) {
      let riverR26 = daisyR21.cells[brookR21];
      if (!riverR26 || riverR26.horizontalMerge !== false) break;
      apexR21 += ivory(riverR26.gridSpan);
      riverR26.horizontalMerge = true;
      brookR21 += 1;
    }
    apexR21 > 1 && (waveR21.gridSpan = apexR21);
    waveR21.horizontalMerge = undefined;
  }
}
function elm(cliffR6) {
  let ultraR24 = [],
    vaporR24 = 0;
  for (let honeyR25 of cliffR6.cells ?? []) {
    if (!honeyR25 || honeyR25.horizontalMerge === true) continue;
    let amberR26 = ivory(honeyR25.gridSpan);
    ultraR24.push({
      cell: honeyR25,
      columnIndex: vaporR24,
      columnSpan: amberR26
    });
    vaporR24 += amberR26;
  }
  return ultraR24;
}
function on(frostR10) {
  let elmR19 = new Map(),
    fernR19 = new Set();
  for (let unityR20 of frostR10) {
    let fernR20 = elm(unityR20);
    for (let jadeR21 of fernR20) {
      let {
        cell,
        columnIndex,
        columnSpan
      } = jadeR21;
      if (cell.verticalMerge === true) {
        let orbitR25 = {
          cell,
          rowSpan: 1
        };
        fernR19.add(orbitR25);
        for (let northR14 = 0; northR14 < columnSpan; northR14 += 1) elmR19.set(columnIndex + northR14, orbitR25);
        cell.verticalMerge = undefined;
        continue;
      }
      if (cell.verticalMerge === false) {
        let jasperR25 = elmR19.get(columnIndex);
        if (jasperR25) {
          jasperR25.rowSpan += 1;
          for (let orbitR14 = 0; orbitR14 < columnSpan; orbitR14 += 1) elmR19.set(columnIndex + orbitR14, jasperR25);
        }
        cell.verticalMerge = true;
        continue;
      }
      for (let pineR14 = 0; pineR14 < columnSpan; pineR14 += 1) elmR19.delete(columnIndex + pineR14);
    }
  }
  let groveR19 = new Set();
  for (let basaltR26 of fernR19) groveR19.has(basaltR26.cell) || (groveR19.add(basaltR26.cell), basaltR26.rowSpan > 1 && (basaltR26.cell.rowSpan = Math.max(ivory(basaltR26.cell.rowSpan), basaltR26.rowSpan)));
}
function gammaR1(daisyR8) {
  let lunarR25 = daisyR8.table;
  if (!lunarR25 || lunarR25.rows.length === 0 || !topaz(lunarR25.rows)) return daisyR8;
  let mossR25 = frost(lunarR25.rows);
  return quest(mossR25), on(mossR25), {
    ...daisyR8,
    table: {
      ...lunarR25,
      rows: mossR25
    }
  };
}
var acornR16 = esmInit(() => {});
function riverR1(jadeR13) {
  return workbookNt(jadeR13, lunarR16);
}
function daisyR1(basaltR12) {
  return riverR1(new workbookM({
    stub: () => {}
  }, basaltR12));
}
function oliveR1(jadeR5, kiteR5, lemonR5, marbleR5 = waveR16) {
  return !jadeR5.paragraphs || jadeR5.paragraphs.length === 0 ? 0 : WorkbookI(jadeR5, kiteR5, marbleR5, undefined, {
    mode: "layout",
    bboxPx: {
      x: 0,
      y: 0,
      width: Math.max(1, lemonR5),
      height: 1e5
    },
    paddingPx: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    wrap: true,
    paragraphSpacingUnit: "twips"
  })?.height ?? Math.max(18, jadeR5.paragraphs.length * 18);
}
var lunarR16,
  waveR16,
  bravoR17 = esmInit(() => {
    workbookRt();
    workbookZ();
    workbookL();
    lunarR16 = {
      accent1: "accent1",
      accent2: "accent2",
      accent3: "accent3",
      accent4: "accent4",
      accent5: "accent5",
      accent6: "accent6",
      bg1: "lt1",
      tx1: "dk1",
      bg2: "lt2",
      tx2: "dk2",
      hlink: "hlink",
      folHlink: "folHlink"
    };
    waveR16 = workbookNt(new workbookM({
      stub: () => {}
    }, undefined), lunarR16);
  }),
  marbleR17,
  xenonR17,
  _n = esmInit(() => {
    marbleR17 = "__docxField:PAGE__";
    xenonR17 = "__docxField:NUMPAGES__";
  });
function acornR1(nickelR12) {
  if (!(nickelR12 === undefined || nickelR12 <= 0)) return nickelR12 * workbookE;
}
function lunarR1(lotusR11) {
  if (!(lotusR11 === undefined || !Number.isFinite(lotusR11))) return lotusR11 * workbookE;
}
function waveR1(brookR9, cliffR9) {
  if (brookR9) {
    for (let prismR14 of brookR9.split(";")) if (prismR14.startsWith(cliffR9)) return prismR14.slice(cliffR9.length);
  }
}
function bravoR2(slateR9, timberR9, umbraR9) {
  return slateR9.placement?.type === timberR9 && slateR9.placement.anchorParagraphId ? slateR9.placement.anchorParagraphId : waveR1(slateR9.id, umbraR9);
}
function marbleR2(ivoryR5, jasperR5 = {
  widthPx: ivoryR17,
  heightPx: ultraR17
}) {
  if (!ivoryR5.bbox) return jasperR5;
  let echoR23 = acornR1(ivoryR5.bbox.widthEmu),
    falconR23 = acornR1(ivoryR5.bbox.heightEmu);
  return echoR23 !== undefined && falconR23 !== undefined ? {
    widthPx: echoR23,
    heightPx: falconR23
  } : echoR23 === undefined ? falconR23 === undefined ? jasperR5 : {
    widthPx: 1,
    heightPx: falconR23
  } : {
    widthPx: echoR23,
    heightPx: 1
  };
}
function xenonR2(coralR12, driftR12) {
  return lunarR1(coralR12.bbox?.xEmu) ?? driftR12;
}
function ivoryR2(eagleR12, glideR12) {
  return lunarR1(eagleR12.bbox?.yEmu) ?? glideR12;
}
function topazR2(topazR6, ultraR6) {
  let marbleR24 = bravoR2(topazR6, ridgeR17, fernR17),
    nickelR24 = lunarR1(topazR6.placement?.yOffsetEmu) ?? lunarR1(topazR6.bbox?.yEmu) ?? 0;
  if (topazR6.placement?.verticalRelativeFrom?.trim().toLowerCase() === "page") return nickelR24;
  if (!marbleR24) return;
  let onyxR24 = ultraR6.get(marbleR24);
  if (onyxR24 !== undefined) return onyxR24 + nickelR24;
}
function eagleR2(amberR9, basaltR9) {
  let sageR26 = bravoR2(amberR9, glideR17, harborR18);
  if (!sageR26) return;
  let topazR26 = basaltR9.get(sageR26);
  if (topazR26 !== undefined) return topazR26 + (lunarR1(amberR9.bbox?.yEmu) ?? 0);
}
function frostR2(honeyR12) {
  return bravoR2(honeyR12, glideR17, harborR18) !== undefined;
}
function glideR2(lemonR13) {
  return marbleR2(lemonR13);
}
var ivoryR17,
  ultraR17,
  glideR17,
  ridgeR17,
  fernR17,
  harborR18,
  slateR18 = esmInit(() => {
    workbookJ();
    ivoryR17 = 180;
    ultraR17 = 120;
    glideR17 = 1;
    ridgeR17 = 2;
    fernR17 = "__docxAnchorParagraphId:";
    harborR18 = "__docxInlineParagraphId:";
  });
function honeyR2(onyxR13) {
  return WorkbookW(onyxR13);
}
function irisR2(marbleR13) {
  return marbleR13 / workbookE;
}
var daisyR18 = esmInit(() => {
  __workbookT();
  workbookJ();
});
function jewelR2(copperR7) {
  let irisR24 = copperR7.table;
  if (!irisR24 || irisR24.rows.length === 0) return 0;
  let jewelR24 = 0;
  for (let xenonR14 of irisR24.rows) xenonR14.heightEmu && xenonR14.heightEmu > 0 ? jewelR24 += xenonR14.heightEmu * workbookE : jewelR24 += oliveR18;
  return Math.max(jewelR24, irisR24.rows.length * oliveR18);
}
function knollR2(riverR8, slateR8) {
  let frostR25 = riverR8.bbox?.widthEmu !== undefined && riverR8.bbox.widthEmu > 0 ? riverR8.bbox.widthEmu * workbookE : undefined;
  return frostR25 && Number.isFinite(frostR25) && frostR25 > 0 ? frostR25 : slateR8;
}
function lunarR2(prismR9, quillR9) {
  let eagleR26 = prismR9.bbox?.xEmu === undefined ? undefined : prismR9.bbox.xEmu * workbookE;
  return eagleR26 !== undefined && Number.isFinite(eagleR26) ? eagleR26 : quillR9;
}
function mossR2(glideR11, honeyR11, irisR11, jewelR11 = waveR16, knollR11) {
  return questR2(glideR11, honeyR11, irisR11, jewelR11, knollR11).heightPx;
}
function northR2(glideR3, honeyR3, irisR3, knollR3, lunarR3) {
  let tideR20 = glideR3.table;
  if (!(!tideR20 || tideR20.rows.length === 0)) return workbookL(gammaR1({
    ...glideR3,
    type: m.ELEMENT_TYPE_TABLE,
    bbox: {
      xEmu: 0,
      yEmu: 0,
      widthEmu: irisR2(Math.max(1, irisR3)),
      heightEmu: glideR3.bbox?.heightEmu
    }
  }), honeyR3, knollR3, {
    paragraphSpacingUnit: "twips",
    explicitRowHeightBehavior: "atLeast",
    autoRowMinimumHeightPx: 0,
    fitColumnWidthsToFrame: true,
    drawDefaultCellBorders: false,
    collapseParagraphBoundarySpacing: false,
    documentGridLinePitchTwips: lunarR3
  });
}
function pineR2(hazelR9) {
  let wheatR26 = hazelR9.table;
  return wheatR26 ? wheatR26.rows.map(item => item.heightEmu && item.heightEmu > 0 ? item.heightEmu * workbookE : oliveR18) : [];
}
function questR2(valeR4, waveR4, apexR4, brookR4 = waveR16, elmR4) {
  let xenonR22 = valeR4.table;
  if (!xenonR22 || xenonR22.rows.length === 0) return {
    widthPx: apexR4,
    heightPx: 0,
    rowHeightsPx: []
  };
  let yellowR22 = northR2(valeR4, waveR4, apexR4, brookR4, elmR4),
    zincR22 = pineR2(valeR4),
    amberR22 = yellowR22?.rowHeightsPx.length === xenonR22.rows.length ? yellowR22.rowHeightsPx : zincR22,
    basaltR22 = jewelR2(valeR4),
    daisyR22 = yellowR22 && yellowR22.heightPx > 0 ? yellowR22.heightPx : amberR22.reduce((accumulator, current) => accumulator + current, 0);
  return {
    widthPx: apexR4,
    heightPx: daisyR22 > 0 ? daisyR22 : basaltR22,
    rowHeightsPx: amberR22
  };
}
var oliveR18,
  acornR18 = esmInit(() => {
    u();
    workbookM();
    workbookJ();
    bravoR17();
    daisyR18();
    acornR16();
    oliveR18 = 24;
  });
function ridgeR2() {
  return [];
}
function stormR2(irisR12) {
  return irisR12.map(item => ({
    ...item
  }));
}
function tideR2(alphaR12, copperR12, deltaR12, echoR12) {
  return alphaR12 < echoR12 - 0.01 && deltaR12 < copperR12 - 0.01;
}
function unityR2(timberR8, umbraR8) {
  return timberR8.emptyTextOnly === umbraR8.emptyTextOnly && tideR2(timberR8.leftPx, timberR8.rightPx, umbraR8.leftPx, umbraR8.rightPx) && tideR2(timberR8.topPx, timberR8.bottomPx, umbraR8.topPx, umbraR8.bottomPx);
}
