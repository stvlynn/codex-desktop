// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-29: TextRuns collection VO (legacy Binding600).

import { TextRun } from "./text-run";
export class TextRuns {
  #e;
  #t;
  constructor(trIn10415, trIn10416 = []) {
    this.#e = trIn10415;
    this.#t = (trIn10416 ?? []).map((item) => new TextRun(this.#n(), item));
  }
  get items() {
    return [...this.#t];
  }
  get length() {
    return this.#t.length;
  }
  getItem(trIn11957) {
    if (!(trIn11957 < 0 || trIn11957 >= this.#t.length))
      return this.#t[trIn11957];
  }
  add(trIn10682 = "") {
    let trBind21185 = new TextRun(this.#n(), {
      id: "",
      text: trIn10682,
    });
    return (this.#t.push(trBind21185), trBind21185);
  }
  replace(trIn14785) {
    this.#t = [...trIn14785];
  }
  cloneWithText(trIn10378, trIn10379) {
    let trBind20849 = trIn10378.toProto();
    return (
      (trBind20849.id = ""),
      (trBind20849.text = trIn10379),
      new TextRun(this.#n(), trBind20849)
    );
  }
  clear() {
    this.#t = [];
  }
  toProto() {
    return this.#t.map((item) => item.toProto());
  }
  #n() {
    return this.#e;
  }
}
