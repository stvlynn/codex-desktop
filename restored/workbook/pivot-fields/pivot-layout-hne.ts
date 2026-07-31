// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-50: finalize pivot layout write (Hne).
import { getDataFieldSubtotal } from "./pivot-data-field-helpers";
import {
  formatPivotNumber,
  isPivotBlankValue,
  pivotTupleKey,
  resolveShowAsValue,
  emptyPivotValueSlot,
  pivotBlankLabel,
  pivotCellComparable,
  pivotValuesEqual,
} from "./pivot-layout-helpers";

export function finalizePivotLayoutWrite(
  pivotIn338: any,
  pivotIn339: any,
  pivotIn340: any,
  pivotIn341: any,
  pivotIn342: any,
  pivotIn343: any,
  pivotIn344: any,
  pivotIn345: any,
  pivotIn346: any,
  pivotIn347: any,
  pivotIn348: any,
  pivotIn349: any,
) {
  let pivotBind3668 = new Map();
  pivotIn341.forEach((item) => pivotBind3668.set(item.key, item));
  let pivotBind3669 = new Map();
  for (let pivotBind22335 of pivotIn342) {
    let pivotBind22612 = pivotBind22335.columnEntry;
    pivotBind22612 != null &&
      pivotBind3669.set(pivotBind22612.key, pivotBind22612);
  }
  let pivotBind3670 = new Map();
  pivotIn344.forEach((item, index) =>
    pivotBind3670.set(item.pivotIndex, index),
  );
  let pivotBind3671 = new Map();
  pivotIn345.forEach((item, index) =>
    pivotBind3671.set(item.pivotIndex, index),
  );
  let pivotBind3672 = pivotIn339 + pivotIn341.length;
  if (
    (pivotIn341.forEach((item, index) => {
      let pivotBind5548 = pivotIn339 + index,
        pivotBind5549 = pivotIn338[pivotBind5548];
      if (pivotBind5549 !== undefined) {
        pivotBlankLabel(pivotIn338, pivotBind5548, pivotIn340, item.values);
        for (
          let pivotBind5976 = 0;
          pivotBind5976 < pivotIn342.length;
          pivotBind5976++
        ) {
          let pivotBind6019 = pivotIn342[pivotBind5976];
          if (pivotBind6019 === undefined) {
            pivotBind5549[pivotIn340 + pivotBind5976] = null;
            continue;
          }
          let pivotBind6020 = pivotIn343[pivotBind6019.dataFieldIndex];
          if (pivotBind6020 === undefined) {
            pivotBind5549[pivotIn340 + pivotBind5976] = null;
            continue;
          }
          let pivotBind6021 = pivotBind6019.columnEntry
              ? item.columns.get(pivotBind6019.columnEntry.key)
              : undefined,
            pivotBind6022;
          pivotBind6022 = pivotBind6019.isGrandTotal
            ? pivotCellComparable(item.totals, pivotBind6019.dataFieldIndex)
            : pivotBind6021
              ? pivotCellComparable(pivotBind6021, pivotBind6019.dataFieldIndex)
              : emptyPivotValueSlot();
          let pivotBind6023 = getDataFieldSubtotal(pivotBind6020.proto),
            pivotBind6024 = formatPivotNumber(pivotBind6022, pivotBind6023),
            pivotBind6025 = formatPivotNumber(
              pivotCellComparable(pivotIn349, pivotBind6019.dataFieldIndex),
              pivotBind6023,
            ),
            pivotBind6026 = formatPivotNumber(
              pivotCellComparable(item.totals, pivotBind6019.dataFieldIndex),
              pivotBind6023,
            ),
            pivotBind6027 =
              pivotBind6019.columnEntry == null
                ? pivotBind6025
                : formatPivotNumber(
                    pivotCellComparable(
                      pivotBind6019.columnEntry.totals,
                      pivotBind6019.dataFieldIndex,
                    ),
                    pivotBind6023,
                  ),
            pivotBind6028 = resolveShowAsValue(
              pivotBind6024,
              pivotBind6020.proto,
              {
                grandTotalValue: pivotBind6025,
                rowTotalValue: pivotBind6026,
                columnTotalValue: pivotBind6027,
              },
              {
                dataFieldIndex: pivotBind6019.dataFieldIndex,
                rowEntry: item,
                columnEntry: pivotBind6019.columnEntry,
                isGrandTotalSegment: pivotBind6019.isGrandTotal,
                rowEntriesByKey: pivotBind3668,
                columnEntriesByKey: pivotBind3669,
                rowFieldDepthByPivotIndex: pivotBind3670,
                columnFieldDepthByPivotIndex: pivotBind3671,
                pivotFields: pivotIn346,
                cacheProto: pivotIn347,
              },
            );
          pivotBind5549[pivotIn340 + pivotBind5976] = pivotBind6028 ?? null;
        }
      }
    }),
    pivotIn348 && pivotIn341.length > 0)
  ) {
    let pivotBind6616 = pivotBind3672,
      pivotBind6617 = pivotIn338[pivotBind6616];
    if (pivotBind6617 === undefined) return;
    pivotBlankLabel(pivotIn338, pivotBind6616, pivotIn340, ["Grand Total"]);
    for (
      let pivotBind7045 = 0;
      pivotBind7045 < pivotIn342.length;
      pivotBind7045++
    ) {
      let pivotBind7233 = pivotIn342[pivotBind7045];
      if (pivotBind7233 === undefined) {
        pivotBind6617[pivotIn340 + pivotBind7045] = null;
        continue;
      }
      let pivotBind7234 = pivotIn343[pivotBind7233.dataFieldIndex];
      if (pivotBind7234 === undefined) {
        pivotBind6617[pivotIn340 + pivotBind7045] = null;
        continue;
      }
      let pivotBind7235;
      pivotBind7235 = pivotBind7233.columnEntry
        ? pivotCellComparable(
            pivotBind7233.columnEntry.totals,
            pivotBind7233.dataFieldIndex,
          )
        : pivotCellComparable(pivotIn349, pivotBind7233.dataFieldIndex);
      let pivotBind7236 = getDataFieldSubtotal(pivotBind7234.proto),
        pivotBind7237 = formatPivotNumber(pivotBind7235, pivotBind7236),
        pivotBind7238 = formatPivotNumber(
          pivotCellComparable(pivotIn349, pivotBind7233.dataFieldIndex),
          pivotBind7236,
        ),
        pivotBind7239 =
          pivotBind7233.columnEntry == null
            ? pivotBind7238
            : formatPivotNumber(
                pivotCellComparable(
                  pivotBind7233.columnEntry.totals,
                  pivotBind7233.dataFieldIndex,
                ),
                pivotBind7236,
              ),
        pivotBind7240 = resolveShowAsValue(
          pivotBind7237,
          pivotBind7234.proto,
          {
            grandTotalValue: pivotBind7238,
            rowTotalValue: pivotBind7238,
            columnTotalValue: pivotBind7239,
          },
          {
            dataFieldIndex: pivotBind7233.dataFieldIndex,
            rowEntry: undefined,
            columnEntry: pivotBind7233.columnEntry,
            isGrandTotalSegment: pivotBind7233.isGrandTotal,
            rowEntriesByKey: pivotBind3668,
            columnEntriesByKey: pivotBind3669,
            rowFieldDepthByPivotIndex: pivotBind3670,
            columnFieldDepthByPivotIndex: pivotBind3671,
            pivotFields: pivotIn346,
            cacheProto: pivotIn347,
          },
        );
      pivotBind6617[pivotIn340 + pivotBind7045] = pivotBind7240 ?? null;
    }
  }
}
