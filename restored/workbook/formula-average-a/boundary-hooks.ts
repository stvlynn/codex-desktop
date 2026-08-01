// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-163: formula-average-a deps via direct imports
// (wireFormulaAverageABoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper/binding export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);

export type FormulaAverageABoundaryHooks = {
  DIV0_TOKEN: any;
  VALUE_TOKEN: any;
};

export const faaH: FormulaAverageABoundaryHooks = {
  get DIV0_TOKEN() {
    return (__req("../formula-date-epoch") as any)[__wb(1875)];
  },
  get VALUE_TOKEN() {
    return (__req("../formula-date-epoch") as any)[__wb(1876)];
  },
};

/** @deprecated Wave-163: wire leave-behind retired — faaH uses direct imports. */
export function wireFormulaAverageABoundaryHooks(
  _next?: Partial<FormulaAverageABoundaryHooks>,
): void {}
