// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-51: formula scalar coerce helpers.
import {
  isArrayValue,
  isErrorValue,
  isLambdaValue,
  makeErrorValue,
} from "./array-value";

export function coerceToNumberOrError(formulaArrayIn12654: any) {
  let formulaArrayBind22475 = tryCoerceToNumber(formulaArrayIn12654);
  return formulaArrayBind22475 === null
    ? makeErrorValue("#VALUE!")
    : formulaArrayBind22475;
}
export function tryCoerceToNumber(formulaArrayIn4812: any) {
  if (isArrayValue(formulaArrayIn4812)) return makeErrorValue("#VALUE!");
  if (isErrorValue(formulaArrayIn4812)) return formulaArrayIn4812;
  if (isLambdaValue(formulaArrayIn4812)) return makeErrorValue("#VALUE!");
  if (formulaArrayIn4812 == null) return 0;
  if (typeof formulaArrayIn4812 == "number") return formulaArrayIn4812;
  if (typeof formulaArrayIn4812 == "boolean") return +!!formulaArrayIn4812;
  if (typeof formulaArrayIn4812 == "string") {
    if (formulaArrayIn4812 === "") return 0;
    if (formulaArrayIn4812.trim() === "") return null;
    let formulaArrayBind20760 = Number(formulaArrayIn4812);
    return Number.isNaN(formulaArrayBind20760) ? null : formulaArrayBind20760;
  }
  return null;
}
export function coerceToStringOrError(formulaArrayIn9091: any) {
  return isArrayValue(formulaArrayIn9091)
    ? makeErrorValue("#VALUE!")
    : isErrorValue(formulaArrayIn9091)
      ? formulaArrayIn9091
      : isLambdaValue(formulaArrayIn9091)
        ? makeErrorValue("#VALUE!")
        : formulaArrayIn9091 == null
          ? ""
          : String(formulaArrayIn9091);
}
export function cellAddressKey(
  formulaArrayIn9112: any,
  formulaArrayIn9113: any,
) {
  let formulaArrayBind19696 =
    formulaArrayIn9112.sheet?.sheetName ?? formulaArrayIn9113.currentSheet;
  if (!formulaArrayBind19696) return null;
  let formulaArrayBind19697 = {
    ...formulaArrayIn9112,
    sheet: {
      sheetName: formulaArrayBind19696,
    },
  };
  return formulaArrayIn9113.cellAddressToKey(formulaArrayBind19697);
}
