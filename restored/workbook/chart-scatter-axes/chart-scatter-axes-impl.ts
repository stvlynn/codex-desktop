// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: scatter/bubble XY axis paint (legacy bh570 peel).
// Stage-3 wave-96.

import { csaH } from "./boundary-hooks";

/** Legacy Binding1210 — near-equality epsilon (px). */
const AXIS_NEAR_EPS = 0.5;
/** Legacy Binding1209 — axis title gap (px). */
const AXIS_TITLE_GAP = 8;

void csaH;
void AXIS_NEAR_EPS;
void AXIS_TITLE_GAP;

function nearEqualPx(csaIn14534: any, csaIn14535: any) {
  return (
    Math.abs(csaIn14534 - csaIn14535) <= AXIS_NEAR_EPS
  );
}
export function paintScatterAxes(csaIn405: any, csaIn406: any, csaIn407: any, csaIn408: any, csaIn409: any, csaIn410: any = csaIn408, ) {
  let {
      xAxis,
      yAxis,
      xStyles,
      yStyles,
      xAxisDeleted,
      yAxisDeleted,
      hideXTickLabels,
      xTicks,
      yTicks,
      yAxisPlan,
      showXTicks,
      showYTicks: csaBind3832,
      drawXGrid,
      drawYGrid,
      xLabelBand,
      yLabelBand,
      xTitleMetrics,
      yTitleMetrics,
    } = csaH.bh545(
      csaIn405,
      csaIn406,
      csaIn407,
      csaIn408,
      csaIn409,
    ),
    csaBind3833 = csaIn408.y + csaIn408.height,
    csaBind3834 = csaIn408.x;
  if (
    (csaIn405.save(),
    (csaIn405.lineWidth = 1),
    !xAxisDeleted &&
      xAxis?.line?.fill?.color &&
      ((csaIn405.strokeStyle = xStyles.lineColor ?? "#666"),
      csaIn405.beginPath(),
      csaIn405.moveTo(csaIn408.x, csaBind3833),
      csaIn405.lineTo(
        csaIn408.x + csaIn408.width,
        csaBind3833,
      ),
      csaIn405.stroke()),
    !yAxisDeleted &&
      yAxis?.line?.fill?.color &&
      ((csaIn405.strokeStyle = yStyles.lineColor ?? "#666"),
      csaIn405.beginPath(),
      csaIn405.moveTo(csaBind3834, csaIn408.y),
      csaIn405.lineTo(
        csaBind3834,
        csaIn408.y + csaIn408.height,
      ),
      csaIn405.stroke()),
    !xAxisDeleted)
  ) {
    csaIn405.font = csaH.bh430(xStyles);
    csaIn405.textAlign = "center";
    csaIn405.textBaseline = "top";
    csaIn405.fillStyle = xStyles.textColor;
    let csaBind10016 = xStyles.gridLineColor ?? xStyles.lineColor;
    xTicks.forEach((item) => {
      let csaBind11990 = csaIn407.x(item);
      if (
        Number.isFinite(csaBind11990) &&
        (drawXGrid &&
          !nearEqualPx(csaBind11990, csaBind3834) &&
          ((csaIn405.strokeStyle = csaBind10016),
          csaIn405.beginPath(),
          csaIn405.moveTo(csaBind11990, csaIn408.y),
          csaIn405.lineTo(
            csaBind11990,
            csaIn408.y + csaIn408.height,
          ),
          csaIn405.stroke()),
        showXTicks &&
          ((csaIn405.strokeStyle = xStyles.lineColor),
          csaIn405.beginPath(),
          csaIn405.moveTo(csaBind11990, csaBind3833),
          csaIn405.lineTo(
            csaBind11990,
            csaBind3833 + 4,
          ),
          csaIn405.stroke()),
        !hideXTickLabels)
      ) {
        let csaBind22268 = csaH.bh544(
          item,
          xAxis?.numberFormatCode,
        );
        csaIn405.fillText(
          csaBind22268,
          csaBind11990,
          csaBind3833 + 6,
        );
      }
    });
  }
  if (!yAxisDeleted) {
    csaIn405.font = csaH.bh430(yStyles);
    csaIn405.textAlign = "right";
    csaIn405.textBaseline = "middle";
    csaIn405.fillStyle = yStyles.textColor;
    let csaBind9848 = yStyles.gridLineColor ?? yStyles.lineColor;
    yTicks.forEach((item) => {
      let csaBind11790 = csaIn407.y(item);
      if (
        Number.isFinite(csaBind11790) &&
        (drawYGrid &&
          !nearEqualPx(csaBind11790, csaBind3833) &&
          ((csaIn405.strokeStyle = csaBind9848),
          csaIn405.beginPath(),
          csaIn405.moveTo(csaIn408.x, csaBind11790),
          csaIn405.lineTo(
            csaIn408.x + csaIn408.width,
            csaBind11790,
          ),
          csaIn405.stroke()),
        csaBind3832 &&
          ((csaIn405.strokeStyle = yStyles.lineColor),
          csaIn405.beginPath(),
          csaIn405.moveTo(
            csaBind3834 - 4,
            csaBind11790,
          ),
          csaIn405.lineTo(csaBind3834, csaBind11790),
          csaIn405.stroke()),
        !yAxisPlan?.hideTickLabels)
      ) {
        let csaBind22269 = csaH.bh544(
          item,
          yAxis?.numberFormatCode,
        );
        csaIn405.fillText(
          csaBind22269,
          csaBind3834 - 6,
          csaBind11790,
        );
      }
    });
  }
  if (xTitleMetrics) {
    let csaBind17367 =
      csaBind3833 +
      (xLabelBand + AXIS_TITLE_GAP + xTitleMetrics.height / 2);
    csaH.bh460({
      ctx: csaIn405,
      axis: xAxis,
      metrics: xTitleMetrics,
      automaticCenter: {
        x: csaIn408.x + csaIn408.width / 2,
        y: csaBind17367,
      },
      chartArea: csaIn410,
      themeMap: csaIn409,
      fallbackColor: xStyles.textColor ?? "#666",
    });
  }
  yTitleMetrics &&
    csaH.bh460({
      ctx: csaIn405,
      axis: yAxis,
      metrics: yTitleMetrics,
      automaticCenter: {
        x:
          csaIn408.x -
          yLabelBand -
          AXIS_TITLE_GAP -
          yTitleMetrics.width / 2,
        y: csaIn408.y + csaIn408.height / 2,
      },
      chartArea: csaIn410,
      themeMap: csaIn409,
      fallbackColor: yStyles.textColor ?? "#666",
    });
  csaIn405.restore();
}

