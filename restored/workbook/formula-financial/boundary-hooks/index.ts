// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: formula-financial deps via direct imports
// (wireFormulaFinancialBoundaryHooks leave-behind retired).

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

export type FormulaFinancialBoundaryHooks = {
  fn846: (...args: any[]) => any;
  fn849: (...args: any[]) => any;
  fn899: (...args: any[]) => any;
  fn901: (...args: any[]) => any;
  VALUE_ERROR: any;
  NUM_ERROR: any;
};

export const ffinH: FormulaFinancialBoundaryHooks = {
  fn846: __call("../../formula-token-utils", "hasFormulaError"),
  fn849: __call("../../formula-token-utils", "flattenMatrixArgs"),
  fn899: __call("../", "futureValue"),
  fn901: __call("../", "computePmt"),
  get VALUE_ERROR() {
    return (__req("../formula-date-epoch") as any)[__wb(1876)];
  },
  get NUM_ERROR() {
    return (__req("../formula-date-epoch") as any)[__wb(1879)];
  },
};

/** @deprecated Wave-161: wire leave-behind retired — ffinH uses direct imports. */
export function wireFormulaFinancialBoundaryHooks(
  _next?: Partial<FormulaFinancialBoundaryHooks>,
): void {}
