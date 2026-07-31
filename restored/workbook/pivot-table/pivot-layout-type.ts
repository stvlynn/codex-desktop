// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-49: PivotTable layout type enum (legacy Binding338).

/** Legacy `workbookBinding338` — compact / outline / tabular layout. */
export const PivotLayoutType = {
  compact: "Compact",
  outline: "Outline",
  tabular: "Tabular",
} as const;

export type PivotLayoutTypeValue =
  (typeof PivotLayoutType)[keyof typeof PivotLayoutType];
