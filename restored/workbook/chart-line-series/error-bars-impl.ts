// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: chart error-bar magnitude + paint.
// Stage-3 wave-111.

import { An } from "../presentation-protobuf";
import { clnH } from "./boundary-hooks";

void An;
void clnH;

export function meanFinite(clnIn11864: any) {
  return clnIn11864.length === 0
    ? 0
    : clnIn11864.reduce((accumulator, current) => accumulator + current, 0) /
        clnIn11864.length;
}
export function sampleStdDev(clnIn9007: any) {
  if (clnIn9007.length < 2) return 0;
  let clnBind19555 = meanFinite(clnIn9007),
    clnBind19556 =
      clnIn9007.reduce(
        (accumulator, current) =>
          accumulator + (current - clnBind19555) * (current - clnBind19555),
        0,
      ) /
      (clnIn9007.length - 1);
  return Math.sqrt(Math.max(0, clnBind19556));
}
export function errorBarMagnitude(
  clnIn4109: any,
  clnIn4110: any,
  clnIn4111: any,
) {
  if (clnIn4109.valueType === An.ERROR_BAR_VALUE_TYPE_PERCENTAGE)
    return (
      ((typeof clnIn4109.value == "number" && Number.isFinite(clnIn4109.value)
        ? clnIn4109.value
        : 10) /
        100) *
      Math.abs(clnIn4111)
    );
  if (clnIn4109.valueType === An.ERROR_BAR_VALUE_TYPE_STANDARD_DEVIATION)
    return sampleStdDev(clnIn4110);
  if (clnIn4109.valueType === An.ERROR_BAR_VALUE_TYPE_STANDARD_ERROR) {
    let clnBind22421 = sampleStdDev(clnIn4110);
    return clnIn4110.length > 0
      ? clnBind22421 / Math.sqrt(clnIn4110.length)
      : 0;
  }
  return 0;
}
export function paintErrorBars(
  clnIn2271: any,
  clnIn2272: any,
  clnIn2273: any,
  clnIn2274: any,
  clnIn2275: any,
  clnIn2276: any,
) {
  let clnBind9335 = clnIn2272.errorBars?.[0];
  if (!clnBind9335 || clnIn2275.length === 0) return;
  let clnBind9336 = clnIn2275
    .map((item) => item.value)
    .filter((item) => Number.isFinite(item));
  if (clnBind9336.length === 0) return;
  clnIn2271.save();
  clnH.bh433(clnIn2271, clnBind9335.stroke, clnIn2274, {
    color: "#666666",
    widthPx: 1,
  });
  let clnBind9337 = clnBind9335.noEndCap !== true;
  clnIn2275.forEach((item) => {
    let clnBind12838 = errorBarMagnitude(clnBind9335, clnBind9336, item.value);
    if (!Number.isFinite(clnBind12838) || clnBind12838 <= 0) return;
    let clnBind12839 = clnIn2276.y(item.value + clnBind12838),
      clnBind12840 = clnIn2276.y(item.value - clnBind12838);
    !Number.isFinite(clnBind12839) ||
      !Number.isFinite(clnBind12840) ||
      (clnIn2271.beginPath(),
      clnIn2271.moveTo(item.x, clnBind12839),
      clnIn2271.lineTo(item.x, clnBind12840),
      clnIn2271.stroke(),
      clnBind9337 &&
        (clnIn2271.beginPath(),
        clnIn2271.moveTo(item.x - 5, clnBind12839),
        clnIn2271.lineTo(item.x + 5, clnBind12839),
        clnIn2271.moveTo(item.x - 5, clnBind12840),
        clnIn2271.lineTo(item.x + 5, clnBind12840),
        clnIn2271.stroke()));
  });
  clnIn2271.restore();
}

export const dxe = meanFinite;
export const workbookHelper526 = sampleStdDev;
export const fxe = errorBarMagnitude;
export const workbookHelper527 = paintErrorBars;
