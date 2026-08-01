// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: coerce chart cell to finite number (legacy workbookHelper550).
// Stage-3 wave-137.

export function workbookHelper550(csvIn7482: any) {
  if (typeof csvIn7482 == "number" && Number.isFinite(csvIn7482))
    return csvIn7482;
  if (typeof csvIn7482 == "string") {
    let csvBind21195 = csvIn7482.trim();
    if (csvBind21195.length === 0) return;
    let csvBind21196 = Number(csvBind21195);
    if (Number.isFinite(csvBind21196)) return csvBind21196;
  }
}
