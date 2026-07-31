// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-46: peeled Range fillDown/fillRight helpers.

import type { RangeOpsHost } from "./types";
import { d } from "../spreadsheet-protobuf";
import {
  fillRangeFrom,
  coerceCellTypedValue,
  serializeDateOrNull,
} from "../range-fill";
import { shiftA1FormulaRefs } from "../formula-address";
import { getAttachedWorksheet } from "../worksheet-attachment";
export function rangeFillDown(host: RangeOpsHost) {
  let rngBind5047 = host.worksheet;
  if (!rngBind5047) throw Error("Range is not attached to a worksheet.");
  let rngBind5048 = host.getBounds();
  if (!rngBind5048) throw Error("Range is not attached to a worksheet.");
  rngBind5048.rows <= 1 ||
    rngBind5048.cols <= 0 ||
    rngBind5047.workbook.batchCellInputWrites(() => {
      for (
        let rngBind5729 = 0;
        rngBind5729 < rngBind5048.cols;
        rngBind5729 += 1
      ) {
        let rngBind5868 = rngBind5047.__getCell(
            rngBind5048.startRow,
            rngBind5048.startCol + rngBind5729,
          ),
          rngBind5869 = rngBind5868?.formula,
          rngBind5870 = rngBind5868?.value,
          rngBind5871 = rngBind5868?.dataType;
        for (
          let rngBind6479 = 1;
          rngBind6479 < rngBind5048.rows;
          rngBind6479 += 1
        ) {
          let rngBind6630 = rngBind5048.startRow + rngBind6479,
            rngBind6631 = rngBind5048.startCol + rngBind5729,
            rngBind6632 = rngBind5047.__getOrCreateCell(
              rngBind6630,
              rngBind6631,
            );
          rngBind5869 && rngBind5869.trim()
            ? ((rngBind6632.formula = shiftA1FormulaRefs(
                rngBind5869,
                rngBind6479,
                0,
              )),
              (rngBind6632.value = undefined),
              (rngBind6632.dataType = d.CELL_DATA_TYPE_UNSPECIFIED),
              rngBind5047.__notifyCellFormulaChanged(
                rngBind6632.address,
                `=${rngBind6632.formula}`,
              ),
              rngBind5047.__setRawValue(rngBind6630, rngBind6631, undefined))
            : rngBind5870 === undefined
              ? ((rngBind6632.formula = undefined),
                (rngBind6632.value = undefined),
                (rngBind6632.dataType = d.CELL_DATA_TYPE_UNSPECIFIED),
                rngBind5047.__notifyCellValueChanged(rngBind6632.address),
                rngBind5047.__setRawValue(rngBind6630, rngBind6631, null))
              : ((rngBind6632.formula = undefined),
                (rngBind6632.value = rngBind5870),
                (rngBind6632.dataType =
                  rngBind5871 ?? d.CELL_DATA_TYPE_UNSPECIFIED),
                rngBind5047.__notifyCellValueChanged(rngBind6632.address),
                rngBind5047.__setRawValue(
                  rngBind6630,
                  rngBind6631,
                  coerceCellTypedValue({
                    value: rngBind5870,
                    dataType: rngBind6632.dataType,
                  }),
                ));
          rngBind5047.writeCellInputToYjs(rngBind6632);
        }
      }
    });
}

export function rangeFillRight(host: RangeOpsHost) {
  let rngBind5075 = host.worksheet;
  if (!rngBind5075) throw Error("Range is not attached to a worksheet.");
  let rngBind5076 = host.getBounds();
  if (!rngBind5076) throw Error("Range is not attached to a worksheet.");
  rngBind5076.cols <= 1 ||
    rngBind5076.rows <= 0 ||
    rngBind5075.workbook.batchCellInputWrites(() => {
      for (
        let rngBind5801 = 0;
        rngBind5801 < rngBind5076.rows;
        rngBind5801 += 1
      ) {
        let rngBind5949 = rngBind5076.startRow + rngBind5801,
          rngBind5950 = rngBind5075.__getCell(
            rngBind5949,
            rngBind5076.startCol,
          ),
          rngBind5951 = rngBind5950?.formula,
          rngBind5952 = rngBind5950?.value,
          rngBind5953 = rngBind5950?.dataType;
        for (
          let rngBind6646 = 1;
          rngBind6646 < rngBind5076.cols;
          rngBind6646 += 1
        ) {
          let rngBind6762 = rngBind5076.startCol + rngBind6646,
            rngBind6763 = rngBind5075.__getOrCreateCell(
              rngBind5949,
              rngBind6762,
            );
          rngBind5951 && rngBind5951.trim()
            ? ((rngBind6763.formula = shiftA1FormulaRefs(
                rngBind5951,
                0,
                rngBind6646,
              )),
              (rngBind6763.value = undefined),
              (rngBind6763.dataType = d.CELL_DATA_TYPE_UNSPECIFIED),
              rngBind5075.__notifyCellFormulaChanged(
                rngBind6763.address,
                `=${rngBind6763.formula}`,
              ),
              rngBind5075.__setRawValue(rngBind5949, rngBind6762, undefined))
            : rngBind5952 === undefined
              ? ((rngBind6763.formula = undefined),
                (rngBind6763.value = undefined),
                (rngBind6763.dataType = d.CELL_DATA_TYPE_UNSPECIFIED),
                rngBind5075.__notifyCellValueChanged(rngBind6763.address),
                rngBind5075.__setRawValue(rngBind5949, rngBind6762, null))
              : ((rngBind6763.formula = undefined),
                (rngBind6763.value = rngBind5952),
                (rngBind6763.dataType =
                  rngBind5953 ?? d.CELL_DATA_TYPE_UNSPECIFIED),
                rngBind5075.__notifyCellValueChanged(rngBind6763.address),
                rngBind5075.__setRawValue(
                  rngBind5949,
                  rngBind6762,
                  coerceCellTypedValue({
                    value: rngBind5952,
                    dataType: rngBind6763.dataType,
                  }),
                ));
          rngBind5075.writeCellInputToYjs(rngBind6763);
        }
      }
    });
}
