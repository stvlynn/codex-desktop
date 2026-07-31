// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: presentation Table element VO + style/preview helpers
// (legacy _workbookH / _workbookM / Binding1331–1333 / eDe…cDe).
// Stage-3 wave-84 cohesive table-element impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import { Qt, j } from "../presentation-protobuf";
import {
  SlideElement as _workbookZ,
  ensureSlideElementInit as workbookB,
} from "../slide-element";
import { Fill as workbookCt, ensureFillInit as workbookWt } from "../fill";
import {
  emuToFrameUnit as of,
  frameUnitToEmu as workbookTt,
} from "../geometry-transform";
import {
  composeScopedId as workbookHelper302,
  ensureStableIdClusterInit as workbookBinding647,
} from "../stable-id";
import {
  workbookBinding1331,
  _workbookM,
  workbookBinding1332,
  workbookBinding1333,
} from "./te-slots";
import { teH } from "./boundary-hooks";

export function eDe(teIn10186: any) {
  if (!teIn10186) return;
  let teBind20645 = teIn10186.trim();
  if (!teBind20645) return;
  if (workbookBinding1333.test(teBind20645)) return teBind20645;
  let teBind20646 = tDe(teBind20645);
  return workbookBinding1332[teBind20646];
}
export function tDe(teIn10694: any) {
  return teIn10694
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/\s*-\s*/g, " - ");
}
export function nDe(teIn4781: any) {
  if (
    teIn4781 &&
    !(
      teIn4781.left === undefined &&
      teIn4781.right === undefined &&
      teIn4781.top === undefined &&
      teIn4781.bottom === undefined
    )
  )
    return {
      left: teIn4781.left === undefined ? undefined : of(teIn4781.left),
      right: teIn4781.right === undefined ? undefined : of(teIn4781.right),
      top: teIn4781.top === undefined ? undefined : of(teIn4781.top),
      bottom: teIn4781.bottom === undefined ? undefined : of(teIn4781.bottom),
    };
}
export function rDe(teIn4782: any) {
  if (
    teIn4782 &&
    !(
      teIn4782.left === undefined &&
      teIn4782.right === undefined &&
      teIn4782.top === undefined &&
      teIn4782.bottom === undefined
    )
  )
    return {
      left: teIn4782.left === undefined ? undefined : workbookTt(teIn4782.left),
      right:
        teIn4782.right === undefined ? undefined : workbookTt(teIn4782.right),
      top: teIn4782.top === undefined ? undefined : workbookTt(teIn4782.top),
      bottom:
        teIn4782.bottom === undefined ? undefined : workbookTt(teIn4782.bottom),
    };
}
export function iDe(teIn6226: any, teIn6227: any) {
  if (!Array.isArray(teIn6226) || teIn6226.length === 0)
    throw Error(`${teIn6227} must include at least one column track.`);
  return teIn6226.map((item, index) => {
    let teBind20510 = teH.Binding1327(item, `${teIn6227}[${index}]`);
    if (teBind20510 === "auto")
      throw Error(`${teIn6227}[${index}] must be fr(...) or fixed(...).`);
    return teBind20510;
  });
}
export function aDe(teIn13684: any) {
  return {
    mode: teIn13684.mode,
    value: teIn13684.value,
  };
}
export function oDe(teIn5339: any, teIn5340: any) {
  let teBind15022 = teIn5339.reduce(
      (accumulator, current) =>
        accumulator + (current.mode === "fixed" ? current.value : 0),
      0,
    ),
    teBind15023 = teIn5339.reduce(
      (accumulator, current) =>
        accumulator + (current.mode === "fr" ? current.value : 0),
      0,
    ),
    teBind15024 = Math.max(0, teIn5340 - teBind15022),
    teBind15025 = teBind15023 > 0 ? teBind15024 / teBind15023 : 0;
  return teIn5339.map((item) => {
    let teBind21330 =
      item.mode === "fixed" ? item.value : teBind15025 * item.value;
    return Number.isFinite(teBind21330) && teBind21330 > 0 ? teBind21330 : 1;
  });
}
export function sDe(teIn15121: any, teIn15122: any, teIn15123: any) {
  return workbookHelper302(teIn15121, teIn15122, teIn15123);
}
export function cDe(teIn4389: any, teIn4390: any = 140) {
  if (!teIn4389.length) return;
  let teBind13548 =
    teIn4389.find((item) =>
      item.cells.some((_item) => _item.value.trim().length > 0),
    ) ?? teIn4389[0];
  if (!teBind13548) return;
  let teBind13549 = teBind13548.cells
    .map((item) => item.value)
    .map((item) => item.replace(/\r?\n/g, " ").trim())
    .filter((item) => item.length > 0);
  if (teBind13549.length === 0) return;
  let teBind13550 = teBind13549.join(" | ");
  if (teBind13550.length <= teIn4390) return teBind13550;
  let teBind13551 = Math.max(1, teIn4390 - 3);
  return `${teBind13550.slice(0, teBind13551)}...`;
}
export const _workbookH = esmInit(() => {
  Qt();
  workbookB();
  teH.ensureYEe();
  workbookWt();
  teH.ensureBinding1321();
  teH.ensureQEe();
  teH.ensureDollarEe();
  workbookBinding647();
  teH.ensureBinding1330();
  workbookBinding1331 = class {
    #e;
    constructor(teIn14900) {
      this.#e = teIn14900;
    }
    get(teIn13732, teIn13733) {
      return this.#e.getCell(teIn13732, teIn13733);
    }
    set(teIn13413, teIn13414, teIn13415) {
      this.#e.setCellValue(teIn13413, teIn13414, teIn13415);
    }
    block(teIn14164) {
      return new teH.Binding1317(this.#e, teIn14164);
    }
  };
  _workbookM = class extends _workbookZ {
    type = "table";
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
    #m;
    #h;
    #g;
    #_;
    #v;
    #y;
    #b;
    #x;
    constructor(teIn1296, teIn1297) {
      let teBind6984 = teIn1297?.table;
      super(teIn1296, teIn1297 ?? {});
      let teBind6985 = (teBind6984?.columnWidths ?? []).map((item) =>
        Number.isFinite(item) && item > 0 ? of(item) : 0,
      );
      this.#t = teBind6985.some((item) => item > 0);
      this.#e = this.#t ? teBind6985 : [];
      let teBind6986 = teBind6984?.rows ?? [];
      this.#r = teBind6986.map((item) => new teH.Binding1316(item, teIn1296));
      this.#i = teBind6986.some(
        (item) => item.heightEmu === undefined || item.heightEmu <= 0,
      );
      let teBind6987 = teBind6984?.properties;
      this.#c = teBind6987?.styleId;
      this.#l = teBind6987?.styleId;
      this.#u = new workbookCt({
        type: "proto",
        proto: teBind6987?.fill,
      });
      this.#d = teBind6987?.rightToLeft;
      this.#h = teBind6987?.firstRow;
      this.#g = teBind6987?.lastRow;
      this.#_ = teBind6987?.firstColumn;
      this.#v = teBind6987?.lastColumn;
      this.#y = teBind6987?.bandedRows;
      this.#b = teBind6987?.bandedColumns;
      this.#x = teBind6987?.keepTogether;
      this.#f =
        teBind6987?.effects?.map((teIn16440) => ({
          ...teIn16440,
        })) ?? [];
      this.#p = teBind6987?.styleXml;
      this.#m = nDe(teBind6987?.cellMargins);
      this.data.type = j.ELEMENT_TYPE_TABLE;
    }
    get id() {
      return this.data.id;
    }
    toSnapshot() {
      let teBind14392 = this.slideId,
        teBind14393 = this.id;
      return {
        aid: sDe("tb", teBind14392, teBind14393),
        kind: "table",
        id: teBind14393,
        slideId: teBind14392,
        name: this.name,
        rows: this.rowCount,
        cols: this.columnCount,
        preview: cDe(this.#r),
        frame: this.frame,
      };
    }
    get cells() {
      return ((this.#a ||= new workbookBinding1331(this)), this.#a);
    }
    get columns() {
      return ((this.#o ||= new teH.Binding1323(this)), this.#o);
    }
    get borders() {
      return ((this.#s ||= new teH.Binding1324(this)), this.#s);
    }
    set borders(teIn13784) {
      this.borders.assign(teIn13784);
    }
    get rows() {
      return [...this.#r];
    }
    get rowCount() {
      return this.#r.length;
    }
    get columnCount() {
      return this.#n && this.#n.length > 0
        ? this.#n.length
        : this.#e.length > 0
          ? this.#e.length
          : this.#r.reduce(
              (accumulator, current) =>
                Math.max(accumulator, current.cells.length),
              0,
            );
    }
    get columnWidths() {
      return this.#n ? this.#C() : [...this.#e];
    }
    get hasExplicitColumnWidths() {
      return this.#t;
    }
    set columnWidths(teIn6231) {
      if (
        ((this.#n = undefined),
        !Array.isArray(teIn6231) || teIn6231.length === 0)
      ) {
        this.#e = [];
        this.#t = false;
        return;
      }
      this.#e = teIn6231.map((item) =>
        Number.isFinite(item) && item > 0 ? item : 1,
      );
      this.#t = true;
    }
    get columnTracks() {
      return this.#n ? this.#n.map(aDe) : undefined;
    }
    set columnTracks(teIn4351) {
      if (!teIn4351 || teIn4351.length === 0) {
        this.#n = undefined;
        return;
      }
      let teBind13485 = iDe(teIn4351, "table.columnTracks"),
        teBind13486 = this.#r.reduce(
          (accumulator, current) => Math.max(accumulator, current.cells.length),
          0,
        );
      if (teBind13486 > 0 && teBind13485.length !== teBind13486)
        throw Error(
          `Expected ${teBind13486} column tracks, received ${teBind13485.length}.`,
        );
      this.#n = teBind13485;
      this.#e = [];
      this.#t = false;
    }
    get style() {
      return this.#c;
    }
    set style(teIn10389) {
      let teBind20862 = teIn10389?.trim();
      this.#c = teBind20862 && teBind20862.length > 0 ? teBind20862 : undefined;
      this.#l = this.#c;
    }
    get styleId() {
      return this.#l;
    }
    set styleId(teIn10329) {
      let teBind20796 = teIn10329?.trim();
      this.#l = teBind20796 && teBind20796.length > 0 ? teBind20796 : undefined;
      this.#c = this.#l;
    }
    get styleOptions() {
      return {
        headerRow: this.#h,
        totalRow: this.#g,
        firstColumn: this.#_,
        lastColumn: this.#v,
        bandedRows: this.#y,
        bandedColumns: this.#b,
      };
    }
    set styleOptions(teIn2745) {
      if (!teIn2745) {
        this.#h = undefined;
        this.#g = undefined;
        this.#_ = undefined;
        this.#v = undefined;
        this.#y = undefined;
        this.#b = undefined;
        return;
      }
      teIn2745.headerRow !== undefined && (this.#h = teIn2745.headerRow);
      teIn2745.totalRow !== undefined && (this.#g = teIn2745.totalRow);
      teIn2745.firstColumn !== undefined && (this.#_ = teIn2745.firstColumn);
      teIn2745.lastColumn !== undefined && (this.#v = teIn2745.lastColumn);
      teIn2745.bandedRows !== undefined && (this.#y = teIn2745.bandedRows);
      teIn2745.bandedColumns !== undefined &&
        (this.#b = teIn2745.bandedColumns);
    }
    get fill() {
      return this.#u;
    }
    set fill(teIn7514) {
      if (teIn7514 instanceof workbookCt) {
        let teBind20571 = teIn7514.toProto();
        this.#u = teBind20571
          ? new workbookCt({
              type: "proto",
              proto: teBind20571,
            })
          : new workbookCt();
        return;
      }
      this.#u = new workbookCt(teIn7514);
    }
    get rightToLeft() {
      return this.#d;
    }
    set rightToLeft(teIn14543) {
      this.#d = teIn14543;
    }
    get cellMargins() {
      return this.#m
        ? {
            ...this.#m,
          }
        : undefined;
    }
    set cellMargins(teIn12890) {
      this.#m = teIn12890
        ? {
            ...teIn12890,
          }
        : undefined;
    }
    get keepTogether() {
      return this.#x;
    }
    set keepTogether(teIn14395) {
      this.#x = teIn14395;
    }
    setColumnWidths(teIn7412) {
      if (teIn7412.length !== this.columnCount)
        throw Error(
          `Expected ${this.columnCount} column widths, received ${teIn7412.length}.`,
        );
      this.columnWidths = teIn7412;
    }
    setColumnTracks(teIn7413) {
      if (teIn7413.length !== this.columnCount)
        throw Error(
          `Expected ${this.columnCount} column tracks, received ${teIn7413.length}.`,
        );
      this.columnTracks = teIn7413;
    }
    setValues(teIn5621) {
      let teBind15467 = teIn5621.length,
        teBind15468 = teIn5621.reduce(
          (accumulator, current) => Math.max(accumulator, current.length),
          0,
        );
      this.#E(teBind15467, teBind15468);
      teIn5621.forEach((item, index) => {
        item.forEach((_item, _index) => {
          let teBind21471 = this.#r[index]?.getCell(_index);
          teBind21471 && (teBind21471.value = _item);
        });
      });
    }
    setCellValue(teIn11644, teIn11645, teIn11646) {
      let teBind22026 = this.getCell(teIn11644, teIn11645);
      teBind22026.value = teIn11646;
    }
    getCell(teIn5011, teIn5012) {
      if (teIn5011 < 0 || teIn5012 < 0)
        throw Error("Table addresses must be non-negative.");
      let teBind14451 = this.#r[teIn5011];
      if (!teBind14451)
        throw Error(`Row ${teIn5011} is outside the current table bounds.`);
      let teBind14452 = teBind14451.getCell(teIn5012);
      if (!teBind14452)
        throw Error(`Column ${teIn5012} is outside the current table bounds.`);
      return teBind14452;
    }
    getCellById(teIn8823) {
      if (teIn8823)
        for (let teBind21066 of this.#r) {
          let teBind21794 = teBind21066.cells.find(
            (item) => item.id === teIn8823,
          );
          if (teBind21794) return teBind21794;
        }
    }
    merge(teIn1406) {
      let { startRow, endRow, startColumn, endColumn } = teIn1406;
      if (
        startRow < 0 ||
        startColumn < 0 ||
        endRow < startRow ||
        endColumn < startColumn
      )
        throw Error("Invalid merge coordinates supplied.");
      let teBind7229 = this.rowCount - 1,
        teBind7230 = this.columnCount - 1;
      if (
        startRow > teBind7229 ||
        endRow > teBind7229 ||
        startColumn > teBind7230 ||
        endColumn > teBind7230
      )
        throw Error("Merge range exceeds current table bounds.");
      let teBind7231 = endRow - startRow + 1,
        teBind7232 = endColumn - startColumn + 1;
      for (let teBind10636 = startRow; teBind10636 <= endRow; teBind10636 += 1)
        for (
          let teBind11041 = startColumn;
          teBind11041 <= endColumn;
          teBind11041 += 1
        ) {
          let teBind11385 = this.#r[teBind10636]?.getCell(teBind11041);
          if (!teBind11385) continue;
          let teBind11386 = teBind10636 === startRow,
            teBind11387 = teBind11041 === startColumn;
          teBind11386 && teBind11387
            ? ((teBind11385.gridSpan = teBind7232 > 1 ? teBind7232 : undefined),
              (teBind11385.rowSpan = teBind7231 > 1 ? teBind7231 : undefined),
              (teBind11385.horizontalMerge = undefined),
              (teBind11385.verticalMerge = undefined))
            : ((teBind11385.gridSpan = undefined),
              (teBind11385.rowSpan = undefined),
              (teBind11385.horizontalMerge =
                teBind7232 > 1 ? !teBind11387 : undefined),
              (teBind11385.verticalMerge =
                teBind7231 > 1 ? !teBind11386 : undefined));
        }
    }
    toProto() {
      let teBind12371 = super.toProto();
      teBind12371.type = this.data.type;
      let teBind12372 = this.#C(),
        teBind12373 = this.#T(),
        teBind12374 = this.#S();
      return (
        (teBind12371.table = {
          columnWidths: teBind12372.map((item) => workbookTt(item)),
          rows: this.#r.map((item, index) => {
            let teBind20929 = item.toProto();
            return (
              teBind12373 &&
                (teBind20929.heightEmu = workbookTt(teBind12373[index] ?? 0)),
              teBind20929
            );
          }),
          properties: teBind12374,
        }),
        teBind12371
      );
    }
    #S() {
      let teBind7634 = this.#u?.toProto(),
        teBind7635 = this.context.getPresentation ? eDe(this.#c) : this.#l,
        teBind7636 =
          this.#h !== undefined ||
          this.#g !== undefined ||
          this.#_ !== undefined ||
          this.#v !== undefined ||
          this.#y !== undefined ||
          this.#b !== undefined ||
          this.#x !== undefined,
        teBind7637 = this.#f.length > 0,
        teBind7638 = this.#p !== undefined,
        teBind7639 = this.#d !== undefined,
        teBind7640 = rDe(this.#m);
      if (
        !(
          !teBind7634 &&
          !teBind7635 &&
          !teBind7636 &&
          !teBind7637 &&
          !teBind7638 &&
          !teBind7639 &&
          !teBind7640
        )
      )
        return {
          fill: teBind7634,
          rightToLeft: this.#d,
          firstRow: this.#h,
          lastRow: this.#g,
          firstColumn: this.#_,
          lastColumn: this.#v,
          bandedRows: this.#y,
          bandedColumns: this.#b,
          styleId: teBind7635,
          effects: this.#f ?? [],
          styleXml: this.#p,
          cellMargins: teBind7640,
          keepTogether: this.#x,
        };
    }
    #C() {
      let teBind9577 = this.columnCount;
      if (teBind9577 <= 0) return [];
      if (this.#n) {
        let teBind18753 = this.#w();
        return teBind18753 && Number.isFinite(teBind18753) && teBind18753 > 0
          ? oDe(this.#n, teBind18753)
          : this.#n.map((item) => (item.mode === "fixed" ? item.value : 1));
      }
      if (this.#t) {
        let teBind17453 = this.#e.map((item) =>
          Number.isFinite(item) && item > 0 ? item : 1,
        );
        if (teBind17453.length >= teBind9577)
          return teBind17453.slice(0, teBind9577);
        let teBind17454 = teBind17453[teBind17453.length - 1] ?? 1;
        return teBind17453.concat(
          Array(teBind9577 - teBind17453.length).fill(teBind17454),
        );
      }
      let teBind9578 = this.#w();
      if (teBind9578 && Number.isFinite(teBind9578) && teBind9578 > 0) {
        let teBind22461 = teBind9578 / teBind9577;
        return Array(teBind9577).fill(teBind22461);
      }
      return Array(teBind9577).fill(1);
    }
    #w() {
      let teBind19135 = this.position.toProto();
      return (
        this.frame?.width ??
        (teBind19135?.widthEmu === undefined
          ? undefined
          : of(teBind19135.widthEmu))
      );
    }
    #T() {
      let teBind13181 = this.rowCount;
      if (
        teBind13181 <= 0 ||
        this.#i ||
        this.#r.some((item) => item.height > 0)
      )
        return;
      let teBind13182 = this.position.toProto(),
        teBind13183 =
          this.frame?.height ??
          (teBind13182?.heightEmu === undefined
            ? undefined
            : of(teBind13182.heightEmu));
      if (!teBind13183 || !Number.isFinite(teBind13183) || teBind13183 <= 0)
        return;
      let teBind13184 = teBind13183 / teBind13181;
      if (!(!Number.isFinite(teBind13184) || teBind13184 <= 0))
        return Array(teBind13181).fill(teBind13184);
    }
    #E(teIn2041, teIn2042) {
      if (teIn2041 < 0 || teIn2042 < 0)
        throw Error("Table dimensions must be non-negative.");
      let teBind8901 = Math.floor(teIn2041),
        teBind8902 = Math.floor(teIn2042);
      if (this.#n && this.#n.length !== teBind8902)
        throw Error(
          `Expected ${this.#n.length} value columns for existing column tracks, received ${teBind8902}.`,
        );
      for (; this.#r.length < teBind8901; ) {
        let teBind21331 = new teH.Binding1316(undefined, this.context);
        teBind21331.ensureCellCount(teBind8902);
        this.#r.push(teBind21331);
      }
      this.#r.length > teBind8901 && this.#r.splice(teBind8901);
      for (let teBind22976 of this.#r) teBind22976.ensureCellCount(teBind8902);
      teBind8902 <= 0
        ? (this.#e = [])
        : this.#e.length < teBind8902
          ? this.#e.push(...Array(teBind8902 - this.#e.length).fill(1))
          : this.#e.length > teBind8902 &&
            (this.#e = this.#e.slice(0, teBind8902));
    }
  };
  workbookBinding1332 = {
    tablestylemedium2: "{5C22544A-7EE6-4342-B048-85BDC9FD1C3A}",
    "medium style 2 - accent 1": "{5C22544A-7EE6-4342-B048-85BDC9FD1C3A}",
  };
  workbookBinding1333 =
    /^\{[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\}$/i;
});
