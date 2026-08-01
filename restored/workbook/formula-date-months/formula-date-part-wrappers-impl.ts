// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: date part / compare wrappers (legacy Met / 937 / 938 / stt / ltt / dtt + l5e / d5e / g5e / J5e).
// Stage-3 wave-143.

import { workbookHelper931 as constructSerialDate } from "./date-construct-impl";
import { workbookHelper881 as networkDaysIntl } from "./networkdays-wrappers-impl";
import { yearFrac } from "../formula-yearfrac";
import { dateDif } from "../formula-datedif";
import { formatComplexPair } from "../formula-complex";

export function l5e(fdmIn15148: any, fdmIn15149: any, fdmIn15150: any) {
  return yearFrac(fdmIn15148, fdmIn15149, fdmIn15150);
}
export function d5e(fdmIn15151: any, fdmIn15152: any, fdmIn15153: any) {
  return networkDaysIntl(fdmIn15151, fdmIn15152, fdmIn15153);
}
export function g5e(fdmIn15157: any, fdmIn15158: any, fdmIn15159: any) {
  return dateDif(fdmIn15157, fdmIn15158, fdmIn15159);
}
export function J5e(fdmIn15160: any, fdmIn15161: any, fdmIn15162: any) {
  return formatComplexPair(fdmIn15160, fdmIn15161, fdmIn15162);
}
export function Met(fdmIn14333: any, fdmIn14334: any) {
  return constructSerialDate(fdmIn14333, fdmIn14334?.in).getDate();
}
/** Legacy workbookHelper937. */
export function getSerialMonth(fdmIn14335: any, fdmIn14336: any) {
  return constructSerialDate(fdmIn14335, fdmIn14336?.in).getMonth();
}
/** Legacy workbookHelper938. */
export function getSerialYear(fdmIn14119: any, fdmIn14120: any) {
  return constructSerialDate(fdmIn14119, fdmIn14120?.in).getFullYear();
}
export function stt(fdmIn15029: any, fdmIn15030: any) {
  return +constructSerialDate(fdmIn15029) > +constructSerialDate(fdmIn15030);
}
export function ltt(fdmIn15031: any, fdmIn15032: any) {
  return +constructSerialDate(fdmIn15031) < +constructSerialDate(fdmIn15032);
}
export function dtt(fdmIn14922: any, fdmIn14923: any) {
  return +constructSerialDate(fdmIn14922) == +constructSerialDate(fdmIn14923);
}

export {
  getSerialMonth as workbookHelper937,
  getSerialYear as workbookHelper938,
};
/** Compat alias for barrels. */
export const workbookFn937 = workbookHelper937;
/** Compat alias for barrels. */
export const workbookFn938 = workbookHelper938;
