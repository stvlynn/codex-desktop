// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-65: FreezePanes + null Sheet + cell VO helpers
// (legacy _Xe / yXe / bXe / xXe / vXe).

import { sheet } from "./sheet-bag";
import { clampNonNegInt, gXe } from "./sheet-helpers";

export function installSheetAux(): void {
  sheet._Xe = class {
    _e;
    _t;
    constructor(
      shIn7772,
      shIn7773 = {
        rowCount: 0,
        columnCount: 0,
      },
    ) {
      this._e = shIn7772;
      this._t = {
        rowCount: clampNonNegInt(shIn7773.rowCount),
        columnCount: clampNonNegInt(shIn7773.columnCount),
      };
    }
    get state() {
      return {
        ...this._t,
      };
    }
    freezeRows(shIn9327) {
      let shBind19889 = clampNonNegInt(shIn9327);
      shBind19889 !== this._t.rowCount &&
        ((this._t.rowCount = shBind19889),
        this._e?.__invalidateViewportLayout());
    }
    freezeColumns(shIn9051) {
      let shBind19608 = clampNonNegInt(shIn9051);
      shBind19608 !== this._t.columnCount &&
        ((this._t.columnCount = shBind19608),
        this._e?.__invalidateViewportLayout());
    }
    unfreeze() {
      (this._t.rowCount === 0 && this._t.columnCount === 0) ||
        ((this._t = {
          rowCount: 0,
          columnCount: 0,
        }),
        this._e?.__invalidateViewportLayout());
    }
  };
  sheet.vXe = (shIn15879) => ({
    name: shIn15879,
    index: 0,
  });
  sheet.yXe = class extends sheet.Sheet {
    _e;
    constructor(shIn12849, shIn12850) {
      super(sheet.vXe(shIn12849), shIn12850);
      this._e = shIn12849;
    }
    get isNullObject() {
      return true;
    }
    getRange(shIn14169, ...shIn14170) {
      return this._t();
    }
    getRangeByIndexes(shIn13128, shIn13129, shIn13130, shIn13131) {
      return this._t();
    }
    getCell(shIn14562, shIn14563) {
      return this._t();
    }
    delete() {
      this._t();
    }
    _t() {
      let shBind21521 = this._e || "Unknown";
      throw Error(`Worksheet "${shBind21521}" not found.`);
    }
  };
  sheet.bXe = class {
    _e;
    constructor(shIn14917) {
      this._e = shIn14917;
    }
    [Symbol.iterator]() {
      return this._e.__createCellIterator();
    }
  };
  sheet.xXe = class {
    _e;
    _t;
    _n;
    _r;
    constructor(shIn11100, shIn11101, shIn11102, shIn11103) {
      this._e = shIn11100;
      this._t = shIn11101;
      this._n = shIn11102;
      this._r = shIn11103;
    }
    get address() {
      return this._t.address;
    }
    get formula() {
      let shBind20963 = this._t.formula ?? "";
      return shBind20963
        ? shBind20963.startsWith("=")
          ? shBind20963
          : `=${shBind20963}`
        : "";
    }
    get value() {
      return this._i().value;
    }
    get dataType() {
      return this._i().dataType;
    }
    get rawValue() {
      let shBind15187 = this._e.__getRawValue(this._n, this._r);
      return (
        shBind15187 ??
        (shBind15187 === null
          ? null
          : this._e.__hasExcelRawValue(this._n, this._r)
            ? (this._e.__getExcelRawValue(this._n, this._r) ?? null)
            : gXe(this._t))
      );
    }
    _i() {
      return this._e.workbook.__formatRawValueForDisplay(this.rawValue);
    }
  };
}
