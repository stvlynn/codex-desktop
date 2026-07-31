// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-1: presentation/chart protobuf ↔ camelCase name bridges.

import {
  Cn,
} from "../presentation-protobuf";

export const chartTypeProtoToName = {
  [Cn.CHART_TYPE_LINE]: "line",
  [Cn.CHART_TYPE_PIE]: "pie",
  [Cn.CHART_TYPE_BAR]: "bar",
  [Cn.CHART_TYPE_AREA]: "area",
  [Cn.CHART_TYPE_DOUGHNUT]: "doughnut",
  [Cn.CHART_TYPE_SCATTER]: "scatter",
  [Cn.CHART_TYPE_BUBBLE]: "bubble",
  [Cn.CHART_TYPE_RADAR]: "radar",
  [Cn.CHART_TYPE_TREEMAP]: "treemap",
  [Cn.CHART_TYPE_SUNBURST]: "sunburst",
  [Cn.CHART_TYPE_MAP]: "map",
  [Cn.CHART_TYPE_WATERFALL]: "waterfall",
  [Cn.CHART_TYPE_LINE_3D]: "line3D",
  [Cn.CHART_TYPE_PIE_3D]: "pie3D",
  [Cn.CHART_TYPE_AREA_3D]: "area3D",
  [Cn.CHART_TYPE_BAR_3D]: "bar3D",
  [Cn.CHART_TYPE_FUNNEL]: "funnel",
  [Cn.CHART_TYPE_HISTOGRAM]: "histogram",
  [Cn.CHART_TYPE_BOX_WHISKER]: "boxWhisker",
  [Cn.CHART_TYPE_STOCK]: "stock",
  [Cn.CHART_TYPE_SURFACE_3D]: "surface3D",
  [Cn.CHART_TYPE_OF_PIE]: "ofPie",
  [Cn.CHART_TYPE_UNSPECIFIED]: undefined,
  [Cn.CHART_TYPE_SURFACE]: "surface",
  [Cn.CHART_TYPE_PARETO]: "pareto",
  [Cn.CHART_TYPE_COMBO]: "combo",
  [Cn.UNRECOGNIZED]: undefined,
} as const;
