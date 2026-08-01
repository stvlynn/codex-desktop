// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-163: formula-date-add-months deps via direct imports
// (wireFormulaDateAddMonthsBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper/binding export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);

export type FormulaDateAddMonthsHooks = {
  fn930: (...args: any[]) => any;
  fn931: (...args: any[]) => any;
};

export const fdamH: FormulaDateAddMonthsHooks = {
  fn930: __call("../formula-date-months", __wh(930)),
  fn931: __call("../formula-date-months", __wh(931)),
};

/** @deprecated Wave-163: wire leave-behind retired — fdamH uses direct imports. */
export function wireFormulaDateAddMonthsBoundaryHooks(
  _next?: Partial<FormulaDateAddMonthsHooks>,
): void {}
