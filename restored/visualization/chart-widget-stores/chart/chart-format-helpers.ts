// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Codex Chart — promoted from Flat boundaries/chart-widget-stores/chart-component (wave-11).
// Pure format / axis / series helper fns for Codex Chart.

import {
  chartWidgetStoresBinding1330,
  chartWidgetStoresBinding1334,
  chartWidgetStoresBinding1338,
  chartWidgetStoresBinding1339,
  chartWidgetStoresBinding1340,
  chartWidgetStoresBinding1341,
  chartWidgetStoresBinding1342,
} from "./chart-chrome-locals";

export function chartFn914(chartSlot3658: unknown) {
  return typeof chartSlot3658 == "number" && Number.isFinite(chartSlot3658)
    ? chartSlot3658
    : null;
}
export function chartFn915(chartSlot3641: unknown) {
  return !!(
    chartSlot3641?.valueFormat ||
    chartSlot3641?.valuePrefix ||
    chartSlot3641?.valueSuffix
  );
}
export function chartFn916(chartSlot2079: unknown) {
  let chartWidgetStoresBinding5034 = chartSlot2079[0];
  if (
    !(
      !chartWidgetStoresBinding5034 || !chartFn915(chartWidgetStoresBinding5034)
    )
  )
    return chartSlot2079.every(
      (item) =>
        item.valueFormat === chartWidgetStoresBinding5034.valueFormat &&
        item.valuePrefix === chartWidgetStoresBinding5034.valuePrefix &&
        item.valueSuffix === chartWidgetStoresBinding5034.valueSuffix,
    )
      ? chartWidgetStoresBinding5034
      : undefined;
}
export function chartFn917(
  chartSlot735: unknown,
  chartSlot736: unknown,
  chartSlot737: unknown,
) {
  if (typeof chartSlot736 != "number" || !Number.isFinite(chartSlot736))
    return chartSlot736 == null ? null : String(chartSlot736);
  let chartWidgetStoresBinding3554;
  return (
    (chartWidgetStoresBinding3554 =
      chartSlot737?.valueFormat === "integer"
        ? chartSlot735.formatNumber(chartSlot736, {
            maximumFractionDigits: 0,
          })
        : chartSlot737?.valueFormat === "raw"
          ? String(chartSlot736)
          : chartSlot737?.valueFormat === "compact"
            ? chartSlot735.formatNumber(chartSlot736, {
                compactDisplay: "short",
                maximumFractionDigits: 1,
                notation: "compact",
              })
            : chartSlot735.formatNumber(chartSlot736)),
    `${chartSlot737?.valuePrefix ?? ""}${chartWidgetStoresBinding3554}${chartSlot737?.valueSuffix ?? ""}`
  );
}
export function chartFn918(chartSlot3952: unknown) {
  return chartSlot3952 && typeof chartSlot3952 == "object"
    ? chartSlot3952
    : null;
}
export function chartFn919(chartSlot3413: unknown) {
  let chartWidgetStoresBinding5799 = chartFn918(chartSlot3413);
  return typeof chartWidgetStoresBinding5799?.formatted == "string"
    ? chartWidgetStoresBinding5799.formatted
    : null;
}
export function chartFn920(chartSlot3820: unknown) {
  return `${chartSlot3820 * chartWidgetStoresBinding1339 + Math.max(0, chartSlot3820 - 1) * chartWidgetStoresBinding1340 + chartWidgetStoresBinding1341}px`;
}
export function chartFn921(chartSlot3586: unknown, chartSlot3587: unknown) {
  if (!(chartSlot3586 <= 0))
    return Math.min(
      chartWidgetStoresBinding1338,
      Math.ceil(
        chartSlot3586 * chartWidgetStoresBinding1334 +
          chartSlot3587 +
          chartWidgetStoresBinding1330,
      ),
    );
}
export function chartFn922(chartSlot2157: unknown, chartSlot2158: unknown) {
  if (chartSlot2157.length <= chartSlot2158) return chartSlot2157;
  if (chartSlot2158 <= 3) return chartSlot2157.slice(0, chartSlot2158);
  let chartWidgetStoresBinding5085 = chartSlot2158 - 3,
    chartWidgetStoresBinding5086 = Math.ceil(chartWidgetStoresBinding5085 / 2),
    chartWidgetStoresBinding5087 = Math.floor(chartWidgetStoresBinding5085 / 2);
  return `${chartSlot2157.slice(0, chartWidgetStoresBinding5086).trimEnd()}...${chartSlot2157.slice(chartSlot2157.length - chartWidgetStoresBinding5087).trimStart()}`;
}
export function chartFn923(chartSlot3220: unknown, chartSlot3221: unknown) {
  let chartWidgetStoresBinding5734 = chartSlot3220 - 1;
  return Array.from(
    {
      length: chartSlot3221,
    },
    (chartSlot4364, chartSlot4365) =>
      Math.round(
        (chartSlot4365 * chartWidgetStoresBinding5734) / (chartSlot3221 - 1),
      ),
  );
}

export function chartFn926(chartSlot2077: unknown, chartSlot2078: unknown = 0) {
  if (chartSlot2077 == null) return null;
  let chartWidgetStoresBinding5032 =
    chartSlot2077.querySelector(".recharts-yAxis");
  if (chartWidgetStoresBinding5032 == null) return null;
  let { width } = chartWidgetStoresBinding5032.getBoundingClientRect();
  return !Number.isFinite(width) || width <= 0
    ? null
    : Math.ceil(width + chartWidgetStoresBinding1330 + chartSlot2078);
}
export function chartFn927(chartSlot3555: unknown, chartSlot3556: unknown) {
  if (!chartSlot3556) return true;
  let chartWidgetStoresBinding5879 = chartFn918(chartSlot3555);
  return (
    chartWidgetStoresBinding5879 != null &&
    !!chartWidgetStoresBinding5879[chartSlot3556]
  );
}
export function chartFn928(chartSlot2595: unknown) {
  return (
    chartSlot2595 != null &&
    chartSlot2595.value == null &&
    chartSlot2595.formatted == null &&
    chartSlot2595.payload == null &&
    chartSlot2595.index == null &&
    chartSlot2595.chartX == null &&
    chartSlot2595.chartY == null
  );
}

export function chartFn933(chartSlot3758: unknown) {
  return chartSlot3758
    ? chartWidgetStoresBinding1342[
        (chartWidgetStoresBinding1342.indexOf(chartSlot3758) + 1) %
          chartWidgetStoresBinding1342.length
      ]
    : chartWidgetStoresBinding1342[0];
}

/**
 * Codex Chart — series / legend / tooltip chrome over public recharts + react-intl.
 * Bundle export `_chartWidgetStoresS` (IMPORT_MAP alias C).
 */
