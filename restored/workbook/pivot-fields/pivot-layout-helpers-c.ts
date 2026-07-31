// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-50: pivot layout helpers (pivotBaseItemValue–applyShowAsToMatrix).
import { PivotShowAsCalculation } from "./pivot-field-enums";
import { parseShowAsCalculation } from "./pivot-show-as";
import { getDataFieldSubtotal } from "./pivot-data-field-helpers";
import {
  formatPivotNumber,
  isPivotBlankValue,
  pivotRowKey,
  pivotCellComparable,
} from "./pivot-layout-helpers-a";
export function pivotBaseItemValue(pivotIn10917: any) {
  return pivotIn10917
    ? String(pivotIn10917)
        .replace(/[^a-z]/gi, "")
        .toLowerCase()
    : "";
}
export function pivotBaseFieldIndex(pivotIn6913: any) {
  let pivotBind17254 = new Set();
  for (let pivotBind18791 of pivotIn6913)
    try {
      let pivotBind20479 = JSON.parse(pivotBind18791);
      if (!Array.isArray(pivotBind20479)) continue;
      for (
        let pivotBind22718 = 1;
        pivotBind22718 <= pivotBind20479.length;
        pivotBind22718++
      )
        pivotBind17254.add(
          pivotRowKey(pivotBind20479.slice(0, pivotBind22718)),
        );
    } catch {
      continue;
    }
  return pivotBind17254;
}
export function lookupPivotBaseValue(
  event: any,
  pivotIn8729: any,
  pivotIn8730: any,
  pivotIn8731: any,
) {
  if (pivotIn8730.size === 0) return false;
  if (event.values.length - 1 >= pivotIn8729) {
    let pivotBind22584 = pivotRowKey(event.values.slice(0, pivotIn8729 + 1));
    return pivotIn8730.has(pivotBind22584);
  }
  return pivotIn8731.has(event.key);
}
export function resolveShowAsValue(
  pivotIn2757: any,
  pivotIn2758: any,
  pivotIn2759: any,
  pivotIn2760: any,
) {
  if (pivotIn2757 == null) return null;
  let pivotBind10399 = parseShowAsCalculation(pivotIn2758.showAs);
  switch (pivotBind10399) {
    case PivotShowAsCalculation.percentOfGrandTotal: {
      let pivotBind22539 = pivotIn2759.grandTotalValue;
      return pivotBind22539 ? pivotIn2757 / pivotBind22539 : null;
    }
    case PivotShowAsCalculation.percentOfRowTotal: {
      let pivotBind22567 = pivotIn2759.rowTotalValue;
      return pivotBind22567 ? pivotIn2757 / pivotBind22567 : null;
    }
    case PivotShowAsCalculation.percentOfColumnTotal: {
      let pivotBind22529 = pivotIn2759.columnTotalValue;
      return pivotBind22529 ? pivotIn2757 / pivotBind22529 : null;
    }
    case PivotShowAsCalculation.differenceFrom:
    case PivotShowAsCalculation.percentDifferenceFrom: {
      let pivotBind19675 = applyShowAsCalculation(
        pivotIn2758,
        getDataFieldSubtotal(pivotIn2758),
        pivotIn2760,
      );
      if (pivotBind19675 == null) return null;
      let pivotBind19676 = pivotIn2757 - pivotBind19675;
      return pivotBind10399 === PivotShowAsCalculation.percentDifferenceFrom
        ? pivotBind19675 === 0
          ? null
          : pivotBind19676 / pivotBind19675
        : pivotBind19676;
    }
    default:
      return pivotIn2757;
  }
}
export function applyShowAsCalculation(
  pivotIn1943: any,
  pivotIn1944: any,
  pivotIn1945: any,
) {
  let pivotBind8677 = pivotIn1943.baseField,
    pivotBind8678 = pivotIn1943.baseItem;
  if (typeof pivotBind8677 != "number" || typeof pivotBind8678 != "number")
    return null;
  let pivotBind8679 = normalizeShowAsBase(
    pivotBind8677,
    pivotBind8678,
    pivotIn1945.pivotFields,
    pivotIn1945.cacheProto,
  );
  if (pivotBind8679 == null) return null;
  let pivotBind8680 = pivotIn1945.rowFieldDepthByPivotIndex.get(pivotBind8677);
  if (pivotBind8680 !== undefined) {
    let pivotBind17042 = pivotIn1945.rowEntry;
    if (!pivotBind17042 || pivotBind17042.values.length <= pivotBind8680)
      return null;
    let pivotBind17043 = [...pivotBind17042.values];
    pivotBind17043[pivotBind8680] = pivotBind8679;
    let pivotBind17044 = pivotIn1945.rowEntriesByKey.get(
      pivotRowKey(pivotBind17043),
    );
    return pivotBind17044
      ? applyShowAsToMatrix(
          pivotBind17044,
          pivotIn1945.columnEntry,
          pivotIn1945.isGrandTotalSegment,
          pivotIn1945.dataFieldIndex,
          pivotIn1944,
        )
      : null;
  }
  let pivotBind8681 =
    pivotIn1945.columnFieldDepthByPivotIndex.get(pivotBind8677);
  if (pivotBind8681 !== undefined) {
    let pivotBind17286 = pivotIn1945.rowEntry,
      pivotBind17287 = pivotIn1945.columnEntry;
    if (
      !pivotBind17286 ||
      !pivotBind17287 ||
      pivotBind17287.values.length <= pivotBind8681
    )
      return null;
    let pivotBind17288 = [...pivotBind17287.values];
    pivotBind17288[pivotBind8681] = pivotBind8679;
    let pivotBind17289 = pivotIn1945.columnEntriesByKey.get(
      pivotRowKey(pivotBind17288),
    );
    return pivotBind17289
      ? applyShowAsToMatrix(
          pivotBind17286,
          pivotBind17289,
          false,
          pivotIn1945.dataFieldIndex,
          pivotIn1944,
        )
      : null;
  }
  return null;
}
export function normalizeShowAsBase(
  pivotIn4532: any,
  pivotIn4533: any,
  pivotIn4534: any,
  pivotIn4535: any,
) {
  let pivotBind13788 = pivotIn4534[pivotIn4532];
  if (!pivotBind13788) return null;
  let pivotBind13789 = Array.isArray(pivotBind13788.items)
      ? pivotBind13788.items
      : [],
    pivotBind13790 =
      pivotBind13789.find((item) => item?.index === pivotIn4533) ??
      pivotBind13789[pivotIn4533];
  if (pivotBind13790?.name != null && pivotBind13790.name !== "")
    return pivotBind13790.name;
  let pivotBind13791 = pivotBind13788.index ?? pivotIn4532,
    pivotBind13792 =
      pivotIn4535.fields?.[pivotBind13791]?.sharedItems?.values ?? [],
    pivotBind13793 = pivotBind13790?.index;
  if (typeof pivotBind13793 == "number") {
    let pivotBind22871 = pivotBind13792[pivotBind13793];
    if (pivotBind22871 != null) return pivotBind22871;
  }
  return pivotBind13792[pivotIn4533] ?? null;
}
export function applyShowAsToMatrix(
  pivotIn9874: any,
  event: any,
  pivotIn9875: any,
  pivotIn9876: any,
  pivotIn9877: any,
) {
  if (pivotIn9875 || !event)
    return formatPivotNumber(
      pivotCellComparable(pivotIn9874.totals, pivotIn9876),
      pivotIn9877,
    );
  let pivotBind20416 = pivotIn9874.columns.get(event.key);
  return pivotBind20416
    ? formatPivotNumber(
        pivotCellComparable(pivotBind20416, pivotIn9876),
        pivotIn9877,
      )
    : null;
}
