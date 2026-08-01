// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Excel SKEW + numeric sample flatten (legacy W4e/s4e).
// Stage-3 wave-124. Preferred W4e+s4e nest; owns c4e/workbookHelper912.

import { isArrayValue } from "../formula-array";
import { fskH } from "./boundary-hooks";

export function collectNumericSamples(fskIn4119: any) {
  let fskBind13096 = [];
  for (let fskBind13988 of fskIn4119) {
    if (fskBind13988 === undefined) continue;
    if (Array.isArray(fskBind13988)) {
      let fskBind22554 = appendNumericSamples(fskBind13988, fskBind13096);
      if (fskBind22554) return fskBind22554;
      continue;
    }
    let fskBind14321 = fskBind13988;
    if (isArrayValue(fskBind14321)) {
      let fskBind22444 = appendNumericSamples(
        fskBind14321.values,
        fskBind13096,
      );
      if (fskBind22444) return fskBind22444;
      continue;
    }
    let fskBind14322 = coerceSkewNumeric(fskBind14321);
    if (fskBind14322 !== null) {
      if (typeof fskBind14322 == "number") {
        fskBind13096.push(fskBind14322);
        continue;
      }
      return fskBind14322;
    }
  }
  return fskBind13096;
}
export function appendNumericSamples(fskIn6499: any, fskIn6500: any) {
  for (let fskBind17751 of fskIn6499)
    if (fskBind17751)
      for (let fskBind18730 of fskBind17751) {
        let fskBind19232 = coerceAverageACell(fskBind18730);
        if (fskBind19232 !== null) {
          if (typeof fskBind19232 == "number") {
            fskIn6500.push(fskBind19232);
            continue;
          }
          return fskBind19232;
        }
      }
  return null;
}
export function coerceSkewNumeric(fskIn5112: any) {
  if (fskIn5112 == null) return 0;
  if (isFormulaErrorToken(fskIn5112)) return fskIn5112;
  if (fskIn5112 instanceof Error) return fskBind1876;
  if (typeof fskIn5112 == "number")
    return Number.isFinite(fskIn5112) ? fskIn5112 : fskBind1876;
  if (typeof fskIn5112 == "boolean") return +!!fskIn5112;
  if (typeof fskIn5112 == "string") {
    let fskBind21281 = fskIn5112.trim();
    if (fskBind21281 === "") return 0;
    let fskBind21282 = Number(fskBind21281);
    return Number.isFinite(fskBind21282) ? fskBind21282 : fskBind1876;
  }
  return fskBind1876;
}
export function skew(fskIn3589: any, fskIn3590: any, ...fskIn3591: any[]) {
  let fskBind12109 = collectNumericSamples([
    fskIn3589,
    fskIn3590,
    ...fskIn3591,
  ]);
  if (!Array.isArray(fskBind12109)) return fskBind12109;
  let fskBind12110 = fskBind12109;
  if (fskBind12110.length < 3) return fskH.DIV0_TOKEN;
  let fskBind12111 =
      fskBind12110.reduce((accumulator, current) => accumulator + current, 0) /
      fskBind12110.length,
    fskBind12112 = 0,
    fskBind12113 = 0;
  for (let fskBind22428 of fskBind12110) {
    let fskBind22706 = fskBind22428 - fskBind12111;
    fskBind12112 += fskBind22706 * fskBind22706;
    fskBind12113 += fskBind22706 * fskBind22706 * fskBind22706;
  }
  if (fskBind12112 === 0) return fskH.DIV0_TOKEN;
  let fskBind12114 = fskBind12110.length,
    fskBind12115 = Math.sqrt(fskBind12112 / (fskBind12114 - 1));
  if (fskBind12115 === 0) return fskH.DIV0_TOKEN;
  let fskBind12116 =
    (fskBind12114 - 1) * (fskBind12114 - 2) * fskBind12115 ** 3;
  if (fskBind12116 === 0) return fskH.DIV0_TOKEN;
  let fskBind12117 = (fskBind12114 * fskBind12113) / fskBind12116;
  return Number.isFinite(fskBind12117) ? fskBind12117 : fskH.DIV0_TOKEN;
}

/** Legacy aliases (wave-124). */
export const s4e = collectNumericSamples;
export const c4e = appendNumericSamples;
export const workbookHelper912 = coerceSkewNumeric;
export const W4e = skew;
