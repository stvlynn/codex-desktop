// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-51: concat + compare array/scalar ops.
import {
  FLOAT_COMPARE_EPSILON,
  NUMBER_PRECISION_DIGITS,
} from "./formula-array-constants";
import {
  isArrayValue,
  zipArrayValues,
  makeErrorValue,
  isErrorValue,
} from "./array-value";
import { tryCoerceToNumber, coerceToStringOrError } from "./coerce";

export function applyConcatOp(
  formulaArrayIn11891: any,
  formulaArrayIn11892: any,
) {
  return isArrayValue(formulaArrayIn11891) || isArrayValue(formulaArrayIn11892)
    ? zipArrayValues(
        formulaArrayIn11891,
        formulaArrayIn11892,
        (formulaArrayIn16381, formulaArrayIn16382) =>
          concatScalar(formulaArrayIn16381, formulaArrayIn16382),
      )
    : concatScalar(formulaArrayIn11891, formulaArrayIn11892);
}
export function concatScalar(
  formulaArrayIn11009: any,
  formulaArrayIn11010: any,
) {
  let formulaArrayBind21540 = coerceToStringOrError(formulaArrayIn11009);
  if (isErrorValue(formulaArrayBind21540)) return formulaArrayBind21540;
  let formulaArrayBind21541 = coerceToStringOrError(formulaArrayIn11010);
  return isErrorValue(formulaArrayBind21541)
    ? formulaArrayBind21541
    : `${formulaArrayBind21540}${formulaArrayBind21541}`;
}
export function applyCompareOp(
  formulaArrayIn11450: any,
  formulaArrayIn11451: any,
  formulaArrayIn11452: any,
) {
  return isArrayValue(formulaArrayIn11451) || isArrayValue(formulaArrayIn11452)
    ? zipArrayValues(
        formulaArrayIn11451,
        formulaArrayIn11452,
        (formulaArrayIn16303, formulaArrayIn16304) =>
          compareValues(
            formulaArrayIn11450,
            formulaArrayIn16303,
            formulaArrayIn16304,
          ),
      )
    : compareValues(
        formulaArrayIn11450,
        formulaArrayIn11451,
        formulaArrayIn11452,
      );
}
export function compareValues(
  formulaArrayIn3463: any,
  formulaArrayIn3464: any,
  formulaArrayIn3465: any,
) {
  let formulaArrayBind11902 = tryCoerceToNumber(formulaArrayIn3464),
    formulaArrayBind11903 = tryCoerceToNumber(formulaArrayIn3465);
  if (isErrorValue(formulaArrayBind11902)) return formulaArrayBind11902;
  if (isErrorValue(formulaArrayBind11903)) return formulaArrayBind11903;
  if (
    typeof formulaArrayBind11902 == "number" &&
    typeof formulaArrayBind11903 == "number"
  )
    return compareNumbers(
      formulaArrayIn3463,
      formulaArrayBind11902,
      formulaArrayBind11903,
    );
  if (
    typeof formulaArrayBind11902 == "number" &&
    formulaArrayBind11903 === null &&
    typeof formulaArrayIn3465 == "string"
  )
    return compareNumberText(formulaArrayIn3463, {
      numberOnLeft: true,
      numberValue: formulaArrayBind11902,
      textValue: formulaArrayIn3465,
    });
  if (
    typeof formulaArrayBind11903 == "number" &&
    formulaArrayBind11902 === null &&
    typeof formulaArrayIn3464 == "string"
  )
    return compareNumberText(formulaArrayIn3463, {
      numberOnLeft: false,
      numberValue: formulaArrayBind11903,
      textValue: formulaArrayIn3464,
    });
  let formulaArrayBind11904 = coerceToStringOrError(formulaArrayIn3464);
  if (isErrorValue(formulaArrayBind11904)) return formulaArrayBind11904;
  let formulaArrayBind11905 = coerceToStringOrError(formulaArrayIn3465);
  return isErrorValue(formulaArrayBind11905)
    ? formulaArrayBind11905
    : compareNumbers(
        formulaArrayIn3463,
        formulaArrayBind11904,
        formulaArrayBind11905,
      );
}
export function compareNumbers(
  formulaArrayIn4320: any,
  formulaArrayIn4321: any,
  formulaArrayIn4322: any,
) {
  if (
    typeof formulaArrayIn4321 == "number" &&
    typeof formulaArrayIn4322 == "number"
  )
    return compareFloats(
      formulaArrayIn4320,
      formulaArrayIn4321,
      formulaArrayIn4322,
    );
  if (
    typeof formulaArrayIn4321 == "string" &&
    typeof formulaArrayIn4322 == "string"
  )
    return Dre(formulaArrayIn4320, formulaArrayIn4321, formulaArrayIn4322);
  switch (formulaArrayIn4320) {
    case "=":
      return formulaArrayIn4321 === formulaArrayIn4322;
    case "<>":
      return formulaArrayIn4321 !== formulaArrayIn4322;
    case "<":
      return formulaArrayIn4321 < formulaArrayIn4322;
    case ">":
      return formulaArrayIn4321 > formulaArrayIn4322;
    case "<=":
      return formulaArrayIn4321 <= formulaArrayIn4322;
    case ">=":
      return formulaArrayIn4321 >= formulaArrayIn4322;
    default:
      return false;
  }
}
export function Dre(
  formulaArrayIn5743: any,
  formulaArrayIn5744: any,
  formulaArrayIn5745: any,
) {
  let formulaArrayBind15669 = upperCaseLocale(formulaArrayIn5744),
    formulaArrayBind15670 = upperCaseLocale(formulaArrayIn5745);
  switch (formulaArrayIn5743) {
    case "=":
      return formulaArrayBind15669 === formulaArrayBind15670;
    case "<>":
      return formulaArrayBind15669 !== formulaArrayBind15670;
    case "<":
      return formulaArrayBind15669 < formulaArrayBind15670;
    case ">":
      return formulaArrayBind15669 > formulaArrayBind15670;
    case "<=":
      return formulaArrayBind15669 <= formulaArrayBind15670;
    case ">=":
      return formulaArrayBind15669 >= formulaArrayBind15670;
    default:
      return false;
  }
}
export function upperCaseLocale(formulaArrayIn14781: any) {
  return formulaArrayIn14781.toLocaleUpperCase();
}
export function compareFloats(
  formulaArrayIn5223: any,
  formulaArrayIn5224: any,
  formulaArrayIn5225: any,
) {
  let formulaArrayBind14777 =
      roundToPrecision(formulaArrayIn5224) -
      roundToPrecision(formulaArrayIn5225),
    formulaArrayBind14778 =
      Math.abs(formulaArrayBind14777) <= FLOAT_COMPARE_EPSILON;
  switch (formulaArrayIn5223) {
    case "=":
      return formulaArrayBind14778;
    case "<>":
      return !formulaArrayBind14778;
    case "<":
      return formulaArrayBind14778 ? false : formulaArrayBind14777 < 0;
    case ">":
      return formulaArrayBind14778 ? false : formulaArrayBind14777 > 0;
    case "<=":
      return formulaArrayBind14778 ? true : formulaArrayBind14777 < 0;
    case ">=":
      return formulaArrayBind14778 ? true : formulaArrayBind14777 > 0;
    default:
      return false;
  }
}
export function compareNumberText(
  formulaArrayIn5983: any,
  formulaArrayIn5984: any,
) {
  let { numberOnLeft, numberValue, textValue } = formulaArrayIn5984,
    formulaArrayBind16012 = textValue.trim();
  if (textValue === "")
    return compareNumbers(
      formulaArrayIn5983,
      numberOnLeft ? numberValue : 0,
      numberOnLeft ? 0 : numberValue,
    );
  if (formulaArrayBind16012 === "")
    return compareEmptyText(formulaArrayIn5983, numberOnLeft);
  switch (formulaArrayIn5983) {
    case "=":
      return false;
    case "<>":
      return true;
    default:
      return compareEmptyText(formulaArrayIn5983, numberOnLeft);
  }
}
export function compareEmptyText(
  formulaArrayIn7335: any,
  formulaArrayIn7336: any,
) {
  switch (formulaArrayIn7335) {
    case "<":
    case "<=":
      return formulaArrayIn7336;
    case ">":
    case ">=":
      return !formulaArrayIn7336;
    case "=":
      return false;
    case "<>":
      return true;
    default:
      return makeErrorValue("#VALUE!");
  }
}
export function roundToPrecision(formulaArrayIn12475: any) {
  return Number.isFinite(formulaArrayIn12475)
    ? Number(formulaArrayIn12475.toPrecision(NUMBER_PRECISION_DIGITS))
    : formulaArrayIn12475;
}
