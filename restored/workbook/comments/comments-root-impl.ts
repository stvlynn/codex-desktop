// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: comments root (legacy WorkbookD / _workbookU).
// Stage-3 wave-150.

import { esmInit } from "../../runtime/rolldown-runtime";
import { buildThreadAddOp as Yde } from "../mutation-ops";
import { ensureBinding662 } from "./boundary-hooks";
import {
  workbookBinding1732,
  pRe,
  mRe,
  ensurePersonVoInit,
} from "./person-vo-impl";
import { gRe, ensurePeopleCollectionInit } from "./people-collection-impl";
import { vRe, ensureThreadsCollectionInit } from "./threads-collection-impl";

export let _workbookU = class {
  people;
  threads;
  #e;
  #t;
  constructor(crIn5696 = {}) {
    this.people = new gRe(crIn5696.people ?? []);
    this.#t = crIn5696.recordOp;
    this.threads = new vRe(crIn5696.threads ?? [], {
      resolveAuthorId: (crIn16448) => this.#r(crIn16448),
      now: () => this.#i(),
      recordOp: (crIn16368) => this.#t?.(crIn16368),
    });
  }
  get self() {
    if (this.#e) return this.people.getById(this.#e);
  }
  setSelf(crIn8222) {
    let crBind18728 = this.#n(crIn8222);
    return (
      (this.#e = crBind18728.id),
      this.#t?.({
        op: "comments.self.set",
        person: crBind18728.toProto(),
      }),
      crBind18728
    );
  }
  clearSelf() {
    this.#e = undefined;
  }
  addThread(crIn3413, crIn3414, crIn3415 = {}) {
    let crBind11809 = this.threads.add(crIn3413, crIn3414, crIn3415),
      crBind11810 = crBind11809.comments[0],
      crBind11811 = crBind11810
        ? this.people.getById(crBind11810.authorId)?.toProto()
        : undefined,
      crBind11812 = Yde({
        threadId: crBind11809.id,
        target: {
          spreadsheetCell: crBind11809.target.spreadsheetCell,
          spreadsheetRange: crBind11809.target.spreadsheetRange,
        },
        body: crIn3414,
        author: crBind11811,
        createdAt: crBind11810?.createdAt,
      });
    return (crBind11812 && this.#t?.(crBind11812), crBind11809);
  }
  __addThreadForApply(crIn11423, crIn11424, crIn11425 = {}) {
    return this.threads.__addForApply(crIn11423, crIn11424, crIn11425);
  }
  getThread(crIn13325) {
    return this.threads.getById(crIn13325);
  }
  toProto() {
    return {
      people: this.people.toProto(),
      threads: this.threads.toProto(),
    };
  }
  replaceFromProto(crIn7629) {
    let crBind18120 = this.#e;
    this.people.replace(crIn7629.people ?? []);
    this.threads.replace(crIn7629.threads ?? []);
    crBind18120 && !this.people.getById(crBind18120) && (this.#e = undefined);
  }
  #n(crIn5350) {
    if (crIn5350 instanceof workbookBinding1732)
      return this.people.register(crIn5350);
    if (pRe(crIn5350)) return this.people.add(crIn5350);
    if (mRe(crIn5350)) {
      let crBind20371 = this.people.getById(crIn5350.id);
      if (!crBind20371) throw Error(`Person id not found: ${crIn5350.id}`);
      return crBind20371;
    }
    throw Error("Unsupported person input.");
  }
  #r(crIn6154) {
    if (!crIn6154) {
      if (!this.#e)
        throw Error(
          "Comment author is required when self is not set. Call comments.self.set(...) or pass an author.",
        );
      return this.#e;
    }
    return this.#n(crIn6154).id;
  }
  #i() {
    return new Date().toISOString();
  }
};

export const WorkbookD = esmInit(() => {
  ensurePeopleCollectionInit();
  ensureThreadsCollectionInit();
  ensureBinding662();
  ensurePersonVoInit();
});

export function ensureCommentsRootInit(): void {
  WorkbookD();
}

export function getCommentsRootClass(): typeof _workbookU {
  WorkbookD();
  return _workbookU;
}
