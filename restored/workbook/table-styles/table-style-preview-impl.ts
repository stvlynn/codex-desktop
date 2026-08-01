// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: table style region preview (legacy Binding836 / pye / gye).
// Stage-3 wave-144.

import { esmInit } from "../../runtime/rolldown-runtime";
import { initAddressMetrics } from "../../utils/spreadsheet-address-utils";
import { ahe } from "./style-registry-impl";
import { workbookBinding687 } from "./ensure-table-styles-init";
import {
  fye,
  mye,
  hye,
  mergeTableBandFonts as workbookHelper386,
} from "./table-cell-bands-impl";

export class workbookBinding836 {
  #e;
  #t;
  #n = new Map();
  constructor(tspIn12991, tspIn12992) {
    this.#e = tspIn12991;
    this.#t = tspIn12992;
  }
  get startRow() {
    return this.#e.startRow;
  }
  get endRow() {
    return this.#e.endRow;
  }
  get startCol() {
    return this.#e.startCol;
  }
  get endCol() {
    return this.#e.endCol;
  }
  get headerRows() {
    return this.#e.headerRows;
  }
  get totalRows() {
    return this.#e.totalRows;
  }
  get showRowStripes() {
    return this.#e.showRowStripes;
  }
  get showColumnStripes() {
    return this.#e.showColumnStripes;
  }
  get showFirstColumn() {
    return this.#e.showFirstColumn;
  }
  get showLastColumn() {
    return this.#e.showLastColumn;
  }
  get tableStyle() {
    return this.#e.tableStyle;
  }
  contains(tspIn8256, tspIn8257) {
    return (
      tspIn8256 >= this.#e.startRow &&
      tspIn8256 <= this.#e.endRow &&
      tspIn8257 >= this.#e.startCol &&
      tspIn8257 <= this.#e.endCol
    );
  }
  resolveCell(tspIn8230, tspIn8231) {
    let tspBind18746 = `${tspIn8230}:${tspIn8231}`;
    if (this.#n.has(tspBind18746)) return this.#n.get(tspBind18746);
    let tspBind18747 = workbookHelper386(
      this.#e,
      tspIn8230,
      tspIn8231,
      this.#t,
    );
    return (this.#n.set(tspBind18746, tspBind18747), tspBind18747);
  }
  resolveFont(tspIn13308, tspIn13309) {
    return mye(this.#e, tspIn13308, tspIn13309);
  }
  resolveBorders(tspIn12548, tspIn12549) {
    return hye(this.#e, tspIn12548, tspIn12549, this.#t);
  }
  getBandFills() {
    return this.#e.fills;
  }
}

export function pye(tables: any, ctx: any): workbookBinding836[] {
  return fye(tables, ctx).map((item: any) => new workbookBinding836(item, ctx));
}

export const workbookBinding835 = {
  colorSpace: "spreadsheetml" as const,
};

export const gye = esmInit(() => {
  ahe();
  workbookBinding687();
  initAddressMetrics();
});

export const ensureGye = gye;
export const buildSparklinePreview = pye;
export const TableStylePreview = workbookBinding836;
