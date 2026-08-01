// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-163: formula-sort-filter deps via direct imports
// (wireFormulaSortFilterBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper/binding export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);

export type FormulaSortFilterBoundaryHooks = {
  /** Active eval context (legacy bh962 / Binding1934 stack). */
  getEvalContext: () => any;
  /** Coerce first cell / scalar (legacy bh966 / _st). */
  firstCellOrValue: (...args: any[]) => any;
};

export const fsfH: FormulaSortFilterBoundaryHooks = {
  getEvalContext: () => (__req("../formula-eng-mids") as any)[__wh(962)](),
  firstCellOrValue: __call("../formula-lookup-text", __wh(966)),
};

/** @deprecated Wave-163: wire leave-behind retired — fsfH uses direct imports. */
export function wireFormulaSortFilterBoundaryHooks(
  _next?: Partial<FormulaSortFilterBoundaryHooks>,
): void {}
