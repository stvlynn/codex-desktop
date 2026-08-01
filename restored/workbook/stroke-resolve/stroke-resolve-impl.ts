// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: stroke/fill resolve nest (legacy stroke merge/visible nest).
// Stage-3 wave-130.

import { resolveColorToCssRgba } from "../color-resolve";
import { resolveThemeAccentSlot } from "../theme-color";
import { schemeSet2 as defaultSeriesColors } from "../../boundaries/d3-hierarchy";
import { tr } from "../presentation-protobuf";

const DEFAULT_STROKE_COLOR = "#fff";
const DEFAULT_STROKE_WIDTH_PX = 1;

export function resolveFillColor(
  srIn13052: any,
  srIn13053: any,
  srIn13054: any,
) {
  return resolveColorToCssRgba(srIn13052, srIn13053, {
    ..._A,
    defaultFill: srIn13054,
  });
}
export function resolveSeriesPaintColor(
  srIn6915: any,
  srIn6916: any,
  srIn6917: any,
  srIn6918: any = {},
) {
  if (srIn6915.fill?.color)
    return resolveFillColor(srIn6915.fill.color, srIn6917);
  let srBind17261 = srIn6915.stroke?.fill?.color
    ? resolveFillColor(srIn6915.stroke.fill.color, srIn6917)
    : undefined;
  if (srBind17261) return srBind17261;
  let srBind17262 = resolveThemeAccentSlot(srIn6916, srIn6918.chartStyleIndex);
  return (
    srIn6917.colorMap[srBind17262] ||
    defaultSeriesColors[srIn6916 % defaultSeriesColors.length]
  );
}
export function resolvePathStyle(srIn8596: any, srIn8597: any) {
  if (!(!srIn8596.points || srIn8596.points.length === 0))
    for (
      let srBind21298 = 0;
      srBind21298 < srIn8596.points.length;
      srBind21298++
    ) {
      let srBind22496 = srIn8596.points[srBind21298];
      if ((srBind22496?.idx ?? srBind21298) === srIn8597) return srBind22496;
    }
}
export function resolveConnectorStroke(
  srIn10616: any,
  srIn10617: any,
  srIn10618: any,
  srIn10619: any,
  srIn10620: any,
) {
  let srBind21100 = resolvePathStyle(srIn10616, srIn10617)?.fill;
  return srBind21100
    ? srBind21100.color
      ? resolveFillColor(srBind21100.color, srIn10619)
      : undefined
    : resolveSeriesPaintColor(srIn10616, srIn10618, srIn10619, srIn10620);
}
export function resolveStrokePaint(srIn5318: any, srIn5319: any) {
  let srBind14976;
  srIn5318?.fill?.color !== undefined &&
    (srBind14976 = resolveFillColor(srIn5318.fill.color, srIn5319));
  let srBind14977;
  srIn5318?.widthEmu !== undefined &&
    (srBind14977 = srIn5318.widthEmu * workbookGt);
  let srBind14978;
  return (
    srIn5318 !== undefined &&
      ((srBind14978 = true),
      srIn5318.fill?.type === tr.FILL_TYPE_UNSPECIFIED &&
        srIn5318.fill.color === undefined &&
        (srBind14978 = false)),
    {
      color: srBind14976,
      widthPx: srBind14977,
      visible: srBind14978,
    }
  );
}
export function resolveDefaultStroke(srIn15112: any, srIn15113: any) {
  return resolveStrokePaint(srIn15112.stroke, srIn15113);
}
export function mergeStrokeStyle(srIn6223: any, srIn6224: any, srIn6225: any) {
  let srBind16318 = resolveDefaultStroke(srIn6223, srIn6225),
    srBind16319 = resolvePathStyle(srIn6223, srIn6224);
  if (srBind16319?.stroke === undefined) return srBind16318;
  let srBind16320 = resolveStrokePaint(srBind16319.stroke, srIn6225);
  return (
    srBind16319.stroke.fill === undefined &&
      ((srBind16320.color = srBind16318.color),
      (srBind16320.visible = srBind16318.visible)),
    srBind16319.stroke.widthEmu === undefined &&
      (srBind16320.widthPx = srBind16318.widthPx),
    srBind16320
  );
}
export function isEmptyFill(srIn11905: any, srIn11906: any) {
  let srBind22178 = resolvePathStyle(srIn11905, srIn11906)?.fill;
  return !!(srBind22178 && !srBind22178.color && !srBind22178.pattern);
}
export function resolveVisibleStroke(
  srIn7298: any,
  srIn7299: any,
  srIn7300: any,
) {
  let srBind17682 = mergeStrokeStyle(srIn7298, srIn7299, srIn7300),
    srBind17683 = srBind17682.color;
  srBind17683 === undefined && (srBind17683 = DEFAULT_STROKE_COLOR);
  let srBind17684 = srBind17682.widthPx;
  srBind17684 === undefined && (srBind17684 = DEFAULT_STROKE_WIDTH_PX);
  let srBind17685 = srBind17684 > 0;
  return (
    srBind17682.visible === false && (srBind17685 = false),
    {
      color: srBind17683,
      widthPx: srBind17684,
      visible: srBind17685,
    }
  );
}
