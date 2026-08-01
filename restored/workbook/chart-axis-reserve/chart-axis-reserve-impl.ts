// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: category/value axis reserve layout (_be/vbe/ybe + mid helpers).
// Stage-3 wave-125. bbe left behind (scale domain mid-helper fan-out).

import { Un, Wn, tr } from "../presentation-protobuf";
import { carH } from "./boundary-hooks";

export function axisHasVisibleLine(carIn10213: any) {
  let carBind20680 = carIn10213?.line?.fill;
  return (
    carBind20680 === undefined ||
    carBind20680.type !== tr.FILL_TYPE_UNSPECIFIED ||
    carBind20680.color !== undefined
  );
}
export function axisCanvasFont(carIn7925: any) {
  let carBind18402 =
    carIn7925.fontFamily ===
    "Carlito, Segoe UI, Helvetica, Arial, sans-serif"
      ? carH.chartFontStack
      : carH.resolveCssFontStack(carIn7925.fontFamily, "presentation");
  return `${carIn7925.isBold ? "bold " : ""}${carIn7925.fontSize}px ${carBind18402}`;
}
export function readAxisTickLabelOpts(carIn3301: any) {
  if (!carIn3301 || typeof carIn3301 != "object") return {};
  let carBind11573 = carIn3301,
    carBind11574 = carBind11573.tickLabelInterval,
    carBind11575 =
      typeof carBind11574 == "number" &&
      Number.isFinite(carBind11574)
        ? carBind11574
        : undefined,
    carBind11576 = carBind11573.tickMarkInterval,
    carBind11577 =
      typeof carBind11576 == "number" &&
      Number.isFinite(carBind11576)
        ? carBind11576
        : undefined,
    carBind11578 = carBind11573.tickLabelDistanceFromAxis,
    carBind11579 =
      typeof carBind11578 == "number" &&
      Number.isFinite(carBind11578)
        ? carBind11578
        : undefined,
    carBind11580 = carBind11573.tickLabelPositionName;
  return {
    tickLabelInterval: carBind11575,
    tickMarkInterval: carBind11577,
    tickLabelDistanceFromAxis: carBind11579,
    tickLabelPositionName:
      typeof carBind11580 == "string"
        ? carBind11580
        : undefined,
  };
}
export function axisLabelReserve(carIn10143: any) {
  let carBind20614 = readAxisTickLabelOpts(carIn10143);
  return carBind20614.tickLabelDistanceFromAxis === undefined
    ? 0
    : (carBind20614.tickLabelDistanceFromAxis * carH.pixelsPerInch) /
        carH.pointsPerInch;
}
export function axisHidesTickLabels(carIn8663: any) {
  return carIn8663 &&
    typeof carIn8663 == "object" &&
    carIn8663.tickLabelPosition === Un.TICK_LABEL_POSITION_NONE
    ? true
    : readAxisTickLabelOpts(
        carIn8663,
      ).tickLabelPositionName?.toLowerCase() === "none";
}
export function layoutCatAxis(carIn2673: any) {
  let { axis, ctx, categories, maxLeftFrac, plotDims, themeMap } =
    carIn2673;
  if (axis?.deleted || axisHidesTickLabels(axis)) return 0;
  let carBind10195 = carH.resolveAxisTextStyle(axis, themeMap);
  ctx.save();
  ctx.font = axisCanvasFont(carBind10195);
  let carBind10196 = 0;
  for (let carBind22790 of categories)
    carBind10196 = Math.max(
      carBind10196,
      ctx.measureText(carBind22790).width,
    );
  ctx.restore();
  let carBind10197 =
      axis?.majorTickMark !== undefined &&
      axis.majorTickMark !== Wn.TICK_MARK_UNSPECIFIED &&
      axis.majorTickMark !== Wn.TICK_MARK_NONE,
    carBind10198 =
      axisHasVisibleLine(axis) && carBind10197 ? carH.tickMarkReservePx : 0,
    carBind10199 =
      carBind10196 > 0
        ? carBind10196 + carH.labelGapPx + axisLabelReserve(axis)
        : 0,
    carBind10200 = carH.paintAxisTitleText(
      themeMap,
      axis?.title,
      axis?.titleTextStyle,
      carBind10195.fontSize,
      -90,
    ),
    carBind10201 = carBind10200
      ? carH.titleGapPx + carBind10200.width
      : 0,
    carBind10202 = Math.max(0, plotDims.width * maxLeftFrac);
  return Math.max(
    0,
    Math.min(
      carBind10202,
      carBind10198 + carBind10199 + carBind10201,
    ),
  );
}
export function layoutValAxisBottom(carIn5839: any) {
  let { axis, maxBottomFrac, plotDims, themeMap } = carIn5839;
  if (axis?.deleted) return 0;
  let carBind15791 = carH.resolveAxisTextStyle(axis, themeMap),
    carBind15792 = axisHidesTickLabels(axis)
      ? 0
      : 10 + carBind15791.fontSize,
    carBind15793 = carH.paintAxisTitleText(
      themeMap,
      axis?.title,
      axis?.titleTextStyle,
      carBind15791.fontSize,
      0,
    ),
    carBind15794 = carBind15793
      ? carH.titleGapPx + carBind15793.height
      : 0;
  return Math.min(
    Math.max(0, plotDims.height * maxBottomFrac),
    carBind15792 + carBind15794,
  );
}
export function categoryLabelInset(carIn8058: any) {
  let { categoryAxis, valueAxis, plotDims, themeMap } = carIn8058;
  if (valueAxis?.deleted || !axisHidesTickLabels(valueAxis)) return 0;
  let carBind18572 = carH.resolveAxisTextStyle(categoryAxis, themeMap);
  return Math.min(
    Math.max(0, plotDims.height / 4),
    carBind18572.fontSize,
  );
}

/** Legacy aliases (wave-125). */
export const _be = layoutCatAxis;
export const vbe = layoutValAxisBottom;
export const ybe = categoryLabelInset;
