// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-60: WorksheetAnchor + chart drawing VOs Binding753–757.

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
  composeScopedId,
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
  getAxisTitleClass,
  ensureBinding711,
} from "./boundary-hooks";
import { worksheetDrawings } from "./drawing-bindings";
import { ensureDrawingHelpersInit } from "./drawing-helpers";
import {
  cloneDrawingJson,
  hashWorksheetChartId,
  hydrateChartDrawingSeries,
  materializeChartDrawing,
  newChartSeriesId,
} from "./chart-drawing-ids";

export const ensureDrawingAnchorInit = esmInit(() => {
  ensureBinding711();
  const AxisTitleClass = getAxisTitleClass();
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
  const ShapeElementBase = getShapeElementClass();
  const ChartAssetBase = getChartAssetClass();
  worksheetDrawings.WorksheetAnchor = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    constructor(wdIn5940, wdIn5941) {
      let wdBind15958 = worksheetDrawings.wdBind744(wdIn5940?.fromAnchor),
        wdBind15959 = worksheetDrawings.wdBind744(wdIn5940?.toAnchor),
        wdBind15960 = worksheetDrawings.wdBind747(wdIn5940);
      this.#e = worksheetDrawings.wdBind745(wdIn5941?.from, wdBind15958);
      this.#t = wdBind15959;
      this.#n = wdBind15960;
      wdIn5941?.to && (this.to = wdIn5941.to);
      wdIn5941?.extent && (this.extent = wdIn5941.extent);
    }
    get from() {
      return worksheetDrawings.snapshotAnchorPoint(this.#e);
    }
    set from(wdIn10425) {
      let wdBind20895 = this.toConfig();
      this.#e = worksheetDrawings.wdBind745(wdIn10425, this.#e);
      this.#o?.(wdBind20895, this.toConfig());
    }
    get to() {
      return this.#t
        ? worksheetDrawings.snapshotAnchorPoint(this.#t)
        : undefined;
    }
    set to(wdIn8567) {
      let wdBind19064 = this.toConfig();
      this.#t = wdIn8567
        ? worksheetDrawings.wdBind745(wdIn8567, this.#t)
        : undefined;
      wdIn8567 && (this.#n = undefined);
      this.#o?.(wdBind19064, this.toConfig());
    }
    get extent() {
      return worksheetDrawings.wdBind749(this.#n);
    }
    set extent(wdIn8814) {
      let wdBind19371 = this.toConfig();
      this.#n = worksheetDrawings.wdBind748(wdIn8814, this.#n);
      wdIn8814 && (this.#t = undefined);
      this.#o?.(wdBind19371, this.toConfig());
    }
    setChangeHandler(wdIn14374) {
      this.#o = wdIn14374;
    }
    toConfig() {
      let wdBind8407 = this.from,
        wdBind8408 = this.to,
        wdBind8409 = this.extent,
        wdBind8410 = {
          from: {
            row: wdBind8407.row,
            col: wdBind8407.col,
            ...(wdBind8407.rowOffsetPx === 0
              ? {}
              : {
                  rowOffsetPx: wdBind8407.rowOffsetPx,
                }),
            ...(wdBind8407.colOffsetPx === 0
              ? {}
              : {
                  colOffsetPx: wdBind8407.colOffsetPx,
                }),
          },
        };
      return (
        wdBind8408 &&
          (wdBind8410.to = {
            row: wdBind8408.row,
            col: wdBind8408.col,
            ...(wdBind8408.rowOffsetPx === 0
              ? {}
              : {
                  rowOffsetPx: wdBind8408.rowOffsetPx,
                }),
            ...(wdBind8408.colOffsetPx === 0
              ? {}
              : {
                  colOffsetPx: wdBind8408.colOffsetPx,
                }),
          }),
        wdBind8409 &&
          (wdBind8410.extent = {
            ...(wdBind8409.widthPx === undefined
              ? {}
              : {
                  widthPx: wdBind8409.widthPx,
                }),
            ...(wdBind8409.heightPx === undefined
              ? {}
              : {
                  heightPx: wdBind8409.heightPx,
                }),
          }),
        wdBind8410
      );
    }
    captureSnapshot() {
      let wdBind7305 = this.from,
        wdBind7306 = this.to,
        wdBind7307 = this.extent;
      return {
        from: {
          row: wdBind7305.row,
          col: wdBind7305.col,
          ...(wdBind7305.rowOffsetPx === 0
            ? {}
            : {
                rowOffsetPx: wdBind7305.rowOffsetPx,
              }),
          ...(wdBind7305.colOffsetPx === 0
            ? {}
            : {
                colOffsetPx: wdBind7305.colOffsetPx,
              }),
        },
        ...(wdBind7306
          ? {
              to: {
                row: wdBind7306.row,
                col: wdBind7306.col,
                ...(wdBind7306.rowOffsetPx === 0
                  ? {}
                  : {
                      rowOffsetPx: wdBind7306.rowOffsetPx,
                    }),
                ...(wdBind7306.colOffsetPx === 0
                  ? {}
                  : {
                      colOffsetPx: wdBind7306.colOffsetPx,
                    }),
              },
            }
          : {}),
        ...(wdBind7307
          ? {
              extent: {
                ...(wdBind7307.widthPx === undefined
                  ? {}
                  : {
                      widthPx: wdBind7307.widthPx,
                    }),
                ...(wdBind7307.heightPx === undefined
                  ? {}
                  : {
                      heightPx: wdBind7307.heightPx,
                    }),
              },
            }
          : {}),
      };
    }
    restoreSnapshot(wdIn6212) {
      let wdBind16296 = this.toConfig();
      this.#e = worksheetDrawings.wdBind745(wdIn6212.from);
      this.#t = wdIn6212.to
        ? worksheetDrawings.wdBind745(wdIn6212.to)
        : undefined;
      this.#n = wdIn6212.extent
        ? worksheetDrawings.wdBind748(wdIn6212.extent)
        : undefined;
      this.clearPreviewBounds();
      this.#o?.(wdBind16296, this.toConfig());
    }
    resolveBoundsPx(wdIn6367, wdIn6368) {
      let wdBind16528 =
        wdIn6368?.preferPreview === true && this.#r !== undefined;
      return worksheetDrawings.Eve({
        from: wdBind16528 ? this.#r : this.#e,
        to: wdBind16528 ? this.#i : this.#t,
        extent: wdBind16528 ? this.#a : this.#n,
        layout: wdIn6367,
      });
    }
    setPreviewBoundsPx(wdIn7077, wdIn7078, wdIn7079) {
      let wdBind17416 = worksheetDrawings.wdBind752({
        bounds: wdIn7077,
        layout: wdIn7078,
        usesTwoCellAnchor: wdIn7079.usesTwoCellAnchor,
      });
      this.#r = wdBind17416.from;
      this.#i = wdBind17416.to;
      this.#a = wdBind17416.extent;
    }
    clearPreviewBounds() {
      this.#r = undefined;
      this.#i = undefined;
      this.#a = undefined;
    }
    applyBoundsPx(wdIn4875, wdIn4876, wdIn4877) {
      let wdBind14290 = this.toConfig(),
        wdBind14291 = worksheetDrawings.wdBind752({
          bounds: wdIn4875,
          layout: wdIn4876,
          usesTwoCellAnchor: wdIn4877.usesTwoCellAnchor,
        });
      this.#e = wdBind14291.from;
      this.#t = wdBind14291.to;
      this.#n = wdBind14291.extent;
      this.clearPreviewBounds();
      this.#o?.(wdBind14290, this.toConfig());
    }
    toProtoFields(wdIn3943) {
      let wdBind12843 =
          wdIn3943?.preferPreview === true && this.#r !== undefined,
        wdBind12844 = wdBind12843 ? this.#r : this.#e,
        wdBind12845 = wdBind12843 ? this.#i : this.#t,
        wdBind12846 = wdBind12843 ? this.#a : this.#n;
      return {
        fromAnchor: worksheetDrawings.wdBind746(wdBind12844),
        toAnchor: wdBind12845
          ? worksheetDrawings.wdBind746(wdBind12845)
          : undefined,
        extentCx:
          wdBind12846?.widthEmu === undefined
            ? undefined
            : String(wdBind12846.widthEmu),
        extentCy:
          wdBind12846?.heightEmu === undefined
            ? undefined
            : String(wdBind12846.heightEmu),
      };
    }
  };
  worksheetDrawings.wdBind754 = (wdIn1016) => {
    if (Object.prototype.hasOwnProperty.call(wdIn1016, "title")) return;
    let wdBind6166 = Object.getPrototypeOf(wdIn1016),
      wdBind6167 = Object.getOwnPropertyDescriptor(wdBind6166, "title");
    if (!wdBind6167?.get || !wdBind6167?.set) return;
    let wdBind6168 = () => wdBind6167.get.call(wdIn1016),
      wdBind6169 = () => {
        let wdBind20259 = wdBind6168();
        if (typeof wdBind20259 == "string") return wdBind20259;
        if (wdBind20259 && typeof wdBind20259 == "object")
          return wdBind20259.text;
      },
      wdBind6170 = () => {
        let wdBind21589 = wdBind6168();
        if (wdBind21589 && typeof wdBind21589 == "object")
          return wdBind21589.textStyle;
      },
      wdBind6171 = (wdIn14808) => {
        wdBind6167.set.call(wdIn1016, wdIn14808);
      },
      wdBind6172 = {};
    Object.defineProperty(wdBind6172, "text", {
      get: () => wdBind6169(),
      set: (wdIn13050) => {
        wdBind6171(typeof wdIn13050 == "string" ? wdIn13050 : undefined);
      },
    });
    Object.defineProperty(wdBind6172, "textStyle", {
      get: () => wdBind6170(),
    });
    Object.defineProperty(wdBind6172, "toString", {
      value: () => wdBind6169() ?? "",
    });
    Object.defineProperty(wdBind6172, "valueOf", {
      value: () => wdBind6169() ?? "",
    });
    Object.defineProperty(wdIn1016, "title", {
      get: () => wdBind6172,
      set: (wdIn6777) => {
        if (typeof wdIn6777 == "string") {
          wdBind6171(wdIn6777);
          return;
        }
        if (wdIn6777 && typeof wdIn6777 == "object") {
          wdBind6171(wdIn6777);
          return;
        }
        wdBind6171(undefined);
      },
    });
  };
  worksheetDrawings.Dve = class {
    #e;
    constructor(wdIn14884) {
      this.#e = wdIn14884;
    }
    clear() {
      this.#e.setFill({
        type: "none",
      });
    }
    setSolidColor(wdIn14017) {
      this.#e.setFill(wdIn14017);
    }
    get color() {
      let wdBind21058 = this.#e.getFill()?.toConfig();
      return typeof wdBind21058 == "string" ? wdBind21058 : undefined;
    }
    set color(wdIn11237) {
      typeof wdIn11237 != "string" ||
        wdIn11237.trim().length === 0 ||
        this.#e.setFill(wdIn11237);
    }
  };
  worksheetDrawings.Ove = class {
    #e;
    constructor(wdIn14885) {
      this.#e = wdIn14885;
    }
    get visible() {
      return this.#e.line.visible;
    }
    set visible(wdIn11960) {
      this.#e.line.visible = wdIn11960;
      this.#e.onChange?.();
    }
    get color() {
      return this.#e.line.color;
    }
    set color(wdIn12176) {
      this.#e.line.color = wdIn12176;
      this.#e.onChange?.();
    }
    get style() {
      return this.#e.line.style;
    }
    set style(wdIn12177) {
      this.#e.line.style = wdIn12177;
      this.#e.onChange?.();
    }
    get weight() {
      return this.#e.line.width;
    }
    set weight(wdIn12120) {
      this.#e.line.width = wdIn12120;
      this.#e.onChange?.();
    }
  };
  worksheetDrawings.wdBind755 = class {
    #e;
    #t;
    #n;
    constructor(wdIn11329) {
      this.#e = wdIn11329;
      this.#t = new worksheetDrawings.Dve(wdIn11329);
      this.#n = new worksheetDrawings.Ove(wdIn11329);
    }
    get fill() {
      return this.#t;
    }
    set fill(wdIn13113) {
      wdIn13113 !== undefined && this.#e.setFill(wdIn13113);
    }
    get line() {
      return this.#n;
    }
    set line(wdIn5804) {
      let wdBind15722 = this.#e.line,
        wdBind15723 = wdIn5804,
        wdBind15724 = wdBind15723.fill ?? wdBind15723.color;
      wdBind15724 !== undefined && (wdBind15722.fill = wdBind15724);
      let wdBind15725 = wdBind15723.width ?? wdBind15723.weight;
      typeof wdBind15725 == "number" &&
        Number.isFinite(wdBind15725) &&
        (wdBind15722.width = wdBind15725);
      wdBind15723.style !== undefined &&
        (wdBind15722.style = wdBind15723.style);
    }
  };
  worksheetDrawings.ChartDrawing = class extends ChartAssetBase {
    anchor;
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    #c;
    constructor(wdIn493, wdIn494) {
      let wdBind4224 = wdIn493?.chart,
        wdBind4225 = wdBind4224
          ? {
              ...wdBind4224,
              id:
                wdBind4224.id && wdBind4224.id.length > 0
                  ? wdBind4224.id
                  : (wdIn494?.id ?? randomBase36Id()),
            }
          : wdIn494?.type
            ? {
                id: wdIn494.id ?? randomBase36Id(),
                type: chartTypeNameToProto[wdIn494.type],
              }
            : undefined;
      super(wdBind4225, wdIn494?.context?.fontFamilyCache);
      this.anchor = new worksheetDrawings.WorksheetAnchor(
        wdIn493,
        wdIn494?.anchor,
      );
      this.#a = wdIn494?.onDelete;
      this.#o = wdIn494?.onChange;
      this.#s = wdIn494?.context;
      this.#c = wdIn494?.createdInRecorder;
      this.anchor.setChangeHandler(() => this.#u());
      let wdBind4226 = {};
      Object.defineProperty(wdBind4226, "text", {
        get: () => this.titleText,
        set: (wdIn12178) => {
          this.titleText = typeof wdIn12178 == "string" ? wdIn12178 : "";
        },
      });
      Object.defineProperty(wdBind4226, "visible", {
        get: () => this.titlePlacement !== "none",
        set: (wdIn5308) => {
          if (!wdIn5308) {
            let wdBind18888 = this.titlePlacement;
            wdBind18888 !== "none" && (this.#t = wdBind18888);
            this.titlePlacement = "none";
            return;
          }
          this.titlePlacement === "none" &&
            (this.titlePlacement = this.#t ?? undefined);
        },
      });
      Object.preventExtensions(wdBind4226);
      this.#e = wdBind4226;
      worksheetDrawings.wdBind754(this.yAxis);
      worksheetDrawings.wdBind754(this.xAxis);
      let wdBind4227 = {};
      Object.defineProperty(wdBind4227, "valueAxis", {
        get: () => this.yAxis,
      });
      Object.defineProperty(wdBind4227, "categoryAxis", {
        get: () => this.xAxis,
      });
      this.#n = wdBind4227;
      let wdBind4228 = {},
        wdBind4229 = new worksheetDrawings.wdBind755({
          getFill: () => this.plotAreaFill,
          setFill: (wdIn12539) => {
            this.plotAreaFill = wdIn12539;
            this.#u();
          },
          line: this.plotAreaLine,
          onChange: () => this.#u(),
        });
      Object.defineProperty(wdBind4228, "format", {
        get: () => wdBind4229,
      });
      this.#r = wdBind4228;
      let wdBind4230 = {},
        wdBind4231 = new worksheetDrawings.wdBind755({
          getFill: () => this.chartFill,
          setFill: (wdIn12723) => {
            this.chartFill = wdIn12723;
            this.#u();
          },
          line: this.chartLine,
          onChange: () => this.#u(),
        });
      Object.defineProperty(wdBind4230, "format", {
        get: () => wdBind4231,
      });
      this.#i = wdBind4230;
      this.series.setChangeHandler(() => this.#u());
    }
    get aid() {
      return composeScopedId("ch", this.#s?.getSheetId?.(), this.id);
    }
    get titleText() {
      return super.title;
    }
    set titleText(wdIn6630) {
      super.title = wdIn6630 ?? "";
      typeof wdIn6630 == "string" &&
        wdIn6630.trim().length > 0 &&
        this.titlePlacement === "none" &&
        (this.titlePlacement = this.#t ?? undefined);
      this.#u();
    }
    get title() {
      return this.#e;
    }
    set title(wdIn15188) {
      this.#l(wdIn15188);
    }
    get categories() {
      return super.categories;
    }
    set categories(wdIn12667) {
      super.categories = wdIn12667;
      this.#u();
    }
    get legend() {
      return super.legend;
    }
    set legend(wdIn3003) {
      if (wdIn3003 instanceof AxisTitleClass) {
        super.legend = wdIn3003;
        this.#u();
        return;
      }
      if (!wdIn3003 || typeof wdIn3003 != "object") return;
      let wdBind11019 = super.legend;
      wdIn3003.position !== undefined &&
        (wdBind11019.position = wdIn3003.position);
      wdIn3003.overlay !== undefined &&
        (wdBind11019.overlay = wdIn3003.overlay);
      wdIn3003.fill !== undefined && (wdBind11019.fill = wdIn3003.fill);
      wdIn3003.line === undefined
        ? wdIn3003.stroke !== undefined &&
          (wdBind11019.stroke = wdIn3003.stroke)
        : (wdBind11019.stroke = wdIn3003.line);
      wdIn3003.textStyle !== undefined &&
        applyTextStylePatch(wdBind11019.textStyle, wdIn3003.textStyle);
      this.#u();
    }
    get axes() {
      return this.#n;
    }
    get plotArea() {
      return this.#r;
    }
    get chartArea() {
      return this.#i;
    }
    get isNullObject() {
      return false;
    }
    get width() {
      return this.anchor.extent?.widthPx;
    }
    set width(wdIn10386) {
      Number.isFinite(wdIn10386 ?? undefined) &&
        (this.anchor.extent = {
          widthPx: Math.max(0, wdIn10386),
        });
    }
    get height() {
      return this.anchor.extent?.heightPx;
    }
    set height(wdIn10320) {
      Number.isFinite(wdIn10320 ?? undefined) &&
        (this.anchor.extent = {
          heightPx: Math.max(0, wdIn10320),
        });
    }
    setPosition(wdIn1985, wdIn1986) {
      let wdBind8771 =
        typeof wdIn1985 == "string" ? wdIn1985 : wdIn1985?.address;
      if (!wdBind8771) return;
      let wdBind8772 = parseA1Range(wdBind8771);
      if (!wdBind8772) return;
      if (
        ((this.anchor.from = {
          row: wdBind8772.bounds.startRow,
          col: wdBind8772.bounds.startCol,
        }),
        !wdIn1986)
      ) {
        (wdBind8772.bounds.endRow !== wdBind8772.bounds.startRow ||
          wdBind8772.bounds.endCol !== wdBind8772.bounds.startCol) &&
          (this.anchor.to = {
            row: wdBind8772.bounds.endRow + 1,
            col: wdBind8772.bounds.endCol + 1,
          });
        return;
      }
      let wdBind8773 =
        typeof wdIn1986 == "string" ? wdIn1986 : wdIn1986?.address;
      if (!wdBind8773) return;
      let wdBind8774 = parseA1Range(wdBind8773);
      wdBind8774 &&
        (this.anchor.to = {
          row: wdBind8774.bounds.endRow + 1,
          col: wdBind8774.bounds.endCol + 1,
        });
    }
    setData(wdIn13726, wdIn13727) {
      worksheetDrawings.wdBind775(this, wdIn13726);
      this.#u();
    }
    delete() {
      this.#a?.(this);
    }
    resolveBoundsPx(wdIn12121, wdIn12122) {
      return this.anchor.resolveBoundsPx(wdIn12121, wdIn12122);
    }
    captureAnchorSnapshot() {
      return this.anchor.captureSnapshot();
    }
    restoreAnchorSnapshot(wdIn12540) {
      this.anchor.restoreSnapshot(wdIn12540);
    }
    setPreviewBoundsPx(wdIn11841, wdIn11842, wdIn11843) {
      this.anchor.setPreviewBoundsPx(wdIn11841, wdIn11842, wdIn11843);
    }
    clearPreviewBounds() {
      this.anchor.clearPreviewBounds();
    }
    applyBoundsPx(wdIn12410, wdIn12411, wdIn12412) {
      this.anchor.applyBoundsPx(wdIn12410, wdIn12411, wdIn12412);
    }
    toDrawingProto(wdIn5255) {
      let { fromAnchor, toAnchor, extentCx, extentCy } =
        this.anchor.toProtoFields(wdIn5255);
      return {
        fromAnchor,
        toAnchor,
        extentCx,
        extentCy,
        chart: this.toProto(),
      };
    }
    #l(wdIn4598) {
      if (typeof wdIn4598 == "string") {
        this.titleText = wdIn4598;
        return;
      }
      if (wdIn4598 && typeof wdIn4598 == "object") {
        let wdBind18399 = wdIn4598.text;
        if (typeof wdBind18399 == "string") {
          this.titleText = wdBind18399;
          return;
        }
        wdBind18399 ?? (this.titleText = "");
        return;
      }
      wdIn4598 ?? (this.titleText = "");
    }
    #u() {
      this.#o?.(this);
      let wdBind15829 = this.#s?.getRecorder(),
        wdBind15830 = this.#s?.getSheetName();
      !wdBind15829 ||
        !wdBind15830 ||
        (this.#c !== wdBind15829 &&
          wdBind15829.deferOnce(`chart.set:${this.id}`, () =>
            buildChartSetOp({
              sheet: wdBind15830,
              chart: this,
            }),
          ));
    }
  };
  worksheetDrawings.ChartDrawingView = class extends (
    worksheetDrawings.ChartDrawing
  ) {
    #e;
    constructor(wdIn10321) {
      super(undefined, {
        type: "line",
      });
      this.titleText = wdIn10321;
      this.#e = wdIn10321;
    }
    get isNullObject() {
      return true;
    }
    delete() {}
    get name() {
      return this.#e;
    }
  };
});
