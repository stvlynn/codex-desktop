// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: chart line-series paint (legacy helper528).
// Stage-3 wave-99/103 (stackLineLayers / axe).

import { line as d3Line } from "../../vendor/d3-shape-line-pie-stack";
import {
  curveCatmullRom as d3CurveCatmullRom,
  curveLinear as d3CurveLinear,
} from "../../vendor/d3-shape-curves";
import { paintChartTrendline } from "../chart-trendline";
import { paintChartDataLabel } from "../chart-data-labels";
import { Nn } from "../presentation-protobuf";
import {
  stack,
  stackOrderNone,
  stackOffsetExpand,
  stackOffsetNone,
} from "../../vendor/d3-shape-line-pie-stack";
import { workbookHelper348 } from "../chart-asset";
import { clnH } from "./boundary-hooks";
import { paintSeriesMarker } from "./paint-series-marker-impl";

void Nn;
void stack;
void stackOrderNone;
void stackOffsetExpand;
void stackOffsetNone;
void workbookHelper348;

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
    clnBind4494 = stackLineLayers(clnIn555, clnIn560),
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
        paintSeriesMarker(
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

export function stackLineLayers(clnIn756: any, clnIn757: any) {
  let clnBind5251 = workbookHelper348(clnIn756),
    clnBind5252 = clnIn756.series
      .map((item, index) => index)
      .filter((item) => !clnIn757?.has(item)),
    clnBind5253 = clnIn756.lineOptions?.grouping,
    clnBind5254 =
      clnBind5253 === Nn.LINE_GROUPING_STACKED
        ? "stacked"
        : clnBind5253 === Nn.LINE_GROUPING_PERCENT_STACKED
          ? "percent"
          : "standard",
    clnBind5255 = clnBind5252.map((item) => ({
      seriesIndex: item,
      values: clnBind5251.map(() => 0),
      tuples: clnBind5251.map(() => ({
        start: 0,
        end: 0,
      })),
    }));
  if (clnBind5254 === "standard" || clnBind5252.length === 0)
    return (
      clnBind5251.forEach((item, index) => {
        clnBind5252.forEach((_item) => {
          let clnBind17129 = clnBind5255.find(
            (__item) => __item.seriesIndex === _item,
          );
          if (!clnBind17129) return;
          let clnBind17130 = clnIn756.series[_item]?.values[index] ?? 0,
            clnBind17131 = Number.isFinite(clnBind17130) ? clnBind17130 : 0;
          clnBind17129.values[index] = clnBind17131;
          clnBind17129.tuples[index] = {
            start: 0,
            end: clnBind17131,
          };
        });
      }),
      {
        categories: clnBind5251,
        visibleSeries: clnBind5252,
        mode: clnBind5254,
        layers: clnBind5255,
      }
    );
  let clnBind5256 = clnBind5251.map((item, index) => {
      let clnBind18492 = {};
      return (
        clnBind5252.forEach((_item) => {
          let clnBind21267 = clnIn756.series[_item]?.values[index] ?? 0;
          clnBind18492[String(_item)] = Number.isFinite(clnBind21267)
            ? clnBind21267
            : 0;
        }),
        clnBind18492
      );
    }),
    clnBind5257 = stack()
      .keys(clnBind5252.map((item) => String(item)))
      .value((clnIn16358, clnIn16359) => clnIn16358[clnIn16359] ?? 0)
      .order(stackOrderNone);
  clnBind5254 === "percent"
    ? clnBind5257.offset(stackOffsetExpand)
    : clnBind5257.offset(stackOffsetNone);
  let clnBind5258 = new Map(
    clnBind5255.map((item) => [item.seriesIndex, item]),
  );
  return (
    clnBind5257(clnBind5256).forEach((item) => {
      let clnBind15020 = Number.parseInt(item.key, 10),
        clnBind15021 = clnBind5258.get(clnBind15020);
      clnBind15021 &&
        clnBind5251.forEach((_item, index) => {
          let clnBind17533 = item[index];
          if (!clnBind17533) return;
          let clnBind17534 = Number.isFinite(clnBind17533[0])
              ? clnBind17533[0]
              : 0,
            clnBind17535 = Number.isFinite(clnBind17533[1])
              ? clnBind17533[1]
              : clnBind17534;
          clnBind15021.tuples[index] = {
            start: clnBind17534,
            end: clnBind17535,
          };
          clnBind15021.values[index] = clnBind17535;
        });
    }),
    {
      categories: clnBind5251,
      visibleSeries: clnBind5252,
      mode: clnBind5254,
      layers: clnBind5255,
    }
  );
}

/** Legacy aliases. */
export const workbookHelper528 = paintLineSeries;
export const axe = stackLineLayers;
