// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-12: math LaTeX parse + AST→plain-text helpers.

export {
  ASCII_SUPERSCRIPT_SAFE,
  ASCII_SUBSCRIPT_SAFE,
  UNICODE_SUPERSCRIPT,
  UNICODE_SUBSCRIPT,
  LATEX_GREEK_COMMANDS,
  LATEX_OPERATOR_COMMANDS,
  MATRIX_ENVIRONMENT_NAMES,
} from "./unicode-math-maps";
export {
  MathLimitKind,
  MathTokenKind,
  MathAccentPosition,
  MathJustification,
  MathVariant,
  MathDisplayMode,
  MathLimitPlacement,
  MathFractionKind,
  MathMatrixColumnJustification,
  MathBarPosition,
  ensurePresentationMathEnumsInit,
} from "./math-proto-enums";
export {
  collapseMathWhitespace,
  parenIfMultiChar,
  mapCharsThroughTable,
  formatScriptPlainText,
  joinMathSequencePlainText,
  mathNodeToPlainText,
  mathAstToPlainText,
  mixedRunsToPlainText,
} from "./math-node-plain-text";
export type {
  MathTokenNode,
  MathAstNode,
  MathDocument,
  MixedTextMathRun,
} from "./math-node-plain-text";
export { MathLatexParser } from "./math-latex-parser";
export {
  parseMathFromLatex,
} from "./parse-math-from-latex";
export type { ParseMathFromLatexProps } from "./parse-math-from-latex";
export { ensureMathPlainTextInit } from "./ensure-math-plain-text-init";
