// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-28: spreadsheet horizontalAlignment enum (legacy Binding337).

export const horizontalAlignment = {
  general: "General",
  left: "Left",
  center: "Center",
  right: "Right",
  fill: "Fill",
  justify: "Justify",
  centerAcrossSelection: "CenterAcrossSelection",
  distributed: "Distributed",
} as const;

export type HorizontalAlignment =
  (typeof horizontalAlignment)[keyof typeof horizontalAlignment];
