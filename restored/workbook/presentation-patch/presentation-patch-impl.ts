// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: presentation collab patch / id-alias recorder (legacy nze/tze).
// Stage-3 wave-148.

import { esmInit } from "../../runtime/rolldown-runtime";

export class tze {
  #e = [];
  #t = new WeakMap();
  #n = {};
  #r = {};
  constructor(ppIn16449) {}
  record(ppIn15264) {
    this.#e.push(ppIn15264);
  }
  getPatch() {
    return [...this.#e];
  }
  getIdMap() {
    return {
      ...this.#n,
    };
  }
  assignAlias(ppIn9040, ppIn9041, ppIn9042) {
    let ppBind19602 = this.#t.get(ppIn9040);
    if (ppBind19602) return ppBind19602;
    let ppBind19603 = this.#i(ppIn9042);
    return (
      this.#t.set(ppIn9040, ppBind19603),
      (this.#n[ppBind19603] = ppIn9041),
      ppBind19603
    );
  }
  targetRefForElement(ppIn13006, ppIn13007) {
    return this.#t.get(ppIn13006) ?? ppIn13007;
  }
  #i(ppIn11291) {
    let ppBind21762 = (this.#r[ppIn11291] ?? 0) + 1;
    return ((this.#r[ppIn11291] = ppBind21762), `@${ppIn11291}${ppBind21762}`);
  }
}

export const nze = esmInit(() => {});

export function getPresentationPatchRecorderClass(): typeof tze {
  nze();
  return tze;
}

export const ensurePresentationPatchInit = nze;
