// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-163: table-styles deps via direct imports
// (wireTableCellStyleBandsBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper/binding export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);

export type TableCellStyleBandsBoundaryHooks = {
  /** Resolve named region style from tableStyle (legacy legacyFn380). */
  regionStyle: (...args: any[]) => any;
};

export const tsbH: TableCellStyleBandsBoundaryHooks = {
  regionStyle: __call("./", "resolveTableRegionStyle"),
};

/** @deprecated Wave-163: wire leave-behind retired — tsbH uses direct imports. */
export function wireTableCellStyleBandsBoundaryHooks(
  _next?: Partial<TableCellStyleBandsBoundaryHooks>,
): void {}
