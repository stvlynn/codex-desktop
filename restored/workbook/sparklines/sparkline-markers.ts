// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-61: SparklineMarkers VO (legacy Binding810 / ensureSparklineMarkersInit).

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

export const ensureSparklineMarkersInit = esmInit(() => {
  sparklines.SparklineMarkers = class SparklineMarkers {
    #e;
    #t;
    constructor(spIn13239: any, spIn13240: any) {
      this.#e = spIn13239;
      this.#t = spIn13240;
    }
    get show() {
      return !!this.#e.markers;
    }
    set show(spIn13115: any) {
      this.#e.markers = !!spIn13115;
      this.#t?.();
    }
    get high() {
      return !!this.#e.high;
    }
    set high(spIn13306: any) {
      this.#e.high = !!spIn13306;
      this.#t?.();
    }
    get low() {
      return !!this.#e.low;
    }
    set low(spIn13497: any) {
      this.#e.low = !!spIn13497;
      this.#t?.();
    }
    get first() {
      return !!this.#e.first;
    }
    set first(spIn13164: any) {
      this.#e.first = !!spIn13164;
      this.#t?.();
    }
    get last() {
      return !!this.#e.last;
    }
    set last(spIn13307: any) {
      this.#e.last = !!spIn13307;
      this.#t?.();
    }
    get negative() {
      return !!this.#e.negative;
    }
    set negative(spIn12819: any) {
      this.#e.negative = !!spIn12819;
      this.#t?.();
    }
  };
});
