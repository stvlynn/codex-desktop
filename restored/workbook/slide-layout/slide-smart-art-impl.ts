// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: smart-art element + collection (legacy Binding1335/1336 / _U).
// Stage-3 wave-143.

import { SlideElement as _workbookZ } from "../slide-element";
import { j } from "../presentation-protobuf";

export const workbookBinding1334 = j;
export const workbookBinding1335 =
  workbookBinding1334.ELEMENT_TYPE_SMART_ART ?? 12;
export class workbookBinding1336 extends _workbookZ {
  type = "smartArt";
  constructor(slIn12618, slIn12619) {
    super(slIn12618, slIn12619);
    this.data.type = workbookBinding1335;
  }
  get id() {
    return this.data.id;
  }
  get smartArt() {
    return this.data.smartArt;
  }
  toProto() {
    let slBind21104 = super.toProto();
    return (
      (slBind21104.type = workbookBinding1335),
      (slBind21104.smartArt = this.smartArt),
      slBind21104
    );
  }
}
export class _U {
  #e;
  #t;
  constructor(slIn9135, slIn9136) {
    this.#e = slIn9135;
    this.#t = [];
    slIn9136.forEach((item) => {
      this.add({
        proto: item,
      });
    });
  }
  get items() {
    return [...this.#t];
  }
  add(slIn10628) {
    let slBind21105 = new workbookBinding1336(this.#e, slIn10628.proto);
    return (
      this.#t.push(slBind21105),
      this.#e._register(slBind21105),
      slBind21105
    );
  }
  deleteById(slIn9708) {
    let slBind20231 = this.#t.findIndex((item) => item.id === slIn9708);
    slBind20231 !== -1 &&
      (this.#t.splice(slBind20231, 1), this.#e._unregister(slIn9708));
  }
  toProto() {
    return this.#t.map((item) => item.toProto());
  }
}
