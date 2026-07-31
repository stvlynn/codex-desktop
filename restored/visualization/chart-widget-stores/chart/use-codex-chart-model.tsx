// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Codex Chart — promoted from Flat boundaries/chart-widget-stores/chart-component (wave-11).
// Codex Chart interaction handlers + residual memos.

import {
  createElement,
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

import {
  useCodexChartSetup,
  type CodexChartSetup,
} from "./use-codex-chart-setup";
import { useCodexChartGridLineRenderer } from "./use-codex-chart-grid-line";

export type CodexChartModel = Record<string, any>;

export function useCodexChartModel(chartSlot4: unknown): CodexChartModel {
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
  } = useCodexChartSetup(chartSlot4);
  const chartWidgetStoresBinding1625 = useCallback(
    (chartSlot319) => {
      if (!chartSlot319) return null;
      let chartWidgetStoresBinding2804 = chartSlot319.activePayload?.[0],
        chartWidgetStoresBinding2805 = chartFn914(chartSlot319.chartX),
        chartWidgetStoresBinding2806 = chartFn914(chartSlot319.chartY),
        chartWidgetStoresBinding2807 =
          typeof chartSlot319.activeTooltipIndex == "number"
            ? chartSlot319.activeTooltipIndex
            : typeof chartSlot319.activeTooltipIndex == "string"
              ? chartFn914(Number(chartSlot319.activeTooltipIndex))
              : null,
        chartWidgetStoresBinding2808 =
          chartSlot319.activeLabel == null
            ? -1
            : chartWidgetStoresBinding1587.findIndex((item) => {
                let chartWidgetStoresBinding5645 =
                  item[chartWidgetStoresBinding1591];
                return (
                  chartWidgetStoresBinding5645 != null &&
                  String(chartWidgetStoresBinding5645) ===
                    String(chartSlot319.activeLabel)
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
          (chartWidgetStoresBinding2810 && chartWidgetStoresBinding1611 != null
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
  );
  const chartWidgetStoresBinding1626 = useCallback(
    (chartSlot448) => {
      let chartWidgetStoresBinding3015 = chartWidgetStoresBinding1557.current,
        chartWidgetStoresBinding3016 =
          chartWidgetStoresBinding3015 != null &&
          chartWidgetStoresBinding3015.index != null &&
          chartWidgetStoresBinding3015.index === chartSlot448.index,
        chartWidgetStoresBinding3017 =
          chartWidgetStoresBinding3015 != null &&
          chartWidgetStoresBinding3015.payload !== undefined &&
          chartWidgetStoresBinding3015.payload !== null &&
          chartWidgetStoresBinding3015.payload === chartSlot448.payload,
        chartWidgetStoresBinding3018 =
          chartWidgetStoresBinding3015 != null &&
          chartWidgetStoresBinding3015.chartX != null &&
          chartWidgetStoresBinding3015.chartY != null &&
          chartSlot448.chartX != null &&
          chartSlot448.chartY != null &&
          chartWidgetStoresBinding3015.chartX === chartSlot448.chartX &&
          chartWidgetStoresBinding3015.chartY === chartSlot448.chartY;
      if (
        (chartWidgetStoresBinding3015 != null &&
          chartWidgetStoresBinding3015.value === chartSlot448.value &&
          chartWidgetStoresBinding3015.formatted === chartSlot448.formatted &&
          (chartWidgetStoresBinding3016 ||
            chartWidgetStoresBinding3017 ||
            chartWidgetStoresBinding3018)) ||
        (chartFn928(chartWidgetStoresBinding3015) && chartFn928(chartSlot448))
      )
        return;
      chartWidgetStoresBinding1557.current = chartSlot448;
      let { value, payload, formatted } = chartSlot448,
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
  );
  const chartWidgetStoresBinding1627 = chartWidgetStoresS();
  const chartWidgetStoresBinding1628 = useCallback(
    (chartSlot3130, chartSlot3131) => {
      try {
        return chartWidgetStoresBinding1627(chartSlot3130, {
          tooltip: chartSlot3131,
        });
      } catch {
        return null;
      }
    },
    [chartWidgetStoresBinding1627],
  );
  const chartWidgetStoresBinding1629 = useCallback(
    ({ value, payload, seriesConfig }) =>
      chartFn919(payload) ??
      chartFn917(chartWidgetStoresBinding1556, value, seriesConfig),
    [chartWidgetStoresBinding1556],
  );
  const chartWidgetStoresBinding1630 = useCallback(
    (chartSlot4168) =>
      chartSlot4168 == null
        ? true
        : !(
            chartWidgetStoresBinding1621 > 1 &&
            (chartSlot4168 - chartWidgetStoresBinding1622) %
              chartWidgetStoresBinding1621
          ),
    [chartWidgetStoresBinding1622, chartWidgetStoresBinding1621],
  );
  const chartWidgetStoresBinding1631 = useCallback(
    (chartSlot179) => {
      if (chartSlot179 != null) {
        let chartWidgetStoresBinding5907 =
          chartWidgetStoresBinding1603[String(chartSlot179)];
        if (chartWidgetStoresBinding5907 != null)
          return chartWidgetStoresBinding5907;
      }
      if (chartWidgetStoresBinding1604?.type === "currency") {
        if (typeof chartSlot179 != "number" || !Number.isFinite(chartSlot179))
          return "";
        let chartWidgetStoresBinding3381 =
            chartWidgetStoresBinding1604.decimals,
          chartWidgetStoresBinding3382 =
            typeof chartWidgetStoresBinding3381 == "number" &&
            Number.isFinite(chartWidgetStoresBinding3381)
              ? Math.max(0, Math.floor(chartWidgetStoresBinding3381))
              : +(chartWidgetStoresBinding1604.notation === "compact");
        try {
          return chartWidgetStoresBinding1556.formatNumber(chartSlot179, {
            style: "currency",
            currency: chartWidgetStoresBinding1604.currency || "USD",
            notation: chartWidgetStoresBinding1604.notation || "standard",
            compactDisplay: "short",
            minimumFractionDigits: 0,
            maximumFractionDigits: chartWidgetStoresBinding3382,
          });
        } catch {
          return chartSlot179.toString();
        }
      }
      if (chartWidgetStoresBinding1604?.type !== "percent") {
        if (chartWidgetStoresBinding1605 != null) {
          let chartWidgetStoresBinding5895 = chartFn917(
            chartWidgetStoresBinding1556,
            chartSlot179,
            chartWidgetStoresBinding1605,
          );
          if (chartWidgetStoresBinding5895 != null)
            return chartWidgetStoresBinding5895;
        }
        return typeof chartSlot179 == "string"
          ? chartSlot179
          : typeof chartSlot179 == "number" && Number.isFinite(chartSlot179)
            ? chartSlot179.toString()
            : "";
      }
      if (typeof chartSlot179 != "number" || !Number.isFinite(chartSlot179))
        return "";
      let chartWidgetStoresBinding2373 = chartWidgetStoresBinding1604.decimals,
        chartWidgetStoresBinding2374 =
          typeof chartWidgetStoresBinding2373 == "number" &&
          Number.isFinite(chartWidgetStoresBinding2373)
            ? Math.max(0, Math.floor(chartWidgetStoresBinding2373))
            : 0,
        chartWidgetStoresBinding2375 = chartSlot179.toFixed(
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
  );
  const chartWidgetStoresBinding1632 = useCallback(
    (chartSlot3285) => {
      if ($e || chartSlot3285 == null) return "";
      let chartWidgetStoresBinding5754 = String(chartSlot3285);
      return (
        chartWidgetStoresBinding1592[chartWidgetStoresBinding5754] ??
        chartWidgetStoresBinding5754
      );
    },
    [$e, chartWidgetStoresBinding1592],
  );
  const chartWidgetStoresBinding1633 = useCallback(
    (chartSlot3105) => {
      if ($e || chartSlot3105 == null) return "";
      let chartWidgetStoresBinding5671 = String(chartSlot3105);
      return (
        chartWidgetStoresBinding1592[chartWidgetStoresBinding5671] ??
        chartFn917(
          chartWidgetStoresBinding1556,
          chartSlot3105,
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
  );
  const chartWidgetStoresBinding1634 = useMemo(() => {
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
          (chartWidgetStoresBinding4041 = chartWidgetStoresBinding5387.length);
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
  ]);
  const chartWidgetStoresBinding1635 =
    !chartWidgetStoresBinding1555 &&
    showYAxis &&
    chartWidgetStoresBinding1609 == null;
  useLayoutEffect(() => {
    if (!chartWidgetStoresBinding1635) {
      chartWidgetStoresBinding1574((chartSlot4512) =>
        chartSlot4512 == null ? chartSlot4512 : null,
      );
      return;
    }
    let chartWidgetStoresBinding5446 = chartFn926(
      chartWidgetStoresBinding1558.current,
      chartWidgetStoresBinding1610,
    );
    chartWidgetStoresBinding5446 != null &&
      chartWidgetStoresBinding1574((chartSlot4449) =>
        chartSlot4449 != null && chartSlot4449 >= chartWidgetStoresBinding5446
          ? chartSlot4449
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
  const chartWidgetStoresBinding1636 = useCallback(() => {
    chartWidgetStoresBinding1635 &&
      chartWidgetStoresBinding1574(
        (chartSlot4456) =>
          chartSlot4456 ??
          chartFn926(
            chartWidgetStoresBinding1558.current,
            chartWidgetStoresBinding1610,
          ) ??
          chartSlot4456,
      );
  }, [chartWidgetStoresBinding1610, chartWidgetStoresBinding1635]);
  const chartWidgetStoresBinding1637 = useCallback(
    (chartSlot745, chartSlot746) => {
      let chartWidgetStoresBinding3564 =
          typeof chartSlot746.cx == "number" ? chartSlot746.cx : 0,
        chartWidgetStoresBinding3565 =
          typeof chartSlot746.cy == "number" ? chartSlot746.cy : 0;
      return !showDots ||
        chartSlot746.cx == null ||
        chartSlot746.cy == null ||
        !chartWidgetStoresBinding1630(chartSlot746.index) ? (
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
            chartWidgetStoresBinding1589[chartSlot745] ?? "var(--chart-color-0)"
          }
          stroke="var(--color-surface)"
          strokeWidth={2}
        />
      );
    },
    [chartWidgetStoresBinding1589, chartWidgetStoresBinding1630, showDots],
  );
  const chartWidgetStoresBinding1638 = useCallback(
    (chartSlot1009, chartSlot1010) => {
      let chartWidgetStoresBinding3921 =
          typeof chartSlot1010.cx == "number" ? chartSlot1010.cx : 0,
        chartWidgetStoresBinding3922 =
          typeof chartSlot1010.cy == "number" ? chartSlot1010.cy : 0;
      return (showIdleHoverIndicator && !chartWidgetStoresBinding1563) ||
        !chartFn927(chartSlot1010.payload, chartWidgetStoresBinding1586) ? (
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
            chartWidgetStoresBinding1589[chartSlot1009] ??
            "var(--chart-color-0)",
          root: chartWidgetStoresBinding1558,
          ...chartSlot1010,
        })
      );
    },
    [
      chartWidgetStoresBinding1589,
      chartWidgetStoresBinding1586,
      chartWidgetStoresBinding1563,
      showIdleHoverIndicator,
    ],
  );
  const chartWidgetStoresBinding1639 = useCallback(
    (chartSlot1357) => {
      let chartWidgetStoresBinding4302 =
        chartWidgetStoresBinding1625(chartSlot1357);
      if (chartWidgetStoresBinding1614) {
        let chartWidgetStoresBinding5601 =
          chartWidgetStoresBinding4302?.index ?? null;
        startTransition(() => {
          chartWidgetStoresBinding1572((chartSlot4580) =>
            chartSlot4580 === chartWidgetStoresBinding5601
              ? chartSlot4580
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
        chartWidgetStoresBinding1564((chartSlot4581) =>
          chartSlot4581 === chartWidgetStoresBinding5732
            ? chartSlot4581
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
  );
  const chartWidgetStoresBinding1640 = useCallback(() => {
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
  ]);
  const chartWidgetStoresBinding1641 = useCallback(() => {
    (showIdleHoverIndicator && !chartWidgetStoresBinding1614) ||
      chartWidgetStoresBinding1640();
  }, [
    chartWidgetStoresBinding1640,
    chartWidgetStoresBinding1614,
    showIdleHoverIndicator,
  ]);
  const chartWidgetStoresBinding1642 = useCallback(
    (chartSlot1377) => {
      enableLegendSeriesToggle &&
        (chartWidgetStoresBinding1636(),
        chartWidgetStoresBinding1568((chartSlot1892) => {
          let chartWidgetStoresBinding4885 = new Set();
          return (
            chartSlot1892.forEach((item) => {
              chartWidgetStoresBinding1581.has(item) &&
                chartWidgetStoresBinding4885.add(item);
            }),
            chartWidgetStoresBinding4885.has(chartSlot1377)
              ? chartWidgetStoresBinding4885.delete(chartSlot1377)
              : chartWidgetStoresBinding4885.add(chartSlot1377),
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
  );
  const chartWidgetStoresBinding1643 = useCallback((chartSlot3757) => {
    startTransition(() => {
      chartWidgetStoresBinding1570(chartSlot3757);
    });
  }, []);
  const $t = useCallback(() => {
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
        chartWidgetStoresBinding1562((chartSlot4582) =>
          chartSlot4582 === chartWidgetStoresBinding5896
            ? chartSlot4582
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
  const chartWidgetStoresBinding1644 = useMemo(
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
  );
  const chartWidgetStoresBinding1645 = useMemo(() => {
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
  ]);
  const chartWidgetStoresBinding1646 = useMemo(() => {
    if (scrollable)
      return {
        left: 0,
        right: 0,
        top: showValueLabels ? 20 : 10,
        bottom: 0,
      };
  }, [scrollable, showValueLabels]);
  const chartWidgetStoresBinding1647 =
    chartWidgetStoresBinding1597 ??
    (chartWidgetStoresBinding1555 || chartWidgetStoresBinding1617 === "number"
      ? {
          left: 0,
          right: 0,
        }
      : $e
        ? "no-gap"
        : "gap");
  const chartWidgetStoresBinding1648 =
    !chartWidgetStoresBinding1560.current &&
    !streaming &&
    !scrollable &&
    !disableAnimation &&
    !(showIdleHoverIndicator && chartWidgetStoresBinding1565);

  const chartWidgetStoresBinding1649 = useRef(null);
  const chartWidgetStoresBinding1650 = useRef(false);
  const on = useCodexChartGridLineRenderer($e, chartWidgetStoresBinding1595);
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
  };
}
