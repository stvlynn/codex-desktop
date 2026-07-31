// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-49/52: PivotTable ensure (legacy `_u`).

import { esmInit } from "../../runtime/rolldown-runtime";
import { PivotTable } from "./pivot-table";
import { ensurePivotLayoutInit } from "./pivot-layout";

/** Touches PivotTable + PivotLayout. Boundary `_u` still runs field/cache ensures. */
export const ensurePivotTableInit = esmInit(() => {
  ensurePivotLayoutInit();
  void PivotTable;
});
