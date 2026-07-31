// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-47: PivotCaches ensure (legacy Cme drained half).

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureRangeInit } from "../range";
import { PivotCaches } from "./pivot-caches";

/**
 * Touches PivotCaches + Range ensure. Boundary Cme still runs
 * initAddressUtils / Binding333 / _u / Binding352 + hook wiring first.
 */
export const ensurePivotCachesInit = esmInit(() => {
  ensureRangeInit();
  void PivotCaches;
});
