// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-65: Sheet prototype install (sheet-methods-viewport.ts).

import { sheet } from "./sheet-bag";
import { randomBase36Id } from "../stable-id";
import { Map as YMap } from "../../vendor/yjs";
import {
  columnWidthPx,
  formatA1,
  formatA1Range,
  parseA1Range,
  parseSheetRef,
  boundsIntersect,
  defaultCharWidth,
  pointsToPixels,
} from "../../utils/spreadsheet-address-utils";
import { columnNumberToLetters } from "../formula";
import {
  applyWorksheetDrawingLayout,
  getWorksheetDrawingsClass,
  createWorksheetDrawingContext,
} from "../worksheet-drawings";
import {
  getCellClass,
  getCellGridClass,
  getSparklineGroupsClass,
} from "../sparklines";
import { Range } from "../range";
import { PivotCaches } from "../pivot-caches";
import { Slicers } from "../slicers";
import { ConditionalFormattings } from "../conditional-format";
import { DataValidations } from "../data-validation";
import { p } from "../spreadsheet-protobuf";
import {
  getStyleRefsCollabClass,
  getTableStyleClass,
  getMergedRangeIndexClass,
  getTablesCollectionClass,
  getSparklinesFacadeClass,
  isCheckboxStyle,
  notifyRowHeights,
  buildSparklinePreview,
} from "./boundary-hooks";
import {
  GYe,
  parseSheetColWidth,
  clampNonNegInt,
  asFiniteNumber,
  qYe,
  JYe,
  YYe,
  XYe,
  ZYe,
  QYe,
  $Ye,
  eXe,
  tXe,
  nXe,
  oXe,
  sXe,
  cXe,
  lXe,
  uXe,
  dXe,
  fXe,
  pXe,
  mXe,
  hXe,
  gXe,
  ensureSheetAutoHeightInit,
  ensureAutoHeightCacheInit,
} from "./sheet-helpers";

const Cell: any = new Proxy(function CellProxy() {}, {
  construct(_t: any, args: any[]) {
    return new (getCellClass() as any)(...args);
  },
  get(_t: any, prop: PropertyKey) {
    if (prop === Symbol.hasInstance)
      return (instance: any) => instance instanceof getCellClass();
    if (prop === "prototype") return (getCellClass() as any)?.prototype;
    const Ctor = getCellClass() as any;
    const value = Ctor?.[prop as any];
    return typeof value === "function" ? value.bind(Ctor) : value;
  },
});
const CellGrid: any = new Proxy(function CellGridProxy() {}, {
  construct(_t: any, args: any[]) {
    return new (getCellGridClass() as any)(...args);
  },
  get(_t: any, prop: PropertyKey) {
    if (prop === Symbol.hasInstance)
      return (instance: any) => instance instanceof getCellGridClass();
    if (prop === "prototype") return (getCellGridClass() as any)?.prototype;
    const Ctor = getCellGridClass() as any;
    const value = Ctor?.[prop as any];
    return typeof value === "function" ? value.bind(Ctor) : value;
  },
});
const SparklineGroups: any = new Proxy(function SparklineGroupsProxy() {}, {
  construct(_t: any, args: any[]) {
    return new (getSparklineGroupsClass() as any)(...args);
  },
  get(_t: any, prop: PropertyKey) {
    if (prop === Symbol.hasInstance)
      return (instance: any) => instance instanceof getSparklineGroupsClass();
    if (prop === "prototype")
      return (getSparklineGroupsClass() as any)?.prototype;
    const Ctor = getSparklineGroupsClass() as any;
    const value = Ctor?.[prop as any];
    return typeof value === "function" ? value.bind(Ctor) : value;
  },
});
const WorksheetDrawings: any = new Proxy(function WorksheetDrawingsProxy() {}, {
  construct(_t: any, args: any[]) {
    return new (getWorksheetDrawingsClass() as any)(...args);
  },
  get(_t: any, prop: PropertyKey) {
    if (prop === Symbol.hasInstance)
      return (instance: any) => instance instanceof getWorksheetDrawingsClass();
    if (prop === "prototype")
      return (getWorksheetDrawingsClass() as any)?.prototype;
    const Ctor = getWorksheetDrawingsClass() as any;
    const value = Ctor?.[prop as any];
    return typeof value === "function" ? value.bind(Ctor) : value;
  },
});

export function installViewport(proto: any): void {
  proto["__getViewportLayout"] = function (shIn159: any = {}) {
    let shBind2928 = Math.max(1, shIn159.maxCols ?? 500),
      shBind2929 = Math.max(1, shIn159.maxRows ?? 500),
      shBind2930 = shIn159.showFormulas ?? false,
      shBind2931 = shIn159.colWidthOverridesPx,
      shBind2932 = shIn159.rowHeightOverridesPx,
      shBind2933 = shIn159.autoRowHeights ?? true,
      shBind2934 = shBind2933
        ? this._e.workbook.getSpreadsheetRenderAssets()
        : undefined,
      shBind2935 = shBind2934?.defaultFontMaxDigitWidthPx;
    if (!this._M && this._j) {
      let shBind13766 = this._j;
      if (
        shBind13766.maxCols === shBind2928 &&
        shBind13766.maxRows === shBind2929 &&
        shBind13766.showFormulas === shBind2930 &&
        shBind13766.colWidthOverridesPx === shBind2931 &&
        shBind13766.rowHeightOverridesPx === shBind2932 &&
        shBind13766.autoRowHeightsEnabled === shBind2933 &&
        shBind13766.spreadsheetRenderAssets === shBind2934 &&
        this._A
      )
        return this._A;
    }
    let shBind2936 = columnWidthPx(
        typeof this._t.defaultColWidth == "number" &&
          this._t.defaultColWidth > 0
          ? this._t.defaultColWidth
          : typeof this._t.baseColWidth == "number" && this._t.baseColWidth > 0
            ? this._t.baseColWidth
            : defaultCharWidth,
        shBind2935,
      ),
      shBind2937 = Array(shBind2928).fill(shBind2936);
    for (let shBind12108 of this.__getColumns()) {
      let shBind12653 = Math.max(0, (shBind12108.min ?? 1) - 1),
        shBind12654 = Math.max(
          shBind12653,
          (shBind12108.max ?? shBind12108.min ?? 1) - 1,
        ),
        shBind12655 = !!shBind12108.hidden;
      if (
        !shBind12655 &&
        shBind12108.customWidth !== true &&
        (!(
          typeof shBind12108.width == "number" &&
          Number.isFinite(shBind12108.width)
        ) ||
          shBind12108.width <= 0)
      )
        continue;
      let shBind12656 = shBind12655
        ? 0
        : columnWidthPx(shBind12108.width, shBind2935);
      for (
        let shBind22793 = shBind12653;
        shBind22793 <= shBind12654 && shBind22793 < shBind2937.length;
        shBind22793 += 1
      )
        shBind2937[shBind22793] = shBind12656;
    }
    if (shBind2931)
      for (let [shBind16480, shBind16481] of Object.entries(shBind2931)) {
        let shBind17425 = Number(shBind16480);
        Number.isFinite(shBind17425) &&
          shBind17425 >= 0 &&
          shBind17425 < shBind2937.length &&
          typeof shBind16481 == "number" &&
          !Number.isNaN(shBind16481) &&
          (shBind2937[shBind17425] = shBind16481);
      }
    let shBind2938 = shBind2937;
    if (shBind2930) {
      let shBind10920 = new Set();
      for (let shBind15578 of this.__getRows())
        for (let shBind16588 of shBind15578.cells ?? [])
          if (
            (shBind16588.formula && shBind16588.formula !== "") ||
            typeof shBind16588.sharedFormulaSi == "number"
          ) {
            let shBind21714 = asFiniteNumber(shBind16588.address ?? "");
            shBind21714 && shBind10920.add(shBind21714.col);
          }
      shBind10920.size > 0 &&
        ((shBind2938 = shBind2937.slice()),
        shBind10920.forEach((item) => {
          (shBind2931 &&
            Object.prototype.hasOwnProperty.call(shBind2931, item)) ||
            (item >= 0 &&
              item < shBind2938.length &&
              (shBind2938[item] = shBind2938[item] * 2));
        }));
    }
    let shBind2939 =
        this._t.defaultRowHeight && this._t.defaultRowHeight !== 0
          ? this._t.defaultRowHeight
          : 15,
      shBind2940 = Array(shBind2929).fill(pointsToPixels(shBind2939));
    for (let shBind14654 of this.__getRows()) {
      let shBind15357 = (shBind14654.index ?? 1) - 1;
      if (!(shBind15357 < 0 || shBind15357 >= shBind2940.length)) {
        if (shBind14654.hidden) {
          shBind2940[shBind15357] = 0;
          continue;
        }
        (shBind14654.customHeight || shBind14654.height !== 0) &&
          shBind14654.height != null &&
          (shBind2940[shBind15357] = pointsToPixels(shBind14654.height));
      }
    }
    if (shBind2934) {
      let shBind10525 = this.__getSpreadsheetRenderMetadata(
          shBind2934.themeMap,
        ),
        shBind10526 = this._N.getAutoHeights({
          rows: this.__getRows(),
          colWidthsPx: shBind2938,
          rowHeightsPx: shBind2940,
          maxRows: shBind2929,
          showFormulas: shBind2930,
          styleInfos: shBind2934.styleInfos,
          themeMap: shBind2934.themeMap,
          colStyleIndices: shBind10525.colStyleIndices,
          sharedFormulaMap: shBind10525.sharedFormulaMap,
          mergedRangeIndex: this.__getMergedRangeIndex(),
        });
      for (let [shBind22092, shBind22093] of shBind10526)
        shBind22092 >= 0 &&
          shBind22092 < shBind2940.length &&
          shBind22093 > (shBind2940[shBind22092] ?? 0) &&
          (shBind2940[shBind22092] = shBind22093);
    }
    if (shBind2932)
      for (let [shBind16482, shBind16483] of Object.entries(shBind2932)) {
        let shBind17426 = Number(shBind16482);
        Number.isFinite(shBind17426) &&
          shBind17426 >= 0 &&
          shBind17426 < shBind2940.length &&
          typeof shBind16483 == "number" &&
          !Number.isNaN(shBind16483) &&
          (shBind2940[shBind17426] = shBind16483);
      }
    let shBind2941 = [0];
    for (let shBind22244 = 0; shBind22244 < shBind2938.length; shBind22244 += 1)
      shBind2941[shBind22244 + 1] =
        (shBind2941[shBind22244] ?? 0) + (shBind2938[shBind22244] ?? 0);
    let shBind2942 = [0];
    for (
      let shBind19961 = 0;
      shBind19961 < shBind2938.length;
      shBind19961 += 1
    ) {
      let shBind21143 = shBind2938[shBind19961] ?? 0,
        shBind21144 = Math.max(0, shBind21143 - 5);
      shBind2942[shBind19961 + 1] =
        (shBind2942[shBind19961] ?? 0) + shBind21144;
    }
    let shBind2943 = [0];
    for (let shBind22245 = 0; shBind22245 < shBind2940.length; shBind22245 += 1)
      shBind2943[shBind22245 + 1] =
        (shBind2943[shBind22245] ?? 0) + (shBind2940[shBind22245] ?? 0);
    let shBind2944 = {
      colWidthsPx: shBind2937,
      viewColWidthsPx: shBind2938,
      rowHeightsPx: shBind2940,
      colOffsetsPx: shBind2941,
      rowOffsetsPx: shBind2943,
      colOffsetsRawPx: shBind2942,
      viewTotalWidthPx: shBind2941[shBind2941.length - 1] ?? 0,
      totalHeightPx: shBind2943[shBind2943.length - 1] ?? 0,
    };
    return (
      (this._M = false),
      (this._j = {
        maxCols: shBind2928,
        maxRows: shBind2929,
        showFormulas: shBind2930,
        colWidthOverridesPx: shBind2931,
        rowHeightOverridesPx: shBind2932,
        autoRowHeightsEnabled: shBind2933,
        spreadsheetRenderAssets: shBind2934,
      }),
      (this._A = shBind2944),
      shBind2944
    );
  };

  proto["delete"] = function () {
    let shBind18121 = this.workbook.getRecorder();
    if (shBind18121) {
      let shBind21805 = {
        op: "sheet.remove",
        target: this.name,
      };
      shBind18121.record(shBind21805);
    }
    this._e.onDelete?.(this);
  };

  proto["toProto"] = function () {
    let shBind4546 = new Map(),
      shBind4547 = new WeakMap();
    for (let [shBind22590, shBind22591] of this._s.entries()) {
      shBind22591.cells = [];
      shBind4546.set(shBind22590, shBind22591);
    }
    for (let [
      shBind17690,
      shBind17691,
      shBind17692,
    ] of this._o.cellsWithCoordinates()) {
      let shBind19266 = shBind4546.get(shBind17690);
      shBind19266 ||
        ((shBind19266 = this.__getOrCreateRow(shBind17690)),
        (shBind19266.cells = []),
        shBind4546.set(shBind17690, shBind19266));
      shBind19266.cells.push(shBind17692);
      shBind4547.set(shBind17692, shBind17691);
    }
    for (let shBind14742 of shBind4546.values())
      shBind14742.cells &&
        shBind14742.cells.sort((shIn6309, shIn6310) => {
          let shBind16430 =
              shBind4547.get(shIn6309) ??
              asFiniteNumber(shIn6309.address ?? "")?.col ??
              0,
            shBind16431 =
              shBind4547.get(shIn6310) ??
              asFiniteNumber(shIn6310.address ?? "")?.col ??
              0;
          return shBind16430 === shBind16431
            ? (shIn6309.address ?? "").localeCompare(shIn6310.address ?? "")
            : shBind16430 - shBind16431;
        });
    this._i.rows = [...shBind4546.values()].sort(
      (shIn15503, shIn15504) => (shIn15503.index ?? 0) - (shIn15504.index ?? 0),
    );
    let shBind4548 = {
      id: this._t.id,
      sheetId: this._t.sheetId,
      index: this._t.index,
      name: this._t.name,
      innerXml: this._t.innerXml,
      outerXml: this._t.outerXml,
      defaultRowHeight: this._t.defaultRowHeight,
      defaultColWidth: this._t.defaultColWidth,
      baseColWidth: this._t.baseColWidth,
      showGridLines: this._t.showGridLines,
      tabColor: this._n,
      rows: this._i.rows,
      columns: this._i.columns,
      mergedCells: this._i.mergedCells,
      conditionalFormattings: this._i.conditionalFormattings,
      dataValidations:
        this._i.dataValidations.length > 0
          ? {
              items: this._i.dataValidations,
            }
          : undefined,
      sharedFormulas: this._i.sharedFormulas,
      tables: this._i.tables,
      pivotTables: this._i.pivotTables,
      slicers: this._i.slicers,
      timelines: this._i.timelines,
      drawings: this._v.toProto(),
      sparklineGroups: this.__.toProto(),
    };
    this._r || (shBind4548.defaultColWidth = 0);
    let shBind4549 = this._x.state;
    return (
      (shBind4549.rowCount > 0 || shBind4549.columnCount > 0) &&
        (shBind4548[sheet.FREEZE_PANES_KEY] = shBind4549),
      shBind4548
    );
  };

  proto["__notifyCellFormulaChanged"] = function (
    shIn7986: any,
    shIn7987: any,
  ) {
    this.__invalidateViewportLayout();
    let shBind18468 = parseSheetColWidth(shIn7986);
    shBind18468 && notifyRowHeights(this, [shBind18468.row]);
    this._e.notifyCellFormulaChanged(this, shIn7986, shIn7987);
  };

  proto["__notifyCellValueChanged"] = function (shIn8643: any) {
    this.__invalidateViewportLayout();
    let shBind19144 = parseSheetColWidth(shIn8643);
    shBind19144 && notifyRowHeights(this, [shBind19144.row]);
    this._e.notifyCellValueChanged(this, shIn8643);
  };

  proto["writeCellInputToYjs"] = function (shIn5962: any) {
    let shBind15983 = shIn5962.address;
    if (
      !shBind15983 ||
      !this._w ||
      !this._e.workbook.isCollaborativeStateReady()
    )
      return;
    let shBind15984 = this._de(shIn5962);
    if (!shBind15984) {
      this._w.delete(shBind15983);
      return;
    }
    this._w.set(shBind15983, shBind15984);
  };

  proto["__getRows"] = function () {
    return this._i.rows;
  };

  proto["__getColumns"] = function () {
    return this._i.columns;
  };

  proto["__getMergedCells"] = function () {
    return this._i.mergedCells;
  };

  proto["__getMergedRangeIndex"] = function () {
    let shBind13035 = this._i.mergedCells,
      shBind13036 = this._F;
    if (
      shBind13036 &&
      this._P &&
      shBind13036.mergedCellsRef === shBind13035 &&
      shBind13036.mergedCellsLength === shBind13035.length
    )
      return this._P;
    let shBind13037 = new (getMergedRangeIndexClass())(shBind13035);
    return (
      (this._P = shBind13037),
      (this._F = {
        mergedCellsRef: shBind13035,
        mergedCellsLength: shBind13035.length,
      }),
      shBind13037
    );
  };

  proto["__getSharedFormulas"] = function () {
    return (this.__queueCollaborativePublish(), this._i.sharedFormulas);
  };

  proto["__getDrawings"] = function () {
    return this._i.drawings;
  };

  proto["__getConditionalFormattings"] = function () {
    return this._i.conditionalFormattings;
  };

  proto["__getDataValidations"] = function () {
    return this._i.dataValidations;
  };

  proto["__getTables"] = function () {
    return this._i.tables;
  };

  proto["__getSpreadsheetRenderMetadata"] = function (shIn475: any) {
    let shBind4071 = this._i.columns,
      shBind4072 = this._i.dataValidations,
      shBind4073 = this._i.sharedFormulas,
      shBind4074 = this._i.tables,
      shBind4075 = this._L;
    if (
      shBind4075 &&
      this._I &&
      shBind4075.themeMap === shIn475 &&
      shBind4075.columnsRef === shBind4071 &&
      shBind4075.columnsLength === shBind4071.length &&
      shBind4075.dataValidationsRef === shBind4072 &&
      shBind4075.dataValidationsLength === shBind4072.length &&
      shBind4075.sharedFormulasRef === shBind4073 &&
      shBind4075.sharedFormulasLength === shBind4073.length &&
      shBind4075.tablesRef === shBind4074 &&
      shBind4075.tablesLength === shBind4074.length
    )
      return this._I;
    let shBind4076 = new Map();
    for (let shBind19747 of shBind4073)
      typeof shBind19747.si == "number" &&
        shBind19747.base &&
        shBind19747.anchor &&
        shBind4076.set(shBind19747.si, {
          base: shBind19747.base,
          anchor: shBind19747.anchor,
        });
    let shBind4077 = [];
    for (let shBind15709 of shBind4071) {
      let shBind16082 =
        typeof shBind15709.styleIndex == "number"
          ? shBind15709.styleIndex
          : undefined;
      if (shBind16082 == null) continue;
      let shBind16083 = Math.max(0, (shBind15709.min ?? 1) - 1),
        shBind16084 = Math.max(
          shBind16083,
          (shBind15709.max ?? shBind15709.min ?? 1) - 1,
        );
      for (
        let shBind22888 = shBind16083;
        shBind22888 <= shBind16084;
        shBind22888 += 1
      )
        shBind4077[shBind22888] ?? (shBind4077[shBind22888] = shBind16082);
    }
    let shBind4078 = [];
    for (let shBind17565 of shBind4072) {
      if (!isCheckboxStyle(shBind17565) || !shBind17565.sqref) continue;
      let shBind18062 = cXe(shBind17565.sqref);
      if (shBind18062.length === 0) continue;
      let shBind18063 = this._B(shBind17565.formula1);
      shBind4078.push({
        ranges: shBind18062,
        options: shBind18063,
      });
    }
    let shBind4079 = buildSparklinePreview(shBind4074, shIn475),
      shBind4080 = new Map(),
      shBind4081 = new Set();
    for (let shBind15186 of shBind4079) {
      for (
        let shBind20318 = shBind15186.startRow + 1;
        shBind20318 <= shBind15186.endRow;
        shBind20318 += 1
      )
        for (
          let shBind22362 = shBind15186.startCol;
          shBind22362 <= shBind15186.endCol;
          shBind22362 += 1
        )
          shBind4081.add(`${shBind20318}:${shBind22362}`);
      for (
        let shBind20579 = shBind15186.startRow;
        shBind20579 <= shBind15186.endRow;
        shBind20579 += 1
      ) {
        let shBind22094 = shBind4080.get(shBind20579);
        shBind22094
          ? shBind22094.push(shBind15186)
          : shBind4080.set(shBind20579, [shBind15186]);
      }
    }
    let shBind4082 = {
      sharedFormulaMap: shBind4076,
      colStyleIndices: shBind4077,
      listValidationEntries: shBind4078,
      tableResolvers: shBind4079,
      tableResolversByRow: shBind4080,
      tableHorizontalBoundaries: shBind4081,
    };
    return (
      (this._I = shBind4082),
      (this._L = {
        themeMap: shIn475,
        columnsRef: shBind4071,
        columnsLength: shBind4071.length,
        dataValidationsRef: shBind4072,
        dataValidationsLength: shBind4072.length,
        sharedFormulasRef: shBind4073,
        sharedFormulasLength: shBind4073.length,
        tablesRef: shBind4074,
        tablesLength: shBind4074.length,
      }),
      shBind4082
    );
  };

  proto["_B"] = function (shIn2377: any) {
    let shBind9579 = shIn2377 ? String(shIn2377).trim() : "";
    if (!shBind9579) return [];
    let shBind9580 = shBind9579.startsWith("=")
      ? shBind9579.slice(1).trim()
      : shBind9579;
    if (shBind9580.startsWith('"') && shBind9580.endsWith('"'))
      return shBind9580
        .slice(1, -1)
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item.length > 0);
    try {
      let shBind15049 = this.getRange(shBind9580).values ?? [],
        shBind15050 = [];
      for (let shBind17897 of shBind15049)
        if (Array.isArray(shBind17897))
          for (let shBind19935 of shBind17897) {
            if (shBind19935 == null) continue;
            let shBind20467 = String(shBind19935);
            shBind20467.length > 0 && shBind15050.push(shBind20467);
          }
      return shBind15050;
    } catch {
      return [];
    }
  };

  proto["__getDataTables"] = function () {
    return this._p.__getDefinitions();
  };

  proto["__getPivotTables"] = function () {
    return this._i.pivotTables;
  };

  proto["__getSlicers"] = function () {
    return this._i.slicers;
  };
}
