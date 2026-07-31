// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-49: peeled PivotTable filter descriptor (legacy #D).

import { Ft } from "../spreadsheet-protobuf";
import {
  dateFilterToken,
  labelFilterToken,
  valueFilterToken,
} from "./boundary-hooks";

export function describePivotFilter(filter: any): {
  descriptor: any;
  typeToken: string;
  typeEnum: any;
} {
  let pivotBind5550 = [
    filter.dateFilter ? "dateFilter" : null,
    filter.labelFilter ? "labelFilter" : null,
    filter.manualFilter ? "manualFilter" : null,
    filter.valueFilter ? "valueFilter" : null,
  ].filter((item) => item != null);
  if (pivotBind5550.length !== 1)
    throw Error("Exactly one filter type must be provided");
  let pivotBind5551 = pivotBind5550[0];
  switch (pivotBind5551) {
    case "dateFilter": {
      let pivotBind17334 = filter.dateFilter;
      return {
        descriptor: {
          kind: pivotBind5551,
          payload: pivotBind17334,
        },
        typeToken: dateFilterToken(pivotBind17334.condition),
        typeEnum: Ft.PIVOT_FILTER_TYPE_UNSPECIFIED,
      };
    }
    case "labelFilter": {
      let pivotBind17318 = filter.labelFilter;
      return {
        descriptor: {
          kind: pivotBind5551,
          payload: pivotBind17318,
        },
        typeToken: labelFilterToken(pivotBind17318.condition),
        typeEnum: Ft.PIVOT_FILTER_TYPE_UNSPECIFIED,
      };
    }
    case "valueFilter": {
      let pivotBind17319 = filter.valueFilter;
      return {
        descriptor: {
          kind: pivotBind5551,
          payload: pivotBind17319,
        },
        typeToken: valueFilterToken(pivotBind17319.condition),
        typeEnum: Ft.PIVOT_FILTER_TYPE_UNSPECIFIED,
      };
    }
    case "manualFilter":
      return {
        descriptor: {
          kind: pivotBind5551,
          payload: filter.manualFilter,
        },
        typeToken: "unknown",
        typeEnum: Ft.PIVOT_FILTER_TYPE_UNSPECIFIED,
      };
    default:
      throw Error("Unsupported filter type");
  }
}
