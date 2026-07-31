// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: category-axis label layout + axis text style.
// Stage-3 wave-113.

export function resolveAxisTextStyle(cpIn4143: any, cpIn4144: any) {
  let cpBind13138 = cpIn4143?.line?.fill?.color
    ? workbookSt(cpIn4143.line.fill.color, cpIn4144)
    : $D;
  return {
    lineColor: cpBind13138,
    textColor: cpIn4143?.textStyle?.fill?.color
      ? workbookSt(cpIn4143.textStyle.fill.color, cpIn4144)
      : cpBind13138,
    fontSize: cpIn4143?.textStyle?.fontSize
      ? cpHelper152(cpIn4143.textStyle.fontSize)
      : 10,
    fontFamily: cpHelper387(cpIn4143?.textStyle),
    isBold: cpIn4143?.textStyle?.bold === true,
    gridLineColor: cpIn4143?.majorGridlines?.fill?.color
      ? workbookSt(cpIn4143.majorGridlines.fill.color, cpIn4144)
      : undefined,
  };
}
export function layoutCategoryLabels(
  cpIn2748: any,
  cpIn2749: any,
  cpIn2750: any,
  cpIn2751: any,
  cpIn2752: any,
) {
  if (cpIn2750.segments.length === 0 || cpIn2751.width <= 0) return null;
  let cpBind10389 = resolveAxisTextStyle(cpIn2749.yAxis, cpIn2752),
    cpBind10390 = `${cpBind10389.fontSize}px ${cpBind837}`;
  cpIn2748.save();
  cpIn2748.font = cpBind10390;
  let cpBind10391 = 0;
  for (let cpBind21901 of cpIn2750.segments) {
    let cpBind22534 = cpIn2748.measureText(cpBind21901.category).width;
    cpBind22534 > cpBind10391 && (cpBind10391 = cpBind22534);
  }
  if ((cpIn2748.restore(), !Number.isFinite(cpBind10391) || cpBind10391 <= 0))
    return null;
  let cpBind10392 = Math.min(
    cpIn2751.width * cpBind1228,
    cpBind10391 + cpBind1227,
  );
  return cpBind10392 <= cpBind1227 || cpBind10392 >= cpIn2751.width
    ? null
    : {
        plotDims: {
          x: cpIn2751.x + cpBind10392,
          y: cpIn2751.y,
          width: Math.max(0, cpIn2751.width - cpBind10392),
          height: cpIn2751.height,
        },
        labels: {
          labelX: cpIn2751.x + cpBind10392 - cpBind1227,
          font: cpBind10390,
          textColor: cpBind10389.textColor,
        },
      };
}

export const RCe = layoutCategoryLabels;
