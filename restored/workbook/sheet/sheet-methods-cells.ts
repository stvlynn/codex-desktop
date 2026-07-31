// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-65: Sheet prototype install (sheet-methods-cells.ts).

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

export function installCells(proto: any): void {
  proto["_V"] = function () {
    return {
      sheetProps: {
        defaultRowHeight: this._t.defaultRowHeight,
        defaultColWidth: this._t.defaultColWidth,
        defaultColWidthExplicit: this._r,
        baseColWidth: this._t.baseColWidth,
        showGridLines: this._t.showGridLines,
        tabColor: this._n,
      },
      rowMeta: this._i.rows.map((item) => fXe(item)),
      colMeta: this._i.columns.map((item) => pXe(item)),
      mergedCells: this._i.mergedCells.map((item) => ({
        ...item,
      })),
      sharedFormulas: this._i.sharedFormulas.map((item) => ({
        ...item,
      })),
    };
  };

  proto["_H"] = function (shIn872: any) {
    this._r = shIn872.sheetProps.defaultColWidthExplicit;
    this._t.defaultRowHeight = shIn872.sheetProps.defaultRowHeight;
    this._t.defaultColWidth = shIn872.sheetProps.defaultColWidth;
    this._t.baseColWidth = shIn872.sheetProps.baseColWidth;
    this._t.showGridLines = shIn872.sheetProps.showGridLines;
    this._n = shIn872.sheetProps.tabColor;
    let shBind5584 = new Map();
    for (let [shBind22909, shBind22910] of this._s.entries())
      shBind5584.set(shBind22909, shBind22910);
    let shBind5585 = [],
      shBind5586 = new Map();
    for (let shBind14279 of shIn872.rowMeta) {
      let shBind14743 = Math.max(0, (shBind14279.index ?? 1) - 1),
        shBind14744 = shBind5584.get(shBind14743),
        shBind14745 = {
          ...shBind14279,
          height: shBind14744?.height ?? 0,
          customHeight: shBind14744?.customHeight ?? false,
          hidden: shBind14744?.hidden ?? false,
          cells: shBind14744?.cells ?? [],
        };
      shBind5585.push(shBind14745);
      shBind5586.set(shBind14743, shBind14745);
    }
    this._i.rows = shBind5585;
    this._s = shBind5586;
    let shBind5587 = new Map();
    for (let shBind22933 of this._i.columns)
      shBind5587.set(mXe(shBind22933), shBind22933);
    this._i.columns = shIn872.colMeta.map((item) => {
      let shBind17748 = shBind5587.get(mXe(item));
      return {
        ...item,
        width: shBind17748?.width ?? 0,
        customWidth: shBind17748?.customWidth ?? false,
        hidden: shBind17748?.hidden ?? false,
      };
    });
    this._i.mergedCells = shIn872.mergedCells.map((item) => ({
      ...item,
    }));
    this._z();
    this._i.sharedFormulas = shIn872.sharedFormulas.map((item) => ({
      ...item,
    }));
    this.__invalidateViewportLayout();
  };

  proto["__setLogicalStyleIndex"] = function (
    shIn11135: any,
    shIn11136: any,
    shIn11137: any,
  ) {
    let shBind21629 = this._me(shIn11135, shIn11136);
    this._h.set(shBind21629, shIn11137);
  };

  proto["__getLogicalStyleIndex"] = function (shIn11098: any, shIn11099: any) {
    let shBind21602 = this._me(shIn11098, shIn11099);
    return this._h.get(shBind21602);
  };

  proto["__setCellStyleRef"] = function (
    shIn12266: any,
    shIn12267: any,
    shIn12268: any,
  ) {
    this._g?.setCellStyleRef(shIn12266, shIn12267, shIn12268);
  };

  proto["__getCellStyleRef"] = function (shIn12197: any, shIn12198: any) {
    return this._g?.getCellStyleRef(shIn12197, shIn12198);
  };

  proto["__getOrCreateRow"] = function (shIn4337: any) {
    let shBind13465 = this._s.get(shIn4337);
    return (
      shBind13465 ||
        ((shBind13465 = {
          index: shIn4337 + 1,
          cells: [],
          height: 0,
          customHeight: false,
        }),
        this._s.set(shIn4337, shBind13465),
        this._i.rows.push(shBind13465),
        this._i.rows.sort(
          (shIn15505, shIn15506) =>
            (shIn15505.index ?? 0) - (shIn15506.index ?? 0),
        )),
      (shBind13465.cells ||= []),
      this.__queueCollaborativePublish(),
      shBind13465
    );
  };

  proto["__getOrCreateSingleColumn"] = function (shIn5626: any) {
    let shBind15470 = shIn5626 + 1,
      shBind15471 = this.__getColumns(),
      shBind15472 = this._U(shIn5626);
    if (shBind15472) return (this.__queueCollaborativePublish(), shBind15472);
    let shBind15473 = {
      min: shBind15470,
      max: shBind15470,
      width: 0,
      customWidth: false,
    };
    return (
      shBind15471.push(shBind15473),
      this.__queueCollaborativePublish(),
      shBind15473
    );
  };

  proto["_U"] = function (shIn9568: any) {
    let shBind20099 = shIn9568 + 1;
    return this.__getColumns().find(
      (item) =>
        item.min === shBind20099 && (item.max ?? item.min) === shBind20099,
    );
  };

  proto["_W"] = function (shIn7264: any) {
    let shBind17635 = shIn7264 + 1,
      shBind17636;
    for (let shBind20236 of this.__getColumns()) {
      let shBind21336 = shBind20236.min ?? 1,
        shBind21337 = shBind20236.max ?? shBind21336;
      shBind17635 >= shBind21336 &&
        shBind17635 <= shBind21337 &&
        (shBind17636 = shBind20236);
    }
    return shBind17636;
  };

  proto["__getRow"] = function (shIn14230: any) {
    return this._s.get(shIn14230);
  };

  proto["__syncRowSizeRef"] = function (shIn4307: any) {
    let shBind13385 = this._ie();
    if (!shBind13385) return;
    let shBind13386 = this.__getOrCreateRow(shIn4307),
      shBind13387 = {
        height: shBind13386.height,
        customHeight: shBind13386.customHeight,
        hidden: shBind13386.hidden,
      },
      shBind13388 = String(shIn4307);
    uXe(shBind13385.get(shBind13388), shBind13387) ||
      this._e.workbook.runLocalCollabTransaction(() => {
        shBind13385.set(shBind13388, shBind13387);
      });
  };

  proto["__syncColumnSizeRef"] = function (shIn4412: any) {
    let shBind13628 = this._ae();
    if (!shBind13628) return;
    let shBind13629 = this._W(shIn4412),
      shBind13630 = {
        width: shBind13629?.width,
        customWidth: shBind13629?.customWidth,
        hidden: shBind13629?.hidden,
      },
      shBind13631 = String(shIn4412);
    dXe(shBind13628.get(shBind13631), shBind13630) ||
      this._e.workbook.runLocalCollabTransaction(() => {
        shBind13628.set(shBind13631, shBind13630);
      });
  };

  proto["__getOrCreateCell"] = function (shIn2819: any, shIn2820: any) {
    let shBind10553 = this._o.get(shIn2819, shIn2820);
    if (shBind10553) return shBind10553;
    let shBind10554 = this.__getOrCreateRow(shIn2819),
      shBind10555 = this._o.getOrCreate(
        shIn2819,
        shIn2820,
        (shIn11138, shIn11139) => {
          let shBind21630 = columnNumberToLetters(shIn11139 + 1);
          return Cell.create(`${shBind21630}${shIn11138 + 1}`);
        },
      );
    return (
      shBind10554.cells.push(shBind10555),
      shBind10554.cells.sort((shIn7285, shIn7286) => {
        let shBind17668 = asFiniteNumber(shIn7285.address),
          shBind17669 = asFiniteNumber(shIn7286.address),
          shBind17670 = shBind17668?.col ?? 0,
          shBind17671 = shBind17669?.col ?? 0;
        return shBind17670 === shBind17671
          ? shIn7285.address.localeCompare(shIn7286.address)
          : shBind17670 - shBind17671;
      }),
      this._pe(shIn2819, shIn2820),
      shBind10555
    );
  };

  proto["__getCell"] = function (shIn13617: any, shIn13618: any) {
    return this._o.get(shIn13617, shIn13618);
  };

  proto["_G"] = function () {
    let shBind12576 = 1 / 0,
      shBind12577 = -1,
      shBind12578 = 1 / 0,
      shBind12579 = -1;
    for (let [
      shBind18150,
      shBind18151,
      shBind18152,
    ] of this._o.cellsWithCoordinates())
      hXe(shBind18152) &&
        ((shBind12576 = Math.min(shBind12576, shBind18150)),
        (shBind12577 = Math.max(shBind12577, shBind18150)),
        (shBind12578 = Math.min(shBind12578, shBind18151)),
        (shBind12579 = Math.max(shBind12579, shBind18151)));
    return !Number.isFinite(shBind12576) ||
      !Number.isFinite(shBind12578) ||
      shBind12577 < 0
      ? null
      : {
          startRow: shBind12576,
          startCol: shBind12578,
          endRow: shBind12577,
          endCol: shBind12579,
        };
  };

  proto["__setRawValue"] = function (
    shIn8910: any,
    shIn8911: any,
    shIn8912: any,
  ) {
    if (shIn8912 === undefined) {
      this._o.clearRawValue(shIn8910, shIn8911);
      return;
    }
    this._o.setRawValue(shIn8910, shIn8911, shIn8912);
  };

  proto["__getRawValue"] = function (shIn12754: any, shIn12755: any) {
    return this._o.getRawValue(shIn12754, shIn12755);
  };

  proto["__getDisplayFormula"] = function (shIn9853: any, shIn9854: any) {
    let shBind20398 = this.name;
    return shBind20398
      ? this._e.workbook.__getDisplayFormulaForCell(
          shBind20398,
          shIn9853,
          shIn9854,
        )
      : "";
  };

  proto["__getFormulaPresence"] = function (shIn9855: any, shIn9856: any) {
    let shBind20399 = this.name;
    if (shBind20399)
      return this._e.workbook.__getFormulaPresenceForCell(
        shBind20399,
        shIn9855,
        shIn9856,
      );
  };

  proto["__clearRawValue"] = function (shIn12943: any, shIn12944: any) {
    this._o.clearRawValue(shIn12943, shIn12944);
  };

  proto["__setExcelRawValue"] = function (
    shIn12199: any,
    shIn12200: any,
    shIn12201: any,
  ) {
    this._o.setExcelRawValue(shIn12199, shIn12200, shIn12201);
  };

  proto["__getExcelRawValue"] = function (shIn12139: any, shIn12140: any) {
    return this._o.getExcelRawValue(shIn12139, shIn12140);
  };

  proto["__hasExcelRawValue"] = function (shIn12141: any, shIn12142: any) {
    return this._o.hasExcelRawValue(shIn12141, shIn12142);
  };

  proto["_K"] = function (shIn15631: any) {
    return shIn15631;
  };

  proto["_q"] = function (shIn9857: any) {
    let shBind20400 = this._J(shIn9857);
    if (shBind20400) return shBind20400;
    let shBind20401 = new YMap();
    return (shIn9857.set("rowSizes", shBind20401), shBind20401);
  };

  proto["_J"] = function (shIn11608: any) {
    let shBind22002 = shIn11608.get("rowSizes");
    if (shBind22002 instanceof YMap) return shBind22002;
  };

  proto["_Y"] = function (shIn9858: any) {
    let shBind20402 = this._X(shIn9858);
    if (shBind20402) return shBind20402;
    let shBind20403 = new YMap();
    return (shIn9858.set("colSizes", shBind20403), shBind20403);
  };

  proto["_X"] = function (shIn11609: any) {
    let shBind22003 = shIn11609.get("colSizes");
    if (shBind22003 instanceof YMap) return shBind22003;
  };

  proto["_Z"] = function () {
    if (this._T)
      for (let [shBind22861, shBind22862] of this._T.entries())
        this._ce(shBind22861, shBind22862);
    if (this._E)
      for (let [shBind22863, shBind22864] of this._E.entries())
        this._le(shBind22863, shBind22864);
  };
}
