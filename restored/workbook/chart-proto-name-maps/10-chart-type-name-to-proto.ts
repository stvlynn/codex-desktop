// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-1: presentation/chart protobuf ↔ camelCase name bridges.

import { Cn } from "../presentation-protobuf";

export const chartTypeNameToProto = {
  line: Cn.CHART_TYPE_LINE,
  pie: Cn.CHART_TYPE_PIE,
  bar: Cn.CHART_TYPE_BAR,
  doughnut: Cn.CHART_TYPE_DOUGHNUT,
  scatter: Cn.CHART_TYPE_SCATTER,
  bubble: Cn.CHART_TYPE_BUBBLE,
  radar: Cn.CHART_TYPE_RADAR,
  treemap: Cn.CHART_TYPE_TREEMAP,
  sunburst: Cn.CHART_TYPE_SUNBURST,
  map: Cn.CHART_TYPE_MAP,
  waterfall: Cn.CHART_TYPE_WATERFALL,
  line3D: Cn.CHART_TYPE_LINE_3D,
  pie3D: Cn.CHART_TYPE_PIE_3D,
  area3D: Cn.CHART_TYPE_AREA_3D,
  bar3D: Cn.CHART_TYPE_BAR_3D,
  funnel: Cn.CHART_TYPE_FUNNEL,
  histogram: Cn.CHART_TYPE_HISTOGRAM,
  boxWhisker: Cn.CHART_TYPE_BOX_WHISKER,
  stock: Cn.CHART_TYPE_STOCK,
  surface3D: Cn.CHART_TYPE_SURFACE_3D,
  ofPie: Cn.CHART_TYPE_OF_PIE,
  surface: Cn.CHART_TYPE_SURFACE,
  pareto: Cn.CHART_TYPE_PARETO,
  combo: Cn.CHART_TYPE_COMBO,
  area: Cn.CHART_TYPE_AREA,
} as const;
