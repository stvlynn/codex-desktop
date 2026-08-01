// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: unspecified color / empty fill checks (bh574/iCe).
// Stage-3 wave-126.

import { Zn, dr, tr } from "../presentation-protobuf";

export function isUnspecifiedColor(fempIn12887: any) {
  return fempIn12887
    ? fempIn12887.type === Zn.COLOR_TYPE_UNSPECIFIED
    : true;
}
export function isEmptyFill(fempIn2492: any) {
  if (!fempIn2492) return false;
  if (Object.keys(fempIn2492).length === 0) return true;
  if (fempIn2492.type !== tr.FILL_TYPE_UNSPECIFIED) return false;
  let fempBind9815 = (fempIn2492.gradientStops?.length ?? 0) > 0,
    fempBind9816 = !isUnspecifiedColor(fempIn2492.color),
    fempBind9817 =
      fempIn2492.pattern !== undefined &&
      (fempIn2492.pattern.patternType !== dr.PATTERN_TYPE_UNSPECIFIED ||
        !isUnspecifiedColor(fempIn2492.pattern.color)),
    fempBind9818 = fempIn2492.imageReference !== undefined,
    fempBind9819 = fempIn2492.relId !== undefined,
    fempBind9820 =
      fempIn2492.gradientKind !== undefined ||
      fempIn2492.angleDeg !== undefined ||
      fempIn2492.pathType !== undefined,
    fempBind9821 =
      fempIn2492.fillRect !== undefined ||
      fempIn2492.stretchFillRect !== undefined ||
      fempIn2492.srcRect !== undefined,
    fempBind9822 =
      fempIn2492.pictureEffects !== undefined &&
      fempIn2492.pictureEffects.length > 0;
  return (
    !fempBind9815 &&
    !fempBind9816 &&
    !fempBind9817 &&
    !fempBind9818 &&
    !fempBind9819 &&
    !fempBind9820 &&
    !fempBind9821 &&
    !fempBind9822
  );
}

/** Legacy aliases (wave-126). */
export const iCe = isEmptyFill;
