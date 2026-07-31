// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-49: pivot field axis enum/token helpers (legacy workbookHelper 25/26).

import { yt } from "../spreadsheet-protobuf";

export function pivotAxisEnum(pivotIn6017: string) {
  switch (pivotIn6017) {
    case "rows":
      return yt.PIVOT_AXIS_ROW;
    case "columns":
      return yt.PIVOT_AXIS_COLUMN;
    case "filters":
      return yt.PIVOT_AXIS_PAGE;
    case "values":
      return yt.PIVOT_AXIS_VALUES;
    default:
      return yt.PIVOT_AXIS_UNSPECIFIED;
  }
}

export function pivotAxisToken(pivotIn7221: string) {
  switch (pivotIn7221) {
    case "rows":
      return "axisRow";
    case "columns":
      return "axisCol";
    case "filters":
      return "axisPage";
    case "values":
      return "axisValues";
    default:
      return;
  }
}
