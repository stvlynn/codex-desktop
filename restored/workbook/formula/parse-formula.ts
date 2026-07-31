// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-44: tokenize + parse entry (legacy parse-formula entry).

import { tokenizeFormula } from "./tokenize-formula";
import { FormulaParser } from "./formula-parser";

export function parseFormula(formulaIn11186: unknown) {
  let formulaBind21677 = tokenizeFormula(formulaIn11186),
    formulaBind21678 = new FormulaParser(formulaBind21677);
  return {
    expr: formulaBind21678.parse(),
    errors: formulaBind21678.errors,
  };
}
