// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-60: chart type aliases + shape drawing Binding758–780.

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
import { ensureRangeInit, Range } from "../range";
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
  colIndexToLetters,
  pointsToPixels,
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
import {
  cloneDrawingJson,
  hashWorksheetChartId,
  hydrateChartDrawingSeries,
  materializeChartDrawing,
} from "./chart-drawing-ids";

export const ensureDrawingChartOpsInit = esmInit(() => {
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
  const ShapeElementBase = getShapeElementClass();
  const ChartAssetBase = getChartAssetClass();
  worksheetDrawings.wdBind758 = (wdIn14309) =>
    typeof wdIn14309 == "object" && !!wdIn14309 && !Array.isArray(wdIn14309);
  worksheetDrawings.kve = (wdIn14217) =>
    worksheetDrawings.wdBind758(wdIn14217) &&
    "values" in wdIn14217 &&
    Array.isArray(wdIn14217.values);
  worksheetDrawings.Ave = (wdIn15826) =>
    worksheetDrawings.wdBind758(wdIn15826) && "chartType" in wdIn15826;
  worksheetDrawings.jve = (wdIn16053) =>
    worksheetDrawings.wdBind758(wdIn16053) && "from" in wdIn16053;
  worksheetDrawings.wdBind759 = (wdIn14886) =>
    wdIn14886.replace(/[^a-z0-9]/gi, "").toLowerCase();
  worksheetDrawings.wdBind760 = Object.keys(chartTypeNameToProto).reduce(
    (accumulator, current) => (
      (accumulator[worksheetDrawings.wdBind759(current)] = current),
      accumulator
    ),
    {},
  );
  worksheetDrawings.supportedChartTypeKeys =
    Object.keys(chartTypeNameToProto).sort();
  worksheetDrawings.wdBind761 = (wdIn5942) => {
    let wdBind15961 = wdIn5942 ?? "unknown",
      wdBind15962 = worksheetDrawings.supportedChartTypeKeys.join(", ");
    return Error(
      `Unsupported chart type: ${wdBind15961}. Supported types: ${wdBind15962}. Office.js aliases include ColumnClustered, ColumnStacked, BarClustered, BarStacked, BoxAndWhisker, LineMarkers, and PieExploded.`,
    );
  };
  worksheetDrawings.wdBind762 = (wdIn1405) => {
    if (!wdIn1405) return null;
    let wdBind7227 = worksheetDrawings.wdBind759(wdIn1405);
    switch (wdBind7227) {
      case "column":
      case "columnclustered":
        return {
          chartType: "bar",
          barDirection: "column",
          barGrouping: "clustered",
        };
      case "columnstacked":
        return {
          chartType: "bar",
          barDirection: "column",
          barGrouping: "stacked",
        };
      case "barclustered":
        return {
          chartType: "bar",
          barDirection: "bar",
          barGrouping: "clustered",
        };
      case "barstacked":
        return {
          chartType: "bar",
          barDirection: "bar",
          barGrouping: "stacked",
        };
      case "linemarkers":
        return {
          chartType: "line",
        };
      case "pieexploded":
        return {
          chartType: "pie",
        };
      case "boxandwhisker":
        return {
          chartType: "boxWhisker",
        };
      default:
        return worksheetDrawings.wdBind760[wdBind7227]
          ? {
              chartType: worksheetDrawings.wdBind760[wdBind7227],
            }
          : null;
    }
  };
  worksheetDrawings.wdBind763 = (wdIn14887) =>
    wdIn14887.replace(/[^a-z0-9]/gi, "").toLowerCase();
  worksheetDrawings.Nve = {
    rectangle: "rect",
    righttriangle: "rtTriangle",
  };
  worksheetDrawings.Pve = Object.keys(shapeGeometryNameToProto).reduce(
    (accumulator, current) => (
      (accumulator[worksheetDrawings.wdBind763(current)] = current),
      accumulator
    ),
    {},
  );
  worksheetDrawings._E = (wdIn9882) => {
    if (!wdIn9882) return null;
    let wdBind20433 = worksheetDrawings.wdBind763(wdIn9882);
    return wdBind20433 === "connector"
      ? "connector"
      : worksheetDrawings.Pve[wdBind20433] ||
          (worksheetDrawings.Nve[wdBind20433] ?? null);
  };
  worksheetDrawings.wdBind764 = (wdIn7422) => {
    if (typeof wdIn7422 == "number" && Number.isFinite(wdIn7422))
      return wdIn7422;
    if (typeof wdIn7422 == "string" && wdIn7422.trim().length > 0) {
      let wdBind22147 = Number(wdIn7422);
      return Number.isFinite(wdBind22147) ? wdBind22147 : undefined;
    }
  };
  worksheetDrawings.wdBind765 = (event) => {
    if (!worksheetDrawings.wdBind758(event)) return;
    let wdBind10962 = worksheetDrawings.wdBind764(event.row),
      wdBind10963 = worksheetDrawings.wdBind764(event.col);
    if (wdBind10962 === undefined || wdBind10963 === undefined) return;
    let wdBind10964 = worksheetDrawings.wdBind764(
        event.rowOffsetPx ?? event.offsetY ?? event.offsety,
      ),
      wdBind10965 = worksheetDrawings.wdBind764(
        event.colOffsetPx ?? event.offsetX ?? event.offsetx,
      ),
      wdBind10966 = worksheetDrawings.wdBind764(event.rowOffsetEmu),
      wdBind10967 = worksheetDrawings.wdBind764(event.colOffsetEmu);
    return {
      row: wdBind10962,
      col: wdBind10963,
      ...(wdBind10964 === undefined
        ? {}
        : {
            rowOffsetPx: wdBind10964,
          }),
      ...(wdBind10965 === undefined
        ? {}
        : {
            colOffsetPx: wdBind10965,
          }),
      ...(wdBind10966 === undefined
        ? {}
        : {
            rowOffsetEmu: wdBind10966,
          }),
      ...(wdBind10967 === undefined
        ? {}
        : {
            colOffsetEmu: wdBind10967,
          }),
    };
  };
  worksheetDrawings.Fve = (props) => {
    if (!worksheetDrawings.wdBind758(props)) return;
    let wdBind12153 = worksheetDrawings.wdBind764(props.widthPx ?? props.width),
      wdBind12154 = worksheetDrawings.wdBind764(props.heightPx ?? props.height),
      wdBind12155 = worksheetDrawings.wdBind764(props.widthEmu),
      wdBind12156 = worksheetDrawings.wdBind764(props.heightEmu);
    if (
      wdBind12153 === undefined &&
      wdBind12154 === undefined &&
      wdBind12155 === undefined &&
      wdBind12156 === undefined
    )
      return;
    let wdBind12157 = {};
    return (
      wdBind12153 !== undefined && (wdBind12157.widthPx = wdBind12153),
      wdBind12154 !== undefined && (wdBind12157.heightPx = wdBind12154),
      wdBind12155 !== undefined && (wdBind12157.widthEmu = wdBind12155),
      wdBind12156 !== undefined && (wdBind12157.heightEmu = wdBind12156),
      wdBind12157
    );
  };
  worksheetDrawings.wdBind766 = (wdIn5294) => {
    let wdBind14906 = parseA1Range(wdIn5294);
    if (!wdBind14906)
      throw Error(
        `Shape anchor must be an A1 range; received "${wdIn5294}". Use workbook.help('worksheet.shapes.add') for examples.`,
      );
    let { startRow, startCol, endRow, endCol } = wdBind14906.bounds;
    return {
      from: {
        row: startRow,
        col: startCol,
      },
      to: {
        row: endRow,
        col: endCol,
      },
    };
  };
  worksheetDrawings.wdBind767 = (wdIn3499) => {
    if (!wdIn3499) return;
    if (wdIn3499 instanceof Range)
      return worksheetDrawings.wdBind766(wdIn3499.address);
    if (typeof wdIn3499 == "string")
      return worksheetDrawings.wdBind766(wdIn3499);
    if (!worksheetDrawings.wdBind758(wdIn3499)) return;
    if ("from" in wdIn3499 || "to" in wdIn3499 || "extent" in wdIn3499) {
      let wdBind17474 = worksheetDrawings.wdBind765(wdIn3499.from),
        wdBind17475 = worksheetDrawings.wdBind765(wdIn3499.to),
        wdBind17476 = worksheetDrawings.Fve(wdIn3499.extent);
      if (wdBind17474) {
        let wdBind21568 = {
          from: wdBind17474,
        };
        return (
          wdBind17475 && (wdBind21568.to = wdBind17475),
          wdBind17476 && (wdBind21568.extent = wdBind17476),
          wdBind21568
        );
      }
      return wdIn3499;
    }
    let wdBind11948 = worksheetDrawings.wdBind765(wdIn3499);
    return wdBind11948
      ? {
          from: wdBind11948,
        }
      : undefined;
  };
  worksheetDrawings.wdBind768 = (wdIn6594, wdIn6595, wdIn6596) => {
    if ((wdIn6595 === undefined && wdIn6596 === undefined) || !wdIn6594)
      return wdIn6594;
    let wdBind16869 = {
      ...(wdIn6594.extent ?? {}),
    };
    return (
      wdIn6595 !== undefined && (wdBind16869.widthPx = wdIn6595),
      wdIn6596 !== undefined && (wdBind16869.heightPx = wdIn6596),
      {
        ...wdIn6594,
        extent: wdBind16869,
      }
    );
  };
  worksheetDrawings.wdBind769 = (wdIn8140) =>
    Error(
      `Unsupported shape geometry: ${wdIn8140 ?? "unknown"}. Use workbook.help('enum.ShapeGeometry') for valid values or workbook.help('worksheet.shapes.add') for examples.`,
    );
  worksheetDrawings.wdBind770 = (wdIn9667) => {
    if (typeof wdIn9667 == "number" && Number.isFinite(wdIn9667))
      return wdIn9667;
    let wdBind20203 = Number(wdIn9667);
    return Number.isFinite(wdBind20203) ? wdBind20203 : 0;
  };
  worksheetDrawings.wdBind771 = (wdIn7410) => {
    if (typeof wdIn7410 == "number") return Number.isFinite(wdIn7410);
    if (typeof wdIn7410 == "string") {
      let wdBind21837 = wdIn7410.trim();
      return wdBind21837.length > 0 && Number.isFinite(Number(wdBind21837));
    }
    return false;
  };
  worksheetDrawings.Ive = (props) => `'${props.replace(/'/g, "''")}'`;
  worksheetDrawings.wdBind772 = (wdIn15864, wdIn15865) =>
    `$${colIndexToLetters(wdIn15865)}$${wdIn15864 + 1}`;
  worksheetDrawings.wdBind773 = (wdIn8767) => {
    let wdBind19289 = worksheetDrawings.Ive(wdIn8767.sheetName),
      wdBind19290 = worksheetDrawings.wdBind772(
        wdIn8767.startRow,
        wdIn8767.startCol,
      ),
      wdBind19291 = worksheetDrawings.wdBind772(
        wdIn8767.endRow,
        wdIn8767.endCol,
      );
    return `${wdBind19289}!${wdBind19290 === wdBind19291 ? wdBind19290 : `${wdBind19290}:${wdBind19291}`}`;
  };
  worksheetDrawings.wdBind774 = (wdIn1785) => {
    let wdBind8304 = wdIn1785[0];
    if (!wdBind8304 || wdBind8304.length === 0)
      return {
        categories: [],
        series: [],
      };
    let wdBind8305 = wdIn1785.length,
      wdBind8306 = wdBind8304.length;
    if (wdBind8305 >= 2 && wdBind8306 >= 2) {
      let wdBind11422 = wdBind8304.some((item) =>
          worksheetDrawings.wdBind771(item),
        ),
        wdBind11423 =
          wdBind8304.some(
            (item) =>
              typeof item == "string" &&
              item.trim().length > 0 &&
              !worksheetDrawings.wdBind771(item),
          ) && !wdBind11422,
        wdBind11424 = wdBind11423 ? wdIn1785.slice(1) : wdIn1785,
        wdBind11425 = wdBind11424.map((item) => String(item?.[0] ?? "")),
        wdBind11426 = [];
      for (let wdBind18228 = 1; wdBind18228 < wdBind8306; wdBind18228 += 1) {
        let wdBind19129 = wdBind11423
            ? String(wdBind8304[wdBind18228] ?? `Series ${wdBind18228}`)
            : `Series ${wdBind18228}`,
          wdBind19130 = wdBind11424.map((item) =>
            worksheetDrawings.wdBind770(item?.[wdBind18228]),
          );
        wdBind11426.push({
          name: wdBind19129,
          values: wdBind19130,
          categories: wdBind11425,
        });
      }
      return {
        categories: wdBind11425,
        series: wdBind11426,
      };
    }
    let wdBind8307 = wdBind8304.map((item) =>
      worksheetDrawings.wdBind770(item),
    );
    return {
      categories: wdBind8304.map((item, index) => `Item ${index + 1}`),
      series: [
        {
          name: "Series 1",
          values: wdBind8307,
        },
      ],
    };
  };
  worksheetDrawings.wdBind775 = (wdIn687, wdIn688) => {
    if (
      ((wdIn687.categories = []),
      wdIn687.series.clear(),
      wdIn688 instanceof Range)
    ) {
      let wdBind5406 = wdIn688.__getWorksheet(),
        wdBind5407 = wdBind5406 ? parseA1Range(wdIn688.address) : null;
      if (wdBind5406 && wdBind5407) {
        let wdBind5610 = wdBind5407.bounds,
          wdBind5611 = wdBind5610.endRow - wdBind5610.startRow + 1,
          wdBind5612 = wdBind5610.endCol - wdBind5610.startCol + 1;
        if (wdBind5611 >= 1 && wdBind5612 >= 2) {
          let wdBind6133 = (wdIn688.values ?? [])[0] ?? [],
            wdBind6134 = wdBind6133.some((item) =>
              worksheetDrawings.wdBind771(item),
            ),
            wdBind6135 = wdBind6133.some(
              (item) =>
                typeof item == "string" &&
                item.trim().length > 0 &&
                !worksheetDrawings.wdBind771(item),
            ),
            wdBind6136 = wdBind5611 >= 2 && wdBind6135 && !wdBind6134,
            wdBind6137 = wdBind6136
              ? wdBind5610.startRow + 1
              : wdBind5610.startRow;
          if (wdBind6137 <= wdBind5610.endRow) {
            let wdBind7678 = wdBind5406.name?.trim() ?? "";
            if (wdBind7678) {
              let wdBind8205 = worksheetDrawings.wdBind773({
                sheetName: wdBind7678,
                startRow: wdBind6137,
                startCol: wdBind5610.startCol,
                endRow: wdBind5610.endRow,
                endCol: wdBind5610.startCol,
              });
              for (
                let wdBind10654 = 1;
                wdBind10654 < wdBind5612;
                wdBind10654 += 1
              ) {
                let wdBind10968 = wdBind5610.startCol + wdBind10654,
                  wdBind10969 = wdBind6136
                    ? String(wdBind6133[wdBind10654] ?? `Series ${wdBind10654}`)
                    : `Series ${wdBind10654}`,
                  wdBind10970 = wdIn687.series.add(wdBind10969);
                wdBind10970.categoryFormula = wdBind8205;
                wdBind10970.formula = worksheetDrawings.wdBind773({
                  sheetName: wdBind7678,
                  startRow: wdBind6137,
                  startCol: wdBind10968,
                  endRow: wdBind5610.endRow,
                  endCol: wdBind10968,
                });
                let wdBind10971 = wdBind5406.getRangeByIndexes(
                  wdBind6137,
                  wdBind10968,
                  1,
                  1,
                ).format.numberFormat;
                wdBind10971 && (wdBind10970.valuesFormatCode = wdBind10971);
              }
              return;
            }
          }
        }
      }
    }
    let wdBind4961 = worksheetDrawings.wdBind774(wdIn688.values ?? []);
    wdBind4961.categories.length > 0 &&
      (wdIn687.categories = wdBind4961.categories);
    wdBind4961.series.length > 0 &&
      worksheetDrawings.wdBind776(wdIn687, wdBind4961.series);
  };
  worksheetDrawings.wdBind776 = (wdIn1198, wdIn1199) => {
    for (let wdBind6788 of wdIn1199) {
      let wdBind6879 = wdIn1198.series.add(wdBind6788.name);
      if (
        (wdBind6788.values && (wdBind6879.values = [...wdBind6788.values]),
        wdBind6788.xValues && (wdBind6879.xValues = [...wdBind6788.xValues]),
        wdBind6788.categories &&
          (wdBind6879.categories = [...wdBind6788.categories]),
        wdBind6788.formula !== undefined &&
          (wdBind6879.formula = wdBind6788.formula),
        wdBind6788.categoryFormula !== undefined &&
          (wdBind6879.categoryFormula = wdBind6788.categoryFormula),
        wdBind6788.xFormula !== undefined &&
          (wdBind6879.xFormula = wdBind6788.xFormula),
        wdBind6788.valuesFormatCode !== undefined &&
          (wdBind6879.valuesFormatCode = wdBind6788.valuesFormatCode),
        wdBind6788.xValuesFormatCode !== undefined &&
          (wdBind6879.xValuesFormatCode = wdBind6788.xValuesFormatCode),
        wdBind6788.fill !== undefined && (wdBind6879.fill = wdBind6788.fill),
        wdBind6788.stroke)
      ) {
        let wdBind17829 = wdBind6788.stroke;
        wdBind17829.fill !== undefined &&
          (wdBind6879.stroke.fill = wdBind17829.fill);
        wdBind17829.style !== undefined &&
          (wdBind6879.stroke.style = wdBind17829.style);
        wdBind17829.width !== undefined &&
          (wdBind6879.stroke.width = wdBind17829.width);
      }
      if (wdBind6788.marker) {
        let wdBind19643 = wdBind6788.marker;
        wdBind19643.symbol !== undefined &&
          (wdBind6879.marker.symbol = wdBind19643.symbol);
        wdBind19643.size !== undefined &&
          (wdBind6879.marker.size = wdBind19643.size);
      }
    }
  };
  worksheetDrawings.wdBind777 = (wdIn1154, wdIn1155) => {
    wdIn1155.barOptions &&
      (wdIn1155.barOptions.direction !== undefined &&
        (wdIn1154.barOptions.direction = wdIn1155.barOptions.direction),
      wdIn1155.barOptions.grouping !== undefined &&
        (wdIn1154.barOptions.grouping = wdIn1155.barOptions.grouping),
      wdIn1155.barOptions.varyColors !== undefined &&
        (wdIn1154.barOptions.varyColors = wdIn1155.barOptions.varyColors),
      wdIn1155.barOptions.gapWidth !== undefined &&
        (wdIn1154.barOptions.gapWidth = wdIn1155.barOptions.gapWidth),
      wdIn1155.barOptions.gapDepth !== undefined &&
        (wdIn1154.barOptions.gapDepth = wdIn1155.barOptions.gapDepth),
      wdIn1155.barOptions.overlap !== undefined &&
        (wdIn1154.barOptions.overlap = wdIn1155.barOptions.overlap),
      wdIn1155.barOptions.bar3dShape !== undefined &&
        (wdIn1154.barOptions.bar3dShape = wdIn1155.barOptions.bar3dShape));
    wdIn1155.pieOptions?.firstSliceAngle !== undefined &&
      (wdIn1154.pieOptions.firstSliceAngle =
        wdIn1155.pieOptions.firstSliceAngle);
    wdIn1155.doughnutOptions &&
      (wdIn1155.doughnutOptions.holeSize !== undefined &&
        (wdIn1154.doughnutOptions.holeSize = wdIn1155.doughnutOptions.holeSize),
      wdIn1155.doughnutOptions.firstSliceAngle !== undefined &&
        (wdIn1154.doughnutOptions.firstSliceAngle =
          wdIn1155.doughnutOptions.firstSliceAngle));
  };
  worksheetDrawings.wdBind778 = (wdIn9002, wdIn9003) => {
    wdIn9003 &&
      (wdIn9003.barDirection &&
        (wdIn9002.barOptions.direction = wdIn9003.barDirection),
      wdIn9003.barGrouping &&
        (wdIn9002.barOptions.grouping = wdIn9003.barGrouping));
  };
  worksheetDrawings.WorksheetShapeDrawing = class extends ShapeElementBase {
    anchor;
    #e;
    #t;
    #n;
    constructor(wdIn1142, wdIn1143, wdIn1144, wdIn1145) {
      if ("proto" in wdIn1143) {
        let wdBind8620 = wdIn1143.proto.shape ?? {
          id: "",
          name: "",
          type: presentationElementType.ELEMENT_TYPE_SHAPE,
          shape: {
            geometry: ShapeGeometry.SHAPE_GEOMETRY_RECT,
            fill: undefined,
            adjustmentList: [],
            rectFormula: undefined,
            customPaths: [],
            customGeometryGuides: [],
          },
          paragraphs: [],
          effects: [],
          children: [],
          levelsStyles: [],
          citations: [],
        };
        super(wdIn1142, {
          proto: wdBind8620,
        });
        wdIn1145?.id && (this.data.id = wdIn1145.id);
        this.#t = wdIn1142;
        this.#n = wdIn1145?.createdInRecorder;
        this.anchor = new worksheetDrawings.WorksheetAnchor(wdIn1143.proto);
        this.#e = wdIn1144;
        this.anchor.setChangeHandler(() => this.#r());
        return;
      }
      let { anchor, ...rest } = wdIn1143;
      super(wdIn1142, rest);
      wdIn1145?.id && (this.data.id = wdIn1145.id);
      this.#t = wdIn1142;
      this.#n = wdIn1145?.createdInRecorder;
      this.anchor = new worksheetDrawings.WorksheetAnchor(undefined, anchor);
      this.#e = wdIn1144;
      this.anchor.setChangeHandler(() => this.#r());
    }
    resolveBoundsPx(wdIn12123, wdIn12124) {
      return this.anchor.resolveBoundsPx(wdIn12123, wdIn12124);
    }
    captureAnchorSnapshot() {
      return this.anchor.captureSnapshot();
    }
    restoreAnchorSnapshot(wdIn12541) {
      this.anchor.restoreSnapshot(wdIn12541);
    }
    setPreviewBoundsPx(wdIn11844, wdIn11845, wdIn11846) {
      this.anchor.setPreviewBoundsPx(wdIn11844, wdIn11845, wdIn11846);
    }
    clearPreviewBounds() {
      this.anchor.clearPreviewBounds();
    }
    applyBoundsPx(wdIn12413, wdIn12414, wdIn12415) {
      this.anchor.applyBoundsPx(wdIn12413, wdIn12414, wdIn12415);
    }
    toDrawingProto(wdIn3738) {
      let { fromAnchor, toAnchor, extentCx, extentCy } =
          this.anchor.toProtoFields(wdIn3738),
        wdBind12436 = this.toProto();
      if (!wdBind12436.bbox) {
        let wdBind22316 = worksheetDrawings.wdBind780(this.anchor, wdIn3738);
        wdBind22316 && (wdBind12436.bbox = wdBind22316);
      }
      return {
        fromAnchor,
        toAnchor,
        extentCx,
        extentCy,
        shape: wdBind12436,
      };
    }
    delete() {
      this.#e?.(this);
    }
    recordShapeSet(wdIn14809) {
      this.#r();
    }
    #r() {
      let wdBind16487 = this.#t.getRecorder(),
        wdBind16488 = this.#t.getSheetName();
      !wdBind16487 ||
        !wdBind16488 ||
        (this.#n !== wdBind16487 &&
          wdBind16487.deferOnce(`shape.set:${this.id}`, () =>
            buildShapeSetOp({
              sheet: wdBind16488,
              shape: this,
            }),
          ));
    }
  };
  worksheetDrawings.wdBind780 = (wdIn1822, wdIn1823) => {
    let wdBind8377 = wdIn1822.toProtoFields(wdIn1823),
      wdBind8378 = worksheetDrawings.wdBind747({
        extentCx: wdBind8377.extentCx,
        extentCy: wdBind8377.extentCy,
      }),
      wdBind8379 = worksheetDrawings.wdBind749(wdBind8378);
    if (wdBind8379?.widthPx && wdBind8379?.heightPx)
      return {
        xEmu: 0,
        yEmu: 0,
        widthEmu: Math.round(wdBind8379.widthPx * (1 / workbookGt)),
        heightEmu: Math.round(wdBind8379.heightPx * (1 / workbookGt)),
      };
    let wdBind8380 = worksheetDrawings.wdBind744(wdBind8377.fromAnchor),
      wdBind8381 = worksheetDrawings.wdBind744(wdBind8377.toAnchor);
    if (!wdBind8380 || !wdBind8381) return null;
    let wdBind8382 = worksheetDrawings.snapshotAnchorPoint(wdBind8380),
      wdBind8383 = worksheetDrawings.snapshotAnchorPoint(wdBind8381);
    if (!wdBind8383) return null;
    let wdBind8384 = Math.max(1, wdBind8383.col - wdBind8382.col),
      wdBind8385 = Math.max(1, wdBind8383.row - wdBind8382.row),
      wdBind8386 =
        wdBind8384 * 59 +
        (wdBind8383.colOffsetPx ?? 0) -
        (wdBind8382.colOffsetPx ?? 0),
      wdBind8387 =
        wdBind8385 * pointsToPixels(15) +
        (wdBind8383.rowOffsetPx ?? 0) -
        (wdBind8382.rowOffsetPx ?? 0);
    return {
      xEmu: 0,
      yEmu: 0,
      widthEmu: Math.round(Math.max(1, wdBind8386) * (1 / workbookGt)),
      heightEmu: Math.round(Math.max(1, wdBind8387) * (1 / workbookGt)),
    };
  };
});
