// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: legend-aware plot layout (legacy jxe + wSe).
// Stage-3 wave-98/104 (reserveTitleBand / uSe).

import { Mn } from "../presentation-protobuf";
import { clpH } from "./boundary-hooks";
import { reserveTitleBand } from "./reserve-title-band-impl";

void reserveTitleBand;

void Mn;
void clpH;

export function layoutLegendAroundPlot(
  clpIn365: any,
  clpIn366: any,
  clpIn367: any,
  clpIn368: any,
  clpIn369: any = {},
) {
  let clpBind3740 = clpIn367;
  if (!clpIn366.hasLegend)
    return {
      plotDims: clpBind3740,
    };
  let clpBind3741 = clpIn366.legend?.position ?? Mn.LEGEND_POSITION_RIGHT,
    clpBind3742 =
      clpBind3741 === Mn.LEGEND_POSITION_TOP_RIGHT
        ? Mn.LEGEND_POSITION_RIGHT
        : clpBind3741,
    { width, height } = clpH.measureLegend(clpIn365, clpIn366, clpIn368, {
      position: clpBind3742,
      maxWidthPx:
        clpBind3742 === Mn.LEGEND_POSITION_TOP ||
        clpBind3742 === Mn.LEGEND_POSITION_BOTTOM
          ? Math.max(0, clpBind3740.width)
          : undefined,
    }),
    clpBind3743 = width + clpH.legendGapPx,
    clpBind3744 =
      clpIn369.outerDims && clpIn369.outerDims.width > 0
        ? Math.max(0, clpIn369.outerDims.width * (clpIn369.maxSideFrac ?? 0.35))
        : 1 / 0,
    clpBind3745,
    clpBind3746 = !!clpIn366.legend?.overlay;
  switch (clpBind3742) {
    case Mn.LEGEND_POSITION_TOP: {
      let clpBind12383 = Math.min(Math.max(0, clpBind3740.height), height),
        clpBind12384 = Math.min(
          Math.max(0, clpBind3740.height),
          clpBind12383 + clpH.legendMaxFraction,
        );
      clpBind3745 = clpBind3746
        ? {
            x: clpBind3740.x + 8,
            y: clpBind3740.y + 8,
            width: Math.max(0, clpBind3740.width - 16),
            height: clpBind12383,
          }
        : {
            x: clpBind3740.x,
            y: clpBind3740.y,
            width: clpBind3740.width,
            height: clpBind12383,
          };
      clpBind3746 ||
        (clpBind3740 = {
          x: clpBind3740.x,
          y: clpBind3740.y + clpBind12384,
          width: clpBind3740.width,
          height: Math.max(0, clpBind3740.height - clpBind12384),
        });
      break;
    }
    case Mn.LEGEND_POSITION_BOTTOM: {
      let clpBind11467 = Math.min(Math.max(0, clpBind3740.height), height),
        clpBind11468 = Math.min(
          Math.max(0, clpBind3740.height),
          clpBind11467 + clpH.legendMaxFraction,
        ),
        clpBind11469 = Math.max(
          clpBind3740.y,
          clpBind3740.y + clpBind3740.height - clpBind11467,
        );
      clpBind3745 = clpBind3746
        ? {
            x: clpBind3740.x + 8,
            y:
              clpBind3740.y +
              Math.max(0, clpBind3740.height - clpBind11467) -
              8,
            width: Math.max(0, clpBind3740.width - 16),
            height: clpBind11467,
          }
        : {
            x: clpBind3740.x,
            y: clpBind11469,
            width: clpBind3740.width,
            height: clpBind11467,
          };
      clpBind3746 ||
        (clpBind3740 = {
          x: clpBind3740.x,
          y: clpBind3740.y,
          width: clpBind3740.width,
          height: Math.max(0, clpBind3740.height - clpBind11468),
        });
      break;
    }
    case Mn.LEGEND_POSITION_LEFT: {
      let { reserveWidth, legendWidth } = clpHelper541(
        clpBind3740.width,
        clpBind3743,
        clpBind3744,
      );
      clpBind3745 = clpBind3746
        ? {
            x: clpBind3740.x + 8,
            y: clpBind3740.y + 8,
            width: legendWidth,
            height: Math.max(0, clpBind3740.height - 16),
          }
        : {
            x: clpBind3740.x,
            y: clpBind3740.y,
            width: legendWidth,
            height: clpBind3740.height,
          };
      clpBind3746 ||
        (clpBind3740 = {
          x: clpBind3740.x + reserveWidth,
          y: clpBind3740.y,
          width: Math.max(0, clpBind3740.width - reserveWidth),
          height: clpBind3740.height,
        });
      break;
    }
    case Mn.LEGEND_POSITION_RIGHT:
    default: {
      let { reserveWidth, legendWidth } = clpHelper541(
        clpBind3740.width,
        clpBind3743,
        clpBind3744,
      );
      clpBind3745 = clpBind3746
        ? {
            x: clpBind3740.x + Math.max(0, clpBind3740.width - legendWidth) - 8,
            y: clpBind3740.y + 8,
            width: legendWidth,
            height: Math.max(0, clpBind3740.height - 16),
          }
        : {
            x: clpBind3740.x + Math.max(0, clpBind3740.width - legendWidth),
            y: clpBind3740.y,
            width: legendWidth,
            height: clpBind3740.height,
          };
      clpBind3746 ||
        (clpBind3740 = {
          x: clpBind3740.x,
          y: clpBind3740.y,
          width: Math.max(0, clpBind3740.width - reserveWidth),
          height: clpBind3740.height,
        });
      break;
    }
  }
  let clpBind3747 = clpIn366.legend?.manualLayout;
  return clpBind3747 && clpBind3745 && clpHelper457(clpBind3747)
    ? {
        plotDims: clpIn367,
        legendRect: clpHelper458(
          clpIn369.outerDims ?? clpIn367,
          clpBind3745,
          clpBind3747,
        ),
        legendPosition: clpBind3742,
      }
    : {
        plotDims: clpBind3740,
        legendRect: clpBind3745,
        legendPosition: clpBind3742,
      };
}

export function layoutLegendPlot(
  clpIn590: any,
  clpIn591: any,
  clpIn592: any,
  clpIn593: any,
  clpIn594: any,
) {
  let clpBind4572 = clpIn594.topExtraPaddingPx ?? 0,
    clpBind4573 = {
      x: clpIn592.x,
      y: clpIn592.y + clpBind4572,
      width: clpIn592.width,
      height: Math.max(0, clpIn592.height - clpBind4572),
    },
    clpBind4574 = reserveTitleBand(clpIn591, clpBind4573, clpIn593, 0.5),
    clpBind4575 = clpBind4574.rect,
    clpBind4576 = {
      x: clpBind4573.x,
      y: clpBind4573.y + clpBind4574.reserved,
      width: clpBind4573.width,
      height: Math.max(0, clpBind4573.height - clpBind4574.reserved),
    },
    clpBind4577 = ySe(clpIn591, clpIn592),
    clpBind4578 = kxe(clpBind4576, clpBind4577),
    clpBind4579,
    clpBind4580;
  if (!clpIn594.skipLegend && clpIn591.hasLegend) {
    let clpBind20599 = layoutLegendAroundPlot(
      clpIn590,
      clpIn591,
      clpBind4578,
      clpIn593,
      {
        outerDims: clpIn592,
        maxSideFrac: 0.28,
      },
    );
    clpBind4578 = clpBind20599.plotDims;
    clpBind4579 = clpBind20599.legendRect;
    clpBind4580 = clpBind20599.legendPosition;
  }
  let clpBind4581 = bSe(clpIn591);
  clpBind4581?.target === "outer" &&
    (clpBind4578 = clpHelper559(clpIn592, clpBind4578, clpBind4581));
  let clpBind4582 =
      clpBind4581?.target === "inner"
        ? clpHelper559(clpIn592, clpBind4578, clpBind4581)
        : clpBind4578,
    clpBind4583 = Math.max(0, clpBind4582.y - clpBind4576.y),
    clpBind4584 =
      clpBind4581?.target === "inner"
        ? Math.max(
            0,
            clpIn592.y + clpIn592.height - (clpBind4582.y + clpBind4582.height),
          )
        : undefined,
    clpBind4585 = CSe(
      clpIn590,
      clpIn591,
      clpBind4582,
      clpIn593,
      clpIn594.hiddenSeriesIndices,
      clpBind4581?.target,
      clpBind4583,
      clpIn594.chartModel,
      clpBind4584,
    ),
    clpBind4586 = clpBind4585?.plotDims ?? clpBind4578;
  if (clpBind4581?.target === "inner") {
    clpBind4586 = clpBind4582;
    let clpBind16398 = clpBind4585?.reservedLeft ?? 0,
      clpBind16399 = clpBind4585?.reservedBottom ?? 0,
      clpBind16400 = Math.max(clpIn592.x, clpBind4582.x - clpBind16398),
      clpBind16401 = clpBind4582.y;
    clpBind4578 = {
      x: clpBind16400,
      y: clpBind16401,
      width: Math.min(
        clpIn592.x + clpIn592.width - clpBind16400,
        clpBind4582.width + clpBind16398,
      ),
      height: Math.min(
        clpIn592.y + clpIn592.height - clpBind16401,
        clpBind4582.height + clpBind16399,
      ),
    };
  }
  if (
    clpIn591.type !== Cn.CHART_TYPE_TREEMAP &&
    clpIn591.type !== Cn.CHART_TYPE_SUNBURST &&
    clpIn591.type !== Cn.CHART_TYPE_MAP &&
    clpIn591.type !== Cn.CHART_TYPE_FUNNEL
  ) {
    let clpBind18647 = Qxe(clpIn591, clpBind4586);
    clpBind18647.reservedTop > 0 &&
      (clpBind4586 = {
        x: clpBind4586.x,
        y: clpBind4586.y + clpBind18647.reservedTop,
        width: clpBind4586.width,
        height: Math.max(0, clpBind4586.height - clpBind18647.reservedTop),
      });
  }
  let clpBind4587 = iSe(clpIn591, clpBind4586, {
    maxHeightFrac: 0.32,
    minHeightPx: 56,
  });
  return (
    (clpBind4586 = clpBind4587.plotDims),
    {
      chartArea: clpIn592,
      contentArea: clpBind4573,
      title: clpBind4574,
      titleRect: clpBind4575,
      remainingSpace: clpBind4576,
      defaultDiagramPadding: clpBind4577,
      plotAreaIncludingAxes: clpBind4578,
      plotAreaExcludingAxes: clpBind4586,
      plotDims: clpBind4586,
      legendRect: clpBind4579,
      legendPosition: clpBind4580,
      axesLayout: clpBind4585,
      xAxisPlan: clpHelper560(clpIn591) ? undefined : clpBind4585?.xAxisPlan,
      dataTableRect: clpBind4587.tableRect,
      manualLayout: clpBind4581,
    }
  );
}

/** Legacy aliases. */
export const jxe = layoutLegendAroundPlot;
export const wSe = layoutLegendPlot;
