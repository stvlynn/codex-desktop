// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: spreadsheet Worksheets collection
// (legacy TXe / wXe / CXe / EXe).
// Stage-3 wave-88 cohesive worksheets-collection kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { ensureSheetInit, Sheet } from "./ensure-sheet-init";
import { sheet } from "./sheet-bag";
import { shH } from "./worksheets-boundary-hooks";

/** Null-object worksheet (legacy yXe) from sheet bag. */
const NullSheet: any = new Proxy(function () {} as any, {
  construct(_t, args) {
    ensureSheetInit();
    return new (sheet.yXe as any)(...args);
  },
  get(_t, prop) {
    ensureSheetInit();
    const v = (sheet.yXe as any)[prop];
    return typeof v === "function" ? v.bind(sheet.yXe) : v;
  },
});

export function CXe(props: any): any[] {
  let wsBind12253 = [...props]
      .map((item, index) => {
        let wsBind18580 = item.sheetId?.trim(),
          wsBind18581 = item.name?.trim(),
          wsBind18582 = Number.isFinite(item.index) ? item.index : index;
        return !wsBind18580 || !wsBind18581
          ? null
          : {
              sheetId: wsBind18580,
              name: wsBind18581,
              index: wsBind18582,
            };
      })
      .filter((item) => item != null)
      .sort((wsIn16100, wsIn16101) => wsIn16100.index - wsIn16101.index),
    wsBind12254 = new Set(),
    wsBind12255 = [];
  for (let wsBind20716 of wsBind12253)
    wsBind12254.has(wsBind20716.sheetId) ||
      (wsBind12254.add(wsBind20716.sheetId),
      wsBind12255.push({
        sheetId: wsBind20716.sheetId,
        name: wsBind20716.name,
        index: wsBind12255.length,
      }));
  return wsBind12255;
}

export let wXe: any;

export const TXe = esmInit(() => {
  shH.ensureKme();
  ensureSheetInit();
  wXe = class {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o;
    constructor(wsIn4810: any, wsIn4811: any) {
      this.#e = wsIn4811;
      this.#t = [];
      this.#n = new Map();
      this.#r = new Map();
      this.#a = 1;
      this.#o = 1;
      wsIn4810.forEach((item) => {
        let wsBind21715 = this.#u(item.name);
        this.#s({
          ...item,
          name: wsBind21715,
        });
      });
      let wsBind14181 = this.#t[0];
      this.#i = wsBind14181?.name;
    }
    getSheetCount() {
      return this.#t.length;
    }
    getSheetIndex(wsIn11426: any) {
      let wsBind21873 = this.#n.get(wsIn11426);
      return wsBind21873 ? wsBind21873.index : null;
    }
    getSheetNameByIndex(wsIn10058: any) {
      return wsIn10058 < 0 || wsIn10058 >= this.#t.length
        ? null
        : (this.#t[wsIn10058]?.name ?? null);
    }
    getItemAt(wsIn10037: any) {
      let wsBind20517 = this.#t[wsIn10037];
      if (!wsBind20517)
        throw Error(`Worksheet at index ${wsIn10037} not found`);
      return wsBind20517;
    }
    getFirst() {
      return this.getItemAt(0);
    }
    getOrAdd(wsIn4129: any, wsIn4130: any) {
      let wsBind13115 = wsIn4129?.trim();
      if (!wsBind13115)
        throw Error("worksheets.getOrAdd(name) requires a non-empty name.");
      let wsBind13116 = this.#n.get(wsBind13115);
      if (wsBind13116) return wsBind13116;
      if (wsIn4130?.renameFirstIfOnlyNewSpreadsheet) {
        let wsBind20153 = this.#t.length === 1 ? this.#t[0] : undefined;
        if (wsBind20153 && wsBind20153.name === "New spreadsheet")
          return ((wsBind20153.name = wsBind13115), wsBind20153);
      }
      return this.add(wsBind13115);
    }
    add(wsIn2165: any) {
      let wsBind9149 = wsIn2165?.trim();
      if (wsBind9149) {
        let wsBind16432 = this.#n.get(wsBind9149);
        if (wsBind16432)
          return (
            shH.sheetLog.warn(
              "validation",
              `Worksheet "${wsBind9149}" already exists. Returning existing worksheet.`,
            ),
            wsBind16432
          );
      }
      let wsBind9150 = this.#t.length,
        wsBind9151 = this.#u(wsBind9149),
        wsBind9152 = String(this.#o);
      this.#o += 1;
      let wsBind9153 = this.#s({
        name: wsBind9151,
        sheetId: wsBind9152,
        index: wsBind9150,
      });
      this.#i = wsBind9153.name;
      let wsBind9154 = this.#e.workbook.getRecorder();
      if (wsBind9154) {
        let wsBind20188 = wsBind9154.assignAlias(
            wsBind9153,
            wsBind9153.name,
            "sheet",
          ),
          wsBind20189 = {
            op: "sheet.add",
            name: wsBind9153.name,
            as: wsBind20188,
          };
        wsBind9154.record(wsBind20189);
      }
      return (this.#c("add"), wsBind9153);
    }
    getItem(wsIn6050: any) {
      let wsBind16085 = this.#n.get(wsIn6050);
      if (!wsBind16085) {
        let wsBind18608 = this.#t.map((item) => item.name).filter(Boolean),
          wsBind18609 =
            wsBind18608.length > 0
              ? ` (available: ${wsBind18608.join(", ")})`
              : "";
        throw Error(`Worksheet ${wsIn6050} not found${wsBind18609}`);
      }
      return wsBind16085;
    }
    getItemOrNullObject(wsIn11871: any) {
      return this.#n.get(wsIn11871) ?? new NullSheet(wsIn11871, this.#e);
    }
    getItemBySheetId(wsIn13549: any) {
      return this.#r.get(wsIn13549);
    }
    getTopologyEntries() {
      let wsBind17843 = [];
      for (let wsBind20373 of this.#t) {
        let wsBind21080 = wsBind20373.sheetId?.trim();
        wsBind21080 &&
          wsBind17843.push({
            sheetId: wsBind21080,
            name: wsBind20373.name,
            index: wsBind17843.length,
          });
      }
      return wsBind17843;
    }
    syncTopology(wsIn1722: any) {
      let wsBind8072 = CXe(wsIn1722);
      if (wsBind8072.length === 0) return;
      let wsBind8073 = new Set(wsBind8072.map((item) => item.sheetId));
      for (let wsBind16234 of wsBind8072) {
        let wsBind16618 = this.#r.get(wsBind16234.sheetId);
        if (!wsBind16618) {
          let wsBind20867 = this.#u(wsBind16234.name);
          wsBind16618 = this.#s({
            name: wsBind20867,
            sheetId: wsBind16234.sheetId,
            index: wsBind16234.index,
          });
        }
        wsBind16618.name !== wsBind16234.name &&
          wsBind16618.writeName(wsBind16234.name, {
            record: false,
          });
      }
      let wsBind8074 = this.#t.filter((item) => {
        let wsBind22004 = item.sheetId?.trim();
        return !wsBind22004 || !wsBind8073.has(wsBind22004);
      });
      for (let wsBind22978 of wsBind8074)
        this.#f(wsBind22978, {
          notify: false,
        });
      let wsBind8075 = [];
      for (let wsBind21767 of wsBind8072) {
        let wsBind22302 = this.#r.get(wsBind21767.sheetId);
        wsBind22302 && wsBind8075.push(wsBind22302);
      }
      wsBind8075.length !== 0 &&
        ((this.#t = wsBind8075),
        this.#m(),
        (!this.#i || !this.#n.has(this.#i)) && (this.#i = this.#t[0]?.name),
        this.#c("topology-sync"));
    }
    get items() {
      return [...this.#t];
    }
    getActiveWorksheet() {
      if (this.#i) {
        let wsBind22321 = this.#n.get(this.#i);
        if (wsBind22321) return wsBind22321;
      }
      let wsBind16833 = this.#t[0];
      if (!wsBind16833) throw Error("No worksheets available");
      return ((this.#i = wsBind16833.name), wsBind16833);
    }
    getActive() {
      return this.getActiveWorksheet();
    }
    setActiveWorksheet(wsIn10470: any) {
      if (!this.#n.has(wsIn10470))
        throw Error(`Worksheet ${wsIn10470} not found`);
      this.#i = wsIn10470;
    }
    toProto() {
      return this.#t
        .slice()
        .sort((wsIn16102, wsIn16103) => wsIn16102.index - wsIn16103.index)
        .map((item) => item.toProto());
    }
    [Symbol.iterator]() {
      return this.#t[Symbol.iterator]();
    }
    #s(wsIn1689) {
      let wsBind8006 = new Sheet(wsIn1689, {
        workbook: this.#e.workbook,
        fontFamilyCache: this.#e.fontFamilyCache,
        pivotTables: this.#e.pivotTables,
        slicers: this.#e.slicers,
        getOrCreateWorksheetState: this.#e.getOrCreateWorksheetState,
        getOrCreateWorksheetStyleRefsState:
          this.#e.getOrCreateWorksheetStyleRefsState,
        notifyCellFormulaChanged: this.#e.notifyCellFormulaChanged,
        notifyCellValueChanged: this.#e.notifyCellValueChanged,
        onDelete: (wsIn16450) => this.#f(wsIn16450),
        onNameChange: (wsIn15921, wsIn15922, wsIn15923) =>
          this.#p(wsIn15921, wsIn15922, wsIn15923),
        onIndexChange: (wsIn15924, wsIn15925, wsIn15926) =>
          this.#h(wsIn15924, wsIn15925, wsIn15926),
      });
      this.#t.push(wsBind8006);
      this.#n.set(wsBind8006.name, wsBind8006);
      let wsBind8007 = wsBind8006.sheetId?.trim();
      if (wsBind8007) {
        this.#r.set(wsBind8007, wsBind8006);
        let wsBind20469 = Number(wsBind8007);
        Number.isFinite(wsBind20469) &&
          wsBind20469 >= this.#o &&
          (this.#o = wsBind20469 + 1);
      }
      return wsBind8006;
    }
    #c(wsIn13072) {
      this.#e.onWorksheetCollectionChanged?.(wsIn13072);
    }
    #l() {
      let wsBind21000;
      do wsBind21000 = `Sheet ${this.#a++}`;
      while (this.#n.has(wsBind21000));
      return wsBind21000;
    }
    #u(wsIn7471) {
      if (wsIn7471 && wsIn7471.trim()) return this.#d(wsIn7471.trim());
      let wsBind17944 = this.#l();
      return (
        shH.sheetLog.warn(
          "validation",
          `Worksheet missing a name. Assigned "${wsBind17944}".`,
        ),
        wsBind17944
      );
    }
    #d(wsIn5311) {
      if (!this.#n.has(wsIn5311)) return wsIn5311;
      let wsBind14954 = 2,
        wsBind14955 = `${wsIn5311} (${wsBind14954})`;
      for (; this.#n.has(wsBind14955); ) {
        wsBind14954 += 1;
        wsBind14955 = `${wsIn5311} (${wsBind14954})`;
      }
      return (
        shH.sheetLog.warn(
          "validation",
          `Worksheet "${wsIn5311}" already exists. Assigned "${wsBind14955}".`,
        ),
        wsBind14955
      );
    }
    #f(wsIn3521, wsIn3522) {
      let wsBind11991 = wsIn3521.name,
        wsBind11992 = wsIn3521.sheetId?.trim(),
        wsBind11993 = this.#e.workbook.awareness,
        wsBind11994 = wsBind11993.activeSheetName === wsBind11991;
      this.#t = this.#t.filter((item) => item !== wsIn3521);
      wsBind11991 && this.#n.delete(wsBind11991);
      wsBind11992 && this.#r.delete(wsBind11992);
      this.#m();
      wsBind11991 && wsBind11993.forgetSheet(wsBind11991);
      this.#i === wsBind11991 && (this.#i = this.#t[0]?.name);
      wsBind11994 && wsBind11993.setActiveSheetName(this.#t[0]?.name ?? null);
      wsIn3522?.notify !== false && this.#c("delete");
    }
    #p(wsIn4794, wsIn4795, wsIn4796) {
      if (wsIn4795 && this.#n.get(wsIn4795) === wsIn4794) {
        this.#n.delete(wsIn4795);
        let wsBind20404 = this.#t.find(
          (item) => item !== wsIn4794 && item.name === wsIn4795,
        );
        wsBind20404 && this.#n.set(wsIn4795, wsBind20404);
      }
      wsIn4796 && this.#n.set(wsIn4796, wsIn4794);
      this.#i === wsIn4795 && (this.#i = wsIn4796);
      wsIn4795 && this.#e.workbook.awareness.renameSheet(wsIn4795, wsIn4796);
      wsIn4795 !== wsIn4796 && this.#c("rename");
    }
    #m() {
      this.#t.forEach((item, index) => {
        item.writeIndex(index, {
          notifyCollection: false,
          record: false,
        });
      });
    }
    #h(wsIn4722, wsIn4723, wsIn4724) {
      let wsBind14023 = this.#t.indexOf(wsIn4722);
      if (wsBind14023 < 0) return;
      let wsBind14024 = Math.max(0, Math.min(wsIn4724, this.#t.length - 1));
      if (wsBind14023 === wsBind14024) {
        wsIn4722.writeIndex(wsBind14024, {
          notifyCollection: false,
          record: false,
        });
        return;
      }
      this.#t.splice(wsBind14023, 1);
      this.#t.splice(wsBind14024, 0, wsIn4722);
      this.#m();
      this.#c("move");
    }
  };
});
export const EXe = esmInit(() => {
  TXe();
});
