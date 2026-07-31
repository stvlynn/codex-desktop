// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-27: worksheet autofit / measure / span-parse barrel.

export {
  solidFillFromColor,
  mergeCellTextStyleOverrides,
  ensureMergeCellTextStyleInit,
} from "./merge-cell-text-style";
export {
  isListValidationWithoutDropdown,
  clampDropdownInsetPx,
  dropdownExtraWidthForRowHeight,
  ensureDropdownPaddingInit,
} from "./dropdown-padding";
export {
  parseColumnSpanAddress,
  parseRowSpanAddress,
} from "./parse-col-row-span";
export {
  buildColumnStyleIndexArray,
  buildRowStyleIndexMap,
  resolveCellStyleIndex,
} from "./sheet-style-indexes";
export {
  alignmentFromCellStyle,
  applyStyleFontToTextRuns,
  measureCellTextPx,
} from "./measure-cell-text";
export {
  cachedFormatCellDisplay,
  cellHasVisibleContent,
  tableHeaderCellKeys,
  findTableResolverAt,
  filterButtonExtraWidth,
  listValidationBounds,
  isInListValidationRange,
} from "./autofit-helpers";
export { autofitColumnWidths } from "./autofit-columns";
export { autofitRowHeights } from "./autofit-rows";
export { ensureWorksheetAutofitInit } from "./ensure-worksheet-autofit-init";
