// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Codex Chart — promoted from Flat boundaries/chart-widget-stores/chart-component (wave-11).
// Chart axis tick renderer (chartFn925).

import { createElement, useMemo } from "react";
import { XAxis, usePlotArea } from "recharts";

import { chartWidgetStoresBinding1327 } from "./chart-chrome-locals";
import {
  chartFn916,
  chartFn917,
  chartFn918,
  chartFn919,
  chartFn922,
} from "./chart-format-helpers";
import { chartFn924 } from "./chart-tooltip-content";

export function chartFn925({
  data,
  dataKey,
  hideTicks,
  labels,
  usesBandScale,
  ...rest
}: Record<string, any>) {
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
    chartWidgetStoresBinding2884 = (chartSlot2604) => {
      if (hide || hideTicks || chartSlot2604 == null) return "";
      let chartWidgetStoresBinding5405 = String(chartSlot2604),
        chartWidgetStoresBinding5406 =
          labels[chartWidgetStoresBinding5405] ?? chartWidgetStoresBinding5405,
        chartWidgetStoresBinding5407 =
          chartWidgetStoresBinding2883?.maxLabelLength ?? 1 / 0;
      return Number.isFinite(chartWidgetStoresBinding5407)
        ? chartFn922(chartWidgetStoresBinding5406, chartWidgetStoresBinding5407)
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
