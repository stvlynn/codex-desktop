// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Codex Chart component (`_chartWidgetStoresS`) + series/legend/tooltip helpers.
// Wave-8: migrated off surface bag onto public recharts@3 + react-intl + react.
// Flat boundary facade retained for QG (mechanical body); public API from visualization/.
// Wave-9: pie also on public recharts; surface bag is a no-op stub.

import {
  createElement,
  startTransition,
  useCallback,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
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
  usePlotArea,
} from "recharts";

import {
  CHART_AXIS_CHAR_WIDTH,
  CHART_AXIS_COMPACT_MAX_LABEL,
  CHART_AXIS_COMPACT_WIDTH,
  CHART_AXIS_LABEL_GAP,
  CHART_BAR_CATEGORY_GAP_RATIO,
  CHART_BAR_GAP_RATIO,
  CHART_BAR_RADIUS_DEFAULT,
  CHART_CLASS_NAMES,
  CHART_COLOR_NAMES,
  CHART_COLOR_WEIGHTS_PRIMARY,
  CHART_COLOR_WEIGHTS_SECONDARY,
  CHART_CSS_VAR_PALETTE,
  CHART_DEFAULT_VALUE_FORMAT,
  CHART_HOVER_DOT_RADIUS,
  CHART_LEGEND_ITEM_MIN_WIDTH,
  CHART_LEGEND_ROW_HEIGHT,
  CHART_VALUE_LABEL_OFFSET,
  CHART_VIEW_BOX_AUTO,
} from "../../visualization/chart-widget-stores/chart-chrome-constants";
import {
  isChartPaletteColor as chartWidgetStoresB,
  resolveChartThemeColor as chartWidgetStoresX,
} from "../../visualization/chart-widget-stores/chart-theme-colors";
import {
  resolveWidgetProps as chartWidgetStoresC,
  useWidgetEvaluate as chartWidgetStoresS,
  useResolveWidgetAction as $_,
} from "../../visualization/chart-widget-stores/use-widget-expression";
import { useChartIntl as chartWidgetStoresU } from "../../visualization/chart-widget-stores/use-chart-intl";
import { useWidgetContext as chartWidgetStoresE } from "../../visualization/chart-widget-stores/widget-context";
import { classNames as chartWidgetStoresV } from "../../visualization/chart-widget-stores/widget-class-names";
import { WidgetBoxRoot as chartWidgetStoresD } from "../../visualization/chart-widget-stores/widget-box";

export type CodexChartComponent = (props: unknown) => ReactNode;

const chartWidgetStoresBinding1327 = CHART_CLASS_NAMES;
const chartWidgetStoresBinding1328: Record<string, unknown> = {};
const chartWidgetStoresBinding1329: Record<string, unknown> = {};
const chartWidgetStoresBinding1330 = CHART_BAR_RADIUS_DEFAULT;
const chartWidgetStoresBinding1331 = { ...CHART_DEFAULT_VALUE_FORMAT };
const chartWidgetStoresBinding1332 = CHART_BAR_GAP_RATIO;
const chartWidgetStoresBinding1333 = CHART_BAR_CATEGORY_GAP_RATIO;
const chartWidgetStoresBinding1334 = CHART_AXIS_CHAR_WIDTH;
const chartWidgetStoresBinding1335 = CHART_AXIS_LABEL_GAP;
const chartWidgetStoresBinding1336 = CHART_AXIS_COMPACT_WIDTH;
const chartWidgetStoresBinding1337 = CHART_AXIS_COMPACT_MAX_LABEL;
const chartWidgetStoresBinding1338 = CHART_LEGEND_ITEM_MIN_WIDTH;
const chartWidgetStoresBinding1339 = CHART_LEGEND_ROW_HEIGHT;
const chartWidgetStoresBinding1340 = CHART_HOVER_DOT_RADIUS;
const chartWidgetStoresBinding1341 = CHART_VALUE_LABEL_OFFSET;
const chartWidgetStoresBinding1342 = [...CHART_COLOR_NAMES];
const chartWidgetStoresBinding1343 = [...CHART_COLOR_WEIGHTS_PRIMARY];
const chartWidgetStoresBinding1344 = [...CHART_COLOR_WEIGHTS_SECONDARY];
const chartWidgetStoresBinding1345 = [...CHART_CSS_VAR_PALETTE];
const $G = [...CHART_VIEW_BOX_AUTO];

function chartFn914(param3658) {
  return typeof param3658 == "number" &&
    Number.isFinite(param3658)
    ? param3658
    : null;
}
function chartFn915(param3641) {
  return !!(
    param3641?.valueFormat ||
    param3641?.valuePrefix ||
    param3641?.valueSuffix
  );
}
function chartFn916(param2079) {
  let chartWidgetStoresBinding5034 = param2079[0];
  if (
    !(
      !chartWidgetStoresBinding5034 ||
      !chartFn915(chartWidgetStoresBinding5034)
    )
  )
    return param2079.every(
      (item) =>
        item.valueFormat === chartWidgetStoresBinding5034.valueFormat &&
        item.valuePrefix === chartWidgetStoresBinding5034.valuePrefix &&
        item.valueSuffix === chartWidgetStoresBinding5034.valueSuffix,
    )
      ? chartWidgetStoresBinding5034
      : undefined;
}
function chartFn917(
  param735,
  param736,
  param737,
) {
  if (
    typeof param736 != "number" ||
    !Number.isFinite(param736)
  )
    return param736 == null
      ? null
      : String(param736);
  let chartWidgetStoresBinding3554;
  return (
    (chartWidgetStoresBinding3554 =
      param737?.valueFormat === "integer"
        ? param735.formatNumber(param736, {
            maximumFractionDigits: 0,
          })
        : param737?.valueFormat === "raw"
          ? String(param736)
          : param737?.valueFormat === "compact"
            ? param735.formatNumber(
                param736,
                {
                  compactDisplay: "short",
                  maximumFractionDigits: 1,
                  notation: "compact",
                },
              )
            : param735.formatNumber(
                param736,
              )),
    `${param737?.valuePrefix ?? ""}${chartWidgetStoresBinding3554}${param737?.valueSuffix ?? ""}`
  );
}
function chartFn918(param3952) {
  return param3952 &&
    typeof param3952 == "object"
    ? param3952
    : null;
}
function chartFn919(param3413) {
  let chartWidgetStoresBinding5799 = chartFn918(
    param3413,
  );
  return typeof chartWidgetStoresBinding5799?.formatted == "string"
    ? chartWidgetStoresBinding5799.formatted
    : null;
}
function chartFn920(param3820) {
  return `${param3820 * chartWidgetStoresBinding1339 + Math.max(0, param3820 - 1) * chartWidgetStoresBinding1340 + chartWidgetStoresBinding1341}px`;
}
function chartFn921(
  param3586,
  param3587,
) {
  if (!(param3586 <= 0))
    return Math.min(
      chartWidgetStoresBinding1338,
      Math.ceil(
        param3586 * chartWidgetStoresBinding1334 +
          param3587 +
          chartWidgetStoresBinding1330,
      ),
    );
}
function chartFn922(
  param2157,
  param2158,
) {
  if (param2157.length <= param2158)
    return param2157;
  if (param2158 <= 3)
    return param2157.slice(0, param2158);
  let chartWidgetStoresBinding5085 = param2158 - 3,
    chartWidgetStoresBinding5086 = Math.ceil(chartWidgetStoresBinding5085 / 2),
    chartWidgetStoresBinding5087 = Math.floor(chartWidgetStoresBinding5085 / 2);
  return `${param2157.slice(0, chartWidgetStoresBinding5086).trimEnd()}...${param2157.slice(param2157.length - chartWidgetStoresBinding5087).trimStart()}`;
}
function chartFn923(
  param3220,
  param3221,
) {
  let chartWidgetStoresBinding5734 = param3220 - 1;
  return Array.from(
    {
      length: param3221,
    },
    (param4364, param4365) =>
      Math.round(
        (param4365 * chartWidgetStoresBinding5734) /
          (param3221 - 1),
      ),
  );
}
function chartFn924({
  axisWidth,
  data,
  dataKey,
  labels,
  usesBandScale,
}) {
  if (axisWidth == null || axisWidth <= 0) return;
  let chartWidgetStoresBinding2351 = [],
    chartWidgetStoresBinding2352 = new Set(),
    chartWidgetStoresBinding2353 = false;
  for (let chartWidgetStoresBinding5246 of data) {
    let chartWidgetStoresBinding5314 = chartWidgetStoresBinding5246[dataKey];
    if (
      typeof chartWidgetStoresBinding5314 != "string" &&
      typeof chartWidgetStoresBinding5314 != "number"
    )
      return;
    let chartWidgetStoresBinding5315 = String(chartWidgetStoresBinding5314);
    chartWidgetStoresBinding2352.has(chartWidgetStoresBinding5315) &&
      (chartWidgetStoresBinding2353 = true);
    chartWidgetStoresBinding2352.add(chartWidgetStoresBinding5315);
    let chartWidgetStoresBinding5316 =
      labels[chartWidgetStoresBinding5315] ?? chartWidgetStoresBinding5315;
    chartWidgetStoresBinding2351.push({
      label: chartWidgetStoresBinding5316,
      value: chartWidgetStoresBinding5314,
    });
  }
  if (chartWidgetStoresBinding2351.length === 0) return;
  let chartWidgetStoresBinding2354 = usesBandScale
      ? chartWidgetStoresBinding2351.length
      : Math.max(1, chartWidgetStoresBinding2351.length - 1),
    chartWidgetStoresBinding2355 = (
      param4539,
      param4540,
    ) =>
      ((param4540 - param4539) * axisWidth) /
      chartWidgetStoresBinding2354,
    chartWidgetStoresBinding2356 = (param1494) => {
      if (param1494.length === 1)
        return (
          chartWidgetStoresBinding2351[param1494[0]].label
            .length *
            chartWidgetStoresBinding1334 <=
          axisWidth
        );
      for (
        let chartWidgetStoresBinding5111 = 1;
        chartWidgetStoresBinding5111 < param1494.length;
        chartWidgetStoresBinding5111 += 1
      ) {
        let chartWidgetStoresBinding5398 =
            chartWidgetStoresBinding2351[
              param1494[chartWidgetStoresBinding5111 - 1]
            ],
          chartWidgetStoresBinding5399 =
            chartWidgetStoresBinding2351[
              param1494[chartWidgetStoresBinding5111]
            ];
        if (
          ((chartWidgetStoresBinding5398.label.length +
            chartWidgetStoresBinding5399.label.length) *
            chartWidgetStoresBinding1334) /
            2 +
            chartWidgetStoresBinding1335 >
          chartWidgetStoresBinding2355(
            param1494[chartWidgetStoresBinding5111 - 1],
            param1494[chartWidgetStoresBinding5111],
          )
        )
          return false;
      }
      return true;
    },
    chartWidgetStoresBinding2357 = [0];
  if (chartWidgetStoresBinding2351.length > 1) {
    chartWidgetStoresBinding2357 = [0, chartWidgetStoresBinding2351.length - 1];
    let chartWidgetStoresBinding4869 =
        Math.min(
          ...chartWidgetStoresBinding2351.map((item) => item.label.length),
        ) *
          chartWidgetStoresBinding1334 +
        chartWidgetStoresBinding1335,
      chartWidgetStoresBinding4870 = Math.min(
        chartWidgetStoresBinding2351.length,
        Math.max(2, Math.floor(axisWidth / chartWidgetStoresBinding4869) + 1),
      );
    for (
      let chartWidgetStoresBinding5683 = chartWidgetStoresBinding4870;
      chartWidgetStoresBinding5683 >= 2;
      --chartWidgetStoresBinding5683
    ) {
      let chartWidgetStoresBinding5813 = chartFn923(
        chartWidgetStoresBinding2351.length,
        chartWidgetStoresBinding5683,
      );
      if (chartWidgetStoresBinding2356(chartWidgetStoresBinding5813)) {
        chartWidgetStoresBinding2357 = chartWidgetStoresBinding5813;
        break;
      }
    }
  }
  let chartWidgetStoresBinding2358 = chartWidgetStoresBinding2357.map(
      (item) => chartWidgetStoresBinding2351[item],
    ),
    chartWidgetStoresBinding2359 =
      axisWidth < chartWidgetStoresBinding1336
        ? chartWidgetStoresBinding1337
        : 1 / 0;
  if (!chartWidgetStoresBinding2356(chartWidgetStoresBinding2357)) {
    let chartWidgetStoresBinding5489 = chartWidgetStoresBinding2355(
      0,
      chartWidgetStoresBinding2357.length === 1
        ? chartWidgetStoresBinding2354
        : Math.floor(
            (chartWidgetStoresBinding2351.length - 1) /
              (chartWidgetStoresBinding2357.length - 1),
          ),
    );
    chartWidgetStoresBinding2359 = Math.min(
      chartWidgetStoresBinding2359,
      Math.max(
        1,
        Math.floor(
          (chartWidgetStoresBinding5489 - chartWidgetStoresBinding1335) /
            chartWidgetStoresBinding1334,
        ),
      ),
    );
  }
  return {
    maxLabelLength: chartWidgetStoresBinding2359,
    ticks: chartWidgetStoresBinding2353
      ? undefined
      : chartWidgetStoresBinding2358.map((item) => item.value),
  };
}
function chartFn925({
  data,
  dataKey,
  hideTicks,
  labels,
  usesBandScale,
  ...rest
}) {
  let { hide, interval, padding, tickFormatter, ticks, type } = rest,
    chartWidgetStoresBinding2879 = usePlotArea(),
    chartWidgetStoresBinding2880 =
      typeof padding == "object"
        ? (padding.left ?? 0) + (padding.right ?? 0)
        : 0,
    chartWidgetStoresBinding2881 =
      chartWidgetStoresBinding2879 == null
        ? null
        : Math.max(
            0,
            chartWidgetStoresBinding2879.width - chartWidgetStoresBinding2880,
          ),
    chartWidgetStoresBinding2882 =
      !hide &&
      !hideTicks &&
      type !== "number" &&
      ticks == null &&
      interval == null,
    chartWidgetStoresBinding2883 = useMemo(() => {
      if (chartWidgetStoresBinding2882)
        return chartFn924({
          axisWidth: chartWidgetStoresBinding2881,
          data,
          dataKey,
          labels,
          usesBandScale,
        });
    }, [
      chartWidgetStoresBinding2881,
      data,
      dataKey,
      labels,
      chartWidgetStoresBinding2882,
      usesBandScale,
    ]),
    chartWidgetStoresBinding2884 = (param2604) => {
      if (hide || hideTicks || param2604 == null) return "";
      let chartWidgetStoresBinding5405 = String(param2604),
        chartWidgetStoresBinding5406 =
          labels[chartWidgetStoresBinding5405] ?? chartWidgetStoresBinding5405,
        chartWidgetStoresBinding5407 =
          chartWidgetStoresBinding2883?.maxLabelLength ?? 1 / 0;
      return Number.isFinite(chartWidgetStoresBinding5407)
        ? chartFn922(
            chartWidgetStoresBinding5406,
            chartWidgetStoresBinding5407,
          )
        : chartWidgetStoresBinding5406;
    },
    chartWidgetStoresBinding2885 = ticks ?? chartWidgetStoresBinding2883?.ticks,
    chartWidgetStoresBinding2886 =
      interval ?? (chartWidgetStoresBinding2883?.ticks == null ? undefined : 0);
  return createElement(XAxis, {
    ...rest,
    dataKey,
    ticks: chartWidgetStoresBinding2885,
    interval: chartWidgetStoresBinding2886,
    tickFormatter:
      type === "number" ? tickFormatter : chartWidgetStoresBinding2884,
  });
}
function chartFn926(
  param2077,
  param2078 = 0,
) {
  if (param2077 == null) return null;
  let chartWidgetStoresBinding5032 =
    param2077.querySelector(".recharts-yAxis");
  if (chartWidgetStoresBinding5032 == null) return null;
  let { width } = chartWidgetStoresBinding5032.getBoundingClientRect();
  return !Number.isFinite(width) || width <= 0
    ? null
    : Math.ceil(
        width + chartWidgetStoresBinding1330 + param2078,
      );
}
function chartFn927(
  param3555,
  param3556,
) {
  if (!param3556) return true;
  let chartWidgetStoresBinding5879 = chartFn918(
    param3555,
  );
  return (
    chartWidgetStoresBinding5879 != null &&
    !!chartWidgetStoresBinding5879[param3556]
  );
}
function chartFn928(param2595) {
  return (
    param2595 != null &&
    param2595.value == null &&
    param2595.formatted == null &&
    param2595.payload == null &&
    param2595.index == null &&
    param2595.chartX == null &&
    param2595.chartY == null
  );
}
function CodexChartBody(param4: unknown) {
  let {
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
    } = chartWidgetStoresC(param4),
    chartWidgetStoresBinding1554 =
      aspectRatio ?? (height || minHeight ? undefined : 1.3333333333333333),
    chartWidgetStoresBinding1555 = layout === "vertical",
    { theme, onAction, streaming, isPrimarilyTouchDevice } =
      chartWidgetStoresE(),
    chartWidgetStoresBinding1556 = chartWidgetStoresU(),
    be = $_(),
    chartWidgetStoresBinding1557 = useRef(null),
    chartWidgetStoresBinding1558 = useRef(null),
    chartWidgetStoresBinding1559 = useRef(null),
    chartWidgetStoresBinding1560 = useRef(false),
    [chartWidgetStoresBinding1561, chartWidgetStoresBinding1562] =
      useState(null),
    [chartWidgetStoresBinding1563, chartWidgetStoresBinding1564] =
      useState(false),
    [chartWidgetStoresBinding1565, chartWidgetStoresBinding1566] =
      useState(false),
    [chartWidgetStoresBinding1567, chartWidgetStoresBinding1568] =
      useState(() => new Set()),
    [chartWidgetStoresBinding1569, chartWidgetStoresBinding1570] =
      useState(null),
    [chartWidgetStoresBinding1571, chartWidgetStoresBinding1572] =
      useState(null),
    [chartWidgetStoresBinding1573, chartWidgetStoresBinding1574] =
      useState(null),
    chartWidgetStoresBinding1575 = useId(),
    chartWidgetStoresBinding1576 = useMemo(
      () => (Array.isArray(series) ? series : []),
      [series],
    ),
    chartWidgetStoresBinding1577 = chartWidgetStoresBinding1576[0],
    chartWidgetStoresBinding1578 =
      chartWidgetStoresBinding1577 &&
      chartWidgetStoresBinding1576.every(
        (item) =>
          chartWidgetStoresX(theme, item.color) ===
          chartWidgetStoresX(theme, chartWidgetStoresBinding1577.color),
      )
        ? chartWidgetStoresX(theme, chartWidgetStoresBinding1577.color)
        : undefined,
    chartWidgetStoresBinding1579 =
      chartWidgetStoresBinding1576.some((item) => item.label) && !!showLegend,
    chartWidgetStoresBinding1580 =
      typeof legendMaxRows == "number" &&
      Number.isFinite(legendMaxRows) &&
      legendMaxRows > 0
        ? Math.floor(legendMaxRows)
        : undefined,
    chartWidgetStoresBinding1581 = useMemo(
      () => new Set(chartWidgetStoresBinding1576.map((item) => item.dataKey)),
      [chartWidgetStoresBinding1576],
    ),
    chartWidgetStoresBinding1582 = useMemo(() => {
      let chartWidgetStoresBinding5596 = new Set();
      return (
        chartWidgetStoresBinding1567.forEach((item) => {
          chartWidgetStoresBinding1581.has(item) &&
            chartWidgetStoresBinding5596.add(item);
        }),
        chartWidgetStoresBinding5596
      );
    }, [chartWidgetStoresBinding1581, chartWidgetStoresBinding1567]),
    chartWidgetStoresBinding1583 =
      enableLegendSeriesToggle &&
      chartWidgetStoresBinding1582.size > 0 &&
      chartWidgetStoresBinding1582.size < chartWidgetStoresBinding1576.length,
    chartWidgetStoresBinding1584 =
      chartWidgetStoresBinding1569 != null &&
      (!chartWidgetStoresBinding1583 ||
        chartWidgetStoresBinding1582.has(chartWidgetStoresBinding1569))
        ? chartWidgetStoresBinding1569
        : null,
    chartWidgetStoresBinding1585 = showTooltip || showHoverCursor,
    chartWidgetStoresBinding1586 =
      typeof hoverIndicatorDataKey == "string" &&
      hoverIndicatorDataKey.length > 0
        ? hoverIndicatorDataKey
        : undefined,
    chartWidgetStoresBinding1587 = useMemo(
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
  let chartWidgetStoresBinding1588 =
      useMemo(() => {
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
      ]),
    chartWidgetStoresBinding1589 = useMemo(() => {
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
    }, [chartWidgetStoresBinding1576, chartWidgetStoresBinding1578, theme]),
    chartWidgetStoresBinding1590 = typeof xAxis == "string" ? null : xAxis,
    chartWidgetStoresBinding1591 =
      typeof xAxis == "string"
        ? xAxis
        : (chartWidgetStoresBinding1590?.dataKey ?? ""),
    $e = !!chartWidgetStoresBinding1590?.hide,
    chartWidgetStoresBinding1592 =
      chartWidgetStoresBinding1590?.labels ?? chartWidgetStoresBinding1328,
    chartWidgetStoresBinding1593 = chartWidgetStoresBinding1590?.ticks,
    chartWidgetStoresBinding1594 = chartWidgetStoresBinding1590?.interval,
    chartWidgetStoresBinding1595 = chartWidgetStoresBinding1590?.axisLine,
    chartWidgetStoresBinding1596 = chartWidgetStoresBinding1590?.tickMargin,
    chartWidgetStoresBinding1597 = chartWidgetStoresBinding1590?.padding,
    at = chartWidgetStoresBinding1590?.type,
    chartWidgetStoresBinding1598 = chartWidgetStoresBinding1590?.domain,
    chartWidgetStoresBinding1599 = chartWidgetStoresBinding1590?.tickFormatter,
    chartWidgetStoresBinding1600 =
      typeof chartWidgetStoresBinding1590?.width == "number" &&
      Number.isFinite(chartWidgetStoresBinding1590.width)
        ? chartWidgetStoresBinding1590.width
        : undefined,
    chartWidgetStoresBinding1601 = chartWidgetStoresBinding1583
      ? ["auto", "auto"]
      : yAxis?.domain,
    chartWidgetStoresBinding1602 = chartWidgetStoresBinding1583
      ? undefined
      : yAxis?.ticks,
    chartWidgetStoresBinding1603 = chartWidgetStoresBinding1583
      ? chartWidgetStoresBinding1329
      : (yAxis?.labels ?? chartWidgetStoresBinding1329),
    chartWidgetStoresBinding1604 = yAxis?.tickFormatter,
    chartWidgetStoresBinding1605 = chartFn916(
      chartWidgetStoresBinding1576,
    ),
    chartWidgetStoresBinding1606 = yAxis?.axisLine,
    chartWidgetStoresBinding1607 = yAxis?.tickLine,
    chartWidgetStoresBinding1608 =
      typeof yAxis?.tickMargin == "number" && Number.isFinite(yAxis.tickMargin)
        ? yAxis.tickMargin
        : undefined,
    _t = yAxis?.orientation,
    chartWidgetStoresBinding1609 =
      typeof yAxis?.width == "number" && Number.isFinite(yAxis.width)
        ? yAxis.width
        : undefined,
    chartWidgetStoresBinding1610 = enableLegendSeriesToggle ? 16 : 0,
    chartWidgetStoresBinding1611 =
      chartWidgetStoresBinding1577?.dataKey ?? null,
    chartWidgetStoresBinding1612 = chartWidgetStoresBinding1576.some(
      (item) => item.type === "scatter",
    ),
    chartWidgetStoresBinding1613 = chartWidgetStoresBinding1576.reduce(
      (accumulator, current) =>
        current.type === "bar" ? accumulator + 1 : accumulator,
      0,
    ),
    chartWidgetStoresBinding1614 =
      isPrimarilyTouchDevice !== true && chartWidgetStoresBinding1613 > 1,
    chartWidgetStoresBinding1615 =
      !!onHoverAction || showIdleHoverIndicator || chartWidgetStoresBinding1614,
    chartWidgetStoresBinding1616 = !!onHoverAction || showIdleHoverIndicator,
    chartWidgetStoresBinding1617 =
      at ?? (chartWidgetStoresBinding1612 ? "number" : undefined),
    chartWidgetStoresBinding1618 =
      chartWidgetStoresBinding1612 && chartWidgetStoresBinding1617 === "number",
    chartWidgetStoresBinding1619 =
      chartWidgetStoresBinding1598 ??
      (chartWidgetStoresBinding1618 ? $G : undefined),
    chartWidgetStoresBinding1620 =
      chartWidgetStoresBinding1599 ??
      (chartWidgetStoresBinding1618 ? chartWidgetStoresBinding1331 : undefined),
    chartWidgetStoresBinding1621 =
      typeof valueLabelInterval == "number" &&
      Number.isFinite(valueLabelInterval)
        ? Math.max(1, Math.floor(valueLabelInterval))
        : 1,
    chartWidgetStoresBinding1622 =
      typeof valueLabelOffset == "number" && Number.isFinite(valueLabelOffset)
        ? Math.max(0, Math.floor(valueLabelOffset))
        : 0,
    chartWidgetStoresBinding1623 =
      typeof visiblePointCount == "number" && Number.isFinite(visiblePointCount)
        ? Math.max(1, Math.floor(visiblePointCount))
        : null,
    chartWidgetStoresBinding1624 = useMemo(() => {
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
    ]),
    chartWidgetStoresBinding1625 = useCallback(
      (param319) => {
        if (!param319) return null;
        let chartWidgetStoresBinding2804 =
            param319.activePayload?.[0],
          chartWidgetStoresBinding2805 = chartFn914(
            param319.chartX,
          ),
          chartWidgetStoresBinding2806 = chartFn914(
            param319.chartY,
          ),
          chartWidgetStoresBinding2807 =
            typeof param319.activeTooltipIndex == "number"
              ? param319.activeTooltipIndex
              : typeof param319.activeTooltipIndex == "string"
                ? chartFn914(
                    Number(param319.activeTooltipIndex),
                  )
                : null,
          chartWidgetStoresBinding2808 =
            param319.activeLabel == null
              ? -1
              : chartWidgetStoresBinding1587.findIndex((item) => {
                  let chartWidgetStoresBinding5645 =
                    item[chartWidgetStoresBinding1591];
                  return (
                    chartWidgetStoresBinding5645 != null &&
                    String(chartWidgetStoresBinding5645) ===
                      String(param319.activeLabel)
                  );
                }),
          chartWidgetStoresBinding2809 =
            chartWidgetStoresBinding2807 ??
            (chartWidgetStoresBinding2808 >= 0
              ? chartWidgetStoresBinding2808
              : null),
          chartWidgetStoresBinding2810 =
            chartFn918(chartWidgetStoresBinding2804?.payload) ??
            (chartWidgetStoresBinding2809 == null
              ? null
              : chartFn918(
                  chartWidgetStoresBinding1587[chartWidgetStoresBinding2809],
                )),
          chartWidgetStoresBinding2811 =
            chartFn914(chartWidgetStoresBinding2804?.value) ??
            (chartWidgetStoresBinding2810 &&
            chartWidgetStoresBinding1611 != null
              ? chartFn914(
                  chartWidgetStoresBinding2810[chartWidgetStoresBinding1611],
                )
              : null),
          chartWidgetStoresBinding2812 =
            chartFn919(chartWidgetStoresBinding2810) ??
            (chartWidgetStoresBinding2811 == null
              ? null
              : chartWidgetStoresBinding1556.formatNumber(
                  chartWidgetStoresBinding2811,
                ));
        return !chartWidgetStoresBinding2810 &&
          chartWidgetStoresBinding2809 == null &&
          chartWidgetStoresBinding2811 == null &&
          chartWidgetStoresBinding2812 == null
          ? null
          : {
              value: chartWidgetStoresBinding2811,
              formatted: chartWidgetStoresBinding2812,
              payload: chartWidgetStoresBinding2810,
              index: chartWidgetStoresBinding2809,
              chartX: chartWidgetStoresBinding2805,
              chartY: chartWidgetStoresBinding2806,
            };
      },
      [
        chartWidgetStoresBinding1587,
        chartWidgetStoresBinding1611,
        chartWidgetStoresBinding1591,
        chartWidgetStoresBinding1556,
      ],
    ),
    chartWidgetStoresBinding1626 = useCallback(
      (param448) => {
        let chartWidgetStoresBinding3015 = chartWidgetStoresBinding1557.current,
          chartWidgetStoresBinding3016 =
            chartWidgetStoresBinding3015 != null &&
            chartWidgetStoresBinding3015.index != null &&
            chartWidgetStoresBinding3015.index ===
              param448.index,
          chartWidgetStoresBinding3017 =
            chartWidgetStoresBinding3015 != null &&
            chartWidgetStoresBinding3015.payload !== undefined &&
            chartWidgetStoresBinding3015.payload !== null &&
            chartWidgetStoresBinding3015.payload ===
              param448.payload,
          chartWidgetStoresBinding3018 =
            chartWidgetStoresBinding3015 != null &&
            chartWidgetStoresBinding3015.chartX != null &&
            chartWidgetStoresBinding3015.chartY != null &&
            param448.chartX != null &&
            param448.chartY != null &&
            chartWidgetStoresBinding3015.chartX ===
              param448.chartX &&
            chartWidgetStoresBinding3015.chartY ===
              param448.chartY;
        if (
          (chartWidgetStoresBinding3015 != null &&
            chartWidgetStoresBinding3015.value ===
              param448.value &&
            chartWidgetStoresBinding3015.formatted ===
              param448.formatted &&
            (chartWidgetStoresBinding3016 ||
              chartWidgetStoresBinding3017 ||
              chartWidgetStoresBinding3018)) ||
          (chartFn928(chartWidgetStoresBinding3015) &&
            chartFn928(param448))
        )
          return;
        chartWidgetStoresBinding1557.current = param448;
        let { value, payload, formatted } = param448,
          chartWidgetStoresBinding3019 = be(onHoverAction, {
            scope: {
              hoverValue: value,
              hoverPayload: payload,
              hoverFormatted: formatted,
            },
          });
        onAction(chartWidgetStoresBinding3019);
      },
      [onHoverAction, onAction, be],
    ),
    chartWidgetStoresBinding1627 = chartWidgetStoresS(),
    chartWidgetStoresBinding1628 = useCallback(
      (param3130, param3131) => {
        try {
          return chartWidgetStoresBinding1627(param3130, {
            tooltip: param3131,
          });
        } catch {
          return null;
        }
      },
      [chartWidgetStoresBinding1627],
    ),
    chartWidgetStoresBinding1629 = useCallback(
      ({ value, payload, seriesConfig }) =>
        chartFn919(payload) ??
        chartFn917(
          chartWidgetStoresBinding1556,
          value,
          seriesConfig,
        ),
      [chartWidgetStoresBinding1556],
    ),
    chartWidgetStoresBinding1630 = useCallback(
      (param4168) =>
        param4168 == null
          ? true
          : !(
              chartWidgetStoresBinding1621 > 1 &&
              (param4168 - chartWidgetStoresBinding1622) %
                chartWidgetStoresBinding1621
            ),
      [chartWidgetStoresBinding1622, chartWidgetStoresBinding1621],
    ),
    chartWidgetStoresBinding1631 = useCallback(
      (param179) => {
        if (param179 != null) {
          let chartWidgetStoresBinding5907 =
            chartWidgetStoresBinding1603[String(param179)];
          if (chartWidgetStoresBinding5907 != null)
            return chartWidgetStoresBinding5907;
        }
        if (chartWidgetStoresBinding1604?.type === "currency") {
          if (
            typeof param179 != "number" ||
            !Number.isFinite(param179)
          )
            return "";
          let chartWidgetStoresBinding3381 =
              chartWidgetStoresBinding1604.decimals,
            chartWidgetStoresBinding3382 =
              typeof chartWidgetStoresBinding3381 == "number" &&
              Number.isFinite(chartWidgetStoresBinding3381)
                ? Math.max(0, Math.floor(chartWidgetStoresBinding3381))
                : +(chartWidgetStoresBinding1604.notation === "compact");
          try {
            return chartWidgetStoresBinding1556.formatNumber(
              param179,
              {
                style: "currency",
                currency: chartWidgetStoresBinding1604.currency || "USD",
                notation: chartWidgetStoresBinding1604.notation || "standard",
                compactDisplay: "short",
                minimumFractionDigits: 0,
                maximumFractionDigits: chartWidgetStoresBinding3382,
              },
            );
          } catch {
            return param179.toString();
          }
        }
        if (chartWidgetStoresBinding1604?.type !== "percent") {
          if (chartWidgetStoresBinding1605 != null) {
            let chartWidgetStoresBinding5895 = chartFn917(
              chartWidgetStoresBinding1556,
              param179,
              chartWidgetStoresBinding1605,
            );
            if (chartWidgetStoresBinding5895 != null)
              return chartWidgetStoresBinding5895;
          }
          return typeof param179 == "string"
            ? param179
            : typeof param179 == "number" &&
                Number.isFinite(param179)
              ? param179.toString()
              : "";
        }
        if (
          typeof param179 != "number" ||
          !Number.isFinite(param179)
        )
          return "";
        let chartWidgetStoresBinding2373 =
            chartWidgetStoresBinding1604.decimals,
          chartWidgetStoresBinding2374 =
            typeof chartWidgetStoresBinding2373 == "number" &&
            Number.isFinite(chartWidgetStoresBinding2373)
              ? Math.max(0, Math.floor(chartWidgetStoresBinding2373))
              : 0,
          chartWidgetStoresBinding2375 = param179.toFixed(
            chartWidgetStoresBinding2374,
          );
        return `${chartWidgetStoresBinding2375.includes(".") ? chartWidgetStoresBinding2375.replace(/(\.\d*?[1-9])0+$/, "$1").replace(/\.0+$/, "") : chartWidgetStoresBinding2375}%`;
      },
      [
        chartWidgetStoresBinding1556,
        chartWidgetStoresBinding1603,
        chartWidgetStoresBinding1604,
        chartWidgetStoresBinding1605,
      ],
    ),
    chartWidgetStoresBinding1632 = useCallback(
      (param3285) => {
        if ($e || param3285 == null) return "";
        let chartWidgetStoresBinding5754 = String(param3285);
        return (
          chartWidgetStoresBinding1592[chartWidgetStoresBinding5754] ??
          chartWidgetStoresBinding5754
        );
      },
      [$e, chartWidgetStoresBinding1592],
    ),
    chartWidgetStoresBinding1633 = useCallback(
      (param3105) => {
        if ($e || param3105 == null) return "";
        let chartWidgetStoresBinding5671 = String(param3105);
        return (
          chartWidgetStoresBinding1592[chartWidgetStoresBinding5671] ??
          chartFn917(
            chartWidgetStoresBinding1556,
            param3105,
            chartWidgetStoresBinding1620,
          ) ??
          chartWidgetStoresBinding5671
        );
      },
      [
        $e,
        chartWidgetStoresBinding1556,
        chartWidgetStoresBinding1620,
        chartWidgetStoresBinding1592,
      ],
    ),
    chartWidgetStoresBinding1634 = useMemo(() => {
      if (
        !chartWidgetStoresBinding1555 ||
        chartWidgetStoresBinding1613 <= 1 ||
        $e ||
        chartWidgetStoresBinding1600 != null
      )
        return;
      let chartWidgetStoresBinding4039 =
          chartWidgetStoresBinding1593 != null &&
          chartWidgetStoresBinding1593.length > 0
            ? chartWidgetStoresBinding1593
            : chartWidgetStoresBinding1587.map(
                (item) => item[chartWidgetStoresBinding1591],
              ),
        chartWidgetStoresBinding4040 = new Set(),
        chartWidgetStoresBinding4041 = 0;
      return (
        chartWidgetStoresBinding4039.forEach((item) => {
          if (item == null) return;
          let chartWidgetStoresBinding5386 = String(item);
          if (chartWidgetStoresBinding4040.has(chartWidgetStoresBinding5386))
            return;
          chartWidgetStoresBinding4040.add(chartWidgetStoresBinding5386);
          let chartWidgetStoresBinding5387 = chartWidgetStoresBinding1632(item);
          chartWidgetStoresBinding5387.length > chartWidgetStoresBinding4041 &&
            (chartWidgetStoresBinding4041 =
              chartWidgetStoresBinding5387.length);
        }),
        chartFn921(
          chartWidgetStoresBinding4041,
          chartWidgetStoresBinding1596 ?? 5,
        )
      );
    }, [
      chartWidgetStoresBinding1613,
      chartWidgetStoresBinding1587,
      chartWidgetStoresBinding1632,
      $e,
      chartWidgetStoresBinding1555,
      chartWidgetStoresBinding1591,
      chartWidgetStoresBinding1596,
      chartWidgetStoresBinding1593,
      chartWidgetStoresBinding1600,
    ]),
    chartWidgetStoresBinding1635 =
      !chartWidgetStoresBinding1555 &&
      showYAxis &&
      chartWidgetStoresBinding1609 == null;
  useLayoutEffect(() => {
    if (!chartWidgetStoresBinding1635) {
      chartWidgetStoresBinding1574((param4512) =>
        param4512 == null ? param4512 : null,
      );
      return;
    }
    let chartWidgetStoresBinding5446 = chartFn926(
      chartWidgetStoresBinding1558.current,
      chartWidgetStoresBinding1610,
    );
    chartWidgetStoresBinding5446 != null &&
      chartWidgetStoresBinding1574((param4449) =>
        param4449 != null &&
        param4449 >= chartWidgetStoresBinding5446
          ? param4449
          : chartWidgetStoresBinding5446,
      );
  }, [
    chartWidgetStoresBinding1587,
    chartWidgetStoresBinding1576,
    chartWidgetStoresBinding1631,
    chartWidgetStoresBinding1610,
    chartWidgetStoresBinding1635,
    chartWidgetStoresBinding1602,
  ]);
  let chartWidgetStoresBinding1636 =
      useCallback(() => {
        chartWidgetStoresBinding1635 &&
          chartWidgetStoresBinding1574(
            (param4456) =>
              param4456 ??
              chartFn926(
                chartWidgetStoresBinding1558.current,
                chartWidgetStoresBinding1610,
              ) ??
              param4456,
          );
      }, [chartWidgetStoresBinding1610, chartWidgetStoresBinding1635]),
    chartWidgetStoresBinding1637 = useCallback(
      (param745, param746) => {
        let chartWidgetStoresBinding3564 =
            typeof param746.cx == "number"
              ? param746.cx
              : 0,
          chartWidgetStoresBinding3565 =
            typeof param746.cy == "number"
              ? param746.cy
              : 0;
        return !showDots ||
          param746.cx == null ||
          param746.cy == null ||
          !chartWidgetStoresBinding1630(param746.index) ? (
          <circle
            cx={chartWidgetStoresBinding3564}
            cy={chartWidgetStoresBinding3565}
            r={0}
            fill="none"
            stroke="none"
          />
        ) : (
          <circle
            cx={chartWidgetStoresBinding3564}
            cy={chartWidgetStoresBinding3565}
            r={4}
            fill={
              chartWidgetStoresBinding1589[param745] ??
              "var(--chart-color-0)"
            }
            stroke="var(--color-surface)"
            strokeWidth={2}
          />
        );
      },
      [chartWidgetStoresBinding1589, chartWidgetStoresBinding1630, showDots],
    ),
    chartWidgetStoresBinding1638 = useCallback(
      (param1009, param1010) => {
        let chartWidgetStoresBinding3921 =
            typeof param1010.cx == "number"
              ? param1010.cx
              : 0,
          chartWidgetStoresBinding3922 =
            typeof param1010.cy == "number"
              ? param1010.cy
              : 0;
        return (showIdleHoverIndicator && !chartWidgetStoresBinding1563) ||
          !chartFn927(
            param1010.payload,
            chartWidgetStoresBinding1586,
          ) ? (
          <circle
            cx={chartWidgetStoresBinding3921}
            cy={chartWidgetStoresBinding3922}
            r={0}
            fill="none"
            stroke="none"
          />
        ) : (
          createElement(chartFn930, {
            color:
              chartWidgetStoresBinding1589[param1009] ??
              "var(--chart-color-0)",
            root: chartWidgetStoresBinding1558,
            ...param1010,
          })
        );
      },
      [
        chartWidgetStoresBinding1589,
        chartWidgetStoresBinding1586,
        chartWidgetStoresBinding1563,
        showIdleHoverIndicator,
      ],
    ),
    chartWidgetStoresBinding1639 = useCallback(
      (param1357) => {
        let chartWidgetStoresBinding4302 = chartWidgetStoresBinding1625(
          param1357,
        );
        if (chartWidgetStoresBinding1614) {
          let chartWidgetStoresBinding5601 =
            chartWidgetStoresBinding4302?.index ?? null;
          startTransition(() => {
            chartWidgetStoresBinding1572((param4580) =>
              param4580 === chartWidgetStoresBinding5601
                ? param4580
                : chartWidgetStoresBinding5601,
            );
          });
        }
        if (showIdleHoverIndicator) {
          let chartWidgetStoresBinding5732 =
            chartWidgetStoresBinding4302 != null &&
            chartFn927(
              chartWidgetStoresBinding4302.payload,
              chartWidgetStoresBinding1586,
            );
          chartWidgetStoresBinding1564((param4581) =>
            param4581 === chartWidgetStoresBinding5732
              ? param4581
              : chartWidgetStoresBinding5732,
          );
          chartWidgetStoresBinding5732 && chartWidgetStoresBinding1566(true);
        }
        onHoverAction &&
          chartWidgetStoresBinding4302 &&
          chartWidgetStoresBinding1626(chartWidgetStoresBinding4302);
      },
      [
        chartWidgetStoresBinding1586,
        showIdleHoverIndicator,
        chartWidgetStoresBinding1614,
        onHoverAction,
        chartWidgetStoresBinding1625,
        chartWidgetStoresBinding1626,
      ],
    ),
    chartWidgetStoresBinding1640 =
      useCallback(() => {
        showIdleHoverIndicator && chartWidgetStoresBinding1564(false);
        chartWidgetStoresBinding1614 &&
          startTransition(() => {
            chartWidgetStoresBinding1572(null);
          });
        onHoverAction &&
          chartWidgetStoresBinding1626({
            value: null,
            formatted: null,
            payload: null,
            index: null,
            chartX: null,
            chartY: null,
          });
      }, [
        onHoverAction,
        chartWidgetStoresBinding1626,
        chartWidgetStoresBinding1614,
        showIdleHoverIndicator,
      ]),
    chartWidgetStoresBinding1641 =
      useCallback(() => {
        (showIdleHoverIndicator && !chartWidgetStoresBinding1614) ||
          chartWidgetStoresBinding1640();
      }, [
        chartWidgetStoresBinding1640,
        chartWidgetStoresBinding1614,
        showIdleHoverIndicator,
      ]),
    chartWidgetStoresBinding1642 = useCallback(
      (param1377) => {
        enableLegendSeriesToggle &&
          (chartWidgetStoresBinding1636(),
          chartWidgetStoresBinding1568((param1892) => {
            let chartWidgetStoresBinding4885 = new Set();
            return (
              param1892.forEach((item) => {
                chartWidgetStoresBinding1581.has(item) &&
                  chartWidgetStoresBinding4885.add(item);
              }),
              chartWidgetStoresBinding4885.has(param1377)
                ? chartWidgetStoresBinding4885.delete(
                    param1377,
                  )
                : chartWidgetStoresBinding4885.add(param1377),
              chartWidgetStoresBinding4885.size === 0 ||
              chartWidgetStoresBinding4885.size >=
                chartWidgetStoresBinding1581.size
                ? new Set()
                : chartWidgetStoresBinding4885
            );
          }));
      },
      [
        chartWidgetStoresBinding1581,
        enableLegendSeriesToggle,
        chartWidgetStoresBinding1636,
      ],
    ),
    chartWidgetStoresBinding1643 = useCallback(
      (param3757) => {
        startTransition(() => {
          chartWidgetStoresBinding1570(param3757);
        });
      },
      [],
    ),
    $t = useCallback(() => {
      startTransition(() => {
        chartWidgetStoresBinding1570(null);
      });
    }, []);
  useLayoutEffect(() => {
    if (!scrollable || !chartWidgetStoresBinding1559.current) {
      chartWidgetStoresBinding1562(null);
      return;
    }
    let chartWidgetStoresBinding4249 = chartWidgetStoresBinding1559.current,
      chartWidgetStoresBinding4250 = () => {
        let chartWidgetStoresBinding5896 =
          chartWidgetStoresBinding4249.offsetWidth;
        chartWidgetStoresBinding1562((param4582) =>
          param4582 === chartWidgetStoresBinding5896
            ? param4582
            : chartWidgetStoresBinding5896,
        );
      };
    if ((chartWidgetStoresBinding4250(), typeof ResizeObserver > "u")) return;
    let chartWidgetStoresBinding4251 = new ResizeObserver(
      chartWidgetStoresBinding4250,
    );
    return (
      chartWidgetStoresBinding4251.observe(chartWidgetStoresBinding4249),
      () => {
        chartWidgetStoresBinding4251.disconnect();
      }
    );
  }, [scrollable]);
  let chartWidgetStoresBinding1644 = useMemo(
      () =>
        !scrollable || !chartWidgetStoresBinding1587.length
          ? null
          : chartWidgetStoresBinding1623 && chartWidgetStoresBinding1561
            ? chartWidgetStoresBinding1561 / chartWidgetStoresBinding1623
            : typeof minPointWidth == "number" &&
                Number.isFinite(minPointWidth) &&
                minPointWidth > 0
              ? minPointWidth
              : null,
      [
        chartWidgetStoresBinding1587.length,
        minPointWidth,
        scrollable,
        chartWidgetStoresBinding1561,
        chartWidgetStoresBinding1623,
      ],
    ),
    chartWidgetStoresBinding1645 = useMemo(() => {
      if (chartWidgetStoresBinding1644)
        return chartWidgetStoresBinding1617 === "number" &&
          chartWidgetStoresBinding1587.length > 1
          ? (chartWidgetStoresBinding1587.length - 1) *
              chartWidgetStoresBinding1644
          : chartWidgetStoresBinding1587.length * chartWidgetStoresBinding1644;
    }, [
      chartWidgetStoresBinding1587.length,
      chartWidgetStoresBinding1644,
      chartWidgetStoresBinding1617,
    ]),
    chartWidgetStoresBinding1646 = useMemo(() => {
      if (scrollable)
        return {
          left: 0,
          right: 0,
          top: showValueLabels ? 20 : 10,
          bottom: 0,
        };
    }, [scrollable, showValueLabels]),
    chartWidgetStoresBinding1647 =
      chartWidgetStoresBinding1597 ??
      (chartWidgetStoresBinding1555 || chartWidgetStoresBinding1617 === "number"
        ? {
            left: 0,
            right: 0,
          }
        : $e
          ? "no-gap"
          : "gap"),
    chartWidgetStoresBinding1648 =
      !chartWidgetStoresBinding1560.current &&
      !streaming &&
      !scrollable &&
      !disableAnimation &&
      !(showIdleHoverIndicator && chartWidgetStoresBinding1565),
    on = useCallback(
      (param334) => {
        let {
            offset,
            key,
            vertical,
            horizontal,
            horizontalPoints,
            verticalPoints,
            verticalFill,
            horizontalFill,
            xAxis: _xAxis,
            yAxis: _yAxis,
            ...rest
          } = param334,
          { y1, y2 } = rest,
          chartWidgetStoresBinding2876 = (param2059) => {
            if (
              typeof param2059 == "number" &&
              Number.isFinite(param2059)
            )
              return param2059;
            if (typeof param2059 == "string") {
              let chartWidgetStoresBinding5792 = Number(
                param2059,
              );
              return Number.isFinite(chartWidgetStoresBinding5792)
                ? chartWidgetStoresBinding5792
                : null;
            }
            return null;
          },
          chartWidgetStoresBinding2877 =
            chartWidgetStoresBinding2876(y1) ??
            chartWidgetStoresBinding2876(y2),
          chartWidgetStoresBinding2878 = offset
            ? offset.top + offset.height
            : null;
        return chartWidgetStoresBinding2877 != null &&
          typeof chartWidgetStoresBinding2878 == "number" &&
          Number.isFinite(chartWidgetStoresBinding2878) &&
          Math.abs(
            chartWidgetStoresBinding2877 - chartWidgetStoresBinding2878,
          ) < 0.5 &&
          !$e &&
          (chartWidgetStoresBinding1595 ?? true) ? (
          <line
            key={key}
            {...rest}
            style={{
              ...rest.style,
              display: "none",
            }}
          />
        ) : (
          <line key={key} {...rest} />
        );
      },
      [$e, chartWidgetStoresBinding1595],
    ),
    chartWidgetStoresBinding1649 = useRef(null),
    chartWidgetStoresBinding1650 = useRef(false);
  return (
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
    ]),
    createElement(chartWidgetStoresD, {
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
                        tickMargin: $e
                          ? 0
                          : (chartWidgetStoresBinding1596 ?? 5),
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
                        tickMargin: $e
                          ? 0
                          : (chartWidgetStoresBinding1596 ?? 5),
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
                              hoverIndicatorDataKey:
                                chartWidgetStoresBinding1586,
                              isHoverActive: showIdleHoverIndicator
                                ? chartWidgetStoresBinding1563
                                : true,
                            })
                          : true
                        : showTooltipCursor
                          ? undefined
                          : false,
                      content: showTooltip
                        ? (param872) =>
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
                              ...param872,
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
                      content: (param920) =>
                        createElement(chartFn932, {
                          colors: chartWidgetStoresBinding1589,
                          dataSeries: chartWidgetStoresBinding1576,
                          enableSeriesToggle: enableLegendSeriesToggle,
                          hasActiveSeriesSelection:
                            chartWidgetStoresBinding1583,
                          maxRows: chartWidgetStoresBinding1580,
                          onSeriesHoverEnd: $t,
                          onSeriesHoverStart: chartWidgetStoresBinding1643,
                          onSeriesToggle: chartWidgetStoresBinding1642,
                          selectedSeriesKeys: chartWidgetStoresBinding1582,
                          ...param920,
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
                              content: (param113) => {
                                let chartWidgetStoresBinding2114 =
                                    param113,
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
                              ? (param4605) =>
                                  chartWidgetStoresBinding1637(
                                    item.dataKey,
                                    param4605,
                                  )
                              : false,
                            isAnimationActive: chartWidgetStoresBinding1648,
                            hide: chartWidgetStoresBinding1674,
                            opacity: chartWidgetStoresBinding1675,
                            onClick: enableLegendSeriesToggle
                              ? () => chartWidgetStoresBinding1642(item.dataKey)
                              : undefined,
                            activeDot: showHoverDots
                              ? (param4606) =>
                                  chartWidgetStoresBinding1638(
                                    item.dataKey,
                                    param4606,
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
                              ? (param4607) =>
                                  chartWidgetStoresBinding1637(
                                    item.dataKey,
                                    param4607,
                                  )
                              : false,
                            isAnimationActive: chartWidgetStoresBinding1648,
                            activeDot: showHoverDots
                              ? (param4608) =>
                                  chartWidgetStoresBinding1638(
                                    item.dataKey,
                                    param4608,
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
                              ? chartWidgetStoresBinding1587.map(
                                  (_item, index) =>
                                    createElement(
                                      Cell,
                                      {
                                        style: {
                                          opacity:
                                            chartWidgetStoresBinding2189 &&
                                            index !==
                                              chartWidgetStoresBinding1571
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
                          shape: (param3642) =>
                            createElement(chartFn930, {
                              color: item.color,
                              root: chartWidgetStoresBinding1558,
                              ...param3642,
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
    })
  );
}
function chartFn929({
  className,
  hoverIndicatorDataKey,
  isHoverActive = true,
  payload,
  points,
  stroke = "var(--alpha-10)",
  strokeWidth = 1,
}) {
  if (
    !isHoverActive ||
    !chartFn927(
      Array.isArray(payload) && payload.length > 0
        ? chartFn918(payload[0])?.payload
        : null,
      hoverIndicatorDataKey,
    )
  )
    return null;
  let [chartWidgetStoresBinding3466, chartWidgetStoresBinding3467] =
    points ?? [];
  return typeof chartWidgetStoresBinding3466?.x != "number" ||
    typeof chartWidgetStoresBinding3466?.y != "number" ||
    typeof chartWidgetStoresBinding3467?.x != "number" ||
    typeof chartWidgetStoresBinding3467?.y != "number" ? null : (
    <path
      className={className}
      d={`M ${chartWidgetStoresBinding3466.x},${chartWidgetStoresBinding3466.y} L ${chartWidgetStoresBinding3467.x},${chartWidgetStoresBinding3467.y}`}
      fill="none"
      pointerEvents="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  );
}
function chartFn930({ cx, cy, color, root }) {
  return (
    useLayoutEffect(() => {
      if (!root.current || cx == null || cy == null) return;
      let chartWidgetStoresBinding3442 = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "g",
        ),
        chartWidgetStoresBinding3443 = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle",
        );
      return (
        chartWidgetStoresBinding3443.setAttribute("cx", String(cx)),
        chartWidgetStoresBinding3443.setAttribute("cy", String(cy)),
        chartWidgetStoresBinding3443.setAttribute("r", "4"),
        chartWidgetStoresBinding3443.setAttribute(
          "fill",
          color || "var(--chart-color-0)",
        ),
        chartWidgetStoresBinding3443.setAttribute(
          "stroke",
          "var(--color-surface)",
        ),
        chartWidgetStoresBinding3443.setAttribute("stroke-width", "2"),
        chartWidgetStoresBinding3442.appendChild(chartWidgetStoresBinding3443),
        root.current.appendChild(chartWidgetStoresBinding3442),
        () => {
          chartWidgetStoresBinding3442.remove();
        }
      );
    }),
    null
  );
}
function chartFn931({
  active,
  payload,
  label,
  showLabel,
  showMarkers,
  maxEntries,
  dataSeries,
  colors,
  valueFormatter,
  evaluateTooltipExpression,
  xAxisKey,
  xAxisLabels,
}) {
  let chartWidgetStoresBinding1710 = chartWidgetStoresU();
  if (!active || !payload?.length) return null;
  let chartWidgetStoresBinding1711 = (param3264) => {
    let chartWidgetStoresBinding5752 = chartFn918(
      param3264,
    )?.[xAxisKey];
    if (chartWidgetStoresBinding5752 != null) {
      let chartWidgetStoresBinding5954 = String(chartWidgetStoresBinding5752);
      return (
        xAxisLabels[chartWidgetStoresBinding5954] ??
        chartWidgetStoresBinding5954
      );
    }
  };
  if (valueFormatter?.type === "xAxisOnly") {
    let chartWidgetStoresBinding4912 = payload[0],
      chartWidgetStoresBinding4913 =
        chartWidgetStoresBinding1711(chartWidgetStoresBinding4912?.payload) ??
        (label == null ? "" : String(label));
    return (
      <div className={chartWidgetStoresBinding1327.ChartTooltip}>
        <div className="text-foreground font-medium tabular-nums">
          {chartWidgetStoresBinding4913}
        </div>
      </div>
    );
  }
  let chartWidgetStoresBinding1712 = chartWidgetStoresBinding1711(
      payload[0]?.payload,
    ),
    chartWidgetStoresBinding1713 =
      label == null ? chartWidgetStoresBinding1712 : String(label),
    chartWidgetStoresBinding1714 =
      dataSeries.length == 1 && showLabel && !dataSeries[0].label,
    chartWidgetStoresBinding1715 =
      typeof maxEntries == "number" &&
      Number.isFinite(maxEntries) &&
      maxEntries > 0
        ? payload.slice(0, Math.floor(maxEntries))
        : payload,
    chartWidgetStoresBinding1716 =
      payload.length - chartWidgetStoresBinding1715.length;
  return (
    <div className={chartWidgetStoresBinding1327.ChartTooltip}>
      {showLabel &&
        !chartWidgetStoresBinding1714 &&
        chartWidgetStoresBinding1713 != null && (
          <div className="text-foreground text-xs font-semibold">
            {chartWidgetStoresBinding1713}
          </div>
        )}
      <div className="grid gap-1.5">
        {chartWidgetStoresBinding1715.map((item) => {
          let chartWidgetStoresBinding2007 = chartFn918(
              item.payload,
            ),
            chartWidgetStoresBinding2008 = dataSeries.find(
              (_item) =>
                _item.dataKey === item.dataKey || _item.dataKey === item.name,
            ),
            chartWidgetStoresBinding2009 = chartWidgetStoresBinding1714
              ? chartWidgetStoresBinding1713
              : chartWidgetStoresBinding2008?.label;
          !chartWidgetStoresBinding2009 &&
            dataSeries.some((_item) => _item.label) &&
            (chartWidgetStoresBinding2009 = String(item.name));
          let chartWidgetStoresBinding2010 = chartFn919(
              item.payload,
            ),
            chartWidgetStoresBinding2011 = chartWidgetStoresBinding1711(
              chartWidgetStoresBinding2007,
            ),
            chartWidgetStoresBinding2012 = {
              value: item.value,
              dataKey: item.dataKey,
              name: item.name,
              payload: item.payload,
              color: item.color,
              seriesLabel: chartWidgetStoresBinding2009,
              xAxisLabel: chartWidgetStoresBinding2011,
            },
            chartWidgetStoresBinding2013 =
              valueFormatter?.type === "expression" && evaluateTooltipExpression
                ? evaluateTooltipExpression(
                    valueFormatter.expression,
                    chartWidgetStoresBinding2012,
                  )
                : valueFormatter?.type === "xAxisLabel"
                  ? (chartWidgetStoresBinding2011 ?? null)
                  : null,
            chartWidgetStoresBinding2014 =
              chartWidgetStoresBinding2010 ??
              chartWidgetStoresBinding2013 ??
              chartFn917(
                chartWidgetStoresBinding1710,
                item.value,
                chartWidgetStoresBinding2008,
              ) ??
              "";
          return (
            <div
              key={item.dataKey}
              className="width-full flex flex-wrap items-center gap-1.5"
            >
              {(showMarkers || dataSeries.length > 1) && (
                <div
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{
                    background:
                      typeof chartWidgetStoresBinding2007?.fill == "string"
                        ? chartWidgetStoresBinding2007.fill
                        : colors[String(item.dataKey)],
                  }}
                />
              )}
              <div
                className={chartWidgetStoresV(
                  "flex flex-1 items-center justify-between gap-3",
                )}
              >
                {chartWidgetStoresBinding2009 && (
                  <span className="text-muted-foreground">
                    {chartWidgetStoresBinding2009}
                  </span>
                )}
                <span className="text-foreground font-medium tabular-nums">
                  {chartWidgetStoresBinding2014}
                </span>
              </div>
            </div>
          );
        })}
        {chartWidgetStoresBinding1716 > 0 && (
          <div className="text-muted-foreground">
            {createElement(FormattedMessage, {
              defaultMessage: "+{count, number} more",
              description:
                "In a chart tooltip, last row that shows the number of additional hidden series not displayed. Keep the leading '+' before the number.",
              id: "chart.tooltip.moreEntries",
              values: {
                count: chartWidgetStoresBinding1716,
              },
            })}
          </div>
        )}
      </div>
    </div>
  );
}
function chartFn932({
  className,
  payload,
  colors,
  dataSeries,
  enableSeriesToggle,
  hasActiveSeriesSelection,
  maxRows,
  onSeriesHoverEnd,
  onSeriesHoverStart,
  onSeriesToggle,
  selectedSeriesKeys,
}) {
  if (!payload?.length) return null;
  let chartWidgetStoresBinding1816 = maxRows != null && maxRows > 1,
    chartWidgetStoresBinding1817 =
      maxRows == null
        ? undefined
        : {
            maxHeight: chartFn920(maxRows),
          },
    chartWidgetStoresBinding1818 = (event) => {
      event.pointerType === "touch" && onSeriesHoverEnd();
    },
    chartWidgetStoresBinding1819 = (event) => {
      event.pointerType !== "touch" && onSeriesHoverEnd();
    },
    chartWidgetStoresBinding1820 = (param3804, event) => {
      event.currentTarget.matches(":focus-visible") &&
        onSeriesHoverStart(param3804);
    },
    chartWidgetStoresBinding1821 = (param4081, event) => {
      event.pointerType !== "touch" &&
        onSeriesHoverStart(param4081);
    };
  return (
    <div
      className={chartWidgetStoresV(
        "flex items-center justify-center pt-3",
        chartWidgetStoresBinding1816 ? "flex-wrap gap-x-4 gap-y-1.5" : "gap-4",
        maxRows != null && "overflow-hidden",
        className,
      )}
      onPointerDown={chartWidgetStoresBinding1818}
      onPointerLeave={chartWidgetStoresBinding1819}
      style={chartWidgetStoresBinding1817}
    >
      {payload
        .toSorted((param2108, param2109) => {
          let chartWidgetStoresBinding5067 = String(
              param2108.dataKey ??
                param2108.value ??
                "",
            ),
            chartWidgetStoresBinding5068 = String(
              param2109.dataKey ??
                param2109.value ??
                "",
            );
          return (
            dataSeries.findIndex(
              (item) => item.dataKey === chartWidgetStoresBinding5067,
            ) -
            dataSeries.findIndex(
              (item) => item.dataKey === chartWidgetStoresBinding5068,
            )
          );
        })
        .map((item) => {
          let chartWidgetStoresBinding2107 = String(
              item.dataKey ?? item.value ?? "",
            ),
            chartWidgetStoresBinding2108 = dataSeries.find(
              (_item) => _item.dataKey === chartWidgetStoresBinding2107,
            )?.label;
          if (
            chartWidgetStoresBinding2108 == null ||
            chartWidgetStoresBinding2108 === ""
          )
            return null;
          let chartWidgetStoresBinding2109 =
              hasActiveSeriesSelection &&
              selectedSeriesKeys.has(chartWidgetStoresBinding2107),
            chartWidgetStoresBinding2110 =
              hasActiveSeriesSelection && !chartWidgetStoresBinding2109,
            chartWidgetStoresBinding2111 = (
              <>
                <div
                  className={chartWidgetStoresBinding1327.LegendItemMarker}
                  style={{
                    backgroundColor: colors[chartWidgetStoresBinding2107],
                  }}
                />
                <span className={chartWidgetStoresBinding1327.LegendItemLabel}>
                  {chartWidgetStoresBinding2108}
                </span>
                {chartWidgetStoresBinding2109 && (
                  <svg
                    aria-hidden="true"
                    className={chartWidgetStoresBinding1327.LegendSelectedIcon}
                    fill="none"
                    viewBox="0 0 12 12"
                  >
                    <path
                      d="M3 3l6 6M9 3 3 9"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                )}
              </>
            );
          return enableSeriesToggle ? (
            <button
              key={chartWidgetStoresBinding2107}
              aria-pressed={chartWidgetStoresBinding2109}
              className={chartWidgetStoresV(
                chartWidgetStoresBinding1327.LegendItem,
                chartWidgetStoresBinding1327.LegendToggle,
              )}
              data-w-hidden={chartWidgetStoresBinding2110 ? "" : undefined}
              data-w-selected={chartWidgetStoresBinding2109 ? "" : undefined}
              onBlur={onSeriesHoverEnd}
              onClick={() => onSeriesToggle(chartWidgetStoresBinding2107)}
              onFocus={(param4793) =>
                chartWidgetStoresBinding1820(
                  chartWidgetStoresBinding2107,
                  param4793,
                )
              }
              onPointerEnter={(param4794) =>
                chartWidgetStoresBinding1821(
                  chartWidgetStoresBinding2107,
                  param4794,
                )
              }
              type="button"
            >
              {chartWidgetStoresBinding2111}
            </button>
          ) : (
            <div
              key={chartWidgetStoresBinding2107}
              className={chartWidgetStoresBinding1327.LegendItem}
              data-w-hidden={chartWidgetStoresBinding2110 ? "" : undefined}
              data-w-selected={chartWidgetStoresBinding2109 ? "" : undefined}
              onPointerEnter={(param4795) =>
                chartWidgetStoresBinding1821(
                  chartWidgetStoresBinding2107,
                  param4795,
                )
              }
            >
              {chartWidgetStoresBinding2111}
            </div>
          );
        })}
    </div>
  );
}
function chartFn933(param3758) {
  return param3758
    ? chartWidgetStoresBinding1342[
        (chartWidgetStoresBinding1342.indexOf(param3758) + 1) %
          chartWidgetStoresBinding1342.length
      ]
    : chartWidgetStoresBinding1342[0];
}


/**
 * Codex Chart — series / legend / tooltip chrome over public recharts + react-intl.
 * Bundle export `_chartWidgetStoresS` (IMPORT_MAP alias C).
 */
export function Chart(props: unknown): ReactNode {
  return CodexChartBody(props);
}

/** Bundle `_chartWidgetStoresS` compat alias. */
export { Chart as _chartWidgetStoresS };

/** ESM ensure-init — no surface bag required after wave-8 npm migrate. */
export function ensureChartComponentInit(): void {}
