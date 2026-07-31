// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-51: unary + arithmetic array/scalar ops.
import {
  isArrayValue,
  zipArrayValues,
  makeErrorValue,
  isErrorValue,
} from "./array-value";
import { coerceToNumberOrError } from "./coerce";

export function applyUnaryOp(formulaArrayIn7073: any, formulaArrayIn7074: any) {
  let formulaArrayBind17406 = coerceToNumberOrError(formulaArrayIn7074);
  if (isErrorValue(formulaArrayBind17406))
    return formulaArrayIn7073 === "+"
      ? formulaArrayIn7074
      : formulaArrayBind17406;
  let formulaArrayBind17407 = formulaArrayBind17406;
  switch (formulaArrayIn7073) {
    case "-":
      return -formulaArrayBind17407;
    case "+":
      return formulaArrayBind17407;
    case "%":
      return formulaArrayBind17407 / 100;
    default:
      return makeErrorValue("#VALUE!");
  }
}
export function applyArithmeticOp(
  formulaArrayIn11447: any,
  formulaArrayIn11448: any,
  formulaArrayIn11449: any,
) {
  return isArrayValue(formulaArrayIn11448) || isArrayValue(formulaArrayIn11449)
    ? zipArrayValues(
        formulaArrayIn11448,
        formulaArrayIn11449,
        (formulaArrayIn16301, formulaArrayIn16302) =>
          arithmeticScalar(
            formulaArrayIn11447,
            formulaArrayIn16301,
            formulaArrayIn16302,
          ),
      )
    : arithmeticScalar(
        formulaArrayIn11447,
        formulaArrayIn11448,
        formulaArrayIn11449,
      );
}
export function arithmeticScalar(
  formulaArrayIn4295: any,
  formulaArrayIn4296: any,
  formulaArrayIn4297: any,
) {
  let formulaArrayBind13379 = coerceToNumberOrError(formulaArrayIn4296);
  if (isErrorValue(formulaArrayBind13379)) return formulaArrayBind13379;
  let formulaArrayBind13380 = coerceToNumberOrError(formulaArrayIn4297);
  if (isErrorValue(formulaArrayBind13380)) return formulaArrayBind13380;
  let formulaArrayBind13381 = formulaArrayBind13379,
    formulaArrayBind13382 = formulaArrayBind13380;
  switch (formulaArrayIn4295) {
    case "+":
      return formulaArrayBind13381 + formulaArrayBind13382;
    case "-":
      return formulaArrayBind13381 - formulaArrayBind13382;
    case "*":
      return formulaArrayBind13381 * formulaArrayBind13382;
    case "/":
      return formulaArrayBind13382 === 0
        ? makeErrorValue("#DIV/0!")
        : formulaArrayBind13381 / formulaArrayBind13382;
    case "^":
      return Number.isNaN(formulaArrayBind13381) ||
        Number.isNaN(formulaArrayBind13382)
        ? makeErrorValue("#NUM!")
        : formulaArrayBind13381 ** +formulaArrayBind13382;
    default:
      return makeErrorValue("#VALUE!");
  }
}
