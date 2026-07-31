// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-60: chart/shape drawing collections Binding781–783.

import { esmInit } from "../../runtime/rolldown-runtime";
import { Qt } from "../presentation-protobuf";
import { j as presentationElementType } from "../presentation-protobuf";
import { ShapeGeometry, ensureShapeGeometryInit } from "../shape-geometry";
import {
  chartTypeNameToProto,
  shapeGeometryNameToProto,
  ensureChartProtoNameMapsInit,
} from "../chart-proto-name-maps";
import { ensureTextStyleInit } from "../text-style";
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
import { Array as YArray, Map as YMap } from "../../vendor/yjs";
import { worksheetDrawings } from "./drawing-bindings";
import { ensureDrawingHelpersInit } from "./drawing-helpers";
import { ensureDrawingAnchorInit } from "./drawing-anchor";
import { ensureDrawingChartOpsInit } from "./drawing-chart-ops";
import {
  cloneDrawingJson,
  hashWorksheetChartId,
  hydrateChartDrawingSeries,
  materializeChartDrawing,
} from "./chart-drawing-ids";

export const ensureDrawingCollectionsAInit = esmInit(() => {
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
  const ShapeElementBase = getShapeElementClass();
  const ChartAssetBase = getChartAssetClass();
  worksheetDrawings.ChartDrawings = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    constructor(wdIn9342) {
      this.#e = wdIn9342?.root;
      this.#t = wdIn9342?.getRoot;
      this.#n = wdIn9342?.getOrCreateRoot;
      this.#a();
    }
    get enabled() {
      return !!(this.#e || this.#t || this.#n);
    }
    get isEmpty() {
      return (
        this.#a(),
        this.enabled
          ? (this.#i?.length ?? 0) === 0 && (this.#r?.size ?? 0) === 0
          : true
      );
    }
    observe(wdIn12248) {
      this.#a();
      this.#e?.observeDeep((wdIn16585, wdIn16586) => wdIn12248(wdIn16586));
    }
    ingestBaseline(wdIn4060) {
      if (!this.enabled) return;
      let wdBind13029,
        wdBind13030,
        wdBind13031 = false;
      for (let [wdBind15543, wdBind15544] of wdIn4060.entries()) {
        if (!wdBind15544?.chart) continue;
        wdBind13031 ||=
          ((wdBind13029 = this.#c()),
          (wdBind13030 = this.#u()),
          (this.#r = wdBind13029),
          (this.#i = wdBind13030),
          true);
        let wdBind16237 = hydrateChartDrawingSeries(
          wdBind15544,
          undefined,
          wdBind15543,
        );
        wdBind13029?.set(wdBind16237.id, wdBind16237);
        wdBind13030?.push([wdBind16237.id]);
      }
    }
    getOrder() {
      if ((this.#a(), !this.enabled || !this.#i)) return [];
      let wdBind14858 = new Set(),
        wdBind14859 = [];
      for (let wdBind21897 of this.#i.toArray())
        wdBind14858.has(wdBind21897) ||
          (wdBind14858.add(wdBind21897),
          this.#r?.has(wdBind21897) && wdBind14859.push(wdBind21897));
      for (let wdBind22346 of this.#r?.keys() ?? [])
        wdBind14858.has(wdBind22346) ||
          (wdBind14858.add(wdBind22346), wdBind14859.push(wdBind22346));
      return wdBind14859;
    }
    getEntry(wdIn11961) {
      if ((this.#a(), this.enabled)) return this.#r?.get(wdIn11961);
    }
    getDrawing(wdIn11406) {
      let wdBind21861 = this.getEntry(wdIn11406);
      return wdBind21861 ? materializeChartDrawing(wdBind21861) : undefined;
    }
    setEntry(wdIn6933, wdIn6934 = false) {
      if (!this.enabled) return;
      this.#r = this.#c();
      this.#i = this.#u();
      this.#r.set(wdIn6933.id, wdIn6933);
      let wdBind17293 = this.#i.toArray().includes(wdIn6933.id);
      (!wdBind17293 || wdIn6934) &&
        (wdBind17293 || this.#i.push([wdIn6933.id]));
    }
    delete(wdIn6369) {
      if ((this.#a(), !this.enabled || !this.#r || !this.#i)) return;
      this.#r.delete(wdIn6369);
      let wdBind16529 = this.#i.toArray().filter((item) => item !== wdIn6369);
      this.#i.delete(0, this.#i.length);
      wdBind16529.length > 0 && this.#i.insert(0, wdBind16529);
    }
    clear() {
      if ((this.#a(), !(!this.enabled || !this.#r || !this.#i))) {
        for (let wdBind22932 of this.#r.keys()) this.#r.delete(wdBind22932);
        this.#i.delete(0, this.#i.length);
      }
    }
    toProto() {
      if (!this.enabled) return [];
      let wdBind17994 = [];
      for (let wdBind21435 of this.getOrder()) {
        let wdBind22398 = this.getDrawing(wdBind21435);
        wdBind22398 && wdBind17994.push(wdBind22398);
      }
      return wdBind17994;
    }
    #a() {
      this.#t && (this.#e = this.#t());
      this.#r = this.#s();
      this.#i = this.#l();
    }
    #o() {
      return ((this.#e ||= this.#n?.() ?? this.#t?.()), this.#e);
    }
    #s() {
      let wdBind21925 = this.#e?.get("byId");
      if (wdBind21925 instanceof YMap) return wdBind21925;
    }
    #c() {
      this.#o();
      let wdBind19740 = this.#s();
      if (wdBind19740) return wdBind19740;
      let wdBind19741 = new YMap();
      return (this.#e?.set("byId", wdBind19741), wdBind19741);
    }
    #l() {
      let wdBind21898 = this.#e?.get("order");
      if (wdBind21898 instanceof YArray) return wdBind21898;
    }
    #u() {
      this.#o();
      let wdBind19701 = this.#l();
      if (wdBind19701) return wdBind19701;
      let wdBind19702 = new YArray();
      return (this.#e?.set("order", wdBind19702), wdBind19702);
    }
  };
  worksheetDrawings.ChartDrawingsHost = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a = new WeakMap();
    #o = new WeakSet();
    constructor(wdIn3144, wdIn3145) {
      if (
        ((this.#t = wdIn3145),
        (this.#e = this.#m(wdIn3144 ?? [])),
        (this.#r = new Map()),
        (this.#i = new Map()),
        (this.#n = new worksheetDrawings.ChartDrawings({
          root: wdIn3145?.getChartsState?.(),
          getRoot: wdIn3145 ? () => this.#t?.getChartsState?.() : undefined,
          getOrCreateRoot: wdIn3145
            ? () => this.#t?.getOrCreateChartsState?.()
            : undefined,
        })),
        this.#n.enabled)
      ) {
        this.#n.observe((wdIn16422) => this.#f(wdIn16422));
        return;
      }
    }
    get items() {
      if (this.#h()) return [...this.#e];
      let wdBind16467 = this.#n;
      return wdBind16467
        ? (this.#d(),
          wdBind16467
            .getOrder()
            .map((item) => this.#r.get(item))
            .filter((item) => !!item))
        : [];
    }
    getItem(wdIn9560) {
      let wdBind20088 = this.getItemOrNullObject(wdIn9560);
      if (wdBind20088.isNullObject) throw Error(`Chart ${wdIn9560} not found`);
      return wdBind20088;
    }
    getItemAt(wdIn10051) {
      let wdBind20534 = this.items[wdIn10051];
      if (!wdBind20534) throw Error(`Chart at index ${wdIn10051} not found`);
      return wdBind20534;
    }
    getItemOrNullObject(wdIn6370) {
      let wdBind16530 = String(wdIn6370 ?? "").trim();
      if (!wdBind16530) return new worksheetDrawings.ChartDrawingView("");
      for (let wdBind20896 of this.items)
        if (
          (wdBind20896.titleText?.trim() ?? "") === wdBind16530 ||
          wdBind20896.id === wdBind16530 ||
          wdBind20896.aid === wdBind16530
        )
          return wdBind20896;
      return new worksheetDrawings.ChartDrawingView(wdBind16530);
    }
    deleteAll() {
      if (this.#h()) {
        for (let wdBind23025 of [...this.#e]) wdBind23025.delete();
        return;
      }
      for (let wdBind22996 of [...this.items]) wdBind22996.delete();
    }
    clear() {
      this.deleteAll();
    }
    add(wdIn330, wdIn331, wdIn332) {
      let wdBind3640;
      if (worksheetDrawings.Ave(wdIn331)) {
        let wdBind5722 = wdIn331,
          wdBind5723 = wdBind5722.chartType ?? wdIn330,
          wdBind5724 = worksheetDrawings.wdBind762(wdBind5723);
        if (!wdBind5724) throw worksheetDrawings.wdBind761(wdBind5723);
        if (
          ((wdBind3640 = this.#c(wdBind5724.chartType, wdBind5722.anchor)),
          worksheetDrawings.wdBind778(wdBind3640, wdBind5724),
          wdBind5722.title !== undefined &&
            (wdBind3640.title = wdBind5722.title),
          wdBind5722.categories &&
            (wdBind3640.categories = [...wdBind5722.categories]),
          wdBind5722.series &&
            worksheetDrawings.wdBind776(wdBind3640, wdBind5722.series),
          wdBind5722.hasLegend === undefined
            ? wdBind5722.legend && (wdBind3640.hasLegend = true)
            : (wdBind3640.hasLegend = wdBind5722.hasLegend),
          wdBind5722.legend?.position !== undefined &&
            (wdBind3640.legend.position = wdBind5722.legend.position),
          wdBind5722.dataLabels)
        ) {
          let wdBind10242 = wdBind5722.dataLabels;
          wdBind10242.position !== undefined &&
            (wdBind3640.dataLabels.position = wdBind10242.position);
          wdBind10242.showValue !== undefined &&
            (wdBind3640.dataLabels.showValue = wdBind10242.showValue);
          wdBind10242.showSeriesName !== undefined &&
            (wdBind3640.dataLabels.showSeriesName = wdBind10242.showSeriesName);
          wdBind10242.showCategoryName !== undefined &&
            (wdBind3640.dataLabels.showCategoryName =
              wdBind10242.showCategoryName);
          wdBind10242.showPercent !== undefined &&
            (wdBind3640.dataLabels.showPercent = wdBind10242.showPercent);
          wdBind10242.showLeaderLines !== undefined &&
            (wdBind3640.dataLabels.showLeaderLines =
              wdBind10242.showLeaderLines);
        }
        return (
          wdBind5722.displayBlanksAs !== undefined &&
            (wdBind3640.displayBlanksAs = wdBind5722.displayBlanksAs),
          worksheetDrawings.wdBind777(wdBind3640, wdBind5722),
          wdBind3640
        );
      }
      if (worksheetDrawings.kve(wdIn331)) {
        let wdBind19787 = worksheetDrawings.wdBind762(wdIn330);
        if (!wdBind19787)
          throw worksheetDrawings.wdBind761(String(wdIn330 ?? "unknown"));
        return (
          (wdBind3640 = this.#c(wdBind19787.chartType)),
          worksheetDrawings.wdBind778(wdBind3640, wdBind19787),
          worksheetDrawings.wdBind775(wdBind3640, wdIn331),
          wdBind3640
        );
      }
      let wdBind3641 =
        typeof wdIn330 == "string"
          ? worksheetDrawings.wdBind762(wdIn330)
          : null;
      if (typeof wdIn330 == "string" && !wdBind3641)
        throw worksheetDrawings.wdBind761(wdIn330);
      let wdBind3642 = wdBind3641?.chartType ?? wdIn330,
        wdBind3643 = worksheetDrawings.jve(wdIn331) ? wdIn331 : undefined;
      if (
        ((wdBind3640 = this.#c(wdBind3642, wdBind3643)),
        worksheetDrawings.wdBind778(wdBind3640, wdBind3641),
        wdBind3643)
      ) {
        if (
          (wdBind3643.title !== undefined &&
            (wdBind3640.title = wdBind3643.title),
          wdBind3643.categories &&
            (wdBind3640.categories = [...wdBind3643.categories]),
          wdBind3643.series &&
            worksheetDrawings.wdBind776(wdBind3640, wdBind3643.series),
          wdBind3643.hasLegend === undefined
            ? wdBind3643.legend && (wdBind3640.hasLegend = true)
            : (wdBind3640.hasLegend = wdBind3643.hasLegend),
          wdBind3643.legend?.position !== undefined &&
            (wdBind3640.legend.position = wdBind3643.legend.position),
          wdBind3643.dataLabels)
        ) {
          let wdBind10243 = wdBind3643.dataLabels;
          wdBind10243.position !== undefined &&
            (wdBind3640.dataLabels.position = wdBind10243.position);
          wdBind10243.showValue !== undefined &&
            (wdBind3640.dataLabels.showValue = wdBind10243.showValue);
          wdBind10243.showSeriesName !== undefined &&
            (wdBind3640.dataLabels.showSeriesName = wdBind10243.showSeriesName);
          wdBind10243.showCategoryName !== undefined &&
            (wdBind3640.dataLabels.showCategoryName =
              wdBind10243.showCategoryName);
          wdBind10243.showPercent !== undefined &&
            (wdBind3640.dataLabels.showPercent = wdBind10243.showPercent);
          wdBind10243.showLeaderLines !== undefined &&
            (wdBind3640.dataLabels.showLeaderLines =
              wdBind10243.showLeaderLines);
        }
        wdBind3643.displayBlanksAs !== undefined &&
          (wdBind3640.displayBlanksAs = wdBind3643.displayBlanksAs);
        worksheetDrawings.wdBind777(wdBind3640, wdBind3643);
      }
      return wdBind3640;
    }
    __addForApply(wdIn12249) {
      return this.#c(wdIn12249.chartType, wdIn12249.anchor, wdIn12249.id);
    }
    #s(wdIn5679) {
      if ((this.#l(wdIn5679), this.#h())) {
        this.#e = this.#e.filter((item) => item !== wdIn5679);
        return;
      }
      let wdBind15559 = this.#n;
      !wdBind15559 ||
        wdBind15559.isEmpty ||
        (this.#p(() => wdBind15559.delete(wdIn5679.id)),
        this.#r.delete(wdIn5679.id),
        this.#i.delete(wdIn5679.id));
    }
    #c(wdIn551, wdIn552, wdIn553) {
      let wdBind4491;
      if (wdIn552) {
        wdBind4491 = {
          ...wdIn552,
        };
        let wdBind17207 = wdIn552.extent !== undefined,
          wdBind17208 = wdIn552.to !== undefined;
        !wdBind17207 &&
          !wdBind17208 &&
          ((wdBind4491 = {
            ...wdBind4491,
          }),
          (wdBind4491.to = {
            row: wdBind4491.from.row + 14,
            col: wdBind4491.from.col + 8,
          }));
      } else
        wdBind4491 = {
          from: {
            row: 0,
            col: 0,
          },
          to: {
            row: 14,
            col: 8,
          },
        };
      let wdBind4492 = this.#t?.getRecorder(),
        wdBind4493 = new worksheetDrawings.ChartDrawing(undefined, {
          id: wdIn553,
          type: wdIn551,
          anchor: wdBind4491,
          onDelete: (wdIn16423) => this.#s(wdIn16423),
          onChange: (wdIn16424) => this.#u(wdIn16424),
          context: this.#t,
          createdInRecorder: wdBind4492,
        });
      if (
        ((wdBind4493.roundedCorners = false),
        wdIn551 === "scatter" &&
          wdBind4493.scatterOptions.style === undefined &&
          (wdBind4493.scatterOptions.style = "marker"),
        (wdBind4493.chartSpaceLine.style = "solid"),
        (wdBind4493.chartSpaceLine.width = 1),
        (wdBind4493.chartSpaceLine.color = "#D9D9D9"),
        (wdBind4493.xAxis = {
          visible: true,
          tickLabelPosition: "nextToAxis",
          majorGridlines: {
            color: "#CCCCCC",
            style: "dashed",
            weight: 1,
          },
        }),
        (wdBind4493.yAxis = {
          majorGridlines: {
            color: "#CCCCCC",
            style: "dashed",
            weight: 1,
          },
        }),
        (wdBind4493.hasLegend = true),
        (wdBind4493.legend.position = "bottom"),
        this.#h())
      )
        this.#e.push(wdBind4493);
      else {
        let wdBind15994;
        this.#p(() => {
          let wdBind20434 = hydrateChartDrawingSeries(
            wdBind4493.toDrawingProto(),
          );
          this.#n?.setEntry(wdBind20434, true);
          wdBind15994 = this.#n?.getEntry(wdBind20434.id) ?? wdBind20434;
        });
        this.#r.set(wdBind4493.id, wdBind4493);
        wdBind15994 && this.#i.set(wdBind4493.id, wdBind15994);
        this.#d();
      }
      if (wdBind4492) {
        this.#a.set(wdBind4493, wdBind4492);
        let wdBind14466 = this.#t?.getSheetName();
        if (wdBind14466) {
          let wdBind16870 = wdBind4492.assignAlias(
              wdBind4493,
              wdBind4493.aid,
              "chart",
            ),
            wdBind16871 = wdIn551;
          wdBind4492.defer(() =>
            this.#o.has(wdBind4493)
              ? null
              : buildChartAddOp({
                  sheet: wdBind14466,
                  chart: wdBind4493,
                  fallbackType: wdBind16871,
                  as: wdBind16870,
                }),
          );
        }
      }
      return wdBind4493;
    }
    toProto() {
      return this.#h()
        ? this.#e.map((item) => item.toDrawingProto())
        : this.items.map((item) => item.toDrawingProto());
    }
    hydrateFromFallbackState() {
      if (!this.#n?.enabled || !this.#n.isEmpty) return;
      let wdBind16984 = this.#e.map((item) => item.toDrawingProto());
      this.#p(() => this.#n?.ingestBaseline(wdBind16984));
      this.#d();
      this.#e = [];
    }
    #l(wdIn5123) {
      let wdBind14623 = this.#t?.getRecorder(),
        wdBind14624 = this.#t?.getSheetName();
      if (!wdBind14623 || !wdBind14624) return;
      if (this.#a.get(wdIn5123) === wdBind14623) {
        this.#o.add(wdIn5123);
        return;
      }
      let wdBind14625 = {
        op: "chart.remove",
        target: {
          sheet: wdBind14624,
          selector: buildChartSelector(wdIn5123),
        },
      };
      wdBind14623.record(wdBind14625);
    }
    #u(wdIn3541) {
      if (this.#h()) {
        this.#e.includes(wdIn3541) || this.#e.push(wdIn3541);
        return;
      }
      this.#n?.enabled &&
        (this.#n.isEmpty &&
          (this.#e = this.#e.filter((item) => item !== wdIn3541)),
        this.#p(() => {
          let wdBind16897 = this.#n?.getEntry(wdIn3541.id),
            wdBind16898 = hydrateChartDrawingSeries(
              wdIn3541.toDrawingProto(),
              wdBind16897,
            );
          this.#n?.setEntry(wdBind16898, false);
          let wdBind16899 = this.#n?.getEntry(wdIn3541.id) ?? wdBind16898;
          this.#i.set(wdIn3541.id, wdBind16899);
          this.#r.set(wdIn3541.id, wdIn3541);
        }));
    }
    #d() {
      if (!this.#n?.enabled) return;
      let wdBind9768 = new Map(),
        wdBind9769 = new Map();
      for (let wdBind11405 of this.#n.getOrder()) {
        let wdBind11785 = this.#n.getEntry(wdBind11405);
        if (!wdBind11785) continue;
        let wdBind11786 = this.#r.get(wdBind11405),
          wdBind11787 = this.#i.get(wdBind11405);
        if (wdBind11786 && wdBind11787 === wdBind11785) {
          wdBind9768.set(wdBind11405, wdBind11786);
          wdBind9769.set(wdBind11405, wdBind11785);
          continue;
        }
        let wdBind11788 = materializeChartDrawing(wdBind11785);
        wdBind9768.set(
          wdBind11405,
          new worksheetDrawings.ChartDrawing(wdBind11788, {
            onDelete: (wdIn16425) => this.#s(wdIn16425),
            onChange: (wdIn16426) => this.#u(wdIn16426),
            context: this.#t,
          }),
        );
        wdBind9769.set(wdBind11405, wdBind11785);
      }
      this.#r = wdBind9768;
      this.#i = wdBind9769;
    }
    #f(wdIn8451) {
      let wdBind18954 = this.#t?.getCollabOrigins?.();
      (wdBind18954 &&
        (wdIn8451.origin === wdBind18954.local ||
          wdIn8451.origin === wdBind18954.record)) ||
        (this.#r.clear(), this.#i.clear(), this.#d());
    }
    #p(wdIn11464) {
      let wdBind21899 = this.#t?.runLocalTransaction;
      return wdBind21899 ? wdBind21899(wdIn11464) : wdIn11464();
    }
    #m(wdIn5368) {
      return (wdIn5368 ?? [])
        .filter((item) => item?.chart)
        .map(
          (item, index) =>
            new worksheetDrawings.ChartDrawing(item, {
              id: hashWorksheetChartId(item, index),
              onDelete: (wdIn16427) => this.#s(wdIn16427),
              onChange: (wdIn16428) => this.#u(wdIn16428),
              context: this.#t,
            }),
        );
    }
    #h() {
      return !this.#n?.enabled || !this.#t?.isCollaborativeStateReady?.();
    }
  };
  worksheetDrawings.ShapeDrawings = class {
    #e;
    #t;
    #n = new WeakMap();
    #r = new WeakSet();
    constructor(wdIn4991, wdIn4992) {
      this.#e = wdIn4991;
      let wdBind14411 = new Set();
      this.#t = (wdIn4992 ?? [])
        .filter((item) => item?.shape)
        .map((item) => {
          let wdBind18371 = this.#s(item?.shape?.id, wdBind14411);
          return (
            wdBind14411.add(wdBind18371),
            new worksheetDrawings.WorksheetShapeDrawing(
              this.#e,
              {
                proto: item,
              },
              (wdIn16429) => this.#a(wdIn16429),
              {
                id: wdBind18371,
              },
            )
          );
        });
    }
    get items() {
      return [...this.#t];
    }
    deleteAll() {
      for (let wdBind23026 of [...this.#t]) wdBind23026.delete();
    }
    add(wdIn12542, wdIn12543) {
      let wdBind22437 = worksheetDrawings.wdBind784(wdIn12542, wdIn12543);
      return this.#i(wdBind22437);
    }
    __addForApply(wdIn12498) {
      return this.#i(wdIn12498, {
        explicitId: wdIn12498.id,
      });
    }
    #i(wdIn2212, wdIn2213) {
      let wdBind9237 = wdIn2213?.explicitId;
      if (wdBind9237 && this.#t.some((item) => item.id === wdBind9237))
        throw Error(`Shape id already exists: ${wdBind9237}`);
      let wdBind9238 =
          wdBind9237 ??
          this.#s(undefined, new Set(this.#t.map((item) => item.id))),
        wdBind9239 = this.#e.getRecorder(),
        wdBind9240 = new worksheetDrawings.WorksheetShapeDrawing(
          this.#e,
          wdIn2212,
          (wdIn16430) => this.#a(wdIn16430),
          {
            id: wdBind9238,
            createdInRecorder: wdBind9239,
          },
        );
      this.#t.push(wdBind9240);
      let wdBind9241 = this.#e.getSheetName();
      if (wdBind9239 && wdBind9241 && wdIn2212.geometry !== "connector") {
        this.#n.set(wdBind9240, wdBind9239);
        let wdBind18178 = wdBind9239.assignAlias(
          wdBind9240,
          `sh/${wdBind9240.id}`,
          "shape",
        );
        wdBind9239.defer(() =>
          this.#r.has(wdBind9240)
            ? null
            : buildShapeAddOp({
                sheet: wdBind9241,
                shape: wdBind9240,
                as: wdBind18178,
              }),
        );
      }
      return (this.#e.queueCollaborativePublish?.(), wdBind9240);
    }
    toProto() {
      return this.#t.map((item) => item.toDrawingProto());
    }
    replace(wdIn5356) {
      let wdBind15065 = new Set();
      this.#t = (wdIn5356 ?? [])
        .filter((item) => item?.shape)
        .map((item) => {
          let wdBind18372 = this.#s(item?.shape?.id, wdBind15065);
          return (
            wdBind15065.add(wdBind18372),
            new worksheetDrawings.WorksheetShapeDrawing(
              this.#e,
              {
                proto: item,
              },
              (wdIn16431) => this.#a(wdIn16431),
              {
                id: wdBind18372,
              },
            )
          );
        });
    }
    #a(wdIn9790) {
      this.#o(wdIn9790);
      this.#t = this.#t.filter((item) => item !== wdIn9790);
      this.#e.queueCollaborativePublish?.();
    }
    #o(wdIn5167) {
      let wdBind14673 = this.#e.getRecorder(),
        wdBind14674 = this.#e.getSheetName();
      if (!wdBind14673 || !wdBind14674) return;
      if (this.#n.get(wdIn5167) === wdBind14673) {
        this.#r.add(wdIn5167);
        return;
      }
      let wdBind14675 = {
        op: "shape.remove",
        target: {
          sheet: wdBind14674,
          selector: buildShapeSelector(wdIn5167),
        },
      };
      wdBind14673.record(wdBind14675);
    }
    #s(wdIn9028, wdIn9029) {
      let wdBind19588 = wdIn9028?.trim();
      if (wdBind19588 && !wdIn9029.has(wdBind19588)) return wdBind19588;
      let wdBind19589 = randomBase36Id();
      for (; wdIn9029.has(wdBind19589); ) wdBind19589 = randomBase36Id();
      return wdBind19589;
    }
  };
});
