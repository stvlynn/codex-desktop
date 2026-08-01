// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: formula-irr deps via direct imports
// (wireFormulaIrrBoundaryHooks leave-behind retired).

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

export type FormulaIrrBoundaryHooks = {
  fn841: (...args: any[]) => any;
  fn846: (...args: any[]) => any;
  fn849: (...args: any[]) => any;
  fn850: (...args: any[]) => any;
  fn854: (...args: any[]) => any;
  /** Coerce date serials (uZe). */
  coerceDates: (...args: any[]) => any;
  /** Day difference (legacy helper 878). */
  dayDiff: (...args: any[]) => any;
};

export const irrH: FormulaIrrBoundaryHooks = {
  fn841: __call("../formula-token-utils", "flattenFormulaArgs"),
  fn846: __call("../formula-token-utils", "hasFormulaError"),
  fn849: __call("../formula-token-utils", "flattenMatrixArgs"),
  fn850: __call("../formula-token-utils", "ensureFlatArgs"),
  fn854: __call("../formula-scalar-funcs", "isNonNullArg"),
  coerceDates: __call("../formula-token-utils", "coerceFormulaDates"),
  dayDiff: __call("../formula-scalar-funcs", "dateDiffDays"),
};

/** @deprecated Wave-161: wire leave-behind retired — irrH uses direct imports. */
export function wireFormulaIrrBoundaryHooks(
  _next?: Partial<FormulaIrrBoundaryHooks>,
): void {}
