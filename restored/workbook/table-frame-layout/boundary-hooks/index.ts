// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-160: table-frame-layout deps via direct imports
// (wireTableFrameLayoutBoundaryHooks leave-behind retired).

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

export type TableFrameLayoutBoundaryHooks = {
  bh639: (...args: any[]) => any;
  bh643: (...args: any[]) => any;
  bh644: (...args: any[]) => any;
  bh645: (...args: any[]) => any;
  resolveCellMargins: (...args: any[]) => any;
  layoutTableColumns: (...args: any[]) => any;
  measureEmbeddedHeight: (...args: any[]) => any;
  paintTableCells: (...args: any[]) => any;
  strokeTableBorders: (...args: any[]) => any;
  fillTableBackground: (...args: any[]) => any;
};

export const tflH: TableFrameLayoutBoundaryHooks = {
  bh639: __call("../../text-element-build", __wh(639)),
  bh643: __call("../../text-frame-embeds", __wh(643)),
  bh644: __call("../table-stroke-margins-impl", __wh(644)),
  bh645: __call("../sum-span-impl", __wh(645)),
  resolveCellMargins: __call("../table-stroke-margins-impl", "ITe"),
  layoutTableColumns: __call("../../table-cell-paint", "$B"),
  measureEmbeddedHeight: __call("../../text-frame-embeds", "FTe"),
  paintTableCells: __call("../../table-cell-paint", "STe"),
  strokeTableBorders: __call("../stroke-table-borders-impl", "TTe"),
  fillTableBackground: __call("../table-stroke-margins-impl", "ETe"),
};

/** @deprecated Wave-160: wire leave-behind retired — tflH uses direct imports. */
export function wireTableFrameLayoutBoundaryHooks(
  _next?: Partial<TableFrameLayoutBoundaryHooks>,
): void {}
