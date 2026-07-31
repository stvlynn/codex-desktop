// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-61: SparklinePreview VO (legacy Binding807–808 / ensureSparklinePreviewInit).

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  Cn as spreadsheetCn,
  d,
  En as spreadsheetEn,
  Sn,
  Vn as ensureSpreadsheetProtoInit,
} from "../spreadsheet-protobuf";
import { WorkbookColor, ensureWorkbookColorInit } from "../theme-color";
import {
  ensureStableIdConstantsInit,
  bracedUuidUpper,
  randomBase36Id,
} from "../stable-id";
import {
  initAddressUtils,
  parseA1Range,
  formatA1,
  formatA1Range,
  normalizeA1Token,
  parseSheetRef,
} from "../../utils/spreadsheet-address-utils";
import {
  buildSparklineSetOp,
  buildSparklineAddOp,
  buildSparklineSelector,
} from "../mutation-ops";
import { ensureBinding662 } from "./boundary-hooks";
import { sparklines } from "./sparkline-bindings";

export const ensureSparklinePreviewInit = esmInit(() => {
  sparklines.SPARKLINE_PREVIEW_READONLY =
    "Sparkline previews are read-only. Modify the owning SparklineGroup instead.";
  sparklines.SparklinePreview = class SparklinePreview {
    #e;
    #t;
    constructor(spIn12987: any, spIn12988: any) {
      this.#e = spIn12987;
      this.#t = spIn12988;
    }
    get location() {
      return this.#e.worksheet.getRange(this.#t.reference);
    }
    set location(spIn14375: any) {
      throw Error(sparklines.SPARKLINE_PREVIEW_READONLY);
    }
    get reference() {
      return this.#t.reference;
    }
    get sourceData() {
      return this.#e.worksheet.getRange(this.#t.sourceAddress);
    }
    set sourceData(spIn14218: any) {
      throw Error(sparklines.SPARKLINE_PREVIEW_READONLY);
    }
    get formula() {
      return this.#t.formula;
    }
    set formula(spIn14529: any) {
      throw Error(sparklines.SPARKLINE_PREVIEW_READONLY);
    }
    get dateAxisRange() {
      return this.#e.dateAxisRange;
    }
  };
});
