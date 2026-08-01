// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic helpers: styleRefs Yjs map key + sheet style-map accessor.
// Stage-3 wave-144.

import { workbookBinding822 } from "../schema-meta";

export function qve(sheetId: any): string {
  return `sheet:${sheetId}:styleRefs`;
}

export function getWorkbookStyleRefsMap(doc: any): any {
  return doc.getMap(workbookBinding822);
}

export const workbookHelper377 = getWorkbookStyleRefsMap;
export const styleRefsMapKey = qve;
