// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-49: PivotTable ensure (legacy `_u` drained half).

import { esmInit } from "../../runtime/rolldown-runtime";
import { PivotTable } from "./pivot-table";

/**
 * Touches PivotTable class. Boundary `_u` still runs field-VO inits
 * (wne/ore/ure/Binding351/…) + hook wiring first.
 */
export const ensurePivotTableInit = esmInit(() => {
  void PivotTable;
});
