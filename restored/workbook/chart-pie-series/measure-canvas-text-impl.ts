// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: measure canvas text width (legacy 568).
// Stage-3 wave-139.

export function workbookHelper568(
  cpsIn10892: any,
  cpsIn10893: any,
  cpsIn10894: any,
) {
  cpsIn10892.save();
  cpsIn10892.font = cpsIn10893;
  let cpsBind21405 = cpsIn10892.measureText(cpsIn10894).width;
  return (cpsIn10892.restore(), cpsBind21405);
}
