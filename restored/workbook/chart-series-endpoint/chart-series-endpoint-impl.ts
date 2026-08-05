// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: series endpoint line+marker paint (bh479/483).
// Stage-3 wave-126.

import { Bn } from "../presentation-protobuf";
import { paintAxisGridlineStroke } from "../chart-axis-ticks";
import { paintSeriesMarker } from "../chart-line-series";

const DEFAULT_MARKER_SIZE = 10;

export function seriesHasVisibleMarker(csepIn8684: any) {
  let csepBind19190 = csepIn8684.marker?.symbol;
  return (
    csepBind19190 !== undefined &&
    csepBind19190 !== Bn.MARKER_SYMBOL_NONE &&
    csepBind19190 !== Bn.MARKER_SYMBOL_UNSPECIFIED &&
    csepBind19190 !== Bn.UNRECOGNIZED
  );
}
export function paintSeriesEndpoint(
  csepIn4705: any,
  csepIn4706: any,
  csepIn4707: any,
  csepIn4708: any,
) {
  if (
    (csepIn4705.save(),
    (csepIn4705.globalAlpha = csepIn4708.opacity),
    csepIn4708.lineVisible &&
      (paintAxisGridlineStroke(csepIn4705, csepIn4706.stroke, csepIn4707, {
        color: csepIn4708.color,
        widthPx: csepIn4708.lineWidth,
      }),
      csepIn4705.beginPath(),
      csepIn4705.moveTo(csepIn4708.x, csepIn4708.y),
      csepIn4705.lineTo(csepIn4708.x + csepIn4708.width, csepIn4708.y),
      csepIn4705.stroke()),
    !seriesHasVisibleMarker(csepIn4706))
  ) {
    csepIn4705.restore();
    return;
  }
  paintSeriesMarker(
    csepIn4705,
    csepIn4706,
    csepIn4707,
    {
      x: csepIn4708.x + csepIn4708.width / 2,
      y: csepIn4708.y,
    },
    csepIn4708.color,
    DEFAULT_MARKER_SIZE,
  );
  csepIn4705.restore();
}

/** Legacy aliases (wave-126). */
