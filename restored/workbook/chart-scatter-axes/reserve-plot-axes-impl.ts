// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: reserve plot area for axis labels and titles.
// Stage-3 wave-112.

import { planScatterAxes } from "./chart-scatter-axes-impl";
import { axisHasTitleManualLayout } from "../chart-axis-ticks";

const AXIS_TITLE_GAP_PX = 8;

void planScatterAxes;
void axisHasTitleManualLayout;
void AXIS_TITLE_GAP_PX;

export function reservePlotAxes(
  csaIn2214: any,
  csaIn2215: any,
  csaIn2216: any,
  csaIn2217: any,
  csaIn2218: any,
  csaIn2219: any = {},
) {
  let csaBind9242 = csaIn2219.maxLeftFrac ?? 1,
    csaBind9243 = csaIn2219.maxBottomFrac ?? 1,
    csaBind9244 = planScatterAxes(
      csaIn2214,
      csaIn2215,
      csaIn2216,
      csaIn2217,
      csaIn2218,
    ),
    csaBind9245 = csaIn2217.width * csaBind9242,
    csaBind9246 = csaIn2217.height * csaBind9243,
    csaBind9247 = csaBind9244.yAxisDeleted
      ? 0
      : Math.min(
          csaBind9245,
          csaBind9244.yLabelBand +
            (csaBind9244.yTitleMetrics &&
            !axisHasTitleManualLayout(csaBind9244.yAxis)
              ? AXIS_TITLE_GAP_PX + csaBind9244.yTitleMetrics.width
              : 0),
        ),
    csaBind9248 = csaBind9244.xAxisDeleted
      ? 0
      : Math.min(
          csaBind9246,
          csaBind9244.xLabelBand +
            (csaBind9244.xTitleMetrics &&
            !axisHasTitleManualLayout(csaBind9244.xAxis)
              ? AXIS_TITLE_GAP_PX + csaBind9244.xTitleMetrics.height
              : 0),
        );
  return {
    plotDims: csaIn2219.preservePlotArea
      ? csaIn2217
      : {
          x: csaIn2217.x + csaBind9247,
          y: csaIn2217.y,
          width: Math.max(0, csaIn2217.width - csaBind9247),
          height: Math.max(0, csaIn2217.height - csaBind9248),
        },
    reservedLeft: csaBind9247,
    reservedBottom: csaBind9248,
    yAxisPlan: csaBind9244.yAxisPlan,
  };
}
