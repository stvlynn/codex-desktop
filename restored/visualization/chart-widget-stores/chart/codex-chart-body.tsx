// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Codex Chart — promoted from Flat boundaries/chart-widget-stores/chart-component (wave-11).
// Codex Chart view — series / legend / tooltip chrome over public recharts.

import { createElement, useLayoutEffect, type ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import {
  Area,
  Bar,
  CartesianGrid,
  Cell,
  ComposedChart,
  LabelList,
  Legend,
  Line,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  isChartPaletteColor as chartWidgetStoresB,
  resolveChartThemeColor as chartWidgetStoresX,
} from "../chart-theme-colors";
import { classNames as chartWidgetStoresV } from "../widget-class-names";
import { WidgetBoxRoot as chartWidgetStoresD } from "../widget-box";
import {
  chartWidgetStoresBinding1327,
  chartWidgetStoresBinding1332,
  chartWidgetStoresBinding1333,
  chartWidgetStoresBinding1344,
} from "./chart-chrome-locals";
import {
  chartFn914,
  chartFn915,
  chartFn916,
  chartFn917,
  chartFn918,
  chartFn919,
  chartFn920,
  chartFn921,
  chartFn922,
  chartFn923,
  chartFn926,
  chartFn927,
  chartFn928,
  chartFn933,
} from "./chart-format-helpers";
import { chartFn924 } from "./chart-tooltip-content";
import { chartFn925 } from "./chart-axis-tick";
import { chartFn929, chartFn930 } from "./chart-hover-indicator";
import { chartFn931 } from "./chart-tooltip-payload";
import { chartFn932 } from "./chart-legend-list";
import { useCodexChartModel } from "./use-codex-chart-model";

export function CodexChartBody(chartSlot4: unknown): ReactNode {
  const {
    data,
    series,
    xAxis,
    layout,
    showYAxis,
    yAxis,
    showLegend,
    legendMaxRows,
    enableLegendSeriesToggle,
    showTooltip,
    showTooltipCursor,
    showTooltipLabel,
    showTooltipMarkers,
    maxTooltipEntries,
    tooltipOffset,
    tooltipAnimationDuration,
    chartWidgetStoresBinding1553,
    showHoverCursor,
    hoverIndicatorDataKey,
    showIdleHoverIndicator,
    showHoverDots,
    showDots,
    showGrid,
    showValueLabels,
    barRadius,
    valueLabelInterval,
    valueLabelOffset,
    visiblePointCount,
    scrollable,
    disableUserScroll,
    minPointWidth,
    scrollToValue,
    disableAnimation,
    minHeight,
    height,
    aspectRatio,
    barGap,
    barCategoryGap,
    maxBarSize,
    onHoverAction,
    tooltipValueFormatter,
    _chartWidgetStoresW,
    __chartWidgetStoresT,
    chartWidgetStoresBinding1554,
    chartWidgetStoresBinding1555,
    chartWidgetStoresBinding1556,
    be,
    chartWidgetStoresBinding1557,
    chartWidgetStoresBinding1558,
    chartWidgetStoresBinding1559,
    chartWidgetStoresBinding1560,
    chartWidgetStoresBinding1561,
    chartWidgetStoresBinding1562,
    chartWidgetStoresBinding1563,
    chartWidgetStoresBinding1564,
    chartWidgetStoresBinding1565,
    chartWidgetStoresBinding1566,
    chartWidgetStoresBinding1567,
    chartWidgetStoresBinding1568,
    chartWidgetStoresBinding1569,
    chartWidgetStoresBinding1570,
    chartWidgetStoresBinding1571,
    chartWidgetStoresBinding1572,
    chartWidgetStoresBinding1573,
    chartWidgetStoresBinding1574,
    chartWidgetStoresBinding1575,
    chartWidgetStoresBinding1576,
    chartWidgetStoresBinding1577,
    chartWidgetStoresBinding1578,
    chartWidgetStoresBinding1579,
    chartWidgetStoresBinding1580,
    chartWidgetStoresBinding1581,
    chartWidgetStoresBinding1582,
    chartWidgetStoresBinding1583,
    chartWidgetStoresBinding1584,
    chartWidgetStoresBinding1585,
    chartWidgetStoresBinding1586,
    chartWidgetStoresBinding1587,
    chartWidgetStoresBinding1589,
    chartWidgetStoresBinding1590,
    chartWidgetStoresBinding1591,
    $e,
    chartWidgetStoresBinding1592,
    chartWidgetStoresBinding1593,
    chartWidgetStoresBinding1594,
    chartWidgetStoresBinding1595,
    chartWidgetStoresBinding1596,
    chartWidgetStoresBinding1597,
    at,
    chartWidgetStoresBinding1598,
    chartWidgetStoresBinding1599,
    chartWidgetStoresBinding1600,
    chartWidgetStoresBinding1601,
    chartWidgetStoresBinding1602,
    chartWidgetStoresBinding1603,
    chartWidgetStoresBinding1604,
    chartWidgetStoresBinding1605,
    chartWidgetStoresBinding1606,
    chartWidgetStoresBinding1607,
    chartWidgetStoresBinding1608,
    _t,
    chartWidgetStoresBinding1609,
    chartWidgetStoresBinding1610,
    chartWidgetStoresBinding1611,
    chartWidgetStoresBinding1612,
    chartWidgetStoresBinding1613,
    chartWidgetStoresBinding1614,
    chartWidgetStoresBinding1615,
    chartWidgetStoresBinding1616,
    chartWidgetStoresBinding1617,
    chartWidgetStoresBinding1618,
    chartWidgetStoresBinding1619,
    chartWidgetStoresBinding1620,
    chartWidgetStoresBinding1621,
    chartWidgetStoresBinding1622,
    chartWidgetStoresBinding1623,
    chartWidgetStoresBinding1624,
    theme,
    onAction,
    streaming,
    isPrimarilyTouchDevice,
    chartWidgetStoresBinding1625,
    chartWidgetStoresBinding1626,
    chartWidgetStoresBinding1627,
    chartWidgetStoresBinding1628,
    chartWidgetStoresBinding1629,
    chartWidgetStoresBinding1630,
    chartWidgetStoresBinding1631,
    chartWidgetStoresBinding1632,
    chartWidgetStoresBinding1633,
    chartWidgetStoresBinding1634,
    chartWidgetStoresBinding1635,
    chartWidgetStoresBinding1636,
    chartWidgetStoresBinding1637,
    chartWidgetStoresBinding1638,
    chartWidgetStoresBinding1639,
    chartWidgetStoresBinding1640,
    chartWidgetStoresBinding1641,
    chartWidgetStoresBinding1642,
    chartWidgetStoresBinding1643,
    $t,
    chartWidgetStoresBinding1644,
    chartWidgetStoresBinding1645,
    chartWidgetStoresBinding1646,
    chartWidgetStoresBinding1647,
    chartWidgetStoresBinding1648,
    on,
    chartWidgetStoresBinding1649,
    chartWidgetStoresBinding1650,
  } = useCodexChartModel(chartSlot4);
  useLayoutEffect(() => {
    if (
      !scrollable ||
      !chartWidgetStoresBinding1559.current ||
      scrollToValue == null ||
      chartWidgetStoresBinding1644 == null
    )
      return;
    let chartWidgetStoresBinding4036 = chartWidgetStoresBinding1587.findIndex(
      (item) => {
        let chartWidgetStoresBinding5819 = item[chartWidgetStoresBinding1591];
        return (
          chartWidgetStoresBinding5819 != null &&
          String(chartWidgetStoresBinding5819) === String(scrollToValue)
        );
      },
    );
    if (chartWidgetStoresBinding4036 < 0) return;
    let chartWidgetStoresBinding4037 =
      chartWidgetStoresBinding4036 * chartWidgetStoresBinding1644;
    chartWidgetStoresBinding1649.current !== chartWidgetStoresBinding4037 &&
      ((chartWidgetStoresBinding1649.current = chartWidgetStoresBinding4037),
      chartWidgetStoresBinding1559.current.scrollTo({
        left: chartWidgetStoresBinding4037,
        behavior: chartWidgetStoresBinding1650.current ? "smooth" : "auto",
      }),
      (chartWidgetStoresBinding1650.current = true));
  }, [
    chartWidgetStoresBinding1587,
    chartWidgetStoresBinding1644,
    scrollToValue,
    scrollable,
    chartWidgetStoresBinding1591,
  ]);
  return createElement(chartWidgetStoresD, {
    as: "div",
    className: chartWidgetStoresV(
      chartWidgetStoresBinding1327.Chart,
      scrollable && chartWidgetStoresBinding1327.ChartScrollable,
    ),
    "data-bar-group-hover": chartWidgetStoresBinding1614
      ? "enabled"
      : undefined,
    "data-w-component": "chart",
    "data-y-axis": showYAxis ? "visible" : "hidden",
    aspectRatio: chartWidgetStoresBinding1554,
    height,
    minHeight,
    ...__chartWidgetStoresT,
    children: (
      <div
        className={chartWidgetStoresV(
          chartWidgetStoresBinding1327.ScrollViewport,
          scrollable &&
            (disableUserScroll
              ? chartWidgetStoresBinding1327.ScrollLocked
              : chartWidgetStoresBinding1327.Scrollable),
        )}
        ref={chartWidgetStoresBinding1559}
      >
        <div
          className={chartWidgetStoresBinding1327.ScrollContent}
          style={{
            minWidth: chartWidgetStoresBinding1645,
          }}
        >
          {createElement(ResponsiveContainer, {
            children: createElement(ComposedChart, {
              accessibilityLayer: true,
              data: chartWidgetStoresBinding1587,
              layout,
              ref: chartWidgetStoresBinding1558,
              margin: chartWidgetStoresBinding1646,
              barGap:
                barGap == null ? undefined : barGap > 0 ? barGap + 1 : barGap,
              barCategoryGap,
              onMouseMove: chartWidgetStoresBinding1615
                ? chartWidgetStoresBinding1639
                : undefined,
              onMouseLeave: chartWidgetStoresBinding1615
                ? chartWidgetStoresBinding1640
                : undefined,
              onTouchMove: chartWidgetStoresBinding1616
                ? chartWidgetStoresBinding1639
                : undefined,
              onTouchEnd: chartWidgetStoresBinding1616
                ? chartWidgetStoresBinding1641
                : undefined,
              children: [
                showGrid &&
                  createElement(CartesianGrid, {
                    vertical: chartWidgetStoresBinding1555,
                    strokeDasharray: "3 3",
                    horizontal: chartWidgetStoresBinding1555 ? false : on,
                  }),
                chartWidgetStoresBinding1555 ? (
                  <>
                    {createElement(XAxis, {
                      className: chartWidgetStoresBinding1327.Axis,
                      type: "number",
                      domain: chartWidgetStoresBinding1601,
                      ticks: chartWidgetStoresBinding1602,
                      tickFormatter: chartWidgetStoresBinding1631,
                      axisLine: chartWidgetStoresBinding1606 ?? true,
                      tickLine: chartWidgetStoresBinding1607,
                      tickMargin: chartWidgetStoresBinding1608,
                      hide: !showYAxis,
                      height: showYAxis ? undefined : 0,
                      padding: chartWidgetStoresBinding1647,
                    })}
                    {createElement(YAxis, {
                      className: chartWidgetStoresBinding1327.Axis,
                      dataKey: chartWidgetStoresBinding1591,
                      type: "category",
                      tickLine: false,
                      tickMargin: $e ? 0 : (chartWidgetStoresBinding1596 ?? 5),
                      tickCount: $e ? 0 : undefined,
                      axisLine: chartWidgetStoresBinding1595 ?? true,
                      width: $e
                        ? 0
                        : (chartWidgetStoresBinding1600 ??
                          chartWidgetStoresBinding1634 ??
                          "auto"),
                      hide: $e,
                      ticks: chartWidgetStoresBinding1593,
                      interval: chartWidgetStoresBinding1594,
                      tickFormatter: chartWidgetStoresBinding1632,
                    })}
                  </>
                ) : (
                  <>
                    {createElement(YAxis, {
                      className: chartWidgetStoresBinding1327.Axis,
                      domain: chartWidgetStoresBinding1601,
                      ticks: chartWidgetStoresBinding1602,
                      tickFormatter: chartWidgetStoresBinding1631,
                      axisLine: chartWidgetStoresBinding1606 ?? true,
                      tickLine: chartWidgetStoresBinding1607,
                      tickMargin: chartWidgetStoresBinding1608,
                      orientation: _t,
                      width: showYAxis
                        ? (chartWidgetStoresBinding1609 ??
                          chartWidgetStoresBinding1573 ??
                          "auto")
                        : 0,
                      hide: !showYAxis,
                    })}
                    {createElement(chartFn925, {
                      data: chartWidgetStoresBinding1587,
                      hideTicks: $e,
                      labels: chartWidgetStoresBinding1592,
                      usesBandScale: chartWidgetStoresBinding1613 > 0,
                      className: chartWidgetStoresBinding1327.Axis,
                      dataKey: chartWidgetStoresBinding1591,
                      type: chartWidgetStoresBinding1617,
                      domain: chartWidgetStoresBinding1619,
                      tickLine: false,
                      tickMargin: $e ? 0 : (chartWidgetStoresBinding1596 ?? 5),
                      tickCount: $e ? 0 : undefined,
                      axisLine: chartWidgetStoresBinding1595 ?? true,
                      minTickGap: 10,
                      tickSize: $e ? 0 : undefined,
                      height: $e ? 7 : undefined,
                      padding: chartWidgetStoresBinding1647,
                      ticks: chartWidgetStoresBinding1593,
                      interval: chartWidgetStoresBinding1594,
                      tickFormatter:
                        chartWidgetStoresBinding1617 === "number"
                          ? chartWidgetStoresBinding1633
                          : chartWidgetStoresBinding1632,
                    })}
                  </>
                ),
                chartWidgetStoresBinding1585 &&
                  createElement(Tooltip, {
                    offset: tooltipOffset,
                    animationDuration: tooltipAnimationDuration,
                    allowEscapeViewBox: chartWidgetStoresBinding1553,
                    animationEasing: "var(--cubic-enter)",
                    cursor: showHoverCursor
                      ? chartWidgetStoresBinding1586
                        ? createElement(chartFn929, {
                            hoverIndicatorDataKey: chartWidgetStoresBinding1586,
                            isHoverActive: showIdleHoverIndicator
                              ? chartWidgetStoresBinding1563
                              : true,
                          })
                        : true
                      : showTooltipCursor
                        ? undefined
                        : false,
                    content: showTooltip
                      ? (chartSlot872) =>
                          createElement(chartFn931, {
                            colors: chartWidgetStoresBinding1589,
                            dataSeries: chartWidgetStoresBinding1576,
                            showLabel: showTooltipLabel || !!$e,
                            showMarkers: showTooltipMarkers,
                            maxEntries: maxTooltipEntries,
                            valueFormatter: tooltipValueFormatter,
                            evaluateTooltipExpression:
                              chartWidgetStoresBinding1628,
                            xAxisKey: chartWidgetStoresBinding1591,
                            xAxisLabels: chartWidgetStoresBinding1592,
                            ...chartSlot872,
                          })
                      : () => null,
                  }),
                showHoverCursor &&
                  !chartWidgetStoresBinding1563 &&
                  chartWidgetStoresBinding1624 != null &&
                  createElement(ReferenceLine, {
                    x: chartWidgetStoresBinding1624.x,
                    ifOverflow: "hidden",
                    stroke: "var(--alpha-10)",
                    strokeWidth: 1,
                    pointerEvents: "none",
                  }),
                chartWidgetStoresBinding1579 &&
                  createElement(Legend, {
                    content: (chartSlot920) =>
                      createElement(chartFn932, {
                        colors: chartWidgetStoresBinding1589,
                        dataSeries: chartWidgetStoresBinding1576,
                        enableSeriesToggle: enableLegendSeriesToggle,
                        hasActiveSeriesSelection: chartWidgetStoresBinding1583,
                        maxRows: chartWidgetStoresBinding1580,
                        onSeriesHoverEnd: $t,
                        onSeriesHoverStart: chartWidgetStoresBinding1643,
                        onSeriesToggle: chartWidgetStoresBinding1642,
                        selectedSeriesKeys: chartWidgetStoresBinding1582,
                        ...chartSlot920,
                      }),
                  }),
                chartWidgetStoresBinding1576.map((item) => {
                  let chartWidgetStoresBinding1672 = `${item.dataKey}_${item.type}`,
                    chartWidgetStoresBinding1673 =
                      chartWidgetStoresBinding1589[item.dataKey],
                    chartWidgetStoresBinding1674 =
                      chartWidgetStoresBinding1583 &&
                      !chartWidgetStoresBinding1582.has(item.dataKey),
                    chartWidgetStoresBinding1675 =
                      chartWidgetStoresBinding1584 != null &&
                      chartWidgetStoresBinding1584 !== item.dataKey
                        ? item.type === "bar"
                          ? chartWidgetStoresBinding1333
                          : chartWidgetStoresBinding1332
                        : undefined,
                    chartWidgetStoresBinding1676 = showValueLabels
                      ? createElement(
                          LabelList,
                          {
                            dataKey: item.dataKey,
                            content: (chartSlot113) => {
                              let chartWidgetStoresBinding2114 = chartSlot113,
                                chartWidgetStoresBinding2115 =
                                  typeof chartWidgetStoresBinding2114.index ==
                                  "number"
                                    ? chartWidgetStoresBinding2114.index
                                    : typeof chartWidgetStoresBinding2114.dataIndex ==
                                        "number"
                                      ? chartWidgetStoresBinding2114.dataIndex
                                      : null;
                              if (
                                !chartWidgetStoresBinding1630(
                                  chartWidgetStoresBinding2115,
                                )
                              )
                                return null;
                              let chartWidgetStoresBinding2116 =
                                  chartWidgetStoresBinding2114.payload ??
                                  (chartWidgetStoresBinding2115 != null &&
                                  chartWidgetStoresBinding1587[
                                    chartWidgetStoresBinding2115
                                  ] != null
                                    ? chartWidgetStoresBinding1587[
                                        chartWidgetStoresBinding2115
                                      ]
                                    : null),
                                chartWidgetStoresBinding2117 =
                                  chartWidgetStoresBinding1629({
                                    value: chartWidgetStoresBinding2114.value,
                                    payload: chartWidgetStoresBinding2116,
                                    seriesConfig: item,
                                  });
                              if (
                                chartWidgetStoresBinding2117 == null ||
                                chartWidgetStoresBinding2117 === "" ||
                                typeof chartWidgetStoresBinding2114.x !=
                                  "number" ||
                                typeof chartWidgetStoresBinding2114.y !=
                                  "number"
                              )
                                return null;
                              let chartWidgetStoresBinding2118 =
                                typeof chartWidgetStoresBinding2114.x ==
                                "number"
                                  ? typeof chartWidgetStoresBinding2114.width ==
                                      "number" && item.type === "bar"
                                    ? chartWidgetStoresBinding2114.x +
                                      chartWidgetStoresBinding2114.width / 2
                                    : chartWidgetStoresBinding2114.x
                                  : null;
                              return chartWidgetStoresBinding2118 ==
                                null ? null : (
                                <text
                                  x={chartWidgetStoresBinding2118}
                                  y={chartWidgetStoresBinding2114.y - 10}
                                  textAnchor="middle"
                                  className={
                                    chartWidgetStoresBinding1327.ValueLabel
                                  }
                                >
                                  {chartWidgetStoresBinding2117}
                                </text>
                              );
                            },
                          },
                          `label-${chartWidgetStoresBinding1672}`,
                        )
                      : null;
                  switch (item.type) {
                    case "line":
                      return createElement(
                        Line,
                        {
                          dataKey: item.dataKey,
                          type: item.curveType || "natural",
                          stroke: chartWidgetStoresBinding1673,
                          strokeWidth: 2,
                          className: enableLegendSeriesToggle
                            ? chartWidgetStoresBinding1327.InteractiveSeries
                            : undefined,
                          dot: showDots
                            ? (chartSlot4605) =>
                                chartWidgetStoresBinding1637(
                                  item.dataKey,
                                  chartSlot4605,
                                )
                            : false,
                          isAnimationActive: chartWidgetStoresBinding1648,
                          hide: chartWidgetStoresBinding1674,
                          opacity: chartWidgetStoresBinding1675,
                          onClick: enableLegendSeriesToggle
                            ? () => chartWidgetStoresBinding1642(item.dataKey)
                            : undefined,
                          activeDot: showHoverDots
                            ? (chartSlot4606) =>
                                chartWidgetStoresBinding1638(
                                  item.dataKey,
                                  chartSlot4606,
                                )
                            : false,
                          children: chartWidgetStoresBinding1676,
                        },
                        chartWidgetStoresBinding1672,
                      );
                    case "area":
                      return createElement(
                        Area,
                        {
                          dataKey: item.dataKey,
                          stackId: item.stack,
                          type: item.curveType || "natural",
                          fill: `url(#fill-${item.dataKey}-${chartWidgetStoresBinding1575}-area)`,
                          stroke: chartWidgetStoresBinding1673,
                          strokeWidth: 2,
                          hide: chartWidgetStoresBinding1674,
                          opacity: chartWidgetStoresBinding1675,
                          dot: showDots
                            ? (chartSlot4607) =>
                                chartWidgetStoresBinding1637(
                                  item.dataKey,
                                  chartSlot4607,
                                )
                            : false,
                          isAnimationActive: chartWidgetStoresBinding1648,
                          activeDot: showHoverDots
                            ? (chartSlot4608) =>
                                chartWidgetStoresBinding1638(
                                  item.dataKey,
                                  chartSlot4608,
                                )
                            : false,
                          children: chartWidgetStoresBinding1676,
                        },
                        chartWidgetStoresBinding1672,
                      );
                    case "bar": {
                      let chartWidgetStoresBinding2189 =
                          chartWidgetStoresBinding1614 &&
                          chartWidgetStoresBinding1571 != null,
                        chartWidgetStoresBinding2190 =
                          !item.stack ||
                          chartWidgetStoresBinding1576.find(
                            (_item) =>
                              _item.type === "bar" &&
                              _item.stack === item.stack,
                          ) === item,
                        chartWidgetStoresBinding2191 =
                          !item.stack ||
                          chartWidgetStoresBinding1576.findLast(
                            (_item) =>
                              _item.type === "bar" &&
                              _item.stack === item.stack,
                          ) === item,
                        chartWidgetStoresBinding2192 =
                          chartWidgetStoresBinding2190
                            ? Math.max(0, Math.floor(barRadius))
                            : 0,
                        chartWidgetStoresBinding2193 =
                          chartWidgetStoresBinding2191
                            ? Math.max(0, Math.floor(barRadius))
                            : 0,
                        chartWidgetStoresBinding2194 =
                          chartWidgetStoresBinding1555
                            ? [
                                chartWidgetStoresBinding2192,
                                chartWidgetStoresBinding2193,
                                chartWidgetStoresBinding2193,
                                chartWidgetStoresBinding2192,
                              ]
                            : [
                                chartWidgetStoresBinding2193,
                                chartWidgetStoresBinding2193,
                                chartWidgetStoresBinding2192,
                                chartWidgetStoresBinding2192,
                              ],
                        chartWidgetStoresBinding2195 =
                          chartWidgetStoresBinding1614
                            ? chartWidgetStoresBinding1587.map((_item, index) =>
                                createElement(
                                  Cell,
                                  {
                                    style: {
                                      opacity:
                                        chartWidgetStoresBinding2189 &&
                                        index !== chartWidgetStoresBinding1571
                                          ? chartWidgetStoresBinding1333
                                          : 1,
                                    },
                                  },
                                  `cell-${chartWidgetStoresBinding1672}-${index}`,
                                ),
                              )
                            : null;
                      return createElement(
                        Bar,
                        {
                          dataKey: item.dataKey,
                          stackId: item.stack,
                          fill: `url(#fill-${item.dataKey}-${chartWidgetStoresBinding1575}-bar)`,
                          stroke: chartWidgetStoresBinding1673,
                          isAnimationActive: chartWidgetStoresBinding1648,
                          hide: chartWidgetStoresBinding1674,
                          opacity: chartWidgetStoresBinding1675,
                          activeBar: chartWidgetStoresBinding1614
                            ? false
                            : {
                                fillOpacity: 0.9,
                              },
                          maxBarSize,
                          radius: chartWidgetStoresBinding2194,
                          children: [
                            chartWidgetStoresBinding2195,
                            chartWidgetStoresBinding1676,
                          ],
                        },
                        chartWidgetStoresBinding1672,
                      );
                    }
                    case "scatter":
                      return createElement(
                        Scatter,
                        {
                          dataKey: item.dataKey,
                          fill: chartWidgetStoresBinding1673,
                          hide: chartWidgetStoresBinding1674,
                          isAnimationActive: chartWidgetStoresBinding1648,
                          opacity: chartWidgetStoresBinding1675,
                          children: chartWidgetStoresBinding1676,
                        },
                        chartWidgetStoresBinding1672,
                      );
                  }
                }),
                showHoverDots &&
                  !chartWidgetStoresBinding1563 &&
                  chartWidgetStoresBinding1624 != null &&
                  chartWidgetStoresBinding1624.dots.map((item) =>
                    createElement(
                      ReferenceDot,
                      {
                        x: chartWidgetStoresBinding1624.x,
                        y: item.value,
                        ifOverflow: "hidden",
                        shape: (chartSlot3642) =>
                          createElement(chartFn930, {
                            color: item.color,
                            root: chartWidgetStoresBinding1558,
                            ...chartSlot3642,
                          }),
                      },
                      `default-hover-dot-${item.dataKey}`,
                    ),
                  ),
                <defs>
                  {chartWidgetStoresBinding1576.map((item) => {
                    let chartWidgetStoresBinding1979 =
                      chartWidgetStoresBinding1589[item.dataKey];
                    if (item.type === "area") {
                      let chartWidgetStoresBinding2838 = chartWidgetStoresX(
                          theme,
                          item.fillColor,
                        ),
                        chartWidgetStoresBinding2839 =
                          chartWidgetStoresBinding2838
                            ? chartWidgetStoresB(chartWidgetStoresBinding2838)
                              ? `var(--${chartWidgetStoresBinding2838}-${chartWidgetStoresBinding1344[0]})`
                              : chartWidgetStoresBinding2838
                            : chartWidgetStoresBinding1979;
                      return (
                        <linearGradient
                          key={`fill-${item.dataKey}-${chartWidgetStoresBinding1575}-area`}
                          id={`fill-${item.dataKey}-${chartWidgetStoresBinding1575}-area`}
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0"
                            stopColor={chartWidgetStoresBinding2839}
                            stopOpacity={0.45}
                          />
                          <stop
                            offset="100%"
                            stopColor={chartWidgetStoresBinding2839}
                            stopOpacity={0}
                          />
                        </linearGradient>
                      );
                    }
                    return item.type === "bar" ? (
                      <linearGradient
                        key={`fill-${item.dataKey}-${chartWidgetStoresBinding1575}-bar`}
                        id={`fill-${item.dataKey}-${chartWidgetStoresBinding1575}-bar`}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor={chartWidgetStoresBinding1979}
                          stopOpacity={1}
                        />
                        <stop
                          offset="100%"
                          stopColor={chartWidgetStoresBinding1979}
                          stopOpacity={0.9}
                        />
                      </linearGradient>
                    ) : null;
                  })}
                </defs>,
              ],
            }),
          })}
        </div>
      </div>
    ),
  });
}
