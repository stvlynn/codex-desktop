// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: comment people collection (legacy _Re / gRe).
// Stage-3 wave-150.

import { esmInit } from "../../runtime/rolldown-runtime";
import { workbookBinding1732, ensurePersonVoInit } from "./person-vo-impl";

export let gRe = class {
  #e = [];
  #t = new Map();
  constructor(pcIn11484 = []) {
    pcIn11484.forEach((item) => {
      this.#n(item);
    });
  }
  get items() {
    return [...this.#e];
  }
  getById(pcIn14329) {
    return this.#t.get(pcIn14329);
  }
  add(pcIn8152) {
    let pcBind18660 = workbookBinding1732.create(pcIn8152),
      pcBind18661 = this.#t.get(pcBind18660.id);
    return pcBind18661
      ? (pcBind18661.update(pcBind18660.toProto()), pcBind18661)
      : (this.#e.push(pcBind18660),
        this.#t.set(pcBind18660.id, pcBind18660),
        pcBind18660);
  }
  register(pcIn8892) {
    let pcBind19438 = this.#t.get(pcIn8892.id);
    return pcBind19438
      ? (pcBind19438.update(pcIn8892.toProto()), pcBind19438)
      : (this.#e.push(pcIn8892), this.#t.set(pcIn8892.id, pcIn8892), pcIn8892);
  }
  toProto() {
    return this.#e.map((item) => item.toProto());
  }
  replace(pcIn9324 = []) {
    this.#e = [];
    this.#t = new Map();
    pcIn9324.forEach((item) => {
      this.#n(item);
    });
  }
  #n(pcIn11254) {
    let pcBind21710 = workbookBinding1732.fromProto(pcIn11254);
    this.#e.push(pcBind21710);
    this.#t.set(pcBind21710.id, pcBind21710);
  }
};

export const _Re = esmInit(() => {
  ensurePersonVoInit();
});

export function ensurePeopleCollectionInit(): void {
  _Re();
}

export function getPeopleCollectionClass(): typeof gRe {
  _Re();
  return gRe;
}
