// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Codex Chart — promoted from Flat boundaries/chart-widget-stores/chart-component (wave-11).
// Chart tooltip payload renderer (chartFn931).

import { createElement } from "react";
import { FormattedMessage } from "react-intl";

import { chartWidgetStoresBinding1327 } from "./chart-chrome-locals";
import {
  chartFn917,
  chartFn918,
  chartFn919,
  chartFn920,
  chartFn921,
  chartFn922,
  chartFn923,
} from "./chart-format-helpers";
import { useChartIntl as chartWidgetStoresU } from "../use-chart-intl";
import { classNames as chartWidgetStoresV } from "../widget-class-names";

export function chartFn931({
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
}: Record<string, any>) {
  let chartWidgetStoresBinding1710 = chartWidgetStoresU();
  if (!active || !payload?.length) return null;
  let chartWidgetStoresBinding1711 = (chartSlot3264) => {
    let chartWidgetStoresBinding5752 = chartFn918(chartSlot3264)?.[xAxisKey];
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
          let chartWidgetStoresBinding2007 = chartFn918(item.payload),
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
          let chartWidgetStoresBinding2010 = chartFn919(item.payload),
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
