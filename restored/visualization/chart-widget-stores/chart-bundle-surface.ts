// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Injected Recharts surfaces still living in boundaries/chart-widget-stores.
// Codex C/S/U/B/X/D/E/V drained to visualization (wave-4/5); Chart imports those directly.

export type ChartBundleSurface = {
  createElement: any;
  $_: any;
  chartWidgetStoresF: any;
  chartWidgetStoresG: any;
  chartWidgetStoresP: any;
  chartWidgetStoresUnderscore: any;
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
 * Wire mega-local Recharts components into the drained Chart.
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
