// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: push-into-map + AABB overlap (legacy workbookHelper379/oye).
// Stage-3 wave-141.

export function workbookHelper379(
  mriIn12603: any,
  mriIn12604: any,
  mriIn12605: any,
) {
  let mriBind22455 = mriIn12603.get(mriIn12604);
  mriBind22455
    ? mriBind22455.push(mriIn12605)
    : mriIn12603.set(mriIn12604, [mriIn12605]);
}
export function oye(mriIn9818: any, mriIn9819: any) {
  return (
    mriIn9818.rowMin <= mriIn9819.rowMax &&
    mriIn9818.rowMax >= mriIn9819.rowMin &&
    mriIn9818.colMin <= mriIn9819.colMax &&
    mriIn9818.colMax >= mriIn9819.colMin
  );
}
