// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: alias/id patch recorder (legacy Xht / Yht / Jht).
// Stage-3 wave-152.

import { esmInit } from "../../runtime/rolldown-runtime";

export let workbookBinding1963: any;
export let Jht: any;
export let Yht: any;

export const Xht = esmInit(() => {
      workbookBinding1963 = new WeakMap();
      Jht = (aprIn9516) => {
        let aprBind20027 = workbookBinding1963.get(aprIn9516);
        if (aprBind20027) return aprBind20027;
        let aprBind20028 = {
          aliases: new WeakMap(),
          counts: {},
        };
        return (
          workbookBinding1963.set(aprIn9516, aprBind20028),
          aprBind20028
        );
      };
      Yht = class {
        #e = [];
        #t;
        #n = {};
        #r;
        #i = [];
        #a = new Map();
        constructor(aprIn7171) {
          if (aprIn7171 && typeof aprIn7171 == "object") {
            let aprBind21205 = Jht(aprIn7171);
            this.#t = aprBind21205.aliases;
            this.#r = aprBind21205.counts;
            return;
          }
          this.#t = new WeakMap();
          this.#r = {};
        }
        record(aprIn15089) {
          this.#e.push(aprIn15089);
        }
        defer(aprIn15171) {
          this.#i.push(aprIn15171);
        }
        deferOnce(aprIn14280, aprIn14281) {
          this.#a.set(aprIn14280, aprIn14281);
        }
        getPatch() {
          let aprBind14191 = [...this.#e],
            aprBind14192 = this.#i,
            aprBind14193 = this.#a;
          this.#i = [];
          this.#a = new Map();
          for (let aprBind22369 of aprBind14192) {
            let aprBind22633 = aprBind22369();
            aprBind22633 &&
              aprBind14191.push(aprBind22633);
          }
          for (let aprBind22098 of aprBind14193.values()) {
            let aprBind22634 = aprBind22098();
            aprBind22634 &&
              aprBind14191.push(aprBind22634);
          }
          return ((this.#e = aprBind14191), [...aprBind14191]);
        }
        getIdMap() {
          return {
            ...this.#n,
          };
        }
        getAlias(aprIn14282) {
          return this.#t.get(aprIn14282);
        }
        assignAlias(aprIn9332, aprIn9333, aprIn9334) {
          let aprBind19890 = this.#t.get(aprIn9332),
            aprBind19891 =
              aprBind19890 ?? this.#o(aprIn9334);
          return (
            aprBind19890 ||
              this.#t.set(aprIn9332, aprBind19891),
            (this.#n[aprBind19891] = aprIn9333),
            aprBind19891
          );
        }
        #o(aprIn11069) {
          let aprBind21581 = (this.#r[aprIn11069] ?? 0) + 1;
          return (
            (this.#r[aprIn11069] = aprBind21581),
            `@${aprIn11069}${aprBind21581}`
          );
        }
      };
});

export function ensureAliasPatchRecorderInit(): void {
  Xht();
}
