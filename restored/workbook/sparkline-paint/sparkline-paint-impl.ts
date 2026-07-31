// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: sparkline paint dispatcher (legacy YCe).
// Stage-3 wave-101.

import { spkH } from "./boundary-hooks";

void spkH;

export function paintSparkline(spkIn1073: any, spkIn1074: any, spkIn1075: any, spkIn1076: any, ) {
  let spkBind6398 = spkIn1075.x + spkH.plotInset,
    spkBind6399 = spkIn1075.y + spkH.plotInset,
    spkBind6400 = spkIn1075.width - spkH.plotInset * 2,
    spkBind6401 = spkIn1075.height - spkH.plotInset * 2;
  if (
    spkBind6400 <= 0 ||
    spkBind6401 <= 0 ||
    spkIn1074.values.length === 0
  )
    return;
  let spkBind6402 = spkIn1074.domain.min,
    spkBind6403 = spkIn1074.domain.max;
  if (
    !Number.isFinite(spkBind6402) ||
    !Number.isFinite(spkBind6403)
  )
    return;
  let spkBind6404 = spkBind6403 - spkBind6402;
  if (!Number.isFinite(spkBind6404) || spkBind6404 === 0)
    return;
  let spkBind6405 = spkH.resolveColor(
      spkIn1074.colors.series,
      spkIn1076,
      spkH.defaultSeriesColor,
    ),
    spkBind6406 = spkH.resolveColor(
      spkIn1074.colors.negative,
      spkIn1076,
      spkBind6405,
    ),
    spkBind6407 = spkH.resolveColor(
      spkIn1074.colors.axis,
      spkIn1076,
      spkH.defaultAxisColor,
    ),
    spkBind6408 = spkH.resolveColor(
      spkIn1074.colors.markers,
      spkIn1076,
      spkBind6405,
    ),
    spkBind6409 = spkH.resolveColor(
      spkIn1074.colors.first,
      spkIn1076,
      spkBind6408,
    ),
    spkBind6410 = spkH.resolveColor(
      spkIn1074.colors.last,
      spkIn1076,
      spkBind6408,
    ),
    spkBind6411 = spkH.resolveColor(
      spkIn1074.colors.high,
      spkIn1076,
      spkBind6408,
    ),
    spkBind6412 = spkH.resolveColor(
      spkIn1074.colors.low,
      spkIn1076,
      spkBind6408,
    ),
    spkBind6413 = (spkIn15827) =>
      spkBind6399 +
      spkBind6401 -
      ((spkIn15827 - spkBind6402) / spkBind6404) *
        spkBind6401,
    spkBind6414 = spkH.clamp(
      spkBind6413(0),
      spkBind6399,
      spkBind6399 + spkBind6401,
    );
  switch (spkIn1074.type) {
    case "column":
    case "stacked":
      spkH.paintColumnSparkline(
        spkIn1073,
        spkIn1074,
        {
          plotX: spkBind6398,
          plotY: spkBind6399,
          plotW: spkBind6400,
          plotH: spkBind6401,
          baseline: spkBind6414,
        },
        {
          seriesColor: spkBind6405,
          negativeColor: spkBind6406,
          axisColor: spkBind6407,
        },
        spkBind6413,
      );
      break;
    default:
      spkH.paintLineSparkline(
        spkIn1073,
        spkIn1074,
        {
          plotX: spkBind6398,
          plotY: spkBind6399,
          plotW: spkBind6400,
          plotH: spkBind6401,
          baseline: spkBind6414,
        },
        {
          seriesColor: spkBind6405,
          negativeColor: spkBind6406,
          axisColor: spkBind6407,
          markersColor: spkBind6408,
          firstMarkerColor: spkBind6409,
          lastMarkerColor: spkBind6410,
          highMarkerColor: spkBind6411,
          lowMarkerColor: spkBind6412,
        },
        spkBind6413,
      );
  }
}

/** Legacy alias. */
export const YCe = paintSparkline;
