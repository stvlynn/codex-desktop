// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-52: PivotLayout facade (legacy Binding334 / wne).

import { esmInit } from "../../runtime/rolldown-runtime";
import {
  formatA1Range,
  parseA1Range,
  initAddressUtils,
} from "../../utils/spreadsheet-address-utils";

/** Legacy Binding334 — layout meta + data-body range helper. */
export class PivotLayout {
  #e: any;
  constructor(pivotIn14857: any) {
    this.#e = pivotIn14857;
  }
  get layoutType() {
    return this.#e.__getLayoutType();
  }
  set layoutType(pivotIn13206) {
    this.#e.__setLayoutType(pivotIn13206);
  }
  get fillEmptyCells() {
    return this.#e.__getLayoutMeta().fillEmptyCells;
  }
  set fillEmptyCells(pivotIn11778) {
    this.#e.__setLayoutMeta({
      fillEmptyCells: pivotIn11778,
    });
  }
  get preserveFormatting() {
    return this.#e.__getLayoutMeta().preserveFormatting;
  }
  set preserveFormatting(pivotIn11394) {
    this.#e.__setLayoutMeta({
      preserveFormatting: pivotIn11394,
    });
  }
  get emptyCellText() {
    return this.#e.__getLayoutMeta().emptyCellText;
  }
  set emptyCellText(pivotIn11888) {
    this.#e.__setLayoutMeta({
      emptyCellText: pivotIn11888,
    });
  }
  getDataBodyRange() {
    let pivotBind9362 = this.#e.__getLocationForLayout();
    if (!pivotBind9362.reference)
      throw Error("PivotTable location reference is not set");
    let pivotBind9363 = parseA1Range(pivotBind9362.reference);
    if (!pivotBind9363)
      throw Error(
        `Invalid pivot location reference: ${pivotBind9362.reference}`,
      );
    let pivotBind9364 = this.#e.__getDataBodyShapeForLayout(),
      pivotBind9365 = pivotBind9364.dataRowCount,
      pivotBind9366 = pivotBind9364.dataColCount,
      pivotBind9367 =
        pivotBind9363.bounds.startRow + Math.max(0, pivotBind9362.firstDataRow),
      pivotBind9368 =
        pivotBind9363.bounds.startCol +
        Math.max(0, pivotBind9362.firstDataColumn),
      pivotBind9369 = formatA1Range({
        startRow: pivotBind9367,
        startCol: pivotBind9368,
        endRow:
          pivotBind9365 > 0 ? pivotBind9367 + pivotBind9365 - 1 : pivotBind9367,
        endCol:
          pivotBind9366 > 0 ? pivotBind9368 + pivotBind9366 - 1 : pivotBind9368,
      });
    return this.#e.worksheet.getRange(pivotBind9369);
  }
  load(pivotIn15328) {
    return this;
  }
  getCellStyleType(pivotIn6228) {
    let pivotBind16333 = parseA1Range(pivotIn6228);
    if (!pivotBind16333) return null;
    let { startRow, startCol, endRow, endCol } = pivotBind16333.bounds;
    return startRow !== endRow || startCol !== endCol
      ? null
      : (this.#e.__getPivotCellRenderHint(startRow, startCol)?.type ?? null);
  }
  getCellIndentLevel(pivotIn6229) {
    let pivotBind16334 = parseA1Range(pivotIn6229);
    if (!pivotBind16334) return 0;
    let { startRow, startCol, endRow, endCol } = pivotBind16334.bounds;
    return startRow !== endRow || startCol !== endCol
      ? 0
      : (this.#e.__getPivotCellRenderHint(startRow, startCol)?.indentLevel ??
          0);
  }
}

export const ensurePivotLayoutInit = esmInit(() => {
  initAddressUtils();
  void PivotLayout;
});
