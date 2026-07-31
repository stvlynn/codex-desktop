// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-49: peeled PivotTable.rebuildCache().

import { refreshPivotTableLayout, hydrateCacheFields } from "./boundary-hooks";
import { getPivotCacheProto, getPivotTableSource } from "./pivot-table-maps";
import type { PivotTableOpsHost } from "./types";

export function rebuildPivotCache(host: PivotTableOpsHost): void {
  let pivotBind4044 = host.getProto(),
    pivotBind4045 = getPivotCacheProto(host.pivotTable),
    pivotBind4046 = getPivotTableSource(host.pivotTable);
  pivotBind4045.worksheetSourceReference =
    pivotBind4046.address.length > 0 ? pivotBind4046.address : undefined;
  pivotBind4045.worksheetSourceSheet =
    pivotBind4046.address.length > 0 ? pivotBind4046.worksheet.name : undefined;
  let pivotBind4047, pivotBind4048;
  if (pivotBind4046.address.length > 0) {
    let pivotBind9629 = pivotBind4046.worksheet.getRange(
      pivotBind4046.address,
    ).values;
    if (pivotBind9629.length === 0) {
      pivotBind4045.fields = [];
      pivotBind4045.recordCount = 0;
      host.syncItemsFromCache();
      refreshPivotTableLayout(host.pivotTable);
      return;
    }
    let pivotBind9630 = pivotBind9629[0] ?? [],
      pivotBind9631 = pivotBind9630.length;
    pivotBind4047 = pivotBind9630.map((item, index) =>
      item != null && item !== "" ? String(item) : `Column${index + 1}`,
    );
    pivotBind4048 = [];
    for (
      let pivotBind15557 = 1;
      pivotBind15557 < pivotBind9629.length;
      pivotBind15557++
    ) {
      let pivotBind16303 = pivotBind9629[pivotBind15557] ?? [],
        pivotBind16304 = [],
        pivotBind16305 = false;
      for (
        let pivotBind20333 = 0;
        pivotBind20333 < pivotBind9631;
        pivotBind20333++
      ) {
        let pivotBind21183 = pivotBind16303[pivotBind20333];
        pivotBind16304[pivotBind20333] = pivotBind21183 ?? null;
        pivotBind21183 != null &&
          pivotBind21183 !== "" &&
          (pivotBind16305 = true);
      }
      pivotBind16305 && pivotBind4048.push(pivotBind16304);
    }
  } else if (
    ((pivotBind4047 = [...pivotBind4046.headers]),
    (pivotBind4048 = pivotBind4046.rows.map((item) => [...item])),
    pivotBind4047.length === 0)
  ) {
    pivotBind4045.fields = [];
    pivotBind4045.recordCount = pivotBind4048.length;
    host.syncItemsFromCache();
    refreshPivotTableLayout(host.pivotTable);
    return;
  }
  let pivotBind4049 = new Set(),
    pivotBind4050 = Array.isArray(pivotBind4044.rowFields)
      ? pivotBind4044.rowFields
      : [],
    pivotBind4051 = Array.isArray(pivotBind4044.columnFields)
      ? pivotBind4044.columnFields
      : [],
    pivotBind4052 = Array.isArray(pivotBind4044.pageFields)
      ? pivotBind4044.pageFields
      : [];
  for (let pivotBind22738 of pivotBind4050)
    typeof pivotBind22738 == "number" &&
      pivotBind22738 >= 0 &&
      pivotBind4049.add(pivotBind22738);
  for (let pivotBind22739 of pivotBind4051)
    typeof pivotBind22739 == "number" &&
      pivotBind22739 >= 0 &&
      pivotBind4049.add(pivotBind22739);
  for (let pivotBind21323 of pivotBind4052) {
    let pivotBind21855 = pivotBind21323?.field;
    typeof pivotBind21855 == "number" &&
      pivotBind21855 >= 0 &&
      pivotBind4049.add(pivotBind21855);
  }
  let pivotBind4053 = new Map(),
    pivotBind4054 = Array.isArray(pivotBind4044.pivotFields)
      ? pivotBind4044.pivotFields
      : [];
  for (
    let pivotBind20584 = 0;
    pivotBind20584 < pivotBind4054.length;
    pivotBind20584++
  ) {
    let pivotBind21672 = pivotBind4054[pivotBind20584]?.numberFormatId;
    typeof pivotBind21672 == "number" &&
      pivotBind4053.set(pivotBind20584, pivotBind21672);
  }
  let pivotBind4055 = Array.isArray(pivotBind4044.dataFields)
    ? pivotBind4044.dataFields
    : [];
  for (let pivotBind18011 of pivotBind4055) {
    let pivotBind18481 = pivotBind18011?.field,
      pivotBind18482 = pivotBind18011?.numberFormatId;
    typeof pivotBind18481 == "number" &&
      typeof pivotBind18482 == "number" &&
      !pivotBind4053.has(pivotBind18481) &&
      pivotBind4053.set(pivotBind18481, pivotBind18482);
  }
  hydrateCacheFields(pivotBind4045, {
    headers: pivotBind4047,
    rows: pivotBind4048,
    sharedValuesFieldIndices: pivotBind4049,
    numFmtIdByFieldIndex: pivotBind4053,
  });
  pivotBind4045.recordCount = pivotBind4048.length;
  host.syncItemsFromCache();
  refreshPivotTableLayout(host.pivotTable);
}
