// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: presentation layouts + masters collections (legacy dDe/fDe).
// Stage-3 wave-147.

import { esmInit } from "../../runtime/rolldown-runtime";
import { workbookBinding1344 } from "./slide-layout-vo-impl";
import { ensureSlideLayoutInit } from "./ensure-slide-layout-init";

export class workbookBinding1345 {
  #e;
  #t;
  #n;
  constructor(slcIn6971, slcIn6972) {
    this.#e = slcIn6971;
    this.#t = (slcIn6972 ?? []).map(
      (item) =>
        new workbookBinding1344(
          {
            proto: item,
          },
          this.#r(),
        ),
    );
    this.#n = new Map(
      this.#t.filter((item) => !!item.id).map((item) => [item.id, item]),
    );
  }
  get items() {
    return [...this.#t];
  }
  getById(slcIn13685) {
    if (slcIn13685) return this.#n.get(slcIn13685);
  }
  add(slcIn7596, slcIn7597) {
    if (!slcIn7596 || slcIn7596.length === 0)
      throw Error("Layout name is required.");
    let slcBind18087 = new workbookBinding1344(
      {
        name: slcIn7596,
        ...slcIn7597,
      },
      this.#r(),
    );
    return (
      this.#t.push(slcBind18087),
      slcBind18087.id && this.#n.set(slcBind18087.id, slcBind18087),
      slcBind18087
    );
  }
  replace(slcIn7803) {
    this.#t = (slcIn7803 ?? []).map(
      (item) =>
        new workbookBinding1344(
          {
            proto: item,
          },
          this.#r(),
        ),
    );
    this.#n = new Map(
      this.#t.filter((item) => !!item.id).map((item) => [item.id, item]),
    );
  }
  getByName(slcIn12678) {
    return this.#t.find((item) => item.name === slcIn12678);
  }
  getItem(slcIn10150) {
    let slcBind20619 = this.getByName(slcIn10150);
    if (!slcBind20619) throw Error(`Layout "${slcIn10150}" not found.`);
    return slcBind20619;
  }
  removeByName(slcIn8012) {
    let slcBind18500 = this.#t.findIndex((item) => item.name === slcIn8012);
    if (slcBind18500 >= 0) {
      let [slcBind21843] = this.#t.splice(slcBind18500, 1);
      slcBind21843?.id && this.#n.delete(slcBind21843.id);
    }
  }
  toProto() {
    return this.#t.map((item) => item.toProto());
  }
  #r() {
    return this.#e;
  }
}

export const dDe = esmInit(() => {
  ensureSlideLayoutInit();
});

export class workbookBinding1346 {
  #e;
  constructor(slcIn15228) {
    this.#e = slcIn15228;
  }
  get items() {
    return this.#e.items.filter((item) => item.type === "master");
  }
  getDefault() {
    return this.items[0];
  }
  add(slcIn13253) {
    return this.#e.add(slcIn13253, {
      type: "master",
    });
  }
  toProto() {
    return this.items.map((item) => item.toProto());
  }
}

export const fDe = esmInit(() => {});

export function getPresentationLayoutsClass(): typeof workbookBinding1345 {
  dDe();
  return workbookBinding1345;
}

export function getPresentationMastersClass(): typeof workbookBinding1346 {
  fDe();
  return workbookBinding1346;
}

export const ensureSlideLayoutsMastersInit = () => {
  dDe();
  fDe();
};
