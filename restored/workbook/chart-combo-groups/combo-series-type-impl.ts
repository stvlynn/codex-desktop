// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: combo series types + group chart clone (legacy rbe/pxe).
// Stage-3 wave-134.

import { Cn } from "../presentation-protobuf";

export function rbe(ccgIn6862: any, ccgIn6863: any) {
  let ccgBind17177 = ccgIn6862.series.map(() => ccgIn6862.type);
  if (ccgIn6862.type !== Cn.CHART_TYPE_COMBO) return ccgBind17177;
  for (let ccgBind20736 of ccgIn6863.comboRenderGroups)
    for (
      let ccgBind21999 = 0;
      ccgBind21999 < ccgBind20736.group.series.length;
      ccgBind21999++
    )
      ccgBind17177[ccgBind20736.firstSeriesIndex + ccgBind21999] =
        ccgBind20736.group.type;
  return ccgBind17177;
}
export function pxe(ccgIn4843: any, ccgIn4844: any) {
  let { group, xAxis, yAxis } = ccgIn4844;
  return {
    ...ccgIn4843,
    type: group.type,
    series: group.series,
    xAxis,
    yAxis,
    dataLabels: group.dataLabels,
    barOptions: group.barOptions,
    lineOptions: group.lineOptions,
    areaOptions: group.areaOptions,
    scatterOptions: group.scatterOptions,
    bubbleOptions: group.bubbleOptions,
    radarOptions: group.radarOptions,
  };
}
