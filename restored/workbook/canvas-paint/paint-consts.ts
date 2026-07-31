// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-66: paint constants (legacy Binding1822–1824).

import { esmInit } from "../../runtime/rolldown-runtime";
import { initAddressMetrics } from "../../utils/spreadsheet-address-utils";
import {
  ensureQCe,
  ensureDollarCe,
  ensureNwe,
  ensureSpreadsheetVn,
  ensureWorkbookBinding583,
  ensureWorkbookBinding1238,
  ensureWorkbookZ,
  ensureQt,
  ensureWr,
  ensureIwe,
  ensureCwe,
  ensureWwe,
  ensureTwe,
  ensureEwe,
  ensureWorkbookBinding586,
  ensureWorkbookBinding1252,
  ensureWorkbookBinding588,
  ensureWorkbookBinding587,
} from "./boundary-hooks";
import {
  ensurePaintEmuMapsInit,
  ensurePaintThemeInit,
  ensurePaintDummyInit,
} from "./paint-helpers-impl";

export let PAINT_FONT_SCALE: any;
export let PAINT_MAX_SCROLL: any;
export let PAINT_MAX_EXTENT: any;
export let PAINT_ACCENT_DEFAULT: any;
export let paintWeakMap: any;
export let PAINT_INDEXED_COLORS: any;
export const ensureCanvasPaintConstsInit = esmInit(() => {
  ensureQCe();
  ensureDollarCe();
  initAddressMetrics();
  ensureNwe();
  ensureSpreadsheetVn();
  ensureWorkbookBinding583();
  ensureWorkbookBinding1238();
  ensureWorkbookZ();
  ensureQt();
  ensureWr();
  ensureIwe();
  ensureCwe();
  ensureWwe();
  ensureTwe();
  ensureEwe();
  ensureWorkbookBinding586();
  ensureWorkbookBinding1252();
  ensureIwe();
  ensurePaintEmuMapsInit();
  ensureWorkbookBinding588();
  ensurePaintThemeInit();
  ensurePaintDummyInit();
  ensureWorkbookBinding587();
  PAINT_FONT_SCALE = 1;
  PAINT_MAX_SCROLL = 1e6;
  PAINT_MAX_EXTENT = 12e3;
  PAINT_ACCENT_DEFAULT = "#60A5FA";
  paintWeakMap = new WeakMap();
  PAINT_INDEXED_COLORS = {
    BLACK: 0,
    WHITE: 1,
    RED: 2,
    GREEN: 3,
    BLUE: 4,
    YELLOW: 5,
    MAGENTA: 6,
    CYAN: 7,
  };
});
