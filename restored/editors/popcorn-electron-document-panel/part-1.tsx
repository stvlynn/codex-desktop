// Restored from ref/webview/assets/PopcornElectronDocumentPanel-Cz-nyTbC.js
// Wave GA — full polished body from `PopcornElectronDocumentPanel-Cz-nyTbC/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 17 (verified 103/120).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 1/65
/* split-lane-import-depth:1 */

import { ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
import { jsxRuntime as getJsxRuntime, react } from "../../boundaries/react-cjs-runtime";
import { __workbookT, _workbookT, workbookA, workbookB, workbookC, workbookD, workbookE, workbookF, workbookG, WorkbookI, workbookIt, workbookJ, workbookK, workbookL, workbookLt, workbookM, workbookN, workbookNt, workbookO, workbookOt, workbookP, workbookQ, WorkbookR, workbookRt, workbookS, workbookSt, workbookU, workbookUnderscore, workbookV, workbookW, WorkbookW, workbookX, workbookY, workbookZ } from "../../boundaries/workbook-runtime/index";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureFeatureCatalogAtomsInit, ensureFeatureCatalogInit, getFeatureCatalogEntries, PopcornFindBar } from "../feature-catalog";
import { ensurePopcornPageNumberNavigationInit, PopcornPageNumberNavigation } from "../popcorn-page-number-navigation";
import { ensureRemoteTextEditSessionInit, RemoteTextEditSessionA, RemoteTextEditSessionB, RemoteTextEditSessionC, RemoteTextEditSessionChrome, RemoteTextEditSessionE, RemoteTextEditSessionF, RemoteTextEditSessionH, RemoteTextEditSessionI, RemoteTextEditSessionLowerT, RemoteTextEditSessionM, RemoteTextEditSessionN, RemoteTextEditSessionO, RemoteTextEditSessionP, RemoteTextEditSessionR, RemoteTextEditSessionS, RemoteTextEditSessionSurfaceKind, RemoteTextEditSessionU, RemoteTextEditSessionV, RemoteTextEditSessionW, RemoteTextEditSessionX, RemoteTextEditSessionY, RemoteTextEditSessionZoomControl } from "../remote-text-edit-session/index";

const IntlProvider: any = undefined;
/** Wave GA unresolved companion (sib-missing:workbook/presentation-protobuf.ts) */
const o: any = undefined;
/** Wave GA unresolved companion (sib-missing:workbook/presentation-protobuf.ts) */
const s: any = undefined;
/** Wave GA unresolved companion (sib-missing:workbook/presentation-protobuf.ts) */
const f: any = undefined;
/** Wave GA unresolved companion (sib-missing:workbook/presentation-protobuf.ts) */
const p: any = undefined;
/** Wave GA unresolved companion (sib-missing:workbook/presentation-protobuf.ts) */
const m: any = undefined;
/** Wave GA unresolved companion (sib-missing:workbook/presentation-protobuf.ts) */
const c: any = undefined;
/** Wave GA unresolved companion (sib-missing:workbook/presentation-protobuf.ts) */
const oStub: any = undefined;
/** Wave GA unresolved companion (sib-missing:workbook/presentation-protobuf.ts) */
const u: any = undefined;
/** Wave GA unresolved companion (sib-missing:workbook/presentation-protobuf.ts) */
const h: any = undefined;
/** Wave GA unresolved companion (sib-missing:workbook/presentation-protobuf.ts) */
const g: any = undefined;
/** Wave GA unresolved companion (sib-missing:workbook/presentation-protobuf.ts) */
const _: any = undefined;
/** Wave GA unresolved companion (sib-missing:workbook/presentation-protobuf.ts) */
const d: any = undefined;
/** Wave GA unresolved companion (sib-missing:workbook/document-protobuf.ts) */
const C: any = undefined;
/** Wave GA unresolved companion (sib-missing:workbook/document-protobuf.ts) */
const oStubDoc: any = undefined;
/** Wave GA unresolved companion (sib-missing:workbook/document-protobuf.ts) */
const w: any = undefined;
/** Wave GA unresolved companion (sib-missing:editors/remote-text-edit-session/index.tsx) */
const remoteTextEditSessionUnderscore: any = undefined;
var mossR13,
  riverR16,
  topazR17 = esmInit(() => {
    _();
    mossR13 = class {
      #e;
      constructor(wheatR11 = []) {
        this.#e = wheatR11.map(item => new riverR16(item));
      }
      get items() {
        return [...this.#e];
      }
      add(harborR6 = {}) {
        let mossR23 = new riverR16({
          id: harborR6.id ?? "",
          tetherId: harborR6.tetherId ?? "",
          targetId: harborR6.targetId ?? "",
          type: harborR6.type ?? oStub.CONTENT_REFERENCE_TYPE_UNSPECIFIED,
          ...harborR6
        });
        return this.#e.push(mossR23), mossR23;
      }
      replace(duskR11) {
        this.#e = duskR11.map(item => new riverR16(item));
      }
      toProto() {
        return this.#e.map(item => item.toProto());
      }
    };
    riverR16 = class {
      #e;
      constructor(lunarR6) {
        this.#e = {
          ...lunarR6,
          id: lunarR6.id ?? "",
          tetherId: lunarR6.tetherId ?? "",
          targetId: lunarR6.targetId ?? "",
          type: lunarR6.type ?? oStub.CONTENT_REFERENCE_TYPE_UNSPECIFIED
        };
      }
      get id() {
        return this.#e.id;
      }
      set id(groveR12) {
        this.#e.id = groveR12;
      }
      get title() {
        return this.#e.title ?? "";
      }
      set title(bloomR12) {
        this.#e.title = bloomR12;
      }
      get uri() {
        return this.#e.uri ?? "";
      }
      set uri(valeR12) {
        this.#e.uri = valeR12;
      }
      get locator() {
        return this.#e.locator ?? "";
      }
      set locator(oliveR12) {
        this.#e.locator = oliveR12;
      }
      get evidence() {
        return this.#e.evidence ?? "";
      }
      set evidence(jasperR12) {
        this.#e.evidence = jasperR12;
      }
      get note() {
        return this.#e.note ?? "";
      }
      set note(pineR12) {
        this.#e.note = pineR12;
      }
      toProto() {
        return structuredClone(this.#e);
      }
    };
  });
function alpha(copperR11) {
  if (!copperR11) return;
  let flintR14 = new __workbookT();
  return __workbookT(flintR14, copperR11), flintR14.toProto();
}
function cedarR1(novaR5) {
  let jadeR23 = novaR5.paragraphStyle ? {
    ...novaR5.paragraphStyle,
    tabStops: novaR5.paragraphStyle.tabStops ?? []
  } : undefined;
  return {
    id: novaR5.id,
    name: novaR5.name,
    basedOn: novaR5.basedOn,
    textStyle: alpha(novaR5.textStyle),
    paragraphStyle: jadeR23,
    spaceBefore: novaR5.spaceBefore,
    spaceAfter: novaR5.spaceAfter,
    tags: []
  };
}
function driftR2() {
  let nickelR26 = new workbookM({
    stub: () => {}
  }, undefined);
  return nickelR26.colorScheme = {
    name: "Office",
    themeColors: {
      ...waveR18
    }
  }, nickelR26.toProto();
}
function orbitR2() {
  return [{
    name: "Aptos",
    family: "swiss",
    embeddedFonts: []
  }, {
    name: "Aptos Display",
    family: "swiss",
    embeddedFonts: []
  }, {
    name: "Times New Roman",
    family: "roman",
    embeddedFonts: []
  }, {
    name: "Cambria Math",
    family: "roman",
    embeddedFonts: []
  }];
}
function cliffR2() {
  return {
    defaultTabStop: 720
  };
}
function echoR3() {
  return [cedarR1({
    id: "Normal",
    name: "Normal",
    textStyle: {
      typeface: "Aptos",
      fontSize: "12pt"
    },
    paragraphStyle: {
      lineSpacingPercent: 115833
    },
    spaceAfter: 160
  }), cedarR1({
    id: "Title",
    name: "Title",
    basedOn: "Normal",
    textStyle: {
      typeface: "Aptos Display",
      fontSize: "28pt",
      color: "#1F1F1F"
    },
    paragraphStyle: {
      lineSpacingPercent: 1e5
    },
    spaceAfter: 80
  }), cedarR1({
    id: "Subtitle",
    name: "Subtitle",
    basedOn: "Normal",
    textStyle: {
      typeface: "Aptos",
      fontSize: "14pt",
      color: "#6B7280"
    },
    paragraphStyle: {
      lineSpacingPercent: 1e5
    },
    spaceAfter: 80
  }), cedarR1({
    id: "Heading1",
    name: "Heading 1",
    basedOn: "Normal",
    textStyle: {
      typeface: "Aptos Display",
      fontSize: "20pt",
      color: "#156082"
    },
    paragraphStyle: {
      lineSpacingPercent: 1e5
    },
    spaceBefore: 360,
    spaceAfter: 80
  }), cedarR1({
    id: "Heading2",
    name: "Heading 2",
    basedOn: "Normal",
    textStyle: {
      typeface: "Aptos Display",
      fontSize: "16pt",
      color: "#156082"
    },
    paragraphStyle: {
      lineSpacingPercent: 1e5
    },
    spaceBefore: 160,
    spaceAfter: 80
  }), cedarR1({
    id: "Quote",
    name: "Quote",
    basedOn: "Normal",
    textStyle: {
      italic: true,
      color: "#6B7280"
    },
    paragraphStyle: {
      lineSpacingPercent: 115833
    },
    spaceBefore: 80,
    spaceAfter: 80
  }), cedarR1({
    id: "IntenseQuote",
    name: "Intense Quote",
    basedOn: "Quote",
    textStyle: {
      bold: true,
      color: "#156082"
    },
    paragraphStyle: {
      lineSpacingPercent: 115833
    },
    spaceBefore: 80,
    spaceAfter: 80
  }), cedarR1({
    id: "ListParagraph",
    name: "List Paragraph",
    basedOn: "Normal",
    paragraphStyle: {
      marginLeft: 457200,
      indent: -228600
    }
  }), cedarR1({
    id: "Caption",
    name: "Caption",
    basedOn: "Normal",
    textStyle: {
      fontSize: "9pt",
      italic: true,
      color: "#6B7280"
    },
    paragraphStyle: {
      lineSpacingPercent: 1e5
    },
    spaceAfter: 80
  })];
}
var waveR18,
  quartzR20 = esmInit(() => {
    workbookL();
    workbookB();
    waveR18 = {
      accent1: "#156082",
      accent2: "#E97132",
      accent3: "#196B24",
      accent4: "#0F9ED5",
      accent5: "#A02B93",
      accent6: "#4EA72E",
      bg1: "#FFFFFF",
      bg2: "#000000",
      tx1: "#1F1F1F",
      tx2: "#FFFFFF",
      dk1: "#000000",
      lt1: "#FFFFFF",
      dk2: "#0E2841",
      lt2: "#E8E8E8",
      hlink: "#467886",
      folHlink: "#96607D"
    };
  });
function pearlR3() {
  return {
    id: "doc-paragraph-1",
    runs: [{
      id: "doc-run-1",
      text: "Start writing here...",
      textStyle: undefined,
      hyperlink: undefined,
      citations: [],
      reviewMarkIds: []
    }],
    inlineNodes: [],
    textStyle: undefined,
    styleId: "Normal"
  };
}
function amberR3() {
  return {
    id: "doc-element-1",
    type: m.ELEMENT_TYPE_TEXT,
    paragraphs: [pearlR3()],
    bbox: undefined,
    zIndex: 0,
    innerXml: "",
    outerXml: "",
    shape: undefined,
    image: undefined,
    chartReference: undefined,
    video: undefined,
    table: undefined,
    name: "",
    placeholderIndex: 0,
    placeholderType: "",
    effects: [],
    children: [],
    levelsStyles: [],
    fill: undefined,
    lineReference: undefined,
    fillReference: undefined,
    effectReference: undefined,
    fontReference: undefined,
    hyperlink: undefined,
    textStyle: undefined,
    citations: []
  };
}
function lotusR3() {
  let reefR19 = amberR3(),
    sageR19 = amberR3();
  return {
    id: "walnut-document",
    name: "New document",
    widthEmu: 12240,
    heightEmu: 15840,
    charts: [],
    elements: [reefR19],
    images: [],
    footnotes: [],
    comments: [],
    commentReferences: [],
    textStyles: echoR3(),
    reviewMarks: [],
    tableStyleDefinitions: [],
    endnotes: [],
    settings: cliffR2(),
    theme: driftR2(),
    fonts: orbitR2(),
    sections: [{
      id: "doc-section-1",
      breakType: C.SECTION_BREAK_TYPE_UNSPECIFIED,
      pageSetup: {
        widthEmu: 12240,
        heightEmu: 15840,
        pageMargin: undefined
      },
      columns: {
        count: 1,
        space: 0,
        widths: [],
        hasSeparatorLine: false
      },
      elements: [sageR19],
      header: undefined,
      footer: undefined,
      startsWithPageBreak: false,
      differentFirstPage: undefined,
      firstHeader: undefined,
      firstFooter: undefined
    }],
    numberingDefinitions: [],
    paragraphNumberings: []
  };
}
var sageR21 = esmInit(() => {
  w();
  u();
  quartzR20();
});
function bravo(isleR12) {
  return structuredClone(isleR12);
}
var valeR22 = esmInit(() => {}),
  riverR24,
  topazR25 = esmInit(() => {
    valeR22();
    riverR24 = class {
      #e;
      #t;
      constructor(lunarR10 = [], mossR10 = {}) {
        this.#e = bravo(lunarR10);
        this.#t = mossR10.onMutated;
      }
      get items() {
        return bravo(this.#e);
      }
      getById(sageR9) {
        if (!sageR9) return;
        let glideR26 = this.#e.find(item => item.id === sageR9);
        return glideR26 ? bravo(glideR26) : undefined;
      }
      set(nickelR7) {
        let questR24 = bravo(nickelR7),
          ridgeR24 = this.#e.findIndex(item => item.id === questR24.id);
        return ridgeR24 >= 0 ? this.#e[ridgeR24] = questR24 : this.#e.push(questR24), this.#t?.(), bravo(questR24);
      }
      delete(marbleR9) {
        let ivoryR26 = this.#e.findIndex(item => item.id === marbleR9);
        return ivoryR26 < 0 ? false : (this.#e.splice(ivoryR26, 1), this.#t?.(), true);
      }
      replace(harborR12) {
        this.#e = bravo(harborR12);
        this.#t?.();
      }
      toProto() {
        return bravo(this.#e);
      }
    };
  }),
  northR13,
  bravoR15 = esmInit(() => {
    valeR22();
    northR13 = class {
      #e;
      #t;
      constructor(northR10 = [], orbitR10 = {}) {
        this.#e = bravo(northR10);
        this.#t = orbitR10.onMutated;
      }
      get items() {
        return bravo(this.#e);
      }
      getByCommentId(lemonR9) {
        if (!lemonR9) return;
        let hazelR26 = this.#e.find(item => item.commentId === lemonR9);
        return hazelR26 ? bravo(hazelR26) : undefined;
      }
      set(stormR6) {
        let mintR24 = bravo(stormR6),
          novaR24 = this.#e.findIndex(item => item.commentId === mintR24.commentId);
        return novaR24 >= 0 ? this.#e[novaR24] = mintR24 : this.#e.push(mintR24), this.#t?.(), bravo(mintR24);
      }
      delete(alphaR9) {
        let willowR26 = this.#e.findIndex(item => item.commentId === alphaR9);
        return willowR26 < 0 ? false : (this.#e.splice(willowR26, 1), this.#t?.(), true);
      }
      replace(indigoR12) {
        this.#e = bravo(indigoR12);
        this.#t?.();
      }
      toProto() {
        return bravo(this.#e);
      }
    };
  }),
  marbleR15,
  xenonR15 = esmInit(() => {
    workbookU();
    marbleR15 = class {
      #e;
      #t;
      #n;
      #r;
      constructor(xenonR6) {
        this.#e = new workbookU({
          people: xenonR6.people ?? [],
          threads: xenonR6.threads ?? []
        });
        this.#t = xenonR6.documentId ?? "";
        this.#n = xenonR6.textElementId ?? "";
        this.#r = xenonR6.resolveTextRange;
      }
      get people() {
        return this.#e.people;
      }
      get threads() {
        return this.#e.threads;
      }
      setSelf(kelpR12) {
        return this.#e.setSelf(kelpR12);
      }
      addThread(vaporR9, wheatR9, yarnR9 = {}) {
        let jewelR26 = this.#i(vaporR9.textRange);
        return this.#e.addThread({
          proto: jewelR26
        }, wheatR9, yarnR9);
      }
      toProto() {
        return this.#e.toProto();
      }
      #i(hillR5) {
        let zephyrR23 = this.#r(hillR5),
          acornR23 = zephyrR23?.startCp ?? 0,
          bloomR23 = zephyrR23?.length ?? 0;
        return {
          textRange: {
            slideId: this.#t,
            elementId: this.#n,
            startCp: acornR23,
            length: bloomR23
          }
        };
      }
    };
  });
function marble(basaltR8, cedarR8) {
  return cedarR8 instanceof ArrayBuffer ? `ArrayBuffer:${cedarR8.byteLength}` : ArrayBuffer.isView(cedarR8) ? `${cedarR8.constructor.name}:${cedarR8.byteLength}` : cedarR8;
}
