// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-60: image drawings + WorksheetDrawings Binding784–788.

import { esmInit } from "../../runtime/rolldown-runtime";
import { Qt } from "../presentation-protobuf";
import { j as presentationElementType } from "../presentation-protobuf";
import { ShapeGeometry, ensureShapeGeometryInit } from "../shape-geometry";
import {
  chartTypeNameToProto,
  shapeGeometryNameToProto,
  ensureChartProtoNameMapsInit,
} from "../chart-proto-name-maps";
import {
  ensureTextStyleInit,
  workbookGt,
  applyTextStylePatch,
} from "../text-style";
import { ensureRangeInit } from "../range";
import {
  ensureStableIdConstantsInit,
  ensureStableIdClusterInit,
  hashToBase36Id,
  randomBase36Id,
} from "../stable-id";
import {
  initAddressUtils,
  initAddressMetrics,
  parseA1Range,
} from "../../utils/spreadsheet-address-utils";
import {
  buildChartAddOp,
  buildChartSetOp,
  buildChartSelector,
  buildShapeAddOp,
  buildShapeSetOp,
  buildShapeSelector,
  buildImageAddOp,
  buildImageSetOp,
} from "../mutation-ops";
import {
  ensureWorkbookEt,
  ensureWorkbookKt,
  ensureBinding662,
  ensureJge,
  ensureBinding712,
  ensureBinding722,
  ensureBinding739,
  getShapeElementClass,
  getChartAssetClass,
  getImageAssetClass,
} from "./boundary-hooks";
import { worksheetDrawings } from "./drawing-bindings";
import { ensureDrawingHelpersInit } from "./drawing-helpers";
import { ensureDrawingAnchorInit } from "./drawing-anchor";
import { ensureDrawingChartOpsInit } from "./drawing-chart-ops";
import { ensureDrawingCollectionsAInit } from "./drawing-collections-a";
import {
  cloneDrawingJson,
  hashWorksheetChartId,
  hydrateChartDrawingSeries,
  materializeChartDrawing,
} from "./chart-drawing-ids";

export const ensureDrawingCollectionsBInit = esmInit(() => {
  Qt();
  ensureShapeGeometryInit();
  ensureChartProtoNameMapsInit();
  ensureTextStyleInit();
  ensureWorkbookKt();
  ensureBinding722();
  ensureBinding712();
  ensureJge();
  ensureBinding739();
  ensureWorkbookEt();
  ensureStableIdConstantsInit();
  ensureStableIdClusterInit();
  ensureBinding662();
  initAddressUtils();
  ensureRangeInit();
  initAddressMetrics();
  ensureDrawingHelpersInit();
  ensureDrawingAnchorInit();
  ensureDrawingChartOpsInit();
  ensureDrawingCollectionsAInit();
  const ShapeElementBase = getShapeElementClass();
  const ChartAssetBase = getChartAssetClass();
  worksheetDrawings.wdBind784 = (wdIn1533, wdIn1534) => {
    if (typeof wdIn1533 == "string") {
      let wdBind14183 = worksheetDrawings._E(wdIn1533);
      if (!wdBind14183) throw worksheetDrawings.wdBind769(wdIn1533);
      if (wdBind14183 === "custom" || wdBind14183 === "connector")
        throw Error(
          `Geometry '${wdBind14183}' requires a config object with a full shape definition. Use workbook.help('worksheet.shapes.add') for examples.`,
        );
      let wdBind14184 = worksheetDrawings.wdBind767(wdIn1534);
      return wdBind14184
        ? {
            geometry: wdBind14183,
            anchor: wdBind14184,
          }
        : {
            geometry: wdBind14183,
          };
    }
    if (!worksheetDrawings.wdBind758(wdIn1533))
      throw Error(
        "worksheet.shapes.add expects a geometry string or a config object. Use workbook.help('worksheet.shapes.add') for examples.",
      );
    let wdBind7591 = wdIn1533,
      wdBind7592 =
        typeof wdBind7591.geometry == "string"
          ? wdBind7591.geometry
          : typeof wdBind7591.type == "string"
            ? wdBind7591.type
            : undefined,
      wdBind7593 = worksheetDrawings._E(wdBind7592 ?? "");
    if (!wdBind7593) throw worksheetDrawings.wdBind769(wdBind7592);
    let wdBind7594 = worksheetDrawings.wdBind764(wdBind7591.width),
      wdBind7595 = worksheetDrawings.wdBind764(wdBind7591.height),
      wdBind7596 = worksheetDrawings.wdBind768(
        worksheetDrawings.wdBind767(wdBind7591.anchor ?? wdIn1534),
        wdBind7594,
        wdBind7595,
      );
    return {
      ...wdIn1533,
      geometry: wdBind7593,
      ...(wdBind7596
        ? {
            anchor: wdBind7596,
          }
        : {}),
    };
  };
  worksheetDrawings.wdBind785 = 1;
  worksheetDrawings.WorksheetImageDrawing = class {
    id;
    anchor;
    #e;
    #t;
    #n;
    #r;
    constructor(wdIn1698, wdIn1699, wdIn1700) {
      if (
        ((this.id = `worksheet-image-${worksheetDrawings.wdBind785++}`),
        "proto" in wdIn1698)
      ) {
        let wdBind11704 = wdIn1698.proto.imageReference?.id;
        if (!wdBind11704)
          throw Error(
            "Worksheet image drawing must include an image reference.",
          );
        this.#e = wdBind11704;
        this.anchor = new worksheetDrawings.WorksheetAnchor(wdIn1698.proto);
        this.#t = wdIn1699;
        this.#n = wdIn1700?.context;
        this.#r = wdIn1700?.createdInRecorder;
        this.anchor.setChangeHandler((wdIn11673) => {
          this.#i({
            sheet: "",
            imageId: this.#e,
            anchor: wdIn11673,
          });
        });
        return;
      }
      this.#e = wdIn1698.imageId;
      this.anchor = new worksheetDrawings.WorksheetAnchor(
        undefined,
        wdIn1698.anchor,
      );
      this.#t = wdIn1699;
      this.#n = wdIn1700?.context;
      this.#r = wdIn1700?.createdInRecorder;
      this.anchor.setChangeHandler((wdIn11904) => {
        this.#i({
          sheet: "",
          imageId: this.#e,
          anchor: wdIn11904,
        });
      });
    }
    get imageId() {
      return this.#e;
    }
    set imageId(wdIn8381) {
      let wdBind18889 = {
        sheet: "",
        imageId: this.#e,
        anchor: this.anchor.toConfig(),
      };
      this.#e = wdIn8381;
      this.#i(wdBind18889);
    }
    replace(wdIn4107) {
      if (!this.#n)
        throw Error("Worksheet image replacement requires a workbook context.");
      let wdBind13083 = {
          sheet: "",
          imageId: this.#e,
          anchor: this.anchor.toConfig(),
        },
        wdBind13084 = this.#n.createImageAsset(wdIn4107);
      this.#e = wdBind13084.id;
      this.#i(wdBind13083, wdIn4107);
      this.#n.queueCollaborativePublish?.();
    }
    resolveBoundsPx(wdIn12125, wdIn12126) {
      return this.anchor.resolveBoundsPx(wdIn12125, wdIn12126);
    }
    captureAnchorSnapshot() {
      return this.anchor.captureSnapshot();
    }
    restoreAnchorSnapshot(wdIn12544) {
      this.anchor.restoreSnapshot(wdIn12544);
    }
    setPreviewBoundsPx(wdIn11847, wdIn11848, wdIn11849) {
      this.anchor.setPreviewBoundsPx(wdIn11847, wdIn11848, wdIn11849);
    }
    clearPreviewBounds() {
      this.anchor.clearPreviewBounds();
    }
    applyBoundsPx(wdIn12416, wdIn12417, wdIn12418) {
      this.anchor.applyBoundsPx(wdIn12416, wdIn12417, wdIn12418);
    }
    toDrawingProto(wdIn5124) {
      let { fromAnchor, toAnchor, extentCx, extentCy } =
        this.anchor.toProtoFields(wdIn5124);
      return {
        fromAnchor,
        toAnchor,
        extentCx,
        extentCy,
        imageReference: {
          id: this.#e,
        },
      };
    }
    delete() {
      this.#t?.(this);
    }
    #i(wdIn4694, wdIn4695) {
      let wdBind13975 = this.#n?.getRecorder(),
        wdBind13976 = this.#n?.getSheetName();
      if (!wdBind13975 || !wdBind13976 || this.#r === wdBind13975) return;
      let wdBind13977 = wdBind13975.getAlias(this) ?? wdIn4694.imageId;
      wdBind13975.record(
        buildImageSetOp({
          sheet: wdBind13976,
          image: this,
          previous: wdIn4694,
          source: wdIn4695,
          targetImageId: wdBind13977,
        }),
      );
    }
  };
  worksheetDrawings.ImageDrawings = class {
    #e;
    #t;
    #n = new WeakMap();
    #r = new WeakSet();
    constructor(wdIn8593, wdIn8594) {
      this.#e = wdIn8593;
      this.#t = (wdIn8594 ?? []).map(
        (item) =>
          new worksheetDrawings.WorksheetImageDrawing(
            {
              proto: item,
            },
            (wdIn16432) => this.#i(wdIn16432),
            {
              context: wdIn8593,
            },
          ),
      );
    }
    get items() {
      return [...this.#t];
    }
    deleteAll() {
      for (let wdBind23027 of [...this.#t]) wdBind23027.delete();
    }
    add(wdIn2090) {
      let { anchor, ...rest } = wdIn2090,
        wdBind8975 = this.#e.createImageAsset(rest),
        wdBind8976 = this.#e.getRecorder(),
        wdBind8977 = new worksheetDrawings.WorksheetImageDrawing(
          {
            imageId: wdBind8975.id,
            anchor,
          },
          (wdIn16433) => this.#i(wdIn16433),
          {
            context: this.#e,
            createdInRecorder: wdBind8976,
          },
        );
      this.#t.push(wdBind8977);
      let wdBind8978 = this.#e.getSheetName();
      if (wdBind8976 && wdBind8978) {
        this.#n.set(wdBind8977, wdBind8976);
        let wdBind14319 = wdBind8976.assignAlias(
          wdBind8977,
          `im/${wdBind8977.imageId}`,
          "image",
        );
        wdBind8976.defer(() =>
          this.#r.has(wdBind8977)
            ? null
            : buildImageAddOp({
                sheet: wdBind8978,
                source: rest,
                anchor: wdBind8977.anchor.toConfig(),
                as: wdBind14319,
              }),
        );
      }
      return (this.#e.queueCollaborativePublish?.(), wdBind8977);
    }
    toProto() {
      return this.#t.map((item) => item.toDrawingProto());
    }
    replace(wdIn9221) {
      this.#t = (wdIn9221 ?? []).map(
        (item) =>
          new worksheetDrawings.WorksheetImageDrawing(
            {
              proto: item,
            },
            (wdIn16434) => this.#i(wdIn16434),
            {
              context: this.#e,
            },
          ),
      );
    }
    #i(wdIn9791) {
      this.#a(wdIn9791);
      this.#t = this.#t.filter((item) => item !== wdIn9791);
      this.#e.queueCollaborativePublish?.();
    }
    #a(wdIn3934) {
      let wdBind12819 = this.#e.getRecorder(),
        wdBind12820 = this.#e.getSheetName();
      if (!wdBind12819 || !wdBind12820) return;
      if (this.#n.get(wdIn3934) === wdBind12819) {
        this.#r.add(wdIn3934);
        return;
      }
      let wdBind12821 = {
        op: "image.remove",
        target: {
          sheet: wdBind12820,
          imageId: wdBind12819.getAlias(wdIn3934) ?? wdIn3934.imageId,
          anchor: wdIn3934.anchor.toConfig(),
        },
      };
      wdBind12819.record(wdBind12821);
    }
  };
  worksheetDrawings.WorksheetDrawings = class {
    #e;
    #t;
    #n;
    #r;
    constructor(wdIn2785, wdIn2786) {
      let wdBind10478 = wdIn2785 ?? [],
        wdBind10479 = [],
        wdBind10480 = [],
        wdBind10481 = [],
        wdBind10482 = [];
      wdBind10478.forEach((item) => {
        if (item?.chart) {
          wdBind10479.push(item);
          return;
        }
        if (item?.shape) {
          wdBind10480.push(item);
          return;
        }
        if (item?.imageReference) {
          wdBind10481.push(item);
          return;
        }
        wdBind10482.push({
          ...item,
        });
      });
      this.#e = new worksheetDrawings.ChartDrawingsHost(
        wdBind10479,
        wdIn2786.chartContext,
      );
      this.#t = new worksheetDrawings.ShapeDrawings(
        wdIn2786.shapeContext,
        wdBind10480,
      );
      this.#n = new worksheetDrawings.ImageDrawings(
        wdIn2786.imageContext,
        wdBind10481,
      );
      this.#r = wdBind10482;
    }
    get charts() {
      return this.#e;
    }
    get shapes() {
      return this.#t;
    }
    get images() {
      return this.#n;
    }
    deleteAllKnown() {
      this.#e.deleteAll();
      this.#t.deleteAll();
      this.#n.deleteAll();
    }
    toNonChartProto() {
      return [...this.#t.toProto(), ...this.#n.toProto(), ...this.#r];
    }
    hydrateChartsFromFallbackState() {
      this.#e.hydrateFromFallbackState();
    }
    replaceNonChartDrawings(wdIn3868) {
      let wdBind12708 = [],
        wdBind12709 = [],
        wdBind12710 = [];
      for (let wdBind15995 of wdIn3868 ?? [])
        if (!wdBind15995?.chart) {
          if (wdBind15995?.shape) {
            wdBind12708.push(wdBind15995);
            continue;
          }
          if (wdBind15995?.imageReference) {
            wdBind12709.push(wdBind15995);
            continue;
          }
          wdBind12710.push({
            ...wdBind15995,
          });
        }
      this.#t.replace(wdBind12708);
      this.#n.replace(wdBind12709);
      this.#r = wdBind12710;
    }
    toProto() {
      return [
        ...this.#e.toProto(),
        ...this.#t.toProto(),
        ...this.#n.toProto(),
        ...this.#r,
      ];
    }
  };
});
