// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-46: peeled Range helpers (rangeGetCurrentRegion, rangeGetResizedRange, rangeGetOffsetRange, rangeGetRangeByIndexes, rangeGetColumn, rangeGetRow, rangeGetCell).

import type { RangeOpsHost } from "./types";
import {
  formatA1Range,
  parseA1Range,
} from "../../utils/spreadsheet-address-utils";
import { getAttachedWorksheet } from "../worksheet-attachment";

export function rangeGetCurrentRegion(host: RangeOpsHost) {
  let rngBind6994 = getAttachedWorksheet(this);
  if (!rngBind6994) throw Error("Range is not attached to a worksheet.");
  let rngBind6995 = host.getBounds();
  if (!rngBind6995) throw Error("Range is not attached to a worksheet.");
  let rngBind6996 = rngBind6995.startRow,
    rngBind6997 = rngBind6995.startCol;
  if (!host.copyCellStyle(rngBind6994, rngBind6996, rngBind6997))
    return rngBind6994.getRangeByIndexes(rngBind6996, rngBind6997, 1, 1);
  let rngBind6998 = rngBind6996,
    rngBind6999 = rngBind6996,
    rngBind7000 = rngBind6997,
    rngBind7001 = rngBind6997,
    rngBind7002 = (rngIn10519) => {
      for (
        let rngBind22669 = rngBind7000;
        rngBind22669 <= rngBind7001;
        rngBind22669 += 1
      )
        if (host.copyCellStyle(rngBind6994, rngIn10519, rngBind22669))
          return true;
      return false;
    },
    rngBind7003 = (rngIn10520) => {
      for (
        let rngBind22670 = rngBind6998;
        rngBind22670 <= rngBind6999;
        rngBind22670 += 1
      )
        if (host.copyCellStyle(rngBind6994, rngBind22670, rngIn10520))
          return true;
      return false;
    };
  for (;;) {
    let rngBind15905 = false;
    if (
      (rngBind6998 > 0 &&
        rngBind7002(rngBind6998 - 1) &&
        (--rngBind6998, (rngBind15905 = true)),
      rngBind7002(rngBind6999 + 1) &&
        ((rngBind6999 += 1), (rngBind15905 = true)),
      rngBind7000 > 0 &&
        rngBind7003(rngBind7000 - 1) &&
        (--rngBind7000, (rngBind15905 = true)),
      rngBind7003(rngBind7001 + 1) &&
        ((rngBind7001 += 1), (rngBind15905 = true)),
      !rngBind15905)
    )
      break;
  }
  let rngBind7004 = formatA1Range({
    startRow: rngBind6998,
    startCol: rngBind7000,
    endRow: rngBind6999,
    endCol: rngBind7001,
  });
  return rngBind6994.getRange(rngBind7004);
}

export function rangeGetResizedRange(
  host: RangeOpsHost,
  rngIn2854: unknown,
  rngIn2855: unknown,
) {
  for (let [rngBind17765, rngBind17766] of [
    ["deltaRows", rngIn2854],
    ["deltaColumns", rngIn2855],
  ])
    if (!Number.isFinite(rngBind17766) || !Number.isInteger(rngBind17766))
      throw Error(`Range.getResizedRange ${rngBind17765} must be an integer.`);
  let rngBind10645 = host.getBounds();
  if (!rngBind10645) throw Error("Range is not attached to a worksheet.");
  let rngBind10646 = rngBind10645.rows + rngIn2854,
    rngBind10647 = rngBind10645.cols + rngIn2855;
  if (rngBind10646 <= 0 || rngBind10647 <= 0)
    throw Error(
      "Range.getResizedRange requires resulting row/column counts to be positive.",
    );
  return host.range.getOffsetRange(0, 0, rngBind10646, rngBind10647);
}

export function rangeGetOffsetRange(
  host: RangeOpsHost,
  rngIn1009: unknown,
  rngIn1010: unknown,
  rngIn1011: unknown,
  rngIn1012: unknown,
) {
  for (let [rngBind17792, rngBind17793] of [
    ["rowOffset", rngIn1009],
    ["columnOffset", rngIn1010],
  ])
    if (!Number.isFinite(rngBind17793) || !Number.isInteger(rngBind17793))
      throw Error(`Range.getOffsetRange ${rngBind17792} must be an integer.`);
  if (
    rngIn1011 !== undefined &&
    (!Number.isFinite(rngIn1011) || !Number.isInteger(rngIn1011))
  )
    throw Error("Range.getOffsetRange rowCount must be an integer.");
  if (
    rngIn1012 !== undefined &&
    (!Number.isFinite(rngIn1012) || !Number.isInteger(rngIn1012))
  )
    throw Error("Range.getOffsetRange columnCount must be an integer.");
  let rngBind6152 = getAttachedWorksheet(this);
  if (!rngBind6152) throw Error("Range is not attached to a worksheet.");
  let rngBind6153 = host.getBounds();
  if (!rngBind6153) throw Error("Range is not attached to a worksheet.");
  let rngBind6154 = rngIn1011 ?? rngBind6153.rows,
    rngBind6155 = rngIn1012 ?? rngBind6153.cols;
  if (rngBind6154 <= 0 || rngBind6155 <= 0)
    throw Error("Range.getOffsetRange requires positive row/column counts.");
  let rngBind6156 = rngBind6153.startRow + rngIn1009,
    rngBind6157 = rngBind6153.startCol + rngIn1010;
  if (rngBind6156 < 0 || rngBind6157 < 0)
    throw Error("Range.getOffsetRange would start outside the worksheet.");
  let rngBind6158 = formatA1Range({
    startRow: rngBind6156,
    startCol: rngBind6157,
    endRow: rngBind6156 + rngBind6154 - 1,
    endCol: rngBind6157 + rngBind6155 - 1,
  });
  return rngBind6152.getRange(rngBind6158);
}

export function rangeGetRangeByIndexes(
  host: RangeOpsHost,
  rngIn990: unknown,
  rngIn991: unknown,
  rngIn992: unknown,
  rngIn993: unknown,
) {
  for (let [rngBind16150, rngBind16151] of [
    ["rowOffset", rngIn990],
    ["columnOffset", rngIn991],
    ["rowCount", rngIn992],
    ["columnCount", rngIn993],
  ])
    if (!Number.isFinite(rngBind16151) || !Number.isInteger(rngBind16151))
      throw Error(
        `Range.getRangeByIndexes ${rngBind16150} must be an integer.`,
      );
  if (rngIn990 < 0 || rngIn991 < 0)
    throw Error(
      "Range.getRangeByIndexes requires non-negative row and column offsets.",
    );
  if (rngIn992 <= 0 || rngIn993 <= 0)
    throw Error(
      "Range.getRangeByIndexes requires positive row and column counts.",
    );
  let rngBind6072 = getAttachedWorksheet(this);
  if (!rngBind6072) throw Error("Range is not attached to a worksheet.");
  let rngBind6073 = host.getBounds();
  if (!rngBind6073) throw Error("Range is not attached to a worksheet.");
  let rngBind6074 = rngBind6073.startRow + rngIn990,
    rngBind6075 = rngBind6073.startCol + rngIn991,
    rngBind6076 = rngBind6074 + rngIn992 - 1,
    rngBind6077 = rngBind6075 + rngIn993 - 1,
    rngBind6078 = rngBind6073.startRow + rngBind6073.rows - 1,
    rngBind6079 = rngBind6073.startCol + rngBind6073.cols - 1;
  if (
    rngBind6074 > rngBind6078 ||
    rngBind6075 > rngBind6079 ||
    rngBind6076 > rngBind6078 ||
    rngBind6077 > rngBind6079
  ) {
    let rngBind18914 = host.range.address || "range";
    throw Error(
      `Range.getRangeByIndexes(${rngIn990}, ${rngIn991}, ${rngIn992}, ${rngIn993}) is outside the bounds of ${rngBind18914}.`,
    );
  }
  let rngBind6080 = formatA1Range({
    startRow: rngBind6074,
    startCol: rngBind6075,
    endRow: rngBind6076,
    endCol: rngBind6077,
  });
  return rngBind6072.getRange(rngBind6080);
}

export function rangeGetColumn(host: RangeOpsHost, rngIn1497: unknown) {
  if (!Number.isFinite(rngIn1497))
    throw Error("Range.getColumn(columnOffset) requires a numeric argument.");
  if (!Number.isInteger(rngIn1497))
    throw Error("Range.getColumn(columnOffset) requires an integer offset.");
  if (rngIn1497 < 0)
    throw Error(
      "Range.getColumn(columnOffset) requires a non-negative offset.",
    );
  let rngBind7480 = getAttachedWorksheet(this);
  if (!rngBind7480) throw Error("Range is not attached to a worksheet.");
  let rngBind7481 = host.getBounds();
  if (!rngBind7481) throw Error("Range is not attached to a worksheet.");
  let rngBind7482 = rngBind7481.startCol + rngIn1497;
  if (rngBind7482 > rngBind7481.startCol + rngBind7481.cols - 1) {
    let rngBind20592 = host.range.address || "range";
    throw Error(
      `Range.getColumn(${rngIn1497}) is outside the bounds of ${rngBind20592}.`,
    );
  }
  let rngBind7483 = formatA1Range({
    startRow: rngBind7481.startRow,
    endRow: rngBind7481.startRow + rngBind7481.rows - 1,
    startCol: rngBind7482,
    endCol: rngBind7482,
  });
  return rngBind7480.getRange(rngBind7483);
}

export function rangeGetRow(host: RangeOpsHost, rngIn1662: unknown) {
  if (!Number.isFinite(rngIn1662))
    throw Error("Range.getRow(rowOffset) requires a numeric argument.");
  if (!Number.isInteger(rngIn1662))
    throw Error("Range.getRow(rowOffset) requires an integer offset.");
  if (rngIn1662 < 0)
    throw Error("Range.getRow(rowOffset) requires a non-negative offset.");
  let rngBind7932 = getAttachedWorksheet(this);
  if (!rngBind7932) throw Error("Range is not attached to a worksheet.");
  let rngBind7933 = host.getBounds();
  if (!rngBind7933) throw Error("Range is not attached to a worksheet.");
  let rngBind7934 = rngBind7933.startRow + rngIn1662;
  if (rngBind7934 > rngBind7933.startRow + rngBind7933.rows - 1) {
    let rngBind20674 = host.range.address || "range";
    throw Error(
      `Range.getRow(${rngIn1662}) is outside the bounds of ${rngBind20674}.`,
    );
  }
  let rngBind7935 = formatA1Range({
    startRow: rngBind7934,
    endRow: rngBind7934,
    startCol: rngBind7933.startCol,
    endCol: rngBind7933.startCol + rngBind7933.cols - 1,
  });
  return rngBind7932.getRange(rngBind7935);
}

export function rangeGetCell(
  host: RangeOpsHost,
  rngIn1418: unknown,
  rngIn1419: unknown,
) {
  if (!Number.isFinite(rngIn1418) || !Number.isFinite(rngIn1419))
    throw Error("Range.getCell(row, column) requires numeric arguments.");
  if (!Number.isInteger(rngIn1418) || !Number.isInteger(rngIn1419))
    throw Error("Range.getCell(row, column) requires integer arguments.");
  if (rngIn1418 < 0 || rngIn1419 < 0)
    throw Error("Range.getCell(row, column) requires non-negative indexes.");
  let rngBind7273 = getAttachedWorksheet(this);
  if (!rngBind7273) throw Error("Range is not attached to a worksheet.");
  let rngBind7274 = host.getBounds();
  if (!rngBind7274) throw Error("Range is not attached to a worksheet.");
  let rngBind7275 = rngBind7274.startRow + rngIn1418,
    rngBind7276 = rngBind7274.startCol + rngIn1419,
    rngBind7277 = rngBind7274.startRow + rngBind7274.rows - 1,
    rngBind7278 = rngBind7274.startCol + rngBind7274.cols - 1;
  if (rngBind7275 > rngBind7277 || rngBind7276 > rngBind7278) {
    let rngBind19584 = host.range.address || "range";
    throw Error(
      `Range.getCell(${rngIn1418}, ${rngIn1419}) is outside the bounds of ${rngBind19584}.`,
    );
  }
  return rngBind7273.getRangeByIndexes(rngBind7275, rngBind7276, 1, 1);
}
