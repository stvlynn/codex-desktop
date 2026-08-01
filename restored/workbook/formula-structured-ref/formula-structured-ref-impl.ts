// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: structured table reference resolve (qft/tpt +
// Xft/Zft/Qft/$ft/ept/Jft/Yft). Stage-3 wave-120.

import { tableHeaderRowCount, tableTotalsRowCount } from "../table-vo";

export function qft(fsrIn2847: any, fsrIn2848: any) {
  let fsrBind10630 = Xft(fsrIn2847, fsrIn2848);
  if (!fsrBind10630)
    return {
      kind: "Error",
      code: "#NAME?",
    };
  let fsrBind10631 = Zft(fsrBind10630.table);
  if (!fsrBind10631)
    return {
      kind: "Error",
      code: "#REF!",
    };
  let fsrBind10632 = Qft(fsrIn2847, fsrBind10630.table, fsrBind10631);
  if (!fsrBind10632)
    return {
      kind: "Error",
      code: "#REF!",
    };
  let fsrBind10633 = tpt(fsrIn2847, fsrBind10630, fsrBind10631, fsrIn2848);
  return fsrBind10633
    ? "code" in fsrBind10633
      ? {
          kind: "Error",
          code: fsrBind10633.code,
        }
      : {
          kind: "Resolved",
          tableInfo: fsrBind10630,
          area: {
            sheetName: fsrBind10630.sheetName,
            startRow: fsrBind10633.startRow,
            endRow: fsrBind10633.endRow,
            startCol: fsrBind10632.startCol,
            endCol: fsrBind10632.endCol,
          },
        }
    : {
        kind: "Error",
        code: "#REF!",
      };
}
export function Jft(props: any) {
  if (props.endRow < props.startRow || props.endCol < props.startCol) return [];
  let fsrBind14280 = [];
  for (
    let fsrBind16681 = props.startRow;
    fsrBind16681 <= props.endRow;
    fsrBind16681 += 1
  ) {
    let fsrBind17948 = [];
    for (
      let fsrBind19147 = props.startCol;
      fsrBind19147 <= props.endCol;
      fsrBind19147 += 1
    )
      fsrBind17948.push({
        sheet: {
          sheetName: props.sheetName,
        },
        row: fsrBind16681,
        col: fsrBind19147,
        absRow: false,
        absCol: false,
      });
    fsrBind14280.push(fsrBind17948);
  }
  return fsrBind14280;
}
export function Yft(fsrIn11554: any) {
  let fsrBind21946 = [];
  for (let fsrBind22925 of Jft(fsrIn11554))
    for (let fsrBind23097 of fsrBind22925) fsrBind21946.push(fsrBind23097);
  return fsrBind21946;
}
export function Xft(fsrIn8964: any, fsrIn8965: any) {
  if (fsrIn8964.tableName)
    return fsrIn8965.findTableByName(fsrIn8964.tableName);
  let fsrBind19509 = fsrIn8965.activeCellAddress;
  return fsrBind19509?.sheet?.sheetName
    ? fsrIn8965.findContainingTable(fsrBind19509)
    : null;
}
export function Zft(props: any) {
  let fsrBind14570 = parseA1Range(props.ref ?? "");
  if (!fsrBind14570) return null;
  let fsrBind14571 = tableHeaderRowCount(props),
    fsrBind14572 = tableTotalsRowCount(props),
    fsrBind14573 = fsrBind14570.bounds.startRow + 1,
    fsrBind14574 = fsrBind14570.bounds.endRow + 1;
  return {
    startRow: fsrBind14573,
    endRow: fsrBind14574,
    startCol: fsrBind14570.bounds.startCol + 1,
    endCol: fsrBind14570.bounds.endCol + 1,
    dataStartRow: fsrBind14573 + fsrBind14571,
    dataEndRow: fsrBind14574 - fsrBind14572,
    headerRowCount: fsrBind14571,
    totalsRowCount: fsrBind14572,
  };
}
export function Qft(fsrIn7555: any, fsrIn7556: any, fsrIn7557: any) {
  if (!fsrIn7555.columnName)
    return {
      startCol: fsrIn7557.startCol,
      endCol: fsrIn7557.endCol,
    };
  let fsrBind18036 = $ft(fsrIn7555.columnName, fsrIn7556, fsrIn7557);
  if (fsrBind18036 == null) return null;
  let fsrBind18037 = fsrIn7557.startCol + fsrBind18036;
  return {
    startCol: fsrBind18037,
    endCol: fsrBind18037,
  };
}
export function $ft(fsrIn7659: any, fsrIn7660: any, fsrIn7661: any) {
  let fsrBind18161 = fsrIn7659.trim().toUpperCase();
  if (!fsrBind18161) return null;
  let fsrBind18162 = fsrIn7661.endCol - fsrIn7661.startCol + 1;
  for (let fsrBind22333 = 0; fsrBind22333 < fsrBind18162; fsrBind22333 += 1)
    if (
      ept(fsrIn7660.columns?.[fsrBind22333]?.name, fsrBind22333) ===
      fsrBind18161
    )
      return fsrBind22333;
  return null;
}
export function ept(fsrIn11770: any, fsrIn11771: any) {
  let fsrBind22097 = fsrIn11770?.trim();
  return fsrBind22097 ? fsrBind22097.toUpperCase() : `COLUMN${fsrIn11771 + 1}`;
}
export function tpt(
  fsrIn2363: any,
  fsrIn2364: any,
  fsrIn2365: any,
  fsrIn2366: any,
) {
  switch (fsrIn2363.section) {
    case "All":
      return {
        startRow: fsrIn2365.startRow,
        endRow: fsrIn2365.endRow,
      };
    case "Data":
      return {
        startRow: fsrIn2365.dataStartRow,
        endRow: fsrIn2365.dataEndRow,
      };
    case "Headers":
      return fsrIn2365.headerRowCount === 0
        ? null
        : {
            startRow: fsrIn2365.startRow,
            endRow: fsrIn2365.startRow + fsrIn2365.headerRowCount - 1,
          };
    case "Totals":
      return fsrIn2365.totalsRowCount === 0
        ? null
        : {
            startRow: fsrIn2365.endRow - fsrIn2365.totalsRowCount + 1,
            endRow: fsrIn2365.endRow,
          };
    case "ThisRow": {
      let fsrBind17438 = fsrIn2366.activeCellAddress;
      return !fsrBind17438 ||
        fsrBind17438.sheet?.sheetName !== fsrIn2364.sheetName ||
        fsrBind17438.row < fsrIn2365.dataStartRow ||
        fsrBind17438.row > fsrIn2365.dataEndRow
        ? {
            code: "#VALUE!",
          }
        : {
            startRow: fsrBind17438.row,
            endRow: fsrBind17438.row,
          };
    }
  }
}
