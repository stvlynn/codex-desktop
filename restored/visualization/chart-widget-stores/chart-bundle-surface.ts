// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Injected Recharts surfaces still living in boundaries/chart-widget-stores.
// Wave-8: Chart migrated to public recharts + react-intl; bag kept for pie (+ series).
// Binding1022 / Binding1317 / Binding1326 / createElement dropped from Chart path.

export type ChartBundleSurface = {
  chartWidgetStoresF: any;
  chartWidgetStoresG: any;
  chartWidgetStoresH: any;
  chartWidgetStoresM: any;
  chartWidgetStoresP: any;
  chartWidgetStoresUnderscore: any;
  chartWidgetStoresHelper611: any;
  chartWidgetStoresHelper767: any;
  chartWidgetStoresBinding1063: any;
  chartWidgetStoresBinding1076: any;
  chartWidgetStoresBinding1080: any;
  chartWidgetStoresBinding1113: any;
  chartWidgetStoresBinding1130: any;
  chartWidgetStoresBinding1147: any;
  chartWidgetStoresBinding1155: any;
  chartWidgetStoresBinding1164: any;
  chartWidgetStoresBinding1208: any;
};

let surface: ChartBundleSurface | null = null;

/**
 * Wire mega-local Recharts components for pie / residual surface consumers.
 * Called from mega `_chartWidgetStoresC` after Recharts bindings are assigned.
 */
export function setChartBundleSurface(next: ChartBundleSurface): void {
  surface = next;
}

export function getChartBundleSurface(): ChartBundleSurface {
  if (!surface) {
    throw new Error(
      "getRechartsSurfaceAliases requires setChartBundleSurface (call _chartWidgetStoresC first)",
    );
  }
  return surface;
}

export function hasChartBundleSurface(): boolean {
  return surface != null;
}
