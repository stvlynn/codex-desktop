// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: presentation Shape element VO + line cap/join/end maps
// (legacy Binding739/736 / Binding737 / mve/hve/gve/_ve/vve / Binding738).
// Stage-3 wave-80 cohesive shape-element impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  Qt,
  j,
  v,
  C,
  x,
  b,
  S as presentationS,
} from "../presentation-protobuf";
import {
  SlideElement as _workbookZ,
  ensureSlideElementInit as workbookB,
} from "../slide-element";
import {
  ensureSlidePlaceholderRolesInit as workbookBinding426,
  placeholderRoleToShortName as Wae,
  normalizePlaceholderType as workbookHelper97,
  resolvePlaceholderLabel as qae,
} from "../presentation-theme";
import { ensureChartProtoNameMapsInit as workbookBinding404 } from "../chart-proto-name-maps";
import { shapeGeometryNameToProto as workbookBinding393 } from "../chart-proto-name-maps";
import {
  ensurePluginSlotsInit as workbookU,
  lookupPresetShapeDefinition as workbookHelper291,
} from "../preset-shape";
import {
  workbookBinding734,
  q_e,
  workbookBinding735,
  Yge,
  dve,
  uve,
  tve,
  eve,
  ave,
  pve,
  J_e,
  $_e,
  icFn371 as workbookHelper371,
} from "../image-connector";
import {
  ensureGeometryTransformDepsInit as workbookBinding628,
  ensureFrameBboxInit as Oue,
  FrameBbox as workbookBinding632,
} from "../geometry-transform";
import { Fill as workbookCt, ensureFillInit as workbookWt } from "../fill";
import {
  Line as workbookBinding431,
  ensureLineInit as workbookBinding432,
} from "../line";
import {
  ShapeGeometry as workbookDt,
  ensureShapeGeometryInit as workbookOt,
} from "../shape-geometry";
import { ensureRoundRectAdjInit as Pde } from "../image-source";
import {
  ensureStableIdClusterInit as workbookBinding647,
  resolveLocalIdAlias as tde,
} from "../stable-id";
import {
  trimClassName as vde,
  parseClassNameStyle as yde,
  coerceBorderRadiusPx as workbookHelper305,
  resolveShadowEffectReference as bde,
} from "../shape-utility";
import {
  pathCommandsToSimplifiedPoints as Sde,
  insertAxisElbow as xde,
} from "../path-geometry";
import {
  workbookBinding736,
  workbookBinding737,
  mve,
  hve,
  gve,
  _ve,
  vve,
  workbookBinding738,
} from "./se-slots";
import { seH } from "./boundary-hooks";

export const workbookBinding739 = esmInit(() => {
  Qt();
  workbookB();
  workbookBinding426();
  workbookBinding404();
  workbookU();
  workbookBinding734();
  workbookBinding628();
  workbookWt();
  workbookBinding432();
  Oue();
  workbookOt();
  q_e();
  Pde();
  seH.ensureMde();
  workbookBinding647();
  workbookBinding736 = class WorkbookClass8 extends _workbookZ {
    type = "shape";
    static #e = 1;
    static #t = -1;
    #n;
    #r;
    #i;
    #a;
    #o;
    constructor(seIn263, seIn264) {
      if (typeof seIn264 != "object" || !seIn264 || Array.isArray(seIn264))
        throw Error("Shape config must be an object.");
      if ("proto" in seIn264) {
        super(seIn263, seIn264.proto);
        this.#n = new workbookCt({
          type: "proto",
          proto: seIn264.proto.shape?.fill,
        });
        this.#r = this.#p({
          type: "proto",
          proto: seIn264.proto.shape?.line,
        });
        this.#i = new workbookBinding735({
          placeholderType: workbookHelper97(seIn264.proto.placeholderType),
          placeholderIndex: seIn264.proto.placeholderIndex,
        });
      } else if ("geometry" in seIn264) {
        let seBind3903 = vde(seIn264.className),
          seBind3904 = yde(seBind3903),
          seBind3905 = seIn264.fill ?? seBind3904?.fill,
          seBind3906 = seIn264.borderRadius ?? seBind3904?.borderRadius,
          seBind3907 = seIn264.shadow ?? seBind3904?.shadow;
        if (seIn264.geometry === "connector") {
          if (seBind3906 !== undefined)
            throw Error(
              'Shape borderRadius is not supported for geometry "connector".',
            );
          if (seBind3907 !== undefined)
            throw Error(
              'Shape shadow is not supported for geometry "connector".',
            );
          let seBind11330 = J_e(seIn264);
          super(seIn263, {
            ...seBind11330.element,
            name: seIn264.name ?? "",
          });
          this.#n = new workbookCt(seBind3905);
          this.#r = this.#p(seIn264.line);
          this.#i = new workbookBinding735();
          this.#a = seBind3903;
        } else {
          let seBind4875 = dve(seIn264),
            seBind4876 = seIn264.position?.width,
            seBind4877 = seIn264.position?.height;
          if (seBind3906 !== undefined && seIn264.adjustmentList !== undefined)
            throw Error(
              'Shape config cannot set both "borderRadius" and "adjustmentList".',
            );
          let seBind4878 =
              seBind3906 === undefined
                ? undefined
                : workbookHelper305(seBind3906),
            seBind4879 = seIn264.geometry;
          if (seBind4878 !== undefined) {
            if (
              seIn264.geometry !== "rect" &&
              seIn264.geometry !== "textbox" &&
              seIn264.geometry !== "roundRect"
            )
              throw Error(
                'Shape borderRadius is only supported for geometry "rect", "textbox", or "roundRect".',
              );
            if (seBind4876 === undefined || seBind4877 === undefined)
              throw Error(
                "Shape borderRadius requires position.width and position.height (px).",
              );
            seBind4878 > 0 && (seBind4879 = "roundRect");
          }
          let seBind4880 =
              seBind4879 === "roundRect" &&
              seBind4876 !== undefined &&
              seBind4877 !== undefined
                ? $S({
                    widthPx: seBind4876,
                    heightPx: seBind4877,
                    radiusPx: seBind4878 ?? 8,
                  })
                : undefined,
            seBind4881 = seIn264.adjustmentList ?? seBind4880 ?? [];
          super(seIn263, {
            type: j.ELEMENT_TYPE_SHAPE,
            name: seIn264.name ?? "",
            bbox: seIn264.position
              ? new workbookBinding632(seIn264.position, true).toProto()
              : undefined,
            effectReference: bde(
              seBind3907,
              seIn263.getPresentation?.()?.theme,
            ),
            shape: {
              geometry: workbookBinding393[seBind4879],
              fill: undefined,
              adjustmentList: seBind4881,
              rectFormula: undefined,
              customPaths: seBind4875,
              customGeometryGuides: [],
            },
          });
          this.#n = new workbookCt(seBind3905);
          this.#r = this.#p(seIn264.line);
          this.#i = new workbookBinding735();
          this.#a = seBind3903;
        }
      } else {
        super(seIn263, {
          type: j.ELEMENT_TYPE_SHAPE,
          bbox: undefined,
          shape: {
            geometry: workbookDt.SHAPE_GEOMETRY_RECT,
            fill: undefined,
            adjustmentList: [],
            rectFormula: undefined,
            customPaths: [],
            customGeometryGuides: [],
          },
        });
        this.#n = new workbookCt();
        this.#r = this.#p();
        this.#i = new workbookBinding735();
      }
      this.#c();
    }
    get placeholder() {
      return this.#i;
    }
    get id() {
      return this.data.id;
    }
    toSnapshot() {
      let seBind10300 = this.slideId,
        seBind10301 = this.id,
        seBind10302 = this.#n.toConfig(),
        seBind10303 = this.#m(this.#r);
      return {
        aid: pve("sh", seBind10300, seBind10301),
        kind: "shape",
        id: seBind10301,
        slideId: seBind10300,
        name: this.name,
        text: this.text.toString(),
        className: this.className,
        textClassName: this.text.className,
        frame: this.frame,
        placeholderType: this.placeholderType,
        fill: seBind10302,
        line: seBind10303,
        effectReference: this.data.effectReference,
        adjustmentList: this.data.shape?.adjustmentList,
      };
    }
    get fill() {
      return this.#n;
    }
    get renderStyleData() {
      let seBind10404 = this.geometry;
      return {
        geometry: seBind10404,
        preset:
          seBind10404 === undefined
            ? undefined
            : workbookHelper291(seBind10404),
        adjustmentList: this.adjustmentList,
        customPaths: this.customPaths,
        fill: this.#n.isSet ? this.#n : undefined,
        line: this.#r.isSet ? this.#r : undefined,
        connector: this.connector,
        effects: this.effects.isSet ? this.effects : undefined,
        useBackgroundFill: this.useBackgroundFill,
        effectReference: this.effectReference,
        fillReference: this.fillReference,
        lineReference: this.lineReference,
      };
    }
    get useBackgroundFill() {
      return this.data.useBackgroundFill;
    }
    get geometry() {
      return this.data.shape?.geometry;
    }
    get adjustmentList() {
      return this.data.shape?.adjustmentList ?? [];
    }
    get customPaths() {
      return this.data.shape?.customPaths ?? [];
    }
    get fillReference() {
      return this.data.fillReference;
    }
    get lineReference() {
      return this.data.lineReference;
    }
    get effectReference() {
      return this.data.effectReference;
    }
    set fill(seIn9738) {
      this.#n = new workbookCt(seIn9738);
      let seBind20258 = this.#n.toConfig();
      seBind20258 &&
        workbookBinding737(seBind20258) &&
        this.recordShapeSet({
          fill: seBind20258,
        });
    }
    async getPictureFillBitmap() {
      let seBind16743 = this.#n.imageReference;
      if (!seBind16743) return;
      let seBind16744 = this.context.getImageById(seBind16743.id);
      if (!seBind16744) return;
      let seBind16745 = this.resolveFrame();
      return seBind16744.getBitmap(seBind16745.width, seBind16745.height);
    }
    get line() {
      return this.#r;
    }
    set line(seIn9602) {
      let seBind20143 =
        seIn9602 instanceof workbookBinding431
          ? this.#f(seIn9602)
          : this.#p(seIn9602);
      this.#r = seBind20143;
      this.recordShapeSet({
        line: this.#m(seBind20143),
      });
    }
    set borderRadius(seIn1063) {
      if (seIn1063 === undefined) return;
      if (!this.data.shape)
        throw Error("borderRadius is only available on shape elements.");
      if (this.connector)
        throw Error("borderRadius is not supported on connector shapes.");
      let seBind6321 = workbookHelper305(seIn1063),
        seBind6322 = this.frame,
        seBind6323 = seBind6322?.width,
        seBind6324 = seBind6322?.height;
      if (seBind6323 === undefined || seBind6324 === undefined)
        throw Error(
          "borderRadius requires shape.position width and height (px) before it can be applied.",
        );
      let seBind6325 = this.data.shape.geometry;
      if (
        !(
          seBind6325 === workbookDt.SHAPE_GEOMETRY_RECT ||
          seBind6325 === workbookDt.SHAPE_GEOMETRY_ROUND_RECT
        )
      )
        throw Error("borderRadius is only supported for rect-like shapes.");
      if (
        (seBind6321 > 0 &&
          (this.data.shape.geometry = workbookDt.SHAPE_GEOMETRY_ROUND_RECT),
        this.data.shape.geometry === workbookDt.SHAPE_GEOMETRY_ROUND_RECT)
      ) {
        let seBind16965 = $S({
          widthPx: seBind6323,
          heightPx: seBind6324,
          radiusPx: seBind6321,
        });
        if (!seBind16965)
          throw Error("Failed to apply borderRadius; shape frame is invalid.");
        this.data.shape.adjustmentList = seBind16965;
      } else this.data.shape.adjustmentList = [];
      this.recordShapeSet({
        borderRadius: seIn1063,
      });
    }
    set shadow(seIn7972) {
      if (seIn7972 === undefined) return;
      let seBind18457 = bde(seIn7972, this.context.getPresentation?.()?.theme);
      this.data.effectReference = seBind18457;
      this.recordShapeSet({
        shadow: seIn7972,
      });
    }
    get className() {
      return this.#a;
    }
    set className(seIn4917) {
      if (((this.#a = vde(seIn4917)), !this.#a)) return;
      let seBind14327 = yde(this.#a);
      seBind14327 &&
        (seBind14327.fill !== undefined && (this.fill = seBind14327.fill),
        seBind14327.borderRadius !== undefined &&
          (this.borderRadius = seBind14327.borderRadius),
        seBind14327.shadow !== undefined && (this.shadow = seBind14327.shadow));
      this.recordShapeSet({
        className: this.#a,
      });
    }
    get placeholderType() {
      return this.#i.type;
    }
    set placeholderType(seIn8330) {
      this.#i.type = seIn8330;
      this.data.placeholderType =
        seIn8330 === undefined ? undefined : Wae(seIn8330);
      this.recordShapeSet({
        placeholderType: seIn8330,
      });
    }
    get placeholderIndex() {
      return this.#i.index;
    }
    set placeholderIndex(seIn9027) {
      this.#i.index = seIn9027;
      this.data.placeholderIndex = seIn9027;
      this.recordShapeSet({
        placeholderIndex: seIn9027,
      });
    }
    isPlaceholder() {
      return this.#i.isSet() || super.hasPlaceholderMetadata;
    }
    get hasPlaceholderMetadata() {
      return this.isPlaceholder();
    }
    placeholderKey() {
      return qae({
        rawType: this.data.placeholderType,
        name: this.data.name,
      });
    }
    get pixelRect() {
      let { left, top, width, height } = this.frame ?? {};
      return {
        x: left ?? 0,
        y: top ?? 0,
        width: width ?? 0,
        height: height ?? 0,
      };
    }
    bringToFront() {
      this.zIndex = WorkbookClass8.#e++;
    }
    sendToBack() {
      this.zIndex = WorkbookClass8.#t--;
    }
    delete() {
      let seBind13133 = this.elementAnchor(),
        seBind13134 = this.context.getPresentation?.()?.getRecorder?.();
      seBind13133 &&
        seBind13134 &&
        seBind13134.record({
          op: "shape.remove",
          target: seBind13134.targetRefForElement(this, seBind13133),
        });
      let seBind13135 = this.context.deleteElement;
      if (!seBind13135)
        throw Error("Shape deletion is not available in this context.");
      seBind13135(this.id);
    }
    get connector() {
      return this.data.connector;
    }
    get connectorLineStyle() {
      return this.data.connector?.lineStyle;
    }
    get connectorHead() {
      return this.data.connector?.lineStyle?.head;
    }
    get connectorTail() {
      return this.data.connector?.lineStyle?.tail;
    }
    setConnectorFrom(seIn13237, seIn13238) {
      this.#u("from", seIn13237, seIn13238);
    }
    setConnectorTo(seIn13597, seIn13598) {
      this.#u("to", seIn13597, seIn13598);
    }
    get position() {
      return super.position;
    }
    set position(seIn11327) {
      super.position = seIn11327;
      this.connector || this.#l("committed");
    }
    get frame() {
      return super.frame;
    }
    set frame(seIn11592) {
      super.frame = seIn11592;
      this.connector || this.#l("committed");
    }
    get previewFrame() {
      return super.previewFrame;
    }
    set previewFrame(seIn11083) {
      super.previewFrame = seIn11083;
      this.connector || this.#l("preview");
    }
    clearPreviewFrame() {
      super.clearPreviewFrame();
      this.connector || this.#l("committed");
    }
    invalidateConnectorRoute(seIn8359 = "committed") {
      !this.data.connector ||
        !this.data.shape ||
        ((this.#o = seIn8359),
        seIn8359 === "committed" && super.clearPreviewFrame());
    }
    toProto() {
      this.#s();
      let seBind16703 = super.toProto();
      if (!seBind16703.shape) return seBind16703;
      let seBind16704 = this.#n.toProto();
      seBind16703.shape.fill = seBind16704 ?? undefined;
      let seBind16705 = this.#r.toProto();
      return ((seBind16703.shape.line = seBind16705 ?? undefined), seBind16703);
    }
    #s() {
      if (
        !this.data.connector ||
        !this.data.shape ||
        (!this.#o && this.position.toProto())
      )
        return;
      let seBind4561 = this.context.getPresentation?.(),
        seBind4562 = this.context.getSlide?.();
      if (!seBind4561 || !seBind4562) return;
      let seBind4563 = this.data.shape.geometry,
        seBind4564 = super.toProto();
      seBind4564.shape &&
        seBind4563 !== undefined &&
        (seBind4564.shape.geometry = seBind4563);
      let seBind4565 = seBind4562.elements.items
          .filter((item) => !(item instanceof WorkbookClass8 && item.connector))
          .map((item) => item.toProto()),
        seBind4566 = [];
      try {
        seBind4566 = Yge({
          connectorEl: seBind4564,
          elements: seBind4565,
          pres: seBind4561,
          slide: seBind4562,
        }).commands;
      } catch (seBind19551) {
        console.warn(
          "autoRouteConnectorPx failed; using fallback line",
          seBind19551,
        );
        seBind4566 = [];
      }
      let seBind4567 = Sde(seBind4566);
      if (
        (seBind4567.length < 2 &&
          (seBind4567 = $_e(
            seBind4564.connector,
            seBind4565,
            seBind4561,
            seBind4562,
          )),
        seBind4567.length < 2)
      )
        return;
      let seBind4568 = uve(seBind4563) ? tve(seBind4567) : undefined;
      if (
        ((seBind4568 ||= eve(seBind4567)),
        (seBind4568 ||= ave(seBind4567, seBind4563)),
        !seBind4568 &&
          seBind4567.length >= 2 &&
          (seBind4568 = eve(
            xde(seBind4567[0], seBind4567[seBind4567.length - 1]),
          )),
        !seBind4568)
      )
        return;
      let seBind4569 = {
        left: seBind4568.bounds.minX,
        top: seBind4568.bounds.minY,
        width: seBind4568.width,
        height: seBind4568.height,
      };
      (seBind4568.rotation !== undefined ||
        this.position.rotation !== undefined) &&
        (seBind4569.rotation = seBind4568.rotation ?? 0);
      (seBind4568.flipH || this.position.horizontalFlip !== undefined) &&
        (seBind4569.horizontalFlip = seBind4568.flipH);
      (seBind4568.flipV || this.position.verticalFlip !== undefined) &&
        (seBind4569.verticalFlip = seBind4568.flipV);
      this.#o === "preview"
        ? (super.previewFrame = seBind4569)
        : (this.position.merge(seBind4569), super.clearPreviewFrame());
      this.#o = undefined;
      this.data.shape.geometry = seBind4568.geometry;
      this.data.shape.adjustmentList = seBind4568.adjustments;
      this.data.shape.customPaths = [];
    }
    #c() {
      this.position.setChangeHandler((seIn11328) => {
        this.recordPositionSet(seIn11328);
        this.connector || this.#l("committed");
      });
    }
    #l(seIn5191) {
      if (this.connector || !this.id) return;
      let seBind14707 = this.context.getSlide?.();
      if (seBind14707)
        for (let seBind18051 of seBind14707.shapes.items) {
          let seBind18915 = seBind18051.connector;
          seBind18915 &&
            (seBind18915.fromElementId === this.id ||
              seBind18915.toElementId === this.id) &&
            seBind18051.invalidateConnectorRoute(seIn5191);
        }
    }
    #u(seIn1925, seIn1926, seIn1927) {
      let seBind8660 = this.data.connector;
      if (!seBind8660)
        throw Error(
          "Connector endpoint updates are only available on connector shapes.",
        );
      if (seIn1926 === undefined && seIn1927 === undefined) return;
      let seBind8661 = this.#d(seIn1925, seIn1926),
        seBind8662 =
          seIn1927 === undefined
            ? undefined
            : workbookHelper371(
                seIn1927,
                seIn1925 === "from" ? "fromIdx" : "toIdx",
              );
      if (seIn1925 === "from") {
        seBind8661 && (seBind8660.fromElementId = seBind8661.localId);
        seBind8662 !== undefined && (seBind8660.fromIdx = seBind8662);
        this.invalidateConnectorRoute("committed");
        this.recordShapeSet({
          from: seBind8661?.targetRef,
          fromIdx: seBind8662,
        });
        return;
      }
      seBind8661 && (seBind8660.toElementId = seBind8661.localId);
      seBind8662 !== undefined && (seBind8660.toIdx = seBind8662);
      this.invalidateConnectorRoute("committed");
      this.recordShapeSet({
        to: seBind8661?.targetRef,
        toIdx: seBind8662,
      });
    }
    #d(seIn916, seIn917) {
      if (seIn917 === undefined) return;
      let seBind5826 = this.context.getSlide?.();
      if (!seBind5826) {
        let seBind14410 = typeof seIn917 == "string" ? seIn917 : seIn917.id;
        if (!seBind14410)
          throw Error(`Connector ${seIn916} endpoint id must be non-empty.`);
        if (typeof seIn917 != "string" && seIn917.connector)
          throw Error(
            `Connector ${seIn916} endpoint cannot be another connector.`,
          );
        return {
          localId: seBind14410,
          targetRef: seBind14410,
        };
      }
      let seBind5827 =
        typeof seIn917 == "string"
          ? tde(seIn917, {
              prefix: "sh",
              aliases: ["shape"],
              slideId: seBind5826.id,
              localIds: seBind5826.shapes.items.map((item) => item.id),
            })
          : seIn917.id;
      if (!seBind5827)
        throw Error(`Connector ${seIn916} endpoint id must be non-empty.`);
      let seBind5828 =
        typeof seIn917 == "string"
          ? seBind5826.shapes.getById(seBind5827)
          : seIn917;
      if (!seBind5828)
        throw Error(
          `Connector ${seIn916} shape not found for id: ${seBind5827}`,
        );
      if (seBind5828.connector)
        throw Error(
          `Connector ${seIn916} endpoint cannot be another connector.`,
        );
      if (seBind5828.slideId && seBind5828.slideId !== seBind5826.id)
        throw Error(
          `Connector ${seIn916} endpoint must belong to slide ${seBind5826.id}.`,
        );
      let seBind5829 = seBind5828.elementAnchor();
      if (!seBind5829)
        throw Error(
          `Connector ${seIn916} endpoint shape is missing an anchor id.`,
        );
      return {
        localId: seBind5827,
        targetRef: seBind5828.recordTargetRef(seBind5829),
      };
    }
    #f(seIn8920) {
      return (
        seIn8920.setChangeHandler((seIn12497) => {
          this.recordShapeSet({
            line: this.#m(seIn12497),
          });
        }),
        seIn8920
      );
    }
    #p(seIn14373) {
      return this.#f(new workbookBinding431(seIn14373));
    }
    #m(seIn5888) {
      let seBind15865 = {};
      seIn5888.style !== undefined && (seBind15865.style = seIn5888.style);
      seIn5888.width !== undefined && (seBind15865.width = seIn5888.width);
      let seBind15866 = seIn5888.fill?.toConfig();
      return (
        seBind15866 &&
          workbookBinding737(seBind15866) &&
          (seBind15865.fill = seBind15866),
        Object.keys(seBind15865).length > 0 ? seBind15865 : undefined
      );
    }
  };
  workbookBinding737 = (seIn12119) =>
    !seIn12119 || typeof seIn12119 != "object"
      ? true
      : !("type" in seIn12119 && seIn12119.type === "proto");
  mve = {
    flat: v.LINE_CAP_FLAT,
    round: v.LINE_CAP_ROUND,
    square: v.LINE_CAP_SQUARE,
  };
  hve = {
    round: C.LINE_JOIN_ROUND,
    bevel: C.LINE_JOIN_BEVEL,
    miter: C.LINE_JOIN_MITER,
  };
  gve = {
    none: x.LINE_END_TYPE_NONE,
    triangle: x.LINE_END_TYPE_TRIANGLE,
    stealth: x.LINE_END_TYPE_STEALTH,
    diamond: x.LINE_END_TYPE_DIAMOND,
    oval: x.LINE_END_TYPE_OVAL,
    arrow: x.LINE_END_TYPE_ARROW,
  };
  _ve = {
    sm: presentationS.LINE_END_WIDTH_SMALL,
    med: presentationS.LINE_END_WIDTH_MEDIUM,
    lg: presentationS.LINE_END_WIDTH_LARGE,
  };
  vve = {
    sm: b.LINE_END_LENGTH_SMALL,
    med: b.LINE_END_LENGTH_MEDIUM,
    lg: b.LINE_END_LENGTH_LARGE,
  };
  workbookBinding738 = 24;
});
