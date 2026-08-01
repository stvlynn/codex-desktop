// Restored from ref/webview/assets/PopcornElectronDocumentPanel-Cz-nyTbC.js
// Wave GA — full polished body from `PopcornElectronDocumentPanel-Cz-nyTbC/auto-polished.tsx` with companion import rewrite.
// Soft-deferred host replaced; NOT app-initial extractFn / promote / producer barrel.
// Residual companion stubs: 17 (verified 103/120).
// Wave5d — FZ repair from clean staging/FZ; JSX PascalCase + careful split.
// Careful split 61/65
/* split-lane-import-depth:1 */

import { ensureComposerEsm_Tft_Init } from "../../composer/composer-esm-inits";
import { jsxRuntime as getJsxRuntime, react } from "../../boundaries/react-cjs-runtime";
import { __workbookT, _workbookT, workbookA, workbookB, workbookC, workbookD, workbookE, workbookF, workbookG, WorkbookI, workbookIt, workbookJ, workbookK, workbookL, workbookLt, workbookM, workbookN, workbookNt, workbookO, workbookOt, workbookP, workbookQ, WorkbookR, workbookRt, workbookS, workbookSt, workbookU, workbookUnderscore, workbookV, workbookW, WorkbookW, workbookX, workbookY, workbookZ } from "../../workbook/editor-compat";
import { commonJsInit, esmInit } from "../../runtime/rolldown-runtime";
import { ensureFeatureCatalogAtomsInit, ensureFeatureCatalogInit, getFeatureCatalogEntries, PopcornFindBar } from "../feature-catalog";
import { ensurePopcornPageNumberNavigationInit, PopcornPageNumberNavigation } from "../popcorn-page-number-navigation";
import { ensureRemoteTextEditSessionInit, RemoteTextEditSessionA, RemoteTextEditSessionB, RemoteTextEditSessionC, RemoteTextEditSessionChrome, RemoteTextEditSessionE, RemoteTextEditSessionF, RemoteTextEditSessionH, RemoteTextEditSessionI, RemoteTextEditSessionLowerT, RemoteTextEditSessionM, RemoteTextEditSessionN, RemoteTextEditSessionO, RemoteTextEditSessionP, RemoteTextEditSessionR, RemoteTextEditSessionS, RemoteTextEditSessionSurfaceKind, RemoteTextEditSessionU, RemoteTextEditSessionV, RemoteTextEditSessionW, RemoteTextEditSessionX, RemoteTextEditSessionY, RemoteTextEditSessionZoomControl } from "../remote-text-edit-session/index";

// Wave5d soft stubs.
const $t: any = undefined;
const IntlProvider: any = undefined;
const _: any = undefined;
const bravo: any = undefined;
const bravoR15: any = undefined;
const bravoR17: any = undefined;
const cedarR22: any = undefined;
const d: any = undefined;
const deltaR15: any = undefined;
const echoR15: any = undefined;
const elmR15: any = undefined;
const elmR21: any = undefined;
const flintR1: any = undefined;
const frostR21: any = undefined;
const gammaR15: any = undefined;
const gammaR16: any = undefined;
const harborR15: any = undefined;
const indigoR15: any = undefined;
const ivoryR15: any = undefined;
const jadeR15: any = undefined;
const lotusR3: any = undefined;
const marbleR15: any = undefined;
const mossR13: any = undefined;
const northR13: any = undefined;
const novaR22: any = undefined;
const oStub: any = undefined;
const oliveR16: any = undefined;
const pearlR2: any = undefined;
const quartzR20: any = undefined;
const questR15: any = undefined;
const questR21: any = undefined;
const riverR1: any = undefined;
const riverR24: any = undefined;
const sageR21: any = undefined;
const slateR16: any = undefined;
const topazR15: any = undefined;
const topazR17: any = undefined;
const topazR25: any = undefined;
const valeR22: any = undefined;
const w: any = undefined;
const waveR18: any = undefined;
const xenonR15: any = undefined;

var kiteR15,
  lemonR15 = esmInit(() => {
    valeR22();
    kiteR15 = class {
      #e;
      #t;
      #n;
      constructor(ultraR7 = [], vaporR7 = {}) {
        this.#n = vaporR7.fontFamilyCache;
        this.#e = bravo(ultraR7).map(pearlR2);
        for (let honeyR14 of this.#e) this.#n?.addTextStyle(honeyR14.textStyle);
        this.#t = vaporR7.onMutated;
      }
      get items() {
        return bravo(this.#e).map(pearlR2);
      }
      getById(jasperR9) {
        if (!jasperR9) return;
        let zephyrR26 = this.#e.find(item => item.id === jasperR9);
        return zephyrR26 ? pearlR2(bravo(zephyrR26)) : undefined;
      }
      getByName(willowR9) {
        if (!willowR9) return;
        let quillR26 = this.#e.find(item => item.name === willowR9);
        return quillR26 ? pearlR2(bravo(quillR26)) : undefined;
      }
      set(cliffR5) {
        let wheatR23 = pearlR2(bravo(cliffR5));
        this.#n?.addTextStyle(wheatR23.textStyle);
        let yarnR23 = this.#e.findIndex(item => item.id === wheatR23.id || item.name === wheatR23.name);
        return yarnR23 >= 0 ? this.#e[yarnR23] = wheatR23 : this.#e.push(wheatR23), this.#t?.(), pearlR2(bravo(wheatR23));
      }
      delete(unityR8) {
        let lemonR26 = this.#e.findIndex(item => item.id === unityR8 || item.name === unityR8);
        return lemonR26 < 0 ? false : (this.#e.splice(lemonR26, 1), this.#t?.(), true);
      }
      replace(pearlR9) {
        this.#e = bravo(pearlR9).map(pearlR2);
        for (let jewelR14 of this.#e) this.#n?.addTextStyle(jewelR14.textStyle);
        this.#t?.();
      }
      toProto() {
        return bravo(this.#e).map(pearlR2);
      }
    };
  }),
  nickelR15,
  onyxR15 = esmInit(() => {
    bravoR17();
    workbookL();
    nickelR15 = class {
      #e;
      #t;
      #n;
      constructor(willowR5, xenonR5 = {}) {
        this.#t = willowR5 !== undefined;
        this.#n = xenonR5.onMutated;
        this.#e = new workbookM({
          stub: () => {},
          queueCollaborativePublish: () => {
            this.#t = true;
            this.#n?.();
          }
        }, willowR5);
      }
      get colorScheme() {
        let stormR19 = this.#e.colorScheme;
        return {
          name: stormR19.name,
          themeColors: {
            accent1: stormR19.themeColors.accent1.hex,
            accent2: stormR19.themeColors.accent2.hex,
            accent3: stormR19.themeColors.accent3.hex,
            accent4: stormR19.themeColors.accent4.hex,
            accent5: stormR19.themeColors.accent5.hex,
            accent6: stormR19.themeColors.accent6.hex,
            bg1: stormR19.themeColors.bg1.hex,
            bg2: stormR19.themeColors.bg2.hex,
            tx1: stormR19.themeColors.tx1.hex,
            tx2: stormR19.themeColors.tx2.hex,
            dk1: stormR19.themeColors.dk1.hex,
            lt1: stormR19.themeColors.lt1.hex,
            dk2: stormR19.themeColors.dk2.hex,
            lt2: stormR19.themeColors.lt2.hex,
            hlink: stormR19.themeColors.hlink.hex,
            folHlink: stormR19.themeColors.folHlink.hex
          }
        };
      }
      set colorScheme(willowR11) {
        this.#t = true;
        this.#e.colorScheme = willowR11;
      }
      get hexColorMap() {
        return this.#e.hexColorMap;
      }
      resolveThemeColorHex(xenonR11) {
        return this.#e.resolveThemeColorHex(xenonR11);
      }
      resolveRenderThemeMap() {
        return riverR1(this.#e);
      }
      replace(cedarR10) {
        this.#t = cedarR10 !== undefined;
        this.#e.replaceFromProto(cedarR10);
        this.#n?.();
      }
      clear() {
        this.#t = false;
        this.#e.replaceFromProto(undefined);
        this.#n?.();
      }
      toProto() {
        return this.#t ? this.#e.toProto() : undefined;
      }
    };
  });
function quartzR2(fernR6) {
  let coralR24 = fernR6.buffer;
  if (coralR24 instanceof ArrayBuffer && fernR6.byteOffset === 0 && fernR6.byteLength === coralR24.byteLength) return new Uint8Array(coralR24);
  let driftR24 = new Uint8Array(fernR6.byteLength);
  return driftR24.set(fernR6), driftR24;
}
function riverR2(gammaR5, harborR5) {
  if (Array.isArray(gammaR5)) {
    for (let isleR14 of gammaR5) riverR2(isleR14, harborR5);
    return;
  }
  if (typeof gammaR5 != "object" || !gammaR5) return;
  let kelpR22 = gammaR5;
  if (kelpR22.type === d.COLOR_TYPE_SCHEME && typeof kelpR22.value == "string" && kelpR22.lastColor === undefined) {
    let harborR14 = harborR5[kelpR22.value] ?? waveR18[kelpR22.value];
    harborR14 !== undefined && (kelpR22.lastColor = harborR14.replace(/^#/, ""));
  }
  for (let valeR14 of Object.values(kelpR22)) riverR2(valeR14, harborR5);
}
var pearlR15,
  quartzR15 = esmInit(() => {
    w();
    _();
    workbookC();
    workbookN();
    topazR17();
    sageR21();
    quartzR20();
    topazR25();
    bravoR15();
    xenonR15();
    topazR15();
    elmR15();
    slateR16();
    $t();
    frostR21();
    elmR21();
    novaR22();
    echoR15();
    harborR15();
    jadeR15();
    lemonR15();
    onyxR15();
    workbookL();
    pearlR15 = class PopcornElectronDocumentPanelClass2 {
      #e;
      #t;
      #n = new WorkbookI();
      #r = new Set();
      #i;
      charts;
      images;
      textStyles;
      tableStyleDefinitions;
      fonts;
      settings;
      theme;
      commentContents;
      commentReferences;
      sections;
      numbering;
      comments;
      citations;
      footnotes;
      endnotes;
      revisions;
      constructor(duskR8) {
        let quillR17 = duskR8;
        this.#e = {
          id: duskR8.id ?? "",
          name: duskR8.name ?? "Untitled document",
          widthEmu: duskR8.widthEmu ?? 0,
          heightEmu: duskR8.heightEmu ?? 0
        };
        this.#t = new ivoryR15();
        this.charts = new WorkbookW({
          fontFamilyCache: this.#n,
          stub: () => {}
        }, duskR8.charts ?? []);
        this.images = new WorkbookW({
          stub: () => {}
        }, duskR8.images ?? []);
        this.textStyles = new kiteR15(duskR8.textStyles ?? [], {
          fontFamilyCache: this.#n,
          onMutated: () => this.invalidateLayoutCache()
        });
        this.tableStyleDefinitions = new indigoR15(duskR8.tableStyleDefinitions ?? [], {
          fontFamilyCache: this.#n,
          onMutated: () => this.invalidateLayoutCache()
        });
        this.fonts = new gammaR16(duskR8.fonts ?? [], {
          onMutated: () => this.invalidateLayoutCache()
        });
        this.settings = new gammaR15(duskR8.settings, {
          onMutated: () => this.invalidateLayoutCache()
        });
        this.theme = new nickelR15(duskR8.theme, {
          onMutated: () => this.invalidateLayoutCache()
        });
        this.#n.addThemeFontScheme(duskR8.theme?.fontScheme);
        this.commentContents = new riverR24(duskR8.comments ?? [], {
          onMutated: () => this.invalidateLayoutCache()
        });
        this.commentReferences = new northR13(duskR8.commentReferences ?? [], {
          onMutated: () => this.invalidateLayoutCache()
        });
        this.#i = {
          fontFamilyCache: this.#n,
          charts: this.charts,
          images: this.images,
          getExistingElementIds: () => [...this.#r],
          registerElementId: stormR11 => {
            stormR11.length > 0 && this.#r.add(stormR11);
          },
          readTextStyleDefinitions: () => this.textStyles.toProto(),
          invalidateLayout: () => this.invalidateLayoutCache()
        };
        this.sections = new deltaR15({
          sections: duskR8.sections ?? [],
          fallbackElements: duskR8.elements ?? [],
          context: this.#i
        });
        this.numbering = new questR21(duskR8.numberingDefinitions ?? [], duskR8.paragraphNumberings ?? []);
        let reefR17 = this.sections.first.body,
          sageR17 = this.sections.first.pageSetup;
        sageR17?.widthEmu && (this.#e.widthEmu = sageR17.widthEmu);
        sageR17?.heightEmu && (this.#e.heightEmu = sageR17.heightEmu);
        this.comments = new marbleR15({
          people: [],
          threads: [],
          documentId: this.#e.id,
          textElementId: reefR17.textElementId,
          resolveTextRange: garnetR13 => garnetR13.getTextRange()
        });
        this.citations = new mossR13(quillR17.contentReferences ?? []);
        this.footnotes = new oliveR16({
          footnotes: duskR8.footnotes ?? [],
          fontFamilyCache: this.#n,
          documentId: this.#e.id,
          textElementId: reefR17.textElementId,
          resolveTextRange: hazelR13 => hazelR13.getTextRange(),
          onMutated: () => this.invalidateLayoutCache()
        });
        this.endnotes = new questR15({
          endnotes: duskR8.endnotes ?? [],
          fontFamilyCache: this.#n,
          documentId: this.#e.id,
          textElementId: reefR17.textElementId,
          resolveTextRange: ivoryR13 => ivoryR13.getTextRange(),
          onMutated: () => this.invalidateLayoutCache()
        });
        this.revisions = new cedarR22(duskR8.reviewMarks ?? []);
      }
      static create() {
        return new PopcornElectronDocumentPanelClass2(lotusR3());
      }
      static load(lunarR12) {
        return new PopcornElectronDocumentPanelClass2(lunarR12);
      }
      static fromDocumentBytes(reefR11) {
        return PopcornElectronDocumentPanelClass2.load(oStub.decode(reefR11));
      }
      get id() {
        return this.#e.id;
      }
      get fontFamilies() {
        return this.#n.fontFamilies;
      }
      get name() {
        return this.#e.name;
      }
      set name(prismR12) {
        this.#e.name = prismR12 ?? "";
      }
      get body() {
        return this.sections.first.body;
      }
      invalidateLayoutCache() {
        this.#t.reset();
      }
      resolveLayoutPages(brookR10, cliffR10) {
        return this.#t.getPages(this.toProto(), brookR10, cliffR10);
      }
      get pagePaintContext() {
        return {
          chartsById: new Map(this.charts.toProto().filter(item => !!item.id).map(item => [item.id, item])),
          pageBackgroundFill: this.settings.displayBackgroundShape === false ? undefined : this.settings.resolveRenderBackgroundFill(),
          themeMap: this.theme.resolveRenderThemeMap()
        };
      }
      toProto() {
        let reefR18 = this.comments.toProto(),
          sageR18 = this.sections.toProto(),
          topazR18 = sageR18.flatMap(item => item.elements ?? []),
          ultraR18 = this.numbering.toProto(),
          vaporR18 = sageR18[0]?.pageSetup,
          wheatR18 = {
            id: this.#e.id,
            name: this.#e.name,
            widthEmu: vaporR18?.widthEmu ?? this.#e.widthEmu,
            heightEmu: vaporR18?.heightEmu ?? this.#e.heightEmu,
            charts: this.charts.toProto(),
            elements: topazR18,
            images: this.images.toProto(),
            footnotes: this.footnotes.toProto(),
            comments: this.commentContents.toProto(),
            commentReferences: this.commentReferences.toProto(),
            textStyles: this.textStyles.toProto(),
            reviewMarks: this.revisions.toProto(),
            sections: sageR18,
            numberingDefinitions: ultraR18.numberingDefinitions,
            paragraphNumberings: ultraR18.paragraphNumberings,
            tableStyleDefinitions: this.tableStyleDefinitions.toProto(),
            endnotes: this.endnotes.toProto(),
            settings: this.settings.toProto(),
            theme: this.theme.toProto(),
            fonts: this.fonts.toProto()
          };
        return wheatR18.people = reefR18.people, wheatR18.threads = reefR18.threads, wheatR18.contentReferences = this.citations.toProto(), riverR2(wheatR18, this.theme.hexColorMap), wheatR18;
      }
      toDocumentBytes() {
        return quartzR2(oStub.encode(this.toProto()).finish());
      }
      save() {}
      export(kelpR7 = {
        format: "layout"
      }) {
        let echoR25 = kelpR7.format ?? "layout";
        if (echoR25 === "layout") return Promise.resolve(flintR1(this));
        throw Error(`Unsupported document export format: ${echoR25}`);
      }
    };
  });
function SlateR2({
  artifactLabel,
  title,
  className,
  header,
  toolbar,
  sidebar,
  footer,
  children
}) {
  return <div className={IntlProvider("bg-token-bg-primary text-token-text-primary flex h-full min-h-0 flex-col", className)}>{header ?? <header className="border-token-border-light flex items-center justify-between border-b px-4 py-3"><div className="min-w-0"><div className="text-token-text-tertiary text-xs font-medium uppercase tracking-[0.12em]">{artifactLabel}</div><div className="truncate text-sm font-semibold">{title}</div></div>{toolbar ? <div className="ms-4 flex shrink-0 items-center gap-2">{toolbar}</div> : null}</header>}<div className="flex min-h-0 flex-1 overflow-hidden">{sidebar ? <aside className="border-token-border-light bg-token-bg-secondary min-h-0 w-[240px] shrink-0 overflow-auto border-e">{sidebar}</aside> : null}<div className="min-h-0 min-w-0 flex-1">{children}</div></div>{footer ? <footer className="border-token-border-light bg-token-bg-secondary border-t">{footer}</footer> : null}</div>;
}
var riverR15,
  slateR15 = esmInit(() => {
    ensureComposerEsm_Tft_Init();
    riverR15 = getJsxRuntime();
  });
function $c(willowR4) {
  let [prismR21, quillR21] = el.useState({
    width: 0,
    height: 0
  });
  return el.useEffect(() => {
    let emberR22 = willowR4.current;
    if (!emberR22) return;
    let flintR22 = () => {
      let driftR25 = emberR22.getBoundingClientRect();
      quillR21({
        width: Math.max(0, Math.round(driftR25.width)),
        height: Math.max(0, Math.round(driftR25.height))
      });
    };
    flintR22();
    let garnetR22 = new ResizeObserver(flintR22);
    return garnetR22.observe(emberR22), () => {
      garnetR22.disconnect();
    };
  }, [willowR4]), prismR21;
}
var el,
  timberR15 = esmInit(() => {
    el = commonJsInit(react());
  });
function timberR2() {
  return umbraR15 ??= Promise.all([RemoteTextEditSessionU(), Promise.resolve().then(() => {
    RemoteTextEditSessionP();
  })]).then(() => {}), umbraR15;
}
var umbraR15,
  violetR15 = esmInit(() => {
    RemoteTextEditSessionF();
    RemoteTextEditSessionChrome();
    umbraR15 = null;
  });
function umbraR2() {
  return getFeatureCatalogEntries().map(item => ({
    text: `${violetR2(item.artifact)} / ${item.area}: ${item.feature}. ${item.summary}`,
    style: {
      bulletCharacter: "•",
      marginLeft: 720,
      indent: 360,
      spaceAfter: 120
    }
  }));
}
function violetR2(hillR11) {
  return hillR11.charAt(0).toUpperCase() + hillR11.slice(1);
}
