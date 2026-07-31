// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-46: Range cluster ensure (legacy Binding675 drained half).

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureRangeFormatInit } from "../range-format";
import { ensureConditionalFormatInit } from "../conditional-format";
import { ensureDataValidationInit } from "../data-validation";
import { ensureFormulaInit } from "../formula";
import { ensureRangeFillInit } from "../range-fill";
import { Range } from "./range";

/**
 * Touches Range + drained formula/CF/DV/fill deps. Boundary Binding675 still
 * runs spreadsheetVn / initAddressUtils / $u / Yle before this.
 */
export const ensureRangeInit = esmInit(() => {
  ensureRangeFormatInit();
  ensureConditionalFormatInit();
  ensureDataValidationInit();
  ensureFormulaInit();
  ensureRangeFillInit();
  void Range;
});
