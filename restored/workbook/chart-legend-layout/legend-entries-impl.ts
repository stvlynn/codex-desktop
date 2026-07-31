// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: chart legend entry list (legacy ibe).
// Stage-3 wave-108.

import { Cn } from "../presentation-protobuf";
import { cllH } from "./boundary-hooks";

void Cn;
void cllH;

export function legendEntries(cllIn1340: any, cllIn1341: any) {
  let cllBind7068 = new cllH.ChartAsset(cllIn1340),
    cllBind7069 = new Set(cllBind7068.legend.deletedEntryIndices);
  if (cllH.isPieLike(cllIn1340)) {
    let cllBind13408 = cllIn1340.series[0];
    if (!cllBind13408) return [];
    let cllBind13409 = cllIn1340.series.indexOf(cllBind13408),
      cllBind13410 = cllH.bh347(cllBind13408, cllIn1340.categories),
      cllBind13411 = cllBind13408.values?.length ?? 0,
      cllBind13412 = Math.max(cllBind13411, cllBind13410.length);
    if (cllBind13412 === 0) return [];
    let cllBind13413 = cllBind13408.name || "Slice",
      cllBind13414 = [];
    for (let cllBind20205 = 0; cllBind20205 < cllBind13412; cllBind20205++) {
      let cllBind21060 =
        cllBind13410[cllBind20205] ?? `${cllBind13413} ${cllBind20205 + 1}`;
      cllBind13414.push({
        label: cllBind21060,
        seriesIndex: cllBind13409,
        chartType: cllIn1340.type,
        pointIndex: cllBind20205,
      });
    }
    return cllH.filterDeleted(cllBind13414, cllBind7069);
  }
  if (cllIn1340.type === (cllH.CHART_TYPE_TREEMAP ?? Cn.CHART_TYPE_TREEMAP)) {
    let cllBind16706 = cllH.treemapEntries(cllIn1340, cllIn1341);
    return cllBind16706.length === 0
      ? []
      : cllH.filterDeleted(
          cllBind16706.map((item) => ({
            label: item.label,
            seriesIndex: 0,
            chartType: cllH.CHART_TYPE_TREEMAP ?? Cn.CHART_TYPE_TREEMAP,
            fillColor: item.color,
          })),
          cllBind7069,
        );
  }
  if (cllIn1340.type === (cllH.CHART_TYPE_WATERFALL ?? Cn.CHART_TYPE_WATERFALL))
    return cllH.filterDeleted(cllH.waterfallEntries(cllIn1341), cllBind7069);
  let cllBind7070 = cllH.seriesChartTypes(cllIn1340, cllBind7068),
    cllBind7071 = cllH.filterDeleted(
      cllIn1340.series.map((item, index) => ({
        label: item.name || `Series ${index + 1}`,
        seriesIndex: index,
        chartType: cllBind7070[index] ?? cllIn1340.type,
      })),
      cllBind7069,
    );
  return cllH.reverseLegend(cllIn1340) ? cllBind7071.reverse() : cllBind7071;
}

/** Legacy alias. */
export const ibe = legendEntries;
