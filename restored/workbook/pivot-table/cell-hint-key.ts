// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-52: pivot cell-hint key helpers (legacy workbookHelper 24 / hre).

export function cellHintKey(pivotIn15285: any, pivotIn15286: any) {
  return `${pivotIn15285}:${pivotIn15286}`;
}
export function parseCellHintKey(pivotIn7148: any) {
  let pivotBind17497 = pivotIn7148.indexOf(":");
  if (pivotBind17497 < 0) return null;
  let pivotBind17498 = Number.parseInt(
      pivotIn7148.slice(0, pivotBind17497),
      10,
    ),
    pivotBind17499 = Number.parseInt(pivotIn7148.slice(pivotBind17497 + 1), 10);
  return !Number.isFinite(pivotBind17498) || !Number.isFinite(pivotBind17499)
    ? null
    : {
        row: pivotBind17498,
        col: pivotBind17499,
      };
}
