// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-47: PivotCaches ops-host surface for peeled methods.

export type PivotCachesOpsHost = {
  caches: any;
  workbook: any;
  worksheet: any;
  items: any[];
  pivotCacheList: any[];
  normalizeBlankLabel: (value: unknown) => string | null;
  formatPageFieldValue: (pivot: any, field: unknown, item: unknown) => unknown;
  buildRowFieldValueMap: (pivot: any) => Map<unknown, unknown>;
  resolvePageFieldCaption: (
    a: unknown,
    b: unknown,
    c: unknown,
    d: unknown,
    e: unknown,
  ) => unknown;
  paintHeaderCells: (
    worksheet: any,
    row: number,
    startCol: number,
    endCol: number,
  ) => void;
  resolveStyleIndex: (worksheet: any, row: number, col: number) => unknown;
};
