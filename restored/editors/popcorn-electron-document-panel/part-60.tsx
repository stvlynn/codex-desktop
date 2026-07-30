// Restored from ref/webview/assets/PopcornElectronDocumentPanel-Cz-nyTbC.js
// Wave GA — full polished body from `PopcornElectronDocumentPanel-Cz-nyTbC/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 17 (verified 103/120).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 60/65
/* split-lane-import-depth:1 */

import { ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
import { jsxRuntime as getJsxRuntime, react } from "../../boundaries/react-cjs-runtime";
import { __workbookT, _workbookT, workbookA, workbookB, workbookC, workbookD, workbookE, workbookF, workbookG, WorkbookI, workbookIt, workbookJ, workbookK, workbookL, workbookLt, workbookM, workbookN, workbookNt, workbookO, workbookOt, workbookP, workbookQ, WorkbookR, workbookRt, workbookS, workbookSt, workbookU, workbookUnderscore, workbookV, workbookW, WorkbookW, workbookX, workbookY, workbookZ } from "../../boundaries/workbook-runtime/index";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureFeatureCatalogAtomsInit, ensureFeatureCatalogInit, getFeatureCatalogEntries, PopcornFindBar } from "../feature-catalog";
import { ensurePopcornPageNumberNavigationInit, PopcornPageNumberNavigation } from "../popcorn-page-number-navigation";
import { ensureRemoteTextEditSessionInit, RemoteTextEditSessionA, RemoteTextEditSessionB, RemoteTextEditSessionC, RemoteTextEditSessionChrome, RemoteTextEditSessionE, RemoteTextEditSessionF, RemoteTextEditSessionH, RemoteTextEditSessionI, RemoteTextEditSessionLowerT, RemoteTextEditSessionM, RemoteTextEditSessionN, RemoteTextEditSessionO, RemoteTextEditSessionP, RemoteTextEditSessionR, RemoteTextEditSessionS, RemoteTextEditSessionSurfaceKind, RemoteTextEditSessionU, RemoteTextEditSessionV, RemoteTextEditSessionW, RemoteTextEditSessionX, RemoteTextEditSessionY, RemoteTextEditSessionZoomControl } from "../remote-text-edit-session/index";

// Wave5d soft stubs.
const C: any = undefined;
const _: any = undefined;
const bravo: any = undefined;
const c: any = undefined;
const d: any = undefined;
const f: any = undefined;
const falconR2: any = undefined;
const g: any = undefined;
const gammaR2: any = undefined;
const h: any = undefined;
const harborR2: any = undefined;
const irisR14: any = undefined;
const ivoryR1: any = undefined;
const jadeR2: any = undefined;
const m: any = undefined;
const o: any = undefined;
const p: any = undefined;
const s: any = undefined;
const tideR14: any = undefined;
const u: any = undefined;
const ultraR25: any = undefined;
const valeR22: any = undefined;
const w: any = undefined;

var hillR14,
  copperR15 = esmInit(() => {
    w();
    u();
    tideR14();
    hillR14 = class {
      #e;
      #t;
      #n;
      #r;
      #i;
      #a;
      #o;
      #s;
      #c;
      #l;
      #u;
      #d;
      #f;
      #p;
      #m;
      #h;
      #g;
      #_;
      #v;
      constructor(orbitR4) {
        let pineR18 = orbitR4.section;
        this.#m = orbitR4.context;
        this.#e = pineR18?.id || orbitR4.defaultId;
        this.#t = pineR18?.breakType ?? C.SECTION_BREAK_TYPE_UNSPECIFIED;
        this.#n = falconR2(pineR18?.pageSetup);
        this.#r = gammaR2(pineR18?.columns);
        this.#h = pineR18?.startsWithPageBreak ?? false;
        this.#g = pineR18?.pageNumberStart;
        this.#_ = pineR18?.pageNumberFormat;
        this.#v = harborR2(pineR18?.documentGrid);
        this.#p = pineR18?.differentFirstPage ?? false;
        this.#i = new irisR14({
          elements: pineR18?.elements ?? orbitR4.fallbackElements ?? [],
          context: orbitR4.context
        });
        this.#a = new irisR14({
          elements: pineR18?.header?.elements ?? [],
          context: orbitR4.context
        });
        this.#o = new irisR14({
          elements: pineR18?.footer?.elements ?? [],
          context: orbitR4.context
        });
        this.#s = new irisR14({
          elements: pineR18?.firstHeader?.elements ?? [],
          context: orbitR4.context
        });
        this.#c = new irisR14({
          elements: pineR18?.firstFooter?.elements ?? [],
          context: orbitR4.context
        });
        this.#l = !!pineR18?.header;
        this.#u = !!pineR18?.footer;
        this.#d = !!pineR18?.firstHeader;
        this.#f = !!pineR18?.firstFooter;
      }
      get id() {
        return this.#e;
      }
      get breakType() {
        return this.#t;
      }
      set breakType(flintR11) {
        this.#t = flintR11;
        this.#m.invalidateLayout();
      }
      get body() {
        return this.#i;
      }
      get pageSetup() {
        return this.#n ? falconR2(this.#n) : undefined;
      }
      set pageSetup(nickelR11) {
        this.#n = falconR2(nickelR11);
        this.#m.invalidateLayout();
      }
      get columns() {
        return this.#r ? gammaR2(this.#r) : undefined;
      }
      set columns(violetR11) {
        this.#r = gammaR2(violetR11);
        this.#m.invalidateLayout();
      }
      get header() {
        return this.#l = true, this.#a;
      }
      get footer() {
        return this.#u = true, this.#o;
      }
      get firstHeader() {
        return this.#d = true, this.#s;
      }
      get firstFooter() {
        return this.#f = true, this.#c;
      }
      get differentFirstPage() {
        return this.#p;
      }
      set differentFirstPage(groveR10) {
        this.#p = groveR10;
        this.#m.invalidateLayout();
      }
      get startsWithPageBreak() {
        return this.#h;
      }
      set startsWithPageBreak(waveR10) {
        this.#h = waveR10;
        this.#m.invalidateLayout();
      }
      get pageNumberStart() {
        return this.#g;
      }
      set pageNumberStart(indigoR11) {
        this.#g = indigoR11;
        this.#m.invalidateLayout();
      }
      get pageNumberFormat() {
        return this.#_;
      }
      set pageNumberFormat(deltaR11) {
        this.#_ = deltaR11;
        this.#m.invalidateLayout();
      }
      get documentGrid() {
        return harborR2(this.#v);
      }
      set documentGrid(echoR11) {
        this.#v = harborR2(echoR11);
        this.#m.invalidateLayout();
      }
      clearHeader() {
        this.#l = false;
        this.#m.invalidateLayout();
      }
      clearFooter() {
        this.#u = false;
        this.#m.invalidateLayout();
      }
      toProto() {
        let mintR19 = {
            id: this.#e,
            breakType: this.#t,
            pageSetup: falconR2(this.#n),
            columns: gammaR2(this.#r),
            elements: this.#i.toProto(),
            header: undefined,
            footer: undefined,
            startsWithPageBreak: this.#h,
            pageNumberStart: this.#g,
            pageNumberFormat: this.#_,
            differentFirstPage: this.#p || undefined,
            firstHeader: undefined,
            firstFooter: undefined,
            documentGrid: harborR2(this.#v)
          },
          novaR19 = this.#a.toProto();
        this.#l && jadeR2(novaR19) && (mintR19.header = this.#y(novaR19));
        let oliveR19 = this.#o.toProto();
        this.#u && jadeR2(oliveR19) && (mintR19.footer = this.#y(oliveR19));
        let prismR19 = this.#s.toProto();
        this.#d && jadeR2(prismR19) && (mintR19.firstHeader = this.#y(prismR19));
        let quillR19 = this.#c.toProto();
        return this.#f && jadeR2(quillR19) && (mintR19.firstFooter = this.#y(quillR19)), mintR19;
      }
      #y(tideR12) {
        return {
          elements: tideR12
        };
      }
    };
  }),
  deltaR15,
  echoR15 = esmInit(() => {
    w();
    copperR15();
    deltaR15 = class {
      #e = [];
      #t;
      #n;
      constructor(eagleR3) {
        this.#n = eagleR3.context;
        let pineR20 = eagleR3.sections ?? [];
        pineR20.length > 0 ? this.#e = pineR20.map((item, index) => new hillR14({
          section: item,
          context: this.#n,
          defaultId: `doc-section-${index + 1}`
        })) : this.#e = [new hillR14({
          fallbackElements: eagleR3.fallbackElements ?? [],
          context: this.#n,
          defaultId: "doc-section-1"
        })];
        this.#t = this.#e.length + 1;
      }
      get items() {
        return [...this.#e];
      }
      get first() {
        return this.#e[0];
      }
      add(questR12 = {}) {
        let kiteR20 = {
            id: questR12.id || this.#r(),
            breakType: questR12.breakType ?? C.SECTION_BREAK_TYPE_UNSPECIFIED,
            pageSetup: questR12.pageSetup,
            columns: questR12.columns,
            elements: questR12.elements ?? [],
            header: questR12.header,
            footer: questR12.footer,
            differentFirstPage: questR12.differentFirstPage,
            firstHeader: questR12.firstHeader,
            firstFooter: questR12.firstFooter,
            startsWithPageBreak: questR12.startsWithPageBreak ?? false,
            pageNumberStart: questR12.pageNumberStart,
            pageNumberFormat: questR12.pageNumberFormat
          },
          lemonR20 = new hillR14({
            section: kiteR20,
            context: this.#n,
            defaultId: kiteR20.id
          });
        return this.#e.push(lemonR20), this.#n.invalidateLayout(), lemonR20;
      }
      toProto() {
        return this.#e.map(item => item.toProto());
      }
      #r() {
        let marbleR14 = `doc-section-${this.#t}`;
        return this.#t += 1, marbleR14;
      }
    };
  });
function kiteR2(frostR7) {
  return frostR7.numberingFormat === undefined && frostR7.defaultNoteIds.length === 0 && frostR7.numberingStart === undefined && frostR7.numberingRestart === undefined && frostR7.position === undefined;
}
var falconR15,
  gammaR15,
  harborR15 = esmInit(() => {
    valeR22();
    __workbookT();
    falconR15 = class {
      #e;
      #t;
      constructor(hazelR10, jasperR10) {
        this.#e = bravo(hazelR10 ?? {
          defaultNoteIds: []
        });
        this.#t = jasperR10;
      }
      get numberingFormat() {
        return this.#e.numberingFormat;
      }
      set numberingFormat(falconR11) {
        this.#e.numberingFormat = falconR11;
        this.#t?.();
      }
      get defaultNoteIds() {
        return [...(this.#e.defaultNoteIds ?? [])];
      }
      set defaultNoteIds(apexR10) {
        this.#e.defaultNoteIds = [...apexR10];
        this.#t?.();
      }
      get numberingStart() {
        return this.#e.numberingStart;
      }
      set numberingStart(lemonR11) {
        this.#e.numberingStart = lemonR11;
        this.#t?.();
      }
      get numberingRestart() {
        return this.#e.numberingRestart;
      }
      set numberingRestart(hillR10) {
        this.#e.numberingRestart = hillR10;
        this.#t?.();
      }
      get position() {
        return this.#e.position;
      }
      set position(bloomR11) {
        this.#e.position = bloomR11;
        this.#t?.();
      }
      replace(bravoR11) {
        this.#e = bravo(bravoR11 ?? {
          defaultNoteIds: []
        });
        this.#t?.();
      }
      toProto() {
        return kiteR2(this.#e) ? undefined : bravo(this.#e);
      }
    };
    gammaR15 = class {
      #e;
      #t;
      #n;
      #r;
      #i;
      constructor(jewelR10, knollR10 = {}) {
        this.#e = bravo(jewelR10 ?? {});
        this.#i = knollR10.onMutated;
      }
      get defaultTabStop() {
        return this.#e.defaultTabStop;
      }
      set defaultTabStop(marbleR11) {
        this.#e.defaultTabStop = marbleR11;
        this.#i?.();
      }
      get autoHyphenation() {
        return this.#e.autoHyphenation;
      }
      set autoHyphenation(harborR11) {
        this.#e.autoHyphenation = harborR11;
        this.#i?.();
      }
      get mirrorMargins() {
        return this.#e.mirrorMargins;
      }
      set mirrorMargins(slateR11) {
        this.#e.mirrorMargins = slateR11;
        this.#i?.();
      }
      get displayBackgroundShape() {
        return this.#e.displayBackgroundShape;
      }
      set displayBackgroundShape(umbraR10) {
        this.#e.displayBackgroundShape = umbraR10;
        this.#i?.();
      }
      get backgroundFill() {
        return this.#r ||= new workbookS({
          type: "proto",
          proto: this.#e.backgroundFill
        }), this.#r;
      }
      set backgroundFill(brookR8) {
        this.#r = brookR8 === undefined ? undefined : new workbookS(brookR8);
        this.#e.backgroundFill = undefined;
        this.#i?.();
      }
      clearBackgroundFill() {
        this.#r = undefined;
        this.#e.backgroundFill = undefined;
        this.#i?.();
      }
      resolveRenderBackgroundFill() {
        return this.#r ? this.#r.toProto() : this.#e.backgroundFill;
      }
      get footnoteProperties() {
        return this.#t ||= new falconR15(this.#e.footnoteProperties, this.#i), this.#t;
      }
      get endnoteProperties() {
        return this.#n ||= new falconR15(this.#e.endnoteProperties, this.#i), this.#n;
      }
      clearFootnoteProperties() {
        this.#t = undefined;
        this.#e.footnoteProperties = undefined;
        this.#i?.();
      }
      clearEndnoteProperties() {
        this.#n = undefined;
        this.#e.endnoteProperties = undefined;
        this.#i?.();
      }
      replace(amberR8) {
        this.#e = bravo(amberR8 ?? {});
        this.#t = undefined;
        this.#n = undefined;
        this.#r = undefined;
        this.#i?.();
      }
      toProto() {
        let gammaR20 = this.#t?.toProto(),
          harborR20 = this.#n?.toProto(),
          indigoR20 = this.#r?.toProto(),
          jadeR20 = {
            ...bravo(this.#e),
            footnoteProperties: this.#t ? gammaR20 : this.#e.footnoteProperties,
            endnoteProperties: this.#n ? harborR20 : this.#e.endnoteProperties,
            backgroundFill: this.#r ? indigoR20 : this.#e.backgroundFill
          };
        if (!(jadeR20.defaultTabStop === undefined && jadeR20.autoHyphenation === undefined && jadeR20.mirrorMargins === undefined && jadeR20.displayBackgroundShape === undefined && jadeR20.footnoteProperties === undefined && jadeR20.endnoteProperties === undefined && jadeR20.backgroundFill === undefined)) return jadeR20;
      }
    };
  });
function lemonR2(quillR10) {
  if (!quillR10) return;
  let jadeR14 = bravo(quillR10);
  return jadeR14.tabStops = jadeR14.tabStops ?? [], jadeR14;
}
function nickelR2(violetR5) {
  return {
    ...violetR5,
    wholeTable: violetR5.wholeTable ? {
      ...violetR5.wholeTable,
      paragraphStyle: lemonR2(violetR5.wholeTable.paragraphStyle)
    } : undefined,
    conditionalStyles: (violetR5.conditionalStyles ?? []).map(item => ({
      ...item,
      style: item.style ? {
        ...item.style,
        paragraphStyle: lemonR2(item.style.paragraphStyle)
      } : undefined
    }))
  };
}
var indigoR15,
  jadeR15 = esmInit(() => {
    valeR22();
    ultraR25();
    indigoR15 = class {
      #e;
      #t;
      #n;
      constructor(copperR8 = [], deltaR8 = {}) {
        this.#n = deltaR8.fontFamilyCache;
        this.#e = bravo(copperR8).map(nickelR2);
        for (let duskR14 of this.#e) this.#r(duskR14);
        this.#t = deltaR8.onMutated;
      }
      get items() {
        return bravo(this.#e).map(nickelR2);
      }
      getById(ivoryR9) {
        if (!ivoryR9) return;
        let yarnR26 = this.#e.find(item => item.id === ivoryR9);
        return yarnR26 ? nickelR2(bravo(yarnR26)) : undefined;
      }
      getByName(violetR9) {
        if (!violetR9) return;
        let prismR26 = this.#e.find(item => item.name === violetR9);
        return prismR26 ? nickelR2(bravo(prismR26)) : undefined;
      }
      set(umbraR6) {
        let brookR23 = nickelR2(bravo(umbraR6));
        this.#r(brookR23);
        let cliffR23 = this.#e.findIndex(item => item.id === brookR23.id || item.name === brookR23.name);
        return cliffR23 >= 0 ? this.#e[cliffR23] = brookR23 : this.#e.push(brookR23), this.#t?.(), nickelR2(bravo(brookR23));
      }
      addOfficeWordDefaults() {
        let northR22 = ivoryR1(),
          orbitR22 = bravo(this.#e);
        for (let lemonR25 of northR22) {
          let wheatR25 = nickelR2(bravo(lemonR25));
          this.#r(wheatR25);
          let yarnR25 = orbitR22.findIndex(item => item.id === wheatR25.id || item.name === wheatR25.name);
          yarnR25 >= 0 ? orbitR22[yarnR25] = wheatR25 : orbitR22.push(wheatR25);
        }
        return this.#e = orbitR22, this.#t?.(), bravo(northR22).map(nickelR2);
      }
      delete(tideR8) {
        let kiteR26 = this.#e.findIndex(item => item.id === tideR8 || item.name === tideR8);
        return kiteR26 < 0 ? false : (this.#e.splice(kiteR26, 1), this.#t?.(), true);
      }
      replace(honeyR9) {
        this.#e = bravo(honeyR9).map(nickelR2);
        for (let elmR14 of this.#e) this.#r(elmR14);
        this.#t?.();
      }
      toProto() {
        return bravo(this.#e).map(nickelR2);
      }
      #r(xenonR8) {
        this.#n?.addTextStyle(xenonR8.wholeTable?.textStyle);
        for (let willowR14 of xenonR8.conditionalStyles ?? []) this.#n?.addTextStyle(willowR14.style?.textStyle);
      }
    };
  });
function onyxR2(reefR10) {
  if (!reefR10) return;
  let kiteR14 = bravo(reefR10);
  return kiteR14.tabStops = kiteR14.tabStops ?? [], kiteR14;
}
function pearlR2(driftR11) {
  return {
    ...driftR11,
    paragraphStyle: onyxR2(driftR11.paragraphStyle)
  };
}
