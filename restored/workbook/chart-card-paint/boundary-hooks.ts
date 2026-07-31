// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-106: chart-card-paint boundary hooks.

export type ChartCardPaintBoundaryHooks = {
  toCssColor: (...args: any[]) => any;
  layoutCardLines: (...args: any[]) => any;
  formatCardValue: (...args: any[]) => any;
  padX: any;
  minWidth: any;
  minHeight: any;
  uiFont: any;
};

export const ccpH: ChartCardPaintBoundaryHooks =
  {} as ChartCardPaintBoundaryHooks;

export function wireChartCardPaintBoundaryHooks(
  next: ChartCardPaintBoundaryHooks,
): void {
  Object.assign(ccpH, next);
}
