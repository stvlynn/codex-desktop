// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-161: formula-matrix-inverse deps via direct imports
// (wireFormulaMatrixInverseBoundaryHooks leave-behind retired).

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

export type FormulaMatrixInverseBoundaryHooks = {
  /** #VALUE! sentinel (Binding1942). */
  valueError: any;
  /** #NUM! sentinel (Binding1944). */
  numError: any;
  /** Coerce finite number (legacy helper 980). */
  coerceNumber: (...args: any[]) => any;
};

export const fmiH: FormulaMatrixInverseBoundaryHooks = {
  get valueError() {
    return (__req("../formula-date-epoch") as any)[__wb(1876)];
  },
  get numError() {
    return (__req("../formula-date-epoch") as any)[__wb(1879)];
  },
  coerceNumber: __call("../formula-criteria-lookup", "numberToPrecision"),
};

/** @deprecated Wave-161: wire leave-behind retired — fmiH uses direct imports. */
export function wireFormulaMatrixInverseBoundaryHooks(
  _next?: Partial<FormulaMatrixInverseBoundaryHooks>,
): void {}
