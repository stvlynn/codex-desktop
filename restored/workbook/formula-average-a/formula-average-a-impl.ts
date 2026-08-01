// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Excel AVERAGEA + formula error-token helpers ($3/Q2e/l4e/_4e).
// Stage-3 wave-122. Owns Q2e/l4e for preferred _4e peel.

import { isArrayValue } from "../formula-array";
import { faaH } from "./boundary-hooks";

export function isFormulaErrorToken(faaIn12581: any) {
  return (
    typeof faaIn12581 == "object" && !!faaIn12581 && faaIn12581.kind === "Error"
  );
}
export function formulaErrorFromMessage(props: any) {
  let faaBind22031 = props.message?.trim();
  return faaBind22031
    ? {
        kind: "Error",
        code: faaBind22031,
      }
    : faaH.VALUE_TOKEN;
}
export function coerceAverageACell(faaIn5305: any) {
  return faaIn5305 == null
    ? null
    : isFormulaErrorToken(faaIn5305)
      ? faaIn5305
      : faaIn5305 instanceof Error
        ? faaH.VALUE_TOKEN
        : typeof faaIn5305 == "number"
          ? Number.isFinite(faaIn5305)
            ? faaIn5305
            : faaH.VALUE_TOKEN
          : typeof faaIn5305 == "string"
            ? (faaIn5305.trim(), null)
            : typeof faaIn5305 == "boolean"
              ? null
              : (isArrayValue(faaIn5305), faaH.VALUE_TOKEN);
}
export function averageA(faaIn1795: any, faaIn1796: any, ...faaIn1797: any[]) {
  let faaBind8321 = [faaIn1795, faaIn1796, ...faaIn1797].filter(
      (item) => item !== undefined,
    ),
    faaBind8322 = 0,
    faaBind8323 = 0,
    faaBind8324 = [];
  for (let faaBind10415 of faaBind8321) {
    if (Array.isArray(faaBind10415)) {
      for (let faaBind18323 of faaBind10415)
        if (faaBind18323)
          for (let faaBind19572 of faaBind18323) {
            let faaBind20104 = coerceAverageACell(faaBind19572);
            if (faaBind20104 !== null) {
              if (isFormulaErrorToken(faaBind20104)) return faaBind20104;
              faaBind8322 += faaBind20104;
              faaBind8323 += 1;
            }
          }
      continue;
    }
    let faaBind10624 = faaBind10415 ?? null;
    if ((faaBind8324.push(faaBind10624), isFormulaErrorToken(faaBind10624)))
      return faaBind10624;
    if (faaBind10624 instanceof Error)
      return formulaErrorFromMessage(faaBind10624);
    if (typeof faaBind10624 == "number") {
      Number.isFinite(faaBind10624) &&
        ((faaBind8322 += faaBind10624), (faaBind8323 += 1));
      continue;
    }
    if (typeof faaBind10624 == "boolean") {
      faaBind8322 += +!!faaBind10624;
      faaBind8323 += 1;
      continue;
    }
    if (typeof faaBind10624 == "string") {
      if (!faaBind10624.trim()) continue;
      continue;
    }
  }
  return faaBind8323 === 0
    ? faaBind8324.length === faaBind8321.length &&
      faaBind8324.length > 0 &&
      faaBind8324.every((item) => item === "" || item === null)
      ? 0
      : faaH.DIV0_TOKEN
    : faaBind8322 / faaBind8323;
}

/** Legacy aliases (wave-122). */
export const $3 = isFormulaErrorToken;
export const Q2e = formulaErrorFromMessage;
export const l4e = coerceAverageACell;
export const _4e = averageA;
