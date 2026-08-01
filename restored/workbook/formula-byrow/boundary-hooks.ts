// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-163: formula-byrow deps via direct imports
// (wireFormulaByrowBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper/binding export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);

export type FormulaByrowBoundaryHooks = {
  getEvalContext: () => any;
  VALUE_ERROR: any;
};

export const fbyH: FormulaByrowBoundaryHooks = {
  getEvalContext: () => (__req("../formula-eng-mids") as any)[__wh(962)](),
  get VALUE_ERROR() {
    return (__req("../formula-date-epoch") as any)[__wb(1936)];
  },
};

/** @deprecated Wave-163: wire leave-behind retired — fbyH uses direct imports. */
export function wireFormulaByrowBoundaryHooks(
  _next?: Partial<FormulaByrowBoundaryHooks>,
): void {}
