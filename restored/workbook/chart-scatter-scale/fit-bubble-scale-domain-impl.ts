// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: bubble scale domain fit (legacy helper539).
// Stage-3 wave-107.

import { csscH } from "./boundary-hooks";

void csscH;

export function fitBubbleScaleDomain({
  scale,
  axis,
  points,
  value,
  radiusScale,
  scaleMultiplier,
}: any) {
  if (axis?.logBase !== undefined) return;
  let csscBind7702 = csscH.bh399(scale),
    csscBind7703 = axis?.min === undefined,
    csscBind7704 = axis?.max === undefined,
    [csscBind7705, csscBind7706] = scale.range();
  if (csscBind7705 === undefined || csscBind7706 === undefined)
    throw Error("Expected a two-value bubble scale range");
  let csscBind7707 = Math.abs(csscBind7706 - csscBind7705);
  if (
    !(
      csscBind7702 === undefined ||
      !Number.isFinite(csscBind7702) ||
      csscBind7702 <= 0 ||
      csscBind7707 <= 0 ||
      (!csscBind7703 && !csscBind7704)
    )
  )
    for (;;) {
      let [csscBind11311, csscBind11312] = scale.domain();
      if (csscBind11311 === undefined || csscBind11312 === undefined)
        throw Error("Expected a two-value bubble scale domain");
      let csscBind11313 = Math.min(csscBind11311, csscBind11312),
        csscBind11314 = Math.max(csscBind11311, csscBind11312),
        csscBind11315 = csscBind11314 - csscBind11313;
      if (csscBind11315 <= 0) return;
      let csscBind11316 = false,
        csscBind11317 = false;
      for (let csscBind19557 of points) {
        let csscBind20093 = value(csscBind19557),
          csscBind20094 =
            csscH.bh534(csscBind19557.size, radiusScale, scaleMultiplier) /
            csscBind7707,
          csscBind20095 = (csscBind20093 - csscBind11313) / csscBind11315;
        csscBind7703 && csscBind20095 < csscBind20094 && (csscBind11316 = true);
        csscBind7704 &&
          1 - csscBind20095 < csscBind20094 &&
          (csscBind11317 = true);
      }
      if (!csscBind11316 && !csscBind11317) return;
      let csscBind11318 = csscBind11313;
      csscBind11316 && (csscBind11318 -= csscBind7702);
      let csscBind11319 = csscBind11314;
      csscBind11317 && (csscBind11319 += csscBind7702);
      scale.domain([csscBind11318, csscBind11319]);
    }
}

/** Legacy alias. */
export const workbookHelper539 = fitBubbleScaleDomain;
