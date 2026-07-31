// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-108: formula-financial boundary hooks.

export type FormulaFinancialBoundaryHooks = {
  fn846: (...args: any[]) => any;
  fn849: (...args: any[]) => any;
  fn899: (...args: any[]) => any;
  fn901: (...args: any[]) => any;
  VALUE_ERROR: any;
  NUM_ERROR: any;
};

export const ffinH: FormulaFinancialBoundaryHooks =
  {} as FormulaFinancialBoundaryHooks;

export function wireFormulaFinancialBoundaryHooks(
  next: FormulaFinancialBoundaryHooks,
): void {
  Object.assign(ffinH, next);
}
