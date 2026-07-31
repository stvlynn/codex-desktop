// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Wave-9: Chart + pie on public recharts; surface bag is a no-op stub.
// Mega may still call setChartBundleSurface during _chartWidgetStoresC — ignored.
// Drop the call + delete pre-Y/Y/post-Y intl together in the joint-delete wave.

/** @deprecated Empty after wave-9 — no residual surface consumers. */
export type ChartBundleSurface = Record<string, never>;

/**
 * No-op after wave-9 (Chart + pie use public recharts).
 * Mega `_chartWidgetStoresC` may still invoke this until joint vendor delete.
 */
export function setChartBundleSurface(_next?: ChartBundleSurface): void {}

/** @deprecated Always false after wave-9 — bag is unused. */
export function getChartBundleSurface(): ChartBundleSurface {
  throw new Error(
    "getChartBundleSurface retired (wave-9): Chart + pie use public recharts",
  );
}

export function hasChartBundleSurface(): boolean {
  return false;
}
