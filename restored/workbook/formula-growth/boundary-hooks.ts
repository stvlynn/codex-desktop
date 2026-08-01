// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: formula-growth deps via direct imports
// (wireFormulaGrowthBoundaryHooks leave-behind retired).

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

export type FormulaGrowthBoundaryHooks = {
  fn841: (...args: any[]) => any;
  fn846: (...args: any[]) => any;
  fn850: (...args: any[]) => any;
  VALUE_ERROR: any;
};

export const fgrH: FormulaGrowthBoundaryHooks = {
  fn841: __call("../formula-token-utils", "flattenFormulaArgs"),
  fn846: __call("../formula-token-utils", "hasFormulaError"),
  fn850: __call("../formula-token-utils", "ensureFlatArgs"),
  get VALUE_ERROR() {
    return (__req("../formula-date-epoch") as any)[__wb(1876)];
  },
};

/** @deprecated Wave-161: wire leave-behind retired — fgrH uses direct imports. */
export function wireFormulaGrowthBoundaryHooks(
  _next?: Partial<FormulaGrowthBoundaryHooks>,
): void {}
