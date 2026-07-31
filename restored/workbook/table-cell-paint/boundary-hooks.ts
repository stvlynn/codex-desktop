// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-99: table-cell-paint boundary hooks.

export type TableCellPaintBoundaryHooks = {
  /** Has table content check (legacy vTe). */
  hasTableContent: (...args: any[]) => any;
  /** Layout table columns (legacy $B). */
  layoutTableColumns: (...args: any[]) => any;
  /** Border segment key (legacy yTe). */
  borderSegmentKey: (...args: any[]) => any;
  /** Materialize border strokes (legacy xTe). */
  materializeBorderStrokes: (...args: any[]) => any;
  bh634: (...args: any[]) => any;
  bh636: (...args: any[]) => any;
  bh638: (...args: any[]) => any;
};

export const tcpH: TableCellPaintBoundaryHooks =
  {} as TableCellPaintBoundaryHooks;

export function wireTableCellPaintBoundaryHooks(
  next: TableCellPaintBoundaryHooks,
): void {
  Object.assign(tcpH, next);
}
