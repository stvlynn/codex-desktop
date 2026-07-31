// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: treemap plot-area layout (legacy Cbe; hook was paintTreemap).
// Stage-3 wave-102.

import { Mn as _presentationMn } from "../presentation-protobuf";
import { ctlH } from "./boundary-hooks";

void _presentationMn;
void ctlH;

export function layoutTreemapPlot(ctlIn830: any, ctlIn831: any, ctlIn832: any, ctlIn833: any, ctlIn834: any, ) {
  let ctlBind5485 = ctlIn834.maxLeftFrac ?? ctlH.maxLeftFrac,
    ctlBind5486 = ctlIn834.maxRightFrac ?? ctlH.maxRightFrac,
    ctlBind5487 = ctlIn834.maxBottomFrac ?? ctlH.maxBottomFrac,
    ctlBind5488 = Math.max(
      0,
      ctlIn834.availableLeftPaddingPx ?? 0,
    ),
    ctlBind5489 = ctlIn834.chartModel.resolveCategories(),
    ctlBind5490 = ctlH.isFlippedX(ctlIn831),
    ctlBind5491 = ctlH.layoutCatAxis({
      ctx: ctlIn830,
      categories: ctlBind5489,
      axis: ctlIn831.xAxis,
      plotDims: ctlIn832,
      themeMap: ctlIn833,
      maxLeftFrac: ctlBind5485,
    }),
    ctlBind5492 = ctlIn832.x;
  ctlBind5490 || (ctlBind5492 += ctlBind5491);
  let ctlBind5493 = {
      x: ctlBind5492,
      y: ctlIn832.y,
      width: Math.max(0, ctlIn832.width - ctlBind5491),
      height: ctlIn832.height,
    },
    ctlBind5494 = ctlH.layoutValAxisRight({
      axis: ctlIn831.yAxis,
      chart: ctlIn831,
      chartModel: ctlIn834.chartModel,
      ctx: ctlIn830,
      plotDims: ctlBind5493,
      themeMap: ctlIn833,
      maxRightFrac: ctlBind5486,
    }),
    ctlBind5495 = ctlBind5494;
  ctlBind5490 &&
    (ctlBind5495 = Math.max(ctlBind5491, ctlBind5494));
  let ctlBind5496 = ctlH.crossingRatio({
      chart: ctlIn831,
      chartModel: ctlIn834.chartModel,
    }),
    ctlBind5497 = 0;
  ctlBind5490 ||
    (ctlBind5497 = ctlH.shiftForCrossing({
      crossingRatio: ctlBind5496,
      plotWidth: ctlIn832.width,
      requiredAxisOffset: ctlBind5491,
      reservedRight: ctlBind5495,
    }));
  let ctlBind5498 = {
      x: ctlIn832.x + ctlBind5497,
      y: ctlBind5493.y,
      width: Math.max(
        0,
        ctlIn832.width - ctlBind5497 - ctlBind5495,
      ),
      height: ctlBind5493.height,
    },
    ctlBind5499 = ctlH.layoutValAxisBottom({
      axis: ctlIn831.yAxis,
      plotDims: ctlBind5498,
      themeMap: ctlIn833,
      maxBottomFrac: ctlBind5487,
    }),
    ctlBind5500 = ctlH.isFlippedY(ctlIn831),
    ctlBind5501 = ctlH.categoryLabelInset({
      categoryAxis: ctlIn831.xAxis,
      valueAxis: ctlIn831.yAxis,
      plotDims: ctlBind5498,
      themeMap: ctlIn833,
    }),
    ctlBind5502 = ctlBind5501,
    ctlBind5503 = ctlBind5501;
  ctlBind5500
    ? (ctlBind5502 += ctlBind5499)
    : (ctlBind5503 += ctlBind5499);
  let ctlBind5504 =
      ctlBind5497 + ctlBind5496 * ctlBind5498.width,
    ctlBind5505 = ctlBind5488 + ctlBind5504;
  ctlBind5490 &&
    (ctlBind5505 = ctlIn832.width - ctlBind5504);
  let ctlBind5506 = Math.max(
    0,
    ctlBind5505 -
      ctlH.labelPad -
      ctlH.axisLabelReserve(ctlIn831.xAxis),
  );
  return {
    plotDims: {
      x: ctlBind5498.x,
      y: ctlBind5498.y + ctlBind5502,
      width: ctlBind5498.width,
      height: Math.max(
        0,
        ctlBind5498.height - ctlBind5502 - ctlBind5503,
      ),
    },
    reservedLeft: ctlBind5497,
    categoryLabelMaxWidth: ctlBind5506,
    reservedRight: ctlBind5495,
    reservedTop: ctlBind5502,
    reservedBottom: ctlBind5503,
  };
}

/** Legacy alias. */
export const Cbe = layoutTreemapPlot;
