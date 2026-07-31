// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-101/104: formula-irr boundary hooks.

export type FormulaIrrBoundaryHooks = {
  fn841: (...args: any[]) => any;
  fn846: (...args: any[]) => any;
  fn849: (...args: any[]) => any;
  fn850: (...args: any[]) => any;
  fn854: (...args: any[]) => any;
  /** Coerce date serials (uZe). */
  coerceDates: (...args: any[]) => any;
  /** Day difference (helper878). */
  dayDiff: (...args: any[]) => any;
};

export const irrH: FormulaIrrBoundaryHooks = {} as FormulaIrrBoundaryHooks;

export function wireFormulaIrrBoundaryHooks(
  next: FormulaIrrBoundaryHooks,
): void {
  Object.assign(irrH, next);
}
