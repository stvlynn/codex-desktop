// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: secondary value-axis paint (legacy _xe/530/531).
// Stage-3 wave-114.

import { Wn } from "../presentation-protobuf";
import { resolveAxisTextStyle, paintAxisTitleText } from "../chart-paint";
import { paintAxisGridlineStroke } from "./paint-axis-gridline-impl";
import { planAxisTicks } from "./plan-axis-ticks-impl";
import { paintAxisTitle } from "./paint-axis-title-impl";
import { formatAxisTickValue } from "./format-chart-number-impl";

const AXIS_BASELINE_EPS = 0.5;
const AXIS_TITLE_GAP_PX = 8;
const AXIS_PREFERRED_TICK_COUNT = 5;

void Wn;
void resolveAxisTextStyle;
void paintAxisGridlineStroke;
void planAxisTicks;
void paintAxisTitle;
void paintAxisTitleText;
void formatAxisTickValue;
void AXIS_BASELINE_EPS;
void AXIS_TITLE_GAP_PX;
void AXIS_PREFERRED_TICK_COUNT;

export function paintSecondaryValueAxis(catIn432: any) {
  let { ctx, axis, scale, dims, themeMap, side, baselineY } = catIn432,
    catBind3908 = catIn432.chartArea ?? dims,
    catBind3909 = resolveAxisTextStyle(axis, themeMap),
    catBind3910 = side === "left" ? dims.x : dims.x + dims.width,
    catBind3911 = side === "left" ? -1 : 1,
    catBind3912 = side === "left" ? "right" : "left";
  if (axis?.deleted)
    return (
      paintSecondaryAxisTitle({
        ctx,
        axis,
        axisX: catBind3910,
        direction: catBind3911,
        labelBandWidth: 0,
        dims,
        chartArea: catBind3908,
        themeMap,
        fallbackColor: catBind3909.textColor,
        fallbackFontSize: catBind3909.fontSize,
      }),
      0
    );
  ctx.save();
  axis?.line?.fill?.color &&
    ((ctx.strokeStyle = catBind3909.lineColor),
    ctx.beginPath(),
    ctx.moveTo(catBind3910, dims.y),
    ctx.lineTo(catBind3910, dims.y + dims.height),
    ctx.stroke());
  ctx.textAlign = catBind3912;
  ctx.textBaseline = "middle";
  ctx.fillStyle = catBind3909.textColor;
  let catBind3913 = planAxisTicks({
      ctx,
      axis,
      scale,
      preferredTickCount: AXIS_PREFERRED_TICK_COUNT,
      themeMap,
    }),
    catBind3914 = !!axis?.majorGridlines?.fill?.color,
    catBind3915 = !!axis?.minorGridlines?.fill?.color,
    catBind3916 =
      axis?.majorTickMark !== undefined &&
      axis.majorTickMark !== Wn.TICK_MARK_UNSPECIFIED &&
      axis.majorTickMark !== Wn.TICK_MARK_NONE,
    catBind3917 = catBind3915 ? catBind3913.minorTicks : [];
  return (
    catBind3915 &&
      axis?.minorGridlines &&
      (ctx.save(),
      paintAxisGridlineStroke(ctx, axis.minorGridlines, themeMap, {
        color: catBind3909.gridLineColor ?? catBind3909.lineColor,
        widthPx: 0.75,
      }),
      catBind3917.forEach((item) => {
        let catBind18574 = scale(item);
        !Number.isFinite(catBind18574) ||
          nearAxisBaseline(catBind18574, baselineY) ||
          (ctx.beginPath(),
          ctx.moveTo(dims.x, catBind18574),
          ctx.lineTo(dims.x + dims.width, catBind18574),
          ctx.stroke());
      }),
      ctx.restore()),
    catBind3913.ticks.forEach((item) => {
      let catBind9510 = scale(item);
      if (
        Number.isFinite(catBind9510) &&
        (catBind3914 &&
          axis?.majorGridlines &&
          (ctx.save(),
          paintAxisGridlineStroke(ctx, axis.majorGridlines, themeMap, {
            color: catBind3909.gridLineColor ?? catBind3909.lineColor,
            widthPx: 1,
          }),
          nearAxisBaseline(catBind9510, baselineY) ||
            (ctx.beginPath(),
            ctx.moveTo(dims.x, catBind9510),
            ctx.lineTo(dims.x + dims.width, catBind9510),
            ctx.stroke()),
          ctx.restore()),
        catBind3916 &&
          ((ctx.strokeStyle = catBind3909.lineColor),
          ctx.beginPath(),
          ctx.moveTo(catBind3910, catBind9510),
          ctx.lineTo(catBind3910 + catBind3911 * 4, catBind9510),
          ctx.stroke()),
        !catBind3913.hideTickLabels)
      ) {
        ctx.font = `${catBind3909.fontSize}px ${catBind3909.fontFamily}`;
        let catBind20506 = formatAxisTickValue(item, axis?.numberFormatCode);
        ctx.fillText(catBind20506, catBind3910 + catBind3911 * 6, catBind9510);
      }
    }),
    paintSecondaryAxisTitle({
      ctx,
      axis,
      axisX: catBind3910,
      direction: catBind3911,
      labelBandWidth: catBind3913.labelBandWidth,
      dims,
      chartArea: catBind3908,
      themeMap,
      fallbackColor: catBind3909.textColor,
      fallbackFontSize: catBind3909.fontSize,
    }),
    ctx.restore(),
    catBind3913.labelBandWidth
  );
}
export function paintSecondaryAxisTitle(catIn3526: any) {
  let {
      ctx,
      axis,
      axisX,
      direction,
      labelBandWidth,
      dims,
      chartArea,
      themeMap,
      fallbackColor,
      fallbackFontSize,
    } = catIn3526,
    catBind12000 = paintAxisTitleText(
      themeMap,
      axis?.title,
      axis?.titleTextStyle,
      fallbackFontSize,
      -90,
    );
  catBind12000 &&
    paintAxisTitle({
      ctx,
      axis,
      metrics: catBind12000,
      automaticCenter: {
        x:
          axisX +
          direction *
            (labelBandWidth + AXIS_TITLE_GAP_PX + catBind12000.width / 2),
        y: dims.y + dims.height / 2,
      },
      chartArea,
      themeMap,
      fallbackColor,
    });
}
export function nearAxisBaseline(catIn14532: any, catIn14533: any) {
  return Math.abs(catIn14532 - catIn14533) <= AXIS_BASELINE_EPS;
}

export const _xe = paintSecondaryValueAxis;
