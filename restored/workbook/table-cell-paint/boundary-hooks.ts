// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-99/104: table-cell-paint boundary hooks.

export type TableCellPaintBoundaryHooks = {
  /** Round px→milli (legacy helper635). */
  roundPx1000: (...args: any[]) => any;
  /** Has table content check (legacy vTe). */
  hasTableContent: (...args: any[]) => any;
  /** Border segment key (legacy yTe). */
  borderSegmentKey: (...args: any[]) => any;
  bh634: (...args: any[]) => any;
  bh636: (...args: any[]) => any;
  bh638: (...args: any[]) => any;
  /** Parse span int (helper631). */
  parseSpan: (...args: any[]) => any;
  /** Is span missing (helper632). */
  isMissingSpan: (...args: any[]) => any;
};

export const tcpH: TableCellPaintBoundaryHooks =
  {} as TableCellPaintBoundaryHooks;

export function wireTableCellPaintBoundaryHooks(
  next: TableCellPaintBoundaryHooks,
): void {
  Object.assign(tcpH, next);
}
