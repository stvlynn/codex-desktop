// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-46: peeled Range fillFrom helper.

import type { RangeOpsHost } from "./types";
import { d } from "../spreadsheet-protobuf";
import {
  fillRangeFrom,
  coerceCellTypedValue,
  serializeDateOrNull,
} from "../range-fill";
import { shiftA1FormulaRefs } from "../formula-address";
import { getAttachedWorksheet } from "../worksheet-attachment";
export function rangeFillFrom(host: RangeOpsHost, rngIn453: any) {
  let rngBind4008 = host.worksheet,
    rngBind4009 = rngIn453.__getWorksheet();
  if (!rngBind4008 || !rngBind4009)
    throw Error(
      "Range.fillFrom requires both ranges to be attached to worksheets.",
    );
  if (rngBind4008 !== rngBind4009)
    throw Error(
      "Range.fillFrom requires source and destination to be on the same worksheet.",
    );
  let rngBind4010 = host.getBounds(),
    rngBind4011 = rngIn453.getBoundingBox();
  if (!rngBind4010 || !rngBind4011)
    throw Error("Range.fillFrom requires both ranges to have bounds.");
  let rngBind4012 = rngBind4008.workbook.getRecorder(),
    rngBind4013 = host.range.address,
    rngBind4014 = !!(rngBind4012 && rngBind4013 && rngBind4008.name),
    rngBind4015 = rngBind4008.workbook.batchCellInputWrites(() =>
      fillRangeFrom({
        coerceCellValue: (rngIn16413) => host.coerceCellValue(rngIn16413),
        destinationBounds: rngBind4010,
        destinationRangeAddress: host.range.address,
        readSourceCell: (rngIn16049, rngIn16050) =>
          rngBind4009.__getCell(rngIn16049, rngIn16050),
        shouldCollectValues: rngBind4014,
        sourceBounds: rngBind4011,
        sourceRangeAddress: rngIn453.address,
        shiftFormulaRefs: shiftA1FormulaRefs,
        clearCell: (rngIn4939, rngIn4940) => {
          let rngBind14339 = rngBind4008.__getOrCreateCell(
            rngIn4939,
            rngIn4940,
          );
          rngBind14339.formula = undefined;
          rngBind14339.value = undefined;
          rngBind14339.dataType = d.CELL_DATA_TYPE_UNSPECIFIED;
          rngBind4008.__notifyCellValueChanged(rngBind14339.address);
          rngBind4008.__setRawValue(rngIn4939, rngIn4940, null);
          rngBind4008.writeCellInputToYjs(rngBind14339);
        },
        writeFormulaCell: (rngIn4806, rngIn4807, rngIn4808) => {
          let rngBind14172 = rngBind4008.__getOrCreateCell(
            rngIn4806,
            rngIn4807,
          );
          rngBind14172.formula = rngIn4808;
          rngBind14172.value = undefined;
          rngBind14172.dataType = d.CELL_DATA_TYPE_UNSPECIFIED;
          rngBind4008.__notifyCellFormulaChanged(
            rngBind14172.address,
            `=${rngIn4808}`,
          );
          rngBind4008.__setRawValue(rngIn4806, rngIn4807, undefined);
          rngBind4008.writeCellInputToYjs(rngBind14172);
        },
        writeValueCell: (rngIn4691, rngIn4692, rngIn4693) => {
          let rngBind13972 = rngBind4008.__getOrCreateCell(
            rngIn4691,
            rngIn4692,
          );
          rngBind13972.formula = undefined;
          rngBind13972.value = rngIn4693.value;
          rngBind13972.dataType =
            rngIn4693.dataType ?? d.CELL_DATA_TYPE_UNSPECIFIED;
          rngBind4008.__notifyCellValueChanged(rngBind13972.address);
          rngBind4008.__setRawValue(
            rngIn4691,
            rngIn4692,
            coerceCellTypedValue(rngIn4693),
          );
          rngBind4008.writeCellInputToYjs(rngBind13972);
        },
      }),
    );
  if (rngBind4012 && rngBind4013 && rngBind4008.name && rngBind4015) {
    let rngBind18131 = {
      op: "range.values.set",
      target: {
        sheet: rngBind4008.name,
        range: rngBind4013,
      },
      values: rngBind4015.map((item) =>
        item.map((_item) => serializeDateOrNull(_item)),
      ),
    };
    rngBind4012.record(rngBind18131);
  }
}
