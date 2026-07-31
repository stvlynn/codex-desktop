// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-29: Paragraphs collection VO (legacy Binding602).

import { Paragraph } from "./paragraph";
export class Paragraphs {
  #e;
  #t;
  constructor(trIn10417, trIn10418 = []) {
    this.#e = trIn10417;
    this.#t = (trIn10418 ?? []).map((item) => new Paragraph(this.#n(), item));
  }
  get items() {
    return [...this.#t];
  }
  get length() {
    return this.#t.length;
  }
  getItem(trIn11958) {
    if (!(trIn11958 < 0 || trIn11958 >= this.#t.length))
      return this.#t[trIn11958];
  }
  add() {
    let trBind21353 = new Paragraph(this.#n(), {
      id: "",
      runs: [],
    });
    return (this.#t.push(trBind21353), trBind21353);
  }
  append(trIn11352) {
    let trBind21829 = new Paragraph(this.#n(), trIn11352);
    return (this.#t.push(trBind21829), trBind21829);
  }
  insertAt(trIn7505, trIn7506) {
    let trBind17984 = new Paragraph(this.#n(), trIn7506);
    return (
      trIn7505 < 0 || trIn7505 >= this.#t.length
        ? this.#t.push(trBind17984)
        : this.#t.splice(trIn7505, 0, trBind17984),
      trBind17984
    );
  }
  removeAt(trIn10180) {
    if (trIn10180 < 0 || trIn10180 >= this.#t.length) return;
    let [trBind20641] = this.#t.splice(trIn10180, 1);
    return trBind20641;
  }
  clear() {
    this.#t = [];
  }
  setFromLines(trIn4864) {
    let trBind14269 = trIn4864 ?? [];
    if (trBind14269.length === 0) {
      let trBind20428 = new Paragraph(this.#n(), {
        id: "",
        runs: [],
      });
      trBind20428.setPlainText("");
      this.#t = [trBind20428];
      return;
    }
    this.#t = trBind14269.map((item) => {
      let trBind20850 = new Paragraph(this.#n(), {
        id: "",
        runs: [],
      });
      return (trBind20850.setPlainText(item ?? ""), trBind20850);
    });
  }
  toPlainText() {
    return this.#t.map((item) => item.toPlainText()).join("\n");
  }
  setFromPlainText(trIn3800) {
    let trBind12551 =
      trIn3800.length === 0
        ? []
        : trIn3800.split(/\r?\n/).map((item) => item.replace(/\r$/, ""));
    if (trBind12551.length === 0) {
      let trBind20429 = new Paragraph(this.#n(), {
        id: "",
        runs: [],
      });
      trBind20429.setPlainText("");
      this.#t = [trBind20429];
      return;
    }
    this.#t = trBind12551.map((item) => {
      let trBind21056 = new Paragraph(this.#n(), {
        id: "",
        runs: [],
      });
      return (trBind21056.setPlainText(item), trBind21056);
    });
  }
  toProto() {
    return this.#t.map((item) => item.toProto());
  }
  #n() {
    return this.#e;
  }
}
