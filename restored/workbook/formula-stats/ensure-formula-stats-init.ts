// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-68: formula-stats cluster ensure (legacy Binding1831 / Binding1874).

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureFormulaStatsCoreInit } from "./errors-core-impl";
import { ensureFormulaStatsDistAInit } from "./stats-dist-a-impl";
import { ensureFormulaStatsDistBInit } from "./stats-dist-b-impl";
import { ensureFormulaStatsDistCInit } from "./stats-dist-c-impl";

/** Legacy Binding1874 — initializes jstat/bessel wrappers + Excel dist catalog. */
export const workbookBinding1874 = esmInit(() => {
  ensureFormulaStatsCoreInit();
  ensureFormulaStatsDistAInit();
  ensureFormulaStatsDistBInit();
  ensureFormulaStatsDistCInit();
});

export const ensureFormulaStatsInit = workbookBinding1874;
