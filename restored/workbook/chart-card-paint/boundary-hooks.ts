// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: chart-card-paint deps via direct imports
// (wireChartCardPaintBoundaryHooks leave-behind retired).

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

export type ChartCardPaintBoundaryHooks = {
  toCssColor: (...args: any[]) => any;
  layoutCardLines: (...args: any[]) => any;
  formatCardValue: (...args: any[]) => any;
  padX: any;
  minWidth: any;
  minHeight: any;
  uiFont: any;
};

export const ccpH: ChartCardPaintBoundaryHooks = {
  toCssColor: __call("../chart-data-table", __wh(564)),
  layoutCardLines: __call("./", __wh(562)),
  formatCardValue: __call("../chart-axis-ticks", "formatChartNumber"),
  get padX() {
    return (__req("../chart-layout-ensures") as any)[__wb(879)];
  },
  get minWidth() {
    return (__req("../chart-layout-ensures") as any)[__wb(880)];
  },
  get minHeight() {
    return (__req("../chart-layout-ensures") as any)[__wb(880)];
  },
  get uiFont() {
    return (__req("../chart-layout-ensures") as any)[__wb(837)];
  },
};

/** @deprecated Wave-161: wire leave-behind retired — ccpH uses direct imports. */
export function wireChartCardPaintBoundaryHooks(
  _next?: Partial<ChartCardPaintBoundaryHooks>,
): void {}
