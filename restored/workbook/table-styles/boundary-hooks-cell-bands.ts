// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-106: table cell style-band hooks (helper380).

export type TableCellStyleBandsBoundaryHooks = {
  /** Resolve named region style from tableStyle (legacy helper380). */
  regionStyle: (...args: any[]) => any;
};

export const tsbH: TableCellStyleBandsBoundaryHooks =
  {} as TableCellStyleBandsBoundaryHooks;

export function wireTableCellStyleBandsBoundaryHooks(
  next: TableCellStyleBandsBoundaryHooks,
): void {
  Object.assign(tsbH, next);
}
