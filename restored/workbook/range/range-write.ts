// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-46: peeled Range write helper.

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
export function rangeWrite(
  host: RangeOpsHost,
  rngIn268: unknown,
  rngIn269: Record<string, unknown> = {},
) {
  let rngBind3392 = host.getBounds(),
    rngBind3393 = host.worksheet;
  if (!rngBind3392 || !rngBind3393)
    throw Error("Range.write requires a range attached to a worksheet.");
  let rngBind3394 = rngIn269.resize ?? "auto",
    rngBind3395 = rngIn269.overwrite ?? "allow";
  if (typeof rngIn268 == "object" && rngIn268 && !Array.isArray(rngIn268)) {
    let rngBind4598 = rngIn268,
      rngBind4599 = [
        rngBind4598.values === undefined ? null : "values",
        rngBind4598.formulas === undefined ? null : "formulas",
        rngBind4598.formulasR1C1 === undefined ? null : "formulasR1C1",
      ].filter((item) => item !== null);
    if (rngBind4599.length === 0)
      throw Error(
        "Range.write(payload) expects one of: { values }, { formulas }, { formulasR1C1 }.",
      );
    if (rngBind4599.length > 1)
      throw Error(
        `Range.write(payload) expects exactly one field; got ${rngBind4599.join(", ")}.`,
      );
    let rngBind4600 = rngBind4599[0];
    if (rngBind4600 === "values")
      return host.range.write(rngBind4598.values ?? null, rngIn269);
    let rngBind4601 = rngBind4598[rngBind4600],
      rngBind4602 =
        Array.isArray(rngBind4601) &&
        (rngBind4601.length === 0 || !Array.isArray(rngBind4601[0]))
          ? [rngBind4601]
          : rngBind4601,
      rngBind4603 = rngBind4602.length,
      rngBind4604 = rngBind4602.reduce(
        (accumulator, current) =>
          Math.max(accumulator, Array.isArray(current) ? current.length : 0),
        0,
      );
    if (rngBind4603 <= 0 || rngBind4604 <= 0)
      throw Error("Range.write expects a non-empty 2D matrix.");
    let rngBind4605 =
      rngBind3394 === "none"
        ? this
        : rngBind3393.getRange(
            formatA1Range({
              startRow: rngBind3392.startRow,
              startCol: rngBind3392.startCol,
              endRow: rngBind3392.startRow + rngBind4603 - 1,
              endCol: rngBind3392.startCol + rngBind4604 - 1,
            }),
          );
    if (
      (rngIn269.clear &&
        rngBind4605.clear({
          applyTo: rngIn269.clear,
        }),
      rngBind3395 === "error")
    ) {
      let rngBind14150 = rngBind4605.#y({
        worksheet: rngBind3393,
        bounds: rngBind4605.#f(),
      });
      if (rngBind14150.length > 0) {
        let rngBind16423 = rngBind3393.name ? `${rngBind3393.name}!` : "",
          rngBind16424 = rngBind14150
            .map((item) => `${rngBind16423}${item}`)
            .join(", ");
        throw Error(
          `Range.write would overwrite existing values in ${rngBind16424}. Pass overwrite: 'allow' to proceed.`,
        );
      }
    }
    return (
      rngBind4600 === "formulas"
        ? (rngBind4605.formulas = rngBind4602)
        : (rngBind4605.formulasR1C1 = rngBind4602),
      rngBind4605
    );
  }
  if (rngIn268 === null) {
    let rngBind21463 = rngIn269.clear ?? "contents";
    return (
      host.range.clear({
        applyTo: rngBind21463,
      }),
      this
    );
  }
  let rngBind3396 =
      Array.isArray(rngIn268) &&
      (rngIn268.length === 0 || !Array.isArray(rngIn268[0]))
        ? [rngIn268]
        : rngIn268,
    rngBind3397 = rngBind3396.length,
    rngBind3398 = rngBind3396.reduce(
      (accumulator, current) =>
        Math.max(accumulator, Array.isArray(current) ? current.length : 0),
      0,
    );
  if (rngBind3397 <= 0 || rngBind3398 <= 0)
    throw Error("Range.write expects a non-empty 2D matrix.");
  let rngBind3399 =
    rngBind3394 === "none"
      ? this
      : rngBind3393.getRange(
          formatA1Range({
            startRow: rngBind3392.startRow,
            startCol: rngBind3392.startCol,
            endRow: rngBind3392.startRow + rngBind3397 - 1,
            endCol: rngBind3392.startCol + rngBind3398 - 1,
          }),
        );
  if (
    (rngIn269.clear &&
      rngBind3399.clear({
        applyTo: rngIn269.clear,
      }),
    rngBind3395 === "error")
  ) {
    let rngBind14444 = rngBind3399.#y({
      worksheet: rngBind3393,
      bounds: rngBind3399.#f(),
    });
    if (rngBind14444.length > 0) {
      let rngBind16717 = rngBind3393.name ? `${rngBind3393.name}!` : "",
        rngBind16718 = rngBind14444
          .map((item) => `${rngBind16717}${item}`)
          .join(", ");
      throw Error(
        `Range.write would overwrite existing values in ${rngBind16718}. Pass overwrite: 'allow' to proceed.`,
      );
    }
  }
  return ((rngBind3399.values = rngBind3396), rngBind3399);
}
