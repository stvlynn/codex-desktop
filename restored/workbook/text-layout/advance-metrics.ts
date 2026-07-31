// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Stage-3 wave-18: glyph-advance array helpers (legacy o_/bce/xce).

export function buildRelativeAdvances(textIn9375: unknown, textIn9376: unknown, textIn9377: unknown) {
  let workbookBinding19918 = textIn9377 - textIn9376,
    workbookBinding19919 = new Float32Array(workbookBinding19918 + 1),
    workbookBinding19920 = advanceAt(textIn9375, textIn9376);
  for (let workbookBinding22855 = 0; workbookBinding22855 <= workbookBinding19918; workbookBinding22855++) workbookBinding19919[workbookBinding22855] = advanceAt(textIn9375, textIn9376 + workbookBinding22855) - workbookBinding19920;
  return workbookBinding19919;
}
export function findMaxAdvanceIndex(textIn7437: unknown, textIn7438: unknown, textIn7439: unknown) {
  let workbookBinding17909 = textIn7438 + 1,
    workbookBinding17910 = textIn7437.length - 1,
    workbookBinding17911 = textIn7438,
    workbookBinding17912 = advanceAt(textIn7437, textIn7438);
  for (; workbookBinding17909 <= workbookBinding17910;) {
    let workbookBinding21676 = Math.floor((workbookBinding17909 + workbookBinding17910) / 2);
    advanceAt(textIn7437, workbookBinding21676) - workbookBinding17912 <= textIn7439 ? (workbookBinding17911 = workbookBinding21676, workbookBinding17909 = workbookBinding21676 + 1) : workbookBinding17910 = workbookBinding21676 - 1;
  }
  return workbookBinding17911;
}
export function advanceAt(textIn9275: unknown, textIn9276: unknown) {
  return textIn9275.length === 0 ? 0 : textIn9276 <= 0 ? textIn9275[0] ?? 0 : textIn9276 >= textIn9275.length ? textIn9275[textIn9275.length - 1] ?? 0 : textIn9275[textIn9276] ?? 0;
}
