// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-46: Range ops-host surface for peeled methods.

export type RangeOpsHost = {
  range: any;
  addressRaw: any;
  worksheet: any;
  format: any;
  cachedFormulas: any;
  cachedFormulasR1C1: any;
  cachedValues: any;
  cachedRawValues: any;
  cfApi: any;
  dvApi: any;
  sparklinesApi: any;
  getBounds: () => any;
  coerceCellValue: (value: unknown) => unknown;
  normalizeWriteValues: (value: unknown) => unknown;
  applyMatrixFn: (fn: unknown) => unknown;
  normalizeScalar: (value: unknown) => unknown;
  editCells: (bounds: unknown, visitor: unknown) => unknown;
  getFirstCell: (bounds: unknown) => unknown;
  createFormatHost: () => unknown;
  probeMatrix: (matrix: unknown, label: unknown) => any;
  mapMatrix: (matrix: unknown, bounds: unknown, label: unknown) => unknown;
  isBlankCell: (cell: unknown) => boolean;
  clearCellAt: (row: unknown, col: unknown, worksheet: unknown) => void;
  copyCellStyle: (from: unknown, to: unknown, worksheet: unknown) => void;
  readValuesBlock: (bounds: unknown) => unknown;
  readFormulasBlock: (bounds: unknown) => unknown;
  broadcastMatrix: (
    matrix: unknown,
    bounds: unknown,
    label: unknown,
  ) => unknown;
  collectFormulasR1C1: () => unknown;
  collectDisplayFormulas: () => unknown;
  collectValues: () => unknown;
  collectRawValues: () => unknown;
  writeValuesBlock: (a: unknown, b: unknown) => unknown;
  writeFormulasBlock: (
    a: unknown,
    b: unknown,
    c?: unknown,
    d?: unknown,
  ) => unknown;
};
