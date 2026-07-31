// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: rebuild cell precedent/dependent edges (legacy UXe/WXe/GXe).
// Stage-3 wave-107.

export function expandFormulaRefs(sccIn3149: any) {
  let sccBind11267 = [],
    sccBind11268 = (sccIn3532) => {
      if (sccIn3532)
        switch (sccIn3532.kind) {
          case "RangeRef":
            sccBind11267.push(sccIn3532.ref);
            break;
          case "UnaryOp":
            sccBind11268(sccIn3532.expr);
            break;
          case "BinaryOp":
            sccBind11268(sccIn3532.left);
            sccBind11268(sccIn3532.right);
            break;
          case "FunctionCall":
            for (let sccBind23095 of sccIn3532.args)
              sccBind11268(sccBind23095);
            break;
          case "ArrayLiteral":
            for (let sccBind22934 of sccIn3532.elements)
              for (let sccBind23106 of sccBind22934)
                sccBind11268(sccBind23106);
            break;
          default:
            break;
        }
    };
  return (sccBind11268(sccIn3149), sccBind11267);
}
export function updateCellPrecedents(sccIn1950: any, sccIn1951: any, sccIn1952: any, sccIn1953: any, sccIn1954: any, ) {
  let sccBind8683 = sheetKeyOfAddress(sccIn1951),
    sccBind8684 = sccIn1950.precedents.get(sccIn1951);
  if (sccBind8684) {
    for (let sccBind21040 of sccBind8684) {
      let sccBind21578 =
        sccIn1950.dependents.get(sccBind21040);
      sccBind21578 &&
        (sccBind21578.delete(sccIn1951),
        sccBind21578.size === 0 &&
          sccIn1950.dependents.delete(sccBind21040));
    }
    sccIn1950.precedents.delete(sccIn1951);
  }
  let sccBind8685 = new Set();
  for (let sccBind13066 of expandFormulaRefs(sccIn1952)) {
    if (
      sccBind13066.kind === "WholeColumn" &&
      sccIn1953.columnDependencyKey
    ) {
      let sccBind21942 =
        sccBind13066.sheet?.sheetName ?? sccBind8683;
      sccBind21942 &&
        sccBind8685.add(
          sccIn1953.columnDependencyKey(
            sccBind21942,
            sccBind13066.col,
          ),
        );
    } else if (
      sccBind13066.kind === "WholeRow" &&
      sccIn1953.rowDependencyKey
    ) {
      let sccBind22030 =
        sccBind13066.sheet?.sheetName ?? sccBind8683;
      sccBind22030 &&
        sccBind8685.add(
          sccIn1953.rowDependencyKey(
            sccBind22030,
            sccBind13066.row,
          ),
        );
    }
    let sccBind13466 = sccIn1953.expandRange(
      sccBind13066,
      sccIn1954,
    );
    for (let sccBind22384 of sccBind13466) {
      let sccBind22653 =
        sccIn1953.cellAddressToKey(sccBind22384);
      sccBind22653 && sccBind8685.add(sccBind22653);
    }
  }
  sccIn1950.precedents.set(sccIn1951, sccBind8685);
  for (let sccBind21243 of sccBind8685) {
    let sccBind21768 =
      sccIn1950.dependents.get(sccBind21243);
    sccBind21768 ||
      ((sccBind21768 = new Set()),
      sccIn1950.dependents.set(
        sccBind21243,
        sccBind21768,
      ));
    sccBind21768.add(sccIn1951);
  }
}
export function sheetKeyOfAddress(props: any) {
  let sccBind22303 = props.indexOf("!");
  return sccBind22303 === -1
    ? ""
    : props.slice(0, sccBind22303);
}

/** Legacy aliases. */
export const UXe = expandFormulaRefs;
export const WXe = updateCellPrecedents;
export const GXe = sheetKeyOfAddress;
