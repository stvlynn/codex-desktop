// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-46: peeled Range helpers (rangeUnmerge, rangeMerge, rangeClear).

import type { RangeOpsHost } from "./types";
import { formatA1Range } from "../../utils/spreadsheet-address-utils";
import { getAttachedWorksheet } from "../worksheet-attachment";

export function rangeUnmerge(host: RangeOpsHost) {
  let rngBind13512 = host.worksheet;
  if (!rngBind13512) throw Error("Range is not attached to a worksheet.");
  let rngBind13513 = rngBind13512.workbook.getRecorder(),
    rngBind13514 = host.range.address;
  if (rngBind13513 && rngBind13514 && rngBind13512.name) {
    let rngBind19929 = {
      op: "range.unmerge",
      target: {
        sheet: rngBind13512.name,
        range: rngBind13514,
      },
    };
    rngBind13513.record(rngBind19929);
  }
  rngBind13512.unmergeCells(host.range.address);
}

export function rangeMerge(host: RangeOpsHost, rngIn1981: boolean = false) {
  let rngBind8757 = host.worksheet;
  if (!rngBind8757) throw Error("Range is not attached to a worksheet.");
  let rngBind8758 = host.getBounds();
  if (!rngBind8758) throw Error("Range has no address.");
  let rngBind8759 = rngBind8757.workbook.getRecorder(),
    rngBind8760 = host.range.address;
  if (rngBind8759 && rngBind8760 && rngBind8757.name) {
    let rngBind18803 = {
      op: "range.merge",
      target: {
        sheet: rngBind8757.name,
        range: rngBind8760,
      },
      across: rngIn1981 ? true : undefined,
    };
    rngBind8759.record(rngBind18803);
  }
  if (!rngIn1981) {
    rngBind8757.mergeCells(host.range.address);
    return;
  }
  let rngBind8761 = rngBind8758.startCol + rngBind8758.cols - 1;
  for (
    let rngBind18598 = 0;
    rngBind18598 < rngBind8758.rows;
    rngBind18598 += 1
  ) {
    let rngBind19699 = rngBind8758.startRow + rngBind18598;
    rngBind8757.mergeCells(
      formatA1Range({
        startRow: rngBind19699,
        endRow: rngBind19699,
        startCol: rngBind8758.startCol,
        endCol: rngBind8761,
      }),
    );
  }
}

export function rangeClear(host: RangeOpsHost, rngIn2380?: unknown) {
  let rngBind9583 = rngIn2380?.applyTo ?? "contents";
  if (
    rngBind9583 !== "contents" &&
    rngBind9583 !== "formats" &&
    rngBind9583 !== "all"
  )
    throw Error('Range.clear applyTo must be "contents", "formats", or "all".');
  if (
    ((rngBind9583 === "contents" || rngBind9583 === "all") &&
      (host.range.values = null),
    rngBind9583 === "formats" || rngBind9583 === "all")
  ) {
    host.collectFormulasR1C1();
    host.format.reset();
    let rngBind14502 = host.worksheet,
      rngBind14503 = rngBind14502?.workbook.getRecorder(),
      rngBind14504 = host.range.address;
    if (rngBind14503 && rngBind14504 && rngBind14502?.name) {
      let rngBind19422 = {
        op: "range.format.clear",
        target: {
          sheet: rngBind14502.name,
          range: rngBind14504,
        },
      };
      rngBind14503.record(rngBind19422);
    }
  }
}
