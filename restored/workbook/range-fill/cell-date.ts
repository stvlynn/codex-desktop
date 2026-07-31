// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-45: Excel serial/date coerce helpers (legacy date-serialize/gme).

/** Excel 1900-date system epoch (1899-12-30 UTC). Legacy Binding670. */
export const EXCEL_EPOCH_UTC_MS = Date.UTC(1899, 11, 30);
/** Milliseconds per day. Legacy Binding671. */
export const MS_PER_DAY = 86400000;

export function serializeDateOrNull(fillIn12534: unknown) {
  return fillIn12534 instanceof Date
    ? fillIn12534.toISOString()
    : (fillIn12534 ?? null);
}
export function coerceExcelSerialToDate(fillIn6650: unknown) {
  if (fillIn6650 instanceof Date) return fillIn6650;
  if (typeof fillIn6650 == "string") {
    let fillBind22143 = Number(fillIn6650);
    return Number.isFinite(fillBind22143)
      ? new Date(EXCEL_EPOCH_UTC_MS + fillBind22143 * MS_PER_DAY)
      : null;
  }
  return typeof fillIn6650 == "number" && Number.isFinite(fillIn6650)
    ? new Date(EXCEL_EPOCH_UTC_MS + fillIn6650 * MS_PER_DAY)
    : null;
}
