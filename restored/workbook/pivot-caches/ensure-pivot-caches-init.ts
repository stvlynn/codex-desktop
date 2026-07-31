// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-47/52: PivotCaches ensure (legacy Cme).

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureRangeInit } from "../range";
import { PivotCaches } from "./pivot-caches";
import { ensurePivotCacheModelInit } from "./pivot-cache-model";

/** Touches PivotCaches + cache model. Boundary Cme still runs `_u` / Binding675 first. */
export const ensurePivotCachesInit = esmInit(() => {
  ensurePivotCacheModelInit();
  ensureRangeInit();
  void PivotCaches;
});
