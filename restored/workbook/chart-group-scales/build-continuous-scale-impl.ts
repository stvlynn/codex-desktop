// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: continuous/log axis scale builder (legacy _O).
// Stage-3 wave-125. Powers niceAxisDomain + buildContinuousScale hooks.

import { scaleLinear } from "../../vendor/d3-scale-linear";
import { computeAxisAutoDomain, ceilToMajor } from "../chart-axis-auto-domain";
import { buildNiceChartScale } from "./nice-chart-scale-impl";
import { ccsH } from "./boundary-hooks-continuous";

export function buildContinuousScale(ccsIn2030: any) {
  let {
    automaticMin,
    automaticMax,
    automaticPositiveMin,
    range,
    axis,
    expandWideValuesToZero = true,
    expandNarrowValuesTowardZero = true,
    maximumAutoMainIncrementCount = ccsH.defaultNiceCount,
    minimumAutomaticMax,
    automaticMajorUnit,
  } = ccsIn2030;
  if (axis?.logBase !== undefined)
    return buildNiceChartScale({
      automaticMin,
      automaticMax,
      automaticPositiveMin,
      range,
      axis,
      niceCount: maximumAutoMainIncrementCount,
    });
  let { domain, majorUnit } = computeAxisAutoDomain({
    sourceMin: automaticMin,
    sourceMax: automaticMax,
    axis,
    expandWideValuesToZero,
    expandNarrowValuesTowardZero,
    maximumAutoMainIncrementCount,
    automaticMajorUnit,
  });
  axis?.max === undefined &&
    minimumAutomaticMax !== undefined &&
    domain[1] < minimumAutomaticMax &&
    (domain[1] = ceilToMajor(minimumAutomaticMax, majorUnit));
  let ccsBind8869 = scaleLinear().domain(domain).range(range);
  return (
    ccsH.majorUnitMap.set(ccsBind8869, majorUnit),
    ccsBind8869
  );
}

/** Legacy alias (wave-125). */
export const _O = buildContinuousScale;
