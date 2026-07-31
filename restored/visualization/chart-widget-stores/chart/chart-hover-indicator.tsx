// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Codex Chart — promoted from Flat boundaries/chart-widget-stores/chart-component (wave-11).
// Chart hover indicator renderers (chartFn929–930).

import { createElement, useLayoutEffect } from "react";
import { usePlotArea } from "recharts";

import { chartWidgetStoresBinding1327 } from "./chart-chrome-locals";
import { chartFn918, chartFn927 } from "./chart-format-helpers";

export function chartFn929({
  className,
  hoverIndicatorDataKey,
  isHoverActive = true,
  payload,
  points,
  stroke = "var(--alpha-10)",
  strokeWidth = 1,
}: Record<string, any>) {
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
export function chartFn930({ cx, cy, color, root }: Record<string, any>) {
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
