// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Wave-9: surface bag retired — aliases re-export public recharts@3.
// Prefer bare `import { … } from "recharts"` at call sites (Chart + pie already do).

import {
  Area,
  Bar,
  CartesianGrid,
  Cell,
  ComposedChart,
  LabelList,
  Legend,
  Line,
  Pie,
  PieChart,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

/** Semantic Recharts component bag (npm-backed; no mega surface). */
export type RechartsSurfaceAliases = {
  ResponsiveContainer: typeof ResponsiveContainer;
  Legend: typeof Legend;
  Tooltip: typeof Tooltip;
  Cell: typeof Cell;
  Pie: typeof Pie;
  PieChart: typeof PieChart;
  ComposedChart: typeof ComposedChart;
  Bar: typeof Bar;
  Line: typeof Line;
  Area: typeof Area;
  Scatter: typeof Scatter;
  XAxis: typeof XAxis;
  YAxis: typeof YAxis;
  CartesianGrid: typeof CartesianGrid;
  LabelList: typeof LabelList;
  ReferenceLine: typeof ReferenceLine;
  ReferenceDot: typeof ReferenceDot;
};

/**
 * @deprecated Prefer bare `recharts` imports (Chart + pie migrated wave-8/9).
 */
export function getRechartsSurfaceAliases(): RechartsSurfaceAliases {
  return {
    ResponsiveContainer,
    Legend,
    Tooltip,
    Cell,
    Pie,
    PieChart,
    ComposedChart,
    Bar,
    Line,
    Area,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    LabelList,
    ReferenceLine,
    ReferenceDot,
  };
}

/**
 * @deprecated Prefer `getRechartsSurfaceAliases` or bare `recharts` imports.
 */
export function getChartWidgetStoresRechartsLocals(): {
  chartWidgetStoresF: typeof Cell;
  chartWidgetStoresG: typeof ResponsiveContainer;
  chartWidgetStoresH: typeof PieChart;
  chartWidgetStoresM: typeof Pie;
  chartWidgetStoresP: typeof Legend;
  chartWidgetStoresUnderscore: typeof Tooltip;
  chartWidgetStoresHelper611: typeof LabelList;
  chartWidgetStoresHelper767: typeof CartesianGrid;
  chartWidgetStoresBinding1063: typeof Bar;
  chartWidgetStoresBinding1113: typeof Line;
  chartWidgetStoresBinding1130: typeof Area;
  chartWidgetStoresBinding1147: typeof Scatter;
  chartWidgetStoresBinding1155: typeof XAxis;
  chartWidgetStoresBinding1164: typeof YAxis;
  chartWidgetStoresBinding1208: typeof ComposedChart;
  chartWidgetStoresBinding1076: typeof ReferenceLine;
  chartWidgetStoresBinding1080: typeof ReferenceDot;
} {
  return {
    chartWidgetStoresF: Cell,
    chartWidgetStoresG: ResponsiveContainer,
    chartWidgetStoresH: PieChart,
    chartWidgetStoresM: Pie,
    chartWidgetStoresP: Legend,
    chartWidgetStoresUnderscore: Tooltip,
    chartWidgetStoresHelper611: LabelList,
    chartWidgetStoresHelper767: CartesianGrid,
    chartWidgetStoresBinding1063: Bar,
    chartWidgetStoresBinding1113: Line,
    chartWidgetStoresBinding1130: Area,
    chartWidgetStoresBinding1147: Scatter,
    chartWidgetStoresBinding1155: XAxis,
    chartWidgetStoresBinding1164: YAxis,
    chartWidgetStoresBinding1208: ComposedChart,
    chartWidgetStoresBinding1076: ReferenceLine,
    chartWidgetStoresBinding1080: ReferenceDot,
  };
}
