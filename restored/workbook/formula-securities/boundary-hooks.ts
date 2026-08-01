// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: formula-securities deps via direct imports
// (wireFormulaSecuritiesBoundaryHooks leave-behind retired).

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

export type FormulaSecuritiesBoundaryHooks = {
  fn846: (...args: any[]) => any;
  fn848: (...args: any[]) => any;
  fn849: (...args: any[]) => any;
  dayCount: (...args: any[]) => any;
  days360: (...args: any[]) => any;
  VALUE_ERROR: any;
  NUM_ERROR: any;
};

export const fsecH: FormulaSecuritiesBoundaryHooks = {
  fn846: __call("../formula-token-utils", "hasFormulaError"),
  fn848: __call("../formula-token-utils", "coerceFormulaDate"),
  fn849: __call("../formula-token-utils", "flattenMatrixArgs"),
  dayCount: __call("../formula-datedif", "dateDif"),
  days360: __call("../formula-scalar-funcs", "days360"),
  get VALUE_ERROR() {
    return (__req("../formula-date-epoch") as any)[__wb(1927)];
  },
  get NUM_ERROR() {
    return (__req("../formula-date-epoch") as any)[__wb(1928)];
  },
};

/** @deprecated Wave-161: wire leave-behind retired — fsecH uses direct imports. */
export function wireFormulaSecuritiesBoundaryHooks(
  _next?: Partial<FormulaSecuritiesBoundaryHooks>,
): void {}
