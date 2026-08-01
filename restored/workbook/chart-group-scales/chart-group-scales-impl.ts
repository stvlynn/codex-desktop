// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: chart group x/y scales (legacy helper #423).
// Stage-3 wave-99.

import {
  Cn,
  Vn as _presentationVn,
  Yn as _presentationYn,
} from "../presentation-protobuf";
import {
  scaleBand as d3ScaleBand,
  scalePoint as d3ScalePoint,
} from "../../vendor/d3-scale-band";
import { scaleLinear as d3ScaleLinear } from "../../vendor/d3-scale-linear";
import { cgsH } from "./boundary-hooks";

void Cn;
void _presentationVn;
void _presentationYn;
void d3ScaleBand;
void d3ScalePoint;
void d3ScaleLinear;
void cgsH;

export function buildChartGroupScales(
  cgsIn435: any,
  cgsIn436: any,
  cgsIn437: any,
  cgsIn438: any,
) {
  let cgsBind3950 =
      cgsIn435.type === Cn.CHART_TYPE_BAR ||
      cgsIn435.type === Cn.CHART_TYPE_BAR_3D
        ? cgsH.bh419(cgsIn435)
        : cgsIn438.resolveCategories(),
    cgsBind3951 = 0,
    cgsBind3952 = 0;
  for (let cgsBind12987 of cgsIn438.series.items)
    for (let cgsBind13608 of cgsBind12987.trendlines.items) {
      let cgsBind14258 =
          cgsBind13608.forecastBackward !== undefined &&
          Number.isFinite(cgsBind13608.forecastBackward)
            ? Math.max(0, Math.floor(cgsBind13608.forecastBackward))
            : 0,
        cgsBind14259 =
          cgsBind13608.forecastForward !== undefined &&
          Number.isFinite(cgsBind13608.forecastForward)
            ? Math.max(0, Math.floor(cgsBind13608.forecastForward))
            : 0;
      cgsBind3951 = Math.max(cgsBind3951, cgsBind14258);
      cgsBind3952 = Math.max(cgsBind3952, cgsBind14259);
    }
  let cgsBind3953 =
      cgsBind3951 > 0 || cgsBind3952 > 0
        ? cgsH.expandForecastCategories(cgsBind3950, cgsBind3951, cgsBind3952)
        : cgsBind3950,
    cgsBind3954 = cgsH.isMaxMinOrientation(cgsIn435)
      ? [...cgsBind3953].reverse()
      : cgsBind3953,
    cgsBind3955,
    cgsBind3956;
  if (cgsIn435.type === Cn.CHART_TYPE_WATERFALL) {
    let cgsBind22531 = cgsH.bh391(cgsIn435);
    cgsBind3955 = cgsBind22531.extents.min;
    cgsBind3956 = cgsBind22531.extents.max;
  } else {
    let cgsBind22805 = cgsH.bh388(cgsIn438);
    cgsBind3955 = cgsBind22805.min;
    cgsBind3956 = cgsBind22805.max;
  }
  let cgsBind3957 =
      cgsIn435.type === Cn.CHART_TYPE_BAR &&
      cgsIn435.barOptions?.direction !== _presentationVn.BAR_DIRECTION_BAR,
    cgsBind3958 = cgsBind3957 && cgsH.waterfallForceZero(cgsIn435, cgsBind3955),
    cgsBind3959 =
      !cgsBind3958 &&
      (cgsIn435.type !== Cn.CHART_TYPE_COMBO || cgsBind3956 >= 0),
    cgsBind3960 = cgsH.bh402({
      axis: cgsIn435.yAxis,
      dataMin: cgsBind3955,
      dataMax: cgsBind3956,
      includeZeroBaseline: cgsBind3959,
      expandAutoBorderHeadroom:
        cgsBind3957 &&
        cgsIn435.barOptions?.grouping !==
          _presentationYn.BAR_GROUPING_PERCENT_STACKED &&
        !cgsBind3958,
    }),
    cgsBind3961 = cgsH.bh396({
      gapWidth: cgsIn435.barOptions?.gapWidth,
      grouping: cgsIn435.barOptions?.grouping,
      seriesCount: cgsH.bh395(cgsIn435.series.length, cgsIn437),
      overlap: cgsIn435.barOptions?.overlap,
    }),
    cgsBind3962 =
      cgsIn435.type === Cn.CHART_TYPE_LINE ||
      cgsIn435.type === Cn.CHART_TYPE_LINE_3D,
    cgsBind3963 =
      cgsIn435.type === Cn.CHART_TYPE_AREA ||
      cgsIn435.type === Cn.CHART_TYPE_AREA_3D,
    cgsBind3964 =
      cgsBind3962 || cgsBind3963
        ? d3ScalePoint()
            .domain(cgsBind3954)
            .range([cgsIn436.x, cgsIn436.x + cgsIn436.width])
            .padding(cgsBind3962 ? 0.5 : 0)
        : d3ScaleBand()
            .domain(cgsBind3954)
            .range([cgsIn436.x, cgsIn436.x + cgsIn436.width])
            .paddingInner(cgsBind3961)
            .paddingOuter(cgsH.bh397(cgsBind3961)),
    cgsBind3965 =
      cgsBind3957 && !cgsBind3958
        ? cgsH.bh422(cgsIn435)
        : cgsH.categoryPaddingFallback,
    cgsBind3966 =
      cgsBind3955 > 0 &&
      cgsBind3955 < cgsBind3956 &&
      cgsBind3955 / cgsBind3956 >= 0.8333333333333334,
    cgsBind3967 =
      cgsBind3956 < 0 &&
      cgsBind3955 < cgsBind3956 &&
      cgsBind3956 / cgsBind3955 >= 0.8333333333333334,
    cgsBind3968 =
      cgsBind3957 &&
      cgsIn435.barOptions?.grouping === _presentationYn.BAR_GROUPING_STACKED &&
      cgsIn435.yAxis?.deleted === true &&
      cgsIn435.yAxis.majorGridlines === undefined &&
      !cgsBind3958;
  return {
    x: cgsBind3964,
    y:
      cgsIn435.yAxis?.logBase !== undefined ||
      (cgsIn435.chartGroups?.length ?? 0) > 0 ||
      cgsBind3968 ||
      (cgsIn435.yAxis?.deleted !== true && (cgsBind3966 || cgsBind3967))
        ? cgsH.buildContinuousScale({
            automaticMin: cgsBind3955,
            automaticMax: cgsBind3956,
            automaticPositiveMin: cgsH.bh400(
              cgsIn435.series.flatMap((item) => item.values),
            ),
            range: [cgsIn436.y + cgsIn436.height, cgsIn436.y],
            axis: cgsIn435.yAxis,
            expandWideValuesToZero: !(
              cgsIn435.type === Cn.CHART_TYPE_COMBO && cgsBind3956 < 0
            ),
          })
        : cgsH.bh403(
            d3ScaleLinear().range([cgsIn436.y + cgsIn436.height, cgsIn436.y]),
            cgsBind3960,
            cgsBind3965,
          ),
  };
}

/** Legacy alias. */
/** Compat alias for barrels. */
export const workbookFn423 = buildChartGroupScales;
