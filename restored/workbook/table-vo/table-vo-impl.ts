// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: Excel Table VO + column/row facades (legacy Binding700/702/lhe/uhe/dhe/fhe).
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

import {
  tableHeaderRowCount,
  tableTotalsRowCount,
  ohe,
} from "./table-helpers-impl";

export const fhe = esmInit(() => {
  initAddressUtils();
  workbookBinding687();
  ahe();
  workbookBinding700 = new WeakMap();
  workbookBinding701 = "TableStyleMedium2";
  workbookBinding702 = class {
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
    constructor(tvIn3103, tvIn3104, tvIn3105 = {}) {
      this.#e = tvIn3103;
      workbookBinding700.set(this, tvIn3104);
      this.#n = tvIn3105.onNameChange;
      this.#r = tvIn3105.onDelete;
      this.#i = tvIn3105.hasHeaders ?? tableHeaderRowCount(tvIn3104) > 0;
      this.#a = +!!this.#i;
      this.#t = new dhe(this);
      let tvBind11203 = parseA1Range(tvIn3104.ref);
      if (tvBind11203) {
        this.#o = tvBind11203.bounds.startRow;
        this.#s = tvBind11203.bounds.startCol;
        let tvBind19128 = boundsSize(tvBind11203.bounds);
        this.#c = tvBind19128.cols;
        this.#l = tvBind19128.rows - this.#a;
      } else {
        this.#o = 0;
        this.#s = 0;
        this.#c = 0;
        this.#l = 0;
      }
    }
    get isNullObject() {
      return false;
    }
    get worksheet() {
      return this.#e;
    }
    get hasHeaders() {
      return this.#i;
    }
    get showHeaders() {
      return this.#i;
    }
    set showHeaders(tvIn13297) {
      this.writeShowHeaders(tvIn13297);
    }
    writeShowHeaders(tvIn5121, tvIn5122 = {}) {
      if (this.#i === tvIn5121) return;
      let tvBind14622 = this.#u();
      this.#i = tvIn5121;
      this.#a = +!!tvIn5121;
      tvBind14622.headerRowCount = this.#a;
      tvIn5121
        ? this.syncColumnsFromSheet()
        : (tvBind14622.autoFilter = undefined);
      this.refreshBounds();
      (tvIn5122.record ?? true) &&
        this.#h({
          showHeaders: tvIn5121,
        });
    }
    get name() {
      return this.#u().name ?? "";
    }
    set name(tvIn14598) {
      this.writeName(tvIn14598);
    }
    writeName(tvIn6210, tvIn6211 = {}) {
      let tvBind16293 = tvIn6211.record ?? true,
        tvBind16294 = this.#u(),
        tvBind16295 = tvBind16294.name || undefined;
      tvBind16295 !== tvIn6210 &&
        ((tvBind16294.name = tvIn6210),
        (tvBind16294.displayName = tvIn6210),
        this.#n?.(this, tvBind16295, tvIn6210),
        tvBind16293 &&
          this.#h(
            {
              name: tvIn6210,
            },
            tvBind16295 ?? tvIn6210,
          ));
    }
    get address() {
      return this.#u().ref;
    }
    get style() {
      return this.#u().style?.name ?? workbookBinding701;
    }
    set style(tvIn14362) {
      this.writeStyle(tvIn14362);
    }
    writeStyle(tvIn7588, tvIn7589 = {}) {
      let tvBind18079 = Wme(tvIn7588) ?? tvIn7588.trim();
      if (!tvBind18079) return;
      let tvBind18080 = this.#m();
      tvBind18080.name !== tvBind18079 &&
        ((tvBind18080.name = tvBind18079),
        (tvIn7589.record ?? true) &&
          this.#h({
            style: tvBind18079,
          }));
    }
    get showTotals() {
      return tableTotalsRowCount(this.#u()) > 0;
    }
    set showTotals(tvIn13493) {
      this.writeShowTotals(tvIn13493);
    }
    writeShowTotals(tvIn7030, tvIn7031 = {}) {
      if (this.showTotals === tvIn7030) return;
      let tvBind17384 = this.#u();
      tvBind17384.totalsRowShown = tvIn7030;
      tvBind17384.totalsRowCount = +!!tvIn7030;
      (tvIn7031.record ?? true) &&
        this.#h({
          showTotals: tvIn7030,
        });
    }
    get showBandedRows() {
      return this.#u().style?.showRowStripes ?? true;
    }
    set showBandedRows(tvIn12917) {
      this.writeShowBandedRows(tvIn12917);
    }
    writeShowBandedRows(tvIn7967, tvIn7968 = {}) {
      let tvBind18454 = this.#m();
      tvBind18454.showRowStripes !== tvIn7967 &&
        ((tvBind18454.showRowStripes = tvIn7967),
        (tvIn7968.record ?? true) &&
          this.#h({
            showBandedRows: tvIn7967,
          }));
    }
    get highlightFirstColumn() {
      return this.#u().style?.showFirstColumn ?? false;
    }
    set highlightFirstColumn(tvIn12173) {
      this.writeHighlightFirstColumn(tvIn12173);
    }
    writeHighlightFirstColumn(tvIn7590, tvIn7591 = {}) {
      let tvBind18081 = this.#m();
      tvBind18081.showFirstColumn !== tvIn7590 &&
        ((tvBind18081.showFirstColumn = tvIn7590),
        (tvIn7591.record ?? true) &&
          this.#h({
            highlightFirstColumn: tvIn7590,
          }));
    }
    get highlightLastColumn() {
      return this.#u().style?.showLastColumn ?? false;
    }
    set highlightLastColumn(tvIn12286) {
      this.writeHighlightLastColumn(tvIn12286);
    }
    writeHighlightLastColumn(tvIn7703, tvIn7704 = {}) {
      let tvBind18202 = this.#m();
      tvBind18202.showLastColumn !== tvIn7703 &&
        ((tvBind18202.showLastColumn = tvIn7703),
        (tvIn7704.record ?? true) &&
          this.#h({
            highlightLastColumn: tvIn7703,
          }));
    }
    get showBandedColumns() {
      return this.#u().style?.showColumnStripes ?? false;
    }
    set showBandedColumns(tvIn12535) {
      this.writeShowBandedColumns(tvIn12535);
    }
    writeShowBandedColumns(tvIn7635, tvIn7636 = {}) {
      let tvBind18132 = this.#m();
      tvBind18132.showColumnStripes !== tvIn7635 &&
        ((tvBind18132.showColumnStripes = tvIn7635),
        (tvIn7636.record ?? true) &&
          this.#h({
            showBandedColumns: tvIn7635,
          }));
    }
    get showFilterButton() {
      return this.#i && this.#u().autoFilter !== undefined;
    }
    set showFilterButton(tvIn12664) {
      this.writeShowFilterButton(tvIn12664);
    }
    writeShowFilterButton(tvIn4703, tvIn4704 = {}) {
      if (tvIn4703 && !this.#i)
        throw Error("Filter buttons require the table to have a header row.");
      if (this.showFilterButton === tvIn4703) return;
      let tvBind13991 = this.#u();
      tvBind13991.autoFilter = tvIn4703
        ? {
            ref: tvBind13991.ref,
            columns: [],
          }
        : undefined;
      (tvIn4704.record ?? true) &&
        this.#h({
          showFilterButton: tvIn4703,
        });
    }
    getRange() {
      return (this.refreshBounds(), this.#e.getRange(this.address));
    }
    getHeaderRowRange() {
      let tvBind21566 = this.#o;
      return this.#e.getRange(this.#d(tvBind21566, tvBind21566));
    }
    get rows() {
      return this.#t;
    }
    delete() {
      let tvBind16362 = this.#e.workbook.getRecorder();
      if (tvBind16362) {
        let tvBind19549 = {
          op: "table.remove",
          target: {
            name: this.name,
            sheet: this.#e.name,
          },
        };
        tvBind16362.record(tvBind19549);
      }
      this.#r?.(this);
    }
    appendRows(tvIn2051) {
      if (!tvIn2051.length) return;
      this.refreshBounds();
      this.#c === 0 && (this.#c = tvIn2051[0]?.length ?? 0);
      let tvBind8909 = this.#o + this.#a + this.#l,
        tvBind8910 = tvBind8909 + tvIn2051.length - 1,
        tvBind8911 = this.#d(tvBind8909, tvBind8910),
        tvBind8912 = tvIn2051.map((item) => this.#f(item)),
        tvBind8913 = this.#e.workbook.getRecorder();
      if (
        (this.#e.getRange(tvBind8911).writeValues(tvBind8912, {
          record: false,
        }),
        (this.#l += tvIn2051.length),
        this.#p(),
        this.syncColumnsFromSheet(),
        tvBind8913)
      ) {
        let tvBind16425 = tvBind8912.map((item) =>
            item.map((_item) => che(_item)),
          ),
          tvBind16426 = {
            op: "table.rows.add",
            target: {
              name: this.name,
              sheet: this.#e.name,
            },
            props: {
              index: null,
              values: tvBind16425,
            },
          };
        tvBind8913.record(tvBind16426);
      }
    }
    getDataRows() {
      if ((this.refreshBounds(), this.#l <= 0)) return [];
      let tvBind18306 = this.#o + this.#a,
        tvBind18307 = tvBind18306 + this.#l - 1;
      return this.#e.getRange(this.#d(tvBind18306, tvBind18307)).values;
    }
    #u() {
      let tvBind21057 = workbookBinding700.get(this);
      if (!tvBind21057) throw Error("Table proto not found");
      return tvBind21057;
    }
    refreshBounds() {
      let tvBind16505 = parseA1Range(this.#u().ref);
      if (!tvBind16505) return;
      let tvBind16506 = boundsSize(tvBind16505.bounds);
      this.#o = tvBind16505.bounds.startRow;
      this.#s = tvBind16505.bounds.startCol;
      this.#c = tvBind16506.cols;
      this.#l = tvBind16506.rows - this.#a;
    }
    #d(tvIn8512, tvIn8513) {
      return formatA1Range({
        startRow: tvIn8512,
        endRow: tvIn8513,
        startCol: this.#s,
        endCol: this.#s + Math.max(0, this.#c - 1),
      });
    }
    #f(tvIn10521) {
      let tvBind20984 = [];
      for (let tvBind22802 = 0; tvBind22802 < this.#c; tvBind22802++)
        tvBind20984[tvBind22802] = tvIn10521?.[tvBind22802] ?? null;
      return tvBind20984;
    }
    #p() {
      let tvBind12927 = this.#u(),
        tvBind12928 = this.#o + this.#a + Math.max(0, this.#l) - 1;
      tvBind12927.ref = formatA1Range({
        startRow: this.#o,
        startCol: this.#s,
        endRow: Math.max(this.#o, tvBind12928),
        endCol: this.#s + Math.max(0, this.#c - 1),
      });
      tvBind12927.headerRowCount = this.#a;
      tvBind12927.totalsRowCount = tvBind12927.totalsRowCount ?? 0;
      tvBind12927.autoFilter && (tvBind12927.autoFilter.ref = tvBind12927.ref);
    }
    syncColumnsFromSheet() {
      let tvBind12125 = this.#u(),
        tvBind12126 = this.#i
          ? (this.getHeaderRowRange().values?.[0] ?? [])
          : [],
        tvBind12127 = [];
      for (let tvBind15598 = 0; tvBind15598 < this.#c; tvBind15598++) {
        let tvBind16341 = tvBind12126?.[tvBind15598];
        tvBind12127.push({
          id: tvBind15598 + 1,
          name:
            tvBind16341 != null && tvBind16341 !== ""
              ? String(tvBind16341)
              : `Column${tvBind15598 + 1}`,
          totalsRowLabel: undefined,
          totalsRowFunction: undefined,
          dataDxfId: undefined,
        });
      }
      tvBind12125.columns = tvBind12127;
    }
    #m() {
      let tvBind22016 = this.#u();
      return ((tvBind22016.style ||= ohe()), tvBind22016.style);
    }
    #h(tvIn6044, tvIn6045 = this.name) {
      let tvBind16076 = this.#e.workbook.getRecorder();
      if (!tvBind16076 || Object.keys(tvIn6044).length === 0) return;
      let tvBind16077 = {
        op: "table.set",
        target: {
          name: tvIn6045,
          sheet: this.#e.name,
        },
        props: tvIn6044,
      };
      tvBind16076.record(tvBind16077);
    }
  };
  lhe = (tvIn8328) => ({
    id: -1,
    name: tvIn8328,
    displayName: tvIn8328,
    ref: "A1",
    columns: [],
    headerRowCount: 0,
    totalsRowCount: 0,
    totalsRowShown: false,
  });
  uhe = class extends workbookBinding702 {
    #e;
    constructor(tvIn12809, tvIn12810) {
      super(tvIn12809, lhe(tvIn12810));
      this.#e = tvIn12810;
    }
    get isNullObject() {
      return true;
    }
    get worksheet() {
      return this.#t();
    }
    get hasHeaders() {
      return this.#t();
    }
    get showHeaders() {
      return this.#t();
    }
    set showHeaders(tvIn14705) {
      this.#t();
    }
    get name() {
      return this.#e || "Unknown";
    }
    set name(tvIn15254) {
      this.#t();
    }
    get address() {
      return "";
    }
    get style() {
      return this.#t();
    }
    set style(tvIn15223) {
      this.#t();
    }
    get showTotals() {
      return this.#t();
    }
    set showTotals(tvIn14792) {
      this.#t();
    }
    get showBandedRows() {
      return this.#t();
    }
    set showBandedRows(tvIn14363) {
      this.#t();
    }
    get highlightFirstColumn() {
      return this.#t();
    }
    set highlightFirstColumn(tvIn13771) {
      this.#t();
    }
    get highlightLastColumn() {
      return this.#t();
    }
    set highlightLastColumn(tvIn13936) {
      this.#t();
    }
    get showBandedColumns() {
      return this.#t();
    }
    set showBandedColumns(tvIn14153) {
      this.#t();
    }
    get showFilterButton() {
      return this.#t();
    }
    set showFilterButton(tvIn14202) {
      this.#t();
    }
    getRange() {
      return this.#t();
    }
    getHeaderRowRange() {
      return this.#t();
    }
    get rows() {
      return this.#t();
    }
    delete() {
      this.#t();
    }
    appendRows(tvIn15181) {
      this.#t();
    }
    getDataRows() {
      return this.#t();
    }
    #t() {
      let tvBind21618 = this.#e || "Unknown";
      throw Error(`Table "${tvBind21618}" not found.`);
    }
  };
  dhe = class {
    #e;
    constructor(tvIn14874) {
      this.#e = tvIn14874;
    }
    add(tvIn8306, tvIn8307) {
      if (tvIn8306 != null)
        throw Error(
          "Inserting table rows at a specific index is not supported yet",
        );
      this.#e.appendRows(tvIn8307);
    }
    get items() {
      return this.#e.getDataRows().map((item) => [item]);
    }
  };
});
