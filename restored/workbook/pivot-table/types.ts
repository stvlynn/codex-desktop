// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-49: PivotTable option / ops-host surfaces.

export type PivotTableSource = {
  headers: string[];
  rows: unknown[][];
  address: string;
  worksheet: any;
};

export type PivotTableConstructorOpts = {
  workbook?: any;
  worksheet: any;
  pivot: any;
  cache: any;
  source: PivotTableSource;
  onDelete?: (pivot: any) => void;
  onNameChange?: (
    pivot: any,
    oldName: string | undefined,
    newName: string,
  ) => void;
};

export type PivotLayoutMeta = {
  fillEmptyCells: boolean;
  preserveFormatting: boolean;
  emptyCellText: string;
};

export type PivotTableOpsHost = {
  pivotTable: any;
  workbook: any;
  worksheet: any;
  getProto: () => any;
  syncItemsFromCache: () => void;
  syncFieldAxes: () => void;
};
