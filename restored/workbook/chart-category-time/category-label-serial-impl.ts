// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: date-axis label format + Excel serial date helpers
// (legacy workbookHelper444/446/451/452 + Binding874/875/876).
// Stage-3 wave-137.

import { toEsm } from "../../runtime/rolldown-runtime";
import workbookSsf from "../../vendor/ssf";
import { Gn } from "../presentation-protobuf";

const ssfEsm = toEsm(workbookSsf);
/** Excel 1900-date system epoch (UTC 1899-12-30). Legacy Binding875. */
const EXCEL_EPOCH_UTC_MS = Date.UTC(1899, 11, 30);
/** Milliseconds per day. Legacy Binding876. */
const MS_PER_DAY = 86400000;

export function workbookHelper444(cctIn14019: any) {
  return cctIn14019?.kind === Gn.AXIS_KIND_DATE;
}
export function workbookHelper446(cctIn7743: any, cctIn7744: any) {
  if (!workbookHelper444(cctIn7744)) return cctIn7743;
  let cctBind18229 = Number(cctIn7743);
  if (!Number.isFinite(cctBind18229) || !cctIn7744?.numberFormatCode)
    return cctIn7743;
  try {
    return ssfEsm.default.format(cctIn7744.numberFormatCode, cctBind18229);
  } catch {
    return cctIn7743;
  }
}
export function workbookHelper451(cctIn14813: any) {
  return new Date(EXCEL_EPOCH_UTC_MS + cctIn14813 * MS_PER_DAY);
}
export function workbookHelper452(cctIn14613: any) {
  return (cctIn14613.getTime() - EXCEL_EPOCH_UTC_MS) / MS_PER_DAY;
}
