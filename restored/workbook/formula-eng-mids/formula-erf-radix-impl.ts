// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: ERF/ERFC/EQ/GE + BIN2DEC/HEX2DEC/OCT2DEC + complex reciprocal (legacy T1e…s0e).
// Stage-3 wave-140.

import { flattenMatrixArgs, hasFormulaError } from "../formula-token-utils";
import {
  complexReal,
  $4,
  complexDivide,
  workbookHelper894,
} from "../formula-complex";
import { workbookHelper885 } from "./formula-radix-impl";
import { $1e } from "./formula-eng-mids-impl";
import {
  workbookBinding1831,
  workbookBinding1835,
  workbookBinding1838,
} from "../formula-stats";

export function T1e(props: any) {
  if (!workbookHelper885(props)) return workbookBinding1838;
  let femBind18941 = parseInt(props, 2),
    n = props.toString();
  return n.length === 10 && n.substring(0, 1) === "1"
    ? parseInt(n.substring(1), 2) - 512
    : femBind18941;
}
export function L1e(femIn10362: any, femIn10363: any) {
  return (
    (femIn10363 = femIn10363 === undefined ? 0 : femIn10363),
    (femIn10362 = flattenMatrixArgs(femIn10362)),
    (femIn10363 = flattenMatrixArgs(femIn10363)),
    hasFormulaError(femIn10362, femIn10363)
      ? workbookBinding1835
      : +(femIn10362 === femIn10363)
  );
}
export function workbookHelper887(femIn10229: any, femIn10230: any) {
  return (
    (femIn10230 = femIn10230 === undefined ? 0 : femIn10230),
    (femIn10229 = flattenMatrixArgs(femIn10229)),
    (femIn10230 = flattenMatrixArgs(femIn10230)),
    hasFormulaError(femIn10229, femIn10230)
      ? workbookBinding1835
      : workbookBinding1831.default.erf(femIn10229)
  );
}
export function workbookHelper888(femIn13752: any) {
  return isNaN(femIn13752)
    ? workbookBinding1835
    : workbookBinding1831.default.erfc(femIn13752);
}
export function R1e(femIn12383: any, femIn12384: any) {
  return (
    (femIn12384 ||= 0),
    (femIn12383 = flattenMatrixArgs(femIn12383)),
    hasFormulaError(femIn12384, femIn12383)
      ? femIn12383
      : +(femIn12383 >= femIn12384)
  );
}
export function B1e(femIn9862: any) {
  if (!/^[0-9A-Fa-f]{1,10}$/.test(femIn9862)) return workbookBinding1838;
  let femBind20407 = parseInt(femIn9862, 16);
  return femBind20407 >= 549755813888
    ? femBind20407 - 1099511627776
    : femBind20407;
}
export function t0e(femIn11710: any) {
  return femIn11710 === true || femIn11710 === false
    ? workbookBinding1835
    : hasFormulaError(complexReal(femIn11710), $4(femIn11710))
      ? workbookBinding1838
      : complexDivide("1", workbookHelper894(femIn11710));
}
export function n0e(femIn11652: any) {
  return femIn11652 === true || femIn11652 === false
    ? workbookBinding1835
    : hasFormulaError(complexReal(femIn11652), $4(femIn11652))
      ? workbookBinding1838
      : complexDivide("1", $1e(femIn11652));
}
export function s0e(femIn10313: any) {
  if (!/^[0-7]{1,10}$/.test(femIn10313)) return workbookBinding1838;
  let femBind20785 = parseInt(femIn10313, 8);
  return femBind20785 >= 536870912 ? femBind20785 - 1073741824 : femBind20785;
}
/** Compat alias for barrels. */
export const workbookFn887 = workbookHelper887;
/** Compat alias for barrels. */
export const workbookFn888 = workbookHelper888;
