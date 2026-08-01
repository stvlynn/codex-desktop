// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-128: formula-date-add-months hooks.

export type FormulaDateAddMonthsHooks = {
  fn930: (...args: any[]) => any;
  fn931: (...args: any[]) => any;
};

export const fdamH: FormulaDateAddMonthsHooks = {} as FormulaDateAddMonthsHooks;

export function wireFormulaDateAddMonthsBoundaryHooks(
  next: FormulaDateAddMonthsHooks,
): void {
  Object.assign(fdamH, next);
}
