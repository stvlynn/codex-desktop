// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: worksheet topology Yjs collab map (legacy Ngt / Mgt).
// Stage-3 wave-152.

import { esmInit } from "../../runtime/rolldown-runtime";
import { Array as YArray, Map as YMap } from "../../vendor/yjs";
import { Agt, normalizeSheetCatalog as jgt } from "../sheet-catalog";

const workbookBinding265 = YArray;
const workbookBinding266 = YMap;

export let workbookBinding1966: any;
export let Mgt: any;

export const Ngt = esmInit(() => {
  workbookBinding1966 = 1;
  Mgt = class {
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
    constructor(wstIn1710) {
      this.#e = wstIn1710.runLocalTransaction;
      this.#t = wstIn1710.getCollabOrigins;
      this.#n = wstIn1710.doc.getMap("worksheetTopology");
      this.#r = this.#h();
      this.#i = this.#g();
      this.#a = this.#_();
      this.#o = new Set();
      this.#s = (wstIn6981, wstIn6982) => {
        this.#d(wstIn6982) ||
          (!wstIn6981.keysChanged.has("entriesById") &&
            !wstIn6981.keysChanged.has("entryOrder") &&
            !wstIn6981.keysChanged.has("meta")) ||
          (this.#p(), this.#u());
      };
      this.#c = (wstIn11658, wstIn11659) => {
        wstIn11658.keysChanged.size !== 0 && (this.#d(wstIn11659) || this.#u());
      };
      this.#l = (wstIn11504, wstIn11505) => {
        wstIn11504.changes.delta.length !== 0 &&
          (this.#d(wstIn11505) || this.#u());
      };
      this.#n.observe(this.#s);
      this.#r && this.#r.observe(this.#c);
      this.#i && this.#i.observe(this.#l);
    }
    dispose() {
      this.#n.unobserve(this.#s);
      this.#r?.unobserve(this.#c);
      this.#i?.unobserve(this.#l);
      this.#o.clear();
    }
    onDidChange(wstIn9661) {
      return (
        this.#o.add(wstIn9661),
        () => {
          this.#o.delete(wstIn9661);
        }
      );
    }
    readEntries() {
      let wstBind11100 = this.#r ?? this.#h(),
        wstBind11101 = this.#i ?? this.#g();
      if (!wstBind11100) return [];
      let wstBind11102 = [],
        wstBind11103 = new Set();
      for (let wstBind22039 of wstBind11101?.toArray() ?? [])
        wstBind11103.has(wstBind22039) ||
          (wstBind11100.has(wstBind22039) &&
            (wstBind11103.add(wstBind22039), wstBind11102.push(wstBind22039)));
      for (let wstBind22784 of wstBind11100.keys())
        wstBind11103.has(wstBind22784) ||
          (wstBind11103.add(wstBind22784), wstBind11102.push(wstBind22784));
      let wstBind11104 = [];
      for (let wstBind18818 of wstBind11102) {
        let wstBind19362 = wstBind11100.get(wstBind18818);
        if (!wstBind19362) continue;
        let wstBind19363 = Agt(wstBind19362);
        wstBind19363 &&
          wstBind11104.push({
            sheetId: wstBind19363.sheetId,
            name: wstBind19363.name,
            index: wstBind11104.length,
          });
      }
      return wstBind11104;
    }
    replaceEntries(wstIn3550) {
      this.#f();
      let wstBind12024 = this.#r,
        wstBind12025 = this.#i;
      if (!wstBind12024 || !wstBind12025) return;
      let wstBind12026 = jgt(wstIn3550),
        wstBind12027 = new Set(wstBind12026.map((item) => item.sheetId)),
        wstBind12028 = wstBind12026.map((item) => item.sheetId);
      this.#e(() => {
        for (let wstBind22868 of [...wstBind12024.keys()])
          wstBind12027.has(wstBind22868) || wstBind12024.delete(wstBind22868);
        for (let wstBind22278 of wstBind12026)
          wstBind12024.set(wstBind22278.sheetId, {
            sheetId: wstBind22278.sheetId,
            name: wstBind22278.name,
          });
        wstBind12025.delete(0, wstBind12025.length);
        wstBind12028.length > 0 && wstBind12025.insert(0, wstBind12028);
      });
    }
    #u() {
      for (let wstBind23099 of this.#o) wstBind23099();
    }
    #d(wstIn11005) {
      let wstBind21529 = this.#t();
      return (
        wstIn11005.origin === wstBind21529.local ||
        wstIn11005.origin === wstBind21529.record
      );
    }
    #f() {
      let wstBind11409 = this.#h();
      if (wstBind11409) this.#r = wstBind11409;
      else {
        let wstBind21730 = new workbookBinding266();
        this.#n.set("entriesById", wstBind21730);
        this.#r = wstBind21730;
      }
      let wstBind11410 = this.#g();
      if (wstBind11410) this.#i = wstBind11410;
      else {
        let wstBind21775 = new workbookBinding265();
        this.#n.set("entryOrder", wstBind21775);
        this.#i = wstBind21775;
      }
      let wstBind11411 = this.#_();
      if (wstBind11411) this.#a = wstBind11411;
      else {
        let wstBind21982 = new workbookBinding266();
        this.#n.set("meta", wstBind21982);
        this.#a = wstBind21982;
      }
      this.#p();
      this.#m();
    }
    #p() {
      let wstBind13752 = this.#h();
      wstBind13752 !== this.#r &&
        (this.#r?.unobserve(this.#c),
        (this.#r = wstBind13752),
        this.#r?.observe(this.#c));
      let wstBind13753 = this.#g();
      wstBind13753 !== this.#i &&
        (this.#i?.unobserve(this.#l),
        (this.#i = wstBind13753),
        this.#i?.observe(this.#l));
      let wstBind13754 = this.#_();
      wstBind13754 !== this.#a && (this.#a = wstBind13754);
    }
    #m() {
      this.#a &&
        this.#a.get("schemaVersion") !== workbookBinding1966 &&
        this.#e(() => {
          this.#a?.set("schemaVersion", workbookBinding1966);
        });
    }
    #h() {
      let wstBind21731 = this.#n.get("entriesById");
      if (wstBind21731 instanceof workbookBinding266) return wstBind21731;
    }
    #g() {
      let wstBind21776 = this.#n.get("entryOrder");
      if (wstBind21776 instanceof workbookBinding265) return wstBind21776;
    }
    #_() {
      let wstBind21983 = this.#n.get("meta");
      if (wstBind21983 instanceof workbookBinding266) return wstBind21983;
    }
  };
});

export function ensureWorksheetTopologyInit(): void {
  Ngt();
}
