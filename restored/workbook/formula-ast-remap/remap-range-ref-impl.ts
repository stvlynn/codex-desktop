// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: formula range-ref remapper (legacy Bht/helper #1023).
// Stage-3 wave-106.

export function remapRangeRef(farIn2061: any, farIn2062: any, farIn2063: any) {
  switch (farIn2061.kind) {
    case "Cell": {
      let farBind22393 = shiftCellAddr(farIn2061.addr, farIn2062, farIn2063);
      return farBind22393
        ? {
            ...farIn2061,
            addr: farBind22393,
          }
        : null;
    }
    case "Range": {
      let farBind20288 = shiftCellAddr(farIn2061.start, farIn2062, farIn2063);
      if (!farBind20288) return null;
      let farBind20289 = shiftCellAddr(farIn2061.end, farIn2062, farIn2063);
      return farBind20289
        ? {
            ...farIn2061,
            start: farBind20288,
            end: farBind20289,
          }
        : null;
    }
    case "WholeColumn": {
      let farBind22448 = farIn2061.col + farIn2063;
      return farBind22448 < 1
        ? null
        : {
            ...farIn2061,
            col: farBind22448,
          };
    }
    case "ColumnRange": {
      let farBind20757 = farIn2061.startCol + farIn2063,
        farBind20758 = farIn2061.endCol + farIn2063;
      return farBind20757 < 1 || farBind20758 < 1
        ? null
        : {
            ...farIn2061,
            startCol: farBind20757,
            endCol: farBind20758,
          };
    }
    case "WholeRow": {
      let farBind22449 = farIn2061.row + farIn2062;
      return farBind22449 < 1
        ? null
        : {
            ...farIn2061,
            row: farBind22449,
          };
    }
    case "Spill": {
      let farBind22368 = remapRangeRef(farIn2061.base, farIn2062, farIn2063);
      return farBind22368
        ? {
            ...farIn2061,
            base: farBind22368,
          }
        : null;
    }
    case "Named":
      return farIn2061;
    default:
      return farIn2061;
  }
}
export function shiftCellAddr(farIn9411: any, farIn9412: any, farIn9413: any) {
  let farBind19944 = farIn9411.absRow
      ? farIn9411.row
      : farIn9411.row + farIn9412,
    farBind19945 = farIn9411.absCol ? farIn9411.col : farIn9411.col + farIn9413;
  return farBind19944 < 1 || farBind19945 < 1
    ? null
    : {
        ...farIn9411,
        row: farBind19944,
        col: farBind19945,
      };
}

/** Legacy aliases. */
export const Bht = remapRangeRef;
/** Compat alias for barrels. */
export const workbookHelper1023 = remapRangeRef;
