// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Excel AVERAGEIF + flatten helpers (legacy g4e nest).
// Stage-3 wave-123. Preferred g4e; owns p4e/m4e/h4e + flattenNestedCellArgs.

import { isFormulaErrorToken } from "../formula-average-a";
import { aQe } from "../formula-scalar-funcs";
import { faiH } from "./boundary-hooks";

export function flattenNestedCellArgs(faiIn7406: any) {
  let faiBind17846 = [];
  for (let faiBind19207 of faiIn7406) {
    if (Array.isArray(faiBind19207)) {
      for (let faiBind22365 of faiBind19207)
        if (faiBind22365)
          for (let faiBind22890 of faiBind22365)
            faiBind22890 !== undefined &&
              faiBind17846.push(faiBind22890 ?? null);
      continue;
    }
    faiBind17846.push(faiBind19207 ?? null);
  }
  return faiBind17846;
}
export function flattenSingleCellArg(faiIn15657: any) {
  return flattenNestedCellArgs([faiIn15657]);
}
export function coerceAverageIfCriteriaText(faiIn10498: any) {
  if (Array.isArray(faiIn10498)) {
    let faiBind22555 = flattenNestedCellArgs([faiIn10498]);
    return faiBind22555.length > 0 ? (faiBind22555[0] ?? "") : "";
  }
  return faiIn10498;
}
export function evalAverageIfPredicate(faiIn7290: any, faiIn7291: any) {
  if (isFormulaErrorToken(faiIn7290)) return faiIn7290;
  if (faiIn7290 instanceof Error) return faiH.VALUE_TOKEN;
  let faiBind17676 = coerceAverageIfCriteriaText(faiIn7291);
  try {
    let faiBind21689 = aQe([[faiIn7290]], faiBind17676);
    return faiBind21689 instanceof Error
      ? faiH.VALUE_TOKEN
      : typeof faiBind21689 == "number"
        ? faiBind21689 > 0
        : faiH.VALUE_TOKEN;
  } catch {
    return faiH.VALUE_TOKEN;
  }
}
export function coerceAverageIfNumeric(faiIn8371: any) {
  return isFormulaErrorToken(faiIn8371)
    ? faiIn8371
    : faiIn8371 instanceof Error
      ? faiH.VALUE_TOKEN
      : faiIn8371 == null
        ? null
        : typeof faiIn8371 == "number" && Number.isFinite(faiIn8371)
          ? faiIn8371
          : null;
}
export function averageIf(faiIn4376: any, faiIn4377: any, faiIn4378: any) {
  let faiBind13534 = flattenSingleCellArg(faiIn4376),
    faiBind13535 = faiIn4378 ? flattenSingleCellArg(faiIn4378) : faiBind13534,
    faiBind13536 = Math.min(faiBind13534.length, faiBind13535.length);
  if (faiBind13536 === 0) return faiH.DIV0_TOKEN;
  let faiBind13537 = 0,
    faiBind13538 = 0;
  for (let faiBind17607 = 0; faiBind17607 < faiBind13536; faiBind17607 += 1) {
    let faiBind18474 = evalAverageIfPredicate(
      faiBind13534[faiBind17607] ?? null,
      faiIn4377,
    );
    if (faiBind18474 === false) continue;
    if (faiBind18474 !== true) return faiBind18474;
    let faiBind18475 = coerceAverageIfNumeric(
      faiBind13535[faiBind17607] ?? null,
    );
    if (faiBind18475 !== null) {
      if (isFormulaErrorToken(faiBind18475)) return faiBind18475;
      faiBind13537 += faiBind18475;
      faiBind13538 += 1;
    }
  }
  return faiBind13538 === 0 ? faiH.DIV0_TOKEN : faiBind13537 / faiBind13538;
}

/** Legacy aliases (wave-123). */
export const p4e = coerceAverageIfCriteriaText;
export const m4e = evalAverageIfPredicate;
export const h4e = coerceAverageIfNumeric;
export const g4e = averageIf;
