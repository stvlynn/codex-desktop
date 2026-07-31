// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-101/104: html-paste boundary hooks.

export type HtmlPasteBoundaryHooks = {
  /** Resolve paste selection rect (legacy Tmt). */
  resolvePasteTarget: (...args: any[]) => any;
  /** Rect → A1 range string (legacy Emt). */
  rectToA1: (...args: any[]) => any;
  /** HTML parser module (Binding1956). */
  htmlParser: any;
  /** Find table root (tmt). */
  findTableRoot: (...args: any[]) => any;
  /** Normalize text cell (emt). */
  normalizeTextCell: (...args: any[]) => any;
  /** Parse table rows (helper1009). */
  parseTableRows: (...args: any[]) => any;
  /** Iterate table rows (Ypt). */
  eachTableRow: (...args: any[]) => any;
  /** Iterate row cells (Xpt). */
  eachRowCell: (...args: any[]) => any;
  /** Build cell value (Qpt). */
  buildHtmlCell: (...args: any[]) => any;
  /** Merge cell maps (omt). */
  mergeCellMaps: (...args: any[]) => any;
  /** Parse span attr (bmt). */
  parseSpanAttr: (...args: any[]) => any;
  /** Column width from col (Zpt). */
  colWidthPx: (...args: any[]) => any;
};

export const htmH: HtmlPasteBoundaryHooks = {} as HtmlPasteBoundaryHooks;

export function wireHtmlPasteBoundaryHooks(next: HtmlPasteBoundaryHooks): void {
  Object.assign(htmH, next);
}
