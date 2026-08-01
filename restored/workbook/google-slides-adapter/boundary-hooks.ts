// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-159: google-slides-adapter deps via direct imports
// (wireGoogleSlidesAdapterBoundaryHooks leave-behind retired).

import { workbookEt, of, workbookBinding410 } from "../emu-units";
import { Z$, X$ } from "../presentation-slide";
import { workbookBinding739, workbookBinding736 } from "../shape-element";
import { workbookBinding1389, workbookBinding1388 } from "../speaker-notes";

export type GoogleSlidesAdapterBoundaryHooks = {
  workbookEt: () => void;
  emuToPoints: (value: any) => number;
  getPtPerEmu: () => number;
  ensureZDollar: () => void;
  ensureShapeInit: () => void;
  ensureTextParagraphsInit: () => void;
  getShapeClass: () => any;
  getSlideClass: () => any;
  getNotesClass: () => any;
};

export const gsaH: GoogleSlidesAdapterBoundaryHooks = {
  workbookEt: () => {
    workbookEt();
  },
  emuToPoints: (value: any) => of(value),
  getPtPerEmu: () => workbookBinding410,
  ensureZDollar: () => {
    Z$();
  },
  ensureShapeInit: () => {
    workbookBinding739();
  },
  ensureTextParagraphsInit: () => {
    workbookBinding1389();
  },
  getShapeClass: () => workbookBinding736,
  getSlideClass: () => X$,
  getNotesClass: () => workbookBinding1388,
};

/** @deprecated Wave-159: wire leave-behind retired — gsaH uses direct imports. */
export function wireGoogleSlidesAdapterBoundaryHooks(
  _next?: Partial<GoogleSlidesAdapterBoundaryHooks>,
): void {}
