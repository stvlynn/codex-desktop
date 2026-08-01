// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: normalize typeface + parse CSS scheme prefixes (legacy 822/oYe/sYe).
// Stage-3 wave-140.

/** Legacy lYe */
export const DOCX_COMPLEX_SCRIPT_TYPEFACE_PREFIX =
  "__docxComplexScriptTypeface:";
/** Legacy uYe */
export const DOCX_EAST_ASIA_TYPEFACE_PREFIX = "__docxEastAsiaTypeface:";

export function workbookHelper822(fstIn12022: any) {
  return fstIn12022?.normalize("NFKC").trim().replace(/\s+/g, " ") || undefined;
}
export function oYe(fstIn8427: any, fstIn8428: any) {
  if (!fstIn8427) return;
  let fstBind18932 = fstIn8428.toLowerCase();
  for (let fstBind21078 of fstIn8427.split(";")) {
    let fstBind21970 = fstBind21078.trim();
    if (fstBind21970.toLowerCase().startsWith(fstBind18932))
      return workbookHelper822(fstBind21970.slice(fstIn8428.length));
  }
}
export function sYe(fstIn10963: any) {
  return workbookHelper822(
    fstIn10963?.typeface ??
      fstIn10963?.name ??
      oYe(fstIn10963?.scheme, DOCX_COMPLEX_SCRIPT_TYPEFACE_PREFIX) ??
      oYe(fstIn10963?.scheme, DOCX_EAST_ASIA_TYPEFACE_PREFIX),
  );
}
