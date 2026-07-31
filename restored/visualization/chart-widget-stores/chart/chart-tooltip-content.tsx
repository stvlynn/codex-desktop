// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Codex Chart — promoted from Flat boundaries/chart-widget-stores/chart-component (wave-11).
// Chart tooltip content renderer (chartFn924).

import { createElement } from "react";
import { FormattedMessage } from "react-intl";

import {
  chartWidgetStoresBinding1327,
  chartWidgetStoresBinding1331,
  chartWidgetStoresBinding1334,
  chartWidgetStoresBinding1335,
  chartWidgetStoresBinding1336,
  chartWidgetStoresBinding1337,
  chartWidgetStoresBinding1340,
  chartWidgetStoresBinding1341,
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
} from "./chart-format-helpers";

export function chartFn924({
  axisWidth,
  data,
  dataKey,
  labels,
  usesBandScale,
}: Record<string, any>) {
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
    chartWidgetStoresBinding2355 = (chartSlot4539, chartSlot4540) =>
      ((chartSlot4540 - chartSlot4539) * axisWidth) /
      chartWidgetStoresBinding2354,
    chartWidgetStoresBinding2356 = (chartSlot1494) => {
      if (chartSlot1494.length === 1)
        return (
          chartWidgetStoresBinding2351[chartSlot1494[0]].label.length *
            chartWidgetStoresBinding1334 <=
          axisWidth
        );
      for (
        let chartWidgetStoresBinding5111 = 1;
        chartWidgetStoresBinding5111 < chartSlot1494.length;
        chartWidgetStoresBinding5111 += 1
      ) {
        let chartWidgetStoresBinding5398 =
            chartWidgetStoresBinding2351[
              chartSlot1494[chartWidgetStoresBinding5111 - 1]
            ],
          chartWidgetStoresBinding5399 =
            chartWidgetStoresBinding2351[
              chartSlot1494[chartWidgetStoresBinding5111]
            ];
        if (
          ((chartWidgetStoresBinding5398.label.length +
            chartWidgetStoresBinding5399.label.length) *
            chartWidgetStoresBinding1334) /
            2 +
            chartWidgetStoresBinding1335 >
          chartWidgetStoresBinding2355(
            chartSlot1494[chartWidgetStoresBinding5111 - 1],
            chartSlot1494[chartWidgetStoresBinding5111],
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
