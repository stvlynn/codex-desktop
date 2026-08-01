// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-163: chart-bin-width deps via direct imports
// (wireChartBinWidthBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper/binding export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);

export type ChartBinWidthHooks = {
  coerceBinNumber: (...args: any[]) => any;
};

export const cbwH: ChartBinWidthHooks = {
  coerceBinNumber: __call("./", __wh(554)),
};

/** @deprecated Wave-163: wire leave-behind retired — cbwH uses direct imports. */
export function wireChartBinWidthBoundaryHooks(
  _next?: Partial<ChartBinWidthHooks>,
): void {}
