// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-28: RangeFormat autofitColumns/Rows helpers (peeled for QG flat limit).

import { autofitColumnWidths, autofitRowHeights } from "../worksheet-autofit";
export function autofitRangeColumns(host: any) {
  let rfBind8924 = host.getBounds(),
    rfBind8925 = rfBind8924
      ? {
          startRow: rfBind8924.startRow,
          startCol: rfBind8924.startCol,
          endRow: rfBind8924.startRow + rfBind8924.rows - 1,
          endCol: rfBind8924.startCol + rfBind8924.cols - 1,
        }
      : null,
    rfBind8926 = host.getWorkbook(),
    rfBind8927 = host.getWorksheet();
  if (!(!rfBind8926 || !rfBind8927)) {
    if (
      (rfBind8926.recalculate(),
      autofitColumnWidths({
        address: host.getAddress(),
        bounds: rfBind8925,
        workbook: rfBind8926,
        worksheet: rfBind8927,
      }),
      rfBind8924)
    )
      for (let rfBind22140 = 0; rfBind22140 < rfBind8924.cols; rfBind22140 += 1)
        rfBind8927.__syncColumnSizeRef(rfBind8924.startCol + rfBind22140);
    rfBind8927.__invalidateViewportLayout();
  }
}
export function autofitRangeRows(host: any) {
  let rfBind8962 = host.getBounds(),
    rfBind8963 = rfBind8962
      ? {
          startRow: rfBind8962.startRow,
          startCol: rfBind8962.startCol,
          endRow: rfBind8962.startRow + rfBind8962.rows - 1,
          endCol: rfBind8962.startCol + rfBind8962.cols - 1,
        }
      : null,
    rfBind8964 = host.getWorkbook(),
    rfBind8965 = host.getWorksheet();
  if (!(!rfBind8964 || !rfBind8965)) {
    if (
      (rfBind8964.recalculate(),
      autofitRowHeights({
        address: host.getAddress(),
        bounds: rfBind8963,
        workbook: rfBind8964,
        worksheet: rfBind8965,
      }),
      rfBind8962)
    )
      for (let rfBind22223 = 0; rfBind22223 < rfBind8962.rows; rfBind22223 += 1)
        rfBind8965.__syncRowSizeRef(rfBind8962.startRow + rfBind22223);
    rfBind8965.__invalidateViewportLayout();
  }
}
