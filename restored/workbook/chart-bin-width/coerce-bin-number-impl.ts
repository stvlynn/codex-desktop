// Restored from ref/webview/assets/workbook-C49Dgk1_.js
// Semantic implementation: coerce bin number (legacy helper #554).
// Stage-3 wave-133.

export function coerceBinNumber(cbwIn7483: any) {
  if (typeof cbwIn7483 == "number" && Number.isFinite(cbwIn7483))
    return cbwIn7483;
  if (typeof cbwIn7483 == "string") {
    let cbwBind21197 = cbwIn7483.trim();
    if (cbwBind21197.length === 0) return;
    let cbwBind21198 = Number(cbwBind21197);
    if (Number.isFinite(cbwBind21198)) return cbwBind21198;
  }
}

