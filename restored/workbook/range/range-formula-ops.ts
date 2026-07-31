// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-46: peeled Range helpers (getRawValuesCached, getValuesCached, setFormulasR1C1, setFormulas, getFormulasR1C1Cached, getFormulasCached).

import type { RangeOpsHost } from "./types";
import { d } from "../spreadsheet-protobuf";
import { formatA1Range } from "../../utils/spreadsheet-address-utils";
import {
  convertR1C1ToA1,
  convertA1ToR1C1,
  shiftA1FormulaRefs,
} from "../formula-address";
import { getAttachedWorksheet } from "../worksheet-attachment";

export function getRawValuesCached(host: RangeOpsHost) {
  if (host.worksheet) {
    let rngBind22344 = host.collectRawValues();
    return ((host.cachedRawValues = rngBind22344), rngBind22344);
  }
  return host.cachedRawValues ?? [];
}

export function getValuesCached(host: RangeOpsHost) {
  if (host.worksheet) {
    let rngBind22343 = host.collectValues();
    return ((host.cachedValues = rngBind22343), rngBind22343);
  }
  return host.cachedValues ?? [];
}

export function setFormulasR1C1(host: RangeOpsHost, rngIn1717: unknown) {
  let rngBind8039 = host.getBounds(),
    rngBind8040 = host.worksheet;
  if (!rngBind8039 || !rngBind8040) {
    host.cachedFormulasR1C1 = rngIn1717.map((item) =>
      item.map((_item) => _item ?? ""),
    );
    host.cachedFormulas = undefined;
    host.cachedValues = undefined;
    host.cachedRawValues = undefined;
    return;
  }
  let rngBind8041 = [];
  for (
    let rngBind11172 = 0;
    rngBind11172 < rngBind8039.rows;
    rngBind11172 += 1
  ) {
    let rngBind11538 = rngIn1717[rngBind11172] ?? [],
      rngBind11539 = [];
    for (
      let rngBind12932 = 0;
      rngBind12932 < rngBind8039.cols;
      rngBind12932 += 1
    ) {
      let rngBind13563 = rngBind11538[rngBind12932] ?? "",
        rngBind13564 = String(rngBind13563);
      if (rngBind13564.trim() === "") {
        rngBind11539.push("");
        continue;
      }
      let rngBind13565 = rngBind13564.startsWith("="),
        rngBind13566 = convertR1C1ToA1(
          rngBind13565 ? rngBind13564.slice(1) : rngBind13564,
          rngBind8039.startRow + rngBind11172 + 1,
          rngBind8039.startCol + rngBind12932 + 1,
        );
      rngBind11539.push(rngBind13565 ? `=${rngBind13566}` : rngBind13566);
    }
    rngBind8041.push(rngBind11539);
  }
  host.range.formulas = rngBind8041;
}

export function setFormulas(host: RangeOpsHost, rngIn211: unknown) {
  let rngBind3171 =
      typeof rngIn211 == "function" ? host.applyMatrixFn(rngIn211) : rngIn211,
    rngBind3172 = host.getBounds(),
    rngBind3173 = host.worksheet;
  if (rngBind3172) {
    let rngBind4236 = host.broadcastMatrix(
        rngBind3171,
        rngBind3172,
        "formulas",
      ),
      rngBind4237 = host.probeMatrix(rngBind4236, "formulas"),
      rngBind4238 =
        !rngBind4237.ragged && rngBind4237.rows === 1 && rngBind4237.cols === 1;
    if (
      rngBind3173 &&
      rngBind3172.rows === 1 &&
      rngBind3172.cols === 1 &&
      !rngBind4237.ragged &&
      (rngBind4237.rows !== 1 || rngBind4237.cols !== 1)
    ) {
      let rngBind16120 = formatA1Range({
        startRow: rngBind3172.startRow,
        startCol: rngBind3172.startCol,
        endRow: rngBind3172.startRow + rngBind4237.rows - 1,
        endCol: rngBind3172.startCol + rngBind4237.cols - 1,
      });
      rngBind3173.getRange(rngBind16120).formulas = rngBind4236;
      return;
    }
    if (
      rngBind3173 &&
      !rngBind4238 &&
      !rngBind4237.ragged &&
      (rngBind4237.rows !== rngBind3172.rows ||
        rngBind4237.cols !== rngBind3172.cols)
    )
      if (
        rngBind4237.rows < rngBind3172.rows ||
        rngBind4237.cols < rngBind3172.cols
      ) {
        if (rngBind4237.rows > 0 && rngBind4237.cols > 0) {
          let rngBind14334 = host.clearCellAt(
              rngBind3172,
              rngBind4237.rows,
              rngBind4237.cols,
            ),
            rngBind14335 = rngBind3173.name ? `${rngBind3173.name}!` : "";
          console.warn(
            `Range.formulas shrank from ${rngBind14335}${host.range.address} to ${rngBind14335}${rngBind14334} (${rngBind3172.rows}x${rngBind3172.cols} -> ${rngBind4237.rows}x${rngBind4237.cols}).`,
          );
          rngBind3173.getRange(rngBind14334).formulas = rngBind4236;
          return;
        }
      } else {
        let rngBind7437 = host.clearCellAt(
            rngBind3172,
            rngBind4237.rows,
            rngBind4237.cols,
          ),
          rngBind7438 = host.readValuesBlock({
            worksheet: rngBind3173,
            bounds: rngBind3172,
            spillRows: rngBind4237.rows,
            spillCols: rngBind4237.cols,
          });
        if (rngBind7438.length === 0) {
          let rngBind15405 = rngBind3173.name ? `${rngBind3173.name}!` : "";
          console.warn(
            `Range.formulas spilled from ${rngBind15405}${host.range.address} to ${rngBind15405}${rngBind7437} (${rngBind3172.rows}x${rngBind3172.cols} -> ${rngBind4237.rows}x${rngBind4237.cols}).`,
          );
          rngBind3173.getRange(rngBind7437).formulas = rngBind4236;
          return;
        }
        let rngBind7439 = host.isBlankCell(rngBind3172),
          rngBind7440 = rngBind3173.name ? `${rngBind3173.name}!` : "",
          rngBind7441 = rngBind7438
            .map((item) => `${rngBind7440}${item}`)
            .join(", ");
        throw Error(
          `Range.formulas expects a ${rngBind3172.rows}x${rngBind3172.cols} matrix for ${host.range.address}, got ${rngBind4237.rows}x${rngBind4237.cols}. To write this ${rngBind4237.rows}x${rngBind4237.cols} matrix starting at ${rngBind7439}, use ${rngBind7437}. Writing to that spill range would overwrite existing values in ${rngBind7441}.`,
        );
      }
    rngBind4238 || host.mapMatrix(rngBind4236, rngBind3172, "formulas");
  }
  if (rngBind3172 && rngBind3173) {
    let rngBind5784 = host.broadcastMatrix(
        rngBind3171,
        rngBind3172,
        "formulas",
      ),
      rngBind5785 = [];
    rngBind3173.workbook.batchCellInputWrites(() => {
      for (let rngBind8849 = 0; rngBind8849 < rngBind3172.rows; rngBind8849++) {
        let rngBind9090 = rngBind5784[rngBind8849] ?? [],
          rngBind9091 = [];
        for (
          let rngBind10121 = 0;
          rngBind10121 < rngBind3172.cols;
          rngBind10121++
        ) {
          let rngBind10460 = rngBind9090[rngBind10121],
            rngBind10461 = rngBind10460 == null ? "" : String(rngBind10460);
          rngBind9091.push(rngBind10461);
          let rngBind10462 = rngBind3173.__getOrCreateCell(
            rngBind3172.startRow + rngBind8849,
            rngBind3172.startCol + rngBind10121,
          );
          rngBind10461.trim() === ""
            ? (rngBind10462.formula = undefined)
            : ((rngBind10462.formula = rngBind10461.startsWith("=")
                ? rngBind10461.slice(1)
                : rngBind10461),
              (rngBind10462.value = undefined),
              (rngBind10462.dataType = d.CELL_DATA_TYPE_UNSPECIFIED));
          host.worksheet?.__notifyCellFormulaChanged(
            rngBind10462.address,
            rngBind10461,
          );
          rngBind3173.__setRawValue(
            rngBind3172.startRow + rngBind8849,
            rngBind3172.startCol + rngBind10121,
            undefined,
          );
          rngBind3173.writeCellInputToYjs(rngBind10462);
        }
        rngBind5785.push(rngBind9091);
      }
    });
    host.cachedFormulas = rngBind5785;
    host.cachedFormulasR1C1 = undefined;
    host.cachedValues = undefined;
    host.cachedRawValues = undefined;
    let rngBind5786 = rngBind3173.workbook.getRecorder(),
      rngBind5787 = host.range.address;
    if (rngBind5786 && rngBind5787 && rngBind3173.name) {
      let rngBind17987 = {
        op: "range.formulas.set",
        target: {
          sheet: rngBind3173.name,
          range: rngBind5787,
        },
        formulas: rngBind5785.map((item) => [...item]),
      };
      rngBind5786.record(rngBind17987);
    }
    return;
  }
  let rngBind3174 =
    Array.isArray(rngBind3171) && !Array.isArray(rngBind3171[0])
      ? [rngBind3171]
      : rngBind3171;
  host.cachedFormulas = rngBind3174.map((item) =>
    item.map((_item) => _item ?? ""),
  );
  host.cachedFormulasR1C1 = undefined;
  host.cachedValues = undefined;
  host.cachedRawValues = undefined;
}

export function getFormulasR1C1Cached(host: RangeOpsHost) {
  let rngBind10168 = host.getBounds(),
    rngBind10169 = host.worksheet;
  if (rngBind10168 && rngBind10169) {
    let rngBind11611 = [];
    for (
      let rngBind12829 = 0;
      rngBind12829 < rngBind10168.rows;
      rngBind12829 += 1
    ) {
      let rngBind13395 = [];
      for (
        let rngBind14995 = 0;
        rngBind14995 < rngBind10168.cols;
        rngBind14995 += 1
      ) {
        let rngBind15703 = rngBind10169.__getCell(
            rngBind10168.startRow + rngBind12829,
            rngBind10168.startCol + rngBind14995,
          ),
          rngBind15704 = rngBind15703?.formula
            ? `=${rngBind15703.formula}`
            : "";
        if (!rngBind15704) {
          rngBind13395.push("");
          continue;
        }
        rngBind13395.push(
          convertA1ToR1C1(
            rngBind15704,
            rngBind10168.startRow + rngBind12829 + 1,
            rngBind10168.startCol + rngBind14995 + 1,
          ),
        );
      }
      rngBind11611.push(rngBind13395);
    }
    return ((host.cachedFormulasR1C1 = rngBind11611), rngBind11611);
  }
  return host.cachedFormulasR1C1 ?? [];
}

export function getFormulasCached(host: RangeOpsHost) {
  if (host.worksheet) {
    let rngBind22342 = host.collectDisplayFormulas();
    return ((host.cachedFormulas = rngBind22342), rngBind22342);
  }
  return host.cachedFormulas ?? [];
}
