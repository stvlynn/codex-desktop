// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-44: formula cluster ensure (legacy workbookF).

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  BOOLEAN_LITERALS,
  EMPTY_NUMBER_LITERAL,
  MAX_COLUMN_INDEX,
  A1_CELL_RE,
  A1_COLUMN_RE,
  BINARY_OPERATOR_PRECEDENCE,
  RIGHT_ASSOCIATIVE_OPS,
  UNARY_OPERATOR_PRECEDENCE,
} from "./formula-constants";
import { FormulaParser } from "./formula-parser";
import { tokenizeFormula } from "./tokenize-formula";
import { parseFormula } from "./parse-formula";

/** Legacy `workbookF` — touch formula constants/parser (now eager). */
export const ensureFormulaInit = esmInit(() => {
  void BOOLEAN_LITERALS;
  void EMPTY_NUMBER_LITERAL;
  void MAX_COLUMN_INDEX;
  void A1_CELL_RE;
  void A1_COLUMN_RE;
  void BINARY_OPERATOR_PRECEDENCE;
  void RIGHT_ASSOCIATIVE_OPS;
  void UNARY_OPERATOR_PRECEDENCE;
  void FormulaParser;
  void tokenizeFormula;
  void parseFormula;
});
