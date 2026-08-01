// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: CF icon-set index + truthy coerce (legacy Lht/zht).
// Stage-3 wave-131.

import { isArrayValue } from "../formula-array";

export function Lht(ceIn6909: any, ceIn6910: any) {
  let ceBind17250 = 0;
  for (
    let ceBind19692 = ceIn6909.thresholds.length - 1;
    ceBind19692 >= 1;
    --ceBind19692
  ) {
    let ceBind21253 = ceIn6909.thresholds[ceBind19692];
    if (
      ceBind21253 &&
      (ceBind21253.gte
        ? ceIn6910 >= ceBind21253.value
        : ceIn6910 > ceBind21253.value)
    ) {
      ceBind17250 = ceBind19692;
      break;
    }
  }
  return ceIn6909.reverse ? ceIn6909.iconCount - 1 - ceBind17250 : ceBind17250;
}

export function zht(ceIn6800: any) {
  return ceIn6800 == null || isArrayValue(ceIn6800)
    ? false
    : typeof ceIn6800 == "boolean"
      ? ceIn6800
      : typeof ceIn6800 == "number"
        ? ceIn6800 !== 0
        : typeof ceIn6800 == "string"
          ? ceIn6800.trim().length > 0
          : (typeof ceIn6800 == "object" && "kind" in ceIn6800, false);
}

export const iconSetIndexForValue = Lht;
export const coerceCfTruthy = zht;
