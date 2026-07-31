// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-50: pivot axis items + body matrix (zne/Bne/Vne).
import { zt } from "../spreadsheet-protobuf";
import { isPivotBlankValue } from "./pivot-layout-helpers";

export function buildPivotRowItems(pivotIn5033: any, pivotIn5034: any) {
  let pivotBind14485 = pivotIn5033.map((item, index) => ({
    index,
    type: zt.PIVOT_ITEM_TYPE_UNSPECIFIED.toString(),
    memberPropertyIndexes: [],
    memberProperties: [],
  }));
  return (
    pivotIn5034 &&
      pivotIn5033.length > 0 &&
      pivotBind14485.push({
        type: zt.PIVOT_ITEM_TYPE_GRAND.toString(),
        memberPropertyIndexes: [],
        memberProperties: [],
      }),
    pivotBind14485
  );
}
export function buildPivotColItems(props: any) {
  return props.map((item, index) => ({
    index,
    type: item.isGrandTotal
      ? zt.PIVOT_ITEM_TYPE_GRAND.toString()
      : zt.PIVOT_ITEM_TYPE_UNSPECIFIED.toString(),
    memberPropertyIndexes: [],
    memberProperties: [],
  }));
}
export function fillPivotBodyMatrix(
  pivotIn1191: any,
  pivotIn1192: any,
  pivotIn1193: any,
  pivotIn1194: any,
  pivotIn1195: any,
  pivotIn1196: any,
  pivotIn1197: any,
) {
  let pivotBind6727 = pivotIn1191[0]?.length ?? 0,
    pivotBind6728 = pivotIn1195.length;
  for (
    let pivotBind13471 = 0;
    pivotBind13471 < pivotBind6728;
    pivotBind13471++
  ) {
    let pivotBind13989 = pivotIn1191[pivotBind13471];
    if (pivotBind13989 !== undefined)
      for (
        let pivotBind15056 = pivotIn1193;
        pivotBind15056 < pivotBind6727;
        pivotBind15056++
      ) {
        let pivotBind15613 = pivotIn1196[pivotBind15056 - pivotIn1193];
        if (pivotBind15613 === undefined) continue;
        let pivotBind15614 = pivotBind15613.columnEntry;
        if (pivotBind15614 === undefined) {
          pivotBind13989[pivotBind15056] = "Grand Total";
          continue;
        }
        let pivotBind15615 = pivotBind15614.values[pivotBind13471];
        if (pivotBind15615 === undefined) {
          pivotBind13989[pivotBind15056] = "";
          continue;
        }
        pivotBind13989[pivotBind15056] = isPivotBlankValue(pivotBind15615);
      }
  }
  let pivotBind6729 = pivotIn1191[pivotIn1192 - 1];
  if (pivotBind6729 === undefined) return;
  for (
    let pivotBind13067 = pivotIn1193;
    pivotBind13067 < pivotBind6727;
    pivotBind13067++
  ) {
    let pivotBind13595 = pivotIn1196[pivotBind13067 - pivotIn1193];
    if (pivotBind13595 === undefined) {
      pivotBind6729[pivotBind13067] = "";
      continue;
    }
    let pivotBind13596 = pivotIn1197[pivotBind13595.dataFieldIndex];
    if (pivotBind13596 === undefined) {
      pivotBind6729[pivotBind13067] = "";
      continue;
    }
    pivotIn1197.length === 1 && pivotIn1195.length === 0
      ? (pivotBind6729[pivotBind13067] = pivotBind13596.name)
      : pivotIn1197.length > 1
        ? (pivotBind6729[pivotBind13067] = pivotBind13595.isGrandTotal
            ? `Grand Total (${pivotBind13596.name})`
            : pivotBind13596.name)
        : pivotBind13595.isGrandTotal
          ? (pivotBind6729[pivotBind13067] = "Grand Total")
          : (pivotBind6729[pivotBind13067] = "");
  }
  let pivotBind6730 = pivotIn1191[pivotIn1192 - 1];
  if (pivotBind6730 !== undefined)
    if (pivotIn1193 === 1 && pivotIn1194.length > 0)
      pivotBind6730[0] = "Row Labels";
    else
      for (
        let pivotBind21737 = 0;
        pivotBind21737 < pivotIn1193;
        pivotBind21737++
      ) {
        let pivotBind22504 = pivotIn1194[pivotBind21737];
        pivotBind6730[pivotBind21737] =
          pivotBind22504 === undefined ? "" : pivotBind22504.name;
      }
}
