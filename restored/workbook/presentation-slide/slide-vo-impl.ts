// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: presentation Slide VO
// (legacy Z$ / X$ / tLe / nLe / rLe / iLe).
// Stage-3 wave-87 cohesive presentation-slide VO kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  ensureSlidePlaceholderRolesInit as ensureSlidePlaceholderRoles,
  isPlaceholderVisibleForLayout,
  placeholdersMatch,
} from "../presentation-theme";
import {
  ensureComposeApplyInit as ensureComposeApply,
  ensureComposeThemeTokensInit as ensureComposeThemeTokens,
  applySlideCompose,
  getSlideComposeTheme,
} from "../compose-layout";
import { ensureComposeLayoutMetaInit as ensureComposeLayoutMeta } from "../compose-dsl";
import { emuToFrameUnit, frameUnitToEmu } from "../geometry-transform";
import {
  randomPositiveIntString,
  ensureStableIdConstantsInit as ensureStableIdConstants,
} from "../stable-id";
import { scH } from "../slides-collection";
import { tLe, nLe, X$, rLe, iLe } from "./ps-slots";
import { psH } from "./boundary-hooks";

export const Z$ = esmInit(() => {
  scH.ensureBinding1312();
  psH.ensureKDe();
  psH.ensureBinding1370();
  psH.ensureBinding1296();
  psH.ensureJDe();
  psH.ensureBinding1341();
  psH.ensureBinding1389();
  psH.ensureBinding1343();
  ensureSlidePlaceholderRoles();
  ensureComposeApply();
  ensureComposeThemeTokens();
  ensureComposeLayoutMeta();
  psH.ensureCke();
  psH.ensureBinding1531();
  psH.ensureWorkbookEt();
  ensureStableIdConstants();
  psH.ensureBIe();
  tLe = new Set(["code", "position", "options", "children", "ref", "key"]);
  nLe = new Set([
    "code",
    "language",
    "fileName",
    "position",
    "showHeader",
    "fit",
    "children",
    "ref",
    "key",
  ]);
  X$ = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    constructor(psIn2959: any, psIn2960: any) {
      this.#e = psIn2959;
      this.#t = {
        id: psIn2960?.id ?? "",
        index: psIn2960?.index ?? 0,
        useLayoutId: psIn2960?.useLayoutId ?? "",
        widthEmu: psIn2960?.widthEmu ?? 9144e3,
        heightEmu: psIn2960?.heightEmu ?? 6858e3,
        creationId: psIn2960?.creationId ?? randomPositiveIntString(),
        showMasterShapes: psIn2960?.showMasterShapes,
      };
      this.#n = new psH.Binding1340(this.#d(), psIn2960?.elements ?? []);
      this.#r = new psH.Binding1388(this.#u(), psIn2960?.notesSlide);
      this.#i = new psH.Binding1294(
        this.#f(),
        psIn2960?.background ?? undefined,
      );
      this.#o = [];
    }
    get speakerNotes() {
      return this.#r;
    }
    get background() {
      return this.#i;
    }
    get id() {
      return this.#t.id;
    }
    get index() {
      return this.#t.index;
    }
    get slideNumber() {
      return this.#t.index + 1;
    }
    get creationId() {
      return this.#t.creationId;
    }
    get shapes() {
      return this.#n.shapes;
    }
    get useLayoutId() {
      return this.#t.useLayoutId;
    }
    get showMasterShapes() {
      return (
        this.#t.showMasterShapes ??
        this.#e.getPresentation?.()?.layouts.getById(this.useLayoutId)
          ?.showMasterShapes
      );
    }
    get images() {
      return this.#n.images;
    }
    get tables() {
      return this.#n.tables;
    }
    get charts() {
      return this.#n.charts;
    }
    get artifacts() {
      return this.#n.artifacts;
    }
    get elements() {
      return this.#n;
    }
    get theme() {
      return (
        (this.#s ||= new (getSlideComposeTheme())(
          () => this.#e.getPresentation?.(),
          this.id,
        )),
        this.#s
      );
    }
    resolveRenderContext() {
      return this.#e.resolveSlideRenderContext(this);
    }
    getInheritedPlaceholderShapes(psIn3126: any) {
      let psBind11238 = psIn3126.placeholderIndex,
        psBind11239 = psIn3126.placeholderTypeCandidates;
      if (psBind11238 === undefined && psBind11239.length === 0) return [];
      let { layout, masterLayout } = this.resolveRenderContext(),
        psBind11240 = psBind11238 !== undefined && psBind11239.length === 0,
        psBind11241 = (psIn8366) => {
          let psBind18871 = psIn8366?.findPlaceholder(
            psBind11239,
            psBind11238 ?? 0,
            {
              allowIndexMatchWithoutType: psBind11240,
            },
          );
          return psBind18871?.type === "shape" ? psBind18871 : undefined;
        };
      return [psBind11241(masterLayout), psBind11241(layout)].filter(
        (item) => item !== undefined && item !== psIn3126,
      );
    }
    get frame() {
      return {
        left: 0,
        top: 0,
        width: emuToFrameUnit(this.#t.widthEmu),
        height: emuToFrameUnit(this.#t.heightEmu),
      };
    }
    set frame(psIn8221) {
      let psBind18726 = frameUnitToEmu(psIn8221.width);
      psBind18726 !== undefined && (this.#t.widthEmu = psBind18726);
      let psBind18727 = frameUnitToEmu(psIn8221.height);
      psBind18727 !== undefined && (this.#t.heightEmu = psBind18727);
      this.#p();
    }
    setViewportSize(psIn7604: any, psIn7605: any) {
      let psBind18091 = psIn7604 ? frameUnitToEmu(psIn7604) : undefined;
      psBind18091 !== undefined && (this.#t.widthEmu = psBind18091);
      let psBind18092 = psIn7605 ? frameUnitToEmu(psIn7605) : undefined;
      psBind18092 !== undefined && (this.#t.heightEmu = psBind18092);
      this.#p();
    }
    get placeholders() {
      return (
        (this.#a ||= new psH.Binding1342(this.#n.shapes, "slide", {
          inheritedShapes: () => this.#c(),
          materializeInheritedShape: (psIn16443) => this.#l(psIn16443),
        })),
        this.#a
      );
    }
    setLayout(psIn12629: any) {
      this.#t.useLayoutId = psIn12629.id;
      this.#p();
    }
    #c() {
      let { layout, masterLayout } = this.resolveRenderContext(),
        psBind15343 = layout?.placeholders.getAll() ?? [],
        psBind15344 = (masterLayout?.placeholders.getAll() ?? [])
          .filter((item) =>
            isPlaceholderVisibleForLayout(item, layout?.furnitureVisibility),
          )
          .filter(
            (item) =>
              !psBind15343.some((_item) => placeholdersMatch(_item, item)),
          );
      return [...psBind15343, ...psBind15344];
    }
    #l(psIn8239) {
      let psBind18754 = structuredClone(psIn8239.toProto());
      return (
        (psBind18754.id = scH.allocateLocalId()),
        (psBind18754.bbox = undefined),
        this.#n.shapes.add({
          proto: psBind18754,
        })
      );
    }
    async add(psIn7121: any) {
      let psBind17458 = psH.normalizeAddConfig(psIn7121),
        psBind17459 =
          psBind17458.config.plugin === "mermaid"
            ? await psH.addFromMermaid(this, psBind17458.config)
            : psH.addFromCodePlugin(this, psBind17458.config);
      return (
        psBind17458.ref && (psBind17458.ref.current = psBind17459),
        psBind17459
      );
    }
    async fromMermaid(psIn8667: any, psIn8668: any, psIn8669: any = {}) {
      return this.add({
        plugin: "mermaid",
        code: psIn8667,
        position: psIn8668,
        options: psIn8669,
      });
    }
    duplicate() {
      return this.#e.duplicateSlide(this);
    }
    setIndex(psIn13259: any) {
      this.#t.index = psIn13259;
      this.#p();
    }
    hydrateCollaborativeRefsFromProto() {
      this.#n.hydrateCollaborativeRefsFromProto();
    }
    toSnapshot() {
      let psBind9118 = this.shapes.items.map((item) => item.toSnapshot()),
        psBind9119 = this.charts.items.map((item) => item.toSnapshot()),
        psBind9120 = this.images.items.map((item) => item.toSnapshot()),
        psBind9121 = this.tables.items.map((item) => item.toSnapshot()),
        psBind9122 = this.artifacts.items.map((item) => item.toSnapshot()),
        psBind9123 = this.#r.toSnapshot(this.id),
        psBind9124 = rLe(psBind9118, this.index),
        psBind9125 = this.useLayoutId.trim();
      return {
        aid: `sl/${this.id}`,
        kind: "slide",
        id: this.id,
        index: this.index,
        title: psBind9124,
        layoutId: psBind9125.length > 0 ? psBind9125 : undefined,
        shapes: psBind9118,
        charts: psBind9119,
        images: psBind9120,
        tables: psBind9121,
        artifacts: psBind9122,
        notes: psBind9123,
      };
    }
    gridFrame(psIn13004: any, psIn13005: any = {}) {
      return psH.gridFrame(this.frame, psIn13004, psIn13005);
    }
    gridLayout(psIn9897: any, psIn9898: any = {}) {
      psH
        .autoLayoutFrames(this.frame, psIn9897, psIn9898)
        .forEach(({ shape, frame }) => {
          shape.position = frame;
        });
    }
    stackVertical(psIn11376: any, psIn11377: any = {}) {
      this.autoLayout(psIn11376, {
        ...psIn11377,
        direction: $U.vertical,
      });
    }
    stackHorizontal(psIn11198: any, psIn11199: any = {}) {
      this.autoLayout(psIn11198, {
        ...psIn11199,
        direction: $U.horizontal,
      });
    }
    autoLayout(psIn13420: any, psIn13421: any = {}) {
      psH.Binding1371.apply(this, psIn13420, psIn13421);
    }
    compose(psIn3620: any, psIn3621: any = {}) {
      let psBind12159 = psH.parseComposeInput(psIn3620);
      psBind12159.background?.fill !== undefined &&
        (this.background.fill = psBind12159.background.fill);
      psBind12159.background?.ref !== undefined &&
        (this.background.ref = psBind12159.background.ref);
      let { elements, elementsByPath, run } = applySlideCompose(
        this,
        psBind12159.node,
        psIn3621,
      );
      return (
        psBind12159.refsByPath.forEach((item, index) => {
          item.current = elementsByPath.get(index) ?? null;
        }),
        this.#o.push(run),
        elements
      );
    }
    getPresentation() {
      return this.#e.getPresentation?.();
    }
    copyComposeRunsFrom(psIn11985: any) {
      this.#o = JSON.parse(JSON.stringify(psIn11985.#o));
    }
    moveTo(psIn13947: any) {
      this.#e.moveSlide(this, psIn13947);
    }
    delete() {
      let psBind15754 = this.#e.getPresentation?.()?.getRecorder?.();
      if (psBind15754) {
        let psBind19465 = `sl/${this.id}`;
        psBind15754.record({
          op: "slide.remove",
          target: psBind15754.targetRefForElement(this, psBind19465),
        });
      }
      this.#e.deleteSlide(this);
    }
    export(
      psIn7445 = {
        format: "png",
      },
    ) {
      let psBind17917 = psIn7445.format ?? "png";
      return psBind17917 === "layout"
        ? Promise.resolve(psH.exportLayoutBlob(this, this.#o))
        : this.#e.renderSlidePreview(this, {
            ...psIn7445,
            format: psBind17917,
          });
    }
    toProto() {
      let psBind10977 = this.#r.toProto();
      return (
        psBind10977 &&
          this.#t.useLayoutId &&
          (psBind10977.useLayoutId = this.#t.useLayoutId),
        {
          id: this.#t.id,
          index: this.#t.index,
          useLayoutId: this.#t.useLayoutId,
          widthEmu: this.#t.widthEmu,
          heightEmu: this.#t.heightEmu,
          creationId: this.#t.creationId,
          showMasterShapes: this.#t.showMasterShapes,
          elements: this.#n.toProto(),
          background: this.#i.toProto(),
          notesSlide: psBind10977,
        }
      );
    }
    #u() {
      return {
        fontFamilyCache: this.#e.fontFamilyCache,
        stub: () => {},
        getSlideId: () => this.id,
        recordOp: (psIn9827) => {
          this.#p();
          let psBind20369 = this.#e.getPresentation?.()?.getRecorder?.();
          psBind20369 && psBind20369.record(psIn9827);
        },
      };
    }
    #d() {
      return {
        ...this.#e,
        getSlide: () => this,
        getSlideCollabState: () =>
          this.#e.getPresentation?.()?.getSlideCollabState(this.id),
      };
    }
    #f() {
      return {
        stub: () => {},
        getTargetRef: () => {
          let psBind19140 = `sl/${this.id}`,
            psBind19141 = this.#e.getPresentation?.()?.getRecorder?.();
          return psBind19141
            ? psBind19141.targetRefForElement(this, psBind19140)
            : psBind19140;
        },
        recordOp: (psIn9828) => {
          this.#p();
          let psBind20370 = this.#e.getPresentation?.()?.getRecorder?.();
          psBind20370 && psBind20370.record(psIn9828);
        },
      };
    }
    #p() {
      this.#e.getPresentation?.()?.queuePresentationCollabPublish();
    }
  };
  rLe = (psIn6684, psIn6685) => {
    for (let psBind18659 of psIn6684) {
      let psBind19174 = psBind18659.text?.trim();
      if (psBind19174) {
        let psBind21106 =
          psBind19174.split(/\r?\n/).find((item) => item.trim().length > 0) ??
          psBind19174;
        return iLe(psBind21106.trim());
      }
    }
    return `Slide ${psIn6685 + 1}`;
  };
  iLe = (psIn10247, psIn10248 = 80) => {
    if (psIn10247.length <= psIn10248) return psIn10247;
    let psBind20713 = Math.max(1, psIn10248 - 3);
    return `${psIn10247.slice(0, psBind20713)}...`;
  };
});
