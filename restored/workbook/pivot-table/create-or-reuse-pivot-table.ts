// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-49: create-or-reuse PivotTable factory (legacy `_re` / `vre`).

import { PivotTable } from "./pivot-table";
import { pivotSourceByInstance, pivotTableByProto } from "./pivot-table-maps";
import { snapshotPivotSource } from "./snapshot-pivot-source";

export function createOrReusePivotTable(pivotIn6206: any) {
  let pivotBind16283 = pivotTableByProto.get(pivotIn6206.pivot);
  if (pivotBind16283) {
    pivotIn6206.onDelete &&
      pivotBind16283.addDeleteListener(pivotIn6206.onDelete);
    pivotIn6206.onNameChange &&
      pivotBind16283.addNameChangeListener(pivotIn6206.onNameChange);
    let pivotBind18302 = pivotSourceByInstance.get(pivotBind16283);
    return (
      (!pivotBind18302 ||
        sourceNeedsRefresh(pivotBind18302, pivotIn6206.source)) &&
        pivotSourceByInstance.set(
          pivotBind16283,
          snapshotPivotSource(pivotIn6206.source),
        ),
      pivotBind16283
    );
  }
  return new PivotTable(pivotIn6206);
}
function sourceNeedsRefresh(pivotIn4937: any, pivotIn4938: any) {
  return (
    (pivotIn4937.address.length === 0 && pivotIn4938.address.length > 0) ||
    (pivotIn4937.headers.length === 0 && pivotIn4938.headers.length > 0) ||
    (pivotIn4937.rows.length === 0 && pivotIn4938.rows.length > 0) ||
    pivotIn4938.headers.length > pivotIn4937.headers.length ||
    pivotIn4938.rows.length > pivotIn4937.rows.length ||
    (pivotIn4937.worksheet !== pivotIn4938.worksheet &&
      pivotIn4938.address.length > 0 &&
      pivotIn4938.rows.length >= pivotIn4937.rows.length)
  );
}
