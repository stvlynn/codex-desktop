// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-45: range bounds end/in-bounds helpers (legacy bounds-end helpers/fme).

export function boundsEndRow(fillIn14595: unknown) {
  return fillIn14595.startRow + fillIn14595.rows - 1;
}
export function boundsEndCol(fillIn14596: unknown) {
  return fillIn14596.startCol + fillIn14596.cols - 1;
}
export function isCellInBounds(
  fillIn11461: unknown,
  fillIn11462: unknown,
  fillIn11463: unknown,
) {
  return (
    fillIn11461 >= fillIn11463.startRow &&
    fillIn11461 <= boundsEndRow(fillIn11463) &&
    fillIn11462 >= fillIn11463.startCol &&
    fillIn11462 <= boundsEndCol(fillIn11463)
  );
}
