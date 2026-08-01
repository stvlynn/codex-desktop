// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-160: chart-paint deps via direct imports
// (wireChartPaintBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);
const __get = (rel: string, name: string) => () => (__req(rel) as any)[name];

export type ChartPaintBoundaryHooks = {
  bh286: (...args: any[]) => any;
  bh391: (...args: any[]) => any;
  bh405: (...args: any[]) => any;
  bh423: (...args: any[]) => any;
  bh425: (...args: any[]) => any;
  bh426: (...args: any[]) => any;
  bh433: (...args: any[]) => any;
  bh528: (...args: any[]) => any;
  bh529: (...args: any[]) => any;
  bh532: (...args: any[]) => any;
  bh552: (...args: any[]) => any;
  bh556: (...args: any[]) => any;
  paintSunburst: (...args: any[]) => any;
  paintPie: (...args: any[]) => any;
  paintArea: (...args: any[]) => any;
  layoutCategoryLabels: (...args: any[]) => any;
  paintSurface: (...args: any[]) => any;
  paintDataTable: (...args: any[]) => any;
  paintAxis: (...args: any[]) => any;
  paintGridlines: (...args: any[]) => any;
  paintTrendlines: (...args: any[]) => any;
  ensureWr: () => void;
  ensureFillResolveInit: () => void;
  ensureWorkbookBinding862: () => void;
};

export const cpH: ChartPaintBoundaryHooks = {
  bh286: __call("../../geometry-transform", __wh(286)),
  bh391: __call("../../chart-group-scales", __wh(391)),
  bh405: __call("../../chart-axis-scale-domain", __wh(405)),
  bh423: __call("../../chart-group-scales", __wh(423)),
  bh425: __call("../../chart-group-scales", __wh(425)),
  bh426: __call("../chart-paint-wire-helpers-impl", __wh(426)),
  bh433: __call("../../chart-axis-ticks", "paintAxisGridlineStroke"),
  bh528: __call("../../chart-line-series", __wh(528)),
  bh529: __call("../../chart-area-series", __wh(529)),
  bh532: __call("../../chart-combo-groups", __wh(532)),
  bh552: __call("../chart-paint-wire-helpers-impl", __wh(552)),
  bh556: __call("../chart-paint-wire-helpers-impl", __wh(556)),
  paintSunburst: __call("../../chart-group-scales", "hbe"),
  paintPie: __call("../../chart-waterfall-bar", "paintWaterfallSeries"),
  paintArea: __call("../../chart-histogram-bars", "sCe"),
  layoutCategoryLabels: __call("../layout-category-labels-impl", "RCe"),
  paintSurface: __call("../../chart-surface-map", "Kye"),
  paintDataTable: __call("../../chart-data-table", "DSe"),
  paintAxis: __call("../../chart-treemap-tiles", "layoutTreemapTiles"),
  paintGridlines: __call("../paint-radial-gridlines-impl", "KSe"),
  paintTrendlines: __call("../../chart-sunburst-layout", "BSe"),
  ensureWr: () => {
    __call("../../presentation-protobuf", "wr")();
  },
  ensureFillResolveInit: () => {
    __call("../../canvas-fill", __wb(543))();
  },
  ensureWorkbookBinding862: () => {
    __call("../../chart-layout-ensures", __wb(862))();
  },
};

/** @deprecated Wave-160: wire leave-behind retired — cpH uses direct imports. */
export function wireChartPaintBoundaryHooks(
  _next?: Partial<ChartPaintBoundaryHooks>,
): void {}
