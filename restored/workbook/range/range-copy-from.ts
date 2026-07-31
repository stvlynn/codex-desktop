// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-46: peeled Range copyFrom helper.

import type { RangeOpsHost } from "./types";
import { d } from "../spreadsheet-protobuf";
import {
  fillRangeFrom,
  coerceCellTypedValue,
  serializeDateOrNull,
} from "../range-fill";
import { shiftA1FormulaRefs } from "../formula-address";
import { getAttachedWorksheet } from "../worksheet-attachment";
export function rangeCopyFrom(
  host: RangeOpsHost,
  rngIn146: any,
  rngIn147?: unknown,
  rngIn148?: unknown,
  rngIn149?: unknown,
) {
  let rngBind2879 = host.worksheet,
    rngBind2880 = rngIn146.__getWorksheet();
  if (!rngBind2879 || !rngBind2880)
    throw Error(
      "Range.copyFrom requires both ranges to be attached to worksheets.",
    );
  let rngBind2881 =
    typeof rngIn147 == "object" && rngIn147
      ? rngIn147
      : {
          copyType: rngIn147,
          skipBlanks: rngIn148,
          transpose: rngIn149,
        };
  if (rngBind2881.skipBlanks)
    throw Error("Range.copyFrom skipBlanks is not supported yet.");
  if (rngBind2881.transpose)
    throw Error("Range.copyFrom transpose is not supported yet.");
  let rngBind2882 = host.getBounds(),
    rngBind2883 = rngIn146.getBoundingBox();
  if (!rngBind2882 || !rngBind2883)
    throw Error("Range.copyFrom requires both ranges to have bounds.");
  let rngBind2884 = (rngBind2881.copyType ?? "all").toLowerCase(),
    rngBind2885 = rngBind2883.rows === 1 && rngBind2883.cols === 1,
    rngBind2886 =
      !rngBind2885 &&
      rngBind2883.rows > 0 &&
      rngBind2883.cols > 0 &&
      rngBind2882.rows > 0 &&
      rngBind2882.cols > 0 &&
      rngBind2882.rows % rngBind2883.rows === 0 &&
      rngBind2882.cols % rngBind2883.cols === 0;
  if (
    !(
      rngBind2885 ||
      rngBind2886 ||
      (rngBind2883.rows === rngBind2882.rows &&
        rngBind2883.cols === rngBind2882.cols)
    )
  )
    throw Error(
      `Range.copyFrom requires source and destination to match shape (or source to be 1x1). Source is ${rngBind2883.rows}x${rngBind2883.cols}, destination is ${rngBind2882.rows}x${rngBind2882.cols}. If you are filling down/right from a seed block, pass a source block whose size evenly tiles the destination.`,
    );
  if (rngBind2884 === "values") {
    let rngBind10363 = rngIn146.values;
    if (rngBind2885) {
      let rngBind18103 = rngBind10363[0]?.[0] ?? null,
        rngBind18104 = Array.from(
          {
            length: rngBind2882.rows,
          },
          () =>
            Array.from(
              {
                length: rngBind2882.cols,
              },
              () => rngBind18103,
            ),
        );
      host.range.values = rngBind18104;
    } else if (rngBind2886) {
      let rngBind15324 = [];
      for (
        let rngBind17291 = 0;
        rngBind17291 < rngBind2882.rows;
        rngBind17291 += 1
      ) {
        let rngBind18263 = [],
          rngBind18264 = rngBind10363[rngBind17291 % rngBind2883.rows] ?? [];
        for (
          let rngBind22314 = 0;
          rngBind22314 < rngBind2882.cols;
          rngBind22314 += 1
        )
          rngBind18263.push(
            rngBind18264[rngBind22314 % rngBind2883.cols] ?? null,
          );
        rngBind15324.push(rngBind18263);
      }
      host.range.values = rngBind15324;
    } else host.range.values = rngBind10363;
    return;
  }
  let rngBind2887 = rngBind2879.workbook.getRecorder(),
    rngBind2888 = host.range.address,
    rngBind2889 =
      rngBind2884 === "formulas" &&
      !!(rngBind2887 && rngBind2888 && rngBind2879.name),
    rngBind2890 =
      rngBind2884 === "all" &&
      !!(rngBind2887 && rngBind2888 && rngBind2879.name),
    rngBind2891 = [],
    rngBind2892 = [];
  if (
    (rngBind2879.workbook.batchCellInputWrites(() => {
      for (
        let rngBind4207 = 0;
        rngBind4207 < rngBind2882.rows;
        rngBind4207 += 1
      ) {
        let rngBind4208 = [],
          rngBind4209 = [];
        for (
          let rngBind4315 = 0;
          rngBind4315 < rngBind2882.cols;
          rngBind4315 += 1
        ) {
          let rngBind4377 = rngBind2885
              ? 0
              : rngBind2886
                ? rngBind4207 % rngBind2883.rows
                : rngBind4207,
            rngBind4378 = rngBind2885
              ? 0
              : rngBind2886
                ? rngBind4315 % rngBind2883.cols
                : rngBind4315,
            rngBind4379 = rngBind2883.startRow + rngBind4377,
            rngBind4380 = rngBind2883.startCol + rngBind4378,
            rngBind4381 = rngBind2882.startRow + rngBind4207,
            rngBind4382 = rngBind2882.startCol + rngBind4315,
            rngBind4383 = rngBind2880.__getCell(rngBind4379, rngBind4380),
            rngBind4384 = rngBind2879.__getOrCreateCell(
              rngBind4381,
              rngBind4382,
            ),
            rngBind4385 = rngBind4381 - rngBind4379,
            rngBind4386 = rngBind4382 - rngBind4380,
            rngBind4387 = rngBind4383?.formula;
          if (rngBind2884 === "formulas" || rngBind2884 === "all") {
            if (rngBind4387 && rngBind4387.trim()) {
              let rngBind11037 = shiftA1FormulaRefs(
                rngBind4387,
                rngBind4385,
                rngBind4386,
              );
              rngBind4384.formula = rngBind11037;
              rngBind4384.value = undefined;
              rngBind4384.dataType = d.CELL_DATA_TYPE_UNSPECIFIED;
              rngBind2889 && rngBind4208.push(`=${rngBind11037}`);
              rngBind2890 && rngBind4209.push(`=${rngBind11037}`);
              rngBind2879.__notifyCellFormulaChanged(
                rngBind4384.address,
                `=${rngBind4384.formula}`,
              );
              rngBind2879.__setRawValue(rngBind4381, rngBind4382, undefined);
              rngBind2879.writeCellInputToYjs(rngBind4384);
              continue;
            }
            if (rngBind2884 === "formulas") {
              rngBind4384.formula = undefined;
              rngBind2889 && rngBind4208.push("");
              rngBind2879.__notifyCellFormulaChanged(rngBind4384.address, "");
              rngBind2879.__setRawValue(rngBind4381, rngBind4382, undefined);
              rngBind2879.writeCellInputToYjs(rngBind4384);
              continue;
            }
          }
          rngBind4383?.value === undefined
            ? ((rngBind4384.formula = undefined),
              (rngBind4384.value = undefined),
              (rngBind4384.dataType = d.CELL_DATA_TYPE_UNSPECIFIED),
              rngBind2890 && rngBind4209.push(null),
              rngBind2879.__notifyCellValueChanged(rngBind4384.address),
              rngBind2879.__setRawValue(rngBind4381, rngBind4382, null))
            : ((rngBind4384.formula = undefined),
              (rngBind4384.value = rngBind4383.value),
              (rngBind4384.dataType =
                rngBind4383.dataType ?? d.CELL_DATA_TYPE_UNSPECIFIED),
              rngBind2890 &&
                rngBind4209.push(host.coerceCellValue(rngBind4383)),
              rngBind2879.__notifyCellValueChanged(rngBind4384.address),
              rngBind2879.__setRawValue(
                rngBind4381,
                rngBind4382,
                coerceCellTypedValue(rngBind4383),
              ));
          rngBind2879.writeCellInputToYjs(rngBind4384);
        }
        rngBind2889 && rngBind2891.push(rngBind4208);
        rngBind2890 && rngBind2892.push(rngBind4209);
      }
    }),
    rngBind2887 && rngBind2888 && rngBind2879.name)
  ) {
    if (rngBind2889) {
      let rngBind17988 = {
        op: "range.formulas.set",
        target: {
          sheet: rngBind2879.name,
          range: rngBind2888,
        },
        formulas: rngBind2891.map((item) => [...item]),
      };
      rngBind2887.record(rngBind17988);
    } else if (rngBind2890) {
      let rngBind17729 = {
        op: "range.values.set",
        target: {
          sheet: rngBind2879.name,
          range: rngBind2888,
        },
        values: rngBind2892.map((item) =>
          item.map((_item) => serializeDateOrNull(_item)),
        ),
      };
      rngBind2887.record(rngBind17729);
    }
  }
}
