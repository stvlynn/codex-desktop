// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-85: boundary deps for table-row-range
// (JEe / Binding1315 table-cell leave-behind).

export type TableRowRangeBoundaryHooks = {
  /** Legacy JEe ensure (seeds Binding1315 table cell). */
  ensureJEe: () => void;
  /** Table cell class (legacy Binding1315). */
  Binding1315: any;
};

/** Live bag for intentional leave-behind ensure/class. */
export const trH: TableRowRangeBoundaryHooks = {} as TableRowRangeBoundaryHooks;

export function wireTableRowRangeBoundaryHooks(
  next: TableRowRangeBoundaryHooks,
): void {
  trH.ensureJEe = next.ensureJEe;
  Object.defineProperty(trH, "Binding1315", {
    get: () => next.Binding1315,
    configurable: true,
  });
}
