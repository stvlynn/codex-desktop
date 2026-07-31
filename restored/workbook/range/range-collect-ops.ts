// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-46: peeled Range helpers (collectRawValues, collectValues, collectDisplayFormulas, collectFormulasR1C1).

import type { RangeOpsHost } from "./types";
import { d } from "../spreadsheet-protobuf";
import { convertA1ToR1C1 } from "../formula-address";

export function collectRawValues(host: RangeOpsHost) {
  let rngBind11230 = host.getBounds();
  if (!rngBind11230 || !host.worksheet) return [];
  let rngBind11231 = host.worksheet,
    rngBind11232 = [];
  for (let rngBind13500 = 0; rngBind13500 < rngBind11230.rows; rngBind13500++) {
    let rngBind14151 = [];
    for (
      let rngBind15597 = 0;
      rngBind15597 < rngBind11230.cols;
      rngBind15597++
    ) {
      let rngBind16310 = rngBind11231.__getRawValue(
        rngBind11230.startRow + rngBind13500,
        rngBind11230.startCol + rngBind15597,
      );
      if (rngBind16310 !== undefined) {
        rngBind14151.push(rngBind16310);
        continue;
      }
      let rngBind16311 = rngBind11231.__getCell(
        rngBind11230.startRow + rngBind13500,
        rngBind11230.startCol + rngBind15597,
      );
      rngBind14151.push(host.coerceCellValue(rngBind16311));
    }
    rngBind11232.push(rngBind14151);
  }
  return rngBind11232;
}

export function collectValues(host: RangeOpsHost) {
  let rngBind11150 = host.getBounds();
  if (!rngBind11150 || !host.worksheet) return [];
  let rngBind11151 = host.worksheet,
    rngBind11152 = [];
  for (let rngBind13336 = 0; rngBind13336 < rngBind11150.rows; rngBind13336++) {
    let rngBind13941 = [];
    for (
      let rngBind15419 = 0;
      rngBind15419 < rngBind11150.cols;
      rngBind15419++
    ) {
      let rngBind16094 = rngBind11151.__getRawValue(
        rngBind11150.startRow + rngBind13336,
        rngBind11150.startCol + rngBind15419,
      );
      if (rngBind16094 !== undefined) {
        rngBind13941.push(host.normalizeScalar(rngBind16094));
        continue;
      }
      let rngBind16095 = rngBind11151.__getCell(
        rngBind11150.startRow + rngBind13336,
        rngBind11150.startCol + rngBind15419,
      );
      rngBind13941.push(host.coerceCellValue(rngBind16095));
    }
    rngBind11152.push(rngBind13941);
  }
  return rngBind11152;
}

export function collectDisplayFormulas(host: RangeOpsHost) {
  let rngBind13255 = host.getBounds();
  if (!rngBind13255 || !host.worksheet) return [];
  let rngBind13256 = host.worksheet,
    rngBind13257 = [];
  for (let rngBind16603 = 0; rngBind16603 < rngBind13255.rows; rngBind16603++) {
    let rngBind17444 = [];
    for (
      let rngBind19585 = 0;
      rngBind19585 < rngBind13255.cols;
      rngBind19585++
    ) {
      let rngBind20593 = rngBind13256.__getCell(
        rngBind13255.startRow + rngBind16603,
        rngBind13255.startCol + rngBind19585,
      );
      rngBind17444.push(
        rngBind20593?.formula ? `=${rngBind20593.formula}` : "",
      );
    }
    rngBind13257.push(rngBind17444);
  }
  return rngBind13257;
}

export function collectFormulasR1C1(host: RangeOpsHost) {
  let rngBind10501 = host.getBounds(),
    rngBind10502 = host.worksheet;
  !rngBind10501 ||
    !rngBind10502 ||
    rngBind10502.workbook.runLocalCollabTransaction(() => {
      let rngBind12259 =
        rngBind10502.workbook.__getOrCreateStyleIdForStyleIndex(0);
      for (
        let rngBind13990 = 0;
        rngBind13990 < rngBind10501.rows;
        rngBind13990 += 1
      )
        for (
          let rngBind15064 = 0;
          rngBind15064 < rngBind10501.cols;
          rngBind15064 += 1
        ) {
          let rngBind15788 = rngBind10501.startRow + rngBind13990,
            rngBind15789 = rngBind10501.startCol + rngBind15064,
            rngBind15790 = rngBind10502.__getCell(rngBind15788, rngBind15789);
          rngBind15790 &&
            ((rngBind15790.styleIndex = 0),
            rngBind10502.__setLogicalStyleIndex(rngBind15788, rngBind15789, 0),
            rngBind10502.__setCellStyleRef(
              rngBind15788,
              rngBind15789,
              rngBind12259,
            ));
        }
    });
}
