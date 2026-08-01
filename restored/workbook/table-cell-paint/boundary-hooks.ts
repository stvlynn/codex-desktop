// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-99/104/138: table-cell-paint boundary hooks.

export type TableCellPaintBoundaryHooks = {
  /** Round px→milli (legacy bh635). */
  roundPx1000: (...args: any[]) => any;
  /** Border segment key (legacy yTe). */
  borderSegmentKey: (...args: any[]) => any;
  bh634: (...args: any[]) => any;
  bh636: (...args: any[]) => any;
  bh638: (...args: any[]) => any;
  /** Parse span int (bh631). */
  parseSpan: (...args: any[]) => any;
  /** Is span missing (bh632). */
  isMissingSpan: (...args: any[]) => any;
};

export const tcpH: TableCellPaintBoundaryHooks =
  {} as TableCellPaintBoundaryHooks;

export function wireTableCellPaintBoundaryHooks(
  next: TableCellPaintBoundaryHooks,
): void {
  Object.assign(tcpH, next);
}
