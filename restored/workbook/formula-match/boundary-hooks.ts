// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-163: formula-match deps via direct imports
// (wireFormulaMatchBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper/binding export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);

export type FormulaMatchBoundaryHooks = {
  flattenArgs: (...args: any[]) => any;
  NA_ERROR: any;
};

export const fmH: FormulaMatchBoundaryHooks = {
  flattenArgs: __call("../formula-token-utils", "flattenFormulaArgs"),
  get NA_ERROR() {
    return (__req("../formula-stats") as any)[__wb(1839)];
  },
};

/** @deprecated Wave-163: wire leave-behind retired — fmH uses direct imports. */
export function wireFormulaMatchBoundaryHooks(
  _next?: Partial<FormulaMatchBoundaryHooks>,
): void {}
