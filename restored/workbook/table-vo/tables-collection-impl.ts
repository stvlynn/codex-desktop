// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Tables collection + add-table helpers (legacy phe/mhe/hhe/ghe/yhe/vhe/_he).
// Stage-3 wave-76 cohesive table-vo impl kept flat under maxFlatLines.

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  initAddressUtils,
  parseA1Range,
  formatA1,
  formatA1Range,
  parseSheetRef,
  boundsSize,
  boundsIntersect,
} from "../../utils/spreadsheet-address-utils";
import { Vn as spreadsheetVn } from "../spreadsheet-protobuf";
import { ahe, workbookBinding687, Wme } from "../table-styles";
import {
  workbookBinding700,
  workbookBinding701,
  workbookBinding702,
  lhe,
  uhe,
  dhe,
  _he,
  vhe,
  bhe,
} from "./tv-slots";

import { fhe } from "./table-vo-impl";
import { tableHeaderRowCount } from "./table-helpers-impl";

export function phe() {
  return {
    ..._he,
  };
}
export function mhe(tvIn4555: any, tvIn4556: any) {
  for (let tvBind14287 of tvIn4555.__getMergedCells()) {
    let tvBind15017 = tvBind14287.startAddress;
    if (!tvBind15017) continue;
    let tvBind15018 = parseA1Range(
      `${tvBind15017}:${tvBind14287.endAddress ?? tvBind15017}`,
    );
    if (tvBind15018 && boundsIntersect(tvIn4556.bounds, tvBind15018.bounds))
      throw Error(
        `Worksheet.tables.add cannot create a table over merged range ${tvBind15018.ref}. Excel tables do not support merged cells. Unmerge ${tvBind15018.ref} or choose a table range without merged cells.`,
      );
  }
}
export function hhe(tvIn5002: any) {
  if (typeof tvIn5002 == "string") return tvIn5002;
  if (
    tvIn5002 &&
    typeof tvIn5002 == "object" &&
    typeof tvIn5002.address == "string"
  )
    return tvIn5002.address;
  throw Error(
    `Worksheet.tables.add(address, hasHeaders) expects an A1 string or a Range; received ${tvIn5002 === null ? "null" : tvIn5002 === undefined ? "undefined" : typeof tvIn5002}. If you have a Range, pass it directly or use range.address.`,
  );
}
export function ghe(tvIn3340: any, tvIn3341: any, tvIn3342: any) {
  if (!tvIn3342) return;
  let { startRow, startCol, endCol } = tvIn3341.bounds,
    tvBind11664 = formatA1Range({
      startRow,
      endRow: startRow,
      startCol,
      endCol,
    }),
    tvBind11665 = tvIn3340.getRange(tvBind11664).formulaInfos;
  for (
    let tvBind15019 = 0;
    tvBind15019 < tvBind11665[0].length;
    tvBind15019 += 1
  ) {
    if (!tvBind11665[0][tvBind15019]) continue;
    let tvBind15843 = formatA1Range({
      startRow,
      endRow: startRow,
      startCol: startCol + tvBind15019,
      endCol: startCol + tvBind15019,
    });
    throw Error(
      `Worksheet.tables.add(..., true) requires literal header cells. Header row ${tvBind11664} contains a formula at ${tvBind15843}. Use a range with static header text or pass hasHeaders=false.`,
    );
  }
}
export const yhe = esmInit(() => {
  initAddressUtils();
  fhe();
  workbookBinding687();
  _he = {
    name: "TableStyleMedium2",
    showFirstColumn: false,
    showLastColumn: false,
    showRowStripes: true,
    showColumnStripes: false,
  };
  vhe = class {
    #e;
    #t;
    #n;
    constructor(tvIn6023) {
      this.#e = tvIn6023;
      this.#n = new Map();
      let tvBind16063 = this.#e.__getTables();
      this.#t = tvBind16063.map((item) =>
        this.#a(item, {
          hasHeaders: tableHeaderRowCount(item) > 0,
        }),
      );
      for (let tvBind21835 of this.#t) {
        let tvBind22452 = tvBind21835.name;
        tvBind22452 && this.#n.set(tvBind22452, tvBind21835);
      }
    }
    add(tvIn1029, tvIn1030, tvIn1031) {
      let tvBind6235 = this.#e.__getTables(),
        tvBind6236 = hhe(tvIn1029),
        tvBind6237 = parseA1Range(tvBind6236);
      if (!tvBind6237) throw Error(`Invalid table address: ${tvBind6236}`);
      mhe(this.#e, tvBind6237);
      ghe(this.#e, tvBind6237, tvIn1030);
      let tvBind6238 = {
        id: this.#r(),
        name: "",
        displayName: "",
        ref: tvBind6237.ref,
        columns: [],
        style: undefined,
        totalsRowShown: false,
        headerRowCount: +!!tvIn1030,
        totalsRowCount: 0,
        autoFilter: undefined,
        dataDxfId: undefined,
        headerRowCellStyle: undefined,
      };
      tvBind6238.style = phe();
      tvBind6235.push(tvBind6238);
      let tvBind6239 = this.#a(tvBind6238, {
        hasHeaders: tvIn1030,
      });
      tvIn1031
        ? tvBind6239.writeName(tvIn1031, {
            record: false,
          })
        : tvBind6239.writeName(this.#i(), {
            record: false,
          });
      tvBind6239.refreshBounds();
      tvBind6239.syncColumnsFromSheet();
      this.#t.push(tvBind6239);
      let tvBind6240 = this.#e.workbook.getRecorder();
      if (tvBind6240) {
        let tvBind15451 = {
          op: "table.add",
          as: tvBind6240.assignAlias(
            tvBind6239,
            `tb/${tvBind6239.name}`,
            "table",
          ),
          props: {
            range: {
              sheet: this.#e.name,
              range: tvBind6237.ref,
            },
            hasHeaders: tvIn1030,
            name: tvBind6239.name,
          },
        };
        tvBind6240.record(tvBind15451);
      }
      return (this.#e.__queueCollaborativePublish(), tvBind6239);
    }
    getItem(tvIn10348) {
      let tvBind20812 = this.#n.get(tvIn10348);
      if (!tvBind20812) throw Error(`Table ${tvIn10348} not found`);
      return tvBind20812;
    }
    getItemOrNullObject(tvIn11837) {
      return this.#n.get(tvIn11837) || new uhe(this.#e, tvIn11837);
    }
    getItemAt(tvIn10142) {
      let tvBind20613 = this.#t[tvIn10142];
      if (!tvBind20613) throw Error(`Table at index ${tvIn10142} not found`);
      return tvBind20613;
    }
    get items() {
      return this.#t;
    }
    replaceFromProto() {
      this.#n = new Map();
      this.#t = this.#e.__getTables().map((item) =>
        this.#a(item, {
          hasHeaders: tableHeaderRowCount(item) > 0,
        }),
      );
    }
    deleteAll() {
      for (let tvBind23024 of [...this.#t]) tvBind23024.delete();
    }
    #r() {
      let tvBind18246 = 0;
      for (let tvBind20432 of this.#e.workbook.worksheets.items)
        for (let tvBind22315 of tvBind20432.__getTables())
          tvBind22315.id != null &&
            tvBind22315.id > tvBind18246 &&
            (tvBind18246 = tvBind22315.id);
      return tvBind18246 + 1;
    }
    #i() {
      let tvBind16121 = new Set();
      for (let tvBind20452 of this.#e.workbook.worksheets.items)
        for (let tvBind22345 of tvBind20452.__getTables())
          tvBind22345.name && tvBind16121.add(tvBind22345.name.toUpperCase());
      let tvBind16122 = 1;
      for (; tvBind16121.has(`TABLE${tvBind16122}`); ) tvBind16122 += 1;
      return `Table${tvBind16122}`;
    }
    #a(tvIn5315, tvIn5316) {
      let tvBind14963 = new workbookBinding702(this.#e, tvIn5315, {
          hasHeaders: tvIn5316.hasHeaders,
          onDelete: (tvIn16420) => this.#o(tvIn16420),
          onNameChange: (tvIn11561, tvIn11562, tvIn11563) => {
            tvIn11562 && this.#n.delete(tvIn11562);
            tvIn11563 && this.#n.set(tvIn11563, tvIn11561);
          },
        }),
        tvBind14964 = tvBind14963.name;
      return (
        tvBind14964 && this.#n.set(tvBind14964, tvBind14963),
        tvBind14963
      );
    }
    #o(tvIn6134) {
      let tvBind16216 = tvIn6134.name;
      tvBind16216 && this.#n.delete(tvBind16216);
      this.#t = this.#t.filter((item) => item !== tvIn6134);
      let tvBind16217 = she(tvIn6134),
        tvBind16218 = this.#e.__getTables(),
        tvBind16219 = tvBind16218.indexOf(tvBind16217);
      tvBind16219 >= 0 && tvBind16218.splice(tvBind16219, 1);
      this.#e.__queueCollaborativePublish();
    }
  };
});
