// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-50: PivotDataField VO (Binding346–351).
import { esmInit } from "../../runtime/rolldown-runtime";
import {
  j as spreadsheetJ,
  Vn as spreadsheetVn,
} from "../spreadsheet-protobuf";
import {
  PivotSummarizeBy,
  ensurePivotFieldEnumsInit,
} from "./pivot-field-enums";
import {
  ensurePivotShowAsInit,
  PivotShowAs,
  parseShowAsCalculation,
  showAsCalcToProtoToken,
} from "./pivot-show-as";
import { ensurePivotItemInit, getPivotItemProto } from "./pivot-item";
import { ensurePivotHierarchyClusterInit } from "./pivot-hierarchies";
import {
  protoToSummarizeBy,
  isPercentShowAs,
  needsShowAsBaseField,
  getDataFieldSubtotal,
  setDataFieldSubtotal,
  normalizeSummarizeAlias,
  wireSummarizeByToProto,
  wireDataFieldTokenMaps,
} from "./pivot-data-field-helpers";
import { refreshPivotTableLayout } from "./refresh-pivot-layout";

export let pivotDataFieldProtoByInstance: WeakMap<object, any>;
export let summarizeByToProto: Record<string, any>;
export let protoToSummarizeByToken: Record<string | number, string>;
export let summarizeByAliasToProto: Record<string, any>;
export let PivotDataField: any;
export const ensurePivotDataFieldInit = esmInit(() => {
  spreadsheetVn();
  ensurePivotFieldEnumsInit();
  ensurePivotShowAsInit();
  ensurePivotItemInit();
  ensurePivotHierarchyClusterInit();
  pivotDataFieldProtoByInstance = new WeakMap();
  summarizeByToProto = {
    [PivotSummarizeBy.automatic]: spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_SUM,
    [PivotSummarizeBy.sum]: spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_SUM,
    [PivotSummarizeBy.count]: spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_COUNT,
    [PivotSummarizeBy.average]: spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_AVERAGE,
    [PivotSummarizeBy.max]: spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_MAXIMUM,
    [PivotSummarizeBy.min]: spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_MINIMUM,
    [PivotSummarizeBy.product]: spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_PRODUCT,
    [PivotSummarizeBy.countNumbers]:
      spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_COUNT_NUMBERS,
    [PivotSummarizeBy.standardDeviation]:
      spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_STD_DEV,
    [PivotSummarizeBy.standardDeviationP]:
      spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_STD_DEVP,
    [PivotSummarizeBy.variance]:
      spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_VARIANCE,
    [PivotSummarizeBy.varianceP]:
      spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_VARIANCEP,
  };
  protoToSummarizeByToken = {
    [spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_SUM]: "sum",
    [spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_COUNT]: "count",
    [spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_AVERAGE]: "average",
    [spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_MAXIMUM]: "max",
    [spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_MINIMUM]: "min",
    [spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_PRODUCT]: "product",
    [spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_COUNT_NUMBERS]: "countNums",
    [spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_STD_DEV]: "stdDev",
    [spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_STD_DEVP]: "stdDevp",
    [spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_VARIANCE]: "var",
    [spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_VARIANCEP]: "varp",
  };
  summarizeByAliasToProto = [
    ["sum", spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_SUM],
    ["average", spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_AVERAGE],
    ["avg", spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_AVERAGE],
    ["count", spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_COUNT],
    ["countnums", spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_COUNT_NUMBERS],
    ["countnumbers", spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_COUNT_NUMBERS],
    ["max", spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_MAXIMUM],
    ["maximum", spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_MAXIMUM],
    ["min", spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_MINIMUM],
    ["minimum", spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_MINIMUM],
    ["product", spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_PRODUCT],
    ["stddev", spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_STD_DEV],
    ["stddevp", spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_STD_DEVP],
    ["var", spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_VARIANCE],
    ["variance", spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_VARIANCE],
    ["varp", spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_VARIANCEP],
    ["variancep", spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_VARIANCEP],
  ].reduce(
    (accumulator, [pivotIn15785, pivotIn15786]) => (
      (accumulator[normalizeSummarizeAlias(pivotIn15785)] = pivotIn15786),
      accumulator
    ),
    {},
  );
  wireSummarizeByToProto(summarizeByToProto);
  wireDataFieldTokenMaps({ protoToSummarizeByToken, summarizeByAliasToProto });
  PivotDataField = class {
    #e;
    #t;
    #n;
    constructor(pivotIn11395, pivotIn11396) {
      this.#e = pivotIn11395;
      this.#t = pivotIn11396.pivotTable;
      pivotDataFieldProtoByInstance.set(this, pivotIn11395);
    }
    get name() {
      let pivotBind19415 = this.#e.name;
      if (pivotBind19415 && pivotBind19415.length > 0) return pivotBind19415;
      let pivotBind19416 = this.#r();
      return pivotBind19416 ? `Sum of ${pivotBind19416.name}` : "Values";
    }
    set name(pivotIn14681) {
      this.#e.name = pivotIn14681;
    }
    get numberFormatId() {
      return this.#e.numberFormatId ?? undefined;
    }
    set numberFormatId(pivotIn12966) {
      this.#e.numberFormatId = pivotIn12966;
    }
    get summarizeBy() {
      return protoToSummarizeBy(getDataFieldSubtotal(this.#e));
    }
    set summarizeBy(pivotIn10972) {
      let pivotBind21496 =
        summarizeByToProto[pivotIn10972] ??
        summarizeByToProto[PivotSummarizeBy.sum];
      setDataFieldSubtotal(this.#e, pivotBind21496);
      refreshPivotTableLayout(this.#t);
    }
    get showAs() {
      if (this.#n) return this.#n.clone();
      let pivotBind13274 = this.#e,
        pivotBind13275 = parseShowAsCalculation(pivotBind13274.showAs),
        pivotBind13276 =
          pivotBind13274.baseField == null
            ? undefined
            : this.#i(pivotBind13274.baseField),
        pivotBind13277 = new PivotShowAs({
          calculation: pivotBind13275,
          baseField: pivotBind13276,
          baseItem:
            pivotBind13276 && pivotBind13274.baseItem != null
              ? this.#a(pivotBind13276, pivotBind13274.baseItem)
              : undefined,
        });
      return ((this.#n = pivotBind13277.clone()), pivotBind13277);
    }
    set showAs(pivotIn3505) {
      this.#n = pivotIn3505;
      let pivotBind11965 = this.#e;
      pivotBind11965.showAs = showAsCalcToProtoToken(pivotIn3505.calculation);
      let pivotBind11966 = this.#r()?.numberFormatId;
      needsShowAsBaseField(pivotIn3505.calculation) &&
        (pivotBind11965.numberFormatId == null ||
          pivotBind11965.numberFormatId === pivotBind11966) &&
        (pivotBind11965.numberFormatId = 10);
      let pivotBind11967 = pivotIn3505.baseField;
      pivotBind11967
        ? (pivotBind11965.baseField = this.#o(pivotBind11967))
        : (pivotBind11965.baseField = undefined);
      let pivotBind11968 = pivotIn3505.baseItem;
      pivotBind11968
        ? (pivotBind11965.baseItem =
            getPivotItemProto(pivotBind11968).index ?? undefined)
        : (pivotBind11965.baseItem = undefined);
      refreshPivotTableLayout(this.#t);
    }
    #r() {
      let pivotBind19672 = this.#e.field;
      if (pivotBind19672 != null)
        return (this.#t._getHierarchyByFieldIndex(pivotBind19672)?.fields
          .items ?? [])[0];
    }
    #i(pivotIn11508) {
      return (this.#t._getHierarchyByFieldIndex(pivotIn11508)?.fields.items ??
        [])[0];
    }
    #a(pivotIn11781, pivotIn11782) {
      return pivotIn11781.items.items.find(
        (item) => (getPivotItemProto(item).index ?? -1) === pivotIn11782,
      );
    }
    #o(pivotIn12161) {
      return pivotIn12161.__ensureIndex(this.#t.__getPivotFieldProtos());
    }
  };
});
