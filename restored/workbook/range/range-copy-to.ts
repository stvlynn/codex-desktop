// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-46: peeled Range copyTo helper.

import type { RangeOpsHost } from "./types";
import { d } from "../spreadsheet-protobuf";
import {
  fillRangeFrom,
  coerceCellTypedValue,
  serializeDateOrNull,
} from "../range-fill";
import { shiftA1FormulaRefs } from "../formula-address";
import { getAttachedWorksheet } from "../worksheet-attachment";
export function rangeCopyTo(
  host: RangeOpsHost,
  rngIn13222: any,
  rngIn13223?: unknown,
  rngIn13224?: unknown,
  rngIn13225?: unknown,
) {
  rngIn13222.copyFrom(host.range, rngIn13223, rngIn13224, rngIn13225);
}
