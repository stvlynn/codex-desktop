// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-50: snapshot pivot layout model (kne).
import { parseA1Range } from "../../utils/spreadsheet-address-utils";
import { getPivotTableProto, getPivotCacheProto } from "../pivot-table";

export function snapshotPivotLayoutModel(pivotIn630: any) {
  let pivotBind4685 = getPivotTableProto(pivotIn630),
    pivotBind4686 = getPivotCacheProto(pivotIn630),
    pivotBind4687 = Array.isArray(pivotBind4685.pivotFields)
      ? pivotBind4685.pivotFields
      : [],
    pivotBind4688 = Array.isArray(pivotBind4685.rowFields)
      ? pivotBind4685.rowFields
      : [],
    pivotBind4689 = Array.isArray(pivotBind4685.columnFields)
      ? pivotBind4685.columnFields
      : [],
    pivotBind4690 = Array.isArray(pivotBind4685.dataFields)
      ? pivotBind4685.dataFields
      : [],
    pivotBind4691 = pivotBind4687.map((item, index) => {
      let pivotBind18851 = item.index ?? index,
        pivotBind18852 = pivotBind4686.fields?.[pivotBind18851];
      return {
        pivotIndex: index,
        headerIndex: pivotBind18851,
        name: item.name ?? pivotBind18852?.name ?? `Field ${index + 1}`,
      };
    }),
    pivotBind4692 = new Map();
  pivotBind4691.forEach((item) => {
    pivotBind4692.set(item.pivotIndex, item);
  });
  let pivotBind4693 = pivotBind4688
      .map((item) => pivotBind4692.get(item))
      .filter((item) => item != null),
    pivotBind4694 = pivotBind4689
      .map((item) => pivotBind4692.get(item))
      .filter((item) => item != null),
    pivotBind4695 = pivotBind4690
      .map((item) => {
        let pivotBind17041 = pivotBind4692.get(item.field ?? -1);
        return pivotBind17041
          ? {
              pivotIndex: pivotBind17041.pivotIndex,
              headerIndex: pivotBind17041.headerIndex,
              name: item.name ?? pivotBind17041.name,
              proto: item,
            }
          : null;
      })
      .filter((item) => item != null),
    pivotBind4696 = pivotBind4685.rowGrandTotals !== false,
    pivotBind4697 = pivotBind4685.columnGrandTotals !== false,
    pivotBind4698 = pivotBind4685.location?.reference;
  (!pivotBind4698 || pivotBind4698.length === 0) &&
    (pivotBind4698 = pivotBind4685.location?.reference ?? "A1");
  let pivotBind4699 = parseA1Range(pivotBind4698);
  if (!pivotBind4699)
    throw Error(`Invalid pivot location reference: ${pivotBind4698}`);
  let pivotBind4700 = pivotBind4699.bounds.startRow,
    pivotBind4701 = pivotBind4699.bounds.startCol,
    pivotBind4702 = Array.isArray(pivotBind4685.filters)
      ? pivotBind4685.filters
      : [],
    pivotBind4703 =
      (pivotBind4694.length > 0 ? pivotBind4694.length : 1) +
      +(pivotBind4695.length > 1 && pivotBind4694.length > 0),
    pivotBind4704 =
      pivotBind4685.outline !== true && pivotBind4685.compact !== false,
    pivotBind4705 =
      pivotBind4693.length > 0 ? (pivotBind4704 ? 1 : pivotBind4693.length) : 1,
    pivotBind4706 = pivotBind4685.location;
  return {
    pivot: pivotIn630,
    pivotProto: pivotBind4685,
    cacheProto: pivotBind4686,
    pivotFields: pivotBind4687,
    rowFields: pivotBind4693,
    columnFields: pivotBind4694,
    dataFields: pivotBind4695,
    rowGrandTotals: pivotBind4696,
    columnGrandTotals: pivotBind4697,
    startRow: pivotBind4700,
    startCol: pivotBind4701,
    headerRows:
      typeof pivotBind4706?.firstDataRow == "number" &&
      pivotBind4706.firstDataRow > 0
        ? Math.max(0, pivotBind4706.firstDataRow)
        : pivotBind4703,
    headerCols:
      typeof pivotBind4706?.firstDataColumn == "number" &&
      pivotBind4706.firstDataColumn > 0
        ? Math.max(0, pivotBind4706.firstDataColumn)
        : pivotBind4705,
    filters: pivotBind4702,
  };
}
