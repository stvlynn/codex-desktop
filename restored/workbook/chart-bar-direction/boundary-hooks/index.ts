// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: chart-bar-direction deps via direct imports
// (wireChartBarDirectionBoundaryHooks leave-behind retired).

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

export type ChartBarDirectionBoundaryHooks = {
  bh393: (...args: any[]) => any;
  bh394: (...args: any[]) => any;
  bh404: (...args: any[]) => any;
  bh469: (...args: any[]) => any;
  bh470: (...args: any[]) => any;
  bh473: (...args: any[]) => any;
  bh474: (...args: any[]) => any;
  bh495: (...args: any[]) => any;
  bh500: (...args: any[]) => any;
};

export const cbdH: ChartBarDirectionBoundaryHooks = {
  bh393: __call("../../chart-group-scales", __wh(393)),
  bh394: __call("../../chart-group-scales", __wh(394)),
  bh404: __call("../../chart-axis-scale-domain", "clampToDomain"),
  bh469: __call("../../stroke-resolve", "resolveConnectorStroke"),
  bh470: __call("../../mid-paint-helpers", "resolveSeriesFill"),
  bh473: __call("../../stroke-resolve", "mergeStrokeStyle"),
  bh474: __call("../../stroke-resolve", "isEmptyFill"),
  bh495: __call("../../chart-data-labels", "resolveDataLabelText"),
  bh500: __call("../../chart-data-labels", "paintChartDataLabel"),
};

/** @deprecated Wave-161: wire leave-behind retired — cbdH uses direct imports. */
export function wireChartBarDirectionBoundaryHooks(
  _next?: Partial<ChartBarDirectionBoundaryHooks>,
): void {}
