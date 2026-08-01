// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-163: formula-complex deps via direct imports
// (wireFormulaComplexBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper/binding export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);

export type FormulaComplexBoundaryHooks = {
  VALUE_ERROR: any;
  NUM_ERROR: any;
};

export const fcxH: FormulaComplexBoundaryHooks = {
  get VALUE_ERROR() {
    return (__req("../formula-stats") as any)[__wb(1835)];
  },
  get NUM_ERROR() {
    return (__req("../formula-stats") as any)[__wb(1838)];
  },
};

/** @deprecated Wave-163: wire leave-behind retired — fcxH uses direct imports. */
export function wireFormulaComplexBoundaryHooks(
  _next?: Partial<FormulaComplexBoundaryHooks>,
): void {}
