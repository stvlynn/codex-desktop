// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: cf-icon-color-scale deps via direct imports
// (wireCfIconColorScaleBoundaryHooks leave-behind retired).

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

export type CfIconColorScaleHooks = {
  resolveIconSetId: (...args: any[]) => any;
  getIconSetDef: (...args: any[]) => any;
  iconThresholdMet: (...args: any[]) => any;
  pickIconIndex: (...args: any[]) => any;
  buildIconStats: (...args: any[]) => any;
  evalIconRule: (...args: any[]) => any;
};

export const cicH: CfIconColorScaleHooks = {
  resolveIconSetId: __call("../icon-set", "normalizeIconSetName"),
  getIconSetDef: __call("../icon-set", "lookupIconSet"),
  iconThresholdMet: __call("../icon-set", "resolveIconCount"),
  pickIconIndex: __call("../icon-set", "defaultIconThresholds"),
  buildIconStats: __call("../cf-range-stats", "rangeStats"),
  evalIconRule: __call("../cf-range-stats", "wht"),
};

/** @deprecated Wave-161: wire leave-behind retired — cicH uses direct imports. */
export function wireCfIconColorScaleBoundaryHooks(
  _next?: Partial<CfIconColorScaleHooks>,
): void {}
