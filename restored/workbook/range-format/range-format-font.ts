// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-28: RangeFormat.font proxy (legacy Binding591).

import { cloneWorkbookColor, workbookColorToConfig } from "./border-alignment-helpers";
export class RangeFormatFont {
  #e;
  #t;
  #n;
  constructor(rfIn10209) {
    this.#e = rfIn10209.readState;
    this.#t = rfIn10209.applyChange;
    this.#n = rfIn10209.record;
  }
  get bold() {
    return this.#e().font?.bold;
  }
  set bold(rfIn10069) {
    this.#t(rfIn15249 => {
      rfIn15249.bold = rfIn10069;
    });
    rfIn10069 !== undefined && this.#r({
      bold: rfIn10069
    });
  }
  get italic() {
    return this.#e().font?.italic;
  }
  set italic(rfIn9841) {
    this.#t(rfIn15177 => {
      rfIn15177.italic = rfIn9841;
    });
    rfIn9841 !== undefined && this.#r({
      italic: rfIn9841
    });
  }
  get size() {
    return this.#e().font?.size;
  }
  set size(rfIn10070) {
    this.#t(rfIn15250 => {
      rfIn15250.size = rfIn10070;
    });
    rfIn10070 !== undefined && this.#r({
      size: rfIn10070
    });
  }
  get name() {
    return this.#e().font?.name;
  }
  set name(rfIn10071) {
    this.#t(rfIn15251 => {
      rfIn15251.name = rfIn10071;
    });
    rfIn10071 !== undefined && this.#r({
      name: rfIn10071
    });
  }
  get color() {
    let rfBind21637 = this.#e().font?.color;
    return rfBind21637 ? rfBind21637.clone() : undefined;
  }
  set color(rfIn9166) {
    this.#t(rfIn14861 => {
      rfIn14861.color = cloneWorkbookColor(rfIn9166);
    });
    let rfBind19733 = workbookColorToConfig(rfIn9166);
    rfBind19733 !== undefined && this.#r({
      color: rfBind19733
    });
  }
  #r(rfIn12399) {
    Object.keys(rfIn12399).length !== 0 && this.#n({
      font: rfIn12399
    });
  }
}
