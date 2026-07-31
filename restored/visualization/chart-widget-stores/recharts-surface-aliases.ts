// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Codex wrappers around Recharts surfaces still living in the mega boundary.
// Wave-8: Chart uses public recharts; pie still maps the surface bag.
// Joint delete still blocked: pre-Y+Y span, post-Y inlined intl, Box stubs in Y.

import {
  getChartBundleSurface,
  type ChartBundleSurface,
} from "./chart-bundle-surface";

/** Semantic Recharts component bag used by Codex pie chrome. */
export type RechartsSurfaceAliases = {
  ResponsiveContainer: ChartBundleSurface["chartWidgetStoresG"];
  Legend: ChartBundleSurface["chartWidgetStoresP"];
  Tooltip: ChartBundleSurface["chartWidgetStoresUnderscore"];
  Cell: ChartBundleSurface["chartWidgetStoresF"];
  Pie: ChartBundleSurface["chartWidgetStoresM"];
  PieChart: ChartBundleSurface["chartWidgetStoresH"];
  ComposedChart: ChartBundleSurface["chartWidgetStoresBinding1208"];
  Bar: ChartBundleSurface["chartWidgetStoresBinding1063"];
  Line: ChartBundleSurface["chartWidgetStoresBinding1113"];
  Area: ChartBundleSurface["chartWidgetStoresBinding1130"];
  Scatter: ChartBundleSurface["chartWidgetStoresBinding1147"];
  XAxis: ChartBundleSurface["chartWidgetStoresBinding1155"];
  YAxis: ChartBundleSurface["chartWidgetStoresBinding1164"];
  CartesianGrid: ChartBundleSurface["chartWidgetStoresHelper767"];
  LabelList: ChartBundleSurface["chartWidgetStoresHelper611"];
  ReferenceLine: ChartBundleSurface["chartWidgetStoresBinding1076"];
  ReferenceDot: ChartBundleSurface["chartWidgetStoresBinding1080"];
};

/**
 * Map mega surface locals onto stock Recharts names (pie path).
 * Requires `setChartBundleSurface` (mega `_chartWidgetStoresC`) first.
 */
export function getRechartsSurfaceAliases(): RechartsSurfaceAliases {
  const surface = getChartBundleSurface();
  return {
    ResponsiveContainer: surface.chartWidgetStoresG,
    Legend: surface.chartWidgetStoresP,
    Tooltip: surface.chartWidgetStoresUnderscore,
    Cell: surface.chartWidgetStoresF,
    Pie: surface.chartWidgetStoresM,
    PieChart: surface.chartWidgetStoresH,
    ComposedChart: surface.chartWidgetStoresBinding1208,
    Bar: surface.chartWidgetStoresBinding1063,
    Line: surface.chartWidgetStoresBinding1113,
    Area: surface.chartWidgetStoresBinding1130,
    Scatter: surface.chartWidgetStoresBinding1147,
    XAxis: surface.chartWidgetStoresBinding1155,
    YAxis: surface.chartWidgetStoresBinding1164,
    CartesianGrid: surface.chartWidgetStoresHelper767,
    LabelList: surface.chartWidgetStoresHelper611,
    ReferenceLine: surface.chartWidgetStoresBinding1076,
    ReferenceDot: surface.chartWidgetStoresBinding1080,
  };
}

/** @deprecated Prefer semantic names from `getRechartsSurfaceAliases`. */
export function getChartWidgetStoresRechartsLocals(): Pick<
  ChartBundleSurface,
  | "chartWidgetStoresF"
  | "chartWidgetStoresG"
  | "chartWidgetStoresH"
  | "chartWidgetStoresM"
  | "chartWidgetStoresP"
  | "chartWidgetStoresUnderscore"
  | "chartWidgetStoresHelper611"
  | "chartWidgetStoresHelper767"
  | "chartWidgetStoresBinding1063"
  | "chartWidgetStoresBinding1113"
  | "chartWidgetStoresBinding1130"
  | "chartWidgetStoresBinding1147"
  | "chartWidgetStoresBinding1155"
  | "chartWidgetStoresBinding1164"
  | "chartWidgetStoresBinding1208"
> {
  const surface = getChartBundleSurface();
  return {
    chartWidgetStoresF: surface.chartWidgetStoresF,
    chartWidgetStoresG: surface.chartWidgetStoresG,
    chartWidgetStoresH: surface.chartWidgetStoresH,
    chartWidgetStoresM: surface.chartWidgetStoresM,
    chartWidgetStoresP: surface.chartWidgetStoresP,
    chartWidgetStoresUnderscore: surface.chartWidgetStoresUnderscore,
    chartWidgetStoresHelper611: surface.chartWidgetStoresHelper611,
    chartWidgetStoresHelper767: surface.chartWidgetStoresHelper767,
    chartWidgetStoresBinding1063: surface.chartWidgetStoresBinding1063,
    chartWidgetStoresBinding1113: surface.chartWidgetStoresBinding1113,
    chartWidgetStoresBinding1130: surface.chartWidgetStoresBinding1130,
    chartWidgetStoresBinding1147: surface.chartWidgetStoresBinding1147,
    chartWidgetStoresBinding1155: surface.chartWidgetStoresBinding1155,
    chartWidgetStoresBinding1164: surface.chartWidgetStoresBinding1164,
    chartWidgetStoresBinding1208: surface.chartWidgetStoresBinding1208,
  };
}
