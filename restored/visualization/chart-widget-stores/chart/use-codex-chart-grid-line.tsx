// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Codex Chart — CartesianGrid custom line renderer (`on` callback).

import { createElement, useCallback } from "react";

export function useCodexChartGridLineRenderer(
  $e: unknown,
  chartWidgetStoresBinding1595: unknown,
) {
  return useCallback(
    (chartSlot334) => {
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
        } = chartSlot334,
        { y1, y2 } = rest,
        chartWidgetStoresBinding2876 = (chartSlot2059) => {
          if (
            typeof chartSlot2059 == "number" &&
            Number.isFinite(chartSlot2059)
          )
            return chartSlot2059;
          if (typeof chartSlot2059 == "string") {
            let chartWidgetStoresBinding5792 = Number(chartSlot2059);
            return Number.isFinite(chartWidgetStoresBinding5792)
              ? chartWidgetStoresBinding5792
              : null;
          }
          return null;
        },
        chartWidgetStoresBinding2877 =
          chartWidgetStoresBinding2876(y1) ?? chartWidgetStoresBinding2876(y2),
        chartWidgetStoresBinding2878 = offset
          ? offset.top + offset.height
          : null;
      return chartWidgetStoresBinding2877 != null &&
        typeof chartWidgetStoresBinding2878 == "number" &&
        Number.isFinite(chartWidgetStoresBinding2878) &&
        Math.abs(chartWidgetStoresBinding2877 - chartWidgetStoresBinding2878) <
          0.5 &&
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
  );
}
