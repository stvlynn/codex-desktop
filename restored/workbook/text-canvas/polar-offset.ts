// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-21: fixed-angle polar offset (legacy polar-offset / angle-units init).

import { esmInit } from "../../runtime/rolldown-runtime";
export function polarOffsetFromDirection(tcIn7028: unknown, tcIn7029: unknown) {
  let tcBind17382 = Number.isFinite(tcIn7029) ? tcIn7029 : 0;
  if (tcBind17382 === 0)
    return {
      x: 0,
      y: 0,
    };
  let tcBind17383 =
    (((typeof tcIn7028 == "number" && Number.isFinite(tcIn7028)
      ? tcIn7028
      : 0) /
      FIXED_ANGLE_DIVISOR) *
      Math.PI) /
    180;
  return {
    x: tcBind17382 * Math.cos(tcBind17383),
    y: tcBind17382 * Math.sin(tcBind17383),
  };
}
let FIXED_ANGLE_DIVISOR: number;
export { FIXED_ANGLE_DIVISOR };
export const ensureAngleUnitsInit = esmInit(() => {
  FIXED_ANGLE_DIVISOR = 6e4;
});
