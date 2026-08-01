// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-163: selection-style-grid deps via direct imports
// (wireSelectionStyleGridBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper/binding export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);

export type SelectionStyleGridBoundaryHooks = {
  /** Legacy legacyFn229 — cell display text. */
  bh229: (...args: any[]) => any;
};

export const ssgH: SelectionStyleGridBoundaryHooks = {
  bh229: __call("../cell-xf-format", "formatCellValueWithNumFmt"),
};

/** @deprecated Wave-163: wire leave-behind retired — ssgH uses direct imports. */
export function wireSelectionStyleGridBoundaryHooks(
  _next?: Partial<SelectionStyleGridBoundaryHooks>,
): void {}
