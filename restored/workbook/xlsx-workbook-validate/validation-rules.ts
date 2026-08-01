// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic: XLSX workbook validation error catalog (legacy Binding1955 / wpt).
// Stage-3 wave-116.

export const XLSX_VALIDATION_RULES = [
  {
    code: "SS-FM-7E84",
    name: "xlsx.formula.literal_table_function",
    messageTemplate:
      "A cell formula uses TABLE(...). Excel sensitivity data tables require dataTable formula records, not ordinary formula text (sheet=[sheet], cell=[cell], formula=[formula]).",
    triggersRepairDialog: true,
  },
  {
    code: "SS-MC-14C5",
    name: "xlsx.merged_cells.overlap",
    messageTemplate:
      "A worksheet contains overlapping merged-cell ranges (sheet=[sheet], ranges=[ranges]).",
    triggersRepairDialog: true,
  },
  {
    code: "SS-ST-6780",
    name: "xlsx.styles.font_size.below_excel_minimum",
    messageTemplate:
      "Font size is below Excel's supported minimum (font index=[fontIndex], size=[size]).",
    triggersRepairDialog: true,
  },
  {
    code: "SS-ST-B660",
    name: "xlsx.styles.font_size.zero",
    messageTemplate: "Font size is zero (font index=[fontIndex], size=[size]).",
    triggersRepairDialog: true,
  },
  {
    code: "SS-ST-B5DD",
    name: "xlsx.cell.style_index.out_of_range",
    messageTemplate:
      "Cell references a missing style index (cell=[cell], style index=[styleIndex]).",
    triggersRepairDialog: true,
  },
  {
    code: "SS-TB-0A42",
    name: "xlsx.table_column.name.duplicate",
    messageTemplate:
      "Table contains duplicate column names (table=[table], column name=[columnName]).",
    triggersRepairDialog: true,
  },
  {
    code: "SS-TB-1EAF",
    name: "xlsx.table.filter_column.colid_out_of_range",
    messageTemplate:
      "Table filter column index is outside the table range (table=[table], col ID=[colId], width=[width]).",
    triggersRepairDialog: false,
  },
  {
    code: "SS-TB-4DDB",
    name: "xlsx.table.autofilter_ref.mismatch",
    messageTemplate:
      "Table autoFilter range does not match the table range (table=[table], table ref=[tableRef], auto filter ref=[autoFilterRef]).",
    triggersRepairDialog: false,
  },
  {
    code: "SS-TB-93B6",
    name: "xlsx.table.ref_column_count.mismatch",
    messageTemplate:
      "Table range width does not match table column metadata (table=[table], ref=[ref], table columns=[tableColumns]).",
    triggersRepairDialog: true,
  },
  {
    code: "SS-TB-C6CD",
    name: "xlsx.table.display_name.duplicate",
    messageTemplate:
      "Workbook contains duplicate table names (table name=[tableName]).",
    triggersRepairDialog: true,
  },
  {
    code: "SS-TB-D29F",
    name: "xlsx.table_column.id.duplicate",
    messageTemplate:
      "Table contains duplicate column ids (table=[table], column ID=[columnId]).",
    triggersRepairDialog: true,
  },
  {
    code: "SS-WB-7A49",
    name: "xlsx.workbook.sheets.empty",
    messageTemplate: "Workbook has no worksheets (workbook=[workbook]).",
    triggersRepairDialog: true,
  },
  {
    code: "SS-WB-E3C7",
    name: "xlsx.workbook.sheet_name.duplicate",
    messageTemplate:
      "Workbook contains duplicate worksheet names (sheet name=[sheetName]).",
    triggersRepairDialog: true,
  },
  {
    code: "SS-WS-7C95",
    name: "xlsx.worksheet.cell_ref.duplicate",
    messageTemplate:
      "Worksheet contains duplicate cell references (sheet=[sheet], cell=[cell]).",
    triggersRepairDialog: true,
  },
  {
    code: "SS-WS-8A2F",
    name: "xlsx.worksheet.row.height.negative",
    messageTemplate:
      "Worksheet row has a negative height (sheet=[sheet], row=[row], height=[height]).",
    triggersRepairDialog: false,
  },
  {
    code: "SS-WS-D358",
    name: "xlsx.worksheet.column.width.negative",
    messageTemplate:
      "Worksheet column has a negative width (sheet=[sheet], column range=[columnRange], width=[width]).",
    triggersRepairDialog: false,
  },
  {
    code: "SS-WS-F06D",
    name: "xlsx.worksheet.sheet_view.pane_split.negative",
    messageTemplate:
      "Worksheet pane split is negative (sheet=[sheet], axis=[axis], split=[split]).",
    triggersRepairDialog: true,
  },
];
