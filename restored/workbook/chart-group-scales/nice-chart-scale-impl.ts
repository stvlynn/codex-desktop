// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: nice linear/log chart scale (legacy workbookHelper398).
// Stage-3 wave-124.

import { scaleLinear } from "../../vendor/d3-scale-linear";
import { buildLogChartScale } from "./log-chart-scale-impl";

export function buildNiceChartScale({
  automaticMin: any,
  automaticMax: any,
  automaticPositiveMin: any,
  range: any,
  axis: any,
  niceCount: any,
}: any) {
  if (axis?.logBase !== undefined)
    return buildLogChartScale({
      automaticMin,
      automaticMax,
      automaticPositiveMin,
      range,
      axis,
      nice: niceCount !== false,
    });
  let cgsBind10627 = scaleLinear()
    .domain([axis?.min ?? automaticMin, axis?.max ?? automaticMax])
    .range(range);
  if (
    niceCount === false ||
    (axis?.min !== undefined && axis.max !== undefined)
  )
    return cgsBind10627;
  niceCount === undefined ? cgsBind10627.nice() : cgsBind10627.nice(niceCount);
  let [cgsBind10628, cgsBind10629] = cgsBind10627.domain();
  if (cgsBind10628 === undefined || cgsBind10629 === undefined)
    throw Error("Expected a two-value chart scale domain");
  return cgsBind10627.domain([
    axis?.min ?? cgsBind10628,
    axis?.max ?? cgsBind10629,
  ]);
}

/** Legacy alias (wave-124). */
export const workbookHelper398 = buildNiceChartScale;
/** Compat alias for barrels. */
export const workbookFn398 = workbookHelper398;
