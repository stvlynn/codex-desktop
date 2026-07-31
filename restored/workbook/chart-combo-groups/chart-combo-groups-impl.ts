// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: combo-chart group dispatch (legacy yxe).
// Stage-3 wave-103. chart-paint hook was misnamed paintScatter.

import { Cn, Hn } from "../presentation-protobuf";
import { paintBarSeries } from "../chart-bar-series";
import { paintLineSeries } from "../chart-line-series";
import { paintAreaSeries } from "../chart-area-series";
import { ccgH } from "./boundary-hooks";
import { buildComboRenderGroups } from "./build-combo-render-groups-impl";

void Cn;
void Hn;
void paintBarSeries;
void paintLineSeries;
void paintAreaSeries;
void ccgH;

export function paintComboGroups(
  ccgIn1093: any,
  ccgIn1094: any,
  ccgIn1095: any,
  ccgIn1096: any,
  ccgIn1097: any,
  ccgIn1098: any,
  ccgIn1099: any,
  ccgIn1100: any,
  ccgIn1101: any,
) {
  let ccgBind6474 =
    ccgIn1101 ?? buildComboRenderGroups(ccgIn1094, ccgIn1095, ccgIn1099);
  if (ccgBind6474.length === 0) return;
  let ccgBind6475 = new Set();
  for (let { renderGroup, groupScales } of ccgBind6474) {
    let ccgBind10772 = renderGroup.yAxis;
    if (
      renderGroup.isPrimaryValueAxis ||
      !ccgBind10772 ||
      (ccgBind10772.id !== undefined && ccgBind6475.has(ccgBind10772.id))
    )
      continue;
    let ccgBind10773 =
      ccgBind10772.position === Hn.AXIS_POSITION_LEFT
        ? "left"
        : ccgBind10772.position === Hn.AXIS_POSITION_RIGHT
          ? "right"
          : undefined;
    if (!ccgBind10773) continue;
    let ccgBind10774 = groupScales.y.domain(),
      ccgBind10775 = ccgBind10774[0],
      ccgBind10776 = ccgBind10774[ccgBind10774.length - 1];
    if (ccgBind10775 === undefined || ccgBind10776 === undefined) continue;
    let ccgBind10777 = groupScales.y(Math.min(ccgBind10775, ccgBind10776));
    ccgH.paintSecondaryValueAxis({
      ctx: ccgIn1093,
      axis: ccgBind10772,
      scale: groupScales.y,
      dims: ccgIn1095,
      chartArea: ccgIn1096,
      themeMap: ccgIn1097,
      side: ccgBind10773,
      baselineY: ccgBind10777,
    });
    ccgBind10772.id !== undefined && ccgBind6475.add(ccgBind10772.id);
  }
  for (let {
    renderGroup,
    groupChart,
    groupScales,
    groupHiddenSeriesIndices,
  } of ccgBind6474)
    switch (renderGroup.group.type) {
      case Cn.CHART_TYPE_BAR:
        paintBarSeries(
          ccgIn1093,
          groupChart,
          groupScales,
          ccgIn1097,
          ccgIn1098,
          groupHiddenSeriesIndices,
        );
        break;
      case Cn.CHART_TYPE_LINE:
      case Cn.CHART_TYPE_LINE_3D:
        paintLineSeries(
          ccgIn1093,
          groupChart,
          ccgIn1095,
          groupScales,
          ccgIn1097,
          ccgIn1098,
          groupHiddenSeriesIndices,
          ccgIn1100,
        );
        break;
      case Cn.CHART_TYPE_AREA:
      case Cn.CHART_TYPE_AREA_3D:
        paintAreaSeries(
          ccgIn1093,
          groupChart,
          groupScales,
          ccgIn1097,
          ccgIn1095,
          ccgIn1098,
          groupHiddenSeriesIndices,
        );
        break;
      default:
        break;
    }
}

/** Legacy alias. */
export const yxe = paintComboGroups;
