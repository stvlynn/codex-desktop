// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-61: CellGrid map (legacy Binding805–806 / ensureCellGridInit).

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

export const ensureCellGridInit = esmInit(() => {
  sparklines.CELL_GRID_COL_STRIDE = 16384;
  sparklines.CellGrid = class CellGrid {
    #e;
    #t;
    #n;
    constructor() {
      this.#e = new Map();
      this.#t = new Map();
      this.#n = new Map();
    }
    #r(spIn14888: any, spIn14889: any) {
      return spIn14888 * sparklines.CELL_GRID_COL_STRIDE + spIn14889;
    }
    get(spIn13304: any, spIn13305: any) {
      return this.#e.get(this.#r(spIn13304, spIn13305));
    }
    set(spIn12600: any, spIn12601: any, spIn12602: any) {
      return (this.#e.set(this.#r(spIn12600, spIn12601), spIn12602), spIn12602);
    }
    getOrCreate(spIn9393: any, spIn9394: any, spIn9395: any) {
      let spBind19932 = this.get(spIn9393, spIn9394);
      if (spBind19932) return spBind19932;
      let spBind19933 = spIn9395(spIn9393, spIn9394);
      return (this.set(spIn9393, spIn9394, spBind19933), spBind19933);
    }
    delete(spIn11465: any, spIn11466: any) {
      this.#e.delete(this.#r(spIn11465, spIn11466));
      this.#t.delete(this.#r(spIn11465, spIn11466));
    }
    *entries() {
      yield* this.#e.entries();
    }
    *cellsWithCoordinates() {
      for (let [spBind20897, spBind20898] of this.#e.entries()) {
        let spBind22109 = Math.floor(
          spBind20897 / sparklines.CELL_GRID_COL_STRIDE,
        );
        yield [
          spBind22109,
          spBind20897 - spBind22109 * sparklines.CELL_GRID_COL_STRIDE,
          spBind20898,
        ];
      }
    }
    setRawValue(spIn8628: any, spIn8629: any, spIn8630: any) {
      let spBind19131 = this.#r(spIn8628, spIn8629);
      if (spIn8630 === undefined) {
        this.#t.delete(spBind19131);
        return;
      }
      this.#t.set(spBind19131, spIn8630);
    }
    getRawValue(spIn12817: any, spIn12818: any) {
      return this.#t.get(this.#r(spIn12817, spIn12818));
    }
    clearRawValue(spIn12919: any, spIn12920: any) {
      this.#t.delete(this.#r(spIn12919, spIn12920));
    }
    setExcelRawValue(spIn8478, spIn8479, spIn8480) {
      let spBind18993 = this.#r(spIn8478, spIn8479);
      if (spIn8480 === undefined) {
        this.#n.delete(spBind18993);
        return;
      }
      this.#n.set(spBind18993, spIn8480);
    }
    getExcelRawValue(spIn12499: any, spIn12500: any) {
      return this.#n.get(this.#r(spIn12499, spIn12500));
    }
    hasExcelRawValue(spIn12501: any, spIn12502: any) {
      return this.#n.has(this.#r(spIn12501, spIn12502));
    }
  };
});
