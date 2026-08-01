// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: bar/sunburst category+value scales (legacy hbe cluster).
// Stage-3 wave-114.

import { Mn as _presentationMn } from "../presentation-protobuf";
import { scaleLinear as _AppInitialMat } from "../../vendor/d3-scale-linear";
import { scaleBand as AppInitialHat } from "../../vendor/d3-scale-band";
import {
  planComboValueDomains,
  applyNiceContinuousDomain,
} from "./scale-domain-helpers-impl";
import { cgsH } from "./boundary-hooks";

const BAR_SCALE_TICK_COUNT = 5;

// Still-local scale helpers are reached via the chart-group-scales hook bag.
const resolveCategoryDomain = (...args: any[]) => cgsH.bh419(...args);
const buildContinuousDomain = (...args: any[]) => cgsH.bh402(...args);
const barBandPadding = (...args: any[]) => cgsH.bh396(...args);
const seriesBandCount = (...args: any[]) => cgsH.bh395(...args);
const barOuterPadding = (...args: any[]) => cgsH.bh397(...args);

void _presentationMn;
void _AppInitialMat;
void AppInitialHat;
void planComboValueDomains;
void applyNiceContinuousDomain;
void resolveCategoryDomain;
void buildContinuousDomain;
void barBandPadding;
void seriesBandCount;
void barOuterPadding;
void BAR_SCALE_TICK_COUNT;

export function chartUsesPercentFormats(cgsIn12550: any, cgsIn12551: any) {
  return cgsIn12550.yAxis?.deleted !== true || cgsIn12551 <= 0
    ? false
    : chartHasPercentFormats(cgsIn12550);
}
export function chartHasPercentFormats(cgsIn8716: any) {
  return [
    cgsIn8716.dataLabels?.numberFormatCode,
    ...cgsIn8716.series.flatMap((item) => [
      item.dataLabels?.numberFormatCode,
      item.valuesFormatCode,
    ]),
  ].some(valueLooksPercent);
}
export function valueLooksPercent(cgsIn14716: any) {
  return cgsIn14716?.includes("%") ?? false;
}
export function isMaxMinXOrientation(cgsIn12294: any) {
  return (
    cgsIn12294.xAxis?.orientation !== _presentationMn.AXIS_ORIENTATION_MAX_MIN
  );
}
export function isMaxMinYOrientation(cgsIn12361: any) {
  return (
    cgsIn12361.yAxis?.orientation === _presentationMn.AXIS_ORIENTATION_MAX_MIN
  );
}
export function buildBarPlotScales(
  cgsIn2722: any,
  cgsIn2723: any,
  cgsIn2724: any,
  cgsIn2725: any,
) {
  let cgsBind10322 = resolveCategoryDomain(cgsIn2722),
    cgsBind10323 = planComboValueDomains(cgsIn2725),
    cgsBind10324 = !chartUsesPercentFormats(cgsIn2722, cgsBind10323.min),
    cgsBind10325 = [cgsIn2723.x, cgsIn2723.x + cgsIn2723.width];
  isMaxMinYOrientation(cgsIn2722) && cgsBind10325.reverse();
  let cgsBind10326 = applyNiceContinuousDomain(
      _AppInitialMat().range(cgsBind10325),
      buildContinuousDomain({
        axis: cgsIn2722.yAxis,
        dataMin: cgsBind10323.min,
        dataMax: cgsBind10323.max,
        includeZeroBaseline: cgsBind10324,
        expandAutoBorderHeadroom: true,
      }),
      BAR_SCALE_TICK_COUNT,
    ),
    cgsBind10327 = barBandPadding({
      gapWidth: cgsIn2722.barOptions?.gapWidth,
      grouping: cgsIn2722.barOptions?.grouping,
      seriesCount: seriesBandCount(cgsIn2722.series.length, cgsIn2724),
      overlap: cgsIn2722.barOptions?.overlap,
    }),
    cgsBind10328 = [cgsIn2723.y, cgsIn2723.y + cgsIn2723.height];
  return (
    isMaxMinXOrientation(cgsIn2722) && cgsBind10328.reverse(),
    {
      x: cgsBind10326,
      y: AppInitialHat()
        .domain(cgsBind10322)
        .range(cgsBind10328)
        .paddingInner(cgsBind10327)
        .paddingOuter(barOuterPadding(cgsBind10327)),
    }
  );
}

export const hbe = buildBarPlotScales;
export const mbe = isMaxMinXOrientation;
