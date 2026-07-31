// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-107: securities yield/price formula hooks.

export type FormulaSecuritiesBoundaryHooks = {
  fn846: (...args: any[]) => any;
  fn848: (...args: any[]) => any;
  fn849: (...args: any[]) => any;
  dayCount: (...args: any[]) => any;
  days360: (...args: any[]) => any;
  VALUE_ERROR: any;
  NUM_ERROR: any;
};

export const fsecH: FormulaSecuritiesBoundaryHooks =
  {} as FormulaSecuritiesBoundaryHooks;

export function wireFormulaSecuritiesBoundaryHooks(
  next: FormulaSecuritiesBoundaryHooks,
): void {
  Object.assign(fsecH, next);
}
