// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Codex Chart — promoted from Flat boundaries/chart-widget-stores/chart-component (wave-11).
// Chart legend list renderer (chartFn932).

import { createElement } from "react";

import {
  chartWidgetStoresBinding1327,
  chartWidgetStoresBinding1338,
  chartWidgetStoresBinding1339,
} from "./chart-chrome-locals";
import {
  chartFn920,
  chartFn926,
  chartFn927,
  chartFn928,
} from "./chart-format-helpers";
import { classNames as chartWidgetStoresV } from "../widget-class-names";

export function chartFn932({
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
}: Record<string, any>) {
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
    chartWidgetStoresBinding1820 = (chartSlot3804, event) => {
      event.currentTarget.matches(":focus-visible") &&
        onSeriesHoverStart(chartSlot3804);
    },
    chartWidgetStoresBinding1821 = (chartSlot4081, event) => {
      event.pointerType !== "touch" && onSeriesHoverStart(chartSlot4081);
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
        .toSorted((chartSlot2108, chartSlot2109) => {
          let chartWidgetStoresBinding5067 = String(
              chartSlot2108.dataKey ?? chartSlot2108.value ?? "",
            ),
            chartWidgetStoresBinding5068 = String(
              chartSlot2109.dataKey ?? chartSlot2109.value ?? "",
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
              onFocus={(chartSlot4793) =>
                chartWidgetStoresBinding1820(
                  chartWidgetStoresBinding2107,
                  chartSlot4793,
                )
              }
              onPointerEnter={(chartSlot4794) =>
                chartWidgetStoresBinding1821(
                  chartWidgetStoresBinding2107,
                  chartSlot4794,
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
              onPointerEnter={(chartSlot4795) =>
                chartWidgetStoresBinding1821(
                  chartWidgetStoresBinding2107,
                  chartSlot4795,
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
