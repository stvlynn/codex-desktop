// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: presentation images collection VO (legacy _workbookT/workbookW).
// Stage-3 wave-148.

import { esmInit } from "../../runtime/rolldown-runtime";
import { workbookBinding728, Jge } from "../image-connector";

export class workbookW {
  #e;
  #t;
  #n;
  constructor(paiIn8418, paiIn8419) {
    this.#e = paiIn8418;
    this.#t = (paiIn8419 ?? []).map(
      (item) => new workbookBinding728(this.#r(), item ?? {}),
    );
    this.#n = new Map(this.#t.map((item) => [item.id, item]));
  }
  get items() {
    return [...this.#t];
  }
  getById(paiIn13682) {
    if (paiIn13682) return this.#n.get(paiIn13682);
  }
  add(paiIn5197 = {}) {
    let paiBind14718 = {
        id: paiIn5197.id ?? "",
        contentType: paiIn5197.contentType ?? "",
        data: paiIn5197.data
          ? new Uint8Array(paiIn5197.data)
          : new Uint8Array(),
        prompt: paiIn5197.prompt,
        uri: paiIn5197.uri,
      },
      paiBind14719 = new workbookBinding728(this.#r(), paiBind14718);
    return (
      this.#t.push(paiBind14719),
      this.#n.set(paiBind14719.id, paiBind14719),
      paiBind14719
    );
  }
  replace(paiIn9437) {
    this.#t = (paiIn9437 ?? []).map(
      (item) => new workbookBinding728(this.#r(), item ?? {}),
    );
    this.#n = new Map(this.#t.map((item) => [item.id, item]));
  }
  toProto() {
    return this.#t.map((item) => item.toProto());
  }
  #r() {
    return this.#e;
  }
}

export const _workbookT = esmInit(() => {
  Jge();
});

export function getPresentationImagesCollectionClass(): typeof workbookW {
  _workbookT();
  return workbookW;
}

export const ensurePresentationImagesCollectionInit = _workbookT;
