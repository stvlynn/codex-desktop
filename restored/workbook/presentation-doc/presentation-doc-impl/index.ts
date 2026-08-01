// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: presentation workbook shell (legacy _workbookS / vYe / WorkbookClass3).
// Stage-3 wave-151; wave-157: direct imports (wirePresentationDocHooks retired).

import { esmInit } from "../../../runtime/rolldown-runtime";
import {
  Doc as _o,
  Map as workbookBinding266,
  applyUpdate as workbookBinding210,
  encodeStateAsUpdate as workbookBinding211,
  decodeUpdate as os,
  mergeUpdates as workbookAt,
} from "../../../vendor/yjs";
import {
  $H,
  workbookBinding1325,
  workbookBinding1326,
} from "../../compose-layout";
import {
  workbookBinding1512,
  workbookBinding1507,
  workbookBinding1509,
  workbookBinding1493,
  workbookBinding1494,
  workbookBinding1495,
  workbookBinding1510,
  workbookBinding1505,
  workbookBinding1511,
  workbookBinding1508,
  workbookBinding1502,
  workbookBinding1503,
  workbookBinding1506,
  workbookBinding1501,
  workbookBinding1496,
  workbookBinding1528,
} from "../../compose-dsl";
import { Qt, wr, $ as presentationDollar, Zn } from "../../presentation-protobuf";
import { yEe, aJe, Cze, workbookBinding1489 } from "../../workbook-shell-ensures";
import {
  ensureThemeStyleMapsInit as workbookRt,
  buildThemeStyleMaps as workbookNt,
} from "../../document-style";
import { resolveColorToCssRgba as workbookSt } from "../../color-resolve";
import { ensureCssNamedColorsInit as workbookXt } from "../../presentation-theme";
import { bEe, workbookBinding1289 } from "../../presentation-citations";
import {
  workbookD,
  _workbookT,
  workbookE,
  workbookW,
} from "../../presentation-assets";
import {
  dDe,
  fDe,
  workbookBinding1345,
  workbookBinding1346,
} from "../../slide-layout";
import { mDe, workbookBinding1349 } from "../../placeholder-styles";
import { cLe, sLe } from "../../presentation-slide";
import { workbookEt, workbookTt } from "../../emu-units";
import {
  ensureWorkbookThemeInit as workbookY,
  WorkbookTheme as workbookJ,
} from "../../design-tokens";
import {
  ensureTextStyleInit as workbookBt,
  TextStyle as workbookVt,
} from "../../text-style";
import { jLe, ALe } from "../../presentation-scripts";
import { NLe, MLe } from "../../presentation-list-styles";
import {
  FLe,
  LLe,
  zLe,
  VLe,
  WLe,
  XLe,
  QLe,
  YLe,
  PLe,
  BLe,
  ILe,
  RLe,
  ZLe,
} from "../../presentation-master-defaults";
import {
  ensurePresentationStubContextInit,
  workbookHelper825 as pdHb825,
  _Ye,
} from "../../presentation-stub-context";
import { CRe, _workbookU } from "../../comments";
import {
  ensureStableIdConstantsInit as workbookH,
  randomBase36Id as pdHb299,
  hashToBase36Id as pdHb300,
  normalizeOrHashId as pdHb301,
} from "../../stable-id";
import { qRe, wRe } from "../../deck-kinds";
import {
  ensurePresentationAidInit as eze,
  resolvePresentationAid as ZRe,
} from "../../presentation-aid";
import { workbookKt } from "../../workbook-core/ensure-workbook-n-deps";
import {
  ensurePluginSlotsInit as workbookU,
  requirePresentationHelp as jue,
} from "../../preset-shape";
import { nze, tze } from "../../presentation-patch";
import { dJe, SJe, bJe, xJe, uJe } from "../../google-slides-adapter";
import { tYe, eYe, workbookBinding1815 } from "../../collab-snapshot";
import { rYe, aYe, nYe, iYe } from "../../presentation-artifacts";
import { WorkbookN, __workbookT } from "../../workbook-core";
import {
  _workbookL,
  _workbookC,
  workbookHelper824 as pdHb824,
} from "../../font-stack";
import { fYe, mYe } from "../../presentation-images";
import { runPresentationRecipe as Zqe } from "../../presentation-recipes";
import { rze } from "../../presentation-apply";
import { OJe, EJe, DJe, kJe, CJe } from "../../presentation-presence";
import { workbookHelper676 as pdHb676 } from "../../element-text-layout";
import { vEe } from "../../slide-canvas-render";

function ensurePresentationDocDeps(): void {
  Qt();
  wr();
  yEe();
  workbookRt();
  workbookXt();
  bEe();
  workbookD();
  _workbookT();
  dDe();
  fDe();
  mDe();
  cLe();
  workbookEt();
  workbookY();
  workbookBt();
  jLe();
  NLe();
  FLe();
  LLe();
  zLe();
  VLe();
  ensurePresentationStubContextInit();
  WLe();
  XLe();
  QLe();
  CRe();
  workbookH();
  qRe();
  eze();
  workbookKt();
  workbookU();
  nze();
  Cze();
  workbookBinding1528();
  aJe();
  dJe();
  SJe();
  tYe();
  rYe();
  aYe();
  WorkbookN();
  _workbookL();
  workbookBinding1489();
  workbookBinding1815();
}

export let vYe: any;
export let _workbookO: any;
export let workbookBinding1817: any;
export let yYe: any;

export const _workbookS = esmInit(() => {
  ensurePresentationDocDeps();
  vYe = Object.freeze({
    auto: $H,
    card: workbookBinding1512,
    chart: workbookBinding1507,
    column: workbookBinding1509,
    fill: workbookBinding1493,
    fixed: workbookBinding1494,
    fr: workbookBinding1325,
    grow: workbookBinding1495,
    grid: workbookBinding1510,
    hug: "hug",
    image: workbookBinding1505,
    panel: workbookBinding1511,
    repeat: workbookBinding1326,
    row: workbookBinding1508,
    rule: workbookBinding1502,
    shape: workbookBinding1503,
    table: workbookBinding1506,
    text: workbookBinding1501,
    wrap: workbookBinding1496,
  });
  _workbookO = class WorkbookClass3 {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s = false;
    #c = false;
    #l = false;
    #u = false;
    #d;
    #f = [];
    #p = new _workbookC();
    #m;
    #h;
    #g = [];
    styles;
    theme;
    slides;
    layouts;
    masters;
    charts;
    images;
    citations;
    scripts;
    comments;
    artifacts;
    awareness;
    view;
    #_;
    #v;
    #y = new WeakMap();
    #b = 0;
    #x = new Map();
    constructor(pdIn219, pdIn220, pdIn221 = {}) {
      yYe(pdIn220);
      this.#e = {
        id: pdIn220.id && pdIn220.id.length > 0 ? pdIn220.id : pdHb299(),
      };
      this.artifacts = new nYe(this.#e.id);
      this.#t = new _o();
      this.#n = EJe(this.#t);
      this.#i = {};
      this.#a = {};
      this.#r = new is(this.#t, {
        trackedOrigins: new Set([this.#i]),
        captureTimeout: 0,
      });
      this.#d = pdIn220.tableStyles
        ? {
            ...pdIn220.tableStyles,
          }
        : undefined;
      this.#f = pdHb824(pdIn220.fonts);
      this.view = new iYe(
        {
          queuePresentationCollabPublish: () =>
            this.queuePresentationCollabPublish(),
        },
        pdIn220.viewProperties,
      );
      this.styles = new workbookBinding1349();
      let pdBind3228 = {
          resolveThemeColor: (pdIn15347) =>
            this.theme?.resolveThemeColorHex(pdIn15347),
        },
        pdBind3229 = pdIn220.theme ?? {};
      this.#p.addThemeFontScheme(pdBind3229.fontScheme);
      let pdBind3230 = pdIn220.layouts ?? [],
        pdBind3231 = pdIn220.slides ?? [],
        pdBind3232 = pdIn220.charts ?? [],
        pdBind3233 = pdIn220.images ?? [],
        pdBind3234 = pdIn220.contentReferences ?? [];
      this.theme = new workbookJ(this.#Y(), pdBind3229, pdBind3228);
      this.charts = new workbookE(this.#Q(), pdBind3232);
      this.images = new workbookW(this.#$(), pdBind3233);
      this.#_ = {
        getChartById: (pdIn15918) => this.charts.getById(pdIn15918),
        getImageById: (pdIn15919) => this.images.getById(pdIn15919),
        createImageAsset: (pdIn16151) => this.images.add(pdIn16151),
        createChartAsset: (pdIn16152) => this.charts.add(pdIn16152),
        attachChartAsset: (pdIn16033) => this.charts.attach(pdIn16033),
      };
      this.layouts = new workbookBinding1345(this.#X(), pdBind3230);
      this.masters = new workbookBinding1346(this.layouts);
      let pdBind3235 = this.#te(pdIn221.slideSize);
      this.slides = new sLe(this.#Z(), pdBind3231, pdBind3235);
      this.awareness = new CJe({
        activeSlideId: this.slides.items[0]?.id ?? null,
      });
      this.citations = new workbookBinding1289(this.#ee(), pdBind3234);
      this.scripts = new ALe({
        presentation: this,
      });
      this.comments = new _workbookU({
        people: pdIn220.people ?? [],
        threads: pdIn220.threads ?? [],
        recordOp: (pdIn10440) => {
          this.queuePresentationCollabPublish();
          this.#h && this.#h.record(pdIn10440);
        },
      });
      this.#o = new eYe({
        root: this.#n,
        runLocalTransaction: (pdIn15552) =>
          this.runLocalCollabTransaction(pdIn15552),
        getCollabOrigins: () => this.getCollabOrigins(),
        readTheme: () => this.theme.toProto(),
        applyTheme: (pdIn9293) => {
          this.#p.addThemeFontScheme(pdIn9293?.fontScheme);
          this.theme.replaceFromProto(pdIn9293);
          this.#S();
        },
        readTableStyles: () => this.tableStyles,
        applyTableStyles: (pdIn12896) => {
          this.#d = pdIn12896
            ? {
                ...pdIn12896,
              }
            : undefined;
        },
        readFonts: () => pdHb824(this.#f),
        applyFonts: (pdIn12942) => {
          this.#f = pdHb824(pdIn12942);
          this.#S();
        },
        readLayouts: () => this.layouts.toProto(),
        applyLayouts: (pdIn12569) => {
          this.layouts.replace(pdIn12569);
          this.#S();
        },
        readCharts: () => this.charts.toProto(),
        applyCharts: (pdIn13546) => {
          this.charts.replace(pdIn13546);
        },
        readImages: () => this.images.toProto(),
        applyImages: (pdIn11752) => {
          this.images.replace(fYe(this.images.toProto(), pdIn11752));
        },
        readCitations: () => this.citations.toProto(),
        applyCitations: (pdIn13268) => {
          this.citations.replace(pdIn13268);
        },
        readComments: () => this.comments.toProto(),
        applyComments: (pdIn12753) => {
          this.comments.replaceFromProto(pdIn12753);
        },
        readSlides: () => this.slides.toProto(),
        applySlides: (pdIn12632) => {
          this.slides.replace(pdIn12632);
          this.#S();
        },
      });
      this.#v = pdIn221.googleSlides
        ? new bJe(this, pdIn221.googleSlides)
        : undefined;
    }
    static create(pdIn3401, pdIn3402) {
      let { context, options } = pdHb825(pdIn3401, pdIn3402),
        pdBind11791 = new WorkbookClass3(
          context,
          {
            id: "",
            slides: [],
            layouts: [],
            theme: undefined,
            charts: [],
            images: [],
            contentReferences: [],
            textStyles: [],
            fonts: [],
            people: [],
            threads: [],
          },
          options,
        );
      return (pdBind11791.#R(), pdBind11791);
    }
    static load(pdIn10760, pdIn10761, pdIn10762) {
      let { context, options } = pdHb825(pdIn10761, pdIn10762);
      return new WorkbookClass3(context, pdIn10760, options);
    }
    static fromPresentationBytes(pdIn12310) {
      return WorkbookClass3.load(presentationDollar.decode(pdIn12310));
    }
    static loadArtifactBundle(pdIn3284, pdIn3285, pdIn3286) {
      let pdBind11523 = pdIn3284.artifacts.find(
        (item) => item.id === pdIn3284.rootArtifactId,
      );
      if (!pdBind11523?.presentation)
        throw Error(
          "ArtifactBundle must contain a presentation root artifact.",
        );
      let { context, options } = pdHb825(pdIn3285, pdIn3286),
        pdBind11524 = new WorkbookClass3(
          context,
          pdBind11523.presentation,
          options,
        );
      for (let pdBind19564 of pdIn3284.artifacts)
        pdBind19564.workbook &&
          pdBind11524.artifacts.hydrateWorkbook(
            pdBind19564.id,
            __workbookT.load(pdBind19564.workbook),
            {
              title: pdBind19564.title,
            },
          );
      return pdBind11524;
    }
    static async fromGoogleSlides(pdIn4102) {
      let pdBind13074 = await pdIn4102.client.getPresentation(
          pdIn4102.presentationId,
          {
            fields: pdIn4102.fields,
          },
        ),
        pdBind13075 = xJe(pdBind13074),
        pdBind13076 = pdBind13075
          ? {
              slideSize: pdBind13075,
              googleSlides: pdIn4102,
            }
          : {
              googleSlides: pdIn4102,
            },
        pdBind13077 = WorkbookClass3.create(pdBind13076),
        pdBind13078 = pdBind13077.googleSlides;
      if (!pdBind13078)
        throw Error("Google Slides adapter was not initialized.");
      return (await pdBind13078.hydrateFromSlides(pdBind13074), pdBind13077);
    }
    get id() {
      return this.#e.id;
    }
    get fontFamilies() {
      return this.#p.fontFamilies;
    }
    get compose() {
      return vYe;
    }
    toSnapshot() {
      return {
        aid: `pr/${this.id}`,
        kind: "presentation",
        id: this.id,
        title: "Deck",
        slides: this.slides.items.map((item) => item.toSnapshot()),
        threads: this.comments.threads.items.map((item) => item.toSnapshot()),
      };
    }
    get tableStyles() {
      return this.#d
        ? {
            ...this.#d,
          }
        : undefined;
    }
    set tableStyles(pdIn10468) {
      this.#d = pdIn10468
        ? {
            ...pdIn10468,
          }
        : undefined;
      this.queuePresentationCollabPublish();
    }
    getActiveSlide() {
      return this.slides.getActive();
    }
    setActiveSlide(pdIn13450) {
      this.slides.setActive(pdIn13450);
    }
    export(
      pdIn4848 = {
        format: "png",
      },
    ) {
      let pdBind14231 =
        pdIn4848.slide ??
        this.getActiveSlide() ??
        (this.slides.count > 0 ? this.slides.getItem(0) : undefined);
      if (!pdBind14231)
        throw Error("Cannot export presentation without any slides.");
      let { slide, ...rest } = pdIn4848,
        pdBind14232 = {
          ...rest,
          format: rest.format ?? "png",
        };
      return pdBind14231.export(pdBind14232);
    }
    toProto() {
      return mYe({
        id: this.#e.id,
        slides: this.slides.toProto(),
        layouts: this.layouts.toProto(),
        theme: this.theme.toProto(),
        charts: this.charts.toProto(),
        images: this.images.toProto(),
        contentReferences: this.citations.toProto(),
        fonts: pdHb824(this.#f),
        tableStyles: this.#d,
        viewProperties: this.view.toProto(),
        textStyles: [],
        people: this.comments.people.toProto(),
        threads: this.comments.threads.toProto(),
      });
    }
    toPresentationBytes() {
      return presentationDollar.encode(this.toProto()).finish();
    }
    toArtifactBundle() {
      return this.artifacts.toBundle(this.toProto());
    }
    inspect(pdIn14560) {
      return wRe(this, pdIn14560);
    }
    help(pdIn12846, pdIn12847) {
      return jue().buildPresentationHelp(pdIn12846, pdIn12847);
    }
    script(pdIn13547, pdIn13548) {
      return Zqe(this, pdIn13547, pdIn13548 ?? {});
    }
    template(pdIn9616) {
      let pdBind20152 = uJe.get(pdIn9616);
      if (!pdBind20152)
        throw Error(`Unknown presentation template: ${pdIn9616}`);
      return _Ye(pdBind20152.patch);
    }
    resolve(pdIn14561) {
      return ZRe(this, pdIn14561);
    }
    apply(pdIn6428, pdIn6429) {
      let pdBind16617 = rze(this, pdIn6428);
      if (pdIn6429?.target === "googleSlides") {
        let pdBind20018 = this.#v;
        if (!pdBind20018)
          throw Error("Google Slides adapter is not configured.");
        return pdBind20018.applyPatch(pdIn6428, pdBind16617);
      }
      return pdBind16617;
    }
    record(pdIn1654) {
      if (this.#h)
        throw Error("Presentation.record does not support nested recordings.");
      let pdBind7899 = new tze(this),
        pdBind7900 = [],
        pdBind7901 = (pdIn11296, pdIn11297) => {
          (pdIn11297 !== this.#i && pdIn11297 !== this.#a) ||
            pdBind7900.push(new Uint8Array(pdIn11296));
        };
      this.#t.on("updateV2", pdBind7901);
      this.#h = pdBind7899;
      let pdBind7902;
      try {
        return (
          this.#u || this.#J(),
          this.#t.transact(() => {
            pdBind7902 = pdIn1654();
          }, this.#i),
          this.queuePresentationCollabPublish(),
          this.#G(),
          {
            result: pdBind7902,
            patch: pdBind7899.getPatch(),
            idMap: pdBind7899.getIdMap(),
            crdtUpdateV2:
              pdBind7900.length > 0 ? workbookAt(pdBind7900) : undefined,
          }
        );
      } finally {
        this.#t.off("updateV2", pdBind7901);
        this.#r.stopCapturing();
        this.#h = undefined;
      }
    }
    hydrateCrdtFromProto() {
      this.runLocalCollabTransaction(() => {
        this.#H();
        this.#u = true;
        for (let pdBind22942 of this.slides.items) this.#U(pdBind22942.id);
        for (let pdBind22300 of this.slides.items)
          pdBind22300.hydrateCollaborativeRefsFromProto();
        this.#o.activate();
        this.#o.flushFromOwner();
      });
    }
    loadInitialCrdtStateV2(pdIn10966) {
      this.#K("loadInitialCrdtStateV2");
      this.applyCrdtUpdateV2(pdIn10966);
    }
    getCrdtDoc() {
      return this.#t;
    }
    isCollaborativeStateReady() {
      return this.#u;
    }
    __flushPendingCollaborativePublishes() {
      this.#G();
    }
    getCollabOrigins() {
      return {
        record: this.#i,
        local: this.#a,
      };
    }
    queuePresentationCollabPublish() {
      this.#S();
      !(!this.#u || this.#s) && ((this.#c = true), this.#W());
    }
    #S() {
      this.#b > 0 || ((this.#y = new WeakMap()), this.#x.clear());
    }
    runLocalCollabTransaction(pdIn8611) {
      let pdBind19115;
      return (
        this.#t.transact(() => {
          pdBind19115 = pdIn8611();
        }, this.#a),
        pdBind19115
      );
    }
    getSlideCollabState(pdIn8100) {
      if (pdIn8100.length === 0) return;
      let pdBind18604 = OJe(this.#n);
      if (!pdBind18604) return;
      let pdBind18605 = pdBind18604.get(pdIn8100);
      return pdBind18605 instanceof workbookBinding266
        ? pdBind18605
        : undefined;
    }
    hydrateSlideCollaborativeState(pdIn7855) {
      this.#u &&
        this.runLocalCollabTransaction(() => {
          this.#H();
          this.#U(pdIn7855.id);
          pdIn7855.hydrateCollaborativeRefsFromProto();
        });
    }
    removeSlideCollaborativeState(pdIn6760) {
      if (!this.#u || pdIn6760.length === 0) return;
      let pdBind17066 = OJe(this.#n);
      !pdBind17066 ||
        !pdBind17066.has(pdIn6760) ||
        this.runLocalCollabTransaction(() => {
          pdBind17066.delete(pdIn6760);
        });
    }
    getRecorder() {
      return this.#h;
    }
    queueImageGenerationRequest(pdIn12681) {
      this.#g.push({
        ...pdIn12681,
      });
    }
    drainImageGenerationRequests() {
      let pdBind20865 = this.#g.map((item) => ({
        ...item,
      }));
      return ((this.#g = []), pdBind20865);
    }
    getPendingImageHydrationRequests() {
      return this.images.items.flatMap((item) =>
        item.data.byteLength > 0 || !item.uri
          ? []
          : [
              {
                assetId: item.id,
                contentType: item.contentType || undefined,
                uri: item.uri,
              },
            ],
      );
    }
    hydrateImageAssets(pdIn5100) {
      let pdBind14560 = false;
      for (let pdBind16408 of pdIn5100) {
        if (!pdBind16408.assetId || pdBind16408.data.byteLength === 0) continue;
        let pdBind16832 = this.images.getById(pdBind16408.assetId);
        pdBind16832 &&
          ((pdBind16832.data = pdBind16408.data),
          pdBind16408.contentType &&
            (pdBind16832.contentType = pdBind16408.contentType),
          (pdBind14560 = true));
      }
      return pdBind14560;
    }
    applyCrdtUpdateV2(pdIn7517) {
      this.#u = true;
      this.#s = true;
      try {
        workbookBinding210(
          this.#t,
          pdIn7517 instanceof Uint8Array ? pdIn7517 : new Uint8Array(pdIn7517),
        );
      } finally {
        this.#s = false;
      }
    }
    onCrdtUpdateV2(pdIn6873) {
      let pdBind17193 = (pdIn13841, pdIn13842) => {
        pdIn6873(new Uint8Array(pdIn13841), pdIn13842);
      };
      return (
        this.#t.on("updateV2", pdBind17193),
        () => {
          this.#t.off("updateV2", pdBind17193);
        }
      );
    }
    undo() {
      this.#r.undo();
    }
    redo() {
      this.#r.redo();
    }
    canUndo() {
      return this.#r.canUndo();
    }
    canRedo() {
      return this.#r.canRedo();
    }
    get googleSlides() {
      return this.#v;
    }
    resolveSlideRenderContext(pdIn9050) {
      let pdBind19606 = this.#y.get(pdIn9050);
      if (pdBind19606) return pdBind19606;
      let pdBind19607 = this.#C(pdIn9050);
      return (this.#y.set(pdIn9050, pdBind19607), pdBind19607);
    }
    #C(pdIn9902) {
      this.#b += 1;
      try {
        return this.#w(pdIn9902);
      } finally {
        --this.#b;
      }
    }
    #w(pdIn780) {
      let pdBind5335 = this.layouts.getById(pdIn780.useLayoutId),
        pdBind5336 = this.#k(pdBind5335),
        pdBind5337 = pdBind5335?.theme ?? pdBind5336?.theme ?? this.theme,
        pdBind5338 = pdBind5335?.colorMap ?? pdBind5336?.colorMap,
        pdBind5339 = this.#A(pdBind5337, pdBind5338),
        pdBind5340 =
          pdIn780.showMasterShapes === false ? [] : this.#O(pdBind5336),
        pdBind5341 = this.#O(pdBind5335),
        pdBind5342 = pdIn780.elements.items
          .filter((item) => item.hidden !== true)
          .map((item, index) => ({
            element: item,
            index,
            zIndex: item.zIndex ?? 0,
          }))
          .sort((pdIn11930, pdIn11931) =>
            pdIn11930.zIndex === pdIn11931.zIndex
              ? pdIn11930.index - pdIn11931.index
              : pdIn11930.zIndex - pdIn11931.zIndex,
          )
          .map(({ element }) => element),
        pdBind5343 = [...pdBind5340, ...pdBind5341, ...pdBind5342],
        pdBind5344 = {
          themeMap: pdBind5339,
          layout: pdBind5335,
          masterLayout: pdBind5336,
          background: this.#j(
            pdIn780,
            pdBind5335,
            pdBind5336,
            pdBind5337,
            pdBind5339,
          ),
          masterElements: pdBind5340,
          layoutElements: pdBind5341,
          slideElements: pdBind5342,
          drawElements: pdBind5343,
          usesBackgroundFill: false,
          drawElementProtos: [],
          drawElementInheritedMaskSources: [],
          drawElementShapeRenderSources: [],
        };
      this.#y.set(pdIn780, pdBind5344);
      let pdBind5345 = [],
        pdBind5346 = [],
        pdBind5347 = [];
      for (let pdBind16646 of pdBind5343) {
        let pdBind17086 = pdBind16646.toProto();
        this.#T(pdBind17086, pdIn780.slideNumber);
        pdBind5345.push(pdBind17086);
        pdBind5346.push(this.#E(pdIn780, pdBind16646, pdBind17086));
        let pdBind17087 = this.#D(pdIn780, pdBind16646);
        pdBind5347.push(pdBind17087);
        pdBind5344.usesBackgroundFill ||=
          pdBind17087?.source.useBackgroundFill ?? false;
      }
      return (
        (pdBind5344.drawElementProtos = pdBind5345),
        (pdBind5344.drawElementInheritedMaskSources = pdBind5346),
        (pdBind5344.drawElementShapeRenderSources = pdBind5347),
        pdBind5344
      );
    }
    #T(pdIn9104, pdIn9105) {
      for (let pdBind20602 of pdIn9104.paragraphs ?? [])
        for (let pdBind22061 of pdBind20602.runs ?? [])
          pdBind22061.fieldType === "slidenum" &&
            (pdBind22061.text = String(pdIn9105));
    }
    #E(pdIn7161, pdIn7162, pdIn7163) {
      if (
        pdIn7162.type !== "image" ||
        pdIn7163.pictureHasPresetGeometry !== false
      )
        return;
      let pdBind17510 = pdIn7161.getInheritedPlaceholderShapes(pdIn7162),
        pdBind17511 = pdBind17510[pdBind17510.length - 1];
      if (pdBind17511)
        return pdHb676(pdBind17511, pdBind17510.slice(0, -1)).source;
    }
    #D(pdIn10811, pdIn10812) {
      if (pdIn10812.type === "shape")
        return pdHb676(
          pdIn10812,
          pdIn10811.getInheritedPlaceholderShapes(pdIn10812),
        );
    }
    #O(pdIn10102) {
      return (pdIn10102?.elements ?? []).filter(
        (item) => item.hidden !== true && !item.hasPlaceholderMetadata,
      );
    }
    #k(pdIn6514) {
      if (pdIn6514?.parentLayoutId) {
        let pdBind21765 = this.layouts.getById(pdIn6514.parentLayoutId);
        if (pdBind21765) return pdBind21765;
      }
      return pdIn6514?.type === "master"
        ? pdIn6514
        : this.layouts.items.find((item) => item.type === "master");
    }
    #A(pdIn5013, pdIn5014) {
      let pdBind14456 = pdIn5014
          ? Object.entries(pdIn5014)
              .map(([pdIn16235, pdIn16236]) => `${pdIn16235}:${pdIn16236}`)
              .join("|")
          : "",
        pdBind14457 = `${pdIn5013.colorScheme.name}:${JSON.stringify(pdIn5013.hexColorMap)}:${pdBind14456}`,
        pdBind14458 = this.#x.get(pdBind14457);
      if (pdBind14458) return pdBind14458;
      let pdBind14459 = workbookNt(pdIn5013, pdIn5014);
      return (this.#x.set(pdBind14457, pdBind14459), pdBind14459);
    }
    #j(pdIn6099, pdIn6100, pdIn6101, pdIn6102, pdIn6103) {
      let pdBind16161 = this.#M(
        pdIn6099.background,
        pdIn6100?.background,
        pdIn6101?.background,
      );
      return {
        baseColor: pdIn6103.colorMap.bg1 || "#ffffff",
        fallbackColor: this.#N(pdBind16161, pdIn6102, pdIn6103),
        background: pdBind16161,
        backgroundImage: this.#P(pdBind16161),
      };
    }
    #M(...pdIn13687) {
      return pdIn13687.find((item) => item?.isSet);
    }
    #N(pdIn2830, pdIn2831, pdIn2832) {
      let pdBind10592 = pdIn2830?.fill.color;
      if (pdBind10592 && pdBind10592.type !== "unspecified")
        return __P_workbookSt__(pdBind10592, pdIn2832);
      if (pdIn2830?.ref && pdIn2830.ref.index != null) {
        let pdBind13170 = pdIn2830.ref.index - 1001,
          pdBind13171 = pdIn2831.backgroundFillStyleList[pdBind13170]?.color;
        return pdBind13171
          ? __P_workbookSt__(
              pdBind13171.type === Zn.COLOR_TYPE_SCHEME &&
                pdBind13171.value === "phClr" &&
                pdIn2830.ref.schemeColor
                ? {
                    ...pdBind13171,
                    value: pdIn2830.ref.schemeColor,
                  }
                : pdBind13171,
              pdIn2832,
            )
          : pdIn2832.colorMap.bg1 || "#ffffff";
      }
      return pdIn2832.colorMap.bg1 || "#ffffff";
    }
    #P(pdIn8549) {
      let pdBind19050 = pdIn8549?.fill.imageReference?.id;
      if (!pdBind19050) return;
      let pdBind19051 = this.images.getById(pdBind19050);
      return pdBind19051
        ? {
            image: pdBind19051,
            background: pdIn8549,
          }
        : undefined;
    }
    async #F(pdIn2783, pdIn2784) {
      let pdBind10465 = pdIn2784.format ?? "png",
        { quality } = pdIn2784,
        pdBind10466 =
          pdIn2784.scale &&
          Number.isFinite(pdIn2784.scale) &&
          pdIn2784.scale > 0
            ? pdIn2784.scale
            : 1,
        pdBind10467 = pdIn2783.frame.width ?? 914400,
        pdBind10468 = pdIn2783.frame.height ?? 914400,
        pdBind10469 = this.#I(pdBind10467, pdBind10468, pdBind10466),
        pdBind10470 = pdBind10469.getContext("2d");
      if (!pdBind10470)
        throw Error("Unable to acquire a 2D canvas context for slide export.");
      pdBind10470.save();
      try {
        pdBind10466 !== 1 && pdBind10470.scale(pdBind10466, pdBind10466);
        await vEe(pdIn2783, this, pdBind10470);
      } finally {
        pdBind10470.restore();
      }
      return this.#L(pdBind10469, pdBind10465, quality);
    }
    #I(pdIn6397, pdIn6398, pdIn6399) {
      let pdBind16569 = Math.max(1, Math.round(pdIn6397 * pdIn6399)),
        pdBind16570 = Math.max(1, Math.round(pdIn6398 * pdIn6399));
      if (typeof OffscreenCanvas < "u")
        return new OffscreenCanvas(pdBind16569, pdBind16570);
      throw Error("OffscreenCanvas API is not available for slide export.");
    }
    async #L(pdIn1972, pdIn1973, pdIn1974) {
      let pdBind8728 =
          pdIn1973 === "jpeg"
            ? "image/jpeg"
            : pdIn1973 === "webp"
              ? "image/webp"
              : "image/png",
        pdBind8729 =
          typeof pdIn1974 == "number" && pdIn1974 >= 0 && pdIn1974 <= 1
            ? pdIn1974
            : undefined;
      if (
        "convertToBlob" in pdIn1972 &&
        typeof pdIn1972.convertToBlob == "function"
      )
        return pdIn1972.convertToBlob({
          type: pdBind8728,
          quality: pdBind8729,
        });
      if ("toBlob" in pdIn1972)
        return new Promise((pdIn5754, pdIn5755) => {
          pdIn1972.toBlob(
            (pdIn8343) => {
              if (!pdIn8343) {
                pdIn5755(Error("Canvas export produced an empty blob."));
                return;
              }
              pdIn5754(pdIn8343);
            },
            pdBind8728,
            pdBind8729,
          );
        });
      throw Error("Canvas export is not supported in this environment.");
    }
    #R() {
      if (this.layouts.items.length > 0) return;
      let pdBind15345 = this.masters.add("Master");
      this.#B(pdBind15345);
      let pdBind15346 = this.layouts.add("Title Slide", {
        type: "title",
      });
      pdBind15346.setParentLayoutId(pdBind15345.id);
      this.#V(pdBind15346);
      this.#m = pdBind15346.id;
      this.tableStyles = YLe;
    }
    #z() {
      if (this.#m) return this.layouts.getById(this.#m);
    }
    #B(pdIn1865) {
      pdIn1865.background.ref = {
        index: 1001,
        schemeColor: "bg1",
      };
      pdIn1865.setColorMap(PLe);
      pdIn1865.bodyLevelStyles.push(...MLe);
      pdIn1865.titleLevelStyles.push(...BLe);
      pdIn1865.otherLevelStyles.push(...ILe);
      RLe.forEach((item) => {
        let pdBind10904 = pdIn1865.shapes.add({
          geometry: "rect",
        });
        pdBind10904.name = item.name;
        pdBind10904.placeholderType = item.placeholderType;
        pdBind10904.placeholderIndex = item.placeholderIndex;
        pdBind10904.frame = {
          left: of(item.frame.xEmu),
          top: of(item.frame.yEmu),
          width: of(item.frame.widthEmu),
          height: of(item.frame.heightEmu),
        };
        item.textStyle &&
          (pdBind10904.textStyle = new workbookVt(item.textStyle));
        item.levelsStyles?.length &&
          pdBind10904.levelsStyles.push(...item.levelsStyles);
      });
    }
    #V(pdIn2970) {
      ZLe.forEach((item) => {
        let pdBind11320 = pdIn2970.shapes.addPlaceholder(item.name);
        pdBind11320.placeholderType = item.placeholderType;
        pdBind11320.placeholderIndex = item.placeholderIndex;
        item.frame &&
          (pdBind11320.frame = {
            left: of(item.frame.xEmu),
            top: of(item.frame.yEmu),
            width: of(item.frame.widthEmu),
            height: of(item.frame.heightEmu),
          });
        item.textStyle &&
          (pdBind11320.textStyle = new workbookVt(item.textStyle));
        item.levelsStyles?.length &&
          pdBind11320.levelsStyles.push(...item.levelsStyles);
      });
    }
    #H() {
      DJe({
        root: this.#n,
        runLocalTransaction: (pdIn15553) =>
          this.runLocalCollabTransaction(pdIn15553),
      });
    }
    #U(pdIn4293) {
      if (pdIn4293.length === 0)
        throw Error("Slide collaborative state requires a non-empty slideId.");
      let pdBind13373 = kJe({
          root: this.#n,
          runLocalTransaction: (pdIn15554) =>
            this.runLocalCollabTransaction(pdIn15554),
        }),
        pdBind13374 = pdBind13373.get(pdIn4293);
      if (pdBind13374 instanceof workbookBinding266) return pdBind13374;
      let pdBind13375 = new workbookBinding266();
      return (pdBind13373.set(pdIn4293, pdBind13375), pdBind13375);
    }
    #W() {
      this.#l ||
        ((this.#l = true),
        queueMicrotask(() => {
          this.#G();
        }));
    }
    #G() {
      this.#l = false;
      !(!this.#c || this.#s) &&
        ((this.#c = false),
        this.runLocalCollabTransaction(() => {
          this.#H();
          this.#o.activate();
          this.#o.flushFromOwner();
        }));
    }
    #K(pdIn10779) {
      if (this.#q())
        throw Error(`${pdIn10779} requires an empty collaborative document.`);
    }
    #q() {
      return os(workbookBinding211(this.#t)).structs.length > 0;
    }
    #J() {
      for (let pdBind22943 of this.slides.items) this.#U(pdBind22943.id);
      for (let pdBind22361 of this.slides.items)
        pdBind22361.hydrateCollaborativeRefsFromProto();
    }
    #Y() {
      return {
        stub: () => {},
        addTextStyle: (pdIn15754) => this.styles.add(pdIn15754).textStyle,
        resolveTextStyle: (pdIn15612) =>
          this.styles.resolveTextStyle(pdIn15612),
        queueCollaborativePublish: () => this.queuePresentationCollabPublish(),
      };
    }
    #X() {
      return {
        fontFamilyCache: this.#p,
        stub: () => {},
        ...this.#_,
        createTheme: (pdIn15653) =>
          new workbookJ(
            {
              stub: () => {},
            },
            pdIn15653,
          ),
        invalidateRenderContextCache: () => this.#S(),
        getTextStyleByName: (pdIn15613) =>
          this.styles.resolveTextStyle(pdIn15613),
      };
    }
    #Z() {
      return {
        fontFamilyCache: this.#p,
        stub: () => {},
        ...this.#_,
        getPresentation: () => this,
        getLayoutByName: (pdIn15877) => this.layouts.getItem(pdIn15877),
        getLayoutById: (pdIn15878) => this.layouts.getById(pdIn15878),
        getDefaultLayout: () => this.#z(),
        renderSlidePreview: (pdIn16237, pdIn16238) =>
          this.#F(pdIn16237, pdIn16238),
        resolveSlideRenderContext: (pdIn15555) =>
          this.resolveSlideRenderContext(pdIn15555),
        invalidateRenderContextCache: () => this.#S(),
        getTextStyleByName: (pdIn15614) =>
          this.styles.resolveTextStyle(pdIn15614),
      };
    }
    #Q() {
      return {
        fontFamilyCache: this.#p,
        stub: () => {},
      };
    }
    #$() {
      return {
        stub: () => {},
      };
    }
    #ee() {
      return {
        stub: () => {},
      };
    }
    #te(pdIn6375) {
      if (!pdIn6375) return {};
      let pdBind16533 = workbookTt(pdIn6375.width),
        pdBind16534 = workbookTt(pdIn6375.height),
        pdBind16535 = {};
      return (
        pdBind16533 !== undefined &&
          (pdBind16535.defaultWidthEmu = pdBind16533),
        pdBind16534 !== undefined &&
          (pdBind16535.defaultHeightEmu = pdBind16534),
        pdBind16535
      );
    }
  };
  workbookBinding1817 = 8;
  yYe = (pdIn1499) => {
    pdIn1499.id &&= pdHb301("pr", pdIn1499.id, workbookBinding1817);
    let pdBind7517 = new Map(),
      pdBind7518 = new Set();
    (pdIn1499.slides ?? []).forEach((item) => {
      if (!item.id) return;
      let workbookBinding14936 = item.id,
        workbookBinding14937 = pdHb301(
          "sl",
          workbookBinding14936,
          workbookBinding1817,
        );
      if (pdBind7518.has(workbookBinding14937)) {
        let pdBind20396 = 1,
          pdBind20397 = workbookBinding14937;
        for (; pdBind7518.has(pdBind20397); ) {
          pdBind20397 = pdHb300(
            `${workbookBinding14936}#${pdBind20396}`,
            workbookBinding1817,
          );
          pdBind20396 += 1;
        }
        workbookBinding14937 = pdBind20397;
      }
      pdBind7518.add(workbookBinding14937);
      workbookBinding14937 !== item.id &&
        (pdBind7517.has(item.id) ||
          pdBind7517.set(item.id, workbookBinding14937),
        (item.id = workbookBinding14937));
    });
    (pdIn1499.threads ?? []).forEach((item) => {
      item.id &&= pdHb301("th", item.id, workbookBinding1817);
      let pdBind11829 = item.target;
      !pdBind11829 ||
        pdBind7517.size === 0 ||
        (pdBind11829.slide?.slideId &&
          (pdBind11829.slide.slideId =
            pdBind7517.get(pdBind11829.slide.slideId) ??
            pdBind11829.slide.slideId),
        pdBind11829.element?.slideId &&
          (pdBind11829.element.slideId =
            pdBind7517.get(pdBind11829.element.slideId) ??
            pdBind11829.element.slideId),
        pdBind11829.textRange?.slideId &&
          (pdBind11829.textRange.slideId =
            pdBind7517.get(pdBind11829.textRange.slideId) ??
            pdBind11829.textRange.slideId));
    });
  };
});

export function ensureWorkbookSInit(): void {
  _workbookS();
}
