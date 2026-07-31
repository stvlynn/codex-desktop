// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-46: peeled Range writeValues helper.

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
export function rangeWriteValues(
  host: RangeOpsHost,
  rngIn96: unknown,
  rngIn97: Record<string, unknown> = {},
) {
  let rngBind2712 = rngIn97.record ?? true,
    rngBind2713 =
      typeof rngIn96 == "function"
        ? host.normalizeWriteValues(rngIn96)
        : rngIn96,
    rngBind2714 = host.getBounds(),
    rngBind2715 = host.worksheet,
    rngBind2716 = false;
  if (rngBind2714 && rngBind2713 !== null) {
    let rngBind4239 = host.broadcastMatrix(rngBind2713, rngBind2714, "values"),
      rngBind4240 = host.probeMatrix(rngBind4239, "values");
    if (
      ((rngBind2716 =
        !rngBind4240.ragged &&
        rngBind4240.rows === 1 &&
        rngBind4240.cols === 1),
      rngBind2715 &&
        rngBind2714.rows === 1 &&
        rngBind2714.cols === 1 &&
        !rngBind4240.ragged &&
        (rngBind4240.rows !== 1 || rngBind4240.cols !== 1))
    ) {
      let rngBind16170 = formatA1Range({
        startRow: rngBind2714.startRow,
        startCol: rngBind2714.startCol,
        endRow: rngBind2714.startRow + rngBind4240.rows - 1,
        endCol: rngBind2714.startCol + rngBind4240.cols - 1,
      });
      rngBind2715.getRange(rngBind16170).values = rngBind4239;
      return;
    }
    if (
      rngBind2715 &&
      !rngBind2716 &&
      !rngBind4240.ragged &&
      (rngBind4240.rows !== rngBind2714.rows ||
        rngBind4240.cols !== rngBind2714.cols)
    )
      if (
        rngBind4240.rows < rngBind2714.rows ||
        rngBind4240.cols < rngBind2714.cols
      ) {
        if (rngBind4240.rows > 0 && rngBind4240.cols > 0) {
          let rngBind14408 = host.clearCellAt(
              rngBind2714,
              rngBind4240.rows,
              rngBind4240.cols,
            ),
            rngBind14409 = rngBind2715.name ? `${rngBind2715.name}!` : "";
          console.warn(
            `Range.values shrank from ${rngBind14409}${host.range.address} to ${rngBind14409}${rngBind14408} (${rngBind2714.rows}x${rngBind2714.cols} -> ${rngBind4240.rows}x${rngBind4240.cols}).`,
          );
          rngBind2715.getRange(rngBind14408).values = rngBind4239;
          return;
        }
      } else {
        let rngBind7484 = host.clearCellAt(
            rngBind2714,
            rngBind4240.rows,
            rngBind4240.cols,
          ),
          rngBind7485 = host.readValuesBlock({
            worksheet: rngBind2715,
            bounds: rngBind2714,
            spillRows: rngBind4240.rows,
            spillCols: rngBind4240.cols,
          });
        if (rngBind7485.length === 0) {
          let rngBind15456 = rngBind2715.name ? `${rngBind2715.name}!` : "";
          console.warn(
            `Range.values spilled from ${rngBind15456}${host.range.address} to ${rngBind15456}${rngBind7484} (${rngBind2714.rows}x${rngBind2714.cols} -> ${rngBind4240.rows}x${rngBind4240.cols}).`,
          );
          rngBind2715.getRange(rngBind7484).values = rngBind4239;
          return;
        }
        let rngBind7486 = host.isBlankCell(rngBind2714),
          rngBind7487 = rngBind2715.name ? `${rngBind2715.name}!` : "",
          rngBind7488 = rngBind7485
            .map((item) => `${rngBind7487}${item}`)
            .join(", ");
        throw Error(
          `Range.values expects a ${rngBind2714.rows}x${rngBind2714.cols} matrix for ${host.range.address}, got ${rngBind4240.rows}x${rngBind4240.cols}. To write this ${rngBind4240.rows}x${rngBind4240.cols} matrix starting at ${rngBind7486}, use ${rngBind7484}. Writing to that spill range would overwrite existing values in ${rngBind7488}.`,
        );
      }
    rngBind2716 || host.mapMatrix(rngBind4239, rngBind2714, "values");
  }
  if (rngBind2714 && rngBind2715) {
    if (rngBind2713 === null) {
      rngBind2715.workbook.batchCellInputWrites(() => {
        for (
          let rngBind10477 = 0;
          rngBind10477 < rngBind2714.rows;
          rngBind10477++
        )
          for (
            let rngBind10993 = 0;
            rngBind10993 < rngBind2714.cols;
            rngBind10993++
          ) {
            let rngBind11321 = rngBind2714.startRow + rngBind10477,
              rngBind11322 = rngBind2714.startCol + rngBind10993,
              rngBind11323 = rngBind2715.__getCell(rngBind11321, rngBind11322);
            if (!rngBind11323) continue;
            let rngBind11324 = !!rngBind11323.formula?.trim();
            host.writeValuesBlock(rngBind11323, null);
            host.writeFormulasBlock(
              rngBind11323,
              null,
              rngBind11321,
              rngBind11322,
            );
            rngBind11324
              ? rngBind2715.__notifyCellFormulaChanged(rngBind11323.address, "")
              : rngBind2715.__notifyCellValueChanged(rngBind11323.address);
            rngBind2715.__setRawValue(rngBind11321, rngBind11322, null);
            rngBind2715.writeCellInputToYjs(rngBind11323);
          }
      });
      let rngBind6500 = rngBind2715.workbook.getRecorder(),
        rngBind6501 = host.range.address;
      if (rngBind2712 && rngBind6500 && rngBind6501 && rngBind2715.name) {
        let rngBind18174 = {
          op: "range.values.set",
          target: {
            sheet: rngBind2715.name,
            range: rngBind6501,
          },
          values: null,
        };
        rngBind6500.record(rngBind18174);
      }
      host.cachedValues = undefined;
      host.cachedRawValues = undefined;
      host.cachedFormulas = undefined;
      host.cachedFormulasR1C1 = undefined;
      return;
    }
    let rngBind3400 = host.broadcastMatrix(rngBind2713, rngBind2714, "values"),
      rngBind3401 = rngBind2716 ? rngBind3400[0]?.[0] : undefined,
      rngBind3402 = [],
      rngBind3403 = [],
      rngBind3404 = false;
    rngBind2715.workbook.batchCellInputWrites(() => {
      for (let rngBind5348 = 0; rngBind5348 < rngBind2714.rows; rngBind5348++) {
        let rngBind5408 = rngBind3400[rngBind5348] ?? [],
          rngBind5409 = [],
          rngBind5410 = [];
        for (
          let rngBind5752 = 0;
          rngBind5752 < rngBind2714.cols;
          rngBind5752++
        ) {
          let rngBind5872 = rngBind2716
              ? rngBind3401
              : rngBind5408[rngBind5752],
            rngBind5873 = rngBind5872 ?? null,
            rngBind5874 = rngBind5873,
            rngBind5875 = null;
          if (typeof rngBind5873 == "string") {
            if (rngBind5873.startsWith("'="))
              rngBind5874 = rngBind5873.slice(1);
            else if (rngBind5873.startsWith("=")) rngBind5875 = rngBind5873;
            else if (ISO_DATE_TIME_RE.test(rngBind5873)) {
              let rngBind20925 = Date.parse(rngBind5873);
              Number.isNaN(rngBind20925) ||
                (rngBind5874 = new Date(rngBind20925));
            }
          }
          rngBind5409.push(rngBind5875 ? null : rngBind5874);
          rngBind5410.push(rngBind5872 ?? null);
          let rngBind5876 = rngBind2715.__getOrCreateCell(
            rngBind2714.startRow + rngBind5348,
            rngBind2714.startCol + rngBind5752,
          );
          if (rngBind5875) {
            rngBind5876.formula = rngBind5875.slice(1);
            rngBind5876.value = undefined;
            rngBind5876.dataType = d.CELL_DATA_TYPE_UNSPECIFIED;
            rngBind3404 = true;
            host.worksheet?.__notifyCellFormulaChanged(
              rngBind5876.address,
              rngBind5875,
            );
            rngBind2715.__setRawValue(
              rngBind2714.startRow + rngBind5348,
              rngBind2714.startCol + rngBind5752,
              undefined,
            );
          } else {
            let rngBind13896 = !!rngBind5876.formula?.trim();
            host.writeValuesBlock(rngBind5876, rngBind5874);
            host.writeFormulasBlock(
              rngBind5876,
              rngBind5874,
              rngBind2714.startRow + rngBind5348,
              rngBind2714.startCol + rngBind5752,
            );
            rngBind13896
              ? rngBind2715.__notifyCellFormulaChanged(rngBind5876.address, "")
              : rngBind2715.__notifyCellValueChanged(rngBind5876.address);
            rngBind2715.__setRawValue(
              rngBind2714.startRow + rngBind5348,
              rngBind2714.startCol + rngBind5752,
              rngBind5874,
            );
          }
          rngBind2715.writeCellInputToYjs(rngBind5876);
        }
        rngBind3402.push(rngBind5409);
        rngBind3403.push(rngBind5410);
      }
    });
    host.cachedValues = rngBind3402;
    host.cachedRawValues = rngBind3404 ? undefined : rngBind3402;
    host.cachedFormulas = undefined;
    host.cachedFormulasR1C1 = undefined;
    let rngBind3405 = rngBind2715.workbook.getRecorder(),
      rngBind3406 = host.range.address;
    if (rngBind2712 && rngBind3405 && rngBind3406 && rngBind2715.name) {
      let rngBind17728 = {
        op: "range.values.set",
        target: {
          sheet: rngBind2715.name,
          range: rngBind3406,
        },
        values: rngBind3403.map((item) =>
          item.map((_item) => serializeDateOrNull(_item)),
        ),
      };
      rngBind3405.record(rngBind17728);
    }
    return;
  }
  if (rngBind2713 === null) {
    host.cachedValues = [];
    host.cachedRawValues = [];
    host.cachedFormulas = undefined;
    host.cachedFormulasR1C1 = undefined;
    return;
  }
  let rngBind2717 =
    Array.isArray(rngBind2713) && !Array.isArray(rngBind2713[0])
      ? [rngBind2713]
      : rngBind2713;
  host.cachedValues = rngBind2717.map((item) =>
    item.map((_item) => _item ?? null),
  );
  host.cachedFormulas = undefined;
  host.cachedFormulasR1C1 = undefined;
  host.cachedRawValues = host.cachedValues;
}
