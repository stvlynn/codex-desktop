// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: chart canvas paint body (legacy chart paint body).
// Stage-3 wave-89; kept flat under maxFlatLines.

import { Cn, Mn, Yn, Vn as _presentationVn } from "../presentation-protobuf";
import { paintTextElement } from "../text-box";
import {
  workbookHelper348 as chartSeriesColorFn,
  workbookHelper352 as chartRegressionFn,
} from "../chart-asset";
import { cpH } from "./boundary-hooks";
import { paintBarDirectionSeries } from "../chart-bar-direction";
import { paintBarSeries } from "../chart-bar-series";
import { paintRadarChart } from "../chart-radar";
import {
  prepareBoxWhiskerData,
  buildBoxWhiskerScales,
  paintBoxWhiskerChart,
} from "../chart-box-whisker";
import { layoutLegendPlot } from "../chart-legend-plot";
import { paintCategoryAxes } from "../chart-category-axes";
import { paintScatterSeries } from "../chart-scatter-series";
import { paintHistogramAxes } from "../chart-histogram-axes";
import { paintPieSeries } from "../chart-pie-series";
import { paintBubbleSeries } from "../chart-bubble-series";
import { layoutTreemapPlot } from "../chart-treemap-plot-layout";
import { computeHistogramBins } from "../chart-histogram-bins";
import { computeFunnelSegments } from "../chart-funnel-segments";
import { paintChartDataTable } from "../chart-data-table";
import { paintScatterAxes } from "../chart-scatter-axes";
import { paintChartTrendline } from "../chart-trendline";
import { buildScatterScale } from "../chart-scatter-scale";
import { paintChartAxisTicks } from "../chart-axis-ticks";
import { paintChartLegend } from "../chart-legend";
import { paintThreeChart, paintPie3d } from "../three-chart-paint";
import { paintComboGroups } from "../chart-combo-groups";
import { paintFunnelBars } from "../chart-funnel-segments";
import {
  strokePlotAreaBorder,
  paintChartChrome,
  axisCrossesZero,
  doughnutHoleLayout,
} from "./chart-paint-prelude-impl";

export function paintChart(cpIn32: any, cpIn33: any, cpIn34: any, cpIn35: any) {
  cpIn32.save();
  let cpBind2276 = cpIn33.type === Cn.CHART_TYPE_TREEMAP,
    cpBind2277 = cpIn33.type === Cn.CHART_TYPE_SUNBURST,
    cpBind2278 = cpIn33.type === Cn.CHART_TYPE_RADAR,
    cpBind2279 = cpIn33.type === Cn.CHART_TYPE_BAR_3D,
    cpBind2280 = cpIn33.type === Cn.CHART_TYPE_MAP,
    cpBind2281 = cpIn33.type === Cn.CHART_TYPE_FUNNEL,
    cpBind2282 = cpIn33.type === Cn.CHART_TYPE_BOX_WHISKER,
    cpBind2283 = cpIn33.type === Cn.CHART_TYPE_HISTOGRAM,
    cpBind2284 =
      cpIn33.type === Cn.CHART_TYPE_SCATTER ||
      cpIn33.type === Cn.CHART_TYPE_BUBBLE,
    cpBind2285 = cpIn33.barOptions?.direction ?? cpIn33.barDirection,
    cpBind2286 =
      (cpIn33.type === Cn.CHART_TYPE_BAR ||
        cpIn33.type === Cn.CHART_TYPE_BAR_3D) &&
      cpBind2285 === _presentationVn.BAR_DIRECTION_BAR;
  paintChartChrome(cpIn32, cpIn33, cpIn34, cpIn35.themeMap, {
    excelDefaults: cpIn35.excelDefaults,
  });
  let cpBind2287 =
      cpIn35.hiddenSeriesIndices === undefined
        ? undefined
        : new Set(cpIn35.hiddenSeriesIndices),
    cpBind2288 = layoutLegendPlot(cpIn32, cpIn33, cpIn34, cpIn35.themeMap, {
      chartModel: cpIn35.chartModel,
      skipLegend: cpIn35.skipLegend,
      hiddenSeriesIndices: cpBind2287,
      topExtraPaddingPx: 0,
    }),
    cpBind2289 = cpBind2288.title,
    cpBind2290 = cpBind2288.plotDims,
    cpBind2291 = cpBind2288.legendRect,
    cpBind2292 = cpBind2288.legendPosition ?? Mn.LEGEND_POSITION_RIGHT,
    cpBind2293 = cpBind2284 ? undefined : cpBind2288.axesLayout?.xAxisPlan,
    cpBind2294 = cpBind2288.dataTableRect,
    cpBind2295 = false,
    cpBind2296 = cpIn33.titlePlacement,
    cpBind2297 = cpBind2289.element;
  if (cpBind2289.text && cpBind2297 && cpBind2296 !== "none") {
    let cpBind7300 = cpBind2297.textStyle?.anchor,
      cpBind7301 = cpBind2288.titleRect;
    if (
      (cpBind2296 === "centeredOverlay" &&
        ((cpBind7300 = Yn.ANCHOR_TYPE_MIDDLE),
        (cpBind7301 = cpH.bh426(cpIn33.type)
          ? doughnutHoleLayout(cpIn33, cpBind2290, cpBind2289.layoutHeight)
          : {
              x: cpBind2290.x,
              y: cpBind2290.y + 2,
              width: cpBind2290.width,
              height: Math.max(0, cpBind2289.layoutHeight + 4),
            })),
      cpBind7301)
    ) {
      let cpBind9903 = {
          ...cpBind2297.textStyle,
          anchor: cpBind7300,
        },
        cpBind9904;
      cpBind2296 === "centeredOverlay" &&
        (cpBind9904 = {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        });
      let cpBind9905 = paintTextElement(
        cpBind2297,
        cpIn32,
        cpIn35.themeMap,
        undefined,
        {
          bboxPx: cpBind7301,
          resolvedStyle: cpBind9903,
          paddingPx: cpBind9904,
        },
      );
      if (cpBind9905 && cpIn35.textLayoutCollector) {
        let cpBind13663 = cpIn35.titleBlockId;
        if (cpBind13663 === undefined) {
          let cpBind21505 = cpIn35.elementId ?? "chart";
          cpIn33.id && (cpBind21505 = cpIn33.id);
          cpBind13663 = `chartTitle:${cpBind21505}`;
        }
        cpIn35.textLayoutCollector.add({
          id: cpBind13663,
          layout: cpBind9905,
          rotationDeg: 0,
          zIndex: cpIn35.elementZIndex ?? 0,
          hitBox: cpBind7301,
          getRunText: (cpIn15191, cpIn15192) =>
            cpBind2297.paragraphs[cpIn15191]?.runs[cpIn15192]?.text ?? "",
        });
      }
    }
  }
  if (cpBind2286) {
    let cpBind9667;
    cpBind2288.manualLayout?.target !== "inner" &&
      ((cpBind9667 = layoutTreemapPlot(
        cpIn32,
        cpIn33,
        cpBind2290,
        cpIn35.themeMap,
        {
          chartModel: cpIn35.chartModel,
          maxLeftFrac: 0.35,
          availableLeftPaddingPx:
            cpBind2288.manualLayout?.target === "outer"
              ? Math.max(0, cpBind2290.x - cpIn34.x)
              : 0,
        },
      )),
      (cpBind2290 = cpBind9667.plotDims));
    strokePlotAreaBorder(cpIn32, cpIn33, cpBind2290, cpIn35.themeMap);
    let cpBind9668 = cpH.paintSunburst(
      cpIn33,
      cpBind2290,
      cpBind2287,
      cpIn35.chartModel,
    );
    paintCategoryAxes(
      cpIn32,
      cpIn33,
      cpBind9668,
      cpBind2290,
      true,
      cpIn35.themeMap,
      cpBind9667,
    );
    cpBind2291 &&
      paintChartLegend(cpIn32, cpIn33, cpBind2291, cpIn35.themeMap, cpBind2292, {
        elementId: cpIn35.elementId,
        chartHoverTargets: cpIn35.chartHoverTargets,
        hiddenSeriesIndices: cpIn35.hiddenSeriesIndices,
      });
    paintBarDirectionSeries(
      cpIn32,
      cpIn33,
      cpBind9668,
      cpIn35.themeMap,
      cpIn35.chartHoverTargets,
      cpBind2287,
    );
    cpBind2294 &&
      (paintChartDataTable(cpIn32, cpIn33, cpBind2294, cpIn35.themeMap, cpBind2287),
      (cpBind2295 = true));
    cpIn32.restore();
    return;
  }
  let cpBind2298 =
      cpIn33.type === Cn.CHART_TYPE_COMBO
        ? cpH.bh532(cpIn33, cpBind2290, cpBind2287)
        : undefined,
    cpBind2299 = cpBind2298?.find(
      ({ renderGroup }) => renderGroup.isPrimaryValueAxis,
    )?.groupScales,
    cpBind2300 =
      !cpBind2276 &&
      !cpBind2277 &&
      !cpBind2278 &&
      !cpBind2280 &&
      !cpBind2281 &&
      !cpBind2282
        ? (cpBind2299 ??
          cpH.bh423(cpIn33, cpBind2290, cpBind2287, cpIn35.chartModel))
        : undefined;
  if (
    cpBind2300 &&
    !cpH.bh426(cpIn33.type) &&
    cpIn33.series.some((item) => (item?.trendlines?.length ?? 0) > 0)
  ) {
    let cpBind6483 = 1 / 0,
      cpBind6484 = -1 / 0;
    if (
      (cpIn33.series.forEach((item) => {
        if (!item?.trendlines?.length) return;
        let cpBind8228 = item.values ?? [],
          cpBind8229 = [];
        for (
          let cpBind20486 = 0;
          cpBind20486 < cpBind8228.length;
          cpBind20486++
        ) {
          let cpBind21570 = cpBind8228[cpBind20486];
          cpBind21570 === undefined ||
            !Number.isFinite(cpBind21570) ||
            cpBind8229.push({
              x: cpBind20486,
              y: cpBind21570,
            });
        }
        cpBind8229.length < 2 ||
          item.trendlines.forEach((_item) => {
            let cpBind10869 = chartRegressionFn({
              type: _item.type
                ? (cpBind1226[_item.type] ?? "linear")
                : "linear",
              points: cpBind8229,
              polynomialOrder: _item.order,
              movingAveragePeriod: _item.period,
              forecastForward: _item.forward,
              forecastBackward: _item.backward,
              intercept: _item.intercept,
              displayEquation: false,
              displayRSquared: false,
            });
            cpBind10869?.points?.length &&
              cpBind10869.points.forEach((__item) => {
                Number.isFinite(__item.y) &&
                  ((cpBind6483 = Math.min(cpBind6483, __item.y)),
                  (cpBind6484 = Math.max(cpBind6484, __item.y)));
              });
          });
      }),
      Number.isFinite(cpBind6483) &&
        Number.isFinite(cpBind6484) &&
        cpBind6483 !== cpBind6484)
    ) {
      let cpBind18917 = cpBind2300.y.domain(),
        cpBind18918 = cpBind18917[0] ?? 0,
        cpBind18919 = cpBind18917[1] ?? 0,
        cpBind18920 = Math.min(cpBind18918, cpBind6483),
        cpBind18921 = Math.max(cpBind18919, cpBind6484);
      (cpBind18920 !== cpBind18918 || cpBind18921 !== cpBind18919) &&
        cpBind2300.y.domain([cpBind18920, cpBind18921]).nice();
    }
  }
  if (!cpBind2276 && !cpBind2277 && cpBind2278) {
    strokePlotAreaBorder(cpIn32, cpIn33, cpBind2290, cpIn35.themeMap);
    cpBind2291 &&
      paintChartLegend(cpIn32, cpIn33, cpBind2291, cpIn35.themeMap, cpBind2292, {
        elementId: cpIn35.elementId,
        chartHoverTargets: cpIn35.chartHoverTargets,
        hiddenSeriesIndices: cpIn35.hiddenSeriesIndices,
      });
    paintRadarChart(
      cpIn32,
      cpIn33,
      cpBind2290,
      cpIn35.themeMap,
      cpIn35.chartHoverTargets,
      cpIn35.hiddenSeriesIndices
        ? new Set(cpIn35.hiddenSeriesIndices)
        : undefined,
    );
    cpBind2294 &&
      (paintChartDataTable(cpIn32, cpIn33, cpBind2294, cpIn35.themeMap, cpBind2287),
      (cpBind2295 = true));
  } else if (!cpBind2276 && !cpBind2277 && !cpBind2280 && !cpBind2281) {
    if (cpBind2282) {
      let cpBind12304 = prepareBoxWhiskerData(cpIn33, {
          hiddenSeriesIndices: cpBind2287,
        }),
        cpBind12305 = buildBoxWhiskerScales(cpBind12304, cpBind2290);
      strokePlotAreaBorder(cpIn32, cpIn33, cpBind2290, cpIn35.themeMap);
      paintChartAxisTicks(
        cpIn32,
        cpIn33,
        cpBind12305,
        cpBind2290,
        cpIn35.themeMap,
        cpBind2293,
        "all",
        cpIn34,
      );
      cpBind2291 &&
        paintChartLegend(cpIn32, cpIn33, cpBind2291, cpIn35.themeMap, cpBind2292, {
          elementId: cpIn35.elementId,
          chartHoverTargets: cpIn35.chartHoverTargets,
          hiddenSeriesIndices: cpIn35.hiddenSeriesIndices,
        });
      paintBoxWhiskerChart(
        cpIn32,
        cpIn33,
        cpBind12305,
        cpBind12304,
        cpIn35.themeMap,
        {
          chartHoverTargets: cpIn35.chartHoverTargets,
        },
      );
      cpBind2294 &&
        (paintChartDataTable(cpIn32, cpIn33, cpBind2294, cpIn35.themeMap, cpBind2287),
        (cpBind2295 = true));
    } else if (cpBind2300) {
      strokePlotAreaBorder(cpIn32, cpIn33, cpBind2290, cpIn35.themeMap);
      let cpBind3009 =
          !cpH.bh426(cpIn33.type) && !cpBind2284 && !cpBind2279 && !cpBind2283,
        cpBind3010 = cpBind3009 && axisCrossesZero(cpIn33, cpBind2300);
      switch (
        (cpBind3009 &&
          paintChartAxisTicks(
            cpIn32,
            cpIn33,
            cpBind2300,
            cpBind2290,
            cpIn35.themeMap,
            cpBind2293,
            cpBind3010 ? "background" : "all",
            cpIn34,
          ),
        cpBind2291 &&
          paintChartLegend(cpIn32, cpIn33, cpBind2291, cpIn35.themeMap, cpBind2292, {
            elementId: cpIn35.elementId,
            chartHoverTargets: cpIn35.chartHoverTargets,
            hiddenSeriesIndices: cpIn35.hiddenSeriesIndices,
          }),
        cpIn33.type)
      ) {
        case Cn.CHART_TYPE_BAR: {
          paintBarSeries(
            cpIn32,
            cpIn33,
            cpBind2300,
            cpIn35.themeMap,
            cpIn35.chartHoverTargets,
            cpBind2287,
          );
          let cpBind11832 = chartSeriesColorFn(cpIn33);
          cpIn33.series.forEach((item, index) => {
            if (!item?.trendlines?.length) return;
            let cpBind14141 =
              cpIn35.trendlineRenderCache?.bySeriesIndex.get(index);
            paintChartTrendline(
              cpIn32,
              cpIn33,
              item,
              index,
              cpBind11832,
              item.values ?? [],
              cpIn35.themeMap,
              {
                y: cpBind2300.y,
                xCenter: (cpIn16436) => cpH.bh425(cpBind2300.x, cpIn16436),
              },
              cpBind2290,
              cpBind14141,
            );
          });
          break;
        }
        case Cn.CHART_TYPE_COMBO:
          paintComboGroups(
            cpIn32,
            cpIn33,
            cpBind2290,
            cpIn34,
            cpIn35.themeMap,
            cpIn35.chartHoverTargets,
            cpBind2287,
            cpIn35.trendlineRenderCache,
            cpBind2298,
          );
          break;
        case Cn.CHART_TYPE_WATERFALL:
          cpH.paintPie(
            cpIn32,
            cpIn33,
            cpBind2300,
            cpH.bh391(cpIn33, cpBind2287),
            cpIn35.themeMap,
            {
              chartHoverTargets: cpIn35.chartHoverTargets,
            },
          );
          break;
        case Cn.CHART_TYPE_BAR_3D: {
          if (!cpIn35.threeCtx) {
            if (cpIn35.on3DViewport) {
              let cpBind13731 =
                  cpIn34.width - Math.max(0, cpBind2290.x - cpIn34.x),
                cpBind13732 =
                  cpIn34.height - Math.max(0, cpBind2290.y - cpIn34.y),
                cpBind13733 = {
                  x: cpBind2290.x,
                  y: cpBind2290.y,
                  width: Math.max(0, Math.min(cpBind2290.width, cpBind13731)),
                  height: Math.max(0, Math.min(cpBind2290.height, cpBind13732)),
                };
              cpIn35.on3DViewport({
                elementId: cpIn35.elementId ?? "",
                plotDims: cpBind13733,
              });
            }
            cpIn32.restore();
            return;
          }
          let cpBind9901 = {
              x: 0,
              y: 0,
              width: cpBind2290.width,
              height: cpBind2290.height,
            },
            cpBind9902 = cpH.bh423(
              cpIn33,
              cpBind9901,
              cpBind2287,
              cpIn35.chartModel,
            );
          paintThreeChart(
            cpIn35.threeCtx,
            cpIn33,
            cpBind9902,
            cpBind9901,
            cpIn35.themeMap,
            cpBind2287,
          );
          break;
        }
        case Cn.CHART_TYPE_LINE:
        case Cn.CHART_TYPE_LINE_3D:
          cpH.bh528(
            cpIn32,
            cpIn33,
            cpBind2290,
            cpBind2300,
            cpIn35.themeMap,
            cpIn35.chartHoverTargets,
            cpBind2287,
            cpIn35.trendlineRenderCache,
          );
          break;
        case Cn.CHART_TYPE_AREA:
        case Cn.CHART_TYPE_AREA_3D:
          cpH.bh529(
            cpIn32,
            cpIn33,
            cpBind2300,
            cpIn35.themeMap,
            cpBind2290,
            cpIn35.chartHoverTargets,
            cpBind2287,
          );
          break;
        case Cn.CHART_TYPE_HISTOGRAM: {
          let cpBind16038 = computeHistogramBins(
              cpIn33,
              cpBind2287
                ? {
                    hiddenSeriesIndices: cpBind2287,
                  }
                : undefined,
            ),
            cpBind16039 = {
              series: [],
              extents: cpBind16038.extents,
            },
            cpBind16040 = buildScatterScale(cpIn33, cpBind2290, cpBind16039, {
              niceXDomain: false,
            });
          paintHistogramAxes(
            cpIn32,
            cpIn33,
            cpBind16040,
            cpBind2290,
            cpBind16038,
            cpIn35.themeMap,
          );
          cpH.paintArea(
            cpIn32,
            cpIn33,
            cpBind16040,
            cpBind16038,
            cpIn35.themeMap,
            cpIn35.chartHoverTargets,
          );
          break;
        }
        case Cn.CHART_TYPE_PIE_3D: {
          if (!cpIn35.threeCtx) {
            if (cpIn35.on3DViewport) {
              let cpBind12822 =
                  cpIn34.width - Math.max(0, cpBind2290.x - cpIn34.x),
                cpBind12823 =
                  cpIn34.height - Math.max(0, cpBind2290.y - cpIn34.y),
                cpBind12824 = {
                  x: cpBind2290.x,
                  y: cpBind2290.y,
                  width: Math.max(0, Math.min(cpBind2290.width, cpBind12822)),
                  height: Math.max(0, Math.min(cpBind2290.height, cpBind12823)),
                };
              cpIn35.on3DViewport({
                elementId: cpIn35.elementId ?? "",
                plotDims: cpBind12824,
              });
              cpIn32.restore();
              return;
            }
            paintPieSeries(
              cpIn32,
              cpIn33,
              cpBind2290,
              cpIn35.themeMap,
              cpIn35.chartHoverTargets,
              cpBind2287,
            );
            break;
          }
          let cpBind9565 = {
            x: 0,
            y: 0,
            width: cpBind2290.width,
            height: cpBind2290.height,
          };
          paintPie3d(
            cpIn35.threeCtx,
            cpIn33,
            cpBind9565,
            cpIn35.themeMap,
            cpBind2287,
          );
          break;
        }
        case Cn.CHART_TYPE_PIE:
        case Cn.CHART_TYPE_DOUGHNUT:
          paintPieSeries(
            cpIn32,
            cpIn33,
            cpBind2290,
            cpIn35.themeMap,
            cpIn35.chartHoverTargets,
            cpBind2287,
          );
          break;
        case Cn.CHART_TYPE_SCATTER: {
          let cpBind12406 =
              cpIn35.hiddenSeriesIndices === undefined
                ? undefined
                : new Set(cpIn35.hiddenSeriesIndices),
            cpBind12407 = cpH.bh556(cpIn33, cpBind12406),
            cpBind12408 = buildScatterScale(cpIn33, cpBind2290, cpBind12407);
          paintScatterAxes(
            cpIn32,
            cpIn33,
            cpBind12408,
            cpBind2290,
            cpIn35.themeMap,
            cpIn34,
          );
          paintScatterSeries(
            cpIn32,
            cpIn33,
            cpBind2290,
            cpBind12408,
            cpIn35.themeMap,
            cpIn35.chartHoverTargets,
            cpBind12406,
            cpBind12407,
            cpIn35.trendlineRenderCache,
          );
          break;
        }
        case Cn.CHART_TYPE_BUBBLE: {
          let cpBind15274 = cpH.bh552(
              cpIn33,
              cpIn35.hiddenSeriesIndices === undefined
                ? undefined
                : new Set(cpIn35.hiddenSeriesIndices),
            ),
            cpBind15275 = buildScatterScale(cpIn33, cpBind2290, cpBind15274);
          paintScatterAxes(
            cpIn32,
            cpIn33,
            cpBind15275,
            cpBind2290,
            cpIn35.themeMap,
            cpIn34,
          );
          paintBubbleSeries(
            cpIn32,
            cpIn33,
            cpBind15275,
            cpBind15274,
            cpIn35.themeMap,
            cpBind2290,
            cpIn35.chartHoverTargets,
          );
          break;
        }
        default:
          break;
      }
      cpBind3010 &&
        paintChartAxisTicks(
          cpIn32,
          cpIn33,
          cpBind2300,
          cpBind2290,
          cpIn35.themeMap,
          cpBind2293,
          "foreground",
          cpIn34,
        );
    }
  } else if (cpBind2281) {
    cpBind2291 &&
      paintChartLegend(cpIn32, cpIn33, cpBind2291, cpIn35.themeMap, cpBind2292, {
        elementId: cpIn35.elementId,
        chartHoverTargets: cpIn35.chartHoverTargets,
        hiddenSeriesIndices: cpIn35.hiddenSeriesIndices,
      });
    let cpBind14153 = computeFunnelSegments(cpIn33, cpBind2290, cpBind2287),
      cpBind14154 = cpH.layoutCategoryLabels(
        cpIn32,
        cpIn33,
        cpBind14153,
        cpBind2290,
        cpIn35.themeMap,
      );
    paintFunnelBars(
      cpIn32,
      cpIn33,
      cpBind14154 === null
        ? cpBind14153
        : computeFunnelSegments(cpIn33, cpBind14154.plotDims, cpBind2287),
      cpIn35.themeMap,
      cpIn35.chartHoverTargets,
      cpBind14154?.labels,
    );
  } else if (cpBind2280) {
    cpBind2291 &&
      paintChartLegend(cpIn32, cpIn33, cpBind2291, cpIn35.themeMap, cpBind2292, {
        elementId: cpIn35.elementId,
        chartHoverTargets: cpIn35.chartHoverTargets,
        hiddenSeriesIndices: cpIn35.hiddenSeriesIndices,
      });
    let cpBind10019 = cpIn34.width - Math.max(0, cpBind2290.x - cpIn34.x),
      cpBind10020 = cpIn34.height - Math.max(0, cpBind2290.y - cpIn34.y),
      cpBind10021 = {
        x: cpBind2290.x,
        y: cpBind2290.y,
        width: Math.max(0, Math.min(cpBind2290.width, cpBind10019)),
        height: Math.max(0, Math.min(cpBind2290.height, cpBind10020)),
      };
    if (
      (cpIn35.onMapViewport &&
        cpIn35.onMapViewport({
          elementId: cpIn35.elementId ?? "",
          plotDims: cpBind10021,
        }),
      !cpIn35.mapCtx)
    ) {
      cpIn32.restore();
      return;
    }
    cpH.paintSurface(cpIn35.mapCtx, cpIn33, cpBind2290, cpIn35.themeMap, {
      elementId: cpIn35.elementId,
      hiddenSeriesIndices: cpBind2287,
    });
  } else
    cpBind2276
      ? (strokePlotAreaBorder(cpIn32, cpIn33, cpBind2290, cpIn35.themeMap),
        cpH.paintDataTable(
          cpIn32,
          cpH.paintAxis(cpIn33, cpBind2290, cpIn35.themeMap),
          cpBind2290,
          {
            chart: cpIn33,
            themeMap: cpIn35.themeMap,
          },
        ),
        cpBind2291 &&
          paintChartLegend(cpIn32, cpIn33, cpBind2291, cpIn35.themeMap, cpBind2292, {
            elementId: cpIn35.elementId,
            chartHoverTargets: cpIn35.chartHoverTargets,
            hiddenSeriesIndices: cpIn35.hiddenSeriesIndices,
          }))
      : cpBind2277 &&
        (strokePlotAreaBorder(cpIn32, cpIn33, cpBind2290, cpIn35.themeMap),
        cpH.paintGridlines(
          cpIn32,
          cpH.paintTrendlines(cpIn33, cpBind2290, cpIn35.themeMap),
          cpBind2290,
          {
            themeMap: cpIn35.themeMap,
            valueFormatCode: cpIn33.series[0]?.valuesFormatCode ?? undefined,
          },
        ),
        cpBind2291 &&
          paintChartLegend(cpIn32, cpIn33, cpBind2291, cpIn35.themeMap, cpBind2292, {
            elementId: cpIn35.elementId,
            chartHoverTargets: cpIn35.chartHoverTargets,
            hiddenSeriesIndices: cpIn35.hiddenSeriesIndices,
          }));
  cpBind2294 &&
    !cpBind2295 &&
    paintChartDataTable(cpIn32, cpIn33, cpBind2294, cpIn35.themeMap, cpBind2287);
  cpIn32.restore();
}
