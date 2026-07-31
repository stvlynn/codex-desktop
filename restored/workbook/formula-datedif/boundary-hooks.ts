// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-108: formula-datedif boundary hooks.

export type FormulaDatedifBoundaryHooks = {
  coerceDate: (...args: any[]) => any;
  yearFrac: (...args: any[]) => any;
  dateDiffDays: (...args: any[]) => any;
};

export const fdifH: FormulaDatedifBoundaryHooks =
  {} as FormulaDatedifBoundaryHooks;

export function wireFormulaDatedifBoundaryHooks(
  next: FormulaDatedifBoundaryHooks,
): void {
  Object.assign(fdifH, next);
}
