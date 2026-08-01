// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: slide elements collection (legacy Binding1340 / 1338 / 1339).
// Stage-3 wave-142.

import { _workbookV } from "../slides-collection";
import { workbookS, workbookBinding1298 } from "../charts-collection";
import { workbookBinding736 } from "../shape-element";
import { ImageElement as workbookBinding660 } from "../image-element";
import { _workbookM } from "../table-element";
import { _workbookB } from "./slide-images-collection-impl";
import { workbookBinding1302 } from "./slide-embedded-artifact-impl";
import { workbookBinding1304 } from "./slide-artifacts-collection-impl";
import { _workbookF } from "./slide-tables-collection-impl";
import {
  workbookBinding1335,
  workbookBinding1336,
  _U,
} from "./slide-smart-art-impl";

export const workbookBinding1338 = (slIn10591: any) => {
  if (!slIn10591) return;
  let slBind21067 = Number(slIn10591);
  if (!(!Number.isInteger(slBind21067) || slBind21067 <= 0)) return slBind21067;
};
export const workbookBinding1339 = (slIn4200: any) => {
  if (slIn4200.length === 0) return slIn4200;
  let slBind13246 = 0;
  for (let slBind21686 of slIn4200) {
    let slBind22242 = workbookBinding1338(slBind21686.id);
    slBind22242 !== undefined &&
      (slBind13246 = Math.max(slBind13246, slBind22242));
  }
  let slBind13247 = new Set();
  return slIn4200.map((item) => {
    let slBind18536 = item.id;
    if (
      slBind18536 &&
      workbookBinding1338(slBind18536) !== undefined &&
      !slBind13247.has(slBind18536)
    )
      return (slBind13247.add(slBind18536), item);
    slBind13246 += 1;
    let slBind18537 = String(slBind13246);
    return (
      slBind13247.add(slBind18537),
      {
        ...item,
        id: slBind18537,
      }
    );
  });
};
export class workbookBinding1340 {
  #e;
  #t;
  #n;
  #r;
  #i;
  #a;
  #o;
  #s;
  #c;
  #l;
  constructor(slIn2314: any, slIn2315: any) {
    let slBind9434 = Object.create(slIn2314);
    slBind9434._register = (slIn15869, slIn15870) =>
      this._register(slIn15869, slIn15870);
    slBind9434._unregister = (slIn16119) => this._unregister(slIn16119);
    slBind9434.deleteElement = (slIn16441) => this.#u(slIn16441);
    this.#l = slBind9434;
    this.#o = [];
    this.#s = new Map();
    this.#c = true;
    this.#e = new (_workbookV as any)(this.#l, []);
    this.#t = new _workbookB(this.#l, []);
    this.#n = new _workbookF(this.#l, []);
    this.#r = new (workbookS as any)(this.#l, []);
    this.#i = new workbookBinding1304(this.#l, []);
    this.#a = new _U(this.#l, []);
    let slBind9435 = workbookBinding1339(slIn2315 ?? []);
    for (let slBind21868 of slBind9435) {
      let slBind22381 = this.#f(slBind21868);
      slBind22381 && this.#o.push(slBind22381.id);
    }
    this.#c = false;
  }
  get shapes() {
    return this.#e;
  }
  get images() {
    return this.#t;
  }
  get tables() {
    return this.#n;
  }
  get charts() {
    return this.#r;
  }
  get artifacts() {
    return this.#i;
  }
  get smartArts() {
    return this.#a;
  }
  get items() {
    let slBind19482 = [];
    for (let slBind21842 of this.#o) {
      let slBind22462 = this.#s.get(slBind21842);
      slBind22462 && slBind19482.push(slBind22462);
    }
    return slBind19482;
  }
  getById(slIn14316) {
    return this.#s.get(slIn14316);
  }
  deleteById(slIn15124) {
    this.#u(slIn15124);
  }
  bringToFront(slIn13123) {
    this.#d(slIn13123, this.#o.length - 1);
  }
  sendToBack(slIn14822) {
    this.#d(slIn14822, 0);
  }
  toProto() {
    return this.items.map((item) => item.toProto());
  }
  hydrateCollaborativeRefsFromProto() {
    this.#e.hydrateCollaborativeRefsFromProto();
  }
  _register(slIn5734, slIn5735) {
    if ((this.#s.set(slIn5734.id, slIn5734), this.#c)) return;
    let slBind15659 = this.#o.indexOf(slIn5734.id);
    slBind15659 >= 0 && this.#o.splice(slBind15659, 1);
    let slBind15660 = slIn5735?.index ?? this.#o.length;
    this.#o.splice(slBind15660, 0, slIn5734.id);
    this.#l.onElementMutated?.(slIn5734.id);
    this.#h();
  }
  _unregister(slIn8147) {
    this.#s.delete(slIn8147);
    let slBind18649 = this.#o.indexOf(slIn8147);
    slBind18649 >= 0 && this.#o.splice(slBind18649, 1);
    this.#l.onElementMutated?.(slIn8147);
    this.#h();
  }
  #u(slIn2222) {
    let slBind9262 = this.#s.get(slIn2222);
    if (slBind9262) {
      if (slBind9262 instanceof (workbookBinding736 as any)) {
        this.#e.deleteById(slIn2222);
        return;
      }
      if (slBind9262 instanceof (workbookBinding660 as any)) {
        this.#t.deleteById(slIn2222);
        return;
      }
      if (slBind9262 instanceof (_workbookM as any)) {
        this.#n.deleteById(slIn2222);
        return;
      }
      if (slBind9262 instanceof (workbookBinding1298 as any)) {
        this.#r.deleteById(slIn2222);
        return;
      }
      if (slBind9262 instanceof workbookBinding1302) {
        this.#i.deleteById(slIn2222);
        return;
      }
      if (slBind9262 instanceof workbookBinding1336) {
        this.#a.deleteById(slIn2222);
        return;
      }
      throw Error("deleteElement does not support this element type.");
    }
  }
  #d(slIn5989, slIn5990) {
    let slBind16018 = this.#o.indexOf(slIn5989);
    if (slBind16018 === -1) return;
    let slBind16019 = Math.max(
      0,
      Math.min(Math.trunc(slIn5990), this.#o.length - 1),
    );
    this.#o.splice(slBind16018, 1);
    this.#o.splice(slBind16019, 0, slIn5989);
    this.#l.onElementMutated?.(slIn5989);
    this.#h();
  }
  #f(slIn15194) {
    return this.#p(slIn15194);
  }
  #p(slIn2179) {
    switch (slIn2179.type) {
      case j.ELEMENT_TYPE_SHAPE:
      case j.ELEMENT_TYPE_TEXT:
      case j.ELEMENT_TYPE_TEXT_GROUP:
        return this.#e.add({
          proto: slIn2179,
        });
      case j.ELEMENT_TYPE_IMAGE:
      case j.ELEMENT_TYPE_IMAGE_REFERENCE:
        return this.#t.add({
          proto: slIn2179,
        });
      case j.ELEMENT_TYPE_TABLE:
        return this.#n.add({
          proto: slIn2179,
        });
      case j.ELEMENT_TYPE_CHART:
      case j.ELEMENT_TYPE_CHART_REFERENCE:
        return this.#r.add({
          proto: slIn2179,
        });
      case j.ELEMENT_TYPE_EMBEDDED_ARTIFACT:
        return this.#i.add({
          proto: slIn2179,
        });
      case workbookBinding1335:
        return this.#a.add({
          proto: slIn2179,
        });
      default:
        return this.#m(slIn2179);
    }
  }
  #m(slIn5257) {
    let slBind14835 =
        slIn5257.placeholderIndex !== undefined ||
        slIn5257.placeholderType !== undefined,
      slBind14836 =
        slIn5257.textStyle !== undefined ||
        (slIn5257.levelsStyles?.length ?? 0) > 0 ||
        (slIn5257.paragraphs?.length ?? 0) > 0;
    if (!(!slBind14835 && !slBind14836))
      return this.#e.add({
        proto: {
          ...slIn5257,
          type: j.ELEMENT_TYPE_TEXT,
        },
      });
  }
  #h() {
    this.#l.getPresentation?.()?.queuePresentationCollabPublish();
  }
}
