// Restored from ref/webview/assets/PopcornElectronDocumentPanel-Cz-nyTbC.js
// Wave GA — full polished body from `PopcornElectronDocumentPanel-Cz-nyTbC/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 17 (verified 103/120).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 59/65
/* split-lane-import-depth:1 */

import { ensureComposerEsm_Tft_Init } from "../../boundaries/composer-esm-inits";
import { jsxRuntime as getJsxRuntime, react } from "../../boundaries/react-cjs-runtime";
import { __workbookT, _workbookT, workbookA, workbookB, workbookC, workbookD, workbookE, workbookF, workbookG, WorkbookI, workbookIt, workbookJ, workbookK, workbookL, workbookLt, workbookM, workbookN, workbookNt, workbookO, workbookOt, workbookP, workbookQ, WorkbookR, workbookRt, workbookS, workbookSt, workbookU, workbookUnderscore, workbookV, workbookW, WorkbookW, workbookX, workbookY, workbookZ } from "../../boundaries/workbook-runtime/index";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureFeatureCatalogAtomsInit, ensureFeatureCatalogInit, getFeatureCatalogEntries, PopcornFindBar } from "../feature-catalog";
import { ensurePopcornPageNumberNavigationInit, PopcornPageNumberNavigation } from "../popcorn-page-number-navigation";
import { ensureRemoteTextEditSessionInit, RemoteTextEditSessionA, RemoteTextEditSessionB, RemoteTextEditSessionC, RemoteTextEditSessionChrome, RemoteTextEditSessionE, RemoteTextEditSessionF, RemoteTextEditSessionH, RemoteTextEditSessionI, RemoteTextEditSessionLowerT, RemoteTextEditSessionM, RemoteTextEditSessionN, RemoteTextEditSessionO, RemoteTextEditSessionP, RemoteTextEditSessionR, RemoteTextEditSessionS, RemoteTextEditSessionSurfaceKind, RemoteTextEditSessionU, RemoteTextEditSessionV, RemoteTextEditSessionW, RemoteTextEditSessionX, RemoteTextEditSessionY, RemoteTextEditSessionZoomControl } from "../remote-text-edit-session/index";

// Wave5d soft stubs.
const _: any = undefined;
const acornR26: any = undefined;
const bravoR23: any = undefined;
const c: any = undefined;
const copperR2: any = undefined;
const d: any = undefined;
const daisyR26: any = undefined;
const f: any = undefined;
const g: any = undefined;
const glideR25: any = undefined;
const h: any = undefined;
const harborR26: any = undefined;
const knollR22: any = undefined;
const lunarR26: any = undefined;
const m: any = undefined;
const o: any = undefined;
const oliveR26: any = undefined;
const p: any = undefined;
const s: any = undefined;
const slateR26: any = undefined;
const stormR1: any = undefined;
const u: any = undefined;
const unityR1: any = undefined;
const waveR22: any = undefined;
const zephyrR22: any = undefined;

function deltaR2(echoR8) {
  if (echoR8) return echoR8.map((item, index) => item.fill || item.line || item.stroke ? {
    ...item
  } : {
    ...item,
    fill: cliffR13[index % cliffR13.length],
    line: echoR14[index % echoR14.length]
  });
}
var orbitR13,
  cliffR13,
  echoR14,
  pearlR14 = esmInit(() => {
    glideR25();
    orbitR13 = class {
      #e;
      constructor(duskR12) {
        this.#e = duskR12;
      }
      add(cliffR3) {
        let marbleR21 = copperR2(cliffR3),
          nickelR21 = this.#e.add(cliffR3.chartType, {
            ...cliffR3.config,
            series: deltaR2(cliffR3.config?.series),
            position: marbleR21
          });
        cliffR3.config?.chartLine === undefined && (nickelR21.chartLine.visible = false);
        let onyxR21 = nickelR21.chart;
        return onyxR21 && !onyxR21.chartSpaceLine.isSet && (onyxR21.chartSpaceLine.visible = false), nickelR21.placement = unityR1(cliffR3.style, marbleR21, {
          spaceBefore: cliffR3.spaceBefore,
          spaceAfter: cliffR3.spaceAfter
        }), nickelR21;
      }
    };
    cliffR13 = [{
      type: "solid",
      color: {
        type: "theme",
        value: "accent1",
        transform: {
          lighten: 0.8
        }
      }
    }, {
      type: "solid",
      color: {
        type: "theme",
        value: "accent1",
        transform: {
          lighten: 0.6
        }
      }
    }, {
      type: "solid",
      color: {
        type: "theme",
        value: "accent1",
        transform: {
          lighten: 0.4
        }
      }
    }, {
      type: "solid",
      color: {
        type: "theme",
        value: "accent1",
        transform: {
          darken: 0.1
        }
      }
    }, {
      type: "solid",
      color: {
        type: "theme",
        value: "accent1",
        transform: {
          darken: 0.25
        }
      }
    }, {
      type: "solid",
      color: {
        type: "theme",
        value: "accent1",
        transform: {
          darken: 0.5
        }
      }
    }];
    echoR14 = [{
      style: "solid",
      width: 1,
      fill: {
        type: "solid",
        color: {
          type: "theme",
          value: "accent1"
        }
      }
    }, {
      style: "solid",
      width: 1,
      fill: {
        type: "solid",
        color: {
          type: "theme",
          value: "accent1",
          transform: {
            darken: 0.1
          }
        }
      }
    }, {
      style: "solid",
      width: 1,
      fill: {
        type: "solid",
        color: {
          type: "theme",
          value: "accent1",
          transform: {
            darken: 0.2
          }
        }
      }
    }, {
      style: "solid",
      width: 1,
      fill: {
        type: "solid",
        color: {
          type: "theme",
          value: "accent1",
          transform: {
            darken: 0.3
          }
        }
      }
    }, {
      style: "solid",
      width: 1,
      fill: {
        type: "solid",
        color: {
          type: "theme",
          value: "accent1",
          transform: {
            darken: 0.4
          }
        }
      }
    }, {
      style: "solid",
      width: 1,
      fill: {
        type: "solid",
        color: {
          type: "theme",
          value: "accent1",
          transform: {
            darken: 0.5
          }
        }
      }
    }];
  }),
  _c,
  amberR14 = esmInit(() => {
    workbookB();
    _c = class extends workbookZ {
      constructor(mossR12, northR12) {
        super(mossR12, northR12);
      }
      get id() {
        return this.data.id;
      }
      toProto() {
        return super.toProto();
      }
    };
  });
function echoR2(echoR10, falconR10) {
  let brookR13 = echoR10?.alignment ?? falconR10?.alignment;
  return brookR13 === undefined ? falconR10 : workbookS({
    alignment: brookR13
  }, falconR10);
}
var lotusR14,
  wheatR14 = esmInit(() => {
    workbookSt();
    lotusR14 = class {
      #e;
      constructor(amberR12 = []) {
        this.#e = new workbookIt(amberR12);
      }
      resolveTextStyleByName(alphaR11) {
        return this.#e.resolveByName(alphaR11)?.textStyle;
      }
      resolveParagraphTextStyle(waveR8, apexR8) {
        let marbleR26 = this.resolveParagraphStyleDefinition(waveR8.styleId)?.textStyle;
        return workbookS(workbookS(waveR8.textStyle, marbleR26), apexR8);
      }
      resolveParagraphStyle(bravoR8) {
        let coralR25 = this.resolveParagraphStyleDefinition(bravoR8.styleId)?.paragraphStyle;
        return workbookLt(bravoR8.paragraphStyle, coralR25);
      }
      resolveRunTextStyle(unityR7, waveR7, apexR7) {
        let emberR25 = this.resolveParagraphStyleDefinition(unityR7.styleId)?.textStyle,
          flintR25 = workbookS(echoR2(unityR7.textStyle, emberR25), apexR7);
        return workbookS(waveR7.textStyle, flintR25);
      }
      resolveParagraphStyleDefinition(emberR11) {
        return this.#e.resolve(emberR11);
      }
    };
  }),
  irisR14,
  tideR14 = esmInit(() => {
    u();
    workbookB();
    workbookC();
    workbookL();
    WorkbookI();
    workbookP();
    WorkbookI();
    _workbookT();
    workbookM();
    knollR22();
    bravoR23();
    slateR26();
    oliveR26();
    lunarR26();
    pearlR14();
    amberR14();
    glideR25();
    wheatR14();
    irisR14 = class PopcornElectronDocumentPanelClass1 {
      #e;
      #t;
      #n = [];
      #r = new Map();
      #i;
      #a;
      #o;
      #s;
      #c;
      #l;
      #u;
      constructor(driftR3) {
        this.#u = driftR3.context;
        this.#e = this.#d();
        let {
          bodyElement,
          remainingElements
        } = this.#v(driftR3.elements ?? []);
        this.#i = new zephyrR22(this.#e, bodyElement);
        this.#h(this.#i);
        let lunarR20 = new workbookF(this.#e, []),
          mossR20 = new workbookB(this.#e, []),
          northR20 = new workbookF(this.#e, []),
          orbitR20 = new workbookS(this.#e, []);
        this.#c = new acornR26(lunarR20);
        this.#s = new daisyR26(mossR20);
        this.#o = new harborR26(northR20);
        this.#l = new orbitR13(orbitR20);
        this.#a = new waveR22(this.#i.paragraphs);
        for (let waveR14 of remainingElements) this.#y(waveR14, lunarR20, mossR20, northR20, orbitR20);
      }
      get text() {
        return this.#i.text;
      }
      get textElements() {
        return this.#n.map(item => this.#r.get(item)).filter(item => item instanceof zephyrR22);
      }
      getElementById(apexR11) {
        if (apexR11) return this.#r.get(apexR11);
      }
      removeElementById(flintR9) {
        return !flintR9 || flintR9 === this.#i.id || !this.#r.get(flintR9) ? false : (this.#_(flintR9), true);
      }
      resolveTextBlock(umbraR5) {
        let honeyR22 = workbookK(umbraR5);
        if (honeyR22) {
          let northR25 = this.getElementById(honeyR22.tableId);
          return northR25 instanceof workbookL ? northR25.getCellById(honeyR22.cellId)?.text ?? null : null;
        }
        let irisR22 = this.getElementById(umbraR5);
        return irisR22 && (irisR22 instanceof zephyrR22 || "text" in irisR22) ? irisR22.text : null;
      }
      set text(acornR12) {
        this.#i.text.set(acornR12);
      }
      get paragraphs() {
        return this.#a;
      }
      startParagraphBlock(xenonR7 = false) {
        if (!xenonR7 && this.#n.length === 1 && this.#n[0] === this.#i.id) return this.#a;
        let elmR24 = new zephyrR22(this.#e);
        return this.#g(elmR24), new waveR22(elmR24.paragraphs);
      }
      get tables() {
        return this.#o;
      }
      get images() {
        return this.#s;
      }
      get shapes() {
        return this.#c;
      }
      get charts() {
        return this.#l;
      }
      createChildBody(unityR10 = []) {
        return new PopcornElectronDocumentPanelClass1({
          elements: unityR10,
          context: this.#u
        });
      }
      addGroup(alphaR8) {
        let ivoryR19 = stormR1({
            left: alphaR8.position?.left,
            top: alphaR8.position?.top,
            width: alphaR8.position?.width ?? alphaR8.size?.width,
            height: alphaR8.position?.height ?? alphaR8.size?.height
          }, {
            inline: alphaR8.style?.wrap === "inline"
          }),
          kelpR19 = new _c(this.#e, {
            id: alphaR8.id,
            name: alphaR8.name ?? "",
            type: m.ELEMENT_TYPE_GROUP,
            children: alphaR8.children,
            bbox: {
              xEmu: ivoryR19.left === undefined ? undefined : workbookP(ivoryR19.left),
              yEmu: ivoryR19.top === undefined ? undefined : workbookP(ivoryR19.top),
              widthEmu: ivoryR19.width === undefined ? undefined : workbookP(ivoryR19.width),
              heightEmu: ivoryR19.height === undefined ? undefined : workbookP(ivoryR19.height)
            }
          });
        return kelpR19.placement = unityR1(alphaR8.style, ivoryR19, {
          spaceBefore: alphaR8.spaceBefore,
          spaceAfter: alphaR8.spaceAfter
        }), this.#g(kelpR19), kelpR19;
      }
      get textElementId() {
        return this.#i.id;
      }
      toProto() {
        return this.#n.map(item => this.#r.get(item)).filter(item => !!item).map(item => (item instanceof zephyrR22, item.toProto()));
      }
      #d() {
        return {
          fontFamilyCache: this.#u.fontFamilyCache,
          stub: () => {},
          getTextStyleByName: novaR13 => this.#p(novaR13),
          getListPresetProfile: () => "document",
          onElementMutated: () => this.#u.invalidateLayout(),
          getExistingElementIds: () => this.#u.getExistingElementIds(),
          getResolvedParagraphTextStyle: (driftR7, eagleR7) => {
            let kiteR25 = this.#m().resolveParagraphTextStyle(driftR7.toProto(), eagleR7?.toProto());
            return kiteR25 ? new __workbookT(kiteR25) : undefined;
          },
          getResolvedParagraphStyle: onyxR12 => this.#m().resolveParagraphStyle(onyxR12.toProto()),
          getResolvedRunTextStyle: (kiteR7, lemonR7, marbleR7) => {
            let pineR24 = this.#m().resolveRunTextStyle(kiteR7.toProto(), lemonR7.toProto(), marbleR7?.toProto());
            return pineR24 ? new __workbookT(pineR24) : undefined;
          },
          getSlide: () => this.#f(),
          getImageById: quartzR13 => this.#u.images.getById(quartzR13),
          createImageAsset: umbraR13 => this.#u.images.add(umbraR13),
          getChartById: riverR13 => this.#u.charts.getById(riverR13),
          createChartAsset: violetR13 => this.#u.charts.add(violetR13),
          attachChartAsset: timberR13 => this.#u.charts.attach(timberR13),
          _register: (emberR13, flintR13) => this.#g(emberR13, flintR13),
          _unregister: prismR13 => this.#_(prismR13)
        };
      }
      #f() {
        if (this.#t) return this.#t;
        let lotusR23 = () => [...this.#r.values()],
          mintR23 = {
            id: undefined,
            elements: {
              get items() {
                return lotusR23();
              }
            }
          };
        return this.#t = mintR23, mintR23;
      }
      #p(pearlR10) {
        let bravoR14 = this.#m().resolveTextStyleByName(pearlR10);
        if (bravoR14) return new __workbookT(bravoR14);
      }
      #m() {
        return new lotusR14(this.#u.readTextStyleDefinitions());
      }
      #h(coralR9) {
        this.#u.registerElementId(coralR9.id);
        this.#r.set(coralR9.id, coralR9);
        this.#n = [coralR9.id];
      }
      #g(coralR4, eagleR4) {
        let falconR22 = coralR4.id;
        if (!falconR22) return;
        this.#u.registerElementId(falconR22);
        this.#r.set(falconR22, coralR4);
        let harborR22 = this.#n.indexOf(falconR22);
        harborR22 >= 0 && this.#n.splice(harborR22, 1);
        let indigoR22 = this.#n.indexOf(this.#i.id),
          jadeR22 = indigoR22 >= 0 ? indigoR22 + 1 : 0,
          kiteR22 = eagleR4?.index ?? this.#n.length,
          lemonR22 = Math.max(jadeR22, kiteR22);
        this.#n.splice(lemonR22, 0, falconR22);
        this.#u.invalidateLayout();
      }
      #_(isleR8) {
        this.#r.delete(isleR8);
        let umbraR26 = this.#n.indexOf(isleR8);
        umbraR26 >= 0 && this.#n.splice(umbraR26, 1);
        this.#u.invalidateLayout();
      }
      #v(indigoR5) {
        let mintR22 = indigoR5.findIndex(item => item.type === m.ELEMENT_TYPE_TEXT || item.type === m.ELEMENT_TYPE_TEXT_GROUP);
        return mintR22 >= 0 ? {
          bodyElement: indigoR5[mintR22],
          remainingElements: indigoR5.filter((item, index) => index !== mintR22)
        } : {
          bodyElement: undefined,
          remainingElements: indigoR5
        };
      }
      #y(falconR7, quartzR7, basaltR7, mintR7, zephyrR7) {
        if (falconR7.type === m.ELEMENT_TYPE_TEXT || falconR7.type === m.ELEMENT_TYPE_TEXT_GROUP) {
          let quartzR14 = new zephyrR22(this.#e, falconR7);
          this.#g(quartzR14);
          return;
        }
        if (falconR7.type === m.ELEMENT_TYPE_TABLE || falconR7.table) {
          mintR7.add({
            proto: falconR7
          });
          return;
        }
        if (falconR7.type === m.ELEMENT_TYPE_CHART || falconR7.type === m.ELEMENT_TYPE_CHART_REFERENCE || falconR7.chartReference) {
          zephyrR7.add({
            proto: falconR7
          });
          return;
        }
        if (falconR7.type === m.ELEMENT_TYPE_IMAGE || falconR7.type === m.ELEMENT_TYPE_IMAGE_REFERENCE || falconR7.imageReference) {
          basaltR7.add({
            proto: falconR7
          });
          return;
        }
        if (falconR7.type === m.ELEMENT_TYPE_SHAPE || falconR7.shape !== undefined) {
          quartzR7.add({
            proto: falconR7
          });
          return;
        }
        (falconR7.type === m.ELEMENT_TYPE_GROUP || (falconR7.children?.length ?? 0) > 0) && this.#g(new _c(this.#e, falconR7));
      }
    };
  });
function falconR2(orbitR7) {
  if (!orbitR7) return;
  let willowR25 = orbitR7.pageNumbers ? {
    ...orbitR7.pageNumbers
  } : undefined;
  return {
    ...orbitR7,
    pageMargin: orbitR7.pageMargin ? {
      ...orbitR7.pageMargin
    } : undefined,
    pageNumbers: willowR25
  };
}
function gammaR2(coralR11) {
  if (coralR11) return {
    ...coralR11,
    widths: [...(coralR11.widths ?? [])]
  };
}
function harborR2(alphaR13) {
  if (alphaR13) return {
    ...alphaR13
  };
}
function indigoR2(ivoryR8) {
  let pineR25 = ivoryR8.paragraphs ?? [];
  for (let fernR13 of pineR25) {
    let cedarR14 = fernR13.runs ?? [];
    for (let glideR14 of cedarR14) if ((glideR14.text ?? "").length > 0) return true;
  }
  return false;
}
function jadeR2(wheatR7) {
  for (let stormR25 of wheatR7) if (stormR25 && (!(stormR25.type === m.ELEMENT_TYPE_TEXT || stormR25.type === m.ELEMENT_TYPE_TEXT_GROUP) || indigoR2(stormR25))) return true;
  return false;
}
