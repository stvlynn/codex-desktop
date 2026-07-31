// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: worksheet DataTables collection (legacy xhe/bhe).
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

export const xhe = esmInit(() => {
  spreadsheetVn();
  initAddressUtils();
  bhe = class {
    #e;
    #t;
    constructor(tvIn13108) {
      this.#e = tvIn13108;
      this.#t = [];
    }
    add(tvIn336, tvIn337) {
      if (!tvIn337.rowInput && !tvIn337.columnInput)
        throw Error(
          "Data tables require at least a rowInput or columnInput address",
        );
      let { sheetName, ref } = parseSheetRef(tvIn336);
      if (sheetName && this.#e.name && sheetName !== this.#e.name)
        throw Error(
          `Data table range must be on sheet "${this.#e.name}", got "${sheetName}"`,
        );
      let tvBind3653 = parseA1Range(ref);
      if (!tvBind3653) throw Error(`Invalid data table range: ${tvIn336}`);
      let tvBind3654 = tvBind3653.bounds,
        tvBind3655 = boundsSize(tvBind3654);
      if (tvBind3655.rows < 2 || tvBind3655.cols < 2)
        throw Error(
          `Data table range must include the formula cell plus at least one row and one column of results: ${tvIn336}`,
        );
      let tvBind3656 = tvBind3654.startRow,
        tvBind3657 = tvBind3654.startCol,
        tvBind3658 = this.#e.__getCell(tvBind3656, tvBind3657),
        tvBind3659 = this.#e.__getRawValue(tvBind3656, tvBind3657);
      if (!tvBind3658?.formula && (tvBind3659 == null || tvBind3659 === "")) {
        let tvBind11416 = "";
        if (tvBind3654.startRow > 0 && tvBind3654.startCol > 0) {
          let tvBind14965 = tvBind3654.startRow - 1,
            tvBind14966 = tvBind3654.startCol - 1,
            tvBind14967 = this.#e.__getCell(tvBind14965, tvBind14966),
            tvBind14968 = this.#e.__getRawValue(tvBind14965, tvBind14966);
          (tvBind14967?.formula ||
            (tvBind14968 != null && tvBind14968 !== "")) &&
            (tvBind11416 = ` Did you mean "${formatA1Range({
              startRow: tvBind14965,
              startCol: tvBind14966,
              endRow: tvBind3654.endRow,
              endCol: tvBind3654.endCol,
            })}"?`);
        }
        throw Error(
          `Data table range needs a top-left formula cell. "${formatA1(tvBind3656, tvBind3657)}" is empty.${tvBind11416}`,
        );
      }
      let tvBind3660 = (tvIn2695, tvIn2696) => {
          if (!tvIn2695) return;
          let { sheetName: _sheetName, ref: _ref } = parseSheetRef(tvIn2695);
          if (_sheetName && this.#e.name && _sheetName !== this.#e.name)
            throw Error(
              `Data table ${tvIn2696} must be on sheet "${this.#e.name}", got "${_sheetName}"`,
            );
          let tvBind10260 = parseA1Range(_ref);
          if (!tvBind10260)
            throw Error(`Invalid data table ${tvIn2696} address: ${tvIn2695}`);
          let tvBind10261 = tvBind10260.bounds;
          if (
            tvBind10261.startRow !== tvBind10261.endRow ||
            tvBind10261.startCol !== tvBind10261.endCol
          )
            throw Error(
              `Data table ${tvIn2696} must be a single cell address, not a range: ${tvIn2695}`,
            );
          return formatA1(tvBind10261.startRow, tvBind10261.startCol);
        },
        tvBind3661 = tvBind3660(tvIn337.rowInput, "rowInput"),
        tvBind3662 = tvBind3660(tvIn337.columnInput, "columnInput"),
        tvBind3663 = {
          startRow: tvBind3654.startRow + 1,
          startCol: tvBind3654.startCol + 1,
          endRow: tvBind3654.endRow,
          endCol: tvBind3654.endCol,
        },
        tvBind3664 = formatA1Range(tvBind3663),
        tvBind3665 = {
          row: tvBind3663.startRow,
          col: tvBind3663.startCol,
          address: formatA1(tvBind3663.startRow, tvBind3663.startCol),
        },
        tvBind3666 = this.#e.__getOrCreateCell(tvBind3665.row, tvBind3665.col);
      tvBind3666.formula = undefined;
      tvBind3666.formulaType = p.CELL_FORMULA_TYPE_DATA_TABLE;
      tvBind3666.formulaRef = tvBind3664;
      let tvBind3667 = this.#n({
        bounds: tvBind3663,
        formulaRef: tvBind3664,
        anchor: tvBind3665,
        rowInput: tvBind3661,
        columnInput: tvBind3662,
        rowOriented: undefined,
        twoVariable: undefined,
      });
      tvBind3666.dataTableRowInput = tvBind3667.rowInput;
      tvBind3666.dataTableColumnInput = tvBind3667.columnInput;
      tvBind3666.dataTableRowOriented = tvBind3667.rowOriented;
      tvBind3666.dataTableTwoVariable = tvBind3667.twoVariable;
    }
    __getDefinitions() {
      return this.#t;
    }
    __hydrateFromProto(tvIn3354) {
      if (!tvIn3354.formulaRef) return;
      let tvBind11673 = parseA1Range(tvIn3354.formulaRef);
      tvBind11673 &&
        this.#n({
          bounds: tvBind11673.bounds,
          formulaRef: tvBind11673.ref,
          anchor: {
            row: tvIn3354.anchor.row,
            col: tvIn3354.anchor.col,
            address: formatA1(tvIn3354.anchor.row, tvIn3354.anchor.col),
          },
          rowInput: tvIn3354.rowInput,
          columnInput: tvIn3354.columnInput,
          rowOriented: tvIn3354.rowOriented,
          twoVariable: tvIn3354.twoVariable,
        });
    }
    #n({
      bounds,
      formulaRef,
      anchor,
      rowInput,
      columnInput,
      rowOriented,
      twoVariable,
    }) {
      let tvBind8888 = rowInput?.toUpperCase(),
        tvBind8889 = columnInput?.toUpperCase(),
        tvBind8890 = twoVariable ?? !!(tvBind8888 && tvBind8889),
        tvBind8891 =
          rowOriented ??
          (tvBind8890 || tvBind8888 ? (tvBind8889 ? undefined : true) : false),
        tvBind8892 = [tvBind8888, tvBind8889].filter((item) => !!item),
        tvBind8893 = {
          range: bounds,
          formulaRef,
          anchor: {
            row: anchor.row,
            col: anchor.col,
            address: anchor.address ?? formatA1(anchor.row, anchor.col),
          },
          rowInput: tvBind8888,
          columnInput: tvBind8889,
          rowOriented: tvBind8891,
          twoVariable: tvBind8890,
          displayFormula: `{=TABLE(${tvBind8892.join(",")})}`,
        };
      return (this.#t.push(tvBind8893), tvBind8893);
    }
  };
});
