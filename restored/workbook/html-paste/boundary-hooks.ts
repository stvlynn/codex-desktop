// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-101: html-paste boundary hooks.

export type HtmlPasteBoundaryHooks = {
  /** Parse HTML table into rows/merges (legacy Jpt). */
  parseHtmlTable: (...args: any[]) => any;
  /** Resolve paste selection rect (legacy Tmt). */
  resolvePasteTarget: (...args: any[]) => any;
  /** Rect → A1 range string (legacy Emt). */
  rectToA1: (...args: any[]) => any;
  /** Apply cell value/format from HTML cell (legacy Dmt). */
  applyHtmlCell: (...args: any[]) => any;
};

export const htmH: HtmlPasteBoundaryHooks = {} as HtmlPasteBoundaryHooks;

export function wireHtmlPasteBoundaryHooks(
  next: HtmlPasteBoundaryHooks,
): void {
  Object.assign(htmH, next);
}
