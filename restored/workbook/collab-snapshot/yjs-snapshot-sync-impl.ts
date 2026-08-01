// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Yjs prefix snapshot sync (legacy Binding818/819).
// Stage-3 wave-144.

import { esmInit } from "../../runtime/rolldown-runtime";
import { isCollabSnapshotEntry } from "./is-collab-snapshot-entry-impl";

export class workbookBinding818 {
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
  constructor(yssIn2897) {
    this.#e = yssIn2897.root;
    this.#t = yssIn2897.prefix;
    this.#n = yssIn2897.schemaVersion;
    this.#r = yssIn2897.runLocalTransaction;
    this.#i = yssIn2897.getCollabOrigins;
    this.#a = yssIn2897.readSnapshotFromOwner;
    this.#o = yssIn2897.applySnapshotToOwner;
    this.#s = yssIn2897.encodeSnapshot;
    this.#c = yssIn2897.decodeSnapshot;
    this.#l = String(yssIn2897.root.doc?.clientID ?? "0");
    this.#d = (yssIn14810, yssIn14811) => {
      this.#f(yssIn14810, yssIn14811);
    };
    this.#e.observe(this.#d);
    let yssBind10758 = this.#m();
    this.#u = yssBind10758;
    yssBind10758 && this.#o(this.#b(yssBind10758.snapshot));
  }
  dispose() {
    this.#e.unobserve(this.#d);
  }
  activate() {
    this.#p();
  }
  flushFromOwner() {
    this.activate();
    let yssBind13708 = this.#a(),
      yssBind13709 =
        yssBind13708 === undefined ? undefined : this.#y(yssBind13708),
      yssBind13710 = this.#h(this.#l),
      yssBind13711 = this.#m();
    if (
      yssBind13710?.snapshot === yssBind13709 ||
      (!yssBind13710 && yssBind13711?.snapshot === yssBind13709)
    )
      return;
    let yssBind13712 =
      Math.max(yssBind13710?.clock ?? -1, yssBind13711?.clock ?? -1) + 1;
    this.#r(() => {
      this.#e.set(this.#v(this.#l), {
        clock: yssBind13712,
        snapshot: yssBind13709,
      });
    });
  }
  #f(yssIn3869, yssIn3870) {
    if (
      ![...yssIn3869.keysChanged].some(
        (item) => item === this.#g() || item.startsWith(this.#_()),
      )
    )
      return;
    let yssBind12711 = this.#i();
    if (
      yssIn3870.origin === yssBind12711.local ||
      yssIn3870.origin === yssBind12711.record
    )
      return;
    let yssBind12712 = this.#m();
    (yssBind12712?.actorId === this.#u?.actorId &&
      yssBind12712?.clock === this.#u?.clock &&
      yssBind12712?.snapshot === this.#u?.snapshot) ||
      ((this.#u = yssBind12712), this.#o(this.#b(yssBind12712?.snapshot)));
  }
  #p() {
    this.#e.get(this.#g()) !== this.#n &&
      this.#r(() => {
        this.#e.set(this.#g(), this.#n);
      });
  }
  #m() {
    let yssBind11077;
    for (let [yssBind11705, yssBind11706] of this.#e.entries()) {
      if (
        !yssBind11705.startsWith(this.#_()) ||
        !isCollabSnapshotEntry(yssBind11706)
      )
        continue;
      let yssBind12221 = yssBind11705.slice(this.#_().length);
      if (!yssBind11077) {
        yssBind11077 = {
          actorId: yssBind12221,
          clock: yssBind11706.clock,
          snapshot: yssBind11706.snapshot,
        };
        continue;
      }
      if (yssBind11706.clock > yssBind11077.clock) {
        yssBind11077 = {
          actorId: yssBind12221,
          clock: yssBind11706.clock,
          snapshot: yssBind11706.snapshot,
        };
        continue;
      }
      yssBind11706.clock === yssBind11077.clock &&
        yssBind12221 > yssBind11077.actorId &&
        (yssBind11077 = {
          actorId: yssBind12221,
          clock: yssBind11706.clock,
          snapshot: yssBind11706.snapshot,
        });
    }
    return yssBind11077;
  }
  #h(yssIn11792) {
    let yssBind22110 = this.#e.get(this.#v(yssIn11792));
    return isCollabSnapshotEntry(yssBind22110) ? yssBind22110 : undefined;
  }
  #g() {
    return `${this.#t}.schemaVersion`;
  }
  #_() {
    return `${this.#t}.state.`;
  }
  #v(yssIn14812) {
    return `${this.#_()}${yssIn14812}`;
  }
  #y(yssIn14018) {
    return JSON.stringify(this.#s(yssIn14018));
  }
  #b(yssIn12922) {
    if (yssIn12922 !== undefined) return this.#c(JSON.parse(yssIn12922));
  }
}

export const workbookBinding819 = esmInit(() => {});
export const ensureYjsSnapshotSyncInit = workbookBinding819;
