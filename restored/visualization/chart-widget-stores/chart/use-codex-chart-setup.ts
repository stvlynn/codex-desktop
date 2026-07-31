// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Codex Chart — promoted from Flat boundaries/chart-widget-stores/chart-component (wave-11).
// Codex Chart setup state (pre-handler hooks).

import {
  startTransition,
  useCallback,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  isChartPaletteColor as chartWidgetStoresB,
  resolveChartThemeColor as chartWidgetStoresX,
} from "../chart-theme-colors";
import {
  resolveWidgetProps as chartWidgetStoresC,
  useWidgetEvaluate as chartWidgetStoresS,
  useResolveWidgetAction as $_,
} from "../use-widget-expression";
import { useChartIntl as chartWidgetStoresU } from "../use-chart-intl";
import { useWidgetContext as chartWidgetStoresE } from "../widget-context";
import { classNames as chartWidgetStoresV } from "../widget-class-names";
import { WidgetBoxRoot as chartWidgetStoresD } from "../widget-box";
import {
  chartWidgetStoresBinding1327,
  chartWidgetStoresBinding1328,
  chartWidgetStoresBinding1329,
  chartWidgetStoresBinding1330,
  chartWidgetStoresBinding1331,
  chartWidgetStoresBinding1332,
  chartWidgetStoresBinding1333,
  chartWidgetStoresBinding1334,
  chartWidgetStoresBinding1335,
  chartWidgetStoresBinding1336,
  chartWidgetStoresBinding1337,
  chartWidgetStoresBinding1338,
  chartWidgetStoresBinding1339,
  chartWidgetStoresBinding1340,
  chartWidgetStoresBinding1341,
  chartWidgetStoresBinding1342,
  chartWidgetStoresBinding1343,
  chartWidgetStoresBinding1344,
  chartWidgetStoresBinding1345,
  $G,
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

export type CodexChartSetup = Record<string, any>;

export function useCodexChartSetup(chartSlot4: unknown): CodexChartSetup {
  const {
    data = [],
    series = [],
    xAxis,
    layout = "horizontal",
    showYAxis,
    yAxis,
    showLegend = true,
    legendMaxRows,
    enableLegendSeriesToggle = false,
    showTooltip = true,
    showTooltipCursor = true,
    showTooltipLabel = false,
    showTooltipMarkers = false,
    maxTooltipEntries,
    tooltipOffset = 6,
    tooltipAnimationDuration = 600,
    tooltipAllowEscapeViewBox: chartWidgetStoresBinding1553,
    showHoverCursor = false,
    hoverIndicatorDataKey,
    showIdleHoverIndicator = false,
    showHoverDots = true,
    showDots = false,
    showGrid = true,
    showValueLabels = false,
    barRadius = 4,
    valueLabelInterval,
    valueLabelOffset,
    visiblePointCount,
    scrollable = false,
    disableUserScroll = false,
    minPointWidth,
    scrollToValue,
    disableAnimation = false,
    minHeight,
    height,
    aspectRatio,
    barGap,
    barCategoryGap,
    maxBarSize,
    onHoverAction,
    tooltipValueFormatter,
    children: _chartWidgetStoresW,
    ...__chartWidgetStoresT
  } = chartWidgetStoresC(chartSlot4);
  const chartWidgetStoresBinding1554 =
    aspectRatio ?? (height || minHeight ? undefined : 1.3333333333333333);
  const chartWidgetStoresBinding1555 = layout === "vertical";
  const { theme, onAction, streaming, isPrimarilyTouchDevice } =
    chartWidgetStoresE();
  const chartWidgetStoresBinding1556 = chartWidgetStoresU();
  const be = $_();
  const chartWidgetStoresBinding1557 = useRef(null);
  const chartWidgetStoresBinding1558 = useRef(null);
  const chartWidgetStoresBinding1559 = useRef(null);
  const chartWidgetStoresBinding1560 = useRef(false);
  const [chartWidgetStoresBinding1561, chartWidgetStoresBinding1562] =
    useState(null);
  const [chartWidgetStoresBinding1563, chartWidgetStoresBinding1564] =
    useState(false);
  const [chartWidgetStoresBinding1565, chartWidgetStoresBinding1566] =
    useState(false);
  const [chartWidgetStoresBinding1567, chartWidgetStoresBinding1568] = useState(
    () => new Set(),
  );
  const [chartWidgetStoresBinding1569, chartWidgetStoresBinding1570] =
    useState(null);
  const [chartWidgetStoresBinding1571, chartWidgetStoresBinding1572] =
    useState(null);
  const [chartWidgetStoresBinding1573, chartWidgetStoresBinding1574] =
    useState(null);
  const chartWidgetStoresBinding1575 = useId();
  const chartWidgetStoresBinding1576 = useMemo(
    () => (Array.isArray(series) ? series : []),
    [series],
  );
  const chartWidgetStoresBinding1577 = chartWidgetStoresBinding1576[0];
  const chartWidgetStoresBinding1578 =
    chartWidgetStoresBinding1577 &&
    chartWidgetStoresBinding1576.every(
      (item) =>
        chartWidgetStoresX(theme, item.color) ===
        chartWidgetStoresX(theme, chartWidgetStoresBinding1577.color),
    )
      ? chartWidgetStoresX(theme, chartWidgetStoresBinding1577.color)
      : undefined;
  const chartWidgetStoresBinding1579 =
    chartWidgetStoresBinding1576.some((item) => item.label) && !!showLegend;
  const chartWidgetStoresBinding1580 =
    typeof legendMaxRows == "number" &&
    Number.isFinite(legendMaxRows) &&
    legendMaxRows > 0
      ? Math.floor(legendMaxRows)
      : undefined;
  const chartWidgetStoresBinding1581 = useMemo(
    () => new Set(chartWidgetStoresBinding1576.map((item) => item.dataKey)),
    [chartWidgetStoresBinding1576],
  );
  const chartWidgetStoresBinding1582 = useMemo(() => {
    let chartWidgetStoresBinding5596 = new Set();
    return (
      chartWidgetStoresBinding1567.forEach((item) => {
        chartWidgetStoresBinding1581.has(item) &&
          chartWidgetStoresBinding5596.add(item);
      }),
      chartWidgetStoresBinding5596
    );
  }, [chartWidgetStoresBinding1581, chartWidgetStoresBinding1567]);
  const chartWidgetStoresBinding1583 =
    enableLegendSeriesToggle &&
    chartWidgetStoresBinding1582.size > 0 &&
    chartWidgetStoresBinding1582.size < chartWidgetStoresBinding1576.length;
  const chartWidgetStoresBinding1584 =
    chartWidgetStoresBinding1569 != null &&
    (!chartWidgetStoresBinding1583 ||
      chartWidgetStoresBinding1582.has(chartWidgetStoresBinding1569))
      ? chartWidgetStoresBinding1569
      : null;
  const chartWidgetStoresBinding1585 = showTooltip || showHoverCursor;
  const chartWidgetStoresBinding1586 =
    typeof hoverIndicatorDataKey == "string" && hoverIndicatorDataKey.length > 0
      ? hoverIndicatorDataKey
      : undefined;
  const chartWidgetStoresBinding1587 = useMemo(
    () =>
      Array.isArray(data)
        ? chartWidgetStoresBinding1576.length === 1 &&
          chartWidgetStoresBinding1576[0]?.type === "bar" &&
          !chartWidgetStoresBinding1576[0]?.color
          ? data.map((item, index) => ({
              ...item,
              fill:
                item.fill ??
                chartWidgetStoresBinding1345[
                  index % chartWidgetStoresBinding1345.length
                ],
              stroke:
                item.stroke ??
                chartWidgetStoresBinding1345[
                  index % chartWidgetStoresBinding1345.length
                ],
            }))
          : data
        : [],
    [chartWidgetStoresBinding1576, data],
  );
  useLayoutEffect(() => {
    chartWidgetStoresBinding1587.length > 0 &&
      (chartWidgetStoresBinding1560.current = true);
  }, [chartWidgetStoresBinding1587.length]);
  let chartWidgetStoresBinding1588 = useMemo(() => {
    if (showIdleHoverIndicator) {
      for (
        let chartWidgetStoresBinding5935 =
          chartWidgetStoresBinding1587.length - 1;
        chartWidgetStoresBinding5935 >= 0;
        --chartWidgetStoresBinding5935
      )
        if (
          chartFn927(
            chartWidgetStoresBinding1587[chartWidgetStoresBinding5935],
            chartWidgetStoresBinding1586,
          )
        )
          return chartWidgetStoresBinding5935;
    }
  }, [
    chartWidgetStoresBinding1587,
    chartWidgetStoresBinding1586,
    showIdleHoverIndicator,
  ]);
  const chartWidgetStoresBinding1589 = useMemo(() => {
    let chartWidgetStoresBinding3003 = {},
      chartWidgetStoresBinding3004,
      chartWidgetStoresBinding3005 = {
        blue: 0,
        purple: 0,
        green: 0,
        orange: 0,
        red: 0,
        yellow: 0,
        pink: 0,
      };
    for (let chartWidgetStoresBinding3317 of chartWidgetStoresBinding1576) {
      if (chartWidgetStoresBinding1578) {
        if (chartWidgetStoresB(chartWidgetStoresBinding1578)) {
          let chartWidgetStoresBinding5688 =
            chartWidgetStoresBinding3005[chartWidgetStoresBinding1578] %
            chartWidgetStoresBinding1344.length;
          chartWidgetStoresBinding3005[chartWidgetStoresBinding1578] += 1;
          chartWidgetStoresBinding3003[chartWidgetStoresBinding3317.dataKey] =
            `var(--${chartWidgetStoresBinding1578}-${chartWidgetStoresBinding1344[chartWidgetStoresBinding5688]})`;
        } else
          chartWidgetStoresBinding3003[chartWidgetStoresBinding3317.dataKey] =
            chartWidgetStoresBinding1578;
        continue;
      }
      let chartWidgetStoresBinding3378 = chartWidgetStoresX(
        theme,
        chartWidgetStoresBinding3317.color,
      );
      if (chartWidgetStoresBinding3378) {
        chartWidgetStoresB(chartWidgetStoresBinding3378)
          ? (chartWidgetStoresBinding3378 === chartWidgetStoresBinding3004 &&
              (chartWidgetStoresBinding3005[chartWidgetStoresBinding3378] +=
                chartWidgetStoresBinding1343.length - 2),
            (chartWidgetStoresBinding3004 = chartWidgetStoresBinding3378),
            (chartWidgetStoresBinding3003[
              chartWidgetStoresBinding3317.dataKey
            ] =
              `var(--${chartWidgetStoresBinding3378}-${chartWidgetStoresBinding1343[chartWidgetStoresBinding3005[chartWidgetStoresBinding3378] % chartWidgetStoresBinding1343.length]})`),
            (chartWidgetStoresBinding3005[chartWidgetStoresBinding3378] += 1))
          : (chartWidgetStoresBinding3003[
              chartWidgetStoresBinding3317.dataKey
            ] = chartWidgetStoresBinding3378);
        continue;
      }
      let chartWidgetStoresBinding3379 = chartFn933(
        chartWidgetStoresBinding3004,
      );
      chartWidgetStoresBinding3004 = chartWidgetStoresBinding3379;
      let chartWidgetStoresBinding3380 =
        chartWidgetStoresBinding3005[chartWidgetStoresBinding3379] %
        chartWidgetStoresBinding1343.length;
      chartWidgetStoresBinding3005[chartWidgetStoresBinding3379] += 1;
      chartWidgetStoresBinding3003[chartWidgetStoresBinding3317.dataKey] =
        `var(--${chartWidgetStoresBinding3379}-${chartWidgetStoresBinding1343[chartWidgetStoresBinding3380]})`;
    }
    return chartWidgetStoresBinding3003;
  }, [chartWidgetStoresBinding1576, chartWidgetStoresBinding1578, theme]);
  const chartWidgetStoresBinding1590 = typeof xAxis == "string" ? null : xAxis;
  const chartWidgetStoresBinding1591 =
    typeof xAxis == "string"
      ? xAxis
      : (chartWidgetStoresBinding1590?.dataKey ?? "");
  const $e = !!chartWidgetStoresBinding1590?.hide;
  const chartWidgetStoresBinding1592 =
    chartWidgetStoresBinding1590?.labels ?? chartWidgetStoresBinding1328;
  const chartWidgetStoresBinding1593 = chartWidgetStoresBinding1590?.ticks;
  const chartWidgetStoresBinding1594 = chartWidgetStoresBinding1590?.interval;
  const chartWidgetStoresBinding1595 = chartWidgetStoresBinding1590?.axisLine;
  const chartWidgetStoresBinding1596 = chartWidgetStoresBinding1590?.tickMargin;
  const chartWidgetStoresBinding1597 = chartWidgetStoresBinding1590?.padding;
  const at = chartWidgetStoresBinding1590?.type;
  const chartWidgetStoresBinding1598 = chartWidgetStoresBinding1590?.domain;
  const chartWidgetStoresBinding1599 =
    chartWidgetStoresBinding1590?.tickFormatter;
  const chartWidgetStoresBinding1600 =
    typeof chartWidgetStoresBinding1590?.width == "number" &&
    Number.isFinite(chartWidgetStoresBinding1590.width)
      ? chartWidgetStoresBinding1590.width
      : undefined;
  const chartWidgetStoresBinding1601 = chartWidgetStoresBinding1583
    ? ["auto", "auto"]
    : yAxis?.domain;
  const chartWidgetStoresBinding1602 = chartWidgetStoresBinding1583
    ? undefined
    : yAxis?.ticks;
  const chartWidgetStoresBinding1603 = chartWidgetStoresBinding1583
    ? chartWidgetStoresBinding1329
    : (yAxis?.labels ?? chartWidgetStoresBinding1329);
  const chartWidgetStoresBinding1604 = yAxis?.tickFormatter;
  const chartWidgetStoresBinding1605 = chartFn916(chartWidgetStoresBinding1576);
  const chartWidgetStoresBinding1606 = yAxis?.axisLine;
  const chartWidgetStoresBinding1607 = yAxis?.tickLine;
  const chartWidgetStoresBinding1608 =
    typeof yAxis?.tickMargin == "number" && Number.isFinite(yAxis.tickMargin)
      ? yAxis.tickMargin
      : undefined;
  const _t = yAxis?.orientation;
  const chartWidgetStoresBinding1609 =
    typeof yAxis?.width == "number" && Number.isFinite(yAxis.width)
      ? yAxis.width
      : undefined;
  const chartWidgetStoresBinding1610 = enableLegendSeriesToggle ? 16 : 0;
  const chartWidgetStoresBinding1611 =
    chartWidgetStoresBinding1577?.dataKey ?? null;
  const chartWidgetStoresBinding1612 = chartWidgetStoresBinding1576.some(
    (item) => item.type === "scatter",
  );
  const chartWidgetStoresBinding1613 = chartWidgetStoresBinding1576.reduce(
    (accumulator, current) =>
      current.type === "bar" ? accumulator + 1 : accumulator,
    0,
  );
  const chartWidgetStoresBinding1614 =
    isPrimarilyTouchDevice !== true && chartWidgetStoresBinding1613 > 1;
  const chartWidgetStoresBinding1615 =
    !!onHoverAction || showIdleHoverIndicator || chartWidgetStoresBinding1614;
  const chartWidgetStoresBinding1616 =
    !!onHoverAction || showIdleHoverIndicator;
  const chartWidgetStoresBinding1617 =
    at ?? (chartWidgetStoresBinding1612 ? "number" : undefined);
  const chartWidgetStoresBinding1618 =
    chartWidgetStoresBinding1612 && chartWidgetStoresBinding1617 === "number";
  const chartWidgetStoresBinding1619 =
    chartWidgetStoresBinding1598 ??
    (chartWidgetStoresBinding1618 ? $G : undefined);
  const chartWidgetStoresBinding1620 =
    chartWidgetStoresBinding1599 ??
    (chartWidgetStoresBinding1618 ? chartWidgetStoresBinding1331 : undefined);
  const chartWidgetStoresBinding1621 =
    typeof valueLabelInterval == "number" && Number.isFinite(valueLabelInterval)
      ? Math.max(1, Math.floor(valueLabelInterval))
      : 1;
  const chartWidgetStoresBinding1622 =
    typeof valueLabelOffset == "number" && Number.isFinite(valueLabelOffset)
      ? Math.max(0, Math.floor(valueLabelOffset))
      : 0;
  const chartWidgetStoresBinding1623 =
    typeof visiblePointCount == "number" && Number.isFinite(visiblePointCount)
      ? Math.max(1, Math.floor(visiblePointCount))
      : null;
  const chartWidgetStoresBinding1624 = useMemo(() => {
    if (chartWidgetStoresBinding1588 == null) return null;
    let chartWidgetStoresBinding3303 =
      chartWidgetStoresBinding1587[chartWidgetStoresBinding1588];
    if (!chartWidgetStoresBinding3303) return null;
    let chartWidgetStoresBinding3304 =
      chartWidgetStoresBinding3303[chartWidgetStoresBinding1591];
    return typeof chartWidgetStoresBinding3304 != "number" &&
      typeof chartWidgetStoresBinding3304 != "string"
      ? null
      : {
          x: chartWidgetStoresBinding3304,
          dots: chartWidgetStoresBinding1576.flatMap((item) => {
            if (item.type === "bar") return [];
            let chartWidgetStoresBinding4099 =
              chartWidgetStoresBinding3303[item.dataKey];
            return typeof chartWidgetStoresBinding4099 != "number" ||
              !Number.isFinite(chartWidgetStoresBinding4099)
              ? []
              : [
                  {
                    dataKey: item.dataKey,
                    value: chartWidgetStoresBinding4099,
                    color:
                      chartWidgetStoresBinding1589[item.dataKey] ??
                      "var(--chart-color-0)",
                  },
                ];
          }),
        };
  }, [
    chartWidgetStoresBinding1589,
    chartWidgetStoresBinding1587,
    chartWidgetStoresBinding1576,
    chartWidgetStoresBinding1588,
    chartWidgetStoresBinding1591,
  ]);
  return {
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
  };
}
