// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: paint image decode Maps (legacy Nwe / Iwe / Binding1253–1255).
// Stage-3 wave-152. Fixes canvas-paint ensureNwe/ensureIwe collision with sheet-hidden nwe.

import { esmInit } from "../../runtime/rolldown-runtime";
import { initAddressMetrics } from "../../utils/spreadsheet-address-utils";
import { zge } from "../image-connector";

export let workbookBinding1253: Map<any, any> = new Map();
export let workbookBinding1254: Map<any, any> = new Map();
export let workbookBinding1255: Map<any, any> = new Map();

export const Nwe = esmInit(() => {
  zge();
  workbookBinding1253 = new Map();
});

export const Iwe = esmInit(() => {
  initAddressMetrics();
  Nwe();
  workbookBinding1254 = new Map();
  workbookBinding1255 = new Map();
});

export function ensurePaintImageDecodeMapsInit(): void {
  Iwe();
}
