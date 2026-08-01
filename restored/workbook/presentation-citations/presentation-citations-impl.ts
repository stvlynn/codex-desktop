// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: presentation content-reference / citation collection (legacy bEe).
// Stage-3 wave-147.

import { esmInit } from "../../runtime/rolldown-runtime";
import { $n as presentationN, wr } from "../presentation-protobuf";

export class workbookBinding1289 {
  #e;
  constructor(pcIn11685, pcIn11686) {
    this.#e = (pcIn11686 ?? []).map(
      (item) => new workbookBinding1290(this.#t(), item),
    );
  }
  get items() {
    return [...this.#e];
  }
  add() {
    let pcBind16930 = {
        id: "",
        type: presentationN.CONTENT_REFERENCE_TYPE_UNSPECIFIED,
        tetherId: "",
        targetId: "",
      },
      pcBind16931 = new workbookBinding1290(this.#t(), pcBind16930);
    return (this.#e.push(pcBind16931), pcBind16931);
  }
  replace(pcIn12060) {
    this.#e = (pcIn12060 ?? []).map(
      (item) => new workbookBinding1290(this.#t(), item),
    );
  }
  toProto() {
    return this.#e.map((item) => item.toProto());
  }
  #t() {
    return {
      stub: () => {},
    };
  }
}

export class workbookBinding1290 {
  #e;
  constructor(pcIn8486, pcIn8487) {
    this.#e = {
      id: pcIn8487.id ?? "",
      uri: pcIn8487.uri ?? "",
      title: pcIn8487.title ?? "",
      type: pcIn8487.type ?? undefined,
    };
  }
  get id() {
    return this.#e.id;
  }
  toProto() {
    return {
      id: this.#e.id,
      uri: this.#e.uri ?? "",
      title: this.#e.title ?? "",
      type: this.#e.type,
    };
  }
}

export const bEe = esmInit(() => {
  wr();
});

export function getPresentationCitationsClass(): typeof workbookBinding1289 {
  bEe();
  return workbookBinding1289;
}

export function getPresentationCitationItemClass(): typeof workbookBinding1290 {
  bEe();
  return workbookBinding1290;
}

export const ensurePresentationCitationsInit = bEe;
