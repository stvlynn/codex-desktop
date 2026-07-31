// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-89: chart-paint boundary hooks
// (chart helper leave-behinds + PCe ensure fan-out).

export type ChartPaintBoundaryHooks = {
  bh286: (...args: any[]) => any;
  bh391: (...args: any[]) => any;
  bh405: (...args: any[]) => any;
  bh423: (...args: any[]) => any;
  bh425: (...args: any[]) => any;
  bh426: (...args: any[]) => any;
  bh433: (...args: any[]) => any;
  bh462: (...args: any[]) => any;
  bh491: (...args: any[]) => any;
  bh496: (...args: any[]) => any;
  bh501: (...args: any[]) => any;
  bh525: (...args: any[]) => any;
  bh528: (...args: any[]) => any;
  bh529: (...args: any[]) => any;
  bh532: (...args: any[]) => any;
  bh540: (...args: any[]) => any;
  bh552: (...args: any[]) => any;
  bh555: (...args: any[]) => any;
  bh556: (...args: any[]) => any;
  bh561: (...args: any[]) => any;
  bh570: (...args: any[]) => any;
  bh576: (...args: any[]) => any;
  layoutLegendPlot: (...args: any[]) => any;
  paintTreemap: (...args: any[]) => any;
  paintSunburst: (...args: any[]) => any;
  paintRadar: (...args: any[]) => any;
  paintFunnel: (...args: any[]) => any;
  paintBoxWhisker: (...args: any[]) => any;
  paintHistogram: (...args: any[]) => any;
  paintWaterfall: (...args: any[]) => any;
  paintCombo: (...args: any[]) => any;
  paintScatter: (...args: any[]) => any;
  paintPie: (...args: any[]) => any;
  paintDoughnut: (...args: any[]) => any;
  paintArea: (...args: any[]) => any;
  paintBar: (...args: any[]) => any;
  paintLine: (...args: any[]) => any;
  paintMap: (...args: any[]) => any;
  layoutCategoryLabels: (...args: any[]) => any;
  paintBar3d: (...args: any[]) => any;
  paintSurface: (...args: any[]) => any;
  paintDataTable: (...args: any[]) => any;
  paintAxis: (...args: any[]) => any;
  paintGridlines: (...args: any[]) => any;
  paintTrendlines: (...args: any[]) => any;
  ensureWr: () => void;
  ensureFillResolveInit: () => void;
  ensureWorkbookBinding862: () => void;
};

/** Live bag — wired from workbook-runtime after peel. */
export const cpH: ChartPaintBoundaryHooks = {} as ChartPaintBoundaryHooks;

export function wireChartPaintBoundaryHooks(
  next: ChartPaintBoundaryHooks,
): void {
  Object.assign(cpH, next);
}
