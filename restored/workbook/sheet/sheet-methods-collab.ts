// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-65: Sheet prototype install (sheet-methods-collab.ts).

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
import { d, p } from "../spreadsheet-protobuf";
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

export function installCollab(proto: any): void {
  proto["hydrateCollaborativeRefsFromProto"] = function () {
    this._g?.hydrateFromCells();
    for (let shBind19609 of this._i.rows) {
      if (!this._oe(shBind19609)) continue;
      let shBind20468 = Math.max(0, (shBind19609.index ?? 1) - 1);
      this.__syncRowSizeRef(shBind20468);
    }
    for (let shBind16934 of this._i.columns) {
      if (!this._se(shBind16934)) continue;
      let shBind17749 = Math.max(0, (shBind16934.min ?? 1) - 1),
        shBind17750 = Math.max(
          shBind17749,
          (shBind16934.max ?? shBind16934.min ?? 1) - 1,
        );
      for (
        let shBind22749 = shBind17749;
        shBind22749 <= shBind17750;
        shBind22749 += 1
      )
        this.__syncColumnSizeRef(shBind22749);
    }
    this._v.hydrateChartsFromFallbackState();
  };

  proto["_Q"] = function () {
    if (this._w)
      for (let [shBind22865, shBind22866] of this._w.entries())
        this._ue(shBind22865, shBind22866);
  };

  proto["_$"] = function (shIn2193: any, shIn2194: any) {
    let shBind9202 = this._e.workbook.getCollabOrigins();
    if (
      shIn2194.origin === shBind9202.record ||
      shIn2194.origin === shBind9202.local
    )
      return;
    let shBind9203 = false;
    for (let shBind11286 of shIn2193.keysChanged) {
      if (shBind11286 === "rowSizes") {
        let shBind18606 = this._J(this._C);
        if ((shBind18606 !== this._T && this._ne(shBind18606), shBind18606))
          for (let [shBind22809, shBind22810] of shBind18606.entries())
            shBind9203 = this._ce(shBind22809, shBind22810) || shBind9203;
        continue;
      }
      if (shBind11286 === "colSizes") {
        let shBind18607 = this._X(this._C);
        if ((shBind18607 !== this._E && this._re(shBind18607), shBind18607))
          for (let [shBind22811, shBind22812] of shBind18607.entries())
            shBind9203 = this._le(shBind22811, shBind22812) || shBind9203;
        continue;
      }
      let shBind11638 = this._w?.get(shBind11286);
      this._ue(shBind11286, shBind11638);
    }
    shBind9203 && this.__invalidateViewportLayout();
  };

  proto["_ee"] = function (shIn6141: any, shIn6142: any) {
    let shBind16230 = this._e.workbook.getCollabOrigins();
    if (
      shIn6142.origin === shBind16230.record ||
      shIn6142.origin === shBind16230.local
    )
      return;
    let shBind16231 = false;
    for (let shBind22601 of shIn6141.keysChanged)
      shBind16231 =
        this._ce(shBind22601, this._T?.get(shBind22601)) || shBind16231;
    shBind16231 && this.__invalidateViewportLayout();
  };

  proto["_te"] = function (shIn6143: any, shIn6144: any) {
    let shBind16232 = this._e.workbook.getCollabOrigins();
    if (
      shIn6144.origin === shBind16232.record ||
      shIn6144.origin === shBind16232.local
    )
      return;
    let shBind16233 = false;
    for (let shBind22602 of shIn6143.keysChanged)
      shBind16233 =
        this._le(shBind22602, this._E?.get(shBind22602)) || shBind16233;
    shBind16233 && this.__invalidateViewportLayout();
  };

  proto["_ne"] = function (shIn8369: any) {
    shIn8369 !== this._T &&
      (this._T && this._O && this._T.unobserve(this._O),
      (this._T = shIn8369),
      this._T && this._O && this._T.observe(this._O));
  };

  proto["_re"] = function (shIn8370: any) {
    shIn8370 !== this._E &&
      (this._E && this._k && this._E.unobserve(this._k),
      (this._E = shIn8370),
      this._E && this._k && this._E.observe(this._k));
  };

  proto["_ie"] = function () {
    if (this._T) return this._T;
    if (!this._C) return;
    let shBind19992 = this._q(this._C);
    return (this._ne(shBind19992), shBind19992);
  };

  proto["_ae"] = function () {
    if (this._E) return this._E;
    if (!this._C) return;
    let shBind19993 = this._Y(this._C);
    return (this._re(shBind19993), shBind19993);
  };

  proto["_oe"] = function (shIn6828: any) {
    return (
      shIn6828.customHeight === true ||
      shIn6828.hidden === true ||
      (typeof shIn6828.height == "number" &&
        Number.isFinite(shIn6828.height) &&
        shIn6828.height !== this._t.defaultRowHeight)
    );
  };

  proto["_se"] = function (shIn6925: any) {
    return (
      shIn6925.customWidth === true ||
      shIn6925.hidden === true ||
      (typeof shIn6925.width == "number" &&
        Number.isFinite(shIn6925.width) &&
        shIn6925.width !== this._t.defaultColWidth)
    );
  };

  proto["_ce"] = function (shIn2792: any, shIn2793: any) {
    let shBind10483 = lXe(shIn2792);
    if (shBind10483 == null || !shIn2793) return false;
    let shBind10484 = this.__getOrCreateRow(shBind10483),
      shBind10485 = false;
    return (
      typeof shIn2793.height == "number" &&
        Number.isFinite(shIn2793.height) &&
        shBind10484.height !== shIn2793.height &&
        ((shBind10484.height = shIn2793.height), (shBind10485 = true)),
      typeof shIn2793.customHeight == "boolean" &&
        shBind10484.customHeight !== shIn2793.customHeight &&
        ((shBind10484.customHeight = shIn2793.customHeight),
        (shBind10485 = true)),
      typeof shIn2793.hidden == "boolean" &&
        shBind10484.hidden !== shIn2793.hidden &&
        ((shBind10484.hidden = shIn2793.hidden), (shBind10485 = true)),
      shBind10485
    );
  };

  proto["_le"] = function (shIn1770: any, shIn1771: any) {
    let shBind8262 = lXe(shIn1770);
    if (shBind8262 == null || !shIn1771) return false;
    let shBind8263 = this._U(shBind8262),
      shBind8264 = shBind8263 ?? this._W(shBind8262);
    if (
      !shBind8263 &&
      shBind8264 &&
      dXe(
        {
          width: shBind8264.width,
          customWidth: shBind8264.customWidth,
          hidden: shBind8264.hidden,
        },
        shIn1771,
      )
    )
      return false;
    let shBind8265 = shBind8263 ?? this.__getOrCreateSingleColumn(shBind8262),
      shBind8266 = false;
    return (
      typeof shIn1771.width == "number" &&
        Number.isFinite(shIn1771.width) &&
        shBind8265.width !== shIn1771.width &&
        ((shBind8265.width = shIn1771.width), (shBind8266 = true)),
      typeof shIn1771.customWidth == "boolean" &&
        shBind8265.customWidth !== shIn1771.customWidth &&
        ((shBind8265.customWidth = shIn1771.customWidth), (shBind8266 = true)),
      typeof shIn1771.hidden == "boolean" &&
        shBind8265.hidden !== shIn1771.hidden &&
        ((shBind8265.hidden = shIn1771.hidden), (shBind8266 = true)),
      shBind8266
    );
  };

  proto["_ue"] = function (shIn1277: any, shIn1278: any) {
    let shBind6921 = asFiniteNumber(shIn1277);
    if (!shBind6921) return;
    let shBind6922 = this.__getOrCreateCell(shBind6921.row, shBind6921.col),
      shBind6923 = !!shBind6922.formula?.trim();
    if (shIn1278?.f) {
      shBind6922.formula = shIn1278.f;
      shBind6922.value = undefined;
      shBind6922.dataType = d.CELL_DATA_TYPE_UNSPECIFIED;
      this.__setRawValue(shBind6921.row, shBind6921.col, undefined);
      this.__notifyCellFormulaChanged(shIn1277, shIn1278.f);
      return;
    }
    if (shIn1278 && shIn1278.v !== undefined) {
      shBind6922.formula = undefined;
      shBind6922.value = shIn1278.v;
      shBind6922.dataType = shIn1278.dt ?? d.CELL_DATA_TYPE_UNSPECIFIED;
      let shBind15329 = gXe(shBind6922);
      this.__setRawValue(shBind6921.row, shBind6921.col, shBind15329);
      this._fe(shBind15329, shBind6922, shBind6921.row, shBind6921.col);
      this.__notifyCellValueChanged(shIn1277);
      return;
    }
    shBind6922.formula = undefined;
    shBind6922.value = undefined;
    shBind6922.dataType = d.CELL_DATA_TYPE_UNSPECIFIED;
    this.__setRawValue(shBind6921.row, shBind6921.col, null);
    this._fe(null, shBind6922, shBind6921.row, shBind6921.col);
    shBind6923
      ? this.__notifyCellFormulaChanged(shIn1277, "")
      : this.__notifyCellValueChanged(shIn1277);
  };

  proto["_de"] = function (shIn5858: any) {
    let shBind15821 = shIn5858.formula?.trim();
    return shBind15821
      ? {
          f: shBind15821,
        }
      : shIn5858.value === undefined || shIn5858.value === null
        ? null
        : {
            v: String(shIn5858.value),
            dt: shIn5858.dataType ?? d.CELL_DATA_TYPE_UNSPECIFIED,
          };
  };

  proto["_fe"] = function (
    shIn2849: any,
    shIn2850: any,
    shIn2851: any,
    shIn2852: any,
  ) {
    let shBind10637 = this._e.workbook,
      shBind10638 =
        this.__getLogicalStyleIndex(shIn2851, shIn2852) ??
        shIn2850.styleIndex ??
        0;
    if (typeof shIn2849 == "boolean") {
      let shBind17030 = shBind10637.__resolveCheckboxStyleIndex(shBind10638);
      shBind17030 !== shBind10638 &&
        ((shIn2850.styleIndex = shBind17030),
        this.__setLogicalStyleIndex(shIn2851, shIn2852, shBind17030),
        this._g?.syncCellStyleRefFromStyleIndex(
          shIn2851,
          shIn2852,
          shBind17030,
        ));
      return;
    }
    let shBind10639 = shBind10637.__removeCheckboxStyleIndex(shBind10638);
    shBind10639 !== shBind10638 &&
      ((shIn2850.styleIndex = shBind10639),
      this.__setLogicalStyleIndex(shIn2851, shIn2852, shBind10639),
      this._g?.syncCellStyleRefFromStyleIndex(shIn2851, shIn2852, shBind10639));
  };

  proto["_pe"] = function (shIn5218: any, shIn5219: any) {
    let shBind14766 = this._c.get(shIn5219);
    shBind14766
      ? ((shBind14766.min = Math.min(shBind14766.min, shIn5218)),
        (shBind14766.max = Math.max(shBind14766.max, shIn5218)))
      : this._c.set(shIn5219, {
          min: shIn5218,
          max: shIn5218,
        });
    let shBind14767 = this._l.get(shIn5218);
    shBind14767
      ? ((shBind14767.min = Math.min(shBind14767.min, shIn5219)),
        (shBind14767.max = Math.max(shBind14767.max, shIn5219)))
      : this._l.set(shIn5218, {
          min: shIn5219,
          max: shIn5219,
        });
  };

  proto["_me"] = function (shIn13690: any, shIn13691: any) {
    return `${columnNumberToLetters(shIn13691 + 1)}${shIn13690 + 1}`;
  };

  proto["__getColumnExtent"] = function (shIn10469: any) {
    let shBind20934 = this._c.get(shIn10469);
    return shBind20934
      ? {
          minRow: shBind20934.min,
          maxRow: shBind20934.max,
        }
      : null;
  };

  proto["__getRowExtent"] = function (shIn10574: any) {
    let shBind21039 = this._l.get(shIn10574);
    return shBind21039
      ? {
          minCol: shBind21039.min,
          maxCol: shBind21039.max,
        }
      : null;
  };

  proto["__createCellIterator"] = function () {
    function* workbookHelper1223(shIn10337) {
      for (let [
        shBind22117,
        shBind22118,
        shBind22119,
      ] of shIn10337._o.cellsWithCoordinates())
        yield new sheet.xXe(shIn10337, shBind22119, shBind22117, shBind22118);
    }
    return workbookHelper1223(this);
  };

  proto["__removePivotTable"] = function (shIn11022: any) {
    this._i.pivotTables = this._i.pivotTables.filter(
      (item) => item !== shIn11022,
    );
  };

  proto["__removeSlicer"] = function (shIn11539: any) {
    this._i.slicers = this._i.slicers.filter((item) => item !== shIn11539);
  };

  proto["__getOrCreateChartsState"] = function () {
    if (!this._C || !this._e.workbook.isCollaborativeStateReady()) return;
    let shBind15779 = this._C.get("charts");
    if (shBind15779 instanceof YMap) return ((this._D = shBind15779), this._D);
    let shBind15780 = new YMap();
    return (
      this._C.set("charts", shBind15780),
      (this._D = shBind15780),
      shBind15780
    );
  };

  proto["__getChartsState"] = function () {
    if (!this._C) return;
    let shBind19770 = this._C.get("charts");
    if (shBind19770 instanceof YMap) return ((this._D = shBind19770), this._D);
  };
}
