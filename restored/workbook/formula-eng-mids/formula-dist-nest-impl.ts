// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: T_DIST/QUARTILE/F/CHISQ nest + aliases (legacy T3e…Q3e).
// Stage-3 wave-138.

import {
  D3e,
  coerceFormulaNumberOrValueError,
  coerceNonNegNumber,
  coerceUnitInterval,
  coercePositiveBoundedInt,
} from "../formula-value-coerce";
import { isFormulaErrorToken } from "../formula-average-a";
import { averageArgs } from "../formula-scalar-funcs";
import {
  workbookBinding1851,
  workbookBinding1861,
  workbookBinding1863,
  workbookBinding1865,
  workbookBinding1866,
  workbookBinding1867,
  workbookBinding1872,
  workbookBinding1873,
  q2e,
  w2e,
  E2e,
  P2e,
} from "../formula-stats";
import { coerceFiniteNumbers } from "./formula-eng-mids-impl";
import { n4e, callWithDefinedArgs } from "./formula-series-utils-impl";

export function T3e(femIn9689: any, femIn9690: any, femIn9691: any) {
  let femBind20213 = n4e(femIn9689);
  if (typeof femBind20213 != "number") return femBind20213;
  let femBind20214 = coerceNonNegNumber(femIn9690);
  return typeof femBind20214 == "number"
    ? workbookBinding1863.DIST(femBind20213, femBind20214, femIn9691)
    : femBind20214;
}
export function E3e(femIn8224: any, femIn8225: any) {
  let femBind18731 = coerceFiniteNumbers(femIn8224);
  if (isFormulaErrorToken(femBind18731)) return femBind18731;
  let femBind18732 = D3e(femIn8225);
  return typeof femBind18732 == "number"
    ? femBind18732 < 1 || femBind18732 > 3
      ? {
          kind: "Error",
          code: "#NUM!",
        }
      : workbookBinding1861.EXC(femBind18731, femBind18732 / 4)
    : femBind18732;
}
export function workbookHelper918(femIn8243: any, femIn8244: any) {
  let femBind18757 = coerceFiniteNumbers(femIn8243);
  if (isFormulaErrorToken(femBind18757)) return femBind18757;
  let femBind18758 = D3e(femIn8244);
  return typeof femBind18758 == "number"
    ? femBind18758 < 0 || femBind18758 > 4
      ? {
          kind: "Error",
          code: "#NUM!",
        }
      : workbookBinding1861.INC(femBind18757, femBind18758 / 4)
    : femBind18758;
}
export function k3e(femIn15507: any, femIn15508: any) {
  return workbookHelper918(femIn15507, femIn15508);
}
export function A3e(femIn14750: any, femIn14751: any, femIn14752: any) {
  return workbookBinding1865.AVG(femIn14750, femIn14751, femIn14752);
}
export function j3e(femIn14840: any, femIn14841: any, femIn14842: any) {
  return workbookBinding1865.EQ(femIn14840, femIn14841, femIn14842);
}
export function workbookHelper919(
  femIn14096: any,
  femIn14097: any,
  ...femIn14098: any[]
) {
  return callWithDefinedArgs(
    workbookBinding1866.S,
    femIn14096,
    femIn14097,
    ...femIn14098,
  );
}
export function M3e(femIn14572: any, femIn14573: any, ...femIn14574: any[]) {
  return workbookHelper919(femIn14572, femIn14573, ...femIn14574);
}
export function N3e(femIn13963: any, femIn13964: any, ...femIn13965: any[]) {
  return callWithDefinedArgs(
    workbookBinding1866.P,
    femIn13963,
    femIn13964,
    ...femIn13965,
  );
}
export function P3e(femIn14420: any, femIn14421: any, ...femIn14422: any[]) {
  return N3e(femIn14420, femIn14421, ...femIn14422);
}
export function F3e(femIn9718: any, femIn9719: any, femIn9720: any) {
  let femBind20240 = coerceFormulaNumberOrValueError(femIn9718);
  if (typeof femBind20240 != "number") return femBind20240;
  let femBind20241 = coercePositiveBoundedInt(femIn9719);
  return typeof femBind20241 == "number"
    ? averageArgs.DIST(femBind20240, femBind20241, femIn9720)
    : femBind20241;
}
export function I3e(femIn9950: any, femIn9951: any) {
  let femBind20470 = coerceFormulaNumberOrValueError(femIn9950);
  if (typeof femBind20470 != "number") return femBind20470;
  let femBind20471 = coercePositiveBoundedInt(femIn9951);
  return typeof femBind20471 == "number"
    ? workbookBinding1872._2T(femBind20470, femBind20471)
    : femBind20471;
}
export function L3e(femIn10061: any, femIn10062: any) {
  let femBind20549 = coerceFormulaNumberOrValueError(femIn10061);
  if (typeof femBind20549 != "number") return femBind20549;
  let femBind20550 = coercePositiveBoundedInt(femIn10062);
  return typeof femBind20550 == "number"
    ? q2e(femBind20549, femBind20550)
    : femBind20550;
}
export function R3e(femIn8702: any, femIn8703: any) {
  let femBind19208 = coerceUnitInterval(femIn8702, {
    inclusiveZero: false,
    inclusiveOne: false,
  });
  if (typeof femBind19208 != "number") return femBind19208;
  let femBind19209 = coercePositiveBoundedInt(femIn8703);
  return typeof femBind19209 == "number"
    ? averageArgs.INV(femBind19208, femBind19209)
    : femBind19209;
}
export function z3e(femIn7990: any, femIn7991: any) {
  let femBind18476 = coerceUnitInterval(femIn7990, {
    inclusiveZero: false,
    inclusiveOne: false,
  });
  if (typeof femBind18476 != "number") return femBind18476;
  let femBind18477 = coercePositiveBoundedInt(femIn7991);
  if (typeof femBind18477 != "number") return femBind18477;
  let femBind18478 = workbookBinding1873._2T;
  return femBind18478(femBind18476, femBind18477);
}
export function B3e(femIn13966: any, femIn13967: any, ...femIn13968: any[]) {
  return callWithDefinedArgs(
    workbookBinding1867.S,
    femIn13966,
    femIn13967,
    ...femIn13968,
  );
}
export function V3e(femIn13969: any, femIn13970: any, ...femIn13971: any[]) {
  return callWithDefinedArgs(
    workbookBinding1867.P,
    femIn13969,
    femIn13970,
    ...femIn13971,
  );
}
export function G3e(femIn9721: any, femIn9722: any, femIn9723: any) {
  let femBind20242 = coerceNonNegNumber(femIn9721);
  if (typeof femBind20242 != "number") return femBind20242;
  let femBind20243 = coercePositiveBoundedInt(femIn9722);
  return typeof femBind20243 == "number"
    ? workbookBinding1851.DIST(femBind20242, femBind20243, femIn9723)
    : femBind20243;
}
export function K3e(femIn10063: any, femIn10064: any) {
  let femBind20551 = coerceNonNegNumber(femIn10063);
  if (typeof femBind20551 != "number") return femBind20551;
  let femBind20552 = coercePositiveBoundedInt(femIn10064);
  return typeof femBind20552 == "number"
    ? w2e(femBind20551, femBind20552)
    : femBind20552;
}
export function q3e(femIn9952: any, femIn9953: any) {
  let femBind20472 = coerceUnitInterval(femIn9952);
  if (typeof femBind20472 != "number") return femBind20472;
  let femBind20473 = coercePositiveBoundedInt(femIn9953);
  return typeof femBind20473 == "number"
    ? workbookBinding1851.INV(femBind20472, femBind20473)
    : femBind20473;
}
export function J3e(femIn10065: any, femIn10066: any) {
  let femBind20553 = coerceUnitInterval(femIn10065);
  if (typeof femBind20553 != "number") return femBind20553;
  let femBind20554 = coercePositiveBoundedInt(femIn10066);
  return typeof femBind20554 == "number"
    ? E2e(femBind20553, femBind20554)
    : femBind20554;
}
export function Q3e(femIn7166: any, femIn7167: any, femIn7168: any) {
  let femBind17514 = coerceUnitInterval(femIn7166, {
    inclusiveZero: false,
    inclusiveOne: false,
  });
  if (typeof femBind17514 != "number") return femBind17514;
  let femBind17515 = coercePositiveBoundedInt(femIn7167);
  if (typeof femBind17515 != "number") return femBind17515;
  let femBind17516 = coercePositiveBoundedInt(femIn7168);
  return typeof femBind17516 == "number"
    ? P2e(femBind17514, femBind17515, femBind17516)
    : femBind17516;
}
export function b6e(femIn14575: any, femIn14576: any, ...femIn14577: any[]) {
  return workbookHelper919(femIn14575, femIn14576, ...femIn14577);
}
export function x6e(femIn14423: any, femIn14424: any, ...femIn14425: any[]) {
  return B3e(femIn14423, femIn14424, ...femIn14425);
}
export function w6e(femIn14984: any, femIn14985: any, femIn14986: any) {
  return j3e(femIn14984, femIn14985, femIn14986);
}
export function n8e(femIn15514: any, femIn15515: any) {
  return workbookHelper918(femIn15514, femIn15515);
}
/** Compat alias for barrels. */
export const workbookFn918 = workbookHelper918;
/** Compat alias for barrels. */
export const workbookFn919 = workbookHelper919;

export const workbookHelper918 = workbookFn918;

export const workbookHelper919 = workbookFn919;
