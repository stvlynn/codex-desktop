// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-51: formula-array / AST-eval barrel.

export {
  IF_TRUE_SENTINEL,
  IF_FALSE_SENTINEL,
  FLOAT_COMPARE_EPSILON,
  NUMBER_PRECISION_DIGITS,
  RANGE_METADATA,
} from "./formula-array-constants";
export {
  createArrayValue,
  isArrayValue,
  cloneArrayValues,
  mapArrayValue,
  zipArrayValues,
  attachRangeMetadata,
  getRangeMetadata,
  copyRangeMetadata,
  makeErrorValue,
  isErrorValue,
  isLambdaValue,
  isRefErrorName,
} from "./array-value";
export {
  coerceToNumberOrError,
  tryCoerceToNumber,
  coerceToStringOrError,
  cellAddressKey,
} from "./coerce";
export { applyUnaryOp, applyArithmeticOp, arithmeticScalar } from "./ops-arith";
export {
  applyConcatOp,
  concatScalar,
  applyCompareOp,
  compareValues,
  compareNumbers,
  compareFloats,
  upperCaseLocale,
  compareNumberText,
  compareEmptyText,
  roundToPrecision,
} from "./ops-compare";
export { evaluateFormulaNode } from "./evaluate";
export { ensureFormulaArrayInit } from "./ensure-formula-array-init";
