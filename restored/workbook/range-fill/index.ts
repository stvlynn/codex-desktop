// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-45: range fill-from / cell-date barrel.

export { boundsEndRow, boundsEndCol, isCellInBounds } from "./range-bounds";
export { detectFillDirection, mapFillSourceCell } from "./fill-direction";
export { fillRangeFrom } from "./fill-from";
export {
  EXCEL_EPOCH_UTC_MS,
  MS_PER_DAY,
  serializeDateOrNull,
  coerceExcelSerialToDate,
} from "./cell-date";
export { coerceCellTypedValue } from "./coerce-cell-value";
export { ensureRangeFillInit } from "./ensure-range-fill-init";
