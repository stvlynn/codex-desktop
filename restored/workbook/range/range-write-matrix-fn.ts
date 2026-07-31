// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-46: peeled Range write matrix helpers.

import type { RangeOpsHost } from "./types";
import { ISO_DATE_TIME_RE } from "./iso-date-time-re";
import { d } from "../spreadsheet-protobuf";
import { formatA1Range } from "../../utils/spreadsheet-address-utils";
import {
  coerceExcelSerialToDate,
  serializeDateOrNull,
  coerceCellTypedValue,
} from "../range-fill";
import {
  shiftA1FormulaRefs,
  convertR1C1ToA1,
  convertA1ToR1C1,
} from "../formula-address";
import { getAttachedWorksheet } from "../worksheet-attachment";
export function normalizeWriteValues(host: RangeOpsHost, rngIn2714: unknown) {
  if (!getAttachedWorksheet(this))
    throw Error("Range.values callback requires a range on a worksheet.");
  let rngBind10312 = host.getBounds();
  if (!rngBind10312)
    throw Error("Range.values callback requires a range with bounds.");
  let rngBind10313 = host.range.values,
    rngBind10314 = [];
  for (
    let rngBind15654 = 0;
    rngBind15654 < rngBind10312.rows;
    rngBind15654 += 1
  ) {
    let rngBind16465 = [];
    for (
      let rngBind18398 = 0;
      rngBind18398 < rngBind10312.cols;
      rngBind18398 += 1
    ) {
      let rngBind19495 = host.range.getCell(rngBind15654, rngBind18398),
        rngBind19496 = rngBind10313[rngBind15654]?.[rngBind18398] ?? null,
        rngBind19497 = rngIn2714(
          rngBind15654,
          rngBind18398,
          rngBind19495,
          rngBind19496,
        );
      rngBind16465.push(
        rngBind19497 === undefined ? rngBind19496 : rngBind19497,
      );
    }
    rngBind10314.push(rngBind16465);
  }
  return rngBind10314;
}

export function applyMatrixFn(host: RangeOpsHost, rngIn2540: unknown) {
  if (!getAttachedWorksheet(this))
    throw Error("Range.formulas callback requires a range on a worksheet.");
  let rngBind9915 = host.getBounds();
  if (!rngBind9915)
    throw Error("Range.formulas callback requires a range with bounds.");
  let rngBind9916 = host.range.formulas,
    rngBind9917 = [];
  for (
    let rngBind15542 = 0;
    rngBind15542 < rngBind9915.rows;
    rngBind15542 += 1
  ) {
    let rngBind16309 = [];
    for (
      let rngBind18245 = 0;
      rngBind18245 < rngBind9915.cols;
      rngBind18245 += 1
    ) {
      let rngBind19337 = host.range.getCell(rngBind15542, rngBind18245),
        rngBind19338 = rngBind9916[rngBind15542]?.[rngBind18245] ?? "",
        rngBind19339 = rngIn2540(
          rngBind15542,
          rngBind18245,
          rngBind19337,
          rngBind19338,
        );
      rngBind16309.push(
        (rngBind19339 === undefined ? rngBind19338 : rngBind19339) ?? "",
      );
    }
    rngBind9917.push(rngBind16309);
  }
  return rngBind9917;
}
