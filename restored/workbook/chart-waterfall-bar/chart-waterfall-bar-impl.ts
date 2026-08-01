// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: waterfall bar path/fill (legacy dCe).
// Stage-3 wave-100.

import { cwbH } from "./boundary-hooks";
import { workbookHelper575 } from "./waterfall-accent-color-impl";

void cwbH;

export function paintWaterfallBar(
  cwbIn1116: any,
  cwbIn1117: any,
  cwbIn1118: any,
  cwbIn1119: any,
  cwbIn1120: any,
  cwbIn1121: any,
  cwbIn1122: any,
  cwbIn1123: any,
) {
  let cwbBind6506 = cwbIn1120(cwbIn1117.start),
    cwbBind6507 = cwbIn1120(cwbIn1117.end),
    cwbBind6508 = Math.min(cwbBind6506, cwbBind6507),
    cwbBind6509 = Math.max(cwbBind6506, cwbBind6507),
    cwbBind6510 = Math.abs(cwbBind6507 - cwbBind6506);
  if (
    cwbBind6510 === 0 ||
    Number.isNaN(cwbBind6508) ||
    Number.isNaN(cwbBind6509)
  )
    return null;
  let cwbBind6511 = cwbIn1121.series[cwbIn1122];
  if (!cwbBind6511) return null;
  let cwbBind6512 = cwbH.pointFillOverride(cwbBind6511, cwbIn1117.index),
    cwbBind6513 = false,
    cwbBind6514;
  cwbBind6512?.fill &&
    (cwbBind6512.fill.color
      ? (cwbBind6514 = cwbH.bh463(cwbBind6512.fill.color, cwbIn1123))
      : (cwbBind6513 = true));
  !cwbBind6514 &&
    !cwbBind6513 &&
    cwbBind6511.fill?.color &&
    (cwbBind6514 = cwbH.bh463(cwbBind6511.fill.color, cwbIn1123));
  !cwbBind6514 &&
    !cwbBind6513 &&
    (cwbBind6514 = workbookHelper575(cwbIn1123, cwbIn1117.kind));
  let { color: cwbBind6515, widthPx } = cwbH.bh473(
      cwbBind6511,
      cwbIn1117.index,
      cwbIn1123,
    ),
    cwbBind6516 = cwbIn1117.end >= cwbIn1117.start,
    cwbBind6517 = Math.max(0, Math.min(2, cwbIn1119 / 2, cwbBind6510)),
    cwbBind6518 = cwbBind6516 || cwbIn1117.kind === "total",
    cwbBind6519 = cwbBind6518 ? cwbBind6517 : 0,
    cwbBind6520 = cwbBind6518 ? 0 : cwbBind6517;
  return (
    cwbIn1116.beginPath(),
    cwbBind6516
      ? (cwbIn1116.moveTo(cwbIn1118, cwbBind6509),
        cwbIn1116.lineTo(cwbIn1118, cwbBind6508 + cwbBind6519),
        cwbIn1116.arcTo(
          cwbIn1118,
          cwbBind6508,
          cwbIn1118 + cwbBind6519,
          cwbBind6508,
          cwbBind6519,
        ),
        cwbIn1116.lineTo(cwbIn1118 + cwbIn1119 - cwbBind6519, cwbBind6508),
        cwbIn1116.arcTo(
          cwbIn1118 + cwbIn1119,
          cwbBind6508,
          cwbIn1118 + cwbIn1119,
          cwbBind6508 + cwbBind6519,
          cwbBind6519,
        ),
        cwbIn1116.lineTo(cwbIn1118 + cwbIn1119, cwbBind6509),
        cwbIn1116.closePath())
      : (cwbIn1116.moveTo(cwbIn1118, cwbBind6508),
        cwbIn1116.lineTo(cwbIn1118, cwbBind6509 - cwbBind6520),
        cwbIn1116.arcTo(
          cwbIn1118,
          cwbBind6509,
          cwbIn1118 + cwbBind6520,
          cwbBind6509,
          cwbBind6520,
        ),
        cwbIn1116.lineTo(cwbIn1118 + cwbIn1119 - cwbBind6520, cwbBind6509),
        cwbIn1116.arcTo(
          cwbIn1118 + cwbIn1119,
          cwbBind6509,
          cwbIn1118 + cwbIn1119,
          cwbBind6509 - cwbBind6520,
          cwbBind6520,
        ),
        cwbIn1116.lineTo(cwbIn1118 + cwbIn1119, cwbBind6508),
        cwbIn1116.closePath()),
    cwbBind6514 && ((cwbIn1116.fillStyle = cwbBind6514), cwbIn1116.fill()),
    cwbBind6515 &&
      ((cwbIn1116.strokeStyle = cwbBind6515),
      (cwbIn1116.lineWidth = widthPx ?? 1),
      cwbIn1116.stroke()),
    {
      top: cwbBind6508,
      bottom: cwbBind6509,
    }
  );
}

/** Legacy alias. */
export const dCe = paintWaterfallBar;
