// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: combo chart render groups (legacy helper532).
// Stage-3 wave-108.

import { Cn } from "../presentation-protobuf";
import { ccgH } from "./boundary-hooks";

void Cn;
void ccgH;

export function buildComboRenderGroups(
  ccgIn1728: any,
  ccgIn1729: any,
  ccgIn1730: any,
) {
  let ccgBind8099 = new ccgH.ChartAsset(ccgIn1728).comboRenderGroups.map(
      (item) => {
        let ccgBind17209 = ccgH.sliceGroupChart(ccgIn1728, item),
          ccgBind17210 = ccgH.hiddenSeriesIndices(
            item.firstSeriesIndex,
            item.group.series.length,
            ccgIn1730,
          );
        return {
          renderGroup: item,
          groupChart: ccgBind17209,
          groupScales: ccgH.bh423(
            ccgBind17209,
            ccgIn1729,
            ccgBind17210,
            new ccgH.ChartAsset(ccgBind17209),
          ),
          groupHiddenSeriesIndices: ccgBind17210,
        };
      },
    ),
    ccgBind8100 = new Map();
  for (let ccgBind21503 of ccgBind8099) {
    let ccgBind22051 = ccgH.axisKey(ccgBind21503.renderGroup),
      ccgBind22052 = ccgBind8100.get(ccgBind22051) ?? [];
    ccgBind22052.push(ccgBind21503);
    ccgBind8100.set(ccgBind22051, ccgBind22052);
  }
  for (let ccgBind12500 of ccgBind8100.values()) {
    if (ccgBind12500.length < 2) continue;
    let ccgBind12855 = ccgBind12500[0];
    if (!ccgBind12855) continue;
    let ccgBind12856 = {
        ...ccgIn1728,
        type: Cn.CHART_TYPE_COMBO,
        series: ccgBind12500.flatMap(({ renderGroup }) =>
          renderGroup.group.series.map((item) => item),
        ),
        chartGroups: ccgBind12500.map(({ renderGroup }) => renderGroup.group),
        xAxis: ccgBind12855.renderGroup.xAxis,
        yAxis: ccgBind12855.renderGroup.yAxis,
      },
      ccgBind12857 = ccgH.bh423(
        ccgBind12856,
        ccgIn1729,
        undefined,
        new ccgH.ChartAsset(ccgBind12856),
      ).y;
    for (let ccgBind22746 of ccgBind12500)
      ccgBind22746.groupScales = {
        ...ccgBind22746.groupScales,
        y: ccgBind12857,
      };
  }
  return ccgBind8099;
}

/** Legacy alias. */
export const workbookHelper532 = buildComboRenderGroups;
