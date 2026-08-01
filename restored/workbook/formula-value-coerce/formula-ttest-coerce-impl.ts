// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: positive-int coerce + T.TEST wrapper (legacy 904–907/t4e/a6e).
// Stage-3 wave-133 — Binding1879/1876 as local error tokens.

import { O3e } from "./formula-trunc-coerce-impl";
import { workbookHelper912 } from "../formula-skew";
import { averageArgs } from "../formula-scalar-funcs";

export const ERR_VALUE = { kind: "Error", code: "#VALUE!" } as const;
export const ERR_NUM = { kind: "Error", code: "#NUM!" } as const;

export function coerceFormulaNumberOrValueError(fvcIn9052: any) {
  if (fvcIn9052 === undefined) return ERR_VALUE;
  let fvcBind19616 = O3e(fvcIn9052);
  if (fvcBind19616 === undefined) return ERR_VALUE;
  let fvcBind19617 = workbookHelper912(fvcBind19616);
  return typeof fvcBind19617 == "number"
    ? fvcBind19617
    : fvcBind19617 === null
      ? ERR_VALUE
      : fvcBind19617;
}
export function workbookHelper905(fvcIn12216: any) {
  let fvcBind22326 = coerceFormulaNumberOrValueError(fvcIn12216);
  return typeof fvcBind22326 == "number" && fvcBind22326 < 0
    ? ERR_NUM
    : fvcBind22326;
}
export function workbookHelper906(fvcIn12154: any) {
  let fvcBind22305 = coerceFormulaNumberOrValueError(fvcIn12154);
  return typeof fvcBind22305 == "number" && fvcBind22305 <= 0
    ? ERR_NUM
    : fvcBind22305;
}
export function t4e(fvcIn5798: any, fvcIn5799: any) {
  let fvcBind15710 = coerceFormulaNumberOrValueError(fvcIn5798);
  if (typeof fvcBind15710 != "number") return fvcBind15710;
  let fvcBind15711 = Math.trunc(fvcBind15710);
  return fvcBind15711 !== fvcBind15710 ||
    (!fvcIn5799.allowNegative && !fvcIn5799.allowZero && fvcBind15711 <= 0) ||
    (!fvcIn5799.allowNegative && fvcIn5799.allowZero && fvcBind15711 < 0) ||
    (fvcIn5799.min !== undefined && fvcBind15711 < fvcIn5799.min) ||
    (fvcIn5799.max !== undefined && fvcBind15711 > fvcIn5799.max)
    ? ERR_NUM
    : fvcBind15711;
}
export function workbookHelper907(fvcIn10550: any, fvcIn10551: any) {
  return t4e(fvcIn10550, {
    min: fvcIn10551?.min ?? 1,
    max: fvcIn10551?.max,
    allowZero: false,
    allowNegative: false,
  });
}
export function a6e(
  fvcIn8345: any,
  fvcIn8346: any,
  fvcIn8347: any,
  fvcIn8348: any,
) {
  let fvcBind18844 = workbookHelper907(fvcIn8347, {
    min: 1,
    max: 2,
  });
  if (typeof fvcBind18844 != "number") return fvcBind18844;
  let fvcBind18845 = workbookHelper907(fvcIn8348, {
    min: 1,
    max: 3,
  });
  return typeof fvcBind18845 == "number"
    ? averageArgs.TEST(fvcIn8345, fvcIn8346, fvcBind18844, fvcBind18845)
    : fvcBind18845;
}


export const coerceNonNegNumber = workbookHelper905;
export const coercePositiveNumber = workbookHelper906;
export const coerceIntInRange = t4e;
export const coercePositiveInt = workbookHelper907;
export const tTest = a6e;
/** Compat alias for barrels. */
export const workbookLegacy904 = coerceFormulaNumberOrValueError;
/** Compat alias for barrels. */
export const workbookFn904 = workbookLegacy904;
/** Compat alias for barrels. */
export const workbookFn905 = workbookHelper905;
/** Compat alias for barrels. */
export const workbookFn906 = workbookHelper906;
/** Compat alias for barrels. */
export const workbookFn907 = workbookHelper907;
