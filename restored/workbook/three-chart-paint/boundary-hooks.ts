// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-90: three-chart-paint boundary hooks
// (2D chart helpers + SSF/camera leave-behinds; three npm is direct).

export type ThreeChartPaintBoundaryHooks = {
  bh421: (...args: any[]) => any;
  bh424: (...args: any[]) => any;
  bh428: (...args: any[]) => any;
  bh469: (...args: any[]) => any;
  bh474: (...args: any[]) => any;
  bh519: (...args: any[]) => any;
  bh520: (...args: any[]) => any;
  defaultFontFamily: any;
  ssfModule: any;
  cameraDir: any;
};

/** Live bag — wired from workbook-runtime after peel. */
export const tcH: ThreeChartPaintBoundaryHooks =
  {} as ThreeChartPaintBoundaryHooks;

export function wireThreeChartPaintBoundaryHooks(
  next: ThreeChartPaintBoundaryHooks,
): void {
  Object.assign(tcH, next);
}
