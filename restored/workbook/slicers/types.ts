// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-48: slicer VO option / meta surfaces.

export type SlicerMeta = {
  pivotTableName: string;
  fieldName: string;
  selectedItems: string[];
};

export type SlicerConstructorOpts = {
  workbook?: any;
  worksheet: any;
  pivotTable: any;
  field: any;
  onDelete?: (slicer: any) => void;
  onNameChange?: (
    slicer: any,
    oldName: string | undefined,
    newName: string,
  ) => void;
};

export type SlicersConstructorOpts = {
  workbook?: any;
  worksheet?: any;
  context: { slicerCaches: any[] };
};
