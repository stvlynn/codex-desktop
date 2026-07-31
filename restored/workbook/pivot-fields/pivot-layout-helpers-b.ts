// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-50: pivot layout helpers (Yne–mergePivotAggregates).
import { getDataFieldSubtotal } from "./pivot-data-field-helpers";
import {
  formatPivotNumber,
  isPivotBlankValue,
  pivotRowKey,
  pivotCellComparable,
  pivotValuesEqual,
  emptyPivotValueSlot,
  comparePivotKeys,
} from "./pivot-layout-helpers-a";
import { computePivotCellValue } from "./pivot-layout-helpers-ere";
import {
  lookupPivotBaseValue,
  pivotBaseFieldIndex,
} from "./pivot-layout-helpers-c";

export function readPivotSourceCell(pivotIn2248: any, pivotIn2249: any) {
  let pivotBind9307 = pivotIn2248.condition;
  if (!pivotBind9307) return true;
  let pivotBind9308 = isPivotBlankValue(pivotIn2249),
    pivotBind9309 =
      typeof pivotIn2248.substring == "string" ? pivotIn2248.substring : "",
    pivotBind9310 =
      typeof pivotIn2248.comparator == "string" ? pivotIn2248.comparator : "";
  switch (pivotBind9307) {
    case "BeginsWith":
    case "beginsWith":
      return pivotBind9308.startsWith(pivotBind9309);
    case "EndsWith":
    case "endsWith":
      return pivotBind9308.endsWith(pivotBind9309);
    case "Contains":
    case "contains":
      return pivotBind9308.includes(pivotBind9309);
    case "NotContains":
    case "notContains":
      return !pivotBind9308.includes(pivotBind9309);
    case "Equals":
    case "equals":
      return pivotBind9308 === pivotBind9310;
    case "NotEquals":
    case "notEquals":
      return pivotBind9308 !== pivotBind9310;
    case "GreaterThan":
    case "greaterThan":
      return pivotBind9308 > pivotBind9310;
    case "LessThan":
    case "lessThan":
      return pivotBind9308 < pivotBind9310;
    default:
      return true;
  }
}
export function coercePivotSourceValue(pivotIn4573: any, pivotIn4574: any) {
  let pivotBind13844 = pivotIn4573.comparator;
  if (!pivotBind13844?.date) return true;
  let pivotBind13845 = pivotPercentRatio(pivotBind13844.date),
    pivotBind13846 = pivotPercentRatio(pivotIn4574);
  if (!pivotBind13845 || !pivotBind13846) return true;
  switch (pivotIn4573.condition) {
    case "before":
    case "Before":
      return pivotBind13846.getTime() < pivotBind13845.getTime();
    case "after":
    case "After":
      return pivotBind13846.getTime() > pivotBind13845.getTime();
    case "equals":
    case "Equals":
      return pivotSubtotalOf(pivotBind13846, pivotBind13845);
    default:
      return true;
  }
}
export function pivotPercentRatio(pivotIn8998: any) {
  if (pivotIn8998 instanceof Date) return pivotIn8998;
  if (typeof pivotIn8998 == "string") {
    let pivotBind22474 = new Date(pivotIn8998);
    if (!Number.isNaN(pivotBind22474.getTime())) return pivotBind22474;
  }
  return null;
}
export function pivotSubtotalOf(pivotIn9162: any, pivotIn9163: any) {
  return (
    pivotIn9162.getUTCFullYear() === pivotIn9163.getUTCFullYear() &&
    pivotIn9162.getUTCMonth() === pivotIn9163.getUTCMonth() &&
    pivotIn9162.getUTCDate() === pivotIn9163.getUTCDate()
  );
}
export function aggregatePivotCells(
  pivotIn2871: any,
  pivotIn2872: any,
  pivotIn2873: any,
  pivotIn2874: any,
  pivotIn2875: any,
) {
  let pivotBind10687 = [];
  for (
    let pivotBind11301 = 0;
    pivotBind11301 < pivotIn2872.length;
    pivotBind11301++
  ) {
    let pivotBind11707 = pivotIn2872[pivotBind11301];
    if (!pivotBind11707 || pivotBind11707.kind !== "valueFilter") continue;
    let pivotBind11708 = pivotIn2871[pivotBind11301]?.field;
    if (typeof pivotBind11708 != "number") continue;
    let pivotBind11709 = pivotIn2873.findIndex(
        (item) => item.pivotIndex === pivotBind11708,
      ),
      pivotBind11710 = pivotIn2874.findIndex(
        (item) => item.pivotIndex === pivotBind11708,
      );
    if (pivotBind11709 === -1 && pivotBind11710 === -1) continue;
    let pivotBind11711 = mergePivotAggregates(
      pivotBind11707.payload,
      pivotIn2875,
    );
    if (pivotBind11711 < 0) continue;
    let pivotBind11712 = pivotIn2875[pivotBind11711];
    pivotBind11712 &&
      pivotBind10687.push({
        axis: pivotBind11709 === -1 ? "column" : "row",
        depth: pivotBind11709 === -1 ? pivotBind11710 : pivotBind11709,
        payload: pivotBind11707.payload,
        dataFieldIndex: pivotBind11711,
        subtotal: getDataFieldSubtotal(pivotBind11712.proto),
      });
  }
  return pivotBind10687;
}
export function mergePivotAggregates(pivotIn6672: any, pivotIn6673: any) {
  if (pivotIn6673.length === 0) return -1;
  let pivotBind16961 = pivotIn6672.value?.trim();
  if (!pivotBind16961) return 0;
  let pivotBind16962 = pivotDifference(pivotBind16961);
  for (
    let pivotBind20844 = 0;
    pivotBind20844 < pivotIn6673.length;
    pivotBind20844++
  ) {
    let pivotBind21988 = pivotIn6673[pivotBind20844];
    if (
      pivotBind21988 &&
      [pivotBind21988.name, pivotBind21988.proto.name].some(
        (item) => pivotDifference(item) === pivotBind16962,
      )
    )
      return pivotBind20844;
  }
  return 0;
}
export function pivotDifference(pivotIn6966: any) {
  return pivotIn6966
    ? pivotIn6966
        .trim()
        .replace(/\s+/g, " ")
        .toLowerCase()
        .replace(
          /^(sum|count|average|max|min|product|stddev|stddevp|variance|variancep)\s+of\s+/,
          "",
        )
    : "";
}
export function accumulatePivotValue(
  pivotIn3345: any,
  pivotIn3346: any,
  pivotIn3347: any,
  pivotIn3348: any,
) {
  if (pivotIn3345.length === 0) return;
  let pivotBind11667 = pivotIn3346.filter((item) => item.axis === pivotIn3348);
  if (pivotBind11667.length === 0) return;
  let pivotBind11668 = [...pivotIn3345];
  for (let pivotBind14576 of pivotBind11667) {
    if (!pivotIn3347[pivotBind14576.dataFieldIndex]) continue;
    let pivotBind14939 = computePivotCellValue(
        pivotBind11668
          .filter((item) => item.values.length === pivotBind14576.depth + 1)
          .map((item) => ({
            key: item.key,
            value: formatPivotNumber(
              pivotCellComparable(item.totals, pivotBind14576.dataFieldIndex),
              pivotBind14576.subtotal,
            ),
          })),
        pivotBind14576.payload,
      ),
      pivotBind14940 = pivotBaseFieldIndex(pivotBind14939);
    pivotBind11668 = pivotBind11668.filter((item) =>
      lookupPivotBaseValue(
        item,
        pivotBind14576.depth,
        pivotBind14939,
        pivotBind14940,
      ),
    );
  }
  pivotIn3345.length = 0;
  pivotIn3345.push(...pivotBind11668);
}

export function pivotFilterAllows(pivotIn6319: any, pivotIn6320: any) {
  switch (pivotIn6319.kind) {
    case "manualFilter":
      return pivotSourceRowMatches(pivotIn6319.payload, pivotIn6320);
    case "labelFilter":
      return readPivotSourceCell(pivotIn6319.payload, pivotIn6320);
    case "dateFilter":
      return coercePivotSourceValue(pivotIn6319.payload, pivotIn6320);
    case "valueFilter":
      return true;
    default:
      return true;
  }
}
export function sortPivotTuples(
  pivotIn6520: any,
  pivotIn6521: any,
  pivotIn6522: any,
) {
  if (pivotIn6521.length === 0) return true;
  for (
    let pivotBind18762 = 0;
    pivotBind18762 < pivotIn6521.length;
    pivotBind18762++
  ) {
    let pivotBind19833 = pivotIn6520[pivotBind18762],
      pivotBind19834 = pivotIn6521[pivotBind18762];
    if (!pivotBind19833 || pivotBind19834 === undefined) continue;
    let pivotBind19835 = pivotIn6522.get(pivotBind19834.field ?? -1);
    if (
      !pivotFilterAllows(
        pivotBind19833,
        pivotBind19835 === undefined ? null : pivotBind19835,
      )
    )
      return false;
  }
  return true;
}

export function pivotSourceRowMatches(pivotIn7862: any, pivotIn7863: any) {
  let pivotBind18345 = pivotIn7862.selectedItems?.map(isPivotBlankValue),
    pivotBind18346 = pivotIn7862.excludedItems?.map(isPivotBlankValue),
    pivotBind18347 = isPivotBlankValue(pivotIn7863);
  return pivotBind18345 && pivotBind18345.length > 0
    ? pivotBind18345.includes(pivotBind18347)
    : pivotBind18346 && pivotBind18346.length > 0
      ? !pivotBind18346.includes(pivotBind18347)
      : true;
}
