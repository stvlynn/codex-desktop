// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-61: Cell VO (legacy Binding804 / ensureCellVoInit).

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  Cn as spreadsheetCn,
  d,
  En as spreadsheetEn,
  Sn,
  Vn as ensureSpreadsheetProtoInit,
} from "../spreadsheet-protobuf";
import { WorkbookColor, ensureWorkbookColorInit } from "../theme-color";
import {
  ensureStableIdConstantsInit,
  bracedUuidUpper,
  randomBase36Id,
} from "../stable-id";
import {
  initAddressUtils,
  parseA1Range,
  formatA1,
  formatA1Range,
  normalizeA1Token,
  parseSheetRef,
} from "../../utils/spreadsheet-address-utils";
import {
  buildSparklineSetOp,
  buildSparklineAddOp,
  buildSparklineSelector,
} from "../mutation-ops";
import { ensureBinding662 } from "./boundary-hooks";
import { sparklines } from "./sparkline-bindings";

export const ensureCellVoInit = esmInit(() => {
  ensureSpreadsheetProtoInit();
  sparklines.Cell = class Cell {
    static from(spIn14528: any) {
      return new sparklines.Cell(spIn14528);
    }
    static create(spIn12545: any) {
      return new sparklines.Cell({
        address: spIn12545,
      }).toProto();
    }
    #e;
    constructor(spIn9188: any) {
      this.#e = {
        ...spIn9188,
      };
      this.#e.dataType ??= d.CELL_DATA_TYPE_UNSPECIFIED;
      this.#e.paragraphs ??= [];
    }
    toProto() {
      return this.#e;
    }
    get formula() {
      return this.#e.formula;
    }
    set formula(spIn14160: any) {
      this.#e.formula = spIn14160;
    }
    get sharedFormulaSi() {
      return this.#e.sharedFormulaSi;
    }
    set sharedFormulaSi(spIn12875: any) {
      this.#e.sharedFormulaSi = spIn12875;
    }
    get formulaType() {
      return this.#e.formulaType;
    }
    set formulaType(spIn13398: any) {
      this.#e.formulaType = spIn13398;
    }
    get formulaReference() {
      return this.#e.formulaRef;
    }
    set formulaReference(spIn13114: any) {
      this.#e.formulaRef = spIn13114;
    }
    get alwaysCalculateArray() {
      return this.#e.formulaAlwaysCalculateArray;
    }
    set alwaysCalculateArray(spIn11850: any) {
      this.#e.formulaAlwaysCalculateArray = spIn11850;
    }
    get dataTableMetadata() {
      let {
        dataTableRowInput,
        dataTableColumnInput,
        dataTableRowOriented,
        dataTableTwoVariable,
      } = this.#e;
      if (
        !(
          dataTableRowInput === undefined &&
          dataTableColumnInput === undefined &&
          dataTableRowOriented === undefined &&
          dataTableTwoVariable === undefined
        )
      )
        return {
          rowInput: dataTableRowInput,
          columnInput: dataTableColumnInput,
          rowOriented: dataTableRowOriented,
          twoVariable: dataTableTwoVariable,
        };
    }
    set dataTableMetadata(spIn3422: any) {
      if (!spIn3422) {
        this.#e.dataTableRowInput = undefined;
        this.#e.dataTableColumnInput = undefined;
        this.#e.dataTableRowOriented = undefined;
        this.#e.dataTableTwoVariable = undefined;
        return;
      }
      this.#e.dataTableRowInput = spIn3422.rowInput;
      this.#e.dataTableColumnInput = spIn3422.columnInput;
      this.#e.dataTableRowOriented = spIn3422.rowOriented;
      this.#e.dataTableTwoVariable = spIn3422.twoVariable;
    }
    get formulaMetadata() {
      return {
        sharedFormulaSi: this.sharedFormulaSi,
        formulaType: this.formulaType,
        reference: this.formulaReference,
        alwaysCalculateArray: this.alwaysCalculateArray,
        dataTable: this.dataTableMetadata,
      };
    }
    updateFormulaMetadata(spIn3586: any) {
      return (
        "sharedFormulaSi" in spIn3586 &&
          (this.sharedFormulaSi = spIn3586.sharedFormulaSi),
        "formulaType" in spIn3586 && (this.formulaType = spIn3586.formulaType),
        "reference" in spIn3586 && (this.formulaReference = spIn3586.reference),
        "alwaysCalculateArray" in spIn3586 &&
          (this.alwaysCalculateArray = spIn3586.alwaysCalculateArray),
        "dataTable" in spIn3586 &&
          (this.dataTableMetadata = spIn3586.dataTable),
        this.formulaMetadata
      );
    }
  };
});
