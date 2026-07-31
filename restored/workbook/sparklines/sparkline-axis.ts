// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-61: SparklineAxis VO (legacy Binding809 / ensureSparklineAxisInit).

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

export const ensureSparklineAxisInit = esmInit(() => {
  ensureSpreadsheetProtoInit();
  sparklines.SparklineAxis = class SparklineAxis {
    #e;
    #t;
    constructor(spIn12989: any, spIn12990: any) {
      this.#e = spIn12989;
      this.#t = spIn12990;
    }
    get manualMin() {
      return this.#e.manualMin ?? undefined;
    }
    set manualMin(spIn11962: any) {
      this.#e.manualMin = spIn11962 ?? undefined;
      this.#t?.();
    }
    get manualMax() {
      return this.#e.manualMax ?? undefined;
    }
    set manualMax(spIn11963: any) {
      this.#e.manualMax = spIn11963 ?? undefined;
      this.#t?.();
    }
    get minMode() {
      return this.#e.minAxisType ?? Sn.SPARKLINE_AXIS_MIN_MAX_UNSPECIFIED;
    }
    set minMode(spIn12546: any) {
      this.#e.minAxisType = spIn12546;
      this.#t?.();
    }
    get maxMode() {
      return this.#e.maxAxisType ?? Sn.SPARKLINE_AXIS_MIN_MAX_UNSPECIFIED;
    }
    set maxMode(spIn12547: any) {
      this.#e.maxAxisType = spIn12547;
      this.#t?.();
    }
    get showAxis() {
      return !!this.#e.displayXAxis;
    }
    set showAxis(spIn12291: any) {
      this.#e.displayXAxis = !!spIn12291;
      this.#t?.();
    }
    get rightToLeft() {
      return !!this.#e.rightToLeft;
    }
    set rightToLeft(spIn12179: any) {
      this.#e.rightToLeft = !!spIn12179;
      this.#t?.();
    }
  };
});
