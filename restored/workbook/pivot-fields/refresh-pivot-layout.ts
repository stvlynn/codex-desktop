// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-50: refreshPivotTableLayout entry (legacy workbookHelper8).
import { snapshotPivotLayoutModel } from "./pivot-layout-snapshot";
import { buildPivotAggregateTree } from "./pivot-layout-aggregate";
import { writePivotLayoutToSheet } from "./pivot-layout-join";

export function refreshPivotTableLayout(pivotIn10740: any) {
  pivotIn10740.__clearPivotCellRenderHints();
  let pivotBind21259 = snapshotPivotLayoutModel(pivotIn10740);
  pivotBind21259.dataFields.length !== 0 &&
    writePivotLayoutToSheet(
      pivotBind21259,
      buildPivotAggregateTree(pivotBind21259),
    );
}
