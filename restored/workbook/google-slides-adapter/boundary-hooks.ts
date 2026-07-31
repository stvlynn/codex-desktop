// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-71: boundary deps for google-slides-adapter (oJe/pJe/SJe).

export type GoogleSlidesAdapterBoundaryHooks = {
  /** Intentional leave-behind ensure (gae/workbookEt — also seeds of/Binding410). */
  workbookEt: () => void;
  /** EMU→points helper from workbookEt (legacy `of`). */
  emuToPoints: (value: any) => number;
  /** Points-per-EMU factor (legacy workbookBinding410). */
  getPtPerEmu: () => number;
  /** Boundary mega-ensure Z$ (compose/layout/Cke cluster — seeds X$). */
  ensureZDollar: () => void;
  /** Shape element ensure (legacy Binding739 — seeds Binding736). */
  ensureShapeInit: () => void;
  /** Text paragraphs ensure (legacy Binding1389 — seeds Binding1388). */
  ensureTextParagraphsInit: () => void;
  /** Shape element class (legacy Binding736). */
  getShapeClass: () => any;
  /** Slide class (legacy X$ from Z$). */
  getSlideClass: () => any;
  /** Notes/paragraphs class (legacy Binding1388). */
  getNotesClass: () => any;
};

/** Live bag for intentional leave-behinds / late boundary ensures. */
export const gsaH: GoogleSlidesAdapterBoundaryHooks =
  {} as GoogleSlidesAdapterBoundaryHooks;

export function wireGoogleSlidesAdapterBoundaryHooks(
  next: GoogleSlidesAdapterBoundaryHooks,
): void {
  gsaH.workbookEt = next.workbookEt;
  gsaH.emuToPoints = next.emuToPoints;
  gsaH.getPtPerEmu = next.getPtPerEmu;
  gsaH.ensureZDollar = next.ensureZDollar;
  gsaH.ensureShapeInit = next.ensureShapeInit;
  gsaH.ensureTextParagraphsInit = next.ensureTextParagraphsInit;
  gsaH.getShapeClass = next.getShapeClass;
  gsaH.getSlideClass = next.getSlideClass;
  gsaH.getNotesClass = next.getNotesClass;
}
