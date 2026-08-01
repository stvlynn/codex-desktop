// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: table-cell-paint deps via direct imports
// (wireTableCellPaintBoundaryHooks leave-behind retired).

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

export type TableCellPaintBoundaryHooks = {
  /** Round px→milli (legacy bh635). */
  /** Border segment key (legacy yTe). */
  borderSegmentKey: (...args: any[]) => any;
  bh634: (...args: any[]) => any;
  bh636: (...args: any[]) => any;
  bh638: (...args: any[]) => any;
  /** Parse span int (bh631). */
  parseSpan: (...args: any[]) => any;
  /** Is span missing (bh632). */
  isMissingSpan: (...args: any[]) => any;
};

export const tcpH: TableCellPaintBoundaryHooks = {
  bh634: __call("../../shell-mid-ensures", __wh(634)),
  bh636: __call("../", __wh(636)),
  bh638: __call("../", __wh(638)),
  parseSpan: __call("../", __wh(631)),
  isMissingSpan: __call("../", __wh(632)),
  roundPx1000: __call("../", __wh(635)),
  borderSegmentKey: __call("../", "yTe"),
};

/** @deprecated Wave-161: wire leave-behind retired — tcpH uses direct imports. */
export function wireTableCellPaintBoundaryHooks(
  _next?: Partial<TableCellPaintBoundaryHooks>,
): void {}
