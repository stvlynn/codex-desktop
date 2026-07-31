// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-65: SXe cluster ensure (legacy Binding1827 / SXe).

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  initAddressMetrics,
  initAddressUtils,
} from "../../utils/spreadsheet-address-utils";
import { ensureStableIdConstantsInit } from "../stable-id";
import {
  ensureSpreadsheetVn,
  ensureWorkbookKt,
  ensureRangeClusterInit,
  ensureCme,
  ensureEme,
  ensureYhe,
  ensureXhe,
  ensureWorksheetDrawingsInit,
  ensureRve,
  ensureWorkbookF,
  ensureZve,
  ensureBve,
  ensureKve,
  ensureWpe,
  ensureBpe,
  ensureStyleRefsCollabInit,
  ensureAye,
  ensureSye,
  ensureGye,
  ensureDropdownPaddingInit,
  ensureCanvasPaintConstsInit,
} from "./boundary-hooks";
import {
  ensureSheetAutoHeightInit,
  ensureAutoHeightCacheInit,
} from "./sheet-helpers";
import { installSheetClass, Sheet } from "./sheet-class";
import { sheet } from "./sheet-bag";

export const ensureSheetInit = esmInit(() => {
  ensureSpreadsheetVn();
  ensureWorkbookKt();
  ensureRangeClusterInit();
  ensureCme();
  ensureEme();
  ensureYhe();
  ensureXhe();
  ensureWorksheetDrawingsInit();
  ensureRve();
  ensureWorkbookF();
  initAddressUtils();
  initAddressMetrics();
  ensureZve();
  ensureBve();
  ensureStableIdConstantsInit();
  ensureKve();
  ensureWpe();
  ensureBpe();
  ensureStyleRefsCollabInit();
  ensureAye();
  ensureSye();
  ensureGye();
  ensureDropdownPaddingInit();
  ensureCanvasPaintConstsInit();
  ensureSheetAutoHeightInit();
  ensureAutoHeightCacheInit();
  installSheetClass();
  sheet.SXe = ensureSheetInit;
  sheet.ensureSheetInit = ensureSheetInit;
});

/** Legacy SXe. */
export const SXe = ensureSheetInit;

export { Sheet };
