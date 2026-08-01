// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: category chart plot-area layout (legacy Xxe).
// Stage-3 wave-95.

import { Cn, Yn as _presentationYn } from "../presentation-protobuf";
import { scaleLinear as _AppInitialMat } from "../../vendor/d3-scale-linear";
import {
  max as appInitialAat,
  sum as appInitialSat,
} from "../../vendor/d3-array-min";
import { paintCategoryAxisLabels } from "../chart-category-axis-labels";
import { cplH } from "./boundary-hooks";

/** Legacy Binding1173 — axis label pad (px). */
export const AXIS_LABEL_PAD_PX = 8;
/** Legacy Binding1174 — default max bottom fraction. */
export const DEFAULT_MAX_BOTTOM_FRAC = 0.4;

void Cn;
void _presentationYn;
void _AppInitialMat;
void appInitialAat;
void appInitialSat;
void cplH;

export function layoutCategoryChartPlot(
  cplIn251: any,
  cplIn252: any,
  cplIn253: any,
  cplIn254: any,
  cplIn255: any,
) {
  let cplBind3301 = cplIn255.maxLeftFrac ?? 1,
    cplBind3302 = cplIn255.maxBottomFrac ?? DEFAULT_MAX_BOTTOM_FRAC,
    cplBind3303 = cplIn255.chartModel.resolveCategories(),
    cplBind3304 = cplIn252.yAxis,
    cplBind3305 = !!cplBind3304?.deleted,
    cplBind3306 = cplH.bh428(cplBind3304, cplIn254),
    cplBind3307 = cplH.bh422(cplIn252);
  cplIn251.font = cplH.bh430(cplBind3306);
  let cplBind3308 = cplIn252.barOptions?.grouping,
    cplBind3309 = 0,
    cplBind3310 = 0;
  if (cplIn252.type === Cn.CHART_TYPE_COMBO) {
    let cplBind20438 = cplH.bh388(cplIn255.chartModel),
      cplBind20439 = cplBind20438.max >= 0;
    cplBind3309 = cplBind20439
      ? Math.min(0, cplBind20438.min)
      : cplBind20438.min;
    cplBind3310 = cplBind20439
      ? Math.max(0, cplBind20438.max)
      : cplBind20438.max;
  } else if (cplBind3308 === _presentationYn.BAR_GROUPING_STACKED) {
    let cplBind16368 =
        appInitialAat(
          cplBind3303.map((item, index) =>
            appInitialSat(cplIn252.series, (cplIn15645) =>
              Math.max(0, cplIn15645.values[index] ?? 0),
            ),
          ),
        ) ?? 0,
      cplBind16369 = -(
        appInitialAat(
          cplBind3303.map((item, index) =>
            appInitialSat(cplIn252.series, (cplIn15575) =>
              Math.max(0, -(cplIn15575.values[index] ?? 0)),
            ),
          ),
        ) ?? 0
      );
    cplBind3309 = Math.min(0, cplBind16369);
    cplBind3310 = Math.max(0, cplBind16368);
  } else if (cplBind3308 === _presentationYn.BAR_GROUPING_PERCENT_STACKED) {
    cplBind3309 = 0;
    cplBind3310 = 1;
  } else {
    let cplBind21569 = AppInitialNat(
      cplIn252.series.flatMap((item) => item.values),
    );
    cplBind3309 = Math.min(0, cplBind21569[0] ?? 0);
    cplBind3310 = cplBind21569[1] ?? 0;
  }
  if (cplIn252.series.some((item) => (item?.trendlines?.length ?? 0) > 0)) {
    let cplBind7760 = 1 / 0,
      cplBind7761 = -1 / 0;
    for (let cplBind8691 of cplIn252.series) {
      if (!cplBind8691?.trendlines?.length) continue;
      let cplBind8894 = cplBind8691.values ?? [],
        cplBind8895 = [];
      for (
        let cplBind20643 = 0;
        cplBind20643 < cplBind8894.length;
        cplBind20643++
      ) {
        let cplBind21750 = cplBind8894[cplBind20643];
        cplBind21750 === undefined ||
          !Number.isFinite(cplBind21750) ||
          cplBind8895.push({
            x: cplBind20643,
            y: cplBind21750,
          });
      }
      if (!(cplBind8895.length < 2))
        for (let cplBind11439 of cplBind8691.trendlines) {
          let cplBind11738 = cplH.bh352({
            type: cplBind1176[cplBind11439.type] ?? cplBind1175,
            points: cplBind8895,
            polynomialOrder: cplBind11439.order,
            movingAveragePeriod: cplBind11439.period,
            forecastForward: cplBind11439.forward,
            forecastBackward: cplBind11439.backward,
            intercept: cplBind11439.intercept,
            displayEquation: false,
            displayRSquared: false,
          });
          if (cplBind11738?.points?.length)
            for (let cplBind20960 of cplBind11738.points)
              Number.isFinite(cplBind20960.y) &&
                ((cplBind7760 = Math.min(cplBind7760, cplBind20960.y)),
                (cplBind7761 = Math.max(cplBind7761, cplBind20960.y)));
        }
    }
    Number.isFinite(cplBind7760) &&
      Number.isFinite(cplBind7761) &&
      ((cplBind3309 = Math.min(cplBind3309, cplBind7760)),
      (cplBind3310 = Math.max(cplBind3310, cplBind7761)));
  }
  let cplBind3311 = cplH.bh402({
      axis: cplBind3304,
      dataMin: cplBind3309,
      dataMax: cplBind3310,
      includeZeroBaseline:
        cplIn252.type !== Cn.CHART_TYPE_COMBO || cplBind3310 >= 0,
    }),
    cplBind3312 = cplH.bh403(
      _AppInitialMat().range([cplIn253.y + cplIn253.height, cplIn253.y]),
      cplBind3311,
      cplBind3307,
    ),
    cplBind3313 = cplBind3305
      ? undefined
      : cplH.bh440({
          ctx: cplIn251,
          axis: cplBind3304,
          scale: cplBind3312,
          preferredTickCount: cplBind3307,
          themeMap: cplIn254,
        }),
    cplBind3314 = cplH.bh438(
      cplIn254,
      cplBind3304?.title,
      cplBind3304?.titleTextStyle,
      cplBind3306.fontSize,
      -90,
    ),
    cplBind3315 = cplBind3305 ? 0 : (cplBind3313?.labelBandWidth ?? 0),
    cplBind3316 =
      cplBind3314 && !cplH.bh459(cplBind3304)
        ? AXIS_LABEL_PAD_PX + cplBind3314.width
        : 0,
    cplBind3317 = cplIn253.width * cplBind3301,
    cplBind3318 = Math.min(cplBind3317, cplBind3315 + cplBind3316),
    cplBind3319 = Math.max(0, cplIn255.availableTopPaddingPx ?? 0),
    cplBind3320 = cplBind3305
      ? 0
      : cplH.bh494(cplIn252)
        ? cplBind3306.fontSize / 2
        : Math.max(0, cplBind3306.fontSize / 2 - cplBind3319),
    cplBind3321 = cplH.bh428(cplIn252.xAxis, cplIn254);
  cplIn251.font = cplH.bh430(cplBind3321);
  let cplBind3322 = cplIn252.xAxis,
    cplBind3323 = !!cplBind3322?.deleted,
    cplBind3324 = cplH.bh438(
      cplIn254,
      cplBind3322?.title,
      cplBind3322?.titleTextStyle,
      cplBind3321.fontSize,
      0,
    ),
    cplBind3325 =
      cplBind3324 && !cplH.bh459(cplBind3322)
        ? AXIS_LABEL_PAD_PX + cplBind3324.height
        : 0,
    cplBind3326 = {
      x: cplIn255.preservePlotArea ? cplIn253.x : cplIn253.x + cplBind3318,
      y: cplIn255.preservePlotArea ? cplIn253.y : cplIn253.y + cplBind3320,
      width: cplIn255.preservePlotArea
        ? cplIn253.width
        : Math.max(0, cplIn253.width - cplBind3318),
      height: cplIn255.preservePlotArea
        ? cplIn253.height
        : Math.max(0, cplIn253.height - cplBind3320),
    },
    cplBind3327 = cplIn255.maxBottomPx ?? cplIn253.height * cplBind3302,
    cplBind3328 =
      !cplBind3323 && cplBind3326.width > 0 && cplBind3326.height > 0
        ? paintCategoryAxisLabels({
            ctx: cplIn251,
            axis: cplBind3322,
            categories: cplBind3303,
            scale: cplH.bh423(
              cplIn252,
              cplBind3326,
              cplIn255.hiddenSeriesIndices,
              cplIn255.chartModel,
            ).x,
            plotDims: cplBind3326,
            themeMap: cplIn254,
            maxLabelBandHeightPx: Math.max(0, cplBind3327 - cplBind3325),
          })
        : undefined,
    cplBind3329 = cplBind3323
      ? 0
      : Math.min(
          cplBind3327,
          (cplBind3328?.labelBandHeight ?? 0) + cplBind3325,
        ),
    cplBind3330 = {
      x: cplIn255.preservePlotArea ? cplIn253.x : cplIn253.x + cplBind3318,
      y: cplIn255.preservePlotArea ? cplIn253.y : cplIn253.y + cplBind3320,
      width: cplIn255.preservePlotArea
        ? cplIn253.width
        : Math.max(0, cplIn253.width - cplBind3318),
      height: cplIn255.preservePlotArea
        ? cplIn253.height
        : Math.max(0, cplIn253.height - cplBind3320 - cplBind3329),
    };
  return {
    plotDims: cplBind3330,
    reservedLeft: cplBind3318,
    reservedTop: cplBind3320,
    reservedBottom: cplBind3329,
    xAxisPlan: cplBind3328,
    yAxisPlan: cplBind3305
      ? undefined
      : cplH.bh440({
          ctx: cplIn251,
          axis: cplBind3304,
          scale: cplH.bh403(
            _AppInitialMat().range([
              cplBind3330.y + cplBind3330.height,
              cplBind3330.y,
            ]),
            cplBind3311,
            cplBind3307,
          ),
          preferredTickCount: cplBind3307,
          themeMap: cplIn254,
        }),
  };
}

/** Legacy alias. */
export const Xxe = layoutCategoryChartPlot;
