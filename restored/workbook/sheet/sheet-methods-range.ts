// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-65: Sheet prototype install (sheet-methods-range.ts).

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

export function installRange(proto: any): void {
  proto["reset"] = function (shIn3007: any) {
    let shBind11020 = shIn3007?.clear ?? "used",
      shBind11021 = shIn3007?.applyTo ?? "all",
      shBind11022 = shIn3007?.deleteTables ?? true,
      shBind11023 = shIn3007?.deleteCharts ?? true,
      shBind11024 = shIn3007?.deleteDrawings ?? true,
      shBind11025 = shIn3007?.deleteSparklines ?? true;
    if (shBind11020 === "used")
      this.getUsedRange(false).clear({
        applyTo: shBind11021,
      });
    else if (shBind11020 !== "none")
      throw Error('worksheet.reset clear must be "used" or "none".');
    shBind11022 && this.tables.deleteAll();
    shBind11023 && this.charts.deleteAll();
    shBind11024 && this.deleteAllDrawings();
    shBind11025 && this.sparklineGroups.clear();
  };

  proto["mergeCells"] = function (shIn1072: any) {
    let { sheetName, ref } = parseSheetRef(shIn1072);
    if (sheetName && sheetName !== this.name)
      throw Error(
        `Merge range must target "${this.name}", received "${sheetName}".`,
      );
    let shBind6394 = parseA1Range(ref);
    if (!shBind6394) throw Error(`Invalid range address: ${shIn1072}`);
    let { startRow, startCol, endRow, endCol } = shBind6394.bounds;
    if (startRow === endRow && startCol === endCol) return;
    for (let shBind15401 of this._i.tables) {
      let shBind16007 = parseA1Range(shBind15401.ref);
      if (shBind16007 && boundsIntersect(shBind6394.bounds, shBind16007.bounds))
        throw Error(
          `Cannot merge range ${shBind6394.ref} because it intersects table ${shBind15401.name}. Excel tables do not support merged cells. Delete or resize the table before merging.`,
        );
    }
    let shBind6395 = formatA1(startRow, startCol),
      shBind6396 = formatA1(endRow, endCol);
    if (
      this._i.mergedCells.some(
        (item) =>
          item.startAddress === shBind6395 &&
          (item.endAddress ?? item.startAddress) === shBind6396,
      )
    )
      return;
    let shBind6397 = {
      sheetName: this.name,
      sheetId: this.id ?? "",
      startAddress: shBind6395,
      endAddress: shBind6396,
    };
    this._i.mergedCells = [...this._i.mergedCells, shBind6397];
    this._z();
    this.__queueCollaborativePublish();
  };

  proto["unmergeCells"] = function (shIn2442: any) {
    let { sheetName, ref } = parseSheetRef(shIn2442);
    if (sheetName && sheetName !== this.name)
      throw Error(
        `Unmerge range must target "${this.name}", received "${sheetName}".`,
      );
    let shBind9704 = parseA1Range(ref);
    if (!shBind9704) throw Error(`Invalid range address: ${shIn2442}`);
    let shBind9705 = shBind9704.bounds,
      shBind9706 = this._i.mergedCells.filter((item) => {
        let shBind18879 = item.startAddress;
        if (!shBind18879) return true;
        let shBind18880 = parseA1Range(
          `${shBind18879}:${item.endAddress ?? shBind18879}`,
        );
        return shBind18880
          ? !boundsIntersect(shBind18880.bounds, shBind9705)
          : true;
      });
    shBind9706.length !== this._i.mergedCells.length &&
      ((this._i.mergedCells = shBind9706),
      this._z(),
      this.__queueCollaborativePublish());
  };

  Object.defineProperty(proto, "pivotTables", {
    configurable: true,
    enumerable: false,
    get() {
      return this._u;
    },
  });

  Object.defineProperty(proto, "slicers", {
    configurable: true,
    enumerable: false,
    get() {
      return this._d;
    },
  });

  Object.defineProperty(proto, "sparklineGroups", {
    configurable: true,
    enumerable: false,
    get() {
      return this.__;
    },
  });

  Object.defineProperty(proto, "charts", {
    configurable: true,
    enumerable: false,
    get() {
      return this._v.charts;
    },
  });

  Object.defineProperty(proto, "shapes", {
    configurable: true,
    enumerable: false,
    get() {
      return this._v.shapes;
    },
  });

  Object.defineProperty(proto, "images", {
    configurable: true,
    enumerable: false,
    get() {
      return this._v.images;
    },
  });

  proto["deleteAllDrawings"] = function () {
    this._v.deleteAllKnown();
  };

  proto["autoLayoutDrawings"] = function (shIn13190: any, shIn13191: any = {}) {
    applyWorksheetDrawingLayout(this, shIn13190, shIn13191);
  };

  Object.defineProperty(proto, "conditionalFormattings", {
    configurable: true,
    enumerable: false,
    get() {
      return this._y;
    },
  });

  Object.defineProperty(proto, "dataValidations", {
    configurable: true,
    enumerable: false,
    get() {
      return this._b;
    },
  });

  Object.defineProperty(proto, "freezePanes", {
    configurable: true,
    enumerable: false,
    get() {
      return this._x;
    },
  });

  Object.defineProperty(proto, "sparklines", {
    configurable: true,
    enumerable: false,
    get() {
      return this.__;
    },
  });

  Object.defineProperty(proto, "tables", {
    configurable: true,
    enumerable: false,
    get() {
      return this._f;
    },
  });

  Object.defineProperty(proto, "dataTables", {
    configurable: true,
    enumerable: false,
    get() {
      return this._p;
    },
  });

  Object.defineProperty(proto, "cells", {
    configurable: true,
    enumerable: false,
    get() {
      return this._m;
    },
  });

  proto["__getWorksheetByName"] = function (shIn12138: any) {
    return this._e.getWorksheetByName?.(shIn12138);
  };

  proto["__refreshSparklineRenderContext"] = function () {
    this.__.__refreshRenderContext();
  };

  proto["__queueCollaborativePublish"] = function () {
    this.sheetId && this._e.workbook.queueWorksheetCollabPublish(this.sheetId);
  };

  proto["flushCollaborativeState"] = function () {
    !this._S ||
      !this._C ||
      (this._S.activate({
        root: this._C,
        runLocalTransaction: (shIn13192) =>
          this._e.workbook.runLocalCollabTransaction(shIn13192),
      }),
      this._S.flushFromOwner());
  };

  proto["__invalidateViewportLayout"] = function () {
    this._M = true;
    this._A = undefined;
    this._j = undefined;
    this._N.reset();
    this._I = undefined;
    this._L = undefined;
  };

  proto["_z"] = function () {
    this._P = undefined;
    this._F = undefined;
  };
}
