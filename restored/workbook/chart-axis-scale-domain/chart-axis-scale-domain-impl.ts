// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: continuous domain + major/minor ticks + val-axis right reserve.
// Stage-3 wave-126. Owns preferred bbe + bh402/bh406/wye nest.

import { tickStep } from "../../vendor/d3-array-stats";
import { scaleLinear } from "../../vendor/d3-scale-linear";
import { Tn } from "../presentation-protobuf";
import {
  planComboValueDomains,
  applyNiceContinuousDomain,
  niceTickStep,
  chartUsesPercentFormats,
  chartHasPercentFormats as chartHasPercentFormatsFromOwned,
  isMaxMinYOrientation,
  valueLooksPercent,
} from "../chart-group-scales";
import { resolveAxisTextStyle } from "../chart-paint";
import { axisCanvasFont, axisHidesTickLabels } from "../chart-axis-reserve";
import { formatAxisTickValue } from "../chart-axis-ticks";
import { casdH } from "./boundary-hooks";

const TICK_PAD_DIVISOR = 2;
const TICK_EPS = 1e-9;
const MIDPOINT_DIVISOR = 2;
const DEFAULT_NICE_TICK_COUNT = 5;

export function readScaleMajorUnit(casdIn15601: any) {
  return casdH.majorUnitMap.get(casdIn15601);
}
export function minPositiveFinite(casdIn9097: any) {
  let casdBind19681;
  for (let casdBind20926 of casdIn9097)
    casdBind20926 === undefined ||
      !Number.isFinite(casdBind20926) ||
      casdBind20926 <= 0 ||
      (casdBind19681 =
        casdBind19681 === undefined
          ? casdBind20926
          : Math.min(casdBind19681, casdBind20926));
  return casdBind19681;
}
export function buildContinuousDomain(casdIn3863: any) {
  let casdBind12690 = finiteOrUndefined(casdIn3863.axis?.min),
    casdBind12691 = finiteOrUndefined(casdIn3863.axis?.max),
    casdBind12692 = finiteOrUndefined(casdIn3863.dataMin) ?? 0,
    casdBind12693 = finiteOrUndefined(casdIn3863.dataMax) ?? 0,
    [casdBind12694, casdBind12695] = casdIn3863.includeZeroBaseline
      ? [Math.min(0, casdBind12692), Math.max(0, casdBind12693)]
      : padDomainByTickStep(casdBind12692, casdBind12693);
  return {
    min: casdBind12690 ?? casdBind12694,
    max: casdBind12691 ?? casdBind12695,
    dataMin: casdBind12692,
    dataMax: casdBind12693,
    hasExplicitMin: casdBind12690 !== undefined,
    hasExplicitMax: casdBind12691 !== undefined,
    includeZeroBaseline: casdIn3863.includeZeroBaseline,
    expandAutoBorderHeadroom: casdIn3863.expandAutoBorderHeadroom ?? false,
  };
}
export function padDomainByTickStep(casdIn5328: any, casdIn5329: any) {
  if (casdIn5328 === casdIn5329) return [casdIn5328, casdIn5329];
  let casdBind14998 = Math.min(casdIn5328, casdIn5329),
    casdBind14999 = Math.max(casdIn5328, casdIn5329),
    casdBind15000 = Math.abs(
      tickStep(casdBind14998, casdBind14999, TICK_PAD_DIVISOR),
    );
  if (!Number.isFinite(casdBind15000) || casdBind15000 <= 0)
    return [casdIn5328, casdIn5329];
  let casdBind15001 =
      Math.floor(casdBind14998 / casdBind15000) * casdBind15000 - casdBind15000,
    casdBind15002 = Math.ceil(casdBind14999 / casdBind15000) * casdBind15000,
    casdBind15003 =
      casdBind14998 > 0 && casdBind15001 <= 0 ? casdBind14998 : casdBind15001,
    casdBind15004 =
      casdBind14999 < 0 && casdBind15002 >= 0 ? casdBind14999 : casdBind15002;
  return casdIn5328 <= casdIn5329
    ? [casdBind15003, casdBind15004]
    : [casdBind15004, casdBind15003];
}
export function clampToDomain(casdIn10688: any, casdIn10689: any) {
  let [casdBind21189 = 0, casdBind21190 = 0] = casdIn10688.domain();
  return Math.max(
    Math.min(casdBind21189, casdBind21190),
    Math.min(Math.max(casdBind21189, casdBind21190), casdIn10689),
  );
}
export function resolveAxisCrossValue(casdIn4313: any, casdIn4314: any) {
  let [casdBind13404 = 0, casdBind13405 = 0] = casdIn4314.domain(),
    casdBind13406 = Math.min(casdBind13404, casdBind13405),
    casdBind13407 = Math.max(casdBind13404, casdBind13405);
  switch (casdIn4313?.crosses) {
    case Tn.CROSSES_AUTO_ZERO:
      return clampToDomain(casdIn4314, 0);
    case Tn.CROSSES_MIN:
      return casdBind13406;
    case Tn.CROSSES_MAX:
      return casdBind13407;
    case Tn.CROSSES_AT:
      return casdIn4313.crossValue !== undefined &&
        Number.isFinite(casdIn4313.crossValue)
        ? clampToDomain(casdIn4314, casdIn4313.crossValue)
        : casdBind13406;
    default:
      return casdBind13406;
  }
}
export function planAxisMajorTicks(
  casdIn5180: any,
  casdIn5181: any,
  casdIn5182: any,
) {
  let casdBind14694 =
      positiveOrUndefined(casdIn5180?.majorUnit) ??
      readScaleMajorUnit(casdIn5181),
    casdBind14695 = finiteOrUndefined(casdIn5180?.min);
  if (casdBind14694 === undefined) {
    if (casdBind14695 !== undefined) {
      let [casdBind20260 = 0, casdBind20261 = 0] = casdIn5181.domain(),
        casdBind20262 = niceTickStep(casdBind20260, casdBind20261, casdIn5182);
      if (casdBind20262 > 0)
        return ticksFromUnit({
          domain: casdIn5181.domain(),
          unit: casdBind20262,
          explicitStart: casdBind14695,
        });
    }
    return casdIn5181.ticks(casdIn5182);
  }
  return ticksFromUnit({
    domain: casdIn5181.domain(),
    unit: casdBind14694,
    explicitStart: casdBind14695,
  });
}
export function planAxisMinorTicks(
  casdIn7256: any,
  casdIn7257: any,
  casdIn7258: any,
) {
  let casdBind17625 = positiveOrUndefined(casdIn7256?.minorUnit);
  if (casdBind17625 === undefined) return midpointsBetween(casdIn7258);
  let casdBind17626 = new Set(casdIn7258.map((item) => preciseNumberKey(item)));
  return ticksFromUnit({
    domain: casdIn7257.domain(),
    unit: casdBind17625,
    explicitStart: finiteOrUndefined(casdIn7256?.min),
  }).filter((item) => !casdBind17626.has(preciseNumberKey(item)));
}
export function waterfallForceZero(casdIn11964: any, casdIn11965: any) {
  return casdIn11964.yAxis?.deleted !== true ||
    casdIn11965 <= 0 ||
    chartHasPercentFormats(casdIn11964)
    ? false
    : chartHasPercentFormatsFromOwned(casdIn11964);
}
export function chartHasPercentFormats(casdIn15256: any) {
  return collectChartNumberFormats(casdIn15256).some(formatLooksPercent);
}
export function chartLooksPercent(casdIn15257: any) {
  return collectChartNumberFormats(casdIn15257).some(valueLooksPercent);
}
export function collectChartNumberFormats(casdIn10387: any) {
  return [
    casdIn10387.dataLabels?.numberFormatCode,
    ...casdIn10387.series.map((item) => item.dataLabels?.numberFormatCode),
  ];
}
export function ticksFromUnit(casdIn5317: any) {
  let [casdBind14969 = 0, casdBind14970 = 0] = casdIn5317.domain,
    casdBind14971 = casdBind14969 > casdBind14970,
    casdBind14972 = casdBind14971 ? casdBind14970 : casdBind14969,
    casdBind14973 = casdBind14971 ? casdBind14969 : casdBind14970,
    casdBind14974 =
      casdIn5317.explicitStart === undefined
        ? Math.ceil((casdBind14972 - TICK_EPS) / casdIn5317.unit) *
          casdIn5317.unit
        : casdIn5317.explicitStart,
    casdBind14975 = [];
  for (
    let casdBind22176 = casdBind14974;
    casdBind22176 <= casdBind14973 + TICK_EPS;
    casdBind22176 = casdBind14974 + casdBind14975.length * casdIn5317.unit
  )
    casdBind22176 >= casdBind14972 - TICK_EPS &&
      casdBind14975.push(preciseNumber(casdBind22176));
  return casdBind14971 ? casdBind14975.reverse() : casdBind14975;
}
export function midpointsBetween(props: any) {
  if (props.length <= 1) return [];
  let casdBind16248 = [];
  for (
    let casdBind18353 = 0;
    casdBind18353 < props.length - 1;
    casdBind18353 += 1
  ) {
    let casdBind19644 = props[casdBind18353],
      casdBind19645 = props[casdBind18353 + 1];
    casdBind19644 === undefined ||
      casdBind19645 === undefined ||
      !Number.isFinite(casdBind19644) ||
      !Number.isFinite(casdBind19645) ||
      casdBind16248.push((casdBind19644 + casdBind19645) / MIDPOINT_DIVISOR);
  }
  return casdBind16248;
}
export function finiteOrUndefined(casdIn12668: any) {
  return casdIn12668 !== undefined && Number.isFinite(casdIn12668)
    ? casdIn12668
    : undefined;
}
export function positiveOrUndefined(casdIn12127: any) {
  return casdIn12127 !== undefined &&
    Number.isFinite(casdIn12127) &&
    casdIn12127 > 0
    ? casdIn12127
    : undefined;
}
export function formatLooksPercent(casdIn14381: any) {
  return casdIn14381?.includes('"%"') ?? false;
}
export function preciseNumber(casdIn14382: any) {
  return Number(casdIn14382.toPrecision(14));
}
export function preciseNumberKey(casdIn15225: any) {
  return preciseNumber(casdIn15225).toString();
}
export function layoutValAxisRight(casdIn2443: any) {
  let { axis, chart, chartModel, ctx, maxRightFrac, plotDims, themeMap } =
    casdIn2443;
  if (axis?.deleted || axisHidesTickLabels(axis)) return 0;
  let casdBind9707 = planComboValueDomains(chartModel),
    casdBind9708 = applyNiceContinuousDomain(
      scaleLinear().range([plotDims.x, plotDims.x + plotDims.width]),
      buildContinuousDomain({
        axis,
        dataMin: casdBind9707.min,
        dataMax: casdBind9707.max,
        includeZeroBaseline: !chartUsesPercentFormats(chart, casdBind9707.min),
        expandAutoBorderHeadroom: true,
      }),
      DEFAULT_NICE_TICK_COUNT,
    ),
    casdBind9709 = plotDims.x + plotDims.width,
    casdBind9710 = resolveAxisTextStyle(axis, themeMap),
    casdBind9711 = 0;
  ctx.save();
  ctx.font = axisCanvasFont(casdBind9710);
  for (let casdBind19979 of planAxisMajorTicks(
    axis,
    casdBind9708,
    DEFAULT_NICE_TICK_COUNT,
  )) {
    let casdBind20819 = casdBind9708(casdBind19979),
      casdBind20820 = formatAxisTickValue(
        casdBind19979,
        axis?.numberFormatCode,
      ),
      casdBind20821 = ctx.measureText(casdBind20820).width;
    casdBind9711 = Math.max(
      casdBind9711,
      casdBind20819 + casdBind20821 / 2 - casdBind9709,
    );
  }
  return (
    ctx.restore(),
    Math.min(Math.max(0, plotDims.width * maxRightFrac), casdBind9711)
  );
}
export function crossingRatio(casdIn5466: any) {
  let { chart, chartModel } = casdIn5466,
    casdBind15268 = planComboValueDomains(chartModel),
    casdBind15269 = [0, 1];
  isMaxMinYOrientation(chart) && (casdBind15269 = [1, 0]);
  let casdBind15270 = applyNiceContinuousDomain(
    scaleLinear().range(casdBind15269),
    buildContinuousDomain({
      axis: chart.yAxis,
      dataMin: casdBind15268.min,
      dataMax: casdBind15268.max,
      includeZeroBaseline: !chartUsesPercentFormats(chart, casdBind15268.min),
      expandAutoBorderHeadroom: true,
    }),
    DEFAULT_NICE_TICK_COUNT,
  );
  return casdBind15270(clampToDomain(casdBind15270, 0));
}
export function shiftForCrossing(props: any) {
  let { crossingRatio, plotWidth, requiredAxisOffset, reservedRight } = props;
  if (crossingRatio >= 1) return 0;
  let casdBind17686 = Math.max(0, plotWidth - reservedRight);
  return Math.max(
    0,
    Math.min(
      requiredAxisOffset,
      (requiredAxisOffset - crossingRatio * casdBind17686) /
        (1 - crossingRatio),
    ),
  );
}

/** Legacy aliases (wave-126). */
export const wye = padDomainByTickStep;
export const Tye = planAxisMinorTicks;
export const Eye = waterfallForceZero;
export const Dye = chartLooksPercent;
export const Oye = midpointsBetween;
export const kye = formatLooksPercent;
export const bbe = layoutValAxisRight;
export const xbe = crossingRatio;
export const Sbe = shiftForCrossing;

const DOMAIN_HEADROOM_RATIO = 0.9;

export function expandDomainHeadroom(
  casdIn6303: any,
  casdIn6304: any,
  casdIn6305: any,
  casdIn6306: any,
) {
  if (
    casdIn6304?.min === undefined ||
    casdIn6304.min === 0 ||
    casdIn6304.max !== undefined ||
    casdIn6305 !== undefined
  )
    return;
  let casdBind16427 = readScaleMajorUnit(casdIn6303),
    [casdBind16428, casdBind16429] = casdIn6303.domain();
  casdBind16427 === undefined ||
    casdBind16428 === undefined ||
    casdBind16429 === undefined ||
    casdBind16429 <= casdBind16428 ||
    (casdIn6306 - casdBind16428) / (casdBind16429 - casdBind16428) <=
      DOMAIN_HEADROOM_RATIO ||
    casdIn6303.domain([casdBind16428, casdBind16429 + casdBind16427]);
}

export const workbookHelper536 = expandDomainHeadroom;
