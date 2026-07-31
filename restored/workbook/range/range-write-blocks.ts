// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-46: peeled Range helpers (writeFormulasBlock, writeValuesBlock).

import type { RangeOpsHost } from "./types";
import { d } from "../spreadsheet-protobuf";
import { shiftA1FormulaRefs } from "../formula-address";

export function writeFormulasBlock(
  host: RangeOpsHost,
  rngIn2342: unknown,
  rngIn2343: unknown,
  rngIn2344: unknown,
  rngIn2345: unknown,
) {
  let rngBind9483 = host.worksheet;
  if (!rngBind9483) return;
  let rngBind9484 = rngBind9483.workbook,
    rngBind9485 =
      rngBind9483.__getLogicalStyleIndex(rngIn2344, rngIn2345) ??
      rngIn2342.styleIndex ??
      0;
  if (typeof rngIn2343 == "boolean") {
    let rngBind15981 = rngBind9484.__resolveCheckboxStyleIndex(rngBind9485);
    if (rngBind15981 !== rngBind9485) {
      rngIn2342.styleIndex = rngBind15981;
      rngBind9483.__setLogicalStyleIndex(rngIn2344, rngIn2345, rngBind15981);
      let rngBind18989 =
        rngBind9484.__getOrCreateStyleIdForStyleIndex(rngBind15981);
      rngBind9483.__setCellStyleRef(rngIn2344, rngIn2345, rngBind18989);
    }
    return;
  }
  let rngBind9486 = rngBind9484.__removeCheckboxStyleIndex(rngBind9485);
  if (rngBind9486 !== rngBind9485) {
    rngIn2342.styleIndex = rngBind9486;
    rngBind9483.__setLogicalStyleIndex(rngIn2344, rngIn2345, rngBind9486);
    let rngBind19224 =
      rngBind9484.__getOrCreateStyleIdForStyleIndex(rngBind9486);
    rngBind9483.__setCellStyleRef(rngIn2344, rngIn2345, rngBind19224);
  }
}

export function writeValuesBlock(
  host: RangeOpsHost,
  rngIn1085: unknown,
  rngIn1086: unknown,
) {
  if (rngIn1086 == null) {
    rngIn1085.value = undefined;
    rngIn1085.dataType = d.CELL_DATA_TYPE_UNSPECIFIED;
    rngIn1085.formula = undefined;
    rngIn1085.paragraphs ||= [];
    return;
  }
  switch (
    ((rngIn1085.formula = undefined),
    (rngIn1085.paragraphs ||= []),
    typeof rngIn1086)
  ) {
    case "number":
      Number.isNaN(rngIn1086)
        ? ((rngIn1085.value = undefined),
          (rngIn1085.dataType = d.CELL_DATA_TYPE_ERROR))
        : ((rngIn1085.value = String(rngIn1086)),
          (rngIn1085.dataType = d.CELL_DATA_TYPE_NUMBER));
      break;
    case "boolean":
      rngIn1085.value = rngIn1086 ? "1" : "0";
      rngIn1085.dataType = d.CELL_DATA_TYPE_BOOLEAN;
      break;
    case "object":
      if (rngIn1086 instanceof Date) {
        let rngBind17411 = host.worksheet?.workbook;
        rngIn1085.value = rngBind17411
          ? rngBind17411.__formatRawValueForDisplay(rngIn1086).value
          : rngIn1086.toISOString();
        rngIn1085.dataType = d.CELL_DATA_TYPE_NUMBER;
      } else {
        rngIn1085.value = String(rngIn1086);
        rngIn1085.dataType = d.CELL_DATA_TYPE_STRING;
      }
      break;
    default:
      rngIn1085.value = String(rngIn1086);
      rngIn1085.dataType = d.CELL_DATA_TYPE_STRING;
      break;
  }
}
