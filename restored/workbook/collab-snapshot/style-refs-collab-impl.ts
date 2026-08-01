// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: collaborative cell styleRefs map (legacy Binding816/817).
// Stage-3 wave-144.

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  formatA1,
  initAddressUtils,
} from "../../utils/spreadsheet-address-utils";
import { ensureFormulaInit as workbookF } from "../formula";
import { workbookHelper375 } from "../formula-a1-address";

export class workbookBinding816 {
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
  #u;
  #d;
  #f;
  #p;
  constructor(srcIn2132) {
    this.#e = srcIn2132.isCollaborativeStateReady ?? (() => true);
    this.#t = srcIn2132.styleRefsState;
    this.#n = srcIn2132.runLocalTransaction;
    this.#r = srcIn2132.getCollabOrigins;
    this.#i = srcIn2132.resolveStyleIndexForStyleId;
    this.#a = srcIn2132.getOrCreateStyleIdForStyleIndex;
    this.#o = srcIn2132.getCurrentStyleIndex;
    this.#s = srcIn2132.getOrCreateCell;
    this.#c = srcIn2132.setLogicalStyleIndex;
    this.#l = srcIn2132.iterateCells;
    this.#u = new Map();
    this.#d = new Set();
    this.#p = (srcIn14377, srcIn14378) => {
      this.#g(srcIn14377, srcIn14378);
    };
    this.#f = srcIn2132.subscribeToStyleStore(() => {
      this.#v();
    });
    this.#t.observe(this.#p);
    this.#m();
  }
  disconnect() {
    this.#f?.();
    this.#t.unobserve(this.#p);
  }
  setCellStyleRef(srcIn7189, srcIn7190, srcIn7191) {
    let srcBind17560 = formatA1(srcIn7189, srcIn7190);
    this.#u.set(srcBind17560, srcIn7191);
    this.#e() &&
      this.#t.get(srcBind17560) !== srcIn7191 &&
      this.#n(() => {
        this.#t.set(srcBind17560, srcIn7191);
      });
  }
  getCellStyleRef(srcIn8174, srcIn8175) {
    let srcBind18684 = formatA1(srcIn8174, srcIn8175),
      srcBind18685 = this.#u.get(srcBind18684);
    if (srcBind18685) return srcBind18685;
    let srcBind18686 = this.#t.get(srcBind18684);
    if (srcBind18686)
      return (this.#u.set(srcBind18684, srcBind18686), srcBind18686);
  }
  syncCellStyleRefFromStyleIndex(srcIn10262, srcIn10263, srcIn10264) {
    let srcBind20735 = this.#a(srcIn10264);
    return (
      this.setCellStyleRef(srcIn10262, srcIn10263, srcBind20735),
      srcBind20735
    );
  }
  hydrateFromCells() {
    this.#e() && (this.#h(), this.#m());
  }
  #m() {
    for (let [srcBind22872, srcBind22873] of this.#t.entries())
      this.#_(srcBind22872, srcBind22873);
  }
  #h() {
    let srcBind11343 = [];
    for (let srcBind15658 of this.#l()) {
      let srcBind16223 = workbookHelper375(srcBind15658.address);
      if (!srcBind16223) continue;
      let srcBind16224 = this.#o(srcBind16223.row, srcBind16223.col);
      if (srcBind16224 == null) continue;
      let srcBind16225 = this.#a(srcBind16224),
        srcBind16226 = formatA1(srcBind16223.row, srcBind16223.col);
      srcBind11343.push({
        address: srcBind16226,
        styleId: srcBind16225,
      });
      this.#u.set(srcBind16226, srcBind16225);
    }
    srcBind11343.length !== 0 &&
      this.#n(() => {
        for (let srcBind21025 of srcBind11343)
          this.#t.get(srcBind21025.address) !== srcBind21025.styleId &&
            this.#t.set(srcBind21025.address, srcBind21025.styleId);
      });
  }
  #g(srcIn8768, srcIn8769) {
    let srcBind19292 = this.#r();
    if (
      !(
        srcIn8769.origin === srcBind19292.record ||
        srcIn8769.origin === srcBind19292.local
      )
    )
      for (let srcBind22804 of srcIn8768.keysChanged)
        this.#_(srcBind22804, this.#t.get(srcBind22804));
  }
  #_(srcIn3577, srcIn3578) {
    let srcBind12080 = workbookHelper375(srcIn3577);
    if (!srcBind12080) return;
    let srcBind12081 = formatA1(srcBind12080.row, srcBind12080.col);
    if (!srcIn3578) {
      this.#u.delete(srcBind12081);
      this.#d.delete(srcBind12081);
      return;
    }
    let srcBind12082 = this.#i(srcIn3578);
    if (srcBind12082 == null) {
      this.#u.set(srcBind12081, srcIn3578);
      this.#d.add(srcBind12081);
      return;
    }
    let srcBind12083 = this.#s(srcBind12080.row, srcBind12080.col);
    srcBind12083.styleIndex = srcBind12082;
    this.#c(srcBind12080.row, srcBind12080.col, srcBind12082);
    this.#u.set(srcBind12081, srcIn3578);
    this.#d.delete(srcBind12081);
  }
  #v() {
    if (this.#d.size !== 0)
      for (let srcBind22701 of Array.from(this.#d))
        this.#_(srcBind22701, this.#t.get(srcBind22701));
  }
}

export let ensureStyleRefsCollabInit = esmInit(() => {
  initAddressUtils();
  workbookF();
});

export const workbookBinding817 = ensureStyleRefsCollabInit;

export function getStyleRefsCollabClass(): typeof workbookBinding816 {
  ensureStyleRefsCollabInit();
  return workbookBinding816;
}
