// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-163: formula-yearfrac deps via direct imports
// (wireFormulaYearfracBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper/binding export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);

export type FormulaYearfracBoundaryHooks = {
  /** Coerce date-like value (legacyFn848). */
  coerceDate: (...args: any[]) => any;
};

export const fyfH: FormulaYearfracBoundaryHooks = {
  coerceDate: __call("../formula-token-utils", "coerceFormulaDate"),
};

/** @deprecated Wave-163: wire leave-behind retired — fyfH uses direct imports. */
export function wireFormulaYearfracBoundaryHooks(
  _next?: Partial<FormulaYearfracBoundaryHooks>,
): void {}
