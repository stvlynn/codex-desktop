// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-47: PivotCaches leaf peels (build-pivot-table-proto.ts).

// Stage-3 wave-47: peeled PivotCaches helper.
export function buildPivotTableProto(
  name: unknown,
  cacheId: unknown,
  reference: unknown,
  headers: unknown,
  numFmtByField: Map<number, number>,
): any {
  let pivotBind6053 = headers.map((item, index) => ({
    index,
    name: item,
    axis: undefined,
    dataField: false,
    showAll: true,
    subtotalTop: true,
    items: [],
    numberFormatId: numFmtByField.get(index),
    sortType: undefined,
    axisEnum: undefined,
    sortTypeEnum: undefined,
  }));
  return {
    name: name,
    cacheId: cacheId,
    location: {
      reference: reference,
      firstHeaderRow: 0,
      firstDataRow: 1,
      firstHeaderColumn: 0,
      firstDataColumn: 0,
    },
    dataOnRows: false,
    rowGrandTotals: true,
    columnGrandTotals: true,
    pivotFields: pivotBind6053,
    rowFields: [],
    columnFields: [],
    pageFields: [],
    dataFields: [],
    filters: [],
    compact: true,
    outline: false,
    showDrill: true,
    styleName: undefined,
    rowItems: [],
    columnItems: [],
    showRowHeaders: true,
    showColHeaders: true,
    showRowStripes: false,
    showColStripes: false,
    showLastColumn: false,
    formats: [],
    conditionalFormats: [],
    pivotHierarchies: [],
    rowHierarchyUsages: [],
    columnHierarchyUsages: [],
  };
}
