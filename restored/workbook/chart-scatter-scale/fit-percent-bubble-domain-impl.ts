// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: percent bubble-axis domain fit.
// Stage-3 wave-113.

const DEFAULT_BUBBLE_RADIUS = 6;
const BUBBLE_DOMAIN_DIVISOR = 5;

void DEFAULT_BUBBLE_RADIUS;
void BUBBLE_DOMAIN_DIVISOR;

export function scaledBubbleRadius(
  csscIn12253: any,
  csscIn12254: any,
  csscIn12255: any,
) {
  return csscIn12253 === undefined || csscIn12254 === undefined
    ? DEFAULT_BUBBLE_RADIUS * csscIn12255
    : csscIn12254(csscIn12253) * csscIn12255;
}
export function niceBubbleExtentStep(csscIn8633: any) {
  if (!Number.isFinite(csscIn8633) || csscIn8633 <= 0) return 1;
  let csscBind19133 = 10 ** Math.floor(Math.log10(csscIn8633)),
    csscBind19134 = csscIn8633 / csscBind19133;
  return csscBind19134 < 1.5
    ? csscBind19133
    : csscBind19134 < 3
      ? 2 * csscBind19133
      : csscBind19134 < 7
        ? 5 * csscBind19133
        : 10 * csscBind19133;
}
export function fitPercentBubbleDomain({
  axis,
  extent,
  points,
  value,
  radiusScale,
  scaleMultiplier,
  rangeSpan,
}: any) {
  if (
    axis?.min !== undefined ||
    axis?.max !== undefined ||
    axis?.majorUnit !== undefined ||
    !axis?.numberFormatCode?.includes("%") ||
    rangeSpan <= 0
  )
    return;
  let csscBind11136 = extent[1] - extent[0];
  if (!Number.isFinite(csscBind11136) || csscBind11136 <= 0) return;
  let csscBind11137 = 1 / 0,
    csscBind11138 = -1 / 0;
  for (let csscBind20681 of points) {
    let csscBind21223 = value(csscBind20681),
      csscBind21224 =
        (scaledBubbleRadius(csscBind20681.size, radiusScale, scaleMultiplier) /
          rangeSpan) *
        csscBind11136;
    csscBind11137 = Math.min(csscBind11137, csscBind21223 - csscBind21224);
    csscBind11138 = Math.max(csscBind11138, csscBind21223 + csscBind21224);
  }
  if (!(!Number.isFinite(csscBind11137) || !Number.isFinite(csscBind11138)))
    return niceBubbleExtentStep(
      (csscBind11138 - csscBind11137) / BUBBLE_DOMAIN_DIVISOR,
    );
}

export const Dxe = niceBubbleExtentStep;
export const Oxe = fitPercentBubbleDomain;
