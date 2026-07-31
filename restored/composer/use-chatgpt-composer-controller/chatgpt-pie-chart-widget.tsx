// Restored from ref/webview/assets/use-chatgpt-composer-controller-CXc9FuAU.js
// Pie-chart content-reference widget (Helper156–164 + Value182/197).
// Wave-9: public recharts@3 + react (off getRechartsSurfaceAliases / mega surface).
// Codex B/C/D/E/S/U/V/X from drained visualization modules.

import { startTransition, useCallback, useId, useMemo, useState } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  chartWidgetStoresB,
  chartWidgetStoresC,
  chartWidgetStoresE,
  chartWidgetStoresS,
  chartWidgetStoresU,
  chartWidgetStoresV,
  chartWidgetStoresX,
  WidgetBoxRoot,
} from "../../visualization/chart-widget-stores";
import { rolldownRuntimeN } from "../../runtime/rolldown-runtime";

const slot182 = rolldownRuntimeN(() => {});
function useChatgptComposerControllerHelper156(request7979) {
  let slot14221 = {};
  if (!request7979) return slot14221;
  for (let [slot15025, slot15026] of Object.entries(request7979))
    (slot15025 === "role" ||
      slot15025 === "id" ||
      slot15025.startsWith("data-") ||
      slot15025.startsWith("aria-")) &&
      (slot14221[slot15025] = slot15026);
  return slot14221;
}
function useChatgptComposerControllerHelper157(request10978) {
  return `${request10978 * slot189 + Math.max(0, request10978 - 1) * slot190 + slot191}px`;
}
function useChatgptComposerControllerHelper158(
  request4592,
  request4593,
  request4594,
) {
  if (typeof request4593 != "number" || !Number.isFinite(request4593))
    return request4593 == null ? null : String(request4593);
  let slot10641;
  return (
    (slot10641 =
      request4594?.valueFormat === "integer"
        ? request4592.formatNumber(request4593, {
            maximumFractionDigits: 0,
          })
        : request4594?.valueFormat === "raw"
          ? String(request4593)
          : request4594?.valueFormat === "compact"
            ? request4592.formatNumber(request4593, {
                compactDisplay: "short",
                maximumFractionDigits: 1,
                notation: "compact",
              })
            : request4592.formatNumber(request4593)),
    `${request4594?.valuePrefix ?? ""}${slot10641}${request4594?.valueSuffix ?? ""}`
  );
}
function useChatgptComposerControllerHelper159(
  request8225,
  request8226,
  request8227,
) {
  return typeof request8226 != "number" ||
    !Number.isFinite(request8226) ||
    !Number.isFinite(request8227) ||
    request8227 === 0
    ? null
    : request8225.formatNumber(request8226 / request8227, {
        maximumFractionDigits: 1,
        style: "percent",
      });
}
function useChatgptComposerControllerHelper160(request11158) {
  return request11158 && typeof request11158 == "object" ? request11158 : null;
}
function useChatgptComposerControllerHelper161(request10254) {
  let slot15711 = useChatgptComposerControllerHelper160(request10254);
  return typeof slot15711?.formatted == "string" ? slot15711.formatted : null;
}
export function useChatgptComposerControllerHelper162(request415: any) {
  let {
      data = [],
      series = [slot186],
      xAxis,
      showLegend = true,
      legendMaxRows,
      showTooltip = true,
      tooltipOffset = 6,
      tooltipAnimationDuration = 600,
      tooltipAllowEscapeViewBox,
      showValueLabels = false,
      showLabelLines = false,
      disableAnimation = false,
      innerRadius,
      outerRadius = "80%",
      startAngle = 90,
      endAngle = -270,
      paddingAngle: slot2459,
      cornerRadius,
      tooltipValueMode = "value",
      minHeight,
      height,
      aspectRatio,
      tooltipValueFormatter,
      children,
      ...rest
    } = chartWidgetStoresC(request415),
    slot2460 = useChatgptComposerControllerHelper156(request415),
    slot2461 = chartWidgetStoresU(),
    { theme } = chartWidgetStoresE(),
    slot2462 = chartWidgetStoresS(),
    slot2463 = useId(),
    [slot2464, slot2465] = useState(null),
    slot2466 =
      aspectRatio ?? (height || minHeight ? undefined : 1.3333333333333333),
    slot2467 =
      typeof legendMaxRows == "number" &&
      Number.isFinite(legendMaxRows) &&
      legendMaxRows > 0
        ? Math.floor(legendMaxRows)
        : undefined,
    slot2468 = series[0] ?? slot186,
    slot2469 = typeof xAxis == "string" ? null : xAxis,
    slot2470 = typeof xAxis == "string" ? xAxis : (slot2469?.dataKey ?? ""),
    slot2471 = slot2469?.labels ?? slot187,
    slot2472 = chartWidgetStoresX(theme, slot2468.color),
    slot2473 = useMemo(() => {
      return chartWidgetStoresB(slot2472 ?? "")
        ? slot193.map((item) => {
            return `var(--${slot2472}-${item})`;
          })
        : slot2472
          ? [slot2472]
          : slot195;
    }, [slot2472]),
    slot2474 = useCallback(
      (request9287, request9288) => {
        let slot15231 = request9287[slot2470];
        if (slot15231 == null) return `Slice ${request9288 + 1}`;
        let slot15232 = String(slot15231);
        return slot2471[slot15232] ?? slot15232;
      },
      [slot2470, slot2471],
    ),
    slot2475 = useMemo(() => {
      return data.map((item, index) => {
        let slot11455 = item,
          slot11456 =
            typeof slot11455.fill == "string" && slot11455.fill !== ""
              ? slot11455.fill
              : slot2473[index % Math.max(1, slot2473.length)],
          slot11457 =
            typeof slot11455.stroke == "string" && slot11455.stroke !== ""
              ? slot11455.stroke
              : "var(--color-surface)";
        return {
          ...item,
          fill: slot11456,
          stroke: slot11457,
          __sliceId: `${slot2463}-${index}`,
          __sliceLabel: slot2474(slot11455, index),
        };
      });
    }, [slot2463, slot2473, data, slot2474]),
    slot2476 = useMemo(() => {
      return slot2475.map((item) => {
        return {
          color: item.fill,
          dataKey: slot2468.dataKey,
          payload: {
            value: item.__sliceLabel,
            __sliceId: item.__sliceId,
          },
          type: "square",
          value: item.__sliceLabel,
        };
      });
    }, [slot2475, slot2468.dataKey]),
    slot2477 = slot2475.reduce((accumulator, current) => {
      let slot15589 = current[slot2468.dataKey];
      return typeof slot15589 == "number" && Number.isFinite(slot15589)
        ? accumulator + slot15589
        : accumulator;
    }, 0),
    slot2478 = useCallback(
      (request9583, request9584) => {
        try {
          return slot2462(request9583, {
            tooltip: request9584,
          });
        } catch {
          return null;
        }
      },
      [slot2462],
    ),
    slot2479 = useCallback(
      (request11507, request11508) => {
        return (
          useChatgptComposerControllerHelper161(request11508) ??
          useChatgptComposerControllerHelper158(
            slot2461,
            request11507,
            slot2468,
          )
        );
      },
      [slot2461, slot2468],
    ),
    slot2480 = useCallback(
      ({ x, y, textAnchor, value, payload }) => {
        if (typeof x != "number" || typeof y != "number") return null;
        let slot10816 = slot2479(value, payload);
        return slot10816 == null || slot10816 === "" ? null : (
          <text
            x={x}
            y={y}
            textAnchor={
              textAnchor === "start" ||
              textAnchor === "middle" ||
              textAnchor === "end" ||
              textAnchor === "inherit"
                ? textAnchor
                : "middle"
            }
            className={slot185.ValueLabel}
          >
            {slot10816}
          </text>
        );
      },
      [slot2479],
    ),
    slot2481 = useCallback((request10921) => {
      startTransition(() => {
        slot2465(request10921);
      });
    }, []),
    slot2482 = useCallback(() => {
      startTransition(() => {
        slot2465(null);
      });
    }, []);
  return (
    <WidgetBoxRoot
      as="div"
      {...slot2460}
      className={chartWidgetStoresV(slot185.Chart)}
      data-w-component="pie-chart"
      aspectRatio={slot2466}
      height={height}
      minHeight={minHeight}
      {...rest}
    >
      <ResponsiveContainer>
        <PieChart>
          {showTooltip && (
            <Tooltip
              offset={tooltipOffset}
              animationDuration={tooltipAnimationDuration}
              allowEscapeViewBox={tooltipAllowEscapeViewBox}
              content={(request7112) => {
                const UseChatgptComposerControllerHelper163 =
                  useChatgptComposerControllerHelper163;
                return (
                  <UseChatgptComposerControllerHelper163
                    series={slot2468}
                    valueFormatter={tooltipValueFormatter}
                    evaluateTooltipExpression={slot2478}
                    formatValue={slot2479}
                    total={slot2477}
                    valueMode={tooltipValueMode}
                    {...request7112}
                  />
                );
              }}
            />
          )}
          {showLegend && (
            <Legend
              payload={slot2476}
              content={(request8516) => {
                const UseChatgptComposerControllerHelper164 =
                  useChatgptComposerControllerHelper164;
                return (
                  <UseChatgptComposerControllerHelper164
                    maxRows={slot2467}
                    onSliceHoverEnd={slot2482}
                    onSliceHoverStart={slot2481}
                    {...request8516}
                  />
                );
              }}
            />
          )}
          <Pie
            data={slot2475}
            dataKey={slot2468.dataKey}
            nameKey="__sliceLabel"
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            startAngle={startAngle}
            endAngle={endAngle}
            paddingAngle={slot2459}
            cornerRadius={cornerRadius}
            isAnimationActive={!disableAnimation}
            label={showValueLabels ? slot2480 : false}
            labelLine={showValueLabels ? showLabelLines : false}
          >
            {slot2475.map((item) => {
              return (
                <Cell
                  key={item.__sliceId}
                  fill={item.fill}
                  opacity={
                    slot2464 == null || slot2464 === item.__sliceId
                      ? undefined
                      : slot188
                  }
                  stroke={item.stroke}
                  strokeWidth={2}
                />
              );
            })}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </WidgetBoxRoot>
  );
}
function useChatgptComposerControllerHelper163({
  active,
  payload,
  series,
  total,
  valueMode,
  valueFormatter,
  evaluateTooltipExpression,
  formatValue,
}) {
  let slot5272 = chartWidgetStoresU();
  if (!active || !payload?.length) return null;
  let slot5273 = payload[0],
    slot5274 = useChatgptComposerControllerHelper160(slot5273.payload),
    slot5275 = slot5274?.__sliceLabel,
    slot5276 =
      typeof slot5273.name == "string"
        ? slot5273.name
        : slot5273.name == null
          ? typeof slot5275 == "string"
            ? slot5275
            : ""
          : String(slot5273.name);
  if (valueFormatter?.type === "xAxisOnly")
    return (
      <div className={slot185.ChartTooltip}>
        <div className={slot185.TooltipValue}>{slot5276}</div>
      </div>
    );
  let slot5277 = {
      value: slot5273.value,
      dataKey: slot5273.dataKey,
      name: slot5273.name,
      payload: slot5273.payload,
      color: slot5273.color,
      seriesLabel: series.label,
      xAxisLabel: slot5276,
    },
    slot5278 =
      valueFormatter?.type === "expression" && evaluateTooltipExpression
        ? evaluateTooltipExpression(valueFormatter.expression, slot5277)
        : valueFormatter?.type === "xAxisLabel"
          ? slot5276
          : null,
    slot5279 =
      valueMode === "percent"
        ? useChatgptComposerControllerHelper159(slot5272, slot5273.value, total)
        : null,
    slot5280 =
      slot5278 ??
      slot5279 ??
      formatValue(slot5273.value, slot5273.payload) ??
      "",
    slot5281 =
      slot5276 !== "" &&
      !(valueFormatter?.type === "xAxisLabel" && !series.label);
  return (
    <div className={slot185.ChartTooltip}>
      {slot5281 && <div className={slot185.TooltipHeader}>{slot5276}</div>}
      <div className="width-full flex flex-wrap items-center gap-1.5">
        <div
          className="h-2.5 w-2.5 shrink-0 rounded-full"
          style={{
            background:
              typeof slot5274?.fill == "string"
                ? slot5274.fill
                : slot5273.color,
          }}
        />
        <div className="flex flex-1 items-center justify-between gap-3">
          {series.label && (
            <span className={slot185.TooltipSeriesLabel}>{series.label}</span>
          )}
          <span className={slot185.TooltipValue}>{slot5280}</span>
        </div>
      </div>
    </div>
  );
}
function useChatgptComposerControllerHelper164({
  className,
  payload,
  maxRows,
  onSliceHoverEnd,
  onSliceHoverStart,
}) {
  if (!payload?.length) return null;
  let slot6254 = maxRows != null && maxRows > 1,
    slot6255 =
      maxRows == null
        ? undefined
        : {
            maxHeight: useChatgptComposerControllerHelper157(maxRows),
          },
    slot6256 = (event) => {
      event.pointerType === "touch" && onSliceHoverEnd?.();
    },
    slot6257 = (event) => {
      event.pointerType !== "touch" && onSliceHoverEnd?.();
    },
    slot6258 = (request11202, event) => {
      event.pointerType !== "touch" && onSliceHoverStart?.(request11202);
    };
  return (
    <div
      className={chartWidgetStoresV(
        "flex items-center justify-center pt-3",
        slot6254 ? "flex-wrap gap-x-4 gap-y-1.5" : "gap-4",
        maxRows != null && "overflow-hidden",
        className,
      )}
      onPointerDown={slot6256}
      onPointerLeave={slot6257}
      style={slot6255}
    >
      {payload.map((item) => {
        let slot8952 = item.value == null ? "" : String(item.value),
          slot8953 = useChatgptComposerControllerHelper160(item.payload),
          slot8954 =
            typeof slot8953?.__sliceId == "string" ? slot8953.__sliceId : null,
          slot8955 =
            slot8954 == null
              ? undefined
              : (request11653) => {
                  return slot6258(slot8954, request11653);
                };
        return slot8952 === "" ? null : (
          <div
            key={slot8952}
            className={chartWidgetStoresV(
              "flex max-w-full min-w-0 items-center gap-1.5 px-2 py-1",
              slot185.LegendItem,
            )}
            onPointerEnter={slot8955}
          >
            <div
              className="h-2.5 w-2.5 shrink-0 rounded-full"
              style={{
                backgroundColor: item.color,
              }}
            />
            <span className="min-w-0 truncate">{slot8952}</span>
          </div>
        );
      })}
    </div>
  );
}
let slot185: any;
let slot186: any;
let slot187: any;
let slot188: any;
let slot189: any;
let slot190: any;
let slot191: any;
let slot192: any;
let slot193: any;
let slot194: any;
let slot195: any;

const slot197 = rolldownRuntimeN(() => {
  slot182();
  // Wave-9: no mega surface / setChartBundleSurface — public recharts + react.
  slot185 = {
    Chart: "PieChart_Chart",
    ChartTooltip: "PieChart_ChartTooltip",
    LegendItem: "PieChart_LegendItem",
    TooltipHeader: "PieChart_TooltipHeader",
    TooltipSeriesLabel: "PieChart_TooltipSeriesLabel",
    TooltipValue: "PieChart_TooltipValue",
    ValueLabel: "PieChart_ValueLabel",
  };
  slot186 = {
    dataKey: "",
  };
  slot187 = {};
  slot188 = 0.5;
  slot189 = 28;
  slot190 = 6;
  slot191 = 12;
  slot192 = [400, 500, 600, 300, 200];
  slot193 = [500, 200, 400, 600, 300];
  slot194 = ["blue", "purple", "orange", "green", "red", "yellow", "pink"];
  slot195 = slot192.flatMap((item) => {
    return slot194.map((_item) => {
      return `var(--${_item}-${item})`;
    });
  });
});

export const ensureChatgptPieChartWidgetInit = slot197;
