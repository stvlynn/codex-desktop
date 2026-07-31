// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-45: typed cell-value coerce (legacy typed-cell-coerce).

import { d as cellDataType } from "../spreadsheet-protobuf";

export function coerceCellTypedValue(addrIn5465: unknown) {
  if (!addrIn5465 || addrIn5465.value == null) return null;
  switch (addrIn5465.dataType) {
    case cellDataType.CELL_DATA_TYPE_NUMBER:
      return Number(addrIn5465.value);
    case cellDataType.CELL_DATA_TYPE_BOOLEAN:
      return addrIn5465.value === "TRUE" || addrIn5465.value === "1";
    case cellDataType.CELL_DATA_TYPE_DATE:
      return new Date(addrIn5465.value);
    default:
      return addrIn5465.value;
  }
}
