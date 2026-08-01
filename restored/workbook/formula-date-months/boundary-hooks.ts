// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-128: formula-date-months hooks.

export type FormulaDateMonthsHooks = {
  fn930: (...args: any[]) => any;
  fn931: (...args: any[]) => any;
  fn932: (...args: any[]) => any;
  fn936: (...args: any[]) => any;
  A9e: (...args: any[]) => any;
};

export const fdmH: FormulaDateMonthsHooks = {} as FormulaDateMonthsHooks;

export function wireFormulaDateMonthsBoundaryHooks(
  next: FormulaDateMonthsHooks,
): void {
  Object.assign(fdmH, next);
}
