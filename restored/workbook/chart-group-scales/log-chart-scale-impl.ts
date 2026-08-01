// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: logarithmic chart axis scale (legacy yye).
// Stage-3 wave-116.

import { cgsH } from "./boundary-hooks";

export function buildLogChartScale({
  automaticMin,
  automaticMax,
  automaticPositiveMin,
  range,
  axis,
  nice,
}: {
  automaticMin: any;
  automaticMax: any;
  automaticPositiveMin: any;
  range: any;
  axis: any;
  nice: any;
}) {
  let cgsBind9186 = axis.logBase;
  if (
    cgsBind9186 === undefined ||
    !Number.isFinite(cgsBind9186) ||
    cgsBind9186 < 2 ||
    cgsBind9186 > 1e3
  )
    throw Error("Logarithmic chart axis base must be from 2 through 1000");
  let cgsBind9187 =
      axis.min ?? (automaticMin > 0 ? automaticMin : automaticPositiveMin),
    cgsBind9188 = axis.max ?? automaticMax;
  if (
    cgsBind9187 === undefined ||
    !Number.isFinite(cgsBind9187) ||
    !Number.isFinite(cgsBind9188) ||
    cgsBind9187 <= 0 ||
    cgsBind9188 <= 0
  )
    throw Error("Logarithmic chart axis bounds must be positive");
  let cgsBind9189 = cgsH
    .scaleLog()
    .base(cgsBind9186)
    .domain([cgsBind9187, cgsBind9188])
    .range(range);
  if (!nice || (axis.min !== undefined && axis.max !== undefined))
    return cgsBind9189;
  cgsBind9189.nice();
  let [cgsBind9190, cgsBind9191] = cgsBind9189.domain();
  if (cgsBind9190 === undefined || cgsBind9191 === undefined)
    throw Error("Expected a two-value logarithmic chart scale domain");
  return cgsBind9189.domain([axis.min ?? cgsBind9190, axis.max ?? cgsBind9191]);
}

export const yye = buildLogChartScale;
