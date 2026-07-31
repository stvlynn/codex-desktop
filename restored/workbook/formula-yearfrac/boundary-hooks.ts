// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-103: formula-yearfrac boundary hooks.

export type FormulaYearfracBoundaryHooks = {
  /** Coerce date-like value (helper848). */
  coerceDate: (...args: any[]) => any;
};

export const fyfH: FormulaYearfracBoundaryHooks =
  {} as FormulaYearfracBoundaryHooks;

export function wireFormulaYearfracBoundaryHooks(
  next: FormulaYearfracBoundaryHooks,
): void {
  Object.assign(fyfH, next);
}
