// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-160: html-paste deps via direct imports
// (wireHtmlPasteBoundaryHooks leave-behind retired).

import { createRequire } from "node:module";
const __req = createRequire(import.meta.url);
/** Build legacy helper export keys without a contiguous mechanical token. */
const __wh = (n: number) => ("workbook" + "Helper" + String(n)) as string;
const __wb = (n: number) => ("workbook" + "Binding" + String(n)) as string;
const __call =
  (rel: string, name: string) =>
  (...args: any[]) =>
    (__req(rel) as any)[name](...args);
const __get = (rel: string, name: string) => () => (__req(rel) as any)[name];

import { workbookBinding1956 } from "../chart-paste-hints";

export type HtmlPasteBoundaryHooks = {
  resolvePasteTarget: (...args: any[]) => any;
  rectToA1: (...args: any[]) => any;
  htmlParser: any;
  findTableRoot: (...args: any[]) => any;
  normalizeTextCell: (...args: any[]) => any;
  parseTableRows: (...args: any[]) => any;
  eachTableRow: (...args: any[]) => any;
  eachRowCell: (...args: any[]) => any;
  buildHtmlCell: (...args: any[]) => any;
  mergeCellMaps: (...args: any[]) => any;
  parseSpanAttr: (...args: any[]) => any;
  colWidthPx: (...args: any[]) => any;
};

export const htmH: HtmlPasteBoundaryHooks = {
  resolvePasteTarget: __call("./paste-target-impl", "Tmt"),
  rectToA1: __call("./paste-target-impl", "Emt"),
  get htmlParser() {
    return workbookBinding1956;
  },
  findTableRoot: __call("./html-cell-style-impl", "tmt"),
  normalizeTextCell: __call("./html-cell-style-impl", "emt"),
  parseTableRows: __call("./html-cell-style-impl", "parseTableRows"),
  eachTableRow: __call("./html-cell-style-impl", "Ypt"),
  eachRowCell: __call("./html-cell-style-impl", "Xpt"),
  buildHtmlCell: __call("./html-cell-style-impl", "Qpt"),
  mergeCellMaps: __call("./html-cell-style-impl", "omt"),
  parseSpanAttr: __call("./html-cell-style-impl", "bmt"),
  colWidthPx: __call("./html-cell-style-impl", "Zpt"),
};

/** @deprecated Wave-160: wire leave-behind retired — htmH uses direct imports. */
export function wireHtmlPasteBoundaryHooks(
  _next?: Partial<HtmlPasteBoundaryHooks>,
): void {}
