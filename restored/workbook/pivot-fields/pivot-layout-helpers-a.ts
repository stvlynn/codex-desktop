// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-50: pivot layout helpers (pivotBlankLabel–sortPivotTuples).
import { j as spreadsheetJ } from "../spreadsheet-protobuf";

export function pivotBlankLabel(
  pivotIn5706: any,
  pivotIn5707: any,
  pivotIn5708: any,
  pivotIn5709: any,
) {
  let pivotBind15625 = pivotIn5706[pivotIn5707];
  if (pivotBind15625 !== undefined) {
    if (pivotIn5708 === 1) {
      pivotBind15625[0] = isPivotBlankValue(
        pivotIn5709.length > 0
          ? (pivotIn5709[pivotIn5709.length - 1] ?? "")
          : "",
      );
      return;
    }
    for (
      let pivotBind20382 = 0;
      pivotBind20382 < pivotIn5708;
      pivotBind20382++
    ) {
      let pivotBind21260 = pivotIn5709[pivotBind20382];
      if (pivotBind21260 === undefined) {
        pivotBind15625[pivotBind20382] = "";
        continue;
      }
      pivotBind15625[pivotBind20382] = isPivotBlankValue(pivotBind21260);
    }
  }
}
export function emptyPivotValueSlot() {
  return {
    sum: 0,
    sumSquares: 0,
    count: 0,
    countNumbers: 0,
    product: null,
    min: null,
    max: null,
  };
}
export function pivotCellComparable(pivotIn11007: any, pivotIn11008: any) {
  let pivotBind21537 = pivotIn11007[pivotIn11008];
  if (pivotBind21537 !== undefined) return pivotBind21537;
  let pivotBind21538 = emptyPivotValueSlot();
  return ((pivotIn11007[pivotIn11008] = pivotBind21538), pivotBind21538);
}
export function pivotValuesEqual(pivotIn5870: any, pivotIn5871: any) {
  pivotIn5870.count += 1;
  let pivotBind15838 = pivotTupleKey(pivotIn5871);
  pivotBind15838 != null &&
    ((pivotIn5870.countNumbers += 1),
    (pivotIn5870.sum += pivotBind15838),
    (pivotIn5870.sumSquares += pivotBind15838 * pivotBind15838),
    (pivotIn5870.product =
      pivotIn5870.product == null
        ? pivotBind15838
        : pivotIn5870.product * pivotBind15838),
    (pivotIn5870.min =
      pivotIn5870.min == null
        ? pivotBind15838
        : Math.min(pivotIn5870.min, pivotBind15838)),
    (pivotIn5870.max =
      pivotIn5870.max == null
        ? pivotBind15838
        : Math.max(pivotIn5870.max, pivotBind15838)));
}
export function formatPivotNumber(pivotIn1014: any, pivotIn1015: any) {
  switch (pivotIn1015 ?? spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_SUM) {
    case spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_SUM:
      return pivotIn1014.sum;
    case spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_COUNT:
      return pivotIn1014.count;
    case spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_COUNT_NUMBERS:
      return pivotIn1014.countNumbers;
    case spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_AVERAGE:
      return pivotIn1014.countNumbers > 0
        ? pivotIn1014.sum / pivotIn1014.countNumbers
        : null;
    case spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_MAXIMUM:
      return pivotIn1014.max;
    case spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_MINIMUM:
      return pivotIn1014.min;
    case spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_PRODUCT:
      return pivotIn1014.product;
    case spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_STD_DEV: {
      let pivotBind19673 = pivotIn1014.countNumbers;
      if (pivotBind19673 <= 1) return null;
      let pivotBind19674 =
        (pivotIn1014.sumSquares -
          (pivotIn1014.sum * pivotIn1014.sum) / pivotBind19673) /
        (pivotBind19673 - 1);
      return Math.sqrt(Math.max(pivotBind19674, 0));
    }
    case spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_STD_DEVP: {
      let pivotBind19805 = pivotIn1014.countNumbers;
      if (pivotBind19805 === 0) return null;
      let pivotBind19806 =
        (pivotIn1014.sumSquares -
          (pivotIn1014.sum * pivotIn1014.sum) / pivotBind19805) /
        pivotBind19805;
      return Math.sqrt(Math.max(pivotBind19806, 0));
    }
    case spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_VARIANCE: {
      let pivotBind21372 = pivotIn1014.countNumbers;
      return pivotBind21372 <= 1
        ? null
        : (pivotIn1014.sumSquares -
            (pivotIn1014.sum * pivotIn1014.sum) / pivotBind21372) /
            (pivotBind21372 - 1);
    }
    case spreadsheetJ.DATA_CONSOLIDATE_FUNCTION_VARIANCEP: {
      let pivotBind21539 = pivotIn1014.countNumbers;
      return pivotBind21539 === 0
        ? null
        : (pivotIn1014.sumSquares -
            (pivotIn1014.sum * pivotIn1014.sum) / pivotBind21539) /
            pivotBind21539;
    }
    default:
      return pivotIn1014.sum;
  }
}
export function isPivotBlankValue(pivotIn11661: any) {
  return pivotIn11661 == null
    ? ""
    : pivotIn11661 instanceof Date
      ? pivotIn11661.toISOString()
      : String(pivotIn11661);
}
export function collectPivotRowTuples(pivotIn2129: any, pivotIn2130: any) {
  let pivotBind9047 = new Map(),
    pivotBind9048 = Array.isArray(pivotIn2129.cacheProto.fields)
      ? pivotIn2129.cacheProto.fields
      : [];
  for (let [pivotBind10154, pivotBind10155] of pivotIn2130.entries()) {
    let pivotBind10471 = pivotIn2129.pivotFields[pivotBind10154];
    if (!pivotBind10471) continue;
    let pivotBind10472 = Array.isArray(pivotBind10471.items)
      ? pivotBind10471.items
      : [];
    if (pivotBind10472.length === 0) continue;
    let pivotBind10473 =
      pivotBind9048[pivotBind10155.headerIndex]?.sharedItems?.values ?? [];
    if (!Array.isArray(pivotBind10473) || pivotBind10473.length === 0) continue;
    let pivotBind10474 = new Set(),
      pivotBind10475 = new Set(),
      pivotBind10476 = new Map();
    for (
      let pivotBind16982 = 0;
      pivotBind16982 < pivotBind10472.length;
      pivotBind16982++
    ) {
      let pivotBind17926 = pivotBind10472[pivotBind16982],
        pivotBind17927 = pivotBind17926?.index;
      if (typeof pivotBind17927 != "number") continue;
      let pivotBind17928 = pivotBind10473[pivotBind17927];
      if (pivotBind17928 == null) continue;
      let pivotBind17929 = String(pivotBind17928);
      pivotBind10474.add(pivotBind17929);
      pivotBind10476.set(pivotBind17929, pivotBind16982);
      pivotBind17926?.hidden === true && pivotBind10475.add(pivotBind17929);
    }
    pivotBind9047.set(pivotBind10154, {
      showAll: pivotBind10471.showAll !== false,
      whitelist: pivotBind10474,
      hidden: pivotBind10475,
      order: pivotBind10476,
    });
  }
  return pivotBind9047;
}
export function collectPivotColTuples(
  pivotIn6203: any,
  pivotIn6204: any,
  pivotIn6205: any,
) {
  for (let pivotBind17317 of pivotIn6204) {
    let pivotBind17789 = pivotIn6203.get(pivotBind17317);
    if (!pivotBind17789) continue;
    let pivotBind17790 = pivotIn6205.get(pivotBind17317),
      pivotBind17791 = isPivotBlankValue(
        pivotBind17790 === undefined ? null : pivotBind17790,
      );
    if (
      pivotBind17789.hidden.has(pivotBind17791) ||
      (!pivotBind17789.showAll &&
        pivotBind17789.whitelist.size > 0 &&
        !pivotBind17789.whitelist.has(pivotBind17791))
    )
      return false;
  }
  return true;
}
export function pivotTupleKey(props: any) {
  if (typeof props == "number") return Number.isFinite(props) ? props : null;
  if (typeof props == "string") {
    let pivotBind20877 = props.trim();
    if (pivotBind20877.length === 0) return null;
    let pivotBind20878 = Number(pivotBind20877);
    return Number.isFinite(pivotBind20878) ? pivotBind20878 : null;
  }
  return props instanceof Date ? props.getTime() : null;
}
export function pivotRowKey(pivotIn14593: any) {
  return JSON.stringify(pivotIn14593 ?? []);
}
export function comparePivotKeys(pivotIn5378: any) {
  if (!pivotIn5378.description) return null;
  try {
    let pivotBind17470 = JSON.parse(pivotIn5378.description);
    if (!pivotBind17470 || !pivotBind17470.kind) return null;
    if (
      pivotBind17470.kind === "dateFilter" ||
      pivotBind17470.kind === "labelFilter" ||
      pivotBind17470.kind === "manualFilter" ||
      pivotBind17470.kind === "valueFilter"
    )
      return pivotBind17470;
  } catch {
    return null;
  }
  return null;
}
