// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-97: selection-style-grid boundary hooks.

export type SelectionStyleGridBoundaryHooks = {
  /** Legacy helper229 — cell display text. */
  bh229: (...args: any[]) => any;
};

export const ssgH: SelectionStyleGridBoundaryHooks =
  {} as SelectionStyleGridBoundaryHooks;

export function wireSelectionStyleGridBoundaryHooks(
  next: SelectionStyleGridBoundaryHooks,
): void {
  Object.assign(ssgH, next);
}
