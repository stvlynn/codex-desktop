// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: comment threads collection (legacy xRe / vRe).
// Stage-3 wave-150.

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  ensureStableIdConstantsInit as workbookH,
  randomBase36Id as workbookHelper299,
} from "../stable-id";
import { workbookBinding1734, ensureThreadVoInit } from "./thread-vo-impl";

export let vRe = class {
  #e = [];
  #t = new Map();
  #n;
  constructor(tcIn9471 = [], tcIn9472) {
    this.#n = tcIn9472;
    tcIn9471.forEach((item) => {
      this.#r(workbookBinding1734.fromProto(item, this.#o()));
    });
  }
  get items() {
    return [...this.#e];
  }
  getById(tcIn14330) {
    return this.#t.get(tcIn14330);
  }
  add(tcIn13543, tcIn13544, tcIn13545 = {}) {
    return this.#a(tcIn13543, tcIn13544, tcIn13545);
  }
  __addForApply(tcIn12842, tcIn12843, tcIn12844 = {}) {
    return this.#a(tcIn12842, tcIn12843, tcIn12844);
  }
  toProto() {
    return this.#e.map((item) => item.toProto());
  }
  replace(tcIn8607 = []) {
    this.#e = [];
    this.#t = new Map();
    tcIn8607.forEach((item) => {
      this.#r(workbookBinding1734.fromProto(item, this.#o()));
    });
  }
  #r(tcIn13182) {
    this.#e.push(tcIn13182);
    this.#t.set(tcIn13182.id, tcIn13182);
  }
  #i(tcIn10672) {
    let tcBind21176 = this.#e.indexOf(tcIn10672);
    tcBind21176 >= 0 && this.#e.splice(tcBind21176, 1);
    this.#t.delete(tcIn10672.id);
  }
  #a(tcIn4271, tcIn4272, tcIn4273) {
    let tcBind13326 = tcIn4273.id ?? workbookHelper299(),
      tcBind13327 = tcIn4273.position ?? yRe(tcIn4271),
      tcBind13328 = workbookBinding1734.create(
        {
          id: tcBind13326,
          target: tcIn4271,
          body: tcIn4272,
          author: tcIn4273.author,
          createdAt: tcIn4273.createdAt,
          position: tcBind13327,
          status: tcIn4273.status,
        },
        this.#o(),
      );
    return (this.#r(tcBind13328), tcBind13328);
  }
  #o() {
    return {
      resolveAuthorId: this.#n.resolveAuthorId,
      now: this.#n.now,
      removeThread: (tcIn16447) => this.#i(tcIn16447),
      recordOp: this.#n.recordOp,
    };
  }
};

export let yRe = (tcIn7311: any) => {
  if ("element" in tcIn7311) return workbookBinding1737(tcIn7311.element);
  if ("textRange" in tcIn7311)
    return workbookBinding1737(tcIn7311.textRange.element);
  if ("textMatch" in tcIn7311)
    return workbookBinding1737(tcIn7311.textMatch.element);
  if ("slide" in tcIn7311) return bRe(tcIn7311.slide);
};

export let workbookBinding1737 = (tcIn10925: any) => {
  let tcBind21439 = tcIn10925.frame;
  return tcBind21439
    ? {
        x: tcBind21439.left ?? 0,
        y: tcBind21439.top ?? 0,
      }
    : {
        x: 0,
        y: 0,
      };
};

export let bRe = (tcIn11698: any) => {
  let tcBind22056 = tcIn11698.frame;
  return {
    x: tcBind22056.width / 2,
    y: tcBind22056.height / 2,
  };
};

export const xRe = esmInit(() => {
  workbookH();
  ensureThreadVoInit();
});

export function ensureThreadsCollectionInit(): void {
  xRe();
}

export function getThreadsCollectionClass(): typeof vRe {
  xRe();
  return vRe;
}
