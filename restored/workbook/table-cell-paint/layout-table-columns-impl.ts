// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: table column layout (legacy $B / gTe / _Te).
// Stage-3 wave-104.

import { tcpH } from "./boundary-hooks";

void tcpH;

export function tableColumnCount(tcpIn9032: any) {
  let tcpBind19599 = 0;
  for (let tcpBind21028 of tcpIn9032.rows) {
    let tcpBind21708 = 0;
    for (let tcpBind22844 of tcpBind21028.cells)
      tcpH.isMissingSpan(tcpBind22844) ||
        (tcpBind21708 += tcpH.parseSpan(tcpBind22844.gridSpan));
    tcpBind19599 = Math.max(tcpBind19599, tcpBind21708);
  }
  return tcpBind19599;
}
export function clampColumnWidth(
  tcpIn11279: any,
  tcpIn11280: any,
  tcpIn11281: any,
) {
  let tcpBind21753 = 0;
  for (let tcpBind22904 = 0; tcpBind22904 < tcpIn11281; tcpBind22904 += 1)
    tcpBind21753 += tcpIn11279[tcpIn11280 + tcpBind22904] ?? 0;
  return tcpBind21753;
}
export function distributeColumnWidths(
  tcpIn3111: any,
  tcpIn3112: any,
  tcpIn3113: any,
) {
  let tcpBind11215 =
    tcpIn3111.columnWidths
      ?.map((tcpIn16056) => (tcpIn16056 > 0 ? tcpIn16056 : undefined))
      .filter((tcpIn16363) => tcpIn16363 !== undefined) ?? [];
  if (tcpBind11215.length === 0) {
    let tcpBind22677 = tcpIn3113.frameWidthEmu / tcpIn3112;
    tcpBind11215 = Array(tcpIn3112).fill(tcpBind22677);
  } else if (tcpBind11215.length < tcpIn3112) {
    let tcpBind21683 =
      tcpBind11215[tcpBind11215.length - 1] ??
      tcpIn3113.frameWidthEmu / tcpIn3112;
    tcpBind11215 = tcpBind11215.concat(
      Array(tcpIn3112 - tcpBind11215.length).fill(tcpBind21683),
    );
  } else
    tcpBind11215.length > tcpIn3112 &&
      (tcpBind11215 = tcpBind11215.slice(0, tcpIn3112));
  if (tcpIn3113.fitColumnWidthsToFrame === true) {
    let tcpBind20308 = clampColumnWidth(tcpBind11215, 0, tcpBind11215.length);
    if (tcpBind20308 > 0 && tcpIn3113.frameWidthEmu > 0) {
      let tcpBind22521 = tcpIn3113.frameWidthEmu / tcpBind20308;
      tcpBind11215 = tcpBind11215.map((item) => item * tcpBind22521);
    }
  }
  return tcpBind11215;
}
export function layoutTableColumns(tcpIn1322: any, tcpIn1323: any) {
  let tcpBind7035 = tableColumnCount(tcpIn1322);
  if (tcpBind7035 <= 0)
    return {
      columnCount: 0,
      columnWidthsEmu: [],
      rows: [],
      widthEmu: 0,
    };
  let tcpBind7036 = distributeColumnWidths(tcpIn1322, tcpBind7035, tcpIn1323),
    tcpBind7037 = [],
    tcpBind7038 = [];
  for (
    let tcpBind8739 = 0;
    tcpBind8739 < tcpIn1322.rows.length;
    tcpBind8739 += 1
  ) {
    let tcpBind9082 = tcpIn1322.rows[tcpBind8739];
    if (!tcpBind9082) continue;
    let tcpBind9083 = [],
      tcpBind9084 = 0;
    for (
      let tcpBind11040 = 0;
      tcpBind11040 < tcpBind9082.cells.length;
      tcpBind11040 += 1
    ) {
      let tcpBind11514 = tcpBind9082.cells[tcpBind11040];
      if (!tcpBind11514 || tcpH.isMissingSpan(tcpBind11514)) continue;
      for (; (tcpBind7037[tcpBind9084] ?? 0) > 0; ) tcpBind9084 += 1;
      let tcpBind11515 = tcpH.parseSpan(tcpBind11514.gridSpan),
        tcpBind11516 = tcpH.parseSpan(tcpBind11514.rowSpan);
      if (
        (tcpBind9083.push({
          cell: tcpBind11514,
          rowIndex: tcpBind8739,
          sourceCellIndex: tcpBind11040,
          columnIndex: tcpBind9084,
          columnSpan: tcpBind11515,
          rowSpan: tcpBind11516,
          xEmu: clampColumnWidth(tcpBind7036, 0, tcpBind9084),
          widthEmu: clampColumnWidth(tcpBind7036, tcpBind9084, tcpBind11515),
        }),
        tcpBind11516 > 1)
      )
        for (
          let tcpBind21573 = 0;
          tcpBind21573 < tcpBind11515;
          tcpBind21573 += 1
        ) {
          let tcpBind22459 = tcpBind9084 + tcpBind21573;
          tcpBind7037[tcpBind22459] = Math.max(
            tcpBind7037[tcpBind22459] ?? 0,
            tcpBind11516,
          );
        }
      tcpBind9084 += tcpBind11515;
    }
    tcpBind7038.push({
      rowIndex: tcpBind8739,
      cells: tcpBind9083,
    });
    for (
      let tcpBind22213 = 0;
      tcpBind22213 < tcpBind7037.length;
      tcpBind22213 += 1
    )
      (tcpBind7037[tcpBind22213] ?? 0) > 0 &&
        (tcpBind7037[tcpBind22213] = (tcpBind7037[tcpBind22213] ?? 0) - 1);
  }
  return {
    columnCount: tcpBind7035,
    columnWidthsEmu: tcpBind7036,
    rows: tcpBind7038,
    widthEmu: clampColumnWidth(tcpBind7036, 0, tcpBind7036.length),
  };
}

/** Legacy aliases. */
export const $B = layoutTableColumns;
export const gTe = tableColumnCount;
export const _Te = distributeColumnWidths;
export const workbookHelper633 = clampColumnWidth;
