// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-28: RangeFormat cluster ensure (legacy Yle).

import { esmInit } from "../../runtime/rolldown-runtime";
import { initAddressMetrics } from "../../utils/spreadsheet-address-utils";
import { ensureFillInit } from "../fill";
import { ensureWorkbookColorInit } from "../theme-color";
import { ensureStylesheetInit } from "../stylesheet";
import { ensureWorksheetAutofitInit } from "../worksheet-autofit";

export const ensureRangeFormatInit = esmInit(() => {
  ensureFillInit();
  ensureWorkbookColorInit();
  ensureStylesheetInit();
  ensureWorksheetAutofitInit();
  initAddressMetrics();
});
