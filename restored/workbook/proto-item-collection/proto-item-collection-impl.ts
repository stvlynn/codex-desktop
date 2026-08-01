// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: proto-backed item collection (legacy kXe / DXe / OXe).
// Stage-3 wave-152.

import { esmInit } from "../../runtime/rolldown-runtime";

export let DXe: any;
export let OXe: any;

export const kXe = esmInit(() => {
  DXe = class {
    #e;
    #t;
    constructor(picIn13272, picIn13273) {
      this.#e = picIn13272;
      this.#t = picIn13273;
    }
    delete() {
      this.#e.remove(this);
    }
    get proto() {
      return this.#t;
    }
  };
  OXe = class {
    #e;
    #t;
    #n = [];
    #r;
    constructor(picIn7416, picIn7417 = {}, picIn7418) {
      this.#t = picIn7416;
      this.#r = picIn7418;
      this.#e = {
        remove: (picIn14637) => {
          this.#a(picIn14637);
        },
      };
      this.#i();
    }
    add(picIn10489) {
      this.#t.push(picIn10489);
      let picBind20964 = this.#o(picIn10489);
      return (this.#n.push(picBind20964), this.#r?.(), picBind20964);
    }
    get items() {
      return [...this.#n];
    }
    get proto() {
      return this.#n.map((item) => item.proto);
    }
    replace(picIn13451) {
      this.#t = [...picIn13451];
      this.#i();
    }
    #i() {
      this.#n = this.#t.map((item) => this.#o(item));
    }
    #a(picIn8197) {
      let picBind18701 = this.#t.indexOf(picIn8197.proto);
      picBind18701 !== -1 && this.#t.splice(picBind18701, 1);
      let picBind18702 = this.#n.indexOf(picIn8197);
      picBind18702 !== -1 && this.#n.splice(picBind18702, 1);
      this.#r?.();
    }
    #o(picIn14332) {
      return new DXe(this.#e, picIn14332);
    }
  };
});

export function ensureProtoItemCollectionInit(): void {
  kXe();
}
