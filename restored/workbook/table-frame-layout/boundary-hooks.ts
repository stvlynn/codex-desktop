// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-94: table-frame-layout boundary hooks.

export type TableFrameLayoutBoundaryHooks = {
  bh639: (...args: any[]) => any;
  bh643: (...args: any[]) => any;
  bh644: (...args: any[]) => any;
  bh645: (...args: any[]) => any;
  resolveCellMargins: (...args: any[]) => any;
  layoutTableColumns: (...args: any[]) => any;
  measureEmbeddedHeight: (...args: any[]) => any;
  paintTableCells: (...args: any[]) => any;
  sumRowSpan: (...args: any[]) => any;
  strokeTableBorders: (...args: any[]) => any;
  fillTableBackground: (...args: any[]) => any;
};

export const tflH: TableFrameLayoutBoundaryHooks = {} as TableFrameLayoutBoundaryHooks;

export function wireTableFrameLayoutBoundaryHooks(
  next: TableFrameLayoutBoundaryHooks,
): void {
  Object.assign(tflH, next);
}
