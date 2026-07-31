// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-51: formula-array ensure (legacy $u).
import { esmInit } from "../../runtime/rolldown-runtime";
import {
  IF_TRUE_SENTINEL,
  IF_FALSE_SENTINEL,
  FLOAT_COMPARE_EPSILON,
  NUMBER_PRECISION_DIGITS,
  RANGE_METADATA,
} from "./formula-array-constants";

/** Legacy `$u` — touch eager formula-array constants. */
export const ensureFormulaArrayInit = esmInit(() => {
  void IF_TRUE_SENTINEL;
  void IF_FALSE_SENTINEL;
  void FLOAT_COMPARE_EPSILON;
  void NUMBER_PRECISION_DIGITS;
  void RANGE_METADATA;
});
