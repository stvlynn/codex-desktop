// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: map-legend value ramp metrics (legacy #489).
// Stage-3 wave-114.

import { extent as AppInitialNat } from "d3-array";
import { workbookHelper347 as coerceChartNumber } from "../chart-asset";
import { formatChartNumber } from "../chart-axis-ticks";
import { cllH } from "./boundary-hooks";

const resolveSeriesColor = (...args: any[]) => cllH.bh465(...args);
const colorRampFromHex = (...args: any[]) => cllH.bh466(...args);

void AppInitialNat;
void coerceChartNumber;
void resolveSeriesColor;
void colorRampFromHex;
void formatChartNumber;

export function buildMapLegendRamp(cllIn2510: any, cllIn2511: any) {
  if (!cllIn2510.series.length) return null;
  let cllBind9861 = cllIn2510.series[0];
  if (!cllBind9861) return null;
  let cllBind9862 = coerceChartNumber(cllBind9861, cllIn2510.categories),
    cllBind9863 = cllBind9861.values ?? [];
  if (!cllBind9862 || cllBind9862.length === 0 || cllBind9863.length === 0)
    return null;
  let cllBind9864 = [];
  if (
    (cllBind9862.forEach((item, index) => {
      let cllBind21404 = cllBind9863[index];
      item != null &&
        typeof cllBind21404 == "number" &&
        Number.isFinite(cllBind21404) &&
        cllBind9864.push(cllBind21404);
    }),
    cllBind9864.length === 0)
  )
    return null;
  let [cllBind9865, cllBind9866] = AppInitialNat(cllBind9864),
    cllBind9867 = cllBind9865 ?? 0,
    cllBind9868 = cllBind9866 ?? cllBind9867,
    cllBind9869 = colorRampFromHex(
      resolveSeriesColor(cllBind9861, 0, cllIn2511),
    ),
    cllBind9870 = cllBind9861.valuesFormatCode ?? undefined,
    cllBind9871 = cllBind9861.name?.trim();
  return {
    min: cllBind9867,
    max: cllBind9868,
    rampStart: cllBind9869.start,
    rampEnd: cllBind9869.end,
    minLabel: formatChartNumber(cllBind9867, cllBind9870),
    maxLabel: formatChartNumber(cllBind9868, cllBind9870),
    seriesName: cllBind9871 && cllBind9871.length > 0 ? cllBind9871 : undefined,
  };
}
