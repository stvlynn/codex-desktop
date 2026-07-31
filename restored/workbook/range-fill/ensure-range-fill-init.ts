// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-45: range-fill cluster ensure (legacy hme).

import { esmInit } from "../../runtime/rolldown-runtime";
import { fillRangeFrom } from "./fill-from";
import { detectFillDirection } from "./fill-direction";
import { isCellInBounds } from "./range-bounds";
import { serializeDateOrNull, coerceExcelSerialToDate } from "./cell-date";
import { coerceCellTypedValue } from "./coerce-cell-value";

/** Legacy `hme` — touch fill-from helpers (now eager). */
export const ensureRangeFillInit = esmInit(() => {
  void fillRangeFrom;
  void detectFillDirection;
  void isCellInBounds;
  void serializeDateOrNull;
  void coerceExcelSerialToDate;
  void coerceCellTypedValue;
});
