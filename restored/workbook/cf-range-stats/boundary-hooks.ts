// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-125: cf-range-stats Excel-date / cell-type hooks.

export type CfRangeStatsHooks = {
  /** Legacy Binding1959 — Excel epoch UTC ms. */
  excelEpochUtc: number;
  /** Legacy Binding1960 — ms per day. */
  msPerDay: number;
  /** Legacy dht — ISO date regex. */
  isoDateRe: RegExp;
  /** Presentation cell data-type enum (legacy d). */
  CellDataType: any;
};

export const crsH: CfRangeStatsHooks = {} as CfRangeStatsHooks;

export function wireCfRangeStatsBoundaryHooks(
  next: Partial<CfRangeStatsHooks>,
): void {
  Object.assign(crsH, next);
}
