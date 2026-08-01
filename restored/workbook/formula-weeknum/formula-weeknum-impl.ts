// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: WEEKNUM / ISO week (legacy y1e/u1e).
// Stage-3 wave-130.

import { coerceFormulaDate } from "../formula-token-utils";
import { toExcelDate } from "../formula-scalar-funcs";
import { v2e as weekStartByReturnType } from "../formula-stats";

export function isoWeekNumber(fwnIn7553: any) {
  if (((fwnIn7553 = coerceFormulaDate(fwnIn7553)), fwnIn7553 instanceof Error))
    return fwnIn7553;
  fwnIn7553 = toExcelDate(fwnIn7553);
  fwnIn7553.setDate(fwnIn7553.getDate() + 4 - (fwnIn7553.getDay() || 7));
  let fwnBind18034 = new Date(fwnIn7553.getFullYear(), 0, 1);
  return Math.ceil(((fwnIn7553 - fwnBind18034) / 864e5 + 1) / 7);
}
export function weekNumber(fwnIn5357: any, fwnIn5358: any) {
  if (((fwnIn5357 = coerceFormulaDate(fwnIn5357)), fwnIn5357 instanceof Error))
    return fwnIn5357;
  if ((fwnIn5358 === undefined && (fwnIn5358 = 1), fwnIn5358 === 21))
    return isoWeekNumber(fwnIn5357);
  let fwnBind15068 = weekStartByReturnType[fwnIn5358],
    fwnBind15069 = new Date(fwnIn5357.getFullYear(), 0, 1),
    fwnBind15070 = +(fwnBind15069.getDay() < fwnBind15068);
  return (
    (fwnBind15069 -=
      Math.abs(fwnBind15069.getDay() - fwnBind15068) * 24 * 60 * 60 * 1e3),
    Math.floor((fwnIn5357 - fwnBind15069) / 86400000 / 7 + 1) + fwnBind15070
  );
}

export const u1e = isoWeekNumber;
export const y1e = weekNumber;
