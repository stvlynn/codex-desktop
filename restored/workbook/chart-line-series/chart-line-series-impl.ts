// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: chart line-series paint (legacy helper528).
// Stage-3 wave-99.

import { line as d3Line } from "../../vendor/d3-shape-line-pie-stack";
import {
  curveCatmullRom as d3CurveCatmullRom,
  curveLinear as d3CurveLinear,
} from "../../vendor/d3-shape-curves";
import { paintChartTrendline } from "../chart-trendline";
import { paintChartDataLabel } from "../chart-data-labels";
import { clnH } from "./boundary-hooks";

void d3Line;
void d3CurveCatmullRom;
void d3CurveLinear;
void paintChartTrendline;
void paintChartDataLabel;
void clnH;

export function paintLineSeries(
  clnIn554: any,
  clnIn555: any,
  clnIn556: any,
  clnIn557: any,
  clnIn558: any,
  clnIn559: any,
  clnIn560: any,
  clnIn561: any,
) {
  let { x, y } = clnIn557,
    clnBind4494 = clnH.stackLineLayers(clnIn555, clnIn560),
    clnBind4495 = clnBind4494.categories;
  clnBind4494.layers.forEach((item) => {
    let clnBind4650 = clnIn555.series[item.seriesIndex];
    if (!clnBind4650) return;
    let clnBind4651 = clnH.bh481(clnBind4650, item.seriesIndex, clnIn558),
      clnBind4652 = clnBind4651.color;
    clnIn554.strokeStyle = clnBind4652;
    clnIn554.lineWidth = clnBind4651.widthPx;
    let clnBind4653 = [];
    for (
      let clnBind10612 = 0;
      clnBind10612 < clnBind4495.length;
      clnBind10612++
    ) {
      let clnBind10958 = clnBind4495[clnBind10612],
        clnBind10959 = clnH.bh425(x, clnBind10958);
      if (clnBind10959 === undefined) continue;
      let clnBind10960 = item.values[clnBind10612];
      if (clnBind10960 === undefined || !Number.isFinite(clnBind10960))
        continue;
      let clnBind10961 = y(clnBind10960);
      if (
        Number.isFinite(clnBind10961) &&
        (clnBind4653.push({
          cx: clnBind10959,
          cy: clnBind10961,
          idx: clnBind10612,
          value: clnBind10960,
        }),
        clnIn559)
      ) {
        let clnBind15504 = clnBind4650.values[clnBind10612] ?? 0;
        clnIn559.push({
          kind: "line-point",
          x: clnBind10959 - 3,
          y: clnBind10961 - 3,
          width: 6,
          height: 6,
          seriesName: clnBind4650.name,
          category: clnBind10958,
          value: clnBind15504,
          color: clnBind4652,
          anchorX: clnBind10959,
          anchorY: clnBind10961,
        });
      }
    }
    if (clnBind4653.length > 0 && clnBind4651.visible) {
      clnIn554.save();
      clnH.bh433(clnIn554, clnBind4650.stroke, clnIn558, {
        color: clnBind4652,
        widthPx: clnBind4651.widthPx,
      });
      let clnBind15867 = clnBind4650.smooth ?? clnIn555.lineOptions?.smooth;
      clnIn554.beginPath();
      d3Line()
        .x((clnIn16627) => clnIn16627.cx)
        .y((clnIn16628) => clnIn16628.cy)
        .curve(clnBind15867 ? d3CurveCatmullRom : d3CurveLinear)
        .context(clnIn554)(clnBind4653);
      clnIn554.stroke();
      clnIn554.restore();
    }
    if (clnBind4650.trendlines?.length) {
      let clnBind17627 = clnIn561?.bySeriesIndex.get(item.seriesIndex);
      paintChartTrendline(
        clnIn554,
        clnIn555,
        clnBind4650,
        item.seriesIndex,
        clnBind4495,
        item.values,
        clnIn558,
        {
          y,
          xCenter: (clnIn16523) => clnH.bh425(x, clnIn16523),
        },
        clnIn556,
        clnBind17627,
      );
    }
    clnBind4650.errorBars?.length &&
      clnH.bh527(
        clnIn554,
        clnBind4650,
        item.seriesIndex,
        clnIn558,
        clnBind4653.map((_item) => ({
          x: _item.cx,
          y: _item.cy,
          value: _item.value,
        })),
        {
          y,
        },
      );
    clnBind4653.forEach((_item) => {
      let clnBind16769 = clnH.bh495(
        clnIn555,
        clnBind4650,
        _item.idx,
        _item.value,
      );
      clnBind16769.show &&
        paintChartDataLabel(
          clnIn554,
          clnBind16769.text,
          clnBind16769.position,
          clnBind16769.textStyle,
          clnIn558,
          {
            x: _item.cx,
            y: _item.cy,
          },
          {
            callout: clnBind16769.callout,
          },
        );
    });
    !(!clnH.bh479(clnBind4650) || clnBind4653.length === 0) &&
      clnBind4653.forEach(({ cx, cy }) => {
        clnH.bh480(
          clnIn554,
          clnBind4650,
          clnIn558,
          {
            x: cx,
            y: cy,
          },
          clnBind4652,
        );
      });
  });
}

/** Legacy alias. */
export const workbookHelper528 = paintLineSeries;
