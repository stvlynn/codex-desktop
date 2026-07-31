// Restored from ref/webview/assets/chart-widget-stores-SIOpvGDe.js
// Wave-10: surface bag retired — mega no longer calls setChartBundleSurface.
// Chart + pie use public recharts; keep no-op exports for deprecated importers.

/** @deprecated Empty after wave-9 — no residual surface consumers. */
export type ChartBundleSurface = Record<string, never>;

/** @deprecated No-op after wave-9/10. */
export function setChartBundleSurface(_next?: ChartBundleSurface): void {}

/** @deprecated Always throws after wave-9 — bag is unused. */
export function getChartBundleSurface(): ChartBundleSurface {
  throw new Error(
    "getChartBundleSurface retired (wave-9): Chart + pie use public recharts",
  );
}

export function hasChartBundleSurface(): boolean {
  return false;
}
