// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-116: presentation-element-fit boundary hooks.

export type PresentationElementFitBoundaryHooks = {
  /** EMU → CSS px (legacy of / workbookEt). */
  emuToPx: (...args: any[]) => any;
  /** Length unit enum (legacy Binding384). */
  lengthUnit: any;
};

export const pelH: PresentationElementFitBoundaryHooks =
  {} as PresentationElementFitBoundaryHooks;

export function wirePresentationElementFitBoundaryHooks(
  next: PresentationElementFitBoundaryHooks,
): void {
  Object.assign(pelH, next);
}
