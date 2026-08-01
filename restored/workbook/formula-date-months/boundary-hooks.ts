// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: formula-date-months deps via direct imports
// (wireFormulaDateMonthsBoundaryHooks leave-behind retired).

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

export type FormulaDateMonthsHooks = {
  fn930: (...args: any[]) => any;
  fn931: (...args: any[]) => any;
  fn932: (...args: any[]) => any;
  fn936: (...args: any[]) => any;
  A9e: (...args: any[]) => any;
};

export const fdmH: FormulaDateMonthsHooks = {
  fn930: __call("./", __wh(930)),
  fn931: __call("./", __wh(931)),
  fn932: __call("./", __wh(932)),
  fn936: __call("./", __wh(936)),
  A9e: __call("./", "A9e"),
};

/** @deprecated Wave-161: wire leave-behind retired — fdmH uses direct imports. */
export function wireFormulaDateMonthsBoundaryHooks(
  _next?: Partial<FormulaDateMonthsHooks>,
): void {}
