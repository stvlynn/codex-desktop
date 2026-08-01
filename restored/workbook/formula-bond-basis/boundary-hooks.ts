// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-121: bond/settlement formula hooks (Binding1896 / Binding1927–1932).

export type FormulaBondBasisBoundaryHooks = {
  /** Legacy workbookBinding1896 — day-count between settlement dates. */
  dayCount: (...args: any[]) => any;
  VALUE_ERROR: any;
  NUM_ERROR: any;
  /** Excel epoch Date.UTC(1899, 11, 30). */
  EPOCH_UTC_MS: number;
  DAY_MS: number;
  DEFAULT_BASIS: string;
  BASIS_MAP: Record<number, string>;
};

export const fbbH: FormulaBondBasisBoundaryHooks =
  {} as FormulaBondBasisBoundaryHooks;

export function wireFormulaBondBasisBoundaryHooks(
  next: FormulaBondBasisBoundaryHooks,
): void {
  Object.assign(fbbH, next);
}
