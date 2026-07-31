// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-46: Range VO (legacy Binding672 Range); large methods peeled.

import { d } from "../spreadsheet-protobuf";
import {
  formatA1Range,
  parseA1Range,
  boundsSize,
} from "../../utils/spreadsheet-address-utils";
import { RangeFormat } from "../range-format";
import { RangeConditionalFormats } from "../conditional-format";
import { RangeDataValidation } from "../data-validation";
import {
  getAttachedWorksheet,
  setAttachedWorksheet,
} from "../worksheet-attachment";
import {
  fillRangeFrom,
  coerceExcelSerialToDate,
  serializeDateOrNull,
  coerceCellTypedValue,
} from "../range-fill";
import {
  shiftA1FormulaRefs,
  convertR1C1ToA1,
  convertA1ToR1C1,
} from "../formula-address";
import { RangeSparklines } from "./range-sparklines";
import { isDataValidationLike } from "./data-validation-guard";
import { ISO_DATE_TIME_RE } from "./iso-date-time-re";
import {
  isFormulaArrayValue,
  isFormulaErrorValue,
} from "./formula-value-guards";
import type { RangeOpsHost } from "./types";
import {
  writeFormulasBlock,
  writeValuesBlock,
  collectRawValues,
  collectValues,
  collectDisplayFormulas,
  collectFormulasR1C1,
  broadcastMatrix,
  readFormulasBlock,
  readValuesBlock,
  mapMatrix,
  probeMatrix,
  rangeCopyTo,
  rangeCopyFrom,
  rangeFillFrom,
  rangeFillRight,
  rangeFillDown,
  rangeUnmerge,
  rangeMerge,
  rangeClear,
  applyMatrixFn,
  normalizeWriteValues,
  rangeWriteValues,
  getRawValuesCached,
  getValuesCached,
  setFormulasR1C1,
  setFormulas,
  getFormulasR1C1Cached,
  getFormulasCached,
  rangeGetCurrentRegion,
  rangeGetResizedRange,
  rangeGetOffsetRange,
  rangeGetRangeByIndexes,
  rangeGetColumn,
  rangeGetRow,
  rangeGetCell,
  setRangeDataValidation,
  rangeWrite,
} from "./range-ops";

/** Legacy `workbookBinding672` / Range — spreadsheet Range VO. */
export class Range {
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
  constructor(rngIn8327 = {}) {
    this.#e = rngIn8327.address;
    this.#t = rngIn8327.format ?? new RangeFormat(this.#S() as any);
    this.#o = rngIn8327.worksheet;
    setAttachedWorksheet(this, rngIn8327.worksheet);
  }
  get address() {
    return this.#e ?? "";
  }
  getAddress() {
    return this.address;
  }
  write(rngIn268: unknown, rngIn269: Record<string, unknown> = {}) {
    return rangeWrite(this.#opsHost(), rngIn268, rngIn269);
  }
  get rowCount() {
    let rngBind20197 = this.#f();
    if (!rngBind20197) throw Error("Range is not attached to a worksheet.");
    return rngBind20197.rows;
  }
  getRowCount() {
    return this.rowCount;
  }
  get columnCount() {
    let rngBind20118 = this.#f();
    if (!rngBind20118) throw Error("Range is not attached to a worksheet.");
    return rngBind20118.cols;
  }
  getColumnCount() {
    return this.columnCount;
  }
  get format() {
    return this.#t;
  }
  set format(rngIn948) {
    if (rngIn948 instanceof RangeFormat) return;
    if (!rngIn948 || typeof rngIn948 != "object")
      throw Error("Range.format setter requires a config object.");
    let rngBind5990 = rngIn948;
    "fill" in rngBind5990 && (this.#t.fill = rngBind5990.fill);
    "font" in rngBind5990 &&
      rngBind5990.font &&
      (this.#t.font = rngBind5990.font);
    "borders" in rngBind5990 &&
      rngBind5990.borders &&
      (this.#t.borders = rngBind5990.borders);
    "numberFormat" in rngBind5990 &&
      rngBind5990.numberFormat !== undefined &&
      (this.#t.numberFormat = rngBind5990.numberFormat);
    "wrapText" in rngBind5990 &&
      rngBind5990.wrapText !== undefined &&
      (this.#t.wrapText = !!rngBind5990.wrapText);
    "horizontalAlignment" in rngBind5990 &&
      rngBind5990.horizontalAlignment !== undefined &&
      (this.#t.horizontalAlignment = rngBind5990.horizontalAlignment);
    "verticalAlignment" in rngBind5990 &&
      rngBind5990.verticalAlignment !== undefined &&
      (this.#t.verticalAlignment = rngBind5990.verticalAlignment);
    "rowHeightPx" in rngBind5990 && rngBind5990.rowHeightPx !== undefined
      ? (this.#t.rowHeightPx = rngBind5990.rowHeightPx)
      : "rowHeight" in rngBind5990 &&
        rngBind5990.rowHeight !== undefined &&
        (this.#t.rowHeight = rngBind5990.rowHeight);
    "columnWidthPx" in rngBind5990 && rngBind5990.columnWidthPx !== undefined
      ? (this.#t.columnWidthPx = rngBind5990.columnWidthPx)
      : "columnWidth" in rngBind5990 &&
        rngBind5990.columnWidth !== undefined &&
        (this.#t.columnWidth = rngBind5990.columnWidth);
  }
  get rowIndex() {
    let rngBind20083 = this.#f();
    if (!rngBind20083) throw Error("Range is not attached to a worksheet.");
    return rngBind20083.startRow;
  }
  get columnIndex() {
    let rngBind19977 = this.#f();
    if (!rngBind19977) throw Error("Range is not attached to a worksheet.");
    return rngBind19977.startCol;
  }
  getRowIndex() {
    return this.rowIndex;
  }
  getColumnIndex() {
    return this.columnIndex;
  }
  getRange(rngIn5988) {
    if (typeof rngIn5988 != "string")
      throw Error("Range.getRange(address) requires an A1 string address.");
    let rngBind16016 = getAttachedWorksheet(this);
    if (!rngBind16016) throw Error("Range is not attached to a worksheet.");
    return rngBind16016.getRange(rngIn5988);
  }
  setNumberFormat(rngIn13047) {
    this.format.numberFormat = rngIn13047;
  }
  get sparklines() {
    return ((this.#l ??= new RangeSparklines(this)), this.#l);
  }
  get conditionalFormats() {
    return ((this.#s ||= new RangeConditionalFormats(this)), this.#s);
  }
  get dataValidation() {
    return ((this.#c ||= new RangeDataValidation(this)), this.#c);
  }
  set dataValidation(rngIn672: unknown) {
    setRangeDataValidation(this.#opsHost(), rngIn672);
  }
  getCell(rngIn1418: unknown, rngIn1419: unknown) {
    return rangeGetCell(this.#opsHost(), rngIn1418, rngIn1419);
  }
  getRow(rngIn1662: unknown) {
    return rangeGetRow(this.#opsHost(), rngIn1662);
  }
  getColumn(rngIn1497: unknown) {
    return rangeGetColumn(this.#opsHost(), rngIn1497);
  }
  getRangeByIndexes(
    rngIn990: unknown,
    rngIn991: unknown,
    rngIn992: unknown,
    rngIn993: unknown,
  ) {
    return rangeGetRangeByIndexes(
      this.#opsHost(),
      rngIn990,
      rngIn991,
      rngIn992,
      rngIn993,
    );
  }
  getOffsetRange(
    rngIn1009: unknown,
    rngIn1010: unknown,
    rngIn1011: unknown,
    rngIn1012: unknown,
  ) {
    return rangeGetOffsetRange(
      this.#opsHost(),
      rngIn1009,
      rngIn1010,
      rngIn1011,
      rngIn1012,
    );
  }
  getResizedRange(rngIn2854: unknown, rngIn2855: unknown) {
    return rangeGetResizedRange(this.#opsHost(), rngIn2854, rngIn2855);
  }
  getResizeRange(rngIn3932, rngIn3933) {
    for (let [rngBind17854, rngBind17855] of [
      ["rowCount", rngIn3932],
      ["columnCount", rngIn3933],
    ])
      if (!Number.isFinite(rngBind17855) || !Number.isInteger(rngBind17855))
        throw Error(`Range.getResizeRange ${rngBind17854} must be an integer.`);
    if (rngIn3932 <= 0 || rngIn3933 <= 0)
      throw Error("Range.getResizeRange requires positive row/column counts.");
    return this.getOffsetRange(0, 0, rngIn3932, rngIn3933);
  }
  offset(rngIn12402, rngIn12403, rngIn12404, rngIn12405) {
    return this.getOffsetRange(rngIn12402, rngIn12403, rngIn12404, rngIn12405);
  }
  resize(rngIn13157, rngIn13158) {
    return this.getResizeRange(rngIn13157, rngIn13158);
  }
  getCurrentRegion() {
    return rangeGetCurrentRegion(this.#opsHost());
  }
  __getWorksheet() {
    return this.#o;
  }
  get formulas() {
    return getFormulasCached(this.#opsHost());
  }
  get formulasR1C1() {
    return getFormulasR1C1Cached(this.#opsHost());
  }
  set formulas(rngIn211: unknown) {
    setFormulas(this.#opsHost(), rngIn211);
  }
  set formulasR1C1(rngIn1717: unknown) {
    setFormulasR1C1(this.#opsHost(), rngIn1717);
  }
  get values() {
    return getValuesCached(this.#opsHost());
  }
  get displayFormula() {
    return this.displayFormulas[0]?.[0] ?? "";
  }
  get displayFormulas() {
    let rngBind13296 = this.#f();
    if (!rngBind13296 || !this.#o) return [];
    let rngBind13297 = [];
    for (
      let rngBind16464 = 0;
      rngBind16464 < rngBind13296.rows;
      rngBind16464 += 1
    ) {
      let rngBind17364 = [];
      for (
        let rngBind19494 = 0;
        rngBind19494 < rngBind13296.cols;
        rngBind19494 += 1
      )
        rngBind17364.push(
          this.#o.__getDisplayFormula(
            rngBind13296.startRow + rngBind16464,
            rngBind13296.startCol + rngBind19494,
          ) ?? "",
        );
      rngBind13297.push(rngBind17364);
    }
    return rngBind13297;
  }
  formulaInfo() {
    return this.formulaInfos[0]?.[0];
  }
  get formulaInfos() {
    let rngBind13794 = this.#f();
    if (!rngBind13794 || !this.#o) return [];
    let rngBind13795 = [];
    for (
      let rngBind17047 = 0;
      rngBind17047 < rngBind13794.rows;
      rngBind17047 += 1
    ) {
      let rngBind18018 = [];
      for (
        let rngBind20198 = 0;
        rngBind20198 < rngBind13794.cols;
        rngBind20198 += 1
      )
        rngBind18018.push(
          this.#o.__getFormulaPresence(
            rngBind13794.startRow + rngBind17047,
            rngBind13794.startCol + rngBind20198,
          ),
        );
      rngBind13795.push(rngBind18018);
    }
    return rngBind13795;
  }
  get rawValues() {
    return getRawValuesCached(this.#opsHost());
  }
  set values(rngIn14201) {
    this.writeValues(rngIn14201);
  }
  writeValues(rngIn96: unknown, rngIn97: Record<string, unknown> = {}) {
    return rangeWriteValues(this.#opsHost(), rngIn96, rngIn97);
  }
  #u(rngIn2714: unknown) {
    return normalizeWriteValues(this.#opsHost(), rngIn2714);
  }
  #d(rngIn2540: unknown) {
    return applyMatrixFn(this.#opsHost(), rngIn2540);
  }
  getLastRow() {
    let rngBind14336 = this.#f();
    if (!rngBind14336)
      return new Range({
        worksheet: this.#o,
      });
    let rngBind14337 = rngBind14336.startRow + rngBind14336.rows - 1,
      rngBind14338 = formatA1Range({
        startRow: rngBind14337,
        endRow: rngBind14337,
        startCol: rngBind14336.startCol,
        endCol: rngBind14336.startCol + rngBind14336.cols - 1,
      });
    return new Range({
      address: rngBind14338,
      worksheet: this.#o,
    });
  }
  load(rngIn15335) {
    return this;
  }
  calculate() {
    let rngBind19978 = getAttachedWorksheet(this);
    if (!rngBind19978) throw Error("Range is not attached to a worksheet.");
    rngBind19978.workbook.recalculate();
  }
  clear(rngIn2380: unknown) {
    return rangeClear(this.#opsHost(), rngIn2380);
  }
  merge(rngIn1981: boolean = false) {
    return rangeMerge(this.#opsHost(), rngIn1981);
  }
  unmerge() {
    return rangeUnmerge(this.#opsHost());
  }
  fillDown() {
    return rangeFillDown(this.#opsHost());
  }
  fillRight() {
    return rangeFillRight(this.#opsHost());
  }
  fillFrom(rngIn453: unknown) {
    return rangeFillFrom(this.#opsHost(), rngIn453);
  }
  copyFrom(
    rngIn146: unknown,
    rngIn147: unknown,
    rngIn148: unknown,
    rngIn149: unknown,
  ) {
    return rangeCopyFrom(
      this.#opsHost(),
      rngIn146,
      rngIn147,
      rngIn148,
      rngIn149,
    );
  }
  copyTo(
    rngIn146: unknown,
    rngIn147: unknown,
    rngIn148: unknown,
    rngIn149: unknown,
  ) {
    return rangeCopyTo(this.#opsHost(), rngIn146, rngIn147, rngIn148, rngIn149);
  }
  getBoundingBox() {
    return this.#f();
  }
  #f() {
    if (!this.#e) return null;
    let rngBind15806 = parseA1Range(this.#e);
    if (!rngBind15806) return null;
    let rngBind15807 = boundsSize(rngBind15806.bounds);
    return {
      startRow: rngBind15806.bounds.startRow,
      startCol: rngBind15806.bounds.startCol,
      rows: rngBind15807.rows,
      cols: rngBind15807.cols,
    };
  }
  #p(rngIn3097: unknown, rngIn3098: unknown) {
    return probeMatrix(this.#opsHost(), rngIn3097, rngIn3098);
  }
  #m(rngIn1333: unknown, rngIn1334: unknown, rngIn1335: unknown) {
    return mapMatrix(this.#opsHost(), rngIn1333, rngIn1334, rngIn1335);
  }
  #h(rngIn8681) {
    return formatA1Range({
      startRow: rngIn8681.startRow,
      startCol: rngIn8681.startCol,
      endRow: rngIn8681.startRow,
      endCol: rngIn8681.startCol,
    });
  }
  #g(rngIn8025, rngIn8026, rngIn8027) {
    return formatA1Range({
      startRow: rngIn8025.startRow,
      startCol: rngIn8025.startCol,
      endRow: rngIn8025.startRow + rngIn8026 - 1,
      endCol: rngIn8025.startCol + rngIn8027 - 1,
    });
  }
  #_(rngIn4675, rngIn4676, rngIn4677) {
    let rngBind13955 = rngIn4675.__getCell(rngIn4676, rngIn4677),
      rngBind13956 = rngBind13955?.formula ?? "";
    if (typeof rngBind13956 == "string" && rngBind13956.trim() !== "")
      return true;
    let rngBind13957 = rngIn4675.__getRawValue(rngIn4676, rngIn4677);
    if (rngBind13957 !== undefined)
      return rngBind13957 === null
        ? false
        : typeof rngBind13957 == "string"
          ? rngBind13957 !== ""
          : true;
    let rngBind13958 = rngBind13955?.value;
    return rngBind13958 == null
      ? false
      : typeof rngBind13958 == "string"
        ? rngBind13958 !== ""
        : true;
  }
  #v(rngIn2856: unknown) {
    return readValuesBlock(this.#opsHost(), rngIn2856);
  }
  #y(rngIn3247: unknown) {
    return readFormulasBlock(this.#opsHost(), rngIn3247);
  }
  #b(rngIn785: unknown, rngIn786: unknown, rngIn787: unknown) {
    return broadcastMatrix(this.#opsHost(), rngIn785, rngIn786, rngIn787);
  }
  #x() {
    return collectFormulasR1C1(this.#opsHost());
  }
  #S() {
    return {
      getBounds: () => this.#f(),
      getWorkbook: () => this.#o?.workbook,
      getWorksheet: () => this.#o,
      getAddress: () => this.address,
      editCells: (rngIn16229, rngIn16230) => this.#w(rngIn16229, rngIn16230),
      getFirstCell: (rngIn16414) => this.#C(rngIn16414),
      setLogicalStyleIndex: (rngIn13226, rngIn13227, rngIn13228) =>
        this.#o?.__setLogicalStyleIndex(rngIn13226, rngIn13227, rngIn13228),
      getLogicalStyleIndex: (rngIn13719, rngIn13720) =>
        this.#o?.__getLogicalStyleIndex(rngIn13719, rngIn13720),
      setCellStyleRef: (rngIn14948, rngIn14949, rngIn14950) =>
        this.#o?.__setCellStyleRef(rngIn14948, rngIn14949, rngIn14950),
    };
  }
  #C(rngIn9493) {
    let rngBind20015 = null;
    return (
      this.#w(rngIn9493, (rngIn15222) => {
        rngBind20015 ||= rngIn15222;
      }),
      rngBind20015
    );
  }
  #w(rngIn3501, rngIn3502) {
    let rngBind11960 = this.#f(),
      rngBind11961 = this.#o;
    if (!(!rngBind11960 || !rngBind11961))
      for (
        let rngBind13760 = 0;
        rngBind13760 < rngBind11960.rows;
        rngBind13760 += 1
      )
        for (
          let rngBind14706 = 0;
          rngBind14706 < rngBind11960.cols;
          rngBind14706 += 1
        ) {
          let rngBind15449 = rngBind11960.startRow + rngBind13760,
            rngBind15450 = rngBind11960.startCol + rngBind14706;
          rngIn3502({
            row: rngBind15449,
            col: rngBind15450,
            cell: rngIn3501
              ? rngBind11961.__getOrCreateCell(rngBind15449, rngBind15450)
              : rngBind11961.__getCell(rngBind15449, rngBind15450),
            relativeRow: rngBind13760,
            relativeCol: rngBind14706,
          });
        }
  }
  #T() {
    return collectDisplayFormulas(this.#opsHost());
  }
  #E(event) {
    return event == null
      ? null
      : event instanceof Date
        ? event
        : typeof event == "number"
          ? Number.isFinite(event)
            ? event
            : "#NUM!"
          : typeof event == "string" || typeof event == "boolean"
            ? event
            : isFormulaErrorValue(event)
              ? event.code
              : isFormulaArrayValue(event)
                ? this.#E(event.values[0]?.[0] ?? null)
                : event instanceof Error && event.message.startsWith("#")
                  ? event.message
                  : "#VALUE!";
  }
  #D() {
    return collectValues(this.#opsHost());
  }
  #O() {
    return collectRawValues(this.#opsHost());
  }
  #k(rngIn1085: unknown, rngIn1086: unknown) {
    return writeValuesBlock(this.#opsHost(), rngIn1085, rngIn1086);
  }
  #A(
    rngIn2342: unknown,
    rngIn2343: unknown,
    rngIn2344: unknown,
    rngIn2345: unknown,
  ) {
    return writeFormulasBlock(
      this.#opsHost(),
      rngIn2342,
      rngIn2343,
      rngIn2344,
      rngIn2345,
    );
  }
  #j(rngIn2985) {
    if (!rngIn2985 || rngIn2985.value == null) return null;
    switch (rngIn2985.dataType) {
      case d.CELL_DATA_TYPE_NUMBER:
        return Number(rngIn2985.value);
      case d.CELL_DATA_TYPE_BOOLEAN:
        return rngIn2985.value === "TRUE" || rngIn2985.value === "1";
      case d.CELL_DATA_TYPE_DATE:
        return (
          coerceExcelSerialToDate(rngIn2985.value) ?? new Date(rngIn2985.value)
        );
      case d.CELL_DATA_TYPE_STRING:
      case d.CELL_DATA_TYPE_SHARED_STRING:
      case d.CELL_DATA_TYPE_INLINE_STRING:
        return rngIn2985.value;
      default:
        return rngIn2985.value;
    }
  }

  #opsHost(): RangeOpsHost {
    const range = this;
    return {
      range,
      get addressRaw() {
        return range.#e;
      },
      set addressRaw(value) {
        range.#e = value;
      },
      get worksheet() {
        return range.#o;
      },
      set worksheet(value) {
        range.#o = value;
      },
      get format() {
        return range.#t;
      },
      set format(value) {
        range.#t = value;
      },
      get cachedFormulas() {
        return range.#n;
      },
      set cachedFormulas(value) {
        range.#n = value;
      },
      get cachedFormulasR1C1() {
        return range.#r;
      },
      set cachedFormulasR1C1(value) {
        range.#r = value;
      },
      get cachedValues() {
        return range.#i;
      },
      set cachedValues(value) {
        range.#i = value;
      },
      get cachedRawValues() {
        return range.#a;
      },
      set cachedRawValues(value) {
        range.#a = value;
      },
      get cfApi() {
        return range.#s;
      },
      set cfApi(value) {
        range.#s = value;
      },
      get dvApi() {
        return range.#c;
      },
      set dvApi(value) {
        range.#c = value;
      },
      get sparklinesApi() {
        return range.#l;
      },
      set sparklinesApi(value) {
        range.#l = value;
      },
      getBounds: () => range.#f(),
      coerceCellValue: (value) => range.#j(value),
      normalizeWriteValues: (value) => range.#u(value),
      applyMatrixFn: (fn) => range.#d(fn),
      normalizeScalar: (value) => range.#E(value),
      editCells: (bounds, visitor) => range.#w(bounds, visitor),
      getFirstCell: (bounds) => range.#C(bounds),
      createFormatHost: () => range.#S(),
      probeMatrix: (matrix, label) => range.#p(matrix, label),
      mapMatrix: (matrix, bounds, label) => range.#m(matrix, bounds, label),
      isBlankCell: (cell) => range.#h(cell),
      clearCellAt: (row, col, worksheet) => range.#g(row, col, worksheet),
      copyCellStyle: (from, to, worksheet) => range.#_(from, to, worksheet),
      readValuesBlock: (bounds) => range.#v(bounds),
      readFormulasBlock: (bounds) => range.#y(bounds),
      broadcastMatrix: (matrix, bounds, label) =>
        range.#b(matrix, bounds, label),
      collectFormulasR1C1: () => range.#x(),
      collectDisplayFormulas: () => range.#T(),
      collectValues: () => range.#D(),
      collectRawValues: () => range.#O(),
      writeValuesBlock: (a, b) => range.#k(a, b),
      writeFormulasBlock: (a, b, c, d) => range.#A(a, b, c, d),
    };
  }
}
