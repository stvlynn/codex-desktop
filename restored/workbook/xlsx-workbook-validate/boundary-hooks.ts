// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-116: xlsx-workbook-validate boundary hooks.

export type XlsxWorkbookValidateBoundaryHooks = {
  parseA1Range: (...args: any[]) => any;
  boundsIntersect: (...args: any[]) => any;
  boundsSize: (...args: any[]) => any;
  initAddressUtils: () => void;
};

export const xwvH: XlsxWorkbookValidateBoundaryHooks =
  {} as XlsxWorkbookValidateBoundaryHooks;

export function wireXlsxWorkbookValidateBoundaryHooks(
  next: XlsxWorkbookValidateBoundaryHooks,
): void {
  Object.assign(xwvH, next);
}
