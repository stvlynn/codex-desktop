// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: axis title manual-layout + paint.
// Stage-3 wave-111.

import { Jn } from "../presentation-protobuf";
import { resolveColorToCssRgba as workbookSt } from "../color-resolve";
import { applyManualLayout } from "../chart-legend-plot";

void Jn;
void workbookSt;
void applyManualLayout;

export function hasManualLayoutCoord(catIn12669: any) {
  return catIn12669 !== undefined && Number.isFinite(catIn12669)
    ? catIn12669
    : undefined;
}
export function clampNumber(catIn13671: any, catIn13672: any, catIn13673: any) {
  return Math.max(catIn13672, Math.min(catIn13673, catIn13671));
}
export function hasTitleManualLayout(catIn10244: any) {
  return (
    hasManualLayoutCoord(catIn10244.x) !== undefined ||
    hasManualLayoutCoord(catIn10244.y) !== undefined ||
    hasManualLayoutCoord(catIn10244.w) !== undefined ||
    hasManualLayoutCoord(catIn10244.h) !== undefined
  );
}
export function axisHasTitleManualLayout(catIn12419: any) {
  return !!(
    catIn12419?.titleManualLayout &&
    hasTitleManualLayout(catIn12419.titleManualLayout)
  );
}
export function paintAxisTitle(catIn1605: any) {
  let {
    ctx,
    axis,
    metrics,
    automaticCenter,
    chartArea,
    themeMap,
    fallbackColor,
  } = catIn1605;
  if (!metrics) return;
  let catBind7791 = {
      x: automaticCenter.x - metrics.width / 2,
      y: automaticCenter.y - metrics.height / 2,
      width: metrics.width,
      height: metrics.height,
    },
    catBind7792 = axis?.titleManualLayout,
    catBind7793 =
      catBind7792 && hasTitleManualLayout(catBind7792)
        ? applyManualLayout(chartArea, catBind7791, catBind7792)
        : catBind7791,
    catBind7794 = axis?.titleTextStyle?.alignment,
    catBind7795 = "center",
    catBind7796 = 0;
  catBind7794 === Jn.ALIGNMENT_TYPE_LEFT
    ? ((catBind7795 = "left"), (catBind7796 = -catBind7793.width / 2))
    : catBind7794 === Jn.ALIGNMENT_TYPE_RIGHT &&
      ((catBind7795 = "right"), (catBind7796 = catBind7793.width / 2));
  let catBind7797 = -((metrics.lines.length - 1) * metrics.lineHeight) / 2,
    catBind7798 = axis?.titleTextStyle?.fill?.color
      ? workbookSt(axis.titleTextStyle.fill.color, themeMap)
      : fallbackColor;
  ctx.save();
  ctx.fillStyle = catBind7798 ?? fallbackColor;
  ctx.font = metrics.font;
  ctx.textAlign = catBind7795;
  ctx.textBaseline = "middle";
  ctx.translate(
    catBind7793.x + catBind7793.width / 2,
    catBind7793.y + catBind7793.height / 2,
  );
  ctx.rotate(metrics.rotationRad);
  metrics.lines.forEach((item, index) => {
    ctx.fillText(item, catBind7796, catBind7797 + index * metrics.lineHeight);
  });
  ctx.restore();
}
