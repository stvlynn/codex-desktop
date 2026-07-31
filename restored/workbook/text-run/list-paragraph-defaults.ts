// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-29: bullet/numbered list paragraph defaults (legacy Binding604–612).

/** Legacy Binding604. */
export const DEFAULT_BULLET_CHARACTER = "•";
/** Legacy Binding605 — presentation bullet marginLeft (EMU). */
export const PRESENTATION_LIST_MARGIN_LEFT = 285750;
/** Legacy Binding606 — presentation bullet indent (EMU). */
export const PRESENTATION_LIST_INDENT = -285750;
/** Legacy Binding607 — presentation numbered marginLeft (EMU). */
export const PRESENTATION_NUMBERED_MARGIN_LEFT = 342900;
/** Legacy Binding608 — presentation numbered indent (EMU). */
export const PRESENTATION_NUMBERED_INDENT = -342900;
/** Legacy Binding609. */
export const DEFAULT_AUTO_NUMBER_TYPE = "arabicPeriod";
/** Legacy Binding610 — document bullet marginLeft. */
export const DOCUMENT_LIST_MARGIN_LEFT = 720;
/** Legacy $b — document bullet indent. */
export const DOCUMENT_LIST_INDENT = -360;
/** Legacy Binding611 — document numbered marginLeft. */
export const DOCUMENT_NUMBERED_MARGIN_LEFT = 720;
/** Legacy tx — document numbered indent. */
export const DOCUMENT_NUMBERED_INDENT = -360;

let listParagraphDefaultsReady = false;

/** Legacy Binding612 — list/numbered paragraph defaults are eager. */
export function ensureListParagraphDefaultsInit(): void {
  listParagraphDefaultsReady = true;
}
