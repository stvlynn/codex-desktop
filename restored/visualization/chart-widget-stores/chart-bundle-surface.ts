// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Injected Recharts + Codex glue still living in boundaries/chart-widget-stores.
// Chart (`_chartWidgetStoresS`) consumes this bag until Recharts/RTK can npm-shim.

export type ChartBundleSurface = {
  createElement: any;
  $_: any;
  chartWidgetStoresB: any;
  chartWidgetStoresC: any;
  chartWidgetStoresD: any;
  chartWidgetStoresE: any;
  chartWidgetStoresF: any;
  chartWidgetStoresG: any;
  chartWidgetStoresP: any;
  chartWidgetStoresS: any;
  chartWidgetStoresU: any;
  chartWidgetStoresUnderscore: any;
  chartWidgetStoresV: any;
  chartWidgetStoresX: any;
  chartWidgetStoresHelper611: any;
  chartWidgetStoresHelper767: any;
  chartWidgetStoresBinding1022: any;
  chartWidgetStoresBinding1063: any;
  chartWidgetStoresBinding1076: any;
  chartWidgetStoresBinding1080: any;
  chartWidgetStoresBinding1113: any;
  chartWidgetStoresBinding1130: any;
  chartWidgetStoresBinding1147: any;
  chartWidgetStoresBinding1155: any;
  chartWidgetStoresBinding1164: any;
  chartWidgetStoresBinding1208: any;
  chartWidgetStoresBinding1317: any;
  chartWidgetStoresBinding1326: any;
};

let surface: ChartBundleSurface | null = null;

/**
 * Wire mega-local Recharts components + Codex helpers into the drained Chart.
 * Called from `_chartWidgetStoresC` after Recharts bindings are assigned.
 */
export function setChartBundleSurface(next: ChartBundleSurface): void {
  surface = next;
}

export function getChartBundleSurface(): ChartBundleSurface {
  if (!surface) {
    throw new Error(
      "Chart requires setChartBundleSurface (call _chartWidgetStoresC first)",
    );
  }
  return surface;
}

export function hasChartBundleSurface(): boolean {
  return surface != null;
}
