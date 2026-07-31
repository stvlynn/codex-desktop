// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: scatter/bubble XY axis paint (legacy bh570 peel).
// Stage-3 wave-96/104 (planScatterAxes / helper545).

import { Wn } from "../presentation-protobuf";
import { csaH } from "./boundary-hooks";

void Wn;

/** Legacy Binding1210 — near-equality epsilon (px). */
const AXIS_NEAR_EPS = 0.5;
/** Legacy Binding1209 — axis title gap (px). */
const AXIS_TITLE_GAP = 8;

void csaH;
void AXIS_NEAR_EPS;
void AXIS_TITLE_GAP;

function nearEqualPx(csaIn14534: any, csaIn14535: any) {
  return Math.abs(csaIn14534 - csaIn14535) <= AXIS_NEAR_EPS;
}
export function paintScatterAxes(
  csaIn405: any,
  csaIn406: any,
  csaIn407: any,
  csaIn408: any,
  csaIn409: any,
  csaIn410: any = csaIn408,
) {
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
    } = planScatterAxes(csaIn405, csaIn406, csaIn407, csaIn408, csaIn409),
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
      csaIn405.lineTo(csaIn408.x + csaIn408.width, csaBind3833),
      csaIn405.stroke()),
    !yAxisDeleted &&
      yAxis?.line?.fill?.color &&
      ((csaIn405.strokeStyle = yStyles.lineColor ?? "#666"),
      csaIn405.beginPath(),
      csaIn405.moveTo(csaBind3834, csaIn408.y),
      csaIn405.lineTo(csaBind3834, csaIn408.y + csaIn408.height),
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
          csaIn405.lineTo(csaBind11990, csaIn408.y + csaIn408.height),
          csaIn405.stroke()),
        showXTicks &&
          ((csaIn405.strokeStyle = xStyles.lineColor),
          csaIn405.beginPath(),
          csaIn405.moveTo(csaBind11990, csaBind3833),
          csaIn405.lineTo(csaBind11990, csaBind3833 + 4),
          csaIn405.stroke()),
        !hideXTickLabels)
      ) {
        let csaBind22268 = csaH.bh544(item, xAxis?.numberFormatCode);
        csaIn405.fillText(csaBind22268, csaBind11990, csaBind3833 + 6);
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
          csaIn405.lineTo(csaIn408.x + csaIn408.width, csaBind11790),
          csaIn405.stroke()),
        csaBind3832 &&
          ((csaIn405.strokeStyle = yStyles.lineColor),
          csaIn405.beginPath(),
          csaIn405.moveTo(csaBind3834 - 4, csaBind11790),
          csaIn405.lineTo(csaBind3834, csaBind11790),
          csaIn405.stroke()),
        !yAxisPlan?.hideTickLabels)
      ) {
        let csaBind22269 = csaH.bh544(item, yAxis?.numberFormatCode);
        csaIn405.fillText(csaBind22269, csaBind3834 - 6, csaBind11790);
      }
    });
  }
  if (xTitleMetrics) {
    let csaBind17367 =
      csaBind3833 + (xLabelBand + AXIS_TITLE_GAP + xTitleMetrics.height / 2);
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
        x: csaIn408.x - yLabelBand - AXIS_TITLE_GAP - yTitleMetrics.width / 2,
        y: csaIn408.y + csaIn408.height / 2,
      },
      chartArea: csaIn410,
      themeMap: csaIn409,
      fallbackColor: yStyles.textColor ?? "#666",
    });
  csaIn405.restore();
}

export function planScatterAxes(
  csaIn994: any,
  csaIn995: any,
  csaIn996: any,
  csaIn997: any,
  csaIn998: any,
) {
  let csaBind6081 = csaIn995.xAxis ?? csaIn995.yAxis,
    csaBind6082 = csaIn995.yAxis ?? csaIn995.xAxis,
    csaBind6083 = csaH.bh428(csaBind6081, csaIn998),
    csaBind6084 = csaH.bh428(csaBind6082, csaIn998),
    csaBind6085 = !!csaBind6081?.deleted,
    csaBind6086 = !!csaBind6082?.deleted,
    csaBind6087 = csaH.bh436(csaBind6081),
    { xTickCount, yTickCount } = csaH.planTickCounts(csaIn997),
    csaBind6088 = csaBind6085
      ? []
      : csaH.bh441(csaIn996.x, csaBind6081, xTickCount),
    csaBind6089 = csaBind6086
      ? undefined
      : csaH.bh440({
          ctx: csaIn994,
          axis: csaBind6082,
          scale: csaIn996.y,
          preferredTickCount: yTickCount,
          themeMap: csaIn998,
        }),
    csaBind6090 = csaBind6089?.ticks ?? [],
    csaBind6091 =
      csaBind6081?.majorTickMark !== undefined &&
      csaBind6081.majorTickMark !== Wn.TICK_MARK_UNSPECIFIED &&
      csaBind6081.majorTickMark !== Wn.TICK_MARK_NONE,
    csaBind6092 =
      csaBind6082?.majorTickMark !== undefined &&
      csaBind6082.majorTickMark !== Wn.TICK_MARK_UNSPECIFIED &&
      csaBind6082.majorTickMark !== Wn.TICK_MARK_NONE,
    csaBind6093 = !!csaBind6081?.majorGridlines?.fill?.color,
    csaBind6094 = !!csaBind6082?.majorGridlines?.fill?.color;
  return (
    (csaIn994.font = csaH.bh430(csaBind6083)),
    {
      xAxis: csaBind6081,
      yAxis: csaBind6082,
      xStyles: csaBind6083,
      yStyles: csaBind6084,
      xAxisDeleted: csaBind6085,
      yAxisDeleted: csaBind6086,
      hideXTickLabels: csaBind6087,
      xTicks: csaBind6088,
      yTicks: csaBind6090,
      yAxisPlan: csaBind6089,
      showXTicks: csaBind6091,
      showYTicks: csaBind6092,
      drawXGrid: csaBind6093,
      drawYGrid: csaBind6094,
      xLabelBand:
        !csaBind6085 && !csaBind6087 && csaBind6088.length > 0
          ? csaBind6083.fontSize + csaH.labelGapPx
          : 0,
      yLabelBand: csaBind6086 ? 0 : (csaBind6089?.labelBandWidth ?? 0),
      xTitleMetrics: csaBind6085
        ? undefined
        : csaH.bh438(
            csaIn998,
            csaBind6081?.title,
            csaBind6081?.titleTextStyle,
            csaBind6083.fontSize,
            0,
          ),
      yTitleMetrics: csaBind6086
        ? undefined
        : csaH.bh438(
            csaIn998,
            csaBind6082?.title,
            csaBind6082?.titleTextStyle,
            csaBind6084.fontSize,
            -90,
          ),
    }
  );
}

/** Legacy alias. */
export const workbookHelper545 = planScatterAxes;
